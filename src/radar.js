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
  nt_f_radar: ["الرادار", "Radar"], nt_radar: ["{s} {n} · {k}", "{s} {n} · {k}"], nt_radar_p: ["{c} ({g}) · هدف 3% {t3} · الوقف {st}", "{c} ({g}) · 3% target {t3} · stop {st}"]
});

let RD = null, rdLoading = false, rdF = "all", rdM = "all";
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
  const rules = '<details class="panel"><summary><b>' + esc(t("rd_rules")) + '</b></summary><ul class="small">' + ["rd_r1", "rd_r2", "rd_r3", "rd_r4"].map((k) => "<li>" + esc(t(k)) + "</li>").join("") + "</ul>" +
    ["breakout", "gainer", "momentum"].map((k) => '<p class="small"><b>' + esc(t("rd_" + k)) + ":</b> " + esc(t("rd_d_" + k)) + "</p>").join("") + "</details>";
  const head = '<p class="muted" style="margin:0">' + esc(t("rd_p")) + "</p>" + rules;
  if (!RD) return head + '<div class="notice">' + esc(t("dk_loading")) + "</div>";
  if (!RD.updated) return head + '<div class="notice">' + esc(t("rd_wait")) + "</div>";
  const list = (RD.items || []).filter((x) => (rdF === "all" || x.type === rdF) && (rdM === "all" || x.m === rdM.toUpperCase()));
  const log = (RD.log || []).slice(-15).reverse();
  setTimeout(() => { if (typeof ntMark === "function") ntMark((RD.log || []).map((x) => "r:" + x.id)); if (typeof topBell === "function") topBell(); }, 1500);
  return head + '<p class="small muted" style="margin:0">' + esc(t("rd_scan").replace("{n}", RD.scanned || 0).replace("{d}", whenText(RD.updated))) + "</p>" +
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
