/* ===== مِراس: الشارت التفاعلي ===== */
Object.assign(UI, {
  nav_chart: ["الشارت", "Chart"],
  ch_h: ["الشارت", "Chart"],
  ch_p: ["ارسم مستوياتك، شغّل المؤشرات، وجرّب تتوقع الشمعة الجاية قبل ما تشوفها.", "Draw your levels, switch on indicators, and try to call the next candle before you see it."],
  ch_sym: ["السهم", "Share"], ch_view: ["عدد الشموع", "Candles shown"], ch_all: ["الكل", "All"],
  ch_practice: ["بيانات تدريبية", "Practice data"], ch_real: ["أسهمك (شموع حقيقية)", "Your shares (real candles)"],
  ch_pa: ["سهم تدريبي أ (اتجاه صاعد)", "Practice share A (uptrend)"], ch_pb: ["سهم تدريبي ب (مسار عرضي)", "Practice share B (range)"], ch_pc: ["سهم تدريبي ج (هبوط ثم انعكاس)", "Practice share C (fall then reversal)"],
  ch_candles: ["شمعة", "candles"],
  ch_ind: ["المؤشرات", "Indicators"], ch_sma: ["متوسط بسيط", "SMA"], ch_ema: ["متوسط أسي", "EMA"], ch_rsi: ["القوة النسبية", "RSI"], ch_vol: ["الحجم", "Volume"], ch_period: ["الفترة", "Period"],
  ch_tools: ["الرسم", "Drawing"], ch_cursor: ["مؤشر", "Pointer"], ch_hline: ["خط أفقي", "Horizontal line"], ch_tline: ["خط اتجاه", "Trend line"], ch_clear: ["امسح الرسومات", "Clear drawings"],
  ch_hint_cursor: ["مرّر على الشارت عشان تقرأ أرقام كل شمعة.", "Move over the chart to read each candle's numbers."],
  ch_hint_h: ["اضغط على الشارت عند السعر اللي تبي ترسم عنده الخط.", "Tap the chart at the price where you want the line."],
  ch_hint_t1: ["اضغط على النقطة الأولى، مثلاً أول قاع.", "Tap the first point, for example the first low."],
  ch_hint_t2: ["اضغط على النقطة الثانية على شمعة مختلفة.", "Now tap the second point on a different candle."],
  ch_replay: ["وضع التوقع", "Prediction mode"], ch_replay_p: ["يخفي آخر الشموع. توقّع الحركة ثم اكشفها شمعة شمعة.", "Hides the latest candles. Call the move, then reveal it candle by candle."],
  ch_next: ["الشمعة التالية", "Next candle"], ch_next5: ["+5 شموع", "+5 candles"], ch_show_all: ["اكشف الكل", "Reveal all"], ch_hidden: ["شموع مخفية", "candles hidden"],
  ch_older: ["أقدم", "Older"], ch_newer: ["أحدث", "Newer"],
  ch_trade: ["سجّل صفقة من الشارت", "Log a trade from the chart"],
  ch_few: ["عندك {n} شمعة حقيقية لهذا السهم. تزيد شمعة كل يوم تداول، والمؤشر يحتاج عدد شموع يساوي فترته على الأقل.", "You have {n} real candle(s) for this share. One is added each trading day, and an indicator needs at least as many candles as its period."],
  ch_practice_note: ["هذي بيانات تدريبية مولّدة، وليست أسعار سهم حقيقي.", "This is generated practice data, not the prices of a real share."],
  ch_o: ["افتتاح", "O"], ch_hi: ["أعلى", "H"], ch_lo: ["أدنى", "L"], ch_c: ["إغلاق", "C"], ch_day: ["يوم", "Day"],
  ch_draws: ["رسوماتك", "Your drawings"], ch_none: ["ما رسمت شي للحين.", "Nothing drawn yet."], ch_h_lbl: ["أفقي", "Horizontal"], ch_t_lbl: ["اتجاه", "Trend"],
  ch_same: ["اختر شمعة مختلفة للنقطة الثانية", "Pick a different candle for the second point"],
  ch_full: ["تكبير", "Expand"], ch_exit: ["تصغير", "Close"], ch_rotate: ["ميّل الجوال عشان يوسع الشارت", "Rotate your phone to widen the chart"],
  ch_tv: ["افتحه في TradingView", "Open in TradingView"],
  ch_read: ["اقرأ الشارت", "Read the chart"], ch_read_h: ["القراءة الآلية", "Automatic reading"],
  ch_read_p: ["وصف محسوب بقواعد الدروس من الشموع الظاهرة. يوصف اللي صار، وما يتوقع اللي بيصير، وليس توصية.", "A description computed with the lessons' rules from the candles shown. It describes what happened, does not predict what will, and is not a recommendation."],
  ch_draw_it: ["ارسمها لي على الشارت", "Draw it on the chart for me"], ch_drawn: ["انرسمت. قارنها برسمك.", "Drawn. Compare with your own."],
  ch_hide_read: ["أخفِ القراءة", "Hide reading"],
  rd_need: ["القراءة تحتاج 20 شمعة على الأقل، والظاهر {n}. استورد تاريخ السهم من ملف (تحت في قائمة أسهمك)، أو جرّب على سهم تدريبي.", "A reading needs at least 20 candles; {n} are shown. Import the share's history from a file (below, in your watchlist), or try a practice share."],
  im_h: ["استيراد تاريخ سهم من ملف", "Import a share's history from a file"],
  im_p: ["الباقة المجانية تعطي شمعة اليوم فقط. لو نزّلت ملف الأسعار التاريخية للسهم (Excel أو CSV) من أي مصدر، ارفعه هنا وتنضاف شموعه مرة وحدة، والسحب اليومي يكمّل عليها.", "The free plan gives today's candle only. If you download the share's historical prices (Excel or CSV) from any source, upload it here and its candles are added once; the daily fetch continues from there."],
  im_sym: ["السهم", "Share"], im_file: ["اختر الملف", "Choose file"],
  im_found: ["لقيت {n} شمعة يومية، من {a} إلى {b}. آخر إغلاق في الملف {c}.", "Found {n} daily candles, from {a} to {b}. Last close in the file: {c}."],
  im_check: ["تأكد إن الملف لنفس السهم المختار قبل الحفظ.", "Make sure the file is for the selected share before saving."],
  im_save: ["احفظ الشموع", "Save candles"], im_cancel: ["تراجع", "Cancel"], im_saved: ["انحفظت الشموع", "Candles saved"],
  im_bad: ["ما قدرت أقرأ الملف. يحتاج أعمدة: التاريخ، الافتتاح، الأعلى، الأدنى، الإغلاق.", "Could not read the file. It needs columns: date, open, high, low, close."],
  im_no_sym: ["ما فيه أسهم في قائمتك للحين. انتظر أول سحب للأسعار.", "No shares in your list yet. Wait for the first price fetch."],
  rd_trend: ["الاتجاه", "Trend"], rd_ma: ["المتوسطات", "Averages"], rd_mom: ["الزخم", "Momentum"], rd_volume: ["الحجم", "Volume"], rd_levels: ["المستويات", "Levels"], rd_try: ["وش تجرّب هنا", "What to try here"],
  rd_up: ["صاعد: السعر ارتفع {p}% خلال الشموع الظاهرة، وأغلب الحركة كانت في نفس الجهة.", "Up: price rose {p}% across the candles shown, and most of the movement was in that direction."],
  rd_down: ["هابط: السعر نزل {p}% خلال الشموع الظاهرة، وأغلب الحركة كانت في نفس الجهة.", "Down: price fell {p}% across the candles shown, and most of the movement was in that direction."],
  rd_range: ["عرضي: السعر تحرك كثير رايح جاي، لكن محصلته {p}% فقط خلال الشموع الظاهرة.", "Sideways: price moved a lot back and forth, but the net change is only {p}% across the candles shown."],
  rd_hh: ["آخر قمتين وآخر قاعين كل واحد أعلى من اللي قبله.", "The last two highs and the last two lows are each higher than the one before."],
  rd_ll: ["آخر قمتين وآخر قاعين كل واحد أدنى من اللي قبله.", "The last two highs and the last two lows are each lower than the one before."],
  rd_mixed: ["آخر القمم والقيعان ما تمشي في جهة وحدة.", "The latest highs and lows are not moving one way."],
  rd_ma_above: ["الإغلاق {c} فوق متوسط 20 ({m}) بنسبة {p}%.", "The close {c} is {p}% above the 20 average ({m})."],
  rd_ma_below: ["الإغلاق {c} تحت متوسط 20 ({m}) بنسبة {p}%.", "The close {c} is {p}% below the 20 average ({m})."],
  rd_cross_up: ["متوسط 5 قطع متوسط 20 للأعلى قبل {n} شمعة.", "The 5 average crossed above the 20 average {n} candle(s) ago."],
  rd_cross_down: ["متوسط 5 قطع متوسط 20 للأسفل قبل {n} شمعة.", "The 5 average crossed below the 20 average {n} candle(s) ago."],
  rd_rsi_hi: ["RSI 14 عند {v}: منطقة تشبع شرائي (فوق 70). الصعود سريع، وما يعني انعكاس لحاله.", "RSI 14 is {v}: overbought (above 70). The rise is fast; that alone does not mean a reversal."],
  rd_rsi_lo: ["RSI 14 عند {v}: منطقة تشبع بيعي (تحت 30). الهبوط سريع، وما يعني ارتداد لحاله.", "RSI 14 is {v}: oversold (below 30). The fall is fast; that alone does not mean a bounce."],
  rd_rsi_mid: ["RSI 14 عند {v}: بين 30 و70، ما فيه تشبع.", "RSI 14 is {v}: between 30 and 70, no extreme."],
  rd_vol_hi: ["متوسط حجم آخر 5 شموع أعلى من متوسط العشرين اللي قبلها بـ {p}%: الحركة الأخيرة معها مشاركة.", "Average volume of the last 5 candles is {p}% above the 20 before them: the latest move has participation."],
  rd_vol_lo: ["متوسط حجم آخر 5 شموع أقل من متوسط العشرين اللي قبلها بـ {p}%: الحركة الأخيرة بمشاركة ضعيفة.", "Average volume of the last 5 candles is {p}% below the 20 before them: the latest move has weak participation."],
  rd_vol_same: ["حجم آخر 5 شموع قريب من المعتاد.", "Volume over the last 5 candles is close to normal."],
  rd_sup: ["أقرب دعم تحت السعر: {v} (لمسه السعر {n} مرة).", "Nearest support below price: {v} (touched {n} time(s))."],
  rd_res: ["أقرب مقاومة فوق السعر: {v} (لمسها السعر {n} مرة).", "Nearest resistance above price: {v} (touched {n} time(s))."],
  rd_no_sup: ["ما فيه قاع واضح تحت السعر في الشموع الظاهرة.", "No clear low below price in the candles shown."],
  rd_no_res: ["السعر عند أعلى مستوياته في الشموع الظاهرة، فما فيه مقاومة فوقه هنا.", "Price is at its highest in the candles shown, so there is no resistance above it here."],
  rd_try_up: ["ارسم خط اتجاه يوصل آخر قاعين صاعدين. شغّل متوسط 20 وشوف كيف السعر يرتد منه. RSI يبقى مرتفع طويلاً في الاتجاه الصاعد، فلا تعتمد عليه هنا.", "Draw a trend line through the last two rising lows. Switch on the 20 average and watch price bounce from it. RSI stays high for long in an uptrend, so do not lean on it here."],
  rd_try_down: ["ارسم خط اتجاه يوصل آخر قمتين هابطتين. شغّل متوسط 20 وراقب هل السعر يرجع فوقه. الشراء ضد الاتجاه أصعب تمرين للمبتدئ.", "Draw a trend line through the last two falling highs. Switch on the 20 average and watch whether price reclaims it. Buying against the trend is the hardest exercise for a beginner."],
  rd_try_range: ["ارسم خط أفقي عند الدعم وخط عند المقاومة. شغّل RSI 14 وشوف قراءته كل مرة يلمس السعر أحد الخطين. تقاطعات المتوسطات تفشل كثير في العرضي.", "Draw one horizontal line at support and one at resistance. Switch on RSI 14 and read it each time price touches a line. Average crossovers fail often in a range."],
  wl_h: ["قائمة أسهمك", "Your watchlist"], wl_p: ["اكتب رمز السهم أو اسمه. ينضاف للسحب المجدول، وتبدأ شموعه تتراكم من التشغيل الجاي.", "Type the symbol or name. It joins the scheduled fetch and its candles start accumulating from the next run."],
  wl_ph: ["مثال: 2222 أو الراجحي", "e.g. 2222 or Al Rajhi"], wl_add: ["أضف", "Add"], wl_added: ["انضاف. تظهر شموعه بعد تشغيل الأسعار الجاي.", "Added. Its candles appear after the next price run."],
  wl_full: ["القائمة وصلت الحد ({n} سهم) عشان ما تتجاوز 100 طلب يومياً. احذف سهم أول.", "The list is at its limit ({n} shares) to stay within 100 requests a day. Remove one first."],
  wl_dup: ["موجود في القائمة", "Already in the list"], wl_removed: ["انحذف من القائمة", "Removed from the list"], wl_need: ["اربط المنصة بمستودعك أول من صفحة المزامنة.", "Connect the platform to your repository first from the sync page."],
  open_chart: ["افتح الشارت وجرّب", "Open the chart and try it"],
  j_target: ["الهدف", "Target"],
  j_bad_stop: ["وقف الخسارة لازم يكون تحت سعر الدخول", "The stop-loss must be below the entry price"],
  j_bad_target: ["الهدف لازم يكون فوق سعر الدخول", "The target must be above the entry price"]
});

const WL_MAX = 12;
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

/* ----- automatic reading: rules from the lessons, applied to candles [s, e) ----- */
function swings(data, s, e, k) {
  const hi = [], lo = [];
  for (let i = s + k; i < e - k; i++) {
    let isH = true, isL = true;
    for (let j = i - k; j <= i + k; j++) { if (j === i) continue; if (data[j].h >= data[i].h) isH = false; if (data[j].l <= data[i].l) isL = false; }
    if (isH) hi.push({ i, p: data[i].h }); if (isL) lo.push({ i, p: data[i].l });
  }
  return { hi, lo };
}
function analyze(data, s, e) {
  const n = e - s; if (n < 20) return { need: n };
  const cl = data.map((r) => r.c), last = e - 1, c = cl[last];
  const m20 = sma(cl, 20), m5 = sma(cl, 5), r14 = rsi(cl, 14), sw = swings(data, s, e, 3);
  const h2 = sw.hi.slice(-2), l2 = sw.lo.slice(-2);
  const hh = h2.length === 2 && h2[1].p > h2[0].p, hl = l2.length === 2 && l2[1].p > l2[0].p, lh = h2.length === 2 && h2[1].p < h2[0].p, ll = l2.length === 2 && l2[1].p < l2[0].p;
  /* efficiency: net move divided by the total distance travelled (1 = straight line, 0 = pure back-and-forth) */
  let path = 0; for (let i = s + 1; i < e; i++) path += Math.abs(cl[i] - cl[i - 1]);
  const net = cl[last] - cl[s], eff = path ? Math.abs(net) / path : 0, pct = Math.abs((net / cl[s]) * 100).toFixed(1);
  const regime = eff >= 0.3 ? (net > 0 ? "up" : "down") : "range";
  const out = { regime, items: [], auto: [] }, f = (v) => v.toFixed(2), fill = (k, o) => t(k).replace(/\{(\w+)\}/g, (_, x) => o[x]);
  out.items.push(["rd_trend", [fill("rd_" + regime, { p: pct }), t(hh && hl ? "rd_hh" : lh && ll ? "rd_ll" : "rd_mixed")]]);
  const ma = [];
  if (m20[last] != null) ma.push(fill(c >= m20[last] ? "rd_ma_above" : "rd_ma_below", { c: f(c), m: f(m20[last]), p: Math.abs(((c - m20[last]) / m20[last]) * 100).toFixed(1) }));
  for (let i = last; i > Math.max(s, last - 15); i--) {
    if (m5[i] == null || m20[i] == null || m5[i - 1] == null || m20[i - 1] == null) break;
    const now = m5[i] - m20[i], was = m5[i - 1] - m20[i - 1];
    if (now > 0 && was <= 0) { ma.push(fill("rd_cross_up", { n: last - i })); break; }
    if (now < 0 && was >= 0) { ma.push(fill("rd_cross_down", { n: last - i })); break; }
  }
  if (ma.length) out.items.push(["rd_ma", ma]);
  if (r14[last] != null) out.items.push(["rd_mom", [fill(r14[last] > 70 ? "rd_rsi_hi" : r14[last] < 30 ? "rd_rsi_lo" : "rd_rsi_mid", { v: r14[last].toFixed(1) })]]);
  if (n >= 25) {
    const avg = (a, b) => { let x = 0; for (let i = a; i < b; i++) x += data[i].v || 0; return x / (b - a); };
    const recent = avg(e - 5, e), base = avg(e - 25, e - 5), d = base ? ((recent - base) / base) * 100 : 0;
    if (base) out.items.push(["rd_volume", [d > 15 ? fill("rd_vol_hi", { p: d.toFixed(0) }) : d < -15 ? fill("rd_vol_lo", { p: Math.abs(d).toFixed(0) }) : t("rd_vol_same")]]);
  }
  const touches = (list, p) => list.filter((x) => Math.abs(x.p - p) / p <= 0.012).length;
  const below = sw.lo.filter((x) => x.p < c).sort((a, b) => b.p - a.p)[0], above = sw.hi.filter((x) => x.p > c).sort((a, b) => a.p - b.p)[0];
  out.items.push(["rd_levels", [below ? fill("rd_sup", { v: f(below.p), n: touches(sw.lo, below.p) }) : t("rd_no_sup"), above ? fill("rd_res", { v: f(above.p), n: touches(sw.hi, above.p) }) : t("rd_no_res")]]);
  out.items.push(["rd_try", [t("rd_try_" + regime)]]);
  const r2 = (x) => Math.round(x * 100) / 100;
  if (regime === "up" && l2.length === 2 && hl) out.auto.push({ t: "t", i1: l2[0].i, p1: r2(l2[0].p), i2: l2[1].i, p2: r2(l2[1].p), auto: 1 });
  else if (regime === "down" && h2.length === 2 && lh) out.auto.push({ t: "t", i1: h2[0].i, p1: r2(h2[0].p), i2: h2[1].i, p2: r2(h2[1].p), auto: 1 });
  if (below) out.auto.push({ t: "h", p: r2(below.p), auto: 1 });
  if (above) out.auto.push({ t: "h", p: r2(above.p), auto: 1 });
  return out;
}

let chImport = null;
const IM_COLS = { d: ["date", "التاريخ", "تاريخ", "time"], o: ["open", "افتتاح"], h: ["high", "أعلى", "اعلى", "الأعلى", "الاعلى"], l: ["low", "أدنى", "ادنى", "الأدنى", "الادنى"], c: ["close", "إغلاق", "اغلاق", "الإغلاق", "الاغلاق", "price", "last", "السعر"], v: ["volume", "vol", "الكمية", "الحجم", "حجم"] };
function imNum(x) {
  if (typeof x === "number") return x; if (x == null) return NaN;
  let s = String(x).replace(/[\u0660-\u0669]/g, (d) => d.charCodeAt(0) - 0x660).replace(/[,\s\u066C]/g, "").replace("\u066B", "."), mul = 1;
  const m = s.match(/^(-?[\d.]+)([KMB])$/i); if (m) { s = m[1]; mul = { k: 1e3, m: 1e6, b: 1e9 }[m[2].toLowerCase()]; }
  return s === "" || s === "-" ? NaN : parseFloat(s) * mul;
}
function imDates(raw) {
  const z = (n) => String(n).padStart(2, "0"), iso = (y, m, d) => (y > 1990 && y < 2100 && m >= 1 && m <= 12 && d >= 1 && d <= 31 ? y + "-" + z(m) + "-" + z(d) : null);
  const parts = raw.map((x) => (typeof x === "string" ? x.trim().match(/^(\d{1,4})[\/\-.](\d{1,2})[\/\-.](\d{1,4})/) : null));
  let dayFirst = true; /* 07/10/2026: decide day-first or month-first from the whole column */
  if (parts.some((m) => m && m[1].length <= 2 && +m[2] > 12) && !parts.some((m) => m && m[1].length <= 2 && +m[1] > 12)) dayFirst = false;
  return raw.map((x, i) => {
    if (x instanceof Date && !isNaN(x)) { const d = new Date(x.getTime() + 12 * 3600 * 1000); return iso(d.getFullYear(), d.getMonth() + 1, d.getDate()); }
    const m = parts[i];
    if (m) { if (m[1].length === 4) return iso(+m[1], +m[2], +m[3]); const y = m[3].length === 2 ? 2000 + +m[3] : +m[3]; return dayFirst ? iso(y, +m[2], +m[1]) : iso(y, +m[1], +m[2]); }
    if (typeof x === "string" && x.trim()) { const d = new Date(x); if (!isNaN(d)) return iso(d.getFullYear(), d.getMonth() + 1, d.getDate()); }
    return null;
  });
}
function parseHistory(buf) {
  const wb = XLSX.read(buf, { type: "array", cellDates: true, raw: true }), rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, raw: true, defval: null });
  const norm = (x) => String(x == null ? "" : x).toLowerCase().replace(/[\u064B-\u0652"']/g, "").trim();
  let hi = -1, map = null;
  for (let r = 0; r < Math.min(rows.length, 25) && hi < 0; r++) {
    const cells = (rows[r] || []).map(norm), m = {};
    for (const k of Object.keys(IM_COLS)) {
      let idx = cells.findIndex((c) => IM_COLS[k].includes(c));
      if (idx < 0) idx = cells.findIndex((c) => c && !/adj|معدل|change|تغير|%/.test(c) && IM_COLS[k].some((w) => c.includes(w)));
      if (idx >= 0) m[k] = idx;
    }
    if (m.d != null && m.c != null && m.o != null && m.h != null && m.l != null) { hi = r; map = m; }
  }
  if (hi < 0) return null;
  const body = rows.slice(hi + 1).filter((r) => r && r[map.d] != null && r[map.d] !== ""), dates = imDates(body.map((r) => r[map.d])), out = {};
  body.forEach((r, i) => {
    const o = imNum(r[map.o]), h = imNum(r[map.h]), l = imNum(r[map.l]), c = imNum(r[map.c]), v = map.v != null ? imNum(r[map.v]) : 0;
    if (!dates[i] || !(o > 0 && h > 0 && l > 0 && c > 0) || h < l) return;
    out[dates[i]] = { d: dates[i], o, h, l, c, v: isFinite(v) ? Math.round(v) : 0 };
  });
  const list = Object.values(out).sort((a, b) => (a.d < b.d ? -1 : 1)).slice(-400);
  return list.length >= 2 ? list : null;
}

const chartDefaults = () => ({ sym: "TRN-A", n: 60, vol: true, sma1: { on: true, p: 5 }, sma2: { on: false, p: 20 }, ema: { on: false, p: 10 }, rsi: { on: false, p: 14 } });
let chTool = "cursor", chPending = null, chOffset = 0, chReplay = null, CH = null, chFull = false, chNative = false, chReading = false, WL = null;
function chartCfg() { if (!S.chart || !S.chart.sma1) S.chart = chartDefaults(); if (!S.drawings) S.drawings = {}; return S.chart; }

function chartSvg(cfg, full) {
  const end = chReplay == null ? full.length : Math.min(chReplay, full.length), data = full.slice(0, end);
  const slots = Math.max(10, Math.min(cfg.n === "all" ? data.length : cfg.n, data.length + 2));
  chOffset = Math.max(0, Math.min(chOffset, Math.max(0, data.length - Math.min(slots, data.length))));
  const e = data.length - chOffset, s = Math.max(0, e - slots), view = data.slice(s, e), cl = data.map((r) => r.c);
  const lines = [];
  if (cfg.sma1.on) lines.push({ cls: "i1", name: t("ch_sma") + " " + cfg.sma1.p, v: sma(cl, cfg.sma1.p) });
  if (cfg.sma2.on) lines.push({ cls: "i2", name: t("ch_sma") + " " + cfg.sma2.p, v: sma(cl, cfg.sma2.p) });
  if (cfg.ema.on) lines.push({ cls: "i3", name: t("ch_ema") + " " + cfg.ema.p, v: ema(cl, cfg.ema.p) });
  const rs = cfg.rsi.on ? rsi(cl, cfg.rsi.p) : null, draws = S.drawings[cfg.sym] || [];

  /* geometry follows the real pixel width, so text never shrinks on a phone */
  const vw = document.documentElement.clientWidth || 960, vhgt = window.innerHeight || 700;
  const W = chFull ? Math.max(300, vw - 16) : Math.max(280, Math.min(1056, vw - 62)), axis = W < 520 ? 50 : 62;
  const x0 = 6, x1 = W - axis, top = 8, vh = cfg.vol ? (W < 520 ? 40 : 56) : 0, rh = rs ? (W < 520 ? 70 : 96) : 0, extra = (vh ? vh + 12 : 0) + (rh ? rh + 14 : 0) + 20;
  const ph = chFull ? Math.max(110, vhgt - 108 - extra) : Math.round(Math.max(200, Math.min(340, W * 0.5)));
  const vtop = top + ph + 12, rtop = vtop + (vh ? vh + 14 : 0), H = top + ph + extra;
  let min = Infinity, max = -Infinity;
  view.forEach((r) => { min = Math.min(min, r.l); max = Math.max(max, r.h); });
  lines.forEach((ln) => { for (let i = s; i < e; i++) if (ln.v[i] != null) { min = Math.min(min, ln.v[i]); max = Math.max(max, ln.v[i]); } });
  if (!isFinite(min)) { min = 0; max = 1; }
  if (max - min < 0.02) { max += 0.5; min -= 0.5; }
  const pad = (max - min) * 0.07; min -= pad; max += pad;
  const bw = (x1 - x0) / slots, X = (i) => x0 + (i - s) * bw + bw / 2, Y = (v) => top + ((max - v) / (max - min)) * ph;
  CH = { W, H, x0, x1, top, ph, bw, s, e, slots, min, max, data, lines, rs, sym: cfg.sym, fullLen: full.length, end };

  let g = '<defs><clipPath id="ch-clip"><rect x="' + x0 + '" y="' + top + '" width="' + (x1 - x0) + '" height="' + ph + '"/></clipPath></defs>';
  const ticks = ph < 180 ? 3 : 5;
  for (let i = 0; i <= ticks; i++) { const v = min + ((max - min) * i) / ticks, yy = Y(v); g += '<line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + yy + '" y2="' + yy + '"/><text class="c-text" x="' + (x1 + 5) + '" y="' + (yy + 4) + '">' + v.toFixed(2) + "</text>"; }
  const vmax = Math.max(1, ...view.map((r) => r.v || 0));
  view.forEach((r, k) => {
    const i = s + k, cls = r.c >= r.o ? "c-up" : "c-down", bt = Y(Math.max(r.o, r.c)), bb = Y(Math.min(r.o, r.c)), w = Math.min(16, Math.max(1, bw * 0.66));
    g += '<line class="' + cls + '" x1="' + X(i) + '" x2="' + X(i) + '" y1="' + Y(r.h) + '" y2="' + Y(r.l) + '" stroke-width="1.2"/><rect class="' + cls + '" x="' + (X(i) - w / 2) + '" y="' + bt + '" width="' + w + '" height="' + Math.max(1.2, bb - bt) + '"/>';
    if (vh) { const hh = ((r.v || 0) / vmax) * vh; g += '<rect class="' + cls + '" opacity=".45" x="' + (X(i) - w / 2) + '" y="' + (vtop + vh - hh) + '" width="' + w + '" height="' + hh + '"/>'; }
  });
  lines.forEach((ln) => {
    let d = "", pen = false;
    for (let i = s; i < e; i++) { if (ln.v[i] == null) { pen = false; continue; } d += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(ln.v[i]).toFixed(1); pen = true; }
    if (d) g += '<path class="ind ' + ln.cls + '" d="' + d + '" clip-path="url(#ch-clip)"/>';
  });
  draws.forEach((dr) => {
    const cls = dr.auto ? "draw auto" : "draw";
    if (dr.t === "h") { if (dr.p > min && dr.p < max) g += '<line class="' + cls + '" x1="' + x0 + '" x2="' + x1 + '" y1="' + Y(dr.p) + '" y2="' + Y(dr.p) + '"/><rect class="draw-tag' + (dr.auto ? " auto" : "") + '" x="' + (x1 + 1) + '" y="' + (Y(dr.p) - 9) + '" width="' + (axis - 2) + '" height="18" rx="3"/><text class="draw-txt" x="' + (x1 + 5) + '" y="' + (Y(dr.p) + 4) + '">' + dr.p.toFixed(2) + "</text>"; }
    else { const m = (dr.p2 - dr.p1) / (dr.i2 - dr.i1), iEnd = s + slots, pEnd = dr.p1 + m * (iEnd - dr.i1); g += '<line class="' + cls + '" clip-path="url(#ch-clip)" x1="' + X(dr.i1) + '" y1="' + Y(dr.p1) + '" x2="' + X(iEnd) + '" y2="' + Y(pEnd) + '"/><circle class="draw-dot' + (dr.auto ? " auto" : "") + '" clip-path="url(#ch-clip)" cx="' + X(dr.i1) + '" cy="' + Y(dr.p1) + '" r="3.5"/><circle class="draw-dot' + (dr.auto ? " auto" : "") + '" clip-path="url(#ch-clip)" cx="' + X(dr.i2) + '" cy="' + Y(dr.p2) + '" r="3.5"/>'; }
  });
  if (chPending) g += '<circle class="draw-dot" cx="' + X(chPending.i) + '" cy="' + Y(chPending.p) + '" r="5"/>';
  if (vh) g += '<text class="c-lab" x="' + x0 + '" y="' + (vtop - 2) + '">' + esc(t("ch_vol")) + "</text>";
  if (rs) {
    const RY = (v) => rtop + ((100 - v) / 100) * rh;
    g += '<rect class="pane" x="' + x0 + '" y="' + rtop + '" width="' + (x1 - x0) + '" height="' + rh + '"/>';
    [70, 30].forEach((v) => { g += '<line class="c-grid" stroke-dasharray="4 4" x1="' + x0 + '" x2="' + x1 + '" y1="' + RY(v) + '" y2="' + RY(v) + '"/><text class="c-text" x="' + (x1 + 5) + '" y="' + (RY(v) + 4) + '">' + v + "</text>"; });
    let d = "", pen = false;
    for (let i = s; i < e; i++) { if (rs[i] == null) { pen = false; continue; } d += (pen ? "L" : "M") + X(i).toFixed(1) + " " + RY(rs[i]).toFixed(1); pen = true; }
    if (d) g += '<path class="ind i2" d="' + d + '"/>';
    g += '<text class="c-lab" x="' + (x0 + 4) + '" y="' + (rtop + 14) + '">' + esc(t("ch_rsi")) + " " + cfg.rsi.p + "</text>";
  }
  g += '<line id="ch-x" class="cross" x1="0" x2="0" y1="' + top + '" y2="' + (H - 20) + '" visibility="hidden"/><line id="ch-y" class="cross" x1="' + x0 + '" x2="' + x1 + '" y1="0" y2="0" visibility="hidden"/>';
  return '<svg id="ch-svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(symName(cfg.sym)) + '">' + g + "</svg>";
}

const ICON_FULL = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M3 8V3h5M12 3h5v5M17 12v5h-5M8 17H3v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_READ = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M10 2l1.8 4.7L16.5 8.5l-4.7 1.8L10 15l-1.8-4.7L3.5 8.5l4.7-1.8z" fill="currentColor"/><circle cx="16" cy="15.5" r="1.6" fill="currentColor"/></svg>';

function readingHtml() {
  const r = analyze(CH.data, CH.s, CH.e);
  if (r.need != null) return '<div class="panel reading"><h3>' + ICON_READ + " " + esc(t("ch_read_h")) + '</h3><p class="muted">' + esc(t("rd_need").replace("{n}", r.need)) + "</p></div>";
  return '<div class="panel reading stack"><div class="row" style="justify-content:space-between"><h3>' + ICON_READ + " " + esc(t("ch_read_h")) + '</h3><button class="btn sm ghost" data-act="ch-read">' + esc(t("ch_hide_read")) + '</button></div><p class="small muted">' + esc(t("ch_read_p")) + '</p><dl class="rdlist">' +
    r.items.slice(0, -1).concat([["rd_stats", statsLines(signalStats(CH.data, CH.e))]], r.items.slice(-1)).map(([k, lines]) => '<div class="' + (k === "rd_try" ? "try" : k === "rd_stats" ? "wide" : "") + '"><dt>' + esc(t(k)) + "</dt><dd>" + lines.map((x) => "<p>" + esc(x) + "</p>").join("") + "</dd></div>").join("") + "</dl>" +
    (r.auto.length ? '<div><button class="btn" data-act="ch-auto">' + esc(t("ch_draw_it")) + "</button></div>" : "") + aiPanel() + "</div>";
}

function pageChart() {
  const cfg = chartCfg(); let full = chartData(cfg.sym);
  if (!PRACTICE[cfg.sym] && !full.length) { cfg.sym = "TRN-A"; full = chartData(cfg.sym); }
  const svg = chartSvg(cfg, full), draws = S.drawings[cfg.sym] || [], hidden = CH.fullLen - CH.end, isReal = !PRACTICE[cfg.sym];
  const tool = (k, label) => '<button class="btn sm' + (chTool === k ? " on" : "") + '" data-act="ch-tool" data-tool="' + k + '" aria-pressed="' + (chTool === k) + '">' + esc(t(label)) + "</button>";
  const tools = tool("cursor", "ch_cursor") + tool("h", "ch_hline") + tool("t", "ch_tline");
  const hint = chTool === "h" ? "ch_hint_h" : chTool === "t" ? (chPending ? "ch_hint_t2" : "ch_hint_t1") : "ch_hint_cursor";
  const read = '<div class="ch-read" id="ch-read">' + chartReadout(CH.e - 1) + "</div>";

  if (chFull) {
    return '<div class="ch-fullscreen' + (chTool !== "cursor" ? " drawing" : "") + '"><div class="ch-bar"><b>' + esc(symName(cfg.sym)) + '</b><div class="row" style="gap:6px">' + tools + '<button class="btn sm primary" data-act="ch-full">' + esc(t("ch_exit")) + "</button></div></div>" + read + svg +
      (window.innerHeight > window.innerWidth ? '<p class="small muted" style="text-align:center;margin-top:8px">' + esc(t("ch_rotate")) + "</p>" : "") + "</div>";
  }

  const real = Object.keys(LIVE.history || {}).filter((k) => (LIVE.history[k] || []).length);
  const opt = (v, label) => '<option value="' + esc(v) + '"' + (String(cfg.sym) === String(v) ? " selected" : "") + ">" + esc(label) + "</option>";
  const symSel = '<div class="field"><label for="ch-sym">' + esc(t("ch_sym")) + '</label><select id="ch-sym" data-ch="sym"><optgroup label="' + esc(t("ch_practice")) + '">' + Object.keys(PRACTICE).map((k) => opt(k, t(PRACTICE[k]))).join("") + "</optgroup>" + (real.length ? '<optgroup label="' + esc(t("ch_real")) + '">' + real.map((k) => opt(k, k + " " + symName(k) + " (" + LIVE.history[k].length + " " + t("ch_candles") + ")")).join("") + "</optgroup>" : "") + "</select></div>";
  const nSel = '<div class="field"><label for="ch-n">' + esc(t("ch_view")) + '</label><select id="ch-n" data-ch="n">' + [20, 40, 60, 100, "all"].map((v) => '<option value="' + v + '"' + (String(cfg.n) === String(v) ? " selected" : "") + ">" + (v === "all" ? esc(t("ch_all")) : v) + "</option>").join("") + "</select></div>";
  const ind = (k, label, cls) => '<label class="indbox"><input type="checkbox" id="ch-' + k + '-on" data-ch="' + k + '.on"' + (cfg[k].on ? " checked" : "") + '><i class="sw ' + cls + '"></i><span>' + esc(label) + '</span><input class="num" type="number" min="2" max="200" step="1" id="ch-' + k + '-p" data-ch="' + k + '.p" value="' + cfg[k].p + '" aria-label="' + esc(t("ch_period")) + '"></label>';
  const replay = chReplay == null
    ? '<button class="btn sm" data-act="ch-replay"' + (full.length < 12 ? " disabled" : "") + ">" + esc(t("ch_replay")) + '</button><span class="small muted">' + esc(t("ch_replay_p")) + "</span>"
    : '<button class="btn sm primary" data-act="ch-step" data-n="1"' + (hidden ? "" : " disabled") + ">" + esc(t("ch_next")) + '</button><button class="btn sm" data-act="ch-step" data-n="5"' + (hidden ? "" : " disabled") + ">" + esc(t("ch_next5")) + '</button><button class="btn sm" data-act="ch-replay-off">' + esc(t("ch_show_all")) + '</button><span class="tag amber num">' + hidden + '</span><span class="small muted">' + esc(t("ch_hidden")) + "</span>";
  const drawList = draws.length ? draws.map((dr, i) => '<span class="chip">' + esc(dr.t === "h" ? t("ch_h_lbl") : t("ch_t_lbl")) + ' <span class="num">' + (dr.t === "h" ? dr.p.toFixed(2) : dr.p1.toFixed(2) + " → " + dr.p2.toFixed(2)) + '</span><button data-act="ch-del" data-i="' + i + '" aria-label="' + esc(t("j_del")) + '">×</button></span>').join("") : '<span class="small muted">' + esc(t("ch_none")) + "</span>";
  const note = isReal ? t("ch_few").replace("{n}", full.length) : t("ch_practice_note");
  const step = Math.max(1, Math.round(CH.slots / 3));
  const canWl = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  const wl = !(typeof HOSTED !== "undefined" && HOSTED) ? "" : '<div class="panel stack"><div><h3 style="font-size:18px">' + esc(t("wl_h")) + (WL ? ' <span class="tag num">' + WL.length + " / " + WL_MAX + "</span>" : "") + '</h3><p class="small muted">' + esc(canWl ? t("wl_p") : t("wl_need")) + "</p></div>" +
    (canWl ? '<form class="row" data-form="watch" novalidate><input id="wl-new" placeholder="' + esc(t("wl_ph")) + '" maxlength="40" style="flex:1;min-width:0;background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:8px 10px"><button class="btn" type="submit">' + esc(t("wl_add")) + '</button></form><div class="row">' + (WL || []).map((w) => '<span class="chip"><span>' + esc(w) + (quoteOf(w) && quoteOf(w).live ? " " + esc(L(quoteOf(w).name)) : "") + '</span><button data-act="wl-del" data-sym="' + esc(w) + '" aria-label="' + esc(t("j_del")) + '">×</button></span>').join("") + "</div>" + importHtml() : '<div><a class="btn" href="#settings">' + esc(t("set_h")) + "</a></div>") + "</div>";

  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("ch_h")) + "</h1><p>" + esc(t("ch_p")) + '</p></div><div class="stack" style="padding-block:18px">' +
    '<div class="panel stack"><div class="form-grid" style="grid-template-columns:minmax(0,2fr) minmax(0,1fr)">' + symSel + nSel + '</div><div class="row"><b class="small">' + esc(t("ch_ind")) + "</b>" + ind("sma1", t("ch_sma"), "i1") + ind("sma2", t("ch_sma"), "i2") + ind("ema", t("ch_ema"), "i3") + ind("rsi", t("ch_rsi"), "i2") + '<label class="indbox"><input type="checkbox" id="ch-vol" data-ch="vol"' + (cfg.vol ? " checked" : "") + "><span>" + esc(t("ch_vol")) + "</span></label></div>" +
    '<div class="row"><b class="small">' + esc(t("ch_tools")) + "</b>" + tools + '<button class="btn sm ghost" data-act="ch-clear"' + (draws.length ? "" : " disabled") + ">" + esc(t("ch_clear")) + '</button></div><p class="small muted" id="ch-hint">' + esc(t(hint)) + "</p></div>" +
    '<div class="chartbox' + (chTool !== "cursor" ? " drawing" : "") + '"><div class="ch-top">' + read + '<div class="row" style="gap:6px;flex-wrap:nowrap"><button class="btn sm' + (chReading ? " on" : "") + '" data-act="ch-read" title="' + esc(t("ch_read")) + '">' + ICON_READ + '<span class="hide-s">' + esc(t("ch_read")) + '</span></button><button class="btn sm" data-act="ch-full" title="' + esc(t("ch_full")) + '" aria-label="' + esc(t("ch_full")) + '">' + ICON_FULL + "</button></div></div>" + svg + "</div>" +
    (chReading ? readingHtml() : "") +
    '<div class="row" style="justify-content:space-between"><div class="row"><button class="btn sm" data-act="ch-pan" data-n="' + step + '"' + (CH.s > 0 ? "" : " disabled") + ">" + esc(t("ch_older")) + '</button><button class="btn sm" data-act="ch-pan" data-n="-' + step + '"' + (chOffset > 0 ? "" : " disabled") + ">" + esc(t("ch_newer")) + '</button></div><div class="row">' + replay + "</div></div>" +
    '<div class="panel stack"><div class="row" style="justify-content:space-between"><h3 style="font-size:18px">' + esc(t("ch_draws")) + '</h3><div class="row">' + (isReal ? '<a class="btn sm" target="_blank" rel="noopener" href="https://www.tradingview.com/chart/?symbol=TADAWUL%3A' + encodeURIComponent(cfg.sym) + '">' + esc(t("ch_tv")) + " ↗</a>" : "") + '<button class="btn sm primary" data-act="ch-trade"' + (CH.data.length ? "" : " disabled") + ">" + esc(t("ch_trade")) + '</button></div></div><div class="row">' + drawList + "</div></div>" + wl +
    '<div class="notice">' + esc(note) + " " + esc(t("disclaimer")) + "</div></div></div>";
}

function importHtml() {
  const syms = Object.keys(LIVE.quotes || {}), cur = chartCfg().sym;
  let inner;
  if (!syms.length) inner = '<p class="small muted">' + esc(t("im_no_sym")) + "</p>";
  else if (chImport) inner = '<div class="result" style="flex-direction:column;gap:4px"><b style="font-family:var(--body);font-size:15px">' + esc(chImport.sym + " " + symName(chImport.sym)) + '</b><span style="font-size:14.5px;color:var(--ink)">' + esc(t("im_found").replace("{n}", chImport.rows.length).replace("{a}", chImport.rows[0].d).replace("{b}", chImport.rows[chImport.rows.length - 1].d).replace("{c}", chImport.rows[chImport.rows.length - 1].c.toFixed(2))) + "</span><span>" + esc(t("im_check")) + '</span></div><div class="row"><button class="btn primary" data-act="im-save">' + esc(t("im_save")) + '</button><button class="btn" data-act="im-cancel">' + esc(t("im_cancel")) + "</button></div>";
  else inner = '<div class="row"><div class="field" style="flex:1;min-width:160px"><label for="im-sym">' + esc(t("im_sym")) + '</label><select id="im-sym">' + syms.map((k) => '<option value="' + esc(k) + '"' + (k === cur ? " selected" : "") + ">" + esc(k + " " + symName(k)) + "</option>").join("") + '</select></div><label class="btn" for="im-file" style="align-self:flex-end">' + esc(t("im_file")) + '</label><input id="im-file" type="file" accept=".csv,.xlsx,.xls,text/csv" hidden></div>';
  return '<div class="stack" style="border-top:1px solid var(--line);padding-top:14px"><div><h3 style="font-size:17px">' + esc(t("im_h")) + '</h3><p class="small muted">' + esc(t("im_p")) + "</p></div>" + inner + "</div>";
}
async function importSave() {
  const im = chImport; if (!im) return;
  try {
    const f = await readJson("history.json"), hist = (f && f.data && typeof f.data === "object" ? f.data : {}), byDate = {};
    (hist[im.sym] || []).forEach((r) => { byDate[r.d] = r; });
    im.rows.forEach((r) => { if (!byDate[r.d] || r.d !== im.today) byDate[r.d] = r; });
    hist[im.sym] = Object.values(byDate).sort((a, b) => (a.d < b.d ? -1 : 1)).slice(-400);
    await gh("history.json", "PUT", { message: "import history " + im.sym, content: b64e(JSON.stringify(hist)), sha: f ? f.sha : undefined });
    LIVE.history = hist; try { localStorage.setItem(PX_KEY, JSON.stringify(LIVE)); } catch (e) {}
    chImport = null; chartCfg().sym = im.sym; chOffset = 0; chReplay = null; save(); toast(t("im_saved"));
  } catch (e) { toast(errText(e)); }
  render();
}
document.addEventListener("change", (ev) => {
  if (ev.target.id !== "im-file" || !ev.target.files[0]) return;
  const sym = document.getElementById("im-sym").value, fr = new FileReader();
  fr.onload = () => {
    let rows = null; try { rows = parseHistory(new Uint8Array(fr.result)); } catch (e) {}
    if (!rows) { toast(t("im_bad")); return; }
    chImport = { sym, rows, today: today() }; render();
  };
  fr.readAsArrayBuffer(ev.target.files[0]);
});

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
function chartHover(ev) {
  const pt = chartPoint(ev), cx = document.getElementById("ch-x"), cy = document.getElementById("ch-y"); if (!cx) return;
  if (!pt) { cx.setAttribute("visibility", "hidden"); cy.setAttribute("visibility", "hidden"); return; }
  const snap = CH.x0 + (pt.i - CH.s) * CH.bw + CH.bw / 2;
  cx.setAttribute("x1", snap); cx.setAttribute("x2", snap); cx.setAttribute("visibility", "visible");
  if (pt.inPrice) { cy.setAttribute("y1", pt.py); cy.setAttribute("y2", pt.py); cy.setAttribute("visibility", "visible"); } else cy.setAttribute("visibility", "hidden");
  const rd = document.getElementById("ch-read");
  if (rd && CH.data[pt.i]) rd.innerHTML = chartReadout(pt.i) + (pt.inPrice && chTool !== "cursor" ? '<span class="rd muted">@ <b class="num">' + pt.p.toFixed(2) + "</b></span>" : "");
}
document.addEventListener("pointermove", (ev) => { if (ev.target.closest && ev.target.closest("#ch-svg")) chartHover(ev); });
document.addEventListener("pointerdown", (ev) => { if (ev.target.closest && ev.target.closest("#ch-svg")) chartHover(ev); });

function setFull(on) {
  chFull = on; chPending = null;
  const root = document.documentElement;
  if (on) {
    try {
      const p = root.requestFullscreen ? root.requestFullscreen() : null;
      if (p && p.then) p.then(() => { chNative = true; try { const o = screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape"); if (o && o.catch) o.catch(() => {}); } catch (e) {} }).catch(() => {});
    } catch (e) {}
  } else {
    try { if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch (e) {}
    try { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {}); } catch (e) {}
    chNative = false;
  }
  render();
}
document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && chFull && chNative) { chNative = false; chFull = false; render(); } else if (chFull) render(); });
let chResize = null;
window.addEventListener("resize", () => { if (route() !== "chart") return; if (document.activeElement && /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return; clearTimeout(chResize); chResize = setTimeout(render, 120); });
window.addEventListener("hashchange", () => { if (chFull && route() !== "chart") setFull(false); if (route() === "chart" && !WL) loadWatch(); });

async function loadWatch() {
  if (!(typeof HOSTED !== "undefined" && HOSTED && CFG.token)) return;
  try { const f = await readJson("watchlist.json"); if (f && Array.isArray(f.data)) { WL = f.data.map(String); if (route() === "chart" && !chFull && !(document.activeElement && /INPUT|SELECT/.test(document.activeElement.tagName))) render(); } } catch (e) {}
}
async function saveWatch(next, okMsg) {
  try {
    const f = await readJson("watchlist.json");
    await gh("watchlist.json", "PUT", { message: "watchlist", content: b64e(JSON.stringify(next) + "\n"), sha: f ? f.sha : undefined });
    WL = next; toast(t(okMsg));
  } catch (e) { toast(errText(e)); }
  render();
}

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
  const act = el.dataset.act;
  if (act === "im-save") { importSave(); return; }
  if (act === "im-cancel") { chImport = null; render(); return; }
  if (act === "wl-del") { if (WL) saveWatch(WL.filter((w) => w !== el.dataset.sym), "wl_removed"); return; }
  if (act.slice(0, 3) !== "ch-") return;
  const cfg = chartCfg(), full = chartData(cfg.sym);
  if (act === "ch-full") { setFull(!chFull); return; }
  if (act === "ch-tool") { chTool = el.dataset.tool; chPending = null; }
  else if (act === "ch-read") chReading = !chReading;
  else if (act === "ch-auto") {
    const r = analyze(CH.data, CH.s, CH.e), list = (S.drawings[cfg.sym] || []).filter((d) => !d.auto);
    S.drawings[cfg.sym] = list.concat(r.auto || []); save(); toast(t("ch_drawn"));
  }
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
  if (key === "sym") { cfg.sym = el.value; chOffset = 0; chReplay = null; chPending = null; aiState = { busy: false, text: "", err: "", model: "" }; }
  else if (key === "n") { cfg.n = el.value === "all" ? "all" : +el.value; chOffset = 0; }
  else if (key === "vol") cfg.vol = el.checked;
  else { const [k, f] = key.split("."); if (f === "on") cfg[k].on = el.checked; else cfg[k].p = Math.max(2, Math.min(200, parseInt(el.value, 10) || cfg[k].p)); }
  save(); render();
});
document.addEventListener("submit", (ev) => {
  const form = ev.target.closest && ev.target.closest('[data-form="watch"]'); if (!form) return;
  ev.preventDefault();
  const v = (document.getElementById("wl-new").value || "").trim(); if (!v || !WL) return;
  if (WL.some((w) => w.toLowerCase() === v.toLowerCase())) { toast(t("wl_dup")); return; }
  if (WL.length >= WL_MAX) { toast(t("wl_full").replace("{n}", WL_MAX)); return; }
  saveWatch(WL.concat([v]), "wl_added");
});
