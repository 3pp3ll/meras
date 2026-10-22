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
  services: { label: "nav_svc", items: [["journal", "tab_journal", "d_journal"], ["invest", "tab_inv", "d_invest"], ["tech", "tab_tech", "d_tech"], ["dividends", "tab_div", "d_div"], ["metals", "tab_met", "d_met"], ["sharia", "tab_sharia", "d_sharia"], ["calc", "tab_calc", "d_calc"]] }
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
    '<button class="btn sm" data-act="lang" aria-label="language">' + (S.lang === "ar" ? "EN" : "ع") + '</button><a class="btn sm acct-btn' + (S.signedIn ? "" : " primary") + (typeof HOSTED !== "undefined" && HOSTED && CFG.token ? " acct-owner" : "") + '" href="#account">' + esc(S.signedIn && S.account ? S.account.name.split(" ")[0] : t("sign_in")) + "</a>";
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
