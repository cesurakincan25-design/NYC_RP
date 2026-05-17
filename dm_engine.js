/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  dm_engine.js — Dungeon Master AI Engine                    ║
 * ║  Phase 4 — NYC_RP / TOKYO_RP                                ║
 * ║                                                             ║
 * ║  Config-driven: reads window.DM_CONFIG at startup.          ║
 * ║  Drop this file into any RP world — zero code changes.      ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * RESPONSIBILITIES:
 *   NPC Voice    — AI plays NPC characters on manual trigger
 *   World Events — AI generates events for admin approval
 *   Dispatch     — AI writes radio/comms for admin approval
 *   Reading      — builds context window every N msgs + manual
 *
 * DOES NOT:
 *   Auto-interrupt players
 *   Send anything without operator approval (except NPC voice
 *   when operator explicitly triggers it)
 */

'use strict';

/* ════════════════════════════════════════════════════════
   CONFIG CONTRACT
   Caller must set window.DM_CONFIG before loading this file.
   nyc_rp.html sets it from RPCONFIG + hardcoded keys.
════════════════════════════════════════════════════════ */
const DM_CFG = window.DM_CONFIG || {};

const DM = {
  SUPA_URL:   DM_CFG.supaUrl   || '',
  SUPA_KEY:   DM_CFG.supaKey   || '',
  GEM_KEY:    DM_CFG.geminiKey || '',
  GEM_MODEL:  DM_CFG.geminiModel || 'gemini-1.5-flash',
  WORLD:      DM_CFG.world     || 'nyc',   // 'nyc' | 'tokyo'
  WORLD_NAME: DM_CFG.worldName || 'NYC',
  DB_TABLE:   DM_CFG.dbTable   || 'nyc_db',
  OPERATOR:   DM_CFG.operator  || 'dm',

  // How many messages before auto-read
  READ_INTERVAL: DM_CFG.readInterval || 25,

  _msgsSinceRead: 0,
  _worldCache:    null,   // { characters, organizations } — refreshed hourly
  _worldCacheAt:  0,
  _sessionId:     'main',
};

/* ════════════════════════════════════════════════════════
   SUPABASE HELPERS (standalone — no dependency on nyc_rp.html DB)
════════════════════════════════════════════════════════ */
const DMDB = {
  _h() {
    return {
      'apikey':        DM.SUPA_KEY,
      'Authorization': 'Bearer ' + DM.SUPA_KEY,
      'Content-Type':  'application/json',
      'Prefer':        'return=representation',
    };
  },
  async get(path) {
    const r = await fetch(`${DM.SUPA_URL}/rest/v1/${path}`, { headers: this._h() });
    if (!r.ok) throw new Error(`[DMDB] GET ${path} → ${r.status}: ${await r.text()}`);
    return r.json();
  },
  async post(table, body) {
    const r = await fetch(`${DM.SUPA_URL}/rest/v1/${table}`, {
      method: 'POST', headers: this._h(), body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`[DMDB] POST ${table} → ${r.status}: ${await r.text()}`);
    return r.json();
  },
  async patch(table, qs, body) {
    const r = await fetch(`${DM.SUPA_URL}/rest/v1/${table}?${qs}`, {
      method: 'PATCH', headers: this._h(), body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`[DMDB] PATCH ${table} → ${r.status}`);
    return r.json();
  },
};

/* ════════════════════════════════════════════════════════
   GEMINI CLIENT
════════════════════════════════════════════════════════ */
const DMGemini = {
  async generate(prompt, opts = {}) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${DM.GEM_MODEL}:generateContent?key=${DM.GEM_KEY}`;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature:      opts.temperature      ?? 0.75,
          topP:             opts.topP             ?? 0.9,
          maxOutputTokens:  opts.maxOutputTokens  ?? 1500,
          responseMimeType: opts.json ? 'application/json' : 'text/plain',
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        ],
      }),
    });
    if (!r.ok) throw new Error(`Gemini ${r.status}: ${await r.text()}`);
    const d = await r.json();
    const text = d?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Gemini returned empty content');
    if (opts.json) {
      return JSON.parse(text.replace(/^```json\s*/i,'').replace(/^```\s*/i,'').replace(/\s*```$/i,'').trim());
    }
    return text;
  },
};

/* ════════════════════════════════════════════════════════
   WORLD CONTEXT — loads characters + orgs from main DB
════════════════════════════════════════════════════════ */
const DMWorld = {
  CACHE_TTL: 60 * 60 * 1000, // 1 hour

  async load(force = false) {
    if (!force && DM._worldCache && Date.now() - DM._worldCacheAt < this.CACHE_TTL) {
      return DM._worldCache;
    }
    try {
      const rows = await DMDB.get(`${DM.DB_TABLE}?id=eq.main&select=data`);
      if (!rows.length) throw new Error('Main DB row not found');
      const d = typeof rows[0].data === 'string' ? JSON.parse(rows[0].data) : rows[0].data;
      DM._worldCache = {
        characters:    d.characters    || [],
        organizations: d.organizations || [],
      };
      DM._worldCacheAt = Date.now();
      return DM._worldCache;
    } catch (e) {
      console.warn('[DM] World load failed:', e.message);
      return DM._worldCache || { characters: [], organizations: [] };
    }
  },

  /** Returns all NPC characters (playerId empty or missing) */
  async getNPCs() {
    const w = await this.load();
    return w.characters.filter(c =>
      (!c.playerId || c.playerId === '') &&
      c.status !== 'Deceased'
    );
  },

  /** Returns a specific character by id */
  async getChar(id) {
    const w = await this.load();
    return w.characters.find(c => c.id === id) || null;
  },

  /** Returns org by id */
  async getOrg(id) {
    const w = await this.load();
    return w.organizations.find(o => o.id === id) || null;
  },

  /** Compact roster string for prompt injection */
  async buildRoster() {
    const w = await this.load();
    const npcList = w.characters
      .filter(c => (!c.playerId || c.playerId === '') && c.status !== 'Deceased')
      .map(c => {
        const orgIds = c.organizations || (c.organization ? [c.organization] : []);
        const orgNames = orgIds.map(oid => w.organizations.find(o => o.id === oid)?.name || oid).join(', ');
        return `• [NPC] ${c.name} [${c.id}] alias="${c.alias || ''}" org="${orgNames}" story="${(c.story || '').slice(0, 120)}"`;
      }).join('\n');

    const pcList = w.characters
      .filter(c => c.playerId && c.status !== 'Deceased')
      .map(c => {
        const pl = (DM_CFG.players || []).find(p => p.id === c.playerId);
        return `• [PC:${pl?.name || c.playerId}] ${c.name} [${c.id}]`;
      }).join('\n');

    const orgList = w.organizations
      .map(o => `• ${o.name} [${o.id}]`)
      .join('\n');

    return `PLAYER CHARACTERS:\n${pcList || '(none)'}\n\nNPC CHARACTERS:\n${npcList || '(none)'}\n\nORGANIZATIONS:\n${orgList || '(none)'}`;
  },
};

/* ════════════════════════════════════════════════════════
   CONTEXT WINDOW — rolling summary of recent RP
════════════════════════════════════════════════════════ */
const DMContext = {
  _window: [],          // [{ summary, covered_msgs, created_at }]
  MAX_ENTRIES: 6,       // keep last 6 summaries (~150 messages of context)

  async load() {
    try {
      const rows = await DMDB.get('dm_session?id=eq.main&select=context_window,context_msg_count');
      if (rows.length && rows[0].context_window) {
        this._window = rows[0].context_window;
        DM._msgsSinceRead = 0;
      }
    } catch (e) { /* first run */ }
  },

  async save() {
    try {
      await DMDB.patch('dm_session', 'id=eq.main', {
        context_window:    this._window,
        context_msg_count: this._window.reduce((s, e) => s + (e.msg_count || 0), 0),
        updated_at:        new Date().toISOString(),
      });
    } catch (e) { console.warn('[DMContext] save failed:', e.message); }
  },

  add(entry) {
    this._window.unshift(entry);
    if (this._window.length > this.MAX_ENTRIES) {
      this._window = this._window.slice(0, this.MAX_ENTRIES);
    }
  },

  /** Returns a compact string of all summaries for prompt injection */
  toString() {
    if (!this._window.length) return '(No prior context — session just started)';
    return this._window
      .map((e, i) => `[Context ${i + 1} — ${new Date(e.created_at).toLocaleString()}]\n${e.summary}`)
      .join('\n\n---\n\n');
  },
};

/* ════════════════════════════════════════════════════════
   SYSTEM PROMPT BUILDER
════════════════════════════════════════════════════════ */
const DMPrompts = {
  _base(roster, context) {
    return `You are the Dungeon Master AI for ${DM.WORLD_NAME} — a ${DM.WORLD === 'nyc' ? 'cyberpunk crime-noir New York City' : 'cyberpunk neo-noir Tokyo'} roleplay universe.

WORLD: ${DM.WORLD_NAME}
YOUR ROLE: DM AI — you control NPC characters, generate world events, and write dispatch communications.

RULES:
- Stay true to the world's tone: ${DM.WORLD === 'nyc' ? 'gritty, noir, urban crime, corporate power, street gangs' : 'neon-lit, yakuza, corporate dystopia, tradition vs technology'}
- NPCs must speak/act consistent with their story, organization, and relationships
- Never break character. Never reference being an AI.
- Keep dialogue realistic and concise — RP style, not novel-writing
- Organizations have agendas. NPCs have loyalties and secrets.

${roster}

RECENT SESSION CONTEXT:
${context}`;
  },

  /* ── NPC Voice prompt ─────────────────────────────────── */
  npcVoice(npcChar, triggerMsgs, roster, context, instruction = '') {
    const orgIds = npcChar.organizations || (npcChar.organization ? [npcChar.organization] : []);
    return `${this._base(roster, context)}

---
YOU ARE NOW PLAYING: ${npcChar.name}
Character ID: ${npcChar.id}
Alias: ${npcChar.alias || 'None'}
Organizations: ${orgIds.join(', ') || 'None'}
Story: ${npcChar.story || 'Unknown background'}
${npcChar.reputation ? `Reputation: ${JSON.stringify(npcChar.reputation)}` : ''}

RECENT MESSAGES (what just happened in the scene):
${triggerMsgs.map(m => `[${m.char_name}${m.org_name ? ' ['+m.org_name+']' : ''}]: ${m.content}`).join('\n')}

${instruction ? `OPERATOR INSTRUCTION: ${instruction}` : 'Respond naturally as this character based on the recent scene.'}

Write ONLY the character's response. No narration wrapper. No quotation marks around the whole thing.
Format: If it's dialogue, just write what they say. If it's an action, wrap in [brackets].
Keep it 1-4 sentences unless the situation demands more.`;
  },

  /* ── World Event prompt ───────────────────────────────── */
  worldEvent(triggerType, context, roster, extraInstruction = '') {
    return `${this._base(roster, context)}

---
TASK: Generate a world event for the ${DM.WORLD_NAME} setting.
Trigger type: ${triggerType}
${extraInstruction ? `Operator guidance: ${extraInstruction}` : ''}

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
  "affected_orgs": ["org_id_1", "org_id_2"],
  "affected_chars": ["char_id_1"],
  "location_hint": "district or location name if relevant"
}`;
  },

  /* ── Dispatch prompt ──────────────────────────────────── */
  dispatch(org, callType, context, roster, incident = '', extraInstruction = '') {
    return `${this._base(roster, context)}

---
TASK: Write a radio/comms dispatch message.
Dispatching organization: ${org?.name || callType}
Call type: ${callType}
${incident ? `Related incident: ${incident}` : ''}
${extraInstruction ? `Operator guidance: ${extraInstruction}` : ''}

Write a realistic dispatch message in the style of ${DM.WORLD === 'nyc' ? 'NYPD/crime org radio chatter' : 'Tokyo PD/yakuza comms'}.
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

  /* ── Reading / Context Build prompt ──────────────────── */
  buildContext(messages, existingContext) {
    const transcript = messages
      .map(m => `[${m.char_name}${m.org_name ? ' [' + m.org_name + ']' : ''}]: ${m.content}`)
      .join('\n');

    return `You are the DM AI for ${DM.WORLD_NAME}. Build a compact context summary of the following RP session transcript.

This summary will be added to your context window to inform future NPC decisions and world events.

EXISTING CONTEXT SUMMARY:
${existingContext || '(none yet)'}

NEW TRANSCRIPT (${messages.length} messages):
${transcript}

Write a concise 3-5 sentence summary covering:
1. What happened (key events, confrontations, deals)
2. Who was involved and how relationships shifted
3. Any unresolved tensions or open threads
4. Notable locations mentioned

Be factual and RP-specific. No meta-commentary. Write in present tense.`;
  },

  /* ── Instant NPC Creation prompt ─────────────────────── */
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
   NPC ENGINE — core NPC voice system
════════════════════════════════════════════════════════ */
const DMNpc = {
  /** Get recent messages from a room for context */
  async _getRecentMsgs(roomId, limit = 12) {
    try {
      return await DMDB.get(
        `rp_messages?room_id=eq.${roomId}&is_deleted=eq.false&order=created_at.desc&limit=${limit}&select=id,char_name,org_name,content,char_id,created_at`
      ).then(r => r.reverse());
    } catch (e) { return []; }
  },

  /**
   * Trigger an NPC to speak/act.
   * @param {string} charId - character id from main DB
   * @param {string} roomId - which room to send to
   * @param {string} instruction - optional operator instruction ("act suspicious", "reveal the deal")
   * @param {string} operatorId - who triggered this
   */
  async trigger(charId, roomId, instruction = '', operatorId = '') {
    const [npcChar, roster, recentMsgs] = await Promise.all([
      DMWorld.getChar(charId),
      DMWorld.buildRoster(),
      this._getRecentMsgs(roomId, 12),
    ]);

    if (!npcChar) throw new Error(`Character ${charId} not found`);
    if (npcChar.playerId) throw new Error(`${npcChar.name} is a player character — cannot be played by DM`);

    const prompt = DMPrompts.npcVoice(npcChar, recentMsgs, roster, DMContext.toString(), instruction);
    const response = await DMGemini.generate(prompt, { temperature: 0.82 });

    // Post as rp_message
    const orgIds = npcChar.organizations || (npcChar.organization ? [npcChar.organization] : []);
    const orgData = orgIds.length ? await DMWorld.getOrg(orgIds[0]) : null;

    const msgRows = await DMDB.post('rp_messages', {
      room_id:     roomId,
      char_id:     npcChar.id,
      char_name:   npcChar.name,
      char_alias:  npcChar.alias || '',
      char_avatar: npcChar.image || '',
      org_id:      orgData?.id   || null,
      org_name:    orgData?.name || null,
      org_color:   orgData?.color || null,
      content:     response.trim(),
      reactions:   {},
      is_edited:   false,
      sent_by_user: `DM:${operatorId || DM.OPERATOR}`,
    });

    const rp_msg_id = msgRows[0]?.id || null;

    // Log to dm_npc_messages
    await DMDB.post('dm_npc_messages', {
      npc_char_id:   npcChar.id,
      npc_char_name: npcChar.name,
      content:       response.trim(),
      message_type:  'dialogue',
      room_id:       roomId,
      rp_message_id: rp_msg_id,
      trigger_msg_id: recentMsgs.length ? recentMsgs[recentMsgs.length - 1].id : null,
      model_used:    DM.GEM_MODEL,
      operator_id:   operatorId || DM.OPERATOR,
    }).catch(() => {});

    // Update session stats
    DMDB.patch('dm_session', 'id=eq.main', {
      npc_messages_sent: { increment: 1 },
      updated_at: new Date().toISOString(),
    }).catch(() => {});

    return { content: response.trim(), char: npcChar, rp_msg_id };
  },

  /**
   * Create a brand-new NPC instantly and have them appear in the scene.
   * @param {string} description - operator's plain-text description
   * @param {string} roomId
   * @param {string} operatorId
   */
  async createAndTrigger(description, roomId, operatorId = '') {
    const [roster, recentMsgs] = await Promise.all([
      DMWorld.buildRoster(),
      this._getRecentMsgs(roomId, 8),
    ]);

    // Generate NPC profile
    const npcData = await DMGemini.generate(
      DMPrompts.createNPC(description, DMContext.toString(), roster),
      { json: true, temperature: 0.85 }
    );

    // Build a temp ID
    const tmpId = 'npc_' + DM.WORLD + '_' + Date.now();
    const newChar = {
      id:          tmpId,
      name:        npcData.name,
      alias:       npcData.alias || '',
      story:       npcData.story || '',
      organizations: [],
      playerId:    '',
      status:      'Active',
      threatLevel: npcData.threatLevel || 'Low',
      heatLevel:   npcData.heatLevel   || 'Clean',
      image:       '',
    };

    // Optionally save to main DB (adds to character list)
    if (DM_CFG.saveInstantNPCs !== false) {
      try {
        const mainRows = await DMDB.get(`${DM.DB_TABLE}?id=eq.main&select=data`);
        if (mainRows.length) {
          const mainData = typeof mainRows[0].data === 'string'
            ? JSON.parse(mainRows[0].data) : mainRows[0].data;
          mainData.characters = mainData.characters || [];
          mainData.characters.push(newChar);
          await DMDB.patch(DM.DB_TABLE, 'id=eq.main', {
            data: mainData,
            updated_by: `DM:${operatorId}`,
            updated_at: new Date().toISOString(),
          });
          // Invalidate world cache
          DM._worldCache = null;
        }
      } catch (e) {
        console.warn('[DM] Could not save instant NPC to DB:', e.message);
      }
    }

    // Post opening line as rp_message
    const opening = npcData.opening_line || `*${newChar.name} enters the scene*`;
    await DMDB.post('rp_messages', {
      room_id:      roomId,
      char_id:      tmpId,
      char_name:    newChar.name,
      char_alias:   newChar.alias,
      char_avatar:  '',
      org_id:       null,
      org_name:     null,
      org_color:    null,
      content:      opening,
      reactions:    {},
      is_edited:    false,
      sent_by_user: `DM:${operatorId || DM.OPERATOR}`,
    });

    return { char: newChar, opening, npcData };
  },
};

/* ════════════════════════════════════════════════════════
   READING ENGINE — context window builder
════════════════════════════════════════════════════════ */
const DMReader = {
  _reading: false,

  /** Called by the RP client whenever a new message arrives */
  onMessage() {
    DM._msgsSinceRead++;
    if (DM._msgsSinceRead >= DM.READ_INTERVAL) {
      this.read('auto');
    }
  },

  /**
   * Read recent messages and update context window.
   * @param {string} reason - 'auto' | 'manual'
   * @param {string} roomId - optional, reads from active room
   */
  async read(reason = 'manual', roomId = null) {
    if (this._reading) return;
    this._reading = true;
    DM._msgsSinceRead = 0;

    try {
      const targetRoom = roomId || DM_CFG.activeRoomId;
      if (!targetRoom) { this._reading = false; return; }

      // Get last N messages
      const msgs = await DMDB.get(
        `rp_messages?room_id=eq.${targetRoom}&is_deleted=eq.false&order=created_at.desc&limit=30&select=id,char_name,org_name,content,created_at`
      ).then(r => r.reverse());

      if (!msgs.length) { this._reading = false; return; }

      // Build summary
      const summary = await DMGemini.generate(
        DMPrompts.buildContext(msgs, DMContext.toString()),
        { temperature: 0.3, maxOutputTokens: 600 }
      );

      // Add to context window
      DMContext.add({
        summary,
        msg_count: msgs.length,
        room_id:   targetRoom,
        reason,
        created_at: new Date().toISOString(),
      });

      await DMContext.save();

      // Update session stats
      DMDB.patch('dm_session', 'id=eq.main', {
        manual_reads: { increment: 1 },
        updated_at: new Date().toISOString(),
      }).catch(() => {});

      console.log(`[DM] Context updated (${reason}): ${msgs.length} messages summarized`);
      if (typeof DMEvents !== 'undefined') DMEvents.emit('context_updated', { reason, summary });

    } catch (e) {
      console.error('[DM] Read failed:', e);
    } finally {
      this._reading = false;
    }
  },
};

/* ════════════════════════════════════════════════════════
   WORLD EVENT ENGINE
════════════════════════════════════════════════════════ */
const DMWorldEvent = {
  /**
   * Generate a world event for admin review.
   * @param {string} triggerType - 'manual' | 'faction_tension' | 'incident'
   * @param {string} instruction - operator guidance
   * @param {string} operatorId
   */
  async generate(triggerType = 'manual', instruction = '', operatorId = '') {
    const roster = await DMWorld.buildRoster();
    const eventData = await DMGemini.generate(
      DMPrompts.worldEvent(triggerType, DMContext.toString(), roster, instruction),
      { json: true, temperature: 0.78 }
    );

    // Save to dm_world_events (pending admin review)
    const rows = await DMDB.post('dm_world_events', {
      title:          eventData.title,
      event_type:     eventData.event_type || 'tension',
      severity:       eventData.severity   || 'medium',
      description:    eventData.description,
      consequences:   eventData.consequences || '',
      affected_orgs:  eventData.affected_orgs || [],
      affected_chars: eventData.affected_chars || [],
      location_hint:  eventData.location_hint || '',
      generated_from: triggerType,
      model_used:     DM.GEM_MODEL,
      operator_id:    operatorId || DM.OPERATOR,
      prompt_summary: instruction,
      status:         'pending',
    });

    DMDB.patch('dm_session', 'id=eq.main', {
      world_events_gen: { increment: 1 },
      updated_at: new Date().toISOString(),
    }).catch(() => {});

    return { ...eventData, id: rows[0]?.id };
  },

  /**
   * Admin approves a pending event → fires it into world_events table.
   */
  async approve(dmEventId, operatorId = '') {
    const rows = await DMDB.get(`dm_world_events?id=eq.${dmEventId}&select=*`);
    if (!rows.length) throw new Error('Event not found');
    const ev = rows[0];

    // Write to actual world_events table
    const weRows = await DMDB.post('world_events', {
      title:            ev.title,
      event_type:       ev.event_type,
      severity:         ev.severity,
      status:           'active',
      scope:            'local',
      description:      ev.description,
      consequences:     ev.consequences,
      factions:         ev.affected_orgs,
      linked_characters:ev.affected_chars,
      event_date:       new Date().toISOString(),
      is_public:        true,
      source:           'ai_agent',
      created_by:       `DM:${operatorId}`,
    });

    const weId = weRows[0]?.id;

    // Update dm_world_events status
    await DMDB.patch('dm_world_events', `id=eq.${dmEventId}`, {
      status:         'fired',
      reviewed_by:    operatorId,
      reviewed_at:    new Date().toISOString(),
      world_event_id: weId,
    });

    return { worldEventId: weId, event: ev };
  },

  async reject(dmEventId, operatorId = '', note = '') {
    await DMDB.patch('dm_world_events', `id=eq.${dmEventId}`, {
      status:      'rejected',
      reviewed_by: operatorId,
      review_note: note,
      reviewed_at: new Date().toISOString(),
    });
  },
};

/* ════════════════════════════════════════════════════════
   DISPATCH ENGINE
════════════════════════════════════════════════════════ */
const DMDispatch = {
  /**
   * Generate a dispatch message for admin review.
   * @param {string} orgId - which org dispatches (can be null for generic)
   * @param {string} callType - 'nypd'|'faction'|'system' etc
   * @param {string} incident - brief incident description
   * @param {string} instruction - operator guidance
   * @param {string} operatorId
   */
  async generate(orgId = '', callType = 'system', incident = '', instruction = '', operatorId = '') {
    const [org, roster] = await Promise.all([
      orgId ? DMWorld.getOrg(orgId) : Promise.resolve(null),
      DMWorld.buildRoster(),
    ]);

    const dispData = await DMGemini.generate(
      DMPrompts.dispatch(org, callType, DMContext.toString(), roster, incident, instruction),
      { json: true, temperature: 0.65 }
    );

    const rows = await DMDB.post('dm_dispatch_queue', {
      call_type:    callType,
      call_code:    dispData.call_code || '',
      org_id:       orgId || '',
      org_name:     org?.name || callType,
      title:        dispData.title,
      message:      dispData.message,
      location_name:dispData.location_name || '',
      severity:     dispData.severity || 'medium',
      triggered_by: incident ? 'incident' : 'manual',
      operator_id:  operatorId || DM.OPERATOR,
      model_used:   DM.GEM_MODEL,
      status:       'pending',
    });

    DMDB.patch('dm_session', 'id=eq.main', {
      dispatches_gen: { increment: 1 },
      updated_at: new Date().toISOString(),
    }).catch(() => {});

    return { ...dispData, id: rows[0]?.id };
  },

  /**
   * Admin approves dispatch → fires to dispatch_calls + broadcasts to Live room.
   */
  async approve(dmDispId, roomId, operatorId = '') {
    const rows = await DMDB.get(`dm_dispatch_queue?id=eq.${dmDispId}&select=*`);
    if (!rows.length) throw new Error('Dispatch not found');
    const dq = rows[0];

    // Write to dispatch_calls
    const dcRows = await DMDB.post('dispatch_calls', {
      call_type:    dq.call_type,
      call_code:    dq.call_code,
      severity:     dq.severity,
      status:       'active',
      title:        dq.title,
      message:      dq.message,
      location_name:dq.location_name,
      responding_org: dq.org_id,
      is_public:    true,
      source:       'ai_agent',
      created_by:   `DM:${operatorId}`,
    });
    const dcId = dcRows[0]?.id;

    // Format as RP message in the target room (dispatch style)
    const dispMsg = `📡 **${dq.call_code ? '['+dq.call_code+'] ' : ''}${dq.org_name || 'DISPATCH'}**\n${dq.message}${dq.location_name ? '\n📍 ' + dq.location_name : ''}`;

    const msgRows = await DMDB.post('rp_messages', {
      room_id:      roomId,
      char_id:      'system_dispatch',
      char_name:    dq.org_name || 'DISPATCH',
      char_alias:   dq.call_code || '',
      char_avatar:  '',
      org_id:       dq.org_id   || null,
      org_name:     dq.org_name || null,
      org_color:    null,
      content:      dispMsg,
      reactions:    {},
      is_edited:    false,
      sent_by_user: `DM:${operatorId}`,
    });

    const msgId = msgRows[0]?.id;

    // Update queue
    await DMDB.patch('dm_dispatch_queue', `id=eq.${dmDispId}`, {
      status:           'broadcast',
      reviewed_by:      operatorId,
      reviewed_at:      new Date().toISOString(),
      dispatch_call_id: dcId,
      broadcast_msg_id: msgId,
    });

    return { dispatch_call_id: dcId, rp_msg_id: msgId, data: dq };
  },

  async reject(dmDispId, operatorId = '', note = '') {
    await DMDB.patch('dm_dispatch_queue', `id=eq.${dmDispId}`, {
      status:      'rejected',
      reviewed_by: operatorId,
      review_note: note,
      reviewed_at: new Date().toISOString(),
    });
  },
};

/* ════════════════════════════════════════════════════════
   SIMPLE EVENT BUS — lets UI hook into DM events
════════════════════════════════════════════════════════ */
const DMEvents = {
  _handlers: {},
  on(event, fn) { (this._handlers[event] = this._handlers[event] || []).push(fn); },
  off(event, fn) { this._handlers[event] = (this._handlers[event] || []).filter(h => h !== fn); },
  emit(event, data) { (this._handlers[event] || []).forEach(fn => { try { fn(data); } catch(e) {} }); },
};

/* ════════════════════════════════════════════════════════
   DM INIT
════════════════════════════════════════════════════════ */
const DMInit = {
  async start() {
    console.log(`[DM] Initializing for world: ${DM.WORLD_NAME}`);
    await Promise.all([
      DMWorld.load(true),
      DMContext.load(),
    ]);
    console.log(`[DM] Ready. NPCs available:`, (await DMWorld.getNPCs()).length);
    DMEvents.emit('ready', { world: DM.WORLD, worldName: DM.WORLD_NAME });
  },
};

/* ════════════════════════════════════════════════════════
   PUBLIC API — exposed as window.DMEngine
════════════════════════════════════════════════════════ */
window.DMEngine = {
  // Init
  start:        () => DMInit.start(),

  // NPC
  npcTrigger:   (charId, roomId, instruction, operatorId) => DMNpc.trigger(charId, roomId, instruction, operatorId),
  npcCreate:    (description, roomId, operatorId)          => DMNpc.createAndTrigger(description, roomId, operatorId),
  npcList:      ()                                         => DMWorld.getNPCs(),

  // Reading
  onMessage:    ()                                         => DMReader.onMessage(),
  readNow:      (roomId)                                   => DMReader.read('manual', roomId),
  getContext:   ()                                         => DMContext.toString(),

  // World Events
  generateEvent:(type, instruction, operatorId)            => DMWorldEvent.generate(type, instruction, operatorId),
  approveEvent: (id, operatorId)                           => DMWorldEvent.approve(id, operatorId),
  rejectEvent:  (id, operatorId, note)                     => DMWorldEvent.reject(id, operatorId, note),

  // Dispatch
  generateDispatch: (orgId, callType, incident, instruction, operatorId) => DMDispatch.generate(orgId, callType, incident, instruction, operatorId),
  approveDispatch:  (id, roomId, operatorId)               => DMDispatch.approve(id, roomId, operatorId),
  rejectDispatch:   (id, operatorId, note)                 => DMDispatch.reject(id, operatorId, note),

  // World data
  getWorld:     ()                                         => DMWorld.load(),
  refreshWorld: ()                                         => DMWorld.load(true),

  // Events
  on:           (event, fn)                                => DMEvents.on(event, fn),
  off:          (event, fn)                                => DMEvents.off(event, fn),

  // Config
  setOperator:  (id)                                       => { DM.OPERATOR = id; },
  setRoomId:    (id)                                       => { DM_CFG.activeRoomId = id; },
};
