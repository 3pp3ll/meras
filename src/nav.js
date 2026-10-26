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
  learn: { label: "nav_learn", items: [["tracks", "nav_tracks", "d_tracks"], ["chart", "nav_chart", "d_chart"], ["lab", "nav_lab", "d_lab"], ["guides", "nav_guides", "d_guides"], ["schools", "nav_schools", "d_schools"], ["glossary", "tab_gloss", "d_gloss"], ["symbols", "nav_symbols", "d_symbols"], ["progress", "nav_progress", "d_prog"]] },
  services: { label: "nav_svc", items: [["journal", "tab_journal", "d_journal"], ["invest", "tab_inv", "d_invest"], ["tech", "tab_tech", "d_tech"], ["dividends", "tab_div", "d_div"], ["metals", "tab_met", "d_met"], ["sharia", "tab_sharia", "d_sharia"], ["calc", "tab_calc", "d_calc"]] }
};
function groupOf(r) {
  if (r === "learn" || r.startsWith("l-") || r.startsWith("g-") || r.startsWith("sch-")) return "learn";
  if (r === "services") return "services";
  if (r === "checkout" || r === "plans") return "plans";
  for (const g in NAV_GROUPS) if (NAV_GROUPS[g].items.some((x) => x[0] === r)) return g;
  return "";
}
function subOf(r) { if (r.startsWith("sch-")) return "schools"; if (r.startsWith("l-")) return "tracks"; if (r.startsWith("g-")) return "guides"; return r; }

const ICON_CHART = '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M7 4v3M7 15v5M17 3v4M17 13v7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="4.5" y="7" width="5" height="8" rx="1" fill="currentColor"/><rect x="14.5" y="7" width="5" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
const BACK_KEY = "meras.back", OWN_R = ["owner", "desk"];
let BACK = null; try { BACK = JSON.parse(sessionStorage.getItem(BACK_KEY) || "null"); } catch (e) {}
function trackBack(r) {
  const prev = typeof lastPainted !== "undefined" ? lastPainted : null, was = BACK;
  if (OWN_R.includes(r)) BACK = null;
  else if (prev && OWN_R.includes(prev) && prev !== r) BACK = { r: prev, tab: prev === "desk" ? (typeof dkTab !== "undefined" ? dkTab : null) : typeof owTab !== "undefined" ? owTab : null };
  if (was !== BACK) try { sessionStorage.setItem(BACK_KEY, JSON.stringify(BACK)); } catch (e) {}
}
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest('[data-act="nav-back"]'); if (!b || !BACK) return;
  e.preventDefault(); if (BACK.tab) { if (BACK.r === "desk" && typeof dkTab !== "undefined") dkTab = BACK.tab; if (BACK.r === "owner" && typeof owTab !== "undefined") owTab = BACK.tab; }
  location.hash = BACK.r;
});
Object.assign(UI, { back_desk: ["رجوع لمكتبي", "Back to my desk"], back_owner: ["رجوع للوحة المالك", "Back to the dashboard"] });
function headerHtml(r) {
  trackBack(r);
  const g = groupOf(r), sub = subOf(r);
  const top = [["learn", "nav_learn"], ["services", "nav_svc"], ["plans", "nav_plans"]].map(([h, k]) => '<a href="#' + h + '"' + (g === h ? ' aria-current="page"' : "") + ">" + esc(t(k)) + "</a>").join("");
  const back = BACK && typeof HOSTED !== "undefined" && HOSTED && CFG.token ? '<a class="btn sm back-btn" href="#' + BACK.r + '" data-act="nav-back" title="' + esc(t(BACK.r === "desk" ? "back_desk" : "back_owner")) + '"><span aria-hidden="true">↩</span> <span>' + esc(t(BACK.r === "desk" ? "dk_h" : "ow_h")) + "</span></a>" : "";
  let fab = document.getElementById("backfab");
  if (!fab) { fab = document.createElement("a"); fab.id = "backfab"; fab.setAttribute("data-act", "nav-back"); document.body.appendChild(fab); }
  fab.hidden = !back; if (back) { fab.href = "#" + BACK.r; fab.innerHTML = '<span aria-hidden="true">↩</span> ' + esc(t(BACK.r === "desk" ? "dk_h" : "ow_h")); fab.title = t(BACK.r === "desk" ? "back_desk" : "back_owner"); }
  const tools = back + '<a class="btn sm th-btn" href="#chart" title="' + esc(t("nav_chart")) + '" aria-label="' + esc(t("nav_chart")) + '"' + (r === "chart" ? ' aria-current="page"' : "") + ">" + ICON_CHART + "</a>" + (typeof themeButton === "function" ? themeButton() : "") +
    '<button class="btn sm" data-act="lang" aria-label="language">' + (S.lang === "ar" ? "EN" : "ع") + "</button>";
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
  if (p.r.startsWith("sch-")) { if (p.r === "sch-tsla") return "TSLA"; const s = typeof SCHOOLS !== "undefined" && SCHOOLS.find((x) => "sch-" + x.id === p.r); return s ? L(s.name) : t("nav_schools"); }
  if (p.r.startsWith("g-")) { const g = typeof GUIDES !== "undefined" && GUIDES.find((x) => "g-" + x.id === p.r); return g ? L(g.title) : t("nav_guides"); }
  for (const g in NAV_GROUPS) { const it = NAV_GROUPS[g].items.find((x) => x[0] === p.r); if (it) return t(it[1]) + (p.sym && typeof symName === "function" ? ": " + symName(p.sym) : ""); }
  const extra = { desk: "dk_h", owner: "ow_h", plans: "nav_plans", account: "nav_account", learn: "nav_learn", services: "nav_svc", tracks: "nav_tracks", settings: "set_h", shared: "dg_h", symbols: "nav_symbols" }[p.r];
  if (extra) return t(extra) + (p.r === "desk" && typeof dkTab !== "undefined" && typeof MAP_DESK !== "undefined" ? (MAP_DESK.find((x) => x[0] === dkTab) ? " · " + t(MAP_DESK.find((x) => x[0] === dkTab)[1]) : "") : "");
  return "";
}
function continueHtml() {
  const ls = LAST.lesson && LESSONS.find((x) => x.id === LAST.lesson), next = ls ? (lessonsOf(ls.track).find((x) => !isDone(x.id) && canOpen(x)) || null) : nextLesson("inv");
  const cards = [];
  if (ls) cards.push(['#l-' + ls.id, t("cont_lesson"), L(ls.title), L(trackById(ls.track).name)]);
  if (next && (!ls || next.id !== ls.id)) cards.push(['#l-' + next.id, t("cont_next"), L(next.title), L(trackById(next.track).name)]);
  if (LAST.page && pageLabel(LAST.page)) cards.push(["#" + LAST.page.r, t("cont_page"), pageLabel(LAST.page), ""]);
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
  if (k === "schools") return f("s_schools", { n: typeof SCHOOLS !== "undefined" ? SCHOOLS.length : 0 });
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

/* ----- icons for every section (used by the side menu and the platform map) ----- */
const SEC_IC = {
  schools: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5M21 9v6"/></g>',
  tracks: '<path d="M4 19h4v-4h4v-4h4V7h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  chart: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 3v4M7 15v6M17 2v4M17 14v8"/><rect x="5" y="7" width="4" height="8" rx="1"/><rect x="15" y="6" width="4" height="8" rx="1"/></g>',
  lab: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3M7.5 15h9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  guides: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M9 8h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
  glossary: '<path d="M4 18l4-12 4 12M5.5 14h5M14 7h6l-6 10h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  symbols: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 4L7 20M17 4l-2 16M4 9h16M3 15h16"/></g>',
  progress: '<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></g>',
  journal: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></g>',
  invest: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v18M16.5 7.5c-.8-1.3-2.4-2-4.5-2-2.5 0-4 1.2-4 3s1.5 2.6 4 3.2 4 1.4 4 3.3-1.6 3.2-4.2 3.2c-2.1 0-3.7-.8-4.5-2.2"/></g>',
  tech: '<path d="M4 17l6-6 4 4 6-7M15 8h5v5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  dividends: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><circle cx="12" cy="15.5" r="2.5"/></g>',
  metals: '<path d="M3 19l3-6h6l3 6zM9 13l3-6h6l3 6M12 7l2-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
  sharia: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6zM9 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
  calc: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h1M12 12h1M16 12h0M8 16h1M12 16h1M16 16h0"/></g>',
  plans: '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  owner: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></g>',
  desk: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M9 9V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></g>'
};
const secIc = (k, sz) => '<svg viewBox="0 0 24 24" width="' + (sz || 20) + '" height="' + (sz || 20) + '" aria-hidden="true">' + (SEC_IC[k] || "") + "</svg>";
Object.assign(UI, {
  map_root: ["مِراس", "Meras"], map_admin: ["الإدارة", "Admin"], map_admin_p: ["تظهر لك بس", "Only you see this"],
  map_h: ["هيكل المنصة", "How Meras is organised"], map_p: ["كل أقسام مِراس في مكان واحد. اضغط أي قسم وتدخله على طول.", "Every part of Meras in one place. Tap any section to open it."],
  map_portal: ["بوابة الدخول", "Sign-in portal"], map_portal_s: ["سجّل دخولك أو أنشئ حسابك", "Sign in or create your account"], map_portal_o: ["حسابك، ولوحة المالك ومكتبي لك بس", "Your account; the owner dashboard and desk are yours only"],
  map_acc_in: ["بياناتك وتقدّمك", "Your details and progress"], map_acc_out: ["دخول أو إنشاء حساب", "Sign in or create an account"],
  map_tree: ["الشجرة", "Tree"], map_cols: ["الأعمدة", "Columns"], map_cards: ["البطاقات", "Cards"],
  map_learn_s: ["المسارات والشروحات والممارسة", "Tracks, guides and practice"], map_svc_s: ["أدوات يومية: سجل، تحليل، توزيعات، فرز شرعي", "Daily tools: journal, analysis, payouts, screening"],
  map_plans_s: ["أول درجتين مجانية في كل مسار", "The first two steps are free"], map_admin_s: ["تظهر لك بس", "Only you see this"], map_plan_free: ["البداية المجانية", "Free start"], map_q: ["ابحث عن قسم…", "Find a section…"], map_n: ["{n} أقسام", "{n} sections"],
  map_plans_go: ["أول درجتين مجانية، قارن الباقات", "First two steps free, compare plans"],
  map_plans_p: ["أول درجتين في كل مسار مجانية، والباقي بالاشتراك.", "The first two steps of every track are free; the rest comes with a plan."],
  map_owner_p: ["لوحة المالك والمستخدمين والبيانات.", "Owner dashboard, users and data."], map_desk_p: ["محفظتك وأدواتك الخاصة.", "Your portfolio and private tools."]
});
const MAP_DESK = [["apps", "ap_t"], ["pf", "dk_t_pf"], ["ch", "dk_t_ch"], ["sc", "sc_t"], ["top", "tp_t"], ["tech", "tab_tech"], ["nw", "nw_t"], ["sv", "sv_t"], ["dg", "dg_t"], ["us", "us_t"], ["op", "op_t"]];
function siteMap() {
  const owner = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  const leaf = (h, k) => '<a class="smap-leaf" href="#' + h + '">' + secIc(h, 15) + "<span>" + esc(t(k)) + "</span></a>";
  const branch = (h, k, kids, cls) => '<li class="smap-br' + (cls ? " " + cls : "") + '"><a class="smap-node" href="#' + h + '">' + esc(t(k)) + "</a>" + (kids ? '<div class="smap-kids">' + kids + "</div>" : "") + "</li>";
  return '<div class="smap" aria-label="' + esc(t("map_h")) + '"><div class="smap-root">' + LOGO + "<b>" + esc(t("map_root")) + '</b></div><ul class="smap-tree">' +
    branch("learn", "nav_learn", NAV_GROUPS.learn.items.map(([h, k]) => leaf(h, k)).join("")) +
    branch("services", "nav_svc", NAV_GROUPS.services.items.map(([h, k]) => leaf(h, k)).join("")) +
    branch("plans", "nav_plans", "") +
    (owner ? branch("owner", "map_admin", leaf("owner", "ow_h") + leaf("desk", "dk_h"), "smap-admin") : "") + "</ul></div>";
}
function mapSection() {
  const owner = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  const short = (h) => { const done = LESSONS.filter((l) => isDone(l.id)).length;
    return { tracks: done + "/" + LESSONS.length, glossary: String(GLOSSARY.length), progress: Math.round((done / LESSONS.length) * 100) + "%", journal: String(S.journal.filter((j) => j.exit == null).length || ""), guides: String((typeof GUIDES !== "undefined" ? GUIDES.length : 0) + 1), schools: String(typeof SCHOOLS !== "undefined" ? SCHOOLS.length : 0) }[h] || ""; };
  const item = (h, k, stat, extra, ic) => '<li><a class="org-it" href="#' + h + '"' + (extra || "") + '><span class="org-ii">' + (ic ? '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">' + ic + "</svg>" : secIc(h, 17)) + "</span><span>" + esc(t(k)) + "</span>" + (stat ? '<small class="num">' + esc(stat) + "</small>" : "") + "</a></li>";
  const col = (ic, title, href, body, cls) => '<div class="org-col' + (cls ? " " + cls : "") + '"><a class="org-h" href="#' + href + '"><span class="org-hi">' + secIc(ic, 20) + "</span><b>" + esc(title) + "</b></a>" + body + "</div>";
  const cols = [
    col("tracks", t("nav_learn"), "learn", '<ul class="org-list">' + NAV_GROUPS.learn.items.map(([h, k]) => item(h, k, short(h))).join("") + "</ul>"),
    col("calc", t("nav_svc"), "services", '<ul class="org-list">' + NAV_GROUPS.services.items.map(([h, k]) => item(h, k, short(h))).join("") + "</ul>"),
    col("plans", t("nav_plans"), "plans", '<a class="org-plans" href="#plans">' + secIc("plans", 30) + "<span>" + esc(t("map_plans_p")) + "</span></a>"),
  ];
  if (owner) cols.push(col("owner", t("map_admin"), "owner", '<ul class="org-list">' + item("owner", "ow_h") + MAP_DESK.map(([k, l]) => item("desk", l, "", ' data-dktab="' + k + '"', typeof DK_IC !== "undefined" ? DK_IC[k] : "")).join("") + '</ul><p class="org-note">🔒 ' + esc(t("map_admin_p")) + "</p>", "org-admin"));
  const columns = '<div class="org-root">' + LOGO + "<div><b>" + esc(t("map_root")) + "</b><span>" + esc(t("map_h")) + '</span></div></div><div class="org-stem" aria-hidden="true"></div><div class="org-cols" style="--n:' + cols.length + '">' + cols.join("") + "</div>";
  /* tree view: one trunk, a branch per group, the sections as pills */
  const pill = (h, k, extra, ic) => '<a class="tr-pill" href="#' + h + '"' + (extra || "") + '><span class="tr-pi">' + (ic ? '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">' + ic + "</svg>" : secIc(h, 15)) + "</span><span>" + esc(t(k)) + "</span></a>";
  const grp = (ic, title, n, pills, cls) => '<div class="tr-grp' + (cls ? " " + cls : "") + '"><div class="tr-head">' + (cls ? "🔒" : secIc(ic, 17)) + "<b>" + esc(title) + "</b>" + (n ? '<small>' + esc(t("map_n").replace("{n}", n)) + "</small>" : "") + '</div><div class="tr-pills">' + pills + "</div></div>";
  const tree = '<div class="tr"><span class="tr-trunk" aria-hidden="true"></span>' +
    grp("tracks", t("nav_learn"), NAV_GROUPS.learn.items.length, NAV_GROUPS.learn.items.map(([h, k]) => pill(h, k)).join("")) +
    grp("calc", t("nav_svc"), NAV_GROUPS.services.items.length, NAV_GROUPS.services.items.map(([h, k]) => pill(h, k)).join("")) +
    grp("plans", t("nav_plans"), 0, pill("plans", "map_plans_go")) +
    (owner ? grp("owner", t("map_admin"), 0, pill("owner", "ow_h") + MAP_DESK.map(([k, l]) => pill("desk", l, ' data-dktab="' + k + '"', typeof DK_IC !== "undefined" ? DK_IC[k] : "")).join(""), "tr-admin") : "") + "</div>";
  /* cards view: a card per group, its sections in a two-column grid */
  const cl = (h, k, extra, ic) => '<a class="cd-it" href="#' + h + '"' + (extra || "") + '><span class="cd-ii">' + (ic ? '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">' + ic + "</svg>" : secIc(h, 15)) + "</span><span>" + esc(t(k)) + "</span></a>";
  const card = (ic, title, sub, n, items, cls) => '<div class="cd' + (cls ? " " + cls : "") + '"><div class="cd-h"><span class="cd-hi">' + (cls ? '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></g></svg>' : secIc(ic, 20)) + '</span><span class="cd-ht"><b>' + esc(title) + "</b><small>" + esc(sub) + "</small></span>" + (n ? '<span class="cd-n">' + esc(t("map_n").replace("{n}", n)) + "</span>" : "") + '</div><div class="cd-grid">' + items + "</div></div>";
  const cards = '<div class="cds">' +
    card("tracks", t("nav_learn"), t("map_learn_s"), NAV_GROUPS.learn.items.length, NAV_GROUPS.learn.items.map(([h, k]) => cl(h, k)).join("")) +
    card("calc", t("nav_svc"), t("map_svc_s"), NAV_GROUPS.services.items.length, NAV_GROUPS.services.items.map(([h, k]) => cl(h, k)).join("")) +
    card("plans", t("nav_plans"), t("map_plans_s"), 0, cl("plans", "map_plan_free") + cl("plans", "plan_full")) +
    (owner ? card("owner", t("map_admin"), t("map_admin_s"), 0, cl("owner", "ow_h") + MAP_DESK.map(([k, l]) => cl("desk", l, ' data-dktab="' + k + '"', typeof DK_IC !== "undefined" ? DK_IC[k] : "")).join(""), "cd-admin") : "") + "</div>";
  const portal = '<div class="cd cd-portal"><div class="cd-h"><span class="cd-hi"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/><path d="M10 16l4-4-4-4M14 12H4"/></g></svg></span><span class="cd-ht"><b>' + esc(t("map_portal")) + "</b><small>" + esc(t(owner ? "map_portal_o" : "map_portal_s")) + '</small></span></div><div class="pt-big">' +
    '<a class="pt-tile" href="#account">' + secIc("owner", 26) + "<b>" + esc(t(S.signedIn ? "nav_account" : "sign_in")) + "</b><small>" + esc(t(S.signedIn ? "map_acc_in" : "map_acc_out")) + "</small></a>" +
    (owner ? '<a class="pt-tile pt-owner" href="#owner"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></g></svg><b>' + esc(t("ow_h")) + "</b><small>" + esc(t("map_owner_p")) + "</small></a>" : "") + "</div>" +
    (owner ? '<div class="cd-sub">🔒 ' + esc(t("dk_h")) + '</div><div class="cd-grid">' + MAP_DESK.map(([k, l]) => cl("desk", l, ' data-dktab="' + k + '"', typeof DK_IC !== "undefined" ? DK_IC[k] : "")).join("") + "</div>" : "") + "</div>";
  const cards2 = '<div class="cds">' +
    card("tracks", t("nav_learn"), t("map_learn_s"), NAV_GROUPS.learn.items.length, NAV_GROUPS.learn.items.map(([h, k]) => cl(h, k)).join("")) +
    card("calc", t("nav_svc"), t("map_svc_s"), NAV_GROUPS.services.items.length, NAV_GROUPS.services.items.map(([h, k]) => cl(h, k)).join("")) +
    card("plans", t("nav_plans"), t("map_plans_s"), 0, cl("plans", "map_plan_free") + cl("plans", "plan_full")) + portal + "</div>";
  const bar = '<div class="map-bar"><div class="map-brand">' + LOGO + "<span><b>" + esc(t("map_root")) + "</b><small>" + esc(t("map_h")) + '</small></span></div><div class="map-tools"><input class="map-q" id="map-q" type="search" placeholder="' + esc(t("map_q")) + '" aria-label="' + esc(t("map_q")) + '" autocomplete="off"></div></div>';
  void tree; void cards; void columns;
  return '<section class="sec org">' + bar + cards2 + "</section>";
}
const mapView = () => { try { const v = localStorage.getItem("meras.mapview"); return v === "cols" || v === "cards" ? v : "tree"; } catch (e) { return "tree"; } };
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest('[data-act="map-view"]'); if (!b) return;
  try { localStorage.setItem("meras.mapview", b.dataset.v); } catch (err) {}
  document.querySelectorAll(".map-v").forEach((x) => { x.hidden = x.dataset.v !== b.dataset.v; });
  document.querySelectorAll('[data-act="map-view"]').forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
});
document.addEventListener("input", (e) => {
  if (e.target.id !== "map-q") return;
  const q = shNorm ? shNorm(e.target.value) : e.target.value.trim().toLowerCase();
  document.querySelectorAll(".org .tr-pill, .org .org-it, .org .cd-it").forEach((a) => { const hit = !q || (shNorm ? shNorm(a.textContent) : a.textContent.toLowerCase()).includes(q); a.classList.toggle("map-dim", !hit); a.classList.toggle("map-hit", !!q && hit); });
});
document.addEventListener("click", (e) => { const a = e.target.closest && e.target.closest("[data-dktab]"); if (a && typeof dkTab !== "undefined") { dkTab = a.dataset.dktab; dkGrid = false; } });

function pageGate() {
  const first = nextLesson("inv") || LESSONS[0];
  return '<section class="hero gate-hero"><div class="wrap"><div class="copy"><div class="eyebrow">' + esc(t("hero_eyebrow")) + "</div><h1>" + t("hero_h") + '</h1><p class="lead">' + esc(t("hero_p")) + '</p><div class="row"><a class="btn primary" href="#l-' + first.id + '">' + esc(t("start")) + '</a><a class="btn ghost" href="#learn">' + esc(t("learn_h")) + "</a></div></div>" + (typeof treeHtml === "function" ? treeHtml() : mapSection()) + "</div></section>" +
    '<div class="wrap"><section class="sec">' + continueHtml() + "</section>" +
    '<section class="sec"><div class="sec-head"><h2>' + esc(t("how_h")) + '</h2></div><div class="flow">' + UI.how.map((h, i) => '<div><span class="k">' + (i + 1) + "</span><h4>" + esc(L(h[0])) + '</h4><p class="muted small">' + esc(L(h[1])) + "</p></div>").join("") + "</div></section>" + GATE_TAIL() + "</div>";
}
const GATE_TAIL = () => '<section class="sec"><div class="notice">' + esc(t(typeof LIVE !== "undefined" && LIVE.fetchedAt ? "live_note" : "sample_note")) + "</div></section>";

/* ----- learn and services on a wide screen: the section list on the side, the chosen page beside it ----- */
const SIDE_MINI = ["chart", "lab"];
function sideW() {
  const vw = document.documentElement.clientWidth || 0, g = groupOf(route());
  if (vw < 1000 || (g !== "learn" && g !== "services")) return 0;
  return SIDE_MINI.includes(route()) ? 92 : 258;
}
function sideShell(g, r, html) {
  const sub = subOf(r), mini = SIDE_MINI.includes(r);
  const hub = '<a class="side-hub" href="#' + g + '"' + (r === g ? ' aria-current="page"' : "") + ' title="' + esc(t(g === "learn" ? "learn_h" : "svc_hub_h")) + '"><span class="dk-si">' + secIc(g === "learn" ? "tracks" : "calc", 18).replace("tracks", "") + '</span><span class="dk-sl"><b>' + esc(t(g === "learn" ? "nav_learn" : "nav_svc")) + "</b></span></a>";
  const items = NAV_GROUPS[g].items.map(([h, k, d]) => '<a href="#' + h + '"' + (sub === h ? ' aria-current="page"' : "") + ' title="' + esc(t(k)) + '"><span class="dk-si">' + secIc(h, 20) + '</span><span class="dk-sl"><b>' + esc(t(k)) + "</b><small>" + esc(t(d)) + "</small></span></a>").join("");
  return '<div class="wrap side-shell' + (mini ? " mini" : "") + '"><aside class="dk-side"><nav aria-label="' + esc(t(NAV_GROUPS[g].label)) + '">' + hub + items + '</nav></aside><div class="side-main">' + html + "</div></div>";
}

/* ----- phone tab bar: التعليم، الخدمات، مكتبي (أو الباقات)، الإشعارات ----- */
const TB_ICONS = {
  learn: '<path d="M4 19h4v-4h4v-4h4V7h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  services: '<g fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></g>',
  desk: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M9 9V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></g>',
  plans: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/></g>',
  bell: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></g>'
};
document.addEventListener("click", (e) => { const a = e.target.closest && e.target.closest('#tabbar a[href="#desk"]'); if (a && typeof dkGrid !== "undefined") { dkGrid = true; if (route() === "desk") { e.preventDefault(); render(); window.scrollTo(0, 0); } } });
function tabbarSync(r) {
  let bar = document.getElementById("tabbar");
  if (r == null) { if (bar) bar.hidden = true; document.body.classList.remove("has-tabbar"); return; }
  if (!bar) { bar = document.createElement("nav"); bar.id = "tabbar"; document.body.appendChild(bar); }
  const owner = typeof HOSTED !== "undefined" && HOSTED && CFG.token, g = groupOf(r);
  const items = [["learn", "nav_learn", g === "learn"], ["services", "nav_svc", g === "services"], owner ? ["desk", "dk_h", r === "desk" || r === "owner"] : ["plans", "nav_plans", g === "plans"]];
  const n = typeof ntUnread === "function" ? ntUnread() : 0;
  bar.setAttribute("aria-label", S.lang === "ar" ? "التنقل" : "Navigation");
  bar.innerHTML = '<div class="tb-in">' + items.map(([h, k, on]) => '<a class="tb" href="#' + h + '"' + (on ? ' aria-current="page"' : "") + '><svg viewBox="0 0 24 24" aria-hidden="true">' + TB_ICONS[h] + "</svg>" + esc(t(k)) + "</a>").join("") +
    '<button class="tb" type="button" data-act="nt-bell" aria-haspopup="dialog"><svg viewBox="0 0 24 24" aria-hidden="true">' + TB_ICONS.bell + "</svg>" + esc(t("nt_h")) + (n ? '<span class="bell-n">' + n + "</span>" : "") + "</button></div>";
  bar.hidden = false; document.body.classList.add("has-tabbar");
}

/* ----- ثبّت مِراس على جوالك: أندرويد يفتح نافذة التثبيت، والآيفون نشرح له الخطوتين ----- */
Object.assign(UI, {
  in_h: ["ثبّت مِراس على جوالك", "Install Meras on your phone"], in_p: ["أيقونة في الشاشة الرئيسية، ويفتح كامل الشاشة مثل التطبيق.", "An icon on your home screen that opens full screen like an app."],
  in_btn: ["ثبّت", "Install"], in_how: ["كيف؟", "How?"], in_close: ["مو الحين", "Not now"],
  in_ios: ["من Safari: اضغط زر المشاركة <b>⬆︎</b> تحت، ثم اختر <b>«إضافة إلى الشاشة الرئيسية»</b>، ثم <b>«إضافة»</b>.", "In Safari: tap the Share button <b>⬆︎</b>, choose <b>Add to Home Screen</b>, then <b>Add</b>."],
  in_ios_other: ["افتح الرابط في Safari أول، لأن الآيفون يثبّت من Safari بس.", "Open the link in Safari first; iPhone installs from Safari only."],
  in_done: ["تم التثبيت، تلقاه في الشاشة الرئيسية", "Installed. Find it on your home screen"]
});
let INST_EVT = null, instHow = false;
const instStandalone = () => (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
const instIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const instSafari = () => instIOS() && !/crios|fxios|edgios|gsa\//i.test(navigator.userAgent);
const instSnoozed = () => { try { const v = +localStorage.getItem("meras.inst") || 0; return Date.now() - v < 21 * 864e5; } catch (e) { return false; } };
function instBar() {
  let el = document.getElementById("instbar");
  const want = !instStandalone() && !instSnoozed() && (INST_EVT || instIOS()) && !(typeof lnShow === "function" && lnShow());
  if (!want) { if (el) el.remove(); return; }
  if (!el) { el = document.createElement("div"); el.id = "instbar"; el.setAttribute("role", "region"); el.setAttribute("aria-label", t("in_h")); document.body.appendChild(el); }
  el.dir = S.lang === "ar" ? "rtl" : "ltr";
  const ios = !INST_EVT && instIOS();
  el.innerHTML = '<div class="in-row"><img src="icons/icon-192.png" alt="" width="44" height="44"><div class="in-txt"><b>' + esc(t("in_h")) + "</b><span>" + esc(t("in_p")) + '</span></div><button class="btn sm primary" data-act="in-go">' + esc(t(ios ? "in_how" : "in_btn")) + '</button><button class="in-x" data-act="in-close" aria-label="' + esc(t("in_close")) + '">×</button></div>' +
    (ios && instHow ? '<p class="in-ios">' + (instSafari() ? t("in_ios") : esc(t("in_ios_other"))) + "</p>" : "");
}
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); INST_EVT = e; setTimeout(instBar, 2500); });
window.addEventListener("appinstalled", () => { INST_EVT = null; const el = document.getElementById("instbar"); if (el) el.remove(); toast(t("in_done")); });
document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="in-"]'); if (!el) return;
  if (el.dataset.act === "in-close") { try { localStorage.setItem("meras.inst", String(Date.now())); } catch (err) {} const b = document.getElementById("instbar"); if (b) b.remove(); return; }
  if (INST_EVT) { const ev = INST_EVT; INST_EVT = null; ev.prompt(); try { const r = await ev.userChoice; if (r && r.outcome !== "accepted") { try { localStorage.setItem("meras.inst", String(Date.now())); } catch (err) {} } } catch (err) {} instBar(); }
  else { instHow = !instHow; instBar(); }
});
window.addEventListener("hashchange", () => setTimeout(instBar, 50));
setTimeout(instBar, 4000);

document.addEventListener("click", (e) => { const p = e.target.closest && e.target.closest(".page-head > p"); if (p && window.matchMedia("(max-width:640px)").matches) p.classList.toggle("open"); });

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

/* ----- hidden door: 5 quick taps on the logo square open the owner dashboard (only on the owner's linked device) ----- */
(function () {
  let n = 0, timer = null;
  document.addEventListener("click", (e) => {
    const logo = e.target.closest && e.target.closest(".brand svg"); if (!logo) return;
    if (!(typeof HOSTED !== "undefined" && HOSTED && CFG.token)) return;
    n++; clearTimeout(timer); timer = setTimeout(() => { n = 0; }, 1500);
    if (n >= 5) { n = 0; e.preventDefault(); location.hash = "owner"; }
  }, true);
})();
