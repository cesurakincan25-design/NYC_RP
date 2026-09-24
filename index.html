<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>NYC_DB — RP</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- Firebase SDK -->
<script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js';
  import * as firestore from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js';
  window._fbSDK = { initializeApp };
  window._fbFirestore = firestore;
  window._fbFirestoreReady = true;
  // NYC Firebase config
  const _fbApp = initializeApp({
    apiKey:            "AIzaSyCk5-f6fPp8GX7Ce_z0M74y_ai1017t4Yc",
    authDomain:        "roleplay-databases.firebaseapp.com",
    projectId:         "roleplay-databases",
    storageBucket:     "roleplay-databases.firebasestorage.app",
    messagingSenderId: "265831449807",
    appId:             "1:265831449807:web:d5eeb3f114e13dd5f8e3ba"
  });
  window._fbDb = firestore.getFirestore(_fbApp);
  // AI artık Cloudflare Worker proxy üzerinden çağrılıyor — firebase-ai.js gerekmez
  // Helper: load main doc from Firestore
  window._fbLoadDB = async function(collection) {
    try {
      const { doc, getDoc } = window._fbFirestore;
      const ref = doc(window._fbDb, collection, 'main');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const d = snap.data();
        return d.data || null;
      }
      return null;
    } catch(e) {
      console.warn('[Firebase] Load failed:', e.message);
      return null;
    }
  };
  window.dispatchEvent(new Event('firebase-ready'));
</script>
<style>

:root{
  --bg0:#0c0c0f;--bg1:#111115;--bg2:#16161b;--bg3:#1c1c23;--bg4:#23232c;--bg5:#2b2b36;
  --ln:rgba(255,255,255,.06);--ln2:rgba(255,255,255,.11);
  --t0:#f0f0f3;--t1:#aaaabb;--t2:#666677;--t3:#333344;
  --ac:#4a8fe2;--ac-d:rgba(74,143,226,.13);
  --gn:#4db880;--gn-d:rgba(77,184,128,.13);
  --rd:#e05555;--rd-d:rgba(224,85,85,.13);
  --gd:#c8a84b;--am:#e8a74a;--am-d:rgba(232,167,74,.13);
  --pu:#9b6fd4;--om:#c96fe8;
  --r:4px;--sw:220px;--mw:200px;--hh:48px;
  --mono:'IBM Plex Mono',monospace;--sans:'IBM Plex Sans',sans-serif;--tr:140ms ease;
}
[data-theme="light"]{
  --bg0:#f0f2f5;--bg1:#ffffff;--bg2:#f8f9fa;--bg3:#e9ecef;--bg4:#dee2e6;--bg5:#ced4da;
  --ln:rgba(0,0,0,.08);--ln2:rgba(0,0,0,.14);
  --t0:#1a1a2e;--t1:#4a4a6a;--t2:#8888aa;--t3:#b0b0cc;
  --ac:#4a8fe2;--ac-d:rgba(74,143,226,.13);
  --gn:#3da86c;--gn-d:rgba(61,168,108,.13);
  --rd:#cc3333;--rd-d:rgba(204,51,51,.1);
  --gd:#b8942f;--am:#d4903a;--am-d:rgba(212,144,58,.13);
  --pu:#8055c0;--om:#b050d0;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;overflow:hidden;overflow-x:hidden}
body{font-family:var(--sans);background:var(--bg0);color:var(--t0);font-size:14px;line-height:1.5}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--bg5);border-radius:2px}
/* views */
.view{display:none;height:100vh;width:100vw}
.view.active{display:flex}
#view-login{align-items:center;justify-content:center;flex-direction:column;background:var(--bg0)}
#view-rp{flex-direction:row}
#view-admin{flex-direction:column}
/* loader */
#loader{position:fixed;inset:0;background:var(--bg0);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;z-index:9999}
#loader.hidden{display:none}
.ldbr{font-family:var(--mono);font-size:11px;letter-spacing:.15em;color:var(--t2);text-transform:uppercase}
.ldsp{width:20px;height:20px;border:2px solid var(--bg4);border-top-color:var(--ac);border-radius:50%;animation:spin .7s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
/* login */
#login-box{width:100%;max-width:500px;padding:0 20px}
.login-logo{font-family:var(--mono);font-size:13px;font-weight:600;letter-spacing:.18em;color:var(--t2);text-transform:uppercase;text-align:center;margin-bottom:32px}
.login-logo em{color:var(--ac);font-style:normal}
.login-title{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.12em;color:var(--t3);text-transform:uppercase;text-align:center;margin-bottom:20px}
.user-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px}
.user-card{display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px 10px;border-radius:8px;background:var(--bg2);border:2px solid var(--ln);cursor:pointer;transition:border-color .15s,background .15s,transform .1s;user-select:none}
.user-card:hover{background:var(--bg3);border-color:var(--ln2);transform:translateY(-2px)}
.user-card.selected{border-color:var(--ac);background:var(--ac-d)}
.u-ava{width:52px;height:52px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:20px;font-weight:700;border:2px solid var(--ln2);transition:border-color .15s}
.user-card.selected .u-ava{border-color:var(--ac)}
.u-name{font-size:13px;font-weight:600;color:var(--t0)}
.u-role{font-family:var(--mono);font-size:9px;letter-spacing:.08em}
#login-btn{width:100%;padding:12px;border-radius:var(--r);background:var(--ac);color:#fff;font-family:var(--mono);font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;border:none;cursor:pointer;transition:opacity .15s,background .15s;opacity:.4}
#login-btn.ready{opacity:1}
#login-btn.ready:hover{opacity:.88}
.login-note{font-family:var(--mono);font-size:10px;color:var(--t3);text-align:center;margin-top:12px}
/* app layout */
#app{display:flex;height:100vh;width:100vw;overflow:hidden}
/* sidebar */
#sidebar{width:var(--sw);min-width:var(--sw);background:var(--bg1);border-right:1px solid var(--ln);display:flex;flex-direction:column;overflow:hidden;z-index:20;transition:transform var(--tr)}
#sb-header{height:var(--hh);padding:0 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ln);flex-shrink:0}
.sb-brand{font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.12em;color:var(--t2);text-transform:uppercase}
.sb-brand em{color:var(--ac);font-style:normal}
#sb-nav{flex:1;overflow-y:auto;padding:8px 0}
.nav-lbl{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.12em;color:var(--t3);text-transform:uppercase;padding:12px 14px 4px;user-select:none}
.room-item:hover{background:var(--bg3)}
.room-item.active{background:var(--ac-d)}
.room-item.active::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--ac)}
.room-hash{font-family:var(--mono);font-size:13px;color:var(--t3);flex-shrink:0}
.room-item.active .room-hash{color:var(--ac)}
.room-name{font-size:13px;color:var(--t1);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.room-item.active .room-name{color:var(--t0)}
.room-live{font-family:var(--mono);font-size:9px;color:var(--rd);animation:livePulse 1.4s ease-in-out infinite}
@keyframes livePulse{0%,100%{opacity:1}50%{opacity:.4}}
.room-type-badge{font-size:13px;flex-shrink:0;line-height:1}
/* oda tipi seçici */
.room-type-opt{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid var(--ln2);border-radius:8px;cursor:pointer;transition:border-color .15s,background .15s;user-select:none}
.room-type-opt:has(input:checked){border-color:var(--ac);background:var(--ac-d)}
.room-type-opt input{display:none}
.rto-icon{font-size:16px;width:20px;text-align:center;flex-shrink:0}
.rto-label{display:flex;flex-direction:column;gap:1px}
.rto-label b{font-size:12px;font-weight:600;color:var(--t0)}
.rto-label small{font-size:10px;color:var(--t2)}
/* @mention vurgu */
.mention-tag{display:inline-flex;align-items:center;background:rgba(74,143,226,.18);color:#7bb3f0;border-radius:4px;padding:0 4px;font-weight:600;font-size:.95em;cursor:pointer;transition:background .12s}
.mention-tag:hover{background:rgba(74,143,226,.32)}
.mention-tag.mention-everyone{background:rgba(232,167,74,.18);color:#e8a74a}
.msg-row.mentioned{background:rgba(232,167,74,.07);border-left:2px solid #e8a74a;margin-left:-2px;padding-left:2px}
/* Mesaj stilleri */
.msg-emote{color:#9b6fd4;font-style:italic}
.msg-ooc{color:#a89040;font-style:italic;opacity:.75}
.msg-ooc::before,.msg-ooc::after{content:''}
.msg-strike{opacity:.55}
.msg-underline{text-decoration:underline}
.msg-code{font-family:var(--mono);font-size:12px;background:var(--bg4);border-radius:3px;padding:1px 5px;color:#c084fc}
/* Format toolbar (input alanı üstü) */
.fmt-toolbar{display:flex;gap:4px;padding:4px 8px;border-top:1px solid var(--ln);background:var(--bg1);flex-shrink:0}
.fmt-btn{width:26px;height:26px;border:none;background:none;color:var(--t2);cursor:pointer;border-radius:4px;font-size:12px;font-family:var(--mono);display:flex;align-items:center;justify-content:center;transition:color .12s,background .12s;flex-shrink:0}
.fmt-btn:hover{color:var(--t0);background:var(--bg4)}
.fmt-sep{width:1px;background:var(--ln2);margin:3px 2px;flex-shrink:0}
.btn-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;color:var(--t3);cursor:pointer;border-radius:var(--r);font-size:13px;border:none;background:none;transition:color var(--tr),background var(--tr)}
.btn-icon:hover{color:var(--t0);background:var(--bg4)}
#sb-footer{border-top:1px solid var(--ln);padding:10px 14px;flex-shrink:0}
.ai-pill{display:flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);cursor:pointer;padding:3px 8px;border-radius:2px;border:1px solid var(--ln);transition:all var(--tr);margin-bottom:8px}
.ai-pill:hover{background:var(--bg3);color:var(--t1)}
.ai-pill.on{color:var(--gn);border-color:rgba(77,184,128,.3);background:var(--gn-d)}
.ai-pill.thinking{color:var(--am);border-color:rgba(232,167,74,.3);background:var(--am-d)}
.ai-dot{width:5px;height:5px;border-radius:50%;background:currentColor}
.ai-pill.on .ai-dot,.ai-pill.thinking .ai-dot{animation:pu 2s ease-in-out infinite}
@keyframes pu{0%,100%{opacity:.5}50%{opacity:1}}
.sb-user{display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:var(--r);cursor:pointer;transition:background var(--tr);margin-bottom:4px}
.sb-user:hover{background:var(--bg3)}
.sb-char{display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:var(--r);cursor:pointer;transition:background var(--tr)}
.sb-char:hover{background:var(--bg3)}
.ava-sm{width:28px;height:28px;border-radius:50%;background:var(--bg4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:11px;font-weight:600;color:var(--t1);overflow:hidden;position:relative}
.ava-sm img{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block}
.online-dot{width:8px;height:8px;border-radius:50%;background:var(--gn);border:2px solid var(--bg1);position:absolute;bottom:0;right:0}
/* chat */
#chat-area{flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--bg0)}
#chat-header{height:var(--hh);padding:0 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--ln);flex-shrink:0;background:var(--bg1)}
.ch-hash{font-family:var(--mono);font-size:16px;color:var(--t3)}
.ch-name{font-family:var(--mono);font-size:13px;font-weight:600;letter-spacing:.04em;color:var(--t0)}
.ch-desc{font-size:12px;color:var(--t2);border-left:1px solid var(--ln);padding-left:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hdr-spc{flex:1}
.hdr-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;color:var(--t2);cursor:pointer;border-radius:var(--r);font-size:14px;border:none;background:none;transition:color var(--tr),background var(--tr)}
.hdr-btn:hover{color:var(--t0);background:var(--bg3)}
/* messages */
#messages-list{flex:1;overflow-y:auto;padding:16px 0;display:flex;flex-direction:column}
.msg-group{display:flex;gap:12px;padding:3px 16px;transition:background var(--tr);position:relative}
.msg-group:hover{background:rgba(255,255,255,.018)}
.msg-group.new-sender{margin-top:12px}
.msg-ava-col{width:36px;flex-shrink:0;padding-top:2px}
.msg-ava{width:36px;height:36px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t1);overflow:hidden;cursor:pointer;transition:opacity var(--tr)}
.msg-ava:hover{opacity:.8}
.msg-ava img{width:100%;height:100%;object-fit:cover;display:block}
.msg-ava-ph{width:36px;height:36px}
.msg-body{flex:1;min-width:0}
.msg-meta{display:flex;align-items:baseline;gap:8px;margin-bottom:3px;flex-wrap:wrap}
.msg-char{font-size:13px;font-weight:600;color:var(--t0);cursor:pointer}
.msg-char:hover{text-decoration:underline}
.msg-org{font-family:var(--mono);font-size:9px;font-weight:600;padding:1px 5px;border-radius:2px;letter-spacing:.06em;text-transform:uppercase}
.msg-ts{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:6px}
.msg-rp-ts{font-family:var(--mono);font-size:10px;color:var(--pu);opacity:.75;padding:1px 5px;border-radius:3px;background:var(--pu);background:rgba(155,111,212,.1);border:1px solid rgba(155,111,212,.2)}
.msg-rp-tz{opacity:.6;font-size:9px}
/* RP Time header pill */
.rp-time-pill{font-family:var(--mono);font-size:10px;color:var(--pu);padding:3px 8px;border-radius:12px;background:rgba(155,111,212,.1);border:1px solid rgba(155,111,212,.25);cursor:pointer;transition:background var(--tr);display:flex;align-items:center;gap:5px;white-space:nowrap}
.rp-time-pill:hover{background:rgba(155,111,212,.2)}
.rp-time-pill.rpt-manual{color:var(--am);background:var(--am-d);border-color:rgba(232,167,74,.35)}
.rp-time-pill.rpt-paused{color:var(--rd);background:var(--rd-d);border-color:rgba(224,85,85,.35)}
.msg-edited{font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:3px}
.msg-text{font-size:13.5px;color:var(--t1);line-height:1.6;word-break:break-word;white-space:pre-wrap}
.emote{color:#c084fc;font-style:italic}
.inline-tag{display:inline-flex;align-items:center;padding:1px 7px;border-radius:20px;font-size:11px;font-weight:600;font-family:var(--mono);cursor:pointer;transition:opacity .12s;white-space:nowrap;user-select:none}
.tag-type-btn{padding:5px 10px;border-radius:20px;border:1px solid var(--ln2);background:none;color:var(--t3);font-size:11px;font-family:var(--sans);cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:5px}
.tag-type-btn.active{background:rgba(124,77,255,.15)!important;border-color:rgba(124,77,255,.5)!important;color:var(--ac)!important}
.tag-result-row{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;background:var(--bg4);cursor:pointer;border:1px solid transparent;transition:all .12s}
.tag-result-row:hover{border-color:var(--ln2);background:var(--bg5)}
.inline-tag:hover{opacity:.75}
.speaker{font-weight:600;color:var(--t0)}
.tag-badge{display:inline-flex;align-items:center;font-family:var(--mono);font-size:9px;font-weight:700;padding:1px 5px;border-radius:2px;background:rgba(74,143,226,.15);color:var(--ac);border:1px solid rgba(74,143,226,.3);letter-spacing:.06em;text-transform:uppercase;margin:0 2px;vertical-align:middle}
.msg-attach{margin-top:6px;max-width:360px;border-radius:var(--r);overflow:hidden;border:1px solid var(--ln)}
.msg-attach img{width:100%;display:block;max-height:300px;object-fit:cover}
/* reply ref */
.msg-reply-ref{display:flex;align-items:center;gap:8px;margin-bottom:5px;padding:5px 10px;border-left:2px solid var(--ac);background:var(--bg3);border-radius:0 var(--r) var(--r) 0;font-size:12px;color:var(--t2);cursor:pointer}
.msg-reply-ref:hover{background:var(--bg4)}
.rr-sndr{font-weight:600;color:var(--ac);margin-right:3px}
.rr-txt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
/* fav */
.msg-group.fav .msg-ts::after{content:' ★';color:var(--gd)}
/* Master Agent mesajları — özel görsel işaret */
.msg-group.ma-msg{border-left:2px solid rgba(155,111,212,.55);margin-left:-2px;padding-left:2px;background:rgba(155,111,212,.035)}
.msg-group.ma-msg .msg-char-tag{color:#b28fe8!important}
.ma-badge{display:inline-flex;align-items:center;gap:3px;font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:rgba(155,111,212,.18);border:1px solid rgba(155,111,212,.35);color:var(--pu);padding:0 5px;border-radius:3px;margin-left:4px;vertical-align:middle}
/* reactions */
.msg-reactions{display:flex;flex-wrap:wrap;gap:4px;margin-top:4px}
.rpill{display:flex;align-items:center;gap:3px;background:var(--bg3);border:1px solid var(--ln);border-radius:12px;padding:2px 7px;font-size:12px;cursor:pointer;user-select:none;transition:background var(--tr),border-color var(--tr)}
.rpill:hover{background:var(--bg4);border-color:var(--ln2)}
.rpill.on{background:var(--ac-d);border-color:var(--ac)}
.rcnt{font-family:var(--mono);font-size:10px;color:var(--t2)}
.rpill.on .rcnt{color:var(--ac)}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes cardIn{from{opacity:0;transform:scale(.92) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
/* ═══ CONTEXT MENU ════════════════════════════════════════ */
.ctx-menu{position:fixed;z-index:9999;background:var(--bg2);border:1px solid var(--ln2);border-radius:12px;padding:6px;min-width:200px;box-shadow:0 16px 48px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.04);backdrop-filter:blur(8px);animation:ctxIn .1s ease}
@keyframes ctxIn{from{opacity:0;transform:scale(.96) translateY(-4px)}to{opacity:1;transform:scale(1) translateY(0)}}
.ctx-header{padding:8px 12px 4px;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);border-bottom:1px solid var(--ln);margin-bottom:4px}
.ctx-item{display:flex;align-items:center;gap:10px;width:100%;padding:9px 12px;background:none;border:none;color:var(--t1);cursor:pointer;font-size:12.5px;border-radius:8px;font-family:var(--sans);text-align:left;transition:background .1s,color .1s;position:relative}
.ctx-item:hover{background:var(--bg4);color:var(--t0)}
.ctx-item .ctx-icon{width:16px;height:16px;display:flex;align-items:center;justify-content:center;font-size:12px;opacity:.65;flex-shrink:0}
.ctx-item:hover .ctx-icon{opacity:1}
.ctx-item.danger{color:var(--rd)}
.ctx-item.danger:hover{background:var(--rd-d);color:var(--rd)}
.ctx-item.success{color:var(--gn)}
.ctx-item.success:hover{background:var(--gn-d);color:var(--gn)}
.ctx-item .ctx-kbd{margin-left:auto;font-family:var(--mono);font-size:9px;color:var(--t3);background:var(--bg4);border:1px solid var(--ln2);border-radius:3px;padding:1px 5px;letter-spacing:.04em}
.ctx-sep{height:1px;background:var(--ln);margin:4px 6px}
/* Oda listesi sürükleme */
.room-item{display:flex;align-items:center;gap:8px;padding:7px 14px;cursor:pointer;transition:background var(--tr);user-select:none;position:relative}
.room-drag-handle{display:none;align-items:center;justify-content:center;width:14px;height:20px;cursor:grab;color:var(--t3);font-size:9px;flex-shrink:0;margin-left:auto;opacity:0;transition:opacity .15s}
.room-item:hover .room-drag-handle{display:flex;opacity:1}
.room-item.dragging{opacity:.4;background:var(--bg4)}
.room-item.drag-over{background:rgba(74,143,226,.12);border-top:2px solid var(--ac)}
/* hover actions */
.msg-actions{position:absolute;right:12px;top:2px;display:none;align-items:center;background:var(--bg2);border:1px solid var(--ln2);border-radius:6px;padding:3px 4px;z-index:10;box-shadow:0 4px 16px rgba(0,0,0,.4)}
.msg-group:hover .msg-actions{display:flex}
.mac{width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--t2);cursor:pointer;border-radius:4px;border:none;background:none;transition:color var(--tr),background var(--tr);position:relative}
.mac:hover{color:var(--t0);background:var(--bg4)}
.mac.del:hover{color:var(--rd);background:var(--rd-d)}
.mac[data-tip]:hover::after{content:attr(data-tip);position:absolute;bottom:calc(100% + 4px);left:50%;transform:translateX(-50%);white-space:nowrap;background:var(--bg5);color:var(--t1);font-family:var(--mono);font-size:9px;padding:2px 6px;border-radius:3px;border:1px solid var(--ln2);pointer-events:none;z-index:100}
/* edit inline */
.msg-editing .msg-text{display:none}
.msg-edit-wrap{display:none;margin-top:4px}
.msg-editing .msg-edit-wrap{display:block}
.edt-ta{width:100%;background:var(--bg3);border:1px solid var(--ac);border-radius:var(--r);color:var(--t0);font-family:var(--sans);font-size:13.5px;padding:7px 10px;outline:none;resize:none;line-height:1.5;min-height:36px}
.edt-rpt{display:flex;align-items:center;gap:6px;margin-top:5px;padding:4px 8px;background:rgba(155,111,212,.08);border:1px solid rgba(155,111,212,.2);border-radius:var(--r)}
.edt-rpt label{font-family:var(--mono);font-size:9px;color:var(--pu);letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;opacity:.8}
.edt-rpt input{background:transparent;border:none;color:var(--pu);font-family:var(--mono);font-size:11px;outline:none;flex:1;min-width:0}
.edt-rpt input::placeholder{color:rgba(155,111,212,.4)}
.edt-btns{display:flex;gap:6px;margin-top:5px}
.edt-save{padding:4px 12px;background:var(--ac);color:#fff;border:none;border-radius:var(--r);font-family:var(--mono);font-size:10px;font-weight:600;cursor:pointer}
.edt-cancel{padding:4px 12px;background:var(--bg4);color:var(--t1);border:none;border-radius:var(--r);font-family:var(--mono);font-size:10px;font-weight:600;cursor:pointer}
/* reply bar */
#reply-bar{display:none;margin:0 16px 4px;background:var(--bg2);border:1px solid var(--ln2);border-left:3px solid var(--ac);border-radius:0 var(--r) var(--r) 0;padding:6px 10px;font-size:12px;color:var(--t2);align-items:center;gap:8px}
#reply-bar.show{display:flex}
#rbs{font-weight:600;color:var(--ac);flex-shrink:0}
#rbt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
#rbc{background:none;border:none;color:var(--t3);cursor:pointer;font-size:13px;flex-shrink:0}
#rbc:hover{color:var(--t0)}
/* ai bar */
#ai-bar{display:none;margin:0 16px 6px;background:var(--bg2);border:1px solid rgba(77,184,128,.25);border-radius:var(--r);padding:8px 12px;font-family:var(--mono);font-size:11px;color:var(--gn);line-height:1.5;position:relative}
#ai-bar.show{display:block}
#ai-bar-x{position:absolute;top:6px;right:8px;cursor:pointer;color:var(--t3);font-size:10px;border:none;background:none}
/* typing */
#typing-area{min-height:22px;padding:0 16px 0 64px;display:flex;align-items:center;flex-shrink:0;flex-wrap:wrap;gap:4px}
.typing-text{font-family:var(--mono);font-size:11px;color:var(--t2);font-style:italic}
.typing-dots{display:inline-flex;gap:3px;margin-right:4px;flex-shrink:0}
.typing-dots span{width:4px;height:4px;border-radius:50%;background:currentColor;animation:tb 1.2s ease-in-out infinite;display:inline-block}
.typing-dots span:nth-child(2){animation-delay:.2s}.typing-dots span:nth-child(3){animation-delay:.4s}
@keyframes tb{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-4px)}}
/* input */
#input-area{padding:0 16px 12px;flex-shrink:0}
#input-box{background:var(--bg2);border:1px solid var(--ln);border-radius:6px;display:flex;flex-direction:column;overflow:hidden;transition:border-color var(--tr)}
#input-box:focus-within{border-color:var(--ln2)}
/* ── Entity bar ── */
/* Quick entity bar (chat üstü hızlı etiket şeridi) */
#quick-entity-bar{display:flex;align-items:center;gap:5px;padding:5px 12px;border-bottom:1px solid var(--ln);background:var(--bg1);overflow-x:auto;flex-shrink:0;min-height:0;scrollbar-width:none}
#quick-entity-bar::-webkit-scrollbar{display:none}
.qe-label{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.08em;text-transform:uppercase;flex-shrink:0;padding-right:4px}
.qe-chip{display:inline-flex;align-items:center;gap:4px;padding:2px 8px 2px 5px;border-radius:16px;cursor:pointer;font-family:var(--mono);font-size:11px;font-weight:500;white-space:nowrap;border:1px solid;transition:filter .12s,opacity .12s;flex-shrink:0;user-select:none}
.qe-chip:hover{filter:brightness(1.2)}
.qe-chip-ava{width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;flex-shrink:0;overflow:hidden}
.qe-chip-ava img{width:100%;height:100%;object-fit:cover;border-radius:50%}
.qe-sep{width:1px;height:16px;background:var(--ln2);flex-shrink:0;margin:0 2px}
#msg-input{width:100%;background:transparent;border:none;outline:none;color:var(--t0);font-family:var(--sans);font-size:13.5px;padding:8px 12px;resize:none;min-height:40px;max-height:160px;overflow-y:auto;line-height:1.5}
#msg-input::placeholder{color:var(--t3)}
#input-toolbar{display:flex;align-items:center;gap:2px;padding:4px 8px 6px}
.tb-btn{width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--t3);cursor:pointer;border-radius:var(--r);border:none;background:none;transition:color var(--tr),background var(--tr)}
.tb-btn:hover{color:var(--t1);background:var(--bg4)}
.tb-spc{flex:1}
#send-btn{display:flex;align-items:center;gap:6px;padding:5px 12px;background:var(--ac);color:#fff;font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.06em;border:none;border-radius:var(--r);cursor:pointer;transition:opacity var(--tr)}
#send-btn:hover{opacity:.88}
#send-btn:disabled{opacity:.4;cursor:not-allowed}
/* members */
#members-panel{width:var(--mw);min-width:var(--mw);background:var(--bg1);border-left:1px solid var(--ln);display:flex;flex-direction:column;overflow:hidden}
#mem-header{height:var(--hh);padding:0 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ln);flex-shrink:0}
.mem-title{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase}
#members-list{flex:1;overflow-y:auto;padding:8px 0}
/* MA sidebar widget */
#ma-sidebar{border-bottom:1px solid var(--ln);flex-shrink:0;display:flex;flex-direction:column;max-height:260px}
#ma-sb-head{display:flex;align-items:center;justify-content:space-between;padding:6px 12px;background:var(--bg0);border-bottom:1px solid var(--ln);cursor:pointer;user-select:none}
#ma-sb-head:hover{background:var(--bg2)}
.ma-sb-title{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--pu);display:flex;align-items:center;gap:5px}
#ma-sb-toggle-icon{color:var(--t3);font-size:10px;transition:transform .2s}
#ma-sb-body{display:flex;flex-direction:column;flex:1;overflow:hidden}
#ma-sb-log{flex:1;overflow-y:auto;padding:6px 10px;display:flex;flex-direction:column;gap:6px;min-height:0}
.ma-sb-msg{font-size:11px;line-height:1.55;border-radius:7px;padding:5px 9px;max-width:100%;word-break:break-word}
.ma-sb-msg.user{align-self:flex-end;background:rgba(155,111,212,.15);border:1px solid rgba(155,111,212,.2);color:var(--t0)}
.ma-sb-msg.model{align-self:flex-start;background:var(--bg3);border:1px solid var(--ln);color:var(--t1)}
.ma-sb-msg.thinking{color:var(--t3);background:none;border:none;font-style:italic}
#ma-sb-quick{display:flex;gap:4px;flex-wrap:wrap;padding:5px 10px;border-top:1px solid var(--ln);background:var(--bg0);flex-shrink:0}
.ma-sb-qbtn{font-family:var(--mono);font-size:9px;font-weight:600;padding:3px 7px;border-radius:4px;border:1px solid var(--ln2);background:var(--bg2);color:var(--t2);cursor:pointer;transition:all .12s;white-space:nowrap}
.ma-sb-qbtn:hover{border-color:var(--pu);color:var(--pu);background:rgba(155,111,212,.1)}
#ma-sb-inp-row{display:flex;gap:5px;padding:6px 10px;border-top:1px solid var(--ln);flex-shrink:0}
#ma-sb-inp{flex:1;background:var(--bg2);border:1px solid var(--ln);color:var(--t1);border-radius:6px;padding:5px 8px;font-family:var(--sans);font-size:11px;outline:none;transition:border-color var(--tr)}
#ma-sb-inp:focus{border-color:rgba(155,111,212,.5)}
#ma-sb-send{background:rgba(155,111,212,.2);border:1px solid rgba(155,111,212,.3);color:var(--pu);border-radius:6px;padding:5px 8px;cursor:pointer;font-size:11px;transition:all .12s;flex-shrink:0}
#ma-sb-send:hover{background:rgba(155,111,212,.4)}
.mem-sec{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;padding:8px 14px 4px}
.mem-item{display:flex;align-items:center;gap:8px;padding:4px 14px;transition:background var(--tr)}
.mem-item:hover{background:var(--bg3)}
.mem-ava{width:36px;height:36px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:13px;font-weight:700;color:var(--t2);overflow:hidden;flex-shrink:0;transition:box-shadow .3s}
.mem-ava-online{animation:mem-glow 3s ease-in-out infinite}
@keyframes mem-glow{
  0%,100%{box-shadow:0 0 0 2px var(--glow-c,rgba(77,184,128,.5)),0 0 8px var(--glow-c,rgba(77,184,128,.3))}
  50%{box-shadow:0 0 0 2px var(--glow-c,rgba(77,184,128,.8)),0 0 16px var(--glow-c,rgba(77,184,128,.5))}
}
.mem-ava img{width:100%;height:100%;object-fit:cover;display:block;border-radius:50%}
/* Remove old dot — replaced by glow */
.mem-dot{display:none}
.mem-inf{flex:1;min-width:0}
.mem-nm{font-size:12px;font-weight:500;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mem-al{font-family:var(--mono);font-size:10px;color:var(--t3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
/* admin */
#adm-header{height:var(--hh);background:var(--bg1);border-bottom:1px solid var(--ln);display:flex;align-items:center;gap:12px;padding:0 20px;flex-shrink:0}
.adm-brand{font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.15em;color:var(--t2);text-transform:uppercase}
.adm-brand em{color:var(--ac);font-style:normal}
.adm-sep{width:1px;height:20px;background:var(--ln2)}
.adm-st{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}
.sdot{width:7px;height:7px;border-radius:50%;background:var(--t3);transition:background .3s}
.sdot.active{background:var(--gn);box-shadow:0 0 6px var(--gn)}
.sdot.thinking{background:var(--am);box-shadow:0 0 6px var(--am);animation:pu 1s ease-in-out infinite}
.adm-spc{flex:1}
.adm-btn{display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:var(--r);font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border:1px solid var(--ln2);background:var(--bg3);color:var(--t1);transition:all .15s}
.adm-btn:hover{background:var(--bg4);color:var(--t0)}
.adm-btn.primary{background:var(--ac-d);border-color:var(--ac);color:var(--ac)}
.adm-btn.danger{background:var(--rd-d);border-color:var(--rd);color:var(--rd)}
#tbar{height:2px;background:linear-gradient(90deg,var(--ac),var(--om),var(--ac));background-size:200% 100%;display:none;flex-shrink:0}
#tbar.show{display:block;animation:tsl 1.5s linear infinite}
@keyframes tsl{0%{background-position:0%}100%{background-position:200%}}
#adm-grid{display:grid;grid-template-columns:260px 1fr 280px;flex:1;overflow:hidden}
.adm-panel{background:var(--bg1);border-right:1px solid var(--ln);display:flex;flex-direction:column;overflow:hidden}
.adm-panel:last-child{border-right:none}
.adm-ph{height:40px;padding:0 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ln);flex-shrink:0}
.adm-pt{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--t3)}
.adm-pb{font-family:var(--mono);font-size:9px;font-weight:600;padding:2px 6px;border-radius:8px;background:var(--bg4);color:var(--t3)}
.adm-body{flex:1;overflow-y:auto;padding:10px 0}
.sg{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px 12px}
.sc{background:var(--bg2);border:1px solid var(--ln);border-radius:var(--r);padding:10px 12px}
.sl{font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-bottom:4px}
.sv{font-family:var(--mono);font-size:22px;font-weight:600;color:var(--t0);line-height:1}
.sv.ac{color:var(--ac)}.sv.gn{color:var(--gn)}.sv.am{color:var(--am)}
.ri{display:flex;align-items:flex-start;gap:10px;padding:8px 12px;border-bottom:1px solid var(--ln)}
.ri:hover{background:var(--bg2)}
.ric{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;margin-top:1px}
.ric.success{background:var(--gn-d);color:var(--gn)}.ric.partial{background:var(--am-d);color:var(--am)}.ric.failed{background:var(--rd-d);color:var(--rd)}
.rb{flex:1;min-width:0}
.rt{font-size:12px;font-weight:500;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:2px}
.rm{font-family:var(--mono);font-size:10px;color:var(--t2);display:flex;gap:8px}
.rch{font-family:var(--mono);font-size:9px}
.rch.ac{color:var(--ac)}.rch.gn{color:var(--gn)}.rch.am{color:var(--am)}
#adm-feed{background:var(--bg0);border-right:1px solid var(--ln);display:flex;flex-direction:column;overflow:hidden}
.fh{height:40px;padding:0 16px;display:flex;align-items:center;gap:16px;border-bottom:1px solid var(--ln);background:var(--bg1);flex-shrink:0}
.ftab{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);cursor:pointer;padding:4px 0;border-bottom:2px solid transparent;transition:color .12s,border-color .12s}
.ftab.active{color:var(--t0);border-bottom-color:var(--ac)}
.fbody{flex:1;overflow-y:auto}
.fi{border-bottom:1px solid var(--ln);padding:12px 16px}
.fi:hover{background:var(--bg1)}
.fih{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.fit{font-size:13px;font-weight:500;color:var(--t0);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.fiti{font-family:var(--mono);font-size:10px;color:var(--t3);flex-shrink:0}
.fib{font-size:12px;color:var(--t1);line-height:1.55;margin-bottom:6px}
.fips{display:flex;flex-wrap:wrap;gap:4px;margin-top:4px}
.fp{font-family:var(--mono);font-size:10px;padding:2px 7px;border-radius:2px;background:var(--bg4);color:var(--t2);border:1px solid var(--ln)}
.fp.ch{border-color:rgba(74,143,226,.3);color:var(--ac)}
.sev{font-family:var(--mono);font-size:9px;font-weight:600;padding:2px 6px;border-radius:2px;text-transform:uppercase;letter-spacing:.08em}
.sev-low{background:rgba(77,184,128,.1);color:var(--gn);border:1px solid rgba(77,184,128,.3)}
.sev-medium{background:var(--am-d);color:var(--am);border:1px solid rgba(232,167,74,.3)}
.sev-high{background:var(--rd-d);color:var(--rd);border:1px solid rgba(224,85,85,.3)}
.sev-critical{background:rgba(224,85,85,.2);color:#ff7070;border:1px solid rgba(255,112,112,.5)}
.tbadge{font-family:var(--mono);font-size:9px;color:var(--t2);background:var(--bg4);padding:2px 6px;border-radius:2px;text-transform:uppercase}
.fli{border-bottom:1px solid var(--ln);padding:10px 12px}
.fli:hover{background:var(--bg2)}
.flh{display:flex;align-items:center;gap:6px;margin-bottom:4px}
.flt{font-family:var(--mono);font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--am)}
.flti{font-size:12px;font-weight:500;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
.fld{font-size:11px;color:var(--t2);line-height:1.5;margin-bottom:6px}
.fla{display:flex;gap:6px}
.flb{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 8px;border-radius:var(--r);cursor:pointer;border:1px solid;background:none}
.flb.ack{border-color:var(--gn);color:var(--gn)}.flb.ack:hover{background:var(--gn-d)}
.flb.dis{border-color:var(--t3);color:var(--t2)}.flb.dis:hover{background:var(--bg4)}
.cr{display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid var(--ln)}
.ck{font-family:var(--mono);font-size:10px;font-weight:500;color:var(--t1);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cv{font-family:var(--mono);font-size:10px;color:var(--ac);flex-shrink:0}
.toggle{width:32px;height:16px;border-radius:8px;background:var(--bg5);border:1px solid var(--ln2);position:relative;cursor:pointer;flex-shrink:0;transition:background .2s}
.toggle.on{background:rgba(77,184,128,.3);border-color:var(--gn)}
.toggle::after{content:'';position:absolute;top:2px;left:2px;width:10px;height:10px;border-radius:50%;background:var(--t3);transition:transform .2s,background .2s}
.toggle.on::after{transform:translateX(16px);background:var(--gn)}
.trig-box{padding:12px;background:var(--bg2);border-radius:var(--r);margin:10px 12px;border:1px solid var(--ln)}
.trig-lbl{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--t2);margin-bottom:8px}
.trig-sel,.trig-inp{width:100%;background:var(--bg3);border:1px solid var(--ln2);color:var(--t0);font-family:var(--mono);font-size:11px;padding:6px 8px;border-radius:var(--r);outline:none;margin-bottom:8px}
.trig-inp:focus{border-color:var(--ac)}
.trig-btn{width:100%;display:flex;align-items:center;justify-content:center;gap:6px;padding:7px 12px;border-radius:var(--r);font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border:1px solid var(--ac);background:var(--ac-d);color:var(--ac);transition:all .15s}
.trig-btn:hover{background:rgba(74,143,226,.2)}
.trig-btn:disabled{opacity:.4;cursor:not-allowed}
.sec-lbl{font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--t3);padding:10px 12px 4px}
.ldot{width:6px;height:6px;border-radius:50%;background:var(--gn);box-shadow:0 0 6px var(--gn);animation:pu 2s ease-in-out infinite}
/* modals */
.mbd{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)}
.mbd.hidden{display:none}
.mbox{background:var(--bg2);border:1px solid var(--ln2);border-radius:8px;width:100%;max-width:440px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.6)}
.mhd{padding:16px 20px;border-bottom:1px solid var(--ln);display:flex;align-items:center;justify-content:space-between}
.mti{font-family:var(--mono);font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--t0)}
.mcl{width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:var(--t2);cursor:pointer;border-radius:var(--r);border:none;background:none}
.mcl:hover{color:var(--t0);background:var(--bg4)}
.mbdy{padding:20px}
.mft{padding:14px 20px;border-top:1px solid var(--ln);display:flex;justify-content:flex-end;gap:8px}
.ff{margin-bottom:14px}
.fl{display:block;font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--t2);margin-bottom:6px}
.fi-inp{width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--sans);font-size:13px;padding:8px 10px;outline:none;transition:border-color var(--tr)}
.fi-inp:focus{border-color:var(--ac)}
.cpg{display:grid;grid-template-columns:1fr 1fr;gap:8px;max-height:320px;overflow-y:auto}
.cpi-item{display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);cursor:pointer;transition:background var(--tr),border-color var(--tr)}
.cpi-item:hover{background:var(--bg3);border-color:var(--ln2)}
.cpi-item.active{background:var(--ac-d);border-color:var(--ac)}
.cpa{width:32px;height:32px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:11px;font-weight:600;color:var(--t2);overflow:hidden;flex-shrink:0}
.cpa img{width:100%;height:100%;object-fit:cover}
.cpin{min-width:0;flex:1}
.cpnm{font-size:12px;font-weight:500;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cpal{font-family:var(--mono);font-size:10px;color:var(--t2)}
.btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.06em;border-radius:var(--r);cursor:pointer;border:none;transition:opacity var(--tr)}
.btn:hover{opacity:.85}
.btn-p{background:var(--ac);color:#fff}
.btn-g{background:var(--bg4);color:var(--t1)}
.emoji-wrap{position:absolute;bottom:44px;left:12px;background:var(--bg3);border:1px solid var(--ln2);border-radius:8px;padding:8px;display:flex;flex-wrap:wrap;gap:4px;width:220px;box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:50}
.em-btn{font-size:18px;padding:4px;border-radius:var(--r);cursor:pointer;border:none;background:none;line-height:1}
.em-btn:hover{background:var(--bg4)}
.react-popup{position:fixed;background:var(--bg3);border:1px solid var(--ln2);border-radius:8px;padding:6px 8px;display:flex;gap:4px;z-index:300;box-shadow:0 8px 32px rgba(0,0,0,.5)}
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:10px;color:var(--t3);padding:32px}
.empty i{font-size:24px}
.empty p{font-family:var(--mono);font-size:11px;letter-spacing:.06em}
#toast-con{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:999;display:flex;flex-direction:column-reverse;gap:6px;pointer-events:none}
.toast{background:var(--bg3);border:1px solid var(--ln2);color:var(--t0);font-family:var(--mono);font-size:12px;padding:10px 16px;border-radius:6px;box-shadow:0 8px 24px rgba(0,0,0,.5);animation:tin .25s ease;pointer-events:all;white-space:nowrap}
.toast.success{border-color:var(--gn);color:var(--gn)}.toast.error{border-color:var(--rd);color:var(--rd)}.toast.warn{border-color:var(--am);color:var(--am)}
/* NSFW toggle */
#nsfw-toggle.nsfw-on{background:var(--rd-d);color:var(--rd);border:1px solid var(--rd)}
#input-box.nsfw-active{border-color:var(--rd)!important}
.msg-nsfw-badge{display:inline-flex;align-items:center;font-family:var(--mono);font-size:9px;font-weight:700;padding:1px 5px;border-radius:2px;background:rgba(224,85,85,.15);color:var(--rd);border:1px solid rgba(224,85,85,.35);letter-spacing:.06em;text-transform:uppercase;margin:0 4px 2px 0;vertical-align:middle}
/* Media embed cards */
.media-embed{margin-top:6px;border-radius:8px;overflow:hidden;display:block;border:1px solid var(--ln)}
.room-unread-badge{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;border-radius:8px;background:var(--rd);color:#fff;font-size:10px;font-weight:700;font-family:var(--mono);margin-left:auto;margin-right:4px;flex-shrink:0}
@keyframes tin{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
/* mobile */
@media(max-width:768px){
  #sidebar{position:fixed;left:0;top:0;bottom:0;transform:translateX(-100%);z-index:50;width:80vw;max-width:280px;min-width:0}
  #sidebar.open{transform:translateX(0)}
  #sb-overlay.show{display:block!important}
  #adm-grid .adm-panel:first-child,#adm-grid .adm-panel:last-child{display:none}
  #mob-menu{display:flex!important}
  #members-panel{
    position:fixed;right:0;top:var(--hh);bottom:0;
    transform:translateX(100%);transition:transform var(--tr);
    z-index:30;border-left:1px solid var(--ln2);
    box-shadow:-4px 0 16px rgba(0,0,0,.4);
    width:80vw;max-width:240px;min-width:0;
  }
  #members-panel.open{transform:translateX(0)}
  .user-grid{grid-template-columns:repeat(2,1fr)}
  /* MA sidebar full screen on mobile */
  #ma-sidebar{max-height:50vh}
  /* Input stays visible above keyboard */
  #input-area{padding:0 8px 8px;padding-bottom:calc(8px + env(safe-area-inset-bottom,0px))}
  /* Touch targets */
  .hdr-btn,.btn-icon,.mac,.tb-btn,.fmt-btn{min-width:44px;min-height:44px}
  /* Modals full-width */
  .mbox{max-width:95vw!important}
  /* No horizontal scroll */
  #chat-area,#messages-list{overflow-x:hidden}
  /* Font readability */
  body{font-size:14px}
  .msg-text{font-size:14px}
  /* members panel full-screen on mobile */
  #members-panel{width:100vw;max-width:100vw}
  /* Chat header */
  .ch-desc{display:none}
  /* hide rp-time-pill text on small screens */
  #rp-time-display{display:none}
}
/* theme toggle button */
#theme-toggle{width:28px;height:28px;border:none;background:none;color:var(--t2);cursor:pointer;border-radius:var(--r);font-size:14px;display:flex;align-items:center;justify-content:center;transition:color var(--tr),background var(--tr)}
#theme-toggle:hover{color:var(--t0);background:var(--bg4)}
/* password input wrapper */
.pw-wrap{position:relative;display:flex;align-items:center}
.pw-wrap input{width:100%;padding-right:36px}
.pw-eye{position:absolute;right:8px;background:none;border:none;color:var(--t2);cursor:pointer;font-size:12px;padding:2px 4px;display:flex;align-items:center}
.pw-eye:hover{color:var(--t0)}
/* login password area */
#login-pw-area{margin-top:10px;margin-bottom:2px}
#mob-menu{display:none}
#sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:40}
#sb-overlay.show{display:block}

</style>
</head>
<body>
<div id="loader"><div class="ldbr">NYC_DB // RP</div><div class="ldsp"></div></div>

<!-- LOGIN -->
<div class="view" id="view-login" style="display:none">
<div id="login-box">
<div class="login-logo">NYC<em>_</em>DB &mdash; RP</div>
<div class="login-title">Kim olduğunu seç</div>
<div class="user-grid" id="user-grid"></div>
<div id="login-pw-area" style="display:none">
  <div class="pw-wrap">
    <input type="password" id="login-pw-input" class="fi-inp" placeholder="Şifre (opsiyonel)" autocomplete="current-password">
    <button class="pw-eye" type="button" onclick="Login._togglePw('login-pw-input',this)"><i class="fas fa-eye"></i></button>
  </div>
</div>
<button id="login-btn" onclick="Login.enter()"><i class="fas fa-arrow-right"></i>&nbsp; Giriş Yap</button>
<div class="login-note" id="login-note-msg"></div>
</div></div>

<!-- RP CLIENT -->
<div class="view" id="view-rp" style="display:none"><div id="app">
<div id="sidebar">
  <div id="sb-header">
    <span class="sb-brand">NYC<em>_</em>RP</span>
    <div style="display:flex;align-items:center;gap:4px">
      <button id="theme-toggle" title="Tema Değiştir" onclick="Theme.toggle()"><i class="fas fa-sun"></i></button>
      <button class="btn-icon" id="btn-new-room"><i class="fas fa-plus"></i></button>
    </div>
  </div>
  <div id="sb-nav">
    <div class="nav-lbl">Rooms</div>
    <div id="room-list"></div>
  </div>
  <div id="sb-footer">
    <div class="ai-pill" id="ai-pill" onclick="Adm&&Adm.openPanel()" title="Observer AI Panelini Aç">
      <div class="ai-dot"></div><span id="ai-pill-txt">Observer AI: OFF</span>
    </div>
    <div class="ai-pill" onclick="DMPanel.open()" title="MA Panel — Master Agent tam ekran" style="color:var(--pu);border-color:rgba(155,111,212,.3)">
      <i class="fas fa-robot" style="font-size:9px"></i><span>MA Panel</span>
    </div>
    <div class="ai-pill" onclick="LoreKeeper.open()" title="Lore Keeper — Kanon Arşivi" style="color:#50c896;border-color:rgba(80,200,150,.3)">
      <i class="fas fa-scroll" style="font-size:9px"></i><span>Lore Keeper</span>
    </div>
    <div class="sb-user" onclick="Login._userMenu(event)" title="Profil / Çıkış">
      <div class="ava-sm" id="sess-ava"><span id="sess-ini">?</span><div class="online-dot"></div></div>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;font-weight:600;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" id="sess-name">—</div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--t2)" id="sess-role">Admin</div>
      </div>
      <i class="fas fa-chevron-up" style="font-size:11px;color:var(--t3)"></i>
    </div>
    <div class="sb-char" id="char-sel-btn" title="Sık oynanan karakterleri yönet">
      <i class="fas fa-star" style="font-size:11px;color:var(--t3);flex-shrink:0"></i>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;font-weight:500;color:var(--t0)" id="ac-name">Sık Oynanan Karakterler</div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--t2)" id="ac-org">tıkla → yönet</div>
      </div>
      <i class="fas fa-chevron-up" style="font-size:10px;color:var(--t3)"></i>
    </div>
  </div>
</div>
<div id="sb-overlay"></div>
<div id="chat-area">
  <div id="chat-header">
    <button class="hdr-btn" id="mob-menu" style="display:none"><i class="fas fa-bars"></i></button>
    <span class="ch-hash">#</span>
    <span class="ch-name" id="room-title">live</span>
    <span class="ch-desc" id="room-desc">All RP messages</span>
    <span class="hdr-spc"></span>
    <button class="rp-time-pill" id="rp-time-pill" onclick="RpTime.openModal(S.roomId)" title="RP Zaman Yöneticisi"><i class="fas fa-clock" style="font-size:9px"></i><span id="rp-time-display">— : —</span></button>
    <a href="https://cesurakincan25-design.github.io/NYC_DB/" target="_blank" class="hdr-btn" title="NYC_DB'ye git" style="text-decoration:none"><i class="fas fa-database" style="font-size:13px"></i></a>
    <button class="hdr-btn" id="btn-mem"><i class="fas fa-users"></i></button>
  </div>
  <!-- Hızlı Etiket Şeridi — chat header altında -->
  <div id="quick-entity-bar"></div>
  <div id="messages-list"><div class="empty" id="empty-state"><i class="fas fa-comment-slash"></i><p>Sahne boş — başlat</p></div></div>
  <div id="ai-bar"><i class="fas fa-brain" style="margin-right:6px;opacity:.6"></i><span id="ai-bar-txt"></span><button id="ai-bar-x" onclick="document.getElementById('ai-bar').classList.remove('show')">✕</button></div>
  <div id="reply-bar"><i class="fas fa-reply" style="color:var(--ac);font-size:11px;flex-shrink:0"></i><span id="rbs"></span><span id="rbt"></span><button id="rbc" onclick="RP.clearReply()">✕</button></div>
  <div id="typing-area"></div>
  <div id="input-area">
    <div id="input-box">
      <textarea id="msg-input" placeholder="Mesaj yaz…  *emote*  [OOC]" rows="1"></textarea>
      <div id="rp-time-override-bar" style="display:none;align-items:center;gap:6px;padding:4px 10px 0;border-top:1px solid rgba(155,111,212,.15)">
        <i class="fas fa-clock" style="font-size:10px;color:var(--pu);opacity:.7"></i>
        <span style="font-family:var(--mono);font-size:9px;color:var(--pu);opacity:.7;text-transform:uppercase;letter-spacing:.08em">RP Zamanı Override</span>
        <input id="rp-time-override-inp" type="text" placeholder="22:30 · +1h · +30m · -2h · +1d · 2025-03-15 22:30 EST" style="flex:1;background:transparent;border:none;outline:none;color:var(--pu);font-family:var(--mono);font-size:11px">
        <button onclick="document.getElementById('rp-time-override-bar').style.display='none';document.getElementById('rp-time-override-inp').value=''" style="background:none;border:none;color:var(--t3);cursor:pointer;font-size:11px;padding:0 2px">✕</button>
      </div>
      <div id="input-toolbar">
        <button class="tb-btn" onclick="RP.toggleEmoji(event)" title="Emoji"><i class="far fa-smile"></i></button>
        <button class="tb-btn" onclick="RP.promptAttach()" title="Resim ekle"><i class="fas fa-image"></i></button>
        <button class="tb-btn" id="btn-rpt-override" title="RP Zamanı override" onclick="const b=document.getElementById('rp-time-override-bar');const shown=b.style.display==='flex';b.style.display=shown?'none':'flex';if(!shown){const st=RpTime._state[S.roomId];if(st)document.getElementById('rp-time-override-inp').placeholder=RpTime.fmt(st)+' (boş = otomatik)';document.getElementById('rp-time-override-inp').focus();}"><i class="fas fa-clock" style="color:var(--pu);opacity:.7"></i></button>
        <button class="tb-btn" id="ac-toggle-btn" title="Otomatik tamamlama aç/kapat" onclick="Autocomplete.toggleEnabled()" style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.04em;color:var(--t2)">AC</button>
        <!-- Format buttons -->
        <span style="width:1px;background:var(--ln2);margin:4px 3px;align-self:stretch;flex-shrink:0"></span>
        <button class="tb-btn" title="Kalın (**metin**)" onclick="RP.wrapFmt('**','**')" style="font-weight:700;font-size:11px">B</button>
        <button class="tb-btn" title="İtalik (_metin_)" onclick="RP.wrapFmt('_','_')" style="font-style:italic;font-size:11px">i</button>
        <button class="tb-btn" title="Üstü çizili (~~metin~~)" onclick="RP.wrapFmt('~~','~~')" style="font-size:10px;text-decoration:line-through">S</button>
        <button class="tb-btn" title="Altı çizili (__metin__)" onclick="RP.wrapFmt('__','__')" style="font-size:10px;text-decoration:underline">U</button>
        <button class="tb-btn" title="Emote (*aksiyon*)" onclick="RP.wrapFmt('*','*')" style="color:var(--pu);font-style:italic;font-size:11px">*e*</button>
        <button class="tb-btn" title="OOC yorum ((( metin )))" onclick="RP.wrapFmt('(( ',' ))')" style="color:#a89040;font-size:10px;font-family:var(--mono)">OOC</button>
        <button class="tb-btn" title="Kod (`metin`)" onclick="RP.wrapFmt('\`','\`')" style="font-family:var(--mono);font-size:10px;color:#c084fc">`k`</button>
        <button class="tb-btn" id="nsfw-toggle" title="NSFW / Hassas İçerik — AI'a gönderilmez" onclick="RP.toggleNSFW()" style="font-size:14px">🔞</button>
        <span class="tb-spc"></span>
        <button id="send-btn" onclick="RP.send()"><i class="fas fa-paper-plane"></i> SEND</button>
      </div>
    </div>
  </div>
</div>
<div id="members-panel">
  <div id="mem-header"><span class="mem-title">Online</span><span style="font-family:var(--mono);font-size:10px;color:var(--t3)" id="mem-cnt">0</span></div>

  <!-- ── Master Agent sidebar widget ── -->
  <div id="ma-sidebar">
    <!-- Collapsible header -->
    <div id="ma-sb-head" onclick="MASidebar.toggle()">
      <span class="ma-sb-title"><i class="fas fa-robot"></i> Master Agent</span>
      <div style="display:flex;align-items:center;gap:4px" onclick="event.stopPropagation()">
        <button title="MA Panel'i Tam Ekran Aç" onclick="DMPanel.open()" style="background:none;border:none;color:var(--pu);cursor:pointer;font-size:11px;padding:2px 5px;border-radius:3px;opacity:.7;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.7"><i class="fas fa-expand-alt"></i></button>
        <i class="fas fa-chevron-up" id="ma-sb-toggle-icon"></i>
      </div>
    </div>
    <div id="ma-sb-body">
      <!-- Chat log -->
      <div id="ma-sb-log">
        <div class="ma-sb-msg model" style="color:var(--t3);font-style:italic;background:none;border:none">Merhaba! Bir şey sor veya hızlı aksiyon seç.</div>
      </div>
      <!-- Quick buttons -->
      <div id="ma-sb-quick">
        <button class="ma-sb-qbtn" onclick="MASidebar.quick('Mevcut RP durumunu özetle.')">📋 Durum</button>
        <button class="ma-sb-qbtn" onclick="MASidebar.quick('Observer AI birikmiş mesajlarını hemen işle. FLUSH_OAI')">⚡ OAI</button>
        <button class="ma-sb-qbtn" onclick="MASidebar.quick('DM bağlamını güncelle. READ_DM')">📖 DM</button>
        <button class="ma-sb-qbtn" onclick="MASidebar.quick('Şu anki RP ortamına uygun küçük bir sokak olayı yarat ve ilgili karakterleri oynayarak sahneye yaz (SEND_MSG kullan).')">🌐 Olay</button>
        <button class="ma-sb-qbtn" onclick="MASidebar.setupAct()">🌆 Setup At</button>
        <button class="ma-sb-qbtn" onclick="MASidebar.entityCheck()" title="Son mesajlarda etiketlenen entity'leri kontrol et, DB'ye kayıt gerekiyor mu sor">🏷️ Entity</button>
        <button class="ma-sb-qbtn" id="session-start-btn" onclick="Session.startDialog()" style="border-color:rgba(74,143,226,.4);color:var(--ac)" title="Yeni RP Sessionu başlat — setup atar, önceki sessioni kapatır">🎬 Session Başlat</button>
        <button class="ma-sb-qbtn" id="ma-auto-toggle" onclick="MASidebar.toggleAuto()" title="Mesaj gönderince MA otomatik sahneyi devam ettirir">🤖 Oto: AÇ</button>
      </div>
      <!-- Input -->
      <div id="ma-sb-inp-row">
        <input id="ma-sb-inp" placeholder="Bir şey sor…" onkeydown="if(event.key==='Enter')MASidebar.send()">
        <button id="ma-sb-send" onclick="MASidebar.send()"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  </div>

  <div id="members-list"></div>
</div>
</div></div><!-- /view-rp -->

<!-- ADMIN -->
<div class="view" id="view-admin" style="display:none">
<div id="adm-header">
  <span class="adm-brand">NYC<em>_</em>OBSERVER</span>
  <div class="adm-sep"></div>
  <div class="adm-st"><div class="sdot" id="sdot"></div><span id="stxt" style="color:var(--t2)">Offline</span></div>
  <div class="adm-sep"></div>
  <span style="font-family:var(--mono);font-size:10px;color:var(--t3)" id="last-run">—</span>
  <div class="adm-spc"></div>
  <button class="adm-btn primary" id="obs-start" onclick="Adm.startObs()"><i class="fas fa-play"></i> Start</button>
  <button class="adm-btn" id="obs-session-start" onclick="Adm.startSessionObs()" style="border-color:rgba(74,143,226,.4);color:var(--ac)" title="Sadece session başlangıç/bitişinde çalışır — billing dostu"><i class="fas fa-film"></i> Start Session</button>
  <button class="adm-btn danger"  id="obs-stop"  style="display:none" onclick="Adm.stopObs()"><i class="fas fa-stop"></i> Stop</button>
  <button class="adm-btn" id="obs-dbupdate" onclick="Adm.openDBUpdate()" style="border-color:rgba(77,184,128,.4);color:#4db880" title="Birden fazla session özetine bakarak karakterleri, ilişkileri ve durumları toplu güncelle"><i class="fas fa-sync-alt"></i> DB Güncelle</button>
  <button class="adm-btn" onclick="AutoBackup.runNow()" style="border-color:rgba(155,111,212,.4);color:var(--pu)" title="Tüm odaları ve mesajları hemen yedekle"><i class="fas fa-database"></i> Backup Al</button>
  <button class="adm-btn" onclick="Adm.close()"><i class="fas fa-arrow-left"></i> RP'ye Dön</button>
</div>
<div id="tbar"></div>
<div id="adm-grid">
  <div class="adm-panel">
    <div class="adm-ph"><span class="adm-pt">Run Log</span><span class="adm-pb" id="run-cnt">0 runs</span></div>
    <div class="adm-body">
      <div class="sg">
        <div class="sc"><div class="sl">Messages</div><div class="sv ac" id="s-msg">0</div></div>
        <div class="sc"><div class="sl">Runs</div><div class="sv gn" id="s-run">0</div></div>
        <div class="sc"><div class="sl">Incidents</div><div class="sv am" id="s-inc">0</div></div>
        <div class="sc"><div class="sl">Memories</div><div class="sv" id="s-mem">0</div></div>
      </div>
      <div class="sec-lbl">Recent Runs</div>
      <div id="run-log"></div>
    </div>
  </div>
  <div id="adm-feed">
    <div class="fh">
      <div class="ldot"></div>
      <span class="ftab active" data-tab="summaries" onclick="Adm.tab(this)">Summaries</span>
      <span class="ftab" data-tab="incidents" onclick="Adm.tab(this)">Incidents</span>
      <span class="ftab" data-tab="memories"  onclick="Adm.tab(this)">Memories</span>
      <span class="ftab" data-tab="flags"     onclick="Adm.tab(this)">Flags <span id="flag-bdg" style="color:var(--am);font-size:9px;margin-left:2px"></span></span>
    </div>
    <div class="fbody" id="feed-body"><div class="empty"><i class="fas fa-satellite-dish"></i><p>Veri bekleniyor</p></div></div>
  </div>
  <div class="adm-panel">
    <div class="adm-ph"><span class="adm-pt">Config</span><button onclick="Adm.loadCfg()" style="background:none;border:none;color:var(--t3);cursor:pointer;font-size:11px"><i class="fas fa-sync"></i></button></div>
    <div class="adm-body">
      <div class="trig-box">
        <div class="trig-lbl">Manuel Analiz</div>
        <select class="trig-sel" id="trig-room"><option value="">Oda seç…</option></select>
        <input type="number" class="trig-inp" id="trig-limit" value="20" min="3" max="60">
        <button class="trig-btn" id="trig-btn" onclick="Adm.manual()"><i class="fas fa-brain"></i> Analyze Now</button>
      </div>
      <div class="sec-lbl">Feature Flags</div>
      <div id="cfg-toggles"></div>
      <div class="sec-lbl">Settings</div>
      <div id="cfg-vals"></div>
    </div>
  </div>
</div>
</div><!-- /view-admin -->

<!-- MODALS -->
<!-- RP Time Manager Modal -->
<div class="mbd hidden" id="m-rp-time">
<div class="mbox" style="max-width:400px">
  <div class="mhd"><span class="mti"><i class="fas fa-clock" style="color:var(--pu);margin-right:8px"></i>RP Zaman Yöneticisi</span><button class="mcl" onclick="CM('m-rp-time')"><i class="fas fa-times"></i></button></div>
  <div class="mbdy">
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px">
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">YIL</label><input type="number" id="rtm-year" min="2000" max="2100" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none"></div>
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">AY</label><input type="number" id="rtm-month" min="1" max="12" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none"></div>
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">GÜN</label><input type="number" id="rtm-day" min="1" max="31" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px">
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">SAAT</label><input type="number" id="rtm-hour" min="0" max="23" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none"></div>
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">DAKİKA</label><input type="number" id="rtm-minute" min="0" max="59" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none"></div>
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">TIMEZONE</label><select id="rtm-tz" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none"><option>EST</option><option>CST</option><option>PST</option><option>GMT</option><option>CET</option></select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">MOD</label>
        <select id="rtm-mode" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none">
          <option value="auto">Otomatik (her mesajda)</option>
          <option value="semi">Yarı Oto (durdurulabilir)</option>
          <option value="manual">Manuel (yalnızca elle)</option>
        </select>
      </div>
      <div><label style="font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">ZAMAN ÇARPANı</label>
        <input type="number" id="rtm-scale" min="0.1" max="10" step="0.1" value="1" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:13px;padding:6px 8px;outline:none" title="1 = normal, 2 = 2× hızlı, 0.5 = yarı hız">
      </div>
    </div>
    <div style="font-family:var(--mono);font-size:10px;color:var(--t2);padding:8px 10px;background:var(--bg1);border-radius:var(--r);border:1px solid var(--ln)">
      <i class="fas fa-info-circle" style="color:var(--pu);margin-right:6px"></i>
      Otomatik ilerleme: &lt;50 kar → 1-2dk · 50-150 → 2-4dk · 150-400 → 5-10dk · 400-800 → 12-20dk · 800+ → 20-30dk. Çarpan bu değerleri ölçekler. Mesaj atarken ⏱ butonu ile anlık override yapılabilir.
    </div>
  </div>
  <div class="mft">
    <button class="btn btn-g" onclick="CM('m-rp-time')">İptal</button>
    <button class="btn" style="background:var(--pu);color:#fff" onclick="RpTime.togglePause(S.roomId)"><i class="fas fa-pause"></i> Duraklat / Devam</button>
    <button class="btn btn-p" onclick="RpTime.saveModal()"><i class="fas fa-save"></i> Kaydet</button>
  </div>
</div>
</div>

<div class="mbd hidden" id="m-admin-login">
<div class="mbox" style="max-width:320px">
  <div class="mhd"><span class="mti">Observer Erişimi</span><button class="mcl" onclick="CM('m-admin-login')"><i class="fas fa-times"></i></button></div>
  <div class="mbdy">
    <div style="text-align:center;font-family:var(--mono);font-size:10px;color:var(--t2);letter-spacing:.12em;margin-bottom:16px;text-transform:uppercase">Admin Şifresi</div>
    <input type="password" id="adm-pw" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-family:var(--mono);font-size:18px;letter-spacing:.2em;text-align:center;padding:10px;outline:none" placeholder="••••••" onkeydown="if(event.key==='Enter')Adm.checkPw()">
    <div id="adm-pw-err" style="display:none;font-family:var(--mono);font-size:11px;color:var(--rd);text-align:center;margin-top:8px">Hatalı şifre</div>
  </div>
  <div class="mft"><button class="btn btn-g" onclick="CM('m-admin-login')">İptal</button><button class="btn btn-p" onclick="Adm.checkPw()"><i class="fas fa-unlock"></i> Gir</button></div>
</div></div>

<div class="mbd hidden" id="m-char-picker">
<div class="mbox">
  <div class="mhd"><span class="mti">Sahneye Karakter Ekle</span><button class="mcl" onclick="CM('m-char-picker')"><i class="fas fa-times"></i></button></div>
  <div class="mbdy"><div class="cpg" id="cpg"></div></div>
  <div class="mft" id="cpf"><button class="btn btn-g" onclick="CM('m-char-picker')">Kapat</button></div>
</div></div>

<!-- ═══ TAG PICKER MODAL ═══ -->
<div class="mbd hidden" id="m-tag-picker">
<div class="mbox" style="max-width:420px">
  <div class="mhd"><span class="mti"><i class="fas fa-hashtag" style="color:var(--ac);margin-right:6px"></i>Etiket Ekle</span><button class="mcl" onclick="CM('m-tag-picker')"><i class="fas fa-times"></i></button></div>
  <div class="mbdy" style="gap:10px">
    <!-- Tip seçimi -->
    <div style="display:flex;gap:6px;flex-wrap:wrap" id="tag-type-btns">
      <button class="tag-type-btn active" data-type="Karakter" onclick="TagPicker.setType('Karakter',this)" style="background:rgba(192,132,252,.15);color:#c084fc;border-color:#c084fc44"><i class="fas fa-user"></i> Karakter</button>
      <button class="tag-type-btn" data-type="Araç" onclick="TagPicker.setType('Araç',this)" style="color:#e8a74a;border-color:#e8a74a44"><i class="fas fa-car"></i> Araç</button>
      <button class="tag-type-btn" data-type="Org" onclick="TagPicker.setType('Org',this)" style="color:#4a8fe2;border-color:#4a8fe244"><i class="fas fa-building"></i> Org</button>
      <button class="tag-type-btn" data-type="Mülk" onclick="TagPicker.setType('Mülk',this)" style="color:#9b6fd4;border-color:#9b6fd444"><i class="fas fa-home"></i> Mülk</button>
      <button class="tag-type-btn" data-type="Ekipman" onclick="TagPicker.setType('Ekipman',this)" style="color:#4db880;border-color:#4db88044"><i class="fas fa-box"></i> Ekipman</button>
    </div>
    <!-- Arama -->
    <input type="text" class="fi-inp" id="tag-search-inp" placeholder="Ara..." oninput="TagPicker.search(this.value)" autocomplete="off">
    <!-- Sonuçlar -->
    <div id="tag-results" style="max-height:240px;overflow-y:auto;display:flex;flex-direction:column;gap:4px"></div>
  </div>
  <div class="mft"><button class="btn btn-g" onclick="CM('m-tag-picker')">Kapat</button></div>
</div>
</div>

<div class="mbd hidden" id="m-room">
<div class="mbox">
  <div class="mhd"><span class="mti">Yeni RP Odası</span><button class="mcl" onclick="CM('m-room')"><i class="fas fa-times"></i></button></div>
  <div class="mbdy">
    <div class="ff"><label class="fl">Oda Adı</label><input type="text" id="new-room-name" class="fi-inp" placeholder="rp-downtown" maxlength="40"></div>
    <div class="ff"><label class="fl">Açıklama</label><input type="text" id="new-room-desc" class="fi-inp" placeholder="Burada ne oluyor?" maxlength="120"></div>
    <div class="ff"><label class="fl">Oda Tipi</label>
      <div id="room-type-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px">
        <label class="room-type-opt" data-type="live">
          <input type="radio" name="room-type" value="live">
          <span class="rto-icon" style="color:#e05555">●</span>
          <span class="rto-label"><b>Live</b><small>Canlı RP — Timer aktif</small></span>
        </label>
        <label class="room-type-opt" data-type="ic">
          <input type="radio" name="room-type" value="ic" checked>
          <span class="rto-icon">🎭</span>
          <span class="rto-label"><b>IC</b><small>Rol — bağımsız zaman</small></span>
        </label>
        <label class="room-type-opt" data-type="ooc">
          <input type="radio" name="room-type" value="ooc">
          <span class="rto-icon">💬</span>
          <span class="rto-label"><b>OOC</b><small>Sohbet / not</small></span>
        </label>
        <label class="room-type-opt" data-type="private">
          <input type="radio" name="room-type" value="private">
          <span class="rto-icon">🔒</span>
          <span class="rto-label"><b>Özel</b><small>Sadece sana görünür</small></span>
        </label>
        <label class="room-type-opt" data-type="announcement" style="grid-column:1/-1">
          <input type="radio" name="room-type" value="announcement">
          <span class="rto-icon">📢</span>
          <span class="rto-label"><b>Duyuru</b><small>Platform / RP güncellemeleri</small></span>
        </label>
      </div>
    </div>
  </div>
  <div class="mft"><button class="btn btn-g" onclick="CM('m-room')">İptal</button><button class="btn btn-p" onclick="RP.createRoom()"><i class="fas fa-plus"></i> Oluştur</button></div>
</div></div>

<div class="mbd hidden" id="m-attach">
<div class="mbox">
  <div class="mhd"><span class="mti">Resim Ekle</span><button class="mcl" onclick="CM('m-attach')"><i class="fas fa-times"></i></button></div>
  <div class="mbdy"><div class="ff"><label class="fl">Resim URL</label><input type="url" id="attach-url" class="fi-inp" placeholder="https://…"></div></div>
  <div class="mft"><button class="btn btn-g" onclick="CM('m-attach')">İptal</button><button class="btn btn-p" onclick="RP.confirmAttach()"><i class="fas fa-check"></i> Ekle</button></div>
</div></div>

<div class="mbd hidden" id="m-forward">
<div class="mbox">
  <div class="mhd"><span class="mti">Mesajı İlet</span><button class="mcl" onclick="CM('m-forward')"><i class="fas fa-times"></i></button></div>
  <div class="mbdy"><div id="fwd-list" style="display:flex;flex-direction:column;gap:6px;max-height:300px;overflow-y:auto"></div></div>
  <div class="mft"><button class="btn btn-g" onclick="CM('m-forward')">İptal</button></div>
</div></div>

<div id="toast-con"></div>
<script>
'use strict';
/* ═══ CONSTANTS ═════════════════════════════════════════ */
const GEM_MDL = () => window._MA_MODEL || window.DM_CONFIG?.geminiModel || 'gemini-2.5-flash';

// Shared Gemini REST helper — Observer AI + DM Engine her ikisi de bunu kullanır
async function _geminiGenerate(prompt, opts={}) {
  const key   = window.DM_CONFIG?.geminiKey;
  const model = opts.model || GEM_MDL();
  if (!key || key === '__GEMINI_KEY__') throw new Error('Gemini API key eksik');
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature:     opts.temperature     ?? 0.3,
          topP:            opts.topP            ?? 0.9,
          maxOutputTokens: opts.maxOutputTokens ?? 2048,
          responseMimeType: opts.json ? 'application/json' : 'text/plain',
        },
        safetySettings: [
          { category:'HARM_CATEGORY_HARASSMENT',        threshold:'BLOCK_NONE' },
          { category:'HARM_CATEGORY_HATE_SPEECH',       threshold:'BLOCK_NONE' },
          { category:'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold:'BLOCK_NONE' },
          { category:'HARM_CATEGORY_DANGEROUS_CONTENT', threshold:'BLOCK_NONE' },
        ],
      }),
    }
  );
  if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(`Gemini ${res.status}: ${e.error?.message||res.statusText}`); }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Gemini boş yanıt');
  if (opts.json) {
    const cleaned = text.replace(/^```json\s*/i,'').replace(/^```\s*/i,'').replace(/\s*```$/i,'').trim();
    return JSON.parse(cleaned);
  }
  return text;
}
const ADM_PASS='1';
const DB_TO=8000;
const EMOJIS=['👍','❤️','😂','😮','😢','🔥','⚔️','💀','🎯','🤝','👀','💬'];
const USERS=[
  {id:'eren', name:'Eren', role:'Admin',color:'#4a8fe2'},
  {id:'melih',name:'Melih',role:'Admin',color:'#9b6fd4'},
  {id:'tuna', name:'Tuna', role:'Admin',color:'#4db880'},
  {id:'nes',  name:'Nes',  role:'Admin',color:'#e8a74a'},
  {id:'aley', name:'Aley', role:'Admin',color:'#e05555'},
  /* Master Agent — yapay zeka oyuncusu */
  {id:'master_agent',name:'Master Agent',role:'AI',color:'#9b6fd4',isMA:true},
];
/* ═══ HELPERS ═══════════════════════════════════════════ */
function OM(id){document.getElementById(id)?.classList.remove('hidden');}
function CM(id){document.getElementById(id)?.classList.add('hidden');}
function toast(msg,t=''){
  const el=document.createElement('div');
  el.className='toast '+t;el.textContent=msg;
  document.getElementById('toast-con').appendChild(el);
  setTimeout(()=>el.remove(),3200);
}

/* ═══ FIREBASE MESSAGING HELPERS ════════════════════════ */
// Waits for Firebase SDK to be ready, then returns {db, fs} for Firestore ops
function _fbReady(timeoutMs=8000){
  return new Promise((res,rej)=>{
    if(window._fbFirestoreReady&&window._fbDb){res({db:window._fbDb,fs:window._fbFirestore});return;}
    const t=setTimeout(()=>rej(new Error('Firebase timeout')),[timeoutMs]);
    window.addEventListener('firebase-ready',()=>{clearTimeout(t);res({db:window._fbDb,fs:window._fbFirestore});},{once:true});
  });
}

// Helper: generate a Firestore-safe auto ID
function _fbId(){
  const c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let r='';for(let i=0;i<20;i++)r+=c[Math.floor(Math.random()*c.length)];
  return r;
}

// Firestore timestamp → ISO string
function _fbTs(t){
  if(!t)return new Date().toISOString();
  if(t.toDate)return t.toDate().toISOString();
  if(typeof t==='string')return t;
  return new Date(t).toISOString();
}

/* ═══ DB (Firebase Firestore adapter) ═══════════════════ */
// All collections live in Firebase Firestore:
//   rp_rooms/{roomId}
//   rp_rooms/{roomId}/messages/{msgId}
//   rp_presence/{charId}
//   dm_conversations/{convId}
//   dm_conversations/{convId}/messages/{msgId}
//   rp_player_profiles/{userId}
//   ai_summaries/{id}
//   incidents/{id}
//   character_memories/{id}
//   relationship_changes/{id}
//   ai_flags/{id}
//   ai_agent_logs/{id}
//   observer_config/main  (single doc with all OAI settings)
//
const DB={
  // ── Firestore helpers ────────────────────────────────
  async _getFs(){return _fbReady();},

  // Parse legacy PostgREST query string into filters
  // e.g. "room_id=eq.xyz&is_deleted=eq.false&order=id.asc&limit=30"
  _parseQ(qs){
    const res={filters:{},order:null,orderDir:'asc',limit:null,gt:null,gte:null,gtField:null,gteField:null};
    if(!qs)return res;
    qs.split('&').forEach(part=>{
      const [k,v]=part.split('=');
      if(!k||!v)return;
      const mEq=v.match(/^eq\.(.+)$/);
      const mGt=v.match(/^gt\.(.+)$/);
      const mGte=v.match(/^gte\.(.+)$/);
      if(k==='order'){const[f,d]=v.split('.');res.order=f;res.orderDir=d||'asc';}
      else if(k==='limit')res.limit=parseInt(v);
      else if(k==='select'||k==='on_conflict'){}
      else if(mEq){res.filters[k]=mEq[1]==='false'?false:mEq[1]==='true'?true:mEq[1];}
      else if(mGt){res.gt=mGt[1];res.gtField=k;}
      else if(mGte){res.gte=mGte[1];res.gteField=k;}
    });
    return res;
  },

  // ── get(path) ─────────────────────────────────────────
  async get(path){
    const [table,...rest]=path.split('?');
    const qs=rest.join('?');
    const {db,fs}=await this._getFs();
    const {collection,query,where,orderBy,limit,getDocs,doc,getDoc}=fs;

    // ── rp_rooms ─────────────────────────────────────
    if(table==='rp_rooms'){
      const q=this._parseQ(qs);
      let ref=collection(db,'rp_rooms');
      let constraints=[];
      Object.entries(q.filters).forEach(([k,v])=>constraints.push(where(k,'==',v)));
      if(q.order)constraints.push(orderBy(q.order,q.orderDir));
      if(q.limit)constraints.push(limit(q.limit));
      const snap=await getDocs(query(ref,...constraints));
      return snap.docs.map(d=>({id:d.id,...d.data(),created_at:_fbTs(d.data().created_at)}));
    }

    // ── rp_messages ──────────────────────────────────
    if(table==='rp_messages'){
      const q=this._parseQ(qs);
      const roomId=q.filters.room_id;
      if(!roomId)return[];
      delete q.filters.room_id;
      let ref=collection(db,'rp_rooms',String(roomId),'messages');
      let constraints=[];
      Object.entries(q.filters).forEach(([k,v])=>constraints.push(where(k,'==',v)));
      if(q.gtField)constraints.push(where(q.gtField,'>',q.gt));
      if(q.gteField)constraints.push(where(q.gteField,'>=',q.gte));
      if(q.order)constraints.push(orderBy(q.order,q.orderDir));
      if(q.limit)constraints.push(limit(q.limit));
      const snap=await getDocs(query(ref,...constraints));
      return snap.docs.map(d=>({id:d.id,...d.data(),created_at:_fbTs(d.data().created_at)}));
    }

    // ── rp_presence ──────────────────────────────────
    if(table==='rp_presence'){
      const q=this._parseQ(qs);
      let ref=collection(db,'rp_presence');
      let constraints=[];
      // Handle last_seen=gte.xxx
      if(q.gteField==='last_seen'){
        constraints.push(where('last_seen','>=',q.gte));
      }
      Object.entries(q.filters).forEach(([k,v])=>constraints.push(where(k,'==',v)));
      if(q.order)constraints.push(orderBy(q.order,q.orderDir));
      const snap=await getDocs(query(ref,...constraints));
      return snap.docs.map(d=>({...d.data(),char_id:d.id}));
    }

    // ── dm_conversations ─────────────────────────────
    if(table==='dm_conversations'){
      const q=this._parseQ(qs);
      let ref=collection(db,'dm_conversations');
      let constraints=[];
      Object.entries(q.filters).forEach(([k,v])=>constraints.push(where(k,'==',v)));
      if(q.order)constraints.push(orderBy(q.order,q.orderDir));
      if(q.limit)constraints.push(limit(q.limit));
      const snap=await getDocs(query(ref,...constraints));
      return snap.docs.map(d=>({id:d.id,...d.data()}));
    }

    // ── dm_messages ──────────────────────────────────
    if(table==='dm_messages'){
      const q=this._parseQ(qs);
      const convId=q.filters.conversation_id;
      if(!convId)return[];
      delete q.filters.conversation_id;
      let ref=collection(db,'dm_conversations',String(convId),'messages');
      let constraints=[];
      Object.entries(q.filters).forEach(([k,v])=>constraints.push(where(k,'==',v)));
      if(q.gtField)constraints.push(where(q.gtField,'>',q.gt));
      if(q.order)constraints.push(orderBy(q.order,q.orderDir));
      if(q.limit)constraints.push(limit(q.limit));
      const snap=await getDocs(query(ref,...constraints));
      return snap.docs.map(d=>({id:d.id,...d.data(),created_at:_fbTs(d.data().created_at)}));
    }

    // ── rp_player_profiles ───────────────────────────
    if(table==='rp_player_profiles'){
      const q=this._parseQ(qs);
      let ref=collection(db,'rp_player_profiles');
      let constraints=[];
      Object.entries(q.filters).forEach(([k,v])=>constraints.push(where(k,'==',v)));
      const snap=await getDocs(query(ref,...constraints));
      return snap.docs.map(d=>({...d.data(),id:d.id}));
    }

    // ── Observer AI flat collections ─────────────────
    if(['ai_summaries','incidents','character_memories','relationship_changes','ai_flags','ai_agent_logs'].includes(table)){
      const q=this._parseQ(qs);
      let ref=collection(db,table);
      let constraints=[];
      Object.entries(q.filters).forEach(([k,v])=>constraints.push(where(k,'==',v)));
      if(q.order)constraints.push(orderBy(q.order,q.orderDir==='desc'?'desc':'asc'));
      if(q.limit)constraints.push(limit(q.limit));
      const snap=await getDocs(query(ref,...constraints));
      return snap.docs.map(d=>({id:d.id,...d.data(),created_at:_fbTs(d.data().created_at)}));
    }

    console.warn('[DB.get] Unknown table:',table);return[];
  },

  // ── post(table, body) → [{id,...}] ──────────────────
  async post(table,body){
    const {db,fs}=await this._getFs();
    const {collection,doc,setDoc,addDoc,serverTimestamp}=fs;
    const now=new Date().toISOString();

    if(table==='rp_rooms'){
      const id=body.id||_fbId();
      const data={...body,id,created_at:body.created_at||now,sort_order:body.sort_order||0};
      await setDoc(doc(db,'rp_rooms',String(id)),data);
      return[data];
    }
    if(table==='rp_messages'){
      const roomId=body.room_id;if(!roomId)return[];
      const id=_fbId();
      const data={...body,id,created_at:now};
      await setDoc(doc(db,'rp_rooms',String(roomId),'messages',id),data);
      return[data];
    }
    if(table==='dm_conversations'){
      const id=_fbId();
      const data={...body,id,created_at:now};
      await setDoc(doc(db,'dm_conversations',id),data);
      return[data];
    }
    if(table==='dm_messages'){
      const convId=body.conversation_id;if(!convId)return[];
      const id=_fbId();
      const data={...body,id,created_at:now};
      await setDoc(doc(db,'dm_conversations',String(convId),'messages',id),data);
      return[data];
    }
    if(table==='rp_player_profiles'){
      const userId=body.user_id;if(!userId)return[];
      await setDoc(doc(db,'rp_player_profiles',userId),{...body,updated_at:now},{merge:true});
      return[{...body,id:userId}];
    }
    // ── Observer AI flat collections ────────────────
    if(['ai_summaries','incidents','character_memories','relationship_changes','ai_flags','ai_agent_logs'].includes(table)){
      const id=_fbId();
      const data={...body,id,created_at:now};
      await setDoc(doc(db,table,id),data);
      return[data];
    }
    console.warn('[DB.post] Unknown table:',table);return[];
  },

  // ── patch(table, query, body) ────────────────────────
  async patch(table,qs,body){
    const {db,fs}=await this._getFs();
    const {doc,updateDoc,getDocs,collection,query,where,writeBatch}=fs;

    if(table==='rp_rooms'){
      const q=this._parseQ(qs);const idVal=q.filters.id;
      if(idVal){
        await updateDoc(doc(db,'rp_rooms',String(idVal)),body).catch(()=>{});
        return[{id:idVal,...body}];
      }
      return[];
    }
    if(table==='rp_messages'){
      const q=this._parseQ(qs);const idVal=q.filters.id;
      // We need room_id to path into subcollection — search all rooms
      if(idVal){
        // Try to find by scanning known rooms cache
        let found=false;
        for(const room of(window.S?.rooms||[])){
          try{
            const ref=doc(db,'rp_rooms',String(room.id),'messages',String(idVal));
            await updateDoc(ref,body);
            found=true;break;
          }catch(e){}
        }
        if(!found){
          // Fallback: just mark deleted in current room
          if(window.S?.roomId){
            await updateDoc(doc(db,'rp_rooms',String(window.S.roomId),'messages',String(idVal)),body).catch(()=>{});
          }
        }
        return[{id:idVal,...body}];
      }
      return[];
    }
    if(table==='dm_conversations'){
      const q=this._parseQ(qs);const idVal=q.filters.id;
      if(idVal){
        await updateDoc(doc(db,'dm_conversations',String(idVal)),body).catch(()=>{});
        return[{id:idVal,...body}];
      }
      return[];
    }
    if(table==='rp_presence'){return[];}// presence uses upsert
    // ── Observer AI flat collections ─────────────────
    if(['ai_summaries','incidents','character_memories','relationship_changes','ai_flags','ai_agent_logs'].includes(table)){
      const q=this._parseQ(qs);const idVal=q.filters.id||q.filters.key;
      if(idVal){
        await fs.updateDoc(fs.doc(db,table,String(idVal)),body).catch(()=>{});
        return[{id:idVal,...body}];
      }
      return[];
    }
    console.warn('[DB.patch] Unknown table:',table);return[];
  },

  // ── delete(table, qs) ── hard delete ────────────────
  async delete(table,qs){
    const {db,fs}=await this._getFs();
    const {doc,deleteDoc,collection,query,where,getDocs,writeBatch}=fs;
    const q=this._parseQ(qs);

    if(table==='rp_messages'){
      const idVal=q.filters.id;
      if(idVal){
        // Oda ID'yi bul (önce mevcut oda, sonra tüm odalar)
        const roomId=q.filters.room_id||window.S?.roomId;
        if(roomId){
          try{await deleteDoc(doc(db,'rp_rooms',String(roomId),'messages',String(idVal)));return;}catch(e){}
        }
        // Fallback: tüm odalarda ara
        for(const room of(window.S?.rooms||[])){
          try{
            await deleteDoc(doc(db,'rp_rooms',String(room.id),'messages',String(idVal)));
            return;
          }catch(e){}
        }
      }
    }
    if(table==='rp_rooms'){
      const idVal=q.filters.id;
      if(idVal){
        // Önce alt koleksiyonları temizle
        try{
          const msgsSnap=await getDocs(collection(db,'rp_rooms',String(idVal),'messages'));
          const batch=writeBatch(db);
          msgsSnap.forEach(d=>batch.delete(d.ref));
          await batch.commit();
        }catch(e){}
        await deleteDoc(doc(db,'rp_rooms',String(idVal))).catch(()=>{});
      }
    }
  },

  // ── upsert(table, conflictKey, body) ────────────────
  async upsert(table,onConflict,body){
    const {db,fs}=await this._getFs();
    const {doc,setDoc}=fs;
    const now=new Date().toISOString();

    if(table==='rp_presence'){
      const charId=body.char_id;if(!charId)return[];
      await setDoc(doc(db,'rp_presence',String(charId)),{...body,last_seen:now},{merge:true});
      return[{...body,last_seen:now}];
    }
    if(table==='rp_player_profiles'){
      const userId=body.user_id;if(!userId)return[];
      await setDoc(doc(db,'rp_player_profiles',userId),{...body,updated_at:now},{merge:true});
      return[{...body}];
    }
    // Generic fallback
    return this.post(table,body);
  }
};

/* ═══ STATE ═════════════════════════════════════════════ */
const S={
  chars:[],orgs:[],ci:new Map(),oi:new Map(),cni:new Map(),
  rooms:[],msgs:{},roomId:null,
  user:null,activeChar:null,activeChars:[],
  presence:{},typing:{},attach:null,reply:null,_off:false,
  playerProfiles:{},  // { userId: profileObj }
  unread:{},          // { roomId: count }
};

/* ═══ THEME ═══════════════════════════════════════════ */
const Theme={
  _cur:'dark',
  init(){
    const saved=localStorage.getItem('nyc_rp_theme')||'dark';
    this._cur=saved;
    document.documentElement.setAttribute('data-theme',saved);
    this._updBtn();
  },
  toggle(){
    this._cur=this._cur==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',this._cur);
    localStorage.setItem('nyc_rp_theme',this._cur);
    this._updBtn();
  },
  _updBtn(){
    const btn=document.getElementById('theme-toggle');if(!btn)return;
    btn.innerHTML=this._cur==='dark'?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';
    btn.title=this._cur==='dark'?'Light Moda Geç':'Dark Moda Geç';
  }
};

/* ═══ SHA-256 hash helper ═════════════════════════════ */
async function _sha256(str){
  if(!str)return'';
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

/* ═══ LOGIN ════════════════════════════════════════════ */
const Login={
  sel:null,
  init(){
    Theme.init();
    const saved=localStorage.getItem('nyc_rp_user');
    if(saved){const u=USERS.find(x=>x.id===saved);if(u){this._start(u);return;}}
    this._render();
    document.getElementById('loader').classList.add('hidden');
  },
  _render(){
    const g=document.getElementById('user-grid');g.innerHTML='';
    USERS.forEach(u=>{
      const c=document.createElement('div');c.className='user-card';c.dataset.id=u.id;
      c.innerHTML=`<div class="u-ava" style="background:${u.color}22;border-color:${u.color}44;color:${u.color}">${u.name[0]}</div><div class="u-name">${u.name}</div><div class="u-role" style="color:${u.color}">${u.role}</div>`;
      c.onclick=()=>{
        document.querySelectorAll('.user-card').forEach(x=>{x.classList.remove('selected');x.style.borderColor='';x.style.background='';});
        c.classList.add('selected');c.style.borderColor=u.color;c.style.background=u.color+'22';
        this.sel=u;
        const btn=document.getElementById('login-btn');btn.classList.add('ready');btn.style.background=u.color;
        // Show password area
        document.getElementById('login-pw-area').style.display='block';
        document.getElementById('login-note-msg').textContent='Şifre varsa gir, yoksa boş bırak';
      };
      g.appendChild(c);
    });
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById('view-login').style.display = 'flex';
  },
  async enter(){
    if(!this.sel)return;
    const pwInp=document.getElementById('login-pw-input');
    const pwVal=pwInp?pwInp.value:'';
    // Check password if user has one
    try{
      const profile=await DB.get(`rp_player_profiles?user_id=eq.${this.sel.id}`);
      const pr=Array.isArray(profile)?profile[0]:profile;
      if(pr&&pr.password_hash&&pr.password_hash!==''){
        if(!pwVal){
          document.getElementById('login-note-msg').textContent='Bu hesap şifre korumalı — şifreni gir';
          document.getElementById('login-note-msg').style.color='var(--rd)';
          return;
        }
        const hash=await _sha256(pwVal);
        if(hash!==pr.password_hash){
          document.getElementById('login-note-msg').textContent='Yanlış şifre';
          document.getElementById('login-note-msg').style.color='var(--rd)';
          return;
        }
      }
    }catch(e){/* no profile = no password */}
    this._start(this.sel);
  },
  _start(u){
    S.user=u;localStorage.setItem('nyc_rp_user',u.id);
    document.getElementById('sess-name').textContent=u.name;
    document.getElementById('sess-role').textContent=u.role;
    const a=document.getElementById('sess-ava');
    a.innerHTML=`<span style="color:${u.color};font-family:var(--mono);font-size:13px;font-weight:700">${u.name[0]}</span><div class="online-dot"></div>`;
    document.getElementById('view-login').style.display = 'none';
    RP.init();
    // 6 saatlik otomatik backup başlat
    setTimeout(() => AutoBackup.start(), 3000);
    // MA konuşma geçmişini Firebase'den yükle
    setTimeout(() => { if(window.MasterAgent) MasterAgent.loadHistory(); }, 4000);
  },
  _togglePw(inputId,btn){
    const inp=document.getElementById(inputId);if(!inp)return;
    if(inp.type==='password'){inp.type='text';btn.innerHTML='<i class="fas fa-eye-slash"></i>';}
    else{inp.type='password';btn.innerHTML='<i class="fas fa-eye"></i>';}
  },
  _userMenu(e){
    e.stopPropagation();
    const existing=document.getElementById('user-ctx-menu');if(existing)existing.remove();
    const menu=document.createElement('div');menu.id='user-ctx-menu';menu.className='ctx-menu';
    const rect=document.querySelector('.sb-user').getBoundingClientRect();
    menu.style.cssText=`left:${rect.left+4}px;bottom:${window.innerHeight-rect.top+4}px`;
    menu.innerHTML=`
      <div class="ctx-header">Hesap</div>
      <button class="ctx-item" onclick="PlayerProfile.open('${S.user?.id||''}');document.getElementById('user-ctx-menu')?.remove()">
        <span class="ctx-icon"><i class="fas fa-user"></i></span>Profili Düzenle
      </button>
      <button class="ctx-item" onclick="Login._openChangePw();document.getElementById('user-ctx-menu')?.remove()">
        <span class="ctx-icon"><i class="fas fa-key"></i></span>Şifre Değiştir
      </button>
      <div class="ctx-sep"></div>
      <button class="ctx-item danger" onclick="Login.logout();document.getElementById('user-ctx-menu')?.remove()">
        <span class="ctx-icon"><i class="fas fa-sign-out-alt"></i></span>Çıkış Yap
      </button>`;
    document.body.appendChild(menu);
    const close=()=>{menu.remove();document.removeEventListener('click',close);};
    setTimeout(()=>document.addEventListener('click',close),0);
  },
  _openChangePw(){
    let modal=document.getElementById('m-change-pw');
    if(!modal){
      modal=document.createElement('div');modal.id='m-change-pw';modal.className='mbd hidden';
      modal.innerHTML=`<div class="mbox" style="max-width:400px">
        <div class="mhd"><span class="mti">Şifre Değiştir</span><button class="mcl" onclick="CM('m-change-pw')"><i class="fas fa-times"></i></button></div>
        <div class="mbdy">
          <div class="ff">
            <label class="fl">Mevcut Şifre</label>
            <div class="pw-wrap"><input type="password" id="cpw-cur" class="fi-inp" placeholder="Mevcut şifre (yoksa boş)"><button class="pw-eye" type="button" onclick="Login._togglePw('cpw-cur',this)"><i class="fas fa-eye"></i></button></div>
          </div>
          <div class="ff">
            <label class="fl">Yeni Şifre</label>
            <div class="pw-wrap"><input type="password" id="cpw-new" class="fi-inp" placeholder="Yeni şifre"><button class="pw-eye" type="button" onclick="Login._togglePw('cpw-new',this)"><i class="fas fa-eye"></i></button></div>
          </div>
          <div class="ff">
            <label class="fl">Yeni Şifre (Tekrar)</label>
            <div class="pw-wrap"><input type="password" id="cpw-con" class="fi-inp" placeholder="Yeni şifre (tekrar)"><button class="pw-eye" type="button" onclick="Login._togglePw('cpw-con',this)"><i class="fas fa-eye"></i></button></div>
          </div>
          <div id="cpw-err" style="color:var(--rd);font-family:var(--mono);font-size:11px;display:none"></div>
        </div>
        <div class="mft"><button class="btn btn-g" onclick="CM('m-change-pw')">İptal</button><button class="btn btn-p" onclick="Login._saveChangePw()"><i class="fas fa-save"></i> Kaydet</button></div>
      </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click',ev=>{if(ev.target===modal)CM('m-change-pw');});
    }
    document.getElementById('cpw-cur').value='';
    document.getElementById('cpw-new').value='';
    document.getElementById('cpw-con').value='';
    document.getElementById('cpw-err').style.display='none';
    OM('m-change-pw');
  },
  async _saveChangePw(){
    const userId=S.user?.id;if(!userId)return;
    const cur=document.getElementById('cpw-cur').value;
    const nw=document.getElementById('cpw-new').value;
    const con=document.getElementById('cpw-con').value;
    const errEl=document.getElementById('cpw-err');
    const showErr=msg=>{errEl.textContent=msg;errEl.style.display='block';};
    if(nw!==con){showErr('Yeni şifreler eşleşmiyor');return;}
    try{
      const profile=await DB.get(`rp_player_profiles?user_id=eq.${userId}`);
      const pr=Array.isArray(profile)?profile[0]:profile;
      if(pr&&pr.password_hash&&pr.password_hash!==''){
        const curHash=await _sha256(cur);
        if(curHash!==pr.password_hash){showErr('Mevcut şifre yanlış');return;}
      }
      const newHash=await _sha256(nw);
      await DB.upsert('rp_player_profiles','user_id',{user_id:userId,password_hash:newHash,updated_at:new Date().toISOString()});
      if(S.playerProfiles[userId])S.playerProfiles[userId].password_hash=newHash;
      CM('m-change-pw');
      toast(nw?'Şifre güncellendi ✓':'Şifre kaldırıldı ✓','success');
    }catch(e){showErr('Hata: '+e.message);}
  },
  logout(){
    if(!confirm('Oturumu kapat?'))return;
    localStorage.removeItem('nyc_rp_user');
    S.user=null;S.activeChar=null;S.activeChars=[];
    RT.disconnect();
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    this.sel=null;this._render();
    document.getElementById('loader').classList.add('hidden');
  }
};

/* ═══ RP ════════════════════════════════════════════════ */
// NSFW state — mesajın AI'a gönderilip gönderilmeyeceğini belirler
let _nsfwMode = false;
const RP={
  async init(){
    document.getElementById('loader').classList.remove('hidden');
    // Güvenlik: 12s sonra loader her halükarda kapansın, takılı kalmasın
    const _loaderGuard=setTimeout(()=>{
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('view-rp').style.display = 'flex';
      console.warn('[RP] init timeout — loader force-hidden');
    },12000);
    try{
      // Firebase'den NYC_DB çek
      const d = await window._fbLoadDB('nyc_db');
      if(d){
        S.chars=d.characters||[];S.orgs=d.organizations||[];
        S._db=d;  // vehicles, properties, equipments için de sakla
        S.chars.forEach(c=>{S.ci.set(c.id,c);if(c.name)S.cni.set(c.name.toLowerCase(),c.id);if(c.alias)S.cni.set(c.alias.toLowerCase(),c.id);});
        S.orgs.forEach(o=>S.oi.set(o.id,o));
      }
    }catch(e){console.warn('[RP] nyc_db firebase:',e.message);}
    try{
      const rows=await DB.get('rp_rooms?order=sort_order.asc');
      if(rows.length)S.rooms=rows;else RP._dfRooms();
    }catch(e){RP._dfRooms();S._off=true;}
    const sc=localStorage.getItem('rp_active_char');
    if(sc){const c=S.chars.find(x=>x.id===sc);if(c){S.activeChar=c;S.activeChars=[c];UI.updChar(c);}}
    UI.renderRooms();UI.renderTags();
    setTimeout(()=>QuickBar?.render(), 800); // Veriler yüklendikten sonra şeridi doldur
    const live=S.rooms.find(r=>r.slug==='live')||S.rooms[0];
    if(live)await RP.switchRoom(live.id);
    clearTimeout(_loaderGuard);
    document.getElementById('view-rp').style.display = 'flex';
    document.getElementById('loader').classList.add('hidden');
    setInterval(()=>RP._hb(),15000);
    setInterval(()=>RT._presence(),3000);
    // Gerçek zamanlı oda listesi ve OAI durum dinleyicileri
    RT.watchRooms();
    RT.watchOAIState();
  },
  _dfRooms(){
    S.rooms=[
      {id:'live',slug:'live',name:'live',description:'All RP messages — global feed',sort_order:0,is_live:true},
      {id:'rp-1',slug:'rp-1',name:'rp-1',description:'Roleplay room 1',sort_order:1,is_live:false},
      {id:'rp-2',slug:'rp-2',name:'rp-2',description:'Roleplay room 2',sort_order:2,is_live:false},
    ];
  },
  async switchRoom(id){
    // Clear unread badge for this room
    if(S.unread&&S.unread[id]){delete S.unread[id];UI.renderRooms();}
    S.roomId=id;S.typing={};RT.lastId=null;
    try{localStorage.setItem('nycrp_lastRoomId',String(id));}catch(_){}
    const room=S.rooms.find(r=>r.id==id);
    if(room){document.getElementById('room-title').textContent=room.name;document.getElementById('room-desc').textContent=room.description||'';}
    document.querySelectorAll('.room-item').forEach(el=>el.classList.toggle('active',el.dataset.id==id));
    // Init RP time for this room (fire-and-forget)
    RpTime.initRoom(id).catch(()=>{});
    // Show cached immediately if available (instant render)
    if(S.msgs[id]&&S.msgs[id].length){UI.renderRoom(id);}
    else{UI.renderRoom(id);} // shows empty state
    // Always fetch fresh from DB
    if(!S._off){
      try{
        const rows=await DB.get(`rp_messages?room_id=eq.${id}&is_deleted=eq.false&order=created_at.asc&limit=500`);
        S.msgs[id]=rows;
        RT.lastId=rows.length?rows[rows.length-1].id:null;
        UI.renderRoom(id);
      }catch(e){console.warn('[RP] msgs:',e.message);}
    }
    // RT bağlantısı kur; hata alırsa 2s sonra bir kez daha dene (F5 sonrası Firebase hazır değilse)
    try{
      await RT.connect(id);
    }catch(e){
      console.warn('[RP] RT.connect failed, retrying in 2s…',e.message);
      setTimeout(()=>RT.connect(id),2000);
    }
  },
  async send(){
    const inp=document.getElementById('msg-input');
    const txt=inp.value.trim();
    if(!txt&&!S.attach)return;
    // F5 sonrası S.roomId null kalabilir — guard + reconnect
    if(!S.roomId){
      const live=S.rooms.find(r=>r.slug==='live')||S.rooms[0];
      if(live){await RP.switchRoom(live.id);}else{toast('Önce bir odaya gir','error');return;}
    }
    // RT bağlantısı yoksa yeniden bağlan
    if(!RT._unsubMsg&&S.roomId){RT.connect(S.roomId);}
    // Hangi karakterle gönderilecek: metin "İsim: ..." içeriyorsa ilk satırdaki ismi bul
    // Aksi takdirde S.activeChar var mı bak, yoksa kullanıcı adını kullan
    let sendChar=S.activeChar||null;
    const firstLine=(txt.split('\n')[0]||'').trim();
    // "**İsim:** " veya "İsim: " prefix'ten karakter tespiti
    const namePrefix=firstLine.match(/^\*\*(.+?):\*\*\s/) || firstLine.match(/^(.+?):\s/);
    if(namePrefix){
      const nm=namePrefix[1].trim();
      const found=S.chars?.find(c=>c.name===nm||(c.alias&&c.alias===nm));
      if(found) sendChar=found;
    }
    if(!sendChar&&S.activeChars?.length){sendChar=S.activeChars[0];}
    const org=sendChar?RP._org((sendChar.organizations||[])[0]||sendChar.organization):null;
    // Check for manual RP time override
    const overrideInp=document.getElementById('rp-time-override-inp');
    const overrideVal=overrideInp?.value.trim()||'';
    // Get RP time before clearing input (async but fire early)
    const rpTimePromise=overrideVal?RpTime._parseAndApply(S.roomId,overrideVal):RpTime.onMessage(S.roomId,txt);
    // Reset override bar
    if(overrideVal&&overrideInp){overrideInp.value='';document.getElementById('rp-time-override-bar').style.display='none';}
    const pl={
      room_id:S.roomId,
      char_id:sendChar?.id||null,char_name:sendChar?.name||S.user?.name||'?',
      char_alias:sendChar?.alias||'',char_avatar:sendChar?.image||'',
      org_id:org?.id||null,org_name:org?.name||null,org_color:org?.color||null,
      content:txt,attachment_url:S.attach||null,reactions:{},is_edited:false,
      reply_to_id:S.reply?.id||null,
      reply_to_sender:S.reply?.char_name||null,
      reply_to_content:S.reply?.content?.slice(0,100)||null,
      sent_by_user:S.user?.id||null,
      is_nsfw:_nsfwMode||false,  // NSFW mesajlar AI'a gönderilmez
      rp_time:null // will be set after await below
    };
    // Await rp_time (usually instant — state already in memory)
    try{pl.rp_time=await rpTimePromise;}catch(e){}
    inp.value='';inp.style.height='auto';S.attach=null;RP.clearReply();RP.clearTyping();
    // Reset NSFW mode after send
    if(_nsfwMode){_nsfwMode=false;document.getElementById('nsfw-toggle')?.classList.remove('nsfw-on');document.getElementById('input-box')?.classList.remove('nsfw-active');}
    if(S._off){
      const loc={...pl,id:'local_'+Date.now(),created_at:new Date().toISOString()};
      if(!S.msgs[S.roomId])S.msgs[S.roomId]=[];
      S.msgs[S.roomId].push(loc);UI.append(loc);document.getElementById('empty-state')?.remove();
      return;
    }
    try{
      const ref = await DB.post('rp_messages',pl);
      // QuickBar: kullanılan karakteri/entity'yi kaydet
      if(sendChar) QuickBar?.trackUse('Karakter', sendChar.name, sendChar.id, sendChar.image||null);
      // Oto-devam artık RT._handleMsg içindeki _onIncomingMsg ile yapılıyor — burada sadece @MA mention kontrolü
      // @mention bildirimi — etiketlenen oyuncuları bul ve toast'a yansıt
      const mentionMatches=txt.match(/@([A-Za-zÇĞİÖŞÜçğışöü][A-Za-zÇĞİÖŞÜçğışöü\s]{0,20}?)(?=\s|$)/g)||[];
      // @MA / @MasterAgent mention — MA sidebar'a yönlendir (everyone broadcast'ten ayrı)
      const hasMAmention = /@(MA|MasterAgent)\b/i.test(txt);
      if(hasMAmention && window.MasterAgent){
        MasterAgent.send('Kullanıcı sana RP içinde seslendi: ' + txt);
        MASidebar.revealForMention();
        // Entity tag detection — sadece @MA mention varsa çalışır
        const entityTagPattern = /\[(Karakter|Araç|Mülk|Org|Ekipman):([^\]]+)\]/g;
        const entityMatches = [...(pl.content||'').matchAll(entityTagPattern)];
        if(entityMatches.length > 0){
          setTimeout(()=>MasterAgent._entityCheck(pl, entityMatches), 2000);
        }
      }
      if(mentionMatches.length){
        const names=mentionMatches.map(m=>m.trim());
        const uniqueNames=[...new Set(names)].filter(n=>!/@(MA|MasterAgent)\b/i.test(n));
        if(uniqueNames.includes('@everyone')||uniqueNames.includes('@here')){
          toast('📢 Herkese mention gönderildi','');
        } else if(uniqueNames.length){
          toast(`📌 ${uniqueNames.join(', ')} etiketlendi`,'');
        }
      }
    }catch(e){toast('Gönderilemedi','error');}
  },
  async editMsg(id,newTxt,newRpTime){
    if(!newTxt.trim())return;
    const m=(S.msgs[S.roomId]||[]).find(x=>x.id==id);if(!m)return;
    m.content=newTxt.trim();m.is_edited=true;
    const patch={content:newTxt.trim(),is_edited:true};
    if(newRpTime!==undefined){m.rp_time=newRpTime||null;patch.rp_time=newRpTime||null;}
    UI.updateTxt(id,newTxt.trim(),true);
    // Update RP time badge in the DOM if changed
    if(newRpTime!==undefined){
      const el=document.querySelector(`[data-msg-id="${id}"]`);
      if(el){
        const ts=el.querySelector('.msg-ts');
        if(ts){
          // Rebuild rp time badge
          const existBadge=ts.querySelector('.msg-rp-ts');
          if(existBadge)existBadge.remove();
          if(newRpTime){
            const badge=document.createElement('span');
            badge.className='msg-rp-ts';badge.title='RP Zamanı';
            badge.innerHTML=`${newRpTime.slice(11,16)} <span class="msg-rp-tz">${newRpTime.slice(-3)}</span>`;
            ts.insertBefore(badge,ts.firstChild);
          }
        }
      }
    }
    if(!S._off)try{await DB.patch('rp_messages',`id=eq.${id}`,patch);}catch(e){}
  },
  async delMsg(id){
    // Remove locally first (instant feedback)
    if(S.msgs[S.roomId])
      S.msgs[S.roomId]=S.msgs[S.roomId].filter(m=>m.id!=id);
    document.querySelector(`[data-msg-id="${id}"]`)?.remove();
    // Hard delete — Firestore'dan gerçekten sil, realtime 'removed' event ile diğer kullanıcılara yayılır
    if(!S._off){
      try{
        await DB.delete('rp_messages',`id=eq.${id}&room_id=eq.${S.roomId}`);
      }catch(e){ toast('Silinemedi','error'); }
    }
  },
  async react(msgId,emoji){
    const reactor=S.activeChar||S.activeChars?.[0]||null;
    const reactId=reactor?.id||S.user?.id||null;
    if(!reactId)return;
    const m=(S.msgs[S.roomId]||[]).find(x=>x.id==msgId);if(!m)return;
    const r={...(m.reactions||{})};
    if(!r[emoji])r[emoji]=[];
    const i=r[emoji].indexOf(reactId);
    if(i===-1)r[emoji].push(reactId);else r[emoji].splice(i,1);
    if(r[emoji].length===0)delete r[emoji];
    m.reactions=r;
    if(!S._off)try{await DB.patch('rp_messages',`id=eq.${msgId}`,{reactions:r});}catch(e){}
    const el=document.querySelector(`[data-msg-id="${msgId}"] .msg-reactions`);
    if(el)UI.renderReacts(el,m);
  },
  toggleFav(id){
    const el=document.querySelector(`[data-msg-id="${id}"]`);if(!el)return;
    el.classList.toggle('fav');
    const on=el.classList.contains('fav');
    toast(on?'★ Favorilere eklendi':'Favorilerden çıkarıldı',on?'success':'');
    const favs=JSON.parse(localStorage.getItem('rp_favs')||'[]');
    if(on&&!favs.includes(String(id)))favs.push(String(id));
    else{const idx=favs.indexOf(String(id));if(idx>-1)favs.splice(idx,1);}
    localStorage.setItem('rp_favs',JSON.stringify(favs));
  },
  setReply(d){
    S.reply=d;
    document.getElementById('rbs').textContent=d.char_name+': ';
    document.getElementById('rbt').textContent=(d.content||'').slice(0,80);
    document.getElementById('reply-bar').classList.add('show');
    document.getElementById('msg-input').focus();
  },
  clearReply(){S.reply=null;document.getElementById('reply-bar').classList.remove('show');},
  fwdMsg(d){
    const list=document.getElementById('fwd-list');list.innerHTML='';

    // ── PM ile ilet butonu ─────────────────────────────
    const pmSection=document.createElement('div');
    pmSection.style.cssText='margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--ln)';
    pmSection.innerHTML=`<div style="font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px">PM İle İlet</div>`;
    (USERS||[]).filter(u=>u.id!==S.user?.id).forEach(u=>{
      const btn=document.createElement('button');
      btn.style.cssText='width:100%;display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--bg3);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);cursor:pointer;font-size:13px;margin-bottom:4px;transition:background .12s';
      btn.innerHTML=`<span style="width:10px;height:10px;border-radius:50%;background:${u.color};flex-shrink:0;display:inline-block"></span>${u.name}`;
      btn.onmouseenter=()=>btn.style.background='var(--bg4)';btn.onmouseleave=()=>btn.style.background='var(--bg3)';
      btn.onclick=async()=>{
        CM('m-forward');
        await PM.open(u.id);
        // After PM window opens, pre-fill the message
        setTimeout(()=>{
          const inp=document.getElementById('pm-input');
          if(inp){inp.value=`↗ "${d.content?.slice(0,80)||''}"`;inp.focus();}
        },200);
      };
      pmSection.appendChild(btn);
    });
    list.appendChild(pmSection);

    // ── Oda ile ilet ──────────────────────────────────
    const roomSection=document.createElement('div');
    roomSection.innerHTML=`<div style="font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px">Odaya İlet</div>`;
    let hasRooms=false;
    S.rooms.filter(r=>!r.is_archived&&r.id!=S.roomId).forEach(room=>{
      hasRooms=true;
      const btn=document.createElement('button');
      btn.style.cssText='width:100%;display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--bg3);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);cursor:pointer;font-size:13px;transition:background .12s;margin-bottom:4px';
      btn.innerHTML=`<span style="font-family:var(--mono);color:var(--t3)">#</span>${room.name}`;
      btn.onmouseenter=()=>btn.style.background='var(--bg4)';btn.onmouseleave=()=>btn.style.background='var(--bg3)';
      btn.onclick=async()=>{
        CM('m-forward');
        const fwdChar=S.activeChar||S.activeChars?.[0]||null;
        const org=fwdChar?RP._org((fwdChar.organizations||[])[0]||fwdChar.organization):null;
        try{
          await DB.post('rp_messages',{room_id:room.id,char_id:fwdChar?.id||null,char_name:fwdChar?.name||S.user?.name||'?',char_alias:fwdChar?.alias||'',char_avatar:fwdChar?.image||'',org_id:org?.id||null,org_name:org?.name||null,org_color:org?.color||null,content:'↗ İletildi: '+d.content,attachment_url:d.attachment_url||null,reactions:{},is_edited:false,sent_by_user:S.user?.id||null});
          toast(`#${room.name} odasına iletildi`,'success');
        }catch(e){toast('İletilemedi','error');}
      };
      roomSection.appendChild(btn);
    });
    if(!hasRooms) roomSection.innerHTML+='<div style="font-family:var(--mono);font-size:11px;color:var(--t3);padding:4px">Başka oda yok</div>';
    list.appendChild(roomSection);
    OM('m-forward');
  },
  async createRoom(){
    const name=document.getElementById('new-room-name').value.trim().toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
    const desc=document.getElementById('new-room-desc').value.trim();
    if(!name){toast('Oda adı gerekli','error');return;}
    const typeVal=(document.querySelector('input[name="room-type"]:checked')||{}).value||'ic';
    const nr={
      slug:name,name,description:desc,sort_order:S.rooms.length,
      is_live:typeVal==='live',
      is_ic:typeVal==='ic',
      is_ooc:typeVal==='ooc',
      is_private:typeVal==='private',
      is_announcement:typeVal==='announcement',
      room_type:typeVal,
      is_archived:false,
      created_by:S.user?.id||null
    };
    // Özel oda: sadece kendi kullanıcısı görebilir
    if(!S._off){
      try{const r=await DB.post('rp_rooms',nr);S.rooms.push(r[0]||{...nr,id:'l'+Date.now()});}
      catch(e){toast('Oluşturulamadı','error');return;}
    }else S.rooms.push({...nr,id:'l'+Date.now(),created_at:new Date().toISOString()});
    CM('m-room');
    document.getElementById('new-room-name').value='';
    document.getElementById('new-room-desc').value='';
    // Tipi ic'ye geri döndür
    const icRadio=document.querySelector('input[name="room-type"][value="ic"]');
    if(icRadio)icRadio.checked=true;
    UI.renderRooms();RP.switchRoom(S.rooms.filter(r=>!r.is_archived)[S.rooms.filter(r=>!r.is_archived).length-1].id);
  },

  // Copy room + all its messages to a new archive room
  async copyRoom(roomId){
    const room=S.rooms.find(r=>r.id==roomId);if(!room)return;
    const archiveName=room.name+'-arşiv-'+new Date().toLocaleDateString('tr-TR').replace(/\./g,'-');
    if(!confirm(`"${room.name}" odasını "${archiveName}" adıyla kopyala?`))return;
    toast('Kopyalanıyor…','');
    try{
      // 1. Create new room
      const newRoomRows=await DB.post('rp_rooms',{
        slug:archiveName.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,''),
        name:archiveName,
        description:`${room.name} odasının arşiv kopyası — ${new Date().toLocaleDateString('tr-TR')}`,
        sort_order:S.rooms.length,is_live:false,is_archived:true
      });
      const newRoom=newRoomRows[0];if(!newRoom){toast('Oda oluşturulamadı','error');return;}
      // 2. Fetch all messages from source room
      const msgs=await DB.get(`rp_messages?room_id=eq.${roomId}&is_deleted=eq.false&order=created_at.asc&limit=2000`);
      // 3. Copy messages in batches
      let copied=0;
      for(const msg of msgs){
        await DB.post('rp_messages',{
          room_id:newRoom.id,char_id:msg.char_id,char_name:msg.char_name,
          char_alias:msg.char_alias||'',char_avatar:msg.char_avatar||'',
          org_id:msg.org_id||null,org_name:msg.org_name||null,org_color:msg.org_color||null,
          content:msg.content,attachment_url:msg.attachment_url||null,
          reactions:msg.reactions||{},is_edited:msg.is_edited||false,
          reply_to_id:null,reply_to_sender:null,reply_to_content:null,
          sent_by_user:msg.sent_by_user||null,
        }).catch(()=>{});
        copied++;
      }
      S.rooms.push({...newRoom});
      UI.renderRooms();
      toast(`✓ ${copied} mesaj kopyalandı → "${archiveName}"`, 'success');
    }catch(e){toast('Kopyalama hatası: '+e.message,'error');}
  },

  async toggleArchive(roomId,archive){
    const room=S.rooms.find(r=>r.id==roomId);if(!room)return;
    if(!S._off)try{await DB.patch('rp_rooms',`id=eq.${roomId}`,{is_archived:archive});}catch(e){toast('Güncelleme hatası','error');return;}
    room.is_archived=archive;
    UI.renderRooms();
    toast(archive?'Arşive alındı':'Arşivden çıkarıldı','success');
    if(archive&&S.roomId==roomId){
      const first=S.rooms.find(r=>!r.is_archived);
      if(first)RP.switchRoom(first.id);
    }
  },

  async renameRoom(roomId,oldName){
    const newName=prompt('Yeni oda adı:',oldName);
    if(!newName||newName===oldName)return;
    const slug=newName.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
    if(!S._off)try{await DB.patch('rp_rooms',`id=eq.${roomId}`,{name:newName,slug});}catch(e){toast('Güncelleme hatası','error');return;}
    const room=S.rooms.find(r=>r.id==roomId);if(room){room.name=newName;room.slug=slug;}
    UI.renderRooms();
    if(S.roomId==roomId)document.getElementById('room-title').textContent=newName;
    toast('Oda adı güncellendi','success');
  },

  async deleteRoom(roomId){
    const room=S.rooms.find(r=>r.id==roomId);if(!room)return;
    if(!confirm(`"${room.name}" odasını kalıcı olarak sil? Tüm mesajlar gider!`))return;
    if(!S._off)try{await DB.delete('rp_rooms',`id=eq.${roomId}`);}catch(e){}
    S.rooms=S.rooms.filter(r=>r.id!=roomId);
    delete S.msgs[roomId];
    UI.renderRooms();
    if(S.roomId==roomId){const first=S.rooms.find(r=>!r.is_archived);if(first)RP.switchRoom(first.id);}
    toast('Oda silindi','success');
  },

  // Odayı ↑ veya ↓ taşı
  async moveRoom(roomId, dir){
    const active = S.rooms.filter(r=>!r.is_archived);
    const idx = active.findIndex(r=>r.id==roomId);
    if(idx<0) return;
    const swapIdx = dir==='up' ? idx-1 : idx+1;
    if(swapIdx<0||swapIdx>=active.length) return;
    // Swap sort_order values
    const a=active[idx], b=active[swapIdx];
    const ao=a.sort_order??idx, bo=b.sort_order??swapIdx;
    a.sort_order=bo; b.sort_order=ao;
    // Reorder S.rooms array in-place
    const archStart = S.rooms.findIndex(r=>r.is_archived);
    const archived = archStart>=0 ? S.rooms.slice(archStart) : [];
    S.rooms = [...active.sort((x,y)=>(x.sort_order??0)-(y.sort_order??0)), ...archived];
    UI.renderRooms();
    // Persist
    if(!S._off){
      try{
        await Promise.all([
          DB.patch('rp_rooms',`id=eq.${a.id}`,{sort_order:a.sort_order}),
          DB.patch('rp_rooms',`id=eq.${b.id}`,{sort_order:b.sort_order}),
        ]);
      }catch(e){ toast('Sıralama kaydedilemedi','error'); }
    }
  },

  // Drag-drop: fromId'yi toId'nin önüne koy
  async reorderRoom(fromId, toId){
    const active = S.rooms.filter(r=>!r.is_archived);
    const fi = active.findIndex(r=>r.id==fromId);
    const ti = active.findIndex(r=>r.id==toId);
    if(fi<0||ti<0||fi===ti) return;
    const [moved] = active.splice(fi,1);
    active.splice(ti,0,moved);
    active.forEach((r,i)=>r.sort_order=i);
    const archStart = S.rooms.findIndex(r=>r.is_archived);
    const archived = archStart>=0 ? S.rooms.slice(archStart) : [];
    S.rooms=[...active,...archived];
    UI.renderRooms();
    if(!S._off){
      try{
        await Promise.all(active.map(r=>DB.patch('rp_rooms',`id=eq.${r.id}`,{sort_order:r.sort_order})));
      }catch(e){ toast('Sıralama kaydedilemedi','error'); }
    }
  },

  /* chars */
  toggleChar(c){
    const idx=S.activeChars.findIndex(x=>x.id===c.id);
    if(idx===-1){S.activeChars.push(c);if(!S.activeChar){S.activeChar=c;localStorage.setItem('rp_active_char',c.id);UI.updChar(c);}}
    else{S.activeChars.splice(idx,1);if(S.activeChar?.id===c.id){S.activeChar=S.activeChars[0]||null;if(S.activeChar){localStorage.setItem('rp_active_char',S.activeChar.id);UI.updChar(S.activeChar);}}}
    UI.renderTags();
  },
  removeChar(id){
    S.activeChars=S.activeChars.filter(c=>c.id!==id);
    if(S.activeChar?.id===id){S.activeChar=S.activeChars[0]||null;if(S.activeChar){localStorage.setItem('rp_active_char',S.activeChar.id);UI.updChar(S.activeChar);}}
    UI.renderTags();
  },
  setPrimary(id){
    const c=S.activeChars.find(x=>x.id===id);if(!c)return;
    S.activeChar=c;localStorage.setItem('rp_active_char',c.id);UI.updChar(c);UI.renderTags();
  },
  openPicker(){
    const g=document.getElementById('cpg');g.innerHTML='';
    S.chars.filter(c=>c.status!=='Deceased').forEach(c=>{
      const inS=S.activeChars.some(x=>x.id===c.id);
      const isP=S.activeChar?.id===c.id;
      const ini=(c.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      const el=document.createElement('div');el.className='cpi-item'+(inS?' active':'');
      el.innerHTML=`<div class="cpa">${c.image?`<img src="${c.image}" onerror="this.parentNode.innerHTML='${ini}'" loading="lazy">`:ini}</div><div class="cpin"><div class="cpnm">${c.name}${isP?' <span style="font-size:9px;color:var(--ac);font-family:var(--mono)">[P]</span>':''}</div><div class="cpal">${c.alias||'—'}</div></div><div style="font-size:15px;color:${inS?'var(--gn)':'var(--t3)'};flex-shrink:0;margin-left:auto">${inS?'<i class="fas fa-check-circle"></i>':'<i class="far fa-circle"></i>'}</div>`;
      el.onclick=()=>{
        RP.toggleChar(c);
        const n=S.activeChars.some(x=>x.id===c.id);
        el.classList.toggle('active',n);
        el.querySelector('div[style*="font-size:15px"]').style.color=n?'var(--gn)':'var(--t3)';
        el.querySelector('div[style*="font-size:15px"]').innerHTML=n?'<i class="fas fa-check-circle"></i>':'<i class="far fa-circle"></i>';
        el.querySelector('.cpnm').innerHTML=`${c.name}${S.activeChar?.id===c.id?' <span style="font-size:9px;color:var(--ac);font-family:var(--mono)">[P]</span>':''}`;
      };
      g.appendChild(el);
    });
    /* clear btn */
    const footer=document.getElementById('cpf');
    if(!footer.querySelector('#cpf-clear')){
      const cb=document.createElement('button');cb.id='cpf-clear';cb.className='btn btn-g';cb.style.marginRight='auto';
      cb.innerHTML='<i class="fas fa-broom"></i> Sahneyi Temizle';
      cb.onclick=()=>{S.activeChars=[];S.activeChar=null;UI.renderTags();CM('m-char-picker');};
      footer.insertBefore(cb,footer.firstChild);
    }
    OM('m-char-picker');
  },
  /* typing */
  sendTyping(){
    if(S._off||!S.user)return;
    const pc=S.activeChar||S.activeChars?.[0]||null;
    clearTimeout(S._tt);
    DB.upsert('rp_presence','char_id',{
      char_id:pc?.id||('user_'+S.user.id),char_name:pc?.name||S.user.name,
      char_alias:pc?.alias||'',
      org_id:pc?(pc.organizations||[])[0]||pc.organization||null:null,
      last_seen:new Date().toISOString(),is_typing:true,
      room_id:S.roomId,
      reader_user_id:S.user?.id||null,
    }).catch(()=>{});
    S._tt=setTimeout(()=>RP.clearTyping(),4000);
  },
  clearTyping(){
    clearTimeout(S._tt);
    if(S._off||!S.user)return;
    const pc=S.activeChar||S.activeChars?.[0]||null;
    DB.upsert('rp_presence','char_id',{
      char_id:pc?.id||('user_'+S.user.id),char_name:pc?.name||S.user.name,
      char_alias:pc?.alias||'',
      org_id:pc?(pc.organizations||[])[0]||pc.organization||null:null,
      last_seen:new Date().toISOString(),is_typing:false,
      room_id:S.roomId,
      reader_user_id:S.user?.id||null,
    }).catch(()=>{});
  },
  _hb(){
    if(S._off||!S.user)return;
    const pc=S.activeChar||S.activeChars?.[0]||null;
    DB.upsert('rp_presence','char_id',{
      char_id:pc?.id||('user_'+S.user.id),char_name:pc?.name||S.user.name,
      char_alias:pc?.alias||'',
      org_id:pc?(pc.organizations||[])[0]||pc.organization||null:null,
      last_seen:new Date().toISOString(),is_typing:false,
      room_id:S.roomId,
      reader_user_id:S.user?.id||null,
    }).catch(()=>{});
  },
  /* misc */
  /* Wrap selected text (or insert placeholder) with prefix+suffix */
  wrapFmt(pre, suf) {
    const inp = document.getElementById('msg-input');
    if (!inp) return;
    const start = inp.selectionStart, end = inp.selectionEnd;
    const sel = inp.value.slice(start, end) || 'metin';
    const before = inp.value.slice(0, start);
    const after  = inp.value.slice(end);
    inp.value = before + pre + sel + suf + after;
    // Reselect the inner content
    const ns = before.length + pre.length;
    const ne = ns + sel.length;
    inp.setSelectionRange(ns, ne);
    inp.focus();
    // Trigger auto-resize
    inp.dispatchEvent(new Event('input'));
  },
  toggleEmoji(e){
    e.stopPropagation();document.getElementById('emoji-popup')?.remove();
    const w=document.createElement('div');w.id='emoji-popup';w.className='emoji-wrap';
    EMOJIS.forEach(em=>{const b=document.createElement('button');b.className='em-btn';b.textContent=em;b.onclick=()=>{const i=document.getElementById('msg-input');i.value+=em;i.focus();w.remove();};w.appendChild(b);});
    const ia=document.getElementById('input-area');ia.style.position='relative';ia.appendChild(w);
    document.addEventListener('click',()=>w.remove(),{once:true});
  },
  promptAttach(){
    // Show inline image URL input below toolbar
    let bar=document.getElementById('attach-inline-bar');
    if(bar){bar.remove();return;}
    bar=document.createElement('div');
    bar.id='attach-inline-bar';
    bar.style.cssText='display:flex;align-items:center;gap:8px;padding:0 12px 8px';
    bar.innerHTML=`
      <i class="fas fa-image" style="color:var(--t2);font-size:13px;flex-shrink:0"></i>
      <input id="attach-inline-input" type="text" placeholder="Resim URL'si yapıştır…"
        style="flex:1;background:var(--bg3);border:1px solid var(--ln2);border-radius:var(--r);color:var(--t0);font-family:var(--sans);font-size:12px;padding:5px 8px;outline:none"
        onkeydown="if(event.key==='Enter'){RP._confirmAttachInline();}if(event.key==='Escape'){document.getElementById('attach-inline-bar')?.remove();}"
      >
      <button onclick="RP._confirmAttachInline()" style="padding:5px 10px;background:var(--ac);color:#fff;border:none;border-radius:var(--r);font-family:var(--mono);font-size:10px;cursor:pointer">Ekle</button>
      <button onclick="document.getElementById('attach-inline-bar')?.remove()" style="padding:5px 8px;background:var(--bg4);color:var(--t2);border:none;border-radius:var(--r);cursor:pointer;font-size:12px">✕</button>`;
    const toolbar=document.getElementById('input-toolbar');
    toolbar.parentNode.insertBefore(bar,toolbar);
    setTimeout(()=>document.getElementById('attach-inline-input')?.focus(),50);
    // If user already has a URL in clipboard, paste it
    navigator.clipboard?.readText?.().then(t=>{if(t&&(t.startsWith('http')||t.startsWith('/')))document.getElementById('attach-inline-input').value=t;}).catch(()=>{});
  },
  _confirmAttachInline(){
    const url=(document.getElementById('attach-inline-input')?.value||'').trim();
    if(!url){toast('URL gir','warn');return;}
    S.attach=url;
    document.getElementById('attach-inline-bar')?.remove();
    // Show preview chip in quick entity bar
    const bar=document.getElementById('quick-entity-bar');
    document.getElementById('attach-preview-tag')?.remove();
    const prev=document.createElement('div');
    prev.id='attach-preview-tag';
    prev.style.cssText='display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:16px;border:1px solid rgba(77,184,128,.4);background:var(--gn-d);color:var(--gn);font-family:var(--mono);font-size:10px;flex-shrink:0';
    prev.innerHTML=`<i class="fas fa-image" style="font-size:9px"></i><span>resim eklendi</span><span style="cursor:pointer;opacity:.7" onclick="S.attach=null;this.parentNode.remove()">✕</span>`;
    if(bar) bar.appendChild(prev);
    toast('Resim eklendi','success');
  },
  confirmAttach(){this._confirmAttachInline();},
  _org(id){return id?S.oi.get(id)||null:null;},

  /* ── NSFW toggle ─────────────────────────────────────── */
  toggleNSFW(){
    _nsfwMode=!_nsfwMode;
    const btn=document.getElementById('nsfw-toggle');
    const box=document.getElementById('input-box');
    if(_nsfwMode){
      btn?.classList.add('nsfw-on');
      box?.classList.add('nsfw-active');
      toast('🔞 NSFW modu açık — bu mesaj AI\'a gönderilmez','warn');
    }else{
      btn?.classList.remove('nsfw-on');
      box?.classList.remove('nsfw-active');
    }
  },
};

/* ═══ REALTIME (Firebase onSnapshot) ════════════════════ */
const RT={
  lastId:null,
  _unsubMsg:null,     // onSnapshot unsubscribe for messages
  _unsubPresence:null,// onSnapshot unsubscribe for presence
  _unsubDM:null,      // onSnapshot unsubscribe for DM messages
  _unsubRooms:null,   // onSnapshot unsubscribe for room list
  _unsubOAI:null,     // onSnapshot unsubscribe for OAI state
  _presenceTimer:null,
  _seenIds:new Set(), // avoid duplicate handling on initial snapshot

  // ── Rooms realtime listener ─────────────────────────────
  async watchRooms(){
    if(this._unsubRooms){try{this._unsubRooms();}catch(e){} this._unsubRooms=null;}
    try{
      const {db,fs}=await _fbReady();
      const {collection,query,orderBy,onSnapshot}=fs;
      const ref=collection(db,'rp_rooms');
      const q=query(ref,orderBy('sort_order','asc'));
      let first=true;
      this._unsubRooms=onSnapshot(q,snap=>{
        if(first){first=false;return;} // initial load zaten RP.init()'de yapıldı
        let changed=false;
        snap.docChanges().forEach(change=>{
          const data={...change.doc.data(),id:change.doc.id};
          const sid=String(data.id);
          if(change.type==='added'){
            if(!S.rooms.find(r=>String(r.id)===sid)){S.rooms.push(data);changed=true;}
          }
          if(change.type==='modified'){
            const idx=S.rooms.findIndex(r=>String(r.id)===sid);
            if(idx>=0){S.rooms[idx]={...S.rooms[idx],...data};changed=true;}
          }
          if(change.type==='removed'){
            const before=S.rooms.length;
            S.rooms=S.rooms.filter(r=>String(r.id)!==sid);
            if(S.rooms.length!==before)changed=true;
          }
        });
        if(changed) UI.renderRooms();
      },err=>console.warn('[RT] rooms onSnapshot error:',err));
    }catch(e){console.warn('[RT] watchRooms error:',e);}
  },

  // ── OAI state realtime listener (kullanıcılar arası senkron) ──
  async watchOAIState(){
    if(this._unsubOAI){try{this._unsubOAI();}catch(e){} this._unsubOAI=null;}
    try{
      const {db,fs}=await _fbReady();
      const {doc,onSnapshot}=fs;
      const ref=doc(db,'rp_config','oai_state');
      this._unsubOAI=onSnapshot(ref,snap=>{
        if(!snap.exists())return;
        const data=snap.data();
        const wasRunning=OAI.running;
        if(data.running && !OAI.running){
          OAI.running=true;
          OAI._sessionOnlyMode=!!data.sessionOnly;
          const p=document.getElementById('ai-pill');
          if(p){p.classList.add('on');document.getElementById('ai-pill-txt').textContent='Observer AI: ON';}
          // Admin panel butonları güncelle
          document.getElementById('obs-start')?.style && (document.getElementById('obs-start').style.display='none');
          document.getElementById('obs-session-start')?.style && (document.getElementById('obs-session-start').style.display='none');
          document.getElementById('obs-stop')?.style && (document.getElementById('obs-stop').style.display='');
        } else if(!data.running && OAI.running){
          OAI.running=false;
          const p=document.getElementById('ai-pill');
          if(p){p.classList.remove('on','thinking');document.getElementById('ai-pill-txt').textContent='Observer AI: OFF';}
          document.getElementById('obs-start')?.style && (document.getElementById('obs-start').style.display='');
          document.getElementById('obs-session-start')?.style && (document.getElementById('obs-session-start').style.display='');
          document.getElementById('obs-stop')?.style && (document.getElementById('obs-stop').style.display='none');
        }
      },err=>console.warn('[RT] OAI state onSnapshot error:',err));
    }catch(e){console.warn('[RT] watchOAIState error:',e);}
  },

  async connect(roomId){
    this.disconnect();
    this._seenIds=new Set();
    if(S._off)return;
    try{
      const {db,fs}=await _fbReady();
      const {collection,query,where,orderBy,limit,onSnapshot,doc}=fs;

      // ── Messages listener ──────────────────────────────
      // Listen for new messages in this room, ordered by created_at
      // We load last 50 on connect, then track new ones
      const msgsRef=collection(db,'rp_rooms',String(roomId),'messages');
      const msgsQ=query(msgsRef,orderBy('created_at','asc'),limit(50));
      let _first=true;
      this._unsubMsg=onSnapshot(msgsQ,snap=>{
        snap.docChanges().forEach(change=>{
          const data={...change.doc.data(),id:change.doc.id,created_at:_fbTs(change.doc.data().created_at)};
          if(change.type==='added'){
            if(_first){
              // Suppress notification for initial load — already rendered by switchRoom
              if(S.msgs[S.roomId]?.find(m=>m.id===data.id))return;
              this._seenIds.add(data.id);
              this._handleMsg(data,/*notify=*/false);
            }else{
              if(this._seenIds.has(data.id))return;
              this._seenIds.add(data.id);
              this._handleMsg(data,/*notify=*/true);
            }
          }
          if(change.type==='removed'){
            // Hard delete — Firestore'dan silindi, diğer kullanıcılarda da kaldır
            Object.keys(S.msgs).forEach(rid=>{S.msgs[rid]=S.msgs[rid].filter(m=>m.id!=data.id);});
            document.querySelector(`[data-msg-id="${data.id}"]`)?.remove();
          }
          if(change.type==='modified'){
            if(data.is_deleted){
              // Soft-delete fallback (eski mesajlar için)
              Object.keys(S.msgs).forEach(rid=>{S.msgs[rid]=S.msgs[rid].filter(m=>m.id!=data.id);});
              document.querySelector(`[data-msg-id="${data.id}"]`)?.remove();
            }else{
              // Edit: update in cache & DOM
              if(S.msgs[roomId]){
                const idx=S.msgs[roomId].findIndex(m=>m.id===data.id);
                if(idx>=0)S.msgs[roomId][idx]={...S.msgs[roomId][idx],...data};
              }
              const el=document.querySelector(`[data-msg-id="${data.id}"] .msg-txt`);
              if(el){el.innerHTML=UI._rc(data.content||'');}
              const editedBadge=document.querySelector(`[data-msg-id="${data.id}"] .msg-edited`);
              if(!editedBadge&&data.is_edited){
                const badge=document.createElement('span');badge.className='msg-edited';badge.textContent='(düzenlendi)';
                document.querySelector(`[data-msg-id="${data.id}"] .msg-time`)?.before(badge);
              }
              // Reactions update
              if(data.reactions){
                const rEl=document.querySelector(`[data-msg-id="${data.id}"] .msg-reactions`);
                if(rEl){rEl.innerHTML='';Object.entries(data.reactions).forEach(([emoji,users])=>{if(!users?.length)return;const p=document.createElement('button');p.className='react-chip';p.dataset.count=users.length;p.innerHTML=`${emoji}<span class="rc">${users.length}</span>`;p.onclick=()=>RP.react(data.id,emoji);rEl.appendChild(p);});}
              }
            }
          }
        });
        _first=false;
      },err=>console.warn('[RT] messages onSnapshot error:',err));

      // ── Presence listener ──────────────────────────────
      const presRef=collection(db,'rp_presence');
      const cut60=new Date(Date.now()-60000).toISOString();
      const presQ=query(presRef,where('last_seen','>=',cut60));
      this._unsubPresence=onSnapshot(presQ,snap=>{
        snap.docChanges().forEach(change=>{
          const rec={...change.doc.data(),char_id:change.doc.id};
          if(change.type==='added'||change.type==='modified') this._handlePresence(rec);
          if(change.type==='removed') {delete S.presence[rec.char_id];delete S.typing[rec.char_id];}
        });
        UI.renderMembers();UI.renderTyping();
      },()=>{});

    }catch(e){console.warn('[RT] connect error:',e);}

    // Presence polling as fallback every 5s (catches stale docs)
    this._presenceTimer=setInterval(()=>this._presence(),5000);
  },

  disconnect(){
    if(this._unsubMsg){try{this._unsubMsg();}catch(e){} this._unsubMsg=null;}
    if(this._unsubPresence){try{this._unsubPresence();}catch(e){} this._unsubPresence=null;}
    if(this._unsubDM){try{this._unsubDM();}catch(e){} this._unsubDM=null;}
    clearInterval(this._presenceTimer);this._presenceTimer=null;
    // NOT: _unsubRooms ve _unsubOAI kasıtlı disconnect'te kapatılmıyor
    // çünkü oda listesi ve OAI durumu kullanıcı oturumdayken hep dinlenmeli
  },

  // Global listener: tracks new messages in ALL rooms for unread badges
  // Only fires for messages sent by others while we are in a different room
  async connectGlobal(){
    if(this._unsubGlobal){try{this._unsubGlobal();}catch(e){} this._unsubGlobal=null;}
    try{
      const {db,fs}=await _fbReady();
      const {collectionGroup,query,where,orderBy,limit,onSnapshot}=fs;
      // Listen to the last 20 messages across all rp_rooms sub-collections
      const msgsRef=collectionGroup(db,'messages');
      const since=new Date(Date.now()-5000).toISOString(); // only messages from now on
      const q=query(msgsRef,where('created_at','>',since),orderBy('created_at','asc'),limit(50));
      let first=true;
      this._unsubGlobal=onSnapshot(q,snap=>{
        if(first){first=false;return;} // skip initial snapshot
        snap.docChanges().forEach(change=>{
          if(change.type!=='added')return;
          const data={...change.doc.data(),id:change.doc.id,created_at:_fbTs(change.doc.data().created_at)};
          const roomId=data.room_id;
          if(!roomId||roomId==S.roomId)return; // skip active room (handled by connect())
          if(data.sent_by_user===S.user?.id)return; // skip own messages
          if(data.is_deleted)return;
          // Increment unread count for this room
          if(!S.unread)S.unread={};
          S.unread[roomId]=(S.unread[roomId]||0)+1;
          UI.renderRooms();
        });
      },err=>console.warn('[RT] global onSnapshot error:',err));
    }catch(e){console.warn('[RT] connectGlobal error:',e);}
  },

  // Called from PM.open() to watch DM messages in realtime
  async watchDM(convId){
    if(this._unsubDM){try{this._unsubDM();}catch(e){} this._unsubDM=null;}
    try{
      const {db,fs}=await _fbReady();
      const {collection,query,orderBy,limit,onSnapshot}=fs;
      const ref=collection(db,'dm_conversations',String(convId),'messages');
      const q=query(ref,orderBy('created_at','asc'),limit(100));
      let first=true;
      this._unsubDM=onSnapshot(q,snap=>{
        if(first){first=false;return;} // initial load already done by PM._loadMessages
        snap.docChanges().forEach(change=>{
          if(change.type==='added'){
            const data={...change.doc.data(),id:change.doc.id,created_at:_fbTs(change.doc.data().created_at)};
            this._handlePM(data);
          }
        });
      },()=>{});
    }catch(e){}
  },

  async _presence(){
    if(S._off)return;
    try{
      const cut=new Date(Date.now()-60000).toISOString();
      const rows=await DB.get(`rp_presence?last_seen=gte.${cut}&select=char_id,char_name,char_alias,org_id,last_seen,is_typing,room_id,reader_user_id`);
      S.presence={};
      rows.forEach(r=>{ S.presence[r.char_id]=r; });
      // Typing: chars in current room that aren't mine
      S.typing={};
      rows.filter(r=>r.is_typing&&r.room_id==S.roomId&&r.char_id!==S.activeChar?.id)
          .forEach(r=>{
            S.typing[r.char_id]={
              charName: r.char_name,
              userId:   r.reader_user_id||'',
              userName: USERS?.find(u=>u.id===r.reader_user_id)?.name||r.char_name,
              userColor:USERS?.find(u=>u.id===r.reader_user_id)?.color||'var(--t2)',
            };
          });
      UI.renderMembers();
      UI.renderTyping();
    }catch(e){}
  },

  _handlePresence(rec){
    // Live presence update via onSnapshot — immediately refresh typing/members
    if(rec.is_typing!==undefined){
      S.presence[rec.char_id]=rec;
      if(rec.is_typing&&rec.room_id==S.roomId&&rec.char_id!==S.activeChar?.id){
        S.typing[rec.char_id]={
          charName: rec.char_name,
          userId:   rec.reader_user_id||'',
          userName: USERS?.find(u=>u.id===rec.reader_user_id)?.name||rec.char_name,
          userColor:USERS?.find(u=>u.id===rec.reader_user_id)?.color||'var(--t2)',
        };
      }else{
        delete S.typing[rec.char_id];
      }
      UI.renderTyping();
      UI.renderMembers();
    }
  },

  _handleMsg(rec,notify=true){
    if(!S.msgs[S.roomId])S.msgs[S.roomId]=[];
    if(S.msgs[S.roomId].find(m=>m.id===rec.id))return;
    if(rec.room_id!=S.roomId)return;
    S.msgs[S.roomId].push(rec);
    this.lastId=rec.id;
    UI.append(rec);
    document.getElementById('empty-state')?.remove();
    if(rec.char_id){ delete S.typing[rec.char_id]; UI.renderTyping(); }
    OAI.Batcher.ingest([rec]);
    if (window.Session) Session.onNewMessage(rec);
    // MA oto-devam: herhangi bir oyuncu mesajı gelince tetikle (notify bağımsız — kendi mesajı da sayılır)
    if (window.MasterAgent && !MasterAgent._sentIds?.has(rec.id)) MasterAgent._onIncomingMsg(rec);
    // Notify if from someone else
    if(notify&&rec.sent_by_user&&rec.sent_by_user!==S.user?.id){
      const room=S.rooms.find(r=>r.id==S.roomId);
      const sender=USERS?.find(u=>u.id===rec.sent_by_user);
      // @mention detection for extra notification
      const myName=S.user?.name||'';
      const isMention=myName&&rec.content&&(rec.content.includes('@'+myName)||rec.content.includes('@everyone'));
      Notif.show({
        title:`${sender?.name||rec.char_name} — #${room?.name||'chat'}`,
        body: rec.content?.slice(0,80)||'',
        type: isMention?'mention':'message',
      });
    }
    // Unread badge: only when this room is currently NOT active (shouldn't happen for RT, but safety)
    if(rec.sent_by_user&&rec.sent_by_user!==S.user?.id){
      // Always update the badge since rec.room_id == S.roomId here, room IS active
      // Badge is cleared on switchRoom
    }
  },

  _handlePM(rec){
    // Only handle PM if it's for current user
    if(!S.user)return;
    // Check if this conv involves current user
    PM._pollMessages(PM._convId); // refresh PM window if open
    // Notify if not from self
    if(rec.sender_id!==S.user.id){
      const sender=USERS?.find(u=>u.id===rec.sender_id);
      Notif.show({
        title:`💬 ${sender?.name||rec.sender_name} — PM`,
        body: rec.content?.slice(0,80)||'',
        type:'pm',
        onClick:()=>PM.open(rec.sender_id),
      });
      // Badge on PM window button if closed
      const pmWin=document.getElementById('pm-window');
      if(!pmWin||pmWin.style.display==='none'){
        Notif.pmBadge(rec.sender_id);
      }
    }
  },
};

/* ═══ NOTIFICATIONS ════════════════════════════════════════ */
const Notif={
  _permitted:false,
  _sound:null,
  _badges:{}, // { userId: count }

  async init(){
    // Request permission
    if('Notification' in window){
      if(Notification.permission==='granted') this._permitted=true;
      else if(Notification.permission!=='denied'){
        const p=await Notification.requestPermission();
        this._permitted=p==='granted';
      }
    }
    // Init audio context for notification sound
    this._initSound();
  },

  _initSound(){
    // Create a subtle notification beep using Web Audio API
    this._audioCtx=null;
    // Lazy init on first user interaction (browser policy)
    const initAudio=()=>{
      if(this._audioCtx)return;
      try{
        this._audioCtx=new(window.AudioContext||window.webkitAudioContext)();
      }catch(e){}
      document.removeEventListener('click',initAudio);
    };
    document.addEventListener('click',initAudio,{once:true});
  },

  _playSound(type='message'){
    if(!this._audioCtx)return;
    try{
      const ctx=this._audioCtx;
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.connect(gain);gain.connect(ctx.destination);
      if(type==='pm'){
        // Two-tone for PM
        osc.frequency.setValueAtTime(880,ctx.currentTime);
        osc.frequency.setValueAtTime(1100,ctx.currentTime+0.1);
        gain.gain.setValueAtTime(0.15,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3);
        osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.3);
      }else{
        // Single soft ping for messages
        osc.frequency.setValueAtTime(660,ctx.currentTime);
        gain.gain.setValueAtTime(0.1,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.2);
        osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.2);
      }
    }catch(e){}
  },

  show({title,body,type='message',onClick=null}){
    // Play sound for all notifications except when user sent it
    this._playSound(type);

    // Browser/desktop push notification when page is not focused
    if(this._permitted&&'Notification' in window&&document.hidden){
      try{
        const n=new Notification(title,{
          body,
          icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="%230c0c0f"/><text x="16" y="22" text-anchor="middle" font-size="18">🗽</text></svg>',
          silent:true, // We handle sound ourselves
          tag:type, // Replace same-type notifications
        });
        if(onClick) n.onclick=()=>{ window.focus(); onClick(); n.close(); };
        setTimeout(()=>n.close(),5000);
      }catch(e){}
    }

    // In-app toast for PM or mentions when focused
    if(document.hasFocus()&&(type==='pm'||type==='mention')){
      const t=document.createElement('div');
      t.className='notif-toast';
      const iconHtml=type==='mention'?'<span style="font-size:13px;margin-right:6px">📌</span>':'';
      t.innerHTML=`<div style="font-weight:600;color:${type==='pm'?'var(--pu)':'var(--am)'};margin-bottom:2px">${iconHtml}${title}</div><div style="font-size:12px;color:var(--t1)">${body.replace(/</g,'&lt;')}</div>`;
      t.onclick=()=>{ t.remove(); if(onClick)onClick(); };
      document.getElementById('toast-con').appendChild(t);
      setTimeout(()=>t.remove(),5000);
    }
  },

  pmBadge(userId){
    this._badges[userId]=(this._badges[userId]||0)+1;
    // Show badge count on members panel PM button
    const btns=document.querySelectorAll(`.mem-pm-btn`);
    // We can't easily target per-user here so just pulse the members header
    const cnt=document.getElementById('mem-cnt');
    if(cnt){cnt.style.color='var(--pu)';setTimeout(()=>cnt.style.color='',3000);}
  },

  clearBadge(userId){
    delete this._badges[userId];
  },
};

/* ═══ UI ════════════════════════════════════════════════ */
const UI={
  renderRooms(){
    const list=document.getElementById('room-list');list.innerHTML='';
    const active=S.rooms.filter(r=>!r.is_archived).sort((a,b)=>(a.sort_order??99)-(b.sort_order??99));
    const archived=S.rooms.filter(r=>r.is_archived);
    active.forEach(room=>this._renderRoomItem(list,room));
    if(archived.length){
      const archLbl=document.createElement('div');
      archLbl.className='nav-lbl';
      archLbl.style.marginTop='8px';
      archLbl.innerHTML='<i class="fas fa-archive" style="margin-right:4px"></i>Arşiv';
      list.appendChild(archLbl);
      archived.forEach(room=>this._renderRoomItem(list,room,true));
    }
  },
  _renderRoomItem(list,room,isArchived=false){
    const el=document.createElement('div');
    el.className='room-item'+(room.id==S.roomId?' active':'')+(isArchived?' archived-room':'');
    el.dataset.id=room.id;
    el.dataset.roomId=room.id;
    const rtype=room.room_type||( room.is_live?'live': room.is_ooc?'ooc': room.is_announcement?'announcement': room.is_private?'private':'ic');
    const rtIcon=isArchived?'🗄':{live:'●',ic:'🎭',ooc:'💬',private:'🔒',announcement:'📢'}[rtype]||'#';
    const rtColor=rtype==='live'?'color:var(--rd)':'';
    const unreadCnt=S.unread&&S.unread[room.id]?S.unread[room.id]:0;
    const unreadBadge=unreadCnt>0?`<span class="room-unread-badge">${unreadCnt>99?'99+':unreadCnt}</span>`:'';
    el.innerHTML=`<span class="room-type-badge" style="${rtColor}">${rtIcon}</span>
      <span class="room-name" style="${isArchived?'color:var(--t3)':''}">${room.name}</span>
      ${rtype==='live'?'<span class="room-live">LIVE</span>':''}
      ${unreadBadge}
      <span class="room-drag-handle" title="Sürükle & Bırak" draggable="false">⠿</span>`;
    el.onclick=(ev)=>{
      if(ev.target.closest('.room-drag-handle'))return;
      RP.switchRoom(room.id);
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sb-overlay').classList.remove('show');
    };

    // Drag-to-reorder (only active rooms)
    if(!isArchived){
      el.draggable=true;
      el.addEventListener('dragstart',e=>{
        e.dataTransfer.effectAllowed='move';
        e.dataTransfer.setData('text/plain',room.id);
        el.classList.add('dragging');
        UI._dragRoomId=room.id;
      });
      el.addEventListener('dragend',()=>{el.classList.remove('dragging');UI._dragRoomId=null;document.querySelectorAll('.room-item.drag-over').forEach(x=>x.classList.remove('drag-over'));});
      el.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='move';if(UI._dragRoomId&&UI._dragRoomId!==room.id){document.querySelectorAll('.room-item.drag-over').forEach(x=>x.classList.remove('drag-over'));el.classList.add('drag-over');}});
      el.addEventListener('dragleave',()=>el.classList.remove('drag-over'));
      el.addEventListener('drop',e=>{
        e.preventDefault();
        el.classList.remove('drag-over');
        const fromId=e.dataTransfer.getData('text/plain')||UI._dragRoomId;
        if(fromId&&fromId!==room.id) RP.reorderRoom(fromId,room.id);
      });
    }

    // Right-click context menu — yeni UI
    el.addEventListener('contextmenu',e=>{
      e.preventDefault();
      const activeRooms=S.rooms.filter(r=>!r.is_archived);
      const idx=activeRooms.findIndex(r=>r.id==room.id);
      const canUp=!isArchived&&idx>0;
      const canDown=!isArchived&&idx<activeRooms.length-1;

      ContextMenu.showRoom(e.clientX,e.clientY,room,[
        { group:'Sırala', items:[
          {icon:'fa-arrow-up',   label:'Yukarı Taşı',  action:()=>RP.moveRoom(room.id,'up'),   disabled:!canUp},
          {icon:'fa-arrow-down', label:'Aşağı Taşı',   action:()=>RP.moveRoom(room.id,'down'), disabled:!canDown},
        ]},
        { group:'Oda', items:[
          {icon:'fa-copy',    label:'Arşiv Kopyası Al',        action:()=>RP.copyRoom(room.id)},
          {icon:'fa-archive', label:isArchived?'Arşivden Çıkar':'Arşive Al', action:()=>RP.toggleArchive(room.id,!isArchived)},
          {icon:'fa-edit',    label:'Yeniden Adlandır',        action:()=>RP.renameRoom(room.id,room.name)},
        ]},
        { group:'Tehlikeli', items:[
          {icon:'fa-trash',   label:'Odayı Sil',       action:()=>RP.deleteRoom(room.id),       danger:true},
        ]},
      ]);
    });
    list.appendChild(el);
  },
  renderRoom(id){
    const list=document.getElementById('messages-list');
    list.innerHTML='<div class="empty" id="empty-state"><i class="fas fa-comment-slash"></i><p>Sahne boş — başlat</p></div>';
    const msgs=S.msgs[id]||[];
    if(!msgs.length)return;
    document.getElementById('empty-state')?.remove();
    const favs=JSON.parse(localStorage.getItem('rp_favs')||'[]');
    msgs.forEach((m,i)=>{const prev=msgs[i-1];const ns=!prev||prev.char_id!==m.char_id;UI.append(m,false,ns,favs.includes(String(m.id)));});
    setTimeout(()=>UI.scrollBot(),50);
  },
  /* ── Media embed: YouTube & Spotify ──────────────────── */
  _mediaEmbed(content){
    if(!content) return '';
    // YouTube patterns: watch?v=, youtu.be/, shorts/
    const ytMatch=content.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    if(ytMatch){
      const vid=ytMatch[1];
      return `<iframe class="media-embed" width="100%" height="152" src="https://www.youtube.com/embed/${vid}" frameborder="0" allowfullscreen style="border-radius:8px;margin-top:6px;display:block"></iframe>`;
    }
    // Spotify patterns: track/, playlist/, album/
    const spMatch=content.match(/open\.spotify\.com\/(track|playlist|album)\/([A-Za-z0-9]+)/);
    if(spMatch){
      const type=spMatch[1], id=spMatch[2];
      return `<iframe class="media-embed" src="https://open.spotify.com/embed/${type}/${id}" width="100%" height="152" frameborder="0" allowtransparency="true" allow="encrypted-media" style="border-radius:8px;margin-top:6px;display:block"></iframe>`;
    }
    return '';
  },

  _rc(raw){
    if(!raw)return'';
    let t=raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    /* [Araç/Org/Mülk/Ekipman: İsim] → renkli tıklanabilir chip */
    const tagTypes={
      'Araç':'#e8a74a','Org':'#4a8fe2','Mülk':'#9b6fd4',
      'Ekipman':'#4db880','Karakter':'#c084fc'
    };
    t=t.replace(/\[(Araç|Org|Mülk|Ekipman|Karakter):([^\]]+)\]/g,(full,type,name)=>{
      const color=tagTypes[type]||'var(--t2)';
      const n=name.trim().replace(/"/g,'&quot;');
      // For vehicles: show model/name instead of raw plate
      let displayName = n;
      if(type==='Araç'){
        const veh=(S._db?.vehicles||[]).find(v=>v.plate===name.trim()||v.name===name.trim()||v.id===name.trim());
        if(veh) displayName=(veh.name||veh.model||veh.plate||n).replace(/"/g,'&quot;');
      }
      const icon=type==='Araç'?'car':type==='Org'?'building':type==='Mülk'?'home':type==='Ekipman'?'box':'user';
      return `<span class="inline-tag" style="background:${color}18;color:${color};border:1px solid ${color}44;cursor:pointer" `+
        `data-tag-type="${type}" data-tag-name="${n}" `+
        `onclick="UI.inlineTagClick(event,'${type}','${n}')" `+
        `oncontextmenu="event.preventDefault();UI.inlineTagMenu(event,'${type}','${n}')">` +
        `<i class="fas fa-${icon}" style="font-size:9px;margin-right:3px"></i>${displayName}</span>`;
    });

    /* [kısa tag T/OOC vs] → badge */
    t=t.replace(/\[([A-Za-zÇĞİÖŞÜçğışöü0-9!?\s]{1,6})\]/g,(_,tag)=>`<span class="tag-badge">${tag.trim()}</span>`);
    /* [uzun köşeli] → emote */
    t=t.replace(/\[([^\]]{7,300})\]/g,(_,inner)=>`<span class="emote">[${inner}]</span>`);
    /* (( OOC )) — role dışı, mat sarı */
    t=t.replace(/\(\((.+?)\)\)/gs,'<span class="msg-ooc">(($1))</span>');

    /* Zengin biçimlendirme */
    /* ~~üstü çizili~~ */
    t=t.replace(/~~(.+?)~~/g,'<s class="msg-strike">$1</s>');
    /* __altı çizili__ */
    t=t.replace(/__(.+?)__/g,'<u class="msg-underline">$1</u>');
    /* **bold** */
    t=t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
    /* _italic_ (tek alt çizgi) */
    t=t.replace(/_([^_]+)_/g,'<em>$1</em>');
    /* `kod` */
    t=t.replace(/`([^`]+)`/g,'<code class="msg-code">$1</code>');
    /* Renkli yazı: [renk|metin] örn. [#e05555|Dikkat!] ya da [red|metin] */
    t=t.replace(/\[([#a-zA-Z][a-zA-Z0-9#]{1,20})\|([^\]]+)\]/g,'<span style="color:$1">$2</span>');
    /* *emote* (tek yıldız) → mat mor italik, yıldızlar korunur */
    t=t.replace(/\*([^*\n]+)\*/g,'<em class="msg-emote">*$1*</em>');
    /* **İsim:** bold diyalog prefix — tıklanabilir */
    t=t.replace(/^<strong>([A-Za-zÇĞİÖŞÜçğışöü][A-Za-zÇĞİÖŞÜçğışöü\s\.]{1,30}):<\/strong>\s?/gm,(m,name)=>{
      const key=name.trim().toLowerCase();
      const char=S.cni?.get(key)||null;
      if(!char)return `<strong>${name}:</strong> `;
      return `<strong><span class="speaker" data-char-id="${char.id||''}" `+
        `onclick="if(typeof CharCard!=='undefined')CharCard.show('${char.id||''}',event.clientX,event.clientY)" `+
        `oncontextmenu="event.preventDefault();UI.charContextMenu(event,'${char.id||''}','${name.trim().replace(/'/g,"\\'")}')">`+
        `${name}:</span></strong> `;
    });
    /* Karakter: diyalog — tıklanabilir isim */
    t=t.replace(/^([A-Za-zÇĞİÖŞÜçğışöü][A-Za-zÇĞİÖŞÜçğışöü\s\.]{1,30}):\s/gm,(m,name)=>{
      const key=name.trim().toLowerCase();
      if(!S.cni.has(key))return m;
      const char=S.cni.get(key);
      return `<span class="speaker" data-char-id="${char?.id||''}" `+
        `onclick="if(typeof CharCard!=='undefined')CharCard.show('${char?.id||''}',event.clientX,event.clientY)" `+
        `oncontextmenu="event.preventDefault();UI.charContextMenu(event,'${char?.id||''}','${name.trim().replace(/'/g,"\\'")}')">`+
        `${name}:</span> `;
    });
    /* @mention ve @everyone */
    t=t.replace(/@(MA|MasterAgent)\b/gi,'<span class="mention-tag" style="background:rgba(155,111,212,.2);color:var(--pu)">@MA</span>');
    t=t.replace(/@(everyone|here)/g,'<span class="mention-tag mention-everyone">@$1</span>');
    t=t.replace(/@([A-Za-zÇĞİÖŞÜçğışöü][A-Za-zÇĞİÖŞÜçğışöü\s]{0,20}?)(?=\s|<|$)/g,(full,name)=>{
      const lname=name.trim().toLowerCase();
      // Oyuncu listesinde var mı?
      const player=S.players?.find(p=>p.name?.toLowerCase()===lname||p.username?.toLowerCase()===lname||p.display?.toLowerCase()===lname);
      if(!player&&lname!=='everyone'&&lname!=='here')return full;
      return `<span class="mention-tag" onclick="void 0">@${name.trim()}</span>`;
    });
    return t.replace(/\n/g,'<br>');
  },

  _resolveTag(type, name){
    let entity=null, eType='char';
    if(type==='Karakter'){entity=(S.chars||[]).find(c=>c.name===name||c.alias===name);eType='char';}
    else if(type==='Org'){entity=(S.orgs||[]).find(o=>o.name===name);eType='org';}
    else if(type==='Araç'){entity=(S._db?.vehicles||[]).find(v=>v.name===name||v.plate===name||v.model===name);eType='vehicle';}
    else if(type==='Mülk'){entity=(S._db?.properties||[]).find(p=>p.name===name);eType='prop';}
    else if(type==='Ekipman'){entity=(S._db?.equipments||[]).find(q=>q.name===name);eType='equip';}
    return {entity, eType};
  },

  inlineTagClick(e, type, name){
    e.stopPropagation();
    const {entity, eType} = this._resolveTag(type, name);
    if(entity) CharCard.show(entity.id, e.clientX, e.clientY, eType);
    else {
      // Entity not found — show a minimal popup
      const pop = document.createElement('div');
      pop.className = 'char-card-pop';
      pop.style.cssText = `position:fixed;left:${Math.min(e.clientX+8,innerWidth-280)}px;top:${Math.min(e.clientY+8,innerHeight-120)}px;width:260px;z-index:9990;background:var(--bg3);border:1px solid var(--ln2);border-radius:12px;padding:16px;box-shadow:0 12px 40px #0009`;
      pop.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><i class="fas fa-question-circle" style="color:var(--rd);font-size:16px"></i><span style="font-weight:600;font-size:13px;color:var(--t1)">${name}</span><span style="font-size:11px;color:var(--t3);margin-left:auto">${type}</span></div><p style="font-size:12px;color:var(--t3);margin:0">Bu varlık için yerel veri bulunamadı.</p>`;
      document.body.appendChild(pop);
      setTimeout(()=>document.addEventListener('click',()=>pop.remove(),{once:true}),50);
    }
  },

  inlineTagMenu(e, type, name){
    const {entity, eType} = this._resolveTag(type, name);
    const items = [];
    if(entity){
      items.push({icon:'fa-id-card', label:'Profil Kartı', action:()=>CharCard.show(entity.id,e.clientX,e.clientY,eType)});
      items.push({icon:'fa-external-link-alt', label:"DB'de Aç", action:()=>CharCard.openInDB(entity.id,eType)});
      if(eType==='char') items.push({icon:'fa-plus',label:'Sahneye Ekle',action:()=>RP.toggleChar(entity)});
    } else {
      items.push({icon:'fa-question-circle', label:'Veri bulunamadı', action:()=>{}});
    }
    ContextMenu.show(e.clientX, e.clientY, items);
  },
  append(msg,scroll=true,forceNS=null,isFav=false){
    const list=document.getElementById('messages-list');
    document.getElementById('empty-state')?.remove();
    const prev=list.lastElementChild;
    // Group by sent_by_user (oyuncu), not char_id
    const prevUser=prev?.dataset?.userId||'';
    const thisUser=msg.sent_by_user||msg.char_id||'';
    const ns=forceNS!==null?forceNS:(prevUser!==thisUser);
    const time=new Date(msg.created_at).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    // RP time stamp (if present) — shown alongside real time
    const rpTimeHtml=msg.rp_time?`<span class="msg-rp-ts" title="RP Zamanı">${msg.rp_time.slice(11,16)} <span class="msg-rp-tz">${msg.rp_time.slice(-3)}</span></span>`:'';
    const replyHtml=msg.reply_to_id?`<div class="msg-reply-ref" onclick="UI.scrollToMsg('${msg.reply_to_id}')"><i class="fas fa-reply" style="font-size:10px;color:var(--ac)"></i><span class="rr-sndr">${(msg.reply_to_sender||'?').replace(/</g,'&lt;')}:</span><span class="rr-txt">${(msg.reply_to_content||'').replace(/</g,'&lt;')}</span></div>`:'';
    const rData=JSON.stringify({id:msg.id,char_name:msg.char_name,content:msg.content}).replace(/"/g,'&quot;');
    const fData=JSON.stringify({id:msg.id,content:msg.content,attachment_url:msg.attachment_url||null}).replace(/"/g,'&quot;');

    // ── Oyuncu bilgisi ───────────────────────────────────────
    const player=USERS?.find(u=>u.id===msg.sent_by_user)||null;
    const playerProfile=S.playerProfiles?.[msg.sent_by_user]||null;
    const playerColor=player?.color||'var(--ac)';
    const playerName=player?.name||msg.sent_by_user||'?';
    const playerIni=playerName[0]?.toUpperCase()||'?';
    const playerAvatar=playerProfile?.avatar_url||'';
    const playerAvatarType=playerProfile?.avatar_type||'initials';
    const playerBio=playerProfile?.status_text||'';

    // Player avatar HTML
    let pAvaHtml='';
    if(playerAvatarType==='emoji'&&playerAvatar){
      pAvaHtml=`<div class="msg-player-ava" style="background:${playerColor}22;border-color:${playerColor}44;font-size:18px">${playerAvatar}</div>`;
    }else if(playerAvatarType==='url'&&playerAvatar){
      pAvaHtml=`<div class="msg-player-ava" style="border-color:${playerColor}44"><img src="${playerAvatar}" onerror="this.parentNode.innerHTML='${playerIni}';this.parentNode.style.background='${playerColor}22'"></div>`;
    }else{
      pAvaHtml=`<div class="msg-player-ava" style="background:${playerColor}22;border-color:${playerColor}44;color:${playerColor}">${playerIni}</div>`;
    }

    // @mention tespiti — beni mi etiketlediler?
    const myName=S.user?.name||S.user?.id||'';
    const isMentioned=myName&&msg.content&&msg.sent_by_user!==S.user?.id&&(
      msg.content.toLowerCase().includes('@'+myName.toLowerCase())||
      msg.content.includes('@everyone')||msg.content.includes('@here')
    );
    const el=document.createElement('div');
    const isMAMsg=!!(window.MasterAgent&&MasterAgent._sentIds?.has(msg.id));
    el.className='msg-group'+(ns?' new-sender':'')+(isFav?' fav':'')+(isMentioned?' mentioned':'')+(isMAMsg?' ma-msg':'');
    el.dataset.msgId=msg.id;
    el.dataset.charId=String(msg.char_id||'');
    el.dataset.userId=thisUser;

    el.innerHTML=`
      <div class="msg-ava-col">
        ${ns?`<div class="msg-player-ava-wrap" title="${playerName}${playerBio?' — '+playerBio:''}" onclick="PlayerProfile.open('${msg.sent_by_user||''}')">
          ${pAvaHtml}
        </div>`:'<div class="msg-ava-ph"></div>'}
      </div>
      <div class="msg-body">
        ${ns?`<div class="msg-meta">
          <span class="msg-player-name" style="color:${playerColor}" onclick="PlayerProfile.open('${msg.sent_by_user||''}')">
            ${playerName}
          </span>
          <span class="msg-char-list">
            <span class="msg-char-tag" data-char-id="${msg.char_id||''}"
              onclick="UI.charPreview('${msg.char_id}',event,'${(msg.char_name||'').replace(/'/g,"\\'")}')"
              oncontextmenu="event.preventDefault();UI.charContextMenu(event,'${msg.char_id}','${(msg.char_name||'').replace(/'/g,"\\'")}')">
              ${msg.char_name||''}${msg.char_alias?` <span class="msg-char-alias">"${msg.char_alias}"</span>`:''}
              ${isMAMsg?'<span class="ma-badge"><i class="fas fa-robot"></i> MA</span>':''}
              ${msg.org_name?`<span class="msg-org" style="background:${msg.org_color||''}22;color:${msg.org_color||'var(--t2)'};border:1px solid ${msg.org_color||'transparent'}55">${msg.org_name}</span>`:''}
            </span>
          </span>
          <span class="msg-ts">${rpTimeHtml}${time}${msg.is_edited?'<span class="msg-edited"> (düz)</span>':''}</span>
        </div>`:''}
        ${replyHtml}
        <div class="msg-text">${msg.is_nsfw?'<span class="msg-nsfw-badge">🔞 NSFW</span>':''}${UI._rc(msg.content)}</div>
        ${UI._mediaEmbed(msg.content||'')}
        <div class="msg-edit-wrap"><textarea class="edt-ta" rows="2"></textarea><div class="edt-rpt"><label><i class="fas fa-clock"></i> RP</label><input class="edt-rpt-inp" type="text" placeholder="${msg.rp_time||'YYYY-MM-DD HH:MM TZ'}" value="${msg.rp_time||''}"></div><div class="edt-btns"><button class="edt-save" onclick="UI.saveEdit('${msg.id}',this)">Kaydet</button><button class="edt-cancel" onclick="UI.cancelEdit('${msg.id}')">İptal</button></div></div>
        ${msg.attachment_url?`<div class="msg-attach"><img src="${msg.attachment_url}" onerror="this.parentNode.remove()" loading="lazy"></div>`:''}
        <div class="msg-reactions" data-msg-id="${msg.id}"></div>
      </div>
      <div class="msg-actions">
        <button class="mac" data-tip="Yanıtla" onclick="RP.setReply(${rData})"><i class="fas fa-reply"></i></button>
        <button class="mac" data-tip="Tepki" onclick="UI.reactPicker(event,'${msg.id}')">😊</button>
        <button class="mac" data-tip="Favori" onclick="RP.toggleFav('${msg.id}')"><i class="far fa-star"></i></button>
        <button class="mac" data-tip="İlet" onclick="RP.fwdMsg(${fData})"><i class="fas fa-share"></i></button>
        <button class="mac" data-tip="Düzenle" onclick="UI.startEdit('${msg.id}')"><i class="fas fa-pen"></i></button>
        <button class="mac" data-tip="Kopyala" onclick="UI.copyMsg('${msg.id}')"><i class="fas fa-copy"></i></button>
        <button class="mac del" data-tip="Sil" onclick="if(confirm('Mesajı sil?'))RP.delMsg('${msg.id}')"><i class="fas fa-trash"></i></button>
      </div>`;

    const re=el.querySelector('.msg-reactions');
    if(re)UI.renderReacts(re,msg);
    list.appendChild(el);
    if(scroll)UI.scrollBot();
  },
  // Char name right-click in message
  charContextMenu(e,charId,charName){
    if(typeof ContextMenu!=='undefined'){
      ContextMenu.show(e.clientX,e.clientY,[
        {icon:'fa-id-card',label:'Profil Kartı',action:()=>{if(typeof CharCard!=='undefined')CharCard.show(charId,e.clientX,e.clientY);}},
        {icon:'fa-external-link-alt',label:"DB'de Aç",action:()=>{if(typeof CharCard!=='undefined')CharCard.openInDB(charId,'char');}},
        {icon:'fa-plus',label:'Sahneye Ekle',action:()=>{const c=S.ci.get(charId);if(c)RP.toggleChar(c);}},
      ]);
    }
  },
  renderReacts(el,msg){
    el.innerHTML='';
    Object.entries(msg.reactions||{}).forEach(([emoji,users])=>{
      if(!users.length)return;
      const on=S.activeChar&&users.includes(S.activeChar.id);
      const p=document.createElement('span');p.className='rpill'+(on?' on':'');p.title=users.join(', ');
      p.innerHTML=`${emoji}<span class="rcnt">${users.length}</span>`;
      p.onclick=()=>RP.react(msg.id,emoji);el.appendChild(p);
    });
  },
  renderTyping(){
    const area=document.getElementById('typing-area');
    const list=Object.values(S.typing);
    if(!list.length){area.innerHTML='';return;}
    // MA özel gösterim
    const maEntry=list.find(t=>t._ma);
    const others=list.filter(t=>!t._ma).slice(0,3);
    let html='';
    if(maEntry){
      html+=`<span class="typing-dots" style="color:var(--pu)"><span></span><span></span><span></span></span><span class="typing-text"><span style="color:var(--pu);font-weight:600">Master Agent</span> düşünüyor…</span>`;
      if(others.length) html+=' &nbsp;';
    }
    if(others.length){
      const parts=others.map(t=>{
        const color=t.userColor||'var(--t2)';
        const name=t.userName||t.charName||'?';
        const char=t.charName&&t.charName!==name?` <span style="color:var(--t3);font-style:normal">(${t.charName})</span>`:'';
        return `<span style="color:${color};font-weight:600">${name}</span>${char}`;
      });
      if(!maEntry) html+=`<span class="typing-dots"><span></span><span></span><span></span></span>`;
      html+=`<span class="typing-text">${parts.join(', ')} yazıyor…</span>`;
    }
    area.innerHTML=html;
  },

  renderMembers(){
    const list=document.getElementById('members-list');
    const now=Date.now();
    const onlineUserIds=new Set();
    // Collect online users from presence
    Object.values(S.presence).forEach(p=>{
      if(!p.last_seen)return;
      if(now-new Date(p.last_seen).getTime()>60000)return;
      if(p.reader_user_id)onlineUserIds.add(p.reader_user_id);
    });
    if(S.user)onlineUserIds.add(S.user.id);
    // Typing users (for indicator in members panel)
    const typingUserIds=new Set(Object.values(S.typing).map(t=>t.userId).filter(Boolean));
    const allUsers=USERS||[];
    document.getElementById('mem-cnt').textContent=onlineUserIds.size;
    list.innerHTML='';
    const onlinePlayers=allUsers.filter(u=>onlineUserIds.has(u.id));
    const offlinePlayers=allUsers.filter(u=>!onlineUserIds.has(u.id));
    if(onlinePlayers.length){
      const sec=document.createElement('div');sec.className='mem-sec';
      sec.textContent=`Çevrimiçi — ${onlinePlayers.length}`;list.appendChild(sec);
      onlinePlayers.forEach(u=>this._renderPlayerItem(list,u,true,typingUserIds.has(u.id)));
    }
    if(offlinePlayers.length){
      const sec=document.createElement('div');sec.className='mem-sec';
      sec.style.marginTop='8px';sec.textContent='Çevrimdışı';list.appendChild(sec);
      offlinePlayers.forEach(u=>this._renderPlayerItem(list,u,false,false));
    }
  },

  _renderPlayerItem(list,user,isOnline,isTyping){
    const profile=S.playerProfiles?.[user.id]||null;
    const isSelf=S.user?.id===user.id;
    const el=document.createElement('div');
    el.className='mem-item';
    el.style.opacity=isOnline?'1':'0.4';

    // Glow effect via CSS custom property
    const glowColor=isOnline?user.color:'transparent';

    // Avatar
    let avaContent='';
    if(profile?.avatar_type==='emoji'&&profile.avatar_url){
      avaContent=`<span style="font-size:18px;line-height:1">${profile.avatar_url}</span>`;
    }else if(profile?.avatar_type==='url'&&profile.avatar_url){
      avaContent=`<img src="${profile.avatar_url}" onerror="this.parentNode.style.background='${user.color}22';this.remove()" style="width:100%;height:100%;object-fit:cover;display:block">`;
    }else{
      avaContent=`<span style="color:${user.color};font-weight:700">${user.name[0]}</span>`;
    }

    // Typing indicator chips (chars being played by this user)
    const typingChars=Object.values(S.typing).filter(t=>t.userId===user.id);
    const typingHtml=typingChars.length
      ?`<div style="display:flex;align-items:center;gap:3px;margin-top:1px">
          <span class="typing-dots" style="margin-right:2px"><span></span><span></span><span></span></span>
          <span style="font-family:var(--mono);font-size:9px;color:${user.color}">${typingChars[0].charName}</span>
        </div>`
      :(profile?.status_text?`<div class="mem-al">${profile.status_emoji||''} ${profile.status_text}</div>`:'');

    el.innerHTML=`
      <div class="mem-ava ${isOnline?'mem-ava-online':''}" style="
        background:${user.color}22;
        ${isOnline?`box-shadow:0 0 0 2px ${user.color}66,0 0 12px ${user.color}44`:''}
      ">${avaContent}</div>
      <div class="mem-inf" style="cursor:pointer" onclick="PlayerProfile.open('${user.id}')">
        <div class="mem-nm" style="color:${isOnline?user.color:'var(--t2)'}">${user.name}${isSelf?'<span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:4px">(sen)</span>':''}</div>
        ${typingHtml}
      </div>
      ${!isSelf?`<button class="mem-pm-btn" title="PM gönder" onclick="PM.open('${user.id}')"><i class="fas fa-comment"></i></button>`:''}
      ${isSelf?`<button class="mem-pm-btn" title="Profili düzenle" onclick="PlayerProfile.open('${user.id}')"><i class="fas fa-edit"></i></button>`:''}`;
    list.appendChild(el);
  },
  updChar(char){
    // Sık Oynanan Karakterler sayacını güncelle
    const cnt=(window.FavChars?._get()||[]).length;
    const nm=document.getElementById('ac-name');
    const og=document.getElementById('ac-org');
    if(nm) nm.textContent='Sık Oynanan Karakterler';
    if(og) og.textContent=cnt?`${cnt} karakter favoride`:'tıkla → yönet';
  },
  renderTags(){
    if(window.QuickBar) QuickBar.render();
    // Favori karakter sayacını güncelle
    const cnt=(window.FavChars?._get()||[]).length;
    const og=document.getElementById('ac-org');
    if(og) og.textContent=cnt?`${cnt} karakter favoride`:'tıkla → yönet';
  },
  updateTxt(id,txt,edited){
    const el=document.querySelector(`[data-msg-id="${id}"]`);if(!el)return;
    el.classList.remove('msg-editing');
    const t=el.querySelector('.msg-text');if(t)t.innerHTML=UI._rc(txt);
    const ts=el.querySelector('.msg-ts');
    if(ts&&edited&&!ts.querySelector('.msg-edited'))ts.innerHTML+=`<span class="msg-edited"> (düz)</span>`;
  },
  startEdit(id){
    const el=document.querySelector(`[data-msg-id="${id}"]`);if(!el)return;
    el.classList.add('msg-editing');
    const ta=el.querySelector('.edt-ta');
    const rptInp=el.querySelector('.edt-rpt-inp');
    const m=(S.msgs[S.roomId]||[]).find(x=>x.id==id);
    if(ta&&m){ta.value=m.content||'';ta.focus();}
    if(rptInp&&m){rptInp.value=m.rp_time||'';rptInp.placeholder=m.rp_time||'YYYY-MM-DD HH:MM TZ';}
  },
  saveEdit(id,btn){
    const el=document.querySelector(`[data-msg-id="${id}"]`);if(!el)return;
    const ta=el.querySelector('.edt-ta');if(!ta)return;
    const rptInp=el.querySelector('.edt-rpt-inp');
    const rawRptVal=rptInp?rptInp.value.trim()||null:undefined;
    // Parse flexible time input (time-only, relative offset, full string, etc.)
    // For edits we parse but do NOT advance room state
    let newRpTime=rawRptVal;
    if(rawRptVal){
      const currentSt=RpTime._state[S.roomId]||RpTime._DEFAULT;
      const parsed=RpTime._parseInput(rawRptVal,currentSt);
      newRpTime=parsed?parsed.rp_time_string:rawRptVal;
    }
    if(newRpTime){
      const orig=(S.msgs[S.roomId]||[]).find(x=>x.id==id)?.rp_time||null;
      if(orig&&newRpTime!==orig){
        if(!confirm(`⚠️ RP Zamanı Değişikliği\n\nEski: ${orig}\nYeni: ${newRpTime}\n\nDevam?`))return;
      }
    }
    RP.editMsg(id,ta.value,newRpTime);
  },
  cancelEdit(id){document.querySelector(`[data-msg-id="${id}"]`)?.classList.remove('msg-editing');},
  scrollToMsg(id){
    const el=document.querySelector(`[data-msg-id="${id}"]`);
    if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.style.background='rgba(74,143,226,.1)';setTimeout(()=>el.style.background='',1500);}
  },
  charPreview(id, e, fallbackName){
    const c=S.ci?.get(id)||S.chars?.find(x=>String(x.id)===String(id));
    const x=e?.clientX||null, y=e?.clientY||null;
    if(c){
      CharCard.show(id, x, y, 'char');
    } else if(fallbackName){
      // NPC veya bilinmeyen — isimle minimal popup göster
      CharCard._npcPopup(fallbackName, x, y);
    }
  },
  reactPicker(e,msgId){
    e.stopPropagation();document.querySelectorAll('.react-popup').forEach(el=>el.remove());
    const p=document.createElement('div');p.className='react-popup';p.style.cssText=`top:${e.clientY-50}px;left:${e.clientX-10}px;`;
    EMOJIS.forEach(em=>{const b=document.createElement('button');b.className='em-btn';b.textContent=em;b.onclick=()=>{RP.react(msgId,em);p.remove();};p.appendChild(b);});
    document.body.appendChild(p);document.addEventListener('click',()=>p.remove(),{once:true});
  },
  copyMsg(id){
    const m=(S.msgs[S.roomId]||[]).find(x=>x.id==id);
    if(m)navigator.clipboard?.writeText(m.content||'');
    toast('Kopyalandı','success');
  },
  scrollBot(){const l=document.getElementById('messages-list');l.scrollTop=l.scrollHeight;},
  showAI(txt){document.getElementById('ai-bar-txt').textContent=txt;document.getElementById('ai-bar').classList.add('show');setTimeout(()=>document.getElementById('ai-bar')?.classList.remove('show'),20000);}
};

/* ═══ CONTEXT MENU ══════════════════════════════════════ */
const ContextMenu = {
  _el: null,
  _build(x, y) {
    this.hide();
    const m = document.createElement('div');
    m.className = 'ctx-menu';
    // Position will be set after append to know actual height
    m.style.cssText = `position:fixed;left:-9999px;top:-9999px;`;
    document.body.appendChild(m);
    this._el = m;
    return m;
  },
  _position(m, x, y) {
    const mw = m.offsetWidth || 210;
    const mh = m.offsetHeight || 200;
    const lx = Math.min(x, innerWidth - mw - 8);
    const ly = Math.min(y, innerHeight - mh - 8);
    m.style.left = lx + 'px';
    m.style.top  = ly + 'px';
  },
  // Basit tek-liste menü (messages vb.)
  show(x, y, items) {
    const m = this._build(x, y);
    items.forEach(it => {
      if (it === 'sep') { const s = document.createElement('div'); s.className = 'ctx-sep'; m.appendChild(s); return; }
      const b = document.createElement('button');
      b.className = 'ctx-item' + (it.danger ? ' danger' : '') + (it.disabled ? ' disabled' : '');
      if (it.disabled) b.style.opacity = '.4';
      b.style.pointerEvents = it.disabled ? 'none' : '';
      b.innerHTML = `<span class="ctx-icon"><i class="fas ${it.icon}"></i></span>${it.label}`;
      b.onclick = () => { it.action(); this.hide(); };
      m.appendChild(b);
    });
    requestAnimationFrame(() => this._position(m, x, y));
    setTimeout(() => document.addEventListener('click', () => this.hide(), {once:true}), 50);
  },
  // Gruplu oda menüsü
  showRoom(x, y, room, groups) {
    const m = this._build(x, y);
    // Oda başlığı
    const hdr = document.createElement('div');
    hdr.className = 'ctx-header';
    hdr.innerHTML = `<i class="fas fa-door-open" style="margin-right:5px;opacity:.6"></i>${room.name}`;
    m.appendChild(hdr);
    groups.forEach((grp, gi) => {
      if (gi > 0) { const s = document.createElement('div'); s.className = 'ctx-sep'; m.appendChild(s); }
      if (grp.group) {
        const lbl = document.createElement('div');
        lbl.style.cssText = 'padding:4px 12px 2px;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);';
        lbl.textContent = grp.group;
        m.appendChild(lbl);
      }
      grp.items.forEach(it => {
        const b = document.createElement('button');
        b.className = 'ctx-item' + (it.danger ? ' danger' : '') + (it.success ? ' success' : '');
        if (it.disabled) { b.style.opacity = '.35'; b.style.pointerEvents = 'none'; }
        b.innerHTML = `<span class="ctx-icon"><i class="fas ${it.icon}"></i></span><span style="flex:1">${it.label}</span>`;
        b.onclick = () => { it.action(); this.hide(); };
        m.appendChild(b);
      });
    });
    requestAnimationFrame(() => this._position(m, x, y));
    setTimeout(() => document.addEventListener('click', () => this.hide(), {once:true}), 50);
  },
  hide() { this._el?.remove(); this._el = null; }
};
window.ContextMenu = ContextMenu;

/* ═══ CHAR / ENTITY CARD — rp_features.js tarafından sağlanır ════════════════════════════════ */
/* CharCard objesi rp_features.js içinde const olarak tanımlı.
   _npcPopup ve openInDB patch'leri aşağıdaki <script> bloğuna taşındı (rp_features.js sonrası).
   AŞAĞI_BAS_BAŞLANGICI */
const CharCard = {
  _el: null,
  _overlay: null,

  show(id, x, y, type = 'char') {
    this.hide();
    let entity = null;
    if (type === 'char' || !type) {
      entity = S.ci?.get(id) || S.chars?.find(c => String(c.id) === String(id));
    } else if (type === 'vehicle') {
      entity = (S._db?.vehicles||[]).find(v => String(v.id) === String(id) || v.plate === id || v.name === id);
    } else if (type === 'org') {
      entity = S.oi?.get(id) || S.orgs?.find(o => String(o.id) === String(id) || o.name === id);
    } else if (type === 'prop') {
      entity = (S._db?.properties||[]).find(p => String(p.id) === String(id) || p.name === id);
    } else if (type === 'equip') {
      entity = (S._db?.equipments||[]).find(e => String(e.id) === String(id) || e.name === id);
    }

    // Overlay (yarı saydam arka plan, tıklayınca kapanır)
    const ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;z-index:9990;background:rgba(0,0,0,.55);backdrop-filter:blur(3px);animation:fadeIn .15s ease';
    ov.onclick = () => this.hide();
    document.body.appendChild(ov);
    this._overlay = ov;

    const card = document.createElement('div');
    card.style.cssText = 'position:fixed;z-index:9999;background:var(--bg1);border:1px solid var(--ln2);border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.8);width:380px;max-height:85vh;overflow:hidden;display:flex;flex-direction:column;font-family:var(--sans);animation:cardIn .18s cubic-bezier(.34,1.56,.64,1)';

    if (!entity) {
      card.innerHTML = this._emptyCard(id, type);
    } else if (type === 'char' || !type) {
      card.innerHTML = this._charCard(entity);
    } else if (type === 'vehicle') {
      card.innerHTML = this._vehicleCard(entity);
    } else if (type === 'org') {
      card.innerHTML = this._orgCard(entity);
    } else if (type === 'prop') {
      card.innerHTML = this._propCard(entity);
    } else if (type === 'equip') {
      card.innerHTML = this._equipCard(entity);
    } else {
      card.innerHTML = this._genericCard(entity, type);
    }

    // Merkeze konumlandır (x,y varsa yakınına)
    if (x != null && y != null) {
      const cx = Math.min(Math.max(x - 190, 8), innerWidth - 396);
      const cy = Math.min(Math.max(y - 20, 8), innerHeight - 600);
      card.style.left = cx + 'px';
      card.style.top  = cy + 'px';
    } else {
      card.style.left = '50%';
      card.style.top  = '50%';
      card.style.transform = 'translate(-50%,-50%)';
    }

    document.body.appendChild(card);
    this._el = card;
  },

  hide() {
    this._el?.remove(); this._el = null;
    this._overlay?.remove(); this._overlay = null;
  },

  _npcPopup(name, x, y) {
    this.hide();
    const ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;z-index:9990;background:rgba(0,0,0,.5);backdrop-filter:blur(2px)';
    ov.onclick = () => this.hide();
    document.body.appendChild(ov);
    this._overlay = ov;

    const card = document.createElement('div');
    card.style.cssText = 'position:fixed;z-index:9999;background:var(--bg2);border:1px solid var(--ln2);border-radius:16px;box-shadow:0 20px 60px #0009;width:340px;font-family:var(--sans);left:50%;top:50%;transform:translate(-50%,-50%);animation:cardIn .18s cubic-bezier(.34,1.56,.64,1)';
    const ini = (name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    card.innerHTML = `
      <div style="padding:20px;background:linear-gradient(135deg,rgba(124,77,255,.15),rgba(74,143,226,.1));border-radius:16px 16px 0 0;border-bottom:1px solid var(--ln2);display:flex;gap:12px;align-items:center">
        <div style="width:52px;height:52px;border-radius:50%;background:rgba(124,77,255,.25);border:2px solid rgba(124,77,255,.5);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:var(--ac);flex-shrink:0">${ini}</div>
        <div style="flex:1"><div style="font-weight:700;font-size:15px;color:var(--t0)">${name}</div><div style="font-size:11px;color:var(--pu);margin-top:2px;font-family:var(--mono)">● Spontane NPC</div></div>
        <button onclick="CharCard.hide()" style="background:rgba(255,255,255,.07);border:1px solid var(--ln2);color:var(--t2);cursor:pointer;font-size:14px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center">✕</button>
      </div>
      <div style="padding:16px">
        <p style="color:var(--t3);font-size:12px;margin:0 0 12px;line-height:1.5">Bu karakter veritabanında kayıtlı değil — MA tarafından spontane oluşturuldu.</p>
        <button onclick="if(window.MasterAgent){MasterAgent.send('SAVE_NPC:{\"name\":\"${name.replace(/"/g,'\\"')}\"}');CharCard.hide();}" style="width:100%;padding:9px;background:rgba(124,77,255,.15);border:1px solid rgba(124,77,255,.4);color:var(--ac);border-radius:8px;cursor:pointer;font-size:12px;font-family:var(--sans)"><i class="fas fa-save" style="margin-right:6px"></i>DB'ye Kaydet (MA)</button>
      </div>`;
    document.body.appendChild(card);
    this._el = card;
  },

  // ── Karakter Kartı ───────────────────────────────────
  _charCard(c) {
    const org = S.oi?.get((c.organizations||[])[0] || c.organization);
    const orgColor = org?.color || 'var(--ac)';
    const statusColor = {Active:'#4db880',Deceased:'#e05555',Imprisoned:'#e8a74a',Missing:'#9b6fd4'}[c.status] || 'var(--t2)';
    const vehicles = (S._db?.vehicles||[]).filter(v => v.owner_id === c.id || (v.owners||[]).includes(c.id));
    const props    = (S._db?.properties||[]).filter(p => p.owner_id === c.id);
    const ini = (c.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();

    const heroBg = c.image
      ? 'background:url(\'' + c.image + '\') center/cover no-repeat;'
      : 'background:linear-gradient(135deg,' + orgColor + '33,' + orgColor + '11);';

    return `
    <!-- Hero Banner -->
    <div style="${heroBg}min-height:160px;position:relative;border-radius:16px 16px 0 0;overflow:hidden;flex-shrink:0">
      ${c.image ? '<div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.1) 0%,rgba(0,0,0,.75) 100%)"></div>' : ''}
      ${!c.image ? '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:52px;font-weight:700;color:' + orgColor + ';opacity:.25">' + ini + '</div>' : ''}
      <!-- Kapat butonu -->
      <button onclick="CharCard.hide()" style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.15);color:#fff;cursor:pointer;font-size:14px;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)">✕</button>
      <!-- Alt bilgi -->
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 14px">
        ${!c.image ? '<div style="width:64px;height:64px;border-radius:50%;background:' + orgColor + '33;border:2px solid ' + orgColor + '66;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:' + orgColor + ';margin-bottom:8px">' + ini + '</div>' : ''}
        <div style="font-size:17px;font-weight:700;color:#fff;text-shadow:0 1px 4px #0008">${c.name}${c.alias ? ' <span style="font-size:13px;font-weight:400;opacity:.75">"' + c.alias + '"</span>' : ''}</div>
        <div style="display:flex;gap:6px;align-items:center;margin-top:4px;flex-wrap:wrap">
          ${org ? '<span style="background:' + orgColor + '33;color:' + orgColor + ';border:1px solid ' + orgColor + '66;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono)">' + org.name + '</span>' : ''}
          <span style="background:${statusColor}22;color:${statusColor};border:1px solid ${statusColor}44;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono)">● ${c.status||'Active'}</span>
        </div>
      </div>
    </div>
    <!-- Body -->
    <div style="overflow-y:auto;flex:1;padding:14px;display:flex;flex-direction:column;gap:10px">
      <!-- Stats grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${this._stat('Yaş', c.age, 'fa-birthday-cake')}
        ${this._stat('Cinsiyet', c.gender, 'fa-venus-mars')}
        ${this._stat('Meslek', c.occupation, 'fa-briefcase')}
        ${this._stat('Uyruk', c.nationality, 'fa-flag')}
        ${c.phone ? this._stat('Telefon', c.phone, 'fa-phone') : ''}
        ${c.address ? this._stat('Adres', c.address, 'fa-map-marker-alt') : ''}
      </div>
      <!-- Skills -->
      ${c.skills?.length ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Yetenekler</div><div style="display:flex;flex-wrap:wrap;gap:4px">' + (Array.isArray(c.skills)?c.skills:[c.skills]).map(s=>'<span style="background:var(--bg4);border:1px solid var(--ln2);color:var(--t1);padding:2px 8px;border-radius:12px;font-size:11px">' + s + '</span>').join('') + '</div></div>' : ''}
      <!-- Geçmiş -->
      ${c.backstory ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Arka Plan</div><div style="color:var(--t2);line-height:1.6;font-size:12px;background:var(--bg3);border-radius:8px;padding:10px">' + c.backstory.slice(0,400) + (c.backstory.length>400?'…':'') + '</div></div>' : ''}
      <!-- Kişilik -->
      ${c.personality ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Kişilik</div><div style="color:var(--t2);line-height:1.6;font-size:12px;background:var(--bg3);border-radius:8px;padding:10px">' + c.personality.slice(0,250) + (c.personality.length>250?'…':'') + '</div></div>' : ''}
      <!-- Araçlar -->
      ${vehicles.length ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Araçlar</div><div style="display:flex;flex-direction:column;gap:4px">' + vehicles.map(v=>'<div onclick="CharCard.show(\'' + v.id + '\',null,null,\'vehicle\')" style="display:flex;align-items:center;gap:8px;padding:7px 10px;background:var(--bg3);border:1px solid var(--ln);border-radius:8px;cursor:pointer;transition:background .12s" onmouseenter="this.style.background=\'var(--bg4)\'" onmouseleave="this.style.background=\'var(--bg3)\'"><span style="font-size:16px">🚗</span><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (v.name||v.model||'Araç') + '</div>' + (v.plate?'<div style="font-size:10px;color:#e8a74a;font-family:var(--mono)">' + v.plate + '</div>':'') + '</div></div>').join('') + '</div></div>' : ''}
      <!-- Mülkler -->
      ${props.length ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Mülkler</div><div style="display:flex;flex-direction:column;gap:4px">' + props.map(p=>'<div onclick="CharCard.show(\'' + p.id + '\',null,null,\'prop\')" style="display:flex;align-items:center;gap:8px;padding:7px 10px;background:var(--bg3);border:1px solid var(--ln);border-radius:8px;cursor:pointer;transition:background .12s" onmouseenter="this.style.background=\'var(--bg4)\'" onmouseleave="this.style.background=\'var(--bg3)\'"><span style="font-size:16px">🏠</span><div style="font-size:12px;font-weight:600;color:var(--t0)">' + p.name + '</div></div>').join('') + '</div></div>' : ''}
      <!-- Notlar -->
      ${c.notes ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Notlar</div><div style="color:var(--t2);line-height:1.6;font-size:12px;background:rgba(232,167,74,.07);border:1px solid rgba(232,167,74,.2);border-radius:8px;padding:10px">' + c.notes.slice(0,300) + (c.notes.length>300?'…':'') + '</div></div>' : ''}
    </div>
    <!-- Footer -->
    <div style="padding:10px 14px;border-top:1px solid var(--ln);display:flex;gap:6px;flex-shrink:0;background:var(--bg2)">
      <button onclick="CharCard.openInDB('${c.id}','character')" style="flex:1;padding:8px;background:var(--bg4);border:1px solid var(--ln2);color:var(--t1);border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px;transition:background .12s" onmouseenter="this.style.background='var(--bg5)'" onmouseleave="this.style.background='var(--bg4)'"><i class="fas fa-external-link-alt" style="font-size:10px"></i>DB'de Aç</button>
      <button onclick="const inp=document.getElementById('msg-input');if(inp){inp.value+='[Karakter:${c.name}] ';inp.focus();}CharCard.hide();" style="flex:1;padding:8px;background:rgba(74,143,226,.15);border:1px solid rgba(74,143,226,.3);color:var(--ac);border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px" onmouseenter="this.style.opacity='.8'" onmouseleave="this.style.opacity='1'"><i class="fas fa-at" style="font-size:10px"></i>Mesaja Etiketle</button>
    </div>`;
  },

  // ── Araç Kartı ──────────────────────────────────────
  _vehicleCard(v) {
    const owner = S.ci?.get(v.owner_id) || S.chars?.find(c => String(c.id) === String(v.owner_id));
    const co_owners = (v.owners||[]).filter(id=>id!==v.owner_id).map(id=>S.ci?.get(id)||S.chars?.find(c=>String(c.id)===String(id))).filter(Boolean);
    const statusColor = {Active:'#4db880',active:'#4db880',Stolen:'#e05555',stolen:'#e05555',Impounded:'#e8a74a',impounded:'#e8a74a',Totaled:'#e05555'}[v.status] || 'var(--t2)';

    const heroBg = v.image
      ? 'background:url(\'' + v.image + '\') center/cover no-repeat;min-height:160px;'
      : 'background:linear-gradient(135deg,rgba(232,167,74,.2),rgba(232,167,74,.05));min-height:120px;display:flex;align-items:center;justify-content:center;';

    return `
    <div style="${heroBg}position:relative;border-radius:16px 16px 0 0;overflow:hidden;flex-shrink:0">
      ${v.image ? '<div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.05),rgba(0,0,0,.7))"></div>' : '<div style="font-size:64px;opacity:.3">🚗</div>'}
      <button onclick="CharCard.hide()" style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.15);color:#fff;cursor:pointer;font-size:14px;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)">✕</button>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 14px">
        <div style="font-family:var(--mono);font-size:22px;font-weight:700;color:#e8a74a;letter-spacing:.08em;text-shadow:0 2px 8px #0008">${v.plate||''}</div>
        <div style="font-size:16px;font-weight:700;color:#fff;text-shadow:0 1px 4px #0008">${v.name||v.model||'Araç'}</div>
        <div style="display:flex;gap:6px;margin-top:4px">
          ${v.status ? '<span style="background:' + statusColor + '22;color:' + statusColor + ';border:1px solid ' + statusColor + '44;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:600;font-family:var(--mono)">● ' + v.status + '</span>' : ''}
        </div>
      </div>
    </div>
    <div style="overflow-y:auto;flex:1;padding:14px;display:flex;flex-direction:column;gap:10px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${this._stat('Marka', v.brand||v.make, 'fa-industry')}
        ${this._stat('Model', v.model, 'fa-car')}
        ${this._stat('Renk', v.color, 'fa-palette')}
        ${this._stat('Yıl', v.year, 'fa-calendar')}
        ${this._stat('Kategori', v.category||v.type, 'fa-tag')}
        ${this._stat('Motor', v.engine, 'fa-cog')}
      </div>
      ${v.description ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Açıklama</div><div style="color:var(--t2);line-height:1.6;font-size:12px;background:var(--bg3);border-radius:8px;padding:10px">' + v.description + '</div></div>' : ''}
      ${(v.mods||v.modifications) ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Modifikasyonlar</div><div style="color:var(--am);line-height:1.6;font-size:12px;background:rgba(232,167,74,.07);border:1px solid rgba(232,167,74,.2);border-radius:8px;padding:10px">' + (v.mods||v.modifications) + '</div></div>' : ''}
      <!-- Sahip -->
      ${owner ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Sahip</div><div onclick="CharCard.show(\'' + owner.id + '\',null,null,\'char\')" style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg3);border:1px solid var(--ln);border-radius:8px;cursor:pointer;transition:background .12s" onmouseenter="this.style.background=\'var(--bg4)\'" onmouseleave="this.style.background=\'var(--bg3)\'">' + (owner.image ? '<img src="' + owner.image + '" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--ln2)">' : '<div style="width:36px;height:36px;border-radius:50%;background:var(--bg4);border:2px solid var(--ln2);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--t1)">' + (owner.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2) + '</div>') + '<div><div style="font-size:13px;font-weight:600;color:var(--t0)">' + owner.name + '</div><div style="font-size:10px;color:var(--t3)">' + (owner.occupation||'') + '</div></div><i class="fas fa-chevron-right" style="margin-left:auto;color:var(--t3);font-size:10px"></i></div></div>' : ''}
      ${co_owners.length ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Ortak Sahipler</div><div style="display:flex;gap:6px;flex-wrap:wrap">' + co_owners.map(co=>'<div onclick="CharCard.show(\'' + co.id + '\',null,null,\'char\')" style="display:flex;align-items:center;gap:6px;padding:4px 8px;background:var(--bg3);border:1px solid var(--ln);border-radius:20px;cursor:pointer;font-size:11px;color:var(--t1)">' + (co.image?'<img src="' + co.image + '" style="width:18px;height:18px;border-radius:50%;object-fit:cover">':'') + co.name + '</div>').join('') + '</div></div>' : ''}
      ${v.notes ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Notlar</div><div style="color:var(--t2);font-size:12px;background:rgba(232,167,74,.07);border:1px solid rgba(232,167,74,.2);border-radius:8px;padding:10px;line-height:1.6">' + v.notes + '</div></div>' : ''}
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--ln);display:flex;gap:6px;flex-shrink:0;background:var(--bg2)">
      <button onclick="CharCard.openInDB('${v.id}','vehicle')" style="flex:1;padding:8px;background:var(--bg4);border:1px solid var(--ln2);color:var(--t1);border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px" onmouseenter="this.style.background='var(--bg5)'" onmouseleave="this.style.background='var(--bg4)'"><i class="fas fa-external-link-alt" style="font-size:10px"></i>DB'de Aç</button>
      <button onclick="const inp=document.getElementById('msg-input');if(inp){inp.value+='[Araç:${(v.plate||v.name||'').replace(/'/g,"\\'")}] ';inp.focus();}CharCard.hide();" style="flex:1;padding:8px;background:rgba(232,167,74,.15);border:1px solid rgba(232,167,74,.3);color:#e8a74a;border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px"><i class="fas fa-tag" style="font-size:10px"></i>Mesaja Etiketle</button>
    </div>`;
  },

  // ── Org Kartı ───────────────────────────────────────
  _orgCard(o) {
    const members = (S.chars||[]).filter(c => (c.organizations||[]).includes(o.id) || c.organization === o.id);
    const leader  = members.find(m => m.rank === 'Leader' || m.role === 'Leader' || m.is_leader) || members[0];
    const orgColor = o.color || 'var(--ac)';

    return `
    <div style="background:linear-gradient(135deg,${orgColor}33,${orgColor}11);min-height:140px;position:relative;border-radius:16px 16px 0 0;overflow:hidden;flex-shrink:0;display:flex;align-items:flex-end;padding:14px">
      ${(o.logo||o.image) ? '<img src="' + (o.logo||o.image) + '" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);height:80px;object-fit:contain;opacity:.2">' : '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);font-size:56px;opacity:.15">🏢</div>'}
      <button onclick="CharCard.hide()" style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.15);color:#fff;cursor:pointer;font-size:14px;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center">✕</button>
      <div>
        ${(o.logo||o.image) ? '<img src="' + (o.logo||o.image) + '" style="height:36px;object-fit:contain;margin-bottom:6px;border-radius:4px">' : ''}
        <div style="font-size:18px;font-weight:700;color:#fff">${o.name}</div>
        <div style="display:flex;gap:6px;margin-top:4px;flex-wrap:wrap">
          ${o.type ? '<span style="background:' + orgColor + '33;color:' + orgColor + ';border:1px solid ' + orgColor + '66;padding:2px 8px;border-radius:20px;font-size:10px;font-family:var(--mono)">' + o.type + '</span>' : ''}
          ${o.status ? '<span style="background:rgba(77,184,128,.2);color:#4db880;border:1px solid rgba(77,184,128,.4);padding:2px 8px;border-radius:20px;font-size:10px;font-family:var(--mono)">● ' + o.status + '</span>' : ''}
          <span style="background:rgba(255,255,255,.1);color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.15);padding:2px 8px;border-radius:20px;font-size:10px;font-family:var(--mono)">${members.length} üye</span>
        </div>
      </div>
    </div>
    <div style="overflow-y:auto;flex:1;padding:14px;display:flex;flex-direction:column;gap:10px">
      ${o.description ? '<div style="color:var(--t2);line-height:1.6;font-size:12px;background:var(--bg3);border-radius:8px;padding:10px;border-left:3px solid ' + orgColor + '">' + o.description + '</div>' : ''}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${this._stat('Kuruluş', o.founded, 'fa-calendar')}
        ${this._stat('Merkez', o.hq||o.location, 'fa-map-marker-alt')}
        ${this._stat('Lider', leader?.name, 'fa-crown')}
        ${this._stat('Servet', o.wealth||o.budget, 'fa-dollar-sign')}
      </div>
      ${members.length ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:8px">Üyeler (' + members.length + ')</div><div style="display:flex;flex-wrap:wrap;gap:6px">' + members.slice(0,12).map(m=>'<div onclick="CharCard.show(\'' + m.id + '\',null,null,\'char\')" title="' + m.name + '" style="cursor:pointer;transition:transform .1s" onmouseenter="this.style.transform=\'scale(1.1)\'" onmouseleave="this.style.transform=\'scale(1)\'">' + (m.image ? '<img src="' + m.image + '" style="width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid ' + orgColor + '44" title="' + m.name + '">' : '<div style="width:38px;height:38px;border-radius:50%;background:' + orgColor + '22;border:2px solid ' + orgColor + '44;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:' + orgColor + '" title="' + m.name + '">' + m.name.split(' ').map(w=>w[0]).join('').slice(0,2) + '</div>') + '</div>').join('') + (members.length>12?'<div style="width:38px;height:38px;border-radius:50%;background:var(--bg4);border:2px solid var(--ln2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:var(--t2)">+' + (members.length-12) + '</div>':'') + '</div><div style="margin-top:8px;display:flex;flex-direction:column;gap:3px">' + members.slice(0,6).map(m=>'<div onclick="CharCard.show(\'' + m.id + '\',null,null,\'char\')" style="display:flex;align-items:center;gap:8px;padding:5px 8px;border-radius:7px;cursor:pointer;transition:background .1s" onmouseenter="this.style.background=\'var(--bg3)\'" onmouseleave="this.style.background=\'transparent\'"><span style="color:var(--t1);font-size:12px;flex:1">' + m.name + '</span>' + ((m.rank||m.role)?'<span style="color:' + orgColor + ';font-size:10px;font-family:var(--mono)">' + (m.rank||m.role) + '</span>':'') + '</div>').join('') + (members.length>6?'<div style="color:var(--t3);font-size:11px;padding:4px 8px">+' + (members.length-6) + ' daha üye...</div>':'') + '</div></div>' : ''}
      ${o.notes ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Notlar</div><div style="color:var(--t2);font-size:12px;background:var(--bg3);border-radius:8px;padding:10px;line-height:1.6">' + o.notes + '</div></div>' : ''}
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--ln);display:flex;gap:6px;flex-shrink:0;background:var(--bg2)">
      <button onclick="CharCard.openInDB('${o.id}','organization')" style="flex:1;padding:8px;background:var(--bg4);border:1px solid var(--ln2);color:var(--t1);border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px" onmouseenter="this.style.background='var(--bg5)'" onmouseleave="this.style.background='var(--bg4)'"><i class="fas fa-external-link-alt" style="font-size:10px"></i>DB'de Aç</button>
    </div>`;
  },

  // ── Mülk Kartı ──────────────────────────────────────
  _propCard(p) {
    const owner = S.ci?.get(p.owner_id) || S.chars?.find(c => String(c.id) === String(p.owner_id));
    const img = p.image || p.photo;
    const heroBg = img
      ? 'background:url(\'' + img + '\') center/cover;min-height:150px;'
      : 'background:linear-gradient(135deg,rgba(155,111,212,.2),rgba(155,111,212,.05));min-height:120px;display:flex;align-items:center;justify-content:center;';
    return `
    <div style="${heroBg}position:relative;border-radius:16px 16px 0 0;overflow:hidden;flex-shrink:0">
      ${img ? '<div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.1),rgba(0,0,0,.7))"></div>' : '<div style="font-size:56px;opacity:.25">🏠</div>'}
      <button onclick="CharCard.hide()" style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.15);color:#fff;cursor:pointer;font-size:14px;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center">✕</button>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 14px">
        <div style="font-size:16px;font-weight:700;color:#fff;text-shadow:0 1px 4px #0008">${p.name}</div>
        <div style="display:flex;gap:6px;margin-top:4px">
          ${p.type ? '<span style="background:rgba(155,111,212,.3);color:#c084fc;border:1px solid rgba(155,111,212,.4);padding:2px 8px;border-radius:20px;font-size:10px;font-family:var(--mono)">' + p.type + '</span>' : ''}
        </div>
      </div>
    </div>
    <div style="overflow-y:auto;flex:1;padding:14px;display:flex;flex-direction:column;gap:10px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${this._stat('Konum', p.address||p.location, 'fa-map-marker-alt')}
        ${this._stat('Fiyat', p.price||p.rent, 'fa-dollar-sign')}
        ${this._stat('Alan', p.area||p.size, 'fa-expand')}
        ${this._stat('Durum', p.status, 'fa-info-circle')}
      </div>
      ${p.description ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Açıklama</div><div style="color:var(--t2);line-height:1.6;font-size:12px;background:var(--bg3);border-radius:8px;padding:10px">' + p.description + '</div></div>' : ''}
      ${owner ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Sahip</div><div onclick="CharCard.show(\'' + owner.id + '\',null,null,\'char\')" style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg3);border:1px solid var(--ln);border-radius:8px;cursor:pointer;transition:background .12s" onmouseenter="this.style.background=\'var(--bg4)\'" onmouseleave="this.style.background=\'var(--bg3)\'">' + (owner.image?'<img src="' + owner.image + '" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--ln2)">':'<div style="width:36px;height:36px;border-radius:50%;background:var(--bg4);border:2px solid var(--ln2);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--t1)">' + (owner.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2) + '</div>') + '<div><div style="font-size:13px;font-weight:600;color:var(--t0)">' + owner.name + '</div></div><i class="fas fa-chevron-right" style="margin-left:auto;color:var(--t3);font-size:10px"></i></div></div>' : ''}
      ${p.notes ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Notlar</div><div style="color:var(--t2);font-size:12px;background:var(--bg3);border-radius:8px;padding:10px;line-height:1.6">' + p.notes + '</div></div>' : ''}
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--ln);display:flex;gap:6px;flex-shrink:0;background:var(--bg2)">
      <button onclick="CharCard.openInDB('${p.id}','property')" style="flex:1;padding:8px;background:var(--bg4);border:1px solid var(--ln2);color:var(--t1);border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px" onmouseenter="this.style.background='var(--bg5)'" onmouseleave="this.style.background='var(--bg4)'"><i class="fas fa-external-link-alt" style="font-size:10px"></i>DB'de Aç</button>
      <button onclick="const inp=document.getElementById('msg-input');if(inp){inp.value+='[Mülk:${(p.name||'').replace(/'/g,"\\'")}] ';inp.focus();}CharCard.hide();" style="flex:1;padding:8px;background:rgba(155,111,212,.15);border:1px solid rgba(155,111,212,.3);color:var(--pu);border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px"><i class="fas fa-tag" style="font-size:10px"></i>Mesaja Etiketle</button>
    </div>`;
  },

  // ── Ekipman Kartı ───────────────────────────────────
  _equipCard(e) {
    const owner = S.ci?.get(e.owner_id) || S.chars?.find(c => String(c.id) === String(e.owner_id));
    return `
    <div style="background:linear-gradient(135deg,rgba(77,184,128,.2),rgba(77,184,128,.05));min-height:100px;position:relative;border-radius:16px 16px 0 0;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:14px">
      <div style="font-size:52px;opacity:.25">📦</div>
      <button onclick="CharCard.hide()" style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.15);color:#fff;cursor:pointer;font-size:14px;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center">✕</button>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:12px 14px">
        <div style="font-size:16px;font-weight:700;color:#fff">${e.name}</div>
        ${e.type ? '<span style="background:rgba(77,184,128,.2);color:#4db880;border:1px solid rgba(77,184,128,.4);padding:2px 8px;border-radius:20px;font-size:10px;font-family:var(--mono)">' + e.type + '</span>' : ''}
      </div>
    </div>
    <div style="overflow-y:auto;flex:1;padding:14px;display:flex;flex-direction:column;gap:10px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${this._stat('Kategori', e.category, 'fa-tag')}
        ${this._stat('Durum', e.status||e.condition, 'fa-info-circle')}
        ${this._stat('Seri No', e.serial, 'fa-barcode')}
        ${this._stat('Değer', e.value||e.price, 'fa-dollar-sign')}
      </div>
      ${e.description ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Açıklama</div><div style="color:var(--t2);line-height:1.6;font-size:12px;background:var(--bg3);border-radius:8px;padding:10px">' + e.description + '</div></div>' : ''}
      ${owner ? '<div><div style="font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;color:var(--t3);text-transform:uppercase;margin-bottom:6px">Sahip</div><div onclick="CharCard.show(\'' + owner.id + '\',null,null,\'char\')" style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg3);border:1px solid var(--ln);border-radius:8px;cursor:pointer"><div style="flex:1;font-size:13px;font-weight:600;color:var(--t0)">' + owner.name + '</div><i class="fas fa-chevron-right" style="color:var(--t3);font-size:10px"></i></div></div>' : ''}
    </div>
    <div style="padding:10px 14px;border-top:1px solid var(--ln);display:flex;gap:6px;flex-shrink:0;background:var(--bg2)">
      <button onclick="const inp=document.getElementById('msg-input');if(inp){inp.value+='[Ekipman:${(e.name||'').replace(/'/g,"\\'")}] ';inp.focus();}CharCard.hide();" style="flex:1;padding:8px;background:rgba(77,184,128,.15);border:1px solid rgba(77,184,128,.3);color:#4db880;border-radius:8px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;justify-content:center;gap:5px"><i class="fas fa-tag" style="font-size:10px"></i>Mesaja Etiketle</button>
    </div>`;
  },

  // ── Generic ─────────────────────────────────────────
  _genericCard(e, type) {
    const entries = Object.entries(e).filter(([k,v]) => v && typeof v !== 'object' && !['id','created_at','updated_at'].includes(k));
    return `
    <div style="background:var(--bg3);border-radius:16px 16px 0 0;padding:20px 14px 14px;border-bottom:1px solid var(--ln);position:relative;flex-shrink:0">
      <button onclick="CharCard.hide()" style="position:absolute;top:10px;right:10px;background:rgba(255,255,255,.07);border:1px solid var(--ln2);color:var(--t2);cursor:pointer;font-size:14px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center">✕</button>
      <div style="font-size:16px;font-weight:700;color:var(--t0)">${e.name||e.title||type}</div>
    </div>
    <div style="overflow-y:auto;flex:1;padding:14px;display:flex;flex-direction:column;gap:4px">
      ${entries.map(([k,v]) => this._row(k, String(v))).join('')}
    </div>`;
  },

  _emptyCard(id, type) {
    const typeNames = {char:'Karakter', vehicle:'Araç', org:'Organizasyon', prop:'Mülk', equip:'Ekipman'};
    return `
    <div style="padding:20px 14px;background:var(--bg3);border-radius:16px 16px 0 0;border-bottom:1px solid var(--ln);position:relative;flex-shrink:0">
      <button onclick="CharCard.hide()" style="position:absolute;top:10px;right:10px;background:none;border:none;color:var(--t3);cursor:pointer;font-size:18px">✕</button>
    </div>
    <div style="padding:32px 20px;text-align:center;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px">
      <div style="font-size:36px;opacity:.4">🔍</div>
      <div style="color:var(--t1);font-weight:600;font-size:14px">${typeNames[type]||'Varlık'} bulunamadı</div>
      <div style="color:var(--t3);font-size:11px;font-family:var(--mono)">ID: ${id}</div>
      <button onclick="CharCard.hide()" style="margin-top:8px;padding:7px 18px;background:var(--bg4);border:1px solid var(--ln2);border-radius:8px;color:var(--t2);cursor:pointer;font-size:12px">Kapat</button>
    </div>`;
  },

  // ── Helpers ─────────────────────────────────────────
  _stat(label, value, icon) {
    if (!value && value !== 0) return '';
    return '<div style="background:var(--bg3);border:1px solid var(--ln);border-radius:8px;padding:8px 10px"><div style="display:flex;align-items:center;gap:5px;margin-bottom:3px"><i class="fas ' + icon + '" style="font-size:9px;color:var(--t3);width:10px"></i><span style="font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.06em;text-transform:uppercase">' + label + '</span></div><div style="color:var(--t0);font-size:12px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + value + '</div></div>';
  },

  _row(label, value) {
    if (!value && value !== 0) return '';
    return '<div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid var(--ln)"><span style="color:var(--t3);min-width:80px;flex-shrink:0;font-size:11px">' + label + '</span><span style="color:var(--t1);flex:1;font-size:12px">' + value + '</span></div>';
  },

  openInDB(id, type) {
    const base = 'https://cesurakincan25-design.github.io/NYC_DB/';
    window.open(base + '?type=' + type + '&id=' + id, '_blank');
  }
};
window.CharCard = CharCard;

/* ═══ OBSERVER AI ════════════════════════════════════════ */
/* ═══ RP TIME MANAGER ═══════════════════════════════════════════════════════
   Pure JS — no AI per message. Each room has independent RP timeline.
   Stored in Firebase: rp_room_time/{roomId}  (single doc per room)
   Modes: 'auto' (every message), 'manual' (user controls), 'semi' (auto but pauseable)
   ══════════════════════════════════════════════════════════════════════════ */
const RpTime={
  _state:{},   // roomId → {rp_year,rp_month,rp_day,rp_hour,rp_minute,tz,mode,paused,time_scale}
  _DEFAULT:{rp_year:2025,rp_month:3,rp_day:15,rp_hour:20,rp_minute:0,tz:'EST',mode:'auto',paused:false,time_scale:1},

  // Returns compact RP time string: "2025-03-15 20:00 EST"
  fmt(st){
    const y=st.rp_year,mo=String(st.rp_month).padStart(2,'0'),d=String(st.rp_day).padStart(2,'0');
    const h=String(st.rp_hour).padStart(2,'0'),m=String(st.rp_minute).padStart(2,'0');
    return `${y}-${mo}-${d} ${h}:${m} ${st.tz}`;
  },

  // Returns human-readable display: "15 Mar 2025 · 20:00 EST"
  display(st){
    const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const mo=MONTHS[(st.rp_month||1)-1]||'Jan';
    const h=String(st.rp_hour||0).padStart(2,'0'),m=String(st.rp_minute||0).padStart(2,'0');
    return `${st.rp_day||1} ${mo} ${st.rp_year||2025} · ${h}:${m} ${st.tz||'EST'}`;
  },

  // Advance time based on message content length
  // Thresholds tuned for RP-style long messages (emotes, narration)
  // ~400 chars = typical RP action; ~800+ = detailed emote/scene
  _advance(st,content=''){
    if(st.mode==='manual')return st;
    if(st.mode==='semi'&&st.paused)return st;
    const len=content.trim().length;
    let mins=1; // baseline: short OOC or tiny reply
    if(len>800)mins=Math.floor(20+Math.random()*11);  // 20-30 min (büyük sahne)
    else if(len>400)mins=Math.floor(12+Math.random()*8); // 12-20 min (normal emote)
    else if(len>150)mins=Math.floor(5+Math.random()*6);  // 5-10 min (kısa emote)
    else if(len>50)mins=Math.floor(2+Math.random()*3);   // 2-4 min (diyalog satırı)
    mins=Math.round(mins*(st.time_scale||1));
    let total=st.rp_hour*60+st.rp_minute+mins;
    const days=Math.floor(total/1440);total%=1440;
    const newState={...st,rp_hour:Math.floor(total/60),rp_minute:total%60};
    if(days>0){
      let day=st.rp_day+days,month=st.rp_month,year=st.rp_year;
      const daysInMonth=[0,31,28,31,30,31,30,31,31,30,31,30,31];
      const dim=daysInMonth[month]+(month===2&&((year%4===0&&year%100!==0)||year%400===0)?1:0);
      while(day>dim){day-=dim;month++;if(month>12){month=1;year++;}}
      newState.rp_day=day;newState.rp_month=month;newState.rp_year=year;
    }
    return newState;
  },

  // Load state for a room from Firebase (or use default)
  async load(roomId){
    if(this._state[roomId])return this._state[roomId];
    try{
      const {db,fs}=await _fbReady();
      const snap=await fs.getDoc(fs.doc(db,'rp_room_time',String(roomId)));
      this._state[roomId]=snap.exists()?{...this._DEFAULT,...snap.data()}:{...this._DEFAULT};
    }catch(e){this._state[roomId]={...this._DEFAULT};}
    return this._state[roomId];
  },

  // Save state to Firebase
  async _save(roomId,st){
    try{
      const {db,fs}=await _fbReady();
      await fs.setDoc(fs.doc(db,'rp_room_time',String(roomId)),{...st,last_updated_at:new Date().toISOString()},{merge:true});
    }catch(e){console.warn('[RpTime] Save failed:',e.message);}
  },

  // Called by RP.send() — advances time and returns rp_time string to embed in message
  async onMessage(roomId,content){
    const st=await this.load(roomId);
    const newSt=this._advance(st,content);
    this._state[roomId]=newSt;
    this._save(roomId,newSt); // fire-and-forget
    this._updateUI(roomId,newSt);
    return this.fmt(newSt);
  },

  // Get current RP time string (for OAI/DM context injection)
  get(roomId){
    const st=this._state[roomId];
    return st?this.fmt(st):null;
  },

  // Manual time set
  async set(roomId,{year,month,day,hour,minute,tz,mode,paused,time_scale}={}){
    const st=await this.load(roomId);
    const newSt={...st};
    if(year!==undefined)newSt.rp_year=parseInt(year);
    if(month!==undefined)newSt.rp_month=parseInt(month);
    if(day!==undefined)newSt.rp_day=parseInt(day);
    if(hour!==undefined)newSt.rp_hour=parseInt(hour);
    if(minute!==undefined)newSt.rp_minute=parseInt(minute);
    if(tz!==undefined)newSt.tz=tz;
    if(mode!==undefined)newSt.mode=mode;
    if(paused!==undefined)newSt.paused=paused;
    if(time_scale!==undefined)newSt.time_scale=parseFloat(time_scale)||1;
    this._state[roomId]=newSt;
    await this._save(roomId,newSt);
    this._updateUI(roomId,newSt);
    toast(`Zaman güncellendi: ${this.display(newSt)}`,'success');
  },

  // Toggle pause (semi mode)
  async togglePause(roomId){
    const st=await this.load(roomId);
    await this.set(roomId,{paused:!st.paused});
    toast(st.paused?'Zaman akışı devam ediyor':'Zaman akışı duraklatıldı','info');
  },

  // Update the time display in the UI header
  _updateUI(roomId,st){
    if(roomId!==S.roomId)return;
    const el=document.getElementById('rp-time-display');
    if(el)el.textContent=this.display(st);
    const pill=document.getElementById('rp-time-pill');
    if(pill){
      pill.title=`Mod: ${st.mode}${st.paused?' (duraklı)':''}`;
      pill.className='rp-time-pill'+(st.mode==='manual'?' rpt-manual':st.paused?' rpt-paused':'');
    }
  },

  // Initialize when room loads
  async initRoom(roomId){
    const st=await this.load(roomId);
    this._updateUI(roomId,st);
    return st;
  },

  // Open the time manager modal
  openModal(roomId){
    const st=this._state[roomId]||this._DEFAULT;
    document.getElementById('rtm-year').value=st.rp_year;
    document.getElementById('rtm-month').value=st.rp_month;
    document.getElementById('rtm-day').value=st.rp_day;
    document.getElementById('rtm-hour').value=st.rp_hour;
    document.getElementById('rtm-minute').value=st.rp_minute;
    document.getElementById('rtm-tz').value=st.tz||'EST';
    document.getElementById('rtm-mode').value=st.mode||'auto';
    document.getElementById('rtm-scale').value=st.time_scale||1;
    OM('m-rp-time');
  },
  // Parse flexible time input and return {rp_time_string, newSt} or null if unrecognised
  // Patterns handled:
  //   "22:30"           → keep date, set hour/min
  //   "22:30 EST"       → keep date, set hour/min + tz
  //   "+1h" "+90m"      → relative minute/hour offset from currentSt
  //   "-30m" "-2h"      → negative offset
  //   "+1d" "-1d"       → day offset only
  //   "+1d 22:30"       → day offset AND set time
  //   "+1d 22:30 EST"   → day offset, set time + tz
  //   "2025-03-15 22:30 EST" → full override (existing format)
  // Returns null if nothing matched (caller should use raw string as-is)
  _parseInput(rawStr, currentSt){
    const s=rawStr.trim();
    const st={...currentSt};

    // Helper: apply minute offset with day rollover (reuses _advance calendar logic)
    const applyMins=(base,mins)=>{
      let total=base.rp_hour*60+base.rp_minute+mins;
      let dayDelta=0;
      // Handle negative wrap: go back to previous day(s)
      while(total<0){total+=1440;dayDelta--;}
      dayDelta+=Math.floor(total/1440);total%=1440;
      const out={...base,rp_hour:Math.floor(total/60),rp_minute:total%60};
      if(dayDelta!==0){
        let day=base.rp_day+dayDelta,month=base.rp_month,year=base.rp_year;
        const daysInMonth=[0,31,28,31,30,31,30,31,31,30,31,30,31];
        const leap=m=>daysInMonth[m]+(m===2&&((year%4===0&&year%100!==0)||year%400===0)?1:0);
        while(day>leap(month)){day-=leap(month);month++;if(month>12){month=1;year++;}}
        while(day<1){month--;if(month<1){month=12;year--;}day+=leap(month);}
        out.rp_day=day;out.rp_month=month;out.rp_year=year;
      }
      return out;
    };

    // Helper: apply day offset
    const applyDays=(base,d)=>applyMins(base,d*1440);

    // 1. Full format: "YYYY-MM-DD HH:MM TZ"
    const fullRe=/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})(?:\s+([A-Z]{2,5}))?$/;
    let m=s.match(fullRe);
    if(m){
      const newSt={...st,rp_year:+m[1],rp_month:+m[2],rp_day:+m[3],rp_hour:+m[4],rp_minute:+m[5]};
      if(m[6])newSt.tz=m[6];
      return{rp_time_string:this.fmt(newSt),newSt};
    }

    // 2. Relative: optional day part, optional time part
    //    e.g. "+1d", "-1d", "+1d 22:30", "+1d 22:30 EST", "+2h", "-30m", "+90m"
    const relRe=/^([+-]\d+)([dhm])(?:\s+(\d{1,2}):(\d{2})(?:\s+([A-Z]{2,5}))?)?$/;
    m=s.match(relRe);
    if(m){
      const n=parseInt(m[1]),unit=m[2];
      let newSt=st;
      if(unit==='d')newSt=applyDays(st,n);
      else if(unit==='h')newSt=applyMins(st,n*60);
      else if(unit==='m')newSt=applyMins(st,n);
      if(m[3]!==undefined){newSt={...newSt,rp_hour:+m[3],rp_minute:+m[4]};}
      if(m[5])newSt.tz=m[5];
      return{rp_time_string:this.fmt(newSt),newSt};
    }

    // 3. Time-only: "22:30" or "22:30 EST"
    const timeRe=/^(\d{1,2}):(\d{2})(?:\s+([A-Z]{2,5}))?$/;
    m=s.match(timeRe);
    if(m){
      const newSt={...st,rp_hour:+m[1],rp_minute:+m[2]};
      if(m[3])newSt.tz=m[3];
      return{rp_time_string:this.fmt(newSt),newSt};
    }

    // No pattern matched
    return null;
  },

  // Parse input, advance room state in memory + Firebase, update UI, return rp_time string
  async _parseAndApply(roomId,rawStr){
    const st=await this.load(roomId);
    const parsed=this._parseInput(rawStr,st);
    if(!parsed){
      // Unrecognised — use raw string as-is (backward compat), don't touch state
      return rawStr;
    }
    const{rp_time_string,newSt}=parsed;
    this._state[roomId]=newSt;
    this._save(roomId,newSt); // fire-and-forget
    this._updateUI(roomId,newSt);
    return rp_time_string;
  },

  async saveModal(){
    const roomId=S.roomId;if(!roomId)return;
    const st=this._state[roomId]||this._DEFAULT;
    const newYear=parseInt(document.getElementById('rtm-year').value);
    const newMonth=parseInt(document.getElementById('rtm-month').value);
    const newDay=parseInt(document.getElementById('rtm-day').value);
    const newMode=document.getElementById('rtm-mode').value;
    const newScale=parseFloat(document.getElementById('rtm-scale').value)||1;
    // Failsafe — tarih değişikliği veya mod değişikliği kritik
    const dateChanged=(newYear!==st.rp_year||newMonth!==st.rp_month||newDay!==st.rp_day);
    const modeChanged=newMode!==st.mode;
    const scaleChanged=newScale!==st.time_scale;
    if(dateChanged||modeChanged||scaleChanged){
      const warnings=[];
      if(dateChanged)warnings.push(`📅 Tarih: ${st.rp_day}/${st.rp_month}/${st.rp_year} → ${newDay}/${newMonth}/${newYear}`);
      if(modeChanged)warnings.push(`⚙️ Mod: ${st.mode} → ${newMode}`);
      if(scaleChanged)warnings.push(`⏩ Zaman çarpanı: ${st.time_scale||1}× → ${newScale}×`);
      if(!confirm(`⚠️ RP Zaman Değişikliği\n\n${warnings.join('\n')}\n\nBu değişiklikler tüm sonraki mesajları etkiler. Devam edilsin mi?`))return;
    }
    await this.set(roomId,{
      year:newYear,month:newMonth,day:newDay,
      hour:document.getElementById('rtm-hour').value,
      minute:document.getElementById('rtm-minute').value,
      tz:document.getElementById('rtm-tz').value,
      mode:newMode,
      time_scale:newScale,
    });
    CM('m-rp-time');
  },
};

const OAI={
  running:false,
  _worldSnapshot:null, // one-time compact world context, built on start()
  stats:{runs:0,msgs:0,sums:0,incs:0,mems:0,errors:0,lastRun:null},
  CFG:{BATCH_WINDOW_MS:300000,MIN_BATCH:20,MAX_BATCH:50,INACTIVITY_MS:300000,DRY_RUN:false,WRITE_SUMMARIES:true,WRITE_INCIDENTS:true,WRITE_MEMORIES:true,WRITE_REL_CHANGES:true,MIN_CONFIDENCE:0.4},
  Batcher:{
    buf:[],ft:null,it:null,proc:false,
    ingest(msgs){
      if(!OAI.running)return;
      if(OAI._sessionOnlyMode) return; // session-only modda gerçek zamanlı işleme kapalı
      this.buf.push(...msgs);
      if(this.buf.length>=OAI.CFG.MAX_BATCH){this.flush('full');return;}
      if(!this.ft)this.ft=setTimeout(()=>this.flush('window'),OAI.CFG.BATCH_WINDOW_MS);
      clearTimeout(this.it);this.it=setTimeout(()=>this.flush('inact'),OAI.CFG.INACTIVITY_MS);
    },
    async flush(reason){
      clearTimeout(this.ft);this.ft=null;
      if(this.proc||this.buf.length<OAI.CFG.MIN_BATCH)return;
      const batch=this.buf.splice(0,OAI.CFG.MAX_BATCH);this.proc=true;
      try{await OAI.process(batch);}catch(e){console.error('[OAI]',e);}
      finally{this.proc=false;}
    }
  },
  _buildWorldSnapshot(){
    // Compact one-time NYC_DB snapshot — only built once per session
    const chars=S.chars.filter(c=>c.status!=='Deceased').map(c=>{
      const org=S.oi.get((c.organizations||[])[0]||c.organization);
      return `${c.id}|${c.name}${c.alias?'|'+c.alias:''}|${org?.name||'none'}|${c.status||'active'}|${c.role||''}`;
    });
    const orgs=S.orgs.map(o=>`${o.id}|${o.name}|${o.type||''}|${o.status||''}`);
    // Faction / notable locations / vehicles from raw DB if available
    const factions=(S._db?.factions||[]).map(f=>`${f.id}|${f.name}|${f.type||''}`);
    const locs=(S._db?.locations||[]).slice(0,30).map(l=>`${l.id||l.name}|${l.name}|${l.type||''}`);
    return [
      '=== NYC_DB WORLD SNAPSHOT (session start) ===',
      `CHARS(${chars.length}): `+chars.join(' / '),
      `ORGS(${orgs.length}): `+orgs.join(' / '),
      factions.length?`FACTIONS(${factions.length}): `+factions.join(' / '):'',
      locs.length?`LOCATIONS(${locs.length}): `+locs.join(' / '):'',
      '=== END SNAPSHOT ==='
    ].filter(Boolean).join('\n');
  },
  start(){
    if(this.running)return;this.running=true;
    // Build world snapshot once from already-loaded S.chars / S.orgs
    if(!this._worldSnapshot&&S.chars.length){
      this._worldSnapshot=this._buildWorldSnapshot();
      console.log(`[OAI] World snapshot built — ${S.chars.length} chars, ${S.orgs.length} orgs`);
    }
    Adm.setSt('active','Active');
    const p=document.getElementById('ai-pill');p.classList.add('on');document.getElementById('ai-pill-txt').textContent='Observer AI: ON';
    toast('Observer AI başlatıldı','success');
    // Firestore'a OAI state yaz — diğer kullanıcılara senkronize et
    _fbReady().then(({db,fs})=>{
      const {doc,setDoc}=fs;
      setDoc(doc(db,'rp_config','oai_state'),{running:true,sessionOnly:!!this._sessionOnlyMode,startedBy:S.user?.name||'admin',startedAt:new Date().toISOString()}).catch(()=>{});
    });
  },
  stop(){
    this.running=false;this.Batcher.buf=[];clearTimeout(this.Batcher.ft);clearTimeout(this.Batcher.it);
    Adm.setSt('','Offline');
    const p=document.getElementById('ai-pill');p.classList.remove('on','thinking');document.getElementById('ai-pill-txt').textContent='Observer AI: OFF';
    // Firestore'a OAI state yaz — diğer kullanıcılara senkronize et
    _fbReady().then(({db,fs})=>{
      const {doc,setDoc}=fs;
      setDoc(doc(db,'rp_config','oai_state'),{running:false,stoppedBy:S.user?.name||'admin',stoppedAt:new Date().toISOString()}).catch(()=>{});
    });
  },
  async process(messages){
    this.stats.runs++;this.stats.msgs+=messages.length;this.stats.lastRun=new Date().toISOString();
    const p=document.getElementById('ai-pill');p.classList.remove('on');p.classList.add('thinking');document.getElementById('ai-pill-txt').textContent='Observer AI…';
    try{
      // Extract only chars/orgs actually present in this batch — token efficient
      const batchCharIds=new Set(messages.map(m=>m.char_id).filter(Boolean));
      const batchOrgIds=new Set(messages.map(m=>m.org_id).filter(Boolean));
      const involvedChars=S.chars.filter(c=>batchCharIds.has(c.id)||batchCharIds.has(String(c.id)));
      const involvedOrgs=S.orgs.filter(o=>batchOrgIds.has(o.id)||batchOrgIds.has(String(o.id)));
      // Also include orgs of involved chars (context)
      involvedChars.forEach(c=>{
        const oid=(c.organizations||[])[0]||c.organization;
        if(oid){const o=S.oi.get(oid);if(o&&!involvedOrgs.find(x=>x.id===o.id))involvedOrgs.push(o);}
      });
      const charLines=involvedChars.map(c=>{const o=S.oi.get((c.organizations||[])[0]||c.organization);return `• ${c.name} [${c.id}]${c.alias?` aka "${c.alias}"`:''}${o?` — ${o.name}`:''}${c.status&&c.status!=='Active'?` [${c.status}]`:''}`;}).join('\n');
      const orgLines=involvedOrgs.map(o=>`• ${o.name} [${o.id}]${o.type?` (${o.type})`:''}${o.status?` [${o.status}]`:''}`).join('\n');
      // NSFW mesajlar AI'a gönderilmez
      const tr=messages.map(m=>{
        const t=new Date(m.created_at).toISOString().slice(11,16);
        const rpT=m.rp_time?` {${m.rp_time}}`:'';
        const body=m.is_nsfw?'[Hassas içerik — gizli]':(m.content||'');
        return `[${t}${rpT}] ${m.char_name}${m.char_alias?` "${m.char_alias}"`:''}${m.org_name?` [${m.org_name}]`:''}: ${body}`;
      }).join('\n');
      const worldCtx=this._worldSnapshot?`\nWORLD CONTEXT (NYC_DB — read only, for reference):\n${this._worldSnapshot}\n`:'';
      const _kanonTxt=(window.KanonDB ? await KanonDB.buildObserverContext() : '')||'';
      const kanonObsCtx=_kanonTxt?`\nCANON KNOWLEDGE BASE (character relationships, factions, current state — use for context when analyzing RP messages):\n${_kanonTxt}\n`:'';
      const prompt=`You are NYC_DB Observer AI. Observe only. Return ONLY valid JSON.${worldCtx}${kanonObsCtx}\nMESSAGE FORMAT NOTE: *text* = IC emote/action (purple italic), (( text )) = OOC comment (ignore for IC analysis), **text** = bold, _text_ = italic, ~~text~~ = strikethrough, [color|text] = colored text, @name = player mention. Strip formatting marks when extracting character dialogue/actions for summaries.\nINVOLVED CHARACTERS:\n${charLines||'(unknown)'}\nINVOLVED ORGANIZATIONS:\n${orgLines||'(none)'}\nTRANSCRIPT (${messages.length} messages):\n${tr}\nRespond:{"session_summary":{"title":"","summary":"","involved_chars":[],"involved_orgs":[],"significance":"low"},"incidents":[{"title":"","incident_type":"confrontation","severity":"low","description":"","location_name":"","involved_chars":[],"involved_orgs":[],"source_confidence":0.0}],"character_memories":[{"char_id":"","char_name":"","memory_type":"event","title":"","content":"","emotional_tag":"neutral","importance":50,"about_chars":[]}],"relationship_changes":[{"entity_a_id":"","entity_a_name":"","entity_a_type":"character","entity_b_id":"","entity_b_name":"","entity_b_type":"character","change_type":"neutral","direction":"mutual","trust_delta":0,"description":""}],"flags":{"requires_admin_review":false,"review_reason":""}}`;
      // Shared Gemini REST — Firebase AI Logic artık kullanılmıyor
      const parsed = await _geminiGenerate(prompt, { json:true, temperature:0.2, topP:0.8, maxOutputTokens:2048 });
      if(!this.CFG.DRY_RUN){
        let sumId=null;
        if(this.CFG.WRITE_SUMMARIES&&parsed.session_summary){try{const rows=await DB.post('ai_summaries',{summary_type:'rp_session',title:parsed.session_summary.title,content:parsed.session_summary.summary,model_used:GEM_MDL,prompt_version:'phase3_v1',source_type:'rp_messages',source_ids:messages.map(m=>m.id),linked_chars:parsed.session_summary.involved_chars,linked_orgs:parsed.session_summary.involved_orgs,linked_room_id:messages[0]?.room_id||null,covers_from:messages[0]?.created_at,covers_to:messages[messages.length-1]?.created_at,is_published:false,is_reviewed:false});sumId=rows[0]?.id;this.stats.sums++;}catch(e){}}
        if(this.CFG.WRITE_INCIDENTS&&parsed.incidents)for(const inc of parsed.incidents){if((inc.source_confidence||0)<this.CFG.MIN_CONFIDENCE)continue;try{await DB.post('incidents',{title:inc.title,incident_type:inc.incident_type,severity:inc.severity,description:inc.description,location_name:inc.location_name||'',involved_chars:inc.involved_chars||[],involved_orgs:inc.involved_orgs||[],linked_room_id:messages[0]?.room_id||null,source:'ai_agent',created_by:'observer_v1',status:'active'});this.stats.incs++;}catch(e){}}
        if(this.CFG.WRITE_MEMORIES&&parsed.character_memories)for(const mem of parsed.character_memories){try{await DB.post('character_memories',{char_id:mem.char_id,char_name:mem.char_name,memory_type:mem.memory_type,title:mem.title,content:mem.content,emotional_tag:mem.emotional_tag,importance:mem.importance||50,about_chars:mem.about_chars||[],ai_readable:true,source_type:'rp_session',source_id:sumId,experienced_at:messages[messages.length-1]?.created_at});this.stats.mems++;}catch(e){}}
        if(this.CFG.WRITE_REL_CHANGES&&parsed.relationship_changes)for(const rc of parsed.relationship_changes){try{await DB.post('relationship_changes',{...rc,ai_readable:true,source:'ai_agent'});}catch(e){}}
        try{await DB.post('ai_agent_logs',{agent_id:'observer_v1',agent_name:'NYC Observer AI',run_type:'observation',status:'success',input_msg_count:messages.length,room_id:messages[0]?.room_id||null,covers_from:messages[0]?.created_at,covers_to:messages[messages.length-1]?.created_at,summary_id:sumId,incidents_written:this.stats.incs,memories_written:this.stats.mems,rel_changes_written:0,errors:[],model_used:GEM_MDL()});}catch(e){}

        // ── Observer → DM köprüsü ──────────────────────────────────────
        // Yüksek severity incident varsa DM Engine'e önerir — onay kuyruğuna düşer
        if(window.DMEngine && parsed.incidents){
          for(const inc of parsed.incidents){
            if(!['high','critical'].includes(inc.severity)) continue;
            if((inc.source_confidence||0) < 0.6) continue;
            try{
              // DM'e incident'ı bildir: dispatch veya world event olarak kuyruğa ekle
              const incText = `${inc.title} — ${inc.description}` +
                (inc.location_name ? ` (Konum: ${inc.location_name})` : '');
              await window.DMEngine.generateDispatch(
                inc.involved_orgs?.[0] || '',
                inc.incident_type || 'general',
                incText,                         // incident → dispatch prompt'una gider
                '[OBS→DM] Observer tespit etti',
                'observer_ai'
              );
              console.log(`[OAI→DM] Incident iletildi: ${inc.title}`);
            } catch(e){ console.warn('[OAI→DM] Dispatch üretilemedi:', e.message); }
          }
        }
      }
      if(parsed.session_summary?.summary)UI.showAI('📋 '+parsed.session_summary.summary);
      // MA hook — notify MasterAgent of completed OAI run (no new Gemini call, just queued context)
      if(window.MasterAgent && parsed.session_summary?.summary){
        const oaiNote = '[OAI TAMAMLANDI] '+messages.length+' mesaj işlendi.\n'
          +'Özet: '+parsed.session_summary.summary+'\n'
          +(parsed.incidents?.length?'Olaylar: '+parsed.incidents.map(i=>i.title).join(', '):'')
          +(parsed.character_memories?.length?'\nAnılar: '+parsed.character_memories.length+' adet':'');
        MasterAgent._history.push({role:'user',parts:[{text:oaiNote}]});
        MasterAgent._history.push({role:'model',parts:[{text:'[OAI özeti alındı, hazırım.]'}]});
      }
    }catch(e){console.error('[OAI] Pipeline:',e);this.stats.errors++;}
    finally{
      if(this.running)Adm.setSt('active','Active');
      p.classList.remove('thinking');if(this.running)p.classList.add('on');
      document.getElementById('ai-pill-txt').textContent=this.running?'Observer AI: ON':'Observer AI: OFF';
      document.getElementById('last-run').textContent='Last: '+new Date().toLocaleTimeString();
      Adm.refreshFeed();Adm.updStats();
    }
  },
  async processRoom(roomId, limit=200, chunkSize=40){
    // Fetch all messages up to limit
    const msgs = await DB.get(`rp_messages?room_id=eq.${roomId}&is_deleted=eq.false&order=created_at.asc&limit=${limit}`).catch(()=>[]);
    if(!msgs.length){ toast('İşlenecek mesaj yok',''); return; }

    // Split into chunks
    const chunks = [];
    for(let i=0; i<msgs.length; i+=chunkSize) chunks.push(msgs.slice(i,i+chunkSize));
    const total = chunks.length;

    SessionProgress.show(`Session kaydediliyor… (0/${total} paket)`);

    for(let i=0; i<chunks.length; i++){
      SessionProgress.update(i+1, total, `Paket ${i+1}/${total} işleniyor…`);
      try { await this.process(chunks[i]); } catch(e){ console.error('[OAI chunk]',e); }
      // Small delay between chunks to avoid rate limits
      if(i < chunks.length-1) await new Promise(r=>setTimeout(r,1500));
    }

    SessionProgress.update(total, total, 'Tamamlandı ✓');
    setTimeout(()=>SessionProgress.hide(), 2000);
  }
};

/* ═══ SESSION PROGRESS UI ═══════════════════════════════════════════════ */
const SessionProgress = {
  _el: null,
  _bar: null,
  _txt: null,
  _pct: null,

  show(label='İşleniyor…'){
    if(this._el) this.hide();
    const el = document.createElement('div');
    el.id = 'session-progress-popup';
    el.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9990;background:var(--bg2);border:1px solid var(--ln2);border-radius:14px;padding:16px 22px;min-width:320px;max-width:480px;box-shadow:0 12px 40px rgba(0,0,0,.6);backdrop-filter:blur(8px)';
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <i class="fas fa-film" style="color:var(--ac);font-size:14px"></i>
        <span style="font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ac)">Saving Session</span>
        <span id="sp-pct" style="margin-left:auto;font-family:var(--mono);font-size:10px;color:var(--t3)">0%</span>
      </div>
      <div style="background:var(--bg4);border-radius:6px;height:6px;overflow:hidden;margin-bottom:8px">
        <div id="sp-bar" style="height:100%;width:0%;background:var(--ac);border-radius:6px;transition:width .4s ease"></div>
      </div>
      <div id="sp-label" style="font-size:11px;color:var(--t2);font-family:var(--sans)">${label}</div>
    `;
    document.body.appendChild(el);
    this._el = el;
    this._bar = el.querySelector('#sp-bar');
    this._txt = el.querySelector('#sp-label');
    this._pct = el.querySelector('#sp-pct');
    const tbar = document.getElementById('tbar');
    if(tbar){ tbar.classList.add('show'); tbar.textContent=''; }
  },

  update(done, total, label){
    const pct = total > 0 ? Math.round((done/total)*100) : 0;
    if(this._bar) this._bar.style.width = pct+'%';
    if(this._txt) this._txt.textContent = label||'';
    if(this._pct) this._pct.textContent = pct+'%';
    const tbar = document.getElementById('tbar');
    if(tbar && tbar.classList.contains('show')){
      tbar.innerHTML = `<div style="height:3px;background:var(--ac);width:${pct}%;transition:width .4s ease;border-radius:2px"></div>`;
    }
  },

  hide(){
    if(this._el){ this._el.remove(); this._el=null; this._bar=null; this._txt=null; this._pct=null; }
    const tbar = document.getElementById('tbar');
    if(tbar) tbar.classList.remove('show');
  }
};

/* ═══ ADMIN ════════════════════════════════════════════ */
const Adm={
  tab_:'summaries',feed:{summaries:[],incidents:[],memories:[],flags:[]},authed:true,
  openPanel(){this._show();},
  checkPw(){this.authed=true;CM('m-admin-login');this._show();},
  _show(){
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById('view-admin').style.display = 'flex';
    this._loadRooms();this.loadCfg();this.refreshFeed();this.updStats();
  },
  close(){
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById('view-rp').style.display = 'flex';
  },
  startObs(){OAI.start();document.getElementById('obs-start').style.display='none';document.getElementById('obs-session-start').style.display='none';document.getElementById('obs-stop').style.display='';},
  stopObs(){
    OAI._sessionOnlyMode = false;
    OAI.stop();
    document.getElementById('obs-start').style.display='';
    document.getElementById('obs-session-start').style.display='';
    document.getElementById('obs-stop').style.display='none';
  },
  startSessionObs(){
    OAI._sessionOnlyMode = true;
    OAI.start();
    document.getElementById('obs-start').style.display='none';
    document.getElementById('obs-session-start').style.display='none';
    document.getElementById('obs-stop').style.display='';
    toast('🏂 Session-only mod aktif — sadece session başlangıç/bitişinde çalışır','info');
  },
  openDBUpdate(){
    DBUpdater.openModal();
  },
  async manual(){
    const roomId=document.getElementById('trig-room').value;const limit=parseInt(document.getElementById('trig-limit').value)||20;
    if(!roomId){toast('Oda seç','warn');return;}
    const btn=document.getElementById('trig-btn');btn.disabled=true;document.getElementById('tbar').classList.add('show');
    try{await OAI.processRoom(roomId,limit);toast('Analiz tamamlandı','success');}
    catch(e){toast('Hata: '+e.message,'error');}
    finally{btn.disabled=false;document.getElementById('tbar').classList.remove('show');}
  },
  _loadRooms(){
    const sel=document.getElementById('trig-room');
    S.rooms.forEach(r=>{if(!sel.querySelector(`option[value="${r.id}"]`)){const o=document.createElement('option');o.value=r.id;o.textContent='#'+r.name;sel.appendChild(o);}});
  },
  async loadCfg(){
    // Config: Firebase observer_config/main (single doc)
    // Boolean toggles + editable text/number fields
    const BOOL_KEYS=['enabled','dry_run','write_summaries','write_incidents','write_memories','write_rel_changes'];
    const NUM_KEYS=['batch_window_ms','min_confidence','read_interval'];
    const STR_KEYS=['gemini_model'];
    try{
      const {db,fs}=await _fbReady();
      const snap=await fs.getDoc(fs.doc(db,'observer_config','main'));
      // Default config if doc doesn't exist yet
      const defaults={
        enabled:false,dry_run:false,
        write_summaries:true,write_incidents:true,write_memories:true,write_rel_changes:true,
        batch_window_ms:300000,min_confidence:0.5,read_interval:25,
        gemini_model:GEM_MDL(),
      };
      const cfg=snap.exists()?{...defaults,...snap.data()}:defaults;
      // Sync to OAI.CFG
      OAI.CFG.DRY_RUN=!!cfg.dry_run;OAI.CFG.WRITE_SUMMARIES=!!cfg.write_summaries;
      OAI.CFG.WRITE_INCIDENTS=!!cfg.write_incidents;OAI.CFG.WRITE_MEMORIES=!!cfg.write_memories;
      OAI.CFG.WRITE_REL_CHANGES=!!cfg.write_rel_changes;OAI.CFG.MIN_CONFIDENCE=cfg.min_confidence||0.5;
      if(cfg.gemini_model&&window.DM_CONFIG)window.DM_CONFIG.geminiModel=cfg.gemini_model;

      const tEl=document.getElementById('cfg-toggles');const vEl=document.getElementById('cfg-vals');
      tEl.innerHTML='';vEl.innerHTML='';

      BOOL_KEYS.forEach(key=>{
        const on=!!cfg[key];
        const el=document.createElement('div');el.className='cr';
        el.innerHTML=`<span class="ck">${key.replace(/_/g,' ')}</span><div class="toggle ${on?'on':''}" data-key="${key}" onclick="Adm.toggleCfg(this)"></div>`;
        tEl.appendChild(el);
      });
      // String fields — with confirm button, show current value
      STR_KEYS.forEach(key=>{
        const cur=cfg[key]||'';
        const el=document.createElement('div');el.className='cr';el.style.flexWrap='wrap';el.style.gap='6px';
        el.innerHTML=`<span class="ck">${key.replace(/_/g,' ')}</span><div style="display:flex;gap:6px;align-items:center"><input class="cfg-inp" data-key="${key}" data-orig="${cur}" value="${cur}" style="font-family:var(--mono);font-size:11px;background:var(--bg3);border:1px solid var(--ln);border-radius:3px;color:var(--t0);padding:3px 8px;width:170px" oninput="Adm._cfgDirty(this)"><button class="cfg-save-btn" data-key="${key}" onclick="Adm.saveCfgVal(this.previousElementSibling)" disabled style="font-family:var(--mono);font-size:10px;padding:3px 8px;border-radius:3px;border:none;background:var(--ac);color:#fff;cursor:pointer;opacity:.4">Kaydet</button><button onclick="Adm._cfgReset(this)" style="font-family:var(--mono);font-size:10px;padding:3px 6px;border-radius:3px;border:1px solid var(--ln);background:transparent;color:var(--t2);cursor:pointer">↺</button></div>`;
        vEl.appendChild(el);
      });
      // Number fields — with confirm button
      NUM_KEYS.forEach(key=>{
        const cur=cfg[key]??'';
        const el=document.createElement('div');el.className='cr';
        el.innerHTML=`<span class="ck">${key.replace(/_/g,' ')}</span><div style="display:flex;gap:6px;align-items:center"><input class="cfg-inp" type="number" data-key="${key}" data-orig="${cur}" value="${cur}" style="font-family:var(--mono);font-size:11px;background:var(--bg3);border:1px solid var(--ln);border-radius:3px;color:var(--t0);padding:3px 8px;width:100px" oninput="Adm._cfgDirty(this)"><button class="cfg-save-btn" data-key="${key}" onclick="Adm.saveCfgVal(this.previousElementSibling)" disabled style="font-family:var(--mono);font-size:10px;padding:3px 8px;border-radius:3px;border:none;background:var(--ac);color:#fff;cursor:pointer;opacity:.4">Kaydet</button><button onclick="Adm._cfgReset(this)" style="font-family:var(--mono);font-size:10px;padding:3px 6px;border-radius:3px;border:1px solid var(--ln);background:transparent;color:var(--t2);cursor:pointer">↺</button></div>`;
        vEl.appendChild(el);
      });
    }catch(e){document.getElementById('cfg-toggles').innerHTML='<div style="padding:12px;font-family:var(--mono);font-size:11px;color:var(--t3)">Config yüklenemedi: '+e.message+'</div>';}
  },
  async toggleCfg(el){
    const key=el.dataset.key,isOn=el.classList.contains('on'),nv=!isOn;
    el.classList.toggle('on');
    try{
      const {db,fs}=await _fbReady();
      await fs.setDoc(fs.doc(db,'observer_config','main'),{[key]:nv,updated_at:new Date().toISOString()},{merge:true});
      toast(`${key.replace(/_/g,' ')} → ${nv?'açık':'kapalı'}`,'success');
      const m={
        dry_run:v=>OAI.CFG.DRY_RUN=v,
        write_summaries:v=>OAI.CFG.WRITE_SUMMARIES=v,
        write_incidents:v=>OAI.CFG.WRITE_INCIDENTS=v,
        write_memories:v=>OAI.CFG.WRITE_MEMORIES=v,
        write_rel_changes:v=>OAI.CFG.WRITE_REL_CHANGES=v,
        enabled:v=>{if(!v)Adm.stopObs();},
      };
      if(m[key])m[key](nv);
    }catch(e){el.classList.toggle('on');toast('Güncelleme başarısız','error');}
  },
  // Input değişince "Kaydet" butonunu aktif et
  _cfgDirty(inp){
    const btn=inp.nextElementSibling;
    if(!btn)return;
    const changed=inp.value!==inp.dataset.orig;
    btn.disabled=!changed;btn.style.opacity=changed?'1':'0.4';
    inp.style.borderColor=changed?'var(--am)':'var(--ln)';
  },
  // ↺ Reset — orijinal değere dön
  _cfgReset(resetBtn){
    const inp=resetBtn.previousElementSibling.previousElementSibling;
    inp.value=inp.dataset.orig;
    this._cfgDirty(inp);
  },
  // Kritik field'lar onay ister, diğerleri direkt kaydeder
  async saveCfgVal(inp){
    const key=inp.dataset.key,rawVal=inp.value.trim();
    const val=inp.type==='number'?parseFloat(rawVal):rawVal;
    const orig=inp.dataset.orig;
    // Onay gerektiren kritik fieldlar
    const CRITICAL=['gemini_model'];
    if(CRITICAL.includes(key)){
      const label=key.replace(/_/g,' ');
      if(!confirm(`⚠️ Kritik ayar değişikliği\n\n"${label}" şu an: ${orig}\nYeni değer: ${val}\n\nDevam edilsin mi?`)){
        inp.value=orig;this._cfgDirty(inp);return;
      }
    }
    const btn=inp.nextElementSibling;
    if(btn){btn.disabled=true;btn.textContent='...';}
    try{
      const {db,fs}=await _fbReady();
      await fs.setDoc(fs.doc(db,'observer_config','main'),{[key]:val,updated_at:new Date().toISOString()},{merge:true});
      inp.dataset.orig=String(val);inp.style.borderColor='var(--gn)';
      setTimeout(()=>{inp.style.borderColor='var(--ln)';},1500);
      if(btn){btn.disabled=true;btn.textContent='Kaydet';btn.style.opacity='0.4';}
      toast(`${key.replace(/_/g,' ')} → ${val}`,'success');
      if(key==='gemini_model'&&window.DM_CONFIG)window.DM_CONFIG.geminiModel=val;
      if(key==='min_confidence')OAI.CFG.MIN_CONFIDENCE=val;
      if(key==='read_interval')OAI.CFG.READ_INTERVAL=val;
    }catch(e){
      if(btn){btn.disabled=false;btn.textContent='Kaydet';btn.style.opacity='1';}
      toast('Kaydedilemedi: '+e.message,'error');
    }
  },
  async refreshFeed(){
    try{
      this.feed.summaries=await DB.get('ai_summaries?summary_type=eq.rp_session&order=created_at.desc&limit=30').catch(()=>[]);
      this.feed.incidents=await DB.get('incidents?source=eq.ai_agent&order=created_at.desc&limit=30').catch(()=>[]);
      this.feed.memories=await DB.get('character_memories?ai_readable=eq.true&source_type=eq.rp_session&order=created_at.desc&limit=30').catch(()=>[]);
      this.feed.flags=await DB.get('ai_flags?status=eq.open&order=created_at.desc&limit=20').catch(()=>[]);
      const fc=this.feed.flags.length;document.getElementById('flag-bdg').textContent=fc>0?`(${fc})`:'';
    }catch(e){}
    this.renderFeed();
  },
  renderFeed(){
    const body=document.getElementById('feed-body'),data=this.feed[this.tab_]||[];
    const ta=t=>{const d=Date.now()-new Date(t).getTime();return d<60000?Math.round(d/1000)+'s':d<3600000?Math.round(d/60000)+'m':Math.round(d/3600000)+'h';};
    if(!data.length){body.innerHTML=`<div class="empty"><i class="fas fa-satellite-dish"></i><p>Henüz ${this.tab_} yok</p></div>`;return;}
    body.innerHTML='';
    if(this.tab_==='summaries')data.forEach(s=>{const el=document.createElement('div');el.className='fi';el.innerHTML=`<div class="fih"><span class="tbadge">Session</span><span class="fit">${s.title||'Başlıksız'}</span><span class="fiti">${ta(s.created_at)}</span></div><div class="fib">${(s.content||'').slice(0,280)}</div><div class="fips">${(s.linked_chars||[]).slice(0,4).map(id=>`<span class="fp ch">${id}</span>`).join('')}</div>`;body.appendChild(el);});
    else if(this.tab_==='incidents')data.forEach(i=>{const el=document.createElement('div');el.className='fi';el.innerHTML=`<div class="fih"><span class="sev sev-${i.severity}">${i.severity}</span><span class="tbadge">${i.incident_type}</span><span class="fit">${i.title}</span><span class="fiti">${ta(i.created_at)}</span></div><div class="fib">${(i.description||'').slice(0,240)}</div><div class="fips">${(i.involved_chars||[]).slice(0,4).map(id=>`<span class="fp ch">${id}</span>`).join('')}</div>`;body.appendChild(el);});
    else if(this.tab_==='memories')data.forEach(m=>{const ic=m.importance>=70?'var(--am)':m.importance>=40?'var(--ac)':'var(--t2)';const el=document.createElement('div');el.className='fi';el.innerHTML=`<div class="fih"><span class="tbadge">${m.memory_type}</span><span class="fp ch">${m.char_name}</span><span class="fit">${m.title}</span><span class="fiti">${ta(m.created_at)}</span></div><div class="fib">${(m.content||'').slice(0,200)}</div><div style="display:flex;gap:8px;margin-top:4px"><span style="font-family:var(--mono);font-size:10px;color:${ic}">imp:${m.importance}</span><span style="font-family:var(--mono);font-size:10px;color:var(--t3)">${m.emotional_tag}</span></div>`;body.appendChild(el);});
    else if(this.tab_==='flags'){
      if(!data.length){body.innerHTML='<div class="empty"><i class="fas fa-check-circle" style="color:var(--gn)"></i><p>Açık flag yok</p></div>';return;}
      data.forEach(f=>{const el=document.createElement('div');el.className='fli';el.innerHTML=`<div class="flh"><span class="flt">${f.flag_type}</span><span class="sev sev-${f.severity}">${f.severity}</span><span class="flti">${f.title}</span></div><div class="fld">${(f.description||'').slice(0,200)}</div><div class="fla"><button class="flb ack" onclick="Adm.resolveFlag(${f.id},'acknowledged')">Onayla</button><button class="flb dis" onclick="Adm.resolveFlag(${f.id},'dismissed')">Kapat</button></div>`;body.appendChild(el);});
    }
  },
  async resolveFlag(id,res){
    try{
      const {db,fs}=await _fbReady();
      await fs.updateDoc(fs.doc(db,'ai_flags',String(id)),{status:res,reviewed_at:new Date().toISOString()});
      this.feed.flags=this.feed.flags.filter(f=>f.id!==id);this.renderFeed();
      const fc=this.feed.flags.length;document.getElementById('flag-bdg').textContent=fc>0?`(${fc})`:'';
      toast(`Flag ${res}`,'success');
    }catch(e){toast('Hata','error');}
  },
  tab(el){document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('active'));el.classList.add('active');this.tab_=el.dataset.tab;this.renderFeed();},
  updStats(){
    const s=OAI.stats;
    document.getElementById('s-msg').textContent=s.msgs;document.getElementById('s-run').textContent=s.runs;
    document.getElementById('s-inc').textContent=s.incs;document.getElementById('s-mem').textContent=s.mems;
    if(s.lastRun)document.getElementById('last-run').textContent='Last: '+new Date(s.lastRun).toLocaleTimeString();
    DB.get('ai_agent_logs?order=created_at.desc&limit=15').then(rows=>{
      const el=document.getElementById('run-log');document.getElementById('run-cnt').textContent=rows.length+' runs';
      if(!rows.length){el.innerHTML='<div style="padding:12px;font-family:var(--mono);font-size:11px;color:var(--t3)">Henüz run yok</div>';return;}
      el.innerHTML='';
      rows.forEach(r=>{const ic={success:'fa-check',partial:'fa-exclamation',failed:'fa-times'};const d=document.createElement('div');d.className='ri';d.innerHTML=`<div class="ric ${r.status}"><i class="fas ${ic[r.status]||'fa-circle'}"></i></div><div class="rb"><div class="rt">${r.summary_id?'Session analiz edildi':r.run_type}</div><div class="rm"><span class="rch ac">${r.input_msg_count}msg</span>${r.incidents_written?`<span class="rch am">${r.incidents_written}inc</span>`:''} ${r.memories_written?`<span class="rch gn">${r.memories_written}mem</span>`:''}</div></div>`;el.appendChild(d);});
    }).catch(()=>{});
  },
  setSt(cls,txt){
    document.getElementById('sdot').className='sdot '+cls;
    const st=document.getElementById('stxt');st.textContent=txt;
    st.style.color={active:'var(--gn)',thinking:'var(--am)',error:'var(--rd)'}[cls]||'var(--t2)';
    if(cls==='thinking')document.getElementById('tbar').classList.add('show');else document.getElementById('tbar').classList.remove('show');
  }
};

/* ═══ TAG PICKER (manuel etiket ekleme modalı) ════════════ */
const TagPicker = {
  _type: 'Karakter',
  _TYPES: {
    'Karakter': { icon:'user',     color:'#c084fc', src:()=>(S.chars||[]).map(c=>({id:c.id,name:c.name,sub:c.alias||c.occupation||'',img:c.image||''})) },
    'Araç':     { icon:'car',      color:'#e8a74a', src:()=>(S._db?.vehicles||[]).map(v=>({id:v.id,name:v.name||v.model||v.plate,sub:v.plate||'',img:''})) },
    'Org':      { icon:'building', color:'#4a8fe2', src:()=>(S.orgs||[]).map(o=>({id:o.id,name:o.name,sub:o.type||'',img:o.logo||''})) },
    'Mülk':     { icon:'home',     color:'#9b6fd4', src:()=>(S._db?.properties||[]).map(p=>({id:p.id,name:p.name,sub:p.address||'',img:''})) },
    'Ekipman':  { icon:'box',      color:'#4db880', src:()=>(S._db?.equipments||[]).map(q=>({id:q.id,name:q.name,sub:q.type||'',img:''})) },
  },

  open() {
    OM('m-tag-picker');
    this.setType(this._type, document.querySelector(`.tag-type-btn[data-type="${this._type}"]`));
    setTimeout(()=>document.getElementById('tag-search-inp')?.focus(), 80);
  },

  setType(type, btn) {
    this._type = type;
    document.querySelectorAll('.tag-type-btn').forEach(b => {
      const t = b.dataset.type;
      const def = this._TYPES[t];
      b.classList.remove('active');
      b.style.background = '';
    });
    if (btn) {
      btn.classList.add('active');
      const def = this._TYPES[type];
      btn.style.background = `${def.color}22`;
      btn.style.borderColor = `${def.color}66`;
      btn.style.color = def.color;
    }
    const inp = document.getElementById('tag-search-inp');
    if (inp) { inp.value = ''; inp.placeholder = `${type} ara...`; }
    this.search('');
  },

  search(q) {
    const def = this._TYPES[this._type];
    if (!def) return;
    const list = def.src().filter(e => !q || e.name?.toLowerCase().includes(q.toLowerCase()) || e.sub?.toLowerCase().includes(q.toLowerCase())).slice(0, 20);
    const el = document.getElementById('tag-results');
    if (!el) return;
    if (!list.length) {
      el.innerHTML = `<div style="color:var(--t3);font-size:12px;text-align:center;padding:16px">Sonuç bulunamadı</div>`;
      return;
    }
    el.innerHTML = list.map(e => {
      const avatar = e.img
        ? `<img src="${e.img}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid var(--ln2)" onerror="this.style.display='none'">`
        : `<div style="width:32px;height:32px;border-radius:50%;background:${def.color}22;display:flex;align-items:center;justify-content:center;font-size:14px;color:${def.color}"><i class="fas fa-${def.icon}"></i></div>`;
      return `<div class="tag-result-row" onclick="TagPicker.insert('${e.name.replace(/'/g,"\\'")}')">
        ${avatar}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.name}</div>
          ${e.sub ? `<div style="font-size:11px;color:var(--t3)">${e.sub}</div>` : ''}
        </div>
        <span style="font-size:10px;color:${def.color};font-family:var(--mono);opacity:.7">${this._type}</span>
      </div>`;
    }).join('');
  },

  insert(name) {
    const tag = `[${this._type}:${name}]`;
    const inp = document.getElementById('msg-input');
    if (inp) {
      const cur = inp.selectionStart || inp.value.length;
      const before = inp.value.slice(0, cur);
      const after  = inp.value.slice(cur);
      inp.value = before + (before && !before.endsWith(' ') ? ' ' : '') + tag + (after && !after.startsWith(' ') ? ' ' : '') + after;
      inp.focus();
      const pos = before.length + (before && !before.endsWith(' ') ? 1 : 0) + tag.length + 1;
      inp.setSelectionRange(pos, pos);
      inp.style.height = 'auto';
      inp.style.height = Math.min(inp.scrollHeight, 160) + 'px';
    }
    CM('m-tag-picker');
  },
};
window.TagPicker = TagPicker;

/* ═══ AUTOCOMPLETE (tag tamamlama) ═══════════════════════ */
const Autocomplete = {
  visible: false,
  _enabled: true,   // mobilde kapatılabilir
  _items: [],
  _sel: -1,
  _el: null,
  _inp: null,
  _triggerStart: -1,

  toggleEnabled() {
    this._enabled = !this._enabled;
    const btn = document.getElementById('ac-toggle-btn');
    if (btn) {
      btn.style.color = this._enabled ? 'var(--ac)' : 'var(--t3)';
      btn.style.textDecoration = this._enabled ? '' : 'line-through';
      btn.title = this._enabled ? 'Otomatik tamamlama AÇIK (kapat)' : 'Otomatik tamamlama KAPALI (aç)';
    }
    if (!this._enabled) this.hide();
    toast(`Otomatik tamamlama ${this._enabled ? 'açıldı' : 'kapatıldı'}`, this._enabled ? 'success' : '');
  },

  // Tag tipleri ve arama kaynakları
  _TYPES: [
    { label:'Karakter', key:'Karakter', icon:'user',     color:'#c084fc', src:()=>(S.chars||[]).map(c=>({name:c.name,sub:c.alias||'',id:c.id})) },
    { label:'Araç',     key:'Araç',     icon:'car',      color:'#e8a74a', src:()=>(S._db?.vehicles||[]).map(v=>({name:v.name||v.model||v.plate,sub:v.plate||'',id:v.id})) },
    { label:'Org',      key:'Org',      icon:'building', color:'#4a8fe2', src:()=>(S.orgs||[]).map(o=>({name:o.name,sub:o.type||'',id:o.id})) },
    { label:'Mülk',     key:'Mülk',     icon:'home',     color:'#9b6fd4', src:()=>(S._db?.properties||[]).map(p=>({name:p.name,sub:p.address||'',id:p.id})) },
    { label:'Ekipman',  key:'Ekipman',  icon:'box',      color:'#4db880', src:()=>(S._db?.equipments||[]).map(q=>({name:q.name,sub:q.type||'',id:q.id})) },
  ],

  check(inp) {
    if (!this._enabled) return;
    this._inp = inp;
    const val = inp.value;
    const cur = inp.selectionStart;
    const before = val.slice(0, cur);

    // --- Mod 0: @mention — oyuncu etiketleme ---
    const mentionM = before.match(/@([A-Za-zÇĞİÖŞÜçğışöü]*)$/);
    if (mentionM) {
      const q = mentionM[1].toLowerCase();
      this._triggerStart = before.length - mentionM[0].length;
      // Oyuncu listesi: USERS + @everyone/@here
      const players = (typeof USERS !== 'undefined' ? USERS : (S.players||[])).filter(u => !u.isMA);
      const maEntry = {name:'MA', sub:"Master Agent'a yönlendir", id:'__ma__', icon:'🤖'};
      const specials = [{name:'everyone', sub:'Herkesi etiketle', id:'everyone'},{name:'here', sub:'Aktif oyuncuları etiketle', id:'here'}];
      const all = [maEntry, ...specials, ...players.map(u=>({name:u.name||u.username||u.id, sub:u.display||'', id:u.id}))];
      const hits = all.filter(p => !q || p.name.toLowerCase().startsWith(q)).slice(0,8);
      if (!hits.length) { this.hide(); return; }
      this._items = hits.map(p => ({
        text: p.name, sub: p.sub, icon: p.icon||'at', color: p.id==='__ma__'?'#9b6fd4':'#4a8fe2',
        insert: `@${p.name}`,
      }));
      this._sel = 0; this._render(inp); return;
    }

    // --- Mod 1: [Tip:isim] formatı hâlâ destekleniyor ---
    const bracketM = before.match(/\[([A-Za-zÇĞİÖŞÜçğışöü]*)(?::([^[\]]*))?$/);
    if (bracketM) {
      const typePart = bracketM[1] || '';
      const namePart = bracketM[2];
      this._triggerStart = before.lastIndexOf('[');

      if (namePart === undefined) {
        const filtered = this._TYPES.filter(t =>
          !typePart || t.label.toLowerCase().startsWith(typePart.toLowerCase())
        );
        if (!filtered.length) { this.hide(); return; }
        this._items = filtered.map(t => ({
          text: t.label, sub: '', icon: t.icon, color: t.color,
          insert: `[${t.label}:`, _partialType: true,
        }));
        this._sel = 0; this._render(inp); return;
      } else {
        const typeDef = this._TYPES.find(t => t.label.toLowerCase() === typePart.toLowerCase());
        if (!typeDef) { this.hide(); return; }
        const q = namePart.toLowerCase();
        const results = typeDef.src().filter(e => e.name && e.name.toLowerCase().includes(q)).slice(0, 8);
        if (!results.length) { this.hide(); return; }
        this._items = results.map(e => ({
          text: e.name, sub: e.sub, icon: typeDef.icon, color: typeDef.color,
          insert: `[${typeDef.label}:${e.name}]`,
        }));
        this._sel = 0; this._render(inp); return;
      }
    }

    // --- Mod 2: Düz yazı — son kelimeyi al, tüm kaynaklarda ara ---
    // Boşluk, satır sonu veya başlangıçtan itibaren son "token"
    const wordM = before.match(/(?:^|[\s,])([^\s,\[]{2,})$/);
    if (!wordM) { this.hide(); return; }
    const q = wordM[1].toLowerCase();
    this._triggerStart = before.length - wordM[1].length; // son kelimenin başlangıcı

    const hits = [];
    for (const t of this._TYPES) {
      t.src().forEach(e => {
        if (!e.name) return;
        const nameLC = e.name.toLowerCase();
        const subLC  = (e.sub||'').toLowerCase();
        if (nameLC.includes(q) || subLC.includes(q)) {
          hits.push({ text: e.name, sub: e.sub||'', icon: t.icon, color: t.color,
                      insert: `[${t.label}:${e.name}]`, _typeLabel: t.label });
        }
      });
    }
    if (!hits.length) { this.hide(); return; }
    // En fazla 10, önce tam eşleşmeler
    hits.sort((a,b) => {
      const aExact = a.text.toLowerCase().startsWith(q) ? 0 : 1;
      const bExact = b.text.toLowerCase().startsWith(q) ? 0 : 1;
      return aExact - bExact;
    });
    this._items = hits.slice(0, 10);
    this._sel = 0;
    this._render(inp);
  },

  _render(inp) {
    // Sadece mevcut popup DOM'u kaldır, _items/_sel'i sıfırlama
    this._el?.remove(); this._el = null; this.visible = false;
    if (!this._items.length) return;
    const rect = inp.getBoundingClientRect();
    const el = document.createElement('div');
    el.id = 'ac-popup';
    el.style.cssText = `position:fixed;bottom:${window.innerHeight - rect.top + 6}px;left:${rect.left}px;min-width:240px;max-width:340px;background:var(--bg3);border:1px solid var(--ln2);border-radius:10px;padding:4px;z-index:9998;box-shadow:0 8px 32px #0009;max-height:280px;overflow-y:auto`;
    this._items.forEach((it, i) => {
      const row = document.createElement('div');
      row.dataset.idx = i;
      row.style.cssText = `display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:7px;cursor:pointer;transition:background .1s`;
      row.style.background = i === this._sel ? 'var(--bg5)' : '';
      const typeLabel = it._typeLabel ? `<span style="font-size:10px;color:${it.color};font-family:var(--mono);opacity:.7;margin-left:4px">${it._typeLabel}</span>` : '';
      row.innerHTML = `<i class="fas fa-${it.icon}" style="color:${it.color};width:14px;font-size:12px"></i><span style="font-size:13px;color:var(--t1);flex:1">${it.text}</span>${it.sub ? `<span style="font-size:11px;color:var(--t3)">${it.sub}</span>` : ''}${typeLabel}`;
      row.onmouseenter = () => { this._sel = i; this._highlight(); };
      row.onmousedown = e => { e.preventDefault(); this._sel = i; this.confirm(); };
      el.appendChild(row);
    });
    document.body.appendChild(el);
    this._el = el;
    this.visible = true;
  },

  _highlight() {
    if (!this._el) return;
    this._el.querySelectorAll('[data-idx]').forEach(row => {
      row.style.background = Number(row.dataset.idx) === this._sel ? 'var(--bg5)' : '';
    });
  },

  move(dir) {
    this._sel = Math.max(0, Math.min(this._items.length - 1, this._sel + dir));
    this._highlight();
    // Scroll into view
    this._el?.querySelector(`[data-idx="${this._sel}"]`)?.scrollIntoView({block:'nearest'});
  },

  confirm() {
    if (!this._inp || this._sel < 0 || !this._items[this._sel]) return;
    const it = this._items[this._sel];
    const val = this._inp.value;
    const cur = this._inp.selectionStart;
    const before = val.slice(0, cur);
    const after  = val.slice(cur);
    // @mention → boşlukla bitir
    const insertStr = it.insert.startsWith('@') ? it.insert + ' ' : it.insert;
    const newBefore = before.slice(0, this._triggerStart) + insertStr;
    this._inp.value = newBefore + after;
    const newCur = newBefore.length;
    this._inp.setSelectionRange(newCur, newCur);
    this._inp.style.height = 'auto';
    this._inp.style.height = Math.min(this._inp.scrollHeight, 160) + 'px';
    this.hide();
    // Eğer sadece tip seçildiyse (insert ile : bitti) → tekrar check et
    if (it.insert.endsWith(':')) {
      setTimeout(() => this.check(this._inp), 0);
    }
  },

  hide() {
    this._el?.remove();
    this._el = null;
    this.visible = false;
    this._items = [];
    this._sel = -1;
  }
};
window.Autocomplete = Autocomplete;

/* ═══ ENTITY BAR (unified entity picker above input) ══════ */
/* ═══ QUICK ENTITY BAR ══════════════════════════════════
   Chat header altında hızlı etiket şeridi.
   Sıralama: Son kullanılan → Favori karakter → Tüm karakterler (ilk N)
             → Araçlar (ilk N) → Mülkler (ilk N)
   localStorage key: 'qb_recent'  → [{type,name,id,img?}]  max 12
════════════════════════════════════════════════════════ */
const QuickBar = {
  _LS: 'qb_recent',
  _MAX: 12,

  // Entity türlerine ait renk ve etiket bilgisi
  _META: {
    'Karakter': { color:'#c084fc', icon:'👤', label:'Karakter' },
    'Araç':     { color:'#e8a74a', icon:'🚗', label:'Araç' },
    'Mülk':     { color:'#9b6fd4', icon:'🏠', label:'Mülk' },
    'Org':      { color:'#4a8fe2', icon:'🏢', label:'Org' },
    'Ekipman':  { color:'#4db880', icon:'📦', label:'Ekipman' },
  },

  // Son kullanılanları localStorage'dan oku
  _getRecent() {
    try { return JSON.parse(localStorage.getItem(this._LS) || '[]'); }
    catch(e) { return []; }
  },

  // Kullanılan entity'yi en başa taşı/ekle
  trackUse(type, name, id, img) {
    let arr = this._getRecent();
    arr = arr.filter(x => !(x.type === type && x.id === id));
    arr.unshift({ type, name, id: id || name, img: img || null });
    if (arr.length > this._MAX) arr = arr.slice(0, this._MAX);
    try { localStorage.setItem(this._LS, JSON.stringify(arr)); } catch(e) {}
    this.render();
  },

  // Aktif odanın son mesajlarından entity'leri çıkar
  _fromMsgs() {
    const msgs = (S.msgs[S.roomId] || []).slice(-60); // son 60 mesaj
    const seen = new Map(); // key: "Tip|id_veya_ad" → {type,name,id,img}

    // En yeni mesajlar önce gelsin diye tersine işle
    for (let i = msgs.length - 1; i >= 0; i--) {
      const m = msgs[i];
      // Mesajı gönderen karakter
      if (m.char_name) {
        const key = 'Karakter|' + (m.char_id || m.char_name);
        if (!seen.has(key)) {
          const charObj = S.ci?.get(m.char_id) || null;
          seen.set(key, { type:'Karakter', name:m.char_name, id:m.char_id||m.char_name, img:charObj?.image||m.char_avatar||null });
        }
      }
      // Content içindeki [Tip:Ad] etiketleri
      const content = m.content || '';
      const tagRe = /\[(Karakter|Araç|Mülk|Org|Ekipman):([^\]]+)\]/g;
      let match;
      while ((match = tagRe.exec(content)) !== null) {
        const [, typ, nam] = match;
        const key = typ + '|' + nam;
        if (!seen.has(key)) {
          seen.set(key, { type:typ, name:nam, id:nam, img:null });
        }
      }
      if (seen.size >= 12) break; // yeterli
    }
    return [...seen.values()];
  },

  // Şeridi render et
  render() {
    const bar = document.getElementById('quick-entity-bar');
    if (!bar) return;

    // ── Bölüm 1: Son kullanılanlar (localStorage) ──────────
    const recent = this._getRecent();
    const usedKeys = new Set(recent.map(x => x.type + '|' + x.id));

    // ── Bölüm 2: Odadaki son mesajlarda görünen entity'ler ─
    const fromMsgs = this._fromMsgs().filter(x => !usedKeys.has(x.type + '|' + x.id));
    const msgKeys  = new Set(fromMsgs.map(x => x.type + '|' + x.id));

    // ── Bölüm 3: Oturum sahibinin aktif karakterleri ───────
    const myChars = (S.activeChars || []).map(c => ({ type:'Karakter', name:c.name, id:c.id, img:c.image||null }))
      .filter(x => !usedKeys.has(x.type+'|'+x.id) && !msgKeys.has(x.type+'|'+x.id));
    const myKeys  = new Set(myChars.map(x => x.type + '|' + x.id));

    // ── Bölüm 4: Diğer karakterler + araçlar + mülkler ────
    const allKeys = new Set([...usedKeys, ...msgKeys, ...myKeys]);
    const otherChars = (S.chars || []).slice(0, 12).map(c => ({ type:'Karakter', name:c.name, id:c.id, img:c.image||null })).filter(x => !allKeys.has(x.type+'|'+x.id));
    const vehicles   = (S._db?.vehicles || []).slice(0, 6).map(v => ({ type:'Araç', name:v.name||v.model||v.plate, id:v.id, img:null })).filter(x => !allKeys.has(x.type+'|'+x.id));
    const props      = (S._db?.properties || []).slice(0, 6).map(p => ({ type:'Mülk', name:p.name, id:p.id, img:null })).filter(x => !allKeys.has(x.type+'|'+x.id));
    const other = [...otherChars, ...vehicles, ...props];

    // Hiç içerik yoksa gizle
    const sections = [
      { label:'Son',     items: recent },
      { label:'Sahnede', items: fromMsgs },
      { label:'Benim',   items: myChars },
      { label:'Diğer',   items: other },
    ].filter(s => s.items.length > 0);

    if (!sections.length) { bar.style.display = 'none'; return; }
    bar.style.display = 'flex';
    bar.innerHTML = '';

    sections.forEach((section, si) => {
      // Bölüm ayracı (ilk bölümden önce yok)
      if (si > 0) {
        const sep = document.createElement('div');
        sep.className = 'qe-sep';
        bar.appendChild(sep);
      }
      // Bölüm etiketi
      const lbl = document.createElement('span');
      lbl.className = 'qe-label';
      lbl.textContent = section.label;
      bar.appendChild(lbl);

      section.items.forEach(item => {
        const meta = this._META[item.type] || { color:'#888' };
        const ini = (item.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

        const chip = document.createElement('div');
        chip.className = 'qe-chip';
        chip.style.cssText = `background:${meta.color}18;border-color:${meta.color}44;color:${meta.color}`;
        chip.title = `${item.type}: ${item.name}  (tıkla → mesaja ekle)`;

        const ava = item.img
          ? `<img src="${item.img}" style="width:100%;height:100%;border-radius:50%;object-fit:cover" onerror="this.textContent='${ini}'" loading="lazy">`
          : ini;

        chip.innerHTML = `<div class="qe-chip-ava" style="background:${meta.color}28;color:${meta.color}">${ava}</div>${item.name}`;

        chip.addEventListener('click', () => {
          const inp = document.getElementById('msg-input');
          if (!inp) return;
          if (false) {
            // (unused branch kept for structure)
          } else {
            const tag = `[${item.type}:${item.name}]`;
            const cur = inp.selectionStart || inp.value.length;
            const before = inp.value.slice(0, cur);
            const after = inp.value.slice(cur);
            inp.value = before + (before && !before.endsWith(' ') ? ' ' : '') + tag + ' ' + after;
          }
          inp.focus();
          inp.style.height = 'auto';
          inp.style.height = Math.min(inp.scrollHeight, 160) + 'px';
          inp.selectionStart = inp.selectionEnd = inp.value.length;
          QuickBar.trackUse(item.type, item.name, item.id, item.img);
        });

        bar.appendChild(chip);
      }); // items.forEach
    }); // sections.forEach
  },
};
window.QuickBar = QuickBar;

/* ═══ EVENT WIRING ═══════════════════════════════════════ */
function _wireInput(){
  const inp=document.getElementById('msg-input');
  if(!inp||inp._wired)return;
  inp._wired=true;

  // Paste: catch image paste, suggest URL mode
  inp.addEventListener('paste',e=>{
    const items=e.clipboardData?.items||[];
    for(const item of items){
      if(item.type.startsWith('image/')){
        e.preventDefault();
        toast('Direkt resim yapıştırma yok — 📎 butonunu kullan veya URL yapıştır','warn');
        return;
      }
    }
  });

  inp.addEventListener('input',()=>{
    inp.style.height='auto';
    inp.style.height=Math.min(inp.scrollHeight,160)+'px';
    RP.sendTyping();
    if(typeof Autocomplete!=='undefined') Autocomplete.check(inp);
  });

  inp.addEventListener('keydown',e=>{
    if(typeof Autocomplete!=='undefined'&&Autocomplete.visible){
      if(e.key==='ArrowDown'){e.preventDefault();Autocomplete.move(1);return;}
      if(e.key==='ArrowUp'){e.preventDefault();Autocomplete.move(-1);return;}
      if((e.key==='Enter'||e.key==='Tab')&&!e.shiftKey){e.preventDefault();Autocomplete.confirm();return;}
      if(e.key==='Escape'){Autocomplete.hide();return;}
    }
    if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();RP.send();}
    if(e.key==='Escape')RP.clearReply();
  });

  document.querySelectorAll('.mbd').forEach(el=>el.addEventListener('click',e=>{if(e.target===el)el.classList.add('hidden');}));
  document.getElementById('mob-menu')?.addEventListener('click',()=>{document.getElementById('sidebar').classList.toggle('open');document.getElementById('sb-overlay').classList.toggle('show');});
  document.getElementById('sb-overlay')?.addEventListener('click',()=>{document.getElementById('sidebar').classList.remove('open');document.getElementById('sb-overlay').classList.remove('show');});
  document.getElementById('btn-new-room')?.addEventListener('click',()=>OM('m-room'));
  document.getElementById('btn-mem')?.addEventListener('click',()=>{
    const p=document.getElementById('members-panel');
    const isMobile=window.innerWidth<=768;
    if(isMobile){
      p.classList.toggle('open');
      // Close on outside click
      if(p.classList.contains('open')){
        setTimeout(()=>document.addEventListener('click',function h(e){
          if(!p.contains(e.target)&&e.target.id!=='btn-mem'){p.classList.remove('open');document.removeEventListener('click',h);}
        }),100);
      }
    }else{
      p.style.display=p.style.display==='none'?'':'none';
    }
  });
  document.getElementById('char-sel-btn')?.addEventListener('click',()=>FavChars.open());
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.mbd').forEach(el=>el.classList.add('hidden'));if(typeof Autocomplete!=='undefined')Autocomplete.hide();}});
  Login.init();
}
document.addEventListener('DOMContentLoaded',()=>{
  _wireInput();
  // Fallback: login sonrası input görünür olunca yeniden dene
  const obs=new MutationObserver(()=>{const i=document.getElementById('msg-input');if(i&&!i._wired)_wireInput();});
  obs.observe(document.body,{childList:true,subtree:true});
  // Kanon bilgi tabanını arka planda önyükle
  _fbReady().then(()=>{ if(window.KanonDB) KanonDB.loadList().catch(()=>{}); }).catch(()=>{});
});

/* ═══ PLAYER PROFILE SYSTEM ══════════════════════════════ */
const PlayerProfile={
  _loading:false,

  async open(userId){
    const user=USERS?.find(u=>u.id===userId)||{id:userId,name:userId,color:'var(--ac)'};
    const isSelf=S.user?.id===userId;
    const profile=S.playerProfiles[userId]||{};

    let modal=document.getElementById('m-player-profile');
    if(!modal){
      modal=document.createElement('div');modal.id='m-player-profile';modal.className='mbd hidden';
      modal.innerHTML=`<div class="mbox" style="max-width:420px">
        <div class="mhd"><span class="mti" id="pp-title">Profil</span><button class="mcl" onclick="CM('m-player-profile')"><i class="fas fa-times"></i></button></div>
        <div class="mbdy" id="pp-body"></div>
        <div class="mft" id="pp-footer"></div>
      </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click',e=>{if(e.target===modal)CM('m-player-profile');});
    }

    document.getElementById('pp-title').textContent=isSelf?'Profilini Düzenle':user.name+' Profili';
    const body=document.getElementById('pp-body');
    const footer=document.getElementById('pp-footer');

    if(isSelf){
      // Editable profile
      body.innerHTML=`
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">
          <div id="pp-ava-preview" style="width:64px;height:64px;border-radius:50%;background:${user.color}22;border:3px solid ${user.color}44;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:${user.color};overflow:hidden;flex-shrink:0">
            ${this._renderAvaPreview(profile,user)}
          </div>
          <div style="flex:1">
            <div style="font-size:16px;font-weight:600;color:${user.color};margin-bottom:2px">${user.name}</div>
            <div style="font-family:var(--mono);font-size:10px;color:var(--t2)">${user.role||'Admin'}</div>
          </div>
        </div>
        <div class="ff">
          <label class="fl">Avatar Tipi</label>
          <select id="pp-ava-type" class="fi-inp" style="font-family:var(--mono)" onchange="PlayerProfile._updatePreview()">
            <option value="initials" ${profile.avatar_type==='initials'||!profile.avatar_type?'selected':''}>Baş Harf</option>
            <option value="url" ${profile.avatar_type==='url'?'selected':''}>Resim URL</option>
            <option value="emoji" ${profile.avatar_type==='emoji'?'selected':''}>Emoji</option>
          </select>
        </div>
        <div class="ff" id="pp-ava-input-wrap">
          <label class="fl" id="pp-ava-label">Resim URL / Emoji</label>
          <input id="pp-ava-val" type="text" class="fi-inp" value="${profile.avatar_url||''}" placeholder="https://... veya 🎭" oninput="PlayerProfile._updatePreview()">
        </div>
        <div class="ff">
          <label class="fl">Durum Emoji</label>
          <input id="pp-status-emoji" type="text" class="fi-inp" value="${profile.status_emoji||''}" placeholder="🎭 🔫 💤 🎲" style="font-size:18px">
        </div>
        <div class="ff">
          <label class="fl">Durum / Bio</label>
          <input id="pp-status-text" type="text" class="fi-inp" value="${profile.status_text||''}" placeholder="Sahneye hazır..." maxlength="60">
        </div>`;
      footer.innerHTML=`
        <button class="btn btn-g" onclick="CM('m-player-profile')">İptal</button>
        <button class="btn btn-p" onclick="PlayerProfile.save('${userId}')"><i class="fas fa-save"></i> Kaydet</button>`;
    }else{
      // View-only profile + PM button
      body.innerHTML=`
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">
          <div style="width:64px;height:64px;border-radius:50%;background:${user.color}22;border:3px solid ${user.color}44;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:${user.color};overflow:hidden;flex-shrink:0">
            ${this._renderAvaPreview(profile,user)}
          </div>
          <div>
            <div style="font-size:18px;font-weight:700;color:${user.color}">${user.name}</div>
            ${profile.status_text?`<div style="font-size:13px;color:var(--t1);margin-top:4px">${profile.status_emoji||''} ${profile.status_text}</div>`:''}
          </div>
        </div>`;
      footer.innerHTML=`
        <button class="btn btn-g" onclick="CM('m-player-profile')">Kapat</button>
        <button class="btn btn-p" style="background:var(--pu)" onclick="CM('m-player-profile');PM.open('${userId}')"><i class="fas fa-comment"></i> PM Gönder</button>`;
    }

    OM('m-player-profile');
  },

  _renderAvaPreview(profile,user){
    if(profile.avatar_type==='emoji'&&profile.avatar_url) return profile.avatar_url;
    if(profile.avatar_type==='url'&&profile.avatar_url) return `<img src="${profile.avatar_url}" style="width:100%;height:100%;object-fit:cover" onerror="this.remove()">`;
    return user.name?.[0]?.toUpperCase()||'?';
  },

  _updatePreview(){
    const type=document.getElementById('pp-ava-type')?.value;
    const val=document.getElementById('pp-ava-val')?.value||'';
    const user=S.user;if(!user)return;
    const prev=document.getElementById('pp-ava-preview');if(!prev)return;
    if(type==='emoji') prev.innerHTML=val||user.name[0];
    else if(type==='url'&&val) prev.innerHTML=`<img src="${val}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" onerror="this.parentNode.innerHTML='${user.name[0]}'">`;
    else prev.innerHTML=user.name[0]?.toUpperCase()||'?';
  },

  async save(userId){
    const type=document.getElementById('pp-ava-type')?.value||'initials';
    const val=(document.getElementById('pp-ava-val')?.value||'').trim();
    const emoji=(document.getElementById('pp-status-emoji')?.value||'').trim();
    const status=(document.getElementById('pp-status-text')?.value||'').trim();
    const user=USERS?.find(u=>u.id===userId)||{};
    const profileData={
      user_id:userId,display_name:user.name||userId,
      avatar_url:val,avatar_type:type,
      bio:status,status_text:status,status_emoji:emoji,
      color:user.color||'var(--ac)',updated_at:new Date().toISOString()
    };
    try{
      await DB.upsert('rp_player_profiles','user_id',profileData);
      S.playerProfiles[userId]=profileData;
      CM('m-player-profile');
      UI.renderMembers();
      toast('Profil güncellendi ✓','success');
    }catch(e){toast('Kayıt hatası: '+e.message,'error');}
  },

  async loadAll(){
    try{
      const rows=await DB.get('rp_player_profiles?select=*');
      rows.forEach(r=>{S.playerProfiles[r.user_id]=r;});
    }catch(e){}
  }
};

/* ═══ SIK OYNANAN KARAKTERLER ════════════════════════════ */
const FavChars = {
  _LS: 'rp_fav_chars',
  _get(){ try{return JSON.parse(localStorage.getItem(this._LS)||'[]');}catch(e){return[];} },
  _save(arr){ try{localStorage.setItem(this._LS,JSON.stringify(arr));}catch(e){} },
  toggle(charId){
    let favs=this._get();
    const idx=favs.indexOf(charId);
    if(idx===-1)favs.push(charId); else favs.splice(idx,1);
    this._save(favs);
    this._updateSidebar();
    return idx===-1; // true=eklendi
  },
  isFav(charId){ return this._get().includes(charId); },
  _updateSidebar(){
    const cnt=this._get().length;
    const og=document.getElementById('ac-org');
    if(og) og.textContent=cnt?`${cnt} karakter favoride`:'tıkla → yönet';
  },
  open(){
    let modal=document.getElementById('m-fav-chars');
    if(!modal){
      modal=document.createElement('div');modal.id='m-fav-chars';modal.className='mbd hidden';
      modal.innerHTML=`<div class="mbox" id="fc-mbox" style="width:min(1100px,96vw);height:min(580px,82vh);display:flex;flex-direction:column;resize:both;overflow:hidden;min-width:420px;min-height:280px">
        <div class="mhd" id="fc-drag-handle" style="cursor:move;user-select:none">
          <span class="mti"><i class="fas fa-star" style="color:var(--gd);margin-right:6px"></i>Sık Oynanan Karakterler</span>
          <div style="display:flex;align-items:center;gap:6px;margin-left:auto">
            <button id="fc-size-toggle" title="Ekranı kapla / küçült" onclick="FavChars._toggleSize()" style="background:none;border:none;color:var(--t2);cursor:pointer;font-size:13px;padding:4px 6px"><i class="fas fa-expand"></i></button>
            <button class="mcl" onclick="CM('m-fav-chars')"><i class="fas fa-times"></i></button>
          </div>
        </div>
        <div style="padding:6px 16px 8px;font-family:var(--mono);font-size:10px;color:var(--t2);background:var(--bg2);border-bottom:1px solid var(--ln);flex-shrink:0">
          Sık oynadığın karakterleri buraya ekle — sadece referans, QuickBar ve mesaj gönderimi etkilenmez.
        </div>
        <div style="padding:10px 16px 6px;flex-shrink:0;display:flex;flex-direction:column;gap:8px">
          <div class="cp-filter-bar" style="margin:0">
            <div class="cp-search-wrap"><i class="fas fa-search cp-search-icon"></i><input id="fc-search" class="cp-search" type="text" placeholder="İsim, alias, org ara…" autocomplete="off"><button id="fc-search-clear" class="cp-search-clear" style="display:none">✕</button></div>
            <div class="cp-filter-row">
              <select id="fc-org-filter" class="cp-select"><option value="all">Tüm Orglar</option></select>
              <select id="fc-player-filter" class="cp-select"><option value="all">Tüm Oyuncular</option><option value="npc">NPC</option></select>
              <select id="fc-status-filter" class="cp-select"><option value="active">Aktif</option><option value="all">Tümü</option></select>
              <select id="fc-fav-filter" class="cp-select"><option value="all">Tümü</option><option value="fav">Sadece Favoriler</option></select>
            </div>
          </div>
          <div id="fc-result-count" style="font-family:var(--mono);font-size:10px;color:var(--t3)">…</div>
        </div>
        <div class="mbdy" style="flex:1;overflow-y:auto;padding:0 16px 12px">
          <div id="fc-grid" class="cpg" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))"></div>
        </div>
        <div class="mft">
          <button class="btn btn-g" onclick="FavChars._save([]);FavChars._renderGrid();FavChars._updateSidebar()"><i class="fas fa-broom"></i> Favorileri Temizle</button>
          <span style="font-family:var(--mono);font-size:10px;color:var(--t3);margin:0 auto" id="fc-fav-count"></span>
          <button class="btn btn-p" onclick="CM('m-fav-chars')">Kapat</button>
        </div>
      </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click',e=>{if(e.target===modal)CM('m-fav-chars');});
      // Search
      modal.querySelector('#fc-search').addEventListener('input',e=>{
        this._f.search=e.target.value.trim().toLowerCase();
        modal.querySelector('#fc-search-clear').style.display=this._f.search?'':'none';
        this._renderGrid();
      });
      modal.querySelector('#fc-search-clear').addEventListener('click',()=>{
        modal.querySelector('#fc-search').value='';this._f.search='';
        modal.querySelector('#fc-search-clear').style.display='none';this._renderGrid();
      });
      // Org filter — populate
      const orgSel=modal.querySelector('#fc-org-filter');
      (S.orgs||[]).forEach(o=>{const opt=document.createElement('option');opt.value=o.id;opt.textContent=o.name;orgSel.appendChild(opt);});
      // Player filter — populate with actual users
      const playerSel=modal.querySelector('#fc-player-filter');
      (window.USERS||[]).forEach(p=>{const opt=document.createElement('option');opt.value=p.id;opt.textContent=p.name;playerSel.appendChild(opt);});
      // Also populate from S._db players if available
      if(window.DM_CONFIG?.players){DM_CONFIG.players.forEach(p=>{if(!(window.USERS||[]).find(u=>u.id===p.id)){const opt=document.createElement('option');opt.value=p.id;opt.textContent=p.name;playerSel.appendChild(opt);}});}
      // Filter change events
      ['#fc-org-filter','#fc-player-filter','#fc-status-filter','#fc-fav-filter'].forEach(sel=>{
        modal.querySelector(sel).addEventListener('change',e=>{
          const key=sel==='#fc-org-filter'?'org':sel==='#fc-player-filter'?'player':sel==='#fc-status-filter'?'status':'fav';
          this._f[key]=e.target.value;this._renderGrid();
        });
      });
      // Drag-to-move
      const handle=modal.querySelector('#fc-drag-handle');
      const box=modal.querySelector('#fc-mbox');
      let dragging=false,ox=0,oy=0,sx=0,sy=0;
      handle.addEventListener('mousedown',e=>{if(e.target.closest('button'))return;dragging=true;const r=box.getBoundingClientRect();sx=r.left;sy=r.top;ox=e.clientX;oy=e.clientY;box.style.position='fixed';box.style.left=sx+'px';box.style.top=sy+'px';box.style.margin='0';e.preventDefault();});
      document.addEventListener('mousemove',e=>{if(!dragging)return;const dx=e.clientX-ox,dy=e.clientY-oy;box.style.left=Math.max(0,Math.min(window.innerWidth-100,sx+dx))+'px';box.style.top=Math.max(0,Math.min(window.innerHeight-60,sy+dy))+'px';});
      document.addEventListener('mouseup',()=>{dragging=false;});
    }
    OM('m-fav-chars');
    this._renderGrid();
    setTimeout(()=>modal.querySelector('#fc-search')?.focus(),80);
  },
  _f:{search:'',org:'all',player:'all',status:'active',fav:'all'},
  _expanded:false,
  _toggleSize(){
    const box=document.getElementById('fc-mbox');
    const btn=document.getElementById('fc-size-toggle');
    if(!box)return;
    if(!this._expanded){
      box.style.cssText='width:98vw;height:90vh;display:flex;flex-direction:column;resize:both;overflow:hidden;min-width:420px;min-height:280px;position:fixed;left:1vw;top:5vh;margin:0';
      btn.innerHTML='<i class="fas fa-compress"></i>';
    }else{
      box.style.cssText='width:min(1100px,96vw);height:min(580px,82vh);display:flex;flex-direction:column;resize:both;overflow:hidden;min-width:420px;min-height:280px';
      btn.innerHTML='<i class="fas fa-expand"></i>';
    }
    this._expanded=!this._expanded;
  },
  _renderGrid(){
    const g=document.getElementById('fc-grid');if(!g)return;g.innerHTML='';
    const favIds=this._get();
    const {search,org,player,status,fav}=this._f;
    let chars=(S.chars||[]).filter(c=>{
      if(status==='active'&&c.status==='Deceased')return false;
      if(org!=='all'){const charOrgs=c.organizations||(c.organization?[c.organization]:[]);if(!charOrgs.includes(org))return false;}
      if(player==='npc'){if(c.playerId&&c.playerId!=='')return false;}
      else if(player!=='all'){if((c.playerId||'')!==player)return false;}
      if(fav==='fav'&&!favIds.includes(c.id))return false;
      if(search){const hay=[c.name,c.alias,c.occupation,...(c.organizations||[]).map(oid=>S.oi?.get(oid)?.name||'')].join(' ').toLowerCase();if(!hay.includes(search))return false;}
      return true;
    });
    // Favorileri önce göster
    chars=[...chars.filter(c=>favIds.includes(c.id)),...chars.filter(c=>!favIds.includes(c.id))];
    const countEl=document.getElementById('fc-result-count');
    if(countEl)countEl.textContent=`${chars.length} karakter`;
    const favCountEl=document.getElementById('fc-fav-count');
    if(favCountEl)favCountEl.textContent=`${favIds.length} favori`;
    if(!chars.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:32px;font-family:var(--mono);font-size:11px;color:var(--t3)">Sonuç yok</div>';return;}
    chars.forEach(c=>{
      const isFav=favIds.includes(c.id);
      const org=RP._org((c.organizations||[])[0]||c.organization);
      const orgColor=org?.color||'var(--t3)';
      const playerUser=USERS?.find(u=>u.id===c.playerId);
      const ini=(c.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      const el=document.createElement('div');el.className='cpi-item'+(isFav?' active':'');
      el.innerHTML=`<div class="cpa" style="${isFav?`border:2px solid ${orgColor};box-shadow:0 0 8px ${orgColor}44`:''}">
        ${c.image?`<img src="${c.image}" onerror="this.parentNode.innerHTML='${ini}'" loading="lazy">`:ini}
      </div><div class="cpin" style="flex:1;min-width:0">
        <div class="cpnm">${c.name}</div>
        <div class="cpal" style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
          ${c.alias?`<span>"${c.alias}"</span>`:''}
          ${org?`<span style="background:${orgColor}22;color:${orgColor};border:1px solid ${orgColor}44;font-family:var(--mono);font-size:9px;padding:1px 5px;border-radius:2px">${org.name}</span>`:''}
          ${playerUser?`<span style="background:${playerUser.color}22;color:${playerUser.color};font-family:var(--mono);font-size:9px;padding:1px 5px;border-radius:2px">${playerUser.name}</span>`:'<span style="font-family:var(--mono);font-size:9px;color:var(--t3)">NPC</span>'}
        </div>
      </div><div class="fc-star" style="font-size:16px;color:${isFav?'var(--gd)':'var(--t3)'};flex-shrink:0;margin-left:6px;cursor:pointer;transition:color .15s" title="${isFav?'Favorilerden çıkar':'Favorilere ekle'}">${isFav?'<i class="fas fa-star"></i>':'<i class="far fa-star"></i>'}</div>`;
      el.querySelector('.fc-star').addEventListener('click',e=>{
        e.stopPropagation();
        const nowFav=FavChars.toggle(c.id);
        el.classList.toggle('active',nowFav);
        const star=el.querySelector('.fc-star');
        star.style.color=nowFav?'var(--gd)':'var(--t3)';
        star.innerHTML=nowFav?'<i class="fas fa-star"></i>':'<i class="far fa-star"></i>';
        star.title=nowFav?'Favorilerden çıkar':'Favorilere ekle';
        el.querySelector('.cpa').style.cssText=nowFav?`border:2px solid ${orgColor};box-shadow:0 0 8px ${orgColor}44`:'';
        const fc=document.getElementById('fc-fav-count');if(fc)fc.textContent=`${FavChars._get().length} favori`;
      });
      el.addEventListener('contextmenu',e=>{e.preventDefault();CharCard.show(c.id,e.clientX,e.clientY);});
      g.appendChild(el);
    });
  },
};
window.FavChars=FavChars;

/* ═══ PM SYSTEM ══════════════════════════════════════════ */
const PM={
  _convId:null,
  _userId:null,
  _pollTimer:null,
  _lastId:null,
  _lastAt:null,

  async open(targetUserId){
    const target=USERS?.find(u=>u.id===targetUserId);
    const me=S.user;
    if(!me){toast('Giriş yapman lazım','error');return;}
    if(targetUserId===me.id){toast('Kendinize PM atamazsınız','warn');return;}

    // Create or find conversation (always store user_a < user_b)
    const ua=me.id<targetUserId?me.id:targetUserId;
    const ub=me.id<targetUserId?targetUserId:me.id;

    let convId=null;
    try{
      let rows=await DB.get(`dm_conversations?user_a=eq.${ua}&user_b=eq.${ub}&select=id`);
      if(rows.length){convId=rows[0].id;}
      else{
        const created=await DB.post('dm_conversations',{user_a:ua,user_b:ub,last_msg:'',last_msg_at:new Date().toISOString(),last_msg_by:me.id});
        convId=created[0]?.id;
      }
    }catch(e){toast('PM açılamadı: '+e.message,'error');return;}

    this._convId=convId;this._userId=targetUserId;
    this._openWindow(target||{id:targetUserId,name:targetUserId,color:'var(--ac)'},convId);
    // Start Firebase realtime listener for this DM conversation
    RT.watchDM(convId);
  },

  _openWindow(target,convId){
    let win=document.getElementById('pm-window');
    if(!win){
      win=document.createElement('div');win.id='pm-window';win.className='pm-window';
      win.innerHTML=`
        <div class="pm-header">
          <div class="pm-header-ava" id="pm-target-ava"></div>
          <div style="flex:1;min-width:0">
            <div class="pm-target-name" id="pm-target-name"></div>
          </div>
          <button onclick="PM.close()" style="background:none;border:none;color:var(--t2);cursor:pointer;font-size:14px;padding:4px">✕</button>
        </div>
        <div class="pm-messages" id="pm-messages"><div style="text-align:center;padding:20px;font-family:var(--mono);font-size:11px;color:var(--t3)">Yükleniyor…</div></div>
        <div class="pm-input-row">
          <input id="pm-input" class="pm-input" type="text" placeholder="Mesaj yaz…" onkeydown="if(event.key==='Enter')PM.send()">
          <button class="pm-send-btn" onclick="PM.send()"><i class="fas fa-paper-plane"></i></button>
        </div>`;
      document.body.appendChild(win);
    }
    // Update header
    const profile=S.playerProfiles[target.id]||{};
    const avaEl=document.getElementById('pm-target-ava');
    if(profile.avatar_type==='emoji'&&profile.avatar_url) avaEl.textContent=profile.avatar_url;
    else if(profile.avatar_type==='url'&&profile.avatar_url) avaEl.innerHTML=`<img src="${profile.avatar_url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    else avaEl.textContent=target.name[0]?.toUpperCase()||'?';
    avaEl.style.cssText=`width:28px;height:28px;border-radius:50%;background:${target.color}22;border:2px solid ${target.color}44;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:${target.color};overflow:hidden;flex-shrink:0`;
    document.getElementById('pm-target-name').textContent=target.name;
    document.getElementById('pm-target-name').style.color=target.color;
    win.style.display='flex';
    this._loadMessages(convId);
    clearInterval(this._pollTimer);
    this._pollTimer=setInterval(()=>this._pollMessages(convId),1000);
    setTimeout(()=>document.getElementById('pm-input')?.focus(),100);
  },

  async _loadMessages(convId){
    const msgEl=document.getElementById('pm-messages');if(!msgEl)return;
    try{
      const rows=await DB.get(`dm_messages?conversation_id=eq.${convId}&is_deleted=eq.false&order=created_at.asc&limit=100`);
      this._lastId=rows.length?rows[rows.length-1].id:null;
      this._lastAt=rows.length?rows[rows.length-1].created_at:null;
      this._renderMessages(rows);
    }catch(e){msgEl.innerHTML='<div style="text-align:center;padding:20px;font-family:var(--mono);font-size:11px;color:var(--rd)">Yüklenemedi</div>';}
  },

  async _pollMessages(convId){
    if(!convId)return;
    try{
      // Firestore'da doc ID'ye gt filtresi çalışmaz — created_at ile filtrele
      const qs=this._lastAt
        ?`dm_messages?conversation_id=eq.${convId}&created_at=gt.${this._lastAt}&order=created_at.asc`
        :`dm_messages?conversation_id=eq.${convId}&is_deleted=eq.false&order=created_at.asc&limit=100`;
      const rows=await DB.get(qs);
      if(!rows.length)return;
      const newRows=rows.filter(r=>!r.is_deleted);
      if(!newRows.length){this._lastAt=rows[rows.length-1].created_at;return;}
      this._lastAt=rows[rows.length-1].created_at;
      this._lastId=rows[rows.length-1].id;
      newRows.forEach(msg=>this._appendMessage(msg));
    }catch(e){}
  },

  _renderMessages(msgs){
    const el=document.getElementById('pm-messages');if(!el)return;
    el.innerHTML='';
    if(!msgs.length){el.innerHTML='<div style="text-align:center;padding:20px;font-family:var(--mono);font-size:11px;color:var(--t3)">Henüz mesaj yok</div>';return;}
    msgs.forEach(m=>this._appendMessage(m,false));
    setTimeout(()=>{el.scrollTop=el.scrollHeight;},50);
  },

  _appendMessage(msg,scroll=true){
    const el=document.getElementById('pm-messages');if(!el)return;
    const isMine=msg.sender_id===S.user?.id;
    const user=USERS?.find(u=>u.id===msg.sender_id)||{name:msg.sender_name,color:'var(--ac)'};
    const time=new Date(msg.created_at).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    const msgEl=document.createElement('div');
    msgEl.className='pm-msg '+(isMine?'pm-msg-mine':'pm-msg-theirs');
    msgEl.innerHTML=`
      ${!isMine?`<div class="pm-msg-sender" style="color:${user.color}">${user.name}</div>`:''}
      <div class="pm-bubble" style="${isMine?`background:${S.user?.color||'var(--ac)'}22;border-color:${S.user?.color||'var(--ac)'}44`:''}">
        ${msg.content.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
      </div>
      <div class="pm-msg-time">${time}</div>`;
    el.appendChild(msgEl);
    const emp=el.querySelector('div[style*="text-align:center"]');
    emp?.remove();
    if(scroll)el.scrollTop=el.scrollHeight;
  },

  async send(){
    const inp=document.getElementById('pm-input');
    const txt=inp?.value.trim();
    if(!txt||!this._convId||!S.user)return;
    inp.value='';
    const me=S.user;
    const profile=S.playerProfiles[me.id]||{};
    try{
      await DB.post('dm_messages',{
        conversation_id:this._convId,
        sender_id:me.id,sender_name:me.name,
        sender_avatar:profile.avatar_url||'',
        content:txt,is_read:false
      });
      // Update conversation last_msg
      await DB.patch('dm_conversations',`id=eq.${this._convId}`,{
        last_msg:txt.slice(0,100),last_msg_at:new Date().toISOString(),last_msg_by:me.id
      }).catch(()=>{});
    }catch(e){toast('PM gönderilemedi','error');}
  },

  close(){
    clearInterval(this._pollTimer);
    if(RT._unsubDM){try{RT._unsubDM();}catch(e){}RT._unsubDM=null;}
    const win=document.getElementById('pm-window');
    if(win)win.style.display='none';
    this._convId=null;this._userId=null;this._lastId=null;this._lastAt=null;
  }
};

// Load player profiles when Login completes
const _origLoginStart=Login._start.bind(Login);
Login._start=async function(u){
  _origLoginStart(u);
  await PlayerProfile.loadAll();
  // Init notifications
  Notif.init();
  // Start global multi-room listener for unread badges
  RT.connectGlobal();
  // (DM pill is now static HTML — no injection needed)
  // Player presence heartbeat — fires every 10s so others see us online quickly
  const sendPlayerHB=()=>{
    if(!S.user||S._off)return;
    DB.upsert('rp_presence','char_id',{
      char_id:'player_hb_'+S.user.id,
      char_name:S.user.name,
      char_alias:'',org_id:null,
      last_seen:new Date().toISOString(),
      is_typing:false,
      room_id:S.roomId||null,
      reader_user_id:S.user.id,
    }).catch(()=>{});
  };
  sendPlayerHB(); // immediate on login
  setInterval(sendPlayerHB,10000);
};
</script>

<style>
/* ── Message: player as sender ──────────────────────── */
.msg-player-ava-wrap{cursor:pointer}
.msg-player-ava{
  width:36px;height:36px;border-radius:50%;
  background:var(--bg4);border:2px solid var(--ln2);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-size:14px;font-weight:700;
  color:var(--t1);overflow:hidden;transition:opacity var(--tr);
}
.msg-player-ava:hover{opacity:.8}
.msg-player-ava img{width:100%;height:100%;object-fit:cover;display:block}
.msg-player-name{
  font-size:13px;font-weight:700;cursor:pointer;
}
.msg-player-name:hover{text-decoration:underline}
.msg-char-list{display:inline-flex;flex-wrap:wrap;align-items:center;gap:4px}
.msg-char-tag{
  font-size:13px;font-weight:500;color:var(--t0);
  cursor:pointer;display:inline-flex;align-items:center;gap:4px;
}
.msg-char-tag:hover .msg-char-name-inner{text-decoration:underline}
.msg-char-alias{font-family:var(--mono);font-size:11px;color:var(--t3)}
.msg-org{font-family:var(--mono);font-size:9px;font-weight:600;padding:1px 5px;border-radius:2px;letter-spacing:.06em;text-transform:uppercase}
/* ── Members panel player items ─────────────────────── */
.mem-pm-btn{
  width:24px;height:24px;border-radius:50%;
  background:none;border:1px solid var(--ln2);color:var(--t2);
  cursor:pointer;display:flex;align-items:center;justify-content:center;
  font-size:11px;transition:all .15s;flex-shrink:0;
}
.mem-pm-btn:hover{background:var(--ac-d);border-color:var(--ac);color:var(--ac)}
/* ── PM Window ──────────────────────────────────────── */
.pm-window{
  position:fixed;bottom:20px;right:20px;width:320px;height:440px;
  background:var(--bg2);border:1px solid var(--ln2);border-radius:12px;
  box-shadow:0 16px 48px rgba(0,0,0,.6);z-index:500;
  display:none;flex-direction:column;overflow:hidden;
}
.pm-header{
  display:flex;align-items:center;gap:10px;padding:12px 14px;
  border-bottom:1px solid var(--ln);flex-shrink:0;background:var(--bg1);
}
.pm-target-name{font-size:14px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pm-messages{flex:1;overflow-y:auto;padding:10px 12px;display:flex;flex-direction:column;gap:6px}
.pm-input-row{display:flex;gap:6px;padding:8px 10px;border-top:1px solid var(--ln);flex-shrink:0}
.pm-input{flex:1;background:var(--bg3);border:1px solid var(--ln2);border-radius:20px;color:var(--t0);font-family:var(--sans);font-size:13px;padding:6px 12px;outline:none}
.pm-input:focus{border-color:var(--ac)}
.pm-send-btn{width:32px;height:32px;border-radius:50%;background:var(--ac);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
.pm-send-btn:hover{opacity:.88}
.pm-msg{display:flex;flex-direction:column;gap:2px}
.pm-msg-mine{align-items:flex-end}
.pm-msg-theirs{align-items:flex-start}
.pm-msg-sender{font-family:var(--mono);font-size:10px;font-weight:600;margin-bottom:2px}
.pm-bubble{
  max-width:220px;padding:8px 12px;border-radius:12px;
  background:var(--bg3);border:1px solid var(--ln);
  font-size:13px;color:var(--t0);line-height:1.5;word-break:break-word;
}
.pm-msg-mine .pm-bubble{border-radius:12px 12px 2px 12px}
.pm-msg-theirs .pm-bubble{border-radius:12px 12px 12px 2px}
.pm-msg-time{font-family:var(--mono);font-size:9px;color:var(--t3)}
/* ── Notification toast ─────────────────────────────── */
.notif-toast{
  background:var(--bg2);border:1px solid rgba(155,111,212,.5);
  border-radius:8px;padding:10px 14px;cursor:pointer;
  box-shadow:0 8px 24px rgba(0,0,0,.5);
  animation:tin .25s ease;pointer-events:all;
  max-width:300px;
}
.notif-toast:hover{background:var(--bg3)}
</style>
</script>

<!-- ══════════════════════════════════════════════════════
     DM ENGINE — Presentation layer (CSS + HTML structure)
     JS logic is inlined below (dm_engine + dm_panel, unified)
══════════════════════════════════════════════════════ -->
<style>

/* ═══ DM PANEL STYLES ════════════════════════════════ */
#view-dm{flex-direction:column}
#view-lore{flex-direction:column;background:var(--bg0)}
#lk-header{height:var(--hh);background:var(--bg1);border-bottom:1px solid var(--ln);display:flex;align-items:center;gap:12px;padding:0 20px;flex-shrink:0}
#lk-body{flex:1;display:flex;overflow:hidden;min-height:0}
#lk-tabs{width:160px;min-width:130px;border-right:1px solid var(--ln);overflow-y:auto;flex-shrink:0;background:var(--bg1)}
#lk-list{width:230px;min-width:170px;border-right:1px solid var(--ln);overflow-y:auto;flex-shrink:0;background:var(--bg2)}
#lk-main{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0}
#lk-mode-bar{height:38px;border-bottom:1px solid var(--ln);background:var(--bg2);display:flex;align-items:center;padding:0 14px;gap:8px;flex-shrink:0}
.lk-mode-btn{padding:4px 12px;border-radius:5px;border:1px solid var(--ln);background:transparent;color:var(--t3);font-size:10px;font-family:var(--mono);cursor:pointer;transition:all .15s}
.lk-mode-btn.active{background:rgba(80,200,150,.15);border-color:rgba(80,200,150,.5);color:#50c896}
#lk-content{flex:1;overflow-y:auto;padding:18px 22px;font-size:12px;line-height:1.75;color:var(--t1);font-family:var(--sans)}
#lk-editor{flex:1;display:none;flex-direction:column;overflow:hidden}
#lk-editor-title{padding:8px 16px;font-size:11px;font-family:var(--mono);color:var(--t3);border-bottom:1px solid var(--ln);background:var(--bg2);flex-shrink:0}
#lk-editor-inp{flex:1;background:var(--bg0);border:none;color:var(--t1);font-family:'Courier New',monospace;font-size:12px;line-height:1.6;padding:14px 16px;resize:none;outline:none;overflow-y:auto}
#lk-chat-area{border-top:1px solid var(--ln);background:var(--bg2);padding:10px 14px;flex-shrink:0}
#lk-chat-log{max-height:150px;overflow-y:auto;margin-bottom:8px}
.lk-tab-item{padding:11px 14px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,.04);color:var(--t2);transition:background .1s}
.lk-tab-item:hover{background:var(--bg2)}
.lk-tab-item.active{background:rgba(80,200,150,.1);color:#50c896;font-weight:600;border-left:2px solid #50c896}
.lk-list-item{padding:8px 14px;cursor:pointer;font-size:11px;font-family:var(--sans);display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.04);color:var(--t1);transition:background .1s}
.lk-list-item:hover{background:var(--bg3)}
.lk-list-item.active{background:rgba(80,200,150,.12);color:#50c896}
#dm-header{height:var(--hh);background:var(--bg1);border-bottom:1px solid var(--ln);display:flex;align-items:center;gap:12px;padding:0 20px;flex-shrink:0}
.dm-brand{font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.15em;color:var(--t2);text-transform:uppercase}
.dm-brand em{color:var(--pu);font-style:normal}
.dm-col{background:var(--bg1);border-right:1px solid var(--ln);display:flex;flex-direction:column;overflow:hidden}
.dm-col:last-child{border-right:none}
.dm-col-head{height:40px;padding:0 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ln);flex-shrink:0}
.dm-col-title{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--t3)}
.dm-body{flex:1;overflow-y:auto;padding:8px 0}
/* NPC list */
.npc-item{display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid var(--ln);transition:background .12s;cursor:default}
.npc-item:hover{background:var(--bg2)}
.npc-ava{width:36px;height:36px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t1);overflow:hidden;flex-shrink:0}
.npc-ava img{width:100%;height:100%;object-fit:cover;display:block}
.npc-inf{flex:1;min-width:0}
.npc-nm{font-size:13px;font-weight:500;color:var(--t0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.npc-sub{font-family:var(--mono);font-size:10px;color:var(--t2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.npc-play-btn{padding:4px 10px;border-radius:var(--r);border:1px solid rgba(155,111,212,.4);background:rgba(155,111,212,.1);color:var(--pu);font-family:var(--mono);font-size:10px;font-weight:600;cursor:pointer;transition:all .15s;white-space:nowrap;flex-shrink:0}
.npc-play-btn:hover{background:rgba(155,111,212,.25);border-color:var(--pu)}
.npc-play-btn:disabled{opacity:.4;cursor:not-allowed}
/* DM action boxes */
.dm-action-box{padding:12px;background:var(--bg2);border-radius:var(--r);margin:8px 12px;border:1px solid var(--ln)}
.dm-action-label{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--t2);margin-bottom:8px;display:flex;align-items:center;gap:6px}
.dm-action-label i{font-size:11px}
.dm-textarea{width:100%;background:var(--bg3);border:1px solid var(--ln2);color:var(--t0);font-family:var(--sans);font-size:12px;padding:7px 10px;border-radius:var(--r);outline:none;resize:vertical;min-height:52px;line-height:1.5;transition:border-color var(--tr)}
.dm-textarea:focus{border-color:var(--pu)}
.dm-select{width:100%;background:var(--bg3);border:1px solid var(--ln2);color:var(--t0);font-family:var(--mono);font-size:11px;padding:6px 8px;border-radius:var(--r);outline:none;margin-bottom:8px}
.dm-btn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;padding:7px 12px;border-radius:var(--r);font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .15s;border:1px solid}
.dm-btn.purple{border-color:var(--pu);background:rgba(155,111,212,.12);color:var(--pu)}
.dm-btn.purple:hover{background:rgba(155,111,212,.25)}
.dm-btn.amber{border-color:var(--am);background:var(--am-d);color:var(--am)}
.dm-btn.amber:hover{background:rgba(232,167,74,.25)}
.dm-btn.green{border-color:var(--gn);background:var(--gn-d);color:var(--gn)}
.dm-btn.green:hover{background:rgba(77,184,128,.25)}
.dm-btn:disabled{opacity:.4;cursor:not-allowed}
/* Queue items */
.dm-queue-item{padding:10px 14px;border-bottom:1px solid var(--ln);transition:background .12s}
.dm-queue-item:hover{background:var(--bg2)}
.dm-qi-head{display:flex;align-items:center;gap:6px;margin-bottom:5px}
.dm-qi-type{font-family:var(--mono);font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;padding:1px 6px;border-radius:2px}
.dm-qi-type.event{background:rgba(155,111,212,.15);color:var(--pu);border:1px solid rgba(155,111,212,.3)}
.dm-qi-type.dispatch{background:var(--am-d);color:var(--am);border:1px solid rgba(232,167,74,.3)}
.dm-qi-title{font-size:12px;font-weight:500;color:var(--t0);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dm-qi-sev{font-family:var(--mono);font-size:9px;font-weight:600;padding:1px 5px;border-radius:2px;text-transform:uppercase}
.dm-qi-body{font-size:11px;color:var(--t1);line-height:1.5;margin-bottom:6px}
.dm-qi-actions{display:flex;gap:6px}
.dm-qi-btn{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 8px;border-radius:var(--r);cursor:pointer;border:1px solid;background:none;transition:all .12s}
.dm-qi-btn.approve{border-color:var(--gn);color:var(--gn)}.dm-qi-btn.approve:hover{background:var(--gn-d)}
.dm-qi-btn.reject{border-color:var(--t3);color:var(--t2)}.dm-qi-btn.reject:hover{background:var(--bg4)}
/* Context bar */
.dm-ctx-entry{padding:10px 14px;border-bottom:1px solid var(--ln)}
.dm-ctx-time{font-family:var(--mono);font-size:9px;color:var(--t3);margin-bottom:4px}
.dm-ctx-text{font-size:12px;color:var(--t1);line-height:1.55}
/* NPC trigger modal */
#m-npc-trigger .mbox{max-width:480px}
/* Reading pulse */
.dm-read-pill{display:flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;padding:3px 8px;border-radius:2px;border:1px solid var(--ln);transition:all var(--tr);color:var(--t3);margin-bottom:6px}
.dm-read-pill:hover{background:var(--bg3);color:var(--t1)}
.dm-read-pill.reading{color:var(--pu);border-color:rgba(155,111,212,.3);background:rgba(155,111,212,.1)}
.dm-read-pill.ready{color:var(--gn);border-color:rgba(77,184,128,.3);background:var(--gn-d)}
@media(max-width:768px){#dm-ma .dm-col:first-child{display:none}}
/* Master Agent chat */
#dm-ma{background:var(--bg0)}
.ma-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;flex:1;color:var(--t3);text-align:center;padding:32px}
.ma-empty i{font-size:28px;color:rgba(155,111,212,.4)}
.ma-empty p{font-size:12px;line-height:1.7}
.ma-empty small{font-size:10px;color:var(--t3)}
.ma-msg{padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.65;max-width:88%;word-break:break-word}
.ma-user{align-self:flex-end;background:rgba(155,111,212,.15);border:1px solid rgba(155,111,212,.25);color:var(--t0)}
.ma-model{align-self:flex-start;background:var(--bg2);border:1px solid var(--ln);color:var(--t1)}
.ma-code{background:var(--bg0);border:1px solid var(--ln);border-radius:6px;padding:8px 10px;font-family:var(--mono);font-size:11px;color:var(--t1);overflow-x:auto;margin:6px 0;white-space:pre-wrap}
.ma-inline{background:var(--bg3);padding:1px 5px;border-radius:3px;font-family:var(--mono);font-size:11px;color:var(--pu)}

</style>

<!-- Lore Keeper — Tam Sayfa Panel -->
<div class="view" id="view-lore" style="display:none">
  <!-- Character detail modal -->
  <div id="lk-char-modal" style="display:none;position:absolute;inset:0;z-index:200;background:rgba(0,0,0,.75);backdrop-filter:blur(4px);align-items:center;justify-content:center" onclick="if(event.target===this)LoreKeeper._closeCharModal()">
    <div style="background:var(--bg1);border:1px solid rgba(80,200,150,.35);border-radius:12px;width:min(520px,92vw);max-height:80vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 0 40px rgba(80,200,150,.12)">
      <div id="lk-cm-head" style="display:flex;gap:0;flex-shrink:0">
        <img id="lk-cm-img" style="width:110px;height:130px;object-fit:cover;border-radius:12px 0 0 0;display:none">
        <div id="lk-cm-img-ph" style="width:110px;height:130px;background:var(--bg3);display:flex;align-items:center;justify-content:center;font-size:40px;border-radius:12px 0 0 0;flex-shrink:0">👤</div>
        <div style="flex:1;padding:14px 16px;display:flex;flex-direction:column;gap:5px;min-width:0">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
            <div>
              <div id="lk-cm-name" style="font-size:15px;color:var(--t0);font-weight:700;line-height:1.2"></div>
              <div id="lk-cm-alias" style="font-size:11px;color:var(--t3);margin-top:2px"></div>
            </div>
            <button onclick="LoreKeeper._closeCharModal()" style="background:none;border:none;color:var(--t3);font-size:16px;cursor:pointer;padding:0;flex-shrink:0">✕</button>
          </div>
          <div id="lk-cm-badges" style="display:flex;gap:5px;flex-wrap:wrap"></div>
          <div id="lk-cm-player" style="font-size:10px;color:var(--t3)"></div>
        </div>
      </div>
      <div style="height:1px;background:var(--ln);flex-shrink:0"></div>
      <div id="lk-cm-body" style="flex:1;overflow-y:auto;padding:14px 16px;font-size:11px;color:var(--t1);line-height:1.6"></div>
      <div style="height:1px;background:var(--ln);flex-shrink:0"></div>
      <div style="padding:10px 14px;display:flex;gap:8px;flex-shrink:0">
        <button id="lk-cm-edit-btn" style="flex:1;padding:7px 0;font-size:10px;background:var(--bg3);border:1px solid var(--ln);color:var(--t2);border-radius:6px;cursor:pointer;font-family:var(--mono)" onclick="LoreKeeper._closeCharModal();LoreKeeper._openCharEdit(LoreKeeper._modalKey)">✏️ Kanon'u Düzenle</button>
        <button id="lk-cm-db-btn" style="flex:1;padding:7px 0;font-size:10px;background:rgba(80,200,150,.12);border:1px solid rgba(80,200,150,.4);color:#50c896;border-radius:6px;cursor:pointer;font-family:var(--mono)" onclick="LoreKeeper._openInDB(LoreKeeper._modalDbId)">🗂 NYC_DB'de Aç</button>
      </div>
    </div>
  </div>
  <div id="lk-header">
    <span style="font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.15em;color:var(--t2);text-transform:uppercase"><i class="fas fa-scroll" style="margin-right:6px;color:#50c896"></i>NYC<span style="color:#50c896">_</span>LORE</span>
    <div class="adm-sep"></div>
    <div class="adm-st">
      <div class="sdot" style="background:#50c896"></div>
      <span style="color:#50c896;font-family:var(--mono);font-size:11px">Lore Keeper</span>
    </div>
    <div class="adm-sep"></div>
    <span style="font-family:var(--mono);font-size:10px;color:var(--t3)" id="lk-status">—</span>
    <div class="adm-spc"></div>
    <button class="adm-btn" style="font-size:10px" onclick="LoreKeeper.importMD()" title="Markdown'dan içe aktar">📥 İçe Aktar</button>
    <button class="adm-btn" style="font-size:10px" onclick="LoreKeeper.newChar()">+ Karakter</button>
    <button class="adm-btn" style="font-size:10px;background:rgba(80,200,150,.12);border-color:rgba(80,200,150,.4);color:#50c896" onclick="LoreKeeper.save()" id="lk-save-btn">💾 Kaydet</button>
    <button class="adm-btn" onclick="LoreKeeper.close()"><i class="fas fa-arrow-left"></i> RP'ye Dön</button>
  </div>
  <div id="lk-body">
    <!-- Sol: Bölüm sekmeleri -->
    <div id="lk-tabs"></div>
    <!-- Orta: İtem listesi -->
    <div id="lk-list"></div>
    <!-- Sağ: İçerik / Editör + AI Chat -->
    <div id="lk-main">
      <!-- Mod çubuğu -->
      <div id="lk-mode-bar">
        <span style="font-size:10px;color:var(--t3);font-family:var(--mono)" id="lk-doc-title">(belge seçilmedi)</span>
        <div style="flex:1"></div>
        <button class="lk-mode-btn active" id="lk-btn-read" data-mode="read" onclick="LoreKeeper.setMode('read')">👁 Oku</button>
        <button class="lk-mode-btn" id="lk-btn-edit" data-mode="edit" onclick="LoreKeeper.setMode('edit')">✏️ Düzenle</button>
      </div>
      <!-- Okuma alanı -->
      <div id="lk-content"></div>
      <!-- Editör alanı -->
      <div id="lk-editor">
        <textarea id="lk-editor-inp" placeholder="Markdown içerik buraya…"></textarea>
      </div>
      <!-- AI Sohbet -->
      <div id="lk-chat-area">
        <div id="lk-chat-log"></div>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="lk-inp" type="text" placeholder="Bu lore hakkında bir şey sor… (Enter)" style="flex:1;background:var(--bg3);border:1px solid var(--ln);color:var(--t1);border-radius:6px;padding:7px 12px;font-size:11px;font-family:var(--sans);outline:none" onkeydown="if(event.key==='Enter')LoreKeeper.ask()">
          <button onclick="LoreKeeper.ask()" style="background:#50c896;border:none;color:#000;border-radius:6px;padding:7px 14px;cursor:pointer;font-size:11px;font-family:var(--mono);font-weight:700">Sor</button>
          <button onclick="LoreKeeper.clearChat()" style="background:var(--bg3);border:1px solid var(--ln);color:var(--t3);border-radius:6px;padding:7px 10px;cursor:pointer;font-size:10px" title="Sohbeti temizle">🗑️</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Master Agent Panel View -->
<div class="view" id="view-dm" style="display:none">
  <div id="dm-header">
    <span class="dm-brand" style="color:var(--pu)"><i class="fas fa-robot" style="margin-right:5px;font-size:11px"></i>NYC<em>_</em>MA</span>
    <div class="adm-sep"></div>
    <div class="adm-st">
      <div class="sdot" id="dm-sdot" style="background:var(--pu)"></div>
      <span id="dm-stxt" style="color:var(--pu)">Master Agent</span>
    </div>
    <div class="adm-sep"></div>
    <span style="font-family:var(--mono);font-size:10px;color:var(--t3)" id="dm-ctx-count" title="MA'nın gönderdiği mesaj sayısı">MA mesajları: 0</span>
    <div class="adm-spc"></div>
    <button class="adm-btn" onclick="DMPanel.close()"><i class="fas fa-arrow-left"></i> RP'ye Dön</button>
  </div>

  <!-- ── Master Agent ── -->
  <div id="dm-ma" style="flex:1;display:flex;flex-direction:row;overflow:hidden">

    <!-- LEFT: MA Characters panel -->
    <div class="dm-col" style="width:260px;flex-shrink:0">
      <div class="dm-col-head">
        <span class="dm-col-title"><i class="fas fa-robot" style="margin-right:5px;color:var(--pu)"></i>MA Panel</span>
        <button onclick="MAPanel.loadMAChars()" style="background:none;border:none;color:var(--t3);cursor:pointer;font-size:11px" title="Karakterleri Yenile"><i class="fas fa-sync-alt"></i></button>
      </div>
      <!-- MA Settings -->
      <div style="padding:8px 12px;border-bottom:1px solid var(--ln);background:var(--bg2)">
        <div style="font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px">MA Ayarları</div>
        <div style="display:flex;flex-direction:column;gap:5px">
          <label style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--t1);cursor:pointer" title="MA mesaj attıktan sonra oyuncu yanıt verince sahneyi otomatik devam ettirir (2dk pencere, 45s cooldown)">
            <input type="checkbox" id="ma-auto-chk" onchange="MasterAgent._autoEnabled=this.checked;document.getElementById('ma-auto-toggle').textContent='🤖 Oto: '+(this.checked?'AÇ':'KPL');document.getElementById('ma-auto-toggle-2')&&(document.getElementById('ma-auto-toggle-2').textContent='🤖 Oto: '+(this.checked?'AÇ':'KAPALI'))" checked>
            Oto Sahne Devamı
          </label>
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:10px;color:var(--t2);font-family:var(--mono)">Model:</span>
            <select id="ma-model-sel" onchange="window._MA_MODEL=this.value"
              style="flex:1;background:var(--bg3);border:1px solid var(--ln);color:var(--t1);font-family:var(--mono);font-size:10px;padding:2px 4px;border-radius:4px">
              <option value="gemini-2.5-flash" selected>2.5 Flash</option>
              <option value="gemini-2.0-flash">2.0 Flash</option>
              <option value="gemini-2.5-pro">2.5 Pro</option>
            </select>
          </div>
          <div style="display:flex;gap:4px">
            <button class="adm-btn" style="font-size:9px;flex:1;color:var(--rd)" onclick="MasterAgent.clear()"><i class="fas fa-trash"></i> Sohbeti Sil</button>
            <button class="adm-btn" style="font-size:9px;flex:1;color:var(--gn)" onclick="MasterAgent.loadHistory()"><i class="fas fa-download"></i> Tarihi Yükle</button>
          </div>
        </div>
      </div>
      <!-- MA Genel Sohbet butonu -->
      <div id="ma-general-chat-btn" onclick="MAPanel.openGeneralChat()"
        style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid var(--ln);cursor:pointer;background:var(--bg1);transition:background .15s"
        onmouseover="this.style.background='var(--bg2)'" onmouseout="this.style.background='var(--bg1)'">
        <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,rgba(155,111,212,.35),rgba(74,143,226,.25));border:1px solid rgba(155,111,212,.5);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">🤖</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:600;color:var(--t0)">Master Agent</div>
          <div style="font-size:10px;color:var(--t3)">Genel sohbet</div>
        </div>
        <div id="ma-general-active-dot" style="display:none;width:7px;height:7px;border-radius:50%;background:var(--pu);flex-shrink:0"></div>
      </div>
      <!-- Karakterler başlığı -->
      <div style="padding:6px 12px 4px;font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid var(--ln)">Oynanan Karakterler</div>
      <!-- MA char list -->
      <div class="dm-body" id="ma-char-list">
        <div class="empty" style="font-size:11px;padding:20px"><i class="fas fa-robot" style="color:rgba(155,111,212,.3)"></i><p style="color:var(--t3)">MA henüz karakter oynamadı.</p></div>
      </div>
    </div>

    <!-- RIGHT: Chat area -->
    <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0">
      <!-- Chat header — kimin sohbetinde olduğunu gösterir -->
      <div id="ma-chat-header" style="height:40px;border-bottom:1px solid var(--ln);background:var(--bg1);display:flex;align-items:center;gap:10px;padding:0 16px;flex-shrink:0">
        <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,rgba(155,111,212,.35),rgba(74,143,226,.25));border:1px solid rgba(155,111,212,.5);display:flex;align-items:center;justify-content:center;font-size:11px" id="ma-chat-header-icon">🤖</div>
        <div>
          <span style="font-size:12px;font-weight:600;color:var(--t0)" id="ma-chat-header-name">Master Agent</span>
          <span style="font-size:10px;color:var(--t3);margin-left:6px" id="ma-chat-header-sub">Genel sohbet</span>
        </div>
        <div style="flex:1"></div>
        <button id="ma-chat-back-btn" onclick="MAPanel.closeCharChat()" style="display:none;background:none;border:none;color:var(--t3);cursor:pointer;font-size:11px;padding:3px 8px;border-radius:4px;border:1px solid var(--ln)" title="Geri dön"><i class="fas fa-arrow-left"></i> Geri</button>
      </div>
      <!-- Chat history -->
      <div id="ma-chat" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px">
        <div class="ma-empty"><i class="fas fa-robot"></i><p>Master Agent hazır.<br><small>Herhangi bir RP sorusu sorun veya bir eylem isteyin.</small></p></div>
      </div>

      <!-- Thinking indicator -->
      <div id="ma-thinking" style="display:none;align-items:center;gap:8px;padding:8px 16px;border-top:1px solid var(--ln);color:var(--t3);font-size:11px;font-family:var(--mono)">
        <i class="fas fa-spinner fa-spin" style="color:var(--pu)"></i> Master Agent düşünüyor…
      </div>

      <!-- Quick actions -->
      <div style="display:flex;gap:5px;padding:8px 16px;border-top:1px solid var(--ln);background:var(--bg1);flex-wrap:wrap;align-items:center">
        <button class="adm-btn" style="font-size:10px" onclick="MasterAgent.send('Mevcut RP durumunu özetle.')"><i class="fas fa-clipboard-list"></i> 📋 Durum</button>
        <button class="adm-btn" style="font-size:10px" onclick="MasterAgent.send('Observer AI birikmiş mesajlarını hemen işle ve bana sonuçları söyle. FLUSH_OAI')"><i class="fas fa-bolt"></i> ⚡ OAI</button>
        <button class="adm-btn" style="font-size:10px" onclick="MasterAgent.send('DM bağlamını şimdi güncelle ve son gelişmeleri özetle. READ_DM')"><i class="fas fa-book-open"></i> 📖 DM</button>
        <button class="adm-btn" style="font-size:10px" onclick="MasterAgent.send('Mevcut RP atmosferine uygun küçük bir sokak olayı veya NPC hareketi yarat ve doğrudan sahneye yaz (SEND_MSG kullan).')"><i class="fas fa-globe"></i> 🌐 Olay</button>
        <button class="adm-btn" style="font-size:10px;border-color:rgba(232,167,74,.4);color:var(--am)" onclick="MASidebar.setupAct()"><i class="fas fa-city"></i> 🌆 Setup At</button>
        <button class="adm-btn" style="font-size:10px" onclick="MAPanel._entityCheckPanel()" title="Son mesajlarda geçen entity'leri tara"><i class="fas fa-tags"></i> 🏷️ Entity</button>
        <button class="adm-btn" style="font-size:10px;border-color:rgba(74,143,226,.4);color:var(--ac)" onclick="Session.startDialog()" title="Yeni RP Sessionu başlat"><i class="fas fa-film"></i> 🎬 Session</button>
        <button id="ma-panel-auto-toggle" class="adm-btn" style="font-size:10px" onclick="MAPanel._toggleAuto()" title="MA otomatik sahne devam ettirme"><i class="fas fa-robot"></i> <span id="ma-panel-auto-txt">🤖 Oto: AÇ</span></button>
        <button id="ma-panel-oai-btn" class="adm-btn" style="font-size:10px" onclick="MAPanel._toggleOAI()" title="Observer AI aç/kapat"><span id="ma-panel-oai-txt">Observer AI: OFF</span></button>
        <button class="adm-btn" style="font-size:10px;border-color:rgba(80,200,150,.4);color:#50c896" onclick="LoreKeeper.open()" title="Lore Keeper — kanon arşivi, editör ve AI sohbet"><i class="fas fa-scroll"></i> 📖 Lore Keeper</button>
        <button class="adm-btn" style="font-size:10px;border-color:rgba(155,111,212,.4);color:var(--pu)" onclick="MAPanel.loadMAChars()"><i class="fas fa-sync-alt"></i></button>
      </div>

      <!-- Oto-devam oda seçimi -->
      <div style="display:flex;align-items:center;gap:8px;padding:4px 12px 0;border-top:1px solid var(--ln)">
        <span style="font-family:var(--mono);font-size:9px;color:var(--t3);white-space:nowrap">🤖 Oto Oda:</span>
        <select id="ma-auto-room-select" onchange="MAPanel._autoRoomId=this.value||null"
          style="flex:1;background:var(--bg2);border:1px solid var(--ln);color:var(--t1);border-radius:4px;padding:2px 5px;font-family:var(--mono);font-size:9px;outline:none">
          <option value="">— Aktif oda (otomatik) —</option>
        </select>
      </div>

      <!-- Input area with room selector -->
      <div style="border-top:1px solid var(--ln);background:var(--bg0)">
        <div style="display:flex;align-items:center;gap:8px;padding:6px 16px 0">
          <span style="font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:.08em;white-space:nowrap">Mesaj Odası:</span>
          <select id="ma-room-select" style="flex:1;background:var(--bg2);border:1px solid var(--ln);color:var(--t1);border-radius:5px;padding:3px 6px;font-family:var(--mono);font-size:10px;outline:none">
            <option value="">— Aktif oda (otomatik) —</option>
          </select>
        </div>
        <div style="display:flex;gap:8px;padding:8px 16px 10px">
          <textarea id="ma-inp" rows="2" placeholder="Master Agent'a bir soru sor veya eylem isteyin… (Enter gönder, Shift+Enter satır atla)"
            style="flex:1;background:var(--bg2);border:1px solid var(--ln);color:var(--t1);border-radius:8px;padding:8px 12px;font-family:var(--sans);font-size:12px;resize:none;line-height:1.5"
            onkeydown="MasterAgent.onKey(event)"></textarea>
          <button onclick="MasterAgent.submit()"
            style="align-self:flex-end;background:linear-gradient(135deg,#7c4dff,#9b6fd4);border:none;color:#fff;border-radius:8px;padding:8px 14px;cursor:pointer;font-size:13px;height:36px">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Lore Keeper — Tam Sayfa Panel (view-lore) -->


<!-- NPC Trigger Modal -->
<div class="mbd hidden" id="m-npc-trigger">
  <div class="mbox" style="max-width:480px">
    <div class="mhd">
      <span class="mti" id="npc-trigger-title">NPC Oynat</span>
      <button class="mcl" onclick="CM('m-npc-trigger')"><i class="fas fa-times"></i></button>
    </div>
    <div class="mbdy">
      <div class="ff">
        <label class="fl">Oda</label>
        <select id="npc-trigger-room" class="fi-inp" style="font-family:var(--mono)"></select>
      </div>
      <div class="ff">
        <label class="fl">Yönerge (isteğe bağlı)</label>
        <textarea id="npc-trigger-instruction" class="fi-inp" rows="3" placeholder="Örn: 'Şüpheli davran', 'Anlaşmayı kabul et', 'Wrench'i tehdit et'…" style="resize:vertical"></textarea>
      </div>
    </div>
    <div class="mft">
      <button class="btn btn-g" onclick="CM('m-npc-trigger')">İptal</button>
      <button class="btn btn-p" id="npc-trigger-confirm" style="background:var(--pu)" onclick="DMPanel.triggerNPC()">
        <i class="fas fa-play"></i> Oynat
      </button>
    </div>
  </div>
</div>

<!-- Create NPC Modal -->
<div class="mbd hidden" id="m-create-npc">
  <div class="mbox" style="max-width:480px">
    <div class="mhd">
      <span class="mti">Anlık NPC Yarat</span>
      <button class="mcl" onclick="CM('m-create-npc')"><i class="fas fa-times"></i></button>
    </div>
    <div class="mbdy">
      <div class="ff">
        <label class="fl">Oda</label>
        <select id="npc-create-room" class="fi-inp" style="font-family:var(--mono)"></select>
      </div>
      <div class="ff">
        <label class="fl">Açıklama</label>
        <textarea id="npc-create-desc" class="fi-inp" rows="3" placeholder="Örn: 'Barda oturan gizemli bir adam, yüzü görünmüyor, Aurelio'yu izliyor gibiydi'…" style="resize:vertical"></textarea>
      </div>
    </div>
    <div class="mft">
      <button class="btn btn-g" onclick="CM('m-create-npc')">İptal</button>
      <button class="btn btn-p" style="background:var(--pu)" onclick="DMPanel.createNPC()">
        <i class="fas fa-magic"></i> Yarat & Sahneye Çıkar
      </button>
    </div>
  </div>
</div>

<!-- Generate Event Modal -->
<div class="mbd hidden" id="m-gen-event">
  <div class="mbox" style="max-width:480px">
    <div class="mhd">
      <span class="mti">Dünya Olayı Üret</span>
      <button class="mcl" onclick="CM('m-gen-event')"><i class="fas fa-times"></i></button>
    </div>
    <div class="mbdy">
      <div class="ff">
        <label class="fl">Tür</label>
        <select id="event-type-sel" class="fi-inp" style="font-family:var(--mono)">
          <option value="manual">Manuel</option>
          <option value="faction_tension">Faction Gerilimi</option>
          <option value="incident">Olay Sonrası</option>
        </select>
      </div>
      <div class="ff">
        <label class="fl">Yönerge</label>
        <textarea id="event-instruction" class="fi-inp" rows="3" placeholder="Örn: 'Providence ve NYPD arasında gerilim arttı, bir ajan ifşa oldu'…" style="resize:vertical"></textarea>
      </div>
    </div>
    <div class="mft">
      <button class="btn btn-g" onclick="CM('m-gen-event')">İptal</button>
      <button class="btn" style="background:var(--am-d);border:1px solid var(--am);color:var(--am)" onclick="DMPanel.generateEvent()">
        <i class="fas fa-globe"></i> Üret (Admin Onayı Gerekir)
      </button>
    </div>
  </div>
</div>

<!-- Generate Dispatch Modal -->
<div class="mbd hidden" id="m-gen-dispatch">
  <div class="mbox" style="max-width:480px">
    <div class="mhd">
      <span class="mti">Dispatch Üret</span>
      <button class="mcl" onclick="CM('m-gen-dispatch')"><i class="fas fa-times"></i></button>
    </div>
    <div class="mbdy">
      <div class="ff">
        <label class="fl">Organizasyon / Tip</label>
        <select id="dispatch-org-sel" class="fi-inp" style="font-family:var(--mono)">
          <option value="">— Genel / Sistem —</option>
        </select>
      </div>
      <div class="ff">
        <label class="fl">Tür</label>
        <select id="dispatch-type-sel" class="fi-inp" style="font-family:var(--mono)">
          <option value="nypd">NYPD</option>
          <option value="faction">Faction</option>
          <option value="system">Sistem</option>
          <option value="civilian">Sivil</option>
        </select>
      </div>
      <div class="ff">
        <label class="fl">Yönerge / Olay</label>
        <textarea id="dispatch-instruction" class="fi-inp" rows="3" placeholder="Örn: 'Lower East Side'da silahlı çatışma, 2 yaralı'…" style="resize:vertical"></textarea>
      </div>
    </div>
    <div class="mft">
      <button class="btn btn-g" onclick="CM('m-gen-dispatch')">İptal</button>
      <button class="btn" style="background:rgba(155,111,212,.12);border:1px solid var(--pu);color:var(--pu)" onclick="DMPanel.generateDispatch()">
        <i class="fas fa-radio"></i> Üret (Admin Onayı Gerekir)
      </button>
    </div>
  </div>
</div>

<!-- DM Engine + Panel (inlined — no external JS dependencies) -->
<script>
/**
 * dm_engine.js — Dungeon Master AI Engine (INLINED)
 */
'use strict';
const DM_CFG = new Proxy({}, {
  get(_, key) { return (window.DM_CONFIG || {})[key]; },
});
const DM = {
  get GEM_MODEL()        { return window.DM_CONFIG?.geminiModel       || 'gemini-3.6-flash'; },
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
const DMFB = {
  _db() {
    if (!window._fbDb) throw new Error('[DM] Firebase hazır değil (window._fbDb yok)');
    return window._fbDb;
  },
  _fs() {
    if (!window._fbFirestore) throw new Error('[DM] Firebase Firestore SDK eksik');
    return window._fbFirestore;
  },
  _col(name) { return (DM.COLLECTION_PREFIX || '') + name; },
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
    await setDoc(doc(this._db(), colName, docId), { ...data, created_at: data.created_at || new Date().toISOString() });
    return docId;
  },
  async updateDoc(colName, docId, data) {
    const { doc, updateDoc } = this._fs();
    await updateDoc(doc(this._db(), colName, docId), { ...data, updated_at: new Date().toISOString() });
  },
  async addDoc(colName, data) {
    const { collection, addDoc } = this._fs();
    const ref = await addDoc(collection(this._db(), colName), { ...data, created_at: data.created_at || new Date().toISOString() });
    return ref.id;
  },
  async postRpMessage(roomId, msgData) {
    const { collection, addDoc } = this._fs();
    const col = this._col('rp_rooms');
    const ref = await addDoc(collection(this._db(), col, roomId, 'messages'), { ...msgData, created_at: new Date().toISOString() });
    return ref.id;
  },
  async getRecentMessages(roomId, lim = 12) {
    const { collection, query, orderBy, limit, getDocs } = this._fs();
    const col  = this._col('rp_rooms');
    const snap = await getDocs(query(collection(this._db(), col, roomId, 'messages'), orderBy('created_at', 'desc'), limit(lim)));
    return snap.docs.map(d => ({ id: d.id, ...d.data() })).reverse();
  },
  increment(n = 1) { return this._fs().increment(n); },
  _incSession(field) {
    const col = this._col('dm_session');
    this.updateDoc(col, 'main', { [field]: this.increment(1) }).catch(() => {});
  },
};
const DMGemini = {
  GEMINI_BASE: 'https://generativelanguage.googleapis.com/v1beta/models',
  async generate(prompt, opts = {}) {
    const key = window.DM_CONFIG?.geminiKey;
    if (!key || key === '__GEMINI_KEY__') throw new Error('[DM] Gemini API key ayarlanmamış');
    const model = DM.GEM_MODEL;
    const res = await fetch(`${DMGemini.GEMINI_BASE}/${model}:generateContent?key=${key}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: opts.temperature ?? 0.75, topP: opts.topP ?? 0.9, maxOutputTokens: opts.maxOutputTokens ?? 1500, responseMimeType: opts.json ? 'application/json' : 'text/plain' },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        ],
      }),
    });
    if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(`[DM] Gemini hata ${res.status}: ${err.error?.message || res.statusText}`); }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('[DM] Gemini boş yanıt döndürdü');
    if (opts.json) { const cleaned = text.replace(/^```json\s*/i,'').replace(/^```\s*/i,'').replace(/\s*```$/i,'').trim(); return JSON.parse(cleaned); }
    return text;
  },
};
const DMWorld = {
  CACHE_TTL: 60 * 60 * 1000,
  async load(force = false) {
    if (!force && DM._worldCache && Date.now() - DM._worldCacheAt < this.CACHE_TTL) return DM._worldCache;
    try {
      let d = null;
      if (typeof window._fbLoadDB === 'function') d = await window._fbLoadDB(DM.DB_TABLE);
      if (!d) { const row = await DMFB.getDoc(DM.DB_TABLE, 'main'); if (!row) throw new Error('Main DB doc not found'); d = row.data || row; }
      if (typeof d === 'string') d = JSON.parse(d);
      DM._worldCache   = { characters: d.characters || [], organizations: d.organizations || [] };
      DM._worldCacheAt = Date.now();
      return DM._worldCache;
    } catch (e) { console.warn('[DM] World load failed:', e.message); return DM._worldCache || { characters: [], organizations: [] }; }
  },
  async getNPCs() { const w = await this.load(); return w.characters.filter(c => (!c.playerId || c.playerId === '') && c.status !== 'Deceased'); },
  async getChar(id) { const w = await this.load(); return w.characters.find(c => c.id === id) || null; },
  async getOrg(id) { const w = await this.load(); return w.organizations.find(o => o.id === id) || null; },
  async buildRoster() {
    const w = await this.load();
    const npcList = w.characters.filter(c => (!c.playerId || c.playerId === '') && c.status !== 'Deceased').map(c => {
      const orgIds = c.organizations || (c.organization ? [c.organization] : []);
      const orgNames = orgIds.map(oid => w.organizations.find(o => o.id === oid)?.name || oid).join(', ');
      return `• [NPC] ${c.name} [${c.id}] alias="${c.alias||''}" org="${orgNames}" story="${(c.story||'').slice(0,120)}"`;
    }).join('\n');
    const pcList = w.characters.filter(c => c.playerId && c.status !== 'Deceased').map(c => {
      const pl = (DM_CFG.players || []).find(p => p.id === c.playerId);
      return `• [PC:${pl?.name || c.playerId}] ${c.name} [${c.id}]`;
    }).join('\n');
    const orgList = w.organizations.map(o => `• ${o.name} [${o.id}]`).join('\n');
    return `PLAYER CHARACTERS:\n${pcList||'(none)'}\n\nNPC CHARACTERS:\n${npcList||'(none)'}\n\nORGANIZATIONS:\n${orgList||'(none)'}`;
  },
};
const DMContext = {
  _window: [], MAX_ENTRIES: 6,
  async load() {
    try {
      const col = DMFB._col('dm_session');
      const row = await DMFB.getDoc(col, 'main');
      if (row && row.context_window) { this._window = row.context_window; DM._msgsSinceRead = 0; }
    } catch (e) {}
    await this._loadObserverSummaries();
  },
  async _loadObserverSummaries() {
    try {
      if (!window._fbDb || !window._fbFirestore) return;
      const {collection, query, where, orderBy, limit, getDocs} = window._fbFirestore;
      const db = window._fbDb;
      const q = query(collection(db, 'ai_summaries'), where('summary_type', '==', 'rp_session'), orderBy('created_at', 'desc'), limit(3));
      const snap = await getDocs(q);
      const rows = snap.docs.map(d => d.data());
      if (!rows?.length) return;
      const existing = new Set(this._window.map(e => e.summary?.slice(0,40)));
      for (const r of rows) {
        const preview = (r.content || '').slice(0, 40);
        if (existing.has(preview)) continue;
        this._window.push({ summary: `[Observer Özeti] ${r.title}\n${r.content}`, msg_count: 0, reason: 'observer_ai', created_at: r.created_at });
      }
      if (this._window.length > this.MAX_ENTRIES + 3) this._window = this._window.slice(0, this.MAX_ENTRIES + 3);
    } catch(e) { console.warn('[DMContext] Observer özetleri yüklenemedi:', e.message); }
  },
  async save() {
    try {
      const col = DMFB._col('dm_session');
      await DMFB.setDoc(col, 'main', { context_window: this._window, context_msg_count: this._window.reduce((s, e) => s + (e.msg_count || 0), 0), updated_at: new Date().toISOString() });
    } catch (e) { console.warn('[DMContext] save failed:', e.message); }
  },
  add(entry) { this._window.unshift(entry); if (this._window.length > this.MAX_ENTRIES) this._window = this._window.slice(0, this.MAX_ENTRIES); },
  toString() {
    if (!this._window.length) return '(No prior context — session just started)';
    return this._window.map((e, i) => `[Context ${i+1} — ${new Date(e.created_at).toLocaleString()}]\n${e.summary}`).join('\n\n---\n\n');
  },
};
const DMPrompts = {
  _base(roster, context) {
    return `You are the Dungeon Master AI for ${DM.WORLD_NAME} — a ${DM.WORLD==='nyc'?'cyberpunk crime-noir New York City':'cyberpunk neo-noir Tokyo'} roleplay universe.\n\nWORLD: ${DM.WORLD_NAME}\nYOUR ROLE: DM AI — you control NPC characters, generate world events, and write dispatch communications.\n\nRULES:\n- Stay true to the world's tone: ${DM.WORLD==='nyc'?'gritty, noir, urban crime, corporate power, street gangs':'neon-lit, yakuza, corporate dystopia, tradition vs technology'}\n- NPCs must speak/act consistent with their story, organization, and relationships\n- Never break character. Never reference being an AI.\n- Keep dialogue realistic and concise — RP style, not novel-writing\n- Organizations have agendas. NPCs have loyalties and secrets.\n\n${roster}\n\nRECENT SESSION CONTEXT:\n${context}`;
  },
  npcVoice(npcChar, triggerMsgs, roster, context, instruction='') {
    const orgIds = npcChar.organizations || (npcChar.organization ? [npcChar.organization] : []);
    return `${this._base(roster, context)}\n\n---\nYOU ARE NOW PLAYING: ${npcChar.name}\nCharacter ID: ${npcChar.id}\nAlias: ${npcChar.alias||'None'}\nOrganizations: ${orgIds.join(', ')||'None'}\nStory: ${npcChar.story||'Unknown background'}\n${npcChar.reputation?`Reputation: ${JSON.stringify(npcChar.reputation)}`:''}\n\nRECENT MESSAGES (what just happened in the scene):\n${triggerMsgs.map(m=>`[${m.char_name}${m.org_name?' ['+m.org_name+']':''}]: ${m.content}`).join('\n')}\n\n${instruction?`OPERATOR INSTRUCTION: ${instruction}`:'Respond naturally as this character based on the recent scene.'}\n\nWrite ONLY the character's response. No narration wrapper. No quotation marks around the whole thing.\nFormat: If it's dialogue, just write what they say. If it's an action, wrap in [brackets].\nKeep it 1-4 sentences unless the situation demands more.`;
  },
  worldEvent(triggerType, context, roster, extraInstruction='') {
    return `${this._base(roster, context)}\n\n---\nTASK: Generate a world event for the ${DM.WORLD_NAME} setting.\nTrigger type: ${triggerType}\n${extraInstruction?`Operator guidance: ${extraInstruction}`:''}\n\nCreate a believable, tension-building event that:\n- Fits naturally into current RP context\n- Involves existing organizations or factions where possible\n- Has real consequences for the world\n- Is NOT random chaos — it should feel like cause and effect\n\nRespond ONLY with valid JSON (no markdown):\n{\n  "title": "short punchy title",\n  "event_type": "territorial|political|corporate|conflict|social|criminal",\n  "severity": "low|medium|high|critical",\n  "description": "2-3 sentence event description in world tone",\n  "consequences": "what changes as a result (1-2 sentences)",\n  "affected_orgs": ["org_id_1"],\n  "affected_chars": ["char_id_1"],\n  "location_hint": "district or location name if relevant"\n}`;
  },
  dispatch(org, callType, context, roster, incident='', extraInstruction='') {
    return `${this._base(roster, context)}\n\n---\nTASK: Write a radio/comms dispatch message.\nDispatching organization: ${org?.name||callType}\nCall type: ${callType}\n${incident?`Related incident: ${incident}`:''}\n${extraInstruction?`Operator guidance: ${extraInstruction}`:''}\n\nWrite a realistic dispatch message in the style of ${DM.WORLD==='nyc'?'NYPD/crime org radio chatter':'Tokyo PD/yakuza comms'}.\nInclude a call code, location if relevant, and keep it terse — dispatchers don't monologue.\n\nRespond ONLY with valid JSON:\n{\n  "call_code": "10-71 or ALPHA-3 or similar",\n  "title": "one-line summary",\n  "message": "the actual dispatch text (2-5 sentences max)",\n  "location_name": "location if relevant or empty string",\n  "severity": "low|medium|high|critical"\n}`;
  },
  buildContext(messages, existingContext) {
    const transcript = messages.map(m=>`[${m.char_name}${m.org_name?' ['+m.org_name+']':''}]: ${m.content}`).join('\n');
    return `You are the DM AI for ${DM.WORLD_NAME}. Build a compact context summary of the following RP session transcript.\n\nThis summary will be added to your context window to inform future NPC decisions and world events.\n\nEXISTING CONTEXT SUMMARY:\n${existingContext||'(none yet)'}\n\nNEW TRANSCRIPT (${messages.length} messages):\n${transcript}\n\nWrite a concise 3-5 sentence summary covering:\n1. What happened (key events, confrontations, deals)\n2. Who was involved and how relationships shifted\n3. Any unresolved tensions or open threads\n4. Notable locations mentioned\n\nBe factual and RP-specific. No meta-commentary. Write in present tense.`;
  },
  createNPC(description, context, roster) {
    return `${this._base(roster, context)}\n\n---\nTASK: Create a new NPC character for the current scene.\nOperator description: "${description}"\n\nGenerate a character that fits naturally into the current scene and world.\nThey should feel like they belong — not random, but organic to the environment.\n\nRespond ONLY with valid JSON:\n{\n  "name": "Full Name",\n  "alias": "street name or nickname or empty",\n  "story": "2-3 sentence background — who are they, what do they want, what secrets do they have",\n  "personality": "3-4 adjectives or short traits",\n  "organizations": [],\n  "threatLevel": "Low|Medium|High|Critical",\n  "heatLevel": "Clean|Warm|Hot|Burning|Scorched",\n  "opening_line": "the first thing they say or do when they appear in the scene (in-character)"\n}`;
  },
};
const DMNpc = {
  async trigger(charId, roomId, instruction='', operatorId='') {
    const [npcChar, roster, recentMsgs] = await Promise.all([DMWorld.getChar(charId), DMWorld.buildRoster(), DMFB.getRecentMessages(roomId, 12)]);
    if (!npcChar) throw new Error(`Character ${charId} not found`);
    if (npcChar.playerId) throw new Error(`${npcChar.name} is a PC — cannot be played by DM`);
    const prompt   = DMPrompts.npcVoice(npcChar, recentMsgs, roster, DMContext.toString(), instruction);
    const response = await DMGemini.generate(prompt, { temperature: 0.82 });
    const orgIds   = npcChar.organizations || (npcChar.organization ? [npcChar.organization] : []);
    const orgData  = orgIds.length ? await DMWorld.getOrg(orgIds[0]) : null;
    const msgId = await DMFB.postRpMessage(roomId, { char_id: npcChar.id, char_name: npcChar.name, char_alias: npcChar.alias||'', char_avatar: npcChar.image||'', org_id: orgData?.id||null, org_name: orgData?.name||null, org_color: orgData?.color||null, content: response.trim(), reactions: {}, is_edited: false, is_deleted: false, sent_by_user: `DM:${operatorId || DM.OPERATOR}` });
    DMFB.addDoc(DMFB._col('dm_npc_messages'), { npc_char_id: npcChar.id, npc_char_name: npcChar.name, content: response.trim(), message_type: 'dialogue', room_id: roomId, rp_message_id: msgId, trigger_msg_id: recentMsgs.length ? recentMsgs[recentMsgs.length-1].id : null, model_used: DM.GEM_MODEL, operator_id: operatorId || DM.OPERATOR }).catch(()=>{});
    DMFB._incSession('npc_messages_sent');
    return { content: response.trim(), char: npcChar, rp_msg_id: msgId };
  },
  async createAndTrigger(description, roomId, operatorId='') {
    const [roster, recentMsgs] = await Promise.all([DMWorld.buildRoster(), DMFB.getRecentMessages(roomId, 8)]);
    const npcData = await DMGemini.generate(DMPrompts.createNPC(description, DMContext.toString(), roster), { json: true, temperature: 0.85 });
    const tmpId = 'npc_' + DM.WORLD + '_' + Date.now();
    const newChar = { id: tmpId, name: npcData.name, alias: npcData.alias||'', story: npcData.story||'', organizations: [], playerId: '', status: 'Active', threatLevel: npcData.threatLevel||'Low', heatLevel: npcData.heatLevel||'Clean', image: '' };
    if (DM_CFG.saveInstantNPCs !== false) {
      try {
        let mainData = await window._fbLoadDB?.(DM.DB_TABLE);
        if (!mainData) { const row = await DMFB.getDoc(DM.DB_TABLE, 'main'); mainData = row?.data || row; }
        if (typeof mainData === 'string') mainData = JSON.parse(mainData);
        if (mainData) { mainData.characters = mainData.characters || []; mainData.characters.push(newChar); await DMFB.setDoc(DM.DB_TABLE, 'main', { data: mainData, updated_by: `DM:${operatorId}` }); DM._worldCache = null; }
      } catch (e) { console.warn('[DM] Could not save instant NPC:', e.message); }
    }
    const opening = npcData.opening_line || `*${newChar.name} enters the scene*`;
    await DMFB.postRpMessage(roomId, { char_id: tmpId, char_name: newChar.name, char_alias: newChar.alias, char_avatar: '', org_id: null, org_name: null, org_color: null, content: opening, reactions: {}, is_edited: false, is_deleted: false, sent_by_user: `DM:${operatorId || DM.OPERATOR}` });
    return { char: newChar, opening, npcData };
  },
};
const DMReader = {
  _reading: false,
  onMessage() { DM._msgsSinceRead++; if (DM._msgsSinceRead >= DM.READ_INTERVAL) this.read('auto'); },
  async read(reason='manual', roomId=null) {
    if (this._reading) return;
    this._reading = true; DM._msgsSinceRead = 0;
    try {
      const targetRoom = roomId || DM_CFG.activeRoomId;
      if (!targetRoom) { this._reading = false; return; }
      const msgs = await DMFB.getRecentMessages(targetRoom, 30);
      if (!msgs.length) { this._reading = false; return; }
      const summary = await DMGemini.generate(DMPrompts.buildContext(msgs, DMContext.toString()), { temperature: 0.3, maxOutputTokens: 600 });
      DMContext.add({ summary, msg_count: msgs.length, room_id: targetRoom, reason, created_at: new Date().toISOString() });
      await DMContext.save();
      DMFB._incSession('manual_reads');
      console.log(`[DM] Context updated (${reason}): ${msgs.length} msgs`);
      if (typeof DMEvents !== 'undefined') DMEvents.emit('context_updated', { reason, summary });
    } catch (e) { console.error('[DM] Read failed:', e); } finally { this._reading = false; }
  },
};
const DMWorldEvent = {
  async generate(triggerType='manual', instruction='', operatorId='') {
    const roster    = await DMWorld.buildRoster();
    const eventData = await DMGemini.generate(DMPrompts.worldEvent(triggerType, DMContext.toString(), roster, instruction), { json: true, temperature: 0.78 });
    const col = DMFB._col('dm_world_events');
    const id  = await DMFB.addDoc(col, { title: eventData.title, event_type: eventData.event_type||'tension', severity: eventData.severity||'medium', description: eventData.description, consequences: eventData.consequences||'', affected_orgs: eventData.affected_orgs||[], affected_chars: eventData.affected_chars||[], location_hint: eventData.location_hint||'', generated_from: triggerType, model_used: DM.GEM_MODEL, operator_id: operatorId||DM.OPERATOR, prompt_summary: instruction, status: 'pending' });
    DMFB._incSession('world_events_gen');
    return { ...eventData, id };
  },
  async approve(dmEventId, operatorId='') {
    const col = DMFB._col('dm_world_events');
    const ev  = await DMFB.getDoc(col, dmEventId);
    if (!ev) throw new Error('Event not found');
    const weId = await DMFB.addDoc(DMFB._col('world_events'), { title: ev.title, event_type: ev.event_type, severity: ev.severity, status: 'active', scope: 'local', description: ev.description, consequences: ev.consequences, factions: ev.affected_orgs, linked_characters: ev.affected_chars, event_date: new Date().toISOString(), is_public: true, source: 'ai_agent', created_by: `DM:${operatorId}` });
    await DMFB.updateDoc(col, dmEventId, { status: 'fired', reviewed_by: operatorId, reviewed_at: new Date().toISOString(), world_event_id: weId });
    return { worldEventId: weId, event: ev };
  },
  async reject(dmEventId, operatorId='', note='') { const col = DMFB._col('dm_world_events'); await DMFB.updateDoc(col, dmEventId, { status: 'rejected', reviewed_by: operatorId, review_note: note, reviewed_at: new Date().toISOString() }); },
};
const DMDispatch = {
  async generate(orgId='', callType='system', incident='', instruction='', operatorId='') {
    const [org, roster] = await Promise.all([orgId ? DMWorld.getOrg(orgId) : Promise.resolve(null), DMWorld.buildRoster()]);
    const dispData = await DMGemini.generate(DMPrompts.dispatch(org, callType, DMContext.toString(), roster, incident, instruction), { json: true, temperature: 0.65 });
    const col = DMFB._col('dm_dispatch_queue');
    const id  = await DMFB.addDoc(col, { call_type: callType, call_code: dispData.call_code||'', org_id: orgId||'', org_name: org?.name||callType, title: dispData.title, message: dispData.message, location_name: dispData.location_name||'', severity: dispData.severity||'medium', triggered_by: incident?'incident':'manual', operator_id: operatorId||DM.OPERATOR, model_used: DM.GEM_MODEL, status: 'pending' });
    DMFB._incSession('dispatches_gen');
    return { ...dispData, id };
  },
  async approve(dmDispId, roomId, operatorId='') {
    const col = DMFB._col('dm_dispatch_queue');
    const dq  = await DMFB.getDoc(col, dmDispId);
    if (!dq) throw new Error('Dispatch not found');
    const dcId = await DMFB.addDoc(DMFB._col('dispatch_calls'), { call_type: dq.call_type, call_code: dq.call_code, severity: dq.severity, status: 'active', title: dq.title, message: dq.message, location_name: dq.location_name, responding_org: dq.org_id, is_public: true, source: 'ai_agent', created_by: `DM:${operatorId}` });
    const dispMsg = `📡 **${dq.call_code?'['+dq.call_code+'] ':''}${dq.org_name||'DISPATCH'}**\n${dq.message}${dq.location_name?'\n📍 '+dq.location_name:''}`;
    const msgId = await DMFB.postRpMessage(roomId, { char_id: 'system_dispatch', char_name: dq.org_name||'DISPATCH', char_alias: dq.call_code||'', char_avatar: '', org_id: dq.org_id||null, org_name: dq.org_name||null, org_color: null, content: dispMsg, reactions: {}, is_edited: false, is_deleted: false, sent_by_user: `DM:${operatorId}` });
    await DMFB.updateDoc(col, dmDispId, { status: 'broadcast', reviewed_by: operatorId, reviewed_at: new Date().toISOString(), dispatch_call_id: dcId, broadcast_msg_id: msgId });
    return { dispatch_call_id: dcId, rp_msg_id: msgId, data: dq };
  },
  async reject(dmDispId, operatorId='', note='') { const col = DMFB._col('dm_dispatch_queue'); await DMFB.updateDoc(col, dmDispId, { status: 'rejected', reviewed_by: operatorId, review_note: note, reviewed_at: new Date().toISOString() }); },
};
const DMEvents = {
  _handlers: {},
  on(event, fn)    { (this._handlers[event] = this._handlers[event]||[]).push(fn); },
  off(event, fn)   { this._handlers[event] = (this._handlers[event]||[]).filter(h=>h!==fn); },
  emit(event, data){ (this._handlers[event]||[]).forEach(fn=>{ try{fn(data);}catch(e){} }); },
};
const DMInit = {
  async start() {
    console.log(`[DM] Initializing for world: ${DM.WORLD_NAME}`);
    let waited = 0;
    while (!window._fbDb && waited < 8000) { await new Promise(r => setTimeout(r, 100)); waited += 100; }
    if (!window._fbDb) throw new Error('[DM] Firebase Firestore hazır değil');
    await Promise.all([ DMWorld.load(true), DMContext.load() ]);
    const npcs = await DMWorld.getNPCs();
    console.log(`[DM] Ready. NPCs: ${npcs.length}`);
    DMEvents.emit('ready', { world: DM.WORLD, worldName: DM.WORLD_NAME });
  },
};
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
</script>
<script>
/* ════════════════════════════════════════════════════════
   WORLD CONFIG — only change this block per-world
   NYC: world='nyc', Tokyo: world='tokyo'
════════════════════════════════════════════════════════ */
/* ════════════════════════════════════════════════════════
   WORLD CONFIG — change these two lines for tokyo_rp.html
════════════════════════════════════════════════════════ */
window.DM_CONFIG = {
  // ── World identity ──────────────────────────────────
  world:            'nyc',
  worldName:        'NYC_DB',
  dbTable:          'nyc_db',
  collectionPrefix: '',        // NYC = no prefix; Tokyo uses 'tokyo_'

  // ── Gemini — key injected by GitHub Actions at build time ─────
  geminiKey:  '__GEMINI_KEY__',
  geminiModel:'gemini-3.6-flash',  // Editable from Admin → Observer AI config

  // ── Players (synced from USERS constant above) ──────
  players: [
    {id:'eren', name:'Eren', color:'#4a8fe2'},
    {id:'melih',name:'Melih',color:'#9b6fd4'},
    {id:'tuna', name:'Tuna', color:'#4db880'},
    {id:'nes',  name:'Nes',  color:'#e8a74a'},
    {id:'aley', name:'Aley', color:'#e05555'},
  ],

  // ── Behaviour ───────────────────────────────────────
  readInterval:   25,     // auto-read every N messages
  saveInstantNPCs:true,   // save AI-created NPCs to main DB
  activeRoomId:   null,   // set dynamically when room switches
};

/* ════════════════════════════════════════════════════════
   DM PANEL CONTROLLER
   Manages the DM view: NPC list, queue, context display.
════════════════════════════════════════════════════════ */
</script>
<script>
/* ════════════════════════════════════════════════════════
   dm_panel.js — DM Panel UI Controller (INLINED)
   Fixed: unified display-based view switching, no injectDMPill
════════════════════════════════════════════════════════ */
'use strict';

const DMPanel = {
  _pendingNpcId: null,
  _queueItems:   [],
  _dmReady:      false,
  _autoLoop:     false,
  _autoInterval: null,
  _autoSecs:     60,

  /* ─ Open / Close — unified display system ─────────── */
  async open() {
    if (!this._dmReady) await this._initDM();
    window.DM_CONFIG.activeRoomId = S.roomId;
    window.DMEngine?.setRoomId(S.roomId);
    window.DMEngine?.setOperator(S.user?.id || 'admin');
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById('view-dm').style.display = 'flex';
    if (window.MAPanel) {
      MAPanel._loadLS();
      if (!MAPanel._chars?.length) MAPanel.loadMAChars(); else { MAPanel._render(); MAPanel.loadMAChars(); }
      MAPanel._syncPanelState();
      if (!(S.rooms||[]).length) setTimeout(() => MAPanel._fillRoomSelect(), 800);
    }
    this._refreshNPCs();
    this._refreshQueue();
    this._refreshContext();
    this._populateRoomSelects();
    this._populateOrgSelect();
    this._updateAutoBtn();
  },

  close() {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById('view-rp').style.display = 'flex';
  },

  /* ─ Tab switching ─────────────────────────────────── */
  switchTab(tab) {
    const isPanel = tab === 'panel';
    document.getElementById('dm-grid').style.display  = isPanel ? '' : 'none';
    document.getElementById('dm-ma').style.display    = isPanel ? 'none' : 'flex';
    document.getElementById('dm-tab-panel').classList.toggle('active', isPanel);
    document.getElementById('dm-tab-ma').classList.toggle('active', !isPanel);
    const panelOnly = ['dm-read-btn','dm-auto-btn','dm-auto-interval'];
    panelOnly.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = isPanel ? '' : 'none'; });
  },

  async _initDM() {
    this._setStatus('thinking', 'Başlatılıyor…');
    try {
      await window.DMEngine.start();
      this._dmReady = true;
      this._setStatus('active', 'Hazır');
      DMEvents.on('context_updated', (d) => { this._refreshContext(); toast(`DM bağlamı güncellendi (${d.reason})`, 'success'); });
    } catch(e) { this._setStatus('error', 'Hata'); toast('DM başlatılamadı: ' + e.message, 'error'); }
  },

  /* ─ NPC List ─────────────────────────────────────── */
  async _refreshNPCs() {
    const list = document.getElementById('dm-npc-list');
    list.innerHTML = '<div class="empty"><i class="fas fa-spinner fa-spin"></i><p>Yükleniyor…</p></div>';
    try {
      const npcs = await window.DMEngine.npcList();
      if (!npcs.length) { list.innerHTML = '<div class="empty"><i class="fas fa-user-secret"></i><p>NPC bulunamadı</p></div>'; return; }
      list.innerHTML = '';
      npcs.forEach(npc => {
        const org = S.oi.get((npc.organizations || [])[0] || npc.organization);
        const ini = (npc.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const el  = document.createElement('div');
        el.className = 'npc-item';
        el.innerHTML = `<div class="npc-ava">${npc.image ? `<img src="${npc.image}" onerror="this.parentNode.innerHTML='${ini}'" loading="lazy">` : ini}</div><div class="npc-inf"><div class="npc-nm">${npc.name}${npc.alias ? ` <span style="color:var(--t3);font-size:11px">"${npc.alias}"</span>` : ''}</div><div class="npc-sub">${org ? org.name : 'Affiliasyonsuz'} · ${npc.status || 'Active'}</div></div><button class="npc-play-btn" onclick="DMPanel.openTrigger('${npc.id}','${(npc.name||'').replace(/'/g,"\\'")}')"><i class="fas fa-play"></i> Oynat</button>`;
        list.appendChild(el);
      });
    } catch(e) { list.innerHTML = `<div class="empty"><i class="fas fa-exclamation-triangle"></i><p style="color:var(--rd)">${e.message}</p></div>`; }
  },

  /* ─ NPC Trigger ─────────────────────────────────── */
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
    const roomId = document.getElementById('npc-trigger-room').value;
    const instr  = document.getElementById('npc-trigger-instruction').value.trim();
    const confirmBtn = document.getElementById('npc-trigger-confirm');
    if (!roomId) { toast('Oda seç', 'warn'); return; }
    confirmBtn.disabled = true; confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Üretiliyor…';
    try {
      const result = await window.DMEngine.npcTrigger(this._pendingNpcId, roomId, instr, S.user?.id || 'admin');
      CM('m-npc-trigger'); toast(`${result.char.name} sahnede`, 'success');
      if (roomId != S.roomId) await RP.switchRoom(roomId);
    } catch(e) { toast('NPC hatası: ' + e.message, 'error'); }
    finally { confirmBtn.disabled = false; confirmBtn.innerHTML = '<i class="fas fa-play"></i> Oynat'; }
  },

  /* ─ Modal action stubs (MA panel) ─────────────────── */
  openTriggerNPC() {
    const sel = document.getElementById('npc-trigger-select');
    const charId = sel?.value;
    if (!charId) { toast('Karakter seç', 'warn'); return; }
    const char = S.ci?.get(charId);
    if (!char) return;
    MasterAgent.send(`"${char.name}" karakterini oyna. Sahneye uygun kısa bir mesaj yaz ve SEND_MSG ile gönder. char_id:"${charId}"`);
    CM('m-npc-trigger');
  },

  openCreateNPC() { document.getElementById('npc-create-desc').value = ''; this._populateRoomSelects('npc-create-room'); OM('m-create-npc'); setTimeout(() => document.getElementById('npc-create-desc').focus(), 150); },

  async createNPC() {
    const name = document.getElementById('npc-create-name')?.value?.trim();
    const desc  = document.getElementById('npc-create-desc')?.value?.trim();
    const room  = document.getElementById('npc-create-room')?.value;
    if (!name && !desc) { toast('Açıklama veya isim gir', 'warn'); return; }
    CM('m-create-npc');
    await MasterAgent.send(`Yeni bir NPC yarat ve sahneye çıkar. ${name ? 'İsim: "'+name+'". ' : ''}${desc ? 'Açıklama: ' + desc : ''} ${room ? 'Oda: ' + room : ''} SAVE_NPC kullan, sonra SEND_MSG ile sahneye çıkar.`);
  },

  openGenerateEvent() { OM('m-gen-event'); },

  async generateEvent() {
    const txt = document.getElementById('gen-event-prompt')?.value?.trim() || document.getElementById('event-instruction')?.value?.trim();
    if (!txt) { toast('Prompt yaz', 'warn'); return; }
    CM('m-gen-event');
    await MasterAgent.send(`Dünya olayı yaz ve SEND_MSG ile gönder. Tema: ${txt}`);
  },

  openGenerateDispatch(prefix) {
    OM('m-gen-dispatch');
    if (prefix) { const inp = document.getElementById('gen-dispatch-prompt'); if (inp) inp.value = prefix; }
  },

  async generateDispatch() {
    const txt = document.getElementById('gen-dispatch-prompt')?.value?.trim() || document.getElementById('dispatch-instruction')?.value?.trim();
    if (!txt) { toast('Dispatch içeriği yaz', 'warn'); return; }
    CM('m-gen-dispatch');
    await MasterAgent.send(`Polis/acil servis dispatch mesajı yaz ve SEND_MSG ile gönder. İçerik: ${txt}`);
  },

  /* ─ Queue ─────────────────────────────────────────── */
  async _refreshQueue() {
    try {
      const { collection, query, where, orderBy, limit, getDocs } = window._fbFirestore;
      const db = window._fbDb;
      const prefix = window.DM_CONFIG?.collectionPrefix || '';
      const [evSnap, dqSnap] = await Promise.all([
        getDocs(query(collection(db, prefix+'dm_world_events'), where('status','==','pending'), orderBy('created_at','desc'), limit(20))),
        getDocs(query(collection(db, prefix+'dm_dispatch_queue'), where('status','==','pending'), orderBy('created_at','desc'), limit(20))),
      ]);
      const evRows = evSnap.docs.map(d => ({ id: d.id, ...d.data() }));
      const dqRows = dqSnap.docs.map(d => ({ id: d.id, ...d.data() }));
      this._queueItems = [...evRows.map(d=>({type:'event',data:d})), ...dqRows.map(d=>({type:'dispatch',data:d}))].sort((a,b)=>new Date(b.data.created_at)-new Date(a.data.created_at));
    } catch(e) { console.warn('[DM Panel] Queue load failed:', e.message); }
    this._renderQueue();
  },

  _renderQueue() {
    const list = document.getElementById('dm-queue-list');
    document.getElementById('dm-queue-count').textContent = this._queueItems.length + ' bekliyor';
    if (!this._queueItems.length) { list.innerHTML = '<div class="empty"><i class="fas fa-inbox"></i><p>Kuyruk boş</p></div>'; return; }
    list.innerHTML = '';
    this._queueItems.forEach(item => {
      const d = item.data;
      const sevColor = { low:'var(--gn)', medium:'var(--am)', high:'var(--rd)', critical:'#ff7070' }[d.severity] || 'var(--t2)';
      const el = document.createElement('div');
      el.className = 'dm-queue-item';
      el.innerHTML = `<div class="dm-qi-head"><span class="dm-qi-type ${item.type}">${item.type==='event'?'🌍 Olay':'📡 Dispatch'}</span><span class="dm-qi-title">${item.type==='dispatch'&&d.call_code?'['+d.call_code+'] ':''}${d.title}</span><span class="dm-qi-sev" style="color:${sevColor};border:1px solid ${sevColor}44;background:${sevColor}15">${d.severity}</span></div><div class="dm-qi-body">${((item.type==='event'?d.description:d.message)||'').slice(0,180)}</div><div class="dm-qi-actions"><button class="dm-qi-btn approve" onclick="DMPanel._approveItem('${item.type}','${d.id}',this)"><i class="fas fa-check"></i> Onayla & Yayınla</button><button class="dm-qi-btn reject" onclick="DMPanel._rejectItem('${item.type}','${d.id}',this)">Reddet</button></div>`;
      list.appendChild(el);
    });
  },

  async _approveItem(type, id, btn) {
    btn.disabled = true; btn.textContent = '⏳';
    try {
      if (type === 'event') { await window.DMEngine.approveEvent(id, S.user?.id || 'admin'); toast('Dünya olayı onaylandı!', 'success'); }
      else {
        const liveRoom = S.rooms.find(r=>(r.slug||'').toLowerCase().includes('live')||(r.name||'').toLowerCase().includes('live')) || S.rooms.find(r=>r.id==S.roomId) || S.rooms[0];
        if (!liveRoom) throw new Error('Oda bulunamadı');
        await window.DMEngine.approveDispatch(id, liveRoom.id, S.user?.id || 'admin');
        toast(`Dispatch yayınlandı → #${liveRoom.name||liveRoom.id}`, 'success');
      }
      this._queueItems = this._queueItems.filter(i => i.data.id != id);
      this._renderQueue();
    } catch(e) { toast('Hata: ' + e.message, 'error'); btn.disabled = false; btn.textContent = '✓ Onayla & Yayınla'; }
  },

  async _rejectItem(type, id, btn) {
    btn.disabled = true;
    try {
      if (type === 'event') await window.DMEngine.rejectEvent(id, S.user?.id, '');
      else await window.DMEngine.rejectDispatch(id, S.user?.id, '');
      this._queueItems = this._queueItems.filter(i => i.data.id != id);
      this._renderQueue(); toast('Reddedildi', 'warn');
    } catch(e) { toast('Hata: ' + e.message, 'error'); btn.disabled = false; }
  },

  /* ─ Context ──────────────────────────────────────── */
  _refreshContext() {
    const list    = document.getElementById('dm-ctx-list');
    const ctx     = window.DMEngine?.getContext?.() || '';
    const entries = ctx.split('\n\n---\n\n').filter(Boolean);
    document.getElementById('dm-ctx-count').textContent = `Context: ${entries.length} giriş`;
    if (!entries.length) { list.innerHTML = '<div class="empty"><i class="fas fa-brain"></i><p>Henüz okunmadı</p></div>'; return; }
    list.innerHTML = '';
    entries.forEach(entry => {
      const el = document.createElement('div'); el.className = 'dm-ctx-entry';
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
      if (window.MasterAgent) {
        const ctx = window.DMEngine.getContext?.();
        const summary = ctx ? ctx.toString().slice(0, 400) : '(bağlam alınamadı)';
        MasterAgent._history.push({role:'user',parts:[{text:'[DM OKUMA TAMAMLANDI]\n'+summary}]});
        MasterAgent._history.push({role:'model',parts:[{text:'[DM bağlamı alındı, hazırım.]'}]});
      }
    } catch(e) { toast('Okuma hatası: ' + e.message, 'error'); }
    finally { btn.disabled = false; btn.innerHTML = '<i class="fas fa-book-open"></i> Şimdi Oku'; }
  },

  async clearContext() {
    if (!confirm('Bağlamı temizle?')) return;
    try {
      const { doc, setDoc } = window._fbFirestore;
      const prefix = window.DM_CONFIG?.collectionPrefix || '';
      await setDoc(doc(window._fbDb, prefix+'dm_session', 'main'), { context_window: [], context_msg_count: 0, updated_at: new Date().toISOString() });
    } catch(e) { console.warn('[DM Panel] clearContext failed:', e.message); }
    this._refreshContext(); toast('Bağlam temizlendi', 'warn');
  },

  /* ─ Utils ────────────────────────────────────────── */
  _populateRoomSelects(targetId = 'npc-trigger-room') {
    ['npc-trigger-room','npc-create-room'].forEach(id => {
      const sel = document.getElementById(id); if (!sel) return;
      sel.innerHTML = '';
      S.rooms.forEach(r => { const o = document.createElement('option'); o.value = r.id; o.textContent = '#' + r.name; if (r.id == S.roomId) o.selected = true; sel.appendChild(o); });
    });
  },

  _populateOrgSelect() {
    const sel = document.getElementById('dispatch-org-sel'); if (!sel) return;
    sel.innerHTML = '<option value="">— Genel / Sistem —</option>';
    S.orgs.forEach(o => { const opt = document.createElement('option'); opt.value = o.id; opt.textContent = o.name; sel.appendChild(opt); });
  },

  _setStatus(cls, txt) {
    const dot = document.getElementById('dm-sdot'); if (!dot) return;
    dot.className = 'sdot ' + cls;
    const st = document.getElementById('dm-stxt');
    if (st) { st.textContent = txt; st.style.color = { active:'var(--gn)', thinking:'var(--am)', error:'var(--rd)' }[cls] || 'var(--t2)'; }
  },

  /* ─ Auto Loop ─────────────────────────────────────── */
  toggleAutoLoop() { this._autoLoop ? this._stopAutoLoop() : this._startAutoLoop(); },
  _startAutoLoop() {
    if (this._autoInterval) clearInterval(this._autoInterval);
    this._autoLoop = true;
    this._autoInterval = setInterval(async () => { if (!window.DMEngine || !S.roomId) return; try { await window.DMEngine.readNow(S.roomId); } catch(e) {} }, this._autoSecs * 1000);
    this._updateAutoBtn(); toast(`DM otomatik okuma aktif (her ${this._autoSecs}s)`, 'success');
  },
  _stopAutoLoop() {
    if (this._autoInterval) clearInterval(this._autoInterval);
    this._autoInterval = null; this._autoLoop = false;
    this._updateAutoBtn(); toast('DM otomatik okuma durduruldu', 'warn');
  },
  setAutoInterval(secs) { this._autoSecs = parseInt(secs) || 60; if (this._autoLoop) { this._stopAutoLoop(); this._startAutoLoop(); } },
  _updateAutoBtn() {
    const btn = document.getElementById('dm-auto-btn'); if (!btn) return;
    if (this._autoLoop) { btn.innerHTML = `<i class="fas fa-stop-circle"></i> Otomatik: AÇIK (${this._autoSecs}s)`; btn.style.color='var(--gn)'; btn.style.borderColor='var(--gn)'; btn.style.background='rgba(0,200,100,.08)'; }
    else { btn.innerHTML = '<i class="fas fa-play-circle"></i> Otomatik: KAPALI'; btn.style.color='var(--t2)'; btn.style.borderColor=''; btn.style.background=''; }
  },
};

// Route new RP messages to DM reader counter
document.addEventListener('DOMContentLoaded', () => {
  if (typeof RT !== 'undefined' && RT._handleMsg) {
    const _origHandleMsg = RT._handleMsg.bind(RT);
    RT._handleMsg = function(rec, notify) {
      _origHandleMsg(rec, notify);
      if (rec.sent_by_user && rec.sent_by_user.startsWith('DM:')) return;
      if (window.DMEngine) window.DMEngine.onMessage();
      window.DM_CONFIG.activeRoomId = S.roomId;
    };
  }
  if (typeof RP !== 'undefined' && RP.switchRoom) {
    const _origSwitchRoom = RP.switchRoom.bind(RP);
    RP.switchRoom = async function(id) {
      await _origSwitchRoom(id);
      window.DM_CONFIG.activeRoomId = id;
      if (window.DMEngine) window.DMEngine.setRoomId(id);
    };
  }
});

/* ════════════════════════════════════════════════════════
   MASTER AGENT  — NYC_RP Orchestrator
   Single Gemini session with shared RP context.
   Fires ONLY when user sends a message in the MA chat tab.
   Zero background polling — billing-efficient.
════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════
   KANON ARŞİV SİSTEMİ
   Firebase koleksiyonu: kanon/
     kanon/meta           → Kılavuz + Dünya/Ton (her zaman gönderilir)
     kanon/current_state  → Son Durum Özeti (her zaman gönderilir)
     kanon/chars/{slug}   → Karakter profilleri (sahnedekiler gönderilir)
     kanon/factions/{slug}→ Gruplar/Fraksiyonlar
     kanon/timeline       → Zaman çizelgesi + açık iplikler
   MA entegrasyonu: meta+current_state her çağrıda, chars sahnedekiler için
════════════════════════════════════════════════════════ */
const KanonDB = {
  // Bellek içi cache: { 'meta': {content,updated_at}, 'chars/rosé': {...}, ... }
  _cache: {},
  _listCache: null,   // tüm doküman listesi
  _dirty: false,
  _activeDoc: null,   // { key, label, type } — editörde açık olan

  /* ── Firebase helpers ─────────────────────────────── */
  async _fbCol() {
    const {db, fs} = await _fbReady();
    return { db, fs, col: fs.collection(db, 'kanon') };
  },

  _slug(name) {
    return name.toLowerCase().replace(/[^a-z0-9ğüşıöç]/g, '_').replace(/__+/g,'_').replace(/^_|_$/g,'');
  },

  /* ── Tüm doküman listesini yükle ─────────────────── */
  async loadList() {
    try {
      const {db, fs} = await _fbReady();
      const col = fs.collection(db, 'kanon');
      const snap = await fs.getDocs(col);
      const list = [];
      snap.forEach(d => list.push({ key: d.id, ...d.data() }));
      this._listCache = list;
      // Cache'e de yükle
      list.forEach(d => { this._cache[d.key] = d; });
      return list;
    } catch(e) {
      console.warn('[KanonDB] Liste yükleme hatası:', e);
      return [];
    }
  },

  /* ── Tek doküman yükle ───────────────────────────── */
  async loadDoc(key) {
    if (this._cache[key]?.content !== undefined) return this._cache[key];
    try {
      const {db, fs} = await _fbReady();
      const ref = fs.doc(db, 'kanon', key);
      const snap = await fs.getDoc(ref);
      if (snap.exists()) {
        const data = { key, ...snap.data() };
        this._cache[key] = data;
        return data;
      }
      return null;
    } catch(e) {
      console.warn('[KanonDB] Doküman yükleme hatası:', key, e);
      return null;
    }
  },

  /* ── Doküman kaydet ──────────────────────────────── */
  async saveDoc(key, content, meta = {}) {
    try {
      const {db, fs} = await _fbReady();
      const ref = fs.doc(db, 'kanon', key);
      const data = { content, updated_at: new Date().toISOString(),
        word_count: content.split(/\s+/).filter(Boolean).length, ...meta };
      await fs.setDoc(ref, data);
      this._cache[key] = { key, ...data };
      // Liste cache'ini güncelle
      if (this._listCache) {
        const idx = this._listCache.findIndex(d => d.key === key);
        if (idx >= 0) this._listCache[idx] = { key, ...data };
        else this._listCache.push({ key, ...data });
      }
      return true;
    } catch(e) {
      console.warn('[KanonDB] Kaydetme hatası:', key, e);
      return false;
    }
  },

  /* ── Doküman sil ─────────────────────────────────── */
  async deleteDoc(key) {
    try {
      const {db, fs} = await _fbReady();
      await fs.deleteDoc(fs.doc(db, 'kanon', key));
      delete this._cache[key];
      if (this._listCache) this._listCache = this._listCache.filter(d => d.key !== key);
      return true;
    } catch(e) { return false; }
  },

  /* ── MD belgesini bölümlere ayırıp toplu yükle ───── */
  async importFromMarkdown(mdText) {
    const sections = this._parseMarkdown(mdText);
    let saved = 0;
    for (const s of sections) {
      const ok = await this.saveDoc(s.key, s.content, { label: s.label, type: s.type });
      if (ok) saved++;
    }
    this._listCache = null; // listeyi yenile
    await this.loadList();
    return saved;
  },

  /* ── Markdown'ı bölümlere ayır ───────────────────── */
  _parseMarkdown(md) {
    const lines = md.split('\n');
    const sections = [];

    // Sabit bölümler
    const fixedSections = [
      { heads: ['## 0.', '## 1.', '## 2.', '## 3.', '## 4.'], key: 'meta', label: '📋 Kılavuz & Dünya', type: 'meta' },
      { heads: ['## 5.'], key: 'current_state', label: '🔴 Son Durum', type: 'current_state' },
      { heads: ['## 10.'], key: 'timeline', label: '📅 Zaman Çizelgesi', type: 'timeline' },
      { heads: ['## 11.', '## 12.'], key: 'plot_threads', label: '🧵 Açık İplikler & Notlar', type: 'plot_threads' },
      { heads: ['## 13.'], key: 'relations', label: '🔗 İlişki Matrisi', type: 'relations' },
    ];

    // Karakter profilleri (## 6. altındaki ### başlıkları)
    const charSection = { key: 'chars_all', label: '👥 Tüm Karakterler', type: 'chars', chars: {} };
    // Gruplar (## 7.)
    const factionSection = { key: 'factions_all', label: '🏛️ Gruplar', type: 'factions' };
    // Mekanlar (## 8.), Sözlük (## 9.)
    const worldSection = { key: 'world', label: '🗺️ Mekanlar & Sözlük', type: 'world' };

    let currentSection = null;
    let currentCharName = null;
    let inChars = false, inFactions = false, inWorld = false;
    const buffers = {};
    fixedSections.forEach(s => { buffers[s.key] = []; });
    buffers['chars_all'] = {};  // {charName: lines[]}
    buffers['factions_all'] = [];
    buffers['world'] = [];

    for (const line of lines) {
      const isH2 = /^## /.test(line);
      const isH3 = /^### /.test(line);

      if (isH2) {
        inChars = /^## 6\./.test(line);
        inFactions = /^## 7\./.test(line);
        inWorld = /^## [89]\./.test(line);
        currentCharName = null;

        // Hangi sabit bölüme ait?
        currentSection = null;
        for (const fs of fixedSections) {
          if (fs.heads.some(h => line.startsWith(h))) { currentSection = fs.key; break; }
        }
      }

      if (inChars) {
        const isH4 = /^#### /.test(line);
        if (isH4) {
          // #### Karakter Adı (Oyuncu) — gerçek karakter başlığı
          currentCharName = line.replace(/^####\s*/, '').replace(/\s*\([^)]*\)\s*$/, '').replace(/\s*—.*$/, '').trim();
          if (!buffers['chars_all'][currentCharName]) buffers['chars_all'][currentCharName] = [];
        } else if (currentCharName && !isH2) {
          // ### grup başlığı veya içerik satırı — aktif karakterin buffer'ına ekle
          buffers['chars_all'][currentCharName].push(line);
        }
      } else if (inFactions) {
        buffers['factions_all'].push(line);
      } else if (inWorld) {
        buffers['world'].push(line);
      } else if (currentSection) {
        buffers[currentSection].push(line);
      }
    }

    // Sabit bölümleri sections'a ekle
    for (const fs of fixedSections) {
      const content = buffers[fs.key].join('\n').trim();
      if (content.length > 20) sections.push({ key: fs.key, label: fs.label, type: fs.type, content });
    }

    // Karakterleri ayrı ayrı kaydet (her karakter kendi dokümanı)
    for (const [charName, charLines] of Object.entries(buffers['chars_all'])) {
      if (!charLines.length) continue;
      const slug = 'chars/' + this._slug(charName);
      const content = `#### ${charName}\n${charLines.join('\n')}`.trim();
      sections.push({ key: slug, label: charName, type: 'char', content });
    }

    // Gruplar
    const factionContent = buffers['factions_all'].join('\n').trim();
    if (factionContent.length > 20) sections.push({ key: 'factions_all', label: '🏛️ Gruplar', type: 'factions', content: factionContent });

    // Dünya
    const worldContent = buffers['world'].join('\n').trim();
    if (worldContent.length > 20) sections.push({ key: 'world', label: '🗺️ Mekanlar & Sözlük', type: 'world', content: worldContent });

    return sections;
  },

  /* ── MA için prompt metni oluştur ────────────────── */
  async buildPromptContext(activeCharNames = []) {
    const parts = [];

    // 1. Her zaman: meta (kılavuz + dünya/ton)
    const meta = await this.loadDoc('meta');
    if (meta?.content) parts.push('=== KANON: KILAVUZ & DÜNYA ===\n' + meta.content);

    // 2. Her zaman: current_state (son durum)
    const state = await this.loadDoc('current_state');
    if (state?.content) parts.push('=== KANON: SON DURUM (2026-09-23) ===\n' + state.content);

    // 3. Sahnedeki karakterlerin profilleri
    if (activeCharNames.length > 0) {
      const charParts = [];
      for (const name of activeCharNames) {
        const slug = 'chars/' + this._slug(name);
        const doc = await this.loadDoc(slug);
        if (doc?.content) charParts.push(doc.content);
      }
      if (charParts.length) parts.push('=== KANON: SAHNEDEKİ KARAKTERLER ===\n' + charParts.join('\n\n---\n\n'));
    }

    return parts.join('\n\n');
  },

  /* ── Observer için kısa prompt (meta + current_state) */
  async buildObserverContext() {
    const parts = [];
    const meta = await this.loadDoc('meta');
    if (meta?.content) parts.push(meta.content.slice(0, 4000));
    const state = await this.loadDoc('current_state');
    if (state?.content) parts.push(state.content.slice(0, 6000));
    return parts.join('\n\n');
  },

  /* ── Sahnedeki karakter isimlerini mesajlardan çıkar */
  extractActiveChars(msgContext = '') {
    if (!this._listCache) return [];
    const charKeys = this._listCache.filter(d => d.key.startsWith('chars/')).map(d => ({
      key: d.key, label: d.label || d.key.replace('chars/','')
    }));
    const found = [];
    for (const c of charKeys) {
      const name = c.label.toLowerCase();
      if (msgContext.toLowerCase().includes(name) || msgContext.toLowerCase().includes(this._slug(c.label))) {
        found.push(c.label);
      }
    }
    return found.slice(0, 6); // max 6 karakter
  },
};
window.KanonDB = KanonDB;

/* ══════════════════════════════════════════════════════
   KANON EDİTÖR UI — KanonDB üzerinde çalışan editör
════════════════════════════════════════════════════════ */
const KanonEditor = {
  _dirty: false,
  _activeKey: null,

  async open() {
    const modal = document.getElementById('m-kanon');
    if (!modal) return;
    modal.classList.remove('hidden');
    this._setStatus('Yükleniyor…');
    await KanonDB.loadList();
    this._renderList();
    // Varsayılan olarak current_state aç
    await this.openDoc('current_state');
  },

  close() {
    if (this._dirty && !confirm('Kaydedilmemiş değişiklikler var. Çıkmak istediğine emin misin?')) return;
    document.getElementById('m-kanon')?.classList.add('hidden');
    this._dirty = false;
  },

  _renderList() {
    const el = document.getElementById('kanon-list');
    if (!el) return;
    const list = KanonDB._listCache || [];

    const groups = [
      { label: '📋 Kılavuz & Dünya', keys: ['meta'], type: 'meta' },
      { label: '🔴 Son Durum', keys: ['current_state'], type: 'current_state' },
      { label: '📅 Zaman & İplikler', keys: ['timeline'], type: 'timeline' },
      { label: '🏛️ Gruplar', keys: ['factions_all'], type: 'factions' },
      { label: '🗺️ Mekan & Sözlük', keys: ['world'], type: 'world' },
    ];
    const charDocs = list.filter(d => d.key.startsWith('chars/')).sort((a,b) => (a.label||a.key).localeCompare(b.label||b.key));

    let html = '';
    for (const g of groups) {
      const doc = list.find(d => g.keys.includes(d.key));
      const active = this._activeKey === g.keys[0] ? 'background:var(--ac-d);border-left:2px solid var(--pu);' : '';
      const words = doc?.word_count ? `<span style="color:var(--t3);font-size:9px">${doc.word_count.toLocaleString()} k</span>` : '<span style="color:var(--t3);font-size:9px">boş</span>';
      html += `<div onclick="KanonEditor.openDoc('${g.keys[0]}')" style="padding:8px 12px;cursor:pointer;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--ln);${active}" onmouseover="this.style.background='var(--bg2)'" onmouseout="this.style.background='${active?'var(--ac-d)':''}'">${g.label} ${words}</div>`;
    }

    if (charDocs.length) {
      html += `<div style="padding:4px 12px;font-size:9px;color:var(--t3);font-family:var(--mono);letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid var(--ln);display:flex;align-items:center;justify-content:space-between">
        <span>👥 Karakterler (${charDocs.length})</span>
        <button onclick="KanonEditor.newChar()" style="background:var(--pu);border:none;color:#fff;border-radius:3px;padding:1px 6px;cursor:pointer;font-size:9px">+ Yeni</button>
      </div>`;
      for (const d of charDocs) {
        const name = d.label || d.key.replace('chars/','');
        const active = this._activeKey === d.key ? 'background:var(--ac-d);border-left:2px solid var(--pu);' : '';
        const words = d.word_count ? `<span style="color:var(--t3);font-size:9px">${d.word_count} k</span>` : '';
        html += `<div onclick="KanonEditor.openDoc('${d.key}')" style="padding:6px 12px 6px 18px;cursor:pointer;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.04);${active}" onmouseover="this.style.background='var(--bg2)'" onmouseout="this.style.background='${active?'var(--ac-d)':''}'">`
          + `<span style="flex:1;font-size:11px;color:var(--t1);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${name}</span>${words}`
          + `<button onclick="event.stopPropagation();KanonEditor.deleteDoc('${d.key}')" style="background:none;border:none;color:var(--t3);cursor:pointer;font-size:10px;padding:0 2px" title="Sil">✕</button></div>`;
      }
    } else {
      html += `<div style="padding:8px 12px;font-size:10px;color:var(--t3);border-bottom:1px solid var(--ln)">Henüz karakter yok — MD içe aktar</div>`;
    }

    el.innerHTML = html;
  },

  async openDoc(key) {
    if (this._dirty && !confirm('Kaydedilmemiş değişiklikler var. Devam et?')) return;
    this._dirty = false;
    this._activeKey = key;

    const inp = document.getElementById('kanon-editor-inp');
    const titleEl = document.getElementById('kanon-doc-title');
    if (!inp) return;

    inp.value = 'Yükleniyor…';
    if (titleEl) titleEl.textContent = key;

    const doc = await KanonDB.loadDoc(key);
    inp.value = doc?.content || '';
    if (titleEl) titleEl.textContent = doc?.label || key;
    this._setStatus(doc?.updated_at ? `Son güncelleme: ${new Date(doc.updated_at).toLocaleString('tr-TR')}` : 'Yeni doküman');
    this._renderList();

    inp.oninput = () => { this._dirty = true; this._setStatus('● Kaydedilmemiş değişiklik'); };
  },

  async save() {
    const inp = document.getElementById('kanon-editor-inp');
    const titleEl = document.getElementById('kanon-doc-title');
    if (!inp || !this._activeKey) return;
    this._setStatus('Kaydediliyor…');
    const label = titleEl?.textContent || this._activeKey;
    const ok = await KanonDB.saveDoc(this._activeKey, inp.value, { label });
    if (ok) {
      this._dirty = false;
      this._setStatus(`✅ Kaydedildi — ${inp.value.split(/\s+/).filter(Boolean).length.toLocaleString()} kelime`);
      this._renderList();
      toast('Kaydedildi', 'success');
    } else {
      this._setStatus('⚠️ Kaydetme hatası');
      toast('Kaydetme hatası', 'error');
    }
  },

  async deleteDoc(key) {
    if (!confirm(`"${key}" dokümanını silmek istediğine emin misin?`)) return;
    await KanonDB.deleteDoc(key);
    if (this._activeKey === key) {
      this._activeKey = null;
      const inp = document.getElementById('kanon-editor-inp');
      if (inp) inp.value = '';
    }
    this._renderList();
    toast('Silindi', 'success');
  },

  newChar() {
    const name = prompt('Karakter adı:');
    if (!name?.trim()) return;
    const key = 'chars/' + KanonDB._slug(name.trim());
    KanonDB._cache[key] = { key, label: name.trim(), content: `### ${name.trim()}\n\n`, type: 'char' };
    if (KanonDB._listCache) KanonDB._listCache.push({ key, label: name.trim(), type: 'char' });
    this._renderList();
    this.openDoc(key);
  },

  /* ── MD dosyasından toplu içe aktar ─────────────── */
  async importMD() {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.md,.txt';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      this._setStatus('İçe aktarılıyor…');
      const text = await file.text();
      const count = await KanonDB.importFromMarkdown(text);
      this._renderList();
      await this.openDoc('current_state');
      this._setStatus(`✅ ${count} bölüm içe aktarıldı`);
      toast(`${count} bölüm içe aktarıldı`, 'success');
    };
    input.click();
  },

  _setStatus(txt) {
    const el = document.getElementById('kanon-status');
    if (el) el.textContent = txt;
  },

  /* Eski _getForPrompt — geriye dönük uyumluluk */
  _getForPrompt() { return ''; },
};
window.KanonEditor = KanonEditor;

/* ═══════════════════════════════════════════════════════════════════
   LORE KEEPER — NYC_RP Kanon Arşivi Kütüphanecisi (Tam Sayfa Panel)
   Bölüm sekmeler | İtem listesi | İçerik (oku/düzenle) + AI sohbet
   Gemini 2.0 Flash ile soru-cevap (sadece ilgili dokümanlar context)
════════════════════════════════════════════════════════════════════ */
const LoreKeeper = {
  _activeSection: null,
  _activeKey: null,
  _chatHistory: [],
  _busy: false,
  _mode: 'read', // 'read' | 'edit'

  _sections: [
    { id: 'current',  icon: '🔴', label: 'Son Durum',     key: 'current_state' },
    { id: 'chars',    icon: '👤', label: 'Karakterler',   prefix: 'chars/' },
    { id: 'factions', icon: '🏛️', label: 'Gruplar',       key: 'factions_all' },
    { id: 'relations',icon: '🔗', label: 'İlişkiler',     key: 'relations' },
    { id: 'timeline', icon: '📅', label: 'Timeline',      key: 'timeline' },
    { id: 'threads',  icon: '🧵', label: 'Açık İplikler', key: 'plot_threads' },
    { id: 'world',    icon: '🗺️', label: 'Mekanlar',      key: 'world' },
    { id: 'meta',     icon: '📋', label: 'Rehber',        key: 'meta' },
  ],

  async open() {
    // Switch to lore view
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    const vl = document.getElementById('view-lore');
    if (vl) vl.style.display = 'flex';
    this._setStatus('Yükleniyor…');
    await KanonDB.loadList().catch(() => {});
    this._renderTabs();
    await this.selectSection(this._activeSection || 'chars');
    this._setStatus('Hazır');
  },

  close() {
    document.getElementById('view-lore').style.display = 'none';
    document.getElementById('view-rp').style.display = 'flex';
  },

  setMode(mode) {
    this._mode = mode;
    const readEl = document.getElementById('lk-content');
    const editEl = document.getElementById('lk-editor');
    const modeBtns = document.querySelectorAll('.lk-mode-btn');
    if (mode === 'edit') {
      if (readEl) readEl.style.display = 'none';
      if (editEl) editEl.style.display = 'flex';
    } else {
      if (readEl) readEl.style.display = '';
      if (editEl) editEl.style.display = 'none';
    }
    modeBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.mode === mode);
    });
  },

  async save() {
    if (!this._activeKey) { toast('Önce bir doküman seç', 'warn'); return; }
    const inp = document.getElementById('lk-editor-inp');
    if (!inp) return;
    const txt = inp.value;
    this._setStatus('Kaydediliyor…');
    try {
      await KanonDB.saveDoc(this._activeKey, txt);
      await KanonDB.loadList().catch(() => {});
      toast('Kaydedildi ✓', 'success');
      this._setStatus('Kaydedildi');
      // If this was a char edit, go back to card grid
      if (this._activeKey?.startsWith('chars/')) {
        await this.selectSection('chars');
      } else {
        const wc = txt.trim().split(/\s+/).length;
        this._renderMarkdown(txt);
        this.setMode('read');
      }
    } catch(e) {
      toast('Kayıt hatası: ' + e.message, 'error');
      this._setStatus('Hata');
    }
  },

  importMD() {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.md,.txt';
    input.onchange = async () => {
      const file = input.files[0]; if (!file) return;
      this._setStatus('İçe aktarılıyor…');
      const text = await file.text();
      try {
        const count = await KanonDB.importFromMarkdown(text);
        await KanonDB.loadList().catch(() => {});
        this._renderTabs();
        await this.selectSection('chars');
        toast(`${count} bölüm içe aktarıldı`, 'success');
        this._setStatus('Hazır');
      } catch(e) {
        toast('Hata: ' + e.message, 'error');
        this._setStatus('Hata');
      }
    };
    input.click();
  },

  async newChar() {
    const name = prompt('Yeni karakter adı:');
    if (!name?.trim()) return;
    const slug = name.trim().toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'');
    const key = 'chars/' + slug;
    const template = `# ${name.trim()}\n\n## Temel Bilgiler\n- **İsim:** ${name.trim()}\n- **Yaş:** \n- **Meslek:** \n\n## Kişilik\n\n## Geçmiş\n\n## İlişkiler\n`;
    this._setStatus('Oluşturuluyor…');
    try {
      await KanonDB.saveDoc(key, template);
      await KanonDB.loadList().catch(() => {});
      this._renderTabs();
      await this.selectSection('chars');
      await this.openDoc(key);
      this.setMode('edit');
      const inp = document.getElementById('lk-editor-inp');
      if (inp) inp.value = template;
      toast(`${name} oluşturuldu`, 'success');
    } catch(e) {
      toast('Hata: ' + e.message, 'error');
    }
    this._setStatus('Hazır');
  },

  async deleteDoc(key) {
    if (!confirm(`"${key}" silinsin mi?`)) return;
    this._setStatus('Siliniyor…');
    try {
      await KanonDB.deleteDoc(key);
      await KanonDB.loadList().catch(() => {});
      this._activeKey = null;
      this._renderTabs();
      await this.selectSection(this._activeSection || 'chars');
      toast('Silindi', 'success');
    } catch(e) {
      toast('Hata: ' + e.message, 'error');
    }
    this._setStatus('Hazır');
  },

  _setStatus(txt) {
    const el = document.getElementById('lk-status');
    if (el) el.textContent = txt;
  },

  _renderTabs() {
    const el = document.getElementById('lk-tabs');
    if (!el) return;
    el.innerHTML = this._sections.map(s => {
      const active = this._activeSection === s.id;
      return `<div onclick="LoreKeeper.selectSection('${s.id}')" class="lk-tab-item${active ? ' active' : ''}">
        <span>${s.icon}</span><span>${s.label}</span>
      </div>`;
    }).join('');
  },

  async selectSection(sectionId) {
    this._activeSection = sectionId;
    this._activeKey = null;
    this._renderTabs();
    const sec = this._sections.find(s => s.id === sectionId);
    if (!sec) return;

    if (sectionId === 'chars') {
      // Show card grid in main content area, hide list panel
      const listEl = document.getElementById('lk-list');
      if (listEl) listEl.style.display = 'none';
      await this._renderCharCards();
    } else {
      const listEl = document.getElementById('lk-list');
      if (listEl) listEl.style.display = '';

      // Single doc sections
      this._renderListSingle(sec);
      await this.openDoc(sec.key);
    }
  },

  _renderCharList() {
    // Legacy — kept for compatibility (not used in chars section)
    const el = document.getElementById('lk-list');
    if (!el) return;
    const chars = (KanonDB._listCache || []).filter(d => d.key?.startsWith('chars/'));
    el.innerHTML = chars.map(c => {
      const active = this._activeKey === c.key;
      return `<div onclick="LoreKeeper.openDoc('${c.key}')" class="lk-list-item${active ? ' active' : ''}">
        👤 <span style="flex:1">${c.label || c.key.replace('chars/','')}</span>
      </div>`;
    }).join('');
  },

  // ── Char grid state ──────────────────────────────────────────
  _charData: [],      // merged list (built once per open)
  _charDescMap: {},   // kanonKey → first-line description
  _charFilter: { q: '', org: '', player: 'all' },
  _modalKey: null,    // active modal kanonKey
  _modalDbId: null,   // active modal dbChar id

  async _renderCharCards() {
    const kanonChars = (KanonDB._listCache || []).filter(d => d.key?.startsWith('chars/'));
    const dbChars = S.chars || [];

    if (!kanonChars.length && !dbChars.length) {
      this._showContent('<div style="color:var(--t3);font-size:12px;padding:40px;text-align:center">Karakter yok.<br><small>📥 İçe Aktar ile Kanon\'dan yükle</small></div>');
      return;
    }

    this._showContent('<div style="color:var(--t3);font-size:11px;padding:20px">Yükleniyor…</div>');

    // Build merged list
    const merged = [];
    const usedDbIds = new Set();
    for (const kc of kanonChars) {
      const slug = kc.key.replace('chars/', '');
      const dbChar = dbChars.find(c => {
        const cSlug = (c.name||'').toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'');
        return cSlug === slug || (c.alias||'').toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'') === slug;
      });
      if (dbChar) usedDbIds.add(dbChar.id);
      merged.push({ kanonKey: kc.key, slug, label: kc.label || slug, dbChar: dbChar || null });
    }
    for (const dc of dbChars) {
      if (!usedDbIds.has(dc.id))
        merged.push({ kanonKey: null, slug: (dc.name||'').toLowerCase().replace(/\s+/g,'-'), label: dc.name || dc.id, dbChar: dc });
    }

    // Sort alphabetically
    merged.sort((a, b) => a.label.localeCompare(b.label, 'tr'));
    this._charData = merged;

    // Load descriptions
    const descMap = {};
    await Promise.all(merged.slice(0, 60).map(async m => {
      if (!m.kanonKey) return;
      try {
        const doc = await KanonDB.loadDoc(m.kanonKey);
        if (doc?.content) {
          const lines = doc.content.split('\n');
          const desc = lines.find(l => l.trim() && !l.startsWith('#') && !l.startsWith('---'));
          descMap[m.kanonKey] = desc ? desc.replace(/^\*+|\*+$/g,'').trim() : '';
        }
      } catch(e){}
    }));
    this._charDescMap = descMap;

    // Build org list for filter dropdown
    const orgSet = new Set();
    for (const m of merged) {
      if (m.dbChar?.organizations?.length) m.dbChar.organizations.forEach(oid => {
        const org = (S.orgs||[]).find(o => o.id === oid);
        if (org?.name) orgSet.add(org.name);
      });
    }
    const orgs = [...orgSet].sort((a,b)=>a.localeCompare(b,'tr'));

    // Render shell with controls + card grid placeholder
    this._showContent(`
      <div style="padding:12px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px">
          <input id="lk-char-q" type="text" placeholder="🔍 İsim veya takma ad ara…"
            value="${this._charFilter.q}"
            style="flex:1;min-width:120px;background:var(--bg3);border:1px solid var(--ln);color:var(--t1);border-radius:6px;padding:5px 10px;font-size:11px;font-family:var(--sans);outline:none"
            oninput="LoreKeeper._charFilter.q=this.value;LoreKeeper._filterCharCards()">
          <select id="lk-char-org"
            style="background:var(--bg3);border:1px solid var(--ln);color:var(--t1);border-radius:6px;padding:5px 8px;font-size:11px;font-family:var(--sans);outline:none;cursor:pointer"
            onchange="LoreKeeper._charFilter.org=this.value;LoreKeeper._filterCharCards()">
            <option value="">Tüm Gruplar</option>
            ${orgs.map(o=>`<option value="${o}"${this._charFilter.org===o?' selected':''}>${o}</option>`).join('')}
          </select>
          <select id="lk-char-player"
            style="background:var(--bg3);border:1px solid var(--ln);color:var(--t1);border-radius:6px;padding:5px 8px;font-size:11px;font-family:var(--sans);outline:none;cursor:pointer"
            onchange="LoreKeeper._charFilter.player=this.value;LoreKeeper._filterCharCards()">
            <option value="all"${this._charFilter.player==='all'?' selected':''}>Tüm Oyuncular</option>
            <option value="npc"${this._charFilter.player==='npc'?' selected':''}>NPC</option>
            ${(USERS||[]).filter(u=>!u.isMA).map(u=>`<option value="${u.id}"${this._charFilter.player===u.id?' selected':''}>${u.name}</option>`).join('')}
          </select>
          <button onclick="LoreKeeper.newChar()" style="font-size:10px;padding:5px 10px;background:rgba(80,200,150,.12);border:1px solid rgba(80,200,150,.3);color:#50c896;border-radius:5px;cursor:pointer;white-space:nowrap">+ Yeni</button>
        </div>
        <div id="lk-char-count" style="font-size:10px;color:var(--t3);margin-bottom:10px"></div>
        <div id="lk-char-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px"></div>
      </div>`);

    this._filterCharCards();
  },

  _filterCharCards() {
    const grid = document.getElementById('lk-char-grid');
    const countEl = document.getElementById('lk-char-count');
    if (!grid) return;

    const q      = (this._charFilter.q || '').toLowerCase().trim();
    const org    = this._charFilter.org || '';
    const player = this._charFilter.player || 'all';

    const filtered = this._charData.filter(m => {
      const dc = m.dbChar;
      // Text search
      if (q) {
        const hay = [m.label, dc?.alias, dc?.name].filter(Boolean).join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      // Org filter
      if (org && dc) {
        const memberOrgs = (dc.organizations||[]).map(oid => {
          const o = (S.orgs||[]).find(x=>x.id===oid); return o?.name||'';
        });
        if (!memberOrgs.includes(org)) return false;
      } else if (org && !dc) return false;
      // Player filter
      if (player === 'npc' && dc?.playerId) return false;
      if (player !== 'all' && player !== 'npc' && (dc?.playerId || '') !== player) return false;
      return true;
    });

    if (countEl) countEl.textContent = `${filtered.length} / ${this._charData.length} karakter`;

    const threatColor = { Low:'#50c896', Medium:'#fbbf24', High:'#f97316', Critical:'#ef4444', Omega:'#a855f7' };
    const heatColor   = { Clean:'#50c896', Warm:'#fbbf24', Hot:'#f97316', Burning:'#ef4444', Scorched:'#a855f7', Wanted:'#ec4899' };

    grid.innerHTML = filtered.map(m => {
      const dc = m.dbChar;
      const img = dc?.image
        ? `<img src="${dc.image}" style="width:100%;height:110px;object-fit:cover;border-radius:6px 6px 0 0;display:block" onerror="this.style.display='none'">`
        : `<div style="width:100%;height:110px;background:var(--bg3);border-radius:6px 6px 0 0;display:flex;align-items:center;justify-content:center;font-size:32px">👤</div>`;
      const desc = (this._charDescMap[m.kanonKey] || dc?.story?.slice(0,120) || '').slice(0,120);
      const descHtml = desc ? `<div style="font-size:10px;color:var(--t2);line-height:1.4;margin-top:4px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">${desc.replace(/</g,'&lt;')}</div>` : '';
      const aliasBadge = dc?.alias ? `<div style="font-size:9px;color:var(--t3);margin-top:1px">"${dc.alias}"</div>` : '';
      const npcBadge  = dc && !dc.playerId ? `<span style="font-size:8px;background:rgba(80,200,150,.15);color:#50c896;padding:1px 5px;border-radius:3px;margin-left:4px">NPC</span>` : '';
      const deadBadge = dc?.status === 'Deceased' ? `<span style="font-size:8px;background:rgba(239,68,68,.15);color:#ef4444;padding:1px 5px;border-radius:3px;margin-left:4px">†</span>` : '';
      const threatBadge = dc?.threatLevel ? `<span style="font-size:8px;padding:1px 5px;border-radius:3px;background:rgba(0,0,0,.3);color:${threatColor[dc.threatLevel]||'var(--t3)'}">⚠ ${dc.threatLevel}</span>` : '';
      const heatBadge   = dc?.heatLevel   ? `<span style="font-size:8px;padding:1px 5px;border-radius:3px;background:rgba(0,0,0,.3);color:${heatColor[dc.heatLevel]||'var(--t3)'}">🌡 ${dc.heatLevel}</span>` : '';
      const playerBadge = dc?.playerId ? (()=>{const u=(USERS||[]).find(u=>u.id===dc.playerId);return u?`<span style="font-size:8px;padding:1px 6px;border-radius:3px;border:1px solid ${u.color}40;color:${u.color}">${u.name}</span>`:''})() : '';
      const kanonKey = m.kanonKey ? `'${m.kanonKey}'` : 'null';
      const dbId = dc ? `'${dc.id}'` : 'null';

      return `<div onclick="LoreKeeper._openCharModal(${kanonKey},${dbId})" style="background:var(--bg2);border:1px solid var(--ln);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;cursor:pointer;transition:border-color .15s,transform .12s" onmouseover="this.style.borderColor='rgba(80,200,150,.4)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--ln)';this.style.transform=''">
        ${img}
        <div style="padding:8px 10px;flex:1;display:flex;flex-direction:column;gap:3px">
          <div style="font-size:12px;color:var(--t0);font-weight:700;display:flex;align-items:center;flex-wrap:wrap;gap:3px">${m.label}${npcBadge}${deadBadge}</div>
          ${aliasBadge}
          ${playerBadge ? `<div style="margin-top:2px">${playerBadge}</div>` : ''}
          ${descHtml}
          ${(threatBadge||heatBadge) ? `<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">${threatBadge}${heatBadge}</div>` : ''}
        </div>
      </div>`;
    }).join('') || '<div style="color:var(--t3);font-size:11px;padding:20px;grid-column:1/-1">Sonuç bulunamadı.</div>';
  },

  async _openCharEdit(key) {
    // Show the kanon editor for a specific character
    const listEl = document.getElementById('lk-list');
    if (listEl) listEl.style.display = '';
    this._renderCharList();
    this._mode = 'read'; // reset so openDoc doesn't skip setMode call
    await this.openDoc(key);
    this.setMode('edit');
    // Add back-to-chars button at top of content
    const content = document.getElementById('lk-content');
    if (content) {
      const backBtn = document.createElement('button');
      backBtn.textContent = '← Karakterlere Dön';
      backBtn.style.cssText = 'margin:8px 0 12px;font-size:10px;padding:4px 10px;background:var(--bg3);border:1px solid var(--ln);color:var(--t2);border-radius:5px;cursor:pointer;font-family:var(--mono)';
      backBtn.onclick = () => { this._mode = 'read'; this.selectSection('chars'); };
      content.prepend(backBtn);
    }
  },

  _openInDB(charId) {
    if (!charId) { toast('DB kaydı yok', 'warn'); return; }
    // NYC_DB is a separate app — open it in a new tab with #char=ID hash
    // NYC_DB engine reads location.hash on load and calls UI.openModal(id)
    const NYC_DB_URL = 'https://erenaydintas.github.io/nyc_db/';
    window.open(`${NYC_DB_URL}#char=${charId}`, '_blank');
  },

  async _openCharModal(kanonKey, dbId) {
    this._modalKey  = kanonKey;
    this._modalDbId = dbId;
    const modal = document.getElementById('lk-char-modal');
    if (!modal) return;

    // Populate header
    const dc = dbId ? ((S.chars||[]).find(c=>String(c.id)===String(dbId))) : null;
    const nameEl  = document.getElementById('lk-cm-name');
    const aliasEl = document.getElementById('lk-cm-alias');
    const imgEl   = document.getElementById('lk-cm-img');
    const imgPh   = document.getElementById('lk-cm-img-ph');
    const badges  = document.getElementById('lk-cm-badges');
    const playerEl= document.getElementById('lk-cm-player');
    const bodyEl  = document.getElementById('lk-cm-body');
    const editBtn = document.getElementById('lk-cm-edit-btn');
    const dbBtn   = document.getElementById('lk-cm-db-btn');

    const label = dc?.name || (kanonKey ? kanonKey.replace('chars/','').replace(/-/g,' ') : '?');
    if (nameEl) nameEl.textContent = label;
    if (aliasEl) aliasEl.textContent = dc?.alias ? `"${dc.alias}"` : '';

    // Photo
    if (dc?.image) {
      if (imgEl)  { imgEl.src = dc.image; imgEl.style.display = 'block'; }
      if (imgPh)  imgPh.style.display = 'none';
    } else {
      if (imgEl)  imgEl.style.display = 'none';
      if (imgPh)  imgPh.style.display = 'flex';
    }

    // Badges
    const threatColor = { Low:'#50c896', Medium:'#fbbf24', High:'#f97316', Critical:'#ef4444', Omega:'#a855f7' };
    const heatColor   = { Clean:'#50c896', Warm:'#fbbf24', Hot:'#f97316', Burning:'#ef4444', Scorched:'#a855f7', Wanted:'#ec4899' };
    if (badges) {
      const bads = [];
      if (dc && !dc.playerId) bads.push(`<span style="font-size:9px;background:rgba(80,200,150,.15);color:#50c896;padding:2px 7px;border-radius:4px">NPC</span>`);
      if (dc?.status==='Deceased') bads.push(`<span style="font-size:9px;background:rgba(239,68,68,.15);color:#ef4444;padding:2px 7px;border-radius:4px">† Ölü</span>`);
      if (dc?.threatLevel) bads.push(`<span style="font-size:9px;padding:2px 7px;border-radius:4px;background:rgba(0,0,0,.3);color:${threatColor[dc.threatLevel]||'var(--t3)'}">⚠ ${dc.threatLevel}</span>`);
      if (dc?.heatLevel)   bads.push(`<span style="font-size:9px;padding:2px 7px;border-radius:4px;background:rgba(0,0,0,.3);color:${heatColor[dc.heatLevel]||'var(--t3)'}">🌡 ${dc.heatLevel}</span>`);
      badges.innerHTML = bads.join('');
    }

    // Player
    if (playerEl && dc?.playerId) {
      const u = (USERS||[]).find(u=>u.id===dc.playerId);
      playerEl.innerHTML = u ? `<span style="color:${u.color}">● ${u.name}</span>'ın karakteri` : '';
    } else if (playerEl) playerEl.textContent = '';

    // Orgs
    let orgLine = '';
    if (dc?.organizations?.length) {
      const orgNames = dc.organizations.map(oid=>(S.orgs||[]).find(o=>o.id===oid)?.name).filter(Boolean);
      if (orgNames.length) orgLine = `<div style="font-size:10px;color:var(--t3);margin-bottom:10px">${orgNames.join(' · ')}</div>`;
    }

    // Toggle buttons
    if (editBtn) editBtn.style.display = kanonKey ? '' : 'none';
    if (dbBtn)   dbBtn.style.display   = dbId     ? '' : 'none';

    // Body: load kanon content
    if (bodyEl) bodyEl.innerHTML = `${orgLine}<div style="color:var(--t3);font-size:10px">Yükleniyor…</div>`;
    modal.style.display = 'flex';

    if (kanonKey) {
      try {
        const doc = await KanonDB.loadDoc(kanonKey);
        const content = doc?.content || '';
        if (bodyEl) {
          if (!content.trim()) {
            bodyEl.innerHTML = `${orgLine}<div style="color:var(--t3)">Kanon belgesi henüz yazılmamış.</div>` +
              (dc?.story ? `<div style="margin-top:10px;padding:10px;background:var(--bg3);border-radius:6px;font-size:10px;color:var(--t2)"><strong style="color:var(--t3);font-size:9px;letter-spacing:.1em">NYC_DB ÖZET</strong><br>${dc.story.slice(0,500).replace(/</g,'&lt;')}${dc.story.length>500?'…':''}</div>` : '');
          } else {
            // Render markdown (sections as readable summary)
            let html = content
              .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
              .replace(/^# .+$/gm,'') // skip H1 (already shown as name)
              .replace(/^## (.+)$/gm,'<div style="font-size:10px;color:#50c896;font-weight:700;margin:12px 0 4px;text-transform:uppercase;letter-spacing:.08em">$1</div>')
              .replace(/^### (.+)$/gm,'<div style="font-size:10px;color:var(--t1);font-weight:600;margin:8px 0 3px">$1</div>')
              .replace(/\*\*(.+?)\*\*/g,'<strong style="color:var(--t0)">$1</strong>')
              .replace(/\*(.+?)\*/g,'<em style="color:var(--t2)">$1</em>')
              .replace(/^[-•] (.+)$/gm,'<div style="padding:2px 0 2px 12px;position:relative"><span style="position:absolute;left:3px;color:var(--t3)">›</span>$1</div>')
              .replace(/\n{2,}/g,'<div style="margin:5px 0"></div>')
              .replace(/\n/g,'<br>');
            bodyEl.innerHTML = orgLine + html;
          }
        }
      } catch(e) {
        if (bodyEl) bodyEl.innerHTML = `${orgLine}<div style="color:#f77">Yüklenemedi: ${e.message}</div>`;
      }
    } else if (dc?.story && bodyEl) {
      bodyEl.innerHTML = `${orgLine}<div style="font-size:10px;color:var(--t3);margin-bottom:6px">NYC_DB özeti:</div>${dc.story.slice(0,600).replace(/</g,'&lt;')}${dc.story.length>600?'…':''}`;
    } else if (bodyEl) {
      bodyEl.innerHTML = `${orgLine}<div style="color:var(--t3)">Bu karakter için içerik yok.</div>`;
    }
  },

  _closeCharModal() {
    const modal = document.getElementById('lk-char-modal');
    if (modal) modal.style.display = 'none';
  },

  _renderListSingle(sec) {
    const el = document.getElementById('lk-list');
    if (!el) return;
    el.innerHTML = `<div style="padding:10px 14px;font-size:11px;color:#50c896;font-weight:600;border-bottom:1px solid var(--ln)">${sec.icon} ${sec.label}</div>
      <div onclick="LoreKeeper.openDoc('${sec.key}')" style="padding:8px 14px;cursor:pointer;font-size:11px;color:var(--t1)">📄 Tüm içerik</div>`;
  },

  async openDoc(key) {
    this._activeKey = key;
    if (this._activeSection === 'chars') this._renderCharList();
    this._showContent('<div style="color:var(--t3);font-size:11px;padding:12px">Yükleniyor…</div>');
    this._setStatus('Yükleniyor…');
    // Update mode bar title
    const titleEl = document.getElementById('lk-doc-title');
    if (titleEl) titleEl.textContent = key.replace('chars/','').replace(/_/g,' ');
    const doc = await KanonDB.loadDoc(key).catch(() => null);
    if (!doc) {
      this._showContent('<div style="color:var(--t3);font-size:12px;padding:20px">Bu bölüm henüz içe aktarılmamış.<br><small>📥 İçe Aktar butonunu kullan</small></div>');
      this._setStatus('İçerik yok');
      const inp = document.getElementById('lk-editor-inp');
      if (inp) inp.value = '';
      return;
    }
    this._renderMarkdown(doc.content || '');
    const inp = document.getElementById('lk-editor-inp');
    if (inp) inp.value = doc.content || '';
    this._setStatus(`${doc.word_count ? doc.word_count + ' kelime' : 'Yüklendi'}`);
    // Back to read mode when switching doc (unless _openCharEdit already set edit)
    if (this._mode !== 'edit') this.setMode('read');
    // Clear chat context
    this._chatHistory = [];
    const log = document.getElementById('lk-chat-log');
    if (log) log.innerHTML = '';
  },

  _renderMarkdown(md) {
    // Simple markdown render: headers, bold, italic, bullet lists
    let html = md
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/^### (.+)$/gm, '<h3 style="font-size:13px;color:var(--t0);margin:14px 0 4px;border-bottom:1px solid var(--ln);padding-bottom:3px">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 style="font-size:14px;color:#50c896;margin:18px 0 6px;font-weight:700">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 style="font-size:16px;color:var(--t0);margin:0 0 12px;font-weight:700">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--t0)">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em style="color:var(--t2)">$1</em>')
      .replace(/^[-•] (.+)$/gm, '<div style="padding:2px 0 2px 14px;position:relative"><span style="position:absolute;left:4px;color:var(--t3)">›</span>$1</div>')
      .replace(/\n{2,}/g, '<div style="margin:6px 0"></div>')
      .replace(/\n/g, '<br>');
    this._showContent(`<div style="font-family:var(--sans)">${html}</div>`);
  },

  _showContent(html) {
    const el = document.getElementById('lk-content');
    if (el) { el.innerHTML = html; el.scrollTop = 0; }
  },

  // ── AI Soru-Cevap ──────────────────────────────────────────────
  async ask() {
    if (this._busy) return;
    const inp = document.getElementById('lk-inp');
    const q = inp?.value?.trim();
    if (!q) return;
    inp.value = '';
    this._addChat('user', q);
    this._busy = true;
    this._setStatus('Düşünüyor…');

    try {
      // Build context: always active doc + related docs if chars
      let ctx = '';
      if (this._activeKey) {
        const doc = await KanonDB.loadDoc(this._activeKey).catch(() => null);
        if (doc?.content) ctx += `\n=== ${this._activeKey} ===\n${doc.content.slice(0, 8000)}\n`;
      }
      // If chars section, also include meta+current_state for broader context
      if (this._activeSection === 'chars') {
        const meta = await KanonDB.loadDoc('meta').catch(() => null);
        const cur  = await KanonDB.loadDoc('current_state').catch(() => null);
        if (meta?.content) ctx += `\n=== DÜNYA / REHBER ===\n${meta.content.slice(0, 3000)}\n`;
        if (cur?.content)  ctx += `\n=== GÜNCEL DURUM ===\n${cur.content.slice(0, 2000)}\n`;
      }

      const historyTxt = this._chatHistory.slice(-6).map(h => `${h.role === 'user' ? 'Kullanıcı' : 'Lore Keeper'}: ${h.text}`).join('\n');
      const prompt = `Sen NYC_RP'nin Lore Keeper'ısın — bir kütüphaneci gibi rolün hikayesini ve sürekliliğini korursun. Sana aşağıdaki lore belgesi verildi. Soruları TÜRKÇE, kısa ve net yanıtla. Belgede olmayan şeyi uydurmadan "Belgede bu bilgi yok" de.

${ctx ? '=== LORE BELGESİ ===\n' + ctx : '(Belge yok — genel lore bilginle cevapla)'}

${historyTxt ? '=== ÖNCEKİ KONUŞMA ===\n' + historyTxt : ''}

Kullanıcı sorusu: ${q}`;

      const text = await _geminiGenerate(prompt, { temperature: 0.3, maxOutputTokens: 800, model: 'gemini-2.0-flash' });
      this._addChat('lore', text);
      this._chatHistory.push({ role: 'user', text: q }, { role: 'lore', text });
      if (this._chatHistory.length > 20) this._chatHistory = this._chatHistory.slice(-16);
    } catch(e) {
      this._addChat('error', '❌ ' + e.message);
    }
    this._busy = false;
    this._setStatus('Hazır');
  },

  _addChat(role, text) {
    const log = document.getElementById('lk-chat-log');
    if (!log) return;
    const color = role === 'user' ? 'var(--ac)' : role === 'lore' ? '#50c896' : '#f77';
    const label = role === 'user' ? 'Sen' : role === 'lore' ? '📖 Lore Keeper' : '⚠️';
    const div = document.createElement('div');
    div.style.cssText = 'margin-bottom:8px;padding:7px 10px;border-radius:6px;background:var(--bg3)';
    div.innerHTML = `<div style="font-size:9px;color:${color};font-weight:700;margin-bottom:3px;font-family:var(--mono)">${label}</div><div style="font-size:11px;color:var(--t1);line-height:1.5;white-space:pre-wrap">${text.replace(/</g,'&lt;')}</div>`;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  },

  clearChat() {
    this._chatHistory = [];
    const log = document.getElementById('lk-chat-log');
    if (log) log.innerHTML = '';
  },
};
window.LoreKeeper = LoreKeeper;

const MasterAgent = {
  _history: [],          // {role:'user'|'model', parts:[{text}]}
  _busy: false,
  _SYSTEM: null,         // built once on first send
  _FB_DOC: 'rp_config/ma_conversation_history', // Firestore path

  /* ── Load history from Firebase ──────────────────────── */
  async loadHistory() {
    try {
      const rows = await DB.get('ma_conversation_history?order=created_at.asc&limit=1');
      if (!rows?.length) return;
      const data = rows[0];
      if (data?.history && Array.isArray(data.history)) {
        this._history = data.history.slice(-60); // max 60 turns loaded
        this._fbDocId = data.id || null;
        this._renderHistory();
        console.log(`[MA] ${this._history.length} turn tarihi Firebase'den yüklendi.`);
      }
    } catch(e) {
      console.warn('[MA] Tarih yüklenemedi:', e.message);
    }
  },

  /* ── Save history to Firebase (debounced) ────────────── */
  _saveTimer: null,
  _fbDocId: null,
  _saveHistory() {
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(async () => {
      try {
        // Keep last 80 turns to avoid bloat
        const toSave = this._history.slice(-80);
        const payload = {
          history: toSave,
          updated_at: new Date().toISOString(),
          turn_count: toSave.length,
        };
        if (this._fbDocId) {
          await DB.patch(`ma_conversation_history?id=eq.${this._fbDocId}`, payload);
        } else {
          const ref = await DB.post('ma_conversation_history', { ...payload, created_at: new Date().toISOString() });
          this._fbDocId = ref?.id || null;
        }
      } catch(e) {
        console.warn('[MA] Tarih kaydedilemedi:', e.message);
      }
    }, 2000); // debounce 2s
  },

  /* ── Build system prompt (async — fetches kanon from Firebase) ── */
  async _buildSystem() {
    const now = new Date().toLocaleString('tr-TR');
    const rpTime = (S.roomId ? RpTime.get(S.roomId) : null) || '—';
    const worldSnap = OAI?._worldSnapshot || '(henüz oluşturulmadı)';
    // Fetch kanon context: active chars in scene for targeted char profiles
    const recentMsgText = (window.Msgs||[]).slice(-30).map(m=>m.char_name||'').join(' ');
    const activeCharNames = window.KanonDB ? KanonDB.extractActiveChars(recentMsgText) : [];
    const kanonCtx = window.KanonDB ? (await KanonDB.buildPromptContext(activeCharNames)) : '';
    const dmCtx = (typeof window.DMEngine !== 'undefined' && DMEngine.getContext)
      ? DMEngine.getContext().toString().slice(0, 2000)
      : '(DM Engine bağlı değil)';
    const activeCharList = (S.activeChars||[]).map(c=>c.name).join(', ') || '(yok)';
    const activeRoom = S.roomId || '(oda yok)';

    return [
      '=== NYC_RP MASTER AGENT — SİSTEM PROMPTU ===',
      `Gerçek zaman: ${now}`,
      `RP zamanı: ${rpTime}`,
      `Aktif oda: ${activeRoom}`,
      `Sahnedeki karakterler: ${activeCharList}`,
      '',
      'Sen NYC_DB roleplay sunucusunun ana yapay zeka yöneticisisin (Master Agent).',
      'GÖREVLER:',
      '1. Oyun yöneticisine (GM/admin) Türkçe olarak yardım et.',
      '2. Observer AI, DM Engine ve RP Chat arasında köprü kur.',
      '3. İstendiğinde RP odasına karakter adına mesaj at.',
      '4. Rol, dispatch, olay metinlerini MUTLAKA TÜRKÇE yaz.',
      '5. Kısa ve işlevsel cevap ver — sadece gerekli bilgiyi söyle.',
      '',
      'DİL KURALI: Tüm cevapların, ürettiğin rollerin, dispatch metinlerinin,',
      'olay açıklamalarının ve NPC diyaloglarının tamamı TÜRKÇE olacak.',
      'Hiçbir zaman İngilizce metin üretme. İsim/yer/unvan gibi lore ögeleri',
      'orijinal kalabilir (örn: LSPD, Vinewood) ama cümleler Türkçe olacak.',
      '',
      '== OYUNCU GİBİ DAVRANIŞ KURALI ==',
      'Sen gerçek bir oyuncu gibi davranırsın. NPC oluştururken, olay yaratırken,',
      'bir sahne kurguladığında veya karakter olarak aksiyon aldığında:',
      '  ✅ MUTLAKA SEND_MSG komutuyla metni doğrudan RP odasına gönder.',
      '  ❌ GEN_EVENT / GEN_DISPATCH komutlarını sadece GM onayı gereken',
      '     büyük yapısal olaylar için kullan — içerik zaten SEND_MSG ile',
      '     gönderilmişse bu komutları KULLANMA.',
      '',
      '== KULLANABİLECEĞİN KOMUTLAR ==',
      'Yanıtına aşağıdaki komutları göm, sistem otomatik çalıştırır:',
      '',
      'FLUSH_OAI          → Observer AI birikmiş mesajları hemen işle',
      'READ_DM            → DM bağlamını şimdi güncelle',
      'GEN_EVENT          → (Sadece GM onayı gereken büyük olaylar için) Dünya olayı modalını aç',
      'GEN_DISPATCH:NPC_ID → (Sadece GM onayı gereken durumlar için) Dispatch modalını aç',
      '',
      'SEND_MSG:{"content":"Mesaj metni","char_name":"Karakter Adı","room_id":"ODA_ID"}',
      '  → RP odasına belirtilen karakter adına mesaj atar — EN SIK KULLANACAĞIN KOMUT BU.',
      '  → room_id belirtilmezse aktif oda kullanılır.',
      '  → Kullanıcı mesajı [PANEL ODA SEÇİMİ: room_id=X, room_name="Y"] önekiyle başlıyorsa,',
      '    SEND_MSG içinde o room_id\'yi kullan (kullanıcı hangi odaya yazılmasını istediğini seçti).',
      '  → Aksiyon/emote için yıldız kullan: *Araçtan iner ve sahneye yaklaşır*',
      '',
      '  KARİŞTER KURALI:',
      '  - Mevcut karakter listesindeki biri oynuyorsa → char_id DE VER.',
      '    ÖRNEK: SEND_MSG:{"content":"*Silahını çeker*","char_name":"Marcus Webb","char_id":"BURAYA_ID"}',
      '  - Yeni NPC / geçici karakter ise → char_id VERME, sadece char_name ver.',
      '    ÖRNEK: SEND_MSG:{"content":"*Panikle araçtan iner* Özür dilerim, frenim tutmadı!","char_name":"Siyah Sedan Sürücüsü"}',
      '  - NPC bir örgüte aitse org_name ekle:',
      '    ÖRNEK: SEND_MSG:{"content":"10-4, yolda.","char_name":"Devriye 7","org_name":"NYPD"}',
      '  → Birden fazla karakter için birden fazla SEND_MSG kullanabilirsin.',
      '',
      'SAVE_NPC:{"name":"Ad","alias":"Takma Ad","occupation":"Meslek","age":"35","gender":"Erkek","backstory":"Kısa geçmiş","personality":"Karakter özellikleri","org_id":"ORG_ID","tags":["npc"]}',
      '  → Spontane oluşturduğun bir NPC\'yi kalıcı olarak karakterler veritabanına kaydeder.',
      '  → Kullanıcı "bunu kaydet" veya "bu karakteri sakla" dediğinde kullan.',
      '  → Kaydettikten sonra bir sonraki SEND_MSG\'de char_id olarak yeni ID\'yi kullanabilirsin.',
      '  → org_id ve alias opsiyoneldir.',
      '  ⚠️ ÖNEMLİ: SAVE_NPC KULLANMADAN ÖNCE "AKTİF KARİŞTERLER" listesinde aynı isimde',
      '     bir karakter var mı kontrol et! Varsa SAVE_NPC KULLANMA — mevcut char_id\'yi kullan.',
      '     Sistem de duplicate kontrolü yapar ve uyarı döndürür.',
      '',
      'SAVE_VEHICLE:{"plate":"34ABC123","model":"Dodge Charger","color":"Siyah","owner_name":"Marcus Webb","owner_id":"CHAR_ID","year":"2020","category":"Araba","mods":"Yükseltilmiş motor, koyu camlar","notes":"Gizli bölme var"}',
      '  → Yeni bir araç veritabanına (vehicles tablosu) kaydeder.',
      '  → owner_id opsiyoneldir. plate zorunludur.',
      '',
      'SAVE_PROP:{"name":"Red Hook Depo","type":"Depo","address":"Red Hook, Brooklyn","owner_name":"Marcus Webb","owner_id":"CHAR_ID","description":"Gizli silah deposu","notes":"Alt kattaki gizli oda"}',
      '  → Yeni bir mülk/lokasyon veritabanına (properties tablosu) kaydeder.',
      '  → type: Ev, Daire, Depo, İşyeri, Arsa, Garaj vb.',
      '',
      'QUERY_DB:{"table":"TABLO","filter":"ALAN=eq.DEĞER","select":"alan1,alan2","order":"alan.asc","limit":20}',
      '  → Veritabanından kayıt okur. Desteklenen tablolar:',
      '     characters       → tüm karakterler (name, alias, occupation, status, org_id, backstory, vb.)',
      '     vehicles         → araçlar (plate, model, color, owner_name, owner_id, mods, vb.)',
      '     properties       → mülkler/lokasyonlar (name, type, address, owner_name, vb.)',
      '     incidents        → olaylar (title, incident_type, severity, description, vb.)',
      '     rp_rooms         → odalar (name, slug, is_archived)',
      '     rp_messages      → mesajlar (char_name, content, room_id, created_at)',
      '     organizations    → örgütler (name, type, description, vb.)',
      '     character_memories → karakter anıları (char_name, memory_type, content, importance)',
      '     relationship_changes → ilişki değişimleri',
      '     ai_summaries     → AI özet kayıtları',
      '  → ÖRNEK: Bir karakterin araçlarını bul:',
      '     QUERY_DB:{"table":"vehicles","filter":"owner_id=eq.CHAR_ID","limit":10}',
      '  → ÖRNEK: Aktif olmayan karakterleri listele:',
      '     QUERY_DB:{"table":"characters","filter":"status=eq.Deceased","limit":20}',
      '  → ÖRNEK: Son olayları listele:',
      '     QUERY_DB:{"table":"incidents","order":"created_at.desc","limit":10}',
      '  → filter Supabase PostgREST formatını kullanır: alan=eq.DEĞER, alan=ilike.*METIN*, alan=gt.SAYI',
      '',
      'UPDATE_DB:{"table":"TABLO","id":"KAYIT_ID","data":{"alan":"yeni_değer"}}',
      '  → Veritabanındaki bir kaydı günceller.',
      '  → ÖRNEK: Karakter statüsünü güncelle:',
      '     UPDATE_DB:{"table":"characters","id":"char_123","data":{"status":"Deceased","notes":"Rakipler tarafından öldürüldü"}}',
      '  → ÖRNEK: Araç notunu güncelle:',
      '     UPDATE_DB:{"table":"vehicles","id":"veh_456","data":{"notes":"Yeni bilgi eklendi"}}',
      '  ⚠️ ÖNEMLİ: UPDATE_DB komutu otomatik çalışmaz — sistem kullanıcıya onay kartı gösterir.',
      '     Kullanıcı "Onayla" derse uygulanır, "İptal" derse işlem düşer.',
      '     Bu yüzden UPDATE_DB\'yi sadece gerçekten gerekli olduğunda kullan ve',
      '     önce kullanıcıya "şunu güncelleyeyim mi?" diye SOR, sonra UPDATE_DB yaz.',
      '',
      'SET_TIME:22:30',
      '  → Aktif RP odasının saatini değiştirir. Formatlar:',
      '  SET_TIME:22:30          → saati 22:30\'a ayarla',
      '  SET_TIME:+1h            → 1 saat ileri al',
      '  SET_TIME:+30m           → 30 dakika ileri al',
      '  SET_TIME:-2h            → 2 saat geri al',
      '  SET_TIME:+1d            → 1 gün ileri al',
      '  SET_TIME:2025-03-15 22:30 EST → tam tarih/saat/timezone ayarla',
      '  → Setup atarken veya sahne zaman geçişi yaparken kullan.',
      '  → Kullanmadan ÖNCE kullanıcıya sor: "RP zamanını [X] olarak ayarlayayım mı?"',
      '  → Onay aldıktan sonra SET_TIME komutunu kullan.',
      '',
      '== MESAJ BİÇİMLENDİRME ==',
      'SEND_MSG içinde bu markdown sözdizimini kullanabilirsin — sistem otomatik render eder:',
      '  *aksiyon metni*       → mor italik emote (karakter fiziksek eylem)',
      '  (( yorum ))           → OOC sarı — rol dışı açıklama (genellikle NA kullan)',
      '  **kalın metin**       → kalın vurgu',
      '  _italik metin_        → italik vurgu',
      '  ~~üstü çizili~~       → üstü çizili metin',
      '  __altı çizili__       → altı çizili metin',
      '  `kod`                 → mono kod bloğu',
      '  [renk|metin]          → renkli metin (örn: [#e05555|UYARI] veya [red|dur])',
      '  @KarakterAdı          → oyuncu/karakter etiket (bildirim gönderir)',
      'ÖRNEK: SEND_MSG:{"content":"*Yavaşça öne çıkar ve ellerini havaya kaldırır.* Kaçmıyorum, sakin ol.","char_name":"Marcus Webb"}',
      '',
      '== SETUP MESAJI KURALI ==',
      'Kullanıcı "setup at", "session başlat" veya "ortam kur" dediğinde YALNIZCA şehir atmosferi ve ortam betimlemesi yap.',
      'Setup mesajı şu formatı takip eder — başka hiçbir şey ekleme:',
      '',
      '# New York City Setup',
      '',
      '**New York City 🗽, NY, USA 🇺🇸 — [SAAT]**',
      '',
      '[Mevcut RP saatine, mevsime ve hava durumuna göre 1–2 paragraf şehir atmosferi: sokaklar, trafik, kalabalık, ışıklar, sesler. Sinematik ama doğal. Her seferinde farklı detay. Olay/aksiyon/karakter hareketi OLMAZ.]',
      '',
      'SEND_MSG içinde char_name kullanma — setup mesajı anonim gönderilir: SEND_MSG:{"content":"# New York City Setup\\n\\n**New York City 🗽, NY, USA 🇺🇸 — [SAAT]**\\n\\n[atmosfer metni]"}',
      '',
      '== NSFW / HASSAS İÇERİK ==',
      'NSFW/hassas içerikli mesajlar [Hassas içerik — gizli] olarak işaretlenir ve sen bu içerikleri göremezsin.',
      'Bu tür içerikleri analiz etme, tekrar etme veya türetme.',
      '',
      '== MÜZİK EKLEMEk ==',
      'Kullanıcı "müzik ekle", "şarkı çal", "sahneye müzik koy" veya "set the mood" dediğinde:',
      'SEND_MSG ile mesaj içine bir YouTube veya Spotify URL ekleyebilirsin.',
      'Örnek: SEND_MSG:{"content":"Sahneye uygun bir müzik: https://www.youtube.com/watch?v=VIDEO_ID","char_name":"DJ NPC"}',
      '',
      '== ETİKET SİSTEMİ ==',
      'RP mesajlarında [Karakter:İsim], [Araç:İsim], [Org:İsim], [Mülk:İsim] etiketleri kullanılır.',
      'Bu etiketler oyuncular tarafından ve senin mesajlarında sahne zenginleştirmek için kullanılır.',
      'SEND_MSG içinde etiket kullanabilirsin: "...[Org:NYPD] yetkilileri...",  "[Araç:Crown Victoria] yanına çekti"',
      '',
      '== AKTİF KARİŞTERLER (char_id gereken mevcut karakterler) ==',
      (S.chars||[]).filter(c=>c.status!=='Deceased').slice(0,30).map(c=>
        `  char_id:"${c.id}" | ${c.name}${c.alias?' ('+c.alias+')':''}`
      ).join('\n') || '  (karakter listesi yüklenmedi)',
      '',
      '== DÜNYA DURUMU ==',
      worldSnap,
      '',
      '== VERİTABANI ERİŞİMİ ==',
      'Aşağıdaki komutlarla NYC_DB veritabanını okuyup yazabilirsin:',
      '  QUERY_DB → tablo okuma (characters, vehicles, properties, incidents, rp_rooms, organizations, character_memories, vb.)',
      '  UPDATE_DB → kayıt güncelleme',
      '  SAVE_NPC / SAVE_VEHICLE / SAVE_PROP → yeni kayıt oluşturma',
      'Bir karakterin araçlarını, geçmişini, ilişkilerini, olaylardaki rolünü öğrenmek için QUERY_DB kullan.',
      'Rol yönetimi kararları almadan önce ilgili verileri sorgula.',
      '',
      ...(kanonCtx ? ['', '== KANON BİLGİ TABANI ==', kanonCtx] : []),
      '',
      '== DM BAĞLAMI ==',
      dmCtx,
    ].join('\n');
  },

  /* ── Build context string injected into every user turn ─ */
  /* Billing-efficient: transcript only on first turn or explicit request.
     Subsequent turns get header only (model already has context). */
  _liveCtx(includeTranscript = false) {
    const rpTime = S.roomId ? RpTime.get(S.roomId) : '—';
    const oaiStats = OAI ? `işlenen: ${OAI._processed||0}, kuyruk: ${OAI.Batcher?._queue?.length||0}` : '—';
    const header = `[CANLI BAĞLAM | RP: ${rpTime} | OAI: ${oaiStats} | Oda: ${S.roomId||'—'} | Karakter: ${S.activeChar?.name||'—'}]`;

    if (!includeTranscript) return header;

    // Smart transcript: last N messages, length-adaptive truncation
    const allMsgs = (S.msgs[S.roomId] || []);
    // Pick last 50–100 msgs depending on avg length
    const sample = allMsgs.slice(-20);
    const avgLen = sample.length
      ? sample.reduce((s, m) => s + (m.content||'').length, 0) / sample.length
      : 80;
    // Short messages (<80 chars avg) → take 100, long (>200) → take 50, else 70
    const take = avgLen < 80 ? 100 : avgLen > 200 ? 50 : 70;
    const msgs = allMsgs.slice(-take);

    // Per-message clip: keep proportional to avgLen so total stays ~3000 chars
    const clipPer = Math.max(60, Math.min(300, Math.floor(3000 / Math.max(msgs.length, 1))));

    if (!msgs.length) return header + '\n\n== SON MESAJLAR: (bu odada henüz mesaj yok) ==';

    // NSFW mesajlar AI'a gönderilmez
    const lines = msgs.map(m => {
      const t = m.rp_time ? m.rp_time.slice(11,16) : (m.created_at||'').slice(11,16) || '??:??';
      const who = `${m.char_name||'?'}${m.char_alias?' ('+m.char_alias+')':''}`;
      const raw = m.is_nsfw ? '[Hassas içerik — gizli]' : (m.content||'');
      const body = raw.length > clipPer ? raw.slice(0, clipPer) + '…' : raw;
      return `[${t}] ${who}: ${body}`;
    });

    return header + '\n\n== SON MESAJLAR (' + msgs.length + ' mesaj, oda: ' + (S.roomId||'?') + ') ==\n' + lines.join('\n');
  },

  /* ── Decide whether this turn needs the transcript ──── */
  _needsTranscript(userText) {
    // Always include on first message (history empty)
    if (this._history.length === 0) return true;
    // Include if user explicitly asks about the scene/rp
    const triggers = ['oku', 'bak', 'ne oldu', 'sahne', 'mesaj', 'rol', 'transcript', 'son', 'anlat', 'özetle', 'durum'];
    const low = userText.toLowerCase();
    return triggers.some(t => low.includes(t));
  },

  /* ── Execute tool commands embedded in model reply ─────── */
  async _maybeTool(text) {
    const results = [];

    if (/FLUSH_OAI/.test(text) && OAI?.Batcher?.flush) {
      try { await OAI.Batcher.flush(); results.push('✅ Observer AI batch işlendi.'); }
      catch(e) { results.push('⚠️ OAI flush hatası: ' + e.message); }
    }

    if (/READ_DM/.test(text) && DMEngine?.readNow) {
      try { await DMEngine.readNow(); results.push('✅ DM bağlamı güncellendi.'); }
      catch(e) { results.push('⚠️ DM okuma hatası: ' + e.message); }
    }

    // Only open GEN_EVENT modal if MA is NOT also posting content via SEND_MSG
    if (/GEN_EVENT/.test(text) && DMPanel?.openGenerateEvent && !/SEND_MSG:/.test(text)) {
      DMPanel.openGenerateEvent();
      results.push('✅ Dünya olayı modalı açıldı.');
    }

    const dispatchMatch = text.match(/GEN_DISPATCH:([\w-]+)/);
    if (dispatchMatch && DMPanel?.openGenerateDispatch) {
      DMPanel.openGenerateDispatch(dispatchMatch[1]);
      results.push('✅ Dispatch modalı açıldı.');
    }

    // SAVE_NPC:{ JSON } — save a spontaneous NPC to the characters collection
    const saveNpcMatch = text.match(/SAVE_NPC:(\{[\s\S]*?\})/);
    if (saveNpcMatch) {
      try {
        const p = JSON.parse(saveNpcMatch[1]);
        if (!p.name?.trim()) throw new Error('NPC adı boş');

        // ── Duplicate check: önce DB'de bu isimde karakter var mı? ────
        const nameNorm = p.name.trim().toLowerCase();
        const existingInMem = (S.chars || []).find(c =>
          c.name?.toLowerCase() === nameNorm ||
          c.alias?.toLowerCase() === nameNorm
        );
        if (existingInMem) {
          results.push(`⚠️ Karakter zaten mevcut → "${existingInMem.name}" (ID: ${existingInMem.id}) — yeni NPC oluşturulmadı. Mevcut karakteri kullanmak için char_id:"${existingInMem.id}" ile SEND_MSG at.`);
          // Inject into MA's next context so it knows
          if (!MasterAgent._sentIds) MasterAgent._sentIds = new Set();
        } else {
          // Also do a Firestore check for chars not yet in S.chars (e.g. recently created)
          let existsInDB = null;
          try {
            const dbRows = await DB.get(`characters?name=eq.${encodeURIComponent(p.name.trim())}&limit=1`).catch(()=>[]);
            if (dbRows?.length) existsInDB = dbRows[0];
          } catch(_) {}

          if (existsInDB) {
            // Load into S.chars so future checks hit the in-memory cache
            if (!S.chars) S.chars = [];
            if (!S.chars.find(c=>c.id===existsInDB.id)) {
              S.chars.push(existsInDB);
              S.ci?.set(existsInDB.id, existsInDB);
              S.cni?.set(existsInDB.name.toLowerCase(), existsInDB.id);
            }
            results.push(`⚠️ Veritabanında bu isimde karakter zaten var → "${existsInDB.name}" (ID: ${existsInDB.id}) — yeni NPC oluşturulmadı. Mevcut karakteri kullanmak için char_id:"${existsInDB.id}" ile SEND_MSG at.`);
          } else {
        // Build a minimal character record
        const newChar = {
          name:        p.name.trim(),
          alias:       p.alias || '',
          image:       p.image || p.avatar || '',
          status:      p.status || 'Active',
          backstory:   p.backstory || p.description || '',
          personality: p.personality || '',
          occupation:  p.occupation || '',
          age:         p.age || '',
          gender:      p.gender || '',
          organizations: p.org_id ? [p.org_id] : [],
          tags:        p.tags || ['npc', 'ma-generated'],
          created_by:  'master_agent',
          created_at:  new Date().toISOString(),
        };

        // Write to Firestore characters sub-collection (not nyc_db/main — that's a snapshot)
        const charRef = await DB.post('characters', newChar);
        const newId = charRef?.id || ('npc_' + Date.now());
        newChar.id = newId;

        // Also inject into in-memory S.chars so it's immediately usable
        if (!S.chars) S.chars = [];
        S.chars.push(newChar);
        S.ci?.set(newId, newChar);
        S.cni?.set(newChar.name.toLowerCase(), newId);

        results.push(`✅ NPC kaydedildi → "${newChar.name}" (ID: ${newId}) — artık SEND_MSG'de char_id olarak kullanılabilir.`);
          } // end else (not in DB)
          } // end else (not in mem)
      } catch(e) {
        results.push('❌ NPC kaydedilemedi: ' + e.message);
      }
    }

    // SAVE_VEHICLE:{ JSON } — save a vehicle to the vehicles collection
    const saveVehicleMatch = text.match(/SAVE_VEHICLE:(\{[\s\S]*?\})/);
    if (saveVehicleMatch) {
      try {
        const p = JSON.parse(saveVehicleMatch[1]);
        if (!p.plate) throw new Error('plate zorunlu');
        const newVehicle = {
          plate: p.plate,
          model: p.model || '',
          color: p.color || '',
          year: p.year || '',
          category: p.category || 'Araba',
          owner_name: p.owner_name || '',
          owner_id: p.owner_id || null,
          mods: p.mods || '',
          notes: p.notes || '',
          tags: p.tags || ['npc_vehicle'],
          created_by: 'master_agent',
          status: 'Active'
        };
        const vRef = await DB.post('vehicles', newVehicle);
        const newId = Array.isArray(vRef) ? vRef[0]?.id : vRef?.id;
        if (newId) newVehicle.id = newId;
        if (S._db?.vehicles) S._db.vehicles.push(newVehicle);
        results.push(`✅ Araç kaydedildi → "${newVehicle.plate}" ${newVehicle.model} (ID: ${newId})`);
      } catch (e) {
        results.push(`❌ SAVE_VEHICLE hatası: ${e.message}`);
      }
    }

    // SAVE_PROP:{ JSON } — save a property to the properties collection
    const savePropMatch = text.match(/SAVE_PROP:(\{[\s\S]*?\})/);
    if (savePropMatch) {
      try {
        const p = JSON.parse(savePropMatch[1]);
        if (!p.name) throw new Error('name zorunlu');
        const newProp = {
          name: p.name,
          type: p.type || 'Mülk',
          address: p.address || '',
          owner_name: p.owner_name || '',
          owner_id: p.owner_id || null,
          description: p.description || '',
          notes: p.notes || '',
          tags: p.tags || ['npc_property'],
          created_by: 'master_agent',
          status: 'Active'
        };
        const pRef = await DB.post('properties', newProp);
        const newId = Array.isArray(pRef) ? pRef[0]?.id : pRef?.id;
        if (newId) newProp.id = newId;
        if (S._db?.properties) S._db.properties.push(newProp);
        results.push(`✅ Mülk kaydedildi → "${newProp.name}" (ID: ${newId})`);
      } catch (e) {
        results.push(`❌ SAVE_PROP hatası: ${e.message}`);
      }
    }

    // QUERY_DB:{ JSON } — read any table from the database
    // Supported: QUERY_DB:{"table":"vehicles","filter":"owner_name=eq.Marcus Webb","limit":20}
    // Supported tables: characters, vehicles, properties, incidents, rp_rooms, rp_messages,
    //   organizations, character_memories, relationship_changes, ai_summaries, rp_player_profiles
    const queryDbMatches = [...text.matchAll(/QUERY_DB:(\{[\s\S]*?\})/g)];
    for (const qm of queryDbMatches) {
      try {
        const p = JSON.parse(qm[1]);
        const table = p.table || p.collection;
        if (!table) { results.push('❌ QUERY_DB: table belirtilmedi'); continue; }
        // Build query string
        let qs = table + '?';
        if (p.filter)  qs += p.filter + '&';
        if (p.select)  qs += 'select=' + p.select + '&';
        if (p.order)   qs += 'order=' + p.order + '&';
        const limit = Math.min(parseInt(p.limit)||20, 100);
        qs += 'limit=' + limit;
        const rows = await DB.get(qs).catch(e => { throw new Error(e.message || String(e)); });
        if (!rows || rows.length === 0) {
          results.push(`📋 QUERY_DB [${table}]: Sonuç bulunamadı.`);
        } else {
          const preview = JSON.stringify(rows, null, 2);
          results.push(`📋 QUERY_DB [${table}] (${rows.length} kayıt):\n${preview.slice(0, 3000)}${preview.length > 3000 ? '\n…(kısaltıldı)' : ''}`);
        }
      } catch(e) {
        results.push(`❌ QUERY_DB hatası: ${e.message}`);
      }
    }

    // UPDATE_DB:{ JSON } — update a record in any table (requires user confirmation)
    // ÖRNEK: UPDATE_DB:{"table":"characters","id":"char_123","data":{"status":"Deceased"},"reason":"Rakipler tarafından öldürüldü"}
    const updateDbMatches = [...text.matchAll(/UPDATE_DB:(\{[\s\S]*?\})/g)];
    for (const um of updateDbMatches) {
      try {
        const p = JSON.parse(um[1]);
        if (!p.table || !p.id || !p.data) { results.push('❌ UPDATE_DB: table, id ve data zorunlu'); continue; }
        // Queue the update — show confirmation UI, execute only on user approval
        const pendingId = 'upd_' + Date.now() + '_' + Math.random().toString(36).slice(2,6);
        MasterAgent._pendingUpdates = MasterAgent._pendingUpdates || {};
        MasterAgent._pendingUpdates[pendingId] = p;
        const dataPreview = Object.entries(p.data).map(([k,v])=>`${k}: "${v}"`).join(', ');
        const reason = p.reason ? ` — Sebep: ${p.reason}` : '';
        results.push(`⏳ UPDATE_DB onay bekleniyor [${pendingId}]\nTablo: ${p.table} | ID: ${p.id}\nDeğişiklik: ${dataPreview}${reason}`);
        // Render confirmation buttons in MA sidebar
        if (window.MASidebar) {
          setTimeout(() => {
            const confirmHtml = `<div style="background:rgba(255,180,0,.08);border:1px solid rgba(255,180,0,.3);border-radius:8px;padding:10px;margin:8px 0;font-size:12px">
              <div style="color:#ffb400;font-weight:600;margin-bottom:6px">⚠️ Veritabanı Güncelleme Onayı</div>
              <div style="color:#ccc;margin-bottom:4px"><b>Tablo:</b> ${p.table} &nbsp;|&nbsp; <b>ID:</b> ${p.id}</div>
              <div style="color:#ccc;margin-bottom:4px"><b>Değişiklik:</b> ${dataPreview}</div>
              ${p.reason ? `<div style="color:#aaa;margin-bottom:8px;font-style:italic">${p.reason}</div>` : ''}
              <div style="display:flex;gap:8px;margin-top:8px">
                <button onclick="MasterAgent._confirmUpdate('${pendingId}')" style="flex:1;padding:6px;background:rgba(100,220,100,.15);border:1px solid rgba(100,220,100,.4);color:#6dc;border-radius:6px;cursor:pointer;font-size:11px">✅ Onayla</button>
                <button onclick="MasterAgent._cancelUpdate('${pendingId}')" style="flex:1;padding:6px;background:rgba(220,80,80,.1);border:1px solid rgba(220,80,80,.3);color:#e88;border-radius:6px;cursor:pointer;font-size:11px">❌ İptal</button>
              </div>
            </div>`;
            const el = document.createElement('div');
            el.innerHTML = confirmHtml;
            el.dataset.pendingId = pendingId;
            const feed = document.getElementById('ma-chat-feed');
            if (feed) feed.appendChild(el);
          }, 300);
        }
      } catch(e) {
        results.push(`❌ UPDATE_DB hatası: ${e.message}`);
      }
    }

    // SET_TIME:<value> — RP odasının saatini değiştir
    const setTimeMatch = text.match(/SET_TIME:([^\s\n]+(?:\s+[^\n]+)?)/);
    if (setTimeMatch) {
      const roomId = S.roomId;
      if (!roomId) {
        results.push('❌ SET_TIME: Aktif oda yok');
      } else {
        try {
          const timeStr = setTimeMatch[1].trim();
          const newRpTime = await RpTime._parseAndApply(roomId, timeStr);
          const displayTime = RpTime.get(roomId);
          results.push(`🕐 RP zamanı güncellendi → ${displayTime}`);
          toast(`🕐 RP zamanı: ${displayTime}`, 'info');
        } catch(e) {
          results.push(`❌ SET_TIME hatası: ${e.message}`);
        }
      }
    }

    // SEND_MSG:{ JSON } — send a message to the RP room
    const sendMsgMatch = text.match(/SEND_MSG:(\{[\s\S]*?\})/);
    if (sendMsgMatch) {
      try {
        const params = JSON.parse(sendMsgMatch[1]);
        const roomId = params.room_id || S.roomId || (() => { try { return localStorage.getItem('nycrp_lastRoomId'); } catch(_) { return null; } })();
        if (!roomId) throw new Error('Aktif oda yok — lütfen önce bir odaya gir');
        if (!params.content?.trim()) throw new Error('İçerik boş');

        // Resolve char info:
        // - If char_id given AND matches an existing char → use that char's real data
        // - Otherwise → treat as NPC (no char_id, name as given, sent_by_user=null)
        let charId    = null;
        let charName  = params.char_name || 'NPC';
        let charAlias = params.char_alias || '';
        let charAvatar = params.char_avatar || '';
        let orgId = null, orgName = null, orgColor = null;
        let isRealChar = false;

        if (params.char_id) {
          const found = (S.chars || []).find(c => String(c.id) === String(params.char_id));
          if (found) {
            isRealChar = true;
            charId     = found.id;
            charName   = found.name;
            charAlias  = found.alias || '';
            charAvatar = found.image || '';
            const org  = S.oi?.get((found.organizations||[])[0] || found.organization);
            if (org) { orgId = org.id; orgName = org.name; orgColor = org.color || null; }
          }
          // If char_id not found in S.chars → ignore it, treat as NPC
        }

        // ── İZİN KONTROLÜ: MA oyuncu karakterini oynamak istiyorsa sor ──
        if (isRealChar) {
          const isPlayerChar = (S.activeChars||[]).some(c => String(c.id) === String(charId))
                            || (S.user && String(charId) === String(S.activeChar?.id));
          if (isPlayerChar) {
            // İzin bekliyor mu? Varsa iptal et
            const permKey = `ma_perm_${charId}`;
            const existing = window._maPermPending?.[permKey];
            if (existing === 'denied') {
              results.push(`⛔ ${charName} karakterini oynama izni reddedildi.`);
              return results.join('\n');
            }
            if (existing !== 'granted') {
              // İzin iste — non-blocking toast + callback
              if (!window._maPermPending) window._maPermPending = {};
              window._maPermPending[permKey] = 'pending';
              const pendingPayload = { ...params, _resolved: true };
              // Toast ile izin sor
              const toastEl = document.createElement('div');
              toastEl.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:rgba(30,20,50,.97);border:1px solid rgba(155,111,212,.6);border-radius:10px;padding:14px 18px;z-index:9999;max-width:340px;text-align:center;font-family:var(--sans)';
              toastEl.innerHTML = `
                <div style="color:var(--pu);font-size:12px;font-weight:700;margin-bottom:6px">⚠️ İzin Gerekli</div>
                <div style="color:var(--t1);font-size:11px;margin-bottom:12px">MA <b>${charName}</b> karakterini oynamak istiyor.<br><span style="color:var(--t3);font-size:10px">"${(params.content||'').slice(0,80)}"</span></div>
                <div style="display:flex;gap:8px;justify-content:center">
                  <button id="ma-perm-grant" style="padding:6px 16px;background:rgba(155,111,212,.3);border:1px solid rgba(155,111,212,.6);color:var(--pu);border-radius:6px;cursor:pointer;font-size:11px;font-family:var(--sans)">✅ İzin Ver</button>
                  <button id="ma-perm-deny" style="padding:6px 16px;background:rgba(200,60,60,.2);border:1px solid rgba(200,60,60,.4);color:#f77;border-radius:6px;cursor:pointer;font-size:11px;font-family:var(--sans)">❌ Reddet</button>
                </div>`;
              document.body.appendChild(toastEl);
              toastEl.querySelector('#ma-perm-grant').onclick = async () => {
                window._maPermPending[permKey] = 'granted';
                toastEl.remove();
                // Tekrar gönder
                await MasterAgent._execSendMsg(pendingPayload, results);
              };
              toastEl.querySelector('#ma-perm-deny').onclick = () => {
                window._maPermPending[permKey] = 'denied';
                toastEl.remove();
                toast(`MA'nın ${charName} oynaması engellendi`, 'info');
              };
              setTimeout(() => { toastEl.remove(); if (window._maPermPending?.[permKey] === 'pending') window._maPermPending[permKey] = null; }, 30000);
              results.push(`⏳ ${charName} için izin bekleniyor…`);
              return results.join('\n');
            }
            // granted — devam et, single-use: sıfırla
            window._maPermPending[permKey] = null;
          }
        }

        // org override from params (for NPC org context)
        if (!isRealChar && params.org_name) {
          orgName  = params.org_name;
          orgColor = params.org_color || null;
        }

        const rpTime = await RpTime.onMessage(roomId, params.content);

        const pl = {
          room_id:     roomId,
          char_id:     charId,            // null for NPCs — no accidental ID collision
          char_name:   charName,
          char_alias:  charAlias,
          char_avatar: charAvatar,
          org_id:      orgId,
          org_name:    orgName,
          org_color:   orgColor,
          content:     params.content,
          attachment_url: null,
          reactions:   {},
          is_edited:   false,
          // MA gerçek bir oyuncu gibi — tüm mesajlar master_agent'a atfedilir
          sent_by_user: 'master_agent',
          rp_time:     rpTime || null,
        };

        const msgRef = await DB.post('rp_messages', pl);
        // MA'nın gönderdiği mesajların ID'lerini takip et (auto-react için)
        if (msgRef?.id) {
          if (!MasterAgent._sentIds) MasterAgent._sentIds = new Set();
          MasterAgent._sentIds.add(msgRef.id);
          MasterAgent._lastSentAt = Date.now(); // oto-devam penceresi başlat
          try { localStorage.setItem('ma_lastSentAt', MasterAgent._lastSentAt); } catch(_) {}
          if (window.Session) Session.onMAMessage(msgRef.id);
          if (MasterAgent._sentIds.size > 50) {
            // Set'i küçük tut — en eski 25'i sil
            const arr = [...MasterAgent._sentIds];
            MasterAgent._sentIds = new Set(arr.slice(arr.length - 25));
          }
        }
        // MA Panel karakter listesini güncelle (charId kullan — doğru tip)
        if (window.MAPanel) MAPanel.notifyNewMsg(charId, charName, charAlias||null, orgName||null);
        results.push(`✅ Mesaj gönderildi → [${charName}] "${params.content.slice(0, 60)}${params.content.length > 60 ? '…' : ''}"`);
      } catch(e) {
        results.push('❌ Mesaj gönderilemedi: ' + e.message);
      }
    }

    // _execSendMsg: izin onayı sonrası tekrar tetiklemek için
    if (!MasterAgent._execSendMsg) {
      MasterAgent._execSendMsg = async function(params, results) {
        // Sadece o tek mesajı tekrar işle — basit DB.post
        try {
          const roomId = params.room_id || S.roomId || (() => { try { return localStorage.getItem('nycrp_lastRoomId'); } catch(_) { return null; } })();
          const found = params.char_id ? (S.chars||[]).find(c => String(c.id) === String(params.char_id)) : null;
          const charName = found?.name || params.char_name || 'NPC';
          const charAlias = found?.alias || params.char_alias || '';
          const org = found ? S.oi?.get((found.organizations||[])[0]||found.organization) : null;
          const rpTime = await RpTime.onMessage(roomId, params.content);
          const pl = { room_id: roomId, char_id: found?.id||null, char_name: charName, char_alias: charAlias, char_avatar: found?.image||'', org_id: org?.id||null, org_name: org?.name||params.org_name||null, org_color: org?.color||null, content: params.content, attachment_url: null, reactions: {}, is_edited: false, sent_by_user: 'master_agent', rp_time: rpTime||null };
          const ref = await DB.post('rp_messages', pl);
          if (ref?.id) { MasterAgent._sentIds?.add(ref.id); MasterAgent._lastSentAt = Date.now(); }
          if (window.MAPanel) MAPanel.notifyNewMsg(found?.id||null, charName, charAlias||null, org?.name||null);
          results && results.push(`✅ ${charName} mesajı gönderildi (izin sonrası)`);
        } catch(e) { results && results.push(`❌ ${e.message}`); }
      };
    }

    return results.length ? results.join('\n') : null;
  },

  /* ── Send a message ──────────────────────────────────── */
  async send(userText, opts = {}) {
    if (this._busy) return;
    if (!userText.trim()) return;
    this._busy = true;
    const silent = opts.silent === true; // auto-react mode: don't show thinking in main chat
    // Typing indicator — chatte "Master Agent düşünüyor…" göster
    S.typing['__ma__'] = { charName: 'Master Agent', userName: 'Master Agent', userColor: 'var(--pu)', _ma: true };
    if (window.UI) UI.renderTyping();

    // Rebuild system prompt each time (active char/room may have changed)
    this._SYSTEM = await this._buildSystem();

    // Push user message — include transcript only when needed (billing-efficient)
    // Auto-react always gets transcript (it IS the scene continuation trigger)
    const withTranscript = silent ? true : this._needsTranscript(userText);
    const fullUserText = this._liveCtx(withTranscript) + '\n\n' + userText;
    this._history.push({ role: 'user', parts: [{ text: fullUserText }] });
    if (!silent) this._renderHistory();

    try {
      // Gemini multi-turn via _geminiGenerate with history
      const systemInstr = this._SYSTEM;
      const contents = this._history.map(h => ({
        role: h.role,
        parts: h.parts,
      }));

      const body = {
        system_instruction: { parts: [{ text: systemInstr }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1500 },
      };

      const apiKey = (typeof __GEMINI_KEY__ !== 'undefined' ? __GEMINI_KEY__ : '') ||
                     window.DM_CONFIG?.geminiKey || '';
      const model = GEM_MDL();
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(`API ${res.status}`);
      const data = await res.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '(boş yanıt)';

      // Execute embedded tool commands and collect results
      const toolResult = await this._maybeTool(reply);
      // Store raw reply in history (for multi-turn context), show augmented in UI
      const displayReply = toolResult ? reply + '\n\n---\n' + toolResult : reply;
      this._history.push({ role: 'model', parts: [{ text: displayReply }] });
      this._saveHistory(); // persist to Firebase
      if (!silent) this._renderHistory();
      else {
        // Silent auto-react: show a subtle notification in sidebar
        if (window.MASidebar) {
          MASidebar._appendMsg(displayReply, 'model');
        }
      }
      return reply;
    } catch (e) {
      const errMsg = '❌ Hata: ' + e.message;
      this._history.push({ role: 'model', parts: [{ text: errMsg }] });
      if (!silent) this._renderHistory();
    } finally {
      this._busy = false;
      // Typing indicator'ı kaldır
      delete S.typing['__ma__'];
      if (window.UI) UI.renderTyping();
    }
  },

  /* ── Render conversation in #ma-chat ────────────────── */
  _renderHistory() {
    const el = document.getElementById('ma-chat');
    if (!el) return;
    // Only render actual user messages (without the live ctx prefix) and model replies
    el.innerHTML = '';
    this._history.forEach((h, i) => {
      const isUser = h.role === 'user';
      const rawText = h.parts[0]?.text || '';
      // Strip live ctx prefix for display
      const displayText = isUser ? rawText.replace(/^\[CANLI BAĞLAM[^\]]*\]\n\n/, '') : rawText;
      const div = document.createElement('div');
      div.className = 'ma-msg ' + (isUser ? 'ma-user' : 'ma-model');
      // Simple markdown: bold, code blocks
      div.innerHTML = this._md(displayText);
      el.appendChild(div);
    });
    el.scrollTop = el.scrollHeight;

    // Show/hide thinking indicator
    const ind = document.getElementById('ma-thinking');
    if (ind) ind.style.display = this._busy ? 'flex' : 'none';
  },

  /* ── Minimal markdown renderer ───────────────────────── */
  _md(text) {
    return text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/```([\s\S]*?)```/g, '<pre class="ma-code">$1</pre>')
      .replace(/`([^`]+)`/g, '<code class="ma-inline">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  },

  /* ── Clear history ───────────────────────────────────── */
  async clear() {
    this._history = [];
    this._SYSTEM = null;
    this._renderHistory();
    const el = document.getElementById('ma-chat');
    if (el) el.innerHTML =
      '<div class="ma-empty"><i class="fas fa-robot"></i><p>Master Agent hazır.<br><small>Herhangi bir RP sorusu sorun veya bir eylem isteyin.</small></p></div>';
    // Also clear from Firebase
    try {
      if (this._fbDocId) {
        await DB.patch(`ma_conversation_history?id=eq.${this._fbDocId}`, { history: [], turn_count: 0, updated_at: new Date().toISOString() });
      }
    } catch(e) { console.warn('[MA] Tarih temizlenemedi:', e.message); }
  },

  /* ── Handle Enter key in input ───────────────────────── */
  onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.submit();
    }
  },

  submit() {
    const inp = document.getElementById('ma-inp');
    if (!inp) return;
    let txt = inp.value.trim();
    if (!txt || this._busy) return;
    inp.value = '';
    // Inject selected room if panel room-selector has a value
    const roomSel = document.getElementById('ma-room-select');
    if (roomSel && roomSel.value) {
      const room = (S.rooms||[]).find(r=>String(r.id)===roomSel.value);
      const roomName = room ? (room.name||room.slug||roomSel.value) : roomSel.value;
      txt = `[PANEL ODA SEÇİMİ: room_id=${roomSel.value}, room_name="${roomName}"] ${txt}`;
    }
    this.send(txt);
  },

  /* ── Auto-react: called after user sends an RP message ── */
  _autoEnabled: true,
  _lastAutoAt: 0,
  _lastSentAt: 0,       // MA'nın en son mesaj gönderdiği zaman
  _autoWindow: 120000,  // MA mesajından sonra kaç ms içinde gelen mesaj tetikler (2dk)
  _autoCooldown: 45000, // Oto-devam sonrası minimum bekleme (45s)
  _sentIds: new Set(), // MA'nın gönderdiği mesaj ID'leri — reply kontrolü için

  async _autoReact(sentMsg) {
    // Don't auto-react if MA is busy or auto was recently triggered
    if (this._busy) return;
    if (Date.now() - this._lastAutoAt < this._autoCooldown) return;
    // OOC odada oto-devam yapma
    const autoRoomIdCheck = window.MAPanel ? MAPanel.getAutoRoomId() : (sentMsg.room_id || S.roomId);
    const autoRoom = (S.rooms||[]).find(r => String(r.id) === String(autoRoomIdCheck));
    if (autoRoom && (autoRoom.type === 'ooc' || autoRoom.is_ooc)) return;
    this._lastAutoAt = Date.now();

    const charName = sentMsg.char_name || '?';
    const content  = sentMsg.content  || '';

    // MA'nın bu sahnede oynadığı son karakteri bul (seçili oda öncelikli)
    const autoRoomId = window.MAPanel ? MAPanel.getAutoRoomId() : S.roomId;
    const roomMsgs = (S?.msgs?.[autoRoomId] || S?.msgs?.[S?.roomId] || []);
    const lastMAMsg = [...roomMsgs].reverse().find(m => (m.char_name||'').toLowerCase().includes('master agent'));
    const maCurrentChar = lastMAMsg ? (lastMAMsg.char_alias || lastMAMsg.char_name || null) : null;
    const maCurrentCharId = lastMAMsg?.char_id || null;

    // Bu karakter için kayıtlı direktif var mı? (MAPanel karakter sohbetinden)
    let charDirective = '';
    if (window.MAPanel) {
      const key = maCurrentCharId || maCurrentChar;
      const cd = key ? MAPanel._getCharDirective(key) : null;
      if (cd) charDirective = `\n\n[KARAKTER TALİMATI — ${maCurrentChar}: ${cd}]`;
    }

    // MA'ya gönder: kendi conversation history'si zaten var,
    // sadece hangi karakter olduğunu hatırlat ve oyuncunun mesajını ilet
    const autoPrompt = [
      `[OTO-DEVAM]`,
      maCurrentChar ? `Sen hâlâ ${maCurrentChar} karakterisin — karakter değiştirme.` : '',
      `${charName} şunu yaptı/söyledi: "${content.slice(0,250)}"`,
      charDirective,
      ``,
      `Sahneyi ${maCurrentChar || 'mevcut karakterin'} olarak devam ettir. SEND_MSG kullan. Tek bir doğal tepki yeter — sahneyi uzatma. Sahne tamamsa sadece "Bekliyorum." yaz.`,
    ].filter(l => l !== undefined).join('\n');

    try {
      await this.send(autoPrompt, { silent: true });
      if (window.MASidebar) MASidebar._syncLastReply();
    } catch(e) {
      console.warn('[MA Auto] Error:', e.message);
    }
  },

  // Gelen her yeni mesajda RT tarafından çağrılır
  _onIncomingMsg(msg) {
    if (!this._autoEnabled) return;
    if (this._busy) return;
    // MA'nın kendi gönderdiği mesajları sayma
    if (this._sentIds?.has(msg.id)) return;
    // MA mesajı mı? (char_name kontrolü — bu da sayılmaz)
    if ((msg.char_name || '').toLowerCase().includes('master agent')) return;
    // OOC odaysa yoksay — OOC sohbeti rol zannedip cevap vermesin
    const msgRoom = (S.rooms||[]).find(r => String(r.id) === String(msg.room_id || S.roomId));
    if (msgRoom && (msgRoom.type === 'ooc' || msgRoom.is_ooc)) return;

    // MA bu odada hiç mesaj attı mı? (zaman sınırı YOK — oto-devam açık olduğu sürece aktif)
    let maHasSpoken = false;
    const now = Date.now();

    // 1) Bu session'da MA mesaj attı mı?
    if (this._lastSentAt > 0) {
      maHasSpoken = true;
    }

    // 2) localStorage'da kayıtlı son MA mesajı var mı?
    if (!maHasSpoken) {
      try {
        const lsTime = parseInt(localStorage.getItem('ma_lastSentAt') || '0', 10);
        if (lsTime > 0) {
          maHasSpoken = true;
          this._lastSentAt = lsTime; // sync
        }
      } catch(_) {}
    }

    // 3) S.msgs içinde herhangi bir MA mesajı var mı? (fallback — oda tarihine bak)
    if (!maHasSpoken) {
      const roomMsgs = (S?.msgs?.[S?.roomId] || []);
      const lastMAMsg = [...roomMsgs].reverse().find(m => (m.char_name || '').toLowerCase().includes('master agent'));
      if (lastMAMsg) {
        maHasSpoken = true;
        const lastMATime = new Date(lastMAMsg.created_at).getTime();
        this._lastSentAt = lastMATime;
        try { localStorage.setItem('ma_lastSentAt', lastMATime); } catch(_) {}
      }
    }

    if (!maHasSpoken) return;
    // Cooldown kontrolü
    if (now - this._lastAutoAt < this._autoCooldown) return;
    // Tetikle
    setTimeout(() => this._autoReact(msg), 1500);
  },
  async _entityCheck(msg, entityMatches) {
    if(this._busy) return;
    // Build a concise check prompt
    const content = msg.content || '';
    const charName = msg.char_name || '?';
    const entities = entityMatches.map(m => `[${m[1]}:${m[2]}]`).join(', ');

    const checkPrompt = [
      `[ENTİTE KONTROL] ${charName} şunu söyledi: "${content.slice(0,300)}"`,
      `Etiketlenen öğeler: ${entities}`,
      '',
      'Bu mesajda veritabanına kaydedilmesi gereken bir değişiklik var mı?',
      'Örnekler:',
      '  - Karakter bir araç SATIN ALDI veya KİRALADI → SAVE_VEHICLE ile kaydet ve sor',
      '  - Karakter bir mülk SATIN ALDI veya KİRALADI → SAVE_PROP ile kaydet ve sor',
      '  - Yeni NPC ile tanışıldı → SAVE_NPC öner',
      '  - Sadece bir araç kullanıldı, sahneye çıktı → kayıt gerekmez',
      '',
      'Eğer kaydedilmesi gereken bir şey varsa:',
      '  1. MA sidebar\'da kısaca açıkla ("Lisa bir La Ferrari satın aldı — DB\'ye ekleyeyim mi?")',
      '  2. Kullanıcı onaylamadan SAVE_VEHICLE/SAVE_PROP/SAVE_NPC KULLANMA',
      '  3. Onay için son cümlen "Onaylıyor musun? (evet/hayır)" olsun',
      '',
      'Eğer kayıt gerekmiyorsa sadece "Kayıt gerekmez." yaz — başka bir şey yazma.',
    ].join('\n');

    try {
      const reply = await this.send(checkPrompt, { silent: true });
      // If reply contains a question (ends with ?), reveal the sidebar so user sees it
      if(reply && reply.includes('?') && reply.length > 20 && !/kayıt gerekmez/i.test(reply)) {
        if(window.MASidebar) MASidebar.revealForMention();
      }
    } catch(e) {
      console.warn('[MA EntityCheck]', e.message);
    }
  },
};

/* ═══ DB UPDATER — mass character/relationship update from OAI sessions ═══ */
const DBUpdater = {
  openModal() {
    const existing = document.getElementById('dbupdate-modal');
    if(existing) { existing.remove(); return; }

    const modal = document.createElement('div');
    modal.id = 'dbupdate-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:9995;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px)';
    modal.innerHTML = `
      <div style="background:var(--bg2);border:1px solid var(--ln2);border-radius:16px;padding:24px;max-width:480px;width:92%;box-shadow:0 24px 64px rgba(0,0,0,.6);max-height:80vh;overflow-y:auto">
        <div style="font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4db880;margin-bottom:4px"><i class="fas fa-sync-alt"></i> DB Güncelle</div>
        <div style="font-size:12.5px;color:var(--t2);margin-bottom:16px;line-height:1.5">
          Birden fazla session özetine ve karakter hafızasına bakarak NYC_DB'yi günceller:<br>
          <span style="color:var(--t3);font-size:11px">Karakter durumu, meslek, ilişkiler, notlar, biyografi vs.</span>
        </div>

        <div style="margin-bottom:12px">
          <label style="font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">Kaç session özetini al?</label>
          <select id="dbu-session-count" style="width:100%;background:var(--bg3);border:1px solid var(--ln);color:var(--t1);border-radius:6px;padding:6px 8px;font-size:12px">
            <option value="3">Son 3 session</option>
            <option value="5" selected>Son 5 session</option>
            <option value="10">Son 10 session</option>
            <option value="20">Son 20 session</option>
          </select>
        </div>

        <div style="margin-bottom:12px">
          <label style="font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:4px">Ne güncellensin?</label>
          <div style="display:flex;flex-wrap:wrap;gap:6px">
            <label style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--t1);cursor:pointer"><input type="checkbox" id="dbu-status" checked> Karakter Durumu</label>
            <label style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--t1);cursor:pointer"><input type="checkbox" id="dbu-notes" checked> Notlar / Biyografi</label>
            <label style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--t1);cursor:pointer"><input type="checkbox" id="dbu-relations" checked> İlişkiler</label>
            <label style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--t1);cursor:pointer"><input type="checkbox" id="dbu-occupation" checked> Meslek / Org</label>
          </div>
        </div>

        <div id="dbu-log" style="background:var(--bg0);border:1px solid var(--ln);border-radius:8px;padding:10px;font-family:var(--mono);font-size:10px;color:var(--t2);min-height:60px;max-height:200px;overflow-y:auto;margin-bottom:14px;display:none">
          <span style="color:var(--t3)">Hazır.</span>
        </div>

        <div style="display:flex;gap:8px">
          <button onclick="document.getElementById('dbupdate-modal').remove()" style="flex:1;padding:9px;background:var(--bg3);border:1px solid var(--ln);color:var(--t2);border-radius:8px;cursor:pointer;font-size:12px">İptal</button>
          <button id="dbu-run-btn" onclick="DBUpdater.run()" style="flex:2;padding:9px;background:rgba(77,184,128,.15);border:1px solid rgba(77,184,128,.4);color:#4db880;border-radius:8px;cursor:pointer;font-size:12px;font-weight:600"><i class="fas fa-play"></i> Güncellemeyi Başlat</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e=>{ if(e.target===modal) modal.remove(); });
  },

  _log(msg, color='var(--t2)') {
    const log = document.getElementById('dbu-log');
    if(!log) return;
    log.style.display = 'block';
    const line = document.createElement('div');
    line.style.cssText = `color:${color};margin-bottom:2px`;
    line.textContent = `[${new Date().toLocaleTimeString('tr')}] ${msg}`;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  },

  async run() {
    const btn = document.getElementById('dbu-run-btn');
    if(btn) { btn.disabled=true; btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Çalışıyor…'; }

    const sessionCount = parseInt(document.getElementById('dbu-session-count')?.value||5);
    const doStatus     = document.getElementById('dbu-status')?.checked;
    const doNotes      = document.getElementById('dbu-notes')?.checked;
    const doRelations  = document.getElementById('dbu-relations')?.checked;
    const doOccupation = document.getElementById('dbu-occupation')?.checked;

    this._log('⏳ Backup alınıyor…');

    // 0. Backup — tüm karakterleri localStorage'a kaydet
    try {
      const allChars = S.chars || [];
      if(allChars.length > 0) {
        const backupKey = `nyc_db_backup_${new Date().toISOString().slice(0,19).replace(/[T:]/g,'-')}`;
        localStorage.setItem(backupKey, JSON.stringify({ ts: Date.now(), chars: allChars }));
        // Sadece son 5 backup'ı tut
        const allKeys = Object.keys(localStorage).filter(k=>k.startsWith('nyc_db_backup_')).sort();
        while(allKeys.length > 5) { localStorage.removeItem(allKeys.shift()); }
        this._log(`✅ Backup alındı → ${backupKey} (${allChars.length} karakter)`, '#4db880');
      }
    } catch(e) { this._log(`⚠️ Backup alınamadı: ${e.message}`, 'var(--am)'); }

    this._log('Session özetleri alınıyor…');

    // 1. Fetch summaries and memories
    let summaries = [], memories = [], chars = [];
    try {
      summaries = await DB.get(`ai_summaries?summary_type=eq.rp_session&order=created_at.desc&limit=${sessionCount}`).catch(()=>[]);
      memories  = await DB.get(`character_memories?ai_readable=eq.true&source_type=eq.rp_session&order=created_at.desc&limit=${sessionCount*20}`).catch(()=>[]);
      chars     = (S.chars||[]).filter(c=>c.status!=='Deceased').slice(0,50);
    } catch(e) { this._log('Veri alınamadı: '+e.message, 'var(--rd)'); return; }

    this._log(`${summaries.length} özet, ${memories.length} anı, ${chars.length} karakter yüklendi.`);

    if(!summaries.length && !memories.length) {
      this._log('Güncellenecek session özeti bulunamadı.', 'var(--am)');
      if(btn) { btn.disabled=false; btn.innerHTML='<i class="fas fa-play"></i> Güncellemeyi Başlat'; }
      return;
    }

    // 2. Build Gemini prompt
    const summaryText = summaries.map((s,i)=>`--- Session ${i+1}: ${s.title||'Başlıksız'} ---\n${s.content||''}`).join('\n\n');
    const memoryText  = memories.slice(0,60).map(m=>`[${m.char_name}] ${m.title}: ${m.content||''}`).join('\n');
    const charListText = chars.map(c=>`char_id:"${c.id}" | ${c.name} | Meslek:${c.occupation||'?'} | Durum:${c.status||'?'}`).join('\n');

    const updateScope = [
      doStatus     && 'status (Aktif/Aranan/Yaralı/Ölü vb.)',
      doNotes      && 'notes (kısa notlar, biyografi güncelleme)',
      doOccupation && 'occupation (meslek değişikliği)',
      doRelations  && 'relationships (ilişki açıklaması metni — relationships alanı)',
    ].filter(Boolean).join(', ');

    const prompt = `Sen NYC_DB güncelleyicisisin. Aşağıdaki session özetlerine ve karakter anılarına bakarak karakterlerin veritabanı bilgilerini güncelle.

GÜNCELLENECEK ALANLAR: ${updateScope}

SESSION ÖZETLERİ:
${summaryText}

KARAKTER ANILARI (son ${memories.length} adet):
${memoryText}

MEVCUT KARAKTERLER (char_id ile):
${charListText}

GÖREV: Her karakter için SADECE gerçekten değişen alanları güncelle. Tahmin etme, sadece özetlerde/anılarda açıkça belirtilen değişiklikleri kullan.

YANIT FORMATI — sadece JSON array, başka hiçbir şey:
[
  {
    "char_id": "...",
    "char_name": "...",
    "updates": {
      "status": "Aranan",
      "notes": "Güncellenen not metni",
      "occupation": "Yeni meslek",
      "relationships": "Güncellenmiş ilişki metni"
    },
    "reason": "Neden güncellendi (kısa)"
  }
]

Değişiklik olmayan karakterleri listeye dahil ETME. Eğer hiç güncelleme yoksa boş array [] döndür.`;

    this._log('Gemini\'ye gönderiliyor…');

    let updates = [];
    try {
      const result = await _geminiGenerate(prompt, { json:true, temperature:0.15, maxOutputTokens:3000 });
      updates = Array.isArray(result) ? result : (result?.updates || []);
    } catch(e) {
      this._log('Gemini hatası: '+e.message, 'var(--rd)');
      if(btn) { btn.disabled=false; btn.innerHTML='<i class="fas fa-play"></i> Güncellemeyi Başlat'; }
      return;
    }

    this._log(`${updates.length} karakter güncellenecek.`, '#4db880');
    SessionProgress.show(`DB güncelleniyor… (0/${updates.length} karakter)`);

    // 3. Apply updates
    let done = 0, failed = 0;
    for(const upd of updates) {
      if(!upd.char_id || !upd.updates || Object.keys(upd.updates).length===0) continue;
      SessionProgress.update(done, updates.length, `${upd.char_name} güncelleniyor…`);
      try {
        await DB.patch('characters', `id=eq.${upd.char_id}`, upd.updates);
        // Also update in-memory
        const inMem = (S.chars||[]).find(c=>String(c.id)===String(upd.char_id));
        if(inMem) Object.assign(inMem, upd.updates);
        done++;
        // Detaylı alan raporu
        const updatedFields = Object.keys(upd.updates).join(', ');
        this._log(`✅ ${upd.char_name} → [${updatedFields}]`, '#4db880');
        if(upd.reason) this._log(`   ↳ ${upd.reason}`, 'var(--t3)');
      } catch(e) {
        failed++;
        this._log(`❌ ${upd.char_name}: ${e.message}`, 'var(--rd)');
      }
      await new Promise(r=>setTimeout(r,300));
    }

    SessionProgress.update(updates.length, updates.length, `Tamamlandı — ${done} güncellendi, ${failed} hata`);
    setTimeout(()=>SessionProgress.hide(), 3000);
    this._log('─────────────────────────────', 'var(--ln2)');
    this._log(`📊 ÖZET: ${done} karakter güncellendi, ${failed} hata.`, done>0?'#4db880':'var(--am)');
    this._log(`📦 Backup localStorage'a kaydedildi (son 5 backup tutulur).`, 'var(--t3)');
    if(btn) { btn.disabled=false; btn.innerHTML='<i class="fas fa-check"></i> Tamamlandı — Tekrar Çalıştır'; }
  }
};

/* ── Confirm / cancel pending UPDATE_DB operations ───── */
MasterAgent._confirmUpdate = async function(pendingId) {
  const p = MasterAgent._pendingUpdates?.[pendingId];
  if (!p) return;
  try {
    await DB.patch(p.table, `id=eq.${p.id}`, p.data);
    const dataPreview = Object.entries(p.data).map(([k,v])=>`${k}: "${v}"`).join(', ');
    // Remove confirmation card
    document.querySelectorAll(`[data-pending-id="${pendingId}"]`).forEach(el=>el.remove());
    // Notify MA about the result
    MasterAgent._history.push({role:'user', parts:[{text:`[SİSTEM] UPDATE_DB onaylandı ve uygulandı → ${p.table} id:${p.id} | ${dataPreview}`}]});
    MasterAgent._history.push({role:'model', parts:[{text:`✅ Güncelleme uygulandı.`}]});
    if (window.MASidebar) MASidebar._appendMsg(`✅ Güncelleme uygulandı: ${p.table} → ${dataPreview}`, 'system');
    delete MasterAgent._pendingUpdates[pendingId];
    toast('Güncelleme uygulandı', 'success');
    // Refresh in-memory S.chars if characters table updated
    if (p.table === 'characters') {
      const idx = (S.chars||[]).findIndex(c=>String(c.id)===String(p.id));
      if (idx !== -1) Object.assign(S.chars[idx], p.data);
    }
  } catch(e) {
    toast('Güncelleme hatası: ' + e.message, 'error');
  }
};

MasterAgent._cancelUpdate = function(pendingId) {
  document.querySelectorAll(`[data-pending-id="${pendingId}"]`).forEach(el=>el.remove());
  MasterAgent._history.push({role:'user', parts:[{text:`[SİSTEM] UPDATE_DB iptal edildi → pending id: ${pendingId}`}]});
  MasterAgent._history.push({role:'model', parts:[{text:`Anladım, güncelleme iptal edildi.`}]});
  if (window.MASidebar) MASidebar._appendMsg(`❌ Güncelleme iptal edildi.`, 'system');
  delete (MasterAgent._pendingUpdates||{})[pendingId];
  toast('Güncelleme iptal edildi', 'warn');
};

window.MasterAgent = MasterAgent;

/* ════════════════════════════════════════════════════════
   MA SIDEBAR  — compact Master Agent widget in members panel
   Shares MasterAgent._history so context is unified.
════════════════════════════════════════════════════════ */
const MASidebar = {
  _collapsed: false,

  toggle() {
    this._collapsed = !this._collapsed;
    const body = document.getElementById('ma-sb-body');
    const icon = document.getElementById('ma-sb-toggle-icon');
    if (body) body.style.display = this._collapsed ? 'none' : 'flex';
    if (icon) icon.style.transform = this._collapsed ? 'rotate(180deg)' : '';
  },

  quick(text) {
    const inp = document.getElementById('ma-sb-inp');
    if (inp) inp.value = text;
    this.send();
  },

  /* ── Toggle auto-react on/off ── */
  toggleAuto() {
    if (!window.MasterAgent) return;
    MasterAgent._autoEnabled = !MasterAgent._autoEnabled;
    const btn = document.getElementById('ma-auto-toggle');
    if (btn) {
      const on = MasterAgent._autoEnabled;
      btn.textContent = `🤖 Oto: ${on ? 'AÇ' : 'KPL'}`;
      btn.style.borderColor = on ? 'rgba(124,77,255,.5)' : 'rgba(255,80,80,.4)';
      btn.style.color = on ? 'var(--ac)' : 'var(--rd)';
    }
  },

  /* ── Setup At — atmosferik şehir setup'ı gönder (session başlatmadan) ── */
  setupAct() {
    const rpTime = S.roomId ? RpTime.get(S.roomId) : '—';
    const prompt = `Aşağıdaki formatta bir Setup mesajı yaz ve SEND_MSG komutuyla RP odasına gönder.\n\nKural: Setup sadece atmosfer ve ortam betimler — olay, aksiyon veya karakter aksiyonu OLMAZ. Sinematik, doğal, 1–2 paragraf.\n\nFormat:\n# New York City Setup\n\n**New York City 🗽, NY, USA 🇺🇸 — ${rpTime}**\n\n[Mevcut RP saatine ve mevsime göre şehrin atmosferini, sokaklarını, trafiğini, insan kalabalığını betimle. Her seferinde özgün detaylar kullan.]\n\nSadece bu formatı kullan. Başka açıklama ekleme. SEND_MSG içinde char_name kullanma.`;
    MasterAgent.send(prompt);
    MASidebar.revealForMention();
  },

  /* ── Entity Check — son mesajlardaki etiketleri manuel kontrol et ── */
  async entityCheck() {
    if (!window.MasterAgent) return;
    if (!S.roomId) { toast('Önce bir odaya gir', 'warn'); return; }
    toast('🏷️ Son mesajlar taranıyor…', 'info');
    try {
      const msgs = await DB.get(`rp_messages?room_id=eq.${S.roomId}&is_deleted=eq.false&order=created_at.desc&limit=30`).catch(()=>[]);
      if (!msgs.length) { toast('Mesaj bulunamadı', ''); return; }
      const entityTagPattern = /\[(Karakter|Araç|Mülk|Org|Ekipman):([^\]]+)\]/g;
      const found = [];
      for (const m of msgs) {
        const matches = [...(m.content||'').matchAll(entityTagPattern)];
        if (matches.length) found.push({ msg: m, matches });
      }
      if (!found.length) { toast('Son 30 mesajda etiketli entity bulunamadı', ''); return; }
      // En son bulunanı MA'ya gönder
      const { msg, matches } = found[0];
      MASidebar.revealForMention();
      await MasterAgent._entityCheck(msg, matches);
    } catch(e) { console.warn('[EntityCheck manual]', e); toast('Entity kontrol hatası', 'error'); }
  },

  send() {
    const inp = document.getElementById('ma-sb-inp');
    if (!inp) return;
    const txt = inp.value.trim();
    if (!txt) return;
    inp.value = '';
    this._appendMsg(txt, 'user');
    this._appendMsg('…', 'thinking');
    MasterAgent.send(txt).then(() => {
      this._syncLastReply();
    });
  },

  _appendMsg(text, role) {
    const log = document.getElementById('ma-sb-log');
    if (!log) return;
    // Remove thinking bubble before adding real reply
    if (role !== 'thinking') {
      const thinking = log.querySelector('.thinking');
      if (thinking) thinking.remove();
    }
    const div = document.createElement('div');
    div.className = 'ma-sb-msg ' + role;
    div.innerHTML = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  },

  _syncLastReply() {
    // Get the last model reply from shared MasterAgent history
    const hist = MasterAgent._history;
    const last = [...hist].reverse().find(h => h.role === 'model');
    if (!last) return;
    const text = last.parts[0]?.text || '';
    // Remove thinking indicator first
    const log = document.getElementById('ma-sb-log');
    if (log) {
      const thinking = log.querySelector('.thinking');
      if (thinking) thinking.remove();
    }
    this._appendMsg(text, 'model');
  },

  revealForMention() {
    const body = document.getElementById('ma-sb-body');
    if (body && body.style.display === 'none') this.toggle();
    const log = document.getElementById('ma-sb-log');
    if (log) setTimeout(() => log.scrollTop = log.scrollHeight, 300);
  },
};

window.MASidebar = MASidebar;

/* ═══ MA PANEL — MA'nın oynadığı karakterleri listeler ════════════════════ */
const MAPanel = {
  _chars: [], // { char_id, char_name, char_alias, org_name, msg_count, last_at, saved? }
  _LS_KEY: 'ma_played_chars',
  _directives: {}, // charKey → directive string (persisted to localStorage)
  _DIR_KEY: 'ma_char_directives',
  _activeChat: null, // şu an açık olan karakter sohbeti key'i

  _loadDirectives() {
    try { this._directives = JSON.parse(localStorage.getItem(this._DIR_KEY) || '{}'); } catch(_) {}
  },
  _saveDirectives() {
    try { localStorage.setItem(this._DIR_KEY, JSON.stringify(this._directives)); } catch(_) {}
  },
  _getCharDirective(key) {
    if (!this._directives) this._loadDirectives();
    return this._directives[String(key)] || '';
  },
  _setCharDirective(key, text) {
    if (!this._directives) this._loadDirectives();
    this._directives[String(key)] = text;
    this._saveDirectives();
  },

  // Genel MA sohbetine dön
  openGeneralChat() {
    this._activeChat = null;
    this._updateChatHeader(null);
    this._renderCharPanel(null);
    this._render(); // sol panelde seçimi kaldır
  },

  // Karakter sohbet penceresini aç — sağ panel header + direktif bölümü
  openCharChat(idx) {
    const c = this._chars[idx];
    if (!c) return;
    const key = c.char_id || c.char_name;
    this._activeChat = { idx, key, char: c };
    this._updateChatHeader(c);
    this._renderCharPanel(c, idx, key);
    this._highlightChar(idx);
  },

  // Sağ panel header'ı güncelle
  _updateChatHeader(c) {
    const icon = document.getElementById('ma-chat-header-icon');
    const name = document.getElementById('ma-chat-header-name');
    const sub  = document.getElementById('ma-chat-header-sub');
    const backBtn = document.getElementById('ma-chat-back-btn');
    const generalDot = document.getElementById('ma-general-active-dot');
    if (!name) return;
    if (c) {
      if (icon) icon.textContent = (c.char_name||'?')[0].toUpperCase();
      if (icon) { icon.style.background = 'rgba(155,111,212,.3)'; icon.style.font = '700 11px var(--mono)'; icon.style.color = 'var(--pu)'; }
      name.textContent = c.char_name + (c.char_alias ? ` "${c.char_alias}"` : '');
      if (sub) sub.textContent = c.org_name || 'Karakter talimatı';
      if (backBtn) backBtn.style.display = 'flex';
      if (generalDot) generalDot.style.display = 'none';
    } else {
      if (icon) { icon.textContent = '🤖'; icon.style.background = ''; icon.style.font = ''; icon.style.color = ''; }
      name.textContent = 'Master Agent';
      if (sub) sub.textContent = 'Genel sohbet';
      if (backBtn) backBtn.style.display = 'none';
      if (generalDot) generalDot.style.display = 'block';
    }
  },

  // Sağ panelde karakter direktif bölümünü göster/gizle
  _renderCharPanel(c, idx, key) {
    let panel = document.getElementById('ma-char-panel');
    if (!c) {
      if (panel) panel.style.display = 'none';
      return;
    }
    if (!panel) {
      // Panel yoksa oluştur — ma-chat ile input arasına ekle
      panel = document.createElement('div');
      panel.id = 'ma-char-panel';
      const chatEl = document.getElementById('ma-chat');
      if (chatEl && chatEl.parentNode) {
        chatEl.parentNode.insertBefore(panel, chatEl.nextSibling);
      }
    }
    panel.style.display = 'block';
    const directive = this._getCharDirective(key) || '';
    panel.style.cssText = 'border-top:1px solid var(--ln);background:var(--bg1);padding:12px 16px;flex-shrink:0';
    panel.innerHTML = `
      <div style="font-size:10px;color:var(--t3);margin-bottom:5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase">Karakter Talimatı</div>
      <div style="font-size:10px;color:var(--t3);margin-bottom:7px;line-height:1.4">MA bu karakteri oto-devamda oynarken baz alır. <em>Örn: "Soğukkanlı, az konuşur."</em></div>
      <textarea id="ma-char-directive-inp"
        placeholder="Bu karakteri nasıl oynamasını istiyorsun?"
        style="width:100%;background:rgba(255,255,255,.04);border:1px solid var(--ln);border-radius:6px;color:var(--t1);font-size:11px;font-family:var(--sans);padding:7px 10px;resize:none;height:64px;box-sizing:border-box;outline:none"
        onkeydown="if(event.key==='Enter'&&event.ctrlKey){MAPanel._saveDirectiveAndSend();event.preventDefault()}"
      >${directive}</textarea>
      <div style="display:flex;gap:6px;margin-top:7px">
        <button onclick="MAPanel._saveDirective()" style="flex:1;padding:4px;background:rgba(155,111,212,.15);border:1px solid rgba(155,111,212,.4);color:var(--pu);border-radius:5px;cursor:pointer;font-size:10px">💾 Kaydet</button>
        <button onclick="MAPanel._saveDirectiveAndSend()" style="flex:1;padding:4px;background:rgba(155,111,212,.3);border:1px solid rgba(155,111,212,.6);color:var(--pu);border-radius:5px;cursor:pointer;font-size:10px;font-weight:600">💬 Kaydet & Söyle</button>
        ${!c.saved ? `<button onclick="MAPanel.saveCharToDB(${idx})" style="flex:1;padding:4px;background:rgba(77,184,128,.12);border:1px solid rgba(77,184,128,.3);color:var(--gn);border-radius:5px;cursor:pointer;font-size:10px">💾 DB'ye Kaydet</button>` : ''}
      </div>
    `;
  },

  // Sol panelde seçili kartı vurgula
  _highlightChar(idx) {
    const el = document.getElementById('ma-char-list');
    if (!el) return;
    el.querySelectorAll('.npc-card').forEach((card, i) => {
      card.style.background = (i === idx) ? 'var(--ac-d)' : '';
      card.style.borderLeft = (i === idx) ? '2px solid var(--pu)' : '';
    });
  },

  closeCharChat() {
    this.openGeneralChat();
  },

  _closeCharChat() {
    this.openGeneralChat();
  },

  _saveDirective() {
    if (!this._activeChat) return;
    const inp = document.getElementById('ma-char-directive-inp');
    if (!inp) return;
    this._setCharDirective(this._activeChat.key, inp.value.trim());
    toast('Karakter talimatı kaydedildi', 'ok');
  },

  _saveDirectiveAndSend() {
    if (!this._activeChat) return;
    const inp = document.getElementById('ma-char-directive-inp');
    if (!inp) return;
    const text = inp.value.trim();
    this._setCharDirective(this._activeChat.key, text);
    const c = this._activeChat.char;
    const prompt = `[KARAKTER TANIMI — ${c.char_name}${c.char_alias ? ` (${c.char_alias})` : ''}]: ${text}\n\nBu karakteri bundan böyle bu şekilde oyna. Anladıysan kısa bir onay ver.`;
    MasterAgent.send(prompt);
    toast('Karakter talimatı kaydedildi & MA\'ya gönderildi', 'ok');
  },

  _saveLS() {
    try { localStorage.setItem(this._LS_KEY, JSON.stringify(this._chars)); } catch(_) {}
  },

  _loadLS() {
    try {
      const raw = localStorage.getItem(this._LS_KEY);
      if (raw) this._chars = JSON.parse(raw);
    } catch(_) {}
    this._loadDirectives();
  },

  async loadMAChars() {
    const el = document.getElementById('ma-char-list');
    if (el) el.innerHTML = '<div class="empty" style="font-size:11px;padding:20px;color:var(--t3)"><i class="fas fa-spinner fa-spin"></i> Yükleniyor…</div>';
    try {
      // MA'nın gönderdiği mesajlardan karakter listesi çıkar
      const msgs = await DB.get('rp_messages?sent_by_user=eq.master_agent&is_deleted=eq.false&order=created_at.desc&limit=200').catch(() => []);
      const charMap = new Map(); // char_id|char_name → aggregated
      for (const m of msgs) {
        const key = m.char_id || ('__'+m.char_name);
        if (!key || key === '__' || key === '__null') continue;
        if (!charMap.has(key)) {
          charMap.set(key, {
            char_id: m.char_id || null,
            char_name: m.char_name || '?',
            char_alias: m.char_alias || null,
            org_name: m.org_name || null,
            msg_count: 0,
            last_at: m.created_at,
          });
        }
        const entry = charMap.get(key);
        entry.msg_count++;
        if (m.created_at > entry.last_at) {
          entry.last_at = m.created_at;
          if (m.char_alias) entry.char_alias = m.char_alias;
          if (m.org_name) entry.org_name = m.org_name;
        }
      }
      // localStorage'daki kayıtlı karakterleri de birleştir (saved flag'i koru)
      const lsChars = (() => { try { return JSON.parse(localStorage.getItem(this._LS_KEY)||'[]'); } catch(_) { return []; } })();
      for (const lsC of lsChars) {
        const key = lsC.char_id || ('__'+lsC.char_name);
        if (!charMap.has(key)) charMap.set(key, { ...lsC, msg_count: lsC.msg_count||0 });
        else if (lsC.saved) charMap.get(key).saved = true;
      }
      this._chars = [...charMap.values()].sort((a,b) => (b.last_at||'').localeCompare(a.last_at||''));
      this._saveLS();
      this._render();
    } catch(e) {
      console.warn('[MAPanel]', e);
      if (el) el.innerHTML = '<div class="empty" style="font-size:11px;padding:20px;color:var(--rd)">Yüklenemedi</div>';
    }
  },

  _render() {
    const el = document.getElementById('ma-char-list');
    if (!el) return;
    if (!this._chars.length) {
      el.innerHTML = '<div class="empty" style="font-size:11px;padding:20px;text-align:center"><i class="fas fa-robot" style="color:rgba(155,111,212,.3);font-size:20px"></i><p style="color:var(--t3);margin-top:8px">MA henüz karakter oynamadı.</p></div>';
      return;
    }
    el.innerHTML = this._chars.map((c, i) => {
      const initial = (c.char_name||'?')[0].toUpperCase();
      const alias = c.char_alias ? `<span style="color:var(--t3);font-size:9px"> "${c.char_alias}"</span>` : '';
      const org = c.org_name ? `<div style="font-size:9px;color:var(--t3);margin-top:1px"><i class="fas fa-building" style="font-size:8px"></i> ${c.org_name}</div>` : '';
      const count = `<span style="font-size:9px;color:var(--t3)">${c.msg_count} msg</span>`;
      const hasDirective = !!(this._getCharDirective(c.char_id || c.char_name));
      const chatBtn = `<button onclick="event.stopPropagation();MAPanel.openCharChat(${i})" title="Karakter talimatı & ayarlar"
          style="font-size:9px;padding:1px 5px;border:1px solid rgba(155,111,212,.4);border-radius:3px;background:${hasDirective ? 'rgba(155,111,212,.3)' : 'rgba(155,111,212,.08)'};color:var(--pu);cursor:pointer;margin-left:2px;line-height:1.4">💬${hasDirective ? '✓' : ''}</button>`;
      const delBtn = `<button onclick="event.stopPropagation();MAPanel.removeChar(${i})" title="Listeden kaldır"
          style="font-size:9px;padding:1px 5px;border:1px solid rgba(200,60,60,.3);border-radius:3px;background:rgba(200,60,60,.08);color:#f77;cursor:pointer;margin-left:2px;line-height:1.4">✕</button>`;
      const saveIcon = c.saved ? `<span style="font-size:9px;color:var(--gn);margin-left:2px" title="NYC_DB'ye kaydedildi"><i class="fas fa-check-circle"></i></span>` : '';
      const isActive = this._activeChat?.idx === i;
      return `<div class="npc-card" style="padding:8px 10px;display:flex;align-items:flex-start;gap:8px;border-bottom:1px solid var(--ln);cursor:pointer;${isActive ? 'background:var(--ac-d);border-left:2px solid var(--pu);' : ''}"
        onclick="MAPanel.openCharChat(${i})">
        <div style="width:28px;height:28px;border-radius:50%;background:rgba(155,111,212,.25);border:1px solid rgba(155,111,212,.4);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--pu);flex-shrink:0">${initial}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
            <span style="font-size:11px;font-weight:600;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.char_name}</span>${alias}
            <span style="margin-left:auto;display:flex;align-items:center;gap:2px">${count}${chatBtn}${saveIcon}${delBtn}</span>
          </div>
          ${org}
        </div>
      </div>`;
    }).join('');
  },

  async saveCharToDB(idx) {
    const c = this._chars[idx];
    if (!c || c.saved) return;
    // Zaten NYC_DB'de kayıtlı mı kontrol et
    if (c.char_id) {
      const existing = (S.chars||[]).find(ch => String(ch.id) === String(c.char_id));
      if (existing) {
        c.saved = true; this._saveLS(); this._render();
        toast(`${c.char_name} zaten DB'de mevcut`, 'info');
        return;
      }
    }
    // MA aracılığıyla SAVE_NPC komutu gönder
    const npcDesc = [
      c.char_alias ? `Alias: ${c.char_alias}` : '',
      c.org_name   ? `Org: ${c.org_name}` : '',
    ].filter(Boolean).join(', ');
    const prompt = `SAVE_NPC karakteri NYC_DB'ye kaydet: name:"${c.char_name}"${npcDesc ? ', ' + npcDesc : ''}. Kısa bir açıklama ekle ve kaydet.`;
    toast(`${c.char_name} kaydediliyor…`, 'info');
    try {
      await MasterAgent.send(prompt, { silent: true });
      c.saved = true;
      this._saveLS();
      this._render();
      toast(`✅ ${c.char_name} NYC_DB'ye kaydedildi`, 'ok');
    } catch(e) {
      toast(`❌ Kayıt hatası: ${e.message}`, 'error');
    }
  },

  playAs(charIdOrName, charName) {
    // MA'ya bu karakteri canlandırmasını söyle
    const prompt = charIdOrName && charIdOrName !== charName
      ? `Şimdi char_id:"${charIdOrName}" (${charName}) karakterini oyna. Mevcut RP ortamına uygun, kısa bir mesaj gönder.`
      : `Şimdi "${charName}" karakterini oyna. Mevcut RP ortamına uygun, kısa bir mesaj gönder.`;
    MasterAgent.send(prompt);
  },

  removeChar(idx) {
    const c = this._chars[idx];
    if (!c) return;
    if (!confirm(`"${c.char_name}" karakterini listeden kaldır?`)) return;
    this._chars.splice(idx, 1);
    this._saveLS();
    // Direktifi de temizle
    const key = c.char_id || c.char_name;
    if (this._directives?.[key]) { delete this._directives[key]; this._saveDirectives(); }
    if (this._activeChat?.idx === idx) this._activeChat = null;
    this._render();
  },

  // Oto-devam için seçili oda — null = mevcut aktif oda
  _autoRoomId: null,

  getAutoRoomId() {
    return this._autoRoomId || S.roomId;
  },

  // SEND_MSG sonrası char listesini güncelle (yeni karakter eklenmişse)
  notifyNewMsg(charId, charName, charAlias, orgName) {
    const key = charId || ('__'+charName);
    if (!key || key === '__') return;
    const existing = this._chars.find(c => (c.char_id||('__'+c.char_name)) === key);
    if (existing) {
      existing.msg_count++;
      existing.last_at = new Date().toISOString();
      if (charAlias) existing.char_alias = charAlias;
      if (orgName) existing.org_name = orgName;
    } else {
      this._chars.unshift({ char_id: charId||null, char_name: charName||'?', char_alias: charAlias||null, org_name: orgName||null, msg_count: 1, last_at: new Date().toISOString(), saved: false });
    }
    this._saveLS();
    this._render();
  },

  /* ── Observer AI toggle from MA panel ─────────────── */
  _toggleOAI() {
    if (!window.OAI) return;
    if (OAI.running) { OAI.stop(); } else { OAI.start(); }
    // Button text synced via existing ai-pill-txt update + here
    setTimeout(() => {
      const txt = document.getElementById('ma-panel-oai-txt');
      const btn = document.getElementById('ma-panel-oai-btn');
      if (!txt || !btn) return;
      const on = OAI.running;
      txt.textContent = on ? 'Observer AI: ON' : 'Observer AI: OFF';
      btn.style.borderColor = on ? 'rgba(77,184,128,.4)' : 'rgba(var(--ln-rgb,80,80,90),.6)';
      btn.style.color = on ? 'var(--gn)' : 'var(--t3)';
    }, 150);
  },

  /* ── Auto-react toggle from MA panel ──────────────── */
  _toggleAuto() {
    if (!window.MasterAgent) return;
    const isOn = MasterAgent._autoEnabled !== false;
    MasterAgent._autoEnabled = !isOn;
    const txt = document.getElementById('ma-panel-auto-txt');
    if (txt) txt.textContent = MasterAgent._autoEnabled ? '🤖 Oto: AÇ' : '🤖 Oto: KAPALI';
    // Keep sidebar toggle in sync
    const sbTxt = document.getElementById('ma-auto-toggle');
    if (sbTxt) sbTxt.textContent = MasterAgent._autoEnabled ? '🤖 Oto: AÇ' : '🤖 Oto: KAPALI';
    toast('MA Oto: ' + (MasterAgent._autoEnabled ? 'AÇ' : 'KAPALI'), 'info');
  },

  /* ── Entity check from MA panel ───────────────────── */
  _entityCheckPanel() {
    if (window.MASidebar?.entityCheck) MASidebar.entityCheck();
    else if (window.MasterAgent) MasterAgent.send('Son mesajlardaki karakterleri, araçları, örgütleri ve mülkleri tara. Veritabanına kaydedilmesi gereken yeni entity var mı? Varsa bana sor.');
  },

  /* ── Populate room selector dropdown ──────────────── */
  _fillRoomSelect() {
    const rooms = (S.rooms || []).filter(r => !r.is_archived);
    // MA mesaj odası seçici
    const sel = document.getElementById('ma-room-select');
    if (sel) {
      while (sel.options.length > 1) sel.remove(1);
      rooms.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r.id;
        opt.textContent = r.name || r.slug || r.id;
        sel.appendChild(opt);
      });
    }
    // Oto-devam oda seçici
    const autoSel = document.getElementById('ma-auto-room-select');
    if (autoSel) {
      while (autoSel.options.length > 1) autoSel.remove(1);
      rooms.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r.id;
        opt.textContent = r.name || r.slug || r.id;
        if (r.id === this._autoRoomId) opt.selected = true;
        autoSel.appendChild(opt);
      });
    }
  },

  /* ── Sync OAI button state on panel open ──────────── */
  _syncPanelState() {
    this._fillRoomSelect();
    // Header'ı mevcut duruma göre ayarla
    if (this._activeChat) {
      this._updateChatHeader(this._activeChat.char);
    } else {
      this._updateChatHeader(null);
    }
    // OAI button
    const txt = document.getElementById('ma-panel-oai-txt');
    const btn = document.getElementById('ma-panel-oai-btn');
    if (txt && btn) {
      const on = window.OAI?.running;
      txt.textContent = on ? 'Observer AI: ON' : 'Observer AI: OFF';
      btn.style.borderColor = on ? 'rgba(77,184,128,.4)' : '';
      btn.style.color = on ? 'var(--gn)' : '';
    }
    // Auto toggle
    const autoTxt = document.getElementById('ma-panel-auto-txt');
    if (autoTxt) autoTxt.textContent = (window.MasterAgent?._autoEnabled !== false) ? '🤖 Oto: AÇ' : '🤖 Oto: KAPALI';
    const autoChk = document.getElementById('ma-auto-chk');
    if (autoChk) autoChk.checked = (window.MasterAgent?._autoEnabled !== false);
    const sbTgl = document.getElementById('ma-auto-toggle');
    if (sbTgl) sbTgl.textContent = (window.MasterAgent?._autoEnabled !== false) ? '🤖 Oto: AÇ' : '🤖 Oto: KAPALI';
  },
};

window.MAPanel = MAPanel;

/* ═══ SESSION MANAGER ══════════════════════════════════════════ */
/* ═══ AUTO BACKUP — her 6 saatte bir tüm odalar + mesajlar ═══════════════ */
const AutoBackup = {
  INTERVAL_MS: 6 * 60 * 60 * 1000, // 6 saat
  _timer: null,
  _lastRun: null,

  start() {
    if (this._timer) return;
    // Sayfa açılınca son backup zamanını kontrol et
    const lastTs = parseInt(localStorage.getItem('nyc_auto_backup_last') || '0');
    const elapsed = Date.now() - lastTs;
    // Eğer 6 saatten fazla geçmişse hemen çalıştır, değilse kalan süre sonra
    const firstDelay = elapsed >= this.INTERVAL_MS ? 5000 : (this.INTERVAL_MS - elapsed);
    setTimeout(async () => {
      await this.run();
      this._timer = setInterval(() => this.run(), this.INTERVAL_MS);
    }, firstDelay);
    console.log(`[AutoBackup] Başlatıldı — ilk backup ${Math.round(firstDelay/60000)} dk sonra`);
  },

  stop() {
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
  },

  async run() {
    if (!S.rooms?.length) { console.log('[AutoBackup] Oda yok, atlandı'); return; }
    const ts = new Date().toISOString();
    console.log('[AutoBackup] Başlıyor…', ts);
    try {
      const backupData = { ts, rooms: [], messages: {}, triggered_by: 'auto_6h' };

      // Tüm odaları al
      for (const room of S.rooms) {
        backupData.rooms.push({ id: room.id, name: room.name, slug: room.slug, type: room.type, is_archived: room.is_archived });
        // Her odanın son 500 mesajını al
        try {
          const msgs = await DB.get(`rp_messages?room_id=eq.${room.id}&is_deleted=eq.false&order=created_at.desc&limit=500`).catch(() => []);
          if (msgs.length) backupData.messages[room.id] = msgs;
        } catch(e) { console.warn(`[AutoBackup] Oda ${room.id} mesajları alınamadı`, e); }
      }

      const totalMsgs = Object.values(backupData.messages).reduce((a, b) => a + b.length, 0);

      // Firebase'e kaydet
      try {
        await DB.post('rp_session_backups', {
          backup_type: 'auto_6h',
          room_count: backupData.rooms.length,
          message_count: totalMsgs,
          content: JSON.stringify(backupData),
          created_at: ts,
          triggered_by: S.user?.id || 'system'
        });
        console.log(`[AutoBackup] Firebase'e kaydedildi — ${backupData.rooms.length} oda, ${totalMsgs} mesaj`);
      } catch(e) {
        // Firebase yoksa localStorage'a düş
        console.warn('[AutoBackup] Firebase yazılamadı, localStorage\'a kaydediliyor', e);
        const lsKey = `nyc_auto_backup_${Date.now()}`;
        try {
          localStorage.setItem(lsKey, JSON.stringify(backupData));
          // Sadece son 3 auto-backup'ı tut (localStorage sınırı için)
          const autoKeys = Object.keys(localStorage).filter(k => k.startsWith('nyc_auto_backup_')).sort();
          while (autoKeys.length > 3) localStorage.removeItem(autoKeys.shift());
        } catch(_) { console.error('[AutoBackup] localStorage da doldu!'); }
      }

      localStorage.setItem('nyc_auto_backup_last', String(Date.now()));
      this._lastRun = new Date();
      toast(`💾 Otomatik backup — ${backupData.rooms.length} oda, ${totalMsgs} mesaj`, 'info');
    } catch(e) { console.error('[AutoBackup] Genel hata:', e); }
  },

  // Manuel tetik (admin paneli için)
  async runNow() {
    toast('⏳ Manuel backup başlatılıyor…', 'info');
    await this.run();
  },

  status() {
    const last = parseInt(localStorage.getItem('nyc_auto_backup_last') || '0');
    if (!last) return 'Henüz çalışmadı';
    const mins = Math.round((Date.now() - last) / 60000);
    return `Son backup: ${mins} dk önce`;
  }
};

const Session = {
  _active: false,
  _startMsgId: null,
  _startTime: null,
  _mode: 'auto',

  startDialog() {
    const modal = document.createElement('div');
    modal.id = 'session-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9998;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';
    modal.innerHTML = `
      <div style="background:var(--bg2);border:1px solid var(--ln2);border-radius:16px;padding:24px;max-width:380px;width:90%;box-shadow:0 24px 64px rgba(0,0,0,.6)">
        <div style="font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ac);margin-bottom:4px">🎬 Session Başlat</div>
        <div style="font-size:13px;color:var(--t1);margin-bottom:16px;line-height:1.5">
          Master Agent bir Setup mesajı atar ve yeni session açılır.<br>
          <span style="color:var(--t3);font-size:11px">Önceki session varsa Observer AI özet çıkarır ve Firebase'e kaydeder.</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px">
          <label class="sess-opt" style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--bg3);border:1px solid var(--ac);border-radius:8px;cursor:pointer" onclick="document.getElementById('session-mode').value='auto';document.querySelectorAll('.sess-opt').forEach(e=>e.style.borderColor='var(--ln)');this.style.borderColor='var(--ac)'">
            <span style="font-size:18px;flex-shrink:0">🤖</span>
            <span>
              <strong style="display:block;color:var(--t0);font-size:12.5px">Tam Otomatik</strong>
              <span style="color:var(--t3);font-size:11px">Setup atılır, session takip edilir. Sonraki setup gelince OAI çalışır, backup alınır.</span>
            </span>
          </label>
          <label class="sess-opt" style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--bg3);border:1px solid var(--ln);border-radius:8px;cursor:pointer" onclick="document.getElementById('session-mode').value='manual';document.querySelectorAll('.sess-opt').forEach(e=>e.style.borderColor='var(--ln)');this.style.borderColor='var(--ac)'">
            <span style="font-size:18px;flex-shrink:0">🎛️</span>
            <span>
              <strong style="display:block;color:var(--t0);font-size:12.5px">Manuel</strong>
              <span style="color:var(--t3);font-size:11px">Setup atılır. Sona erdiğinde "Session Kapat" butonuna basarsın.</span>
            </span>
          </label>
        </div>
        <input type="hidden" id="session-mode" value="auto">
        <div style="display:flex;gap:8px">
          <button onclick="document.getElementById('session-modal').remove()" style="flex:1;padding:9px;background:var(--bg3);border:1px solid var(--ln);color:var(--t2);border-radius:8px;cursor:pointer;font-size:12px">İptal</button>
          <button onclick="Session._doStart(document.getElementById('session-mode').value);document.getElementById('session-modal').remove();" style="flex:2;padding:9px;background:rgba(74,143,226,.2);border:1px solid rgba(74,143,226,.4);color:var(--ac);border-radius:8px;cursor:pointer;font-size:12px;font-weight:600">🎬 Başlat</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  },

  async _doStart(mode) {
    if (this._active && this._startMsgId) {
      await this._endCurrent('Session yeniden başlatıldı — önceki session kapatılıyor.');
    }
    this._active = true;
    this._mode = mode;
    this._startTime = new Date();
    this._startMsgId = null;
    const rpTimeNow = S.roomId ? RpTime.get(S.roomId) : '—';
    const setupPrompt = `Yeni bir RP sessionu başlatılıyor. Aşağıdaki formatta bir Setup mesajı yaz ve SEND_MSG komutuyla RP odasına gönder.\n\nKural: Setup sadece atmosfer ve ortam betimler — olay, aksiyon veya karakter aksiyonu OLMAZ. Sinematik, doğal, 1–2 paragraf.\n\nFormat:\n# New York City Setup\n\n**New York City 🗽, NY, USA 🇺🇸 — ${rpTimeNow}**\n\n[Mevcut RP saatine ve mevsime göre şehrin atmosferini, sokaklarını, trafiğini, insan kalabalığını betimle. Her seferinde özgün detaylar kullan.]\n\nSadece bu formatı kullan. Başka açıklama ekleme.`;
    MASidebar.quick(setupPrompt);
    // Observer AI — session-only modda başlat (gerçek zamanlı okuma yok, sadece session sonu çalışır)
    if(window.OAI && !OAI.running) {
      OAI._sessionOnlyMode = true;
      OAI.start();
      document.getElementById('obs-start')?.style && (document.getElementById('obs-start').style.display='none');
      document.getElementById('obs-session-start')?.style && (document.getElementById('obs-session-start').style.display='none');
      document.getElementById('obs-stop')?.style && (document.getElementById('obs-stop').style.display='');
    }
    this._updateBtn();
    toast('🎬 Session başlatılıyor…', 'info');
  },

  onMAMessage(msgId) {
    if (this._active && !this._startMsgId) {
      this._startMsgId = msgId;
      toast('🎬 Session aktif — setup mesajı gönderildi', 'success');
      this._updateBtn();
    }
  },

  async endSession(reason = 'manual') {
    if (!this._active) { toast('Aktif session yok', ''); return; }
    await this._endCurrent(reason);
  },

  async _endCurrent(reason) {
    toast('⏳ Session kapatılıyor, Observer AI çalışıyor…', 'info');
    this._active = false;
    this._updateBtn();
    const roomId = S.roomId;
    if (roomId) {
      try {
        SessionProgress.show('Observer AI başlatılıyor…');
        await OAI.processRoom(roomId, 300, 40);
        toast('📋 Observer AI özet çıkardı', 'success');
      } catch(e) { console.error('[Session] OAI error', e); SessionProgress.hide(); }
    }
    await this._saveBackup(roomId, reason);
    // Observer AI — session bitti, durdur
    if(window.OAI && OAI.running) {
      OAI._sessionOnlyMode = false;
      OAI.stop();
      document.getElementById('obs-start')?.style && (document.getElementById('obs-start').style.display='');
      document.getElementById('obs-session-start')?.style && (document.getElementById('obs-session-start').style.display='');
      document.getElementById('obs-stop')?.style && (document.getElementById('obs-stop').style.display='none');
    }
    if (window.MasterAgent) {
      MasterAgent._history.push({role:'user', parts:[{text:'[SYSTEM] Session kapatıldı. Neden: ' + reason}]});
      MasterAgent._history.push({role:'model', parts:[{text:'[Session kapandı, hazırım.]'}]});
    }
    this._startMsgId = null;
    this._startTime = null;
  },

  async _saveBackup(roomId, reason) {
    if (!roomId) return;
    try {
      const msgs = await DB.get(`rp_messages?room_id=eq.${roomId}&order=created_at.asc&limit=200`).catch(() => []);
      if (!msgs.length) return;
      const backup = {
        room_id: roomId,
        session_start: this._startTime?.toISOString() || null,
        session_end: new Date().toISOString(),
        end_reason: reason,
        message_count: msgs.length,
        messages_snapshot: msgs,
        created_by: S.user?.id || null,
        app_version: 'nyc_rp_v1'
      };
      try {
        await DB.post('rp_session_backups', backup);
        toast('💾 Session backup Firebase\'e kaydedildi', 'success');
      } catch(e) {
        const key = 'nyc_session_backup_' + Date.now();
        try { localStorage.setItem(key, JSON.stringify(backup)); toast('💾 Session backup locale kaydedildi', ''); } catch(_) {}
        console.warn('[Session] rp_session_backups tablosu yok, local backup alındı', e);
      }
    } catch(e) { console.error('[Session] backup error', e); }
  },

  _updateBtn() {
    const btn = document.getElementById('session-start-btn');
    if (!btn) return;
    if (this._active) {
      btn.textContent = '🔴 Session Kapat';
      btn.style.borderColor = 'rgba(232,74,74,.5)';
      btn.style.color = 'var(--rd)';
      btn.onclick = () => Session.endSession('manual');
    } else {
      btn.textContent = '🎬 Session Başlat';
      btn.style.borderColor = 'rgba(74,143,226,.4)';
      btn.style.color = 'var(--ac)';
      btn.onclick = () => Session.startDialog();
    }
  },

  onNewMessage(msg) {
    if (!this._active || this._mode !== 'auto') return;
    if (this._startMsgId && msg.id !== this._startMsgId) {
      const isMAMsg = MasterAgent._sentIds?.has(msg.id);
      const isSetupLike = /setup|ortam|hava|lokasyon|sahne|başlıyor|açılış/i.test(msg.content || '');
      if (isMAMsg && isSetupLike) {
        this._endCurrent('Yeni setup mesajı algılandı — otomatik session sonu');
        setTimeout(() => {
          this._active = true;
          this._startMsgId = msg.id;
          this._startTime = new Date();
          this._mode = 'auto';
          this._updateBtn();
          toast('🎬 Yeni session otomatik başlatıldı', 'success');
        }, 2000);
      }
    }
  }
};

window.Session = Session;
</script>

<script>
/* ══════════════════════════════════════════════════════════
   rp_features — merge edildi (rp_features.js artık gerekmez)
   CharPicker · TagSystem · Reactions · ReadReceipts
   ContextMenu, CharCard, Autocomplete zaten HTML'de mevcut.
   ══════════════════════════════════════════════════════════ */
'use strict';

/* ── 1. CHAR PICKER ──────────────────────────────────────── */
const CharPicker = {
  filters: JSON.parse(localStorage.getItem('rp_picker_filters')||'null')||{search:'',org:'all',player:'all',status:'active'},
  _saveFilters(){localStorage.setItem('rp_picker_filters',JSON.stringify(this.filters));},
  open(){this._buildModal();OM('m-char-picker');},
  _buildModal(){
    const modal=document.getElementById('m-char-picker');if(!modal)return;
    const existingFilter=modal.querySelector('.cp-filter-bar');
    if(!existingFilter){
      const filterBar=document.createElement('div');filterBar.className='cp-filter-bar';
      filterBar.innerHTML=`<div class="cp-search-wrap"><i class="fas fa-search cp-search-icon"></i><input id="cp-search" class="cp-search" type="text" placeholder="İsim, alias, org ara…" autocomplete="off"><button id="cp-search-clear" class="cp-search-clear" style="display:none">✕</button></div><div class="cp-filter-row"><select id="cp-org-filter" class="cp-select"><option value="all">Tüm Orglar</option></select><select id="cp-player-filter" class="cp-select"><option value="all">Tüm Oyuncular</option><option value="npc">NPC</option></select><select id="cp-status-filter" class="cp-select"><option value="active">Aktif</option><option value="all">Tümü</option></select></div>`;
      const mbdy=modal.querySelector('.mbdy');mbdy.insertBefore(filterBar,mbdy.firstChild);
      const orgSel=filterBar.querySelector('#cp-org-filter');
      S.orgs.forEach(o=>{const opt=document.createElement('option');opt.value=o.id;opt.textContent=o.name;orgSel.appendChild(opt);});
      const playerSel=filterBar.querySelector('#cp-player-filter');
      (window.DM_CONFIG?.players||USERS||[]).forEach(p=>{const opt=document.createElement('option');opt.value=p.id;opt.textContent=p.name;playerSel.appendChild(opt);});
      filterBar.querySelector('#cp-search').value=this.filters.search;
      filterBar.querySelector('#cp-org-filter').value=this.filters.org;
      filterBar.querySelector('#cp-player-filter').value=this.filters.player;
      filterBar.querySelector('#cp-status-filter').value=this.filters.status;
      filterBar.querySelector('#cp-search').addEventListener('input',e=>{this.filters.search=e.target.value.trim().toLowerCase();filterBar.querySelector('#cp-search-clear').style.display=this.filters.search?'':'none';this._saveFilters();this._renderGrid();});
      filterBar.querySelector('#cp-search-clear').addEventListener('click',()=>{filterBar.querySelector('#cp-search').value='';this.filters.search='';filterBar.querySelector('#cp-search-clear').style.display='none';this._saveFilters();this._renderGrid();});
      ['#cp-org-filter','#cp-player-filter','#cp-status-filter'].forEach(sel=>{filterBar.querySelector(sel).addEventListener('change',e=>{const key=sel==='#cp-org-filter'?'org':sel==='#cp-player-filter'?'player':'status';this.filters[key]=e.target.value;this._saveFilters();this._renderGrid();});});
    }else{modal.querySelector('#cp-search').value=this.filters.search;modal.querySelector('#cp-org-filter').value=this.filters.org;modal.querySelector('#cp-player-filter').value=this.filters.player;modal.querySelector('#cp-status-filter').value=this.filters.status;}
    const footer=document.getElementById('cpf');
    if(footer&&!footer.querySelector('#cpf-clear')){const cb=document.createElement('button');cb.id='cpf-clear';cb.className='btn btn-g';cb.style.marginRight='auto';cb.innerHTML='<i class="fas fa-broom"></i> Temizle';cb.onclick=()=>{S.activeChars=[];S.activeChar=null;UI.renderTags();CM('m-char-picker');};footer.insertBefore(cb,footer.firstChild);}
    const mbdy=modal.querySelector('.mbdy');
    if(!mbdy.querySelector('.cp-result-count')){const lbl=document.createElement('div');lbl.className='cp-result-count';mbdy.insertBefore(lbl,mbdy.querySelector('#cpg'));}
    this._renderGrid();
    setTimeout(()=>modal.querySelector('#cp-search')?.focus(),80);
  },
  _filtered(){
    const{search,org,player,status}=this.filters;
    return S.chars.filter(c=>{
      if(status==='active'&&c.status==='Deceased')return false;
      if(org!=='all'){const charOrgs=c.organizations||(c.organization?[c.organization]:[]);if(!charOrgs.includes(org))return false;}
      if(player==='npc'){if(c.playerId&&c.playerId!=='')return false;}
      else if(player!=='all'){if((c.playerId||'')!==player)return false;}
      if(search){const hay=[c.name,c.alias,c.story,c.id,...(c.organizations||[]).map(oid=>S.oi.get(oid)?.name||'')].join(' ').toLowerCase();if(!hay.includes(search))return false;}
      return true;
    });
  },
  _renderGrid(){
    const g=document.getElementById('cpg');if(!g)return;g.innerHTML='';
    const results=this._filtered();
    const countEl=document.querySelector('.cp-result-count');
    if(countEl)countEl.textContent=results.length+' karakter';
    if(!results.length){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:24px;font-family:var(--mono);font-size:11px;color:var(--t3)">Sonuç yok</div>';return;}
    results.forEach(c=>{
      const inS=S.activeChars.some(x=>x.id===c.id);
      const isP=S.activeChar?.id===c.id;
      const org=RP._org((c.organizations||[])[0]||c.organization);
      const playerUser=USERS?.find(u=>u.id===c.playerId);
      const ini=(c.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      const orgColor=org?.color||'var(--t3)';
      const el=document.createElement('div');el.className='cpi-item'+(inS?' active':'');
      el.innerHTML=`<div class="cpa" style="${inS?`border:2px solid ${orgColor};box-shadow:0 0 8px ${orgColor}44`:''}">
        ${c.image?`<img src="${c.image}" onerror="this.parentNode.innerHTML='${ini}'" loading="lazy">`:ini}
      </div><div class="cpin" style="flex:1;min-width:0">
        <div class="cpnm">${c.name}${isP?' <span style="font-size:9px;color:var(--ac);font-family:var(--mono)">[P]</span>':''}</div>
        <div class="cpal" style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
          ${c.alias?`<span>"${c.alias}"</span>`:''}
          ${org?`<span style="background:${orgColor}22;color:${orgColor};border:1px solid ${orgColor}44;font-family:var(--mono);font-size:9px;padding:1px 5px;border-radius:2px">${org.name}</span>`:''}
          ${playerUser?`<span style="background:${playerUser.color}22;color:${playerUser.color};font-family:var(--mono);font-size:9px;padding:1px 5px;border-radius:2px">${playerUser.name}</span>`:'<span style="font-family:var(--mono);font-size:9px;color:var(--t3)">NPC</span>'}
        </div>
      </div><div style="font-size:15px;color:${inS?'var(--gn)':'var(--t3)'};flex-shrink:0;margin-left:6px">${inS?'<i class="fas fa-check-circle"></i>':'<i class="far fa-circle"></i>'}</div>`;
      el.addEventListener('click',()=>{RP.toggleChar(c);const nowIn=S.activeChars.some(x=>x.id===c.id);el.classList.toggle('active',nowIn);el.querySelector('div[style*="font-size:15px"]').style.color=nowIn?'var(--gn)':'var(--t3)';el.querySelector('div[style*="font-size:15px"]').innerHTML=nowIn?'<i class="fas fa-check-circle"></i>':'<i class="far fa-circle"></i>';el.querySelector('.cpnm').innerHTML=`${c.name}${S.activeChar?.id===c.id?' <span style="font-size:9px;color:var(--ac);font-family:var(--mono)">[P]</span>':''}`;});
      el.addEventListener('contextmenu',e=>{e.preventDefault();CharCard.show(c.id,e.clientX,e.clientY);});
      g.appendChild(el);
    });
  },
};

/* ── 2. TAG SYSTEM ───────────────────────────────────────── */
const TagSystem = {
  TYPES:[
    {key:'char',label:'Karakter',icon:'fa-user',getter:()=>S.chars},
    {key:'org',label:'Org',icon:'fa-building',getter:()=>S.orgs},
    {key:'vehicle',label:'Araç',icon:'fa-car',getter:()=>(S._db?.vehicles||[])},
    {key:'equip',label:'Ekipman',icon:'fa-box',getter:()=>(S._db?.equipments||[])},
    {key:'prop',label:'Mülk',icon:'fa-home',getter:()=>(S._db?.properties||[])},
  ],
  active:JSON.parse(localStorage.getItem('rp_active_tags')||'[]'),
  save(){localStorage.setItem('rp_active_tags',JSON.stringify(this.active));},
  add(type,id,label,color,data={}){
    if(type==='char'){if(this.active.find(t=>t.type===type&&t.id===id))return;this.active.push({type,id,label,color,data});this.save();this.render();}
    else{this._insertIntoInput(type,label,data);}
  },
  _insertIntoInput(type,label,data){
    const inp=document.getElementById('msg-input');if(!inp)return;
    const typeLabels={org:'Org',vehicle:'Araç',equip:'Ekipman',prop:'Mülk'};
    let tagText=`[${typeLabels[type]||type}: ${label}`;
    if(type==='vehicle'&&data.plate&&data.plate!==label)tagText+=` (${data.plate})`;
    tagText+='] ';
    const start=inp.selectionStart||inp.value.length;const end=inp.selectionEnd||inp.value.length;
    inp.value=inp.value.slice(0,start)+tagText+inp.value.slice(end);
    const newPos=start+tagText.length;inp.setSelectionRange(newPos,newPos);inp.focus();
    inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,160)+'px';
    toast(`"${label}" mesaja eklendi`,'success');
  },
  remove(type,id){this.active=this.active.filter(t=>!(t.type===type&&t.id===id));this.save();this.render();},
  clear(){this.active=[];this.save();this.render();},
  render(){
    const bar=document.getElementById('char-tags-bar');if(!bar)return;
    bar.querySelectorAll('.ntag,#add-char-btn,#add-tag-btn').forEach(el=>el.remove());
    const addChar=document.createElement('button');addChar.id='add-char-btn';addChar.innerHTML='<i class="fas fa-user-plus"></i> karakter';addChar.onclick=()=>CharPicker.open();bar.appendChild(addChar);
    const addTag=document.createElement('button');addTag.id='add-tag-btn';addTag.innerHTML='<i class="fas fa-tag"></i> etiket';addTag.onclick=()=>TagSystem.openPicker();bar.appendChild(addTag);
  },
  async openPicker(){
    if(!S._db){try{const d=await window._fbLoadDB('nyc_db');if(d)S._db=d;}catch(e){}}
    let modal=document.getElementById('m-tag-picker');
    if(!modal){
      modal=document.createElement('div');modal.id='m-tag-picker';modal.className='mbd hidden';
      modal.innerHTML=`<div class="mbox" style="max-width:520px"><div class="mhd"><span class="mti">Etiket Ekle</span><button class="mcl" onclick="CM('m-tag-picker')"><i class="fas fa-times"></i></button></div><div class="mbdy" style="padding:12px 20px"><div class="cp-filter-bar" style="margin-bottom:10px"><div class="cp-search-wrap"><i class="fas fa-search cp-search-icon"></i><input id="tp-search" class="cp-search" placeholder="Ara…" autocomplete="off"></div><div class="cp-filter-row"><select id="tp-type-filter" class="cp-select"><option value="all">Tümü</option></select></div></div><div id="tp-grid" class="cpg" style="max-height:340px"></div></div><div class="mft"><button class="btn btn-g" onclick="CM('m-tag-picker')">Kapat</button></div></div>`;
      document.body.appendChild(modal);modal.addEventListener('click',e=>{if(e.target===modal)CM('m-tag-picker');});
      const typeSel=modal.querySelector('#tp-type-filter');
      this.TYPES.filter(t=>t.key!=='char').forEach(t=>{const o=document.createElement('option');o.value=t.key;o.textContent=t.label;typeSel.appendChild(o);});
      modal.querySelector('#tp-search').addEventListener('input',()=>this._renderTagGrid());
      modal.querySelector('#tp-type-filter').addEventListener('change',()=>this._renderTagGrid());
    }
    OM('m-tag-picker');this._renderTagGrid();setTimeout(()=>modal.querySelector('#tp-search')?.focus(),80);
  },
  _renderTagGrid(){
    const g=document.getElementById('tp-grid');if(!g)return;
    const search=document.getElementById('tp-search')?.value.trim().toLowerCase()||'';
    const typeFilter=document.getElementById('tp-type-filter')?.value||'all';
    g.innerHTML='';
    const types=typeFilter==='all'?this.TYPES.filter(t=>t.key!=='char'):this.TYPES.filter(t=>t.key===typeFilter);
    let totalShown=0;
    types.forEach(type=>{
      const items=type.getter();
      const filtered=items.filter(item=>!search||(item.name||item.plate||'').toLowerCase().includes(search)||(item.alias||'').toLowerCase().includes(search));
      filtered.forEach(item=>{
        totalShown++;
        const isChar=type.key==='char';const alreadyOn=isChar&&this.active.find(t=>t.type===type.key&&t.id===item.id);
        const color=item.color||(type.key==='org'?'#4a8fe2':type.key==='vehicle'?'#e8a74a':type.key==='equip'?'#4db880':'#9b6fd4');
        const label=item.name||item.plate||item.id;
        const el=document.createElement('div');el.className='cpi-item';el.style.cssText='cursor:pointer';
        const actionHtml=isChar?`<div style="font-size:15px;color:${alreadyOn?'var(--gn)':'var(--t3)'};flex-shrink:0;margin-left:6px">${alreadyOn?'<i class="fas fa-check-circle"></i>':'<i class="far fa-circle"></i>'}</div>`:`<button style="padding:4px 10px;border-radius:var(--r);border:1px solid ${color}44;background:${color}15;color:${color};font-family:var(--mono);font-size:9px;font-weight:600;cursor:pointer;white-space:nowrap;flex-shrink:0">Ekle →</button>`;
        el.innerHTML=`<div class="cpa" style="font-size:14px;background:${color}22;border:1px solid ${color}33"><i class="fas ${type.icon}" style="color:${color}"></i></div><div class="cpin"><div class="cpnm">${label}</div><div class="cpal">${type.label}${item.alias?' · '+item.alias:''}${item.plate&&item.plate!==label?' · '+item.plate:''}</div></div>${actionHtml}`;
        el.onclick=e=>{e.stopPropagation();if(isChar){if(alreadyOn)this.remove(type.key,item.id);else this.add(type.key,item.id,label,color,item);this._renderTagGrid();}else{this.add(type.key,item.id,label,color,item);CM('m-tag-picker');}};
        el.addEventListener('contextmenu',e=>{e.preventDefault();CharCard.show(item.id,e.clientX,e.clientY,type.key);});
        g.appendChild(el);
      });
    });
    if(!totalShown)g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:24px;font-family:var(--mono);font-size:11px;color:var(--t3)">Sonuç yok</div>';
  },
};

/* ── 3. REACTIONS ────────────────────────────────────────── */
const Reactions = {
  DEFAULT_EMOJIS:['👍','❤️','😂','😮','😢','🔥','⚔️','💀','🎯','🤝','👀','💬','😈','🩸','💊','🔫','🚨','💰'],
  get emojis(){return JSON.parse(localStorage.getItem('rp_custom_emojis')||'null')||this.DEFAULT_EMOJIS;},
  showPicker(e,msgId){
    e.stopPropagation();document.querySelectorAll('.react-picker-inline').forEach(el=>el.remove());
    const btn=e.currentTarget;const picker=document.createElement('div');picker.className='react-picker-inline';
    this.emojis.forEach(em=>{const b=document.createElement('button');b.className='em-btn';b.textContent=em;b.title=em;b.onclick=()=>{RP.react(msgId,em);picker.remove();};picker.appendChild(b);});
    const customBtn=document.createElement('button');customBtn.className='em-btn';customBtn.title='Emoji özelleştir';customBtn.innerHTML='<i class="fas fa-plus" style="font-size:11px;color:var(--t2)"></i>';customBtn.onclick=()=>{picker.remove();Reactions.openCustomizer();};picker.appendChild(customBtn);
    const rect=btn.getBoundingClientRect();picker.style.cssText=`position:fixed;bottom:${window.innerHeight-rect.top+4}px;left:${rect.left}px;z-index:300`;
    document.body.appendChild(picker);setTimeout(()=>document.addEventListener('click',()=>picker.remove(),{once:true}),50);
  },
  render(el,msg){
    el.innerHTML='';const reactions=msg.reactions||{};
    const hasAny=Object.values(reactions).some(users=>users.length>0);if(!hasAny)return;
    Object.entries(reactions).forEach(([emoji,userIds])=>{
      if(!userIds.length)return;
      const myChar=S.activeChar;const iMine=myChar&&userIds.includes(myChar.id);
      const names=userIds.map(uid=>{const c=S.ci.get(uid);return c?c.name:uid;});
      const pill=document.createElement('button');pill.className='rpill'+(iMine?' on':'');
      pill.innerHTML=`${emoji}<span class="rcnt">${userIds.length}</span>`;pill.title=names.join(', ');
      pill.addEventListener('mouseenter',()=>Reactions._showTooltip(pill,emoji,userIds,names));
      pill.addEventListener('mouseleave',()=>document.querySelector('.react-tooltip')?.remove());
      pill.onclick=()=>RP.react(msg.id,emoji);el.appendChild(pill);
    });
  },
  _showTooltip(anchor,emoji,userIds,names){
    document.querySelector('.react-tooltip')?.remove();
    const tip=document.createElement('div');tip.className='react-tooltip';
    tip.innerHTML=`<div style="font-size:18px;text-align:center;margin-bottom:6px">${emoji}</div>${names.map((name,i)=>{const c=S.ci.get(userIds[i]);const ini=(name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();return`<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px"><div style="width:20px;height:20px;border-radius:50%;background:var(--bg4);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;overflow:hidden;flex-shrink:0">${c?.image?`<img src="${c.image}" style="width:100%;height:100%;object-fit:cover">`:ini}</div><span>${name}</span></div>`;}).join('')}`;
    const rect=anchor.getBoundingClientRect();tip.style.cssText=`position:fixed;bottom:${window.innerHeight-rect.top+4}px;left:${rect.left}px;z-index:400`;
    document.body.appendChild(tip);
  },
  openCustomizer(){
    let modal=document.getElementById('m-reaction-custom');
    if(!modal){modal=document.createElement('div');modal.id='m-reaction-custom';modal.className='mbd hidden';modal.innerHTML=`<div class="mbox" style="max-width:400px"><div class="mhd"><span class="mti">Tepki Emojilerini Özelleştir</span><button class="mcl" onclick="CM('m-reaction-custom')"><i class="fas fa-times"></i></button></div><div class="mbdy"><div style="font-family:var(--mono);font-size:10px;color:var(--t2);margin-bottom:10px;text-transform:uppercase;letter-spacing:.08em">Emoji listesi (boşlukla ayır)</div><textarea id="rc-input" style="width:100%;background:var(--bg1);border:1px solid var(--ln);border-radius:var(--r);color:var(--t0);font-size:22px;padding:10px;outline:none;resize:vertical;min-height:80px;line-height:1.8" rows="3"></textarea><div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:6px">Varsayılan: ${Reactions.DEFAULT_EMOJIS.join(' ')}</div></div><div class="mft"><button class="btn btn-g" onclick="Reactions._resetEmojis()">Sıfırla</button><button class="btn btn-g" onclick="CM('m-reaction-custom')">İptal</button><button class="btn btn-p" onclick="Reactions._saveCustomEmojis()">Kaydet</button></div></div>`;document.body.appendChild(modal);modal.addEventListener('click',e=>{if(e.target===modal)CM('m-reaction-custom');});}
    document.getElementById('rc-input').value=this.emojis.join(' ');OM('m-reaction-custom');
  },
  _saveCustomEmojis(){const val=document.getElementById('rc-input').value;const emojis=val.match(/\p{Emoji}/gu)||[];if(emojis.length<3){toast('En az 3 emoji gir','warn');return;}localStorage.setItem('rp_custom_emojis',JSON.stringify(emojis));CM('m-reaction-custom');toast('Tepkiler güncellendi','success');},
  _resetEmojis(){localStorage.removeItem('rp_custom_emojis');document.getElementById('rc-input').value=this.DEFAULT_EMOJIS.join(' ');toast('Varsayılana döndürüldü','success');},
};

/* ── 4. READ RECEIPTS ────────────────────────────────────── */
const ReadReceipts = {
  _state:{},
  update(){
    const list=document.getElementById('messages-list');if(!list)return;
    const items=list.querySelectorAll('.msg-group[data-msg-id]');if(!items.length)return;
    let lastVisibleId=null;
    items.forEach(el=>{const rect=el.getBoundingClientRect();const listRect=list.getBoundingClientRect();if(rect.top<listRect.bottom&&rect.bottom>listRect.top)lastVisibleId=el.dataset.msgId;});
    if(!lastVisibleId)return;
    const user=S.user;const char=S.activeChar;if(!user||!char)return;
    const prev=this._state[user.id];if(prev?.msgId===lastVisibleId)return;
    this._state[user.id]={msgId:lastVisibleId,charId:char.id,charName:char.name,charAvatar:char.image||'',userColor:user.color,userName:user.name,seenAt:Date.now()};
    this._persist(user.id,lastVisibleId,char);this._render();
  },
  async _persist(userId,msgId,char){
    if(S._off)return;
    try{await DB.post('rp_presence',{char_id:char.id,char_name:char.name,char_alias:char.alias||'',org_id:(char.organizations||[])[0]||char.organization||null,last_seen:new Date().toISOString(),is_typing:false,room_id:S.roomId,last_read_msg_id:msgId,reader_user_id:userId}).catch(()=>{});}catch(e){}
  },
  async fetchOthers(){
    if(S._off)return;
    try{
      const cut=new Date(Date.now()-120000).toISOString();
      const rows=await DB.get(`rp_presence?last_seen=gte.${cut}&room_id=eq.${S.roomId}&select=char_id,char_name,last_read_msg_id,reader_user_id,last_seen`).catch(()=>[]);
      rows.forEach(r=>{if(!r.last_read_msg_id)return;if(r.reader_user_id===S.user?.id)return;const user=USERS?.find(u=>u.id===r.reader_user_id);if(!user)return;const char=S.ci.get(r.char_id);this._state[r.reader_user_id]={msgId:r.last_read_msg_id,charId:r.char_id,charName:r.char_name,charAvatar:char?.image||'',userColor:user.color,userName:user.name,seenAt:new Date(r.last_seen).getTime()};});
      this._render();
    }catch(e){}
  },
  _render(){
    document.querySelectorAll('.read-receipt-badge').forEach(el=>el.remove());
    const byMsg={};
    Object.values(this._state).forEach(entry=>{if(!byMsg[entry.msgId])byMsg[entry.msgId]=[];byMsg[entry.msgId].push(entry);});
    Object.entries(byMsg).forEach(([msgId,readers])=>{
      const msgEl=document.querySelector(`[data-msg-id="${msgId}"]`);if(!msgEl)return;
      const badge=document.createElement('div');badge.className='read-receipt-badge';
      readers.slice(0,4).forEach(reader=>{const ava=document.createElement('div');ava.className='rr-ava';ava.title=`${reader.userName} okudu`;ava.style.borderColor=reader.userColor;const ini=(reader.charName||reader.userName||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();ava.innerHTML=reader.charAvatar?`<img src="${reader.charAvatar}" onerror="this.parentNode.innerHTML='${ini}'">`:`${ini}`;badge.appendChild(ava);});
      if(readers.length>4){const more=document.createElement('div');more.className='rr-ava rr-more';more.textContent=`+${readers.length-4}`;badge.appendChild(more);}
      msgEl.appendChild(badge);
    });
  },
};

/* ── CSS ─────────────────────────────────────────────────── */
(function injectFeatureCSS(){
  const s=document.createElement('style');
  s.textContent=`
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
#add-tag-btn{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;border:1px dashed var(--gd);background:none;color:var(--gd);font-family:var(--mono);font-size:10px;cursor:pointer;transition:all .15s}
#add-tag-btn:hover{background:var(--am-d)}
.react-picker-inline{position:fixed;display:flex;flex-wrap:wrap;gap:4px;background:var(--bg3);border:1px solid var(--ln2);border-radius:10px;padding:8px;box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:300;max-width:280px}
.react-tooltip{position:fixed;background:var(--bg3);border:1px solid var(--ln2);border-radius:6px;padding:8px 10px;font-size:12px;color:var(--t1);z-index:400;box-shadow:0 4px 16px rgba(0,0,0,.4);min-width:120px;pointer-events:none}
.read-receipt-badge{position:absolute;right:0;bottom:-2px;display:flex;align-items:center;gap:2px;pointer-events:none}
.rr-ava{width:16px;height:16px;border-radius:50%;background:var(--bg4);border:1.5px solid;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:7px;font-weight:700;color:var(--t2);overflow:hidden;transition:transform .15s}
.rr-ava img{width:100%;height:100%;object-fit:cover;display:block}
.rr-ava:hover{transform:scale(1.3);z-index:10}
.rr-more{background:var(--bg5);color:var(--t2);font-size:6px;border-color:var(--ln2)}
.msg-group{position:relative}
`;
  document.head.appendChild(s);
})();

/* ── INIT — method overrides ─────────────────────────────── */
(function patchRPClient(){
  // RP.openPicker → CharPicker
  if(typeof RP!=='undefined')RP.openPicker=()=>CharPicker.open();

  // UI.renderTags → then TagSystem.render
  if(typeof UI!=='undefined'){
    const _origRenderTags=UI.renderTags.bind(UI);
    UI.renderTags=function(){_origRenderTags();TagSystem.render();};

    // UI.renderReacts → Reactions.render
    UI.renderReacts=function(el,msg){Reactions.render(el,msg);};

    // UI.append — reaction button + context menu on char name/avatar
    const _origAppend=UI.append.bind(UI);
    UI.append=function(msg,scroll,forceNS,isFav){
      _origAppend(msg,scroll,forceNS,isFav);
      const el=document.querySelector(`[data-msg-id="${msg.id}"]`);if(!el)return;
      const reactBtn=el.querySelector('.mac[data-tip="Tepki"]');
      if(reactBtn)reactBtn.onclick=(e)=>Reactions.showPicker(e,msg.id);
      const charName=el.querySelector('.msg-char');const charAva=el.querySelector('.msg-ava');
      [charName,charAva].forEach(node=>{if(!node)return;node.addEventListener('contextmenu',e=>{e.preventDefault();ContextMenu.show(e.clientX,e.clientY,[{icon:'fa-id-card',label:'Profil Kartı',action:()=>CharCard.show(msg.char_id,e.clientX,e.clientY)},{icon:'fa-external-link-alt',label:"DB'de Aç",action:()=>CharCard.openInDB(msg.char_id,'char')}]);});});
    };

    // Char tag right-click menu
    const _origRenderTagsWithMenu=UI.renderTags.bind(UI);
    UI.renderTags=function(){_origRenderTagsWithMenu();document.querySelectorAll('.ctag:not(.ntag)').forEach(tag=>{const name=tag.querySelector('.ctag-name')?.textContent?.trim();const char=S.chars.find(c=>c.name===name);if(!char||tag._ctxBound)return;tag._ctxBound=true;tag.addEventListener('contextmenu',e=>{e.preventDefault();ContextMenu.show(e.clientX,e.clientY,[{icon:'fa-id-card',label:'Profil Kartı',action:()=>CharCard.show(char.id,e.clientX,e.clientY)},{icon:'fa-external-link-alt',label:"DB'de Aç",action:()=>CharCard.openInDB(char.id,'char')},{icon:'fa-star',label:'Primary Yap',action:()=>RP.setPrimary(char.id)},'sep',{icon:'fa-times',label:'Sahneden Çıkar',action:()=>RP.removeChar(char.id),danger:true}]);});});};
  }

  // Read receipts: scroll listener
  const msgList=document.getElementById('messages-list');
  if(msgList)msgList.addEventListener('scroll',()=>ReadReceipts.update(),{passive:true});

  // RT._presence → + ReadReceipts.fetchOthers
  if(typeof RT!=='undefined'){
    const _origPresence=RT._presence.bind(RT);
    RT._presence=async function(){await _origPresence();await ReadReceipts.fetchOthers();};
    const _origHandleMsg=RT._handleMsg.bind(RT);
    RT._handleMsg=function(rec){_origHandleMsg(rec);setTimeout(()=>ReadReceipts.update(),200);};
  }

  console.log('[features] CharPicker, TagSystem, Reactions, ReadReceipts — yüklendi');
})();
</script>
</body>
</html>
