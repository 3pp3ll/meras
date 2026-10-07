/* ===== مِراس: الشارت التفاعلي ===== */
Object.assign(UI, {
  nav_chart: ["الشارت", "Chart"],
  ch_h: ["الشارت", "Chart"],
  ch_p: ["ارسم مستوياتك، شغّل المؤشرات، وجرّب تتوقع الشمعة الجاية قبل ما تشوفها.", "Draw your levels, switch on indicators, and try to call the next candle before you see it."],
  ch_sym: ["السهم", "Share"], ch_view: ["عدد الشموع", "Candles shown"], ch_all: ["الكل", "All"],
  ch_practice: ["بيانات تدريبية", "Practice data"], ch_real: ["شموع حقيقية من مستودعك", "Real candles from your repository"],
  ch_pa: ["سهم تدريبي أ (اتجاه صاعد)", "Practice share A (uptrend)"], ch_pb: ["سهم تدريبي ب (مسار عرضي)", "Practice share B (range)"], ch_pc: ["سهم تدريبي ج (هبوط ثم انعكاس)", "Practice share C (fall then reversal)"],
  ch_candles: ["شمعة", "candles"],
  ch_ind: ["المؤشرات", "Indicators"], ch_sma: ["متوسط بسيط", "SMA"], ch_ema: ["متوسط أسي", "EMA"], ch_rsi: ["القوة النسبية", "RSI"], ch_vol: ["الحجم", "Volume"], ch_period: ["الفترة", "Period"],
  ch_tools: ["الرسم", "Drawing"], ch_cursor: ["مؤشر", "Pointer"], ch_hline: ["خط أفقي", "Horizontal line"], ch_tline: ["خط اتجاه", "Trend line"], ch_clear: ["امسح الرسومات", "Clear drawings"],
  ch_hint_cursor: ["حرّك المؤشر على الشارت عشان تقرأ أرقام كل شمعة.", "Move over the chart to read each candle's numbers."],
  ch_hint_h: ["اضغط على الشارت عند السعر اللي تبي ترسم عنده الخط.", "Click the chart at the price where you want the line."],
  ch_hint_t1: ["اضغط على النقطة الأولى، مثلاً أول قاع.", "Click the first point, for example the first low."],
  ch_hint_t2: ["اضغط على النقطة الثانية على شمعة مختلفة.", "Now click the second point on a different candle."],
  ch_replay: ["وضع التوقع", "Prediction mode"], ch_replay_p: ["يخفي آخر الشموع. توقّع الحركة ثم اكشفها شمعة شمعة.", "Hides the latest candles. Call the move, then reveal it candle by candle."],
  ch_next: ["الشمعة التالية", "Next candle"], ch_next5: ["+5 شموع", "+5 candles"], ch_show_all: ["اكشف الكل", "Reveal all"], ch_hidden: ["شموع مخفية", "candles hidden"],
  ch_older: ["أقدم", "Older"], ch_newer: ["أحدث", "Newer"],
  ch_trade: ["سجّل صفقة من الشارت", "Log a trade from the chart"],
  ch_few: ["عندك {n} شمعة حقيقية لهذا السهم. تزيد شمعة كل يوم تداول، والمؤشر يحتاج عدد شموع يساوي فترته على الأقل.", "You have {n} real candle(s) for this share. One is added each trading day, and an indicator needs at least as many candles as its period."],
  ch_practice_note: ["هذي بيانات تدريبية مولّدة، وليست أسعار سهم حقيقي.", "This is generated practice data, not the prices of a real share."],
  ch_o: ["افتتاح", "O"], ch_hi: ["أعلى", "H"], ch_lo: ["أدنى", "L"], ch_c: ["إغلاق", "C"], ch_day: ["يوم", "Day"],
  ch_draws: ["رسوماتك", "Your drawings"], ch_none: ["ما رسمت شي للحين.", "Nothing drawn yet."], ch_h_lbl: ["أفقي", "Horizontal"], ch_t_lbl: ["اتجاه", "Trend"],
  ch_same: ["اختر شمعة مختلفة للنقطة الثانية", "Pick a different candle for the second point"],
  open_chart: ["افتح الشارت وجرّب", "Open the chart and try it"],
  j_target: ["الهدف", "Target"],
  j_bad_stop: ["وقف الخسارة لازم يكون تحت سعر الدخول", "The stop-loss must be below the entry price"],
  j_bad_target: ["الهدف لازم يكون فوق سعر الدخول", "The target must be above the entry price"]
});

const PRACTICE = { "TRN-A": "ch_pa", "TRN-B": "ch_pb", "TRN-C": "ch_pc" };
const practiceCache = {};
function practiceSeries(sym) {
  if (practiceCache[sym]) return practiceCache[sym];
  let seed = { "TRN-A": 11, "TRN-B": 29, "TRN-C": 53 }[sym];
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const out = []; let c = { "TRN-A": 30, "TRN-B": 51, "TRN-C": 72 }[sym];
  for (let i = 0; i < 160; i++) {
    let drift;
    if (sym === "TRN-A") drift = 0.0028 + Math.sin(i / 7) * 0.0075;
    else if (sym === "TRN-B") drift = (51 - c) * 0.012 + Math.cos(i / 6.5) * 0.0085;
    else drift = (i < 85 ? -0.0042 : i < 110 ? 0 : 0.0048) + Math.sin(i / 6) * 0.006;
    const o = c, ret = drift + (rnd() - 0.5) * 0.022; c = Math.max(1, o * (1 + ret));
    const h = Math.max(o, c) * (1 + rnd() * 0.008), l = Math.min(o, c) * (1 - rnd() * 0.008);
    const r2 = (x) => Math.round(x * 100) / 100;
    out.push({ o: r2(o), h: r2(h), l: r2(l), c: r2(c), v: Math.round(400000 * (0.6 + rnd() * 0.8) * (1 + Math.abs(ret) * 45)), d: null });
    c = r2(c);
  }
  return (practiceCache[sym] = out);
}
function chartData(sym) {
  if (PRACTICE[sym]) return practiceSeries(sym);
  return ((LIVE.history && LIVE.history[sym]) || []).filter((r) => r && isFinite(r.o) && isFinite(r.c));
}
const symName = (sym) => (PRACTICE[sym] ? t(PRACTICE[sym]) : (quoteOf(sym) ? L(quoteOf(sym).name) : sym));

/* ----- indicator maths (null until enough candles) ----- */
function sma(cl, p) { const out = []; let sum = 0; for (let i = 0; i < cl.length; i++) { sum += cl[i]; if (i >= p) sum -= cl[i - p]; out.push(i >= p - 1 ? sum / p : null); } return out; }
function ema(cl, p) { const out = [], k = 2 / (p + 1); let prev = null, sum = 0; for (let i = 0; i < cl.length; i++) { if (i < p - 1) { sum += cl[i]; out.push(null); } else if (i === p - 1) { sum += cl[i]; prev = sum / p; out.push(prev); } else { prev = cl[i] * k + prev * (1 - k); out.push(prev); } } return out; }
function rsi(cl, p) {
  const out = [null]; let ag = 0, al = 0;
  for (let i = 1; i < cl.length; i++) {
    const ch = cl[i] - cl[i - 1], g = Math.max(ch, 0), l = Math.max(-ch, 0);
    if (i <= p) { ag += g; al += l; if (i === p) { ag /= p; al /= p; out.push(al === 0 ? 100 : 100 - 100 / (1 + ag / al)); } else out.push(null); }
    else { ag = (ag * (p - 1) + g) / p; al = (al * (p - 1) + l) / p; out.push(al === 0 ? 100 : 100 - 100 / (1 + ag / al)); }
  }
  return out;
}

const chartDefaults = () => ({ sym: "TRN-A", n: 60, vol: true, sma1: { on: true, p: 5 }, sma2: { on: false, p: 20 }, ema: { on: false, p: 10 }, rsi: { on: false, p: 14 } });
let chTool = "cursor", chPending = null, chOffset = 0, chReplay = null, CH = null;
function chartCfg() { if (!S.chart || !S.chart.sma1) S.chart = chartDefaults(); if (!S.drawings) S.drawings = {}; return S.chart; }

function pageChart() {
  const cfg = chartCfg(), full = chartData(cfg.sym);
  if (!PRACTICE[cfg.sym] && !full.length) { cfg.sym = "TRN-A"; return pageChart(); }
  const end = chReplay == null ? full.length : Math.min(chReplay, full.length), data = full.slice(0, end);
  const slots = Math.max(10, Math.min(cfg.n === "all" ? data.length : cfg.n, data.length + 2));
  chOffset = Math.max(0, Math.min(chOffset, Math.max(0, data.length - Math.min(slots, data.length))));
  const e = data.length - chOffset, s = Math.max(0, e - slots), view = data.slice(s, e);
  const cl = data.map((r) => r.c);
  const lines = [];
  if (cfg.sma1.on) lines.push({ k: "sma1", cls: "i1", name: t("ch_sma") + " " + cfg.sma1.p, v: sma(cl, cfg.sma1.p) });
  if (cfg.sma2.on) lines.push({ k: "sma2", cls: "i2", name: t("ch_sma") + " " + cfg.sma2.p, v: sma(cl, cfg.sma2.p) });
  if (cfg.ema.on) lines.push({ k: "ema", cls: "i3", name: t("ch_ema") + " " + cfg.ema.p, v: ema(cl, cfg.ema.p) });
  const rs = cfg.rsi.on ? rsi(cl, cfg.rsi.p) : null;
  const draws = S.drawings[cfg.sym] || [];

  /* geometry */
  const W = 920, x0 = 8, x1 = W - 62, top = 10, ph = 320, vh = cfg.vol ? 56 : 0, rh = rs ? 96 : 0;
  const vtop = top + ph + 12, rtop = vtop + (vh ? vh + 14 : 0), H = (rs ? rtop + rh : vh ? vtop + vh : top + ph) + 22;
  let min = Infinity, max = -Infinity;
  view.forEach((r) => { min = Math.min(min, r.l); max = Math.max(max, r.h); });
  lines.forEach((ln) => { for (let i = s; i < e; i++) if (ln.v[i] != null) { min = Math.min(min, ln.v[i]); max = Math.max(max, ln.v[i]); } });
  if (!isFinite(min)) { min = 0; max = 1; }
  if (max - min < 0.02) { max += 0.5; min -= 0.5; }
  const pad = (max - min) * 0.07; min -= pad; max += pad;
  const bw = (x1 - x0) / slots, X = (i) => x0 + (i - s) * bw + bw / 2, Y = (v) => top + ((max - v) / (max - min)) * ph;
  CH = { W, H, x0, x1, top, ph, bw, s, e, slots, min, max, data, lines, rs, sym: cfg.sym };

  let g = '<defs><clipPath id="ch-clip"><rect x="' + x0 + '" y="' + top + '" width="' + (x1 - x0) + '" height="' + ph + '"/></clipPath></defs>';
  for (let i = 0; i <= 5; i++) { const v = min + ((max - min) * i) / 5, yy = Y(v); g += '<line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + yy + '" y2="' + yy + '"/><text class="c-text" x="' + (x1 + 6) + '" y="' + (yy + 4) + '">' + v.toFixed(2) + "</text>"; }
  const vmax = Math.max(1, ...view.map((r) => r.v || 0));
  view.forEach((r, k) => {
    const i = s + k, cls = r.c >= r.o ? "c-up" : "c-down", bt = Y(Math.max(r.o, r.c)), bb = Y(Math.min(r.o, r.c)), w = Math.min(16, Math.max(1, bw * 0.66));
    g += '<line class="' + cls + '" x1="' + X(i) + '" x2="' + X(i) + '" y1="' + Y(r.h) + '" y2="' + Y(r.l) + '" stroke-width="1.3"/><rect class="' + cls + '" x="' + (X(i) - w / 2) + '" y="' + bt + '" width="' + w + '" height="' + Math.max(1.2, bb - bt) + '"/>';
    if (vh) { const hh = ((r.v || 0) / vmax) * vh; g += '<rect class="' + cls + '" opacity=".45" x="' + (X(i) - w / 2) + '" y="' + (vtop + vh - hh) + '" width="' + w + '" height="' + hh + '"/>'; }
  });
  lines.forEach((ln) => {
    let d = "", pen = false;
    for (let i = s; i < e; i++) { if (ln.v[i] == null) { pen = false; continue; } d += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(ln.v[i]).toFixed(1); pen = true; }
    if (d) g += '<path class="ind ' + ln.cls + '" d="' + d + '" clip-path="url(#ch-clip)"/>';
  });
  draws.forEach((dr) => {
    if (dr.t === "h") { if (dr.p > min && dr.p < max) g += '<line class="draw" x1="' + x0 + '" x2="' + x1 + '" y1="' + Y(dr.p) + '" y2="' + Y(dr.p) + '"/><rect class="draw-tag" x="' + (x1 + 2) + '" y="' + (Y(dr.p) - 9) + '" width="58" height="18" rx="3"/><text class="draw-txt" x="' + (x1 + 6) + '" y="' + (Y(dr.p) + 4) + '">' + dr.p.toFixed(2) + "</text>"; }
    else { const m = (dr.p2 - dr.p1) / (dr.i2 - dr.i1), iEnd = s + slots, pEnd = dr.p1 + m * (iEnd - dr.i1); g += '<line class="draw" clip-path="url(#ch-clip)" x1="' + X(dr.i1) + '" y1="' + Y(dr.p1) + '" x2="' + X(iEnd) + '" y2="' + Y(pEnd) + '"/><circle class="draw-dot" clip-path="url(#ch-clip)" cx="' + X(dr.i1) + '" cy="' + Y(dr.p1) + '" r="3.5"/><circle class="draw-dot" clip-path="url(#ch-clip)" cx="' + X(dr.i2) + '" cy="' + Y(dr.p2) + '" r="3.5"/>'; }
  });
  if (chPending) g += '<circle class="draw-dot" cx="' + X(chPending.i) + '" cy="' + Y(chPending.p) + '" r="5"/>';
  if (vh) g += '<text class="c-lab" x="' + x0 + '" y="' + (vtop - 2) + '">' + esc(t("ch_vol")) + "</text>";
  if (rs) {
    const RY = (v) => rtop + ((100 - v) / 100) * rh;
    g += '<rect class="pane" x="' + x0 + '" y="' + rtop + '" width="' + (x1 - x0) + '" height="' + rh + '"/>';
    [70, 30].forEach((v) => { g += '<line class="c-grid" stroke-dasharray="4 4" x1="' + x0 + '" x2="' + x1 + '" y1="' + RY(v) + '" y2="' + RY(v) + '"/><text class="c-text" x="' + (x1 + 6) + '" y="' + (RY(v) + 4) + '">' + v + "</text>"; });
    let d = "", pen = false;
    for (let i = s; i < e; i++) { if (rs[i] == null) { pen = false; continue; } d += (pen ? "L" : "M") + X(i).toFixed(1) + " " + RY(rs[i]).toFixed(1); pen = true; }
    if (d) g += '<path class="ind i2" d="' + d + '"/>';
    g += '<text class="c-lab" x="' + (x0 + 4) + '" y="' + (rtop + 14) + '">' + esc(t("ch_rsi")) + " " + cfg.rsi.p + "</text>";
  }
  g += '<line id="ch-x" class="cross" x1="0" x2="0" y1="' + top + '" y2="' + (H - 22) + '" visibility="hidden"/><line id="ch-y" class="cross" x1="' + x0 + '" x2="' + x1 + '" y1="0" y2="0" visibility="hidden"/>';

  /* controls */
  const real = Object.keys((LIVE.history) || {}).filter((k) => (LIVE.history[k] || []).length);
  const opt = (v, label) => '<option value="' + esc(v) + '"' + (String(cfg.sym) === String(v) ? " selected" : "") + ">" + esc(label) + "</option>";
  const symSel = '<div class="field"><label for="ch-sym">' + esc(t("ch_sym")) + '</label><select id="ch-sym" data-ch="sym"><optgroup label="' + esc(t("ch_practice")) + '">' + Object.keys(PRACTICE).map((k) => opt(k, t(PRACTICE[k]))).join("") + "</optgroup>" + (real.length ? '<optgroup label="' + esc(t("ch_real")) + '">' + real.map((k) => opt(k, k + " " + symName(k) + " (" + LIVE.history[k].length + " " + t("ch_candles") + ")")).join("") + "</optgroup>" : "") + "</select></div>";
  const nSel = '<div class="field"><label for="ch-n">' + esc(t("ch_view")) + '</label><select id="ch-n" data-ch="n">' + [20, 40, 60, 100, "all"].map((v) => '<option value="' + v + '"' + (String(cfg.n) === String(v) ? " selected" : "") + ">" + (v === "all" ? esc(t("ch_all")) : v) + "</option>").join("") + "</select></div>";
  const ind = (k, label, cls) => '<label class="indbox"><input type="checkbox" id="ch-' + k + '-on" data-ch="' + k + '.on"' + (cfg[k].on ? " checked" : "") + '><i class="sw ' + cls + '"></i><span>' + esc(label) + '</span><input class="num" type="number" min="2" max="200" step="1" id="ch-' + k + '-p" data-ch="' + k + '.p" value="' + cfg[k].p + '" aria-label="' + esc(t("ch_period")) + '"></label>';
  const tool = (k, label) => '<button class="btn sm' + (chTool === k ? " on" : "") + '" data-act="ch-tool" data-tool="' + k + '" aria-pressed="' + (chTool === k) + '">' + esc(t(label)) + "</button>";
  const hint = chTool === "h" ? "ch_hint_h" : chTool === "t" ? (chPending ? "ch_hint_t2" : "ch_hint_t1") : "ch_hint_cursor";
  const hidden = full.length - end;
  const replay = chReplay == null
    ? '<button class="btn sm" data-act="ch-replay"' + (full.length < 12 ? " disabled" : "") + ">" + esc(t("ch_replay")) + '</button><span class="small muted">' + esc(t("ch_replay_p")) + "</span>"
    : '<button class="btn sm primary" data-act="ch-step" data-n="1"' + (hidden ? "" : " disabled") + ">" + esc(t("ch_next")) + '</button><button class="btn sm" data-act="ch-step" data-n="5"' + (hidden ? "" : " disabled") + ">" + esc(t("ch_next5")) + '</button><button class="btn sm" data-act="ch-replay-off">' + esc(t("ch_show_all")) + '</button><span class="tag amber num">' + hidden + "</span><span class=\"small muted\">" + esc(t("ch_hidden")) + "</span>";
  const drawList = draws.length ? draws.map((dr, i) => '<span class="chip">' + esc(dr.t === "h" ? t("ch_h_lbl") : t("ch_t_lbl")) + ' <span class="num">' + (dr.t === "h" ? dr.p.toFixed(2) : dr.p1.toFixed(2) + " → " + dr.p2.toFixed(2)) + '</span><button data-act="ch-del" data-i="' + i + '" aria-label="' + esc(t("j_del")) + '">×</button></span>').join("") : '<span class="small muted">' + esc(t("ch_none")) + "</span>";
  const note = PRACTICE[cfg.sym] ? t("ch_practice_note") : t("ch_few").replace("{n}", full.length);

  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("ch_h")) + "</h1><p>" + esc(t("ch_p")) + '</p></div><div class="stack" style="padding-block:18px">' +
    '<div class="panel stack"><div class="form-grid" style="grid-template-columns:minmax(0,2fr) minmax(0,1fr)">' + symSel + nSel + '</div><div class="row"><b class="small">' + esc(t("ch_ind")) + "</b>" + ind("sma1", t("ch_sma"), "i1") + ind("sma2", t("ch_sma"), "i2") + ind("ema", t("ch_ema"), "i3") + ind("rsi", t("ch_rsi"), "i2") + '<label class="indbox"><input type="checkbox" id="ch-vol" data-ch="vol"' + (cfg.vol ? " checked" : "") + "><span>" + esc(t("ch_vol")) + "</span></label></div>" +
    '<div class="row"><b class="small">' + esc(t("ch_tools")) + "</b>" + tool("cursor", "ch_cursor") + tool("h", "ch_hline") + tool("t", "ch_tline") + '<button class="btn sm ghost" data-act="ch-clear"' + (draws.length ? "" : " disabled") + ">" + esc(t("ch_clear")) + '</button></div><p class="small muted" id="ch-hint">' + esc(t(hint)) + "</p></div>" +
    '<div class="chartbox' + (chTool !== "cursor" ? " drawing" : "") + '"><div class="ch-read" id="ch-read">' + chartReadout(e - 1) + '</div><div class="ch-scroll"><svg id="ch-svg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(symName(cfg.sym)) + '">' + g + "</svg></div></div>" +
    '<div class="row" style="justify-content:space-between"><div class="row"><button class="btn sm" data-act="ch-pan" data-n="' + Math.max(1, Math.round(slots / 3)) + '"' + (s > 0 ? "" : " disabled") + ">" + esc(t("ch_older")) + '</button><button class="btn sm" data-act="ch-pan" data-n="-' + Math.max(1, Math.round(slots / 3)) + '"' + (chOffset > 0 ? "" : " disabled") + ">" + esc(t("ch_newer")) + '</button></div><div class="row">' + replay + "</div></div>" +
    '<div class="panel stack"><div class="row" style="justify-content:space-between"><h3 style="font-size:18px">' + esc(t("ch_draws")) + '</h3><button class="btn sm primary" data-act="ch-trade"' + (data.length ? "" : " disabled") + ">" + esc(t("ch_trade")) + '</button></div><div class="row">' + drawList + '</div></div><div class="notice">' + esc(note) + " " + esc(t("disclaimer")) + "</div></div></div>";
}

function chartReadout(i) {
  if (!CH || !CH.data[i]) return "&nbsp;";
  const r = CH.data[i], f = (v) => (v == null ? "–" : v.toFixed(2)), n = (v, cls) => '<b class="num ' + (cls || "") + '">' + v + "</b>";
  let h = '<span class="rd muted">' + (r.d ? '<span class="num">' + esc(r.d) + "</span>" : esc(t("ch_day")) + " " + n(i + 1)) + '</span><span class="rd">' + esc(t("ch_o")) + " " + n(f(r.o)) + '</span><span class="rd">' + esc(t("ch_hi")) + " " + n(f(r.h)) + '</span><span class="rd">' + esc(t("ch_lo")) + " " + n(f(r.l)) + '</span><span class="rd">' + esc(t("ch_c")) + " " + n(f(r.c), r.c >= r.o ? "pos" : "neg") + "</span>";
  CH.lines.forEach((ln) => { h += '<span class="rd ' + ln.cls + '">' + esc(ln.name) + ": " + n(f(ln.v[i])) + "</span>"; });
  if (CH.rs) h += '<span class="rd i2">' + esc(t("ch_rsi")) + ": " + n(CH.rs[i] == null ? "–" : CH.rs[i].toFixed(1)) + "</span>";
  return h;
}
function chartPoint(ev) {
  const svg = document.getElementById("ch-svg"); if (!svg || !CH) return null;
  const b = svg.getBoundingClientRect(), px = ((ev.clientX - b.left) * CH.W) / b.width, py = ((ev.clientY - b.top) * CH.H) / b.height;
  if (px < CH.x0 || px > CH.x1) return null;
  const i = CH.s + Math.floor((px - CH.x0) / CH.bw), inPrice = py >= CH.top && py <= CH.top + CH.ph;
  return { px, py, i, inPrice, p: Math.round((CH.max - ((py - CH.top) / CH.ph) * (CH.max - CH.min)) * 100) / 100 };
}
document.addEventListener("pointermove", (ev) => {
  if (!ev.target.closest || !ev.target.closest("#ch-svg")) return;
  const pt = chartPoint(ev), cx = document.getElementById("ch-x"), cy = document.getElementById("ch-y"); if (!cx) return;
  if (!pt) { cx.setAttribute("visibility", "hidden"); cy.setAttribute("visibility", "hidden"); return; }
  const snap = CH.x0 + (pt.i - CH.s) * CH.bw + CH.bw / 2;
  cx.setAttribute("x1", snap); cx.setAttribute("x2", snap); cx.setAttribute("visibility", "visible");
  if (pt.inPrice) { cy.setAttribute("y1", pt.py); cy.setAttribute("y2", pt.py); cy.setAttribute("visibility", "visible"); } else cy.setAttribute("visibility", "hidden");
  const rd = document.getElementById("ch-read");
  if (rd && CH.data[pt.i]) rd.innerHTML = chartReadout(pt.i) + (pt.inPrice && chTool !== "cursor" ? '<span class="rd muted">@ <b class="num">' + pt.p.toFixed(2) + "</b></span>" : "");
});
document.addEventListener("click", (ev) => {
  if (ev.target.closest && ev.target.closest("#ch-svg")) {
    const pt = chartPoint(ev); if (!pt || !pt.inPrice || chTool === "cursor") return;
    const cfg = chartCfg(), list = S.drawings[cfg.sym] || (S.drawings[cfg.sym] = []);
    if (chTool === "h") { list.push({ t: "h", p: pt.p }); save(); render(); }
    else if (!chPending) { chPending = { i: pt.i, p: pt.p }; render(); }
    else if (pt.i === chPending.i) toast(t("ch_same"));
    else { const a = chPending, b = { i: pt.i, p: pt.p }, first = a.i < b.i ? a : b, second = a.i < b.i ? b : a; list.push({ t: "t", i1: first.i, p1: first.p, i2: second.i, p2: second.p }); chPending = null; save(); render(); }
    return;
  }
  const el = ev.target.closest && ev.target.closest("[data-act]"); if (!el) return;
  const act = el.dataset.act; if (act.slice(0, 3) !== "ch-") return;
  const cfg = chartCfg(), full = chartData(cfg.sym);
  if (act === "ch-tool") { chTool = el.dataset.tool; chPending = null; }
  else if (act === "ch-clear") { S.drawings[cfg.sym] = []; chPending = null; save(); }
  else if (act === "ch-del") { (S.drawings[cfg.sym] || []).splice(+el.dataset.i, 1); save(); }
  else if (act === "ch-pan") chOffset = Math.max(0, chOffset + +el.dataset.n);
  else if (act === "ch-replay") { chReplay = Math.max(10, Math.floor(full.length * 0.6)); chOffset = 0; }
  else if (act === "ch-step") { chReplay = Math.min(full.length, chReplay + +el.dataset.n); chOffset = 0; }
  else if (act === "ch-replay-off") chReplay = null;
  else if (act === "ch-trade") {
    const last = CH && CH.data[CH.data.length - 1]; if (!last) return;
    draft = { symbol: cfg.sym, name: symName(cfg.sym), entry: last.c, qty: 100, lesson: "", lessonTitle: "" };
    location.hash = "journal"; return;
  }
  render();
});
document.addEventListener("change", (ev) => {
  const key = ev.target.dataset && ev.target.dataset.ch; if (!key) return;
  const cfg = chartCfg(), el = ev.target;
  if (key === "sym") { cfg.sym = el.value; chOffset = 0; chReplay = null; chPending = null; }
  else if (key === "n") { cfg.n = el.value === "all" ? "all" : +el.value; chOffset = 0; }
  else if (key === "vol") cfg.vol = el.checked;
  else { const [k, f] = key.split("."); if (f === "on") cfg[k].on = el.checked; else cfg[k].p = Math.max(2, Math.min(200, parseInt(el.value, 10) || cfg[k].p)); }
  save(); render();
});
