/**
 * dm_panel.js — DM Panel UI Controller
 * Phase 4 — NYC_RP / TOKYO_RP
 *
 * Depends on:
 *   - dm_engine.js  (DMEngine, DMEvents)
 *   - window.DM_CONFIG (set in the HTML before this script loads)
 *   - RP client globals: S, DB, RP, RT, OM, CM, toast
 *
 * Provides:
 *   DMPanel — full admin panel for NPC, world events, dispatch, context
 */
'use strict';

const DMPanel = {
  _pendingNpcId:   null,  // which NPC is being triggered
  _queueItems:     [],    // { type:'event'|'dispatch', data }
  _dmReady:        false,

  /* ─ Open / Close ─────────────────────────────────── */
  async open() {
    if (!this._dmReady) await this._initDM();
    // Update DM config with current room
    window.DM_CONFIG.activeRoomId = S.roomId;
    window.DMEngine?.setRoomId(S.roomId);
    window.DMEngine?.setOperator(S.user?.id || 'admin');
    // Switch view
    document.getElementById('view-rp').classList.remove('active');
    document.getElementById('view-admin').classList.remove('active');
    document.getElementById('view-dm').style.display = 'flex';
    document.getElementById('view-dm').classList.add('active');
    this._refreshNPCs();
    this._refreshQueue();
    this._refreshContext();
    this._populateRoomSelects();
    this._populateOrgSelect();
  },

  close() {
    document.getElementById('view-dm').classList.remove('active');
    document.getElementById('view-dm').style.display = 'none';
    document.getElementById('view-rp').classList.add('active');
  },

  async _initDM() {
    this._setStatus('thinking', 'Başlatılıyor…');
    try {
      await window.DMEngine.start();
      this._dmReady = true;
      this._setStatus('active', 'Hazır');
      // Hook: route new messages to DM reader
      DMEvents.on('context_updated', (d) => {
        this._refreshContext();
        toast(`DM bağlamı güncellendi (${d.reason})`, 'success');
      });
    } catch(e) {
      this._setStatus('error', 'Hata');
      toast('DM başlatılamadı: ' + e.message, 'error');
    }
  },

  /* ─ NPC List ─────────────────────────────────────── */
  async _refreshNPCs() {
    const list = document.getElementById('dm-npc-list');
    list.innerHTML = '<div class="empty"><i class="fas fa-spinner fa-spin"></i><p>Yükleniyor…</p></div>';
    try {
      const npcs = await window.DMEngine.npcList();
      if (!npcs.length) {
        list.innerHTML = '<div class="empty"><i class="fas fa-user-secret"></i><p>NPC bulunamadı<br><small style="font-size:10px;color:var(--t3)">NYC_DB\'de playerId boş karakterler NPC\'dir</small></p></div>';
        return;
      }
      list.innerHTML = '';
      npcs.forEach(npc => {
        const org = S.oi.get((npc.organizations || [])[0] || npc.organization);
        const ini = (npc.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const el = document.createElement('div');
        el.className = 'npc-item';
        el.innerHTML = `
          <div class="npc-ava">
            ${npc.image ? `<img src="${npc.image}" onerror="this.parentNode.innerHTML='${ini}'" loading="lazy">` : ini}
          </div>
          <div class="npc-inf">
            <div class="npc-nm">${npc.name}${npc.alias ? ` <span style="color:var(--t3);font-size:11px">"${npc.alias}"</span>` : ''}</div>
            <div class="npc-sub">${org ? org.name : 'Affiliasyonsuz'} · ${npc.status || 'Active'}</div>
          </div>
          <button class="npc-play-btn" onclick="DMPanel.openTrigger('${npc.id}','${(npc.name||'').replace(/'/g,"\\'")}')">
            <i class="fas fa-play"></i> Oynat
          </button>`;
        list.appendChild(el);
      });
    } catch(e) {
      list.innerHTML = `<div class="empty"><i class="fas fa-exclamation-triangle"></i><p style="color:var(--rd)">${e.message}</p></div>`;
    }
  },

  /* ─ NPC Trigger ──────────────────────────────────── */
  openTrigger(charId, charName) {
    this._pendingNpcId = charId;
    document.getElementById('npc-trigger-title').textContent = `${charName} Oynat`;
    document.getElementById('npc-trigger-instruction').value = '';
    this._populateRoomSelects();
    OM('m-npc-trigger');
    setTimeout(() => document.getElementById('npc-trigger-instruction').focus(), 150);
  },

  async triggerNPC() {
    if (!this._pendingNpcId) return;
    const roomId    = document.getElementById('npc-trigger-room').value;
    const instr     = document.getElementById('npc-trigger-instruction').value.trim();
    const confirmBtn = document.getElementById('npc-trigger-confirm');
    if (!roomId) { toast('Oda seç', 'warn'); return; }
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Üretiliyor…';
    try {
      const result = await window.DMEngine.npcTrigger(
        this._pendingNpcId, roomId, instr, S.user?.id || 'admin'
      );
      CM('m-npc-trigger');
      toast(`${result.char.name} sahnede`, 'success');
      // Switch to the room where NPC spoke
      if (roomId != S.roomId) {
        await RP.switchRoom(roomId);
      }
    } catch(e) {
      toast('NPC hatası: ' + e.message, 'error');
    } finally {
      confirmBtn.disabled = false;
      confirmBtn.innerHTML = '<i class="fas fa-play"></i> Oynat';
    }
  },

  /* ─ Create NPC ───────────────────────────────────── */
  openCreateNPC() {
    document.getElementById('npc-create-desc').value = '';
    this._populateRoomSelects('npc-create-room');
    OM('m-create-npc');
    setTimeout(() => document.getElementById('npc-create-desc').focus(), 150);
  },

  async createNPC() {
    const desc   = document.getElementById('npc-create-desc').value.trim();
    const roomId = document.getElementById('npc-create-room').value;
    if (!desc)   { toast('Açıklama gerekli', 'warn');  return; }
    if (!roomId) { toast('Oda seç', 'warn'); return; }
    const btn = document.querySelector('#m-create-npc .btn-p');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yaratılıyor…';
    try {
      const result = await window.DMEngine.npcCreate(desc, roomId, S.user?.id || 'admin');
      CM('m-create-npc');
      toast(`${result.char.name} sahnede!`, 'success');
      if (roomId != S.roomId) await RP.switchRoom(roomId);
      // Refresh NPC list (new char was saved)
      setTimeout(() => this._refreshNPCs(), 1500);
    } catch(e) {
      toast('Yaratma hatası: ' + e.message, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-magic"></i> Yarat & Sahneye Çıkar';
    }
  },

  /* ─ World Event ──────────────────────────────────── */
  openGenerateEvent() {
    document.getElementById('event-instruction').value = '';
    OM('m-gen-event');
    setTimeout(() => document.getElementById('event-instruction').focus(), 150);
  },

  async generateEvent() {
    const type  = document.getElementById('event-type-sel').value;
    const instr = document.getElementById('event-instruction').value.trim();
    const btn   = document.querySelector('#m-gen-event .btn');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Üretiliyor…';
    try {
      const ev = await window.DMEngine.generateEvent(type, instr, S.user?.id || 'admin');
      CM('m-gen-event');
      toast('Dünya olayı üretildi — onay kuyruğunda', 'success');
      this._queueItems.unshift({ type: 'event', data: ev });
      this._refreshQueue();
    } catch(e) {
      toast('Hata: ' + e.message, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-globe"></i> Üret (Admin Onayı Gerekir)';
    }
  },

  /* ─ Dispatch ─────────────────────────────────────── */
  openGenerateDispatch() {
    document.getElementById('dispatch-instruction').value = '';
    this._populateOrgSelect();
    OM('m-gen-dispatch');
    setTimeout(() => document.getElementById('dispatch-instruction').focus(), 150);
  },

  async generateDispatch() {
    const orgId  = document.getElementById('dispatch-org-sel').value;
    const type   = document.getElementById('dispatch-type-sel').value;
    const instr  = document.getElementById('dispatch-instruction').value.trim();
    const btn    = document.querySelector('#m-gen-dispatch .btn');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Üretiliyor…';
    try {
      const dsp = await window.DMEngine.generateDispatch(orgId, type, '', instr, S.user?.id || 'admin');
      CM('m-gen-dispatch');
      toast('Dispatch üretildi — onay kuyruğunda', 'success');
      this._queueItems.unshift({ type: 'dispatch', data: dsp });
      this._refreshQueue();
    } catch(e) {
      toast('Hata: ' + e.message, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-radio"></i> Üret (Admin Onayı Gerekir)';
    }
  },

  /* ─ Queue ────────────────────────────────────────── */
  async _refreshQueue() {
    // Also pull from DB
    try {
      const [evRows, dqRows] = await Promise.all([
        DB.get('dm_world_events?status=eq.pending&order=created_at.desc&limit=20&select=id,title,event_type,severity,description,consequences,created_at').catch(() => []),
        DB.get('dm_dispatch_queue?status=eq.pending&order=created_at.desc&limit=20&select=id,title,call_code,org_name,message,severity,created_at').catch(() => []),
      ]);
      this._queueItems = [
        ...evRows.map(d => ({ type: 'event',    data: d })),
        ...dqRows.map(d => ({ type: 'dispatch', data: d })),
      ].sort((a, b) => new Date(b.data.created_at) - new Date(a.data.created_at));
    } catch(e) {}

    const list = document.getElementById('dm-queue-list');
    document.getElementById('dm-queue-count').textContent = this._queueItems.length + ' bekliyor';

    if (!this._queueItems.length) {
      list.innerHTML = '<div class="empty"><i class="fas fa-inbox"></i><p>Kuyruk boş</p></div>';
      return;
    }

    list.innerHTML = '';
    this._queueItems.forEach(item => {
      const d = item.data;
      const sevColor = { low:'var(--gn)', medium:'var(--am)', high:'var(--rd)', critical:'#ff7070', omega:'var(--om)' }[d.severity] || 'var(--t2)';
      const el = document.createElement('div');
      el.className = 'dm-queue-item';
      el.innerHTML = `
        <div class="dm-qi-head">
          <span class="dm-qi-type ${item.type}">${item.type === 'event' ? '🌍 Olay' : '📡 Dispatch'}</span>
          <span class="dm-qi-title">${item.type === 'dispatch' && d.call_code ? `[${d.call_code}] ` : ''}${d.title}</span>
          <span class="dm-qi-sev" style="color:${sevColor};border:1px solid ${sevColor}44;background:${sevColor}15">${d.severity}</span>
        </div>
        <div class="dm-qi-body">${((item.type === 'event' ? d.description : d.message) || '').slice(0, 180)}</div>
        <div class="dm-qi-actions">
          <button class="dm-qi-btn approve" onclick="DMPanel._approveItem('${item.type}','${d.id}',this)">
            <i class="fas fa-check"></i> Onayla & Yayınla
          </button>
          <button class="dm-qi-btn reject" onclick="DMPanel._rejectItem('${item.type}','${d.id}',this)">Reddet</button>
        </div>`;
      list.appendChild(el);
    });
  },

  async _approveItem(type, id, btn) {
    btn.disabled = true; btn.textContent = '⏳';
    try {
      if (type === 'event') {
        await window.DMEngine.approveEvent(id, S.user?.id || 'admin');
        toast('Dünya olayı onaylandı ve ateşlendi!', 'success');
      } else {
        // Dispatch → broadcast to live room
        const liveRoom = S.rooms.find(r => r.slug === 'live') || S.rooms[0];
        if (!liveRoom) throw new Error('Live oda bulunamadı');
        await window.DMEngine.approveDispatch(id, liveRoom.id, S.user?.id || 'admin');
        toast('Dispatch yayınlandı → Live oda', 'success');
      }
      this._queueItems = this._queueItems.filter(i => i.data.id != id);
      this._refreshQueue();
    } catch(e) {
      toast('Hata: ' + e.message, 'error');
      btn.disabled = false; btn.textContent = '✓ Onayla & Yayınla';
    }
  },

  async _rejectItem(type, id, btn) {
    btn.disabled = true;
    try {
      if (type === 'event') await window.DMEngine.rejectEvent(id, S.user?.id, '');
      else await window.DMEngine.rejectDispatch(id, S.user?.id, '');
      this._queueItems = this._queueItems.filter(i => i.data.id != id);
      this._refreshQueue();
      toast('Reddedildi', 'warn');
    } catch(e) {
      toast('Hata: ' + e.message, 'error');
      btn.disabled = false;
    }
  },

  /* ─ Context ──────────────────────────────────────── */
  _refreshContext() {
    const list = document.getElementById('dm-ctx-list');
    const ctx  = window.DMEngine?.getContext?.() || '';
    const entries = ctx.split('\n\n---\n\n').filter(Boolean);

    document.getElementById('dm-ctx-count').textContent = `Context: ${entries.length} giriş`;

    if (!entries.length) {
      list.innerHTML = '<div class="empty"><i class="fas fa-brain"></i><p>Henüz okunmadı</p></div>';
      return;
    }
    list.innerHTML = '';
    entries.forEach(entry => {
      const el = document.createElement('div');
      el.className = 'dm-ctx-entry';
      // Extract timestamp from header
      const timeMatch = entry.match(/\[Context \d+ — (.+?)\]/);
      const time = timeMatch ? timeMatch[1] : '';
      const body = entry.replace(/\[Context \d+ — .+?\]\n/, '');
      el.innerHTML = `<div class="dm-ctx-time">${time}</div><div class="dm-ctx-text">${body}</div>`;
      list.appendChild(el);
    });
  },

  async readNow() {
    const btn = document.getElementById('dm-read-btn');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Okunuyor…';
    try {
      await window.DMEngine.readNow(S.roomId);
      // Context refresh happens via DMEvents listener
    } catch(e) {
      toast('Okuma hatası: ' + e.message, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-book-open"></i> Şimdi Oku';
    }
  },

  clearContext() {
    if (!confirm('Bağlamı temizle?')) return;
    // Clear local context window
    if (window.DMEngine) {
      window.DM_CONFIG.activeRoomId = S.roomId;
      // Patch dm_session context
      DB.patch('dm_session', 'id=eq.main', {
        context_window: [],
        context_msg_count: 0,
        updated_at: new Date().toISOString(),
      }).catch(() => {});
    }
    this._refreshContext();
    toast('Bağlam temizlendi', 'warn');
  },

  /* ─ Utils ────────────────────────────────────────── */
  _populateRoomSelects(targetId = 'npc-trigger-room') {
    const ids = [targetId, 'npc-create-room'];
    ids.forEach(id => {
      const sel = document.getElementById(id);
      if (!sel) return;
      sel.innerHTML = '';
      S.rooms.forEach(r => {
        const o = document.createElement('option');
        o.value = r.id;
        o.textContent = '#' + r.name;
        if (r.id == S.roomId) o.selected = true;
        sel.appendChild(o);
      });
    });
  },

  _populateOrgSelect() {
    const sel = document.getElementById('dispatch-org-sel');
    if (!sel) return;
    sel.innerHTML = '<option value="">— Genel / Sistem —</option>';
    S.orgs.forEach(o => {
      const opt = document.createElement('option');
      opt.value = o.id;
      opt.textContent = o.name;
      sel.appendChild(opt);
    });
  },

  _setStatus(cls, txt) {
    const dot = document.getElementById('dm-sdot');
    if (!dot) return;
    dot.className = 'sdot ' + cls;
    const st = document.getElementById('dm-stxt');
    if (st) {
      st.textContent = txt;
      st.style.color = { active: 'var(--gn)', thinking: 'var(--am)', error: 'var(--rd)' }[cls] || 'var(--t2)';
    }
  },
};

/* ════════════════════════════════════════════════════════
   WIRE DM INTO RP CLIENT
════════════════════════════════════════════════════════ */

// 1. Sidebar: Add DM button above AI pill
document.addEventListener('DOMContentLoaded', () => {
  // Inject DM pill into sidebar footer (before ai-pill)
  const sbFooter = document.getElementById('sb-footer');
  const aiPill   = document.getElementById('ai-pill');
  if (sbFooter && aiPill) {
    const dmPill = document.createElement('div');
    dmPill.id = 'dm-pill';
    dmPill.className = 'ai-pill';
    dmPill.style.cssText = 'color:var(--pu);border-color:rgba(155,111,212,.3)';
    dmPill.innerHTML = '<div class="ai-dot" style="background:var(--pu)"></div><span>DM Panel</span>';
    dmPill.onclick = () => DMPanel.open();
    sbFooter.insertBefore(dmPill, aiPill);
  }
});

// 2. Route new RP messages to DM reader counter
const _origHandleMsg = RT._handleMsg.bind(RT);
RT._handleMsg = function(rec) {
  _origHandleMsg(rec);
  // Only count player messages (not DM system messages)
  if (rec.sent_by_user && rec.sent_by_user.startsWith('DM:')) return;
  if (window.DMEngine) window.DMEngine.onMessage();
  // Update active room in DM config
  window.DM_CONFIG.activeRoomId = S.roomId;
};

// 3. Update DM room when user switches rooms
const _origSwitchRoom = RP.switchRoom.bind(RP);
RP.switchRoom = async function(id) {
  await _origSwitchRoom(id);
  window.DM_CONFIG.activeRoomId = id;
  if (window.DMEngine) window.DMEngine.setRoomId(id);
};

/* ════════════════════════════════════════════════════════
   WIRE DM INTO RP CLIENT
════════════════════════════════════════════════════════ */

