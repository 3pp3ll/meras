/* ===== مِراس: الهيكلة الجديدة (5 أقسام) =====
   الرئيسية · السوق · محفظتي · الأخبار · التعليم.
   صفحات "مكتبي" القديمة صارت صفحات مستقلة داخل أقسامها (#portfolio، #saved، #movers…)،
   ورابط #desk القديم يحوّل تلقائياً للصفحة الجديدة، فكل الأزرار القديمة تشتغل. */
Object.assign(UI, {
  nav_home: ["الرئيسية", "Home"], nav_market: ["السوق", "Market"], nav_pf: ["محفظتي", "Portfolio"], nav_news: ["الأخبار", "News"],
  nav_indices: ["المؤشرات", "Indices"], d_indices: ["تاسي والأمريكي مع تحليل المدارس", "TASI and US indices with the schools analysis"],
  mk_h: ["السوق", "Market"], mk_p: ["كل أدوات التحليل: الشارت والمدارس، المؤشرات، الباحث، أفضل حركة، الأمريكي، والمعادن.", "All analysis tools: the chart and schools, indices, screener, best movers, US market and metals."],
  pf_h: ["محفظتي", "My portfolio"], pf_p: ["فلوسك وقراراتك: المحفظة، السجل، المحفوظات، التوزيعات، الخطة الشهرية، والحاسبات.", "Your money and decisions: portfolio, journal, saved analyses, dividends, monthly plan and calculators."],
  pm_menu: ["القائمة", "Menu"], pm_owner: ["لوحة المالك", "Owner dashboard"], pm_map: ["هيكل المنصة", "Platform map"],
  dh_hi: ["مساء الخير", "Good evening"], dh_hi_m: ["صباح الخير", "Good morning"],
  dh_short: ["اختصارات", "Shortcuts"], dh_idx: ["المؤشرات اليوم", "Indices today"], dh_idx_open: ["التفاصيل", "Details"],
  dh_news: ["أهم أخبار اليوم", "Today's top news"], dh_news_all: ["كل الأخبار", "All news"], dh_pf: ["محفظتي", "My portfolio"], dh_pf_open: ["افتح المحفظة", "Open portfolio"],
  dh_pf_none: ["ما سجلت صفقات للحين.", "No trades recorded yet."], dh_pf_n: ["{n} أسهم مفتوحة", "{n} open holdings"],
  dh_div: ["توزيعات قريبة", "Upcoming dividends"], dh_div_all: ["كل التوزيعات", "All dividends"], dh_div_none: ["ما فيه توزيعات خلال 30 يوم في قائمتك.", "No dividends in the next 30 days on your list."],
  dh_decl: ["معلن", "Declared"], dh_est: ["متوقع", "Expected"], dh_days: ["بعد {n} يوم", "in {n} days"], dh_today: ["اليوم", "today"],
  dh_learn: ["كمّل التعلم", "Keep learning"], dh_lessons: ["{d} من {n} درس", "{d} of {n} lessons"], dh_go: ["كمّل", "Continue"],
  dh_pin_x: ["إخفاء", "Dismiss"], dh_pin_div: ["توزيع {k} لـ {s} بعد {n} يوم ({d}). آخر يوم شراء {b}.", "{k} dividend for {s} in {n} days ({d}). Last buy day {b}."],
  dh_pin_idx: ["{s} {w} {p} اليوم.", "{s} {w} {p} today."], dh_up: ["ارتفع", "rose"], dh_down: ["نزل", "fell"],
  dh_loading: ["جاري التحميل…", "Loading…"]
});

/* صفحات مكتبي → مساراتها الجديدة */
const DESK_ROUTE = { pf: "portfolio", ch: "mycharts", sc: "screener", top: "movers", us: "usm", nw: "news", sv: "saved", dg: "gdiv", apps: "apps", op: "options", tech: "tech" };
const ROUTE_DESK = Object.fromEntries(Object.entries(DESK_ROUTE).map(([k, v]) => [v, k]));
const isOwner = () => typeof HOSTED !== "undefined" && HOSTED && !!CFG.token;
const deskOn = (k) => route() === DESK_ROUTE[k] || (route() === "desk" && typeof dkTab !== "undefined" && dkTab === k) || (route() === "" && isOwner());
function deskPage(r) {
  const k = ROUTE_DESK[r], lab = (typeof MAP_DESK !== "undefined" && MAP_DESK.find((x) => x[0] === k) || [k, "dk_h"])[1];
  const head = '<div class="page-head"><h1>' + esc(t(lab)) + "</h1>" + (UI["dk_g_" + k] ? "<p>" + esc(t("dk_g_" + k)) + "</p>" : "") + "</div>";
  if (!isOwner()) return '<div class="wrap">' + head + '<div class="notice" style="margin-block:18px">' + esc(t(HOSTED ? "ow_need" : "ow_preview")) + "</div></div>";
  if (["pf", "ch"].includes(k) && !DK.loaded) { loadDesk(); return '<div class="wrap">' + head + '<div class="notice" style="margin-block:18px">' + esc(t("dk_loading")) + "</div></div>"; }
  if (typeof dkTab !== "undefined") dkTab = k;
  const fn = { pf: dkPortfolio, ch: dkCharts, sc: dkScreener, top: dkTop, us: dkUS, nw: dkNews, sv: dkSaved, dg: dkDivGlobal, apps: dkApps, op: dkOptions }[k];
  let inner = ""; try { inner = fn(); } catch (e) { console.error(e); inner = '<div class="notice">' + esc(String(e && e.message || e)) + "</div>"; }
  return '<div class="wrap deskp">' + head + '<div class="stack" style="padding-block:14px 40px">' + inner + "</div></div>";
}

/* ----- صفحة المؤشرات ----- */
function pageIndices() {
  const head = '<div class="page-head"><h1>' + esc(t("nav_indices")) + "</h1><p>" + esc(t("d_indices")) + "</p></div>";
  const items = typeof tkItems === "function" ? tkItems() : [];
  if (!items.length) { if (isOwner() && typeof loadExtra === "function") loadExtra(); return '<div class="wrap">' + head + '<div class="notice" style="margin-block:18px">' + esc(t(isOwner() ? "dh_loading" : "ow_need")) + "</div></div>"; }
  return '<div class="wrap">' + head + '<div class="dh-idx" style="padding-block:14px 40px">' + items.map((x) => dhIdxCard(x, true)).join("") + "</div></div>";
}
function dhIdxCard(x, big) {
  const d = x.st.d || 0;
  return '<div class="dh-ic' + (big ? " big" : "") + '"><div class="row" style="justify-content:space-between;align-items:center"><b>' + esc(L(x.it.n)) + "</b>" + (x.R ? '<span class="tk-b ' + x.R.fb + '">' + esc(biasWord(x.R.fb)) + "</span>" : "") + '</div><b class="num dh-v" dir="ltr">' + tkFmt(x.st.c) + '</b><span class="num ' + (d >= 0 ? "up" : "dn") + '" dir="ltr">' + tkPct(d) + "</span>" +
    (big ? '<small class="muted">' + esc(L(x.it.full)) + '</small><div class="row" style="gap:6px;margin-top:6px"><button class="btn sm" data-act="tk-open" data-s="' + esc(x.it.s) + '">' + esc(t("dh_idx_open")) + '</button><button class="btn sm primary" data-act="tk-chart" data-s="' + esc(x.it.s) + '">' + esc(t("tk_open")) + "</button></div>" : '<button class="dh-hit" data-act="tk-open" data-s="' + esc(x.it.s) + '" aria-label="' + esc(L(x.it.n) + " " + t("dh_idx_open")) + '"></button>') + "</div>";
}

/* ----- محاور الأقسام ----- */
function pageMarketHub() { return '<div class="wrap"><div class="page-head"><h1>' + esc(t("mk_h")) + "</h1><p>" + esc(t("mk_p")) + '</p></div><div class="stack" style="padding-block:18px 40px">' + hubCards("market") + "</div></div>"; }
function pagePfHub() { return '<div class="wrap"><div class="page-head"><h1>' + esc(t("pf_h")) + "</h1><p>" + esc(t("pf_p")) + '</p></div><div class="stack" style="padding-block:18px 40px">' + hubCards("pf") + "</div></div>"; }

/* ----- الرئيسية (لوحة المالك اليومية) ----- */
function dhDivs() {
  const out = [], today = new Date(); today.setHours(0, 0, 0, 0);
  if (typeof DG !== "undefined" && DG.data && DG.data.stocks) DG.data.stocks.forEach((s) => {
    if (!s.next) return; const d = new Date(s.next + "T00:00:00"), n = Math.round((d - today) / 864e5);
    if (n >= 0 && n <= 30) out.push({ s: s.s, name: s.n, n, date: s.next, decl: !!s.decl, amt: s.decl ? s.decl.amt : s.last ? s.last[1] : null, cur: s.cur, chg: s.decl ? s.decl.chg : null });
  });
  return out.sort((a, b) => a.n - b.n);
}
const PIN_KEY = "meras.pin";
function dhPin() {
  let off = ""; try { off = localStorage.getItem(PIN_KEY) || ""; } catch (e) {}
  const items = [];
  dhDivs().filter((x) => x.decl && x.n <= 7).forEach((x) => { const lb = typeof dgLastBuy === "function" ? dgLastBuy(x.date) : x.date; items.push({ id: "div|" + x.s + "|" + x.date, tone: "amber", go: "gdiv", text: t("dh_pin_div").replace("{k}", t("dh_decl")).replace("{s}", x.s).replace("{n}", x.n).replace("{d}", "\u2066" + x.date + "\u2069").replace("{b}", "\u2066" + lb + "\u2069") }); });
  (typeof tkItems === "function" ? tkItems() : []).forEach((x) => { const d = x.st.d || 0; if (Math.abs(d) >= 0.02) items.push({ id: "idx|" + x.it.s + "|" + x.st.date, tone: d > 0 ? "up" : "down", tk: x.it.s, text: t("dh_pin_idx").replace("{s}", L(x.it.n)).replace("{w}", t(d > 0 ? "dh_up" : "dh_down")).replace("{p}", "⁦" + tkPct(Math.abs(d)).replace("+", "") + "⁩") }); });
  const p = items.find((x) => x.id !== off); if (!p) return "";
  return '<div class="dh-pin ' + p.tone + '" role="status"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 4h6l-1 6 3 3H7l3-3zM12 13v7" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>' +
    (p.tk ? '<button class="dh-pin-t" data-act="tk-open" data-s="' + esc(p.tk) + '">' + esc(p.text) + "</button>" : '<a class="dh-pin-t" href="#' + p.go + '">' + esc(p.text) + "</a>") + '<button class="dh-pin-x" data-act="pin-x" data-id="' + esc(p.id) + '" aria-label="' + esc(t("dh_pin_x")) + '">×</button></div>';
}
function dhCard(title, link, linkLabel, body, cls) {
  return '<section class="panel stack dh-card' + (cls ? " " + cls : "") + '"><div class="row" style="justify-content:space-between;align-items:center"><h2>' + esc(title) + "</h2>" + (link ? '<a class="small" href="' + link + '">' + esc(linkLabel) + "</a>" : "") + "</div>" + body + "</section>";
}
function pageDash() {
  if (typeof DG !== "undefined" && !DG.loaded && typeof loadDG === "function") loadDG();
  if (typeof NW !== "undefined" && !NW.loaded && typeof loadNews === "function") loadNews();
  if (typeof DK !== "undefined" && !DK.loaded && typeof loadDesk === "function") loadDesk();
  if (typeof EXTRA !== "undefined" && !EXTRA && typeof loadExtra === "function") loadExtra();
  const first = nextLesson("inv") || LESSONS[0], done = LESSONS.filter((l) => isDone(l.id)).length;
  const hero = '<section class="dh-hero"><div class="wrap"><div class="dh-hero-t"><p class="dh-eyebrow">' + esc(t("hero_eyebrow")) + "</p><h1>" + t("hero_h") + '</h1><p class="dh-lead">' + esc(t("hero_p_short")) + '</p></div><div class="row" style="gap:8px"><a class="btn primary" href="#l-' + first.id + '">' + esc(t("dh_go")) + ": " + esc(L(first.title)) + '</a><a class="btn ghost" href="#learn">' + esc(t("nav_learn")) + "</a></div></div></section>";
  const sc = [["chart", "nav_chart", "chart"], ["portfolio", "dk_t_pf", "invest"], ["screener", "sc_t", "tech"], ["gdiv", "dividends", "dividends"], ["saved", "sv_t", "journal"], ["movers", "tp_t", "tech"]];
  const shortcuts = '<div class="dh-sc">' + sc.map(([h, k, ic]) => '<a href="#' + h + '"><span class="dh-sci">' + (typeof DK_IC !== "undefined" && DK_IC[ROUTE_DESK[h]] ? '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">' + DK_IC[ROUTE_DESK[h]] + "</svg>" : secIc(ic, 22)) + "</span><b>" + esc(t(k === "dividends" ? "dh_div" : k)) + "</b></a>").join("") + "</div>";
  const idx = (typeof tkItems === "function" ? tkItems() : []);
  const idxCard = dhCard(t("dh_idx"), "#indices", t("nav_indices"), idx.length ? '<div class="dh-idx">' + idx.map((x) => dhIdxCard(x, false)).join("") + "</div>" : '<p class="muted small">' + esc(t("dh_loading")) + "</p>");
  const nwI = (typeof NW !== "undefined" && NW.data && NW.data.items) || [], br = typeof NW !== "undefined" && NW.brief && NW.brief.items && NW.brief.items[0];
  const nwList = nwI.filter((x) => x.imp >= 2).slice(0, 4).map((x) => '<li><span class="tag ' + (x.sym ? "nw-sym" : "") + '"' + (x.sym ? ' dir="ltr"' : "") + ">" + esc(x.sym || x.topic || "") + '</span><span class="dh-nt" dir="' + (x.lang === "ar" ? "rtl" : "ltr") + '">' + esc(x.t) + '</span><a class="small" href="' + esc(nwLink(x.url)) + '" target="_blank" rel="noopener noreferrer">' + esc(t("nw_more")) + " ↗</a></li>").join("");
  const newsCard = dhCard(t("dh_news"), "#news", t("dh_news_all"), (br ? '<div class="dh-brief"><b>✦ ' + esc(br.h) + "</b>" + (br.s ? '<p class="small" style="margin:4px 0 0">' + esc(br.s) + "</p>" : "") + "</div>" : "") + (nwList ? '<ul class="dh-news">' + nwList + "</ul>" : '<p class="muted small">' + esc(t("dh_loading")) + "</p>"));
  let pfBody = '<p class="muted small">' + esc(t("dh_loading")) + "</p>";
  if (typeof DK !== "undefined" && DK.loaded) { try { const H = dkHoldings("SAR"), U = dkHoldings("USD"); pfBody = H.open.length || U.open.length ? (H.open.length ? '<b class="dh-big num">' + money(H.value, "SAR") + ' <small class="muted">SAR</small></b><span>' + dkSign(H.unreal) + (H.cost ? ' <span class="small">' + dkSign((H.unreal / H.cost) * 100, 1, "%") + "</span>" : "") + "</span>" : "") + (U.open.length ? '<b class="num">' + money(U.value, "USD") + "</b>" : "") + '<span class="small muted">' + esc(t("dh_pf_n").replace("{n}", H.open.length + U.open.length)) + "</span>" : '<p class="muted small">' + esc(t("dh_pf_none")) + "</p>"; } catch (e) { pfBody = ""; } }
  const pfCard = dhCard(t("dh_pf"), "#portfolio", t("dh_pf_open"), '<div class="stack" style="gap:4px">' + pfBody + "</div>");
  const dv = dhDivs().slice(0, 4);
  const divCard = dhCard(t("dh_div"), "#gdiv", t("dh_div_all"), dv.length ? '<ul class="dh-div">' + dv.map((x) => '<li><span><b class="num">' + esc(x.s) + '</b> <span class="tag ' + (x.decl ? "dg-off" : "") + '">' + esc(t(x.decl ? "dh_decl" : "dh_est")) + "</span>" + (x.amt != null ? ' <span class="num" dir="ltr">' + x.amt + (x.cur === "USD" ? "$" : " " + (x.cur || "")) + "</span>" : "") + '</span><small class="muted">' + esc(x.n ? t("dh_days").replace("{n}", x.n) : t("dh_today")) + "</small></li>").join("") + "</ul>" : '<p class="muted small">' + esc(t(typeof DG !== "undefined" && DG.loaded ? "dh_div_none" : "dh_loading")) + "</p>");
  const learnCard = dhCard(t("dh_learn"), "#tracks", t("nav_tracks"), '<span>' + esc(L(first.title)) + '</span><div class="dh-bar"><i style="width:' + Math.round((done / LESSONS.length) * 100) + '%"></i></div><small class="muted">' + esc(t("dh_lessons").replace("{d}", done).replace("{n}", LESSONS.length)) + '</small><div><a class="btn sm primary" href="#l-' + first.id + '">' + esc(t("dh_go")) + "</a></div>");
  return hero + '<div class="wrap dh"><div class="stack" style="padding-block:16px 40px;gap:16px">' + dhPin() + shortcuts +
    '<div class="dh-cols"><div class="dh-main stack" style="gap:16px">' + idxCard + newsCard + '</div><aside class="dh-side stack" style="gap:16px">' + pfCard + divCard + learnCard + "</aside></div>" +
    "</div></div>";
}
Object.assign(UI, { hero_p_short: ["ثلاثة مسارات: المستثمر والمتداول والمبرمج. شرح، مثال على سهم من تاسي، تمرين في سجلك.", "Three tracks: investor, trader, developer. A lesson, a TASI example, practice in your journal."] });

/* ----- قائمة الحساب (الإعدادات، الحساب، الباقات، لوحة المالك، هيكل المنصة) ----- */
function profileMenu() {
  const owner = isOwner();
  const links = [["settings", "set_h"], ["account", "nav_account"], ["plans", "nav_plans"]].concat(owner ? [["owner", "pm_owner"]] : []);
  return '<details class="pmenu"><summary class="btn sm" aria-label="' + esc(t("pm_menu")) + '"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></g></svg></summary><div class="pm-pop">' +
    links.map(([h, k]) => '<a href="#' + h + '">' + esc(t(k)) + "</a>").join("") + "</div></details>";
}
document.addEventListener("click", (e) => {
  const x = e.target.closest && e.target.closest('[data-act="pin-x"]');
  if (x) { e.preventDefault(); try { localStorage.setItem(PIN_KEY, x.dataset.id); } catch (err) {} render(); return; }
  document.querySelectorAll("details.pmenu[open]").forEach((d) => { if (!d.contains(e.target) || (e.target.closest && e.target.closest(".pm-pop a"))) d.open = false; });
});
