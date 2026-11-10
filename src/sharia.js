/* ===== مِراس: الفرز الشرعي =====
   تكتب اسم السهم أو رمزه، ويطلع لك حكمه ونسبة تطهيره ومصدرها، مع حاسبة تطهير.
   - السعودي: قوائم الهيئات الشرعية (الراجحي المالية، د. محمد العصيمي، البلاد المالية) كما نشرتها أرقام.
     المالك يلصقها من صفحة أرقام كل ربع سنة في لوحة المالك، وتنحفظ نسخة عامة في الموقع (sharia_sa.json) للمستخدمين.
   - الأمريكي: للمستخدمين زر "تأكد في يقين". وللمالك فقط حساب مِراس التقديري حسب معيار AAOIFI (من بيانات Alpha Vantage، ورخصتها شخصية).
   - إدخال المالك الخاص (sharia_own.json): الحكم ونسبة التطهير من مصدره، ويظهر له بس.
   ما نخمن حكم أي سهم ما عندنا بياناته. */
Object.assign(UI, {
  tab_sharia: ["الفرز الشرعي", "Sharia screening"], d_sharia: ["حكم السهم ونسبة تطهيره، وحاسبة التطهير.", "A share's ruling and purification ratio, with a purification calculator."],
  sh_p: ["اكتب اسم السهم أو رمزه، سعودي أو أمريكي. الأحكام من الهيئات الشرعية وليست فتوى من مِراس، فتأكد من مصدرك قبل أي قرار.", "Type a share's name or code, Saudi or US. Rulings come from sharia boards, not from Meras, so confirm with your source before deciding."],
  sh_q: ["اسم السهم أو رمزه", "Share name or code"], sh_ph: ["مثال: 2222 أو أرامكو أو AAPL", "e.g. 2222, Aramco or AAPL"],
  sh_notfound: ["ما لقينا هذا السهم في بياناتنا. ما نخمن الحكم، تأكد من المصدر:", "We do not have this share. We do not guess a ruling, check the source:"],
  sh_empty_sa: ["قائمة الأسهم السعودية لسا ما انضافت.", "The Saudi list has not been added yet."],
  sh_sa: ["سهم سعودي", "Saudi share"], sh_us: ["سهم أمريكي", "US share"],
  sh_yq_h: ["حكم يقين", "Yaqeen ruling"], sh_yq_out: ["مو في قائمة يقين للمتوافقة، فهو محل نظر لين تتحدث القائمة.", "Not on Yaqeen's compliant list, so it stays under review until the list is updated."],
  sh_yq_pu: ["نسبة التطهير {p} محسوبة بطريقة يقين، وهي غير نسبة الدخل المحرم من الإيرادات. طهّر بها أرباحك من السهم.", "Purification {p} is Yaqeen's figure, not the share of impermissible revenue. Apply it to your gains from the stock."],
  sh_ci_h: ["حكم شارت آيديا", "Chart Idea ruling"], sh_ci_int: ["دخل الفوائد", "Interest income"], sh_ci_mix: ["دخل مختلط", "Mixed income"],
  sh_ci_used: ["يقين ما يغطي هذا السهم، فاعتمدنا حكم شارت آيديا (المرجع الثاني).", "Yaqeen doesn't cover this share, so Chart Idea's ruling (second reference) is used."],
  sh_yq_none: ["ما يغطيه", "Not covered"], sh_yq_check: ["بانتظار التأكد", "Pending check"],
  sh_yq_wait: ["لسا ما تأكدنا من حكم يقين على هذا السهم، فيبقى مستبعد لين نتأكد.", "Yaqeen's ruling on this share isn't confirmed yet, so it stays excluded until checked."],
  sh_fd_gold: ["صندوق ذهب فعلي", "Physical gold fund"], sh_fd_isl: ["صندوق إسلامي", "Islamic fund"], sh_fd_src: ["المصدر", "Source"], sh_fd_board: ["المصدر", "Source"],
  sh_fd_gold_pu: ["التطهير ما ينطبق: الصندوق ذهب فعلي وما يوزع أرباح.", "Purification doesn't apply: physical gold, no distributions."],
  sh_fd_isl_pu: ["تطهير التوزيعات يكون حسب نسبة التطهير اللي ينشرها الصندوق.", "Purify distributions using the ratio the fund publishes."],
  sh_fd_isl_note: ["للاطلاع والاستثمار الطويل بس، مو توصية تداول.", "For information and long-term investing only, not a trading recommendation."],
  sh_aw_h: ["حكم عوائد", "Awaed ruling"], sh_aw_part: ["سهم جزئي (دخل مختلط)", "Partial (mixed income)"],
  sh_refs_used: ["يقين ما يغطي هذا السهم، فاعتمدنا شارت آيديا وعوائد: لازم الاثنين يقولون متوافق، ونسبة التطهير ناخذ الأعلى منهم (الأحوط).", "Yaqeen doesn't cover this share, so Chart Idea and Awaed are used: both must say compliant, and the higher purification ratio applies."],
  sh_go: ["افحص السهم في المنصة نفسها", "Check this share on the source platform"],
  sh_src_one: ["الحكم حسب المصدر المذكور. افحصه بنفسك من الرابط ↗.", "Ruling per the source shown. Verify it via the ↗ link."],
  sh_src_all: ["المصادر متفقة على التوافق، ونسبة التطهير المعروضة هي الأعلى بينها (الأحوط).", "Sources agree it's compliant; the purification shown is the highest of them (most cautious)."],
  sh_src_split: ["المصادر مختلفة: فيه مصدر معتمد يقول متوافق وفيه مصدر يقول غير. اقرأ حكم كل مصدر وافحصه من الرابط ↗، ونسبة التطهير المعروضة هي الأعلى (الأحوط).", "Sources differ: at least one approved source says compliant and another doesn't. Read each and verify via ↗; the purification shown is the highest (most cautious)."],
  sh_src_none: ["ما فيه مصدر معتمد عندنا يقول إنه متوافق، فهو محل نظر.", "No approved source we track says it's compliant, so it stays under review."],
  sh_ok: ["متوافق", "Compliant"], sh_no: ["غير متوافق", "Not compliant"], sh_review: ["محل نظر", "Under review"], sh_incomplete: ["بيانات ناقصة", "Incomplete data"], sh_all: ["متوافق عند الهيئات الثلاث", "Compliant with all three boards"], sh_part: ["متوافق عند {n} من 3 هيئات", "Compliant with {n} of 3 boards"], sh_none: ["مو ضمن أي قائمة متوافقة", "Not on any compliant list"], sh_unlisted: ["غير مدرج في القائمة", "Not on the list"],
  sh_boards: ["قوائم الهيئات الشرعية", "Sharia board lists"], sh_asof: ["آخر تحديث", "Updated"], sh_src: ["المصدر", "Source"],
  sh_b_rajhi: ["الراجحي المالية", "Al Rajhi Capital"], sh_b_osaimi: ["د. محمد بن سعود العصيمي", "Dr. Mohammed Al-Osaimi"], sh_b_bilad: ["البلاد المالية", "Albilad Capital"],
  sh_listed: ["ضمن المتوافقة", "On the compliant list"], sh_notlisted: ["مو ضمن المتوافقة", "Not on the compliant list"],
  sh_purify: ["نسبة التطهير", "Purification ratio"], sh_purify_na: ["قوائم الهيئات ما فيها نسب التطهير. خذها من مصدرك (مثل البلاد المالية أو تطبيقك).", "The board lists do not include purification ratios. Take it from your source."],
  sh_calc: ["حاسبة التطهير", "Purification calculator"], sh_amount: ["المبلغ (توزيعات أو ربح)", "Amount (dividends or gain)"], sh_ratio: ["نسبة التطهير %", "Purification %"], sh_give: ["تتصدق بـ", "Give in charity"],
  sh_yaqeen: ["تأكد في يقين", "Check on Yaqeen"], sh_yaqeen_all: ["ابحث في يقين", "Search Yaqeen"], sh_notit: ["مو هذا السهم اللي تدوره؟", "Not the share you want?"], sh_nores: ["ما لقينا السهم عندنا. دوّره هنا:", "We do not have this share. Look it up here:"], sh_argaam: ["قائمة أرقام", "Argaam list"],
  sh_est: ["حساب مِراس التقديري (لك أنت بس)", "Meras estimate (only you see this)"], sh_est_note: ["محسوب من القوائم المالية حسب معيار AAOIFI، تقدير وليس فتوى. يقين أو هيئتك الشرعية هي المرجع.", "Calculated from the financial statements per the AAOIFI standard; an estimate, not a ruling."],
  sh_debt: ["الديون بفائدة ÷ القيمة السوقية", "Interest debt ÷ market cap"], sh_cash: ["النقد والاستثمارات ÷ القيمة السوقية", "Cash and investments ÷ market cap"], sh_haram: ["الدخل غير المباح ÷ الإيرادات", "Non-permissible income ÷ revenue"],
  sh_notyet: ["هذا السهم لسا ما انحسب في قاعدة البيانات. القاعدة تكبر كل يوم: سهمين في أيام الأسعار، و12 سهم الأحد والاثنين.", "This share is not in the database yet. It grows every day: two shares on price days and 12 on Sunday and Monday."],
  sh_queue_btn: ["احسبه أول واحد الليلة", "Compute it first tonight"], sh_queued: ["في الطابور: ينحسب أول واحد في التشغيل الجاي 3:30 الفجر.", "Queued: it will be computed first at the next run, 3:30 am."], sh_queued_ok: ["انضاف للطابور", "Added to the queue"],
  sh_err: ["ما قدرنا نحسبه آخر مرة (البيانات المالية ناقصة)، وبنجرب مرة ثانية.", "We could not compute it last time (missing statements); it will be retried."],
  sh_activity: ["النشاط", "Business"], sh_isfx: ["هذا زوج عملات، والفرز الشرعي يخص الأسهم بس. تداول العملات له أحكامه الخاصة (مثل التقابض)، فاسأل جهة شرعية.", "This is a currency pair; sharia screening is for shares only."], sh_iscmd: ["هذي سلعة مو سهم، والفرز الشرعي يخص الأسهم بس.", "This is a commodity, not a share; sharia screening is for shares only."],
  sh_db: ["قاعدة الفرز الأمريكية: {n} سهم محسوب من {u}، آخر تحديث {d}", "US screening database: {n} of {u} shares computed, updated {d}"],
  sh_own: ["إدخالك الخاص", "Your own entry"], sh_own_add: ["سجّل حكمه من مصدرك", "Record its ruling from your source"], sh_own_status: ["الحكم", "Ruling"], sh_own_src: ["المصدر (مثل يقين)", "Source (e.g. Yaqeen)"], sh_own_save: ["احفظ", "Save"], sh_own_del: ["احذف إدخالي", "Delete my entry"],
  sh_more: ["و{n} نتائج ثانية، اكتب أكثر عشان تضيّق البحث.", "and {n} more, keep typing to narrow it down."],
  sh_admin_h: ["قائمة الأسهم السعودية الشرعية", "Saudi sharia list"], sh_admin_p: ["كل ربع سنة: افتح صفحة أرقام، حدد الجدول كامل من أول شركة لآخر شركة، انسخه والصقه هنا.", "Each quarter: open the Argaam page, select the whole table, copy it and paste it here."],
  sh_admin_open: ["افتح صفحة أرقام", "Open the Argaam page"], sh_admin_read: ["اقرأ الجدول", "Read the table"], sh_admin_save: ["احفظ وانشر للمستخدمين", "Save and publish"],
  sh_admin_found: ["لقيت {n} شركة: الراجحي {r}، العصيمي {o}، البلاد {b}", "Found {n} companies: Al Rajhi {r}, Al-Osaimi {o}, Albilad {b}"], sh_admin_bad: ["ما قدرت أقرأ الجدول. تأكد إنك نسخت الجدول نفسه من صفحة أرقام.", "Could not read the table. Make sure you copied the table itself."],
  sh_admin_dates: ["تاريخ آخر تحديث لكل هيئة (من رأس الجدول في أرقام)", "Each board's last update date (from the Argaam table header)"],
  sh_admin_saved: ["انحفظت القائمة", "List saved"], sh_admin_pub: ["انحفظت وانشرت للمستخدمين. تظهر لهم خلال دقيقة أو دقيقتين.", "Saved and published. Users will see it within a couple of minutes."],
  sh_admin_nopub: ["انحفظت عندك، بس ما قدرت أنشرها للمستخدمين: الرمز ما له صلاحية على مستودع الموقع meras. أضفه للرمز من GitHub (نفس خطوات صلاحية Actions، بس في Repository access أضف meras).", "Saved, but could not publish: the token has no access to the site repository meras. Add it to the token in GitHub."]
});

const SH_BOARDS = ["rajhi", "osaimi", "bilad"];
const SH_ARGAAM = "https://www.argaam.com/ar/company/shariahcompanies";
let SHUNI = null, SHYQ = null, SHCI = null, SHAW = null, SHFD = null, SHUS = null, SHQ = null, SHQ_SHA, shTried = false, SHSA = null, SHOWN = null, SHOWN_SHA, SHSA_SHA, shQ = "", shPick = null, shAmt = "", shRatio = "", shLoading = false, shDraft = null;
try { SHSA = JSON.parse(localStorage.getItem("meras.shsa") || "null"); } catch (e) {}

async function loadSharia() {
  if (shLoading) return; shLoading = true; shTried = true;
  try { const r = await fetch("./sharia_sa.json?t=" + Date.now(), { cache: "no-store" }); if (r.ok) { const d = await r.json(); if (d && Array.isArray(d.rows)) SHSA = d; } } catch (e) {}
  try { const r = await fetch("./us_yaqeen.json?t=" + Date.now(), { cache: "no-store" }); if (r.ok) { const d = await r.json(); if (d && d.stocks) SHYQ = d; } } catch (e) {}
  try { const r = await fetch("./us_chartidea.json?t=" + Date.now(), { cache: "no-store" }); if (r.ok) { const d = await r.json(); if (d && d.stocks) SHCI = d; } } catch (e) {}
  try { const r = await fetch("./us_awaed.json?t=" + Date.now(), { cache: "no-store" }); if (r.ok) { const d = await r.json(); if (d && d.stocks) SHAW = d; } } catch (e) {}
  try { const r = await fetch("./us_funds.json?t=" + Date.now(), { cache: "no-store" }); if (r.ok) { const d = await r.json(); if (d && d.stocks) SHFD = d; } } catch (e) {}
  if (HOSTED && CFG.token) {
    try { const f = await readJson("sharia_sa.json"); if (f && f.data && Array.isArray(f.data.rows) && (!SHSA || (f.data.updated || "") >= (SHSA.updated || ""))) SHSA = f.data; SHSA_SHA = f ? f.sha : undefined; } catch (e) {}
    try { const un = await readJson("us_universe.json"); SHUNI = (un && un.data && un.data.stocks) || null; } catch (e) {}
    try { const u = await readJson("us_sharia.json"); SHUS = (u && u.data) || null; } catch (e) {}
    try { const qf = await readJson("us_queue.json"); SHQ = qf && Array.isArray(qf.data) ? qf.data.map(String) : []; SHQ_SHA = qf ? qf.sha : undefined; } catch (e) { SHQ = SHQ || []; }
    try { const o = await readJson("sharia_own.json"); SHOWN = (o && o.data) || {}; SHOWN_SHA = o ? o.sha : undefined; } catch (e) { SHOWN = SHOWN || {}; }
  }
  try { if (SHSA) localStorage.setItem("meras.shsa", JSON.stringify(SHSA)); } catch (e) {}
  shLoading = false; if (["sharia", "desk", "owner"].includes(route())) render();
}
const shOwner = () => typeof HOSTED !== "undefined" && HOSTED && !!CFG.token;
const shNorm = (x) => String(x || "").toLowerCase().replace(/[ً-ْـ]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي").replace(/^شركه\s+/, "").trim();

function shSearch(q) {
  const n = shNorm(q); if (!n) return [];
  const out = [], seen = new Set(), push = (r) => { if (!seen.has(r.m + r.s)) { seen.add(r.m + r.s); out.push(r); } };
  (SHSA && SHSA.rows || []).forEach((r) => { if (r.s === n || r.s.startsWith(n) || shNorm(r.n).includes(n)) push({ m: "SA", s: r.s, n: r.n, row: r }); });
  if (/^\d{4}$/.test(n)) { if (!out.length) push({ m: "SA", s: n, n: "", row: null }); }
  if (typeof US !== "undefined" && US && US.symbols) Object.entries(US.symbols).forEach(([s, v]) => { if ((s.toLowerCase().startsWith(n) || shNorm(v.n).includes(n))) push({ m: "US", s, n: v.n }); });
  if (SHFD) Object.entries(SHFD.stocks).forEach(([s, v]) => { if (s.toLowerCase().startsWith(n) || (n.length > 1 && /ذهب|gold/.test(n) && v.kind === "gold") || (n.length > 2 && (shNorm(v.n).includes(n) || (/اسلام|شرع|islam|shari/.test(n) && v.kind === "islamic")))) push({ m: "US", s, n: v.n || "" }); });
  if (SHYQ) Object.entries(SHYQ.stocks).forEach(([s, v]) => { if (out.length < 40 && (s.toLowerCase().startsWith(n) || (n.length > 2 && shNorm(v.n).includes(n)))) push({ m: "US", s, n: v.n || "" }); });
  if (SHUS && SHUS.stocks) Object.entries(SHUS.stocks).forEach(([s, v]) => { if (out.length < 40 && (s.toLowerCase().startsWith(n) || (n.length > 2 && shNorm(v.n).includes(n)))) push({ m: "US", s, n: v.n || "" }); });
  if (SHUNI) Object.entries(SHUNI).forEach(([s, v]) => { if (out.length < 40 && (s.toLowerCase() === n || (n.length > 2 && (s.toLowerCase().startsWith(n) || shNorm(v.n).includes(n))))) push({ m: "US", s, n: v.n || "" }); });
  if (SHOWN) Object.entries(SHOWN).forEach(([s, v]) => { if (s.toLowerCase().startsWith(n) || shNorm(v.n).includes(n)) push({ m: /^\d{4}$/.test(s) ? "SA" : "US", s, n: v.n || "" }); });

  if (/^[a-z]{1,5}(\.[a-z])?$/.test(n) && !out.some((r) => r.m === "US" && r.s.toLowerCase() === n) && !out.length) push({ m: "US", s: n.toUpperCase(), n: "" });
  out.sort((a, b) => (a.s.toLowerCase() === n ? -1 : b.s.toLowerCase() === n ? 1 : 0));
  return out;
}
const shTag = (st) => { const part = /^part(\d)$/.exec(st || ""); return '<span class="tag ' + (st === "ok" || st === "all" ? "up" : st === "no" || st === "none" ? "down" : part || st === "review" || st === "incomplete" ? "amber" : "") + '">' + esc(part ? t("sh_part").replace("{n}", part[1]) : t("sh_" + st)) + "</span>"; };
function shSaStatus(row) {
  if (!row) return "unlisted";
  const ticks = SH_BOARDS.filter((b) => row.b && row.b[b]).length;
  return ticks === SH_BOARDS.length ? "all" : ticks ? "part" + ticks : "none";
}
function shCard(r) {
  const own = SHOWN && SHOWN[r.s], owner = shOwner();
  let body = "", st = null, purify = null;
  if (r.m === "SA") {
    if (!SHSA) body += '<p class="small muted">' + esc(t("sh_empty_sa")) + "</p>";
    else {
      st = r.row ? shSaStatus(r.row) : "unlisted";
      if (!r.row) body += '<p class="small muted" style="margin:0">' + esc(t("sh_notfound")) + "</p>";
      body += '<div class="sh-boards">' + SH_BOARDS.map((b) => { const meta = (SHSA.boards || []).find((x) => x.k === b) || {}; const on = r.row && r.row.b && r.row.b[b]; return '<div class="sh-b"><span>' + esc(t("sh_b_" + b)) + (meta.asof ? ' <span class="small muted num">' + esc(meta.asof) + "</span>" : "") + '</span><span class="tag ' + (on ? "up" : "") + '">' + esc(t(on ? "sh_listed" : "sh_notlisted")) + "</span></div>"; }).join("") + "</div>" +
        '<p class="small muted" style="margin:0">' + esc(t("sh_src")) + ': <a href="' + SH_ARGAAM + '" target="_blank" rel="noopener">' + esc(t("sh_argaam")) + "</a>" + (SHSA.updated ? " · " + esc(t("sh_asof")) + ' <span class="num">' + esc(SHSA.updated) + "</span>" : "") + "</p>";
      if (!own) body += '<p class="small muted" style="margin:0">' + esc(t("sh_purify_na")) + "</p>";
    }
  } else {
    const usv = typeof US !== "undefined" && US && US.symbols && US.symbols[r.s];
    const est = owner && SHUS && SHUS.stocks && SHUS.stocks[r.s];
    const fd = SHFD && SHFD.stocks[r.s];
    if (fd) return '<div class="panel stack sh-card"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><h3><span class="num">' + esc(r.s) + "</span> " + esc(fd.n || "") + '</h3><span class="small muted">' + esc(t(fd.kind === "gold" ? "sh_fd_gold" : "sh_fd_isl")) + "</span></div>" + shTag(fd.st) + "</div>" +
      '<div class="sh-b"><span>' + esc(t(fd.kind === "gold" ? "sh_fd_src" : "sh_fd_board")) + '</span><b class="small">' + (fd.src || []).map((x) => esc(x) + shGo(x, r.s)).join(" · ") + "</b></div>" + (fd.basis ? '<p class="small muted" style="margin:0">' + esc(fd.basis) + "</p>" : "") +
      '<p class="small muted" style="margin:0">' + esc(t(fd.kind === "gold" ? "sh_fd_gold_pu" : "sh_fd_isl_pu")) + "</p>" + (fd.kind === "islamic" ? '<p class="small" style="margin:0"><b>' + esc(t("sh_fd_isl_note")) + "</b></p>" : "") +
      (SHFD.asof ? '<p class="small muted" style="margin:0">' + esc(t("sh_asof")) + ' <span class="num">' + esc(SHFD.asof) + "</span></p>" : "") + "</div>";
    if (usv && usv.k !== "stock") return '<div class="panel stack sh-card"><h3><span class="num">' + esc(r.s) + "</span> " + esc(usv.n || "") + '</h3><p class="small muted" style="margin:0">' + esc(t(usv.k === "fx" ? "sh_isfx" : "sh_iscmd")) + "</p></div>";
    if (est && est.n && !r.n) r.n = est.n;
    const yq = SHYQ && SHYQ.stocks[r.s], yx = SHYQ && SHYQ.x && SHYQ.x[r.s], ci = SHCI && SHCI.stocks[r.s];
    if (yq && yq.n && !r.n) r.n = yq.n;
    if (SHYQ) body += '<div class="sh-b"><span>' + esc(t("sh_yq_h")) + shGo("yaqeen", r.s) + (SHYQ.asof ? ' <span class="small muted num">' + esc(SHYQ.asof) + "</span>" : "") + "</span>" + (yq ? shTag("ok") : yx === "no" ? shTag("no") : yx ? '<span class="tag amber">' + esc(t(yx === "check" ? "sh_yq_check" : "sh_review")) + "</span>" : '<span class="tag">' + esc(t("sh_yq_none")) + "</span>") + "</div>" + (yq && yq.p != null ? '<p class="small muted" style="margin:0">' + esc(t("sh_yq_pu")).replace("{p}", '<b class="num">' + fmt(yq.p, 2) + "%</b>") + "</p>" : "");
    if (ci) { const pc = (v) => (v == null ? "–" : '<span class="num">' + fmt(v, 1) + "%</span>"); body += '<div class="sh-b"><span>' + esc(t("sh_ci_h")) + shGo("chartidea", r.s) + (SHCI.asof ? ' <span class="small muted num">' + esc(SHCI.asof) + "</span>" : "") + "</span>" + shTag(ci.st) + "</div>" + '<p class="small muted" style="margin:0">' + esc(t("sh_debt")) + ": " + pc(ci.debt) + " · " + esc(t("sh_ci_int")) + ": " + pc(ci.int) + " · " + esc(t("sh_purify")) + ": " + pc(ci.p) + (ci.mix ? " · " + esc(t("sh_ci_mix")) : "") + "</p>"; }
    const aw = SHAW && SHAW.stocks[r.s];
    if (aw) body += '<div class="sh-b"><span>' + esc(t("sh_aw_h")) + shGo("awaed", r.s) + (SHAW.asof ? ' <span class="small muted num">' + esc(SHAW.asof) + "</span>" : "") + "</span>" + shTag(aw.st) + "</div>" + '<p class="small muted" style="margin:0">' + esc(t("sh_purify")) + ': <span class="num">' + (aw.p == null ? "–" : fmt(aw.p, 2) + "%") + "</span>" + (aw.partial ? " · " + esc(t("sh_aw_part")) : "") + "</p>";
    const vd = usVerdict(r.s);
    if (SHYQ) body += '<p class="small muted" style="margin:0">' + esc(t(vd.st === "ok" ? (vd.split ? "sh_src_split" : vd.n > 1 ? "sh_src_all" : "sh_src_one") : "sh_src_none")) + "</p>";
    if (est && !est.err) {
      st = est.status;
      purify = est.purify;
      const pc = (v) => (v == null ? "–" : fmt(v, 1) + "%");
      body += '<div class="sh-est"><b class="small">' + esc(t("sh_est")) + "</b>" + '<div class="sh-b"><span>' + esc(t("sh_debt")) + '</span><b class="num ' + (est.debt_mc != null && est.debt_mc >= 30 ? "neg" : "") + '">' + pc(est.debt_mc) + ' <span class="muted small">/ 30%</span></b></div><div class="sh-b"><span>' + esc(t("sh_cash")) + '</span><b class="num ' + (est.cash_mc != null && est.cash_mc >= 30 ? "neg" : "") + '">' + pc(est.cash_mc) + ' <span class="muted small">/ 30%</span></b></div><div class="sh-b"><span>' + esc(t("sh_haram")) + '</span><b class="num ' + (est.haram_rev != null && est.haram_rev >= 5 ? "neg" : "") + '">' + pc(est.haram_rev) + ' <span class="muted small">/ 5%</span></b></div><p class="small muted" style="margin:0">' + esc(t("sh_est_note")) + (est.asof ? ' · <span class="num">' + esc(est.asof) + "</span>" : "") + "</p></div>";
      if (est.sub || est.sec) body += '<p class="small muted" style="margin:0">' + esc(t("sh_activity")) + ": " + esc(est.sub || est.sec) + (est.biz && est.biz !== "ok" ? " " + shTag(est.biz === "no" ? "no" : "review") : "") + "</p>";
    } else if (owner) {
      const queued = SHQ && SHQ.includes(r.s), err = est && est.err;
      body += '<p class="small muted" style="margin:0">' + esc(t(queued ? "sh_queued" : err ? "sh_err" : "sh_notyet")) + "</p>" + (queued ? "" : '<div><button class="btn sm primary" data-act="sh-queue" data-s="' + esc(r.s) + '">' + esc(t("sh_queue_btn")) + "</button></div>");
    }
    else if (!own) body += '<p class="small muted">' + esc(t("sh_notfound")) + "</p>";
  }
  if (r.m === "US" && SHYQ) { const vd = usVerdict(r.s); st = vd.st; purify = vd.st === "ok" ? vd.p : null; }
  if (own) { st = own.status || st; if (own.purify != null) purify = own.purify; body += '<div class="sh-own"><b class="small">' + esc(t("sh_own")) + "</b> " + shTag(own.status) + (own.purify != null ? ' <span class="small">' + esc(t("sh_purify")) + ': <b class="num">' + fmt(own.purify, 2) + "%</b></span>" : "") + (own.src ? ' <span class="small muted">· ' + esc(own.src) + (own.date ? " · " + esc(own.date) : "") + "</span>" : "") + "</div>"; }
  const link = r.m === "US" ? '<a class="btn sm" href="https://yaaqen.com/stocks/' + encodeURIComponent(r.s) + '" target="_blank" rel="noopener">' + esc(t("sh_yaqeen")) + " ↗</a>" : '<a class="btn sm" href="' + SH_ARGAAM + '" target="_blank" rel="noopener">' + esc(t("sh_argaam")) + " ↗</a>";
  const pick = shPick === r.m + r.s;
  return '<div class="panel stack sh-card"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><h3><span class="num">' + esc(r.s) + "</span> " + esc(r.n || "") + '</h3><span class="small muted">' + esc(t(r.m === "SA" ? "sh_sa" : "sh_us")) + '</span></div><div class="row" style="gap:6px">' + (st ? shTag(st) : "") + (purify != null ? '<span class="tag">' + esc(t("sh_purify")) + " " + fmt(purify, 2) + "%</span>" : "") + "</div></div>" + body +
    '<div class="row">' + link + '<button class="btn sm' + (pick ? " on" : "") + '" data-act="sh-pick" data-k="' + esc(r.m + r.s) + '" data-p="' + (purify == null ? "" : purify) + '">' + esc(t("sh_calc")) + "</button>" + (owner ? '<button class="btn sm ghost" data-act="sh-own" data-s="' + esc(r.s) + '" data-n="' + esc(r.n || "") + '">' + esc(t("sh_own_add")) + "</button>" : "") + "</div>" +
    (pick ? shCalc() : "") + (owner && shDraft && shDraft.s === r.s ? shOwnForm(own) : "") + "</div>";
}
function shCalcOut() { const a = parseFloat(shAmt), p = parseFloat(shRatio); return isFinite(a) && isFinite(p) ? fmt((a * p) / 100, 2) : "–"; }
function shCalc() {
  return '<div class="result sh-calc"><div class="field"><label for="sh-amt">' + esc(t("sh_amount")) + '</label><input id="sh-amt" data-sh="amt" type="number" min="0" step="1" inputmode="decimal" value="' + esc(shAmt) + '"></div><div class="field"><label for="sh-ratio">' + esc(t("sh_ratio")) + '</label><input id="sh-ratio" data-sh="ratio" type="number" min="0" max="100" step="0.01" inputmode="decimal" value="' + esc(shRatio) + '"></div><div><span>' + esc(t("sh_give")) + '</span><b id="sh-give">' + shCalcOut() + "</b></div></div>";
}
function shOwnForm(own) {
  own = own || {};
  return '<form class="row" data-form="sh-own" data-s="' + esc(shDraft.s) + '" data-n="' + esc(shDraft.n || "") + '" novalidate style="align-items:flex-end"><div class="field"><label for="so-st">' + esc(t("sh_own_status")) + '</label><select id="so-st">' + ["ok", "review", "no"].map((k) => '<option value="' + k + '"' + (own.status === k ? " selected" : "") + ">" + esc(t("sh_" + k)) + "</option>").join("") + '</select></div><div class="field" style="width:130px"><label for="so-p">' + esc(t("sh_purify")) + ' %</label><input id="so-p" type="number" min="0" max="100" step="0.01" inputmode="decimal" value="' + esc(own.purify == null ? "" : own.purify) + '"></div><div class="field" style="flex:1;min-width:140px"><label for="so-src">' + esc(t("sh_own_src")) + '</label><input id="so-src" value="' + esc(own.src || "") + '"></div><button class="btn sm primary" type="submit">' + esc(t("sh_own_save")) + "</button>" + (SHOWN && SHOWN[shDraft.s] ? '<button class="btn sm ghost" type="button" data-act="sh-own-del" data-s="' + esc(shDraft.s) + '">' + esc(t("sh_own_del")) + "</button>" : "") + "</form>";
}
function shResults() {
  const rs = shSearch(shQ), max = 8;
  if (!shQ.trim()) return "";
  const more = '<div class="row sh-more"><span class="small muted">' + esc(t(rs.length ? "sh_notit" : "sh_nores")) + '</span><a class="btn sm" href="https://yaaqen.com/stocks/all-stocks" target="_blank" rel="noopener">' + esc(t("sh_yaqeen_all")) + ' ↗</a><a class="btn sm ghost" href="' + SH_ARGAAM + '" target="_blank" rel="noopener">' + esc(t("sh_argaam")) + " ↗</a></div>";
  return '<div class="stack">' + rs.slice(0, max).map(shCard).join("") + (rs.length > max ? '<p class="small muted">' + esc(t("sh_more").replace("{n}", rs.length - max)) + "</p>" : "") + more + "</div>";
}
function shFinder() {
  if (!shTried) loadSharia();
  const db = shOwner() && SHUS ? '<p class="small muted" style="margin:0">' + esc(t("sh_db").replace("{n}", SHUS.count || 0).replace("{u}", SHUS.universe || "–").replace("{d}", whenText(SHUS.updated))) + "</p>" : "";
  return '<div class="panel stack">' + db + '<div class="field"><label for="sh-q">' + esc(t("sh_q")) + '</label><input id="sh-q" data-sh="q" type="search" autocomplete="off" placeholder="' + esc(t("sh_ph")) + '" value="' + esc(shQ) + '"></div><div id="sh-res">' + shResults() + "</div></div>";
}
function pageSharia() { if (!shTried) loadSharia(); return svcShell("sharia", '<p class="muted" style="max-width:70ch;margin:0">' + esc(t("sh_p")) + "</p>" + shFinder()); }

/* ----- owner: paste the Argaam table ----- */
let shPaste = null;
function shParse(text) {
  const rows = [];
  text.split(/\r?\n/).forEach((line) => {
    const m = line.match(/(^|\t|\s)(\d{4})(\t|\s)/); if (!m) return;
    const cells = line.split("\t");
    let ci = cells.findIndex((c) => /^\s*\d{4}\s*$/.test(c));
    let name = "", rest = [];
    if (ci >= 0) { name = (cells[ci + 1] || "").trim(); rest = cells.slice(ci + 2); }
    else { const mm = line.match(/(\d{4})\s+(.+?)(\s+[✔✓√].*)?$/); name = mm ? mm[2].trim() : ""; rest = []; }
    const tick = (c) => /[✔✓√✅]|نعم|متوافق|yes/i.test(c || "");
    const b = {}; SH_BOARDS.forEach((k, i) => { b[k] = tick(rest[i]) ? 1 : 0; });
    if (ci < 0) { const n = (line.match(/[✔✓√✅]/g) || []).length; SH_BOARDS.forEach((k, i) => { b[k] = i < n ? 1 : 0; }); }
    rows.push({ s: m[2], n: name.replace(/[✔✓√✅]/g, "").trim(), b });
  });
  const uniq = {}; rows.forEach((r) => { uniq[r.s] = r; });
  return Object.values(uniq);
}
function shAdmin() {
  const cnt = SHSA ? SHSA.rows.length : 0;
  const dates = (k) => { const b = (shPaste && shPaste.boards) || (SHSA && SHSA.boards) || []; return ((b.find((x) => x.k === k) || {}).asof) || ""; };
  return owPanel(t("sh_admin_h"), '<p class="muted" style="margin:0">' + esc(t("sh_admin_p")) + '</p><div class="row"><a class="btn sm" href="' + SH_ARGAAM + '" target="_blank" rel="noopener">' + esc(t("sh_admin_open")) + " ↗</a>" + (SHSA ? '<span class="small muted">' + esc(t("sh_asof")) + ' <span class="num">' + esc(SHSA.updated || "") + "</span> · " + cnt + "</span>" : "") + "</div>" +
    '<textarea id="sh-paste" rows="5" style="width:100%;border:1px solid var(--line);border-radius:8px;padding:8px;background:var(--surface)" placeholder="2150\tشركة الصناعات الزجاجية الوطنية\t✔\t✔\t✔"></textarea>' +
    '<p class="small muted" style="margin:0">' + esc(t("sh_admin_dates")) + '</p><div class="form-grid">' + SH_BOARDS.map((k) => '<div class="field"><label for="sh-d-' + k + '">' + esc(t("sh_b_" + k)) + '</label><input id="sh-d-' + k + '" type="date" value="' + esc(dates(k)) + '"></div>').join("") + "</div>" +
    '<div class="row"><button class="btn" data-act="sh-read">' + esc(t("sh_admin_read")) + "</button>" + (shPaste ? '<span class="small">' + esc(t("sh_admin_found").replace("{n}", shPaste.rows.length).replace("{r}", shPaste.rows.filter((r) => r.b.rajhi).length).replace("{o}", shPaste.rows.filter((r) => r.b.osaimi).length).replace("{b}", shPaste.rows.filter((r) => r.b.bilad).length)) + '</span><button class="btn primary" data-act="sh-save">' + esc(t("sh_admin_save")) + "</button>" : "") + "</div>");
}
async function ghRepo(repo, path, method, body) {
  const r = await fetch("https://api.github.com/repos/" + encodeURIComponent(CFG.owner) + "/" + encodeURIComponent(repo) + "/contents/" + path + (method ? "" : "?t=" + Date.now()), { method: method || "GET", cache: "no-store", headers: { Authorization: "Bearer " + CFG.token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" }, body: body ? JSON.stringify(body) : undefined }).catch(() => { throw { code: "net" }; });
  if (r.status === 404 && !method) return null;
  if (!r.ok) throw { code: String(r.status) };
  return r.json();
}
async function shSave() {
  if (!shPaste) return;
  const boards = SH_BOARDS.map((k) => ({ k, asof: (document.getElementById("sh-d-" + k) || {}).value || "" }));
  const data = { updated: today(), source: SH_ARGAAM, note: "قوائم الهيئات الشرعية كما نشرتها أرقام", boards, rows: shPaste.rows.sort((a, b) => (a.s < b.s ? -1 : 1)) };
  const content = b64e(JSON.stringify(data) + "\n");
  try { const cur = await readJson("sharia_sa.json").catch(() => null); await gh("sharia_sa.json", "PUT", { message: "sharia list", content, sha: cur ? cur.sha : undefined }); } catch (e) { toast(errText(e)); return; }
  SHSA = data; try { localStorage.setItem("meras.shsa", JSON.stringify(SHSA)); } catch (e) {}
  try {
    const pub = await ghRepo("meras", "sharia_sa.json");
    await ghRepo("meras", "sharia_sa.json", "PUT", { message: "قائمة الأسهم السعودية الشرعية " + today(), content, sha: pub ? pub.sha : undefined });
    toast(t("sh_admin_pub"));
  } catch (e) { toast(t(e.code === "403" || e.code === "404" ? "sh_admin_nopub" : "sh_admin_saved")); }
  shPaste = null; render();
}

document.addEventListener("input", (e) => {
  const k = e.target.dataset && e.target.dataset.sh; if (!k) return;
  if (k === "q") { shQ = e.target.value; shPick = null; shDraft = null; const box = document.getElementById("sh-res"); if (box) box.innerHTML = shResults(); }
  else { if (k === "amt") shAmt = e.target.value; else shRatio = e.target.value; const g = document.getElementById("sh-give"); if (g) g.textContent = shCalcOut(); }
});
document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="sh-"]'); if (!el) return;
  const a = el.dataset.act;
  const repaint = () => { const box = document.getElementById("sh-res"); if (box) box.innerHTML = shResults(); else render(); };
  if (a === "sh-pick") { shPick = shPick === el.dataset.k ? null : el.dataset.k; if (el.dataset.p !== "") shRatio = el.dataset.p; repaint(); }
  else if (a === "sh-own") { shDraft = shDraft && shDraft.s === el.dataset.s ? null : { s: el.dataset.s, n: el.dataset.n }; repaint(); }
  else if (a === "sh-own-del") { delete SHOWN[el.dataset.s]; shDraft = null; repaint(); await shSaveOwn(); }
  else if (a === "sh-read") { const rows = shParse((document.getElementById("sh-paste") || {}).value || ""); if (!rows.length) { toast(t("sh_admin_bad")); return; } shPaste = { rows }; render(); }
  else if (a === "sh-save") shSave();
  else if (a === "sh-queue") {
    const sym = el.dataset.s; SHQ = SHQ || []; if (SHQ.includes(sym)) return;
    const next = SHQ.concat([sym]);
    try { const cur = await readJson("us_queue.json").catch(() => null); const r = await gh("us_queue.json", "PUT", { message: "sharia queue " + sym + " [skip ci]", content: b64e(JSON.stringify(next) + "\n"), sha: cur ? cur.sha : undefined }); SHQ = next; toast(t("sh_queued_ok")); } catch (err) { toast(errText(err)); }
    repaint();
  }
});
async function shSaveOwn() {
  try { const r = await gh("sharia_own.json", "PUT", { message: "sharia own", content: b64e(JSON.stringify(SHOWN, null, 1) + "\n"), sha: SHOWN_SHA }); SHOWN_SHA = r && r.content ? r.content.sha : SHOWN_SHA; toast(t("dk_saved")); } catch (e) { toast(errText(e)); }
}
document.addEventListener("submit", async (e) => {
  const f = e.target.closest && e.target.closest('[data-form="sh-own"]'); if (!f) return;
  e.preventDefault();
  const p = parseFloat(document.getElementById("so-p").value);
  SHOWN = SHOWN || {}; SHOWN[f.dataset.s] = { n: f.dataset.n, status: document.getElementById("so-st").value, purify: isFinite(p) ? p : null, src: document.getElementById("so-src").value.trim(), date: today() };
  shDraft = null; const box = document.getElementById("sh-res"); if (box) box.innerHTML = shResults(); await shSaveOwn();
});

/* الأسهم الأمريكية: المتوافق بس اللي في قائمة يقين، والباقي يختفي من الرادار والفرص والأكثر ارتفاعاً */
async function loadYaqeen() { if (SHYQ) return; try { const c = await fetch("./us_awaed.json", { cache: "no-cache" }); if (c.ok) { const d = await c.json(); if (d && d.stocks) SHAW = d; } } catch (e) {} try { const c = await fetch("./us_funds.json", { cache: "no-cache" }); if (c.ok) { const d = await c.json(); if (d && d.stocks) SHFD = d; } } catch (e) {} try { const c = await fetch("./us_chartidea.json", { cache: "no-cache" }); if (c.ok) { const d = await c.json(); if (d && d.stocks) SHCI = d; } } catch (e) {} try { const r = await fetch("./us_yaqeen.json", { cache: "no-cache" }); if (r.ok) { const d = await r.json(); if (d && d.stocks) { SHYQ = d; if (["screener", "movers", "radar", "desk", "home"].includes(route())) render(); } } } catch (e) {} }
/* يتعدد المرجع: السهم متوافق إذا حكم بتوافقه مصدر معتمد (يقين، شارت آيديا، عوائد، أو مصدر الصندوق)، ونعرض حكم كل مصدر، ونسبة التطهير الأعلى (الأحوط) */
const SH_LINKS = { yaqeen: (s) => "https://yaaqen.com/stocks/" + encodeURIComponent(s), chartidea: () => "https://chart-idea.com", awaed: () => "https://apps.apple.com/sa/app/id1610134585", Musaffa: () => "https://musaffa.com", Zoya: () => "https://zoya.finance" };
function shGo(k, s) { const f = SH_LINKS[k]; return f ? ' <a class="sh-go" href="' + esc(f(s)) + '" target="_blank" rel="noopener" title="' + esc(t("sh_go")) + '" aria-label="' + esc(t("sh_go")) + '">↗</a>' : ""; }
function usVerdict(s) {
  const src = [];
  const yq = SHYQ && SHYQ.stocks[s], yx = SHYQ && SHYQ.x && SHYQ.x[s];
  if (yq) src.push({ k: "yaqeen", st: "ok", p: yq.p }); else if (yx && yx !== "check") src.push({ k: "yaqeen", st: yx === "no" ? "no" : "review", p: null });
  const ci = SHCI && SHCI.stocks[s]; if (ci && ci.st) src.push({ k: "chartidea", st: ci.st, p: ci.p });
  const aw = SHAW && SHAW.stocks[s]; if (aw && aw.st) src.push({ k: "awaed", st: aw.st, p: aw.p });
  const fd = SHFD && SHFD.stocks[s]; if (fd) src.push({ k: "fund", st: fd.st, p: null, kind: fd.kind });
  const ok = src.filter((x) => x.st === "ok");
  if (ok.length) { const ps = ok.map((x) => x.p).filter((x) => x != null); return { st: "ok", src: ok.map((x) => x.k).join(","), n: ok.length, split: ok.length < src.length, kind: fd && fd.kind, p: ps.length ? Math.max(...ps) : null }; }
  if (src.length) return { st: src.some((x) => x.st === "no") ? "no" : "review", src: src[0].k, p: null };
  return { st: "review", src: null, p: null };
}

function usHide(s, m, flag) { if (m !== "US") return false; if (!SHYQ) return flag !== "ok"; const v = usVerdict(s); return v.st !== "ok" || v.kind === "islamic"; }
setTimeout(loadYaqeen, 1500);
