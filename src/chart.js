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
  ch_fib: ["فيبوناتشي", "Fibonacci"], ch_f_lbl: ["فيبوناتشي", "Fibonacci"],
  ch_hint_f1: ["اضغط على بداية الحركة: القاع إذا الحركة صاعدة، أو القمة إذا هابطة.", "Tap the start of the move: the low if the move is up, or the high if it is down."],
  ch_hint_f2: ["اضغط على نهاية الحركة. المستويات تنرسم بينهم.", "Now tap the end of the move. The levels are drawn between the two."],
  ch_type: ["نوع الشارت", "Chart type"], ty_candle: ["شموع", "Candles"], ty_line: ["خط", "Line"], ty_ohlc: ["أعمدة", "Bars"],
  ch_vwap: ["متوسط السعر المرجح بالحجم", "VWAP"], ch_rvol: ["الحجم النسبي", "Relative volume"], ch_obv: ["حجم التوازن OBV", "OBV"], ch_cmf: ["تدفق الأموال CMF", "Chaikin money flow"], ch_mfi: ["مؤشر تدفق الأموال MFI", "Money flow index"],
  ch_novol: ["مؤشرات السيولة تحتاج حجم تداول، وهذا الرمز ما له حجم (مثل الفوركس والمعادن).", "Liquidity indicators need volume, and this symbol has none (forex and metals)."],
  ch_add_ind: ["+ أضف مؤشر", "+ Add indicator"], ch_bb: ["بولنجر", "Bollinger"], ch_macd: ["ماكد", "MACD"], ch_remove: ["شيل", "Remove"],
  ch_sig: ["الإشارة", "Signal"], ch_up: ["العلوي", "Upper"], ch_low: ["السفلي", "Lower"],
  ch_ind_guide: ["دليل المؤشرات", "Indicator guide"], ch_short_sma: ["متوسط", "SMA"], ch_short_ema: ["أسي", "EMA"],
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
  im_paste: ["أو الصق الجدول", "Or paste the table"], im_paste_ph: ["حدد صفوف الجدول في صفحة الأسعار التاريخية، انسخها، والصقها هنا.", "Select the table rows on the historical prices page, copy them, and paste here."], im_read: ["اقرأ الجدول", "Read table"],
  im_bad_paste: ["ما قدرت أقرأ اللي لصقته. انسخ الصفوف كاملة من عمود التاريخ إلى عمود الكمية.", "Could not read what you pasted. Copy full rows from the date column through the volume column."],
  im_more: ["لو الجدول أكثر من صفحة، كرر النسخ واللصق لكل صفحة. الشموع تنضاف على بعض.", "If the table has several pages, repeat copy and paste for each. The candles add up."],
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
  rd_verdict: ["الصورة العامة", "Overall picture"],
  rd_v_pos: ["إيجابية: {k} من {n} إشارات في صالح الصعود. هذا وصف لما يظهر في الشارت، وليس توصية.", "Positive: {k} of {n} signals favour the upside. This describes the chart; it is not a recommendation."],
  rd_v_neg: ["سلبية: {k} من {n} إشارات في صالح النزول. هذا وصف لما يظهر في الشارت، وليس توصية.", "Negative: {k} of {n} signals favour the downside. This describes the chart; it is not a recommendation."],
  rd_v_mix: ["مختلطة: {k} من {n} إشارات إيجابية والباقي سلبية. الإشارات ما تتفق، فالحذر أولى. هذا وصف وليس توصية.", "Mixed: {k} of {n} signals are positive and the rest negative. They disagree, so caution comes first. This is a description, not a recommendation."],
  rd_v_list: ["في صالحه: {a}. ضده: {b}.", "For: {a}. Against: {b}."],
  rd_sg_m20: ["السعر فوق متوسط 20", "price above the 20 average"], rd_sg_m20n: ["السعر تحت متوسط 20", "price below the 20 average"],
  rd_sg_m50: ["السعر فوق متوسط 50", "price above the 50 average"], rd_sg_m50n: ["السعر تحت متوسط 50", "price below the 50 average"],
  rd_sg_ord: ["متوسط 20 فوق متوسط 50", "20 average above the 50"], rd_sg_ordn: ["متوسط 20 تحت متوسط 50", "20 average below the 50"],
  rd_sg_macd: ["الماكد فوق خط الإشارة", "MACD above its signal"], rd_sg_macdn: ["الماكد تحت خط الإشارة", "MACD below its signal"],
  rd_sg_rsi: ["RSI فوق 50", "RSI above 50"], rd_sg_rsin: ["RSI تحت 50", "RSI below 50"],
  rd_sg_trend: ["الاتجاه صاعد", "uptrend"], rd_sg_trendn: ["الاتجاه هابط", "downtrend"],
  rd_bounce: ["لكن من القاع {v} ({d}) ارتفع السعر {p}%، فالحركة الأخيرة ارتداد صاعد داخل المسار.", "But from the low {v} ({d}) price has risen {p}%, so the latest move is a rebound within the range."],
  rd_slide: ["لكن من القمة {v} ({d}) نزل السعر {p}%، فالحركة الأخيرة تراجع داخل المسار.", "But from the high {v} ({d}) price has fallen {p}%, so the latest move is a pullback within the range."],
  rd_m50_above: ["الإغلاق فوق متوسط 50 ({m}) بنسبة {p}%: الاتجاه المتوسط إيجابي.", "The close is {p}% above the 50 average ({m}): the medium-term trend is positive."],
  rd_m50_below: ["الإغلاق تحت متوسط 50 ({m}) بنسبة {p}%: الاتجاه المتوسط ما زال سلبي، ومتوسط 50 يشتغل كمقاومة.", "The close is {p}% below the 50 average ({m}): the medium-term trend is still negative, and the 50 average acts as resistance."],
  rd_ord_up: ["متوسط 20 ({a}) فوق متوسط 50 ({b}): ترتيب إيجابي.", "The 20 average ({a}) is above the 50 ({b}): a positive order."],
  rd_ord_down: ["متوسط 20 ({a}) تحت متوسط 50 ({b}): ترتيب سلبي.", "The 20 average ({a}) is below the 50 ({b}): a negative order."],
  rd_cross_fade_up: ["لكن الإغلاق رجع تحت متوسط 20، فإشارة التقاطع تضعف.", "But the close is back below the 20 average, so the crossover is weakening."],
  rd_cross_fade_down: ["لكن الإغلاق رجع فوق متوسط 20، فإشارة التقاطع تضعف وممكن تنعكس.", "But the close is back above the 20 average, so the crossover is weakening and may reverse."],
  rd_macd_pa: ["الماكد موجب ({m}) وفوق خط الإشارة ({g}): زخم صاعد.", "MACD is positive ({m}) and above its signal ({g}): upward momentum."],
  rd_macd_pb: ["الماكد موجب ({m}) لكنه تحت خط الإشارة ({g}): الصعود يفقد زخمه.", "MACD is positive ({m}) but below its signal ({g}): the rise is losing momentum."],
  rd_macd_na: ["الماكد سالب ({m}) لكنه فوق خط الإشارة ({g}): زخم يتحسن من منطقة ضعيفة.", "MACD is negative ({m}) but above its signal ({g}): momentum is improving from a weak area."],
  rd_macd_nb: ["الماكد سالب ({m}) وتحت خط الإشارة ({g}): زخم هابط.", "MACD is negative ({m}) and below its signal ({g}): downward momentum."],
  rd_candle: ["آخر شمعة", "Last candle"],
  rd_c_reject: ["شمعة رفض: افتتحت عند {o} قريب من المقاومة {v} وأغلقت {c} بنزول {p}%. البائعون ردّوا السعر من المقاومة.", "Rejection candle: opened at {o} near resistance {v} and closed at {c}, down {p}%. Sellers pushed price back from resistance."],
  rd_c_wick_up: ["ذيل علوي طويل: السعر وصل {h} ورجع يغلق {c}. البائعون ظهروا في الأعلى.", "Long upper wick: price reached {h} and closed back at {c}. Sellers showed up at the top."],
  rd_c_wick_dn: ["ذيل سفلي طويل: السعر نزل إلى {l} ورجع يغلق {c}. المشترون ظهروا في الأسفل.", "Long lower wick: price dropped to {l} and closed back at {c}. Buyers showed up at the bottom."],
  rd_c_test: ["أغلقت {c} بارتفاع {p}% قريب من أعلاها، وتختبر المقاومة {v} (الفرق {d}%). الاختراق يحتاج إغلاق فوقها.", "Closed at {c}, up {p}%, near its high, testing resistance {v} ({d}% away). A breakout needs a close above it."],
  rd_c_big_up: ["شمعة صاعدة قوية: ارتفعت {p}% من افتتاحها وأغلقت قريب من أعلاها.", "Strong up candle: rose {p}% from its open and closed near its high."],
  rd_c_big_dn: ["شمعة هابطة قوية: نزلت {p}% من افتتاحها وأغلقت قريب من أدناها.", "Strong down candle: fell {p}% from its open and closed near its low."],
  rd_c_plain: ["شمعة عادية بتغير {p}%، ما فيها إشارة واضحة.", "An ordinary candle with a {p}% change and no clear signal."],
  rd_src_sw: ["قاع سابق لمسه السعر {n} مرة", "a prior low touched {n} time(s)"], rd_src_swh: ["قمة سابقة لمسها السعر {n} مرة", "a prior high touched {n} time(s)"],
  rd_src_m20: ["متوسط أسي 20", "20 EMA"], rd_src_m50: ["متوسط بسيط 50", "50 SMA"], rd_src_line: ["خط أفقي رسمته", "a horizontal line you drew"], rd_src_fib: ["فيبوناتشي {l}", "Fibonacci {l}"],
  rd_sup2: ["أقرب دعم: {v} ({s})، تحت السعر بـ {d}%.", "Nearest support: {v} ({s}), {d}% below price."],
  rd_res2: ["أقرب مقاومة: {v} ({s})، فوق السعر بـ {d}%.", "Nearest resistance: {v} ({s}), {d}% above price."],
  rd_sup_far: ["دعم سعري أقوى أبعد: {v} (قاع لمسه السعر {n} مرة)، تحت السعر بـ {d}%.", "A stronger price support further down: {v} (a low touched {n} time(s)), {d}% below price."],
  rd_res_far: ["مقاومة سعرية أقوى أبعد: {v} (قمة لمسها السعر {n} مرة)، فوق السعر بـ {d}%.", "A stronger price resistance further up: {v} (a high touched {n} time(s)), {d}% above price."],
  rd_sup: ["أقرب دعم تحت السعر: {v} (لمسه السعر {n} مرة).", "Nearest support below price: {v} (touched {n} time(s))."],
  rd_res: ["أقرب مقاومة فوق السعر: {v} (لمسها السعر {n} مرة).", "Nearest resistance above price: {v} (touched {n} time(s))."],
  rd_no_sup: ["ما فيه قاع واضح أو متوسط أو خط مرسوم تحت السعر في الشموع الظاهرة.", "No clear low below price in the candles shown."],
  rd_no_res: ["السعر عند أعلى مستوياته في الشموع الظاهرة، وما فيه متوسط أو خط مرسوم فوقه، فالمقاومة القادمة غير محددة هنا.", "Price is at its highest in the candles shown and no average or drawn line sits above it, so the next resistance is not defined here."],
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
const symName = (sym) => (PRACTICE[sym] ? t(PRACTICE[sym]) : typeof usNameOf === "function" && usNameOf(sym) ? usNameOf(sym) : (quoteOf(sym) ? L(quoteOf(sym).name) : typeof extraNameOf === "function" && extraNameOf(sym) ? extraNameOf(sym) : sym));

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

function bollinger(cl, p, k) {
  const mid = sma(cl, p), up = [], lo = [];
  for (let i = 0; i < cl.length; i++) {
    if (mid[i] == null) { up.push(null); lo.push(null); continue; }
    let v = 0; for (let j = i - p + 1; j <= i; j++) v += (cl[j] - mid[i]) ** 2;
    const sd = Math.sqrt(v / p); up.push(mid[i] + k * sd); lo.push(mid[i] - k * sd);
  }
  return { mid, up, lo };
}
function macd(cl, f, sl, sg) {
  const a = ema(cl, f), b = ema(cl, sl), line = cl.map((_, i) => (a[i] == null || b[i] == null ? null : a[i] - b[i]));
  const first = line.findIndex((x) => x != null), sigPart = first < 0 ? [] : ema(line.slice(first), sg), sig = line.map((_, i) => (i < first || first < 0 ? null : sigPart[i - first]));
  return { line, sig, hist: line.map((x, i) => (x == null || sig[i] == null ? null : x - sig[i])) };
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
  const day = (i) => (data[i] && data[i].d) || t("ch_day") + " " + (i + 1), pc = (x) => Math.abs(x).toFixed(1);
  const trend = [fill("rd_" + regime, { p: pct }), t(hh && hl ? "rd_hh" : lh && ll ? "rd_ll" : "rd_mixed")];
  if (regime === "range") {
    let lo = s, hi = s; for (let i = s; i < e; i++) { if (data[i].l < data[lo].l) lo = i; if (data[i].h > data[hi].h) hi = i; }
    const up = ((c - data[lo].l) / data[lo].l) * 100, dn = ((data[hi].h - c) / data[hi].h) * 100;
    if (lo > hi && up >= 5) trend.push(fill("rd_bounce", { v: f(data[lo].l), d: day(lo), p: pc(up) }));
    else if (hi > lo && dn >= 5) trend.push(fill("rd_slide", { v: f(data[hi].h), d: day(hi), p: pc(dn) }));
  }
  /* signals for the overall picture: [positive?, key] */
  const m50 = sma(cl, 50), e20 = ema(cl, 20), md = macd(cl, 12, 26, 9), sig = [];
  const ma = [];
  if (m20[last] != null) { ma.push(fill(c >= m20[last] ? "rd_ma_above" : "rd_ma_below", { c: f(c), m: f(m20[last]), p: Math.abs(((c - m20[last]) / m20[last]) * 100).toFixed(1) })); sig.push([c >= m20[last], "m20"]); }
  if (m50[last] != null) {
    ma.push(fill(c >= m50[last] ? "rd_m50_above" : "rd_m50_below", { m: f(m50[last]), p: pc(((c - m50[last]) / m50[last]) * 100) })); sig.push([c >= m50[last], "m50"]);
    if (e20[last] != null) { ma.push(fill(e20[last] >= m50[last] ? "rd_ord_up" : "rd_ord_down", { a: f(e20[last]), b: f(m50[last]) })); sig.push([e20[last] >= m50[last], "ord"]); }
  }
  for (let i = last; i > Math.max(s, last - 15); i--) {
    if (m5[i] == null || m20[i] == null || m5[i - 1] == null || m20[i - 1] == null) break;
    const now = m5[i] - m20[i], was = m5[i - 1] - m20[i - 1];
    if (now > 0 && was <= 0) { ma.push(fill("rd_cross_up", { n: last - i })); if (c < m20[last]) ma.push(t("rd_cross_fade_up")); break; }
    if (now < 0 && was >= 0) { ma.push(fill("rd_cross_down", { n: last - i })); if (c > m20[last]) ma.push(t("rd_cross_fade_down")); break; }
  }
  const mom = [];
  if (r14[last] != null) { mom.push(fill(r14[last] > 70 ? "rd_rsi_hi" : r14[last] < 30 ? "rd_rsi_lo" : "rd_rsi_mid", { v: r14[last].toFixed(1) })); sig.push([r14[last] >= 50, "rsi"]); }
  if (md.line[last] != null && md.sig[last] != null) {
    const ml = md.line[last], sg = md.sig[last];
    mom.push(fill(ml >= 0 ? (ml >= sg ? "rd_macd_pa" : "rd_macd_pb") : ml >= sg ? "rd_macd_na" : "rd_macd_nb", { m: f(ml), g: f(sg) })); sig.push([ml >= sg, "macd"]);
  }
  if (regime !== "range") sig.push([regime === "up", "trend"]);
  /* overall picture first */
  const k = sig.filter((x) => x[0]).length, nn = sig.length;
  if (nn >= 3) {
    const name = (x) => t("rd_sg_" + x[1] + (x[0] ? "" : "n"));
    out.items.push(["rd_verdict", [fill(k / nn >= 0.7 ? "rd_v_pos" : k / nn <= 0.3 ? "rd_v_neg" : "rd_v_mix", { k: k / nn <= 0.3 ? nn - k : k, n: nn }),
      fill("rd_v_list", { a: sig.filter((x) => x[0]).map(name).join("، ") || "–", b: sig.filter((x) => !x[0]).map(name).join("، ") || "–" })]]);
  }
  out.items.push(["rd_trend", trend]);
  if (ma.length) out.items.push(["rd_ma", ma]);
  if (mom.length) out.items.push(["rd_mom", mom]);
  if (n >= 25) {
    const avg = (a, b) => { let x = 0; for (let i = a; i < b; i++) x += data[i].v || 0; return x / (b - a); };
    const recent = avg(e - 5, e), base = avg(e - 25, e - 5), d = base ? ((recent - base) / base) * 100 : 0;
    if (base) out.items.push(["rd_volume", [d > 15 ? fill("rd_vol_hi", { p: d.toFixed(0) }) : d < -15 ? fill("rd_vol_lo", { p: Math.abs(d).toFixed(0) }) : t("rd_vol_same")]]);
  }
  /* levels: prior swings, the 20 EMA and 50 SMA, the user's horizontal lines and the drawn Fibonacci levels */
  const touches = (list, p) => list.filter((x) => Math.abs(x.p - p) / p <= 0.012).length;
  const below = sw.lo.filter((x) => x.p < c).sort((a, b) => b.p - a.p)[0], above = sw.hi.filter((x) => x.p > c).sort((a, b) => a.p - b.p)[0];
  const cand = [];
  sw.lo.forEach((x) => cand.push({ p: x.p, s: fill("rd_src_sw", { n: touches(sw.lo, x.p) }), sw: 1 }));
  sw.hi.forEach((x) => cand.push({ p: x.p, s: fill("rd_src_swh", { n: touches(sw.hi, x.p) }), sw: 1 }));
  if (e20[last] != null) cand.push({ p: e20[last], s: t("rd_src_m20") });
  if (m50[last] != null) cand.push({ p: m50[last], s: t("rd_src_m50") });
  const draws = (typeof S !== "undefined" && S.drawings && typeof chartCfg === "function" && S.drawings[chartCfg().sym]) || [];
  draws.filter((d) => d.t === "h" && !d.auto).forEach((d) => cand.push({ p: d.p, s: t("rd_src_line") }));
  const fb = draws.filter((d) => d.t === "f").slice(-1)[0];
  if (fb && typeof FIB_R !== "undefined") FIB_R.forEach((r) => cand.push({ p: fb.p2 - (fb.p2 - fb.p1) * r, s: fill("rd_src_fib", { l: fibLabel(r) }) }));
  const dist = (p) => Math.abs(((p - c) / c) * 100), near = (x) => dist(x.p) >= 0.15;
  const sup = cand.filter((x) => x.p < c && near(x)).sort((a, b) => b.p - a.p)[0], res = cand.filter((x) => x.p > c && near(x)).sort((a, b) => a.p - b.p)[0];
  const lv = [];
  lv.push(sup ? fill("rd_sup2", { v: f(sup.p), s: sup.s, d: dist(sup.p).toFixed(1) }) : t("rd_no_sup"));
  if (below && sup && !sup.sw && touches(sw.lo, below.p) >= 2) lv.push(fill("rd_sup_far", { v: f(below.p), n: touches(sw.lo, below.p), d: dist(below.p).toFixed(1) }));
  lv.push(res ? fill("rd_res2", { v: f(res.p), s: res.s, d: dist(res.p).toFixed(1) }) : t("rd_no_res"));
  if (above && res && !res.sw && touches(sw.hi, above.p) >= 2) lv.push(fill("rd_res_far", { v: f(above.p), n: touches(sw.hi, above.p), d: dist(above.p).toFixed(1) }));
  out.items.push(["rd_levels", lv]);
  /* the last candle, read against the nearest resistance and support */
  const LC = data[last], rg = LC.h - LC.l, body = Math.abs(LC.c - LC.o), chg = last > 0 ? ((LC.c - cl[last - 1]) / cl[last - 1]) * 100 : 0;
  let tr = 0, tn = 0; for (let i = Math.max(1, last - 13); i <= last; i++) { tr += Math.max(data[i].h, cl[i - 1]) - Math.min(data[i].l, cl[i - 1]); tn++; }
  const atr = tn ? tr / tn : rg, resAll = cand.filter((x) => x.p > LC.c), nearRes = resAll.filter((x) => Math.abs(x.p - LC.o) / x.p <= 0.012 || Math.abs(x.p - LC.h) / x.p <= 0.008).sort((a, b) => a.p - b.p)[0];
  let cnd;
  if (rg > 0 && LC.c < LC.o && body >= 0.6 * atr && nearRes) cnd = fill("rd_c_reject", { o: f(LC.o), v: f(nearRes.p), c: f(LC.c), p: pc(chg) });
  else if (rg > 0 && LC.h - Math.max(LC.o, LC.c) >= 0.5 * rg && rg >= 0.6 * atr) cnd = fill("rd_c_wick_up", { h: f(LC.h), c: f(LC.c) });
  else if (rg > 0 && Math.min(LC.o, LC.c) - LC.l >= 0.5 * rg && rg >= 0.6 * atr) cnd = fill("rd_c_wick_dn", { l: f(LC.l), c: f(LC.c) });
  else if (rg > 0 && LC.c > LC.o && (LC.h - LC.c) <= 0.3 * rg && res && dist(res.p) <= 1.5) cnd = fill("rd_c_test", { c: f(LC.c), p: pc(chg), v: f(res.p), d: dist(res.p).toFixed(1) });
  else if (rg > 0 && LC.c > LC.o && body >= atr * 0.6 && (LC.h - LC.c) <= 0.3 * rg) cnd = fill("rd_c_big_up", { p: pc(((LC.c - LC.o) / LC.o) * 100) });
  else if (rg > 0 && LC.c < LC.o && body >= atr * 0.6 && (LC.c - LC.l) <= 0.3 * rg) cnd = fill("rd_c_big_dn", { p: pc(((LC.c - LC.o) / LC.o) * 100) });
  else cnd = fill("rd_c_plain", { p: chg.toFixed(1) });
  out.items.push(["rd_candle", [cnd]]);
  out.items.push(["rd_try", [t("rd_try_" + regime)]]);
  const r2 = (x) => Math.round(x * 100) / 100;
  if (regime === "up" && l2.length === 2 && hl) out.auto.push({ t: "t", i1: l2[0].i, p1: r2(l2[0].p), i2: l2[1].i, p2: r2(l2[1].p), auto: 1 });
  else if (regime === "down" && h2.length === 2 && lh) out.auto.push({ t: "t", i1: h2[0].i, p1: r2(h2[0].p), i2: h2[1].i, p2: r2(h2[1].p), auto: 1 });
  if (below) out.auto.push({ t: "h", p: r2(below.p), auto: 1 });
  if (above) out.auto.push({ t: "h", p: r2(above.p), auto: 1 });
  out.sup = sup ? sup.p : below ? below.p : null; out.res = res ? res.p : above ? above.p : null;
  return out;
}

let chImport = null;
const IM_COLS = { d: ["date", "التاريخ", "تاريخ", "time"], o: ["open", "افتتاح", "الافتتاح"], h: ["high", "اعلى", "الاعلى"], l: ["low", "ادنى", "الادنى"], c: ["close", "اغلاق", "الاغلاق", "اقفال", "الاقفال", "price", "last", "السعر"], v: ["volume", "vol", "الكمية", "الحجم", "حجم"] };
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
  const wb = XLSX.read(buf, { type: "array", cellDates: true, raw: true });
  return parseRows(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, raw: true, defval: null }));
}
/* a table copied from a web page: one row per line, cells separated by tabs (or runs of spaces) */
function parsePasted(text) {
  /* cells with an arrow (change, change %) copy as their own lines, so one table row can span several lines:
     a new row starts only at a line that begins with a date; everything until the next date line belongs to it */
  const raw = String(text || "").replace(/\r/g, "").replace(/\u00a0/g, " ").split("\n"), isDate = (x) => /^\s*(\d{4}-\d{1,2}-\d{1,2}|\d{1,2}[\/.\-]\d{1,2}[\/.\-]\d{2,4}|[A-Za-z]{3}\s+\d{1,2},?\s+\d{4})/.test(x);
  const groups = [];
  raw.forEach((ln) => {
    if (!groups.length || isDate(ln) || (!groups.some((g) => isDate(g)) && /[^\s\d.,\-+%▲▼]/.test(ln) && ln.includes("\t"))) groups.push(ln);
    else { const prev = groups[groups.length - 1]; groups[groups.length - 1] = prev + (/\t$/.test(prev) || /^\t/.test(ln) || !ln.trim() ? "" : "\t") + ln; }
  });
  const lines = groups.map((x) => x.trim()).filter(Boolean);
  const tabs = lines.some((x) => x.includes("\t"));
  return parseRows(lines.map((x) => (tabs ? x.split("\t") : x.split(/\s{2,}|\s(?=[\d\-+▲▼])/)).map((c) => c.trim())));
}
function parseRows(rows) {
  const norm = (x) => String(x == null ? "" : x).toLowerCase().replace(/[\u064B-\u0652"']/g, "").replace(/[\u0625\u0623\u0622]/g, "\u0627").trim();
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
  if (hi < 0) {
    /* no header row: accept the common order date, open, high, low, close, [change, change %], volume */
    const first = rows.find((r) => r && r.length >= 5), looksDate = first && imDates([first[0]])[0], nums = first ? first.slice(1, 5).every((x) => imNum(x) > 0) : false;
    if (!looksDate || !nums) return null;
    map = { d: 0, o: 1, h: 2, l: 3, c: 4, v: first.length >= 8 ? 7 : first.length === 6 ? 5 : null }; hi = -1;
  }
  const body = rows.slice(hi + 1).filter((r) => r && r[map.d] != null && r[map.d] !== ""), dates = imDates(body.map((r) => r[map.d])), out = {};
  body.forEach((r, i) => {
    const o = imNum(r[map.o]), h = imNum(r[map.h]), l = imNum(r[map.l]), c = imNum(r[map.c]), v = map.v != null ? imNum(String(r[map.v] == null ? "" : r[map.v]).replace(/[▲▼]/g, "")) : 0;
    if (!dates[i] || !(o > 0 && h > 0 && l > 0 && c > 0) || h < l) return;
    out[dates[i]] = { d: dates[i], o, h, l, c, v: isFinite(v) ? Math.round(v) : 0 };
  });
  const list = Object.values(out).sort((a, b) => (a.d < b.d ? -1 : 1)).slice(-400);
  return list.length >= 2 ? list : null;
}

const chartDefaults = () => ({ sym: "TRN-A", n: 60, vol: true, sma1: { on: true, p: 5 }, sma2: { on: false, p: 20 }, ema: { on: false, p: 10 }, rsi: { on: false, p: 14 } });
let chTool = "cursor", chPending = null, chOffset = 0, chReplay = null, CH = null, chFull = false, chNative = false, chFullPad = 108, chFitTries = 0, chReading = false, WL = null;
function chartCfg() {
  if (!S.chart || !S.chart.sma1) S.chart = chartDefaults(); if (!S.drawings) S.drawings = {};
  const c = S.chart; if (!c.bb) c.bb = { on: false, p: 20 }; if (!c.macd) c.macd = { on: false, p: 9 }; if (!c.type) c.type = "candle";
  [["vwap", 20], ["rvol", 20], ["obv", 0], ["cmf", 20], ["mfi", 14]].forEach(([k, p]) => { if (!c[k]) c[k] = { on: false, p }; });
  return c;
}
/* the indicator catalogue: key, label, colour class, whether it has an editable period */
const IND_KEYS = [["sma1", "ch_sma", "i1", true], ["sma2", "ch_sma", "i2", true], ["ema", "ch_ema", "i3", true], ["bb", "ch_bb", "i4", true], ["rsi", "ch_rsi", "i2", true], ["macd", "ch_macd", "i3", false], ["vol", "ch_vol", "", false],
  ["vwap", "ch_vwap", "i5", true], ["rvol", "ch_rvol", "i4", true], ["obv", "ch_obv", "i1", false], ["cmf", "ch_cmf", "i3", true], ["mfi", "ch_mfi", "i2", true]];
/* مؤشرات السيولة (من الشموع اليومية) */
function vwapRoll(d, p) { const o = d.map(() => null); let pv = 0, vv = 0; for (let i = 0; i < d.length; i++) { const tp = (d[i].h + d[i].l + d[i].c) / 3, v = d[i].v || 0; pv += tp * v; vv += v; if (i >= p) { const q = d[i - p], tq = (q.h + q.l + q.c) / 3; pv -= tq * (q.v || 0); vv -= q.v || 0; } if (i >= p - 1 && vv > 0) o[i] = pv / vv; } return o; }
function rvolS(d, p) { const o = d.map(() => null); let sum = 0; for (let i = 0; i < d.length; i++) { if (i >= p) { const avg = sum / p; o[i] = avg > 0 ? (d[i].v || 0) / avg : null; sum -= d[i - p].v || 0; } sum += d[i].v || 0; } return o; }
function obvS(d) { const o = []; let x = 0; for (let i = 0; i < d.length; i++) { if (i) x += d[i].c > d[i - 1].c ? d[i].v || 0 : d[i].c < d[i - 1].c ? -(d[i].v || 0) : 0; o.push(x); } return o; }
function cmfS(d, p) { const mfv = d.map((r) => { const rg = r.h - r.l; return rg > 0 ? (((r.c - r.l) - (r.h - r.c)) / rg) * (r.v || 0) : 0; }), o = d.map(() => null); for (let i = p - 1; i < d.length; i++) { let a = 0, b = 0; for (let k = i - p + 1; k <= i; k++) { a += mfv[k]; b += d[k].v || 0; } o[i] = b > 0 ? a / b : null; } return o; }
function mfiS(d, p) { const tp = d.map((r) => (r.h + r.l + r.c) / 3), o = d.map(() => null); for (let i = p; i < d.length; i++) { let pos = 0, neg = 0; for (let k = i - p + 1; k <= i; k++) { const f = tp[k] * (d[k].v || 0); if (tp[k] > tp[k - 1]) pos += f; else if (tp[k] < tp[k - 1]) neg += f; } o[i] = neg === 0 ? (pos === 0 ? 50 : 100) : 100 - 100 / (1 + pos / neg); } return o; }
const hasVol = (d) => d.some((r) => (r.v || 0) > 0);
const indOn = (cfg, k) => (k === "vol" ? !!cfg.vol : !!(cfg[k] && cfg[k].on));
const indName = (cfg, k) => { const d = IND_KEYS.find((x) => x[0] === k); return t(d[1]) + (d[3] ? " " + cfg[k].p : k === "macd" ? " 12/26/9" : ""); };

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
  const bb = cfg.bb.on ? bollinger(cl, cfg.bb.p, 2) : null, md = cfg.macd.on ? macd(cl, 12, 26, 9) : null;
  const hv = hasVol(data);
  if (hv && cfg.vwap.on) lines.push({ cls: "i5", name: t("ch_vwap") + " " + cfg.vwap.p, v: vwapRoll(data, cfg.vwap.p) });
  const fl = [];
  if (hv && cfg.rvol.on) fl.push({ k: "rvol", cls: "i4", name: t("ch_rvol") + " " + cfg.rvol.p, v: rvolS(data, cfg.rvol.p), lv: [1, 2], bars: true, dec: 2 });
  if (hv && cfg.obv.on) fl.push({ k: "obv", cls: "i1", name: t("ch_obv"), v: obvS(data), lv: [], dec: 0 });
  if (hv && cfg.cmf.on) fl.push({ k: "cmf", cls: "i3", name: t("ch_cmf") + " " + cfg.cmf.p, v: cmfS(data, cfg.cmf.p), lv: [0], dec: 3 });
  if (hv && cfg.mfi.on) fl.push({ k: "mfi", cls: "i2", name: t("ch_mfi") + " " + cfg.mfi.p, v: mfiS(data, cfg.mfi.p), lv: [80, 20], fix: [0, 100], dec: 1 });

  /* geometry follows the real pixel width, so text never shrinks on a phone */
  const vw = document.documentElement.clientWidth || 960, vhgt = window.innerHeight || 700;
  const W = chFull ? Math.max(300, vw - 16) : Math.max(280, Math.min(1056, vw - 62 - (chSide() ? 272 : 0) - (typeof sideW === "function" ? sideW() : 0))), axis = W < 520 ? 50 : 62;
  const x0 = 6, x1 = W - axis, top = 8, tight = chFull && vhgt < 460, vh = cfg.vol ? (tight ? 26 : W < 520 ? 40 : 56) : 0, rh = rs ? (tight ? 50 : W < 520 ? 70 : 96) : 0, mh = md ? (tight ? 50 : W < 520 ? 70 : 96) : 0, fh = tight ? 46 : W < 520 ? 64 : 84, extra = (vh ? vh + 12 : 0) + (rh ? rh + 14 : 0) + (mh ? mh + 14 : 0) + fl.length * (fh + 14) + 20;
  const ph = chFull ? Math.max(70, vhgt - chFullPad - extra) : Math.round(Math.max(200, Math.min(340, W * 0.5)));
  const vtop = top + ph + 12, rtop = vtop + (vh ? vh + 14 : 0), mtop = rtop + (rh ? rh + 14 : 0), H = top + ph + extra;
  let min = Infinity, max = -Infinity;
  view.forEach((r) => { min = Math.min(min, r.l); max = Math.max(max, r.h); });
  lines.forEach((ln) => { for (let i = s; i < e; i++) if (ln.v[i] != null) { min = Math.min(min, ln.v[i]); max = Math.max(max, ln.v[i]); } });
  if (bb) for (let i = s; i < e; i++) if (bb.up[i] != null) { min = Math.min(min, bb.lo[i]); max = Math.max(max, bb.up[i]); }
  draws.forEach((dr) => { if (dr.t === "f" && dr.ext) { const span = dr.p2 - dr.p1; [dr.p2 + span * 0.272, dr.p1].forEach((v) => { min = Math.min(min, v); max = Math.max(max, v); }); } });
  if (!isFinite(min)) { min = 0; max = 1; }
  if (max - min < 0.02) { max += 0.5; min -= 0.5; }
  const pad = (max - min) * 0.07; min -= pad; max += pad;
  const bw = (x1 - x0) / slots, X = (i) => x0 + (i - s) * bw + bw / 2, Y = (v) => top + ((max - v) / (max - min)) * ph;
  CH = { W, H, x0, x1, top, ph, bw, s, e, slots, min, max, data, lines, rs, bb, md, fl, sym: cfg.sym, fullLen: full.length, end };

  let g = '<defs><clipPath id="ch-clip"><rect x="' + x0 + '" y="' + top + '" width="' + (x1 - x0) + '" height="' + ph + '"/></clipPath></defs>';
  const ticks = ph < 180 ? 3 : 5;
  for (let i = 0; i <= ticks; i++) { const v = min + ((max - min) * i) / ticks, yy = Y(v); g += '<line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + yy + '" y2="' + yy + '"/><text class="c-text" x="' + (x1 + 5) + '" y="' + (yy + 4) + '">' + v.toFixed(2) + "</text>"; }
  const vmax = Math.max(1, ...view.map((r) => r.v || 0));
  if (bb) {
    let up = "", lo = "", area = "", pen = false;
    for (let i = s; i < e; i++) { if (bb.up[i] == null) continue; up += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(bb.up[i]).toFixed(1); lo += (pen ? "L" : "M") + X(i).toFixed(1) + " " + Y(bb.lo[i]).toFixed(1); pen = true; }
    const pts = []; for (let i = s; i < e; i++) if (bb.up[i] != null) pts.push([X(i), Y(bb.up[i]), Y(bb.lo[i])]);
    if (pts.length > 1) area = "M" + pts.map((q) => q[0].toFixed(1) + " " + q[1].toFixed(1)).join("L") + "L" + pts.slice().reverse().map((q) => q[0].toFixed(1) + " " + q[2].toFixed(1)).join("L") + "Z";
    if (area) g += '<path class="bb-band" d="' + area + '" clip-path="url(#ch-clip)"/>';
    if (up) g += '<path class="ind i4 thin" d="' + up + '" clip-path="url(#ch-clip)"/><path class="ind i4 thin" d="' + lo + '" clip-path="url(#ch-clip)"/>';
    let mid = "", pm = false; for (let i = s; i < e; i++) { if (bb.mid[i] == null) continue; mid += (pm ? "L" : "M") + X(i).toFixed(1) + " " + Y(bb.mid[i]).toFixed(1); pm = true; }
    if (mid) g += '<path class="ind i4 dash" d="' + mid + '" clip-path="url(#ch-clip)"/>';
  }
  if (cfg.type === "line") { let d = ""; view.forEach((r, k) => { d += (k ? "L" : "M") + X(s + k).toFixed(1) + " " + Y(r.c).toFixed(1); }); if (d) g += '<path class="price-line" d="' + d + '" clip-path="url(#ch-clip)"/>'; }
  view.forEach((r, k) => {
    const i = s + k, cls = r.c >= r.o ? "c-up" : "c-down", bt = Y(Math.max(r.o, r.c)), bb = Y(Math.min(r.o, r.c)), w = Math.min(16, Math.max(1, bw * 0.66));
    if (cfg.type === "ohlc") { const tw = Math.max(2, Math.min(7, bw * 0.35)); g += '<path class="' + cls + ' ohlc" d="M' + X(i) + " " + Y(r.h) + "V" + Y(r.l) + "M" + (X(i) - tw) + " " + Y(r.o) + "H" + X(i) + "M" + X(i) + " " + Y(r.c) + "H" + (X(i) + tw) + '"/>'; }
    else if (cfg.type !== "line") g += '<line class="' + cls + '" x1="' + X(i) + '" x2="' + X(i) + '" y1="' + Y(r.h) + '" y2="' + Y(r.l) + '" stroke-width="1.2"/><rect class="' + cls + '" x="' + (X(i) - w / 2) + '" y="' + bt + '" width="' + w + '" height="' + Math.max(1.2, bb - bt) + '"/>';
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
    else if (dr.t === "f") {
      const xa = Math.max(x0, X(Math.min(dr.i1, dr.i2)) - bw / 2);
      (dr.ext ? [-0.618, -0.272, 0, 0.236, 0.382, 0.5, 0.618, 0.786, 1] : [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1]).forEach((r) => {
        const pr = dr.p2 - (dr.p2 - dr.p1) * r; if (pr <= min || pr >= max) return;
        g += '<line class="fib' + (r < 0 ? " ext" : r === 0.5 || r === 0.618 ? " key" : "") + '" clip-path="url(#ch-clip)" x1="' + xa + '" x2="' + x1 + '" y1="' + Y(pr) + '" y2="' + Y(pr) + '"/><text class="fib-txt' + (r < 0 ? " ext" : "") + '" clip-path="url(#ch-clip)" x="' + (xa + 4) + '" y="' + (Y(pr) - 3) + '">' + (r < 0 ? 100 + Math.abs(r) * 100 : r * 100).toFixed(1).replace(".0", "") + "%  " + pr.toFixed(2) + "</text>";
      });
    }
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
  if (md) {
    let amax = 0; for (let i = s; i < e; i++) [md.line[i], md.sig[i], md.hist[i]].forEach((x) => { if (x != null) amax = Math.max(amax, Math.abs(x)); });
    amax = amax || 1; const MY = (v) => mtop + mh / 2 - (v / amax) * (mh / 2 - 4);
    g += '<rect class="pane" x="' + x0 + '" y="' + mtop + '" width="' + (x1 - x0) + '" height="' + mh + '"/><line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + MY(0) + '" y2="' + MY(0) + '"/>';
    for (let i = s; i < e; i++) if (md.hist[i] != null) { const y0 = MY(0), y1 = MY(md.hist[i]), w = Math.min(10, Math.max(1, bw * 0.5)); g += '<rect class="' + (md.hist[i] >= 0 ? "c-up" : "c-down") + '" opacity=".5" x="' + (X(i) - w / 2) + '" y="' + Math.min(y0, y1) + '" width="' + w + '" height="' + Math.max(0.8, Math.abs(y1 - y0)) + '"/>'; }
    [["line", "i2"], ["sig", "i1"]].forEach(([k, c]) => { let d = "", pen = false; for (let i = s; i < e; i++) { const v = md[k][i]; if (v == null) { pen = false; continue; } d += (pen ? "L" : "M") + X(i).toFixed(1) + " " + MY(v).toFixed(1); pen = true; } if (d) g += '<path class="ind ' + c + ' thin" d="' + d + '"/>'; });
    g += '<text class="c-lab" x="' + (x0 + 4) + '" y="' + (mtop + 14) + '">' + esc(t("ch_macd")) + " 12/26/9</text>";
  }
  let ftop = mtop + (mh ? mh + 14 : 0);
  fl.forEach((f) => {
    let lo = Infinity, hi = -Infinity; for (let i = s; i < e; i++) if (f.v[i] != null) { lo = Math.min(lo, f.v[i]); hi = Math.max(hi, f.v[i]); }
    if (f.fix) { lo = f.fix[0]; hi = f.fix[1]; } else { f.lv.forEach((v) => { lo = Math.min(lo, v); hi = Math.max(hi, v); }); if (!isFinite(lo)) { lo = 0; hi = 1; } if (hi - lo < 1e-9) { hi += 1; lo -= 1; } const pd = (hi - lo) * 0.08; lo -= pd; hi += pd; }
    const FY = (v) => ftop + ((hi - v) / (hi - lo)) * fh;
    g += '<rect class="pane" x="' + x0 + '" y="' + ftop + '" width="' + (x1 - x0) + '" height="' + fh + '"/>';
    f.lv.forEach((v) => { g += '<line class="c-grid" stroke-dasharray="4 4" x1="' + x0 + '" x2="' + x1 + '" y1="' + FY(v) + '" y2="' + FY(v) + '"/><text class="c-text" x="' + (x1 + 5) + '" y="' + (FY(v) + 4) + '">' + v + "</text>"; });
    if (f.bars) { for (let i = s; i < e; i++) if (f.v[i] != null) { const w = Math.min(10, Math.max(1, bw * 0.5)), y0 = FY(Math.max(lo, 0)), y1 = FY(f.v[i]); g += '<rect class="' + (f.v[i] >= 2 ? "c-up" : f.v[i] >= 1 ? "rv-mid" : "c-down") + '" opacity=".55" x="' + (X(i) - w / 2) + '" y="' + Math.min(y0, y1) + '" width="' + w + '" height="' + Math.max(0.8, Math.abs(y1 - y0)) + '"/>'; } }
    else { let d = "", pen = false; for (let i = s; i < e; i++) { if (f.v[i] == null) { pen = false; continue; } d += (pen ? "L" : "M") + X(i).toFixed(1) + " " + FY(f.v[i]).toFixed(1); pen = true; } if (d) g += '<path class="ind ' + f.cls + '" d="' + d + '"/>'; }
    g += '<text class="c-lab" x="' + (x0 + 4) + '" y="' + (ftop + 14) + '">' + esc(f.name) + "</text>";
    ftop += fh + 14;
  });
  g += '<line id="ch-x" class="cross" x1="0" x2="0" y1="' + top + '" y2="' + (H - 20) + '" visibility="hidden"/><line id="ch-y" class="cross" x1="' + x0 + '" x2="' + x1 + '" y1="0" y2="0" visibility="hidden"/>';
  return '<svg id="ch-svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(symName(cfg.sym)) + '">' + g + "</svg>";
}

const ICON_FULL = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M3 8V3h5M12 3h5v5M17 12v5h-5M8 17H3v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_READ = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M10 2l1.8 4.7L16.5 8.5l-4.7 1.8L10 15l-1.8-4.7L3.5 8.5l4.7-1.8z" fill="currentColor"/><circle cx="16" cy="15.5" r="1.6" fill="currentColor"/></svg>';

function readingHtml() {
  const r = analyze(CH.data, CH.s, CH.e);
  if (r.need != null) return '<div class="panel reading"><h3>' + ICON_READ + " " + esc(t("ch_read_h")) + '</h3><p class="muted">' + esc(t("rd_need").replace("{n}", r.need)) + "</p>" + fibSection() + aiPanel() + "</div>";
  return '<div class="panel reading stack"><div class="row" style="justify-content:space-between"><h3>' + ICON_READ + " " + esc(t("ch_read_h")) + '</h3><div class="row" style="gap:6px"><button class="btn sm primary" data-act="an-save">' + esc(t("an_save")) + '</button><button class="btn sm ghost" data-act="ch-read">' + esc(t("ch_hide_read")) + '</button></div></div><p class="small muted">' + esc(t("ch_read_p")) + '</p><dl class="rdlist">' +
    r.items.slice(0, -1).concat([["rd_stats", statsLines(signalStats(CH.data, CH.e))]], r.items.slice(-1)).map(([k, lines]) => '<div class="' + (k === "rd_try" ? "try" : k === "rd_stats" || k === "rd_verdict" ? "wide" : "") + '"><dt>' + esc(t(k)) + "</dt><dd>" + lines.map((x) => "<p>" + esc(x) + "</p>").join("") + "</dd></div>").join("") + "</dl>" +
    (r.auto.length ? '<div><button class="btn" data-act="ch-auto">' + esc(t("ch_draw_it")) + "</button></div>" : "") + fibSection() + aiPanel() + "</div>";
}

function pageChart() {
  const cfg = chartCfg(); let full = chartData(cfg.sym);
  if (!PRACTICE[cfg.sym] && !full.length) { cfg.sym = "TRN-A"; full = chartData(cfg.sym); }
  const svg = chartSvg(cfg, full), draws = S.drawings[cfg.sym] || [], hidden = CH.fullLen - CH.end, isReal = !PRACTICE[cfg.sym];
  const tool = (k, label) => '<button class="btn sm' + (chTool === k ? " on" : "") + '" data-act="ch-tool" data-tool="' + k + '" aria-pressed="' + (chTool === k) + '">' + esc(t(label)) + "</button>";
  const tools = tool("cursor", "ch_cursor") + tool("h", "ch_hline") + tool("t", "ch_tline") + tool("f", "ch_fib");
  const tg = (k, label, on) => '<button class="btn sm tgl' + (on ? " on" : "") + '" data-act="ch-ind" data-k="' + k + '" aria-pressed="' + !!on + '">' + esc(label) + "</button>";
  const toggles = tg("sma1", t("ch_short_sma") + " " + cfg.sma1.p, cfg.sma1.on) + tg("sma2", t("ch_short_sma") + " " + cfg.sma2.p, cfg.sma2.on) + tg("ema", t("ch_short_ema") + " " + cfg.ema.p, cfg.ema.on) + tg("bb", t("ch_bb"), cfg.bb.on) + tg("rsi", "RSI " + cfg.rsi.p, cfg.rsi.on) + tg("macd", t("ch_macd"), cfg.macd.on) + tg("vol", t("ch_vol"), cfg.vol);
  const hint = chTool === "h" ? "ch_hint_h" : chTool === "t" ? (chPending ? "ch_hint_t2" : "ch_hint_t1") : chTool === "f" ? (chPending ? "ch_hint_f2" : "ch_hint_f1") : "ch_hint_cursor";
  const read = '<div class="ch-read" id="ch-read">' + chartReadout(CH.e - 1) + "</div>";

  if (chFull) {
    requestAnimationFrame(chartFit);
    return '<div class="ch-fullscreen' + (chTool !== "cursor" ? " drawing" : "") + '"><div class="ch-bar"><b>' + esc(symName(cfg.sym)) + '</b><div class="ch-bar-scroll">' + tools + '<i class="sep"></i>' + toggles + '</div><button class="btn sm primary" data-act="ch-full">' + esc(t("ch_exit")) + "</button></div>" + (chTool !== "cursor" ? '<p class="small muted" style="margin:0 4px 2px">' + esc(t(hint)) + "</p>" : "") + read + svg + "</div>";
  }

  const real = Object.keys(LIVE.history || {}).filter((k) => (LIVE.history[k] || []).length);
  const opt = (v, label) => '<option value="' + esc(v) + '"' + (String(cfg.sym) === String(v) ? " selected" : "") + ">" + esc(label) + "</option>";
  const symSel = '<div class="field"><label for="ch-sym">' + esc(t("ch_sym")) + '</label><select id="ch-sym" data-ch="sym"><optgroup label="' + esc(t("ch_practice")) + '">' + Object.keys(PRACTICE).map((k) => opt(k, t(PRACTICE[k]))).join("") + "</optgroup>" + (real.length ? (typeof chRealGroups === "function" ? chRealGroups(real, opt, (k) => k + " " + symName(k) + " (" + LIVE.history[k].length + " " + t("ch_candles") + ")") : '<optgroup label="' + esc(t("ch_real")) + '">' + real.map((k) => opt(k, k + " " + symName(k) + " (" + LIVE.history[k].length + " " + t("ch_candles") + ")")).join("") + "</optgroup>") : "") + "</select></div>";
  const nSel = '<div class="field"><label for="ch-n">' + esc(t("ch_view")) + '</label><select id="ch-n" data-ch="n">' + [20, 40, 60, 100, "all"].map((v) => '<option value="' + v + '"' + (String(cfg.n) === String(v) ? " selected" : "") + ">" + (v === "all" ? esc(t("ch_all")) : v) + "</option>").join("") + "</select></div>";
  const chip = (k) => { const d = IND_KEYS.find((x) => x[0] === k); return '<span class="indchip"><i class="sw ' + d[2] + '"></i><span>' + esc(t(d[1])) + (k === "macd" ? ' <span class="num muted">12/26/9</span>' : "") + "</span>" + (d[3] ? '<input class="num" type="number" min="2" max="200" step="1" id="ch-' + k + '-p" data-ch="' + k + '.p" value="' + cfg[k].p + '" aria-label="' + esc(t("ch_period")) + '">' : "") + '<button data-act="ch-ind" data-k="' + k + '" aria-label="' + esc(t("ch_remove")) + '">×</button></span>'; };
  const offList = IND_KEYS.filter((d) => !indOn(cfg, d[0]));
  const addSel = offList.length ? '<select id="ch-add" data-ch="add" class="addsel"><option value="">' + esc(t("ch_add_ind")) + "</option>" + offList.map((d) => '<option value="' + d[0] + '">' + esc(indName(cfg, d[0])) + "</option>").join("") + "</select>" : "";
  const typeSel = '<div class="field"><label for="ch-type">' + esc(t("ch_type")) + '</label><select id="ch-type" data-ch="type">' + [["candle", "ty_candle"], ["line", "ty_line"], ["ohlc", "ty_ohlc"]].map(([v, k]) => '<option value="' + v + '"' + (cfg.type === v ? " selected" : "") + ">" + esc(t(k)) + "</option>").join("") + "</select></div>";
  const ind = (k, label, cls) => '<label class="indbox"><input type="checkbox" id="ch-' + k + '-on" data-ch="' + k + '.on"' + (cfg[k].on ? " checked" : "") + '><i class="sw ' + cls + '"></i><span>' + esc(label) + '</span><input class="num" type="number" min="2" max="200" step="1" id="ch-' + k + '-p" data-ch="' + k + '.p" value="' + cfg[k].p + '" aria-label="' + esc(t("ch_period")) + '"></label>';
  const replay = chReplay == null
    ? '<button class="btn sm" data-act="ch-replay"' + (full.length < 12 ? " disabled" : "") + ">" + esc(t("ch_replay")) + '</button><span class="small muted">' + esc(t("ch_replay_p")) + "</span>"
    : '<button class="btn sm primary" data-act="ch-step" data-n="1"' + (hidden ? "" : " disabled") + ">" + esc(t("ch_next")) + '</button><button class="btn sm" data-act="ch-step" data-n="5"' + (hidden ? "" : " disabled") + ">" + esc(t("ch_next5")) + '</button><button class="btn sm" data-act="ch-replay-off">' + esc(t("ch_show_all")) + '</button><span class="tag amber num">' + hidden + '</span><span class="small muted">' + esc(t("ch_hidden")) + "</span>";
  const drawList = draws.length ? draws.map((dr, i) => '<span class="chip">' + esc(dr.t === "h" ? t("ch_h_lbl") : dr.t === "f" ? t("ch_f_lbl") + (dr.auto ? " ✦" : "") : t("ch_t_lbl")) + ' <span class="num">' + (dr.t === "h" ? dr.p.toFixed(2) : dr.p1.toFixed(2) + " → " + dr.p2.toFixed(2)) + '</span><button data-act="ch-del" data-i="' + i + '" aria-label="' + esc(t("j_del")) + '">×</button></span>').join("") : '<span class="small muted">' + esc(t("ch_none")) + "</span>";
  const note = isReal ? t("ch_few").replace("{n}", full.length) : t("ch_practice_note");
  const step = Math.max(1, Math.round(CH.slots / 3));
  const canWl = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  const wl = !(typeof HOSTED !== "undefined" && HOSTED) ? "" : '<div class="panel stack"><div><h3 style="font-size:18px">' + esc(t("wl_h")) + (WL ? ' <span class="tag num">' + WL.length + " / " + WL_MAX + "</span>" : "") + '</h3><p class="small muted">' + esc(canWl ? t("wl_p") : t("wl_need")) + "</p></div>" +
    (canWl ? '<form class="row" data-form="watch" novalidate><input id="wl-new" placeholder="' + esc(t("wl_ph")) + '" maxlength="40" style="flex:1;min-width:0;background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:8px 10px"><button class="btn" type="submit">' + esc(t("wl_add")) + '</button></form><div class="row">' + (WL || []).map((w) => '<span class="chip"><span>' + esc(w) + (quoteOf(w) && quoteOf(w).live ? " " + esc(L(quoteOf(w).name)) : "") + '</span><button data-act="wl-del" data-sym="' + esc(w) + '" aria-label="' + esc(t("j_del")) + '">×</button></span>').join("") + "</div>" + importHtml() : '<div><a class="btn" href="#settings">' + esc(t("set_h")) + "</a></div>") + "</div>";

  return '<div class="wrap' + (chSide() ? " ch-page" : "") + '"><div class="page-head"><h1>' + esc(t("ch_h")) + "</h1><p>" + esc(t("ch_p")) + '</p></div><div class="stack" style="padding-block:18px">' +
    '<div class="panel stack"><div class="form-grid ch-grid">' + symSel + typeSel + nSel + '</div><div class="row"><b class="small">' + esc(t("ch_ind")) + "</b>" + IND_KEYS.filter((d) => indOn(cfg, d[0])).map((d) => chip(d[0])).join("") + addSel + '<a class="small" href="#g-indicators">' + esc(t("ch_ind_guide")) + "</a></div>" +
    (typeof scaRow === "function" ? scaRow() : "") + '<div class="row"><b class="small">' + esc(t("ch_tools")) + "</b>" + tools + '<button class="btn sm ghost" data-act="ch-clear"' + (draws.length ? "" : " disabled") + ">" + esc(t("ch_clear")) + '</button></div><p class="small muted" id="ch-hint">' + esc(t(hint)) + "</p>" + (["vwap", "rvol", "obv", "cmf", "mfi"].some((k) => indOn(cfg, k)) && !hasVol(full) ? '<p class="small notice" style="margin:0">' + esc(t("ch_novol")) + "</p>" : "") + "</div>" +
    '<div class="chartbox' + (chTool !== "cursor" ? " drawing" : "") + '"><div class="ch-top">' + read + '<div class="row" style="gap:6px;flex-wrap:nowrap"><button class="btn sm primary" data-act="ch-analyze" title="' + esc(t("fb_h")) + '">' + ICON_READ + '<span class="hide-s">' + esc(t("fb_btn")) + '</span></button><button class="btn sm' + (chReading ? " on" : "") + '" data-act="ch-read" title="' + esc(t("ch_read")) + '">' + ICON_READ + '<span class="hide-s">' + esc(t("ch_read")) + '</span></button><button class="btn sm" data-act="ch-full" title="' + esc(t("ch_full")) + '" aria-label="' + esc(t("ch_full")) + '">' + ICON_FULL + "</button></div></div>" + '<div class="ch-body' + (chSide() ? " side" : "") + '">' + svg + chInfoBox() + "</div></div>" +
    (chReading ? readingHtml() : "") +
    (typeof scaPanel === "function" ? scaPanel() : "") +
    '<div class="row" style="justify-content:space-between"><div class="row"><button class="btn sm" data-act="ch-pan" data-n="' + step + '"' + (CH.s > 0 ? "" : " disabled") + ">" + esc(t("ch_older")) + '</button><button class="btn sm" data-act="ch-pan" data-n="-' + step + '"' + (chOffset > 0 ? "" : " disabled") + ">" + esc(t("ch_newer")) + '</button></div><div class="row">' + replay + "</div></div>" +
    '<div class="panel stack"><div class="row" style="justify-content:space-between"><h3 style="font-size:18px">' + esc(t("ch_draws")) + '</h3><div class="row">' + (isReal ? '<a class="btn sm" target="_blank" rel="noopener" href="https://www.tradingview.com/chart/?symbol=TADAWUL%3A' + encodeURIComponent(cfg.sym) + '">' + esc(t("ch_tv")) + " ↗</a>" : "") + '<button class="btn sm primary" data-act="ch-trade"' + (CH.data.length ? "" : " disabled") + ">" + esc(t("ch_trade")) + '</button></div></div><div class="row">' + drawList + '</div>' + (isReal ? '<label class="row small" style="gap:8px"><input type="checkbox" id="fb-auto"' + (cfg.autoAI ? " checked" : "") + ">" + esc(t("fb_auto")) + '</label><p class="small muted" style="margin-top:-6px">' + esc(t("fb_auto_note")) + "</p>" : "") + "</div>" + wl + (typeof extraPanel === "function" ? extraPanel() : "") +
    '<div class="notice">' + esc(note) + " " + esc(t("disclaimer")) + "</div></div></div>";
}

function importHtml() {
  const syms = Object.keys(LIVE.quotes || {}), cur = chartCfg().sym;
  let inner;
  if (!syms.length) inner = '<p class="small muted">' + esc(t("im_no_sym")) + "</p>";
  else if (chImport) inner = '<div class="result" style="flex-direction:column;gap:4px"><b style="font-family:var(--body);font-size:15px">' + esc(chImport.sym + " " + symName(chImport.sym)) + '</b><span style="font-size:14.5px;color:var(--ink)">' + esc(t("im_found").replace("{n}", chImport.rows.length).replace("{a}", chImport.rows[0].d).replace("{b}", chImport.rows[chImport.rows.length - 1].d).replace("{c}", chImport.rows[chImport.rows.length - 1].c.toFixed(2))) + "</span><span>" + esc(t("im_check")) + '</span></div><div class="row"><button class="btn primary" data-act="im-save">' + esc(t("im_save")) + '</button><button class="btn" data-act="im-cancel">' + esc(t("im_cancel")) + "</button></div>";
  else inner = '<div class="row"><div class="field" style="flex:1;min-width:160px"><label for="im-sym">' + esc(t("im_sym")) + '</label><select id="im-sym">' + syms.map((k) => '<option value="' + esc(k) + '"' + (k === cur ? " selected" : "") + ">" + esc(k + " " + symName(k)) + "</option>").join("") + '</select></div><label class="btn" for="im-file" style="align-self:flex-end">' + esc(t("im_file")) + '</label><input id="im-file" type="file" accept=".csv,.xlsx,.xls,text/csv" hidden></div><div class="field"><label for="im-text">' + esc(t("im_paste")) + '</label><textarea id="im-text" rows="4" dir="ltr" placeholder="' + esc(t("im_paste_ph")) + '" style="font-family:var(--mono);font-size:12.5px;white-space:pre;overflow:auto"></textarea></div><div class="row"><button class="btn" data-act="im-read">' + esc(t("im_read")) + '</button><span class="small muted">' + esc(t("im_more")) + "</span></div>";
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

/* ----- لوحة القراءات (بأسلوب MT5) ----- */
const chSide = () => !chFull && (document.documentElement.clientWidth || 960) >= 1100;
function chATR(i, n) { if (!CH || i < n) return null; let x = 0; for (let k = i - n + 1; k <= i; k++) { const r = CH.data[k], pc = CH.data[k - 1].c; x += Math.max(r.h - r.l, Math.abs(r.h - pc), Math.abs(r.l - pc)); } return x / n; }
function chInfoLive(i) {
  const r = CH.data[i]; if (!r) return "";
  const d = r.c < 5 ? 4 : 2, f = (v) => (v == null || !isFinite(v) ? "–" : Number(v).toFixed(d)), prev = CH.data[i - 1], ch = prev ? ((r.c - prev.c) / prev.c) * 100 : null, atr = chATR(i, 14);
  const row = (k, v, cls) => '<div class="ci-r"><span>' + esc(k) + '</span><b class="' + (cls || "") + '">' + v + "</b></div>";
  const h = row(t("ci_date"), esc(r.d || String(i + 1))) + row(t("ch_c"), f(r.c), r.c >= r.o ? "up" : "down") + (ch == null ? "" : row(t("ci_chg"), (ch > 0 ? "+" : "") + ch.toFixed(2) + "%", ch >= 0 ? "up" : "down")) +
    row(t("ch_o"), f(r.o)) + row(t("ch_hi"), f(r.h)) + row(t("ch_lo"), f(r.l)) + row(t("ci_span"), f(r.h - r.l)) + (atr != null ? row(t("ci_atr"), f(atr)) : "") + (r.v ? row(t("ch_vol"), int(r.v)) : "");
  const ind = [];
  CH.lines.forEach((ln) => { if (ln.v[i] != null) ind.push('<div class="ci-r"><span class="' + ln.cls + '">' + esc(ln.name) + "</span><b>" + f(ln.v[i]) + "</b></div>"); });
  if (CH.bb && CH.bb.up[i] != null) ind.push('<div class="ci-r"><span class="i4">' + esc(t("ch_bb")) + "</span><b>" + f(CH.bb.lo[i]) + " – " + f(CH.bb.up[i]) + "</b></div>");
  if (CH.md && CH.md.line[i] != null) ind.push('<div class="ci-r"><span class="i3">' + esc(t("ch_macd")) + '</span><b class="' + (CH.md.line[i] >= CH.md.sig[i] ? "up" : "down") + '">' + f(CH.md.line[i]) + " / " + f(CH.md.sig[i]) + "</b></div>");
  (CH.fl || []).forEach((fv) => { const v = fv.v[i]; if (v != null) ind.push('<div class="ci-r"><span class="' + fv.cls + '">' + esc(fv.name) + '</span><b class="' + (fv.k === "cmf" ? (v >= 0 ? "up" : "down") : fv.k === "rvol" ? (v >= 1.5 ? "up" : "") : fv.k === "mfi" ? (v > 80 ? "down" : v < 20 ? "up" : "") : "") + '">' + (fv.k === "obv" ? int(Math.round(v)) : v.toFixed(fv.dec)) + (fv.k === "rvol" ? "×" : "") + "</b></div>"); });
  if (CH.rs && CH.rs[i] != null) ind.push('<div class="ci-r"><span class="i2">' + esc(t("ch_rsi")) + '</span><b class="' + (CH.rs[i] > 70 ? "down" : CH.rs[i] < 30 ? "up" : "") + '">' + CH.rs[i].toFixed(1) + "</b></div>");
  return '<div class="ci-sec">' + h + "</div>" + (ind.length ? '<div class="ci-sec">' + ind.join("") + "</div>" : "");
}
function chInfoBox() {
  if (!CH || !CH.data.length) return "";
  const a = CH.e - CH.s >= 20 ? analyze(CH.data, CH.s, CH.e) : null, d = CH.data[CH.e - 1].c < 5 ? 4 : 2, sym = S.chart && S.chart.sym;
  const reg = a && a.regime ? '<b class="' + (a.regime === "up" ? "up" : a.regime === "down" ? "down" : "amber") + '">' + esc(t("ci_reg_" + a.regime)) + "</b>" : "<b>–</b>";
  const stat = a && a.regime ? '<div class="ci-sec ci-sum"><div class="ci-r"><span>' + esc(t("ci_trend")) + "</span>" + reg + '</div><div class="ci-r"><span>' + esc(t("ci_sup")) + '</span><b class="up">' + (a.sup ? a.sup.toFixed(d) : "–") + '</b></div><div class="ci-r"><span>' + esc(t("ci_res")) + '</span><b class="down">' + (a.res ? a.res.toFixed(d) : "–") + "</b></div></div>" : "";
  return '<aside class="ch-info" aria-label="' + esc(t("ci_h")) + '"><div class="ci-head"><b>' + esc(sym ? symName(sym) : "") + "</b><span>" + esc((sym && !PRACTICE[sym] ? sym + " · " : "") + t("ci_tf")) + "</span></div>" + stat + '<div id="ci-live">' + chInfoLive(CH.e - 1) + '</div><p class="ci-tip">' + esc(t("ci_tip")) + "</p></aside>";
}
Object.assign(UI, { ci_h: ["لوحة القراءات", "Readings"], ci_tf: ["يومي", "Daily"], ci_date: ["التاريخ", "Date"], ci_chg: ["التغير", "Change"], ci_span: ["مدى الشمعة", "Candle range"], ci_atr: ["متوسط المدى (14)", "Avg range (14)"],
  ci_trend: ["الاتجاه", "Trend"], ci_reg_up: ["صاعد", "Up"], ci_reg_down: ["هابط", "Down"], ci_reg_range: ["عرضي", "Sideways"], ci_sup: ["أقرب دعم", "Nearest support"], ci_res: ["أقرب مقاومة", "Nearest resistance"], ci_tip: ["مرّر على الشارت وتتغير القراءات لكل شمعة.", "Hover the chart to read any candle."] });
function chartReadout(i) {
  if (!CH || !CH.data[i]) return "&nbsp;";
  const r = CH.data[i], f = (v) => (v == null ? "–" : v.toFixed(2)), n = (v, cls) => '<b class="num ' + (cls || "") + '">' + v + "</b>";
  let h = '<span class="rd muted">' + (r.d ? '<span class="num">' + esc(r.d) + "</span>" : esc(t("ch_day")) + " " + n(i + 1)) + '</span><span class="rd">' + esc(t("ch_o")) + " " + n(f(r.o)) + '</span><span class="rd">' + esc(t("ch_hi")) + " " + n(f(r.h)) + '</span><span class="rd">' + esc(t("ch_lo")) + " " + n(f(r.l)) + '</span><span class="rd">' + esc(t("ch_c")) + " " + n(f(r.c), r.c >= r.o ? "pos" : "neg") + "</span>";
  CH.lines.forEach((ln) => { h += '<span class="rd ' + ln.cls + '">' + esc(ln.name) + ": " + n(f(ln.v[i])) + "</span>"; });
  if (CH.bb && CH.bb.up[i] != null) h += '<span class="rd i4">' + esc(t("ch_bb")) + ": " + n(f(CH.bb.lo[i])) + " – " + n(f(CH.bb.up[i])) + "</span>";
  if (CH.md && CH.md.line[i] != null) h += '<span class="rd i3">' + esc(t("ch_macd")) + ": " + n(f(CH.md.line[i])) + " / " + esc(t("ch_sig")) + " " + n(f(CH.md.sig[i])) + "</span>";
  (CH.fl || []).forEach((fv) => { if (fv.v[i] != null) h += '<span class="rd ' + fv.cls + '">' + esc(fv.name) + ": " + n(fv.k === "obv" ? int(Math.round(fv.v[i])) : fv.v[i].toFixed(fv.dec)) + "</span>"; });
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
  const ci = document.getElementById("ci-live"); if (ci && CH.data[pt.i]) ci.innerHTML = chInfoLive(pt.i);
  const rd = document.getElementById("ch-read");
  if (rd && CH.data[pt.i]) rd.innerHTML = chartReadout(pt.i) + (pt.inPrice && chTool !== "cursor" ? '<span class="rd muted">@ <b class="num">' + pt.p.toFixed(2) + "</b></span>" : "");
}
document.addEventListener("pointermove", (ev) => { if (ev.target.closest && ev.target.closest("#ch-svg")) chartHover(ev); });
document.addEventListener("pointerdown", (ev) => { if (ev.target.closest && ev.target.closest("#ch-svg")) chartHover(ev); });

/* after a fullscreen render, measure the real space and correct the chart height (at most twice) */
function chartFit() {
  const svg = document.getElementById("ch-svg"); if (!chFull || !svg || chFitTries >= 2) return;
  const over = svg.getBoundingClientRect().bottom - (window.innerHeight - 6);
  if (over > 3 || over < -30) { chFitTries++; chFullPad = Math.max(60, chFullPad + over); render(); }
}
function setFull(on) {
  chFitTries = 0;
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
window.addEventListener("resize", () => { if (route() !== "chart") return; if (document.activeElement && /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return; clearTimeout(chResize); chResize = setTimeout(() => { chFitTries = 0; render(); }, 120); });
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
    else if (chTool === "f") { list.push({ t: "f", i1: chPending.i, p1: chPending.p, i2: pt.i, p2: pt.p }); chPending = null; chFitTries = 0; save(); render(); }
    else { const a = chPending, b = { i: pt.i, p: pt.p }, first = a.i < b.i ? a : b, second = a.i < b.i ? b : a; list.push({ t: "t", i1: first.i, p1: first.p, i2: second.i, p2: second.p }); chPending = null; save(); render(); }
    return;
  }
  const el = ev.target.closest && ev.target.closest("[data-act]"); if (!el) return;
  const act = el.dataset.act;
  if (act === "im-save") { importSave(); return; }
  if (act === "im-read") {
    let rows = null; try { rows = parsePasted(document.getElementById("im-text").value); } catch (e) {}
    if (!rows) { toast(t("im_bad_paste")); return; }
    chImport = { sym: document.getElementById("im-sym").value, rows, today: today() }; render(); return;
  }
  if (act === "im-cancel") { chImport = null; render(); return; }
  if (act === "wl-del") { if (WL) saveWatch(WL.filter((w) => w !== el.dataset.sym), "wl_removed"); return; }
  if (act.slice(0, 3) !== "ch-") return;
  const cfg = chartCfg(), full = chartData(cfg.sym);
  if (act === "ch-full") { setFull(!chFull); return; }
  if (act === "ch-tool") { chTool = el.dataset.tool; chPending = null; chFitTries = 0; }
  else if (act === "ch-ind") { const k = el.dataset.k; if (k === "vol") cfg.vol = !cfg.vol; else cfg[k].on = !cfg[k].on; chFitTries = 0; save(); }
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
  else if (key === "type") cfg.type = el.value;
  else if (key === "add") { if (!el.value) return; if (el.value === "vol") cfg.vol = true; else cfg[el.value].on = true; }
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
