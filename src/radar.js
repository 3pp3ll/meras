/* ===== مِراس: رادار الزخم (للمالك) =====
   radar.json يكتبه GitHub Actions كل 4 ساعات: يمسح الأسهم السعودية وقائمة أمريكية تقنية وذكاء اصطناعي.
   ثلاث أنواع إشارات للمضاربة من أيام لأسبوع: اختراق مع حجم، الأكثر ارتفاعاً، زخم مستمر.
   كل إشارة جديدة تدخل الجرس، والقوية (3 من 3) يوصل عنها تنبيه GitHub للجوال. */
Object.assign(UI, {
  rd_t: ["رادار الزخم", "Momentum radar"], dk_g_rd: ["اختراقات وأسهم تتحرك بسرعة", "Breakouts and fast movers"],
  rd_p: ["يمسح السوق السعودي وأسهم التقنية والذكاء الاصطناعي الأمريكية كل 4 ساعات، ويطلع الأسهم اللي فيها حركة تناسب المضاربة من أيام لأسبوع. الهدف 3% إلى 5%، والوقف مكتوب مع كل سهم. مرشح للتحليل، مو توصية شراء.", "Scans the Saudi market and US tech and AI shares every 4 hours for moves that suit a few days to a week. Target 3% to 5%, with a stop on each card. A candidate to analyse, not a buy recommendation."],
  rd_all: ["الكل", "All"], rd_breakout: ["اختراق مع حجم", "Volume breakout"], rd_gainer: ["الأكثر ارتفاعاً", "Top gainer"], rd_momentum: ["زخم مستمر", "Steady momentum"],
  rd_sa: ["السعودي", "Saudi"], rd_us: ["الأمريكي", "US"],
  rd_d_breakout: ["السعر اخترق أعلى قمة في آخر 20 يوم بحجم تداول ضعفين المعتاد أو أكثر. الدخول مع بداية الاختراق، والوقف تحت القمة المخترقة.", "Price broke the 20-day high on at least twice the usual volume. Enter early in the breakout, stop below the broken high."],
  rd_d_gainer: ["من أكثر الأسهم ارتفاعاً اليوم بحجم عالي، وغالباً وراه خبر (نتائج، عقد، استحواذ). الحركة تكمل عادة أيام، بس الدخول المتأخر خطر.", "One of today's biggest risers on high volume, often news-driven. These moves often run a few days, but late entries are risky."],
  rd_d_momentum: ["سهم في اتجاه صاعد واضح: فوق متوسط 20 و50، صعد 6% أو أكثر في 5 أيام، وRSI بدون تشبع. ركوب الموجة بدل مطاردة القاع.", "A clear uptrend: above the 20 and 50 averages, up 6%+ in 5 days, RSI not overbought. Ride the wave instead of catching a falling knife."],
  rd_str: ["قوة {n} من 3", "Strength {n} of 3"], rd_close: ["الإقفال", "Close"], rd_t3: ["هدف 3%", "Target 3%"], rd_t5: ["هدف 5%", "Target 5%"], rd_stop: ["الوقف", "Stop"],
  rd_risk: ["مخاطرة {p}%", "Risk {p}%"], rd_rvol: ["الحجم ×{x}", "Volume ×{x}"], rd_why: ["ليش ظهر؟", "Why it shows"], rd_chart: ["حلّل في الشارت", "Analyse on the chart"],
  rd_none: ["ما فيه إشارات بهالفلتر الحين.", "No signals for this filter right now."], rd_wait: ["الرادار يمسح أول مرة خلال دقائق. ارجع بعد شوي.", "The radar is running its first scan. Check back in a few minutes."],
  rd_log: ["آخر التنبيهات", "Recent alerts"], rd_scan: ["مسح {n} سهم · آخر تحديث {d}", "Scanned {n} shares · updated {d}"], rd_added: ["انضاف للشارت، شموعه توصل خلال دقيقتين", "Added to the chart; candles arrive in about two minutes"],
  rd_full: ["قائمة الشارت ممتلئة (40). احذف سهم منها أول.", "The chart list is full (40). Remove one first."],
  rd_rules: ["قواعد المضاربة", "Trading rules"],
  rd_r1: ["لا تشتري سهم ينهار لأنه رخيص. ادخل مع الاتجاه أو الاختراق.", "Don't buy a falling share because it's cheap. Enter with the trend or breakout."],
  rd_r2: ["اكتفِ بـ 3% إلى 5% واطلع. البناء تراكمي.", "Take 3% to 5% and exit. Build up gradually."],
  rd_r3: ["الوقف قبل الدخول. إذا المخاطرة أكبر من الهدف، اترك السهم.", "Set the stop before entry. If the risk is bigger than the target, skip it."],
  rd_r4: ["حلّل الشارت والخبر قبل أي قرار.", "Check the chart and the news before any decision."],
  rd_refresh: ["حدّث الحين", "Refresh now"], rd_busy: ["جاري المسح… {t}", "Scanning… {t}"], rd_almost: ["يخلص المسح خلال لحظات…", "Finishing the scan…"], rd_done: ["تم تحديث الرادار", "Radar updated"],
  rd_noperm: ["مفتاح GitHub ما عنده صلاحية تشغيل المسح (Actions: Read and write). المسح التلقائي كل 4 ساعات شغال عادي.", "Your GitHub token can't start the scan (needs Actions: Read and write). The 4-hourly scan still runs."],
  nt_f_radar: ["الرادار", "Radar"], nt_radar: ["{s} {n} · {k}", "{s} {n} · {k}"], nt_radar_p: ["{c} ({g}) · هدف 3% {t3} · الوقف {st}", "{c} ({g}) · 3% target {t3} · stop {st}"]
});

let RD = null, rdLoading = false, rdF = "all", rdM = "all", RDJ = null;   // RDJ: مسح يدوي شغال {start, since}
const RD_WAIT = 180;
const rdApi = (path, opt) => fetch("https://api.github.com/repos/" + CFG.owner + "/" + CFG.repo + path, Object.assign({ headers: { Authorization: "Bearer " + CFG.token, Accept: "application/vnd.github+json" } }, opt || {}));
async function rdRefresh() {
  if (RDJ) return;
  try {
    const r = await rdApi("/actions/workflows/radar.yml/dispatches", { method: "POST", headers: { Authorization: "Bearer " + CFG.token, Accept: "application/vnd.github+json", "Content-Type": "application/json" }, body: JSON.stringify({ ref: "main" }) });
    if (!r.ok) { toast(t(r.status === 403 || r.status === 404 ? "rd_noperm" : "e_net")); return; }
  } catch (e) { toast(t("e_net")); return; }
  RDJ = { start: Date.now(), since: new Date(Date.now() - 60000).toISOString() };
  render(); rdTick();
}
function rdPaint() {
  if (!RDJ) return;
  const el = document.getElementById("rd-prog"), left = Math.max(0, RD_WAIT - Math.round((Date.now() - RDJ.start) / 1000));
  if (el) {
    el.querySelector("i").style.width = Math.min(100, (1 - left / RD_WAIT) * 100) + "%";
    el.querySelector("span").textContent = left > 0 ? t("rd_busy").replace("{t}", Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0")) : t("rd_almost");
  }
}
async function rdTick() {
  if (!RDJ) return;
  rdPaint();
  const sec = Math.round((Date.now() - RDJ.start) / 1000);
  if (sec >= 40 && Date.now() - (RDJ.poll || 0) > 15000) {
    RDJ.poll = Date.now();
    try {
      const r = await rdApi("/actions/workflows/radar.yml/runs?event=workflow_dispatch&per_page=1&created=>" + RDJ.since.slice(0, 19));
      const run = r.ok ? ((await r.json()).workflow_runs || [])[0] : null;
      if ((run && run.status === "completed") || sec > 600) { await new Promise((ok) => setTimeout(ok, 8000)); RDJ = null; RD = null; await loadRadar(); toast(t("rd_done")); render(); return; }
    } catch (e) {}
  }
  setTimeout(rdTick, 1000);
}
const RD_IC = '<path d="M12 12l6-6M19.1 4.9A10 10 0 1 0 22 12M16.2 7.8A6 6 0 1 0 18 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>';
if (typeof DK_IC !== "undefined") DK_IC.rd = RD_IC;
if (typeof NT_IC !== "undefined") NT_IC.radar = RD_IC;

async function loadRadar() {
  if (!(typeof HOSTED !== "undefined" && HOSTED) || !CFG.token || rdLoading) return; rdLoading = true;
  try { const f = await readJson("radar.json"); RD = (f && f.data) || { items: [], log: [] }; } catch (e) { RD = RD || { items: [], log: [] }; }
  rdLoading = false;
  if (typeof topBell === "function") topBell();
  if (typeof deskOn === "function" && deskOn("rd")) render();
}
const rdNum = (v) => (v == null ? "-" : fmt(v, v < 10 ? 3 : 2));
const rdCur = (m) => (m === "SA" ? (S.lang === "ar" ? " ر.س" : " SAR") : " $");
const rdPct = (v) => '<span class="num ' + (v >= 0 ? "pos" : "neg") + '" dir="ltr">' + (v >= 0 ? "+" : "") + fmt(v, 2) + "%</span>";

function rdCard(x) {
  const nm = (typeof dkName === "function" && dkName(x.s)) || x.n || "";
  const sh = x.sharia === "ok" ? '<span class="tag up">' + esc(t("sh_ok")) + "</span>" : x.sharia === "no" ? '<span class="tag down">' + esc(t("tp_noshar")) + "</span>" : "";
  const news = (x.news || []).map((n) => '<li><a href="' + esc(n.url) + '" target="_blank" rel="noopener">' + esc(n.t) + '</a> <span class="small muted">' + esc(n.src || "") + "</span></li>").join("");
  return '<div class="panel stack rd-card rd-' + x.type + '"><div class="row" style="justify-content:space-between;align-items:flex-start;gap:8px"><div><h3 style="margin:0"><span class="num">' + esc(x.s) + "</span> " + esc(nm) + "</h3>" +
    '<div class="row" style="gap:6px;margin-top:6px"><span class="tag rd-k">' + esc(t("rd_" + x.type)) + '</span><span class="tag">' + esc(t("rd_str").replace("{n}", x.strength)) + '</span><span class="tag">' + esc(t(x.m === "SA" ? "rd_sa" : "rd_us")) + "</span>" + sh + "</div></div>" +
    '<div style="text-align:end"><b class="num" dir="ltr">' + rdNum(x.close) + "</b>" + esc(rdCur(x.m)) + "<br>" + rdPct(x.chg) + "</div></div>" +
    '<div class="rd-lv"><span><small>' + esc(t("rd_t3")) + '</small><b class="num pos">' + rdNum(x.t3) + '</b></span><span><small>' + esc(t("rd_t5")) + '</small><b class="num pos">' + rdNum(x.t5) + '</b></span><span><small>' + esc(t("rd_stop")) + '</small><b class="num neg">' + rdNum(x.stop) + '</b><small class="num">' + esc(t("rd_risk").replace("{p}", fmt(x.risk, 1))) + "</small></span></div>" +
    '<div class="tp-why"><b class="small">' + esc(t("rd_why")) + "</b><ul>" + (x.why || []).map((w) => "<li>" + esc(w) + "</li>").join("") + "</ul></div>" +
    (news ? '<ul class="small rd-news">' + news + "</ul>" : "") +
    (x.risk > 5 ? '<div class="notice small">' + esc(t("rd_r3")) + "</div>" : "") +
    '<div class="row"><button class="btn sm primary" data-act="rd-chart" data-s="' + esc(x.s) + '" data-m="' + esc(x.m) + '">' + esc(t("rd_chart")) + "</button>" + (typeof newsBtn === "function" && newsBtn(x.s) ? newsBtn(x.s, true) : "") + '<span class="small muted num">' + esc(x.d) + "</span></div></div>";
}

function dkRadar() {
  if (!RD && !rdLoading) loadRadar();
  const chips = (cur, key, list) => '<div class="nt-filters" role="group">' + list.map((k) => '<button class="dg-chip" data-act="rd-f" data-key="' + key + '" data-f="' + k + '" aria-pressed="' + (cur === k) + '">' + esc(t(k === "all" ? "rd_all" : "rd_" + k)) + "</button>").join("") + "</div>";
  const rules = '<details class="panel"><summary><b>' + esc(t("rd_rules")) + '</b></summary><ul class="small">' + ["rd_r1", "rd_r2", "rd_r3", "rd_r4"].map((k) => "<li>" + esc(t(k)) + "</li>").join("") + "</ul>" + '<p class="small"><a href="#sch-momentum">' + esc(t("rd_lesson")) + " ←</a></p>" +
    ["breakout", "gainer", "momentum"].map((k) => '<p class="small"><b>' + esc(t("rd_" + k)) + ":</b> " + esc(t("rd_d_" + k)) + "</p>").join("") + "</details>";
  const head = '<p class="muted" style="margin:0">' + esc(t("rd_p")) + "</p>" + rules;
  if (!RD) return head + '<div class="notice">' + esc(t("dk_loading")) + "</div>";
  if (!RD.updated) return head + '<div class="notice">' + esc(t("rd_wait")) + "</div>";
  const list = (RD.items || []).filter((x) => !usHide(x.s, x.m, x.sharia) && (rdF === "all" || x.type === rdF) && (rdM === "all" || x.m === rdM.toUpperCase()));
  const log = (RD.log || []).slice(-15).reverse();
  setTimeout(() => { if (typeof ntMark === "function") ntMark((RD.log || []).map((x) => "r:" + x.id)); if (typeof topBell === "function") topBell(); }, 1500);
  const bar = RDJ ? '<div class="rd-prog" id="rd-prog"><div><i></i></div><span>' + esc(t("rd_busy").replace("{t}", "3:00")) + "</span></div>" : "";
  if (RDJ) setTimeout(rdPaint, 30);
  return head + '<div class="row" style="justify-content:space-between;align-items:center"><p class="small muted" style="margin:0">' + esc(t("rd_scan").replace("{n}", RD.scanned || 0).replace("{d}", whenText(RD.updated))) + '</p><button class="btn sm" data-act="rd-refresh"' + (RDJ ? " disabled" : "") + '>⟳ ' + esc(t("rd_refresh")) + "</button></div>" + bar +
    chips(rdF, "type", ["all", "breakout", "gainer", "momentum"]) + chips(rdM, "mk", ["all", "sa", "us"]) +
    (rdF !== "all" ? '<p class="small muted" style="margin:0">' + esc(t("rd_d_" + rdF)) + "</p>" : "") +
    (list.length ? '<div class="stack">' + list.map(rdCard).join("") + "</div>" : '<div class="notice">' + esc(t("rd_none")) + "</div>") +
    (log.length ? owPanel(t("rd_log"), '<ul class="tp-left">' + log.map((x) => '<li><span class="num">' + esc(x.s) + "</span> " + esc((typeof dkName === "function" && dkName(x.s)) || x.n || "") + ' <span class="tag">' + esc(t("rd_" + x.type)) + '</span> <span class="small muted num">' + esc(x.d) + " · " + esc(t("rd_str").replace("{n}", x.strength)) + "</span></li>").join("") + "</ul>") : "");
}

/* الجرس: كل إشارة قوتها 2 أو أكثر، والغير مقروء يحسب بس القوية والغير مخالفة شرعياً */
function rdBellItems() {
  if (!RD || !Array.isArray(RD.log)) return [];
  return RD.log.filter((x) => x.strength >= 2 && x.sharia !== "no").slice(-40).map((x) => ({ id: "r:" + x.id, kind: "radar", x, date: String(x.at || x.d).slice(0, 10) }));
}

document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="rd-"]'); if (!el) return;
  const a = el.dataset.act;
  if (a === "rd-refresh") { rdRefresh(); return; }
  if (a === "rd-f") { if (el.dataset.key === "type") rdF = el.dataset.f; else rdM = el.dataset.f; render(); }
  else if (a === "rd-chart") {
    const s = el.dataset.s, m = el.dataset.m;
    const has = typeof LIVE !== "undefined" && LIVE && LIVE.history && LIVE.history[s] && LIVE.history[s].length;
    if (!has && typeof EXL !== "undefined" && Array.isArray(EXL) && !EXL.some(([k]) => k === s)) {
      if (EXL.length >= 40) { toast(t("rd_full")); return; }
      extraSaveList([...EXL, [s, m]], "rd_added");
    }
    S.chart.sym = s; save(); location.hash = "chart";
  }
});
if (typeof HOSTED !== "undefined" && HOSTED && CFG.token) {
  loadRadar();
  setInterval(() => { if (document.visibilityState === "visible") loadRadar(); }, 15 * 60 * 1000);
}

/* ----- درس: طريقة حساب الزخم (التعليم ← مدارس التحليل ← #sch-momentum) ----- */
const MOM_LESSON = [
  [["الشموع اليومية لآخر 6 شهور", "Daily candles for the last 6 months"],
   ["كل شمعة فيها الافتتاح والأعلى والأدنى والإقفال والحجم. الرادار يسحبها لكل سهم، وشمعة اليوم تتحدث أثناء الجلسة.", "Each candle has open, high, low, close and volume. The radar pulls them for every share; today's candle updates during the session."],
   ["هي المادة الخام: كل القراءات اللي تحت تنحسب منها.", "The raw material: every reading below is computed from them."]],
  [["أعلى سعر في آخر 20 يوم", "The 20-day high"],
   ["أعلى قمة وصلها السهم في آخر 20 جلسة (تقريباً شهر تداول)، بدون اليوم.", "The highest price of the last 20 sessions (about a trading month), excluding today."],
   ["إذا أقفل السهم اليوم فوقها، معناه كسر مقاومة الشهر: هذا الاختراق.", "If today's close is above it, the share broke the month's resistance: that is the breakout."]],
  [["الحجم النسبي", "Relative volume"],
   ["حجم اليوم ÷ متوسط حجم آخر 20 يوم. مثال: المتوسط مليون سهم واليوم تداول 2.5 مليون، يعني الحجم النسبي 2.5.", "Today's volume ÷ the 20-day average. Example: average 1M shares, today 2.5M, relative volume 2.5."],
   ["الاختراق بدون حجم غالباً يفشل. الرادار يطلب 1.8 أو أكثر للاختراق، و2.5 أو أكثر عشان يعطيه قوة إضافية.", "Breakouts without volume often fail. The radar needs 1.8+ for a breakout and 2.5+ for extra strength."]],
  [["المتوسط المتحرك 20 و50", "The 20 and 50 moving averages"],
   ["متوسط إقفال آخر 20 يوم، ومتوسط آخر 50 يوم. مثال: مجموع إقفالات 20 يوم ÷ 20.", "The average close of the last 20 days and of the last 50. Example: the sum of 20 closes ÷ 20."],
   ["السعر فوق متوسط 20 ومتوسط 20 فوق 50 يعني اتجاه صاعد واضح. هذا شرط ركوب الموجة بدل شراء سهم ينهار.", "Price above the 20, and the 20 above the 50, means a clear uptrend: the rule for riding the wave instead of buying a falling share."]],
  [["مؤشر القوة النسبية RSI 14", "RSI 14"],
   ["يقارن متوسط الصعود بمتوسط النزول في آخر 14 يوم، ويعطي رقم من 0 إلى 100. فوق 70 تشبع شراء، وتحت 30 تشبع بيع.", "Compares average gains with average losses over 14 days, giving 0 to 100. Above 70 is overbought, below 30 oversold."],
   ["الرادار يبي RSI بين 55 و75: زخم صاعد قوي، بس السهم ما وصل لمرحلة الطفرة اللي غالباً يجي بعدها تصحيح.", "The radar wants 55 to 75: strong upward momentum, but not yet the spike that is often followed by a pullback."]],
  [["متوسط المدى الحقيقي ATR 14", "Average True Range (ATR 14)"],
   ["متوسط حركة السهم اليومية بالريال أو الدولار لآخر 14 يوم، ويحسب الفجوات بين الأيام. مثال: سهم سعره 50 ومتوسط حركته 1.5، يعني يتحرك 3% باليوم تقريباً.", "The share's average daily range over 14 days, gaps included. Example: price 50 and ATR 1.5 means about 3% a day."],
   ["منه ينحسب الوقف: غالباً 1.5 ضعف ATR تحت السعر، أو تحت القمة المخترقة. ونسبة المخاطرة = المسافة للوقف ÷ السعر.", "The stop comes from it: usually 1.5× ATR below price, or below the broken high. Risk % = distance to stop ÷ price."]],
  [["تغير اليوم وتغير 5 أيام", "Today's change and 5-day change"],
   ["تغير اليوم = (إقفال اليوم ÷ إقفال أمس − 1). تغير 5 أيام = (إقفال اليوم ÷ إقفال قبل 5 جلسات − 1).", "Today's change = today's close ÷ yesterday's − 1. 5-day change = today's close ÷ the close 5 sessions ago − 1."],
   ["يطلع منه الأكثر ارتفاعاً (4% أو أكثر بالسعودي، 6% أو أكثر بالأمريكي)، والزخم المستمر (6% أو أكثر في 5 أيام).", "This gives the top gainers (4%+ Saudi, 6%+ US) and steady momentum (6%+ in 5 days)."]],
  [["السيولة", "Liquidity"],
   ["متوسط قيمة التداول اليومية لآخر 20 يوم = السعر × الحجم.", "Average daily traded value over 20 days = price × volume."],
   ["أقل من 5 مليون ريال (أو 20 مليون دولار) ينستبعد: سهم بدون سيولة صعب تطلع منه بسرعة.", "Below 5M SAR (or 20M USD) is skipped: an illiquid share is hard to exit quickly."]],
  [["الأخبار", "News"],
   ["من نفس مصدر أخبار مِراس (Google News) لكل سهم نتابعه.", "From the same Meras news source (Google News) for each share we follow."],
   ["إذا السهم من الأكثر ارتفاعاً ومعه خبر (نتائج، عقد، استحواذ)، ترتفع قوة الإشارة لأن الحركة المدفوعة بخبر تكمل عادة أيام.", "A top gainer with news (results, a contract, a deal) gets more strength: news-driven moves often run for days."]]
];
const MOM_SIG = [
  ["rd_breakout", ["إقفال فوق أعلى 20 يوم + حجم نسبي 1.8 أو أكثر + فوق متوسط 50. القوة تزيد مع حجم 2.5 أو أكثر، ومع اتجاه 20 فوق 50.", "Close above the 20-day high + relative volume 1.8+ + above the 50 average. Strength rises with volume 2.5+ and the 20 above the 50."]],
  ["rd_gainer", ["ارتفاع اليوم 4% أو أكثر (6% للأمريكي) + حجم نسبي 1.5 أو أكثر. القوة تزيد مع حجم 2.5 أو أكثر، وفوق متوسط 50، ومع وجود خبر.", "Up 4%+ today (6% US) + relative volume 1.5+. Strength rises with volume 2.5+, above the 50 average, and with news."]],
  ["rd_momentum", ["فوق متوسط 20 و50 + صعود 6% أو أكثر في 5 أيام + RSI بين 55 و75 + حركة يومية بين 1.5% و8%. القوة تزيد مع صعود 10% أو أكثر، وحجم 1.3 أو أكثر.", "Above the 20 and 50 + up 6%+ in 5 days + RSI 55 to 75 + daily range 1.5% to 8%. Strength rises with 10%+ and volume 1.3+."]]
];
Object.assign(UI, {
  ml_t: ["طريقة حساب الزخم", "How momentum is calculated"], ml_p: ["القراءات اللي يعتمد عليها رادار الزخم في مِراس، وكيف ينحسب كل رقم، وليش يهم للمضاربة من أيام لأسبوع.", "The readings behind the Meras momentum radar, how each number is computed, and why it matters for trades of a few days to a week."],
  ml_what: ["وش هو الزخم؟", "What is momentum?"], ml_what_p: ["الزخم هو سرعة وقوة حركة السعر. الفكرة: السهم اللي يتحرك بقوة مع سيولة عالية غالباً يكمل حركته كم يوم، فتدخل معه بدل ما تحاول تشتري سهم ينهار لأنه رخيص.", "Momentum is the speed and strength of a price move. The idea: a share moving strongly on high volume often keeps going for a few days, so you ride it instead of buying a falling share because it looks cheap."],
  ml_calc: ["كيف ينحسب", "How it's computed"], ml_use: ["كيف يستخدمه الرادار", "How the radar uses it"], ml_sig: ["الإشارات الثلاث وقوتها", "The three signals and their strength"],
  ml_lv: ["الهدف والوقف", "Target and stop"], ml_lv_p: ["الهدف الأول = سعر الإقفال × 1.03، والثاني × 1.05. الوقف من ATR أو تحت القمة المخترقة. إذا المخاطرة أكبر من الهدف، الصفقة ما تستاهل.", "Target 1 = close × 1.03, target 2 = × 1.05. The stop comes from ATR or below the broken high. If the risk is bigger than the target, skip the trade."],
  ml_open: ["افتح رادار الزخم", "Open the momentum radar"], ml_teaser: ["درس: طريقة حساب الزخم، والقراءات اللي يعتمد عليها الرادار", "Lesson: how momentum is calculated, and the readings behind the radar"], rd_lesson: ["اقرأ درس طريقة الحساب", "Read the lesson on how it's computed"]
});
function pageMomentumLesson() {
  const owner = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  return '<div class="wrap"><div class="guide-head"><div class="crumbs"><a href="#schools">' + esc(t("sch_h")) + "</a> / " + esc(t("ml_t")) + "</div><h1>" + esc(t("ml_t")) + "</h1><p>" + esc(t("ml_p")) + "</p></div>" +
    '<div class="stack" style="padding-block:16px 40px"><section class="panel stack"><h2>' + esc(t("ml_what")) + "</h2><p>" + esc(t("ml_what_p")) + "</p></section>" +
    MOM_LESSON.map(([n, calc, use], i) => '<section class="panel stack"><h2><span class="num">' + (i + 1) + ".</span> " + esc(L(n)) + "</h2><p><b>" + esc(t("ml_calc")) + ":</b> " + esc(L(calc)) + "</p><p><b>" + esc(t("ml_use")) + ":</b> " + esc(L(use)) + "</p></section>").join("") +
    '<section class="panel stack"><h2>' + esc(t("ml_sig")) + "</h2>" + MOM_SIG.map(([k, d]) => "<p><b>" + esc(t(k)) + ":</b> " + esc(L(d)) + "</p>").join("") + "</section>" +
    '<section class="panel stack"><h2>' + esc(t("ml_lv")) + "</h2><p>" + esc(t("ml_lv_p")) + "</p><ul>" + ["rd_r1", "rd_r2", "rd_r3", "rd_r4"].map((k) => "<li>" + esc(t(k)) + "</li>").join("") + "</ul></section>" +
    '<p class="small muted" style="margin:0">' + esc(t("sch_note")) + "</p>" +
    '<div class="row" style="justify-content:space-between"><a class="btn" href="#schools">' + esc(t("sch_all")) + "</a>" + (owner ? '<a class="btn primary" href="#radar">' + esc(t("ml_open")) + "</a>" : "") + "</div></div></div>";
}
