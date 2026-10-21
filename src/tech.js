/* ===== مِراس: التحليل الفني =====
   نفس فكرة صفحة "التحليل الفني" في TradingView: 3 عدادات (المذبذبات، الملخص، المتوسطات المتحركة)،
   جداول المؤشرات مع الإشارة، ونقاط الارتكاز. البيانات من technicals.json في مستودعك الخاص،
   يحدثها سكربت (scripts/fetch_technicals.py) 3 مرات في أيام التداول. الأسهم تنضاف في techlist.json. */
Object.assign(UI, {
  tab_tech: ["التحليل الفني", "Technicals"],
  tc_p: ["ملخص فني لكل سهم تتابعه، بنفس طريقة TradingView: 26 مؤشر، كل واحد يعطي شراء أو محايد أو بيع، والعداد يجمعها. هذا وصف آلي لحالة السعر، مو توصية.", "A technical summary for every share you follow, the TradingView way: 26 indicators, each saying buy, neutral or sell, and the gauge adds them up. It describes the price mechanically; it is not a recommendation."],
  tc_osc: ["المذبذبات", "Oscillators"], tc_sum: ["الملخص", "Summary"], tc_ma: ["المتوسطات المتحركة", "Moving averages"],
  tc_ema: ["المتوسط المتحرك الأسي", "Exponential Moving Average"], tc_sma: ["المتوسط المتحرك البسيط", "Simple Moving Average"],
  tc_d: ["يومي", "Daily"], tc_w: ["أسبوعي", "Weekly"],
  tc_sb: ["شراء قوي", "Strong buy"], tc_b: ["شراء", "Buy"], tc_n: ["محايد", "Neutral"], tc_s: ["بيع", "Sell"], tc_ss: ["بيع قوي", "Strong sell"],
  tc_name: ["الاسم", "Name"], tc_val: ["القيمة", "Value"], tc_act: ["الإشارة", "Action"], tc_mean: ["يعني إيش؟", "What it means"],
  tc_piv: ["نقاط الارتكاز (شهرية)", "Pivot points (monthly)"], tc_piv_p: ["مستويات دعم (S) ومقاومة (R) محسوبة من أعلى وأدنى وإغلاق الشهر الماضي. P هي النقطة الوسط. كثير من المتداولين يراقبونها، فالسعر يتفاعل عندها أحياناً.", "Support (S) and resistance (R) levels worked out from last month's high, low and close. P is the middle. Many traders watch them, so price sometimes reacts there."],
  tc_all: ["أسهمي بنظرة وحدة", "All my shares at a glance"], tc_close: ["السعر", "Price"], tc_chg: ["التغير", "Change"],
  tc_add: ["أضف سهم (الرمز)", "Add a share (code)"], tc_add_btn: ["أضف", "Add"], tc_rm: ["شيل هذا السهم من القائمة", "Remove this share"],
  tc_added: ["انضاف. يظهر تحليله بعد دقيقتين تقريباً (بعد ما يشتغل السكربت).", "Added. Its analysis appears in about two minutes, once the script runs."], tc_removed: ["انشال من القائمة", "Removed"],
  tc_bad: ["اكتب رمز من 4 أرقام، مثل 1120", "Enter a 4-digit code, like 1120"],
  tc_updated: ["آخر تحديث {d} · {n} سهم", "Updated {d} · {n} shares"],
  tc_sample: ["هذي بيانات نموذجية لسهم واحد. التحليل الحقيقي لكل أسهمك يظهر في النسخة المنشورة بعد ربط مستودعك.", "This is sample data for one share. The real analysis for all your shares appears in the published version once your repository is linked."],
  tc_how_h: ["كيف تقرأ الصفحة؟", "How to read this page"],
  tc_how: ["المذبذبات تقيس الزخم: هل السهم مبالغ في بيعه أو شرائه. المتوسطات تقيس الاتجاه: لو السعر فوق المتوسط فهي \"شراء\". الملخص يجمع الاثنين. الأسبوعي أبطأ وأهم للمستثمر، واليومي للمضارب. لما الأسبوعي واليومي يتفقون على شراء تكون الصورة أوضح، وهذا نفس تأكيد الفريمات في Shark PRO.", "Oscillators measure momentum: is the share oversold or overbought. Moving averages measure trend: price above the average counts as \"buy\". The summary combines both. Weekly is slower and matters more to an investor; daily is for traders. When weekly and daily agree on buy, the picture is clearer, which is the same timeframe confirmation Shark PRO uses."],
  tc_warn_h: ["انتبه", "Careful"],
  tc_warn: ["\"بيع قوي\" على المتوسطات غالباً معناها إن السهم نازل من فترة، مو إنه لازم تبيع. للمستثمر الطويل، النزول ممكن يكون فرصة شراء بسعر أقل لو الشركة نفسها ما تغيرت. العدادات ما تعرف شي عن أرباح الشركة أو توزيعاتها.", "\"Strong sell\" on the moving averages usually means the share has been falling for a while, not that you must sell. For a long-term investor a decline can be a chance to buy cheaper if the company itself hasn't changed. The gauges know nothing about the company's earnings or dividends."],
  tc_src: ["المصدر: شاشة أسهم TradingView، يتحدث 3 مرات في أيام التداول (10:30 ص، 1 م، 3:20 م). الإشارات بنفس قواعد TradingView المعروفة، وممكن تختلف شوي عن الموقع.", "Source: the TradingView stock screener, refreshed 3 times on trading days (10:30, 13:00, 15:20). Signals follow TradingView's published rules and may differ slightly from the site."]
});

const TC_NAMES = {
  rsi: [["مؤشر القوة النسبية (14)", "Relative Strength Index (14)"], ["تحت 30 مبالغ في بيعه، فوق 70 مبالغ في شرائه", "Below 30 oversold, above 70 overbought"]],
  stoch: [["ستوكاستيك ‎%K (14، 3، 3)", "Stochastic %K (14, 3, 3)"], ["أين الإغلاق بين أعلى وأدنى 14 يوم", "Where the close sits in the 14-day range"]],
  cci: [["مؤشر قناة السلع (20)", "Commodity Channel Index (20)"], ["بعد السعر عن متوسطه. تحت ‎-100 ضعف زائد", "Distance from the average. Below -100 is stretched low"]],
  adx: [["مؤشر متوسط الاتجاه (14)", "Average Directional Index (14)"], ["قوة الاتجاه. فوق 20 يعني فيه اتجاه واضح", "Trend strength. Above 20 means a clear trend"]],
  ao: [["المذبذب الرائع", "Awesome Oscillator"], ["زخم قصير مقابل طويل", "Short versus long momentum"]],
  mom: [["الزخم (10)", "Momentum (10)"], ["الفرق عن سعر قبل 10 أيام", "Change from 10 days ago"]],
  macd: [["الماكد (12، 26)", "MACD Level (12, 26)"], ["فوق خط الإشارة شراء، تحته بيع", "Above its signal line buy, below sell"]],
  stochrsi: [["ستوكاستيك RSI السريع", "Stochastic RSI Fast (3, 3, 14, 14)"], ["نسخة أسرع وأحسّ من RSI", "A faster, more sensitive RSI"]],
  wr: [["ويليامز ‎%R (14)", "Williams Percent Range (14)"], ["قريب من ‎-100 مبالغ في بيعه", "Near -100 is oversold"]],
  bbp: [["قوة الثيران والدببة", "Bull Bear Power"], ["مين أقوى: المشترين أو البايعين", "Who is stronger: buyers or sellers"]],
  uo: [["المذبذب النهائي (7، 14، 28)", "Ultimate Oscillator (7, 14, 28)"], ["زخم على 3 فترات مع بعض", "Momentum over three periods combined"]],
  ichimoku: [["خط أساس إيشيموكو (9، 26، 52، 26)", "Ichimoku Base Line (9, 26, 52, 26)"]],
  vwma: [["المتوسط المرجح بالحجم (20)", "Volume Weighted Moving Average (20)"]],
  hma: [["متوسط هال (9)", "Hull Moving Average (9)"]]
};
const tcName = (k) => {
  const m = /^(ema|sma)(\d+)$/.exec(k);
  if (m) return [(m[1] === "ema" ? t("tc_ema") : t("tc_sma")) + " (" + m[2] + ")", ""];
  const n = TC_NAMES[k]; return n ? [L(n[0]), n[1] ? L(n[1]) : ""] : [k, ""];
};
const tcLabel = (v) => (v == null ? "tc_n" : v >= 0.5 ? "tc_sb" : v >= 0.1 ? "tc_b" : v > -0.1 ? "tc_n" : v > -0.5 ? "tc_s" : "tc_ss");
const tcCls = (v) => (v == null ? "" : v >= 0.1 ? "up" : v <= -0.1 ? "down" : "");
const tcAct = (a) => (a == null ? '<span class="muted">–</span>' : '<span class="tag ' + (a > 0 ? "up" : a < 0 ? "down" : "") + '">' + esc(t(a > 0 ? "tc_b" : a < 0 ? "tc_s" : "tc_n")) + "</span>");

/* بيانات نموذجية لسهم واحد (الراجحي، 13 أكتوبر 2026) للمعاينة قبل الربط. */
const TECH_SAMPLE = {"fetched_at":null,"stocks":[{"s":"1120","tf":{"1D":{"close":62.05,"change":0.161,"all":-0.355,"osc":0.091,"ma":-0.8,"osc_rows":[{"k":"rsi","v":36.456,"a":0},{"k":"stoch","v":7.939,"a":1},{"k":"cci","v":-114.818,"a":1},{"k":"adx","v":22.843,"a":0},{"k":"ao","v":-2.762,"a":0},{"k":"mom","v":-1.2,"a":1},{"k":"macd","v":-0.93,"a":-1},{"k":"stochrsi","v":31.358,"a":0},{"k":"wr","v":-91.667,"a":1},{"k":"bbp","v":-2.09,"a":0},{"k":"uo","v":31.165,"a":0}],"ma_rows":[{"k":"ema10","v":62.873,"a":-1},{"k":"sma10","v":62.905,"a":-1},{"k":"ema20","v":63.667,"a":-1},{"k":"sma20","v":63.935,"a":-1},{"k":"ema30","v":64.151,"a":-1},{"k":"sma30","v":64.732,"a":-1},{"k":"ema50","v":64.689,"a":-1},{"k":"sma50","v":65.106,"a":-1},{"k":"ema100","v":65.475,"a":-1},{"k":"sma100","v":65.433,"a":-1},{"k":"ema200","v":66.019,"a":-1},{"k":"sma200","v":67.049,"a":-1},{"k":"ichimoku","v":64.5,"a":0},{"k":"vwma","v":63.938,"a":-1},{"k":"hma","v":61.791,"a":1}],"osc_n":{"buy":4,"neutral":6,"sell":1},"ma_n":{"buy":1,"neutral":1,"sell":13},"pivots":{"classic":{"S3":55.033,"S2":59.933,"S1":61.617,"P":64.833,"R1":66.517,"R2":69.733,"R3":74.633},"fibonacci":{"S3":59.933,"S2":61.805,"S1":62.962,"P":64.833,"R1":66.705,"R2":67.862,"R3":69.733},"camarilla":{"S3":61.953,"S2":62.402,"S1":62.851,"P":64.833,"R1":63.749,"R2":64.198,"R3":64.647},"woodie":{"S3":56.0,"S2":59.575,"S1":60.9,"P":64.475,"R1":65.8,"R2":69.375,"R3":70.7},"demark":{"S1":60.775,"P":64.412,"R1":65.675}}},"1W":{"close":62.05,"change":-0.401,"all":-0.403,"osc":-0.273,"ma":-0.533,"osc_rows":[{"k":"rsi","v":37.195,"a":0},{"k":"stoch","v":6.815,"a":0},{"k":"cci","v":-150.422,"a":0},{"k":"adx","v":18.571,"a":0},{"k":"ao","v":-2.67,"a":0},{"k":"mom","v":-2.5,"a":-1},{"k":"macd","v":-1.08,"a":-1},{"k":"stochrsi","v":25.629,"a":0},{"k":"wr","v":-96.774,"a":0},{"k":"bbp","v":-4.158,"a":0},{"k":"uo","v":19.868,"a":-1}],"ma_rows":[{"k":"ema10","v":63.988,"a":-1},{"k":"sma10","v":64.6,"a":-1},{"k":"ema20","v":64.939,"a":-1},{"k":"sma20","v":64.968,"a":-1},{"k":"ema30","v":65.474,"a":-1},{"k":"sma30","v":66.292,"a":-1},{"k":"ema50","v":65.722,"a":-1},{"k":"sma50","v":66.753,"a":-1},{"k":"ema100","v":64.366,"a":-1},{"k":"sma100","v":65.686,"a":-1},{"k":"ema200","v":59.917,"a":1},{"k":"sma200","v":59.082,"a":1},{"k":"ichimoku","v":67.6,"a":0},{"k":"vwma","v":65.271,"a":-1},{"k":"hma","v":61.591,"a":1}],"osc_n":{"buy":0,"neutral":8,"sell":3},"ma_n":{"buy":3,"neutral":1,"sell":11},"pivots":{"classic":{"S3":32.733,"S2":49.533,"S1":57.333,"P":66.333,"R1":74.133,"R2":83.133,"R3":99.933},"fibonacci":{"S3":49.533,"S2":55.951,"S1":59.916,"P":66.333,"R1":72.751,"R2":76.716,"R3":83.133},"camarilla":{"S3":60.513,"S2":62.053,"S1":63.593,"P":66.333,"R1":66.673,"R2":68.213,"R3":69.753},"woodie":{"S3":39.8,"S2":49.167,"S1":56.6,"P":65.967,"R1":73.4,"R2":82.767,"R3":90.2},"demark":{"S1":61.833,"P":68.583,"R1":78.633}}}},"name":"الراجحي"}]};
const TECH_KEY = "meras.tech";
let TECH = null, TECHL = null, techLoading = false;
try { TECH = JSON.parse(localStorage.getItem(TECH_KEY) || "null"); } catch (e) {}
const techCfg = () => { if (!S.tech) S.tech = {}; if (!S.tech.tf) S.tech.tf = "1D"; return S.tech; };
const techList = () => (TECH && Array.isArray(TECH.stocks) && TECH.stocks.length ? TECH.stocks : TECH_SAMPLE.stocks);
const techCan = () => typeof HOSTED !== "undefined" && HOSTED && CFG.token;
function techPrice(sym) { const s = (TECH && TECH.stocks || []).find((x) => x.s === sym); return s && s.tf && s.tf["1D"] ? s.tf["1D"].close : null; }

async function loadTech() {
  if (techLoading || !techCan()) return;
  techLoading = true;
  try {
    const f = await readJson("technicals.json");
    if (f && f.data && Array.isArray(f.data.stocks)) { TECH = f.data; try { localStorage.setItem(TECH_KEY, JSON.stringify(TECH)); } catch (e) {} }
    const l = await readJson("techlist.json");
    TECHL = l && Array.isArray(l.data) ? l.data.map(String) : [];
  } catch (e) {}
  techLoading = false;
  if ((["tech", "invest"].includes(route()) || (route() === "desk" && typeof dkTab !== "undefined" && dkTab === "tech")) && !(document.activeElement && /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))) render();
}
async function techListEdit(sym, add) {
  if (!techCan()) { toast(t("wl_need")); return; }
  try {
    const f = await readJson("techlist.json"), cur = f && Array.isArray(f.data) ? f.data.map(String) : [];
    const next = add ? (cur.includes(sym) ? cur : cur.concat([sym])) : cur.filter((x) => x !== sym);
    await gh("techlist.json", "PUT", { message: "techlist", content: b64e(JSON.stringify(next) + "\n"), sha: f ? f.sha : undefined });
    TECHL = next; toast(t(add ? "tc_added" : "tc_removed"));
  } catch (e) { toast(errText(e)); }
  render();
}

/* عداد نصف دائري. القيمة من -1 (بيع قوي) إلى 1 (شراء قوي). */
function gauge(v, title, n) {
  const cx = 110, cy = 104, r = 84, pt = (deg, rr) => [cx + rr * Math.cos((deg * Math.PI) / 180), cy - rr * Math.sin((deg * Math.PI) / 180)];
  const seg = (a0, a1, col) => { const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r); return '<path d="M' + x0.toFixed(1) + " " + y0.toFixed(1) + " A" + r + " " + r + " 0 0 1 " + x1.toFixed(1) + " " + y1.toFixed(1) + '" stroke="' + col + '" stroke-width="14" fill="none"/>'; };
  const cols = ["var(--down)", "var(--down-soft)", "var(--line)", "var(--up-soft)", "var(--up)"];
  const arcs = cols.map((c, i) => seg(180 - i * 36 - 1, 180 - (i + 1) * 36 + 1, c)).join("");
  const val = v == null ? 0 : Math.max(-1, Math.min(1, v)), ang = 90 - val * 90, [nx, ny] = pt(ang, r - 22);
  const lbl = tcLabel(v), cls = tcCls(v);
  return '<div class="tc-g"><h3>' + esc(title) + '</h3><svg viewBox="0 0 220 120" role="img" aria-label="' + esc(title + ": " + t(lbl)) + '">' + arcs +
    '<line x1="' + cx + '" y1="' + cy + '" x2="' + nx.toFixed(1) + '" y2="' + ny.toFixed(1) + '" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><circle cx="' + cx + '" cy="' + cy + '" r="6" fill="var(--ink)"/></svg>' +
    '<div class="tc-ends small muted"><span>' + esc(t("tc_ss")) + "</span><span>" + esc(t("tc_sb")) + '</span></div><b class="tc-lbl ' + cls + '">' + esc(t(lbl)) + "</b>" +
    (n ? '<div class="tc-n small"><span class="neg">' + esc(t("tc_s")) + " <b>" + n.sell + '</b></span><span class="muted">' + esc(t("tc_n")) + " <b>" + n.neutral + '</b></span><span class="pos">' + esc(t("tc_b")) + " <b>" + n.buy + "</b></span></div>" : "") + "</div>";
}

function pageTech() {
  const c = techCfg(), list = techList(), real = list !== TECH_SAMPLE.stocks;
  if (techCan() && TECHL == null) setTimeout(loadTech, 0);
  let cur = list.find((x) => x.s === c.s) || list[0];
  const tf = cur && cur.tf[c.tf] ? c.tf : "1D", d = cur && cur.tf[tf];
  const chips = list.map((x) => '<button type="button" class="btn sm tgl' + (cur && x.s === cur.s ? " on" : "") + '" data-act="tc-s" data-s="' + esc(x.s) + '" aria-pressed="' + !!(cur && x.s === cur.s) + '"><span class="num">' + esc(x.s) + "</span> " + esc(x.name || "") + "</button>").join("");
  const tfb = (v, k) => '<button type="button" class="btn sm tgl' + (tf === v ? " on" : "") + '" data-act="tc-tf" data-tf="' + v + '" aria-pressed="' + (tf === v) + '">' + esc(t(k)) + "</button>";
  const add = techCan() ? '<form class="row" data-form="tc-add" style="gap:8px"><label class="small muted" for="tc-new">' + esc(t("tc_add")) + '</label><input id="tc-new" class="num" inputmode="numeric" maxlength="4" style="width:90px;padding:6px 10px;border:1px solid var(--line);border-radius:8px;background:var(--surface)"><button class="btn sm" type="submit">' + esc(t("tc_add_btn")) + "</button>" + (cur && TECHL && TECHL.includes(cur.s) ? '<button type="button" class="btn sm ghost" data-act="tc-rm" data-s="' + esc(cur.s) + '">' + esc(t("tc_rm")) + "</button>" : "") + "</form>" : "";
  const upd = real ? '<span class="small muted">' + esc(t("tc_updated").replace("{d}", whenText(TECH.fetched_at)).replace("{n}", list.length)) + "</span>" : "";
  if (!d) return svcShell("tech", '<div class="panel">' + esc(t("tc_sample")) + "</div>");
  const tbl = (rows, withMean) => '<div class="tablewrap"><table><thead><tr><th>' + esc(t("tc_name")) + "</th><th>" + esc(t("tc_val")) + "</th><th>" + esc(t("tc_act")) + "</th>" + (withMean ? "<th>" + esc(t("tc_mean")) + "</th>" : "") + "</tr></thead><tbody>" +
    rows.map((r) => { const [nm, mean] = tcName(r.k); return "<tr><td>" + esc(nm) + '</td><td class="num">' + (r.v == null ? "–" : fmt(r.v, Math.abs(r.v) >= 100 ? 1 : Math.abs(r.v) < 1 ? 3 : 2)) + "</td><td>" + tcAct(r.a) + "</td>" + (withMean ? '<td class="small muted tc-mean">' + esc(mean) + "</td>" : "") + "</tr>"; }).join("") + "</tbody></table></div>";
  const pv = d.pivots || {}, kinds = ["classic", "fibonacci", "camarilla", "woodie", "demark"].filter((k) => pv[k]);
  const pivT = kinds.length ? '<div class="tablewrap"><table class="tc-piv"><thead><tr><th></th>' + kinds.map((k) => "<th>" + esc(k[0].toUpperCase() + k.slice(1)) + "</th>").join("") + "</tr></thead><tbody>" +
    ["R3", "R2", "R1", "P", "S1", "S2", "S3"].map((p) => '<tr><th class="num ' + (p[0] === "R" ? "neg" : p[0] === "S" ? "pos" : "") + '">' + p + "</th>" + kinds.map((k) => '<td class="num">' + (pv[k][p] == null ? "–" : fmt(pv[k][p])) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>" : "";
  const allRows = list.map((x) => { const a = x.tf["1D"] || {}, w = x.tf["1W"] || {}; const tg = (v) => '<span class="tag ' + tcCls(v) + '">' + esc(t(tcLabel(v))) + "</span>";
    return '<tr data-act="tc-s" data-s="' + esc(x.s) + '" style="cursor:pointer"><td><span class="num">' + esc(x.s) + "</span> " + esc(x.name || "") + '</td><td class="num">' + (a.close != null ? fmt(a.close) : "–") + '</td><td class="num ' + (a.change > 0 ? "pos" : a.change < 0 ? "neg" : "") + '">' + (a.change != null ? (a.change > 0 ? "+" : "") + fmt(a.change) + "%" : "–") + "</td><td>" + tg(a.all) + "</td><td>" + tg(w.all) + "</td></tr>"; }).join("");
  return svcShell("tech",
    '<p class="muted" style="max-width:64ch">' + esc(t("tc_p")) + "</p>" + (real ? "" : '<div class="notice">' + esc(t("tc_sample")) + "</div>") +
    '<div class="panel stack"><div class="row tc-chips">' + chips + "</div>" + add + "</div>" +
    '<div class="row" style="justify-content:space-between"><h2 style="font-size:24px"><span class="num">' + esc(cur.s) + "</span> " + esc(cur.name || "") + ' <span class="num muted" style="font-size:18px">' + (d.close != null ? fmt(d.close) : "") + '</span> <span class="num ' + (d.change > 0 ? "pos" : d.change < 0 ? "neg" : "") + '" style="font-size:16px">' + (d.change != null ? (d.change > 0 ? "+" : "") + fmt(d.change) + "%" : "") + '</span></h2><div class="row">' + tfb("1D", "tc_d") + tfb("1W", "tc_w") + upd + "</div></div>" +
    '<div class="tc-gauges">' + gauge(d.osc, t("tc_osc"), d.osc_n) + gauge(d.all, t("tc_sum"), { buy: d.osc_n.buy + d.ma_n.buy, neutral: d.osc_n.neutral + d.ma_n.neutral, sell: d.osc_n.sell + d.ma_n.sell }) + gauge(d.ma, t("tc_ma"), d.ma_n) + "</div>" +
    '<div class="grid2"><div class="stack"><h3>' + esc(t("tc_osc")) + "</h3>" + tbl(d.osc_rows, true) + '</div><div class="stack"><h3>' + esc(t("tc_ma")) + "</h3>" + tbl(d.ma_rows, false) + "</div></div>" +
    (pivT ? '<div class="stack"><h3>' + esc(t("tc_piv")) + '</h3><p class="small muted" style="max-width:70ch">' + esc(t("tc_piv_p")) + "</p>" + pivT + "</div>" : "") +
    (list.length > 1 ? '<div class="stack"><h3>' + esc(t("tc_all")) + '</h3><div class="tablewrap"><table><thead><tr><th>' + esc(t("dv_sym")) + "</th><th>" + esc(t("tc_close")) + "</th><th>" + esc(t("tc_chg")) + "</th><th>" + esc(t("tc_d")) + "</th><th>" + esc(t("tc_w")) + "</th></tr></thead><tbody>" + allRows + "</tbody></table></div></div>" : "") +
    '<div class="grid2"><div class="panel stack"><h3>' + esc(t("tc_how_h")) + "</h3><p>" + esc(t("tc_how")) + '</p></div><div class="panel stack"><h3>' + esc(t("tc_warn_h")) + "</h3><p>" + esc(t("tc_warn")) + "</p></div></div>" +
    '<p class="small muted">' + esc(t("tc_src")) + " " + esc(t("disclaimer")) + "</p>");
}
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act="tc-s"],[data-act="tc-tf"],[data-act="tc-rm"]'); if (!el) return;
  const c = techCfg();
  if (el.dataset.act === "tc-s") { c.s = el.dataset.s; save(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  else if (el.dataset.act === "tc-tf") { c.tf = el.dataset.tf; save(); render(); }
  else techListEdit(el.dataset.s, false);
});
document.addEventListener("submit", (e) => {
  if (!e.target.matches || !e.target.matches('[data-form="tc-add"]')) return;
  e.preventDefault();
  const v = (document.getElementById("tc-new") || {}).value || "", code = v.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).trim();
  if (!/^\d{4}$/.test(code)) { toast(t("tc_bad")); return; }
  techCfg().s = code; save(); techListEdit(code, true);
});
window.addEventListener("hashchange", () => { if (["tech", "invest"].includes(route())) loadTech(); });
if (["tech", "invest"].includes(route())) setTimeout(loadTech, 0);
