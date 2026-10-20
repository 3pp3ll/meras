/* ===== مِراس: التنقل =====
   ثلاث أقسام فوق (التعليم، الخدمات، الباقات)، وشريط ثاني تحتها بصفحات القسم المفتوح.
   الرئيسية بوابة للقسمين مع "كمّل من وين وقفت". */
Object.assign(UI, {
  nav_learn: ["التعليم", "Learning"], nav_svc: ["الخدمات", "Services"],
  learn_h: ["القسم التعليمي", "Learning"], learn_p: ["كل اللي تتعلم منه: الدروس، الشارت، المختبر، الشروحات، والقاموس. وتقدّمك محفوظ في كل خطوة.", "Everything you learn from: lessons, the chart, the lab, guides and the glossary. Your progress is saved at every step."],
  svc_hub_h: ["الخدمات", "Services"], svc_hub_p: ["الأدوات اللي تشتغل عليها كل يوم: سجل صفقاتك، خطتك الشهرية، التحليل الفني، التوزيعات، المعادن، والحاسبات.", "The tools you work with every day: your trade journal, monthly plan, technicals, dividends, metals and calculators."],
  cont_h: ["كمّل من وين وقفت", "Pick up where you left off"], cont_lesson: ["آخر درس", "Last lesson"], cont_page: ["آخر صفحة", "Last page"], cont_next: ["الدرس الجاي", "Next lesson"],
  cont_none: ["ما بديت للحين. أول خطوة: الدرجة الأولى في مسار المستثمر.", "You have not started yet. First step: step one of the investor track."],
  open: ["افتح", "Open"], totop: ["للأعلى", "Back to top"],
  d_tracks: ["خمس درجات لكل مسار: المستثمر، المتداول، المبرمج.", "Five steps per track: investor, trader, developer."],
  d_chart: ["شموع ومؤشرات وأدوات رسم، وتحليل فيبوناتشي.", "Candles, indicators, drawing tools and Fibonacci analysis."],
  d_lab: ["ركّب قواعد واختبرها على تاريخ السهم.", "Build rules and test them on a share's history."],
  d_guides: ["شروحات مصورة للشارت والسجل، ودليل المؤشرات.", "Illustrated guides to the chart and journal, and the indicator guide."],
  d_gloss: ["المصطلحات اللي تمر عليك في الدروس.", "The terms you meet in the lessons."],
  d_prog: ["وين وصلت في كل مسار، والنسخ الاحتياطي.", "Where you stand in each track, and backups."],
  d_journal: ["كل صفقة تدريبية بسببها ووقفها وهدفها.", "Every practice trade with its reason, stop and target."],
  d_invest: ["مبلغ ثابت كل شهر موزع على أسهم تختارها.", "A fixed amount each month spread over shares you choose."],
  d_tech: ["ملخص فني لكل سهم تتابعه.", "A technical summary for every share you follow."],
  d_div: ["أسهم توزع أرباح، وكم يجيك بمبلغك.", "Shares that pay dividends, and what your amount would earn."],
  d_met: ["أسعار الذهب والفضة، ومحفظة معادنك.", "Gold and silver prices, and your metals holdings."],
  d_calc: ["متوسط السعر، العائد، حجم الصفقة، والزكاة.", "Average cost, return, position size and zakat."],
  s_lessons: ["{d} من {n} درس", "{d} of {n} lessons"], s_shares: ["{n} سهم بشموع حقيقية", "{n} shares with real candles"], s_guides: ["{n} شروحات", "{n} guides"], s_terms: ["{n} مصطلح", "{n} terms"],
  s_open: ["{n} صفقة مفتوحة", "{n} open trades"], s_calcs: ["4 حاسبات", "4 calculators"]
});

const NAV_GROUPS = {
  learn: { label: "nav_learn", items: [["tracks", "nav_tracks", "d_tracks"], ["chart", "nav_chart", "d_chart"], ["lab", "nav_lab", "d_lab"], ["guides", "nav_guides", "d_guides"], ["glossary", "tab_gloss", "d_gloss"], ["progress", "nav_progress", "d_prog"]] },
  services: { label: "nav_svc", items: [["journal", "tab_journal", "d_journal"], ["invest", "tab_inv", "d_invest"], ["tech", "tab_tech", "d_tech"], ["dividends", "tab_div", "d_div"], ["metals", "tab_met", "d_met"], ["calc", "tab_calc", "d_calc"]] }
};
function groupOf(r) {
  if (r === "learn" || r.startsWith("l-") || r.startsWith("g-")) return "learn";
  if (r === "services") return "services";
  if (r === "checkout" || r === "plans") return "plans";
  for (const g in NAV_GROUPS) if (NAV_GROUPS[g].items.some((x) => x[0] === r)) return g;
  return "";
}
function subOf(r) { if (r.startsWith("l-")) return "tracks"; if (r.startsWith("g-")) return "guides"; return r; }

const ICON_CHART = '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M7 4v3M7 15v5M17 3v4M17 13v7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="4.5" y="7" width="5" height="8" rx="1" fill="currentColor"/><rect x="14.5" y="7" width="5" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
const ICON_OWNER = '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
function headerHtml(r) {
  const g = groupOf(r), sub = subOf(r);
  const top = [["learn", "nav_learn"], ["services", "nav_svc"], ["plans", "nav_plans"]].map(([h, k]) => '<a href="#' + h + '"' + (g === h ? ' aria-current="page"' : "") + ">" + esc(t(k)) + "</a>").join("");
  const own = typeof HOSTED !== "undefined" && HOSTED && CFG.token ? '<a class="btn sm th-btn" href="#owner" title="' + esc(t("ow_h")) + '" aria-label="' + esc(t("ow_h")) + '"' + (r === "owner" ? ' aria-current="page"' : "") + ">" + ICON_OWNER + "</a>" : "";
  const tools = own + '<a class="btn sm th-btn" href="#chart" title="' + esc(t("nav_chart")) + '" aria-label="' + esc(t("nav_chart")) + '"' + (r === "chart" ? ' aria-current="page"' : "") + ">" + ICON_CHART + "</a>" + (typeof themeButton === "function" ? themeButton() : "") +
    '<button class="btn sm" data-act="lang" aria-label="language">' + (S.lang === "ar" ? "EN" : "ع") + '</button><a class="btn sm' + (S.signedIn ? "" : " primary") + '" href="#account">' + esc(S.signedIn && S.account ? S.account.name.split(" ")[0] : t("sign_in")) + "</a>";
  const subnav = NAV_GROUPS[g] ? '<div class="subnav"><div class="wrap"><nav aria-label="' + esc(t(NAV_GROUPS[g].label)) + '">' + NAV_GROUPS[g].items.map(([h, k]) => '<a href="#' + h + '"' + (sub === h ? ' aria-current="page"' : "") + ">" + esc(t(k)) + "</a>").join("") + "</nav></div></div>" : "";
  return '<div class="wrap"><a class="brand" href="#">' + LOGO + "<span>" + esc(t("brand")) + '</span></a><nav class="nav top3" aria-label="main">' + top + '</nav><div class="tools">' + tools + "</div></div>" + subnav;
}

/* ----- "pick up where you left off": per device, never synced ----- */
const LAST_KEY = "meras.last";
let LAST = {}; try { LAST = JSON.parse(localStorage.getItem(LAST_KEY) || "{}"); } catch (e) {}
function noteVisit(r) {
  if (!r || r === "learn" || r === "services" || ["account", "settings", "plans", "checkout"].includes(r)) return;
  if (r.startsWith("l-")) LAST.lesson = r.slice(2);
  else LAST.page = { r, sym: r === "chart" && S.chart ? S.chart.sym : null, at: Date.now() };
  try { localStorage.setItem(LAST_KEY, JSON.stringify(LAST)); } catch (e) {}
}
function pageLabel(p) {
  if (!p) return "";
  if (p.r.startsWith("g-")) { const g = typeof GUIDES !== "undefined" && GUIDES.find((x) => "g-" + x.id === p.r); return g ? L(g.title) : t("nav_guides"); }
  for (const g in NAV_GROUPS) { const it = NAV_GROUPS[g].items.find((x) => x[0] === p.r); if (it) return t(it[1]) + (p.sym && typeof symName === "function" ? ": " + symName(p.sym) : ""); }
  return p.r;
}
function continueHtml() {
  const ls = LAST.lesson && LESSONS.find((x) => x.id === LAST.lesson), next = ls ? (lessonsOf(ls.track).find((x) => !isDone(x.id) && canOpen(x)) || null) : nextLesson("inv");
  const cards = [];
  if (ls) cards.push(['#l-' + ls.id, t("cont_lesson"), L(ls.title), L(trackById(ls.track).name)]);
  if (next && (!ls || next.id !== ls.id)) cards.push(['#l-' + next.id, t("cont_next"), L(next.title), L(trackById(next.track).name)]);
  if (LAST.page) cards.push(["#" + LAST.page.r, t("cont_page"), pageLabel(LAST.page), ""]);
  if (!cards.length) return '<div class="cont"><b>' + esc(t("cont_h")) + '</b><a class="cont-card" href="#l-' + LESSONS[0].id + '"><span class="small muted">' + esc(t("cont_none")) + "</span></a></div>";
  return '<div class="cont"><b>' + esc(t("cont_h")) + '</b><div class="cont-row">' + cards.slice(0, 3).map(([h, k, title, sub]) => '<a class="cont-card" href="' + h + '"><span class="small muted">' + esc(k) + "</span><strong>" + esc(title) + "</strong>" + (sub ? '<span class="small muted">' + esc(sub) + "</span>" : "") + "</a>").join("") + "</div></div>";
}

/* ----- hubs ----- */
function hubStat(k) {
  const f = (key, o) => t(key).replace(/\{(\w+)\}/g, (_, x) => o[x]);
  if (k === "tracks") return f("s_lessons", { d: LESSONS.filter((l) => isDone(l.id)).length, n: LESSONS.length });
  if (k === "chart") return f("s_shares", { n: Object.keys(LIVE.history || {}).filter((x) => (LIVE.history[x] || []).length > 1).length });
  if (k === "guides") return f("s_guides", { n: (typeof GUIDES !== "undefined" ? GUIDES.length : 0) + 1 });
  if (k === "glossary") return f("s_terms", { n: GLOSSARY.length });
  if (k === "progress") return Math.round((LESSONS.filter((l) => isDone(l.id)).length / LESSONS.length) * 100) + "%";
  if (k === "journal") return f("s_open", { n: S.journal.filter((j) => j.exit == null).length });
  if (k === "calc") return t("s_calcs");
  return "";
}
function hubCards(g) {
  return '<div class="hub">' + NAV_GROUPS[g].items.map(([h, k, d]) => '<a class="panel hub-card" href="#' + h + '"><h3>' + esc(t(k)) + '</h3><p class="muted small">' + esc(t(d)) + '</p><span class="hub-foot"><span class="tag amber">' + esc(hubStat(h) || t("open")) + '</span><span class="go" aria-hidden="true">←</span></span></a>').join("") + "</div>";
}
function pageLearn() { return '<div class="wrap"><div class="page-head"><h1>' + esc(t("learn_h")) + "</h1><p>" + esc(t("learn_p")) + '</p></div><div class="stack" style="padding-block:18px 40px">' + continueHtml() + hubCards("learn") + "</div></div>"; }
function pageServicesHub() { return '<div class="wrap"><div class="page-head"><h1>' + esc(t("svc_hub_h")) + "</h1><p>" + esc(t("svc_hub_p")) + '</p></div><div class="stack" style="padding-block:18px 40px">' + hubCards("services") + "</div></div>"; }

function pageGate() {
  const first = nextLesson("inv") || LESSONS[0];
  const gate = (g, h, p) => '<a class="panel gate" href="#' + g + '"><h2>' + esc(t(h)) + '</h2><p class="muted">' + esc(t(p)) + '</p><span class="row" style="gap:6px">' + NAV_GROUPS[g].items.map(([, k]) => '<span class="tag">' + esc(t(k)) + "</span>").join("") + "</span></a>";
  return '<section class="hero"><div class="wrap"><div class="copy"><div class="eyebrow">' + esc(t("hero_eyebrow")) + "</div><h1>" + t("hero_h") + '</h1><p class="lead">' + esc(t("hero_p")) + '</p><div class="row"><a class="btn primary" href="#l-' + first.id + '">' + esc(t("start")) + '</a><a class="btn ghost" href="#learn">' + esc(t("learn_h")) + "</a></div></div>" + stairs(null, true) + "</div></section>" +
    '<div class="wrap"><section class="sec">' + continueHtml() + '</section><section class="sec"><div class="gates">' + gate("learn", "learn_h", "learn_p") + gate("services", "svc_hub_h", "svc_hub_p") + "</div></section>" +
    '<section class="sec"><div class="sec-head"><h2>' + esc(t("how_h")) + '</h2></div><div class="flow">' + UI.how.map((h, i) => '<div><span class="k">' + (i + 1) + "</span><h4>" + esc(L(h[0])) + '</h4><p class="muted small">' + esc(L(h[1])) + "</p></div>").join("") + '</div></section><section class="sec"><div class="notice">' + esc(t(typeof LIVE !== "undefined" && LIVE.fetchedAt ? "live_note" : "sample_note")) + "</div></section></div>";
}

/* ----- back to top ----- */
(function () {
  const b = document.createElement("button");
  b.id = "totop"; b.type = "button"; b.hidden = true;
  b.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  b.addEventListener("click", () => window.scrollTo({ top: 0, behavior: window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
  document.body.appendChild(b);
  const upd = () => { b.hidden = window.scrollY < 500; b.setAttribute("aria-label", t("totop")); b.title = t("totop"); };
  window.addEventListener("scroll", upd, { passive: true }); upd();
})();
