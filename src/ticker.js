/* ===== مِراس: شريط المؤشرات المتحرك =====
   فوق الصفحة: تاسي و S&P 500 وناسداك وداو جونز، مع تغير اليوم ونتيجة تحليل المدارس لكل مؤشر.
   تضغط على أي مؤشر: تطلع نافذة فيها الشارت والأرقام والتحليل والشرح، وزر يفتحه في الشارت.
   البيانات من chart_extra.json (نفس بيانات الأسهم الإضافية، تتحدث كل ساعتين). */
Object.assign(UI, {
  tk_label: ["المؤشرات", "Indices"], tk_close: ["إغلاق", "Close"], tk_open: ["افتح في الشارت وحلله", "Open on the chart and analyse"], tk_ask: ["اسأل عنه الذكاء الاصطناعي", "Ask the AI about it"],
  tk_today: ["اليوم", "Today"], tk_week: ["أسبوع", "Week"], tk_month: ["شهر", "Month"], tk_3m: ["3 أشهر", "3 months"], tk_year: ["سنة", "Year"],
  tk_hi: ["أعلى سنة", "52-week high"], tk_lo: ["أدنى سنة", "52-week low"], tk_from_hi: ["تحت القمة بـ {p}", "{p} below the high"],
  tk_expl: ["الشرح", "Explanation"], tk_analysis: ["تحليل المدارس", "Schools analysis"], tk_upd: ["آخر تحديث {d}", "Updated {d}"],
  tk_live: ["شمعة اليوم ممكن تكون لسا ما قفلت، فالأرقام تتغير لين الإغلاق.", "Today's candle may still be open, so figures change until the close."],
  tk_pause: ["إيقاف الحركة", "Pause"], tk_note: ["تحليل آلي تعليمي، ومو توصية شراء أو بيع.", "Automatic educational analysis, not a buy or sell recommendation."]
});
const TK_LIST = [
  { s: "^TASI.SR", n: ["تاسي", "TASI"], full: ["المؤشر العام للسوق السعودية (تاسي)", "Tadawul All Share Index (TASI)"], mk: ["السوق السعودي", "Saudi market"] },
  { s: "^GSPC", n: ["S&P 500", "S&P 500"], full: ["مؤشر S&P 500: أكبر 500 شركة أمريكية", "S&P 500: the 500 largest US companies"], mk: ["السوق الأمريكي", "US market"] },
  { s: "^IXIC", n: ["ناسداك", "Nasdaq"], full: ["مؤشر ناسداك المركب: ثقل شركات التقنية", "Nasdaq Composite: tech-heavy"], mk: ["السوق الأمريكي", "US market"] },
  { s: "^DJI", n: ["داو جونز", "Dow Jones"], full: ["مؤشر داو جونز الصناعي: 30 شركة أمريكية كبرى", "Dow Jones Industrial Average: 30 US blue chips"], mk: ["السوق الأمريكي", "US market"] }
];
const TK = { el: null, cache: {}, open: null, paused: false };
const tkRows = (s) => (typeof EXTRA !== "undefined" && EXTRA && EXTRA.symbols && EXTRA.symbols[s] ? EXTRA.symbols[s].rows.map(([d, o, h, l, c, v]) => ({ d, o, h, l, c, v })) : null);
const tkFmt = (v) => v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const tkPct = (v) => (v > 0 ? "+" : "") + (v * 100).toFixed(2) + "%";
function tkStats(rows) {
  const n = rows.length, c = rows[n - 1].c, back = (k) => (n > k ? c / rows[n - 1 - k].c - 1 : null);
  const yr = rows.slice(-252), hi = Math.max(...yr.map((r) => r.h)), lo = Math.min(...yr.map((r) => r.l));
  return { c, d: back(1), w: back(5), m: back(21), q: back(63), y: n > 200 ? c / rows[0].c - 1 : null, hi, lo, date: rows[n - 1].d };
}
function tkInfo(it) {
  const rows = tkRows(it.s); if (!rows || rows.length < 60) return null;
  const key = it.s + "|" + rows[rows.length - 1].d + "|" + rows[rows.length - 1].c + "|" + S.lang;
  if (TK.cache[it.s] && TK.cache[it.s].key === key) return TK.cache[it.s];
  let R = null; try { R = scaRun(rows, SCA_SCHOOLS.filter((x) => x !== "volume" || rows.some((r) => r.v > 0))); } catch (e) { console.error(e); }
  return (TK.cache[it.s] = { key, rows, st: tkStats(rows), R });
}
function tkItems() { return TK_LIST.map((it) => Object.assign({ it }, tkInfo(it) || {})).filter((x) => x.st); }
function tkBarHtml() {
  const items = tkItems(); if (!items.length) return "";
  const one = (x) => { const d = x.st.d || 0, cls = d > 0 ? "up" : d < 0 ? "dn" : ""; return '<button type="button" class="tk-it" data-act="tk-open" data-s="' + esc(x.it.s) + '"><b>' + esc(L(x.it.n)) + '</b><span class="num" dir="ltr">' + tkFmt(x.st.c) + '</span><span class="num tk-ch ' + cls + '" dir="ltr">' + (d > 0 ? "▲ " : d < 0 ? "▼ " : "") + tkPct(d) + "</span>" + (x.R ? '<span class="tk-b ' + x.R.fb + '">' + esc(biasWord(x.R.fb)) + "</span>" : "") + "</button>"; };
  const seq = items.map(one).join('<i class="tk-sep">•</i>');
  return '<div class="tk-track' + (TK.paused ? " paused" : "") + '"><div class="tk-run">' + seq + '<i class="tk-sep">•</i>' + seq + '<i class="tk-sep">•</i></div></div>';
}
function tickHook() {
  const top = document.getElementById("top"); if (!top) return;
  const html = (typeof lnShow === "function" && lnShow()) ? "" : tkBarHtml();
  if (!html) { if (TK.el) TK.el.remove(); return; }
  if (!TK.el) { TK.el = document.createElement("div"); TK.el.id = "tickbar"; TK.el.setAttribute("aria-label", t("tk_label")); }
  if (TK.el.dataset.h !== html) { TK.el.innerHTML = html; TK.el.dataset.h = html; }
  if (TK.el.parentNode !== top) top.appendChild(TK.el);
  const run = TK.el.querySelector(".tk-run");
  if (run) { const dur = Math.max(30, run.scrollWidth / 2 / 40); run.style.animationDuration = dur + "s"; run.style.animationDelay = -((Date.now() / 1000) % dur) + "s"; }
  if (TK.open) tkSheetRender();
}

/* ----- النافذة ----- */
function tkChart(rows, R) {
  const D = rows.slice(-120), n = D.length, W = 640, H = 230, x0 = 6, x1 = 570, top = 10, bot = 210;
  let lo = Math.min(...D.map((r) => r.l)), hi = Math.max(...D.map((r) => r.h)); const pad = (hi - lo) * 0.06; lo -= pad; hi += pad;
  const Y = (p) => (bot - ((p - lo) / (hi - lo)) * (bot - top)).toFixed(1), st = (x1 - x0) / n, X = (i) => (x0 + st * (i + 0.5)).toFixed(1), bw = Math.max(1.5, st * 0.6);
  let s = "";
  if (R) R.groups.filter((g) => g.p > lo && g.p < hi).forEach((g) => { s += '<line class="' + (g.p > R.c ? "c-res" : "c-sup") + '" x1="' + x0 + '" x2="' + x1 + '" y1="' + Y(g.p) + '" y2="' + Y(g.p) + '"/><text class="c-text" x="' + (x1 + 4) + '" y="' + (+Y(g.p) + 4) + '">' + tkFmt(g.p) + "</text>"; });
  const all = rows.map((r) => r.c), off = rows.length - n, m50 = sma(all, 50), pts = [];
  for (let i = 0; i < n; i++) if (m50[off + i] != null) pts.push(X(i) + "," + Y(m50[off + i]));
  s += '<polyline points="' + pts.join(" ") + '" fill="none" stroke="#5B7BD5" stroke-width="1.6"/>';
  s += D.map((r, i) => { const cl = r.c >= r.o ? "c-up" : "c-down", a = Y(Math.max(r.o, r.c)), b = Y(Math.min(r.o, r.c)); return '<line class="' + cl + '" x1="' + X(i) + '" x2="' + X(i) + '" y1="' + Y(r.h) + '" y2="' + Y(r.l) + '" stroke-width="1"/><rect class="' + cl + '" x="' + (X(i) - bw / 2).toFixed(1) + '" y="' + a + '" width="' + bw.toFixed(1) + '" height="' + Math.max(1, b - a).toFixed(1) + '"/>'; }).join("");
  s += '<text class="c-text" x="' + x0 + '" y="' + (H - 4) + '">' + esc(D[0].d || "") + '</text><text class="c-text" x="' + x1 + '" y="' + (H - 4) + '" text-anchor="end">' + esc(D[n - 1].d || "") + "</text>";
  return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + s + "</svg>";
}
function tkExplain(x) {
  const st = x.st, rows = x.rows, cl = rows.map((r) => r.c), i = cl.length - 1, m50 = sma(cl, 50)[i], m200 = sma(cl, 200)[i], r14 = rsi(cl, 14)[i], R = x.R, out = [];
  const pos = (st.c - st.lo) / Math.max(1e-9, st.hi - st.lo);
  out.push(F("{n} أغلق عند {c}، {d} اليوم، و{w} خلال أسبوع، و{m} خلال شهر{y}.", "{n} closed at {c}, {d} today, {w} over a week and {m} over a month{y}.", { n: L(x.it.n), c: tkFmt(st.c), d: tkPct(st.d || 0), w: st.w != null ? tkPct(st.w) : "-", m: st.m != null ? tkPct(st.m) : "-", y: st.y != null ? L(["، و" + tkPct(st.y) + " خلال سنة", ", and " + tkPct(st.y) + " over a year"]) : "" }));
  out.push(F("مداه في آخر سنة بين {lo} و {hi}، وهو الحين في {p} من هذا المدى ({f}).", "Its one-year range is {lo} to {hi}; it now sits at {p} of that range ({f}).", { lo: tkFmt(st.lo), hi: tkFmt(st.hi), p: Math.round(pos * 100) + "%", f: pos > 0.75 ? L(["قريب من القمة", "near the top"]) : pos < 0.25 ? L(["قريب من القاع", "near the bottom"]) : L(["في النص", "mid-range"]) }));
  if (m50 != null) out.push(F("السعر {a} متوسط 50 يوم ({m}){b}. {t}", "Price is {a} the 50-day average ({m}){b}. {t}", { a: st.c > m50 ? L(["فوق", "above"]) : L(["تحت", "below"]), m: tkFmt(m50), b: m200 != null ? L(["، و" + (st.c > m200 ? "فوق" : "تحت") + " متوسط 200 (" + tkFmt(m200) + ")", ", and " + (st.c > m200 ? "above" : "below") + " the 200-day (" + tkFmt(m200) + ")"]) : "", t: m200 == null ? "" : st.c > m50 && st.c > m200 ? L(["هذا شكل سوق صاعد على المدى المتوسط والطويل.", "That is the shape of a medium and long-term uptrend."]) : st.c < m50 && st.c < m200 ? L(["هذا شكل سوق هابط على المدى المتوسط والطويل.", "That is the shape of a medium and long-term downtrend."]) : L(["الإشارات مختلطة بين المدى المتوسط والطويل.", "Signals are mixed between the medium and long term."]) }));
  if (r14 != null) out.push(F("RSI عند {r}: {t}.", "RSI is {r}: {t}.", { r: r14.toFixed(1), t: r14 > 70 ? L(["تشبع شراء، والصعود ممكن يهدأ", "overbought; the rise may pause"]) : r14 < 30 ? L(["تشبع بيع، وممكن يرتد", "oversold; a bounce is possible"]) : r14 > 55 ? L(["زخم صاعد", "rising momentum"]) : r14 < 45 ? L(["زخم هابط", "falling momentum"]) : L(["زخم محايد", "neutral momentum"]) }));
  if (R) out.push(F("متوسط حركته اليومية (ATR) {a}، يعني {p} من قيمته.", "Its average daily move (ATR) is {a}, i.e. {p} of its value.", { a: tkFmt(R.atr), p: (R.atr / st.c * 100).toFixed(2) + "%" }));
  out.push(F("ليش يهمك: أغلب أسهم {m} تتحرك مع مؤشرها. إذا المؤشر صاعد، فرص الأسهم القوية أعلى، وإذا هابط، حتى الأسهم الجيدة تنضغط. فخل المؤشر أول فلتر قبل أي سهم.", "Why it matters: most {m} shares move with their index. When it rises, strong shares have better odds; when it falls, even good shares come under pressure. Make the index your first filter before any share.", { m: L(x.it.mk) }));
  return out;
}
function tkSheetRender() {
  let sh = document.getElementById("tksheet");
  const x = TK.open && tkItems().find((y) => y.it.s === TK.open);
  if (!x) { if (sh) sh.remove(); TK.open = null; document.body.classList.remove("tk-lock"); return; }
  if (!sh) { sh = document.createElement("div"); sh.id = "tksheet"; sh.setAttribute("role", "dialog"); sh.setAttribute("aria-modal", "true"); document.body.appendChild(sh); document.body.classList.add("tk-lock"); }
  const st = x.st, R = x.R, cell = (k, v) => '<div class="tk-kv"><span class="small muted">' + esc(t(k)) + '</span><b class="num' + (typeof v === "number" ? (v > 0 ? " up" : v < 0 ? " dn" : "") : "") + '" dir="ltr">' + (typeof v === "number" ? tkPct(v) : v) + "</b></div>";
  const ex = R ? scaExplain(R) : null, live = true;
  const html = '<div class="tk-back" data-act="tk-close"></div><div class="tk-card"><div class="row" style="justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:nowrap"><div style="flex:1;min-width:0"><h2 style="margin:0">' + esc(L(x.it.full)) + '</h2><p class="small muted" style="margin:2px 0 0">' + esc(t("tk_upd").replace("{d}", whenText(EXTRA.fetched_at))) + " · " + esc(st.date) + '</p></div><button class="btn sm" data-act="tk-close" aria-label="' + esc(t("tk_close")) + '">✕</button></div>' +
    '<div class="tk-big"><b class="num" dir="ltr">' + tkFmt(st.c) + '</b><span class="num ' + ((st.d || 0) >= 0 ? "up" : "dn") + '" dir="ltr">' + tkPct(st.d || 0) + "</span>" + (R ? '<span class="tk-b ' + R.fb + '">' + esc(biasWord(R.fb)) + " · " + esc(t("sca_c" + R.conf)) + "</span>" : "") + "</div>" +
    '<div class="tk-grid">' + cell("tk_week", st.w) + cell("tk_month", st.m) + cell("tk_3m", st.q) + cell("tk_year", st.y) + cell("tk_hi", tkFmt(st.hi)) + cell("tk_lo", tkFmt(st.lo)) + "</div>" +
    '<div class="tk-chart">' + tkChart(x.rows, R) + "</div>" +
    "<h3>" + esc(t("tk_expl")) + "</h3><ul>" + tkExplain(x).map((l) => "<li>" + esc(l) + "</li>").join("") + "</ul>" +
    (R ? "<h3>" + esc(t("tk_analysis")) + ' <span class="small muted num" dir="ltr">' + (R.tot > 0 ? "+" : "") + R.tot.toFixed(2) + " · " + esc(t("sca_agree").replace("{a}", R.agree).replace("{n}", R.nAct)) + "</span></h3><ul>" + ex.why.map((l) => "<li>" + esc(l) + "</li>").join("") + "</ul>" +
      (R.groups.length ? "<h3>" + esc(t("sca_lv")) + '</h3><div class="tk-lv">' + R.groups.map((g) => '<span class="tag ' + (g.p > R.c ? "ex-dn" : "up") + '"><span class="num" dir="ltr">' + tkFmt(g.p) + "</span> · " + esc(t(g.p > R.c ? "sca_res" : "sca_sup")) + " · " + g.ids.length + "</span>").join("") + "</div>" : "") +
      "<h3>" + esc(t("sca_scen")) + "</h3><ul>" + ex.scen.map((l) => "<li>" + esc(l) + "</li>").join("") + "</ul>" : "") +
    '<div class="row" style="gap:8px;flex-wrap:wrap;margin-top:6px"><button class="btn primary" data-act="tk-chart" data-s="' + esc(x.it.s) + '">' + esc(t("tk_open")) + '</button><button class="btn" data-act="tk-chart" data-ask="1" data-s="' + esc(x.it.s) + '">' + esc(t("tk_ask")) + "</button></div>" +
    '<p class="small muted" style="margin:8px 0 0">' + (live ? esc(t("tk_live")) + " " : "") + esc(t("tk_note")) + "</p></div>";
  if (sh.dataset.h !== html) { sh.innerHTML = html; sh.dataset.h = html; }
}
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest('[data-act="tk-open"],[data-act="tk-close"],[data-act="tk-chart"]'); if (!el) return;
  ev.preventDefault(); const a = el.dataset.act;
  if (a === "tk-open") { TK.open = el.dataset.s; tkSheetRender(); }
  else if (a === "tk-close") { TK.open = null; tkSheetRender(); }
  else if (a === "tk-chart") {
    const s = el.dataset.s, ask = !!el.dataset.ask; TK.open = null; tkSheetRender();
    const cfg = chartCfg(); cfg.sym = s; chOffset = 0; chReplay = null; chPending = null; save();
    SCA.sel = SCA_SCHOOLS.slice(); scaSave(); SCA.res = null; if (typeof SV !== "undefined") SV.cur = null;
    if (location.hash !== "#chart") location.hash = "chart"; else render();
    setTimeout(() => { const all = CH && CH.data ? CH.data.slice(0, CH.e) : []; if (all.length >= 40) { SCA.res = scaRun(all, SCA_SCHOOLS.filter((x) => SCA.sel.includes(x))); SCA.key = chartCfg().sym + "|" + CH.e; render(); }
      setTimeout(() => { const o = document.querySelector(ask ? ".qa" : ".sca-out"); if (o) o.scrollIntoView({ behavior: "smooth", block: "start" }); if (ask) { const q = document.getElementById("qa-q"); if (q) q.focus({ preventScroll: true }); } }, 120); }, 300);
  }
});
document.addEventListener("keydown", (ev) => { if (ev.key === "Escape" && TK.open) { TK.open = null; tkSheetRender(); } });
