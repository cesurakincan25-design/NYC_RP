/**
 * rp_features.js — RP Client Feature Extensions
 * ═══════════════════════════════════════════════════════
 * Extends nyc_rp.html / tokyo_rp.html with:
 *
 *  1. CharPicker  — search + filter + memory (org, player, status)
 *  2. TagSystem   — vehicle/org/equipment tagging on tags bar
 *  3. CharCard    — popup profile card + right-click context menu
 *  4. Reactions   — Discord-style, multi-user, hover tooltip, custom emoji
 *  5. ReadReceipts — Messenger-style seen avatars per message
 *
 * Dependencies: S, DB, RP, UI, RT, OM, CM, toast (from nyc_rp.html)
 * Load AFTER nyc_rp.html's <script> block.
 */
'use strict';

/* ════════════════════════════════════════════════════════
   1. CHAR PICKER — search, filter, memory
════════════════════════════════════════════════════════ */
const CharPicker = {
  // Persistent filter state (survives modal close)
  filters: JSON.parse(localStorage.getItem('rp_picker_filters') || 'null') || {
    search: '',
    org:    'all',
    player: 'all',
    status: 'active',  // 'active'|'all'
  },

  _saveFilters() {
    localStorage.setItem('rp_picker_filters', JSON.stringify(this.filters));
  },

  open() {
    this._buildModal();
    OM('m-char-picker');
  },

  _buildModal() {
    const modal = document.getElementById('m-char-picker');
    if (!modal) return;

    // ── Header with filters ──────────────────────────────
    const existingFilter = modal.querySelector('.cp-filter-bar');
    if (!existingFilter) {
      const filterBar = document.createElement('div');
      filterBar.className = 'cp-filter-bar';
      filterBar.innerHTML = `
        <div class="cp-search-wrap">
          <i class="fas fa-search cp-search-icon"></i>
          <input id="cp-search" class="cp-search" type="text" placeholder="İsim, alias, org ara…" autocomplete="off">
          <button id="cp-search-clear" class="cp-search-clear" style="display:none">✕</button>
        </div>
        <div class="cp-filter-row">
          <select id="cp-org-filter" class="cp-select">
            <option value="all">Tüm Orglar</option>
          </select>
          <select id="cp-player-filter" class="cp-select">
            <option value="all">Tüm Oyuncular</option>
            <option value="npc">NPC</option>
          </select>
          <select id="cp-status-filter" class="cp-select">
            <option value="active">Aktif</option>
            <option value="all">Tümü</option>
          </select>
        </div>`;
      const mbdy = modal.querySelector('.mbdy');
      mbdy.insertBefore(filterBar, mbdy.firstChild);

      // Populate org filter
      const orgSel = filterBar.querySelector('#cp-org-filter');
      S.orgs.forEach(o => {
        const opt = document.createElement('option');
        opt.value = o.id; opt.textContent = o.name;
        orgSel.appendChild(opt);
      });

      // Populate player filter
      const playerSel = filterBar.querySelector('#cp-player-filter');
      (window.DM_CONFIG?.players || USERS || []).forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id; opt.textContent = p.name;
        playerSel.appendChild(opt);
      });

      // Restore saved filters
      filterBar.querySelector('#cp-search').value      = this.filters.search;
      filterBar.querySelector('#cp-org-filter').value  = this.filters.org;
      filterBar.querySelector('#cp-player-filter').value = this.filters.player;
      filterBar.querySelector('#cp-status-filter').value = this.filters.status;

      // Events
      filterBar.querySelector('#cp-search').addEventListener('input', e => {
        this.filters.search = e.target.value.trim().toLowerCase();
        filterBar.querySelector('#cp-search-clear').style.display = this.filters.search ? '' : 'none';
        this._saveFilters(); this._renderGrid();
      });
      filterBar.querySelector('#cp-search-clear').addEventListener('click', () => {
        filterBar.querySelector('#cp-search').value = '';
        this.filters.search = '';
        filterBar.querySelector('#cp-search-clear').style.display = 'none';
        this._saveFilters(); this._renderGrid();
      });
      ['#cp-org-filter','#cp-player-filter','#cp-status-filter'].forEach(sel => {
        filterBar.querySelector(sel).addEventListener('change', e => {
          const key = sel === '#cp-org-filter' ? 'org' : sel === '#cp-player-filter' ? 'player' : 'status';
          this.filters[key] = e.target.value;
          this._saveFilters(); this._renderGrid();
        });
      });
    } else {
      // Restore filter UI state
      modal.querySelector('#cp-search').value         = this.filters.search;
      modal.querySelector('#cp-org-filter').value     = this.filters.org;
      modal.querySelector('#cp-player-filter').value  = this.filters.player;
      modal.querySelector('#cp-status-filter').value  = this.filters.status;
    }

    // Clear scene btn
    const footer = document.getElementById('cpf');
    if (!footer.querySelector('#cpf-clear')) {
      const cb = document.createElement('button');
      cb.id = 'cpf-clear'; cb.className = 'btn btn-g'; cb.style.marginRight = 'auto';
      cb.innerHTML = '<i class="fas fa-broom"></i> Temizle';
      cb.onclick = () => { S.activeChars=[]; S.activeChar=null; UI.renderTags(); CM('m-char-picker'); };
      footer.insertBefore(cb, footer.firstChild);
    }

    // Ensure result count label exists
    const mbdy = modal.querySelector('.mbdy');
    if (!mbdy.querySelector('.cp-result-count')) {
      const lbl = document.createElement('div');
      lbl.className = 'cp-result-count';
      mbdy.insertBefore(lbl, mbdy.querySelector('#cpg'));
    }

    this._renderGrid();
    // Focus search
    setTimeout(() => modal.querySelector('#cp-search')?.focus(), 80);
  },

  _filtered() {
    const { search, org, player, status } = this.filters;
    return S.chars.filter(c => {
      // Status filter
      if (status === 'active' && c.status === 'Deceased') return false;
      // Org filter
      if (org !== 'all') {
        const charOrgs = c.organizations || (c.organization ? [c.organization] : []);
        if (!charOrgs.includes(org)) return false;
      }
      // Player filter
      if (player === 'npc') { if (c.playerId && c.playerId !== '') return false; }
      else if (player !== 'all') { if ((c.playerId || '') !== player) return false; }
      // Search
      if (search) {
        const hay = [c.name, c.alias, c.story, c.id,
          ...(c.organizations||[]).map(oid => S.oi.get(oid)?.name||'')
        ].join(' ').toLowerCase();
        if (!hay.includes(search)) return false;
      }
      return true;
    });
  },

  _renderGrid() {
    const g = document.getElementById('cpg');
    if (!g) return;
    g.innerHTML = '';
    const results = this._filtered();

    // Result count
    const countEl = document.querySelector('.cp-result-count');
    if (countEl) countEl.textContent = `${results.length} karakter`;

    if (!results.length) {
      g.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:24px;font-family:var(--mono);font-size:11px;color:var(--t3)">Sonuç yok</div>';
      return;
    }

    results.forEach(c => {
      const inS  = S.activeChars.some(x => x.id === c.id);
      const isP  = S.activeChar?.id === c.id;
      const org  = RP._org((c.organizations||[])[0] || c.organization);
      const playerUser = USERS?.find(u => u.id === c.playerId);
      const ini  = (c.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      const orgColor = org?.color || 'var(--t3)';

      const el = document.createElement('div');
      el.className = 'cpi-item' + (inS ? ' active' : '');
      el.innerHTML = `
        <div class="cpa" style="${inS ? `border:2px solid ${orgColor};box-shadow:0 0 8px ${orgColor}44` : ''}">
          ${c.image ? `<img src="${c.image}" onerror="this.parentNode.innerHTML='${ini}'" loading="lazy">` : ini}
        </div>
        <div class="cpin" style="flex:1;min-width:0">
          <div class="cpnm">
            ${c.name}
            ${isP ? '<span style="font-size:9px;color:var(--ac);font-family:var(--mono)">[P]</span>' : ''}
          </div>
          <div class="cpal" style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
            ${c.alias ? `<span>"${c.alias}"</span>` : ''}
            ${org ? `<span style="background:${orgColor}22;color:${orgColor};border:1px solid ${orgColor}44;font-family:var(--mono);font-size:9px;padding:1px 5px;border-radius:2px">${org.name}</span>` : ''}
            ${playerUser ? `<span style="background:${playerUser.color}22;color:${playerUser.color};font-family:var(--mono);font-size:9px;padding:1px 5px;border-radius:2px">${playerUser.name}</span>` : '<span style="font-family:var(--mono);font-size:9px;color:var(--t3)">NPC</span>'}
          </div>
        </div>
        <div style="font-size:15px;color:${inS?'var(--gn)':'var(--t3)'};flex-shrink:0;margin-left:6px">
          ${inS ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}
        </div>`;

      el.addEventListener('click', () => {
        RP.toggleChar(c);
        const nowIn = S.activeChars.some(x => x.id === c.id);
        el.classList.toggle('active', nowIn);
        el.querySelector('div[style*="font-size:15px"]').style.color = nowIn ? 'var(--gn)' : 'var(--t3)';
        el.querySelector('div[style*="font-size:15px"]').innerHTML = nowIn ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>';
        el.querySelector('.cpnm').innerHTML = `${c.name}${S.activeChar?.id===c.id?' <span style="font-size:9px;color:var(--ac);font-family:var(--mono)">[P]</span>':''}`;
      });

      // Long-press / right-click → char card
      el.addEventListener('contextmenu', e => { e.preventDefault(); CharCard.show(c.id, e.clientX, e.clientY); });
      g.appendChild(el);
    });
  },
};

/* ════════════════════════════════════════════════════════
   2. TAG SYSTEM — tag bar with vehicles, orgs, equipment
════════════════════════════════════════════════════════ */
const TagSystem = {
  // Tag types (each has label, icon, color, data from DB)
  TYPES: [
    { key: 'char',  label: 'Karakter',  icon: 'fa-user',       getter: () => S.chars },
    { key: 'org',   label: 'Org',        icon: 'fa-building',   getter: () => S.orgs  },
    { key: 'vehicle',label:'Araç',       icon: 'fa-car',        getter: () => (S._db?.vehicles    || []) },
    { key: 'equip', label: 'Ekipman',    icon: 'fa-box',        getter: () => (S._db?.equipments  || []) },
    { key: 'prop',  label: 'Mülk',       icon: 'fa-home',       getter: () => (S._db?.properties  || []) },
  ],

  // Active tags: [ { type, id, label, color, data } ]
  active: JSON.parse(localStorage.getItem('rp_active_tags') || '[]'),

  save() { localStorage.setItem('rp_active_tags', JSON.stringify(this.active)); },

  add(type, id, label, color, data = {}) {
    if (this.active.find(t => t.type === type && t.id === id)) return;
    this.active.push({ type, id, label, color, data });
    this.save();
    this.render();
  },

  remove(type, id) {
    this.active = this.active.filter(t => !(t.type === type && t.id === id));
    this.save();
    this.render();
  },

  clear() { this.active = []; this.save(); this.render(); },

  // Injects the non-char tags AFTER the char tags rendered by UI.renderTags()
  render() {
    const bar = document.getElementById('char-tags-bar');
    if (!bar) return;
    // Remove old non-char tags (keep char tags rendered by UI.renderTags)
    bar.querySelectorAll('.ntag').forEach(el => el.remove());
    // Remove old add-char-btn (will be re-added)
    bar.querySelector('#add-char-btn')?.remove();
    bar.querySelector('#add-tag-btn')?.remove();

    this.active.forEach(tag => {
      if (tag.type === 'char') return; // chars handled by UI.renderTags
      const el = document.createElement('div');
      el.className = 'ctag ntag';
      el.style.cssText = `background:${tag.color}18;border-color:${tag.color}44;color:${tag.color};`;
      el.title = `${tag.label} · ${tag.type}`;
      const typeIcon = this.TYPES.find(t => t.key === tag.type)?.icon || 'fa-tag';
      el.innerHTML = `
        <div class="ctag-ava"><i class="fas ${typeIcon}" style="font-size:9px"></i></div>
        <span class="ctag-name">${tag.label}</span>
        <span class="ctag-rm">✕</span>`;
      el.addEventListener('contextmenu', e => { e.preventDefault(); TagSystem._tagContextMenu(tag, e); });
      el.querySelector('.ctag-rm').addEventListener('click', e => {
        e.stopPropagation(); this.remove(tag.type, tag.id);
      });
      bar.appendChild(el);
    });

    // + karakter btn
    const addChar = document.createElement('button');
    addChar.id = 'add-char-btn';
    addChar.innerHTML = '<i class="fas fa-user-plus"></i> karakter';
    addChar.onclick = () => CharPicker.open();
    bar.appendChild(addChar);

    // + tag btn
    const addTag = document.createElement('button');
    addTag.id = 'add-tag-btn';
    addTag.innerHTML = '<i class="fas fa-tag"></i> etiket';
    addTag.onclick = () => TagSystem.openPicker();
    bar.appendChild(addTag);
  },

  openPicker() {
    // Build modal if needed
    let modal = document.getElementById('m-tag-picker');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'm-tag-picker';
      modal.className = 'mbd hidden';
      modal.innerHTML = `
        <div class="mbox" style="max-width:520px">
          <div class="mhd">
            <span class="mti">Etiket Ekle</span>
            <button class="mcl" onclick="CM('m-tag-picker')"><i class="fas fa-times"></i></button>
          </div>
          <div class="mbdy" style="padding:12px 20px">
            <div class="cp-filter-bar" style="margin-bottom:10px">
              <div class="cp-search-wrap">
                <i class="fas fa-search cp-search-icon"></i>
                <input id="tp-search" class="cp-search" placeholder="Ara…" autocomplete="off">
              </div>
              <div class="cp-filter-row">
                <select id="tp-type-filter" class="cp-select">
                  <option value="all">Tümü</option>
                </select>
              </div>
            </div>
            <div id="tp-grid" class="cpg" style="max-height:340px"></div>
          </div>
          <div class="mft"><button class="btn btn-g" onclick="CM('m-tag-picker')">Kapat</button></div>
        </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click', e => { if (e.target === modal) CM('m-tag-picker'); });

      // Populate type filter
      const typeSel = modal.querySelector('#tp-type-filter');
      this.TYPES.filter(t => t.key !== 'char').forEach(t => {
        const o = document.createElement('option'); o.value = t.key; o.textContent = t.label;
        typeSel.appendChild(o);
      });

      modal.querySelector('#tp-search').addEventListener('input', () => this._renderTagGrid());
      modal.querySelector('#tp-type-filter').addEventListener('change', () => this._renderTagGrid());
    }
    OM('m-tag-picker');
    this._renderTagGrid();
    setTimeout(() => modal.querySelector('#tp-search')?.focus(), 80);
  },

  _renderTagGrid() {
    const g = document.getElementById('tp-grid'); if (!g) return;
    const search   = document.getElementById('tp-search')?.value.trim().toLowerCase() || '';
    const typeFilter = document.getElementById('tp-type-filter')?.value || 'all';
    g.innerHTML = '';

    const types = typeFilter === 'all'
      ? this.TYPES.filter(t => t.key !== 'char')
      : this.TYPES.filter(t => t.key === typeFilter);

    types.forEach(type => {
      const items = type.getter();
      items
        .filter(item => !search || (item.name||'').toLowerCase().includes(search) || (item.alias||'').toLowerCase().includes(search))
        .forEach(item => {
          const alreadyOn = this.active.find(t => t.type === type.key && t.id === item.id);
          const color = item.color || 'var(--gn)';
          const el = document.createElement('div');
          el.className = 'cpi-item' + (alreadyOn ? ' active' : '');
          el.innerHTML = `
            <div class="cpa" style="font-size:14px;background:${color}22">
              <i class="fas ${type.icon}" style="color:${color}"></i>
            </div>
            <div class="cpin">
              <div class="cpnm">${item.name || item.plate || item.id}</div>
              <div class="cpal">${type.label}${item.alias ? ' · '+item.alias : ''}</div>
            </div>
            <div style="font-size:15px;color:${alreadyOn?'var(--gn)':'var(--t3)'};flex-shrink:0;margin-left:6px">
              ${alreadyOn ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}
            </div>`;
          el.onclick = () => {
            if (alreadyOn) { this.remove(type.key, item.id); el.classList.remove('active'); el.querySelector('div[style*="font-size:15px"]').innerHTML='<i class="far fa-circle"></i>'; el.querySelector('div[style*="font-size:15px"]').style.color='var(--t3)'; }
            else { this.add(type.key, item.id, item.name||item.id, color, item); el.classList.add('active'); el.querySelector('div[style*="font-size:15px"]').innerHTML='<i class="fas fa-check-circle"></i>'; el.querySelector('div[style*="font-size:15px"]').style.color='var(--gn)'; }
          };
          el.addEventListener('contextmenu', e => { e.preventDefault(); CharCard.show(item.id, e.clientX, e.clientY, type.key); });
          g.appendChild(el);
        });
    });
    if (!g.children.length) g.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:24px;font-family:var(--mono);font-size:11px;color:var(--t3)">Sonuç yok</div>';
  },

  _tagContextMenu(tag, e) {
    ContextMenu.show(e.clientX, e.clientY, [
      { icon: 'fa-id-card',    label: 'Profil Kartı',    action: () => CharCard.show(tag.id, e.clientX, e.clientY, tag.type) },
      { icon: 'fa-external-link-alt', label: 'DB\'de Aç', action: () => CharCard.openInDB(tag.id, tag.type) },
      { icon: 'fa-times',      label: 'Etiketi Kaldır',  action: () => TagSystem.remove(tag.type, tag.id), danger: true },
    ]);
  },
};

/* ════════════════════════════════════════════════════════
   3. CHAR CARD — popup profile + context menu
════════════════════════════════════════════════════════ */
const CharCard = {
  _card: null,

  show(id, x, y, type = 'char') {
    this.hide();
    // Find entity
    let entity = null;
    if (type === 'char')    entity = S.ci.get(id) || S.chars.find(c => c.id === id);
    else if (type === 'org') entity = S.oi.get(id) || S.orgs.find(o => o.id === id);
    else {
      const db = S._db || {};
      const pool = [...(db.vehicles||[]), ...(db.equipments||[]), ...(db.properties||[])];
      entity = pool.find(e => e.id === id);
    }
    if (!entity) { toast('Veri bulunamadı', 'warn'); return; }

    const card = document.createElement('div');
    card.id = '__char-card';
    card.className = 'char-card-popup';
    this._card = card;

    const org = type === 'char'
      ? RP._org((entity.organizations||[])[0] || entity.organization)
      : null;
    const orgColor = org?.color || '#4a8fe2';
    const ini = (entity.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    const playerUser = USERS?.find(u => u.id === entity.playerId);
    const isNPC = type === 'char' && (!entity.playerId || entity.playerId === '');

    let bodyHtml = '';
    if (type === 'char') {
      bodyHtml = `
        <div class="cc-header" style="border-top:3px solid ${orgColor}">
          <div class="cc-ava">
            ${entity.image ? `<img src="${entity.image}" onerror="this.parentNode.innerHTML='${ini}'">` : ini}
          </div>
          <div class="cc-info">
            <div class="cc-name">${entity.name}</div>
            ${entity.alias ? `<div class="cc-alias">"${entity.alias}"</div>` : ''}
            <div class="cc-badges">
              ${org ? `<span class="cc-badge" style="background:${orgColor}22;color:${orgColor};border-color:${orgColor}44">${org.name}</span>` : ''}
              ${isNPC ? '<span class="cc-badge" style="background:var(--pu)22;color:var(--pu);border-color:var(--pu)44">NPC</span>' : ''}
              ${playerUser ? `<span class="cc-badge" style="background:${playerUser.color}22;color:${playerUser.color};border-color:${playerUser.color}44">${playerUser.name}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="cc-body">
          ${entity.story ? `<div class="cc-story">${entity.story.slice(0, 160)}${entity.story.length > 160 ? '…' : ''}</div>` : ''}
          <div class="cc-stats">
            ${entity.status ? `<span class="cc-stat">Status: <b>${entity.status}</b></span>` : ''}
            ${entity.threatLevel ? `<span class="cc-stat">Tehdit: <b>${entity.threatLevel}</b></span>` : ''}
            ${entity.heatLevel ? `<span class="cc-stat">Heat: <b>${entity.heatLevel}</b></span>` : ''}
          </div>
        </div>`;
    } else if (type === 'org') {
      bodyHtml = `
        <div class="cc-header" style="border-top:3px solid ${entity.color || 'var(--ac)'}">
          <div class="cc-ava" style="font-size:20px;background:${entity.color||'var(--ac)'}22">
            <i class="fas fa-building" style="color:${entity.color||'var(--ac)'}"></i>
          </div>
          <div class="cc-info">
            <div class="cc-name">${entity.name}</div>
            ${entity.type ? `<div class="cc-alias">${entity.type}</div>` : ''}
          </div>
        </div>
        <div class="cc-body">
          ${entity.description ? `<div class="cc-story">${entity.description.slice(0,160)}</div>` : ''}
        </div>`;
    } else {
      bodyHtml = `
        <div class="cc-header" style="border-top:3px solid var(--gn)">
          <div class="cc-ava" style="background:var(--gn-d)"><i class="fas fa-box" style="color:var(--gn)"></i></div>
          <div class="cc-info"><div class="cc-name">${entity.name||entity.plate||id}</div><div class="cc-alias">${type}</div></div>
        </div>
        <div class="cc-body">
          ${entity.description ? `<div class="cc-story">${entity.description.slice(0,160)}</div>` : ''}
        </div>`;
    }

    card.innerHTML = `
      ${bodyHtml}
      <div class="cc-footer">
        <button class="cc-btn" onclick="CharCard.openInDB('${id}','${type}')">
          <i class="fas fa-external-link-alt"></i> DB'de Aç
        </button>
        ${type === 'char' ? `<button class="cc-btn cc-btn-primary" onclick="CharCard.addToScene('${id}')">
          <i class="fas fa-plus"></i> Sahneye Ekle
        </button>` : ''}
        <button class="cc-btn cc-btn-expand" onclick="CharCard.expand('${id}','${type}')" title="Büyüt">
          <i class="fas fa-expand-alt"></i>
        </button>
      </div>`;

    // Position
    const vw = window.innerWidth, vh = window.innerHeight;
    const W = 280, H = 300;
    card.style.left = Math.min(x + 8, vw - W - 16) + 'px';
    card.style.top  = Math.min(y + 8, vh - H - 16) + 'px';

    document.body.appendChild(card);
    setTimeout(() => card.classList.add('cc-visible'), 10);
    document.addEventListener('click', this._outsideClick, { once: true });
  },

  hide() {
    this._card?.remove();
    this._card = null;
  },

  _outsideClick(e) {
    const card = document.getElementById('__char-card');
    if (card && !card.contains(e.target)) CharCard.hide();
  },

  expand(id, type) {
    // Convert popup to full modal
    this.hide();
    let modal = document.getElementById('m-char-full');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'm-char-full';
      modal.className = 'mbd hidden';
      modal.innerHTML = `
        <div class="mbox" style="max-width:560px;max-height:80vh;display:flex;flex-direction:column">
          <div class="mhd">
            <span class="mti" id="cfull-title">Profil</span>
            <div style="display:flex;gap:6px;margin-left:auto">
              <button class="btn btn-g" id="cfull-db-btn" style="font-size:10px;padding:4px 10px"><i class="fas fa-external-link-alt"></i> DB'de Aç</button>
              <button class="mcl" onclick="CM('m-char-full')"><i class="fas fa-times"></i></button>
            </div>
          </div>
          <div class="mbdy" id="cfull-body" style="overflow-y:auto;flex:1"></div>
        </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click', e => { if (e.target === modal) CM('m-char-full'); });
    }

    let entity = S.ci.get(id) || S.chars.find(c=>c.id===id) || S.oi.get(id) || S.orgs.find(o=>o.id===id);
    if (!entity) { toast('Veri yok','warn'); return; }
    const org = RP._org((entity.organizations||[])[0]||entity.organization);
    const orgColor = org?.color || '#4a8fe2';
    const ini = (entity.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();

    document.getElementById('cfull-title').textContent = entity.name || id;
    document.getElementById('cfull-db-btn').onclick = () => CharCard.openInDB(id, type);
    document.getElementById('cfull-body').innerHTML = `
      <div style="display:flex;gap:16px;margin-bottom:16px">
        <div style="width:72px;height:72px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:20px;font-weight:700;color:var(--t1);overflow:hidden;border:3px solid ${orgColor};flex-shrink:0">
          ${entity.image ? `<img src="${entity.image}" style="width:100%;height:100%;object-fit:cover">` : ini}
        </div>
        <div>
          <div style="font-size:16px;font-weight:600;color:var(--t0);margin-bottom:4px">${entity.name}</div>
          ${entity.alias ? `<div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:6px">"${entity.alias}"</div>` : ''}
          ${org ? `<span style="background:${orgColor}22;color:${orgColor};border:1px solid ${orgColor}44;font-family:var(--mono);font-size:10px;padding:2px 8px;border-radius:2px">${org.name}</span>` : ''}
        </div>
      </div>
      ${entity.story ? `<div style="font-size:13px;color:var(--t1);line-height:1.6;margin-bottom:12px;padding:10px;background:var(--bg3);border-radius:var(--r)">${entity.story}</div>` : ''}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        ${[
          ['Status',     entity.status],
          ['Tehdit',     entity.threatLevel],
          ['Heat',       entity.heatLevel],
          ['Lokasyon',   entity.location],
          ['Uyruk',      entity.nationality],
          ['Meslek',     entity.occupation],
        ].filter(([,v])=>v).map(([l,v])=>`
          <div style="background:var(--bg3);padding:8px 10px;border-radius:var(--r)">
            <div style="font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:2px">${l}</div>
            <div style="font-size:12px;color:var(--t0);font-weight:500">${v}</div>
          </div>`).join('')}
      </div>`;
    OM('m-char-full');
  },

  addToScene(charId) {
    const c = S.ci.get(charId) || S.chars.find(x => x.id === charId);
    if (c) { RP.toggleChar(c); toast(c.name + ' sahneye eklendi', 'success'); }
    this.hide();
  },

  openInDB(id, type) {
    const base = window.DM_CONFIG?.world === 'tokyo'
      ? 'https://cesurakincan25-design.github.io/TOKYO_DB/'
      : 'https://cesurakincan25-design.github.io/NYC_DB/';
    window.open(`${base}?open=${type}&id=${encodeURIComponent(id)}`, '_blank');
    this.hide();
  },
};

/* ════════════════════════════════════════════════════════
   CONTEXT MENU (shared utility)
════════════════════════════════════════════════════════ */
const ContextMenu = {
  show(x, y, items) {
    document.querySelector('.ctx-menu-global')?.remove();
    const menu = document.createElement('div');
    menu.className = 'ctx-menu ctx-menu-global';
    items.forEach(item => {
      if (item === 'sep') {
        const sep = document.createElement('div');
        sep.className = 'ctx-sep';
        menu.appendChild(sep);
        return;
      }
      const el = document.createElement('div');
      el.className = 'ctx-item' + (item.danger ? ' danger' : '');
      el.innerHTML = `<i class="fas ${item.icon}"></i> ${item.label}`;
      el.onclick = () => { menu.remove(); item.action(); };
      menu.appendChild(el);
    });
    const vw = window.innerWidth, vh = window.innerHeight;
    menu.style.cssText = `position:fixed;z-index:500;left:${Math.min(x,vw-180)}px;top:${Math.min(y,vh-items.length*34-10)}px`;
    document.body.appendChild(menu);
    setTimeout(() => document.addEventListener('click', () => menu.remove(), { once: true }), 50);
  },
};

/* ════════════════════════════════════════════════════════
   4. REACTIONS — Discord-style, multi-user, tooltip, custom
════════════════════════════════════════════════════════ */
const Reactions = {
  // Default + user-custom emoji set
  DEFAULT_EMOJIS: ['👍','❤️','😂','😮','😢','🔥','⚔️','💀','🎯','🤝','👀','💬','😈','🩸','💊','🔫','🚨','💰'],
  get emojis() {
    return JSON.parse(localStorage.getItem('rp_custom_emojis') || 'null') || this.DEFAULT_EMOJIS;
  },

  // Show picker inline above the message
  showPicker(e, msgId) {
    e.stopPropagation();
    document.querySelectorAll('.react-picker-inline').forEach(el => el.remove());
    const btn = e.currentTarget;
    const picker = document.createElement('div');
    picker.className = 'react-picker-inline';

    this.emojis.forEach(em => {
      const b = document.createElement('button');
      b.className = 'em-btn';
      b.textContent = em;
      b.title = em;
      b.onclick = () => { RP.react(msgId, em); picker.remove(); };
      picker.appendChild(b);
    });

    // Custom emoji button
    const customBtn = document.createElement('button');
    customBtn.className = 'em-btn';
    customBtn.title = 'Emoji özelleştir';
    customBtn.innerHTML = '<i class="fas fa-plus" style="font-size:11px;color:var(--t2)"></i>';
    customBtn.onclick = () => { picker.remove(); Reactions.openCustomizer(); };
    picker.appendChild(customBtn);

    // Position relative to button
    const rect = btn.getBoundingClientRect();
    picker.style.cssText = `position:fixed;bottom:${window.innerHeight-rect.top+4}px;left:${rect.left}px;z-index:300`;
    document.body.appendChild(picker);
    setTimeout(() => document.addEventListener('click', () => picker.remove(), { once: true }), 50);
  },

  // Render reaction pills with full tooltip (who reacted)
  render(el, msg) {
    el.innerHTML = '';
    const reactions = msg.reactions || {};
    const hasAny = Object.values(reactions).some(users => users.length > 0);
    if (!hasAny) return;

    Object.entries(reactions).forEach(([emoji, userIds]) => {
      if (!userIds.length) return;
      const myChar = S.activeChar;
      const iMine = myChar && userIds.includes(myChar.id);

      // Build tooltip: resolve char IDs to names
      const names = userIds.map(uid => {
        const c = S.ci.get(uid);
        return c ? c.name : uid;
      });

      const pill = document.createElement('button');
      pill.className = 'rpill' + (iMine ? ' on' : '');
      pill.innerHTML = `${emoji}<span class="rcnt">${userIds.length}</span>`;
      pill.title = names.join(', ');

      // Hover tooltip with avatars
      pill.addEventListener('mouseenter', () => Reactions._showTooltip(pill, emoji, userIds, names));
      pill.addEventListener('mouseleave', () => document.querySelector('.react-tooltip')?.remove());
      pill.onclick = () => RP.react(msg.id, emoji);
      el.appendChild(pill);
    });
  },

  _showTooltip(anchor, emoji, userIds, names) {
    document.querySelector('.react-tooltip')?.remove();
    const tip = document.createElement('div');
    tip.className = 'react-tooltip';
    tip.innerHTML = `
      <div style="font-size:18px;text-align:center;margin-bottom:6px">${emoji}</div>
      ${names.map((name, i) => {
        const c = S.ci.get(userIds[i]);
        const ini = (name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
        return `<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <div style="width:20px;height:20px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;overflow:hidden;flex-shrink:0">
            ${c?.image ? `<img src="${c.image}" style="width:100%;height:100%;object-fit:cover">` : ini}
          </div>
          <span>${name}</span>
        </div>`;
      }).join('')}`;

    const rect = anchor.getBoundingClientRect();
    tip.style.cssText = `position:fixed;bottom:${window.innerHeight-rect.top+4}px;left:${rect.left}px;z-index:400`;
    document.body.appendChild(tip);
  },

  openCustomizer() {
    let modal = document.getElementById('m-reaction-custom');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'm-reaction-custom';
      modal.className = 'mbd hidden';
      modal.innerHTML = `
        <div class="mbox" style="max-width:400px">
          <div class="mhd">
            <span class="mti">Tepki Emojilerini Özelleştir</span>
            <button class="mcl" onclick="CM('m-reaction-custom')"><i class="fas fa-times"></i></button>
          </div>
          <div class="mbdy">
            <div style="font-family:var(--mono);font-size:10px;color:var(--t2);margin-bottom:10px;text-transform:uppercase;letter-spacing:.08em">Emoji listesi (boşlukla ayır)</div>
            <textarea id="rc-input" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-size:22px;padding:10px;outline:none;resize:vertical;min-height:80px;line-height:1.8" rows="3"></textarea>
            <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:6px">Varsayılan: ${Reactions.DEFAULT_EMOJIS.join(' ')}</div>
          </div>
          <div class="mft">
            <button class="btn btn-g" onclick="Reactions._resetEmojis()">Sıfırla</button>
            <button class="btn btn-g" onclick="CM('m-reaction-custom')">İptal</button>
            <button class="btn btn-p" onclick="Reactions._saveCustomEmojis()">Kaydet</button>
          </div>
        </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click', e => { if (e.target === modal) CM('m-reaction-custom'); });
    }
    document.getElementById('rc-input').value = this.emojis.join(' ');
    OM('m-reaction-custom');
  },

  _saveCustomEmojis() {
    const val = document.getElementById('rc-input').value;
    const emojis = val.match(/\p{Emoji}/gu) || [];
    if (emojis.length < 3) { toast('En az 3 emoji gir', 'warn'); return; }
    localStorage.setItem('rp_custom_emojis', JSON.stringify(emojis));
    CM('m-reaction-custom');
    toast('Tepkiler güncellendi', 'success');
  },

  _resetEmojis() {
    localStorage.removeItem('rp_custom_emojis');
    document.getElementById('rc-input').value = this.DEFAULT_EMOJIS.join(' ');
    toast('Varsayılana döndürüldü', 'success');
  },
};

/* ════════════════════════════════════════════════════════
   5. READ RECEIPTS — Messenger-style seen avatars
════════════════════════════════════════════════════════ */
const ReadReceipts = {
  // { userId: { msgId, charId, charName, charAvatar, seenAt } }
  // We track: which is the LAST message each user has seen
  _state: {},

  // Called when the message list scrolls or new messages arrive
  update() {
    // Find the last visible message in viewport
    const list = document.getElementById('messages-list');
    if (!list) return;

    const items = list.querySelectorAll('.msg-group[data-msg-id]');
    if (!items.length) return;

    let lastVisibleId = null;
    items.forEach(el => {
      const rect = el.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      if (rect.top < listRect.bottom && rect.bottom > listRect.top) {
        lastVisibleId = el.dataset.msgId;
      }
    });

    if (!lastVisibleId) return;

    // Record this user's read position
    const user = S.user;
    const char = S.activeChar;
    if (!user || !char) return;

    const prev = this._state[user.id];
    if (prev?.msgId === lastVisibleId) return; // no change

    this._state[user.id] = {
      msgId:      lastVisibleId,
      charId:     char.id,
      charName:   char.name,
      charAvatar: char.image || '',
      userColor:  user.color,
      userName:   user.name,
      seenAt:     Date.now(),
    };

    // Persist to presence table
    this._persist(user.id, lastVisibleId, char);
    this._render();
  },

  async _persist(userId, msgId, char) {
    if (S._off) return;
    try {
      await DB.post('rp_presence', {
        char_id:    char.id,
        char_name:  char.name,
        char_alias: char.alias || '',
        org_id:     (char.organizations||[])[0] || char.organization || null,
        last_seen:  new Date().toISOString(),
        is_typing:  false,
        room_id:    S.roomId,
        last_read_msg_id: msgId,
        reader_user_id:   userId,
      }).catch(() => {});
    } catch(e) {}
  },

  // Pull other users' read positions from presence
  async fetchOthers() {
    if (S._off) return;
    try {
      const cut = new Date(Date.now() - 120000).toISOString();
      const rows = await DB.get(
        `rp_presence?last_seen=gte.${cut}&room_id=eq.${S.roomId}` +
        `&select=char_id,char_name,char_avatar,last_read_msg_id,reader_user_id,last_seen`
      ).catch(() => []);

      rows.forEach(r => {
        if (!r.last_read_msg_id) return;
        if (r.reader_user_id === S.user?.id) return; // skip self
        const user = USERS?.find(u => u.id === r.reader_user_id);
        if (!user) return;
        this._state[r.reader_user_id] = {
          msgId:      r.last_read_msg_id,
          charId:     r.char_id,
          charName:   r.char_name,
          charAvatar: r.char_avatar || '',
          userColor:  user.color,
          userName:   user.name,
          seenAt:     new Date(r.last_seen).getTime(),
        };
      });
      this._render();
    } catch(e) {}
  },

  _render() {
    // Remove all existing receipt badges
    document.querySelectorAll('.read-receipt-badge').forEach(el => el.remove());

    // Group users by their last-read message
    const byMsg = {};
    Object.values(this._state).forEach(entry => {
      if (!byMsg[entry.msgId]) byMsg[entry.msgId] = [];
      byMsg[entry.msgId].push(entry);
    });

    // Render avatars on the right side of each message
    Object.entries(byMsg).forEach(([msgId, readers]) => {
      const msgEl = document.querySelector(`[data-msg-id="${msgId}"]`);
      if (!msgEl) return;

      const badge = document.createElement('div');
      badge.className = 'read-receipt-badge';

      readers.slice(0, 4).forEach(reader => {
        const ava = document.createElement('div');
        ava.className = 'rr-ava';
        ava.title = `${reader.userName} okudu`;
        ava.style.borderColor = reader.userColor;
        const ini = (reader.charName||reader.userName||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
        ava.innerHTML = reader.charAvatar
          ? `<img src="${reader.charAvatar}" onerror="this.parentNode.innerHTML='${ini}'">`
          : ini;
        badge.appendChild(ava);
      });

      if (readers.length > 4) {
        const more = document.createElement('div');
        more.className = 'rr-ava rr-more';
        more.textContent = `+${readers.length - 4}`;
        badge.appendChild(more);
      }

      msgEl.appendChild(badge);
    });
  },
};

/* ════════════════════════════════════════════════════════
   CSS — injected dynamically
════════════════════════════════════════════════════════ */
const FEATURE_CSS = `
/* ── Char Picker ─────────────────────────────────────── */
.cp-filter-bar{padding:0 0 12px;border-bottom:1px solid var(--ln);margin-bottom:12px}
.cp-search-wrap{position:relative;margin-bottom:8px}
.cp-search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--t3);font-size:12px;pointer-events:none}
.cp-search{width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--sans);font-size:13px;padding:8px 32px 8px 30px;outline:none;transition:border-color var(--tr)}
.cp-search:focus{border-color:var(--ac)}
.cp-search-clear{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--t2);cursor:pointer;font-size:12px;padding:2px}
.cp-search-clear:hover{color:var(--t0)}
.cp-filter-row{display:flex;gap:6px}
.cp-select{flex:1;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:10px;padding:5px 6px;outline:none;transition:border-color var(--tr)}
.cp-select:focus{border-color:var(--ac)}
.cp-result-count{font-family:var(--mono);font-size:10px;color:var(--t3);padding:0 0 6px;letter-spacing:.06em}

/* ── Tag bar additions ───────────────────────────────── */
#add-tag-btn{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;border:1px dashed var(--gd);background:none;color:var(--gd);font-family:var(--mono);font-size:10px;cursor:pointer;transition:all .15s}
#add-tag-btn:hover{border-color:var(--gd);background:var(--gd-d)}

/* ── Char Card popup ─────────────────────────────────── */
.char-card-popup{
  position:fixed;z-index:450;width:280px;
  background:var(--bg2);border:1px solid var(--ln2);border-radius:8px;
  box-shadow:0 16px 48px rgba(0,0,0,.6);
  opacity:0;transform:scale(.95) translateY(4px);
  transition:opacity .15s ease,transform .15s ease;
  overflow:hidden;
}
.char-card-popup.cc-visible{opacity:1;transform:scale(1) translateY(0)}
.cc-header{display:flex;align-items:center;gap:12px;padding:12px 14px}
.cc-ava{width:48px;height:48px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:16px;font-weight:700;color:var(--t1);overflow:hidden;flex-shrink:0}
.cc-ava img{width:100%;height:100%;object-fit:cover;display:block}
.cc-info{flex:1;min-width:0}
.cc-name{font-size:14px;font-weight:600;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cc-alias{font-family:var(--mono);font-size:11px;color:var(--t2);margin-bottom:4px}
.cc-badges{display:flex;flex-wrap:wrap;gap:4px}
.cc-badge{font-family:var(--mono);font-size:9px;font-weight:600;padding:1px 6px;border-radius:2px;border:1px solid;letter-spacing:.06em}
.cc-body{padding:0 14px 10px}
.cc-story{font-size:12px;color:var(--t1);line-height:1.55;margin-bottom:8px}
.cc-stats{display:flex;flex-wrap:wrap;gap:4px}
.cc-stat{font-family:var(--mono);font-size:10px;color:var(--t2);background:var(--bg3);padding:2px 7px;border-radius:2px}
.cc-stat b{color:var(--t0)}
.cc-footer{display:flex;align-items:center;gap:6px;padding:8px 14px;border-top:1px solid var(--ln)}
.cc-btn{display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:var(--r);border:1px solid var(--ln2);background:var(--bg3);color:var(--t1);font-family:var(--mono);font-size:10px;cursor:pointer;transition:all .12s}
.cc-btn:hover{background:var(--bg4);color:var(--t0)}
.cc-btn-primary{border-color:var(--ac);color:var(--ac);background:var(--ac-d)}
.cc-btn-primary:hover{background:rgba(74,143,226,.25)}
.cc-btn-expand{margin-left:auto;padding:4px 8px}

/* ── Context menu ────────────────────────────────────── */
.ctx-menu{background:var(--bg2);border:1px solid var(--ln2);border-radius:6px;padding:4px 0;z-index:400;box-shadow:0 8px 32px rgba(0,0,0,.5);min-width:160px}
.ctx-item{display:flex;align-items:center;gap:8px;padding:7px 14px;font-size:13px;color:var(--t1);cursor:pointer;transition:background .1s}
.ctx-item:hover{background:var(--bg3);color:var(--t0)}
.ctx-item i{width:14px;text-align:center;font-size:12px;color:var(--t2)}
.ctx-item:hover i{color:var(--t0)}
.ctx-item.danger{color:var(--rd)}.ctx-item.danger i{color:var(--rd)}
.ctx-item.danger:hover{background:var(--rd-d)}
.ctx-sep{height:1px;background:var(--ln);margin:3px 0}

/* ── Reactions ───────────────────────────────────────── */
.react-picker-inline{
  position:fixed;display:flex;flex-wrap:wrap;gap:4px;
  background:var(--bg3);border:1px solid var(--ln2);border-radius:10px;
  padding:8px;box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:300;
  max-width:280px;
}
.react-tooltip{
  position:fixed;background:var(--bg3);border:1px solid var(--ln2);border-radius:6px;
  padding:8px 10px;font-size:12px;color:var(--t1);z-index:400;
  box-shadow:0 4px 16px rgba(0,0,0,.4);min-width:120px;
  pointer-events:none;
}

/* ── Read receipts ───────────────────────────────────── */
.read-receipt-badge{
  position:absolute;right:0;bottom:-2px;
  display:flex;align-items:center;gap:2px;
  pointer-events:none;
}
.rr-ava{
  width:16px;height:16px;border-radius:50%;
  background:var(--bg4);border:1.5px solid;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-size:7px;font-weight:700;
  color:var(--t2);overflow:hidden;
  transition:transform .15s;
}
.rr-ava img{width:100%;height:100%;object-fit:cover;display:block}
.rr-ava:hover{transform:scale(1.3);z-index:10}
.rr-more{background:var(--bg5);color:var(--t2);font-size:6px;border-color:var(--ln2)}
.msg-group{position:relative} /* ensure receipt positioning works */
`;

/* ════════════════════════════════════════════════════════
   INIT — override RP client methods + inject CSS
════════════════════════════════════════════════════════ */
(function init() {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = FEATURE_CSS;
  document.head.appendChild(style);

  // Wait for DOM + RP client to be ready
  document.addEventListener('DOMContentLoaded', () => {
    // Override RP.openPicker → use CharPicker
    const _origOpenPicker = RP.openPicker.bind(RP);
    RP.openPicker = () => CharPicker.open();

    // Override UI.renderTags → then render tag system
    const _origRenderTags = UI.renderTags.bind(UI);
    UI.renderTags = function() {
      _origRenderTags();
      TagSystem.render();
    };

    // Override UI.renderReacts → use enhanced Reactions.render
    UI.renderReacts = function(el, msg) {
      Reactions.render(el, msg);
    };

    // Override msg action button for reactions → use Reactions.showPicker
    // This patches UI.append to use new picker
    const _origAppend = UI.append.bind(UI);
    UI.append = function(msg, scroll, forceNS, isFav) {
      _origAppend(msg, scroll, forceNS, isFav);
      // Fix reaction button to use Reactions.showPicker
      const el = document.querySelector(`[data-msg-id="${msg.id}"]`);
      if (!el) return;
      const reactBtn = el.querySelector('.mac[data-tip="Tepki"]');
      if (reactBtn) {
        reactBtn.onclick = (e) => Reactions.showPicker(e, msg.id);
      }
      // Add right-click on char name/avatar → CharCard
      const charName = el.querySelector('.msg-char');
      const charAva  = el.querySelector('.msg-ava');
      [charName, charAva].forEach(node => {
        if (!node) return;
        node.addEventListener('contextmenu', e => {
          e.preventDefault();
          ContextMenu.show(e.clientX, e.clientY, [
            { icon: 'fa-id-card',           label: 'Profil Kartı', action: () => CharCard.show(msg.char_id, e.clientX, e.clientY) },
            { icon: 'fa-external-link-alt', label: "DB'de Aç",     action: () => CharCard.openInDB(msg.char_id, 'char') },
          ]);
        });
      });
    };

    // Char tag right-click → context menu (patch renderTags)
    const _origTagsWithMenu = UI.renderTags.bind(UI);
    UI.renderTags = function() {
      _origTagsWithMenu();
      // Add context menu to char tags after render
      document.querySelectorAll('.ctag:not(.ntag)').forEach(tag => {
        // Find char from tag label
        const name = tag.querySelector('.ctag-name')?.textContent?.trim();
        const char = S.chars.find(c => c.name === name);
        if (!char) return;
        if (tag._ctxBound) return;
        tag._ctxBound = true;
        tag.addEventListener('contextmenu', e => {
          e.preventDefault();
          ContextMenu.show(e.clientX, e.clientY, [
            { icon: 'fa-id-card',           label: 'Profil Kartı',     action: () => CharCard.show(char.id, e.clientX, e.clientY) },
            { icon: 'fa-external-link-alt', label: "DB'de Aç",         action: () => CharCard.openInDB(char.id, 'char') },
            { icon: 'fa-star',              label: 'Primary Yap',       action: () => RP.setPrimary(char.id) },
            'sep',
            { icon: 'fa-times',             label: 'Sahneden Çıkar',   action: () => RP.removeChar(char.id), danger: true },
          ]);
        });
      });
    };

    // Read receipts: update on scroll
    const msgList = document.getElementById('messages-list');
    if (msgList) {
      msgList.addEventListener('scroll', () => ReadReceipts.update(), { passive: true });
    }

    // Read receipts: fetch others on presence poll
    const _origPresence = RT._presence.bind(RT);
    RT._presence = async function() {
      await _origPresence();
      await ReadReceipts.fetchOthers();
    };

    // Read receipts: update when new message appended
    const _origHandleMsg = RT._handleMsg.bind(RT);
    RT._handleMsg = function(rec) {
      _origHandleMsg(rec);
      setTimeout(() => ReadReceipts.update(), 200);
    };

    // Load additional DB data (vehicles, equipment, properties) for tag system
    // Fetched lazily when tag picker opens
    const _origInit = RP.init.bind(RP);
    RP.init = async function() {
      await _origInit();
      // Store full DB for tag system
      try {
        const rows = await DB.get(
          `${window.DM_CONFIG?.dbTable || 'nyc_db'}?id=eq.main&select=data`
        );
        if (rows.length) {
          const d = typeof rows[0].data === 'string' ? JSON.parse(rows[0].data) : rows[0].data;
          S._db = d; // vehicles, properties, equipments, etc.
        }
      } catch(e) {}
    };

    console.log('[rp_features] Loaded: CharPicker, TagSystem, CharCard, Reactions, ReadReceipts');
  });
})();

/* ════════════════════════════════════════════════════════
   6. AUTOCOMPLETE — phone-style predictive input
   Triggers on any partial word: "Ales" → "Alessandra Waggner: "
   Sources: characters, orgs, vehicles, properties, equipments
   Arrow keys navigate, Enter/Tab confirms, Esc dismisses
════════════════════════════════════════════════════════ */
const Autocomplete = {
  visible:  false,
  items:    [],
  selected: -1,
  _trigger: '',   // the partial word that triggered this
  _triggerStart: 0,

  // Build full search pool from all DB entities
  _pool() {
    const pool = [];
    // Characters
    S.chars.forEach(c => {
      if (c.status === 'Deceased') return;
      const org = RP._org((c.organizations||[])[0]||c.organization);
      const user = USERS?.find(u => u.id === c.playerId);
      pool.push({
        type:    'char',
        id:      c.id,
        label:   c.name,
        sub:     c.alias ? `"${c.alias}"${org?' · '+org.name:''}` : (org?.name||'NPC'),
        color:   user?.color || org?.color || 'var(--ac)',
        icon:    'fa-user',
        insert:  c.name + ': ',
        avatar:  c.image || '',
      });
      // Also match alias
      if (c.alias) pool.push({
        type: 'char', id: c.id, label: c.alias,
        sub: c.name + (org?' · '+org.name:''),
        color: user?.color || org?.color || 'var(--ac)',
        icon: 'fa-user', insert: c.name + ': ', avatar: c.image||'',
      });
    });

    // Orgs
    S.orgs.forEach(o => pool.push({
      type:'org', id:o.id, label:o.name, sub:'Organizasyon',
      color:o.color||'var(--gn)', icon:'fa-building', insert:'['+o.name+'] ', avatar:'',
    }));

    // Vehicles (from S._db if loaded)
    (S._db?.vehicles||[]).forEach(v => pool.push({
      type:'vehicle', id:v.id, label:v.plate||v.name||v.id,
      sub:(v.make||'')+(v.model?' '+v.model:'')+(v.owner?' — '+v.owner:''),
      color:'var(--am)', icon:'fa-car', insert:'['+( v.plate||v.name||v.id)+'] ', avatar:'',
    }));

    // Properties
    (S._db?.properties||[]).forEach(p => pool.push({
      type:'property', id:p.id, label:p.name||p.address||p.id,
      sub:(p.type||'Mülk')+(p.owner?' — '+p.owner:''),
      color:'var(--pu)', icon:'fa-home', insert:'['+( p.name||p.address||p.id)+'] ', avatar:'',
    }));

    // Equipments
    (S._db?.equipments||[]).forEach(e => pool.push({
      type:'equip', id:e.id, label:e.name||e.id,
      sub:(e.type||'Ekipman')+(e.owner?' — '+e.owner:''),
      color:'var(--gd)', icon:'fa-box', insert:'['+( e.name||e.id)+'] ', avatar:'',
    }));

    return pool;
  },

  check(inp) {
    const val  = inp.value;
    const pos  = inp.selectionStart;
    // Find the current word being typed (from last newline or start)
    const before = val.slice(0, pos);
    const wordMatch = before.match(/(\S{2,})$/);
    if (!wordMatch) { this.hide(); return; }

    const word = wordMatch[1].toLowerCase();
    this._trigger     = wordMatch[1];
    this._triggerStart = pos - wordMatch[1].length;

    // Score and filter
    const pool = this._pool();
    const results = pool
      .filter(item => {
        const hay = item.label.toLowerCase();
        // Must start with the typed word OR contain it
        return hay.startsWith(word) || hay.includes(word);
      })
      .sort((a, b) => {
        const al = a.label.toLowerCase(), bl = b.label.toLowerCase();
        const aStart = al.startsWith(word) ? 0 : 1;
        const bStart = bl.startsWith(word) ? 0 : 1;
        return aStart - bStart || al.localeCompare(bl);
      })
      .slice(0, 8);

    if (!results.length) { this.hide(); return; }
    this.items    = results;
    this.selected = 0;
    this._render(inp);
  },

  _render(inp) {
    this.visible = true;
    let popup = document.getElementById('ac-popup');
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'ac-popup';
      popup.className = 'ac-popup';
      document.body.appendChild(popup);
    }

    popup.innerHTML = '';
    this.items.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = 'ac-item' + (i === this.selected ? ' ac-selected' : '');
      el.dataset.idx = i;
      const ini = (item.label||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      el.innerHTML = `
        <div class="ac-ava" style="background:${item.color}22;border:1px solid ${item.color}44">
          ${item.avatar
            ? `<img src="${item.avatar}" onerror="this.parentNode.innerHTML='<i class=\\"fas ${item.icon}\\" style=\\"color:${item.color};font-size:10px\\"></i>'" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`
            : `<i class="fas ${item.icon}" style="color:${item.color};font-size:10px"></i>`}
        </div>
        <div class="ac-info">
          <div class="ac-label">${this._highlight(item.label, this._trigger)}</div>
          <div class="ac-sub">${item.sub}</div>
        </div>
        <div class="ac-type-badge" style="color:${item.color};border-color:${item.color}44;background:${item.color}15">${item.type}</div>`;
      el.onclick = () => { this.selected = i; this.confirm(); };
      el.onmouseenter = () => {
        this.selected = i;
        popup.querySelectorAll('.ac-item').forEach((x,j) => x.classList.toggle('ac-selected', j===i));
      };
      popup.appendChild(el);
    });

    // Position above the input
    const rect = inp.getBoundingClientRect();
    const popH = Math.min(this.items.length * 44 + 8, 360);
    popup.style.cssText = `
      position:fixed;
      left:${rect.left}px;
      bottom:${window.innerHeight - rect.top + 4}px;
      width:${Math.max(rect.width, 320)}px;
      max-height:360px;
      overflow-y:auto;
      display:block;
    `;
  },

  _highlight(label, trigger) {
    const idx = label.toLowerCase().indexOf(trigger.toLowerCase());
    if (idx === -1) return label;
    return label.slice(0, idx) +
      `<mark style="background:var(--ac-d);color:var(--ac);border-radius:2px">${label.slice(idx, idx+trigger.length)}</mark>` +
      label.slice(idx + trigger.length);
  },

  move(dir) {
    this.selected = Math.max(0, Math.min(this.items.length-1, this.selected + dir));
    const popup = document.getElementById('ac-popup');
    popup?.querySelectorAll('.ac-item').forEach((el,i) => el.classList.toggle('ac-selected', i===this.selected));
    popup?.querySelector('.ac-selected')?.scrollIntoView({block:'nearest'});
  },

  confirm() {
    const item = this.items[this.selected];
    if (!item) { this.hide(); return; }
    const inp = document.getElementById('msg-input');
    const val = inp.value;
    const before = val.slice(0, this._triggerStart);
    const after  = val.slice(this._triggerStart + this._trigger.length);
    inp.value = before + item.insert + after;
    // Move cursor to after the insert
    const newPos = this._triggerStart + item.insert.length;
    inp.setSelectionRange(newPos, newPos);
    inp.focus();
    inp.style.height = 'auto';
    inp.style.height = Math.min(inp.scrollHeight, 160) + 'px';

    // Also add char/org tag to bar if it's a char
    if (item.type === 'char') {
      const c = S.ci.get(item.id) || S.chars.find(x => x.id === item.id);
      if (c && !S.activeChars.find(x => x.id === c.id)) RP.toggleChar(c);
    }

    this.hide();
  },

  hide() {
    this.visible  = false;
    this.items    = [];
    this.selected = -1;
    const popup = document.getElementById('ac-popup');
    if (popup) popup.style.display = 'none';
  },
};

// Inject autocomplete CSS
const AC_CSS = `
.ac-popup{
  background:var(--bg2);border:1px solid var(--ln2);border-radius:8px;
  box-shadow:0 -8px 32px rgba(0,0,0,.5);z-index:600;
  padding:4px 0;
}
.ac-item{
  display:flex;align-items:center;gap:10px;padding:8px 12px;
  cursor:pointer;transition:background .1s;
}
.ac-item:hover,.ac-item.ac-selected{background:var(--bg3)}
.ac-ava{
  width:28px;height:28px;border-radius:50%;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;overflow:hidden;
}
.ac-info{flex:1;min-width:0}
.ac-label{font-size:13px;font-weight:500;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ac-sub{font-family:var(--mono);font-size:10px;color:var(--t2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ac-type-badge{
  font-family:var(--mono);font-size:9px;font-weight:600;
  padding:1px 6px;border-radius:2px;border:1px solid;
  text-transform:uppercase;letter-spacing:.06em;flex-shrink:0;
}
`;

(function injectAC() {
  const s = document.createElement('style');
  s.textContent = AC_CSS;
  document.head.appendChild(s);
})();

// Additional CSS for archive rooms + attach preview + ctx-menu (if not in main)
const EXTRA_CSS = `
.archived-room .room-name{font-style:italic}
.ctx-menu{background:var(--bg2);border:1px solid var(--ln2);border-radius:6px;padding:4px 0;min-width:180px;box-shadow:0 8px 32px rgba(0,0,0,.5)}
.ctx-item{display:flex;align-items:center;gap:8px;padding:7px 14px;font-size:13px;color:var(--t1);cursor:pointer;transition:background .1s}
.ctx-item:hover{background:var(--bg3);color:var(--t0)}
.ctx-item i{width:14px;text-align:center;font-size:12px;color:var(--t2)}
.ctx-item:hover i{color:var(--t0)}
.ctx-item.danger{color:var(--rd)}.ctx-item.danger i{color:var(--rd)}.ctx-item.danger:hover{background:var(--rd-d)}
.ctx-sep{height:1px;background:var(--ln);margin:3px 0}
`;
(function injectExtra() {
  const s = document.createElement('style');
  s.textContent = EXTRA_CSS;
  document.head.appendChild(s);
})();
