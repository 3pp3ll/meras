/* ===== مِراس: مدارس التحليل =====
   صفحة #schools فيها كل المدارس، وكل مدرسة لها صفحة #sch-<id>: الفكرة، الأدوات، كيف تطبقها، المميزات، العيوب، ولمين تناسب.
   الرسومات SVG بسيطة بنفس ألوان الشارت (تشتغل في الوضع الليلي). */
Object.assign(UI, {
  nav_schools: ["مدارس التحليل", "Analysis schools"], d_schools: ["الكلاسيكية، داو، الشموع، إليوت، وايكوف، الهارمونيك وغيرها: الفكرة والأدوات والمميزات والعيوب.", "Classical, Dow, candlesticks, Elliott, Wyckoff, harmonics and more: the idea, the tools, the pros and cons."],
  s_schools: ["{n} مدرسة", "{n} schools"],
  sch_h: ["مدارس التحليل", "Schools of analysis"],
  sch_p: ["كل مدرسة طريقة مختلفة تقرأ فيها السوق. ما فيه مدرسة صح وثانية غلط: فيه مدرسة تناسب أسلوبك ووقتك. أغلب المحترفين يجمعون مدرستين أو ثلاث، ويختبرونها قبل ما يحطون فيها فلوس.", "Each school is a different way of reading the market. None is right and the others wrong: one fits your style and time better. Most professionals combine two or three and test them before risking money."],
  sch_era: ["الأصل", "Origin"], sch_idea: ["الفكرة", "The idea"], sch_tools: ["أدواتها", "Its tools"], sch_how: ["كيف تطبقها", "How to apply it"],
  sch_pro: ["المميزات", "Strengths"], sch_con: ["العيوب", "Weaknesses"], sch_fit: ["تناسب مين؟", "Who is it for?"],
  sch_lvl: ["الصعوبة", "Difficulty"], sch_obj: ["وضوح القواعد", "Rule clarity"], sch_tf: ["الإطار الزمني", "Timeframe"],
  sch_l1: ["سهلة", "Easy"], sch_l2: ["متوسطة", "Medium"], sch_l3: ["صعبة", "Hard"],
  sch_o1: ["تعتمد على اجتهادك", "Mostly judgement"], sch_o2: ["نص ونص", "Mixed"], sch_o3: ["قواعد واضحة", "Clear rules"],
  sch_cmp: ["مقارنة سريعة", "Quick comparison"], sch_name: ["المدرسة", "School"],
  sch_all: ["كل المدارس", "All schools"], sch_try: ["طبّقها على الشارت", "Try it on the chart"], sch_next: ["المدرسة اللي بعدها", "Next school"],
  sch_tip_h: ["نصيحة قبل ما تختار", "Advice before you choose"],
  sch_tip: ["ابدأ بمدرسة سهلة وقواعدها واضحة (داو + الشموع + مؤشر أو اثنين)، وطبقها على الشارت التدريبي والمختبر لين تعرف نتيجتها بالأرقام. بعدها أضف مدرسة ثانية تكمّلها، مو تكررها. وتذكر: ولا مدرسة تضمن ربح، والشغل الحقيقي هو إدارة المخاطرة.", "Start with an easy, rule-clear school (Dow + candlesticks + one or two indicators) and apply it on the practice chart and in the lab until you know its results in numbers. Then add a second school that complements it rather than repeats it. Remember: no school guarantees profit; the real work is risk management."],
  sch_note: ["للتعليم فقط ومو توصية شراء أو بيع.", "For education only, not a buy or sell recommendation."]
});

/* ----- رسومات المدارس ----- */
function schFig(kind) {
  const W = 640, H = 250;
  const pl = (pts, cls, extra) => '<polyline class="' + (cls || "c-trend") + '" points="' + pts.map((p) => p.join(",")).join(" ") + '"' + (extra || "") + "/>";
  const ln = (x1, y1, x2, y2, cls) => '<line class="' + (cls || "c-sup") + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
  const tx = (x, y, s, a, w) => '<text class="c-label" x="' + x + '" y="' + y + '" text-anchor="' + (a || "middle") + '"' + (w ? ' font-weight="600"' : "") + ">" + esc(s) + "</text>";
  const T = (pair) => L(pair);
  const dot = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="4.5" fill="var(--amber)"/>';
  let b = "";
  if (kind === "classic") {
    const p = [[30, 200], [110, 110], [160, 150], [250, 50], [340, 150], [390, 112], [460, 160], [520, 215], [600, 225]];
    b = pl(p) + ln(60, 152, 560, 158, "c-res") + tx(110, 98, T(["كتف أيسر", "Left shoulder"])) + tx(250, 38, T(["الرأس", "Head"]), "middle", 1) + tx(390, 100, T(["كتف أيمن", "Right shoulder"])) + tx(560, 148, T(["خط العنق", "Neckline"]), "start") + tx(520, 240, T(["كسر = إشارة هبوط", "Break = bearish signal"]));
  } else if (kind === "dow") {
    const p = [[30, 215], [120, 140], [170, 175], [270, 95], [320, 130], [420, 50], [470, 85], [580, 25]];
    b = pl(p) + [[120, 140, "HH"], [270, 95, "HH"], [420, 50, "HH"]].map((q) => dot(q[0], q[1]) + tx(q[0], q[1] - 12, T(["قمة أعلى", "Higher high"]))).join("") + [[170, 175], [320, 130], [470, 85]].map((q) => dot(q[0], q[1]) + tx(q[0], q[1] + 24, T(["قاع أعلى", "Higher low"]))).join("") + ln(30, 215, 470, 85, "c-sup");
  } else if (kind === "candles") {
    return patternsFig();
  } else if (kind === "indicators") {
    const p = [[30, 120], [90, 100], [140, 110], [200, 70], [260, 40], [310, 55], [370, 30], [430, 60], [490, 90], [560, 80], [610, 110]];
    const r = [[30, 205], [90, 195], [140, 200], [200, 180], [260, 158], [310, 166], [370, 168], [430, 185], [490, 210], [560, 205], [610, 222]];
    b = pl(p) + '<rect x="20" y="146" width="600" height="92" rx="6" fill="var(--sunk)"/>' + ln(20, 165, 620, 165, "c-res") + ln(20, 222, 620, 222, "c-sup") + pl(r, "c-trend") + tx(28, 160, "RSI 70", "start") + tx(28, 238, "30", "start") +
      tx(370, 20, T(["قمة أعلى في السعر", "Price makes a higher high"])) + tx(470, 160, T(["والمؤشر أضعف = دايفرجنس", "RSI weaker = divergence"]));
  } else if (kind === "elliott") {
    const p = [[30, 220], [110, 150], [150, 180], [290, 60], [330, 100], [420, 30], [480, 110], [530, 80], [600, 160]];
    const lb = ["", "1", "2", "3", "4", "5", "A", "B", "C"];
    b = pl(p) + p.map((q, i) => (i ? dot(q[0], q[1]) + tx(q[0], q[1] + (i % 2 ? -12 : 26), lb[i], "middle", 1) : "")).join("") + tx(220, 240, T(["خمس موجات مع الاتجاه", "5 waves with the trend"])) + tx(520, 240, T(["ثلاث موجات تصحيح", "3 corrective waves"]));
  } else if (kind === "harmonic") {
    const p = [[40, 215], [200, 40], [300, 150], [400, 85], [540, 180]];
    const lb = ["X", "A", "B", "C", "D"];
    b = pl(p) + ln(40, 215, 300, 150, "c-res") + ln(200, 40, 540, 180, "c-res") + p.map((q, i) => dot(q[0], q[1]) + tx(q[0], q[1] + (i % 2 ? -12 : 26), lb[i], "middle", 1)).join("") + tx(250, 200, "0.618", "middle") + tx(390, 150, "0.786 XA", "middle") + tx(540, 238, T(["منطقة انعكاس محتملة", "Potential reversal zone"]));
  } else if (kind === "wyckoff") {
    const p = [[20, 40], [90, 120], [130, 175], [170, 125], [220, 168], [270, 130], [320, 172], [360, 210], [400, 160], [440, 128], [480, 140], [540, 70], [610, 35]];
    b = '<rect x="120" y="120" width="320" height="60" rx="4" fill="var(--up-soft)"/>' + pl(p) + tx(280, 112, T(["منطقة التجميع", "Accumulation range"]), "middle", 1) + dot(360, 210) + tx(360, 236, "Spring") + tx(70, 60, T(["هبوط", "Markdown"])) + tx(570, 100, T(["صعود", "Markup"]));
  } else if (kind === "volume") {
    const bars = [18, 30, 52, 80, 120, 170, 140, 96, 70, 44, 28, 16];
    b = bars.map((w, i) => '<rect x="20" y="' + (18 + i * 18) + '" width="' + w + '" height="14" rx="2" fill="' + (w === 170 ? "var(--amber)" : "var(--sunk)") + '"/>').join("") + ln(20, 115, 620, 115, "c-res") + tx(200, 120, "POC", "start", 1) +
      pl([[230, 200], [290, 160], [330, 125], [380, 110], [430, 122], [470, 90], [520, 60], [610, 40]]) + tx(420, 150, T(["أكثر سعر انتداول عنده", "Price with the most volume"]));
  } else if (kind === "gann") {
    b = [[600, 20, "1×1"], [600, 125, "1×2"], [330, 20, "2×1"], [600, 180, "1×4"]].map((q) => ln(40, 230, q[0], q[1], "c-sup") + tx(q[0] - 6, q[1] + 18, q[2], "end")).join("") + pl([[40, 230], [120, 170], [170, 190], [260, 120], [310, 140], [400, 90], [450, 112], [540, 70]]) + dot(40, 230) + tx(50, 246, T(["قاع مهم", "Major low"]), "start");
  } else if (kind === "smc") {
    b = ln(40, 170, 330, 170, "c-sup") + tx(60, 162, T(["سيولة: قيعان متساوية", "Liquidity: equal lows"]), "start") +
      pl([[30, 110], [90, 170], [140, 130], [200, 170], [250, 140], [300, 215], [340, 160], [380, 100], [430, 80], [460, 120], [520, 60], [600, 30]]) +
      dot(300, 215) + tx(300, 240, T(["كسح", "Sweep"]), "middle", 1) + '<rect x="350" y="105" width="60" height="38" rx="3" fill="var(--up-soft)" stroke="var(--up)" stroke-dasharray="4 3"/>' + tx(380, 158, "FVG") + ln(250, 100, 470, 100, "c-res") + tx(475, 96, T(["كسر هيكل", "Structure break"]), "start");
  } else if (kind === "fund") {
    const bars = [40, 55, 62, 80, 95, 118];
    b = bars.map((h, i) => '<rect x="' + (70 + i * 90) + '" y="' + (230 - h) + '" width="34" height="' + h + '" rx="3" fill="var(--up-soft)"/>').join("") + pl([[60, 200], [150, 175], [240, 185], [330, 140], [420, 128], [510, 100], [600, 92]]) + ln(40, 70, 620, 70, "c-res") + tx(48, 62, T(["القيمة العادلة", "Fair value"]), "start", 1) + tx(330, 245, T(["الأرباح تكبر سنة بعد سنة", "Earnings grow year after year"]));
  } else if (kind === "quant") {
    b = ln(400, 20, 400, 235, "c-res") + tx(200, 30, T(["داخل العينة: تبني القاعدة", "In-sample: build the rule"])) + tx(510, 30, T(["خارجها: تختبر", "Out-of-sample: test"])) +
      pl([[30, 210], [70, 200], [110, 190], [150, 196], [190, 170], [230, 160], [270, 166], [310, 140], [350, 130], [400, 120], [440, 112], [480, 118], [520, 100], [560, 96], [610, 84]]) + tx(320, 240, T(["منحنى رأس المال بعد التكاليف", "Equity curve after costs"]));
  }
  return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + b + "</svg>";
}

/* lvl: الصعوبة 1-3 · obj: وضوح القواعد 1-3 */
const SCHOOLS = [
  { id: "classic", lvl: 2, obj: 1, tf: ["يومي وأسبوعي", "Daily and weekly"],
    name: ["المدرسة الكلاسيكية", "Classical charting"],
    era: ["ريتشارد شاباكر في الثلاثينات، وبعده إدواردز وماجي في كتابهم المشهور سنة 1948.", "Richard Schabacker in the 1930s, then Edwards and Magee in their famous 1948 book."],
    idea: ["السعر يرسم أشكال تتكرر لأن نفسية الناس تتكرر. إذا عرفت الشكل وهو يتكون، تعرف وش المتوقع بعده.", "Price draws shapes that repeat because crowd psychology repeats. Spot the shape as it forms and you know what usually follows."],
    tools: [["الدعم والمقاومة وخطوط الاتجاه", "Support, resistance and trendlines"], ["نماذج الانعكاس: الرأس والكتفين، القمة والقاع المزدوج", "Reversal patterns: head and shoulders, double top and bottom"], ["نماذج الاستمرار: المثلثات، الأعلام، المستطيلات", "Continuation patterns: triangles, flags, rectangles"], ["هدف النموذج: ارتفاعه يُقاس من نقطة الكسر", "Pattern target: its height measured from the breakout"]],
    how: [["حدد الاتجاه على الإطار اليومي أو الأسبوعي.", "Find the trend on the daily or weekly chart."], ["ارسم الدعم والمقاومة وانتظر يكتمل النموذج.", "Draw support and resistance and wait for the pattern to complete."], ["ادخل بعد الإغلاق خارج النموذج (مو قبله)، ويفضل بحجم تداول أعلى.", "Enter after a close outside the pattern (not before), ideally on higher volume."], ["الوقف داخل النموذج، والهدف بقدر ارتفاعه.", "Stop inside the pattern; target equal to its height."]],
    pro: [["سهلة تشوفها بعينك وتنفع في كل الأسواق.", "Visual and works in every market."], ["تعطيك دخول ووقف وهدف واضحين.", "Gives a clear entry, stop and target."]],
    con: [["فيها اجتهاد كثير: شخصين يشوفون نموذجين مختلفين.", "Very subjective: two people see two different patterns."], ["الكسر الكاذب يتكرر كثير.", "False breakouts are common."]],
    fit: ["للي يحب يقرأ الشارت بعينه ويتداول على اليومي، ومناسبة للسوق السعودي.", "Those who like reading charts visually and trading the daily timeframe; suits the Saudi market."] },
  { id: "dow", lvl: 1, obj: 2, tf: ["متوسط وطويل", "Medium and long"],
    name: ["نظرية داو", "Dow Theory"],
    era: ["تشارلز داو مؤسس وول ستريت جورنال في مقالاته حوالي سنة 1900، وطورها بعده هاملتون وريا.", "Charles Dow, founder of The Wall Street Journal, in his editorials around 1900; developed later by Hamilton and Rhea."],
    idea: ["هي أم التحليل الفني. السوق يمشي في اتجاهات: صاعد إذا كان يسوي قمم وقيعان أعلى، وهابط إذا كان يسوي قمم وقيعان أدنى، ويستمر الاتجاه لين تطلع إشارة واضحة إنه انتهى.", "The mother of technical analysis. Markets trend: up while making higher highs and higher lows, down while making lower highs and lower lows, and a trend stays in force until a clear signal says it has ended."],
    tools: [["القمم والقيعان", "Highs and lows"], ["3 اتجاهات: رئيسي (شهور)، ثانوي (أسابيع)، صغير (أيام)", "3 trends: primary (months), secondary (weeks), minor (days)"], ["3 مراحل: تجميع، مشاركة الجمهور، توزيع", "3 phases: accumulation, public participation, distribution"], ["الحجم لازم يأكد الاتجاه", "Volume must confirm the trend"]],
    how: [["علّم آخر قمتين وآخر قاعين.", "Mark the last two highs and the last two lows."], ["قمم وقيعان أعلى = لا تبيع عكس الاتجاه.", "Higher highs and lows = do not trade against the trend."], ["إذا كسر السعر آخر قاع أعلى، هذا أول تحذير إن الاتجاه تغير.", "If price breaks the last higher low, that is the first warning the trend has changed."]],
    pro: [["بسيطة وأساس كل المدارس بعدها.", "Simple, and the base of every later school."], ["تحميك من الشراء في سهم اتجاهه هابط.", "Keeps you out of shares in a downtrend."]],
    con: [["إشاراتها متأخرة: تأكد الاتجاه بعد ما يمشي جزء منه.", "Signals are late: a trend is confirmed after part of the move is gone."], ["ما تعطيك نقطة دخول دقيقة لحالها.", "Does not give a precise entry on its own."]],
    fit: ["لكل مبتدئ، وللمستثمر اللي يبي يعرف متى يدخل ومتى يبتعد.", "Every beginner, and investors who want to know when to be in and when to stay out."] },
  { id: "candles", lvl: 1, obj: 2, tf: ["كل الأطر", "All timeframes"],
    name: ["الشموع اليابانية", "Japanese candlesticks"],
    era: ["تُنسب لتاجر الرز الياباني مونيهيسا هوما في القرن الـ18، ونشرها في الغرب ستيف نيسون سنة 1991.", "Attributed to the Japanese rice trader Munehisa Homma in the 18th century; brought to the West by Steve Nison in 1991."],
    idea: ["كل شمعة تحكي معركة المشترين والبائعين في فترتها. شكل الشمعة ومكانها يقولون لك مين كسب.", "Each candle tells the battle between buyers and sellers in its period. Its shape and location tell you who won."],
    tools: [["جسم الشمعة والظلال", "The body and the wicks"], ["شموع منفردة: الدوجي، المطرقة، الشهاب", "Single candles: doji, hammer, shooting star"], ["نماذج: الابتلاع، نجمة الصباح والمساء", "Patterns: engulfing, morning and evening star"]],
    how: [["لا تقرأ الشمعة لحالها: شوف وين هي (عند دعم؟ مقاومة؟).", "Never read a candle alone: check where it is (at support? resistance?)."], ["مطرقة عند دعم قوي أقوى بكثير من مطرقة في النص.", "A hammer at strong support means far more than one mid-range."], ["انتظر شمعة تأكيد بعدها.", "Wait for a confirming candle after it."]],
    pro: [["تشوف تغير المزاج بسرعة.", "Shows a shift in sentiment quickly."], ["تنفع مع أي مدرسة ثانية.", "Combines with any other school."]],
    con: [["لحالها ضعيفة، ونسبة نجاح النماذج بدون سياق قريبة من العشوائية.", "Weak alone; patterns without context perform close to random."], ["كثير منها يتغير معناه حسب الإطار الزمني.", "Many change meaning with the timeframe."]],
    fit: ["للكل، كأداة توقيت فوق مدرسة ثانية.", "Everyone, as a timing tool on top of another school."] },
  { id: "indicators", lvl: 1, obj: 3, tf: ["كل الأطر", "All timeframes"],
    name: ["مدرسة المؤشرات الفنية", "Technical indicators"],
    era: ["توسعت مع الكمبيوتر في السبعينات والثمانينات: ويلدر (RSI و ATR سنة 1978)، أبيل (MACD)، وبولينجر (البولينجر باند).", "Grew with computers in the 1970s and 80s: Wilder (RSI and ATR, 1978), Appel (MACD) and Bollinger (Bollinger Bands)."],
    idea: ["تحول السعر والحجم لمعادلات تعطيك أرقام واضحة: الاتجاه، الزخم، التشبع، والتذبذب. بدال \"أحس إنه صاعد\" تقول \"المتوسط 50 فوق 200\".", "Turns price and volume into formulas that give clear numbers: trend, momentum, overbought/oversold and volatility. Instead of \"it feels bullish\" you say \"the 50 average is above the 200\"."],
    tools: [["مؤشرات اتجاه: المتوسطات المتحركة، MACD", "Trend: moving averages, MACD"], ["مؤشرات زخم: RSI، الستوكاستك", "Momentum: RSI, Stochastic"], ["مؤشرات تذبذب: ATR، البولينجر", "Volatility: ATR, Bollinger Bands"], ["مؤشرات حجم: OBV، تدفق الأموال", "Volume: OBV, money flow"]],
    how: [["اختر مؤشر واحد من كل نوع، لا تكدس 5 مؤشرات زخم تقول نفس الشي.", "Pick one indicator per type; do not stack five momentum tools that say the same thing."], ["استخدم مؤشر الاتجاه للفلترة والزخم للتوقيت.", "Use the trend indicator to filter and the momentum one to time."], ["الدايفرجنس (السعر يرتفع والمؤشر يضعف) تحذير، مو إشارة بيع لحاله.", "Divergence (price up, indicator weaker) is a warning, not a sell signal by itself."]],
    pro: [["قواعدها واضحة وتقدر تختبرها بالأرقام.", "Clear rules you can test in numbers."], ["سهلة تبرمجها وتسوي منها تنبيهات.", "Easy to code and to build alerts from."]],
    con: [["كلها مشتقة من السعر، فهي متأخرة عنه.", "All derived from price, so they lag it."], ["في السوق العرضي تعطي إشارات كاذبة كثيرة.", "Many false signals in sideways markets."]],
    fit: ["للي يحب القواعد الواضحة والمبرمجين، ولقسم التحليل الفني في مِراس.", "Rule-lovers and programmers, and the technical page in Meras."] },
  { id: "elliott", lvl: 3, obj: 1, tf: ["متوسط وطويل", "Medium and long"],
    name: ["موجات إليوت", "Elliott Wave"],
    era: ["رالف نيلسون إليوت، نشرها في كتاب The Wave Principle سنة 1938.", "Ralph Nelson Elliott, published in The Wave Principle in 1938."],
    idea: ["السوق يتحرك بموجات تتكرر حسب نفسية الجمهور: 5 موجات مع الاتجاه (1-5) و3 موجات تصحيح (A-B-C)، وكل موجة فيها موجات أصغر بنفس الشكل.", "Markets move in repeating waves driven by crowd psychology: 5 waves with the trend (1-5) and 3 corrective waves (A-B-C), each made of smaller waves of the same shape."],
    tools: [["العد: 1-2-3-4-5 ثم A-B-C", "The count: 1-2-3-4-5 then A-B-C"], ["قواعد ثابتة: الموجة 2 ما تنزل تحت بداية 1، والموجة 3 ما تكون الأقصر، والموجة 4 ما تدخل منطقة 1", "Fixed rules: wave 2 never goes below the start of 1, wave 3 is never the shortest, wave 4 does not overlap wave 1"], ["نسب فيبوناتشي للأهداف والتصحيحات", "Fibonacci ratios for targets and retracements"]],
    how: [["ابدأ من الإطار الكبير (أسبوعي) وحدد وين احنا في العد.", "Start on the big timeframe (weekly) and locate where we are in the count."], ["أفضل فرصة عادة بداية الموجة 3 بعد ما تخلص الموجة 2.", "The best opportunity is usually the start of wave 3 after wave 2 ends."], ["إذا انكسرت قاعدة من القواعد الثلاث، عدّك غلط: غيره فوراً.", "If one of the three rules breaks, your count is wrong: change it immediately."]],
    pro: [["تعطيك خريطة كاملة: وين احنا ووين ممكن نروح.", "Gives a full map: where we are and where we may go."], ["تشتغل حلو مع فيبوناتشي.", "Works well with Fibonacci."]],
    con: [["صعبة جداً وفيها اجتهاد كبير: المحللين نادراً يتفقون على نفس العد.", "Very hard and subjective: analysts rarely agree on the same count."], ["سهل تعدّل العد بعد ما يتحرك السعر، فتحس إنها دايماً صح.", "Easy to re-count after price moves, so it always looks right in hindsight."]],
    fit: ["للمتقدم اللي عنده صبر، كخريطة عامة مو كنظام دخول.", "Advanced, patient analysts, as a general map rather than an entry system."] },
  { id: "harmonic", lvl: 3, obj: 2, tf: ["كل الأطر", "All timeframes"],
    name: ["الهارمونيك وفيبوناتشي", "Harmonics and Fibonacci"],
    era: ["بدأها هارولد جارتلي في كتابه سنة 1935، وسمّى سكوت كارني في التسعينات والألفينات نماذج مثل الخفاش والسرطان.", "Started by Harold Gartley in his 1935 book; Scott Carney named patterns such as the Bat and the Crab in the 1990s and 2000s."],
    idea: ["الحركات والتصحيحات تلتزم بنسب فيبوناتشي (0.382، 0.618، 0.786...). إذا اجتمعت نسب كثيرة عند سعر واحد، هذي منطقة انعكاس محتملة.", "Moves and pullbacks respect Fibonacci ratios (0.382, 0.618, 0.786...). Where several ratios meet at one price you get a potential reversal zone."],
    tools: [["تصحيحات وامتدادات فيبوناتشي", "Fibonacci retracements and extensions"], ["نماذج XABCD: جارتلي، الخفاش، الفراشة، السرطان", "XABCD patterns: Gartley, Bat, Butterfly, Crab"], ["منطقة الانعكاس المحتمل PRZ", "The potential reversal zone (PRZ)"]],
    how: [["حدد موجة X إلى A واضحة.", "Identify a clear X to A swing."], ["قِس التصحيح B ثم C، وشوف وش النموذج اللي تنطبق نسبه.", "Measure retracement B then C and see which pattern's ratios fit."], ["انتظر السعر يوصل D ويعطي شمعة رفض، والوقف شوي بعد D.", "Wait for price to reach D and show a rejection candle; stop just beyond D."]],
    pro: [["تعطيك نقطة دخول دقيقة ووقف قريب، فالعائد للمخاطرة حلو.", "Precise entry and tight stop, so good reward to risk."], ["النسب أرقام، مو إحساس.", "Ratios are numbers, not feelings."]],
    con: [["النماذج الكاملة قليلة، وكثير يغصبون النسب عشان تطلع.", "Clean patterns are rare, and many force the ratios to fit."], ["الأدلة العلمية على تفوقها محدودة.", "Limited scientific evidence of an edge."]],
    fit: ["للمتداول الدقيق اللي يحب الأرقام. وعندك في الشروحات دليل فيبوناتشي.", "Precise traders who like numbers. The Fibonacci guide is in Guides."] },
  { id: "wyckoff", lvl: 3, obj: 2, tf: ["يومي وأسبوعي", "Daily and weekly"],
    name: ["مدرسة وايكوف", "Wyckoff method"],
    era: ["ريتشارد وايكوف، متداول أمريكي (1873 إلى 1934) درس كيف يتحرك كبار المتداولين.", "Richard Wyckoff, an American trader (1873 to 1934) who studied how large operators move markets."],
    idea: ["الكبار (يسميهم \"الرجل المركب\") يجمعون الأسهم بهدوء في نطاق عرضي قبل الصعود، ويوزعونها في نطاق عرضي قبل الهبوط. السعر مع الحجم يكشفون وش يسوون.", "Large players (the \"Composite Man\") quietly accumulate in a sideways range before a rise and distribute in a range before a fall. Price with volume reveals what they are doing."],
    tools: [["3 قوانين: العرض والطلب، السبب والنتيجة، الجهد والنتيجة", "3 laws: supply and demand, cause and effect, effort versus result"], ["مراحل التجميع والتوزيع (A إلى E)", "Accumulation and distribution phases (A to E)"], ["الـ Spring: كسر كاذب تحت النطاق يصيد البائعين", "The Spring: a false break below the range that traps sellers"]],
    how: [["دوّر على سهم نزل كثير وبعدين صار يتحرك عرضي.", "Look for a share that fell hard and then went sideways."], ["راقب الحجم: هل الهبوطات داخل النطاق بحجم ضعيف؟", "Watch volume: are the drops inside the range on low volume?"], ["أقوى إشارة: Spring تحت النطاق ثم رجوع سريع داخله بحجم عالي.", "The strongest signal: a Spring below the range followed by a quick return inside on high volume."]],
    pro: [["تفهّمك ليش يتحرك السعر، مو بس كيف.", "Explains why price moves, not just how."], ["تنفع جداً لاصطياد بدايات الاتجاهات الكبيرة.", "Very useful for catching the start of big trends."]],
    con: [["تحتاج خبرة وصبر، والنطاقات تطول.", "Needs experience and patience; ranges can last long."], ["تحديد المراحل فيه اجتهاد.", "Labelling the phases is subjective."]],
    fit: ["للمستثمر والمتداول المتوسط المدى اللي يحب يقرأ الحجم.", "Medium-term investors and traders who like reading volume."] },
  { id: "volume", lvl: 2, obj: 3, tf: ["يومي وأقل", "Intraday and daily"],
    name: ["تحليل الحجم وبروفايل السوق", "Volume and Market Profile"],
    era: ["بيتر ستايدلماير في بورصة شيكاغو في الثمانينات (Market Profile)، وبعده انتشر Volume Profile والـ VWAP.", "J. Peter Steidlmayer at the Chicago Board of Trade in the 1980s (Market Profile); later Volume Profile and VWAP spread."],
    idea: ["مو مهم بس وين راح السعر، المهم وين انتداول أكثر شي. الأسعار اللي عندها حجم كبير تصير مغناطيس ودعم ومقاومة.", "What matters is not only where price went but where most trading happened. High-volume prices act as magnets, support and resistance."],
    tools: [["Volume Profile ونقطة التحكم POC", "Volume Profile and the point of control (POC)"], ["منطقة القيمة (70% من الحجم)", "The value area (70% of volume)"], ["VWAP: متوسط السعر المرجح بالحجم", "VWAP: the volume-weighted average price"]],
    how: [["حدد POC ومنطقة القيمة لأمس.", "Mark yesterday's POC and value area."], ["إذا فتح السعر داخل منطقة القيمة، غالباً يتحرك داخلها.", "If price opens inside the value area it tends to stay inside."], ["إذا طلع منها وثبت برا، ممكن يكون بداية حركة.", "If it leaves and holds outside, a move may be starting."]],
    pro: [["مبنية على بيانات حقيقية (الحجم)، مو رسم.", "Built on real data (volume), not drawings."], ["مستوياتها واضحة وثابتة.", "Clear, objective levels."]],
    con: [["تحتاج بيانات حجم دقيقة، وفي الفوركس الحجم تقريبي.", "Needs accurate volume data; forex volume is only approximate."], ["أقوى في التداول اليومي منها في الاستثمار.", "Stronger for day trading than for investing."]],
    fit: ["للمضارب اليومي في الأسهم والمؤشرات والعقود.", "Day traders in stocks, indices and futures."] },
  { id: "gann", lvl: 3, obj: 1, tf: ["متوسط وطويل", "Medium and long"],
    name: ["مدرسة جان", "Gann"],
    era: ["ويليام ديلبرت جان، متداول أمريكي (1878 إلى 1955).", "William Delbert Gann, an American trader (1878 to 1955)."],
    idea: ["الزمن والسعر مرتبطين بنسب هندسية: إذا انتهى زمن معين أو وصل السعر لزاوية معينة، يتوقع انعكاس.", "Time and price are linked by geometric ratios: when a certain time passes or price reaches a certain angle, a turn is expected."],
    tools: [["زوايا جان (1×1 = 45 درجة)", "Gann angles (1×1 = 45 degrees)"], ["مروحة جان ومربع التسعة", "The Gann fan and the Square of Nine"], ["الدورات الزمنية", "Time cycles"]],
    how: [["ارسم المروحة من قاع أو قمة مهمة.", "Draw the fan from a major low or high."], ["طالما السعر فوق زاوية 1×1 الاتجاه قوي.", "While price stays above the 1×1 angle the trend is strong."], ["راقب التواريخ اللي تتقاطع فيها الدورات.", "Watch dates where cycles cluster."]],
    pro: [["تضيف بُعد الزمن اللي أغلب المدارس تتجاهله.", "Adds the time dimension most schools ignore."]],
    con: [["أصعب مدرسة وأقلها دليل علمي، وكثير من أدواتها غامضة.", "The hardest school with the least scientific evidence; many tools are vague."], ["الزوايا تتغير حسب مقياس الشارت.", "The angles change with the chart's scale."]],
    fit: ["للفضول والاطلاع، وما ننصح فيها للمبتدئ.", "For curiosity and background; not recommended for beginners."] },
  { id: "smc", lvl: 2, obj: 1, tf: ["يومي وأقل", "Intraday and daily"],
    name: ["حركة السعر وSMC/ICT", "Price action and SMC/ICT"],
    era: ["حركة السعر قديمة، أما SMC (مفاهيم الأموال الذكية) وICT فانتشرت في العشر سنوات الأخيرة على يوتيوب، وأصلها أفكار وايكوف والكلاسيكية بأسماء جديدة.", "Price action is old; SMC (Smart Money Concepts) and ICT spread on YouTube in the last decade, largely Wyckoff and classical ideas under new names."],
    idea: ["السعر يروح يصيد السيولة (أوامر الوقف فوق القمم وتحت القيعان) قبل ما يتحرك في اتجاهه الحقيقي. تقرأ الشارت بدون مؤشرات.", "Price hunts liquidity (stop orders above highs and below lows) before moving in its real direction. You read the chart with no indicators."],
    tools: [["هيكل السوق: كسر الهيكل BOS وتغير الطابع MSS", "Market structure: break of structure (BOS) and market structure shift (MSS)"], ["السيولة والكسح Sweep", "Liquidity and the sweep"], ["الأوردر بلوك والفجوة السعرية FVG", "Order blocks and fair value gaps (FVG)"], ["مناطق الوقت (Killzones)", "Time windows (killzones)"]],
    how: [["حدد وين السيولة: قمم أو قيعان متساوية.", "Find the liquidity: equal highs or lows."], ["انتظر الكسح، ثم كسر هيكل في الاتجاه المعاكس.", "Wait for the sweep, then a structure break the other way."], ["ادخل عند رجوع السعر للفجوة FVG، والوقف ورا الكسح.", "Enter when price returns to the FVG, stop beyond the sweep."]],
    pro: [["نظيفة بدون مؤشرات، وتعطي وقف قريب.", "Clean, indicator-free, with tight stops."], ["تعلمك تفكر وين وقف الناس.", "Teaches you to think about where others' stops sit."]],
    con: [["فيها اجتهاد كبير وأسماء كثيرة لنفس الشي.", "Very subjective, with many names for the same thing."], ["في اختباراتنا على 4 سنوات من الذهب والناسداك والداكس والنيكاي، نموذج الكسح وكسر الهيكل ما طلع له أفضلية بعد التكاليف.", "In our 4-year tests on gold, Nasdaq, DAX and Nikkei, the sweep-plus-structure-break setup showed no edge after costs."]],
    fit: ["للمضارب اليومي، بشرط تختبرها بالأرقام قبل ما تثق فيها.", "Day traders, provided they test it in numbers before trusting it."] },
  { id: "fund", lvl: 2, obj: 2, tf: ["طويل", "Long"],
    name: ["التحليل الأساسي", "Fundamental analysis"],
    era: ["بنجامين جراهام وديفيد دود في كتاب Security Analysis سنة 1934، ومن تلاميذه وارن بافيت.", "Benjamin Graham and David Dodd in Security Analysis (1934); Warren Buffett was Graham's student."],
    idea: ["مو مدرسة فنية، بس لازم تعرفها: تقيّم الشركة نفسها (أرباحها، ديونها، نموها) وتشتري إذا السعر أقل من قيمتها الحقيقية.", "Not a technical school, but essential: you value the business itself (earnings, debt, growth) and buy when the price is below its true value."],
    tools: [["القوائم المالية: الدخل، الميزانية، التدفقات النقدية", "Financial statements: income, balance sheet, cash flow"], ["مكرر الربحية P/E والقيمة الدفترية P/B", "P/E and P/B ratios"], ["العائد على حقوق المساهمين ROE والتوزيعات", "Return on equity (ROE) and dividends"]],
    how: [["اختر شركة تفهم شغلها.", "Pick a business you understand."], ["قارن مكررها بمنافسيها وبتاريخها.", "Compare its multiple with peers and its own history."], ["كثير من المحترفين يختارون السهم بالأساسي ويوقّتون الدخول بالفني.", "Many professionals pick the share with fundamentals and time the entry with technicals."]],
    pro: [["تعرف وش تملك فعلاً.", "You know what you actually own."], ["الأنسب للاستثمار الطويل والتوزيعات.", "Best for long-term investing and dividends."]],
    con: [["بطيئة: السعر ممكن يبقى بعيد عن القيمة سنين.", "Slow: price can stay away from value for years."], ["ما تعطيك توقيت دخول.", "Gives no entry timing."]],
    fit: ["للمستثمر طويل المدى وصياد التوزيعات.", "Long-term investors and dividend seekers."] },
  { id: "quant", lvl: 3, obj: 3, tf: ["كل الأطر", "All timeframes"],
    name: ["التحليل الكمي", "Quantitative analysis"],
    era: ["انتشر مع الكمبيوتر وصناديق التحوط من الثمانينات، مثل رينيسانس تكنولوجيز.", "Spread with computers and hedge funds from the 1980s, such as Renaissance Technologies."],
    idea: ["أي فكرة من المدارس اللي فوق تتحول لقاعدة مكتوبة، وتُختبر على سنين من البيانات بعد التكاليف. اللي يثبت بالأرقام يبقى، والباقي ينرمى.", "Any idea from the schools above is turned into a written rule and tested on years of data after costs. What proves itself in numbers stays; the rest is dropped."],
    tools: [["الاختبار الرجعي Backtest", "Backtesting"], ["اختبار خارج العينة والاختبار الأمامي", "Out-of-sample and forward testing"], ["الإحصاء: متوسط العائد، فترة الثقة، أقصى تراجع", "Statistics: average return, confidence interval, maximum drawdown"]],
    how: [["اكتب القاعدة كاملة قبل ما تشوف النتيجة.", "Write the full rule before you see any result."], ["اختبرها على 70% من البيانات، واحكم عليها في الـ 30% الباقية.", "Build it on 70% of the data and judge it on the remaining 30%."], ["قارنها بدخول عشوائي، وإذا ما تفوقت عليه فما فيها أفضلية.", "Compare with random entries; if it does not beat them, there is no edge."]],
    pro: [["أصدق مدرسة: الأرقام ما تجامل.", "The most honest school: numbers do not flatter."], ["تحميك من الأوهام والقصص الحلوة.", "Protects you from illusions and nice stories."]],
    con: [["تحتاج برمجة وبيانات ووقت.", "Needs programming, data and time."], ["خطر الإفراط في المطابقة: قاعدة تنجح على الماضي بس.", "Overfitting risk: a rule that only works on the past."]],
    fit: ["للمبرمج والجاد. وهذي المدرسة اللي نشتغل فيها على وكيل Sentinel.", "Programmers and serious traders. This is the school behind our Sentinel agent."] }
];

function schMeter(n) { return '<span class="sch-m" aria-hidden="true">' + [1, 2, 3].map((i) => '<i class="' + (i <= n ? "on" : "") + '"></i>').join("") + "</span>"; }
function pageSchools() {
  const cards = SCHOOLS.map((s) => '<a class="panel guide-card" href="#sch-' + s.id + '"><div class="guide-thumb">' + schFig(s.id) + '</div><span class="tag amber">' + esc(t("sch_l" + s.lvl)) + "</span><h3>" + esc(L(s.name)) + '</h3><p class="muted">' + esc(L(s.idea)) + "</p></a>").join("");
  const table = '<div class="panel stack"><h2 style="margin:0">' + esc(t("sch_cmp")) + '</h2><div class="tablewrap"><table class="sch-tbl"><thead><tr><th>' + esc(t("sch_name")) + "</th><th>" + esc(t("sch_lvl")) + "</th><th>" + esc(t("sch_obj")) + "</th><th>" + esc(t("sch_tf")) + "</th></tr></thead><tbody>" +
    SCHOOLS.map((s) => '<tr><td><a href="#sch-' + s.id + '">' + esc(L(s.name)) + "</a></td><td>" + schMeter(s.lvl) + " " + esc(t("sch_l" + s.lvl)) + "</td><td>" + schMeter(s.obj) + " " + esc(t("sch_o" + s.obj)) + "</td><td>" + esc(L(s.tf)) + "</td></tr>").join("") + "</tbody></table></div></div>";
  const tip = '<div class="notice"><b>' + esc(t("sch_tip_h")) + ":</b> " + esc(t("sch_tip")) + "</div>";
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("sch_h")) + "</h1><p>" + esc(t("sch_p")) + '</p></div><div class="stack" style="padding-block:20px 40px">' + tip + '<div class="grid3">' + cards + "</div>" + table + '<p class="small muted" style="margin:0">' + esc(t("sch_note")) + "</p></div></div>";
}
function pageSchool(id) {
  const i = SCHOOLS.findIndex((x) => x.id === id); if (i < 0) return pageSchools();
  const s = SCHOOLS[i], nx = SCHOOLS[(i + 1) % SCHOOLS.length];
  const list = (arr) => "<ul>" + arr.map((x) => "<li>" + esc(L(x)) + "</li>").join("") + "</ul>";
  const sec = (k, inner, cls) => '<section class="panel stack' + (cls ? " " + cls : "") + '"><h2>' + esc(t(k)) + "</h2>" + inner + "</section>";
  return '<div class="wrap"><div class="guide-head"><div class="crumbs"><a href="#schools">' + esc(t("sch_h")) + "</a> / " + esc(L(s.name)) + "</div><h1>" + esc(L(s.name)) + "</h1><p>" + esc(L(s.idea)) + "</p>" +
    '<div class="row sch-facts"><span class="tag">' + esc(t("sch_lvl")) + ": " + esc(t("sch_l" + s.lvl)) + '</span><span class="tag">' + esc(t("sch_obj")) + ": " + esc(t("sch_o" + s.obj)) + '</span><span class="tag">' + esc(t("sch_tf")) + ": " + esc(L(s.tf)) + "</span></div></div>" +
    '<div class="stack" style="padding-block:16px 8px"><div class="gs-fig">' + schFig(s.id) + "</div>" +
    sec("sch_era", "<p>" + esc(L(s.era)) + "</p>") + sec("sch_tools", list(s.tools)) +
    sec("sch_how", '<ol class="sch-steps">' + s.how.map((x) => "<li>" + esc(L(x)) + "</li>").join("") + "</ol>") +
    '<div class="sch-pc">' + sec("sch_pro", list(s.pro), "sch-pro") + sec("sch_con", list(s.con), "sch-con") + "</div>" +
    sec("sch_fit", "<p>" + esc(L(s.fit)) + "</p>") + '<p class="small muted" style="margin:0">' + esc(t("sch_note")) + "</p></div>" +
    '<div class="row" style="justify-content:space-between;padding-block:8px 40px"><a class="btn" href="#schools">' + esc(t("sch_all")) + '</a><a class="btn" href="#chart">' + esc(t("sch_try")) + '</a><a class="btn primary" href="#sch-' + nx.id + '">' + esc(t("sch_next")) + ": " + esc(L(nx.name)) + "</a></div></div>";
}
