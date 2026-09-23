/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  dm_engine.js — Dungeon Master AI Engine                    ║
 * ║  Phase 5 — Firebase Edition                                 ║
 * ║                                                             ║
 * ║  Config-driven: reads window.DM_CONFIG at startup.          ║
 * ║  Drop this file into any RP world — zero code changes.      ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * BACKEND: Firebase Firestore (messaging + DM tables)
 *          Firebase AI Logic  (Gemini — no API key in browser)
 *
 * DOES NOT:
 *   Auto-interrupt players
 *   Send anything without operator approval (except NPC voice
 *   when operator explicitly triggers it)
 */

'use strict';

/* ════════════════════════════════════════════════════════
   CONFIG — lazy getter, reads window.DM_CONFIG at call time
════════════════════════════════════════════════════════ */
const DM_CFG = new Proxy({}, {
  get(_, key) { return (window.DM_CONFIG || {})[key]; },
});

const DM = {
  get GEM_MODEL()        { return window.DM_CONFIG?.geminiModel       || 'gemini-2.5-flash'; },
  get WORLD()            { return window.DM_CONFIG?.world             || 'nyc'; },
  get WORLD_NAME()       { return window.DM_CONFIG?.worldName         || 'NYC'; },
  get DB_TABLE()         { return window.DM_CONFIG?.dbTable           || 'nyc_db'; },
  get OPERATOR()         { return window.DM_CONFIG?.operator          || 'dm'; },
  get READ_INTERVAL()    { return window.DM_CONFIG?.readInterval      || 25; },
  get COLLECTION_PREFIX(){ return window.DM_CONFIG?.collectionPrefix  || ''; },
  set OPERATOR(v)        { if (window.DM_CONFIG) window.DM_CONFIG.operator = v; },

  _msgsSinceRead: 0,
  _worldCache:    null,
  _worldCacheAt:  0,
};

/* ════════════════════════════════════════════════════════
   FIREBASE HELPERS
════════════════════════════════════════════════════════ */
const DMFB = {
  _db() {
    if (!window._fbDb) throw new Error('[DM] Firebase hazır değil (window._fbDb yok)');
    return window._fbDb;
  },
  _fs() {
    if (!window._fbFirestore) throw new Error('[DM] Firebase Firestore SDK eksik');
    return window._fbFirestore;
  },
  _col(name) {
    return (DM.COLLECTION_PREFIX || '') + name;
  },

  async getDoc(colName, docId) {
    const { doc, getDoc } = this._fs();
    const snap = await getDoc(doc(this._db(), colName, docId));
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
  },

  async getDocs(colName, ...constraints) {
    const { collection, query, getDocs } = this._fs();
    const ref = collection(this._db(), colName);
    const q   = constraints.length ? query(ref, ...constraints) : query(ref);
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async setDoc(colName, docId, data) {
    const { doc, setDoc } = this._fs();
    await setDoc(doc(this._db(), colName, docId), {
      ...data,
      created_at: data.created_at || new Date().toISOString(),
    });
    return docId;
  },

  async updateDoc(colName, docId, data) {
    const { doc, updateDoc } = this._fs();
    await updateDoc(doc(this._db(), colName, docId), {
      ...data,
      updated_at: new Date().toISOString(),
    });
  },

  async addDoc(colName, data) {
    const { collection, addDoc } = this._fs();
    const ref = await addDoc(collection(this._db(), colName), {
      ...data,
      created_at: data.created_at || new Date().toISOString(),
    });
    return ref.id;
  },

  /** Post a message into Firebase subcollection rp_rooms/{roomId}/messages */
  async postRpMessage(roomId, msgData) {
    const { collection, addDoc } = this._fs();
    const col = this._col('rp_rooms');
    const ref = await addDoc(
      collection(this._db(), col, roomId, 'messages'),
      { ...msgData, created_at: new Date().toISOString() }
    );
    return ref.id;
  },

  /** Get recent messages from rp_rooms/{roomId}/messages */
  async getRecentMessages(roomId, lim = 12) {
    const { collection, query, orderBy, limit, getDocs } = this._fs();
    const col  = this._col('rp_rooms');
    const snap = await getDocs(
      query(
        collection(this._db(), col, roomId, 'messages'),
        orderBy('created_at', 'desc'),
        limit(lim)
      )
    );
    return snap.docs.map(d => ({ id: d.id, ...d.data() })).reverse();
  },

  increment(n = 1) {
    return this._fs().increment(n);
  },

  _incSession(field) {
    const col = this._col('dm_session');
    this.updateDoc(col, 'main', { [field]: this.increment(1) }).catch(() => {});
  },
};

/* ════════════════════════════════════════════════════════
   GEMINI CLIENT — Firebase AI Logic (no API key in browser)
════════════════════════════════════════════════════════ */
const DMGemini = {
  // API key is injected at build time by GitHub Actions (never hardcoded here)
  // window.DM_CONFIG.geminiKey is set in index.html as '__GEMINI_KEY__'
  // which gets replaced with the real key via: sed -i "s|__GEMINI_KEY__|${GEMINI_KEY}|g" index.html
  GEMINI_BASE: 'https://generativelanguage.googleapis.com/v1beta/models',

  async generate(prompt, opts = {}) {
    const key = window.DM_CONFIG?.geminiKey;
    if (!key || key === '__GEMINI_KEY__') {
      throw new Error('[DM] Gemini API key ayarlanmamış (GitHub Actions deploy gerekli)');
    }

    const model = DM.GEM_MODEL;
    const res = await fetch(
      `${DMGemini.GEMINI_BASE}/${model}:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: {
            temperature:      opts.temperature     ?? 0.75,
            topP:             opts.topP            ?? 0.9,
            maxOutputTokens:  opts.maxOutputTokens ?? 1500,
            responseMimeType: opts.json ? 'application/json' : 'text/plain',
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
          ],
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(`[DM] Gemini hata ${res.status}: ${err.error?.message || res.statusText}`);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('[DM] Gemini boş yanıt döndürdü');

    if (opts.json) {
      const cleaned = text
        .replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();
      return JSON.parse(cleaned);
    }
    return text;
  },
};

/* ════════════════════════════════════════════════════════
   WORLD CONTEXT — loads characters + orgs from Firebase
════════════════════════════════════════════════════════ */
const DMWorld = {
  CACHE_TTL: 60 * 60 * 1000,

  async load(force = false) {
    if (!force && DM._worldCache && Date.now() - DM._worldCacheAt < this.CACHE_TTL) {
      return DM._worldCache;
    }
    try {
      // Primary: use the helper already in nyc_rp.html
      let d = null;
      if (typeof window._fbLoadDB === 'function') {
        d = await window._fbLoadDB(DM.DB_TABLE);
      }
      // Fallback: direct Firestore read
      if (!d) {
        const row = await DMFB.getDoc(DM.DB_TABLE, 'main');
        if (!row) throw new Error('Main DB doc not found in Firebase');
        d = row.data || row;
      }
      if (typeof d === 'string') d = JSON.parse(d);
      DM._worldCache   = { characters: d.characters || [], organizations: d.organizations || [] };
      DM._worldCacheAt = Date.now();
      return DM._worldCache;
    } catch (e) {
      console.warn('[DM] World load failed:', e.message);
      return DM._worldCache || { characters: [], organizations: [] };
    }
  },

  async getNPCs() {
    const w = await this.load();
    return w.characters.filter(c => (!c.playerId || c.playerId === '') && c.status !== 'Deceased');
  },

  async getChar(id) {
    const w = await this.load();
    return w.characters.find(c => c.id === id) || null;
  },

  async getOrg(id) {
    const w = await this.load();
    return w.organizations.find(o => o.id === id) || null;
  },

  async buildRoster() {
    const w = await this.load();
    const npcList = w.characters
      .filter(c => (!c.playerId || c.playerId === '') && c.status !== 'Deceased')
      .map(c => {
        const orgIds   = c.organizations || (c.organization ? [c.organization] : []);
        const orgNames = orgIds.map(oid => w.organizations.find(o => o.id === oid)?.name || oid).join(', ');
        return `• [NPC] ${c.name} [${c.id}] alias="${c.alias||''}" org="${orgNames}" story="${(c.story||'').slice(0,120)}"`;
      }).join('\n');

    const pcList = w.characters
      .filter(c => c.playerId && c.status !== 'Deceased')
      .map(c => {
        const pl = (DM_CFG.players || []).find(p => p.id === c.playerId);
        return `• [PC:${pl?.name || c.playerId}] ${c.name} [${c.id}]`;
      }).join('\n');

    const orgList = w.organizations.map(o => `• ${o.name} [${o.id}]`).join('\n');

    return `PLAYER CHARACTERS:\n${pcList||'(none)'}\n\nNPC CHARACTERS:\n${npcList||'(none)'}\n\nORGANIZATIONS:\n${orgList||'(none)'}`;
  },
};

/* ════════════════════════════════════════════════════════
   CONTEXT WINDOW — rolling summary stored in Firebase
   Collection: dm_session  /  doc: main
════════════════════════════════════════════════════════ */
const DMContext = {
  _window:     [],
  MAX_ENTRIES: 6,

  async load() {
    try {
      const col = DMFB._col('dm_session');
      const row = await DMFB.getDoc(col, 'main');
      if (row && row.context_window) {
        this._window      = row.context_window;
        DM._msgsSinceRead = 0;
      }
    } catch (e) { /* first run */ }
  },

  async save() {
    try {
      const col = DMFB._col('dm_session');
      await DMFB.setDoc(col, 'main', {
        context_window:    this._window,
        context_msg_count: this._window.reduce((s, e) => s + (e.msg_count || 0), 0),
        updated_at:        new Date().toISOString(),
      });
    } catch (e) { console.warn('[DMContext] save failed:', e.message); }
  },

  add(entry) {
    this._window.unshift(entry);
    if (this._window.length > this.MAX_ENTRIES) this._window = this._window.slice(0, this.MAX_ENTRIES);
  },

  toString() {
    if (!this._window.length) return '(No prior context — session just started)';
    return this._window
      .map((e, i) => `[Context ${i+1} — ${new Date(e.created_at).toLocaleString()}]\n${e.summary}`)
      .join('\n\n---\n\n');
  },
};

/* ════════════════════════════════════════════════════════
   SYSTEM PROMPT BUILDER
════════════════════════════════════════════════════════ */
const DMPrompts = {
  _base(roster, context) {
    return `You are the Dungeon Master AI for ${DM.WORLD_NAME} — a ${DM.WORLD==='nyc'?'cyberpunk crime-noir New York City':'cyberpunk neo-noir Tokyo'} roleplay universe.

WORLD: ${DM.WORLD_NAME}
YOUR ROLE: DM AI — you control NPC characters, generate world events, and write dispatch communications.

RULES:
- Stay true to the world's tone: ${DM.WORLD==='nyc'?'gritty, noir, urban crime, corporate power, street gangs':'neon-lit, yakuza, corporate dystopia, tradition vs technology'}
- NPCs must speak/act consistent with their story, organization, and relationships
- Never break character. Never reference being an AI.
- Keep dialogue realistic and concise — RP style, not novel-writing
- Organizations have agendas. NPCs have loyalties and secrets.

${roster}

RECENT SESSION CONTEXT:
${context}`;
  },

  npcVoice(npcChar, triggerMsgs, roster, context, instruction='') {
    const orgIds = npcChar.organizations || (npcChar.organization ? [npcChar.organization] : []);
    return `${this._base(roster, context)}

---
YOU ARE NOW PLAYING: ${npcChar.name}
Character ID: ${npcChar.id}
Alias: ${npcChar.alias||'None'}
Organizations: ${orgIds.join(', ')||'None'}
Story: ${npcChar.story||'Unknown background'}
${npcChar.reputation?`Reputation: ${JSON.stringify(npcChar.reputation)}`:''}

RECENT MESSAGES (what just happened in the scene):
${triggerMsgs.map(m=>`[${m.char_name}${m.org_name?' ['+m.org_name+']':''}]: ${m.content}`).join('\n')}

${instruction?`OPERATOR INSTRUCTION: ${instruction}`:'Respond naturally as this character based on the recent scene.'}

Write ONLY the character's response. No narration wrapper. No quotation marks around the whole thing.
Format: If it's dialogue, just write what they say. If it's an action, wrap in [brackets].
Keep it 1-4 sentences unless the situation demands more.`;
  },

  worldEvent(triggerType, context, roster, extraInstruction='') {
    return `${this._base(roster, context)}

---
TASK: Generate a world event for the ${DM.WORLD_NAME} setting.
Trigger type: ${triggerType}
${extraInstruction?`Operator guidance: ${extraInstruction}`:''}

Create a believable, tension-building event that:
- Fits naturally into current RP context
- Involves existing organizations or factions where possible
- Has real consequences for the world
- Is NOT random chaos — it should feel like cause and effect

Respond ONLY with valid JSON (no markdown):
{
  "title": "short punchy title",
  "event_type": "territorial|political|corporate|conflict|social|criminal",
  "severity": "low|medium|high|critical",
  "description": "2-3 sentence event description in world tone",
  "consequences": "what changes as a result (1-2 sentences)",
  "affected_orgs": ["org_id_1"],
  "affected_chars": ["char_id_1"],
  "location_hint": "district or location name if relevant"
}`;
  },

  dispatch(org, callType, context, roster, incident='', extraInstruction='') {
    return `${this._base(roster, context)}

---
TASK: Write a radio/comms dispatch message.
Dispatching organization: ${org?.name||callType}
Call type: ${callType}
${incident?`Related incident: ${incident}`:''}
${extraInstruction?`Operator guidance: ${extraInstruction}`:''}

Write a realistic dispatch message in the style of ${DM.WORLD==='nyc'?'NYPD/crime org radio chatter':'Tokyo PD/yakuza comms'}.
Include a call code, location if relevant, and keep it terse — dispatchers don't monologue.

Respond ONLY with valid JSON:
{
  "call_code": "10-71 or ALPHA-3 or similar",
  "title": "one-line summary",
  "message": "the actual dispatch text (2-5 sentences max)",
  "location_name": "location if relevant or empty string",
  "severity": "low|medium|high|critical"
}`;
  },

  buildContext(messages, existingContext) {
    const transcript = messages
      .map(m=>`[${m.char_name}${m.org_name?' ['+m.org_name+']':''}]: ${m.content}`)
      .join('\n');
    return `You are the DM AI for ${DM.WORLD_NAME}. Build a compact context summary of the following RP session transcript.

This summary will be added to your context window to inform future NPC decisions and world events.

EXISTING CONTEXT SUMMARY:
${existingContext||'(none yet)'}

NEW TRANSCRIPT (${messages.length} messages):
${transcript}

Write a concise 3-5 sentence summary covering:
1. What happened (key events, confrontations, deals)
2. Who was involved and how relationships shifted
3. Any unresolved tensions or open threads
4. Notable locations mentioned

Be factual and RP-specific. No meta-commentary. Write in present tense.`;
  },

  createNPC(description, context, roster) {
    return `${this._base(roster, context)}

---
TASK: Create a new NPC character for the current scene.
Operator description: "${description}"

Generate a character that fits naturally into the current scene and world.
They should feel like they belong — not random, but organic to the environment.

Respond ONLY with valid JSON:
{
  "name": "Full Name",
  "alias": "street name or nickname or empty",
  "story": "2-3 sentence background — who are they, what do they want, what secrets do they have",
  "personality": "3-4 adjectives or short traits",
  "organizations": [],
  "threatLevel": "Low|Medium|High|Critical",
  "heatLevel": "Clean|Warm|Hot|Burning|Scorched",
  "opening_line": "the first thing they say or do when they appear in the scene (in-character)"
}`;
  },
};

/* ════════════════════════════════════════════════════════
   NPC ENGINE
════════════════════════════════════════════════════════ */
const DMNpc = {
  async trigger(charId, roomId, instruction='', operatorId='') {
    const [npcChar, roster, recentMsgs] = await Promise.all([
      DMWorld.getChar(charId),
      DMWorld.buildRoster(),
      DMFB.getRecentMessages(roomId, 12),
    ]);

    if (!npcChar)       throw new Error(`Character ${charId} not found`);
    if (npcChar.playerId) throw new Error(`${npcChar.name} is a PC — cannot be played by DM`);

    const prompt   = DMPrompts.npcVoice(npcChar, recentMsgs, roster, DMContext.toString(), instruction);
    const response = await DMGemini.generate(prompt, { temperature: 0.82 });

    const orgIds  = npcChar.organizations || (npcChar.organization ? [npcChar.organization] : []);
    const orgData = orgIds.length ? await DMWorld.getOrg(orgIds[0]) : null;

    // ─ Post to Firebase subcollection ─
    const msgId = await DMFB.postRpMessage(roomId, {
      char_id:      npcChar.id,
      char_name:    npcChar.name,
      char_alias:   npcChar.alias   || '',
      char_avatar:  npcChar.image   || '',
      org_id:       orgData?.id     || null,
      org_name:     orgData?.name   || null,
      org_color:    orgData?.color  || null,
      content:      response.trim(),
      reactions:    {},
      is_edited:    false,
      is_deleted:   false,
      sent_by_user: `DM:${operatorId || DM.OPERATOR}`,
    });

    // Log
    DMFB.addDoc(DMFB._col('dm_npc_messages'), {
      npc_char_id:    npcChar.id,
      npc_char_name:  npcChar.name,
      content:        response.trim(),
      message_type:   'dialogue',
      room_id:        roomId,
      rp_message_id:  msgId,
      trigger_msg_id: recentMsgs.length ? recentMsgs[recentMsgs.length-1].id : null,
      model_used:     DM.GEM_MODEL,
      operator_id:    operatorId || DM.OPERATOR,
    }).catch(()=>{});

    DMFB._incSession('npc_messages_sent');
    return { content: response.trim(), char: npcChar, rp_msg_id: msgId };
  },

  async createAndTrigger(description, roomId, operatorId='') {
    const [roster, recentMsgs] = await Promise.all([
      DMWorld.buildRoster(),
      DMFB.getRecentMessages(roomId, 8),
    ]);

    const npcData = await DMGemini.generate(
      DMPrompts.createNPC(description, DMContext.toString(), roster),
      { json: true, temperature: 0.85 }
    );

    const tmpId   = 'npc_' + DM.WORLD + '_' + Date.now();
    const newChar = {
      id: tmpId, name: npcData.name, alias: npcData.alias||'',
      story: npcData.story||'', organizations: [], playerId: '',
      status: 'Active', threatLevel: npcData.threatLevel||'Low',
      heatLevel: npcData.heatLevel||'Clean', image: '',
    };

    // Save new char into main DB doc
    if (DM_CFG.saveInstantNPCs !== false) {
      try {
        let mainData = await window._fbLoadDB?.(DM.DB_TABLE);
        if (!mainData) {
          const row = await DMFB.getDoc(DM.DB_TABLE, 'main');
          mainData = row?.data || row;
        }
        if (typeof mainData === 'string') mainData = JSON.parse(mainData);
        if (mainData) {
          mainData.characters = mainData.characters || [];
          mainData.characters.push(newChar);
          await DMFB.setDoc(DM.DB_TABLE, 'main', {
            data: mainData, updated_by: `DM:${operatorId}`,
          });
          DM._worldCache = null;
        }
      } catch (e) { console.warn('[DM] Could not save instant NPC:', e.message); }
    }

    const opening = npcData.opening_line || `*${newChar.name} enters the scene*`;
    await DMFB.postRpMessage(roomId, {
      char_id: tmpId, char_name: newChar.name, char_alias: newChar.alias,
      char_avatar: '', org_id: null, org_name: null, org_color: null,
      content: opening, reactions: {}, is_edited: false, is_deleted: false,
      sent_by_user: `DM:${operatorId || DM.OPERATOR}`,
    });

    return { char: newChar, opening, npcData };
  },
};

/* ════════════════════════════════════════════════════════
   READING ENGINE
════════════════════════════════════════════════════════ */
const DMReader = {
  _reading: false,

  onMessage() {
    DM._msgsSinceRead++;
    if (DM._msgsSinceRead >= DM.READ_INTERVAL) this.read('auto');
  },

  async read(reason='manual', roomId=null) {
    if (this._reading) return;
    this._reading     = true;
    DM._msgsSinceRead = 0;
    try {
      const targetRoom = roomId || DM_CFG.activeRoomId;
      if (!targetRoom) { this._reading = false; return; }

      const msgs = await DMFB.getRecentMessages(targetRoom, 30);
      if (!msgs.length) { this._reading = false; return; }

      const summary = await DMGemini.generate(
        DMPrompts.buildContext(msgs, DMContext.toString()),
        { temperature: 0.3, maxOutputTokens: 600 }
      );

      DMContext.add({ summary, msg_count: msgs.length, room_id: targetRoom, reason, created_at: new Date().toISOString() });
      await DMContext.save();
      DMFB._incSession('manual_reads');

      console.log(`[DM] Context updated (${reason}): ${msgs.length} msgs`);
      if (typeof DMEvents !== 'undefined') DMEvents.emit('context_updated', { reason, summary });
    } catch (e) {
      console.error('[DM] Read failed:', e);
    } finally {
      this._reading = false;
    }
  },
};

/* ════════════════════════════════════════════════════════
   WORLD EVENT ENGINE — Firebase dm_world_events
════════════════════════════════════════════════════════ */
const DMWorldEvent = {
  async generate(triggerType='manual', instruction='', operatorId='') {
    const roster    = await DMWorld.buildRoster();
    const eventData = await DMGemini.generate(
      DMPrompts.worldEvent(triggerType, DMContext.toString(), roster, instruction),
      { json: true, temperature: 0.78 }
    );
    const col = DMFB._col('dm_world_events');
    const id  = await DMFB.addDoc(col, {
      title: eventData.title, event_type: eventData.event_type||'tension',
      severity: eventData.severity||'medium', description: eventData.description,
      consequences: eventData.consequences||'', affected_orgs: eventData.affected_orgs||[],
      affected_chars: eventData.affected_chars||[], location_hint: eventData.location_hint||'',
      generated_from: triggerType, model_used: DM.GEM_MODEL,
      operator_id: operatorId||DM.OPERATOR, prompt_summary: instruction, status: 'pending',
    });
    DMFB._incSession('world_events_gen');
    return { ...eventData, id };
  },

  async approve(dmEventId, operatorId='') {
    const col = DMFB._col('dm_world_events');
    const ev  = await DMFB.getDoc(col, dmEventId);
    if (!ev) throw new Error('Event not found');
    const weId = await DMFB.addDoc(DMFB._col('world_events'), {
      title: ev.title, event_type: ev.event_type, severity: ev.severity,
      status: 'active', scope: 'local', description: ev.description,
      consequences: ev.consequences, factions: ev.affected_orgs,
      linked_characters: ev.affected_chars, event_date: new Date().toISOString(),
      is_public: true, source: 'ai_agent', created_by: `DM:${operatorId}`,
    });
    await DMFB.updateDoc(col, dmEventId, {
      status: 'fired', reviewed_by: operatorId,
      reviewed_at: new Date().toISOString(), world_event_id: weId,
    });
    return { worldEventId: weId, event: ev };
  },

  async reject(dmEventId, operatorId='', note='') {
    const col = DMFB._col('dm_world_events');
    await DMFB.updateDoc(col, dmEventId, {
      status: 'rejected', reviewed_by: operatorId,
      review_note: note, reviewed_at: new Date().toISOString(),
    });
  },
};

/* ════════════════════════════════════════════════════════
   DISPATCH ENGINE — Firebase dm_dispatch_queue
════════════════════════════════════════════════════════ */
const DMDispatch = {
  async generate(orgId='', callType='system', incident='', instruction='', operatorId='') {
    const [org, roster] = await Promise.all([
      orgId ? DMWorld.getOrg(orgId) : Promise.resolve(null),
      DMWorld.buildRoster(),
    ]);
    const dispData = await DMGemini.generate(
      DMPrompts.dispatch(org, callType, DMContext.toString(), roster, incident, instruction),
      { json: true, temperature: 0.65 }
    );
    const col = DMFB._col('dm_dispatch_queue');
    const id  = await DMFB.addDoc(col, {
      call_type: callType, call_code: dispData.call_code||'',
      org_id: orgId||'', org_name: org?.name||callType,
      title: dispData.title, message: dispData.message,
      location_name: dispData.location_name||'', severity: dispData.severity||'medium',
      triggered_by: incident?'incident':'manual', operator_id: operatorId||DM.OPERATOR,
      model_used: DM.GEM_MODEL, status: 'pending',
    });
    DMFB._incSession('dispatches_gen');
    return { ...dispData, id };
  },

  async approve(dmDispId, roomId, operatorId='') {
    const col = DMFB._col('dm_dispatch_queue');
    const dq  = await DMFB.getDoc(col, dmDispId);
    if (!dq) throw new Error('Dispatch not found');

    const dcId = await DMFB.addDoc(DMFB._col('dispatch_calls'), {
      call_type: dq.call_type, call_code: dq.call_code, severity: dq.severity,
      status: 'active', title: dq.title, message: dq.message,
      location_name: dq.location_name, responding_org: dq.org_id,
      is_public: true, source: 'ai_agent', created_by: `DM:${operatorId}`,
    });

    const dispMsg = `📡 **${dq.call_code?'['+dq.call_code+'] ':''}${dq.org_name||'DISPATCH'}**\n${dq.message}${dq.location_name?'\n📍 '+dq.location_name:''}`;
    const msgId = await DMFB.postRpMessage(roomId, {
      char_id: 'system_dispatch', char_name: dq.org_name||'DISPATCH',
      char_alias: dq.call_code||'', char_avatar: '',
      org_id: dq.org_id||null, org_name: dq.org_name||null, org_color: null,
      content: dispMsg, reactions: {}, is_edited: false, is_deleted: false,
      sent_by_user: `DM:${operatorId}`,
    });

    await DMFB.updateDoc(col, dmDispId, {
      status: 'broadcast', reviewed_by: operatorId,
      reviewed_at: new Date().toISOString(),
      dispatch_call_id: dcId, broadcast_msg_id: msgId,
    });
    return { dispatch_call_id: dcId, rp_msg_id: msgId, data: dq };
  },

  async reject(dmDispId, operatorId='', note='') {
    const col = DMFB._col('dm_dispatch_queue');
    await DMFB.updateDoc(col, dmDispId, {
      status: 'rejected', reviewed_by: operatorId,
      review_note: note, reviewed_at: new Date().toISOString(),
    });
  },
};

/* ════════════════════════════════════════════════════════
   SIMPLE EVENT BUS
════════════════════════════════════════════════════════ */
const DMEvents = {
  _handlers: {},
  on(event, fn)    { (this._handlers[event] = this._handlers[event]||[]).push(fn); },
  off(event, fn)   { this._handlers[event] = (this._handlers[event]||[]).filter(h=>h!==fn); },
  emit(event, data){ (this._handlers[event]||[]).forEach(fn=>{ try{fn(data);}catch(e){} }); },
};

/* ════════════════════════════════════════════════════════
   DM INIT
════════════════════════════════════════════════════════ */
const DMInit = {
  async start() {
    console.log(`[DM] Initializing for world: ${DM.WORLD_NAME}`);
    // Wait for Firebase Firestore
    let waited = 0;
    while (!window._fbDb && waited < 8000) {
      await new Promise(r => setTimeout(r, 100));
      waited += 100;
    }
    if (!window._fbDb) throw new Error('[DM] Firebase Firestore hazır değil');

    await Promise.all([ DMWorld.load(true), DMContext.load() ]);
    const npcs = await DMWorld.getNPCs();
    console.log(`[DM] Ready. NPCs: ${npcs.length}`);
    DMEvents.emit('ready', { world: DM.WORLD, worldName: DM.WORLD_NAME });
  },
};

/* ════════════════════════════════════════════════════════
   PUBLIC API — window.DMEngine
════════════════════════════════════════════════════════ */
window.DMEngine = {
  start:            ()                                                           => DMInit.start(),
  npcTrigger:       (charId, roomId, instruction, operatorId)                   => DMNpc.trigger(charId, roomId, instruction, operatorId),
  npcCreate:        (description, roomId, operatorId)                           => DMNpc.createAndTrigger(description, roomId, operatorId),
  npcList:          ()                                                           => DMWorld.getNPCs(),
  onMessage:        ()                                                           => DMReader.onMessage(),
  readNow:          (roomId)                                                     => DMReader.read('manual', roomId),
  getContext:       ()                                                           => DMContext.toString(),
  generateEvent:    (type, instruction, operatorId)                              => DMWorldEvent.generate(type, instruction, operatorId),
  approveEvent:     (id, operatorId)                                             => DMWorldEvent.approve(id, operatorId),
  rejectEvent:      (id, operatorId, note)                                       => DMWorldEvent.reject(id, operatorId, note),
  generateDispatch: (orgId, callType, incident, instruction, operatorId)         => DMDispatch.generate(orgId, callType, incident, instruction, operatorId),
  approveDispatch:  (id, roomId, operatorId)                                     => DMDispatch.approve(id, roomId, operatorId),
  rejectDispatch:   (id, operatorId, note)                                       => DMDispatch.reject(id, operatorId, note),
  getWorld:         ()                                                           => DMWorld.load(),
  refreshWorld:     ()                                                           => DMWorld.load(true),
  on:               (event, fn)                                                  => DMEvents.on(event, fn),
  off:              (event, fn)                                                  => DMEvents.off(event, fn),
  setOperator:      (id)                                                         => { DM.OPERATOR = id; },
  setRoomId:        (id)                                                         => { DM_CFG.activeRoomId = id; },
};
