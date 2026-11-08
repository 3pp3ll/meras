/* ===== مِراس: الواجهة الجديدة =====
   الشكل السابق محفوظ في classic.html (ووسم git: classic-2026-11-08).
   - الهيدر: الشعار، وأدوات الهيدر (الساعة، البحث، التنبيهات، الوضع، اللغة، الحساب) من ملفاتها.
   - الرئيسية: التحية، البحث، ملخص الصباح/العصر/المساء، الأخبار الرئيسية، التنبيهات، السوق الآن. وتنتهي هنا.
   - الأقسام من القائمة الجانبية على الكمبيوتر، ومن الشريط السفلي على الجوال: كل قسم صفحة أيقونات.
   - كل صفحة داخلية فوقها مسارها «السوق › الشارت» عشان الدعم يعرف وين المستخدم.
   - قسم AI ومكتبي للمالك بس. */
Object.assign(UI, {
  nav_learn: ["دروس تعليمية", "Lessons"], tb_learn: ["الدروس", "Lessons"],
  v2_ai: ["AI", "AI"], v2_ai_p: ["الملخص، واسأل AI، وتقرير المحفظة، والتنبيهات.", "The brief, Ask AI, the portfolio report and alerts."],
  v2_office: ["مكتبي", "My desk"], v2_office_p: ["أدواتك الخاصة: لوحة المالك، ومنصاتي، والمحفوظات.", "Your own tools: the owner dashboard, platforms and saved items."],
  v2_mk_p: ["الشارت، والأخبار، والسوق السعودي والأمريكي، والمؤشرات، والمعادن، والباحث.", "Chart, news, the Saudi and US markets, indices, metals and the screener."],
  v2_pf_p: ["محفظتك وسجل تداولك، والتوزيعات، والفرز الشرعي، والحاسبات.", "Your portfolio and journal, dividends, Sharia screening and calculators."],
  v2_learn_p: ["المسارات والمدارس والشروحات والمختبر والمصطلحات.", "Tracks, schools, guides, the lab and key terms."],
  v2_hi_m: ["صباح الخير", "Good morning"], v2_hi_e: ["مساء الخير", "Good evening"],
  v2_b_m: ["ملخص الصباح", "Morning brief"], v2_b_a: ["ملخص العصر", "Afternoon brief"], v2_b_e: ["ملخص المساء", "Evening brief"],
  v2_free: ["مجاني", "Free"], v2_owner: ["مكتبي", "My desk"], v2_q: ["ابحث عن سهم أو أداة أو درس…", "Search for a share, tool or lesson…"],
  v2_news: ["أخبار رئيسية", "Top news"], v2_news_all: ["كل الأخبار", "All news"], v2_news_none: ["الأخبار تظهر هنا أول ما تتحدث.", "News shows here once it updates."],
  v2_alerts: ["تنبيهات اليوم", "Today's alerts"], v2_alerts_all: ["كل التنبيهات", "All alerts"], v2_alerts_none: ["ما فيه تنبيهات اليوم.", "No alerts today."],
  v2_now: ["السوق الآن", "Market now"], v2_now_p: ["أسهم مختارة، تتغير كل ساعة", "A rotating pick, changes every hour"],
  v2_up: ["ارتفع", "rose"], v2_dn: ["نزل", "fell"], v2_flat: ["ثابت", "was flat"],
  v2_br_idx: ["{n} {w} {p}", "{n} {w} {p}"], v2_br_gold: ["الذهب عند {p} دولار للأونصة", "Gold at ${p} an ounce"],
  v2_br_div: ["توزيع {s} بعد {n} يوم، وآخر يوم شراء {b}", "{s} pays in {n} days; last buy day {b}"], v2_br_wait: ["الملخص يكتمل أول ما توصل بيانات السوق.", "The brief fills in once market data arrives."],
  v2_ask: ["اسأل AI", "Ask AI"], v2_report: ["تقرير المحفظة", "Portfolio report"], v2_brief: ["الملخص", "The brief"], v2_bell: ["التنبيهات", "Alerts"],
  v2_down: ["للأسفل", "To the bottom"], v2_metals: ["المعادن", "Metals"], tab_gloss: ["المصطلحات", "Key terms"],
  v2_gold: ["الذهب", "Gold"], v2_silver: ["الفضة", "Silver"], v2_brent: ["برنت", "Brent"]
});

/* ----- الأقسام ----- */
NAV_GROUPS.market.items.splice(1, 0, ["news", "nav_news", "d_news", 1]);
NAV_GROUPS.pf.items = NAV_GROUPS.pf.items.filter((x) => !["apps", "saved", "mycharts"].includes(x[0]));
NAV_GROUPS.market.items.unshift(["ai-brief", "v2_brief", "v2_b_m"]);
NAV_GROUPS.ai = { label: "v2_ai", items: [["ai-ask", "v2_ask", "v2_ai_p", 1], ["portfolio", "v2_report", "dk_g_pf", 1], ["ai-bell", "v2_bell", "v2_alerts", 1]] };
NAV_GROUPS.office = { label: "v2_office", items: [["owner", "ow_h", "map_owner_p", 1], ["apps", "ap_t", "dk_g_apps", 1], ["saved", "sv_t", "dk_g_sv", 1], ["mycharts", "dk_t_ch", "dk_g_ch", 1], ["map", "pm_map", "map_p", 1], ["settings", "set_h", "set_h", 1]] };
UI.d_news = UI.d_news || ["أخبار السوق والشركات", "Market and company news"];
const V2_ORDER = ["market", "ai", "pf", "learn", "office"];
const V2_TINT = { market: "#3C8CC9", ai: "#5A63C8", pf: "#2E9C73", learn: "#D9822B", office: "#4A6A9A", home: "#B4532E" };
const v2Own = () => typeof isOwner === "function" && isOwner();
const v2Groups = () => V2_ORDER.filter((g) => (g === "ai" || g === "office" ? v2Own() : true) && navItems(g).length);
const v2Label = (g) => (g === "home" ? t("nav_home") : NAV_GROUPS[g] ? t(NAV_GROUPS[g].label) : UI["nav_" + g] ? t("nav_" + g) : g);
{
  const og = groupOf;
  groupOf = function (r) {
    if (r === "news") return "market";
    if (r === "ai-brief") return "market";
    if (r === "ai" || r.startsWith("ai-")) return "ai";
    if (r === "office") return "office";
    return og(r);
  };
}

/* ----- أيقونات ----- */
const V2_IC = {
  news: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M5 5h11v14H6a1 1 0 0 1-1-1z"/><path d="M16 9h3v9a1 1 0 0 1-1 1h-2M8 9h5M8 12h5M8 15h3"/></g>',
  indices: '<path d="M4 18l5-6 4 3 7-9M15 6h5v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  screener: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8 11h6M11 8v6"/></g>',
  movers: '<path d="M7 17V7M4 10l3-3 3 3M17 7v10M14 14l3 3 3-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  radar: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/></g>',
  usm: '<path d="M5 21V4M5 4h11l-2 4 2 4H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  portfolio: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M16 13h2M3 10h18"/></g>',
  analyses: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20h16M7 16V9M12 16V5M17 16v-4"/></g>',
  gdiv: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></g>',
  options: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h10l-3-3M20 17H10l3 3"/></g>',
  apps: '<g fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></g>',
  saved: '<path d="M6 3h12v18l-6-4-6 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  mycharts: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 15l3-4 3 2 4-5"/></g>',
  map: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/></g>',
  settings: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/></g>',
  "ai-brief": '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g>',
  "ai-ask": '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/><path d="M9 10h6"/></g>',
  "ai-bell": '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></g>',
  ai: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/></g>',
  office: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M9 9V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></g>',
  home: '<path d="M4 11l8-7 8 7v9H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  market: '<path d="M4 18l4-6 4 3 6-9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  pf: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M16 13h2M3 10h18"/></g>',
  learn: '<path d="M3 9l9-5 9 5-9 5z M7 11.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
};
const v2Ic = (k, sz) => { const p = V2_IC[k] || (typeof SEC_IC !== "undefined" && SEC_IC[k]) || (typeof DK_IC !== "undefined" && typeof ROUTE_DESK !== "undefined" && DK_IC[ROUTE_DESK[k]]) || V2_IC.apps; return '<svg viewBox="0 0 24 24" width="' + (sz || 22) + '" height="' + (sz || 22) + '" aria-hidden="true">' + p + "</svg>"; };

/* ----- الهيدر ----- */
headerHtml = function (r) {
  if (typeof trackBack === "function") trackBack(r);
  const tools = (typeof themeButton === "function" ? themeButton() : "") + '<button class="btn sm" data-act="lang" aria-label="language">' + (S.lang === "ar" ? "EN" : "ع") + "</button>" + (typeof profileMenu === "function" ? profileMenu() : "");
  return '<div class="wrap"><a class="brand" href="#">' + LOGO + "<span>" + esc(t("brand")) + '</span></a><div class="tools">' + tools + "</div></div>";
};

/* ----- الشريط السفلي ----- */
tabbarSync = function (r) {
  let bar = document.getElementById("tabbar");
  if (r == null) { if (bar) bar.hidden = true; document.body.classList.remove("has-tabbar"); return; }
  if (!bar) { bar = document.createElement("nav"); bar.id = "tabbar"; document.body.appendChild(bar); }
  const g = r === "" || r === "home" ? "home" : groupOf(r);
  const items = [["", "home", "nav_home"], ["market", "market", "nav_market"]];
  if (v2Own()) items.push(["ai", "ai", "v2_ai"]);
  items.push(["pf", "pf", "nav_pf"], ["learn", "learn", "tb_learn"]);
  bar.setAttribute("aria-label", S.lang === "ar" ? "التنقل" : "Navigation");
  bar.innerHTML = '<div class="tb-in" style="--n:' + items.length + '">' + items.map(([h, ic, k]) => '<a class="tb' + (ic === "ai" ? " tb-ai" : "") + '" href="#' + h + '"' + ((h === "" ? g === "home" : g === h) ? ' aria-current="page"' : "") + ">" + (ic === "ai" ? "<span>" + v2Ic("ai", 22) + "</span>" : v2Ic(ic, 22)) + esc(t(k)) + "</a>").join("") + "</div>";
  bar.hidden = false; document.body.classList.add("has-tabbar");
};

/* ----- القائمة الجانبية (الكمبيوتر) + المسار فوق الصفحة ----- */
function v2Crumb(r, g) {
  if (!g || g === "home" || r === g || r === "" ) return "";
  const lab = typeof pageLabel === "function" ? pageLabel({ r }) : "";
  return '<nav class="v2-crumb" aria-label="' + (S.lang === "ar" ? "مكانك" : "You are here") + '"><a href="#' + g + '">' + esc(v2Label(g)) + "</a><span aria-hidden=\"true\">›</span><b>" + esc(lab || r) + "</b></nav>";
}
function v2Shell(r, html) {
  const g = r === "" || r === "home" ? "home" : groupOf(r);
  if (!g || ["plans", "checkout", "account", "privacy", "terms", "welcome"].includes(r)) return html;
  const sub = subOf(r), mini = typeof SIDE_MINI !== "undefined" && SIDE_MINI.includes(r);
  const link = (h, label, ic, on, tint) => '<a href="#' + h + '"' + (on ? ' aria-current="page"' : "") + ' title="' + esc(label) + '" style="--tint:' + tint + '"><span class="dk-si">' + v2Ic(ic, 19) + '</span><span class="dk-sl"><b>' + esc(label) + "</b></span></a>";
  let nav = link("", t("nav_home"), "home", g === "home", V2_TINT.home) + link("blog", t("nav_blog"), "blog", g === "blog", "#C2577E");
  v2Groups().forEach((k) => {
    nav += link(k, v2Label(k), k, g === k && r === k, V2_TINT[k]);
  });
  return '<div class="wrap side-shell v2-shell' + (mini ? " mini" : "") + '"><aside class="dk-side"><nav aria-label="' + (S.lang === "ar" ? "الأقسام" : "Sections") + '">' + nav + "</nav>" + '</aside><div class="side-main">' + v2Crumb(r, g) + html + "</div></div>";
}
sideW = function () {
  const vw = document.documentElement.clientWidth || 0;
  if (vw < 1000 || (typeof lnShow === "function" && lnShow())) return 0;
  return typeof SIDE_MINI !== "undefined" && SIDE_MINI.includes(route()) ? 92 : 258;
};

/* ----- صفحات الأقسام: أيقونات ----- */
function v2Hub(g) {
  const p = { market: "v2_mk_p", pf: "v2_pf_p", learn: "v2_learn_p", ai: "v2_ai_p", office: "v2_office_p" }[g];
  if ((g === "ai" || g === "office") && !v2Own()) return '<div class="wrap"><div class="page-head"><h1>' + esc(v2Label(g)) + '</h1></div><div class="notice" style="margin-block:18px">' + esc(t("ow_need")) + "</div></div>";
  const tiles = navItems(g).map(([h, k, d]) => {
    const act = h === "ai-ask" ? ' data-act="as-toggle"' : h === "ai-bell" ? ' data-act="nt-bell"' : "";
    const href = h === "ai-brief" ? "#" : h === "ai-ask" || h === "ai-bell" ? "#ai" : "#" + h;
    const tint = h === "ai-brief" ? V2_TINT.market : V2_TINT[g];
    return '<a class="v2-tile" href="' + href + '"' + act + ' style="--tint:' + tint + '"><span class="v2-ic">' + v2Ic(h, 26) + "</span><b>" + esc(t(k)) + "</b><small>" + esc(UI[d] ? t(d) : "") + "</small></a>";
  }).join("");
  return '<div class="wrap"><div class="page-head"><h1>' + esc(v2Label(g)) + "</h1><p>" + esc(t(p)) + '</p></div><div class="v2-tiles">' + tiles + "</div></div>";
}
pageMarketHub = () => v2Hub("market");
pagePfHub = () => v2Hub("pf");
pageLearn = () => v2Hub("learn");

/* ----- الأسعار المباشرة للذهب والفضة في الشريط ----- */
TK_LIST.push(
  { s: "GC=F", n: ["الذهب", "Gold"], full: ["الذهب (عقود الأونصة بالدولار)", "Gold (USD per ounce futures)"], mk: ["المعادن", "Metals"] },
  { s: "SI=F", n: ["الفضة", "Silver"], full: ["الفضة (عقود الأونصة بالدولار)", "Silver (USD per ounce futures)"], mk: ["المعادن", "Metals"] },
  { s: "BZ=F", n: ["برنت", "Brent"], full: ["نفط برنت (دولار للبرميل)", "Brent crude (USD per barrel)"], mk: ["الطاقة", "Energy"] }
);
const V2L = { g: null, s: null, at: 0 };
{
  const oi = tkInfo;
  tkInfo = function (it) {
    const x = oi(it); if (!x) return x;
    const lv = it.s === "GC=F" ? V2L.g : it.s === "SI=F" ? V2L.s : null;
    if (!lv || !x.rows || x.rows.length < 2) return x;
    const prev = x.rows[x.rows.length - 2].c;
    return Object.assign({}, x, { st: Object.assign({}, x.st, { c: lv, d: lv / prev - 1 }) });
  };
}
async function v2Live() {
  if (document.hidden || typeof metFetchLive !== "function") return;
  const r = await metFetchLive(); if (!r) return;
  V2L.g = r.g || V2L.g; V2L.s = r.s || V2L.s; V2L.at = Date.now();
  if (typeof tickHook === "function") tickHook();
  const b = document.getElementById("v2-brief"); if (b && route() === "") b.outerHTML = v2BriefCard();
}
setTimeout(v2Live, 1500); setInterval(v2Live, 60000);

/* ----- الرئيسية ----- */
function v2Riyadh() {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Riyadh", hour: "numeric", hour12: false }).formatToParts(new Date());
  return +((p.find((x) => x.type === "hour") || {}).value || 0) % 24;
}
function v2BriefCard() {
  const h = v2Riyadh(), title = t(h < 12 ? "v2_b_m" : h < 17 ? "v2_b_a" : "v2_b_e");
  const loc = S.lang === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-GB", now = new Date();
  const when = "\u2067" + now.toLocaleTimeString(loc, { timeZone: "Asia/Riyadh", hour: "numeric", minute: "2-digit" }) + "\u2069 · " + now.toLocaleDateString(loc, { timeZone: "Asia/Riyadh", weekday: "long", day: "numeric", month: "long" });
  const pts = [], kp = [];
  const pct = (v) => (v > 0 ? "+" : v < 0 ? "-" : "") + Math.abs(v * 100).toFixed(2) + "%", iso = (x) => "\u2066" + x + "\u2069";
  const idx = typeof tkItems === "function" ? tkItems() : [];
  idx.filter((x) => ["^TASI.SR", "^GSPC", "^IXIC"].includes(x.it.s)).forEach((x) => {
    const d = x.st.d || 0; pts.push(t("v2_br_idx").replace("{n}", L(x.it.n)).replace("{w}", t(d > 0.0005 ? "v2_up" : d < -0.0005 ? "v2_dn" : "v2_flat")).replace("{p}", d ? iso(Math.abs(d * 100).toFixed(2) + "%") : ""));
    kp.push([L(x.it.n), d]);
  });
  const gold = V2L.g || (idx.find((x) => x.it.s === "GC=F") || { st: {} }).st.c;
  if (gold) { pts.push(t("v2_br_gold").replace("{p}", iso(Math.round(gold).toLocaleString("en-US")))); const gx = idx.find((x) => x.it.s === "GC=F"); if (gx) kp.push([t("v2_gold"), gx.st.d || 0]); }
  try { const dv = typeof dhDivs === "function" ? dhDivs().filter((x) => x.decl && x.n <= 10).slice(0, 1) : []; dv.forEach((x) => pts.push(t("v2_br_div").replace("{s}", x.sa ? x.name || x.s : x.s).replace("{n}", x.n).replace("{b}", iso(x.sa && typeof buyBy === "function" ? buyBy(x.date) : x.date)).replace(S.lang === "ar" ? "بعد 0 يوم" : "in 0 days", S.lang === "ar" ? "اليوم" : "today"))); } catch (e) {}
  const br = typeof NW !== "undefined" && NW.brief && NW.brief.items && NW.brief.items[0];
  if (br && br.h) pts.push(br.h);
  const body = pts.length ? '<ul class="v2-pts">' + pts.slice(0, 5).map((p) => "<li>" + esc(p) + "</li>").join("") + "</ul>" : '<p class="muted small">' + esc(t("v2_br_wait")) + "</p>";
  const tiles = kp.slice(0, 3).map(([n, d]) => '<div><span>' + esc(n) + '</span><b class="num ' + (d > 0 ? "up" : d < 0 ? "dn" : "") + '" dir="ltr">' + pct(d) + "</b></div>").join("");
  return '<section class="v2-brief" id="v2-brief"><div class="v2-bh"><h2>' + esc(title) + '</h2><small>' + esc(when) + "</small></div>" + body + (tiles ? '<div class="v2-kp">' + tiles + "</div>" : "") + "</section>";
}
function v2Card(title, link, linkLabel, body) {
  return '<section class="panel stack v2-card"><div class="row" style="justify-content:space-between;align-items:center"><h2>' + esc(title) + "</h2>" + (link ? '<a class="small" href="' + link + '"' + (link === "#nt" ? ' data-act="nt-bell"' : "") + ">" + esc(linkLabel) + "</a>" : "") + "</div>" + body + "</section>";
}
function v2Now() {
  const hist = (LIVE && LIVE.history) || {}, all = Object.keys(hist).filter((s) => (hist[s] || []).length > 2 && !/^\^/.test(s) && !/[=/]/.test(s)), sa = all.filter((s) => /^\d{4}$/.test(s)), ok = sa.length >= 5 ? sa : all;
  if (!ok.length) return "";
  let seed = Math.floor(Date.now() / 36e5); const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const pick = ok.slice().sort(() => rnd() - 0.5).slice(0, 5);
  const rows = pick.map((s) => { const h = hist[s], c = h[h.length - 1], p = h[h.length - 2], cv = c.c != null ? c.c : c[4], pv = p.c != null ? p.c : p[4], d = pv ? cv / pv - 1 : 0;
    return '<tr><td><button class="v2-sym" data-act="tk-chart" data-s="' + esc(s) + '"><b>' + esc(typeof symName === "function" ? symName(s) : s) + '</b><small class="num" dir="ltr">' + esc(s) + '</small></button></td><td class="num" dir="ltr">' + (+cv).toFixed(2) + '</td><td><span class="tag ' + (d >= 0 ? "up" : "ex-dn") + ' num" dir="ltr">' + (d > 0 ? "+" : "") + (d * 100).toFixed(2) + "%</span></td></tr>"; }).join("");
  return v2Card(t("v2_now"), "#symbols", t("nav_symbols"), '<p class="muted small" style="margin:0">' + esc(t("v2_now_p")) + '</p><table class="v2-tbl"><tbody>' + rows + "</tbody></table>");
}
function pageHome2() {
  if (typeof NW !== "undefined" && !NW.loaded && typeof loadNews === "function") loadNews();
  if (typeof DIV !== "undefined" && !DIV && typeof loadDividends === "function") loadDividends();
  if (typeof DG !== "undefined" && !DG.loaded && typeof loadDG === "function") loadDG();
  if (typeof EXTRA !== "undefined" && !EXTRA && typeof loadExtra === "function") loadExtra();
  const name = (typeof MA !== "undefined" && MA.prof && MA.prof.name) || (typeof MA !== "undefined" && MA.user && MA.user.user_metadata && MA.user.user_metadata.name) || "";
  const hi = '<div class="v2-hi"><h1>' + esc(t(v2Riyadh() < 12 ? "v2_hi_m" : "v2_hi_e")) + (name ? " " + esc(name.split(" ")[0]) : "") + ' <span class="tag ' + (v2Own() ? "v2-own" : "") + '">' + esc(t(v2Own() ? "v2_owner" : "v2_free")) + "</span>" + (v2Own() ? '<button class="v2-mapbtn" data-act="v2-map" aria-label="' + esc(t("pm_map")) + '" title="' + esc(t("pm_map")) + '">' + v2Ic("map", 18) + "<span>" + esc(t("pm_map")) + '</span><span aria-hidden="true">‹</span></button>' : "") + "</h1></div>";
  const search = '<button class="v2-search" data-act="sr-open"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span>' + esc(t("v2_q")) + "</span></button>";
  const nwI = (typeof NW !== "undefined" && NW.data && NW.data.items) || [];
  const news = v2Card(t("v2_news"), "#news", t("v2_news_all"), nwI.length ? '<ul class="v2-news v2-dots v2-short">' + nwI.filter((x) => x.imp >= 2).slice(0, 4).map((x) => '<li><a href="#news" data-nwgo="' + esc(x.t) + '" dir="' + (x.lang === "ar" ? "rtl" : "ltr") + '">' + esc(x.t) + "</a></li>").join("") + "</ul>" : '<p class="muted small">' + esc(t("v2_news_none")) + "</p>");
  const td = today(), al = typeof ntItems === "function" ? ntItems().filter((i) => (i.date || "").slice(0, 10) === td).slice(0, 5) : [];
  const alerts = v2Card(t("v2_alerts"), "#nt", t("v2_alerts_all"), al.length ? '<ul class="v2-news">' + al.map((i) => "<li><span>" + esc(v2NtText(i)) + "</span></li>").join("") + "</ul>" : '<p class="muted small">' + esc(t("v2_alerts_none")) + "</p>");
  return '<div class="wrap v2-home"><div class="stack" style="padding-block:14px 40px;gap:14px">' + hi + search + '<div class="v2-grid"><div class="stack" style="gap:14px">' + v2BriefCard() + news + '</div><div class="stack" style="gap:14px">' + v2Now() + alerts + "</div></div></div></div>";
}
function v2NtText(i) {
  try {
    if (i.kind === "notice") return L(i.n.t || i.n.title || ["", ""]) || "";
    if (i.kind === "mover") return (typeof symName === "function" ? symName(i.x.s) : i.x.s) + " · " + t("tp_t");
    if (i.title) return typeof i.title === "string" ? i.title : L(i.title);
    if (i.t) return typeof i.t === "string" ? i.t : L(i.t);
  } catch (e) {}
  return t("nt_h");
}
pageDash = pageHome2;
pageGate = pageHome2;
document.addEventListener("click", (e) => { const a = e.target.closest && e.target.closest('.v2-tile[href="#"]'); if (a) { e.preventDefault(); location.hash = ""; } });

/* ----- للأسفل (مع زر للأعلى الموجود) ----- */
(function () {
  const b = document.createElement("button");
  b.id = "tobot"; b.type = "button"; b.hidden = true;
  b.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  b.addEventListener("click", () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
  document.body.appendChild(b);
  const upd = () => { const left = document.documentElement.scrollHeight - window.innerHeight - window.scrollY; b.hidden = document.documentElement.scrollHeight < window.innerHeight * 2 || left < 400; b.setAttribute("aria-label", t("v2_down")); b.title = t("v2_down"); };
  window.addEventListener("scroll", upd, { passive: true }); window.addEventListener("hashchange", () => setTimeout(upd, 300)); setTimeout(upd, 1500);
})();

/* ----- مقاطع الدروس (30 ثانية، عربي وإنجليزي حسب لغة المستخدم) ----- */
Object.assign(UI, { lv_h: ["{t} في 30 ثانية", "{t} in 30 seconds"], as_btn: ["شات بوت", "Chatbot"] });
const LESSON_VID = { "trd-1-1": "candle", "trd-1-2": "volume", "trd-2-1": "support", "trd-3-1": "ma", "inv-2-3": "exdate" };
function lessonVideo(id) {
  const v = LESSON_VID[id]; if (!v) return "";
  const f = "videos/" + v + "-" + (S.lang === "en" ? "en" : "ar");
  return '<figure class="lv"><figcaption>' + esc(t("lv_h").replace("{t}", L((LESSONS.find((x) => x.id === id) || { title: ["", ""] }).title))) + '</figcaption><video controls playsinline preload="none" poster="' + f + '.jpg" src="' + f + '.mp4"></video></figure>';
}

/* ----- المؤشرات: صفوف بعرض الشاشة، والتفاصيل بالضغط ----- */
pageIndices = function () {
  const head = '<div class="page-head"><h1>' + esc(t("nav_indices")) + "</h1><p>" + esc(t("d_indices")) + "</p></div>";
  const items = typeof tkItems === "function" ? tkItems() : [];
  if (!items.length) { if (v2Own() && typeof loadExtra === "function") loadExtra(); return '<div class="wrap">' + head + '<div class="notice" style="margin-block:18px">' + esc(t(v2Own() ? "dh_loading" : "ow_need")) + "</div></div>"; }
  const rows = items.map((x) => { const d = x.st.d || 0;
    return '<button class="v2-ix" data-act="tk-open" data-s="' + esc(x.it.s) + '"><span class="v2-ixn"><b>' + esc(L(x.it.n)) + "</b><small>" + esc(L(x.it.mk)) + '</small></span><b class="num" dir="ltr">' + tkFmt(x.st.c) + '</b><span class="tag ' + (d >= 0 ? "up" : "ex-dn") + ' num" dir="ltr">' + (d > 0 ? "+" : "") + (d * 100).toFixed(2) + "%</span>" + (x.R && typeof biasWord === "function" ? '<span class="tk-b ' + x.R.fb + '">' + esc(biasWord(x.R.fb)) + "</span>" : "<span></span>") + '<span class="v2-ixgo" aria-hidden="true">‹</span></button>'; }).join("");
  return '<div class="wrap">' + head + '<div class="v2-ixl">' + rows + "</div></div>";
};

/* ----- هيكل المنصة المصغر: تحت القائمة الجانبية على الكمبيوتر، ونافذة صغيرة على الجوال ----- */
function v2MiniMap() {
  const leaf = (h, k, g) => '<a class="v2-tl" href="' + (h === "ai-brief" ? "#" : "#" + h) + '" title="' + esc(t(k)) + '" aria-label="' + esc(t(k)) + '" style="--tint:' + V2_TINT[g] + '">' + v2Ic(h, 15) + "</a>";
  const br = (g) => '<div class="v2-tg" style="--tint:' + V2_TINT[g] + '"><a class="v2-tn" href="#' + g + '" title="' + esc(v2Label(g)) + '"><span>' + v2Ic(g, 18) + "</span><small>" + esc(v2Label(g)) + '</small></a><div class="v2-tls">' + navItems(g).map(([h, k]) => leaf(h, k, g)).join("") + "</div></div>";
  return '<div class="v2-tree" aria-label="' + esc(t("pm_map")) + '"><a class="v2-troot" href="#" title="' + esc(t("nav_home")) + '">' + LOGO + "</a>" + '<div class="v2-tb">' + v2Groups().map(br).join("") + "</div></div>";
}
document.addEventListener("click", (e) => {
  const nw = e.target.closest && e.target.closest("[data-nwgo]");
  if (nw) { try { sessionStorage.setItem("meras.nwgo", nw.dataset.nwgo); } catch (x) {} return; }
  const b = e.target.closest && e.target.closest('[data-act="v2-map"],[data-act="v2-map-x"]'); if (!b) return;
  e.preventDefault();
  location.hash = "map"; return;
  let sh = document.getElementById("v2mapsheet");
  if (b.dataset.act === "v2-map-x" || sh) { if (sh) sh.remove(); return; }
  sh = document.createElement("div"); sh.id = "v2mapsheet"; sh.setAttribute("role", "dialog"); sh.setAttribute("aria-modal", "true");
  sh.innerHTML = '<div class="v2-ms-back" data-act="v2-map-x"></div><div class="v2-ms-card"><button class="v2-ms-x" data-act="v2-map-x" aria-label="' + esc(t("tk_close")) + '">×</button>' + v2MiniMap() + "</div>";
  document.body.appendChild(sh);
});
window.addEventListener("hashchange", () => { const sh = document.getElementById("v2mapsheet"); if (sh) sh.remove();
  if (route() !== "news") return; let q = ""; try { q = sessionStorage.getItem("meras.nwgo") || ""; sessionStorage.removeItem("meras.nwgo"); } catch (x) {}
  if (!q) return; setTimeout(() => { const h = [...document.querySelectorAll(".nw-title")].find((x) => x.textContent.trim() === q.trim()); const c = h && h.closest(".nw-card"); if (c) { c.scrollIntoView({ block: "center" }); c.classList.add("v2-flash"); setTimeout(() => c.classList.remove("v2-flash"), 2200); } }, 400); });
