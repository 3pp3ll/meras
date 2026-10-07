/* ===== مِراس: المزامنة مع مستودع البيانات الخاص + الأسعار الحقيقية =====
   تشتغل فقط لما الموقع منشور (GitHub Pages أو أي استضافة). */
const HOSTED = !window.claude && /^https?:$/.test(location.protocol);
const CFG_KEY = "meras.sync", PX_KEY = "meras.prices";
let CFG = { owner: "3pp3ll", repo: "meras-data", token: "" };
let LIVE = { quotes: {}, fetchedAt: null, history: {} };
let SYNC = { state: "off", at: null, msg: "" };
try { Object.assign(CFG, JSON.parse(localStorage.getItem(CFG_KEY) || "{}")); } catch (e) {}
try { Object.assign(LIVE, JSON.parse(localStorage.getItem(PX_KEY) || "{}")); } catch (e) {}

Object.assign(UI, {
  nav_settings: ["الإعدادات", "Settings"],
  set_h: ["المزامنة والأسعار", "Sync and prices"],
  set_p: ["اربط المنصة بمستودعك الخاص. تقدمك وسجل تداولك ينحفظون هناك ويتزامنون بين أجهزتك، والأسعار الحقيقية تنقرأ منه.", "Connect the platform to your private repository. Your progress and journal are stored there and sync across your devices, and real prices are read from it."],
  set_owner: ["اسم الحساب", "Account"], set_repo: ["مستودع البيانات", "Data repository"], set_token: ["رمز الوصول", "Access token"],
  set_token_note: ["الرمز ينحفظ على هذا الجهاز فقط، وما ينرسل إلا إلى GitHub. أعطه صلاحية المستودع الخاص وحده.", "The token is stored on this device only and is sent to GitHub alone. Scope it to the private repository only."],
  set_save: ["احفظ واختبر الاتصال", "Save and test"], set_sync: ["زامن الآن", "Sync now"], set_prices: ["حدّث الأسعار", "Refresh prices"], set_forget: ["احذف الرمز من هذا الجهاز", "Remove token from this device"],
  set_status: ["الحالة", "Status"], set_last: ["آخر مزامنة", "Last sync"], set_px: ["آخر سحب للأسعار", "Prices fetched"],
  st_off: ["غير مربوطة", "Not connected"], st_ok: ["مربوطة وتتزامن", "Connected and syncing"], st_busy: ["جارٍ المزامنة", "Syncing"], st_err: ["فيه مشكلة", "Problem"],
  e_401: ["الرمز غير صحيح أو منتهي", "The token is invalid or expired"], e_404: ["المستودع غير موجود، أو الرمز ما له صلاحية عليه", "Repository not found, or the token has no access to it"],
  e_403: ["الرمز ما له صلاحية الكتابة على المستودع", "The token cannot write to the repository"], e_net: ["تعذر الاتصال بـ GitHub", "Could not reach GitHub"],
  no_prices: ["ما فيه ملف أسعار في المستودع للحين. شغّل سكربت الأسعار أول.", "No price file in the repository yet. Run the price workflow first."],
  synced: ["تمت المزامنة", "Synced"], px_ok: ["تم تحديث الأسعار", "Prices refreshed"], never: ["لم تتم بعد", "Not yet"],
  delayed: ["متأخر 15 دقيقة", "Delayed 15 min"], live_tag: ["سعر السوق", "Market price"], as_of: ["بتاريخ", "as of"],
  live_note: ["الأسعار من سهمك API عبر مستودعك الخاص.", "Prices come from the SAHMK API through your private repository."],
  set_only_hosted: ["المزامنة تشتغل في النسخة المنشورة على GitHub، مو في هذي المعاينة.", "Sync works in the version published on GitHub, not in this preview."],
  set_how: ["كيف تجيب الرمز", "How to get the token"],
  set_steps: [
    ["في GitHub: Settings ثم Developer settings ثم Personal access tokens ثم Fine-grained tokens ثم Generate new token.", "In GitHub: Settings, Developer settings, Personal access tokens, Fine-grained tokens, Generate new token."],
    ["في Repository access اختر Only select repositories وحدد meras-data فقط.", "Under Repository access choose Only select repositories and pick meras-data only."],
    ["في Permissions اضغط Add permissions واختر Contents، ثم غيّرها من Read-only إلى Read and write.", "Under Permissions press Add permissions and choose Contents, then change it from Read-only to Read and write."],
    ["انسخ الرمز والصقه هنا. كرر اللصق على كل جهاز تبي تزامنه.", "Copy the token and paste it here. Paste it again on every device you want to sync."]
  ]
});

const b64e = (s) => { const b = new TextEncoder().encode(s); let o = ""; for (let i = 0; i < b.length; i += 0x8000) o += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(o); };
const b64d = (s) => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/\s/g, "")), (c) => c.charCodeAt(0)));

async function gh(path, method, body) {
  let r;
  try {
    r = await fetch("https://api.github.com/repos/" + encodeURIComponent(CFG.owner) + "/" + encodeURIComponent(CFG.repo) + "/contents/" + path + (method ? "" : "?t=" + Date.now()), {
      method: method || "GET", cache: "no-store",
      headers: { Authorization: "Bearer " + CFG.token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
      body: body ? JSON.stringify(body) : undefined
    });
  } catch (e) { throw { code: "net" }; }
  if (r.status === 404 && !method) return null;
  if (!r.ok) throw { code: String(r.status) };
  return r.json();
}
async function readJson(path) {
  const f = await gh(path); if (!f) return null;
  try { return { data: JSON.parse(b64d(f.content)), sha: f.sha }; } catch (e) { return { data: null, sha: f.sha }; }
}
const errText = (e) => t({ "401": "e_401", "404": "e_404", "403": "e_403", net: "e_net" }[e && e.code] || "e_net");

/* ما يتزامن: التقدم، السجل، الباقة، الحساب. اللغة وحالة الدخول تبقى لكل جهاز. */
const shared = (s) => JSON.stringify({ a: s.account, p: s.plan, d: Object.keys(s.done).sort().map((k) => [k, s.done[k]]), j: s.journal, x: (s.deleted || []).slice().sort(), w: s.drawings || {}, c: s.chart || null });
function mergeState(local, remote) {
  if (!remote || typeof remote !== "object") return local;
  const newer = (local.updatedAt || 0) >= (remote.updatedAt || 0) ? local : remote;
  const out = Object.assign(blank(), newer, { lang: local.lang, signedIn: local.signedIn });
  out.done = Object.assign({}, remote.done || {}, local.done || {});
  out.deleted = Array.from(new Set([].concat(local.deleted || [], remote.deleted || [])));
  const byId = {};
  [].concat(remote.journal || [], local.journal || []).forEach((j) => { const p = byId[j.id]; if (!p || (j.updated || 0) >= (p.updated || 0)) byId[j.id] = j; });
  out.journal = Object.values(byId).filter((j) => !out.deleted.includes(j.id)).sort((a, b) => (a.entryDate + a.id < b.entryDate + b.id ? -1 : 1));
  if (!out.account && (remote.account || local.account)) out.account = local.account || remote.account;
  return out;
}

let syncing = false, again = false, timer = null;
async function syncNow(quiet) {
  if (!HOSTED || !CFG.token) return false;
  if (syncing) { again = true; return false; }
  syncing = true; SYNC.state = "busy"; paintStatus();
  let ok = false;
  try {
    for (let attempt = 0; attempt < 2; attempt++) {
      const remote = await readJson("state.json");
      const merged = mergeState(S, remote && remote.data && remote.data.state);
      const changedLocal = shared(merged) !== shared(S);
      S = merged; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
      if (changedLocal && route() !== "settings") render();
      if (remote && remote.data && remote.data.state && shared(remote.data.state) === shared(S)) { ok = true; break; }
      try {
        const copy = Object.assign({}, S); delete copy.signedIn;
        await gh("state.json", "PUT", { message: "sync " + new Date().toISOString(), content: b64e(JSON.stringify({ app: "meras", version: 1, state: copy }, null, 2)), sha: remote ? remote.sha : undefined });
        ok = true; break;
      } catch (e) { if (attempt === 0 && e && (e.code === "409" || e.code === "422")) continue; throw e; }
    }
    SYNC = { state: "ok", at: Date.now(), msg: "" };
    if (!quiet) toast(t("synced"));
  } catch (e) { SYNC = { state: "err", at: SYNC.at, msg: errText(e) }; if (!quiet) toast(SYNC.msg); }
  syncing = false; paintStatus();
  if (again) { again = false; queueSync(); }
  return ok;
}
function queueSync() { if (!HOSTED || !CFG.token) return; clearTimeout(timer); timer = setTimeout(() => syncNow(true), 3500); }

async function loadPrices(quiet) {
  if (!HOSTED || !CFG.token) return;
  try {
    const f = await readJson("prices.json");
    if (!f || !f.data || !f.data.quotes) { if (!quiet) toast(t("no_prices")); return; }
    let hist = LIVE.history || {};
    try { const h = await readJson("history.json"); if (h && h.data && typeof h.data === "object") hist = h.data; } catch (e) {}
    LIVE = { quotes: f.data.quotes, fetchedAt: f.data.fetched_at || null, history: hist };
    try { localStorage.setItem(PX_KEY, JSON.stringify(LIVE)); } catch (e) {}
    if (!quiet) toast(t("px_ok"));
    if (!document.activeElement || !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) render();
  } catch (e) { if (!quiet) toast(errText(e)); }
}

const numOr = (v) => (typeof v === "number" && isFinite(v) ? v : null);
function quoteOf(symbol) {
  const s = SAMPLE_QUOTES[symbol], l = LIVE.quotes && LIVE.quotes[symbol];
  if (!l || numOr(l.price) == null) return s ? Object.assign({ live: false }, s) : null;
  const prev = numOr(l.previous_close) ?? numOr(l.prev_close) ?? (numOr(l.change) != null ? l.price - l.change : null);
  return { live: true, delayed: l.is_delayed !== false, name: [l.name || (s ? s.name[0] : symbol), l.name_en || (s ? s.name[1] : symbol)], price: l.price, prev, open: numOr(l.open), high: numOr(l.high), low: numOr(l.low), volume: numOr(l.volume) };
}
const whenText = (ts) => { if (!ts) return t("never"); const d = new Date(ts); if (isNaN(d)) return String(ts); const z = (n) => String(n).padStart(2, "0"); return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate()) + " " + z(d.getHours()) + ":" + z(d.getMinutes()); };
const whenHtml = (ts) => (ts ? '<span class="num">' + esc(whenText(ts)) + "</span>" : esc(t("never")));

function statusHtml() {
  const st = !CFG.token ? "off" : SYNC.state === "off" ? "ok" : SYNC.state;
  const cls = st === "ok" ? "up" : st === "err" ? "down" : st === "busy" ? "amber" : "";
  return '<div><span>' + esc(t("set_status")) + '</span><b style="font-family:var(--body);font-size:15px"><span class="tag ' + cls + '">' + esc(t("st_" + st)) + "</span>" + (st === "err" ? ' <span class="small muted">' + esc(SYNC.msg) + "</span>" : "") + "</b></div><div><span>" + esc(t("set_last")) + '</span><b style="font-family:var(--body);font-size:15px">' + whenHtml(SYNC.at) + "</b></div><div><span>" + esc(t("set_px")) + '</span><b style="font-family:var(--body);font-size:15px">' + whenHtml(LIVE.fetchedAt) + "</b></div>";
}
function paintStatus() { const el = document.getElementById("sync-status"); if (el) el.innerHTML = statusHtml(); }

function pageSettings() {
  const head = '<div class="wrap"><div class="page-head"><h1>' + esc(t("set_h")) + "</h1><p>" + esc(t("set_p")) + '</p></div><div class="stack" style="padding-block:18px;max-width:640px">';
  if (!HOSTED) return head + '<div class="notice">' + esc(t("set_only_hosted")) + "</div></div></div>";
  const f = (id, k, val, extra) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" dir="ltr" ' + (extra || "") + ' value="' + esc(val) + '"></div>';
  return head + '<div class="result" id="sync-status">' + statusHtml() + '</div><form class="panel stack" data-form="sync" novalidate><div class="form-grid">' + f("s-owner", "set_owner", CFG.owner, 'autocomplete="off"') + f("s-repo", "set_repo", CFG.repo, 'autocomplete="off"') + "</div>" + f("s-token", "set_token", CFG.token, 'type="password" autocomplete="off" spellcheck="false"') + '<p class="small muted">' + esc(t("set_token_note")) + '</p><div class="row"><button class="btn primary" type="submit">' + esc(t("set_save")) + "</button>" + (CFG.token ? '<button class="btn" type="button" data-act="sync-now">' + esc(t("set_sync")) + '</button><button class="btn" type="button" data-act="px-now">' + esc(t("set_prices")) + '</button><button class="btn ghost" type="button" data-act="sync-forget">' + esc(t("set_forget")) + "</button>" : "") + '</div></form><div class="panel stack"><h3>' + esc(t("set_how")) + '</h3><ol style="margin:0;padding-inline-start:22px;display:flex;flex-direction:column;gap:6px">' + UI.set_steps.map((s) => "<li>" + esc(L(s)) + "</li>").join("") + "</ol></div></div></div>";
}

document.addEventListener("submit", async (e) => {
  const form = e.target.closest('[data-form="sync"]'); if (!form) return;
  e.preventDefault();
  const v = (id) => document.getElementById(id).value.trim();
  CFG = { owner: v("s-owner"), repo: v("s-repo"), token: v("s-token") };
  try { localStorage.setItem(CFG_KEY, JSON.stringify(CFG)); } catch (err) {}
  if (!CFG.token) { render(); return; }
  if (await syncNow(false)) { await loadPrices(true); loadWatch(); }
  render();
});
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act]"); if (!el) return;
  if (el.dataset.act === "sync-now") syncNow(false);
  else if (el.dataset.act === "px-now") loadPrices(false);
  else if (el.dataset.act === "sync-forget") { CFG.token = ""; try { localStorage.setItem(CFG_KEY, JSON.stringify(CFG)); } catch (err) {} SYNC = { state: "off", at: null, msg: "" }; render(); }
});
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && CFG.token) { syncNow(true); loadPrices(true); } });
