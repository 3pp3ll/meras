/* ===== محتوى مِراس: كل نص زوج [عربي, English] ===== */

/* أسعار نموذجية للتدريب. تُستبدل بملف prices.json من سهمك بعد ربط المفتاح. */
const SAMPLE_QUOTES = {
  "2222": { name: ["أرامكو السعودية", "Saudi Aramco"], price: 25.26, prev: 25.10, open: 25.12, high: 25.34, low: 25.06, volume: 9169694 },
  "1120": { name: ["مصرف الراجحي", "Al Rajhi Bank"], price: 96.40, prev: 97.10, open: 97.00, high: 97.30, low: 96.10, volume: 3412550 },
  "2010": { name: ["سابك", "SABIC"], price: 61.80, prev: 61.20, open: 61.30, high: 62.10, low: 61.10, volume: 1876320 },
  "7010": { name: ["اس تي سي", "stc"], price: 42.15, prev: 42.00, open: 42.05, high: 42.40, low: 41.90, volume: 2954100 },
  "1180": { name: ["البنك الأهلي السعودي", "Saudi National Bank"], price: 35.70, prev: 35.95, open: 35.90, high: 36.05, low: 35.55, volume: 4120780 },
  "2280": { name: ["المراعي", "Almarai"], price: 51.30, prev: 51.00, open: 51.00, high: 51.60, low: 50.85, volume: 812400 },
  "4190": { name: ["جرير", "Jarir"], price: 13.24, prev: 13.30, open: 13.30, high: 13.36, low: 13.18, volume: 1502300 },
  "1211": { name: ["معادن", "Ma'aden"], price: 54.90, prev: 53.80, open: 54.00, high: 55.20, low: 53.90, volume: 2233900 }
};

const TRACKS = [
  { id: "inv", name: ["المستثمر المبتدئ", "Beginner investor"], who: ["للي يبدأ من الصفر", "Starting from zero"],
    blurb: ["تفهم وش هو السهم، كيف يشتغل السوق السعودي، وكيف تقرأ شاشة السعر بدون ما تضيع.", "Understand what a share is, how the Saudi market works, and how to read a quote screen."] },
  { id: "trd", name: ["المتداول", "Trader"], who: ["للي يبي يقرأ الشارت", "For reading charts"],
    blurb: ["الشموع والحجم والدعم والمقاومة والاتجاه، كل درس على شارت تشوفه قدامك.", "Candles, volume, support, resistance and trend, each lesson on a chart in front of you."] },
  { id: "dev", name: ["المبرمج", "Developer"], who: ["للي يبي يبني أدواته", "For building your own tools"],
    blurb: ["من أول طلب API إلى سكربت Python يسحب أسعار السوق ويحترم حد الطلبات.", "From your first API request to a Python script that pulls market prices within the rate limit."] }
];

const LEVELS = {
  inv: [
    ["أساسيات السهم والسوق", "Shares and the market"],
    ["قراءة شاشة السعر", "Reading the quote screen"],
    ["القوائم المالية", "Financial statements"],
    ["التقييم والتوزيعات", "Valuation and dividends"],
    ["بناء المحفظة", "Building a portfolio"]
  ],
  trd: [
    ["الشموع والحجم", "Candles and volume"],
    ["الدعم والمقاومة والاتجاه", "Support, resistance and trend"],
    ["المؤشرات الفنية", "Technical indicators"],
    ["عمق السوق وأنواع الأوامر", "Market depth and order types"],
    ["إدارة المخاطر وخطة التداول", "Risk management and a trading plan"]
  ],
  dev: [
    ["أول طلب API", "Your first API request"],
    ["سحب الأسعار بـ Python", "Pulling prices with Python"],
    ["البيانات التاريخية وتحليلها", "Historical data and analysis"],
    ["داشبورد وتنبيهات", "Dashboards and alerts"],
    ["اختبار الاستراتيجيات", "Backtesting strategies"]
  ]
};

/* أنواع القطع: p فقرة، h عنوان، ul قائمة، note تنبيه، code كود، quote بطاقة سهم، fig رسم */
const LESSONS = [
  /* ---------- المستثمر: الدرجة 1 ---------- */
  { id: "inv-1-1", track: "inv", level: 1, mins: 6, title: ["ما هو السهم؟", "What is a share?"],
    body: [
      { p: ["السهم حصة ملكية في شركة. لما تشتري سهم في شركة مدرجة، تصير شريك فيها بنسبة صغيرة جداً: لك نصيب من أرباحها، ولك صوت في جمعيتها العمومية، وتتحمل معها الخسارة لو تراجعت.", "A share is a unit of ownership in a company. When you buy a share of a listed company you become a very small partner: you get a part of its profits, a vote at its general assembly, and you carry the loss with it if it declines."] },
      { h: ["من وين يجي العائد؟", "Where does the return come from?"] },
      { ul: [
        ["ارتفاع السعر: تشتري بسعر وتبيع بأعلى منه، والفرق ربح رأسمالي.", "Price rise: you buy at one price and sell higher. The difference is a capital gain."],
        ["التوزيعات: جزء من أرباح الشركة توزعه نقداً على المساهمين، وبعض الشركات ما توزع.", "Dividends: part of the company's profit paid in cash to shareholders. Some companies pay none."]
      ] },
      { h: ["ووين المخاطرة؟", "And where is the risk?"] },
      { p: ["السعر يتحرك كل يوم حسب العرض والطلب، وممكن ينزل تحت سعر شرائك ويبقى هناك مدة طويلة. الخسارة ما تتحقق إلا لما تبيع، لكن الفلوس اللي تحتاجها قريب ما ينفع تحطها في الأسهم.", "The price moves every day with supply and demand, and it can fall below what you paid and stay there for a long time. A loss is only realised when you sell, but money you need soon does not belong in shares."] },
      { quote: "2222" },
      { p: ["هذي بطاقة سهم أرامكو كمثال. الرقم الكبير هو آخر سعر تداول عليه السهم. لو اشتريت 100 سهم بهذا السعر، تكون دفعت السعر مضروب في 100، وصرت تملك 100 حصة من الشركة.", "This is Aramco's card as an example. The large number is the last traded price. If you bought 100 shares at that price, you paid the price times 100 and now own 100 units of the company."] }
    ],
    quiz: [
      { q: ["اشتريت 50 سهم بسعر 20 ريال. كم دفعت بدون العمولة؟", "You bought 50 shares at SAR 20. What did you pay before commission?"],
        opts: [["70 ريال", "SAR 70"], ["1,000 ريال", "SAR 1,000"], ["2,000 ريال", "SAR 2,000"]], a: 1,
        why: ["الكمية × السعر = 50 × 20 = 1,000 ريال.", "Quantity × price = 50 × 20 = SAR 1,000."] },
      { q: ["أي واحد من هذي مصدر عائد للمساهم؟", "Which of these is a source of return for a shareholder?"],
        opts: [["التوزيعات النقدية", "Cash dividends"], ["حجم التداول", "Trading volume"], ["عدد الصفقات", "Number of trades"]], a: 0,
        why: ["العائد يجي من ارتفاع السعر ومن التوزيعات. الحجم وعدد الصفقات معلومات عن النشاط وليست دخل.", "Return comes from price appreciation and dividends. Volume and trade count describe activity, not income."] }
    ] },

  { id: "inv-1-2", track: "inv", level: 1, mins: 7, title: ["تاسي ونمو وأوقات التداول", "TASI, Nomu and trading hours"],
    body: [
      { p: ["السوق المالية السعودية (تداول السعودية) فيها سوقين للأسهم. السوق الرئيسية ومؤشرها تاسي، وفيها الشركات الكبيرة والمعروفة. والسوق الموازية نمو، شروط الإدراج فيها أخف، وشركاتها أصغر، والتداول فيها مقصور على المستثمرين المؤهلين.", "The Saudi Exchange has two equity markets. The Main Market, tracked by the TASI index, lists the large well-known companies. The parallel market, Nomu, has lighter listing requirements, smaller companies, and is restricted to qualified investors."] },
      { h: ["المؤشر وش يقول؟", "What does the index tell you?"] },
      { p: ["تاسي رقم واحد يلخص حركة أسهم السوق الرئيسية مجتمعة. لو ارتفع المؤشر 1% فمعناه إن السوق في المجمل صعد، لكن سهمك ممكن يكون نازل في نفس اليوم.", "TASI is one number summarising the movement of Main Market shares together. If the index rises 1% the market as a whole went up, but your own share may still be down that day."] },
      { h: ["متى يشتغل السوق؟", "When is the market open?"] },
      { ul: [
        ["أيام التداول من الأحد إلى الخميس.", "Trading days run Sunday to Thursday."],
        ["مزاد الافتتاح 9:30 صباحاً، ثم التداول المستمر من 10:00 إلى 3:00 عصراً.", "Opening auction at 9:30, then continuous trading from 10:00 to 15:00."],
        ["بعدها مزاد الإغلاق اللي يتحدد فيه سعر الإغلاق الرسمي.", "A closing auction follows and sets the official closing price."]
      ] },
      { h: ["حدود التذبذب اليومية", "Daily price limits"] },
      { p: ["في السوق الرئيسية، السهم ما يتحرك في اليوم الواحد أكثر من 10% صعود أو هبوط عن إغلاق أمس. في نمو الحد 30%، وهذا واحد من أسباب إنها أخطر.", "On the Main Market a share cannot move more than 10% up or down in a day from the previous close. On Nomu the limit is 30%, one reason it is riskier."] },
      { note: ["الأوقات والأنظمة تتغير. المرجع الرسمي دائماً موقع تداول السعودية.", "Hours and rules change. The Saudi Exchange website is always the official reference."] }
    ],
    quiz: [
      { q: ["سهم في السوق الرئيسية أغلق أمس على 50 ريال. وش أعلى سعر ممكن يوصله اليوم؟", "A Main Market share closed yesterday at SAR 50. What is the highest it can reach today?"],
        opts: [["55 ريال", "SAR 55"], ["60 ريال", "SAR 60"], ["65 ريال", "SAR 65"]], a: 0,
        why: ["الحد 10% من إغلاق أمس: 50 + 5 = 55 ريال.", "The limit is 10% of the previous close: 50 + 5 = SAR 55."] },
      { q: ["ارتفع تاسي اليوم 1%. وش نقدر نقول؟", "TASI rose 1% today. What can we say?"],
        opts: [["كل الأسهم ارتفعت 1%", "Every share rose 1%"], ["السوق في المجمل ارتفع، وبعض الأسهم ممكن نزلت", "The market rose overall; some shares may have fallen"], ["سهمي أكيد رابح", "My share is certainly up"]], a: 1,
        why: ["المؤشر متوسط موزون لحركة السوق، وما يوصف كل سهم لحاله.", "The index is a weighted average of the market and does not describe each share individually."] }
    ] },

  /* ---------- المستثمر: الدرجة 2 ---------- */
  { id: "inv-2-1", track: "inv", level: 2, mins: 8, title: ["كيف تقرأ شاشة السعر", "How to read a quote screen"],
    body: [
      { p: ["أي منصة تداول تعرض لك نفس المجموعة من الأرقام عن السهم. لو فهمتها مرة، تقرأ أي شاشة بعدها.", "Every trading platform shows the same set of numbers for a share. Understand them once and you can read any screen."] },
      { quote: "1120" },
      { ul: [
        ["آخر سعر: سعر آخر صفقة تمت. هذا الرقم الكبير.", "Last price: the price of the most recent trade. This is the large number."],
        ["التغير: الفرق بين آخر سعر وإغلاق أمس، بالريال وبالنسبة المئوية.", "Change: the difference between the last price and yesterday's close, in riyals and as a percentage."],
        ["الافتتاح: أول سعر تداول عليه السهم اليوم.", "Open: the first traded price today."],
        ["الأعلى والأدنى: حدود حركة السهم خلال الجلسة.", "High and low: the range the share has traded in during the session."],
        ["إغلاق أمس: المرجع اللي ينحسب منه التغير وحدود التذبذب.", "Previous close: the reference used for the change and the daily limits."],
        ["الحجم: عدد الأسهم اللي تم تداولها اليوم.", "Volume: the number of shares traded today."]
      ] },
      { h: ["احسبها بنفسك", "Work it out yourself"] },
      { p: ["التغير = آخر سعر − إغلاق أمس. ونسبة التغير = التغير ÷ إغلاق أمس × 100. جرّبها على البطاقة فوق وتأكد إنها تطابق.", "Change = last price − previous close. Change % = change ÷ previous close × 100. Try it on the card above and check it matches."] },
      { note: ["لما تشوف علامة \"متأخر 15 دقيقة\" فالسعر اللي قدامك هو سعر السوق قبل ربع ساعة. يكفي للتعلم والتحليل، وما يكفي لتنفيذ صفقة لحظية.", "When you see \"delayed 15 minutes\" the price in front of you is the market price a quarter of an hour ago. Enough for learning and analysis, not for timing a live trade."] }
    ],
    quiz: [
      { q: ["إغلاق أمس 80 ريال وآخر سعر 82. كم نسبة التغير؟", "Previous close SAR 80, last price 82. What is the change %?"],
        opts: [["+2%", "+2%"], ["+2.5%", "+2.5%"], ["+8.2%", "+8.2%"]], a: 1,
        why: ["التغير 2 ريال، و 2 ÷ 80 × 100 = 2.5%.", "The change is SAR 2, and 2 ÷ 80 × 100 = 2.5%."] },
      { q: ["نسبة التغير تنحسب من أي رقم؟", "The change % is calculated from which number?"],
        opts: [["سعر الافتتاح", "The open"], ["أعلى سعر", "The high"], ["إغلاق أمس", "The previous close"]], a: 2,
        why: ["المرجع دائماً إغلاق أمس، مو افتتاح اليوم.", "The reference is always the previous close, not today's open."] }
    ] },

  { id: "inv-2-2", track: "inv", level: 2, mins: 7, title: ["القيمة السوقية والسيولة", "Market cap and liquidity"],
    body: [
      { p: ["سعر السهم لحاله ما يقول لك إذا الشركة كبيرة أو صغيرة. سهم بـ 20 ريال ممكن يكون لشركة أكبر بمئة مرة من شركة سهمها بـ 200 ريال.", "The share price alone does not tell you whether a company is large or small. A SAR 20 share can belong to a company a hundred times bigger than one whose share costs SAR 200."] },
      { h: ["القيمة السوقية", "Market capitalisation"] },
      { p: ["القيمة السوقية = سعر السهم × عدد الأسهم المصدرة. هذا تقدير السوق لقيمة الشركة كاملة. مثال افتراضي: شركة عندها 100 مليون سهم وسعرها 30 ريال، قيمتها السوقية 3 مليار ريال.", "Market cap = share price × shares outstanding. It is the market's estimate of the whole company's value. A hypothetical example: a company with 100 million shares at SAR 30 has a market cap of SAR 3 billion."] },
      { h: ["قيمة التداول والسيولة", "Value traded and liquidity"] },
      { p: ["الحجم يقول كم سهم تبادلوه اليوم، وقيمة التداول تقريباً هي الحجم × متوسط السعر. السهم اللي قيمة تداوله عالية سهل تدخل وتطلع منه. والسهم ضعيف السيولة ممكن ما تلقى مشتري بالسعر اللي تبيه وقت ما تبي تبيع.", "Volume tells you how many shares changed hands today, and value traded is roughly volume × average price. A share with high value traded is easy to enter and exit. With an illiquid share you may not find a buyer at your price when you want to sell."] },
      { quote: "2010" },
      { p: ["اضرب الحجم في آخر سعر على البطاقة فوق. الناتج تقدير تقريبي لقيمة التداول اليوم.", "Multiply the volume by the last price on the card above. The result is a rough estimate of today's value traded."] }
    ],
    quiz: [
      { q: ["شركة عندها 50 مليون سهم وسعر السهم 40 ريال. كم قيمتها السوقية؟", "A company has 50 million shares at SAR 40. What is its market cap?"],
        opts: [["200 مليون ريال", "SAR 200 million"], ["2 مليار ريال", "SAR 2 billion"], ["20 مليار ريال", "SAR 20 billion"]], a: 1,
        why: ["50,000,000 × 40 = 2,000,000,000 ريال.", "50,000,000 × 40 = SAR 2,000,000,000."] },
      { q: ["ليش السيولة تهم المستثمر؟", "Why does liquidity matter to an investor?"],
        opts: [["لأنها تضمن الربح", "It guarantees profit"], ["لأنها تسهّل الدخول والخروج بسعر قريب من السوق", "It makes entering and exiting near the market price easier"], ["لأنها ترفع التوزيعات", "It raises dividends"]], a: 1,
        why: ["السيولة ما لها علاقة بالربح أو التوزيعات. فايدتها إنك تلقى طرف ثاني للصفقة بسهولة.", "Liquidity has nothing to do with profit or dividends. Its benefit is finding a counterparty easily."] }
    ] },

  /* ---------- المتداول: الدرجة 1 ---------- */
  { id: "trd-1-1", track: "trd", level: 1, mins: 7, title: ["الشمعة اليابانية", "The candlestick"],
    body: [
      { p: ["الشمعة تلخص حركة السعر خلال فترة واحدة (يوم، ساعة، دقيقة) في أربعة أرقام: الافتتاح، الأعلى، الأدنى، والإغلاق.", "A candle summarises price movement over one period (a day, an hour, a minute) in four numbers: open, high, low and close."] },
      { fig: "anatomy", cap: ["شمعة صاعدة وشمعة هابطة. الجسم بين الافتتاح والإغلاق، والذيول توصل للأعلى والأدنى.", "A rising and a falling candle. The body spans open to close; the wicks reach the high and low."] },
      { ul: [
        ["الجسم: المسافة بين الافتتاح والإغلاق.", "Body: the distance between open and close."],
        ["الذيل العلوي والسفلي: أقصى ما وصله السعر فوق وتحت الجسم.", "Upper and lower wick: how far price travelled above and below the body."],
        ["شمعة خضراء: الإغلاق أعلى من الافتتاح، المشترين غلبوا في هذي الفترة.", "Green candle: the close is above the open; buyers won this period."],
        ["شمعة حمراء: الإغلاق أقل من الافتتاح، البائعين غلبوا.", "Red candle: the close is below the open; sellers won."]
      ] },
      { h: ["وش تقول لك الذيول؟", "What do the wicks tell you?"] },
      { p: ["ذيل علوي طويل معناه إن السعر صعد ثم انرفض ورجع. ذيل سفلي طويل معناه إنه نزل ثم لقى مشترين رجّعوه. الشمعة الواحدة معلومة، وما تصير إشارة إلا مع سياق الشموع اللي قبلها.", "A long upper wick means price went up and was rejected. A long lower wick means it fell and found buyers who pushed it back. One candle is information; it only becomes a signal in the context of the candles before it."] }
    ],
    quiz: [
      { q: ["شمعة افتتاحها 30 وإغلاقها 28. وش لونها؟", "A candle opens at 30 and closes at 28. What colour is it?"],
        opts: [["خضراء", "Green"], ["حمراء", "Red"], ["ما نقدر نعرف", "Cannot tell"]], a: 1,
        why: ["الإغلاق أقل من الافتتاح، فهي شمعة هابطة حمراء.", "The close is below the open, so it is a falling red candle."] },
      { q: ["ذيل علوي طويل مع جسم صغير يدل على وش؟", "A long upper wick with a small body suggests what?"],
        opts: [["السعر صعد ثم انرفض", "Price rose and was rejected"], ["السعر ما تحرك", "Price did not move"], ["الحجم كان عالي", "Volume was high"]], a: 0,
        why: ["الذيل يبيّن أقصى ما وصله السعر قبل ما يرجع. والشمعة ما تعطي أي معلومة عن الحجم.", "The wick shows how far price went before turning back. A candle says nothing about volume."] }
    ] },

  { id: "trd-1-2", track: "trd", level: 1, mins: 6, title: ["الحجم والإطار الزمني", "Volume and timeframe"],
    body: [
      { p: ["الشارت يجاوب على سؤالين: وين راح السعر، وكم واحد كان معه. الشموع تجاوب الأول، والحجم يجاوب الثاني.", "A chart answers two questions: where did price go, and how many went with it. Candles answer the first; volume answers the second."] },
      { fig: "range", cap: ["شارت يومي نموذجي. كل شمعة يوم تداول واحد.", "An illustrative daily chart. Each candle is one trading day."] },
      { h: ["الحجم يأكد الحركة", "Volume confirms the move"] },
      { ul: [
        ["صعود بحجم أعلى من المعتاد: فيه طلب حقيقي ورا الحركة.", "A rise on above-average volume: real demand is behind the move."],
        ["صعود بحجم ضعيف: الحركة هشة وممكن ترجع بسرعة.", "A rise on weak volume: the move is fragile and may reverse quickly."],
        ["قارن حجم اليوم بمتوسط الأيام اللي قبله، مو برقم ثابت.", "Compare today's volume with the average of preceding days, not with a fixed number."]
      ] },
      { h: ["الإطار الزمني", "Timeframe"] },
      { p: ["نفس السهم يعطيك صورة مختلفة على شارت يومي وشارت ساعة. اختر الإطار اللي يناسب مدة صفقتك: اللي يحتفظ أسابيع يقرأ اليومي، واللي يتداول في نفس اليوم يقرأ الدقايق. والبيانات المتأخرة 15 دقيقة تكفي تماماً للإطار اليومي.", "The same share looks different on a daily and an hourly chart. Pick the timeframe that matches how long you hold: weeks means reading the daily; intraday means reading minutes. Data delayed 15 minutes is entirely sufficient for the daily timeframe."] }
    ],
    quiz: [
      { q: ["سهم اخترق قمة سابقة لكن بحجم أقل من متوسطه. وش الأنسب؟", "A share breaks a previous high but on below-average volume. What is the sensible reading?"],
        opts: [["اختراق مؤكد", "A confirmed breakout"], ["اختراق يحتاج حذر لأن الطلب ضعيف", "A breakout to treat with caution because demand is weak"], ["الحجم ما له علاقة", "Volume is irrelevant"]], a: 1,
        why: ["الحجم الضعيف يعني إن قليل شاركوا في الحركة، فاحتمال فشلها أعلى.", "Weak volume means few participated in the move, so it is more likely to fail."] },
      { q: ["تخطط تحتفظ بالسهم عدة أسابيع. أي إطار تبدأ فيه؟", "You plan to hold for several weeks. Which timeframe do you start with?"],
        opts: [["دقيقة واحدة", "One minute"], ["اليومي", "Daily"], ["خمس ثواني", "Five seconds"]], a: 1,
        why: ["الإطار يتبع مدة الصفقة. الأسابيع تنقرأ على اليومي.", "The timeframe follows the holding period. Weeks are read on the daily."] }
    ] },

  /* ---------- المتداول: الدرجة 2 ---------- */
  { id: "trd-2-1", track: "trd", level: 2, mins: 8, title: ["الدعم والمقاومة", "Support and resistance"],
    body: [
      { p: ["الدعم منطقة سعرية نزل لها السهم أكثر من مرة ولقى عندها مشترين فارتد. والمقاومة منطقة صعد لها أكثر من مرة ولقى عندها بائعين فتراجع.", "Support is a price area the share has fallen to more than once and found buyers. Resistance is an area it has risen to more than once and found sellers."] },
      { fig: "sr", cap: ["الخط الأخضر دعم والأحمر مقاومة. لاحظ عدد المرات اللي لمس فيها السعر كل خط.", "The green line is support and the red is resistance. Count how many times price touched each."] },
      { h: ["كيف ترسمها؟", "How do you draw them?"] },
      { ul: [
        ["دوّر على قاعين أو أكثر عند نفس المستوى تقريباً ووصّل بينهم: هذا دعم.", "Find two or more lows at roughly the same level and connect them: that is support."],
        ["نفس الشي مع القمم: هذي مقاومة.", "Do the same with highs: that is resistance."],
        ["تعامل معها كمنطقة مو خط دقيق. السعر يخترقها بهللات ويرجع.", "Treat them as zones, not exact lines. Price pierces them by a few halalas and returns."],
        ["كل ما زادت اللمسات، زادت أهمية المستوى.", "The more touches, the more the level matters."]
      ] },
      { h: ["لما ينكسر المستوى", "When a level breaks"] },
      { p: ["المقاومة اللي تنخترق وتثبت فوقها الأسعار تتحول غالباً إلى دعم، والعكس صحيح. وهذا يعطيك مكان منطقي لوقف الخسارة: تحت الدعم بمسافة بسيطة.", "Resistance that is broken and held often turns into support, and the reverse. This gives you a logical place for a stop-loss: slightly below support."] }
    ],
    quiz: [
      { q: ["سهم ارتد ثلاث مرات من منطقة 48 ريال. وش نسمي هذي المنطقة؟", "A share has bounced three times from around SAR 48. What is that area called?"],
        opts: [["مقاومة", "Resistance"], ["دعم", "Support"], ["فجوة", "A gap"]], a: 1,
        why: ["المنطقة اللي يرتد منها السعر للأعلى هي دعم.", "The area price bounces up from is support."] },
      { q: ["اخترق السعر مقاومة 54 وثبت فوقها. وش المتوقع لمستوى 54؟", "Price broke resistance at 54 and held above it. What is expected of the 54 level?"],
        opts: [["يتحول إلى دعم", "It turns into support"], ["يختفي", "It disappears"], ["يبقى مقاومة", "It stays resistance"]], a: 0,
        why: ["المستويات تتبادل الأدوار: المقاومة المكسورة تصير دعم.", "Levels swap roles: broken resistance becomes support."] }
    ] },

  { id: "trd-2-2", track: "trd", level: 2, mins: 7, title: ["الاتجاه", "Trend"],
    body: [
      { p: ["الاتجاه هو الجهة اللي يمشي فيها السعر على المدى اللي تراقبه. وتعريفه بسيط وما يحتاج مؤشرات.", "Trend is the direction price is travelling on the horizon you are watching. Its definition is simple and needs no indicators."] },
      { fig: "trend", cap: ["اتجاه صاعد: كل قاع أعلى من القاع اللي قبله.", "An uptrend: each low is higher than the one before."] },
      { ul: [
        ["اتجاه صاعد: قمم أعلى وقيعان أعلى.", "Uptrend: higher highs and higher lows."],
        ["اتجاه هابط: قمم أدنى وقيعان أدنى.", "Downtrend: lower highs and lower lows."],
        ["مسار عرضي: السعر يتحرك بين دعم ومقاومة بدون جهة واضحة.", "Range: price moves between support and resistance with no clear direction."]
      ] },
      { h: ["خط الاتجاه", "The trend line"] },
      { p: ["في الاتجاه الصاعد وصّل بين قاعين صاعدين ومد الخط. طول ما السعر فوقه، الاتجاه قائم. كسر الخط مع قاع أدنى من اللي قبله أول علامة على إن الاتجاه تغيّر.", "In an uptrend, connect two rising lows and extend the line. While price is above it, the trend stands. A break of the line with a lower low is the first sign the trend has changed."] },
      { p: ["القاعدة العملية للمبتدئ: تداول مع الاتجاه. الشراء في اتجاه صاعد عند ارتداد من الدعم أسهل بكثير من محاولة صيد القاع في اتجاه هابط.", "The practical rule for a beginner: trade with the trend. Buying a pullback to support in an uptrend is far easier than trying to catch the bottom in a downtrend."] }
    ],
    quiz: [
      { q: ["القيعان الأخيرة: 40 ثم 42 ثم 45. والقمم: 46 ثم 49 ثم 52. وش الاتجاه؟", "Recent lows: 40, 42, 45. Highs: 46, 49, 52. What is the trend?"],
        opts: [["صاعد", "Up"], ["هابط", "Down"], ["عرضي", "Sideways"]], a: 0,
        why: ["قمم أعلى وقيعان أعلى = اتجاه صاعد.", "Higher highs and higher lows = uptrend."] },
      { q: ["وش أول علامة على تغيّر اتجاه صاعد؟", "What is the first sign an uptrend has changed?"],
        opts: [["شمعة حمراء واحدة", "One red candle"], ["كسر خط الاتجاه مع قاع أدنى من السابق", "A break of the trend line with a lower low"], ["ارتفاع الحجم", "A rise in volume"]], a: 1,
        why: ["شمعة حمراء وحدة شي طبيعي داخل أي اتجاه صاعد. التغيّر يبان لما ينكسر تسلسل القيعان.", "One red candle is normal inside any uptrend. The change shows when the sequence of lows breaks."] }
    ] },

  /* ---------- المتداول: الدرجة 3 ---------- */
  { id: "trd-3-1", track: "trd", level: 3, mins: 9, title: ["المتوسطات المتحركة", "Moving averages"],
    body: [
      { p: ["المتوسط المتحرك البسيط (SMA) هو متوسط إغلاقات آخر عدد من الشموع. متوسط 5 يعني: اجمع آخر خمس إغلاقات واقسم على خمسة. مع كل شمعة جديدة تدخل إغلاقها وتطلع أقدم وحدة، فيتحرك المتوسط مع السعر.", "A simple moving average (SMA) is the average of the closes of the last several candles. A 5-period average means: add the last five closes and divide by five. With each new candle its close comes in and the oldest drops out, so the average moves with price."] },
      { h: ["احسبها بيدك مرة", "Work one out by hand"] },
      { p: ["آخر خمس إغلاقات: 50 و51 و53 و52 و54. المجموع 260، والمتوسط 260 ÷ 5 = 52. لو أغلقت الشمعة الجاية على 56، تطلع الـ 50 وتدخل الـ 56: المجموع 266 والمتوسط 53.2.", "The last five closes: 50, 51, 53, 52, 54. The sum is 260 and the average is 260 ÷ 5 = 52. If the next candle closes at 56, the 50 leaves and the 56 enters: the sum is 266 and the average 53.2."] },
      { h: ["وش يفيدك؟", "What is it for?"] },
      { ul: [
        ["ينعّم الحركة: يشيل ضجيج الشموع اليومية ويبيّن الجهة العامة.", "It smooths movement: it removes the noise of daily candles and shows the general direction."],
        ["السعر فوق متوسط صاعد: الاتجاه صاعد على هذا المدى. تحت متوسط هابط: الاتجاه هابط.", "Price above a rising average: the trend is up on that horizon. Below a falling average: the trend is down."],
        ["الفترة القصيرة (5 أو 10) سريعة وتعطي إشارات كثيرة بعضها كاذب. الفترة الطويلة (20 أو 50) أهدأ وأبطأ.", "A short period (5 or 10) is fast and gives many signals, some false. A long period (20 or 50) is calmer and slower."]
      ] },
      { h: ["التقاطع", "The crossover"] },
      { p: ["لما يقطع المتوسط القصير المتوسط الطويل من تحت لفوق، فمعناه إن الحركة الأخيرة أقوى من الحركة الأقدم، وكثير من المتداولين يعتبرونها إشارة صعود. والعكس إشارة هبوط. في المسار العرضي التقاطعات تكثر وتفشل، فلا تعتمد عليها هناك.", "When the short average crosses the long one from below, recent movement is stronger than older movement, and many traders read it as a bullish signal. The reverse is bearish. In a range, crossovers multiply and fail, so do not rely on them there."] },
      { note: ["المتوسط مؤشر متأخر: يأكد حركة صارت وما يتنبأ بحركة جاية. ومتوسط 20 ما يظهر إلا بعد 20 شمعة، فلو عندك شموع قليلة ابدأ بفترة 3 أو 5.", "An average lags: it confirms a move that has happened and does not predict the next one. A 20-period average only appears after 20 candles, so with few candles start with a period of 3 or 5."] },
      { h: ["تمرين على الشارت", "Exercise on the chart"] },
      { ul: [
        ["افتح السهم التدريبي أ وشغّل متوسط 5 ومتوسط 20.", "Open practice share A and switch on the 5 and 20 averages."],
        ["دوّر على مكان قطع فيه متوسط 5 متوسط 20 للأعلى. وش صار للسعر بعدها؟", "Find where the 5 crossed above the 20. What did price do afterwards?"],
        ["بدّل للسهم التدريبي ب (العرضي) ولاحظ كم تقاطع فشل.", "Switch to practice share B (the range) and notice how many crossovers failed."]
      ] },
      { open: "chart" }
    ],
    quiz: [
      { q: ["آخر ثلاث إغلاقات: 20 و22 و24. كم متوسط 3؟", "The last three closes: 20, 22, 24. What is the 3-period average?"],
        opts: [["21", "21"], ["22", "22"], ["24", "24"]], a: 1,
        why: ["(20 + 22 + 24) ÷ 3 = 22.", "(20 + 22 + 24) ÷ 3 = 22."] },
      { q: ["ليش تقاطعات المتوسطات تفشل كثير في المسار العرضي؟", "Why do crossovers often fail in a range?"],
        opts: [["لأن السعر يتذبذب بدون اتجاه، فالمتوسطات تتقاطع رايح جاي", "Price oscillates with no direction, so the averages keep crossing back and forth"], ["لأن الحجم قليل", "Because volume is low"], ["لأن المتوسط ما ينحسب في العرضي", "Because averages are not calculated in a range"]], a: 0,
        why: ["المتوسطات تتبع الاتجاه. إذا ما فيه اتجاه، إشاراتها ضجيج.", "Averages follow trend. With no trend their signals are noise."] }
    ] },

  { id: "trd-3-2", track: "trd", level: 3, mins: 9, title: ["مؤشر القوة النسبية RSI", "The relative strength index (RSI)"],
    body: [
      { p: ["RSI رقم بين 0 و100 يقيس قوة الصعود مقابل قوة الهبوط خلال عدد من الشموع، والفترة المعتادة 14. يقارن متوسط مكاسب الشموع الصاعدة بمتوسط خسائر الشموع الهابطة. كل ما غلبت المكاسب، قرب الرقم من 100.", "RSI is a number between 0 and 100 measuring the strength of rises against falls over a number of candles; the usual period is 14. It compares the average gain of rising candles with the average loss of falling ones. The more gains dominate, the closer it gets to 100."] },
      { h: ["المناطق", "The zones"] },
      { ul: [
        ["فوق 70: تشبع شرائي. السعر صعد بسرعة، واحتمال التهدئة أو التصحيح يزيد.", "Above 70: overbought. Price has risen fast and the chance of a pause or pullback grows."],
        ["تحت 30: تشبع بيعي. السعر نزل بسرعة، واحتمال الارتداد يزيد.", "Below 30: oversold. Price has fallen fast and the chance of a bounce grows."],
        ["حول 50: ما فيه غلبة واضحة.", "Around 50: neither side dominates."]
      ] },
      { h: ["الخطأ الشائع", "The common mistake"] },
      { p: ["فوق 70 ما تعني بيع، وتحت 30 ما تعني شراء. في اتجاه صاعد قوي يبقى RSI فوق 70 أسابيع والسعر يكمل صعود. المؤشر يشتغل أحسن شي في المسار العرضي، لما يتحرك السعر بين دعم ومقاومة: تشبع بيعي عند الدعم يقوّي فكرة الشراء، وتشبع شرائي عند المقاومة يقوّي فكرة الخروج.", "Above 70 does not mean sell, and below 30 does not mean buy. In a strong uptrend RSI stays above 70 for weeks while price keeps rising. The indicator works best in a range, when price moves between support and resistance: oversold at support strengthens the case to buy, overbought at resistance strengthens the case to exit."] },
      { h: ["الفترة", "The period"] },
      { p: ["فترة 14 تحتاج 15 شمعة قبل ما يظهر أول رقم. فترة أقصر مثل 5 تظهر أسرع وتتحرك بعنف وتوصل 70 و30 كثير، فإشاراتها أقل موثوقية. جرّب الفرق بنفسك.", "A period of 14 needs 15 candles before the first value appears. A shorter period such as 5 appears sooner, swings harder and hits 70 and 30 often, so its signals are less reliable. Try the difference yourself."] },
      { h: ["تمرين على الشارت", "Exercise on the chart"] },
      { ul: [
        ["افتح السهم التدريبي ب وشغّل RSI بفترة 14.", "Open practice share B and switch on RSI with period 14."],
        ["ارسم خط الدعم وخط المقاومة بالخط الأفقي.", "Draw support and resistance with the horizontal line."],
        ["شوف قراءة RSI كل مرة لمس السعر الدعم. ثم غيّر الفترة إلى 5 وقارن.", "Read RSI each time price touched support. Then change the period to 5 and compare."]
      ] },
      { open: "chart" }
    ],
    quiz: [
      { q: ["RSI وصل 78 في سهم باتجاه صاعد قوي. وش القراءة الأنسب؟", "RSI reads 78 on a share in a strong uptrend. What is the sensible reading?"],
        opts: [["بيع فوراً", "Sell at once"], ["الزخم قوي، وممكن يستمر، فلا تعتمد على الرقم لحاله", "Momentum is strong and may continue, so do not rely on the number alone"], ["السهم بينزل أكيد", "The share will certainly fall"]], a: 1,
        why: ["التشبع الشرائي في اتجاه قوي يستمر طويلاً. يحتاج تأكيد من السعر نفسه.", "Overbought can persist for a long time in a strong trend. It needs confirmation from price itself."] },
      { q: ["وين تكون إشارات RSI أكثر فايدة؟", "Where are RSI signals most useful?"],
        opts: [["في المسار العرضي عند الدعم والمقاومة", "In a range, at support and resistance"], ["في أي وقت", "At any time"], ["في الاتجاه القوي فقط", "Only in a strong trend"]], a: 0,
        why: ["في العرضي السعر يرتد بين حدين، والتشبع عند الحد يأكد الارتداد.", "In a range price bounces between two bounds, and an extreme reading at the bound confirms the bounce."] }
    ] },

  /* ---------- المبرمج: الدرجة 1 ---------- */
  { id: "dev-1-1", track: "dev", level: 1, mins: 6, title: ["ما هو الـ API ومفتاحك", "What an API is, and your key"],
    body: [
      { p: ["الـ API طريقة يطلب فيها برنامجك بيانات من برنامج ثاني. بدل ما تفتح موقع وتقرأ السعر بعينك، برنامجك يرسل طلب لعنوان محدد ويرجع له الجواب كنص منظم (JSON) يقدر يقرأه ويحسب عليه.", "An API is how your program asks another program for data. Instead of opening a site and reading a price with your eyes, your program sends a request to a specific address and gets back structured text (JSON) it can read and compute with."] },
      { h: ["ثلاث أجزاء لأي طلب", "Three parts of any request"] },
      { ul: [
        ["العنوان الأساسي: https://api.sahmk.sa/api/v1", "Base URL: https://api.sahmk.sa/api/v1"],
        ["المسار: وش تبي بالضبط، مثل /quote/2222/ لسعر سهم.", "Path: what exactly you want, such as /quote/2222/ for a share price."],
        ["المفتاح: يرسل في ترويسة اسمها X-API-Key عشان الخدمة تعرف مين أنت.", "Key: sent in a header named X-API-Key so the service knows who you are."]
      ] },
      { h: ["المفتاح مثل كلمة السر", "The key is like a password"] },
      { ul: [
        ["لا تكتبه داخل كود ترفعه على مستودع عام.", "Never write it into code you push to a public repository."],
        ["احفظه في متغير بيئة على جهازك، أو في Secrets على GitHub.", "Keep it in an environment variable on your machine, or in GitHub Secrets."],
        ["لو انكشف، احذفه من لوحة التحكم وأنشئ واحد جديد.", "If it leaks, delete it from the dashboard and create a new one."]
      ] },
      { code: "# macOS / Linux\nexport SAHMK_API_KEY=\"your_key\"\n\n# Windows (PowerShell)\n$env:SAHMK_API_KEY = \"your_key\"", name: "terminal" },
      { note: ["الباقة المجانية تعطيك 100 طلب في اليوم بأسعار متأخرة 15 دقيقة. كل ضغطة تشغيل لسكربتك تاكل من هذا الرصيد، فاحسب طلباتك.", "The free plan gives 100 requests a day with prices delayed 15 minutes. Every run of your script uses that allowance, so count your requests."] }
    ],
    quiz: [
      { q: ["وين أأمن مكان تحفظ فيه مفتاح الـ API؟", "Where is the safest place to keep an API key?"],
        opts: [["داخل ملف الكود", "Inside the code file"], ["في متغير بيئة أو Secrets", "In an environment variable or Secrets"], ["في اسم المستودع", "In the repository name"]], a: 1,
        why: ["المفتاح لازم يبقى برا الكود، عشان ما ينرفع معه.", "The key must stay outside the code so it is not uploaded with it."] },
      { q: ["بأي ترويسة يرسل مفتاح سهمك؟", "Which header carries the SAHMK key?"],
        opts: [["Authorization", "Authorization"], ["X-API-Key", "X-API-Key"], ["Content-Type", "Content-Type"]], a: 1,
        why: ["وثائق سهمك تستخدم الترويسة X-API-Key.", "The SAHMK docs use the X-API-Key header."] }
    ] },

  { id: "dev-1-2", track: "dev", level: 1, mins: 7, title: ["أول طلب بـ curl", "Your first request with curl"],
    body: [
      { p: ["curl أداة سطر أوامر موجودة في أغلب الأجهزة، ترسل طلب وتطبع الجواب. أسرع طريقة تتأكد إن مفتاحك شغال قبل ما تكتب أي كود.", "curl is a command-line tool found on most machines that sends a request and prints the reply. It is the fastest way to confirm your key works before writing any code."] },
      { code: "curl -H \"X-API-Key: $SAHMK_API_KEY\" \\\n     https://api.sahmk.sa/api/v1/quote/2222/", name: "request" },
      { p: ["المعرّف في آخر المسار ممكن يكون رمز السهم، أو اسمه بالعربي أو الإنجليزي. والجواب يرجع بهذا الشكل:", "The identifier at the end of the path can be the symbol, or the Arabic or English name. The reply comes back in this shape:"] },
      { code: "{\n  \"symbol\": \"2222\",\n  \"name\": \"أرامكو السعودية\",\n  \"name_en\": \"Saudi Arabian Oil Co\",\n  \"price\": 25.26,\n  \"change\": 0,\n  \"change_percent\": 0,\n  \"volume\": 9169694,\n  \"is_delayed\": false\n}", name: "response.json" },
      { h: ["اقرأ الحقول", "Read the fields"] },
      { ul: [
        ["symbol: رمز السهم في تداول.", "symbol: the share's ticker on the exchange."],
        ["price: آخر سعر.", "price: the last price."],
        ["change و change_percent: التغير عن إغلاق أمس بالريال وبالنسبة.", "change and change_percent: the move from the previous close in riyals and percent."],
        ["volume: عدد الأسهم المتداولة.", "volume: the number of shares traded."],
        ["is_delayed: لو true فالسعر متأخر 15 دقيقة. افحصه دائماً قبل ما تعرض السعر لأي أحد.", "is_delayed: if true the price is 15 minutes old. Always check it before showing a price to anyone."]
      ] },
      { note: ["لو رجع لك خطأ بدل البيانات، أول شي تفحصه: هل المفتاح مكتوب صح، وهل خلصت طلبات اليوم.", "If you get an error instead of data, check first whether the key is typed correctly and whether today's requests are used up."] }
    ],
    quiz: [
      { q: ["الحقل is_delayed رجع true. وش معناه؟", "The is_delayed field came back true. What does it mean?"],
        opts: [["الطلب فشل", "The request failed"], ["السعر متأخر عن السوق", "The price lags the market"], ["السوق مقفل", "The market is closed"]], a: 1,
        why: ["true تعني إن السعر متأخر (15 دقيقة في الباقة المجانية).", "true means the price is delayed (15 minutes on the free plan)."] },
      { q: ["أي مسار يرجع سعر سهم الراجحي (1120)؟", "Which path returns the Al Rajhi (1120) quote?"],
        opts: [["/quote/1120/", "/quote/1120/"], ["/price?id=1120", "/price?id=1120"], ["/stocks/rajhi", "/stocks/rajhi"]], a: 0,
        why: ["المسار هو /quote/ ثم المعرّف.", "The path is /quote/ followed by the identifier."] }
    ] },

  /* ---------- المبرمج: الدرجة 2 ---------- */
  { id: "dev-2-1", track: "dev", level: 2, mins: 8, title: ["سعر سهم بـ Python", "A share price in Python"],
    body: [
      { p: ["نفس الطلب اللي سويته بـ curl نكتبه الحين بـ Python، عشان نقدر نحسب على النتيجة. تحتاج مكتبة requests: ثبّتها بالأمر pip install requests.", "The same request you made with curl, now in Python so we can compute on the result. You need the requests library: install it with pip install requests."] },
      { code: "import os\nimport requests\n\nAPI_KEY = os.environ[\"SAHMK_API_KEY\"]   # read the key from the environment\nBASE_URL = \"https://api.sahmk.sa/api/v1\"\n\ndef get_quote(symbol):\n    r = requests.get(\n        f\"{BASE_URL}/quote/{symbol}/\",\n        headers={\"X-API-Key\": API_KEY},\n        timeout=10,\n    )\n    r.raise_for_status()               # stop on 4xx / 5xx\n    return r.json()\n\nq = get_quote(\"2222\")\nprint(f\"{q['name_en']}: {q['price']} SAR ({q['change_percent']}%)\")", name: "quote.py" },
      { h: ["ثلاث عادات من أول يوم", "Three habits from day one"] },
      { ul: [
        ["المفتاح ينقرأ من البيئة عبر os.environ، وما ينكتب في الملف.", "The key is read from the environment through os.environ, never written in the file."],
        ["timeout يمنع السكربت من الانتظار للأبد لو الشبكة علّقت.", "timeout stops the script waiting forever if the network hangs."],
        ["raise_for_status يوقف السكربت بخطأ واضح بدل ما يكمل على بيانات ناقصة.", "raise_for_status stops the script with a clear error instead of continuing on missing data."]
      ] },
      { h: ["تمرين", "Exercise"] },
      { p: ["غيّر الرمز إلى سهم ثاني، واطبع قيمة التداول التقريبية: الحجم × السعر. هذا نفس الحساب اللي في درس السيولة بمسار المستثمر.", "Change the symbol to another share and print the approximate value traded: volume × price. It is the same calculation as the liquidity lesson in the investor track."] }
    ],
    quiz: [
      { q: ["وش فايدة raise_for_status()؟", "What does raise_for_status() do?"],
        opts: [["تسرّع الطلب", "Speeds up the request"], ["ترمي خطأ لو الخدمة رجّعت رمز فشل", "Raises an error if the service returned a failure code"], ["تخفي المفتاح", "Hides the key"]], a: 1,
        why: ["بدونها ممكن تكمل وتحاول تقرأ price من رسالة خطأ.", "Without it you could carry on and try to read price from an error message."] },
      { q: ["ليش نقرأ المفتاح من os.environ؟", "Why read the key from os.environ?"],
        opts: [["عشان ما ينحفظ داخل الكود", "So it is not stored in the code"], ["لأنه أسرع", "Because it is faster"], ["لأن Python يشترط كذا", "Because Python requires it"]], a: 0,
        why: ["الكود ينرفع وينشارك، والمفتاح لازم يبقى على جهازك.", "Code gets uploaded and shared; the key must stay on your machine."] }
    ] },

  { id: "dev-2-2", track: "dev", level: 2, mins: 9, title: ["عدة أسهم مع احترام حد الطلبات", "Several shares within the rate limit"],
    body: [
      { p: ["عندك 100 طلب في اليوم. لو تتابع 8 أسهم وتحدّثها كل ساعة خلال جلسة من 5 ساعات، هذي 40 طلب. ولو شغّلت نفس السكربت كل 5 دقايق تخلص رصيدك قبل الظهر. فالحل إنك تسحب مرة وتخزن النتيجة في ملف، وكل شي ثاني يقرأ من الملف.", "You have 100 requests a day. Following 8 shares hourly over a 5-hour session is 40 requests. Run the same script every 5 minutes and you are out before noon. So fetch once, save the result to a file, and let everything else read from the file."] },
      { code: "import json, os, time\nfrom datetime import datetime\nimport requests\n\nAPI_KEY = os.environ[\"SAHMK_API_KEY\"]\nBASE_URL = \"https://api.sahmk.sa/api/v1\"\nWATCHLIST = [\"2222\", \"1120\", \"2010\", \"7010\"]\n\ndef fetch_all(symbols):\n    out = {}\n    for s in symbols:\n        r = requests.get(f\"{BASE_URL}/quote/{s}/\",\n                         headers={\"X-API-Key\": API_KEY}, timeout=10)\n        if r.status_code == 429:        # daily or per-minute limit reached\n            print(\"limit reached, stopping\")\n            break\n        r.raise_for_status()\n        out[s] = r.json()\n        time.sleep(1)                   # be gentle between requests\n    return out\n\ndata = {\n    \"fetched_at\": datetime.now().isoformat(timespec=\"seconds\"),\n    \"quotes\": fetch_all(WATCHLIST),\n}\nwith open(\"prices.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\nprint(f\"saved {len(data['quotes'])} quotes\")", name: "fetch_prices.py" },
      { h: ["ليش هذا الشكل؟", "Why this shape?"] },
      { ul: [
        ["كل تشغيل يكلف طلب واحد لكل سهم، فتعرف بالضبط كم تصرف.", "Each run costs one request per share, so you know exactly what you spend."],
        ["الملف prices.json فيه وقت السحب، فتعرف عمر البيانات.", "prices.json carries the fetch time, so you know how old the data is."],
        ["الرمز 429 هو الجواب المعتاد في أغلب الخدمات لما تتجاوز الحد، والسكربت يوقف عنده بدل ما يكرر.", "429 is the usual reply from most services when you exceed a limit, and the script stops there instead of retrying."]
      ] },
      { p: ["هذا السكربت نفسه هو اللي بيغذي مِراس بالأسعار الحقيقية: يشتغل مجدول، يكتب prices.json، والمنصة تقرأه بدل الأسعار النموذجية.", "This same script is what will feed Meras real prices: it runs on a schedule, writes prices.json, and the platform reads it instead of the sample prices."] }
    ],
    quiz: [
      { q: ["تتابع 10 أسهم وتبي تحدّثها كل نص ساعة لمدة 5 ساعات. كم طلب تحتاج؟", "You follow 10 shares and refresh every half hour for 5 hours. How many requests?"],
        opts: [["50", "50"], ["100", "100"], ["200", "200"]], a: 1,
        why: ["10 تحديثات × 10 أسهم = 100 طلب، يعني كل رصيد اليوم.", "10 refreshes × 10 shares = 100 requests, the whole daily allowance."] },
      { q: ["ليش نخزن النتيجة في ملف؟", "Why save the result to a file?"],
        opts: [["عشان بقية الأدوات تقرأ منه بدون ما تصرف طلبات", "So other tools read from it without spending requests"], ["عشان تزيد دقة السعر", "To make the price more accurate"], ["عشان نخفي المفتاح", "To hide the key"]], a: 0,
        why: ["التخزين يفصل بين سحب البيانات واستخدامها، فتتحكم في عدد الطلبات.", "Saving separates fetching from using, so you control the request count."] }
    ] }
];

const GLOSSARY = [
  [["السهم", "Share"], "Share", ["حصة ملكية في شركة مساهمة.", "A unit of ownership in a joint-stock company."]],
  [["تاسي", "TASI"], "TASI", ["المؤشر العام للسوق الرئيسية السعودية.", "The general index of the Saudi Main Market."]],
  [["نمو", "Nomu"], "Nomu", ["السوق الموازية، للشركات الأصغر والمستثمرين المؤهلين.", "The parallel market, for smaller companies and qualified investors."]],
  [["القيمة السوقية", "Market cap"], "Market cap", ["سعر السهم × عدد الأسهم المصدرة.", "Share price × shares outstanding."]],
  [["الحجم", "Volume"], "Volume", ["عدد الأسهم المتداولة خلال فترة.", "The number of shares traded in a period."]],
  [["السيولة", "Liquidity"], "Liquidity", ["سهولة البيع والشراء بسعر قريب من السوق.", "How easily you can buy and sell near the market price."]],
  [["التوزيعات", "Dividend"], "Dividend", ["جزء من الأرباح توزعه الشركة على المساهمين.", "Part of profit a company pays out to shareholders."]],
  [["العرض والطلب", "Bid / Ask"], "Bid / Ask", ["أعلى سعر يقبله مشتري، وأقل سعر يقبله بائع.", "The highest price a buyer accepts and the lowest a seller accepts."]],
  [["عمق السوق", "Market depth"], "Depth", ["قائمة أوامر الشراء والبيع المعلقة عند كل سعر.", "The list of pending buy and sell orders at each price."]],
  [["الشمعة", "Candle"], "OHLC", ["ملخص الافتتاح والأعلى والأدنى والإغلاق لفترة واحدة.", "Open, high, low and close for one period."]],
  [["الدعم", "Support"], "Support", ["منطقة سعرية يرتد منها السهم للأعلى.", "A price area the share bounces up from."]],
  [["المقاومة", "Resistance"], "Resistance", ["منطقة سعرية يتراجع منها السهم.", "A price area the share retreats from."]],
  [["الاتجاه", "Trend"], "Trend", ["الجهة العامة لحركة السعر: صاعد، هابط، أو عرضي.", "The general direction of price: up, down or sideways."]],
  [["وقف الخسارة", "Stop-loss"], "Stop-loss", ["سعر تحدده مسبقاً للخروج من صفقة خاسرة.", "A price set in advance to exit a losing trade."]],
  [["مزاد الافتتاح", "Opening auction"], "Auction", ["فترة تجميع الأوامر قبل الجلسة لتحديد سعر الافتتاح.", "The order-collection period before the session that sets the opening price."]],
  [["حد التذبذب", "Price limit"], "Limit", ["أقصى صعود أو هبوط مسموح للسهم في اليوم.", "The maximum rise or fall allowed for a share in a day."]],
  [["التسوية", "Settlement"], "T+2", ["إتمام نقل الملكية والمبلغ بعد تنفيذ الصفقة.", "Completion of the transfer of ownership and cash after a trade."]],
  [["مفتاح API", "API key"], "API key", ["رمز سري يعرّف برنامجك عند خدمة البيانات.", "A secret token identifying your program to the data service."]]
];
