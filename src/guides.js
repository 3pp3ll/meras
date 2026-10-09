/* ===== مِراس: الشروحات + رسومات الدروس الإضافية ===== */
Object.assign(UI, {
  nav_guides: ["الشروحات", "Guides"],
  gd_h: ["الشروحات", "Guides"],
  gd_p: ["أدلة مصوّرة لأدوات المنصة. كل شرح خطوات قصيرة تطبقها وأنت تقرأ.", "Illustrated guides to the platform's tools. Each is a set of short steps you apply as you read."],
  gd_steps: ["خطوات", "steps"], gd_open: ["افتح الشرح", "Open guide"], gd_all: ["كل الشروحات", "All guides"],
  gd_go_chart: ["افتح الشارت", "Open the chart"], gd_go_journal: ["افتح السجل", "Open the journal"],
  fg_doji: ["دوجي", "Doji"], fg_hammer: ["المطرقة", "Hammer"], fg_engulf: ["الابتلاع الصاعد", "Bullish engulfing"],
  fg_target: ["الهدف", "Target"], fg_entry: ["الدخول", "Entry"], fg_stop: ["وقف الخسارة", "Stop-loss"],
  fg_reward: ["العائد المتوقع: 4 ريال", "Expected reward: SAR 4"], fg_risk: ["المخاطرة: 2 ريال", "Risk: SAR 2"], fg_ratio: ["النسبة 1 إلى 2", "Ratio 1 to 2"]
});

/* ----- lesson figures ----- */
function patternsFig() {
  const Y = (v) => 190 - v * 1.6;
  const cd = (x, o, h, l, c, w) => { const cls = c >= o ? "c-up" : "c-down", t1 = Y(Math.max(o, c)), b1 = Y(Math.min(o, c)); return '<line class="' + cls + '" x1="' + x + '" x2="' + x + '" y1="' + Y(h) + '" y2="' + Y(l) + '" stroke-width="2"/><rect class="' + cls + '" x="' + (x - w / 2) + '" y="' + t1 + '" width="' + w + '" height="' + Math.max(2.5, b1 - t1) + '" rx="1.5"/>'; };
  const lab = (x, k) => '<text class="c-label" x="' + x + '" y="222" text-anchor="middle" font-weight="600">' + esc(t(k)) + "</text>";
  return '<svg viewBox="0 0 640 234" role="img">' +
    cd(70, 62, 70, 52, 56, 22) + cd(110, 55, 86, 26, 55.6, 22) + lab(92, "fg_doji") +
    cd(270, 70, 74, 58, 62, 22) + cd(310, 60, 63, 20, 62, 22) + lab(292, "fg_hammer") +
    cd(480, 62, 66, 44, 48, 20) + cd(526, 44, 82, 40, 78, 30) + lab(504, "fg_engulf") + "</svg>";
}
function rrFig() {
  const Y = (p) => 196 - (p - 47) * 22, x0 = 40, x1 = 400;
  const line = (p, cls, k, v) => '<line class="' + cls + '" x1="' + x0 + '" x2="' + x1 + '" y1="' + Y(p) + '" y2="' + Y(p) + '"/><text class="c-label" x="' + (x1 + 12) + '" y="' + (Y(p) + 5) + '" text-anchor="start">' + esc(t(k)) + " " + v + "</text>";
  return '<svg viewBox="0 0 640 220" role="img"><rect x="' + x0 + '" y="' + Y(54) + '" width="' + (x1 - x0) + '" height="' + (Y(50) - Y(54)) + '" fill="var(--up-soft)"/><rect x="' + x0 + '" y="' + Y(50) + '" width="' + (x1 - x0) + '" height="' + (Y(48) - Y(50)) + '" fill="var(--down-soft)"/>' +
    line(54, "c-sup", "fg_target", "54.00") + line(50, "c-trend", "fg_entry", "50.00") + line(48, "c-res", "fg_stop", "48.00") +
    '<text class="c-label" x="' + (x0 + 14) + '" y="' + (Y(52) + 5) + '" text-anchor="start">' + esc(t("fg_reward")) + '</text><text class="c-label" x="' + (x0 + 14) + '" y="' + (Y(49) + 5) + '" text-anchor="start">' + esc(t("fg_risk")) + '</text><text class="c-label" x="' + (x1 + 12) + '" y="' + (Y(52) + 5) + '" text-anchor="start" font-weight="600">' + esc(t("fg_ratio")) + "</text></svg>";
}

/* ----- small chart used as a guide illustration ----- */
function miniChart(o) {
  const all = practiceSeries(o.sym), s = o.from, e = o.from + o.n, d = all.slice(s, e), W = 400, H = 190, x0 = 6, x1 = W - 8, top = 8, pane = o.pane ? 46 : 0, ph = H - 16 - (pane ? pane + 8 : 0), ptop = top + ph + 8;
  const cl = all.map((r) => r.c), ma = (o.sma || []).map((p) => sma(cl, p));
  let min = Infinity, max = -Infinity; d.forEach((r) => { min = Math.min(min, r.l); max = Math.max(max, r.h); });
  const pad = (max - min) * 0.08; min -= pad; max += pad;
  const bw = (x1 - x0) / o.n, X = (i) => x0 + (i - s) * bw + bw / 2, Y = (v) => top + ((max - v) / (max - min)) * ph;
  const shown = o.hide ? o.n - o.hide : o.n; let g = "";
  d.forEach((r, k) => {
    if (k >= shown) return;
    const i = s + k, cls = r.c >= r.o ? "c-up" : "c-down", a = Y(Math.max(r.o, r.c)), b = Y(Math.min(r.o, r.c)), w = bw * 0.62;
    g += '<line class="' + cls + '" x1="' + X(i) + '" x2="' + X(i) + '" y1="' + Y(r.h) + '" y2="' + Y(r.l) + '" stroke-width="1.1"/><rect class="' + cls + '" x="' + (X(i) - w / 2) + '" y="' + a + '" width="' + w + '" height="' + Math.max(1.2, b - a) + '"/>';
  });
  ma.forEach((v, k) => { let p = "", pen = false; for (let i = s; i < s + shown; i++) { if (v[i] == null) { pen = false; continue; } p += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(v[i]).toFixed(1); pen = true; } g += '<path class="ind i' + (k + 1) + '" d="' + p + '"/>'; });
  (o.h || []).forEach((p) => { g += '<line class="draw" x1="' + x0 + '" x2="' + x1 + '" y1="' + Y(p) + '" y2="' + Y(p) + '"/>'; });
  if (o.t) { const a = all[o.t[0]], b = all[o.t[1]], m = (b.l - a.l) / (o.t[1] - o.t[0]); g += '<line class="draw" x1="' + X(o.t[0]) + '" y1="' + Y(a.l) + '" x2="' + X(e - 1) + '" y2="' + Y(a.l + m * (e - 1 - o.t[0])) + '"/><circle class="draw-dot" cx="' + X(o.t[0]) + '" cy="' + Y(a.l) + '" r="4"/><circle class="draw-dot" cx="' + X(o.t[1]) + '" cy="' + Y(b.l) + '" r="4"/>'; }
  if (o.fib) {
    const a = all[o.fib[0]].l, b = all[o.fib[1]].h, xa = X(o.fib[0]) - bw / 2;
    [0, 0.382, 0.5, 0.618, 1].forEach((r) => { const pr = b - (b - a) * r; g += '<line class="fib' + (r === 0.5 || r === 0.618 ? " key" : "") + '" x1="' + xa + '" x2="' + x1 + '" y1="' + Y(pr) + '" y2="' + Y(pr) + '"/><text class="fib-txt" x="' + (xa + 4) + '" y="' + (Y(pr) - 3) + '">' + (r * 100).toFixed(1).replace(".0", "") + "%</text>"; });
  }
  if (o.pane === "vol") { const vm = Math.max(...d.map((r) => r.v)); d.forEach((r, k) => { const hh = (r.v / vm) * pane, w = bw * 0.62; g += '<rect class="' + (r.c >= r.o ? "c-up" : "c-down") + '" opacity=".5" x="' + (X(s + k) - w / 2) + '" y="' + (ptop + pane - hh) + '" width="' + w + '" height="' + hh + '"/>'; }); }
  if (o.bb) {
    const b = bollinger(cl, 20, 2); let up = "", lo = "", pen = false;
    for (let i = s; i < e; i++) { if (b.up[i] == null) continue; up += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(b.up[i]).toFixed(1); lo += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(b.lo[i]).toFixed(1); pen = true; }
    g += '<path class="ind i4 thin" d="' + up + '"/><path class="ind i4 thin" d="' + lo + '"/>';
  }
  if (o.pane === "macd") {
    const m = macd(cl, 12, 26, 9); let amax = 0; for (let i = s; i < e; i++) [m.line[i], m.sig[i]].forEach((x) => { if (x != null) amax = Math.max(amax, Math.abs(x)); });
    amax = amax || 1; const MY = (v) => ptop + pane / 2 - (v / amax) * (pane / 2 - 3);
    g += '<rect class="pane" x="' + x0 + '" y="' + ptop + '" width="' + (x1 - x0) + '" height="' + pane + '"/><line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + MY(0) + '" y2="' + MY(0) + '"/>';
    for (let i = s; i < e; i++) if (m.hist[i] != null) { const a = MY(0), b2 = MY(m.hist[i]); g += '<rect class="' + (m.hist[i] >= 0 ? "c-up" : "c-down") + '" opacity=".5" x="' + (X(i) - bw * 0.25) + '" y="' + Math.min(a, b2) + '" width="' + bw * 0.5 + '" height="' + Math.max(0.6, Math.abs(b2 - a)) + '"/>'; }
    [["line", "i2"], ["sig", "i1"]].forEach(([k, c]) => { let d = "", pen = false; for (let i = s; i < e; i++) { if (m[k][i] == null) { pen = false; continue; } d += (pen ? "L" : "M") + X(i).toFixed(1) + " " + MY(m[k][i]).toFixed(1); pen = true; } g += '<path class="ind ' + c + ' thin" d="' + d + '"/>'; });
  }
  if (o.pane === "rsi") {
    const rs = rsi(cl, 14), RY = (v) => ptop + ((100 - v) / 100) * pane; let pth = "", pen = false;
    g += '<rect class="pane" x="' + x0 + '" y="' + ptop + '" width="' + (x1 - x0) + '" height="' + pane + '"/><line class="c-grid" stroke-dasharray="3 3" x1="' + x0 + '" x2="' + x1 + '" y1="' + RY(70) + '" y2="' + RY(70) + '"/><line class="c-grid" stroke-dasharray="3 3" x1="' + x0 + '" x2="' + x1 + '" y1="' + RY(30) + '" y2="' + RY(30) + '"/>';
    for (let i = s; i < e; i++) { if (rs[i] == null) { pen = false; continue; } pth += (pen ? "L" : "M") + X(i).toFixed(1) + " " + RY(rs[i]).toFixed(1); pen = true; }
    g += '<path class="ind i2" d="' + pth + '"/>';
  }
  if (o.cross != null) g += '<line class="cross" x1="' + X(o.cross) + '" x2="' + X(o.cross) + '" y1="' + top + '" y2="' + (top + ph) + '"/>';
  if (o.hide) g += '<rect class="pane" x="' + (X(s + shown) - bw / 2) + '" y="' + top + '" width="' + (x1 - X(s + shown) + bw / 2) + '" height="' + ph + '"/><text class="c-label" x="' + (X(s + shown) + (x1 - X(s + shown)) / 2) + '" y="' + (top + ph / 2) + '" text-anchor="middle" style="font-size:34px;font-weight:600">?</text>';
  return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + g + "</svg>";
}
const lowIn = (sym, a, b) => { const d = practiceSeries(sym); let k = a; for (let i = a; i < b; i++) if (d[i].l < d[k].l) k = i; return k; };
const mock = (rows) => '<div class="mock">' + rows.map((r) => '<div class="' + (r[2] || "") + '"><span>' + esc(L(r[0])) + "</span><b>" + esc(typeof r[1] === "string" ? r[1] : L(r[1])) + "</b></div>").join("") + "</div>";

const GUIDES = [
  { id: "chart", go: ["#chart", "gd_go_chart"], title: ["الشارت من الصفر", "The chart from scratch"],
    intro: ["من أول نظرة على الشموع إلى صفقة مسجلة في سجلك، في سبع خطوات.", "From a first look at the candles to a trade logged in your journal, in seven steps."],
    steps: [
      { h: ["اختر السهم وعدد الشموع", "Pick the share and how many candles"], p: ["ابدأ بسهم تدريبي. عدد الشموع يحدد كم ترجع ورا: 20 تشوف التفاصيل، و100 تشوف الصورة الكبيرة. ابدأ دائماً بالصورة الكبيرة ثم قرّب.", "Start with a practice share. The candle count sets how far back you look: 20 shows detail, 100 shows the big picture. Always start wide, then zoom in."], fig: () => miniChart({ sym: "TRN-A", from: 60, n: 60 }) },
      { h: ["اقرأ الشمعة", "Read a candle"], p: ["مرّر على أي شمعة ويطلع لك فوق الشارت افتتاحها وأعلاها وأدناها وإغلاقها. على الجوال اضغط على الشمعة. هذي أول عادة: لا تحكم على شمعة قبل ما تقرأ أرقامها.", "Move over any candle and its open, high, low and close appear above the chart. On a phone, tap the candle. This is the first habit: do not judge a candle before reading its numbers."], fig: () => miniChart({ sym: "TRN-A", from: 90, n: 30, cross: 108 }) },
      { h: ["شغّل مؤشر وغيّر فترته", "Switch on an indicator and change its period"], p: ["علّم على المتوسط البسيط واكتب الفترة اللي تبيها في الخانة جنبه. جرّب 5 ثم 20 على نفس الشارت وشوف الفرق: القصير يلحق السعر، والطويل يرسم الاتجاه.", "Tick the simple average and type the period you want in the box beside it. Try 5 then 20 on the same chart and see the difference: the short one chases price, the long one draws the trend."], fig: () => miniChart({ sym: "TRN-A", from: 60, n: 60, sma: [5, 20] }) },
      { h: ["ارسم الدعم والمقاومة", "Draw support and resistance"], p: ["اختر \"خط أفقي\" واضغط عند المستوى اللي ارتد منه السعر أكثر من مرة. خط تحت للدعم وخط فوق للمقاومة. إذا غلطت، احذف الخط من قائمة رسوماتك تحت الشارت.", "Choose \"Horizontal line\" and tap at the level price bounced from more than once. One line below for support, one above for resistance. If you slip, delete the line from your drawings list under the chart."], fig: () => { const d = practiceSeries("TRN-B").slice(70, 130), q = (a, f) => a.slice().sort((x, y) => x - y)[Math.floor(a.length * f)]; return miniChart({ sym: "TRN-B", from: 70, n: 60, h: [q(d.map((r) => r.l), 0.06), q(d.map((r) => r.h), 0.94)] }); } },
      { h: ["ارسم خط الاتجاه", "Draw the trend line"], p: ["اختر \"خط اتجاه\" واضغط على قاع، ثم على قاع أعلى منه بعده. الخط يمتد لحاله لليمين. طول ما السعر فوقه، الاتجاه الصاعد قائم.", "Choose \"Trend line\" and tap a low, then a higher low after it. The line extends to the right by itself. While price stays above it, the uptrend stands."], fig: () => { const a = lowIn("TRN-A", 100, 112), b = lowIn("TRN-A", 118, 132); return miniChart({ sym: "TRN-A", from: 95, n: 60, t: [a, b] }); } },
      { h: ["قارن رسمك بالقراءة الآلية", "Compare your drawing with the automatic reading"], p: ["ارسم أنت أول، ثم اضغط \"اقرأ الشارت\". يطلع لك وصف للاتجاه والمتوسطات والزخم والمستويات، وزر يرسمها على الشارت بلون مختلف. الفرق بين رسمك ورسمها هو درسك.", "Draw first, then press \"Read the chart\". You get a description of trend, averages, momentum and levels, and a button that draws them in a different colour. The gap between your drawing and its drawing is your lesson."], fig: () => mock([[["الاتجاه", "Trend"], ["صاعد", "Up"]], [["RSI 14", "RSI 14"], "64.2"], [["أقرب دعم", "Nearest support"], "51.80"], [["أقرب مقاومة", "Nearest resistance"], "57.40"]]) },
      { h: ["توقّع ثم اكشف، ثم سجّل", "Predict, reveal, then log"], p: ["\"وضع التوقع\" يخفي آخر الشموع. قرر: طالع ولا نازل، وليش؟ ثم اكشف شمعة شمعة. ولما تلقى فرصة تقنعك، اضغط \"سجّل صفقة من الشارت\" واكتب سببك في السجل.", "\"Prediction mode\" hides the latest candles. Decide: up or down, and why? Then reveal candle by candle. When you find a setup that convinces you, press \"Log a trade from the chart\" and write your reason in the journal."], fig: () => miniChart({ sym: "TRN-C", from: 80, n: 60, hide: 22 }) }
    ] },
  { id: "journal", go: ["#journal", "gd_go_journal"], title: ["سجل التداول: من الفكرة إلى المراجعة", "The trading journal: from idea to review"],
    intro: ["السجل هو اللي يحول التداول من مزاج إلى مهارة. خمس خطوات لكل صفقة.", "The journal is what turns trading from mood into skill. Five steps for every trade."],
    steps: [
      { h: ["اكتب السبب قبل ما تدخل", "Write the reason before you enter"], p: ["جملة وحدة تكفي: \"ارتداد من دعم 48 مع RSI تحت 30\". إذا ما قدرت تكتب السبب، فأنت ما عندك صفقة، عندك إحساس.", "One sentence is enough: \"Bounce from support at 48 with RSI below 30\". If you cannot write the reason, you do not have a trade, you have a feeling."], fig: () => mock([[["الرمز", "Symbol"], "2222"], [["الكمية", "Quantity"], "100"], [["سعر الدخول", "Entry"], "50.00"], [["سبب الدخول", "Reason"], ["ارتداد من الدعم", "Bounce from support"]]]) },
      { h: ["حدد الوقف والهدف", "Set the stop and the target"], p: ["وقف الخسارة تحت سعر الدخول: السعر اللي تعترف عنده إن فكرتك غلط. الهدف فوقه: المكان اللي تتوقع توصل له. إذا العائد أقل من ضعف المخاطرة، الصفقة ما تستاهل. والسجل يرفض وقف فوق سعر الدخول.", "The stop-loss goes below the entry: the price at which you admit the idea was wrong. The target goes above: where you expect it to reach. If the reward is less than twice the risk, the trade is not worth it. The journal rejects a stop above the entry."], fig: rrFig },
      { h: ["سجّل الخروج واكتب وش تعلمت", "Record the exit and what you learned"], p: ["لما تطلع اضغط \"إغلاق\" واكتب سعر الخروج. خانة \"وش تعلمت\" أهم خانة في السجل، خصوصاً في الصفقة الخاسرة: هل الفكرة غلط، ولا التنفيذ؟", "When you leave, press \"Close\" and enter the exit price. The \"What did you learn\" box is the most important in the journal, especially on a losing trade: was the idea wrong, or the execution?"], fig: () => mock([[["سعر الخروج", "Exit"], "53.20"], [["الربح/الخسارة", "P/L"], "+320.00", "pos"], [["النسبة", "Return"], "+6.40%", "pos"], [["وش تعلمت", "Lesson"], ["طلعت قبل الهدف", "Left before target"]]]) },
      { h: ["اقرأ أرقامك", "Read your numbers"], p: ["فوق الجدول أربعة أرقام. نسبة الصفقات الرابحة لحالها تخدع: تقدر تربح 40% من صفقاتك وتطلع رابح إذا أرباحك ضعف خسايرك. الرقم اللي يحكم هو الصافي.", "Four numbers sit above the table. Win rate alone misleads: you can win 40% of your trades and come out ahead if your wins are twice your losses. The number that rules is the net."], fig: () => mock([[["عدد الصفقات", "Trades"], "10"], [["نسبة الرابحة", "Win rate"], "40%"], [["صافي الربح/الخسارة", "Net P/L"], "+400.00", "pos"]]) },
      { h: ["صدّر وراجع كل أسبوع", "Export and review weekly"], p: ["زر \"تصدير Excel\" يعطيك ملف بكل صفقاتك. احفظه في مجلدك، وراجعه نهاية كل أسبوع: أي سبب دخول تكرر في الرابحة؟ وأي واحد تكرر في الخاسرة؟", "\"Export to Excel\" gives you a file of all your trades. Save it in your folder and review it at the end of each week: which entry reason recurs in the winners? And which in the losers?"], fig: () => mock([[["meras-journal.xlsx", "meras-journal.xlsx"], ["14 عمود", "14 columns"]], [["المراجعة", "Review"], ["نهاية كل أسبوع", "End of each week"]]]) }
    ] }
];

function pageGuides() {
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("gd_h")) + "</h1><p>" + esc(t("gd_p")) + '</p></div><div class="grid3" style="padding-block:20px">' +
    GUIDES.map((g) => '<a class="panel guide-card" href="#g-' + g.id + '"><div class="guide-thumb">' + g.steps[Math.min(2, g.steps.length - 1)].fig() + '</div><span class="tag amber">' + g.steps.length + " " + esc(t("gd_steps")) + "</span><h3>" + esc(L(g.title)) + '</h3><p class="muted">' + esc(L(g.intro)) + "</p></a>").join("") +
    '<a class="panel guide-card" href="#g-indicators"><div class="guide-thumb">' + fibFig() + '</div><span class="tag amber">' + esc(t("il_count")) + "</span><h3>" + esc(t("il_title")) + '</h3><p class="muted">' + esc(t("il_intro")) + "</p></a></div></div>";
}
function pageGuide(id) {
  if (id === "indicators") return pageIndicators();
  const g = GUIDES.find((x) => x.id === id); if (!g) return pageGuides();
  return '<div class="wrap"><div class="guide-head"><div class="crumbs"><a href="#guides">' + esc(t("gd_h")) + "</a> / " + esc(L(g.title)) + "</div><h1>" + esc(L(g.title)) + "</h1><p>" + esc(L(g.intro)) + '</p></div><ol class="guide-steps">' +
    g.steps.map((s, i) => '<li><div class="gs-text"><span class="gs-n num">' + (i + 1) + "</span><h2>" + esc(L(s.h)) + "</h2><p>" + esc(L(s.p)) + '</p></div><div class="gs-fig">' + s.fig() + "</div></li>").join("") +
    '</ol><div class="row" style="justify-content:space-between;padding-block:8px 40px"><a class="btn" href="#guides">' + esc(t("gd_all")) + '</a><a class="btn primary" href="' + g.go[0] + '">' + esc(t(g.go[1])) + "</a></div></div>";
}
