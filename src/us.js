/* ===== مِراس: السوق الأمريكي داخل مكتبي =====
   الأسهم الأمريكية والفوركس والنفط من us.json (Alpha Vantage عبر GitHub Actions)، والذهب والفضة من metals.json.
   للمالك فقط: رخصة Alpha Vantage للاستخدام الشخصي، فما تنعرض لغيره. كل المبالغ بالدولار. */
Object.assign(UI, {
  us_t: ["السوق الأمريكي", "US market"],
  us_g_movers: ["الأسهم الأكثر حركة", "Biggest movers"], us_g_ai: ["الذكاء الاصطناعي والسحابة", "AI and cloud"], us_g_fx: ["الفوركس", "Forex"], us_g_cmd: ["النفط والمعادن", "Oil and metals"],
  us_last: ["آخر إقفال", "Last close"], us_1d: ["اليوم", "1 day"], us_5d: ["5 أيام", "5 days"], us_1m: ["شهر", "1 month"], us_range: ["مدى 30 يوم", "30-day range"],
  us_none: ["البيانات لسا ما وصلت. أول تشغيل ياخذ 5 دقايق تقريباً بعد إضافة المفتاح، وبعدها مرة كل يوم 3:30 الفجر.", "No data yet. The first run takes about 5 minutes after the key is added, then once a day at 3:30 am Riyadh time."],
  us_meta: ["آخر تحديث {d} · استخدم {n} من 25 طلب", "Updated {d} · used {n} of 25 requests"],
  us_err: ["رموز ما وصلت بياناتها", "Symbols with no data"], us_note: ["البيانات للاستخدام الشخصي حسب رخصة Alpha Vantage، فهي تظهر لك أنت بس.", "Data is for personal use under the Alpha Vantage licence, so it is shown to you only."],
  us_gold: ["الذهب (أونصة)", "Gold (oz)"], us_silver: ["الفضة (أونصة)", "Silver (oz)"]
});

const US_KEY = "meras.us";
let US = null; try { US = JSON.parse(localStorage.getItem(US_KEY) || "null"); } catch (e) {}
const USM_KEY = "meras.usm";
let USM = null; try { USM = JSON.parse(localStorage.getItem(USM_KEY) || "null"); } catch (e) {} // metals.json
const isUS = (s) => !!(US && US.symbols && US.symbols[s]);
const curOf = (s) => (/^\d{4}$/.test(String(s)) ? "SAR" : "USD");
const money = (n, cur, d = 2) => (cur === "USD" ? "$" : "") + fmt(n, d);

function usMerge() {
  if (!LIVE) return; if (!(US && US.symbols) && !USM) { if (typeof extraMerge === "function") extraMerge(); return; }
  LIVE.history = LIVE.history || {};
  if (US && US.symbols) Object.entries(US.symbols).forEach(([s, v]) => { if (Array.isArray(v.rows) && v.rows.length) LIVE.history[s] = v.rows; });
  if (USM) [["gold", "XAU"], ["silver", "XAG"]].forEach(([k, s]) => { const o = USM[k] && USM[k].ohlc; if (Array.isArray(o) && o.length > 1) LIVE.history[s] = o.map(([d, op, h, l, c]) => ({ d, o: op, h, l, c })); });
  if (typeof extraMerge === "function") extraMerge();
}
const usNameOf = (s) => (s === "XAU" ? t("us_gold") : s === "XAG" ? t("us_silver") : US && US.symbols && US.symbols[s] ? US.symbols[s].n : null);
async function loadUS() {
  if (!HOSTED || !CFG.token) return;
  try {
    const [u, m] = await Promise.all([readJson("us.json").catch(() => null), readJson("metals.json").catch(() => null)]);
    if (u && u.data && u.data.symbols) { US = u.data; try { localStorage.setItem(US_KEY, JSON.stringify(US)); } catch (e) {} usMerge(); }
    if (m && m.data) { USM = m.data; try { localStorage.setItem(USM_KEY, JSON.stringify(USM)); } catch (e) {} usMerge(); }
  } catch (e) {}
}
usMerge();

function usSpark(rows) {
  const r = rows.slice(-30).map((x) => x.c); if (r.length < 2) return "";
  const lo = Math.min(...r), hi = Math.max(...r), sp = hi - lo || 1, W = 90, H = 26;
  const pts = r.map((v, i) => (i * (W / (r.length - 1))).toFixed(1) + "," + (H - 2 - ((v - lo) / sp) * (H - 4)).toFixed(1)).join(" ");
  return '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '" aria-hidden="true" dir="ltr"><polyline points="' + pts + '" fill="none" stroke="' + (r[r.length - 1] >= r[0] ? "var(--up)" : "var(--down)") + '" stroke-width="1.6"/></svg>';
}
const usPct = (rows, n) => { if (rows.length <= n) return null; const a = rows[rows.length - 1 - n].c, b = rows[rows.length - 1].c; return a ? ((b - a) / a) * 100 : null; };
function usRow(s, name, rows, chartable, dec) {
  const last = rows.length ? rows[rows.length - 1] : null, m = rows.slice(-30), lo = m.length ? Math.min(...m.map((x) => x.l)) : null, hi = m.length ? Math.max(...m.map((x) => x.h)) : null;
  const pc = (v) => (v == null ? "–" : dkSign(v, 1, "%"));
  const d = dec || (last && last.c < 5 ? 4 : 2);
  return '<tr><td><b class="num">' + esc(s) + '</b> <span class="small muted">' + esc(name || "") + '</span></td><td class="num">' + (last ? (curOf(s) === "USD" && !/^[A-Z]{6}$/.test(s) ? "$" : "") + fmt(last.c, d) : "–") + "</td><td>" + pc(usPct(rows, 1)) + "</td><td>" + pc(usPct(rows, 5)) + "</td><td>" + pc(usPct(rows, 21)) + '</td><td class="num small">' + (lo != null ? fmt(lo, d) + " – " + fmt(hi, d) : "–") + "</td><td>" + usSpark(rows) + "</td><td>" + (chartable ? '<button class="btn sm ghost" data-act="dk-chart" data-s="' + esc(s) + '">' + esc(t("dk_open_ch")) + "</button>" : "") + "</td></tr>";
}
let US_MOB = {};
function usSheet(s) {
  const o = US_MOB[s]; if (!o) return "";
  const rows = o.rows, last = rows.length ? rows[rows.length - 1] : null, m = rows.slice(-30), d = o.dec || (last && last.c < 5 ? 4 : 2), lo = m.length ? Math.min(...m.map((x) => x.l)) : null, hi = m.length ? Math.max(...m.map((x) => x.h)) : null;
  const pc = (v) => (v == null ? "–" : dkSign(v, 2, "%")), px = (v) => (curOf(s) === "USD" && !/^[A-Z]{6}$/.test(s) ? "$" : "") + fmt(v, d);
  return '<div class="dgs-top"><span class="dgm-av dg-tech">' + esc(dgShort(s)) + '</span><div style="min-width:0"><h3 id="dgs-name">' + esc(o.name || s) + '</h3><p><span class="num">' + esc(s) + "</span>" + (last ? " · " + esc(last.d) : "") + "</p></div></div>" +
    '<div class="dgs-kv"><div><span>' + esc(t("us_last")) + '</span><b class="num">' + (last ? px(last.c) : "–") + "</b></div><div><span>" + esc(t("us_1d")) + "</span><b>" + pc(usPct(rows, 1)) + "</b></div><div><span>" + esc(t("us_5d")) + "</span><b>" + pc(usPct(rows, 5)) + "</b></div><div><span>" + esc(t("us_1m")) + "</span><b>" + pc(usPct(rows, 21)) + "</b></div></div>" +
    (lo != null ? '<div><h4 class="dgs-h">' + esc(t("us_range")) + '</h4><p class="num" style="margin:0" dir="ltr">' + px(lo) + " – " + px(hi) + '</p></div><div class="us-bigspark">' + usSpark(rows) + "</div>" : "") +
    (o.chartable ? '<button class="btn primary" data-act="dk-chart" data-s="' + esc(s) + '">' + esc(t("dk_open_ch")) + "</button>" : "");
}
document.addEventListener("click", (e) => { const el = e.target.closest && e.target.closest('[data-act="us-open"]'); if (!el) return; const k = el.dataset.k; mSheet("us:" + k, () => usSheet(k), el); });
function dkUS() {
  if (!US || !US.symbols || !Object.keys(US.symbols).length) return '<div class="notice">' + esc(t("us_none")) + "</div>";
  const head = "<thead><tr><th>" + esc(t("ow_sym")) + "</th><th>" + esc(t("us_last")) + "</th><th>" + esc(t("us_1d")) + "</th><th>" + esc(t("us_5d")) + "</th><th>" + esc(t("us_1m")) + "</th><th>" + esc(t("us_range")) + "</th><th></th><th></th></tr></thead>";
  const grp = (g) => Object.entries(US.symbols).filter(([, v]) => v.g === g);
  US_MOB = {};
  const mrow = (s, name, rows, chartable, dec) => { US_MOB[s] = { name, rows, chartable, dec }; const last = rows.length ? rows[rows.length - 1] : null, d = dec || (last && last.c < 5 ? 4 : 2), p1 = usPct(rows, 1), p21 = usPct(rows, 21);
    return mRow({ act: "us-open", k: s, s, name, cls: /^[A-Z]{6}$/.test(s) ? "dg-china" : /^X/.test(s) ? "dg-big" : "dg-tech", meta: esc(t("us_1m")) + " " + (p21 == null ? "–" : dkSign(p21, 1, "%")), end: '<b class="num">' + (last ? (curOf(s) === "USD" && !/^[A-Z]{6}$/.test(s) ? "$" : "") + fmt(last.c, d) : "–") + "</b>", endSub: p1 == null ? "" : dkSign(p1, 2, "%") }); };
  const table = (g, extra, mextra) => { const rows = grp(g).map(([s, v]) => usRow(s, v.n, v.rows || [], true)).join("") + (extra || ""); const mr = grp(g).map(([s, v]) => mrow(s, v.n, v.rows || [], true)).join("") + (mextra || ""); return rows ? '<div class="dg-desk">' + owPanel(t("us_g_" + g), '<div class="tablewrap"><table>' + head + "<tbody>" + rows + "</tbody></table></div>") + '</div><div class="dg-mob"><div class="dg-lh" style="margin-bottom:8px"><h3>' + esc(t("us_g_" + g)) + '</h3></div><ul class="dgm-list">' + mr + "</ul></div>" : ""; };
  let metals = "", mmetals = "";
  if (USM) [["gold", "us_gold", "XAU"], ["silver", "us_silver", "XAG"]].forEach(([k, lab, s]) => { const m = USM[k]; if (!m) return; const rows = LIVE.history[s] && LIVE.history[s].length > 1 ? LIVE.history[s] : Array.isArray(m.hist) ? m.hist.map(([d, c]) => ({ d, o: c, h: c, l: c, c })) : []; if (rows.length) { metals += usRow(s, t(lab), rows, LIVE.history[s] && LIVE.history[s].length > 1, 2); mmetals += mrow(s, t(lab), rows, LIVE.history[s] && LIVE.history[s].length > 1, 2); } });
  const errs = Object.entries(US.errors || {});
  return '<h3 style="font-size:19px;margin:0">' + esc(t("tab_sharia")) + "</h3>" + shFinder() + '<p class="small muted" style="margin:0">' + esc(t("us_meta").replace("{d}", whenText(US.fetched_at)).replace("{n}", US.requests != null ? US.requests : "–")) + " · " + esc(t("us_note")) + "</p>" +
    (errs.length ? '<div class="notice"><b>' + esc(t("us_err")) + ":</b> " + errs.map(([s, m]) => '<span class="num">' + esc(s) + "</span> <span class=\"small\">(" + esc(m) + ")</span>").join("، ") + "</div>" : "") +
    table("movers") + table("ai") + table("fx") + table("cmd", metals, mmetals);
}

if (typeof HOSTED !== "undefined" && HOSTED && CFG.token) loadUS();
