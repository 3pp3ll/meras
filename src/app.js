/* ===== مِراس: التطبيق ===== */
const KEY = "meras.v1";
const blank = () => ({ lang: "ar", account: null, signedIn: false, plan: "free", done: {}, journal: [], deleted: [], drawings: {}, chart: null, updatedAt: 0 });
let S = blank();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}
const save = () => { S.updatedAt = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} queueSync(); };

const UI = {
  brand: ["مِراس", "Meras"],
  nav_home: ["الرئيسية", "Home"], nav_tracks: ["المسارات", "Tracks"], nav_services: ["الخدمات", "Services"],
  nav_progress: ["تقدّمي", "My progress"], nav_plans: ["الباقات", "Plans"], nav_account: ["حسابي", "Account"],
  sign_in: ["دخول", "Sign in"],
  hero_eyebrow: ["منصة تعليمية للسوق المالية السعودية", "A learning platform for the Saudi stock market"],
  hero_h: ["تعلّم السوق السعودي <em>بالمِراس</em>، درجة درجة", "Learn the Saudi market <em>by practice</em>, one step at a time"],
  hero_p: ["ثلاثة مسارات للمستثمر والمتداول والمبرمج. كل درس شرح، ثم مثال على سهم من تاسي، ثم تمرين تسجله في سجل تداولك.", "Three tracks for the investor, the trader and the developer. Each lesson is an explanation, then an example on a TASI share, then practice you log in your trading journal."],
  start: ["ابدأ من الدرجة الأولى", "Start at step one"], see_tracks: ["شوف المسارات", "See the tracks"],
  step: ["الدرجة", "Step"], free: ["مجاني", "Free"], paid: ["مدفوع", "Paid"], soon: ["قيد الإعداد", "In preparation"], locked: ["مقفلة", "Locked"],
  tracks_h: ["ثلاثة مسارات، مدرج واحد", "Three tracks, one staircase"],
  tracks_p: ["كل مسار خمس درجات. الدرجتان الأولى والثانية مجانية، والمسارات تتقاطع: المبرمج يبني الأداة اللي المتداول يتعلم عليها.", "Each track has five steps. Steps one and two are free, and the tracks cross: the developer builds the tool the trader learns on."],
  how_h: ["كيف يمشي الدرس", "How a lesson runs"],
  how: [
    [["اقرأ", "Read"], ["شرح قصير بلغة واضحة، بدون حشو.", "A short explanation in plain language."]],
    [["شوف", "See"], ["مثال على سهم سعودي أو شارت أو كود يشتغل.", "An example on a Saudi share, a chart, or working code."]],
    [["اختبر", "Check"], ["سؤالين تتأكد فيهم إنك فهمت.", "Two questions to confirm you understood."]],
    [["تدرّب", "Practise"], ["صفقة تدريبية تتسجل تلقائياً في سجلك.", "A practice trade logged automatically in your journal."]]
  ],
  svc_h: ["أدوات ترافقك", "Tools that go with you"],
  svc_p: ["سجل التداول يحفظ كل صفقة تدريبية وتصدّره Excel. ومعه حاسبات وقاموس مصطلحات.", "The trading journal keeps every practice trade and exports to Excel. With it come calculators and a glossary."],
  open_services: ["افتح الخدمات", "Open services"],
  sample_note: ["الأسعار المعروضة نموذجية للتدريب وليست أسعار السوق. تتحول إلى أسعار حقيقية متأخرة 15 دقيقة بعد ربط مفتاح سهمك.", "Prices shown are samples for practice, not market prices. They become real prices delayed 15 minutes once your SAHMK key is connected."],
  disclaimer: ["محتوى تعليمي فقط، وليس توصية بشراء أو بيع أي ورقة مالية.", "Educational content only, not a recommendation to buy or sell any security."],
  lessons: ["دروس", "lessons"], mins: ["دقايق", "min"], done: ["مكتمل", "Done"], of: ["من", "of"],
  quiz_h: ["اختبر فهمك", "Check your understanding"], check: ["صحّح", "Check answers"], retry: ["أعد المحاولة", "Try again"],
  answer_all: ["جاوب على كل الأسئلة أول", "Answer every question first"],
  passed: ["أحسنت، اكتمل الدرس", "Well done, lesson complete"], failed: ["فيه إجابة تحتاج مراجعة", "One answer needs another look"],
  prev: ["الدرس السابق", "Previous lesson"], next: ["الدرس التالي", "Next lesson"], back_tracks: ["كل المسارات", "All tracks"],
  practise: ["تدرّب على هذا السهم", "Practise on this share"], sample: ["سعر نموذجي", "Sample price"],
  f_open: ["الافتتاح", "Open"], f_high: ["الأعلى", "High"], f_low: ["الأدنى", "Low"], f_prev: ["إغلاق أمس", "Prev close"], f_vol: ["الحجم", "Volume"],
  copy: ["نسخ", "Copy"], copied: ["تم النسخ", "Copied"],
  level_locked_h: ["هذي الدرجة ضمن المدرج الكامل", "This step is part of the full staircase"],
  level_locked_p: ["الدرجات من 3 إلى 5 مدفوعة ومحتواها قيد الإعداد.", "Steps 3 to 5 are paid and their content is in preparation."],
  see_plans: ["شوف الباقات", "See plans"],
  /* services */
  services_h: ["الخدمات", "Services"], tab_journal: ["سجل التداول", "Trading journal"], tab_calc: ["الحاسبات", "Calculators"], tab_gloss: ["القاموس", "Glossary"],
  journal_p: ["كل صفقة تدريبية تتسجل هنا. اكتب سبب الدخول قبل ما تدخل، وسجل الخروج لما تطلع، وراجع السجل كل أسبوع.", "Every practice trade is logged here. Write the reason before you enter, record the exit when you leave, and review the journal weekly."],
  j_new: ["صفقة جديدة", "New trade"], j_symbol: ["الرمز", "Symbol"], j_name: ["الاسم", "Name"], j_qty: ["الكمية", "Quantity"], j_entry: ["سعر الدخول", "Entry price"],
  j_date: ["تاريخ الدخول", "Entry date"], j_stop: ["وقف الخسارة", "Stop-loss"], j_reason: ["سبب الدخول", "Reason for entry"], j_add: ["احفظ الصفقة", "Save trade"],
  j_exit: ["سعر الخروج", "Exit price"], j_exit_date: ["تاريخ الخروج", "Exit date"], j_note: ["وش تعلمت؟", "What did you learn?"], j_close: ["إغلاق", "Close"], j_confirm_close: ["سجّل الخروج", "Record exit"],
  j_pl: ["الربح/الخسارة", "P/L"], j_plpct: ["النسبة", "Return"], j_status: ["الحالة", "Status"], j_open: ["مفتوحة", "Open"], j_closed: ["مغلقة", "Closed"],
  j_del: ["حذف", "Delete"], j_sure: ["تأكيد الحذف", "Confirm delete"], j_cancel: ["تراجع", "Cancel"],
  j_empty: ["ما فيه صفقات للحين. افتح أي درس واضغط \"تدرّب على هذا السهم\"، أو أضف صفقة من النموذج فوق.", "No trades yet. Open any lesson and press \"Practise on this share\", or add one with the form above."],
  j_export: ["تصدير Excel", "Export to Excel"], j_saved: ["انحفظت الصفقة في سجلك", "Trade saved to your journal"], j_need: ["اكتب الرمز والكمية وسعر الدخول", "Enter symbol, quantity and entry price"],
  st_trades: ["عدد الصفقات", "Trades"], st_open: ["مفتوحة", "Open"], st_win: ["نسبة الرابحة", "Win rate"], st_pl: ["صافي الربح/الخسارة", "Net P/L"],
  from_lesson: ["من درس", "From lesson"],
  c_avg: ["متوسط سعر الشراء", "Average cost"], c_avg_p: ["لو اشتريت نفس السهم على دفعتين أو ثلاث.", "When you bought the same share in two or three lots."],
  c_ret: ["عائد الصفقة", "Trade return"], c_ret_p: ["الربح مع التوزيعات المستلمة.", "Profit including dividends received."],
  c_size: ["حجم الصفقة حسب المخاطرة", "Position size by risk"], c_size_p: ["كم سهم تشتري بحيث ما تخسر أكثر من نسبة تحددها.", "How many shares to buy so you lose no more than a set percentage."],
  c_zak: ["زكاة أسهم المتاجرة", "Zakat on trading shares"], c_zak_p: ["تقدير مبسط. الحكم يختلف بين المضارب والمستثمر طويل الأجل، فاسأل أهل العلم عن حالتك.", "A simplified estimate. The ruling differs for traders and long-term investors, so consult a scholar on your case."],
  lot: ["دفعة", "Lot"], qty: ["الكمية", "Qty"], price: ["السعر", "Price"], buy: ["سعر الشراء", "Buy price"], sell: ["سعر البيع", "Sell price"], div: ["توزيعات للسهم", "Dividend per share"],
  capital: ["رأس المال", "Capital"], riskpct: ["نسبة المخاطرة %", "Risk %"], entry: ["سعر الدخول", "Entry"], stop: ["وقف الخسارة", "Stop"], mv: ["القيمة السوقية للأسهم", "Market value of shares"],
  year: ["الحول", "Year basis"], hijri: ["هجري 2.5%", "Hijri 2.5%"], greg: ["ميلادي 2.577%", "Gregorian 2.577%"],
  r_avg: ["المتوسط", "Average"], r_total: ["الإجمالي", "Total cost"], r_shares: ["عدد الأسهم", "Shares"], r_profit: ["الربح", "Profit"], r_ret: ["العائد", "Return"],
  r_risk: ["أقصى خسارة", "Max loss"], r_size: ["عدد الأسهم", "Shares to buy"], r_value: ["قيمة الصفقة", "Position value"], r_zak: ["الزكاة التقديرية", "Estimated zakat"],
  gloss_p: ["المصطلحات اللي تمر عليك في الدروس.", "The terms you meet in the lessons."],
  /* progress */
  progress_h: ["تقدّمي", "My progress"], progress_p: ["وين وصلت في كل مسار.", "Where you stand in each track."],
  p_lessons: ["دروس مكتملة", "Lessons done"], p_steps: ["درجات مكتملة", "Steps climbed"], p_trades: ["صفقات تدريبية", "Practice trades"],
  continue: ["كمّل", "Continue"], all_done: ["خلصت الدرجات المتاحة", "Available steps complete"],
  backup_h: ["النسخ الاحتياطي", "Backup"], backup_p: ["تقدمك محفوظ على هذا الجهاز فقط. صدّر ملف واستورده على جهازك الثاني.", "Your progress is saved on this device only. Export a file and import it on your other device."],
  export: ["تصدير تقدمي", "Export my progress"], import: ["استيراد", "Import"], imported: ["تم الاستيراد", "Imported"], bad_file: ["الملف غير صالح. اختر ملف صدّرته من مِراس", "Invalid file. Choose a file exported from Meras"],
  /* plans */
  plans_h: ["الباقات", "Plans"], plans_p: ["ابدأ مجاناً بدرجتين في كل مسار، وكمّل المدرج لما تجهز.", "Start free with two steps in every track and continue when you are ready."],
  plan_free: ["البداية", "Starter"], plan_full: ["المدرج الكامل", "Full staircase"], per_month: ["ر.س / شهر", "SAR / month"],
  plan_free_f: [["الدرجتان 1 و2 في المسارات الثلاثة", "Steps 1 and 2 in all three tracks"], ["سجل التداول وتصدير Excel", "Trading journal and Excel export"], ["الحاسبات والقاموس", "Calculators and glossary"]],
  plan_full_f: [["كل ما في البداية", "Everything in Starter"], ["الدرجات 3 إلى 5 في كل مسار", "Steps 3 to 5 in every track"], ["مراجعة سجل التداول", "Trading journal review"]],
  current: ["باقتك الحالية", "Your current plan"], subscribe: ["اشترك", "Subscribe"], demo_price: ["سعر تجريبي، يتحدد لاحقاً", "Placeholder price, to be set later"],
  /* checkout */
  checkout_h: ["إتمام الاشتراك", "Checkout"], demo_mode: ["وضع المحاكاة: ما فيه دفع حقيقي، وما ينطلب منك أي بيانات بطاقة.", "Simulation mode: no real payment, and no card details are requested."],
  order: ["ملخص الطلب", "Order summary"], vat: ["ضريبة القيمة المضافة 15%", "VAT 15%"], total: ["الإجمالي", "Total"], pay: ["ادفع (محاكاة)", "Pay (simulated)"],
  test_card: ["بطاقة اختبار", "Test card"], paid_ok: ["تم تفعيل المدرج الكامل (محاكاة)", "Full staircase activated (simulated)"], need_account: ["أنشئ حساب أول", "Create an account first"],
  cancel_plan: ["إلغاء الاشتراك التجريبي", "Cancel simulated subscription"], plan_cancelled: ["رجعت للباقة المجانية", "Back on the free plan"],
  /* account */
  account_h: ["حسابي", "Account"], acc_demo: ["حساب تجريبي محفوظ على هذا الجهاز فقط، بدون كلمة مرور. الحسابات الحقيقية تجي مع النسخة العامة.", "A demo account stored on this device only, with no password. Real accounts arrive with the public version."],
  signup: ["إنشاء حساب", "Create account"], login: ["تسجيل الدخول", "Sign in"], logout: ["تسجيل الخروج", "Sign out"],
  name: ["الاسم", "Name"], email: ["البريد الإلكتروني", "Email"], need_fields: ["اكتب الاسم وبريد صحيح", "Enter a name and a valid email"],
  no_match: ["ما فيه حساب بهذا البريد على هذا الجهاز", "No account with this email on this device"], welcome: ["أهلاً", "Welcome"], plan: ["الباقة", "Plan"],
  reset: ["مسح كل بياناتي من هذا الجهاز", "Erase all my data on this device"], reset_sure: ["تأكيد المسح", "Confirm erase"], reset_done: ["تم المسح", "Erased"],
  foot_data: ["بيانات السوق عبر سهمك API عند الربط", "Market data via SAHMK API once connected"],
  save_fail: ["تعذر حفظ الملف", "Could not save the file"], saved_file: ["تم حفظ الملف", "File saved"],
  sar: ["ر.س", "SAR"]
};
const L = (pair) => pair[S.lang === "ar" ? 0 : 1];
const t = (k) => L(UI[k]);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = (n, d = 2) => Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
const int = (n) => Number(n).toLocaleString("en-US");
const today = () => new Date().toISOString().slice(0, 10);
const $ = (sel, el = document) => el.querySelector(sel);
const FULL_PRICE = 79;

/* ---------- helpers on content ---------- */
const lessonsOf = (track, level) => LESSONS.filter((l) => l.track === track && (level ? l.level === level : true));
const isDone = (id) => !!S.done[id];
const levelDone = (track, level) => { const ls = lessonsOf(track, level); return ls.length > 0 && ls.every((l) => isDone(l.id)); };
const trackPct = (track) => { const ls = lessonsOf(track); return Math.round((ls.filter((l) => isDone(l.id)).length / ls.length) * 100); };
const unlocked = () => S.plan === "full" || (typeof HOSTED !== "undefined" && HOSTED && !!CFG.token);
const canOpen = (l) => l.level <= 2 || unlocked();
const nextLesson = (track) => lessonsOf(track).find((l) => !isDone(l.id) && canOpen(l));
const trackById = (id) => TRACKS.find((x) => x.id === id);

function toast(msg) {
  const el = $("#toast"); el.innerHTML = "<span>" + esc(msg) + "</span>"; el.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => { el.hidden = true; }, 2600);
}

async function saveFile(filename, blob) {
  let dl = null;
  try { dl = window.claude && window.claude.use ? await window.claude.use("downloads") : null; } catch (e) {}
  if (dl) {
    try { const r = await dl.save({ filename, data: blob }); if (r && r.status === "saved") toast(t("saved_file")); }
    catch (e) { if (!e || e.code !== "declined") toast(t("save_fail")); }
    return;
  }
  if (window.self !== window.top) { toast(t("save_fail")); return; }
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

/* ---------- visual pieces ---------- */
const LOGO = '<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="7" fill="var(--navy)"/><path d="M6 25h5v-5h5v-5h5v-5h5v15H6z" fill="var(--amber)"/></svg>';

function stairs(track, inHero) {
  const names = track ? LEVELS[track] : null;
  return '<div class="stairs" role="img" aria-label="' + esc(t("tracks_h")) + '">' + [1, 2, 3, 4, 5].map((n) => {
    const free = n <= 2, done = track && levelDone(track, n);
    const cls = done ? "done" : free ? "free" : "locked";
    const label = inHero ? (free ? t("free") : t("paid")) : (done ? t("done") : free ? t("free") : track && lessonsOf(track, n).length ? t("paid") : t("soon"));
    return '<div class="step ' + cls + '" style="--n:' + n + '" title="' + (names ? esc(L(names[n - 1])) : "") + '"><b>' + n + "</b><span>" + esc(label) + "</span></div>";
  }).join("") + "</div>";
}

function quoteCard(symbol, lessonId) {
  const q = quoteOf(symbol); if (!q) return "";
  const has = q.prev != null, ch = has ? q.price - q.prev : 0, pct = has && q.prev ? (ch / q.prev) * 100 : 0, dir = ch >= 0 ? "up" : "down", sign = ch >= 0 ? "+" : "";
  const cell = (k, v) => "<div><dt>" + esc(t(k)) + "</dt><dd>" + (v == null ? "–" : v) + "</dd></div>";
  const tag = q.live ? '<span class="tag ' + (q.delayed ? "amber" : "up") + '">' + esc(t(q.delayed ? "delayed" : "live_tag")) + '</span> <span class="small muted">' + whenHtml(LIVE.fetchedAt) + "</span>" : '<span class="tag amber">' + esc(t("sample")) + "</span>";
  return '<div class="quote"><div class="quote-top"><div><h4>' + esc(L(q.name)) + ' <span class="num muted small">' + esc(symbol) + "</span></h4>" + tag + "</div>" +
    '<div style="text-align:end"><div class="px">' + fmt(q.price) + "</div>" + (has ? '<div class="num chg ' + dir + '">' + sign + fmt(ch) + " (" + sign + fmt(pct) + "%)</div>" : "") + "</div></div>" +
    "<dl>" + cell("f_open", q.open == null ? null : fmt(q.open)) + cell("f_high", q.high == null ? null : fmt(q.high)) + cell("f_low", q.low == null ? null : fmt(q.low)) + cell("f_prev", has ? fmt(q.prev) : null) + cell("f_vol", q.volume == null ? null : int(q.volume)) + "</dl>" +
    '<div class="quote-foot"><span class="small muted">' + esc(t("disclaimer")) + '</span><button class="btn sm primary" data-act="practise" data-symbol="' + esc(symbol) + '" data-lesson="' + esc(lessonId || "") + '">' + esc(t("practise")) + "</button></div></div>";
}

/* deterministic sample series so charts never change between visits */
function series(kind) {
  let seed = kind === "trend" ? 7 : 21;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const out = []; let c = kind === "trend" ? 40 : 51;
  for (let i = 0; i < 36; i++) {
    let drift;
    if (kind === "trend") drift = 0.34 + Math.sin(i / 2.6) * 0.9;
    else drift = Math.cos(i / 2.9) * 1.15;
    const o = c; let cl = o + drift + (rnd() - 0.5) * 0.9;
    if (kind !== "trend") cl = Math.max(48.4, Math.min(53.6, cl));
    let h = Math.max(o, cl) + rnd() * 0.7, lo = Math.min(o, cl) - rnd() * 0.7;
    if (kind !== "trend") { h = Math.min(h, 54.1); lo = Math.max(lo, 47.9); }
    out.push({ o, h, l: lo, c: cl, v: 0.6 + rnd() * 0.9 + Math.abs(cl - o) * 0.5 }); c = cl;
  }
  return out;
}

function candleChart(kind) {
  const d = series(kind === "trend" ? "trend" : "range");
  const W = 640, H = 312, padL = 10, padR = 52, top = 14, ph = 200, vh = 46, vtop = top + ph + 30;
  let min = Math.min(...d.map((x) => x.l)), max = Math.max(...d.map((x) => x.h));
  const pad = (max - min) * 0.08; min -= pad; max += pad;
  const y = (v) => top + ((max - v) / (max - min)) * ph;
  const bw = (W - padL - padR) / d.length, x = (i) => padL + i * bw + bw / 2;
  const vmax = Math.max(...d.map((p) => p.v));
  let s = "";
  const ticks = 4;
  for (let i = 0; i <= ticks; i++) {
    const v = min + ((max - min) * i) / ticks, yy = y(v);
    s += '<line class="c-grid" x1="' + padL + '" x2="' + (W - padR) + '" y1="' + yy + '" y2="' + yy + '"/><text class="c-text" x="' + (W - padR + 6) + '" y="' + (yy + 4) + '">' + v.toFixed(1) + "</text>";
  }
  d.forEach((p, i) => {
    const cls = p.c >= p.o ? "c-up" : "c-down", bt = y(Math.max(p.o, p.c)), bb = y(Math.min(p.o, p.c));
    s += '<line class="' + cls + '" x1="' + x(i) + '" x2="' + x(i) + '" y1="' + y(p.h) + '" y2="' + y(p.l) + '" stroke-width="1.4"/>' +
      '<rect class="' + cls + '" x="' + (x(i) - bw * 0.32) + '" y="' + bt + '" width="' + bw * 0.64 + '" height="' + Math.max(1.5, bb - bt) + '"/>' +
      '<rect class="' + cls + '" opacity=".45" x="' + (x(i) - bw * 0.32) + '" y="' + (vtop + vh - (p.v / vmax) * vh) + '" width="' + bw * 0.64 + '" height="' + (p.v / vmax) * vh + '"/>';
  });
  if (kind === "sr") {
    s += '<line class="c-res" x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(54) + '" y2="' + y(54) + '"/><line class="c-sup" x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(48) + '" y2="' + y(48) + '"/>' +
      '<text class="c-label" x="' + (padL + 6) + '" y="' + (y(54) - 6) + '">' + esc(L(["مقاومة 54.0", "Resistance 54.0"])) + '</text><text class="c-label" x="' + (padL + 6) + '" y="' + (y(48) + 17) + '">' + esc(L(["دعم 48.0", "Support 48.0"])) + "</text>";
  }
  if (kind === "trend") {
    /* trend line through the two lowest swing lows of each half */
    const lowIdx = (a, b) => { let k = a; for (let i = a; i < b; i++) if (d[i].l < d[k].l) k = i; return k; };
    const i1 = lowIdx(0, 12), i2 = lowIdx(14, 28), m = (d[i2].l - d[i1].l) / (i2 - i1);
    const yAt = (i) => d[i1].l + m * (i - i1) - 0.25;
    s += '<line class="c-trend" x1="' + x(0) + '" y1="' + y(yAt(0)) + '" x2="' + x(d.length - 1) + '" y2="' + y(yAt(d.length - 1)) + '"/>';
  }
  s += '<text class="c-text" x="' + padL + '" y="' + (vtop - 4) + '">' + esc(L(["الحجم", "Volume"])) + "</text>";
  return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + s + "</svg>";
}

function anatomy() {
  const lab = { h: L(["الأعلى", "High"]), l: L(["الأدنى", "Low"]), o: L(["الافتتاح", "Open"]), c: L(["الإغلاق", "Close"]), up: L(["شمعة صاعدة", "Rising candle"]), dn: L(["شمعة هابطة", "Falling candle"]), body: L(["الجسم", "Body"]), wick: L(["الذيل", "Wick"]) };
  const candle = (cx, cls, topLab, botLab) =>
    '<line class="' + cls + '" x1="' + cx + '" x2="' + cx + '" y1="30" y2="210" stroke-width="2"/><rect class="' + cls + '" x="' + (cx - 22) + '" y="80" width="44" height="90" rx="2"/>' +
    [[30, lab.h], [80, topLab], [170, botLab], [210, lab.l]].map(([yy, tx]) => '<line class="c-lead" x1="' + (cx + 26) + '" x2="' + (cx + 62) + '" y1="' + yy + '" y2="' + yy + '"/><text class="c-label" x="' + (cx + 68) + '" y="' + (yy + 5) + '" text-anchor="start">' + esc(tx) + "</text>").join("");
  return '<svg viewBox="0 0 640 262" role="img">' + candle(110, "c-up", lab.c, lab.o) + candle(410, "c-down", lab.o, lab.c) +
    '<text class="c-label" x="110" y="246" text-anchor="middle" font-weight="600">' + esc(lab.up) + '</text><text class="c-label" x="410" y="246" text-anchor="middle" font-weight="600">' + esc(lab.dn) + "</text>" +
    '<text class="c-text" x="' + (110 - 30) + '" y="129" text-anchor="end">' + esc(lab.body) + '</text><text class="c-text" x="' + (110 - 8) + '" y="56" text-anchor="end">' + esc(lab.wick) + "</text></svg>";
}

function block(b, lessonId) {
  if (b.p) return "<p>" + esc(L(b.p)) + "</p>";
  if (b.h) return "<h3>" + esc(L(b.h)) + "</h3>";
  if (b.ul) return "<ul>" + b.ul.map((i) => "<li>" + esc(L(i)) + "</li>").join("") + "</ul>";
  if (b.note) return '<div class="notice">' + esc(L(b.note)) + "</div>";
  if (b.code) return '<div class="code"><div class="cap"><span>' + esc(b.name || "code") + '</span><button data-act="copy">' + esc(t("copy")) + "</button></div><pre><code>" + esc(b.code) + "</code></pre></div>";
  if (b.quote) return quoteCard(b.quote, lessonId);
  if (b.open) return '<div><a class="btn primary" href="#chart">' + esc(t("open_chart")) + "</a></div>";
  if (b.fig) return '<figure class="figure">' + (b.fig === "anatomy" ? anatomy() : candleChart(b.fig)) + "<figcaption>" + esc(L(b.cap)) + "</figcaption></figure>";
  return "";
}

/* ---------- pages ---------- */
function pageHome() {
  const first = nextLesson("inv") || LESSONS[0];
  return '<section class="hero"><div class="wrap"><div class="copy"><div class="eyebrow">' + esc(t("hero_eyebrow")) + "</div><h1>" + t("hero_h") + '</h1><p class="lead">' + esc(t("hero_p")) + '</p><div class="row"><a class="btn primary" href="#l-' + first.id + '">' + esc(t("start")) + '</a><a class="btn ghost" href="#tracks">' + esc(t("see_tracks")) + "</a></div></div>" + stairs(null, true) + "</div></section>" +
    '<div class="wrap"><section class="sec"><div class="sec-head"><h2>' + esc(t("tracks_h")) + "</h2><p>" + esc(t("tracks_p")) + '</p></div><div class="grid3">' +
    TRACKS.map((tr) => { const n = nextLesson(tr.id); return '<a class="panel track-card" href="#' + (n ? "l-" + n.id : "tracks") + '"><span class="who">' + esc(L(tr.who)) + "</span><h3>" + esc(L(tr.name)) + '</h3><p class="muted">' + esc(L(tr.blurb)) + '</p><div class="meter" aria-hidden="true"><i style="width:' + trackPct(tr.id) + '%"></i></div><span class="small muted">' + lessonsOf(tr.id).filter((l) => isDone(l.id)).length + " " + esc(t("of")) + " " + lessonsOf(tr.id).length + " " + esc(t("lessons")) + "</span></a>"; }).join("") +
    '</div></section><section class="sec"><div class="sec-head"><h2>' + esc(t("how_h")) + '</h2></div><div class="flow">' +
    UI.how.map((h, i) => '<div><span class="k">' + (i + 1) + "</span><h4>" + esc(L(h[0])) + '</h4><p class="muted small">' + esc(L(h[1])) + "</p></div>").join("") +
    '</div></section><section class="sec"><div class="grid2"><div class="panel stack"><h3>' + esc(t("svc_h")) + '</h3><p class="muted">' + esc(t("svc_p")) + '</p><div><a class="btn" href="#journal">' + esc(t("open_services")) + '</a></div></div><div class="stack">' + quoteCard("2222", "") + "</div></div></section>" +
    '<section class="sec"><div class="notice">' + esc(t(LIVE.fetchedAt ? "live_note" : "sample_note")) + "</div></section></div>";
}

function levelBlock(tr, n) {
  const ls = lessonsOf(tr.id, n), name = L(LEVELS[tr.id][n - 1]);
  if (n > 2 && !(ls.length && unlocked())) return '<div class="level locked"><div class="level-head"><b>' + n + "</b><h4>" + esc(name) + '</h4><span class="tag">' + esc(ls.length ? t("locked") : t("soon")) + "</span></div></div>";
  return '<div class="level"><div class="level-head"><b>' + n + "</b><h4>" + esc(name) + '</h4><span class="tag amber">' + esc(levelDone(tr.id, n) ? t("done") : n > 2 ? t("paid") : t("free")) + '</span></div><ul class="lessons">' +
    ls.map((l) => '<li><a href="#l-' + l.id + '"><span class="dot ' + (isDone(l.id) ? "done" : "") + '">' + (isDone(l.id) ? "✓" : "") + "</span><span>" + esc(L(l.title)) + '</span><span class="small muted" style="margin-inline-start:auto">' + l.mins + " " + esc(t("mins")) + "</span></a></li>").join("") + "</ul></div>";
}

function pageTracks() {
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("tracks_h")) + "</h1><p>" + esc(t("tracks_p")) + "</p></div>" +
    TRACKS.map((tr) => '<section class="track" id="t-' + tr.id + '"><div class="stack"><div><span class="tag amber">' + esc(L(tr.who)) + '</span></div><h2 style="font-size:26px">' + esc(L(tr.name)) + '</h2><p class="muted">' + esc(L(tr.blurb)) + "</p>" + stairs(tr.id) + '</div><div class="levels">' + [1, 2, 3, 4, 5].map((n) => levelBlock(tr, n)).join("") + "</div></section>").join("") +
    (S.plan === "full" ? "" : '<section class="sec"><div class="panel row" style="justify-content:space-between"><div><h3>' + esc(t("level_locked_h")) + '</h3><p class="muted">' + esc(t("level_locked_p")) + '</p></div><a class="btn primary" href="#plans">' + esc(t("see_plans")) + "</a></div></section>") + "</div>";
}

let quizState = {};
function pageLesson(id) {
  const l = LESSONS.find((x) => x.id === id); if (!l) return pageTracks();
  if (!canOpen(l)) return '<div class="wrap"><div class="page-head"><h1>' + esc(L(l.title)) + '</h1></div><div class="panel row" style="justify-content:space-between;margin-block:18px"><div><h3>' + esc(t("level_locked_h")) + '</h3><p class="muted">' + esc(t("level_locked_p")) + '</p></div><a class="btn primary" href="#plans">' + esc(t("see_plans")) + "</a></div></div>";
  const tr = trackById(l.track), all = lessonsOf(l.track), i = all.indexOf(l), prev = all[i - 1], next = all[i + 1];
  const qs = quizState[id] || (quizState[id] = { picks: {}, checked: false });
  const quiz = l.quiz.map((q, qi) => {
    const opts = q.opts.map((o, oi) => {
      let cls = "";
      if (qs.checked) { if (oi === q.a) cls = " right"; else if (qs.picks[qi] === oi) cls = " wrong"; }
      return '<label class="opt' + cls + '"><input type="radio" id="q-' + id + "-" + qi + "-" + oi + '" name="q' + qi + '" value="' + oi + '"' + (qs.picks[qi] === oi ? " checked" : "") + (qs.checked ? " disabled" : "") + ' data-q="' + qi + '"><span>' + esc(L(o)) + "</span></label>";
    }).join("");
    return '<fieldset class="q" style="margin:0"><div class="qt">' + (qi + 1) + ". " + esc(L(q.q)) + '</div><div class="opts">' + opts + "</div>" + (qs.checked ? '<p class="why">' + esc(L(q.why)) + "</p>" : "") + "</fieldset>";
  }).join("");
  const allRight = qs.checked && l.quiz.every((q, qi) => qs.picks[qi] === q.a);
  const verdict = qs.checked ? '<div class="row"><span class="tag ' + (allRight ? "up" : "down") + '">' + esc(allRight ? t("passed") : t("failed")) + "</span>" + (allRight ? "" : '<button class="btn sm" data-act="quiz-retry" data-id="' + id + '">' + esc(t("retry")) + "</button>") + "</div>" : '<div><button class="btn primary" data-act="quiz-check" data-id="' + id + '">' + esc(t("check")) + "</button></div>";
  return '<div class="wrap"><article class="lesson"><div class="crumbs"><a href="#tracks">' + esc(t("nav_tracks")) + "</a> / " + esc(L(tr.name)) + " / " + esc(t("step")) + " " + l.level + '</div><div class="stack" style="gap:8px"><h1>' + esc(L(l.title)) + '</h1><div class="row small muted"><span>' + l.mins + " " + esc(t("mins")) + "</span>" + (isDone(id) ? '<span class="tag amber">' + esc(t("done")) + "</span>" : "") + "</div></div>" +
    '<div class="prose">' + l.body.map((b) => block(b, id)).join("") + '</div><section class="quiz"><h2 style="font-size:24px">' + esc(t("quiz_h")) + "</h2>" + quiz + verdict + "</section>" +
    '<nav class="lesson-nav">' + (prev ? '<a class="btn" href="#l-' + prev.id + '">' + esc(t("prev")) + "</a>" : '<a class="btn" href="#tracks">' + esc(t("back_tracks")) + "</a>") + (next ? '<a class="btn ' + (isDone(id) ? "primary" : "") + '" href="#l-' + next.id + '">' + esc(t("next")) + "</a>" : '<a class="btn" href="#progress">' + esc(t("nav_progress")) + "</a>") + "</nav></article></div>";
}

/* ----- services ----- */
function svcShell(tab, inner) {
  const tabs = [["journal", "tab_journal"], ["calc", "tab_calc"], ["glossary", "tab_gloss"]];
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("services_h")) + '</h1></div><div class="tabs">' + tabs.map(([h, k]) => '<a href="#' + h + '"' + (h === tab ? ' aria-current="page"' : "") + ">" + esc(t(k)) + "</a>").join("") + '</div><div class="stack" style="padding-block:22px">' + inner + "</div></div>";
}
const plOf = (j) => (j.exit == null ? null : (j.exit - j.entry) * j.qty);
let draft = null, closing = null, deleting = null;

function pageJournal() {
  const d = draft || {}; draft = null;
  const closed = S.journal.filter((j) => j.exit != null), wins = closed.filter((j) => plOf(j) > 0).length, net = closed.reduce((a, j) => a + plOf(j), 0);
  const f = (id, k, val, extra) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" ' + (extra || "") + ' value="' + esc(val ?? "") + '"></div>';
  const form = '<form class="panel stack" data-form="journal" novalidate><h3>' + esc(t("j_new")) + (d.lesson ? ' <span class="tag amber">' + esc(t("from_lesson")) + ": " + esc(d.lessonTitle) + "</span>" : "") + '</h3><div class="form-grid">' +
    f("j-symbol", "j_symbol", d.symbol, 'class="num" inputmode="numeric" maxlength="10"') + f("j-name", "j_name", d.name, "") + f("j-qty", "j_qty", d.qty ?? 100, 'class="num" type="number" min="1" step="1"') +
    f("j-entry", "j_entry", d.entry, 'class="num" type="number" min="0" step="0.01"') + f("j-stop", "j_stop", "", 'class="num" type="number" min="0" step="0.01"') + f("j-target", "j_target", "", 'class="num" type="number" min="0" step="0.01"') + f("j-date", "j_date", today(), 'type="date"') +
    '</div><div class="field"><label for="j-reason">' + esc(t("j_reason")) + '</label><textarea id="j-reason" rows="2"></textarea></div><input type="hidden" id="j-lesson" value="' + esc(d.lesson || "") + '"><div><button class="btn primary" type="submit">' + esc(t("j_add")) + "</button></div></form>";
  const stats = '<div class="stats"><div><span>' + esc(t("st_trades")) + "</span><b>" + S.journal.length + "</b></div><div><span>" + esc(t("st_open")) + "</span><b>" + (S.journal.length - closed.length) + "</b></div><div><span>" + esc(t("st_win")) + "</span><b>" + (closed.length ? Math.round((wins / closed.length) * 100) + "%" : "–") + "</b></div><div><span>" + esc(t("st_pl")) + '</span><b class="' + (net > 0 ? "pos" : net < 0 ? "neg" : "") + '">' + (closed.length ? (net > 0 ? "+" : "") + fmt(net) : "–") + "</b></div></div>";
  let table;
  if (!S.journal.length) table = '<div class="panel muted">' + esc(t("j_empty")) + "</div>";
  else {
    const rows = S.journal.slice().reverse().map((j) => {
      const pl = plOf(j), pct = pl == null ? null : ((j.exit - j.entry) / j.entry) * 100, cls = pl > 0 ? "pos" : pl < 0 ? "neg" : "";
      let actions;
      if (closing === j.id) actions = '<form class="row" data-form="close" data-id="' + j.id + '" style="flex-wrap:nowrap"><input id="c-exit" class="num" type="number" step="0.01" min="0" placeholder="' + esc(t("j_exit")) + '" style="width:92px;padding:4px 8px;border:1px solid var(--line);border-radius:6px;background:var(--surface)"><input id="c-note" placeholder="' + esc(t("j_note")) + '" style="width:150px;padding:4px 8px;border:1px solid var(--line);border-radius:6px;background:var(--surface)"><button class="btn sm primary" type="submit">' + esc(t("j_confirm_close")) + '</button><button class="btn sm" type="button" data-act="j-cancel">' + esc(t("j_cancel")) + "</button></form>";
      else if (deleting === j.id) actions = '<div class="row" style="flex-wrap:nowrap"><button class="btn sm danger" data-act="j-del-yes" data-id="' + j.id + '">' + esc(t("j_sure")) + '</button><button class="btn sm" data-act="j-cancel">' + esc(t("j_cancel")) + "</button></div>";
      else actions = '<div class="row" style="flex-wrap:nowrap">' + (j.exit == null ? '<button class="btn sm" data-act="j-close" data-id="' + j.id + '">' + esc(t("j_close")) + "</button>" : "") + '<button class="btn sm ghost" data-act="j-del" data-id="' + j.id + '">' + esc(t("j_del")) + "</button></div>";
      return "<tr><td><span class=\"num\">" + esc(j.symbol) + "</span> " + esc(j.name || "") + '</td><td class="num">' + esc(j.entryDate) + '</td><td class="num">' + int(j.qty) + '</td><td class="num">' + fmt(j.entry) + '</td><td class="num">' + (j.stop ? fmt(j.stop) : "–") + '</td><td class="num">' + (j.target ? fmt(j.target) : "–") + '</td><td class="num">' + (j.exit != null ? fmt(j.exit) : "–") + '</td><td class="num ' + cls + '">' + (pl == null ? "–" : (pl > 0 ? "+" : "") + fmt(pl)) + '</td><td class="num ' + cls + '">' + (pct == null ? "–" : (pct > 0 ? "+" : "") + fmt(pct) + "%") + '</td><td><span class="tag ' + (j.exit == null ? "amber" : "") + '">' + esc(j.exit == null ? t("j_open") : t("j_closed")) + '</span></td><td class="note">' + esc(j.reason || "") + (j.note ? '<br><span class="muted">' + esc(j.note) + "</span>" : "") + "</td><td>" + actions + "</td></tr>";
    }).join("");
    table = '<div class="tablewrap"><table><thead><tr>' + ["j_symbol", "j_date", "j_qty", "j_entry", "j_stop", "j_target", "j_exit", "j_pl", "j_plpct", "j_status", "j_reason"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + "<th></th></tr></thead><tbody>" + rows + "</tbody></table></div>";
  }
  return svcShell("journal", '<p class="muted" style="max-width:64ch">' + esc(t("journal_p")) + "</p>" + form + stats + '<div class="row" style="justify-content:space-between"><h3 style="font-size:20px">' + esc(t("tab_journal")) + '</h3><button class="btn" data-act="export-xlsx"' + (S.journal.length ? "" : " disabled") + ">" + esc(t("j_export")) + "</button></div>" + table + '<p class="small muted">' + esc(t("disclaimer")) + "</p>");
}

function pageCalc() {
  const inp = (id, k, val) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" class="num" type="number" step="any" min="0" value="' + val + '" data-calc></div>';
  const card = (k, body, out) => '<div class="panel stack"><div><h3>' + esc(t(k)) + '</h3><p class="muted small">' + esc(t(k + "_p")) + "</p></div>" + body + '<div class="result" id="' + out + '"></div></div>';
  const lots = [[100, 30], [100, 27], [0, 0]].map((v, i) => '<div class="form-grid" style="grid-template-columns:1fr 1fr">' + '<div class="field"><label for="a-q' + i + '">' + esc(t("lot")) + " " + (i + 1) + " · " + esc(t("qty")) + '</label><input id="a-q' + i + '" class="num" type="number" min="0" step="1" value="' + v[0] + '" data-calc></div><div class="field"><label for="a-p' + i + '">' + esc(t("price")) + '</label><input id="a-p' + i + '" class="num" type="number" min="0" step="any" value="' + v[1] + '" data-calc></div></div>').join("");
  return svcShell("calc", '<div class="grid2">' +
    card("c_avg", lots, "o-avg") +
    card("c_ret", '<div class="form-grid">' + inp("r-buy", "buy", 30) + inp("r-sell", "sell", 33) + inp("r-qty", "qty", 100) + inp("r-div", "div", 0.5) + "</div>", "o-ret") +
    card("c_size", '<div class="form-grid">' + inp("s-cap", "capital", 50000) + inp("s-risk", "riskpct", 1) + inp("s-entry", "entry", 50) + inp("s-stop", "stop", 48) + "</div>", "o-size") +
    card("c_zak", '<div class="form-grid">' + inp("z-mv", "mv", 100000) + '<div class="field"><label for="z-year">' + esc(t("year")) + '</label><select id="z-year" data-calc><option value="0.025">' + esc(t("hijri")) + '</option><option value="0.02577">' + esc(t("greg")) + "</option></select></div></div>", "o-zak") + "</div>");
}
function runCalc() {
  const v = (id) => { const el = document.getElementById(id); return el ? parseFloat(el.value) || 0 : 0; };
  const out = (id, pairs) => { const el = document.getElementById(id); if (el) el.innerHTML = pairs.map(([k, val, cls]) => "<div><span>" + esc(t(k)) + '</span><b class="' + (cls || "") + '">' + val + "</b></div>").join(""); };
  if (!document.getElementById("o-avg")) return;
  let q = 0, cost = 0; [0, 1, 2].forEach((i) => { q += v("a-q" + i); cost += v("a-q" + i) * v("a-p" + i); });
  out("o-avg", [["r_avg", q ? fmt(cost / q, 3) : "–"], ["r_shares", int(q)], ["r_total", fmt(cost)]]);
  const b = v("r-buy"), s = v("r-sell"), rq = v("r-qty"), dv = v("r-div"), profit = (s - b + dv) * rq, ret = b ? ((s - b + dv) / b) * 100 : 0;
  out("o-ret", [["r_profit", (profit > 0 ? "+" : "") + fmt(profit), profit > 0 ? "pos" : profit < 0 ? "neg" : ""], ["r_ret", (ret > 0 ? "+" : "") + fmt(ret) + "%", ret > 0 ? "pos" : ret < 0 ? "neg" : ""]]);
  const cap = v("s-cap"), rp = v("s-risk"), en = v("s-entry"), st = v("s-stop"), risk = (cap * rp) / 100, per = en - st, size = per > 0 ? Math.floor(risk / per) : 0;
  out("o-size", [["r_size", per > 0 ? int(size) : "–"], ["r_value", per > 0 ? fmt(size * en) : "–"], ["r_risk", fmt(risk)]]);
  out("o-zak", [["r_zak", fmt(v("z-mv") * (parseFloat((document.getElementById("z-year") || {}).value) || 0.025))]]);
}

function pageGlossary() {
  return svcShell("glossary", '<p class="muted">' + esc(t("gloss_p")) + '</p><dl class="gloss" style="margin:0">' + GLOSSARY.map((g) => "<div><dt>" + esc(L(g[0])) + (S.lang === "ar" ? '<small dir="ltr">' + esc(g[1]) + "</small>" : "") + "</dt><dd>" + esc(L(g[2])) + "</dd></div>").join("") + "</dl>");
}

function pageProgress() {
  const doneN = LESSONS.filter((l) => isDone(l.id)).length;
  let steps = 0, stepsAll = 0; TRACKS.forEach((tr) => [1, 2, 3, 4, 5].forEach((n) => { if (lessonsOf(tr.id, n).length) { stepsAll++; if (levelDone(tr.id, n)) steps++; } }));
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("progress_h")) + "</h1><p>" + esc(t("progress_p")) + '</p></div><div class="stack" style="padding-block:18px;gap:22px"><div class="stats" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div><span>' + esc(t("p_lessons")) + "</span><b>" + doneN + " / " + LESSONS.length + "</b></div><div><span>" + esc(t("p_steps")) + "</span><b>" + steps + " / " + stepsAll + "</b></div><div><span>" + esc(t("p_trades")) + "</span><b>" + S.journal.length + '</b></div></div><div class="grid3">' +
    TRACKS.map((tr) => { const n = nextLesson(tr.id); return '<div class="panel stack"><h3>' + esc(L(tr.name)) + "</h3>" + stairs(tr.id) + '<div class="meter"><i style="width:' + trackPct(tr.id) + '%"></i></div>' + (n ? '<a class="btn" href="#l-' + n.id + '">' + esc(t("continue")) + ": " + esc(L(n.title)) + "</a>" : '<span class="tag up">' + esc(t("all_done")) + "</span>") + "</div>"; }).join("") +
    '</div><div class="panel stack"><h3>' + esc(t("backup_h")) + '</h3><p class="muted">' + esc(t("backup_p")) + '</p><div class="row"><button class="btn" data-act="export-json">' + esc(t("export")) + '</button><label class="btn" for="import-file">' + esc(t("import")) + '</label><input id="import-file" type="file" accept="application/json,.json" hidden>' + (HOSTED ? '<a class="btn" href="#settings">' + esc(t("set_h")) + "</a>" : "") + "</div></div></div></div>";
}

function pagePlans() {
  const li = (arr) => "<ul>" + arr.map((x) => "<li>" + esc(L(x)) + "</li>").join("") + "</ul>";
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("plans_h")) + "</h1><p>" + esc(t("plans_p")) + '</p></div><div class="grid2" style="padding-block:18px;max-width:780px">' +
    '<div class="panel plan"><h3>' + esc(t("plan_free")) + '</h3><div><span class="price">0</span> <span class="muted small">' + esc(t("per_month")) + "</span></div>" + li(UI.plan_free_f) + (S.plan === "free" ? '<span class="tag">' + esc(t("current")) + "</span>" : '<button class="btn" data-act="cancel-plan">' + esc(t("cancel_plan")) + "</button>") + "</div>" +
    '<div class="panel plan best"><h3>' + esc(t("plan_full")) + '</h3><div><span class="price">' + FULL_PRICE + '</span> <span class="muted small">' + esc(t("per_month")) + '</span><div class="small muted">' + esc(t("demo_price")) + "</div></div>" + li(UI.plan_full_f) + (S.plan === "full" ? '<span class="tag amber">' + esc(t("current")) + "</span>" : '<a class="btn primary" href="#checkout">' + esc(t("subscribe")) + "</a>") + "</div></div>" +
    '<div class="notice" style="max-width:780px">' + esc(t("level_locked_p")) + " " + esc(t("demo_mode")) + "</div></div>";
}

function pageCheckout() {
  const vat = FULL_PRICE * 0.15;
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("checkout_h")) + '</h1></div><div class="stack" style="padding-block:18px;max-width:560px"><div class="notice">' + esc(t("demo_mode")) + '</div><div class="panel stack"><h3>' + esc(t("order")) + '</h3><div class="tablewrap" style="border:0"><table><tbody><tr><td>' + esc(t("plan_full")) + '</td><td class="num" style="text-align:end">' + fmt(FULL_PRICE) + "</td></tr><tr><td>" + esc(t("vat")) + '</td><td class="num" style="text-align:end">' + fmt(vat) + "</td></tr><tr><td><b>" + esc(t("total")) + '</b></td><td class="num" style="text-align:end"><b>' + fmt(FULL_PRICE + vat) + " " + esc(t("sar")) + '</b></td></tr></tbody></table></div><div class="testcard"><small>' + esc(t("test_card")) + "</small>4242 4242 4242 4242<small>12/30 · 123</small></div>" +
    (S.signedIn ? '<div><button class="btn primary" data-act="pay">' + esc(t("pay")) + "</button></div>" : '<div class="row"><span class="muted">' + esc(t("need_account")) + '</span><a class="btn" href="#account">' + esc(t("signup")) + "</a></div>") + "</div></div></div>";
}

let accTab = "signup", resetArmed = false;
function pageAccount() {
  let inner;
  if (S.signedIn && S.account) {
    inner = '<div class="panel stack"><h3>' + esc(t("welcome")) + " " + esc(S.account.name) + '</h3><div class="result"><div><span>' + esc(t("email")) + '</span><b style="font-size:15px">' + esc(S.account.email) + "</b></div><div><span>" + esc(t("plan")) + '</span><b style="font-family:var(--body);font-size:16px">' + esc(t(S.plan === "full" ? "plan_full" : "plan_free")) + '</b></div></div><div class="row"><a class="btn" href="#progress">' + esc(t("nav_progress")) + '</a><a class="btn" href="#plans">' + esc(t("nav_plans")) + '</a><button class="btn" data-act="logout">' + esc(t("logout")) + "</button></div></div>";
  } else {
    const isUp = accTab === "signup";
    inner = '<div class="tabs"><a href="#account" data-act="acc-tab" data-tab="signup"' + (isUp ? ' aria-current="page"' : "") + ">" + esc(t("signup")) + '</a><a href="#account" data-act="acc-tab" data-tab="login"' + (!isUp ? ' aria-current="page"' : "") + ">" + esc(t("login")) + '</a></div><form class="panel stack" data-form="' + accTab + '" novalidate>' + (isUp ? '<div class="field"><label for="acc-name">' + esc(t("name")) + '</label><input id="acc-name" autocomplete="name"></div>' : "") + '<div class="field"><label for="acc-email">' + esc(t("email")) + '</label><input id="acc-email" type="email" dir="ltr" autocomplete="email"></div><div><button class="btn primary" type="submit">' + esc(t(isUp ? "signup" : "login")) + "</button></div></form>";
  }
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("account_h")) + '</h1></div><div class="stack" style="padding-block:18px;max-width:520px"><div class="notice">' + esc(t("acc_demo")) + "</div>" + inner + (HOSTED ? '<div><a class="btn" href="#settings">' + esc(t("set_h")) + "</a></div>" : "") + '<div><button class="btn sm ' + (resetArmed ? "danger" : "ghost") + '" data-act="reset">' + esc(t(resetArmed ? "reset_sure" : "reset")) + "</button></div></div></div>";
}

/* ---------- shell & router ---------- */
function route() { return (location.hash || "").replace(/^#/, ""); }
let rendering = false;
function render() {
  if (rendering) return;
  rendering = true;
  try { renderNow(); } finally { rendering = false; }
}
function renderNow() {
  const r = route();
  document.documentElement.lang = S.lang; document.documentElement.dir = S.lang === "ar" ? "rtl" : "ltr";
  const nav = [["", "nav_home"], ["tracks", "nav_tracks"], ["chart", "nav_chart"], ["journal", "nav_services"], ["progress", "nav_progress"], ["plans", "nav_plans"]];
  const group = r === "settings" ? "account" : r.startsWith("l-") ? "tracks" : ["journal", "calc", "glossary"].includes(r) ? "journal" : r === "checkout" ? "plans" : r;
  $("#top").innerHTML = '<div class="wrap"><a class="brand" href="#">' + LOGO + "<span>" + esc(t("brand")) + '</span></a><nav class="nav" aria-label="main">' + nav.map(([h, k]) => '<a href="#' + h + '"' + (group === h ? ' aria-current="page"' : "") + ">" + esc(t(k)) + "</a>").join("") + '</nav><div class="tools"><button class="btn sm" data-act="lang" aria-label="language">' + (S.lang === "ar" ? "EN" : "ع") + '</button><a class="btn sm' + (S.signedIn ? "" : " primary") + '" href="#account">' + esc(S.signedIn && S.account ? S.account.name.split(" ")[0] : t("sign_in")) + "</a></div></div>";
  let html;
  if (r.startsWith("l-")) html = pageLesson(r.slice(2));
  else html = ({ "": pageHome, tracks: pageTracks, journal: pageJournal, calc: pageCalc, glossary: pageGlossary, progress: pageProgress, plans: pagePlans, checkout: pageCheckout, account: pageAccount, settings: pageSettings, chart: pageChart }[r] || pageHome)();
  $("#main").innerHTML = html;
  $("#foot").innerHTML = '<div class="wrap"><span>' + esc(t("disclaimer")) + "</span><span>" + esc(t("foot_data")) + "</span></div>";
  if (r === "calc") runCalc();
}
let lastRoute = null;
window.addEventListener("hashchange", () => { closing = deleting = null; resetArmed = false; render(); if (route() !== lastRoute) window.scrollTo(0, 0); lastRoute = route(); });

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act]"); if (!el) return;
  const act = el.dataset.act, id = el.dataset.id;
  if (act === "lang") { S.lang = S.lang === "ar" ? "en" : "ar"; save(); render(); }
  else if (act === "copy") {
    const code = el.closest(".code").querySelector("code").textContent;
    const ok = () => { el.textContent = t("copied"); setTimeout(() => { el.textContent = t("copy"); }, 1500); };
    try { navigator.clipboard.writeText(code).then(ok, () => {}); } catch (err) {}
  }
  else if (act === "practise") {
    const q = quoteOf(el.dataset.symbol), ls = LESSONS.find((x) => x.id === el.dataset.lesson);
    draft = { symbol: el.dataset.symbol, name: L(q.name), entry: q.price, qty: 100, lesson: ls ? ls.id : "", lessonTitle: ls ? L(ls.title) : "" };
    if (route() === "journal") render(); else location.hash = "journal";
  }
  else if (act === "quiz-check") {
    const l = LESSONS.find((x) => x.id === id), qs = quizState[id];
    if (Object.keys(qs.picks).length < l.quiz.length) { toast(t("answer_all")); return; }
    qs.checked = true;
    if (l.quiz.every((q, qi) => qs.picks[qi] === q.a)) { S.done[id] = { date: today() }; save(); toast(t("passed")); }
    render();
  }
  else if (act === "quiz-retry") { quizState[id] = { picks: {}, checked: false }; render(); }
  else if (act === "j-close") { closing = id; deleting = null; render(); const x = $("#c-exit"); if (x) x.focus(); }
  else if (act === "j-del") { deleting = id; closing = null; render(); }
  else if (act === "j-cancel") { closing = deleting = null; render(); }
  else if (act === "j-del-yes") { S.journal = S.journal.filter((j) => j.id !== id); S.deleted.push(id); deleting = null; save(); render(); }
  else if (act === "export-xlsx") exportXlsx();
  else if (act === "export-json") saveFile("meras-progress-" + today() + ".json", new Blob([JSON.stringify({ app: "meras", version: 1, exported: new Date().toISOString(), state: S }, null, 2)], { type: "application/json" }));
  else if (act === "pay") { S.plan = "full"; save(); toast(t("paid_ok")); location.hash = "tracks"; }
  else if (act === "cancel-plan") { S.plan = "free"; save(); toast(t("plan_cancelled")); render(); }
  else if (act === "logout") { S.signedIn = false; save(); render(); }
  else if (act === "acc-tab") { e.preventDefault(); accTab = el.dataset.tab; render(); }
  else if (act === "reset") {
    if (!resetArmed) { resetArmed = true; render(); return; }
    const lang = S.lang; S = blank(); S.lang = lang; quizState = {}; resetArmed = false; save(); toast(t("reset_done")); render();
  }
});

document.addEventListener("change", (e) => {
  const el = e.target;
  if (el.matches('input[type="radio"][data-q]')) { const id = route().slice(2); (quizState[id] || (quizState[id] = { picks: {}, checked: false })).picks[+el.dataset.q] = +el.value; }
  else if (el.id === "import-file" && el.files[0]) {
    const fr = new FileReader();
    fr.onload = () => {
      try {
        const data = JSON.parse(fr.result);
        if (!data || data.app !== "meras" || typeof data.state !== "object" || !Array.isArray(data.state.journal)) throw new Error("bad");
        S = Object.assign(blank(), data.state); save(); toast(t("imported")); render();
      } catch (err) { toast(t("bad_file")); }
    };
    fr.readAsText(el.files[0]);
  }
});
document.addEventListener("input", (e) => { if (e.target.matches("[data-calc]")) runCalc(); });

document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-form]"); if (!form || form.dataset.form === "sync") return;
  e.preventDefault();
  const val = (id) => (document.getElementById(id) || {}).value || "", kind = form.dataset.form;
  if (kind === "journal") {
    const symbol = val("j-symbol").trim(), qty = parseFloat(val("j-qty")), entry = parseFloat(val("j-entry"));
    if (!symbol || !(qty > 0) || !(entry > 0)) { toast(t("j_need")); return; }
    const stopV = parseFloat(val("j-stop")) || null, targetV = parseFloat(val("j-target")) || null;
    if (stopV && stopV >= entry) { toast(t("j_bad_stop")); return; }
    if (targetV && targetV <= entry) { toast(t("j_bad_target")); return; }
    const known = SAMPLE_QUOTES[symbol];
    S.journal.push({ id: "t" + Date.now().toString(36), symbol, name: val("j-name").trim() || (known ? L(known.name) : ""), qty, entry, stop: stopV, target: targetV, entryDate: val("j-date") || today(), reason: val("j-reason").trim(), lesson: val("j-lesson"), exit: null, exitDate: null, note: "", updated: Date.now() });
    save(); toast(t("j_saved")); render();
  } else if (kind === "close") {
    const j = S.journal.find((x) => x.id === form.dataset.id), exit = parseFloat(val("c-exit"));
    if (!j || !(exit > 0)) { toast(t("j_exit")); return; }
    j.exit = exit; j.exitDate = today(); j.note = val("c-note").trim(); j.updated = Date.now(); closing = null; save(); render();
  } else if (kind === "signup") {
    const name = val("acc-name").trim(), email = val("acc-email").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) { toast(t("need_fields")); return; }
    S.account = { name, email }; S.signedIn = true; save(); toast(t("welcome") + " " + name); render();
  } else if (kind === "login") {
    const email = val("acc-email").trim().toLowerCase();
    if (!S.account || S.account.email.toLowerCase() !== email) { toast(t("no_match")); return; }
    S.signedIn = true; save(); toast(t("welcome") + " " + S.account.name); render();
  }
});

function exportXlsx() {
  if (!window.XLSX) { toast(t("save_fail")); return; }
  const head = ["j_symbol", "j_name", "j_qty", "j_entry", "j_date", "j_stop", "j_target", "j_reason", "j_exit", "j_exit_date", "j_pl", "j_plpct", "j_status", "j_note", "from_lesson"].map(t);
  const rows = S.journal.map((j) => {
    const pl = plOf(j), ls = LESSONS.find((x) => x.id === j.lesson);
    return [j.symbol, j.name, j.qty, j.entry, j.entryDate, j.stop ?? "", j.target ?? "", j.reason, j.exit ?? "", j.exitDate ?? "", pl == null ? "" : +pl.toFixed(2), pl == null ? "" : +(((j.exit - j.entry) / j.entry) * 100).toFixed(2), j.exit == null ? t("j_open") : t("j_closed"), j.note, ls ? L(ls.title) : ""];
  });
  const ws = XLSX.utils.aoa_to_sheet([head].concat(rows));
  ws["!cols"] = head.map((h, i) => ({ wch: [7, 13].includes(i) ? 34 : i === 1 || i === 14 ? 22 : 13 }));
  if (S.lang === "ar") ws["!views"] = [{ RTL: true }];
  const wb = XLSX.utils.book_new();
  if (S.lang === "ar") wb.Workbook = { Views: [{ RTL: true }] };
  XLSX.utils.book_append_sheet(wb, ws, S.lang === "ar" ? "سجل التداول" : "Journal");
  const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  saveFile("meras-journal-" + today() + ".xlsx", new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
}
