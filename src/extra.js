/* ===== مِراس: أسهم الشارت الإضافية (سعودية وعالمية ومؤشرات) =====
   chart_extra.json يكتبه GitHub Actions من Yahoo Finance (مجاني)، والقائمة في chartlist.json وتقدر تعدلها من الشارت.
   الشموع تنضاف لقائمة الشارت والمختبر وتحليل المدارس مثل أي سهم ثاني. */
Object.assign(UI, {
  ex2_h: ["أسهم إضافية للشارت", "Extra chart symbols"],
  ex2_p: ["أسهم سعودية وعالمية ومؤشرات بشموع يومية لسنة، من Yahoo Finance مجاناً (ما تاخذ من طلبات سهمك). السعودي اكتب رقمه، والعالمي برمز Yahoo مثل AAPL أو 0700.HK أو 7203.T، والمؤشر يبدأ بـ ^ مثل ^GSPC.", "Saudi and global shares and indices with a year of daily candles, free from Yahoo Finance (no Sahmk requests used). Saudi: type the code; global: the Yahoo symbol such as AAPL, 0700.HK or 7203.T; an index starts with ^ such as ^GSPC."],
  ex2_ph: ["مثال: 2380 أو AAPL أو ^N225", "e.g. 2380, AAPL or ^N225"], ex2_add: ["أضف", "Add"],
  ex2_added: ["انضاف. شموعه توصل خلال دقيقة أو دقيقتين، وبعدها حدّث الصفحة.", "Added. Its candles arrive within a minute or two; then refresh."],
  ex2_removed: ["انحذف", "Removed"], ex2_dup: ["موجود", "Already there"], ex2_bad: ["الرمز غير صحيح", "Invalid symbol"], ex2_max: ["الحد 40 رمز", "The limit is 40 symbols"],
  ex2_wait: ["بانتظار البيانات", "Waiting for data"], ex2_err: ["ما لقينا بيانات لهذا الرمز في Yahoo", "Yahoo has no data for this symbol"],
  ch_g_sa: ["السوق السعودي", "Saudi market"], ch_g_us: ["الأسهم الأمريكية", "US shares"], ch_g_gl: ["أسهم عالمية", "Global shares"], ch_g_idx: ["مؤشرات", "Indices"], ch_g_mt: ["المعادن", "Metals"]
});
var EXTRA_KEY = "meras.extra";
/* var مو let: usMerge في us.js ينادي extraMerge قبل ما يوصل التنفيذ لهذا الملف */
var EXTRA = null, EXL = null, EXL_SHA = undefined, exLoading = false;
try { EXTRA = JSON.parse(localStorage.getItem(EXTRA_KEY) || "null"); } catch (e) {}
try { extraMerge(); } catch (e) {}
function extraMerge() {
  if (!EXTRA || !EXTRA.symbols || typeof LIVE === "undefined" || !LIVE) return;
  LIVE.history = LIVE.history || {};
  Object.entries(EXTRA.symbols).forEach(([s, v]) => { if (Array.isArray(v.rows) && v.rows.length && !(LIVE.history[s] && LIVE.history[s].length > v.rows.length)) LIVE.history[s] = v.rows.map(([d, o, h, l, c, vol]) => ({ d, o, h, l, c, v: vol })); });
}
function extraNameOf(s) {
  if (/^\d{4}$/.test(s) && typeof SA_SECTORS !== "undefined" && S.lang === "ar") { for (const [, list] of SA_SECTORS) { const f = list.find((x) => x[0] === s); if (f) return f[1]; } }
  return EXTRA && EXTRA.symbols && EXTRA.symbols[s] ? EXTRA.symbols[s].n : null;
}
async function loadExtra() {
  if (!(typeof HOSTED !== "undefined" && HOSTED) || !CFG.token || exLoading) return; exLoading = true;
  try {
    const [a, b] = await Promise.all([readJson("chart_extra.json"), readJson("chartlist.json")]);
    if (a && a.data && a.data.symbols) { EXTRA = a.data; try { localStorage.setItem(EXTRA_KEY, JSON.stringify(EXTRA)); } catch (e) {} extraMerge(); }
    if (b) { EXL = Array.isArray(b.data) ? b.data : []; EXL_SHA = b.sha; }
  } catch (e) {}
  exLoading = false;
  if (typeof route === "function" && ["chart", "lab"].includes(route())) render();
  if (typeof tickHook === "function") tickHook();
}
async function extraSaveList(next, msg) {
  try {
    const f = await readJson("chartlist.json");
    await gh("chartlist.json", "PUT", { message: "chartlist", content: b64e(JSON.stringify(next) + "\n"), sha: f ? f.sha : undefined });
    EXL = next; toast(t(msg));
  } catch (e) { toast(errText(e)); }
  render();
}
/* مجموعات قائمة الأسهم في الشارت */
function chRealGroups(real, opt, lab) {
  const grp = { sa: [], us: [], gl: [], idx: [], mt: [] };
  real.forEach((k) => { if (/^\d{4}$/.test(k)) grp.sa.push(k); else if (k[0] === "^") grp.idx.push(k); else if (k === "XAU" || k === "XAG") grp.mt.push(k); else if (typeof isUS === "function" && isUS(k)) grp.us.push(k); else grp.gl.push(k); });
  return Object.entries(grp).filter(([, v]) => v.length).map(([g, v]) => '<optgroup label="' + esc(t("ch_g_" + g)) + '">' + v.sort().map((k) => opt(k, lab(k))).join("") + "</optgroup>").join("");
}
function extraPanel() {
  if (!(typeof HOSTED !== "undefined" && HOSTED) || !CFG.token) return "";
  if (EXL == null) { loadExtra(); return ""; }
  const errs = (EXTRA && EXTRA.errors) || {}, have = (EXTRA && EXTRA.symbols) || {};
  const chip = ([s]) => '<span class="chip"><span class="num">' + esc(s) + "</span>" + (have[s] ? "" : ' <span class="small muted">(' + esc(t(errs[s] ? "ex2_err" : "ex2_wait")) + ")</span>") + '<button data-act="ex2-del" data-s="' + esc(s) + '" aria-label="' + esc(t("j_del")) + '">×</button></span>';
  return '<div class="panel stack"><div><h3 style="font-size:18px">' + esc(t("ex2_h")) + ' <span class="tag num">' + EXL.length + ' / 40</span></h3><p class="small muted">' + esc(t("ex2_p")) + '</p></div><form class="row" data-form="ex2" novalidate><input id="ex2-new" dir="ltr" placeholder="' + esc(t("ex2_ph")) + '" maxlength="16" autocapitalize="characters" style="flex:1;min-width:0;background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:8px 10px"><button class="btn" type="submit">' + esc(t("ex2_add")) + '</button></form><div class="row">' + EXL.map(chip).join("") + "</div></div>";
}
document.addEventListener("submit", (ev) => {
  const form = ev.target.closest && ev.target.closest('[data-form="ex2"]'); if (!form) return;
  ev.preventDefault();
  let v = (document.getElementById("ex2-new").value || "").trim().toUpperCase();
  if (!/^\^?[A-Z0-9.\-=]{1,14}$/.test(v)) { toast(t("ex2_bad")); return; }
  const list = EXL || [];
  if (list.some(([s]) => s === v) || (LIVE.history && LIVE.history[v] && !(EXTRA && EXTRA.symbols && EXTRA.symbols[v]))) { toast(t("ex2_dup")); return; }
  if (list.length >= 40) { toast(t("ex2_max")); return; }
  extraSaveList(list.concat([[v, /^\d{4}$/.test(v) ? "SA" : v[0] === "^" ? "IDX" : "GL"]]), "ex2_added");
});
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest('[data-act="ex2-del"]'); if (!el || !EXL) return;
  ev.preventDefault(); extraSaveList(EXL.filter(([s]) => s !== el.dataset.s), "ex2_removed");
});
if (typeof HOSTED !== "undefined" && HOSTED && CFG.token) loadExtra();
