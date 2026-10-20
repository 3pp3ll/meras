/* ===== مِراس: لوحة المالك =====
   صفحة خاصة بصاحب المنصة. تظهر فقط على جهاز فيه رمز الوصول لمستودع البيانات.
   البيانات، قوائم المتابعة، النسخ والمزامنة، المحتوى، والمستخدمون والاشتراكات.
   أكواد الربط تتشفر على الجهاز بكلمة سر الخزنة قبل ما تنحفظ في owner.json. */
Object.assign(UI, {
  ow_h: ["لوحة المالك", "Owner dashboard"], ow_p: ["كل شي عن المنصة في مكان واحد. هذي الصفحة لك أنت بس.", "Everything about the platform in one place. This page is for you only."],
  ow_need: ["لوحة المالك تفتح بس على جهاز مربوط بمستودع البيانات. اربطه من الإعدادات أول.", "The owner dashboard only opens on a device connected to the data repository. Connect it in Settings first."],
  ow_preview: ["لوحة المالك تشتغل في النسخة المنشورة على GitHub، مو في هذي المعاينة.", "The owner dashboard works in the version published on GitHub, not in this preview."],
  ow_t_data: ["البيانات", "Data"], ow_t_lists: ["قوائم المتابعة", "Watchlists"], ow_t_backup: ["النسخ والمزامنة", "Backup and sync"], ow_t_content: ["المحتوى", "Content"], ow_t_users: ["المستخدمون", "Users"],
  ow_loading: ["جارٍ القراءة من المستودع…", "Reading the repository…"], ow_reload: ["حدّث", "Refresh"],
  ow_jobs: ["التحديث التلقائي", "Automatic updates"], ow_job: ["المهمة", "Job"], ow_sched: ["الموعد", "Schedule"], ow_lastrun: ["آخر تشغيل", "Last run"], ow_result: ["النتيجة", "Result"], ow_fileat: ["آخر تحديث للملف", "File updated"],
  ow_run: ["شغّل الآن", "Run now"], ow_ran: ["انطلب التشغيل. يبان هنا خلال دقيقة.", "Run requested. It shows here within a minute."],
  ow_ok: ["نجح", "Succeeded"], ow_fail: ["فشل", "Failed"], ow_busy: ["يشتغل", "Running"], ow_cancel: ["انلغى", "Cancelled"], ow_none: ["ما اشتغل", "No runs"],
  ow_runs_403: ["عشان تشوف حالة التشغيل وتشغّل يدوياً، أضف للرمز صلاحية Actions (Read and write) من إعدادات الرمز في GitHub. باقي اللوحة يشتغل بدونها.", "To see run status and run jobs by hand, add the Actions permission (Read and write) to the token in GitHub. The rest of the dashboard works without it."],
  j_prices: ["الأسعار والشموع", "Prices and candles"], j_technicals: ["التحليل الفني", "Technicals"], j_dividends: ["التوزيعات", "Dividends"], j_metals: ["المعادن", "Metals"], j_us: ["السوق الأمريكي والفوركس", "US market and forex"], s_us: ["3:30 الفجر، الثلاثاء إلى السبت", "3:30 am, Tue to Sat"],
  s_prices: ["7 مرات يومياً، الأحد إلى الخميس", "7 times a day, Sun to Thu"], s_technicals: ["3 مرات يومياً، الأحد إلى الخميس", "3 times a day, Sun to Thu"], s_dividends: ["4:30 م، الأحد إلى الخميس", "4:30 pm, Sun to Thu"], s_metals: ["كل ساعتين، الاثنين إلى الجمعة", "Every 2 hours, Mon to Fri"],
  ow_hist: ["تاريخ الأسهم", "Share history"], ow_sym: ["السهم", "Share"], ow_candles: ["عدد الشموع", "Candles"], ow_lastc: ["آخر شمعة", "Last candle"], ow_state: ["الحالة", "Status"],
  ow_h_ok: ["سليم", "OK"], ow_h_short: ["تاريخ قصير", "Short history"], ow_h_old: ["متأخر", "Behind"], ow_h_missing: ["بدون تاريخ", "No history"],
  ow_h_tip: ["التاريخ القصير أقل من 60 شمعة: استورد البيانات التاريخية من موقع تداول في صفحة الشارت.", "Short history means fewer than 60 candles: import historical data from the Saudi Exchange site on the chart page."],
  ow_go_import: ["استيراد التاريخ", "Import history"],
  ow_l_wl: ["الشارت والأسعار", "Chart and prices"], ow_l_wl_p: ["الأسهم اللي تنسحب أسعارها وشموعها. الحد {n} سهم.", "Shares whose prices and candles are fetched. Limit {n}."],
  ow_l_tech: ["التحليل الفني", "Technicals"], ow_l_tech_p: ["الأسهم اللي ينحسب لها الملخص الفني.", "Shares that get a technical summary."],
  ow_l_div: ["تنبيهات التوزيعات", "Dividend alerts"], ow_l_div_p: ["الأسهم المميزة بنجمة في التوزيعات.", "Shares starred on the dividends page."],
  ow_add_sym: ["رمز السهم", "Share code"], ow_add: ["أضف", "Add"], ow_rm: ["شيل", "Remove"], ow_saved: ["انحفظ", "Saved"], ow_bad_sym: ["اكتب رمز سهم من 4 أرقام", "Enter a 4-digit share code"], ow_dup: ["السهم موجود في القائمة", "Already in the list"],
  ow_lists_note: ["التغيير ينحفظ في مستودعك على طول، ويطبق مع التشغيل الجاي.", "Changes are saved to your repository at once and apply on the next run."],
  ow_size: ["حجم بياناتك المتزامنة", "Synced data size"], ow_backup_all: ["نزّل نسخة كاملة", "Download a full backup"], ow_backup_p: ["ملف واحد فيه تقدمك وسجلك وقوائم المتابعة وسجل المستخدمين. أكواد الربط تبقى مشفرة داخله.", "One file with your progress, journal, watchlists and user register. Connection keys stay encrypted inside it."],
  ow_restore: ["استرجاع نسخة", "Restore a backup"], ow_journal_n: ["صفقات في السجل", "Journal trades"], ow_done_n: ["دروس مكتملة", "Lessons done"],
  ow_c_track: ["المسار", "Track"], ow_c_lvl: ["الدرجة {n}", "Step {n}"], ow_c_total: ["المجموع", "Total"], ow_c_other: ["باقي المحتوى", "Other content"],
  ow_c_lessons: ["درس", "lessons"], ow_c_guides: ["شروحات", "Guides"], ow_c_terms: ["مصطلحات القاموس", "Glossary terms"], ow_c_inds: ["مؤشرات في الشارت", "Chart indicators"], ow_c_strats: ["استراتيجيات في المختبر", "Lab strategies"],
  ow_c_note: ["الخانة الفاضية معناها الدرجة لسا ما فيها دروس. الرقم الثاني هو اللي خلصته أنت.", "An empty cell means the step has no lessons yet. The second number is how many you have done."],
  ow_u_n: ["المستخدمون", "Users"], ow_u_active: ["نشط", "Active"], ow_u_trial: ["تجربة", "Trial"], ow_u_paused: ["موقوف", "Paused"], ow_u_soon: ["ينتهي خلال 7 أيام", "Ends within 7 days"], ow_u_month: ["الدخل الشهري", "Monthly income"],
  ow_u_add: ["أضف مستخدم", "Add a user"], ow_u_edit: ["عدّل", "Edit"], ow_u_del: ["احذف", "Delete"], ow_u_del_sure: ["متأكد؟ اضغط مرة ثانية", "Sure? Press again"], ow_u_save: ["احفظ", "Save"], ow_u_cancel: ["إلغاء", "Cancel"],
  ow_u_name: ["الاسم", "Name"], ow_u_contact: ["التواصل (بريد أو جوال)", "Contact (email or phone)"], ow_u_plan: ["الباقة", "Plan"], ow_u_status: ["الحالة", "Status"], ow_u_start: ["بداية الاشتراك", "Start"], ow_u_end: ["نهاية الاشتراك", "End"], ow_u_amount: ["المبلغ الشهري (ريال)", "Monthly amount (SAR)"], ow_u_note: ["ملاحظة", "Note"],
  ow_u_empty: ["ما فيه مستخدمين للحين. أضف أول واحد من الزر فوق.", "No users yet. Add the first one with the button above."], ow_u_need_name: ["اكتب الاسم", "Enter a name"],
  ow_u_ends: ["ينتهي", "Ends"], ow_u_ended: ["انتهى", "Ended"], ow_u_left: ["باقي {n} يوم", "{n} days left"],
  ow_k_h: ["منصات الربط", "Connected platforms"], ow_k_platform: ["اسم المنصة", "Platform"], ow_k_key: ["كود الربط", "Connection key"], ow_k_add: ["أضف الكود", "Add key"], ow_k_none: ["ما فيه أكواد مضافة.", "No keys added."],
  ow_k_copy: ["انسخ", "Copy"], ow_k_copied: ["انسخ الكود", "Key copied"], ow_k_need: ["اكتب اسم المنصة والكود", "Enter the platform and the key"], ow_k_locked: ["افتح الخزنة عشان تضيف أو تنسخ الأكواد.", "Unlock the vault to add or copy keys."],
  ow_v_h: ["خزنة الأكواد", "Key vault"], ow_v_new: ["أنشئ كلمة سر للخزنة. كل كود ربط يتشفر فيها على جهازك قبل ما ينحفظ في المستودع.", "Create a vault password. Every connection key is encrypted with it on your device before it is saved to the repository."],
  ow_v_warn: ["كلمة السر ما تنحفظ في أي مكان. إذا نسيتها ما تقدر ترجع الأكواد، وتحتاج تضيفها من جديد.", "The password is not stored anywhere. If you forget it the keys cannot be recovered and you will need to add them again."],
  ow_v_pass: ["كلمة السر", "Password"], ow_v_pass2: ["أعد كتابتها", "Repeat it"], ow_v_create: ["أنشئ الخزنة", "Create vault"], ow_v_open: ["افتح الخزنة", "Unlock"], ow_v_lock: ["اقفل الخزنة", "Lock"],
  ow_v_short: ["كلمة السر لازم 8 أحرف أو أكثر", "The password must be 8 characters or more"], ow_v_mismatch: ["الكلمتين مو متطابقتين", "The passwords do not match"], ow_v_wrong: ["كلمة السر غلط", "Wrong password"], ow_v_opened: ["الخزنة مفتوحة", "Vault unlocked"],
  ow_v_locked_tag: ["مقفلة", "Locked"], ow_v_open_tag: ["مفتوحة", "Unlocked"],
  ow_v_how: ["الكود محفوظ هنا للرجوع له. كل مستخدم يحط كوده بنفسه في إعدادات جهازه، لأن المنصة للحين ما فيها حسابات حقيقية لكل شخص.", "Keys are stored here for reference. Each user still enters their own key in their device settings, because the platform does not have real per-person accounts yet."],
  ow_u_keymode: ["طريقة الربط", "Connection"], ow_km_own: ["كوده الخاص", "Own key"], ow_km_owner: ["كود من المالك", "Key from the owner"],
  ow_u_budget: ["رصيد كوده في OpenRouter ($)", "OpenRouter key credit ($)"],
  ow_km_tip: ["كود من المالك: تسوي له في OpenRouter مفتاح خاص فيه بحد صرف من 5 إلى 50 دولار حسب استخدامه، وتحطه في منصات الربط تحت، وتزوده كل شهر. يستخدمه للربط بس وما يقدر يسحب الرصيد.", "Key from the owner: create a dedicated OpenRouter key for this user with a spending limit of 5 to 50 dollars depending on use, add it under connected platforms below, and top it up each month. It works for connections only and the credit cannot be withdrawn."],
  ow_road_h: ["القادم", "Coming next"],
  ow_road: [
    ["مكتبي: محفظتي وشارتاتي، السوق الأمريكي، ودروس العقود", "My desk: portfolio, charts, US market and options lessons"],
    ["استراتيجيات المختبر للفوركس والمعادن، تتحدث كل أسبوع مع التقرير", "Lab strategies for forex and metals, updated weekly with the report"],
    ["خادم خارجي (Supabase): تسجيل دخول، تأكيد الإيميل، نسيت كلمة المرور، وكود المالك يشتغل من الخادم", "External server (Supabase): sign-in, email confirmation, password reset, and the owner key served from the server"]
  ],
  ow_road_done: ["جاهز", "Ready"], ow_road_next: ["قيد التنفيذ", "In progress"], ow_road_later: ["لاحقاً", "Later"],
  ow_conflict: ["الملف تغير من جهاز ثاني. حدّث الصفحة وجرب مرة ثانية.", "The file changed on another device. Refresh and try again."]
});

const OW_JOBS = ["prices", "technicals", "dividends", "metals", "us"];
const OW_LISTS = [["watchlist.json", "ow_l_wl", "ow_l_wl_p"], ["techlist.json", "ow_l_tech", "ow_l_tech_p"], ["divwatch.json", "ow_l_div", "ow_l_div_p"]];
const OW_PLATFORMS = ["OpenRouter", "سهمك SAHMK", "TradingView", "أرقام Argaam", "Twelve Data", "Alpha Vantage"];
let OW = { loaded: false, loading: false, files: {}, lists: {}, runs: null, runsErr: null, own: null, ownSha: null, stateSize: null };
let owTab = "data", owEdit = null, owAdding = false, owDel = null, VAULT = null; // VAULT = CryptoKey, memory only

async function ghApi(path, method, body) {
  let r;
  try {
    r = await fetch("https://api.github.com/repos/" + encodeURIComponent(CFG.owner) + "/" + encodeURIComponent(CFG.repo) + path, {
      method: method || "GET", cache: "no-store",
      headers: { Authorization: "Bearer " + CFG.token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
      body: body ? JSON.stringify(body) : undefined
    });
  } catch (e) { throw { code: "net" }; }
  if (!r.ok) throw { code: String(r.status) };
  return r.status === 204 ? null : r.json();
}

async function loadOwner(force) {
  if (!HOSTED || !CFG.token || OW.loading || (OW.loaded && !force)) return;
  OW.loading = true; if (force) render();
  if (typeof loadUS === "function") await loadUS();
  const get = async (p) => { try { return await readJson(p); } catch (e) { return null; } };
  const [pr, te, dv, mt, ow, st, ...ls] = await Promise.all([get("prices.json"), get("technicals.json"), get("dividends.json"), get("metals.json"), get("owner.json"), gh("state.json").catch(() => null)].concat(OW_LISTS.map((x) => get(x[0]))));
  OW.files = { prices: pr && pr.data, technicals: te && te.data, dividends: dv && dv.data, metals: mt && mt.data, us: typeof US !== "undefined" ? US : null };
  OW_LISTS.forEach((x, i) => { OW.lists[x[0]] = { data: ls[i] && Array.isArray(ls[i].data) ? ls[i].data.map(String) : [], sha: ls[i] ? ls[i].sha : undefined }; });
  OW.own = (ow && ow.data) || { version: 1, users: [] }; if (!Array.isArray(OW.own.users)) OW.own.users = []; OW.ownSha = ow ? ow.sha : undefined;
  OW.stateSize = st ? st.size : null;
  try { const r = await ghApi("/actions/runs?per_page=50"); OW.runs = r.workflow_runs || []; OW.runsErr = null; } catch (e) { OW.runs = null; OW.runsErr = e.code; }
  OW.loading = false; OW.loaded = true;
  if (route() === "owner") render();
}
window.addEventListener("hashchange", () => { if (route() === "owner") loadOwner(); });

/* ----- small helpers ----- */
const owName = (sym) => {
  const q = typeof quoteOf === "function" && quoteOf(sym); if (q && q.name) return Array.isArray(q.name) ? L(q.name) : String(q.name);
  for (const f of [OW.files.dividends, OW.files.technicals]) { const s = f && Array.isArray(f.stocks) && f.stocks.find((x) => String(x.s || x.symbol) === sym); const nm = s && (s.name || s.n); if (nm) return Array.isArray(nm) ? L(nm) : String(nm); }
  return "";
};
const owDays = (d) => Math.round((new Date(d + "T00:00:00") - new Date(today() + "T00:00:00")) / 864e5);
const owTag = (cls, k) => '<span class="tag ' + cls + '">' + esc(t(k)) + "</span>";
const owStamp = (ts) => (ts ? whenHtml(ts) : esc(t("never")));
function owPanel(title, inner, extra) { return '<div class="panel stack"><div class="row" style="justify-content:space-between"><h3>' + esc(title) + "</h3>" + (extra || "") + "</div>" + inner + "</div>"; }

/* ----- tabs ----- */
function owData() {
  const runOf = (job) => (OW.runs || []).find((r) => (r.path || "").endsWith("/" + job + ".yml"));
  const res = (r) => !r ? owTag("", "ow_none") : r.status !== "completed" ? owTag("amber", "ow_busy") : r.conclusion === "success" ? owTag("up", "ow_ok") : r.conclusion === "cancelled" ? owTag("", "ow_cancel") : owTag("down", "ow_fail");
  const rows = OW_JOBS.map((j) => { const r = runOf(j), f = OW.files[j]; return "<tr><td><b>" + esc(t("j_" + j)) + '</b></td><td class="small muted">' + esc(t("s_" + j)) + "</td><td>" + (OW.runs ? (r ? owStamp(r.updated_at || r.created_at) : "–") : "–") + "</td><td>" + (OW.runs ? (r && r.html_url ? '<a href="' + esc(r.html_url) + '" target="_blank" rel="noopener">' + res(r) + "</a>" : res(r)) : "–") + "</td><td>" + owStamp(f && f.fetched_at) + "</td><td>" + (OW.runsErr ? "" : '<button class="btn sm" data-act="ow-run" data-job="' + j + '">' + esc(t("ow_run")) + "</button>") + "</td></tr>"; }).join("");
  const jobs = owPanel(t("ow_jobs"), (OW.runsErr === "403" || OW.runsErr === "404" ? '<div class="notice">' + esc(t("ow_runs_403")) + "</div>" : "") + '<div class="tablewrap"><table><thead><tr><th>' + esc(t("ow_job")) + "</th><th>" + esc(t("ow_sched")) + "</th><th>" + esc(t("ow_lastrun")) + "</th><th>" + esc(t("ow_result")) + "</th><th>" + esc(t("ow_fileat")) + "</th><th></th></tr></thead><tbody>" + rows + "</tbody></table></div>");
  const hist = LIVE.history || {}, wl = (OW.lists["watchlist.json"] || {}).data || [];
  const syms = Array.from(new Set(wl.concat(Object.keys(hist)))).filter((x) => /^\d{4}$/.test(x));
  const hrows = syms.map((s) => {
    const h = hist[s] || [], last = h.length ? h[h.length - 1].d : null, age = last ? -owDays(last) : null;
    const st = !h.length ? owTag("down", "ow_h_missing") : h.length < 60 ? owTag("amber", "ow_h_short") : age > 4 ? owTag("amber", "ow_h_old") : owTag("up", "ow_h_ok");
    return '<tr><td><span class="num">' + esc(s) + "</span> " + esc(owName(s)) + '</td><td class="num">' + h.length + '</td><td class="num">' + esc(last || "–") + "</td><td>" + st + "</td></tr>";
  }).join("");
  const histP = owPanel(t("ow_hist"), '<div class="tablewrap"><table><thead><tr><th>' + esc(t("ow_sym")) + "</th><th>" + esc(t("ow_candles")) + "</th><th>" + esc(t("ow_lastc")) + "</th><th>" + esc(t("ow_state")) + "</th></tr></thead><tbody>" + hrows + '</tbody></table></div><p class="small muted">' + esc(t("ow_h_tip")) + "</p>", '<a class="btn sm" href="#chart">' + esc(t("ow_go_import")) + "</a>");
  return jobs + histP;
}

function owLists() {
  return '<p class="small muted">' + esc(t("ow_lists_note")) + '</p><div class="ow-lists">' + OW_LISTS.map(([file, h, p], i) => {
    const l = (OW.lists[file] || {}).data || [];
    return '<div class="panel stack"><div><h3>' + esc(t(h)) + ' <span class="tag">' + l.length + '</span></h3><p class="small muted">' + esc(t(p).replace("{n}", WL_MAX)) + '</p></div><div class="row" style="gap:6px">' + l.map((s) => '<span class="chip"><span><span class="num">' + esc(s) + "</span> " + esc(owName(s)) + '</span><button type="button" data-act="ow-rm" data-file="' + file + '" data-s="' + esc(s) + '" aria-label="' + esc(t("ow_rm") + " " + s) + '">×</button></span>').join("") + '</div><form class="row" data-form="ow-list" data-file="' + file + '" novalidate><input id="ow-in-' + i + '" inputmode="numeric" maxlength="4" placeholder="' + esc(t("ow_add_sym")) + '" aria-label="' + esc(t("ow_add_sym")) + '" style="width:120px" dir="ltr"><button class="btn sm" type="submit">' + esc(t("ow_add")) + "</button></form></div>";
  }).join("") + "</div>";
}

function owBackup() {
  return '<div class="result" id="sync-status">' + statusHtml() + '</div><div class="stats" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div><span>' + esc(t("ow_size")) + "</span><b>" + (OW.stateSize != null ? fmt(OW.stateSize / 1024, 1) + " KB" : "–") + "</b></div><div><span>" + esc(t("ow_journal_n")) + "</span><b>" + S.journal.length + "</b></div><div><span>" + esc(t("ow_done_n")) + "</span><b>" + LESSONS.filter((l) => isDone(l.id)).length + "</b></div></div>" +
    owPanel(t("backup_h"), '<p class="muted">' + esc(t("ow_backup_p")) + '</p><div class="row"><button class="btn primary" data-act="ow-backup">⤓ ' + esc(t("ow_backup_all")) + '</button><button class="btn" data-act="sync-now">' + esc(t("set_sync")) + '</button><a class="btn ghost" href="#progress">' + esc(t("ow_restore")) + '</a><a class="btn ghost" href="#settings">' + esc(t("set_h")) + "</a></div>");
}

function owContent() {
  const cell = (tr, n) => { const ls = lessonsOf(tr, n); if (!ls.length) return '<td class="muted">–</td>'; const d = ls.filter((l) => isDone(l.id)).length; return '<td class="num">' + ls.length + ' <span class="small muted">/ ' + d + "</span></td>"; };
  const rows = TRACKS.map((tr) => { const all = lessonsOf(tr.id), d = all.filter((l) => isDone(l.id)).length; return "<tr><td><b>" + esc(L(tr.name)) + "</b></td>" + [1, 2, 3, 4, 5].map((n) => cell(tr.id, n)).join("") + '<td class="num"><b>' + all.length + '</b> <span class="small muted">/ ' + d + "</span></td></tr>"; }).join("");
  const nInd = typeof IND_KEYS !== "undefined" ? IND_KEYS.length : 0, nStr = typeof STRATS !== "undefined" ? (Array.isArray(STRATS) ? STRATS.length : Object.keys(STRATS).length) : 0;
  const other = [["ow_c_guides", (typeof GUIDES !== "undefined" ? GUIDES.length : 0) + 1], ["ow_c_terms", GLOSSARY.length], ["ow_c_inds", nInd]].concat(nStr ? [["ow_c_strats", nStr]] : []);
  return owPanel(t("nav_tracks"), '<div class="tablewrap"><table><thead><tr><th>' + esc(t("ow_c_track")) + "</th>" + [1, 2, 3, 4, 5].map((n) => "<th>" + esc(t("ow_c_lvl").replace("{n}", n)) + "</th>").join("") + "<th>" + esc(t("ow_c_total")) + "</th></tr></thead><tbody>" + rows + '</tbody></table></div><p class="small muted">' + esc(t("ow_c_note")) + "</p>") +
    owPanel(t("ow_road_h"), '<ol class="ow-road">' + UI.ow_road.map((r, i) => "<li><span>" + esc(L(r)) + "</span>" + owTag(i === 0 ? "up" : i === 1 ? "amber" : "", i === 0 ? "ow_road_done" : i === 1 ? "ow_road_next" : "ow_road_later") + "</li>").join("") + "</ol>") +
    owPanel(t("ow_c_other"), '<div class="stats" style="grid-template-columns:repeat(' + other.length + ',minmax(0,1fr))">' + other.map(([k, n]) => "<div><span>" + esc(t(k)) + "</span><b>" + n + "</b></div>").join("") + "</div>");
}

function owUserForm(u) {
  u = u || { plan: "free", status: "active", start: today() };
  const f = (id, k, v, type, extra) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" type="' + (type || "text") + '" value="' + esc(v == null ? "" : v) + '"' + (extra || "") + "></div>";
  const sel = (id, k, v, opts) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><select id="' + id + '">' + opts.map(([o, ok]) => '<option value="' + o + '"' + (o === v ? " selected" : "") + ">" + esc(t(ok)) + "</option>").join("") + "</select></div>";
  return '<form class="panel stack ow-uform" data-form="ow-user" data-id="' + esc(u.id || "") + '" novalidate><div class="form-grid">' + f("ou-name", "ow_u_name", u.name, "text", ' autocomplete="off"') + f("ou-contact", "ow_u_contact", u.contact, "text", ' autocomplete="off" dir="auto"') +
    sel("ou-plan", "ow_u_plan", u.plan, [["free", "plan_free"], ["full", "plan_full"]]) + sel("ou-status", "ow_u_status", u.status, [["active", "ow_u_active"], ["trial", "ow_u_trial"], ["paused", "ow_u_paused"]]) +
    f("ou-start", "ow_u_start", u.start, "date") + f("ou-end", "ow_u_end", u.end, "date") + f("ou-amount", "ow_u_amount", u.amount, "number", ' min="0" step="1" inputmode="decimal"') + f("ou-note", "ow_u_note", u.note) +
    sel("ou-keymode", "ow_u_keymode", u.keyMode || "own", [["own", "ow_km_own"], ["owner", "ow_km_owner"]]) + f("ou-budget", "ow_u_budget", u.orBudget, "number", ' min="0" max="500" step="1" inputmode="decimal"') +
    '</div><div class="row"><button class="btn primary" type="submit">' + esc(t("ow_u_save")) + '</button><button class="btn ghost" type="button" data-act="ow-ucancel">' + esc(t("ow_u_cancel")) + "</button></div></form>";
}
function owVaultBox() {
  const v = OW.own.vault;
  if (VAULT) return '<div class="row" style="justify-content:space-between"><span>' + esc(t("ow_v_h")) + " " + owTag("up", "ow_v_open_tag") + '</span><button class="btn sm ghost" data-act="ow-lock">' + esc(t("ow_v_lock")) + "</button></div>";
  return '<form class="stack" data-form="ow-vault" novalidate><div class="row" style="justify-content:space-between"><b>' + esc(t("ow_v_h")) + " " + owTag("", "ow_v_locked_tag") + "</b></div>" + (v ? "" : '<p class="small muted" style="margin:0">' + esc(t("ow_v_new")) + "</p>") +
    '<div class="row"><input id="ov-pass" type="password" autocomplete="' + (v ? "current-password" : "new-password") + '" placeholder="' + esc(t("ow_v_pass")) + '" aria-label="' + esc(t("ow_v_pass")) + '" style="flex:1;min-width:150px">' + (v ? "" : '<input id="ov-pass2" type="password" autocomplete="new-password" placeholder="' + esc(t("ow_v_pass2")) + '" aria-label="' + esc(t("ow_v_pass2")) + '" style="flex:1;min-width:150px">') + '<button class="btn" type="submit">' + esc(t(v ? "ow_v_open" : "ow_v_create")) + "</button></div>" + (v ? "" : '<p class="small muted" style="margin:0">' + esc(t("ow_v_warn")) + "</p>") + "</form>";
}
function owUsers() {
  const us = OW.own.users, act = us.filter((u) => u.status === "active");
  const soon = us.filter((u) => u.end && u.status !== "paused" && owDays(u.end) >= 0 && owDays(u.end) <= 7).length;
  const income = act.reduce((a, u) => a + (Number(u.amount) || 0), 0);
  const stats = '<div class="stats" style="grid-template-columns:repeat(4,minmax(0,1fr))"><div><span>' + esc(t("ow_u_n")) + "</span><b>" + us.length + "</b></div><div><span>" + esc(t("ow_u_active")) + "</span><b>" + act.length + "</b></div><div><span>" + esc(t("ow_u_soon")) + "</span><b>" + soon + "</b></div><div><span>" + esc(t("ow_u_month")) + "</span><b>" + int(income) + "</b></div></div>";
  const card = (u) => {
    if (owEdit === u.id) return owUserForm(u);
    const left = u.end ? owDays(u.end) : null;
    const endTag = left == null ? "" : left < 0 ? owTag("down", "ow_u_ended") : '<span class="tag' + (left <= 7 ? " amber" : "") + '">' + esc(t("ow_u_left").replace("{n}", left)) + "</span>";
    const links = (u.links || []).map((k, i) => '<li class="row" style="justify-content:space-between;gap:8px"><span><b>' + esc(k.platform) + '</b> <span class="num small muted" dir="ltr">' + esc(k.hint || "••••") + '</span></span><span class="row" style="gap:6px">' + (VAULT ? '<button class="btn sm" data-act="ow-kcopy" data-id="' + esc(u.id) + '" data-i="' + i + '">' + esc(t("ow_k_copy")) + "</button>" : "") + '<button class="btn sm ghost" data-act="ow-krm" data-id="' + esc(u.id) + '" data-i="' + i + '" aria-label="' + esc(t("ow_rm") + " " + k.platform) + '">×</button></span></li>').join("");
    const addKey = VAULT ? '<form class="row" data-form="ow-key" data-id="' + esc(u.id) + '" novalidate><input list="ow-plats" id="ok-p-' + esc(u.id) + '" placeholder="' + esc(t("ow_k_platform")) + '" aria-label="' + esc(t("ow_k_platform")) + '" style="flex:1;min-width:130px" autocomplete="off"><input id="ok-k-' + esc(u.id) + '" type="password" placeholder="' + esc(t("ow_k_key")) + '" aria-label="' + esc(t("ow_k_key")) + '" style="flex:2;min-width:160px" autocomplete="off" spellcheck="false" dir="ltr"><button class="btn sm" type="submit">' + esc(t("ow_k_add")) + "</button></form>" : '<p class="small muted" style="margin:0">' + esc(t("ow_k_locked")) + "</p>";
    return '<div class="panel stack ow-user"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><h3>' + esc(u.name) + "</h3>" + (u.contact ? '<div class="small muted" dir="auto">' + esc(u.contact) + "</div>" : "") + '</div><div class="row" style="gap:6px">' + owTag(u.status === "active" ? "up" : u.status === "trial" ? "amber" : "", "ow_u_" + u.status) + '<span class="tag">' + esc(t(u.plan === "full" ? "plan_full" : "plan_free")) + "</span>" + endTag + "</div></div>" +
      '<div class="small muted">' + esc(t("ow_u_start")) + ': <span class="num">' + esc(u.start || "–") + "</span> · " + esc(t("ow_u_end")) + ': <span class="num">' + esc(u.end || "–") + "</span>" + (u.amount ? " · " + esc(t("ow_u_amount")) + ': <span class="num">' + int(u.amount) + "</span>" : "") + "</div>" +
      '<div class="row small" style="gap:6px"><span class="tag' + (u.keyMode === "owner" ? " amber" : "") + '">' + esc(t(u.keyMode === "owner" ? "ow_km_owner" : "ow_km_own")) + "</span>" + (u.keyMode === "owner" && u.orBudget ? '<span class="muted">' + esc(t("ow_u_budget")) + ': <span class="num">$' + int(u.orBudget) + "</span></span>" : "") + "</div>" + (u.keyMode === "owner" ? '<p class="small muted" style="margin:0">' + esc(t("ow_km_tip")) + "</p>" : "") + (u.note ? '<p class="small" style="margin:0">' + esc(u.note) + "</p>" : "") +
      '<div class="ow-keys"><b class="small">' + esc(t("ow_k_h")) + "</b>" + (links ? '<ul class="stack" style="list-style:none;margin:6px 0;padding:0;gap:6px">' + links + "</ul>" : '<p class="small muted" style="margin:4px 0">' + esc(t("ow_k_none")) + "</p>") + addKey + "</div>" +
      '<div class="row"><button class="btn sm" data-act="ow-uedit" data-id="' + esc(u.id) + '">' + esc(t("ow_u_edit")) + '</button><button class="btn sm ' + (owDel === u.id ? "danger" : "ghost") + '" data-act="ow-udel" data-id="' + esc(u.id) + '">' + esc(t(owDel === u.id ? "ow_u_del_sure" : "ow_u_del")) + "</button></div></div>";
  };
  return stats + '<div class="panel">' + owVaultBox() + '</div><p class="small muted">' + esc(t("ow_v_how")) + "</p>" +
    (owAdding ? owUserForm() : '<div><button class="btn primary" data-act="ow-uadd">+ ' + esc(t("ow_u_add")) + "</button></div>") +
    (us.length ? '<div class="ow-users">' + us.map(card).join("") + "</div>" : '<div class="notice">' + esc(t("ow_u_empty")) + "</div>") +
    '<datalist id="ow-plats">' + OW_PLATFORMS.map((p) => '<option value="' + esc(p) + '">').join("") + "</datalist>";
}

function pageOwner() {
  const head = '<div class="wrap"><div class="page-head"><h1>' + esc(t("ow_h")) + "</h1><p>" + esc(t("ow_p")) + "</p></div>";
  if (!HOSTED) return head + '<div class="notice" style="margin-block:18px">' + esc(t("ow_preview")) + "</div></div>";
  if (!CFG.token) return head + '<div class="stack" style="padding-block:18px"><div class="notice">' + esc(t("ow_need")) + '</div><div><a class="btn primary" href="#settings">' + esc(t("set_h")) + "</a></div></div></div>";
  if (!OW.loaded) { loadOwner(); return head + '<div class="notice" style="margin-block:18px">' + esc(t("ow_loading")) + "</div></div>"; }
  const tabs = [["data", "ow_t_data"], ["lists", "ow_t_lists"], ["sharia", "tab_sharia"], ["backup", "ow_t_backup"], ["content", "ow_t_content"], ["users", "ow_t_users"]];
  const body = { data: owData, lists: owLists, sharia: shAdmin, backup: owBackup, content: owContent, users: owUsers }[owTab]();
  return head + '<div class="row ow-bar" style="justify-content:space-between"><div class="tabs ow-tabs" role="tablist">' + tabs.map(([k, l]) => '<a href="#owner" role="tab" data-act="ow-tab" data-tab="' + k + '"' + (owTab === k ? ' aria-current="page" aria-selected="true"' : "") + ">" + esc(t(l)) + "</a>").join("") + '</div><a class="btn sm primary" href="#desk">' + esc(t("ow_desk_btn")) + '</a><button class="btn sm ghost" data-act="ow-reload"' + (OW.loading ? " disabled" : "") + ">↻ " + esc(t(OW.loading ? "ow_loading" : "ow_reload")) + '</button></div><div class="stack" style="padding-block:18px 40px">' + body + "</div></div>";
}

/* ----- vault: PBKDF2 + AES-GCM, all on the device ----- */
const u8b64 = (u) => btoa(String.fromCharCode.apply(null, u)), b64u8 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
async function vaultKey(pass, salt, iter) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}
async function seal(key, text) { const iv = crypto.getRandomValues(new Uint8Array(12)); const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(text))); return { iv: u8b64(iv), ct: u8b64(ct) }; }
async function unseal(key, box) { const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64u8(box.iv) }, key, b64u8(box.ct)); return new TextDecoder().decode(pt); }

async function saveOwner() {
  OW.own.updatedAt = new Date().toISOString();
  try {
    const r = await gh("owner.json", "PUT", { message: "owner", content: b64e(JSON.stringify(OW.own, null, 1) + "\n"), sha: OW.ownSha });
    OW.ownSha = r && r.content ? r.content.sha : OW.ownSha; toast(t("ow_saved")); return true;
  } catch (e) { toast(e.code === "409" || e.code === "422" ? t("ow_conflict") : errText(e)); return false; }
}
async function saveList(file, next) {
  const cur = OW.lists[file];
  try {
    const r = await gh(file, "PUT", { message: file.replace(".json", ""), content: b64e(JSON.stringify(next) + "\n"), sha: cur.sha });
    OW.lists[file] = { data: next, sha: r && r.content ? r.content.sha : cur.sha }; toast(t("ow_saved"));
    if (file === "watchlist.json" && typeof WL !== "undefined") WL = next.slice();
    if (file === "divwatch.json" && typeof DIVW !== "undefined") DIVW = next.slice();
    if (file === "techlist.json" && typeof TECHL !== "undefined") TECHL = next.slice();
  } catch (e) { toast(e.code === "409" || e.code === "422" ? t("ow_conflict") : errText(e)); }
  render();
}
function owBackupFile() {
  const lists = {}; OW_LISTS.forEach(([f]) => { lists[f] = (OW.lists[f] || {}).data || []; });
  saveFile("meras-backup-" + today() + ".json", new Blob([JSON.stringify({ app: "meras", kind: "owner-backup", version: 1, exported: new Date().toISOString(), state: S, lists, owner: OW.own }, null, 2)], { type: "application/json" }));
}

document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="ow-"]'); if (!el) return;
  const a = el.dataset.act, uid = el.dataset.id, user = uid && OW.own && OW.own.users.find((u) => u.id === uid);
  if (a === "ow-tab") { e.preventDefault(); owTab = el.dataset.tab; owEdit = null; owAdding = false; owDel = null; render(); }
  else if (a === "ow-reload") { OW.loaded = false; loadOwner(true); }
  else if (a === "ow-run") {
    el.disabled = true;
    try { await ghApi("/actions/workflows/" + el.dataset.job + ".yml/dispatches", "POST", { ref: "main" }); toast(t("ow_ran")); setTimeout(() => { if (route() === "owner") { OW.loaded = false; loadOwner(true); } }, 20000); }
    catch (err) { toast(err.code === "403" || err.code === "404" ? t("ow_runs_403") : errText(err)); el.disabled = false; }
  }
  else if (a === "ow-rm") { const f = el.dataset.file; saveList(f, OW.lists[f].data.filter((x) => x !== el.dataset.s)); }
  else if (a === "ow-backup") owBackupFile();
  else if (a === "ow-uadd") { owAdding = true; owEdit = null; render(); const n = document.getElementById("ou-name"); if (n) n.focus({ preventScroll: true }); }
  else if (a === "ow-ucancel") { owAdding = false; owEdit = null; render(); }
  else if (a === "ow-uedit") { owEdit = uid; owAdding = false; owDel = null; render(); }
  else if (a === "ow-udel") {
    if (owDel !== uid) { owDel = uid; render(); return; }
    OW.own.users = OW.own.users.filter((u) => u.id !== uid); owDel = null; render(); await saveOwner(); render();
  }
  else if (a === "ow-lock") { VAULT = null; render(); }
  else if (a === "ow-krm" && user) { user.links.splice(Number(el.dataset.i), 1); render(); await saveOwner(); render(); }
  else if (a === "ow-kcopy" && user && VAULT) {
    try { const k = await unseal(VAULT, user.links[Number(el.dataset.i)].box); await navigator.clipboard.writeText(k); toast(t("ow_k_copied")); } catch (err) { toast(t("ow_v_wrong")); }
  }
});

document.addEventListener("submit", async (e) => {
  const form = e.target.closest && e.target.closest('[data-form^="ow-"]'); if (!form) return;
  e.preventDefault();
  const v = (id) => { const x = document.getElementById(id); return x ? x.value.trim() : ""; };
  const kind = form.dataset.form;
  if (kind === "ow-list") {
    const file = form.dataset.file, inp = form.querySelector("input"), s = inp.value.trim().replace(/\D/g, "");
    if (!/^\d{4}$/.test(s)) { toast(t("ow_bad_sym")); return; }
    const cur = OW.lists[file].data; if (cur.includes(s)) { toast(t("ow_dup")); return; }
    if (file === "watchlist.json" && cur.length >= WL_MAX) { toast(t("wl_full").replace("{n}", WL_MAX)); return; }
    saveList(file, cur.concat([s]));
  } else if (kind === "ow-user") {
    const name = v("ou-name"); if (!name) { toast(t("ow_u_need_name")); return; }
    const data = { keyMode: v("ou-keymode") || "own", orBudget: v("ou-budget") ? Number(v("ou-budget")) : null, name, contact: v("ou-contact"), plan: v("ou-plan"), status: v("ou-status"), start: v("ou-start"), end: v("ou-end"), amount: v("ou-amount") ? Number(v("ou-amount")) : null, note: v("ou-note") };
    const id = form.dataset.id;
    if (id) { const u = OW.own.users.find((x) => x.id === id); if (u) Object.assign(u, data); }
    else OW.own.users.push(Object.assign({ id: "u" + Date.now().toString(36), links: [], created: today() }, data));
    owAdding = false; owEdit = null; render(); await saveOwner(); render();
  } else if (kind === "ow-vault") {
    const p = v("ov-pass"), vault = OW.own.vault;
    if (p.length < 8) { toast(t("ow_v_short")); return; }
    try {
      if (!vault) {
        if (p !== v("ov-pass2")) { toast(t("ow_v_mismatch")); return; }
        const salt = crypto.getRandomValues(new Uint8Array(16)), iter = 310000, key = await vaultKey(p, salt, iter);
        OW.own.vault = { kdf: "PBKDF2-SHA256", salt: u8b64(salt), iter, check: await seal(key, "meras-vault") };
        VAULT = key; render(); await saveOwner();
      } else {
        const key = await vaultKey(p, b64u8(vault.salt), vault.iter);
        if ((await unseal(key, vault.check)) !== "meras-vault") throw 0;
        VAULT = key; toast(t("ow_v_opened"));
      }
    } catch (err) { toast(t("ow_v_wrong")); return; }
    render();
  } else if (kind === "ow-key") {
    const id = form.dataset.id, u = OW.own.users.find((x) => x.id === id), platform = v("ok-p-" + id), key = v("ok-k-" + id);
    if (!u || !VAULT) return;
    if (!platform || !key) { toast(t("ow_k_need")); return; }
    const hint = key.length > 8 ? key.slice(0, 5) + "…" + key.slice(-3) : "••••";
    (u.links = u.links || []).push({ platform, hint, box: await seal(VAULT, key), added: today() });
    render(); await saveOwner(); render();
  }
});
