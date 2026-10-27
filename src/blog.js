/* ===== مِراس: المدونة =====
   مقالات فريق مِراس (ثابتة هنا)، ومنشورات المستخدمين من Supabase بعد تسجيل الدخول.
   كل منشور يمر على فلتر ذكاء اصطناعي في السيرفر: لو فيه توصية شراء/بيع ينحجب (يظهر مغطى بنقاط) لين توافق الإدارة. */
Object.assign(UI, {
  nav_blog: ["المدونة", "Blog"], d_blog: ["مقالات وتجارب من فريق مِراس والمستخدمين.", "Articles and experiences from the Meras team and users."],
  bl_h: ["المدونة", "Blog"], bl_p: ["مقالات تعليمية، وتجارب يكتبها المستخدمين نتعلم منها ونطوّر فيها المنصة.", "Learning articles, and experiences written by users that help us improve the platform."],
  bl_team: ["فريق مِراس", "Meras team"], bl_read: ["{n} دقائق قراءة", "{n} min read"], bl_back: ["كل المقالات", "All posts"],
  bl_all: ["الكل", "All"], bl_ours: ["مقالات مِراس", "Meras articles"], bl_comm: ["من المستخدمين", "From users"],
  bl_write: ["اكتب منشور", "Write a post"], bl_login_to: ["سجّل دخولك عشان تكتب في المدونة.", "Sign in to write on the blog."],
  bl_soon: ["الكتابة للمستخدمين تفتح قريباً.", "User posts open soon."],
  bl_disc: ["هذا المحتوى رأي شخصي لكاتبه لأغراض تعليمية وتبادل الخبرات، وليس توصية بالشراء أو البيع أو الاحتفاظ بأي ورقة مالية، ولا يمثّل مِراس. قرارات الاستثمار مسؤوليتك، وننصح بالرجوع لمستشار مالي مرخّص من هيئة السوق المالية.", "This is the author's personal opinion, for learning and sharing experience. It is not a recommendation to buy, sell or hold any security and does not represent Meras. Investment decisions are your own; consult a CMA-licensed adviser."],
  bl_held: ["بانتظار مراجعة الإدارة", "Awaiting review"], bl_held_why: ["فلتر المنصة لقى فيه شي يشبه التوصية، فانحجب لين تراجعه الإدارة.", "Our filter found something that looks like a recommendation, so it is hidden until reviewed."],
  bl_held_own: ["منشورك انحجب مؤقتاً لأن فلتر المنصة لقى فيه شي يشبه التوصية. بيطلع بعد موافقة الإدارة.", "Your post is hidden for now because our filter found something like a recommendation. It will appear once approved."],
  bl_peek: ["اكشط لتشوف نصك", "Scratch to see your text"],
  bl_title: ["العنوان", "Title"], bl_body: ["وش تبي تشارك؟", "What would you like to share?"], bl_body_ph: ["تجربة، فكرة، درس تعلمته، أو ملاحظة على المنصة… بدون توصيات شراء أو بيع.", "An experience, idea, lesson, or platform feedback… no buy/sell recommendations."],
  bl_send: ["انشر", "Publish"], bl_sending: ["جاري الفحص والنشر…", "Checking and publishing…"], bl_pub_ok: ["انتشر منشورك ✓", "Your post is live ✓"],
  bl_pub_held: ["وصل منشورك، وبيطلع بعد مراجعة الإدارة.", "Received. It will appear after review."], bl_rules: ["ممنوع: توصيات شراء أو بيع، أسعار دخول وأهداف لسهم محدد، وروابط قنوات أو اشتراكات.", "Not allowed: buy/sell calls, entry prices or targets for a named share, and links to channels or paid groups."],
  bl_mod: ["بانتظار المراجعة", "Pending review"], bl_approve: ["اعتماد", "Approve"], bl_reject: ["رفض", "Reject"], bl_del: ["حذف", "Delete"], bl_mod_none: ["ما فيه منشورات بانتظار المراجعة.", "Nothing pending."],
  bl_ai: ["سبب الحجب:", "Flag reason:"], bl_email: ["البريد الإلكتروني", "Email"], bl_pass: ["كلمة المرور", "Password"], bl_name: ["الاسم اللي يظهر مع منشوراتك", "Display name"],
  bl_in: ["دخول", "Sign in"], bl_up: ["إنشاء حساب", "Create account"], bl_forgot: ["نسيت كلمة المرور؟", "Forgot password?"], bl_remember: ["تذكرني", "Remember me"],
  bl_have: ["عندك حساب؟", "Have an account?"], bl_new: ["ما عندك حساب؟", "New here?"], bl_out: ["تسجيل الخروج", "Sign out"], bl_hi: ["أهلاً {n}", "Hi {n}"],
  bl_sent_link: ["إذا الإيميل مسجّل بيوصلك رابط تعيين كلمة المرور.", "If the email exists, a reset link is on its way."], bl_confirm: ["أرسلنا لك رابط تأكيد على إيميلك. افتحه وبعدها سجّل دخولك.", "Check your email to confirm, then sign in."],
  bl_err_cred: ["الإيميل أو كلمة المرور غير صحيحة.", "Wrong email or password."], bl_err_short: ["كلمة المرور لازم تكون ٨ أحرف أو أكثر.", "Password must be at least 8 characters."], bl_err_email: ["اكتب إيميل صحيح.", "Enter a valid email."],
  bl_err_fill: ["اكتب العنوان والنص.", "Add a title and text."], bl_err_net: ["تعذّر الاتصال. جرّب مرة ثانية.", "Connection failed. Try again."], bl_newpw: ["كلمة مرور جديدة", "New password"], bl_pw_ok: ["تغيّرت كلمة المرور ✓", "Password changed ✓"]
});

/* ===== إعداد Supabase لمِراس (مشروع مستقل عن عقود) — قيم عامة وآمنة للنشر ===== */
const BL_SB = { url: "", key: "" };

const BL_POSTS = [
  { id: "habits", tag: "سلوك المتداول", min: 4, date: "2026-10-20", c: "tl", title: "خمس عادات تفرّق بين المتداول اللي يتعلّم والمتداول اللي يخسر",
    lead: "الخسارة جزء من السوق، لكن تكرار نفس الخسارة له أسباب واضحة. هذي خمس عادات نشوفها عند اللي يتطورون بسرعة.",
    body: [["h", "١. يكتب قبل ما يضغط"], ["p", "قبل أي صفقة، يكتب ثلاث أسطر: ليش داخل، وين يطلع لو غلط، ووين ياخذ ربحه. الكتابة تبطّئ القرار العاطفي، وتعطيك سجل تراجع فيه نفسك بعدين. سجل التداول في مِراس مصمم لهذا بالضبط."],
      ["h", "٢. يحدد الخسارة قبل الربح"], ["p", "المبتدئ يسأل «كم بربح؟»، والمتمرّس يسأل «كم أقدر أخسر لو طلع تحليلي غلط؟». لما تعرف خسارتك القصوى مسبقاً، تقدر تحدد حجم الصفقة بهدوء بدل ما يحددها الحماس."],
      ["h", "٣. ما يطارد السهم"], ["p", "السهم اللي ارتفع ٨٪ في ساعة يغري، لكن الدخول المتأخر يعني إن وقفك بعيد ومخاطرتك كبيرة. اللي يتعلّم ينتظر الفرصة تجيه، وإذا راحت يتركها تروح."],
      ["h", "٤. يراجع صفقاته الخاسرة أكثر من الرابحة"], ["p", "الصفقة الرابحة تعلّمك قليل لأنك ما تعرف هل ربحت بتحليلك أو بالحظ. الخاسرة لو راجعتها بصدق تكشف لك الخطأ المتكرر: دخول متسرّع، وقف ما احترمته، أو حجم أكبر من اللازم."],
      ["h", "٥. يتعلّم على أسعار حقيقية قبل فلوس حقيقية"], ["p", "التدرّب على الشارت والمختبر بأسعار السوق الفعلية يبني عندك الإحساس بالحركة بدون ما تدفع ثمنه. لما تدخل بفلوسك، تكون جرّبت قاعدتك عشرات المرات."]] },
  { id: "dividends", tag: "التوزيعات", min: 3, date: "2026-10-16", c: "ts", title: "تاريخ الاستحقاق وآخر يوم شراء: كيف تضمن التوزيع النقدي",
    lead: "أكثر سؤال يوصلنا عن التوزيعات: «اشتريت السهم، ليش ما نزل لي التوزيع؟». الجواب غالباً في التواريخ.",
    body: [["h", "ثلاث تواريخ لازم تفرّق بينها"], ["p", "تاريخ الإعلان هو اليوم اللي تعلن فيه الشركة عن التوزيع وقيمته. تاريخ الأحقية (الاستحقاق) هو اليوم اللي لازم تكون مالك السهم بنهاية تداوله. وتاريخ التوزيع هو اليوم اللي تنزل فيه الفلوس فعلياً في حسابك."],
      ["h", "ليش يوم الاستحقاق هو آخر يوم شراء؟"], ["p", "السوق السعودي يسوّي الصفقات بنظام T+2، يعني الملكية تنتقل في سجل المساهمين بعد يومين عمل من الشراء. والشركة تحدد المستحقين بأنهم المالكين بنهاية تداول يوم الاستحقاق والمقيّدين في السجل بنهاية ثاني يوم تداول بعده. فإذا اشتريت قبل إغلاق يوم الاستحقاق، تدخل في السجل في الوقت المناسب."],
      ["h", "انتبه لانخفاض السعر بعد الاستحقاق"], ["p", "في اليوم اللي بعد الاستحقاق، ينزل سعر السهم غالباً بمقدار قريب من قيمة التوزيع، لأن الفلوس صارت محجوزة لمستحقيها. فالشراء قبل الاستحقاق ثم البيع بعده مو ربح مجاني كما يتوقع البعض."],
      ["p", "صفحة التوزيعات في مِراس ترتّب لك الأسهم حسب أقرب تاريخ استحقاق، وتنبّهك قبله بوقت كافي."]] },
  { id: "levels", tag: "تحليل فني", min: 4, date: "2026-10-11", c: "tp", title: "الدعم والمقاومة: ذاكرة السوق مرسومة على الشارت",
    lead: "ليش يرتد السهم من نفس السعر مرة بعد مرة؟ لأن السوق يتذكّر، والناس اللي ندموا مرة ينتظرون فرصة ثانية.",
    body: [["h", "الفكرة ببساطة"], ["p", "الدعم سعر وقف عنده النزول أكثر من مرة لأن المشترين شافوه رخيص. المقاومة سعر وقف عنده الصعود لأن البائعين شافوه غالي، أو لأن اللي اشتروا فوقه يبون يطلعون بلا خسارة."],
      ["h", "ثلاث قواعد تخليها مفيدة"], ["p", "أولاً، المنطقة أهم من الرقم: ارسمها كشريط ضيق مو كخط واحد. ثانياً، كل ما زادت مرات اللمس والحجم عندها، زادت أهميتها. ثالثاً، المقاومة المكسورة بحجم قوي كثير تتحول لدعم، والعكس صحيح."],
      ["h", "الخطأ الشائع"], ["p", "رسم عشرين خط على الشارت. إذا كل سعر صار دعم، ما فيه دعم. اكتفِ بأوضح منطقتين فوق السعر وتحته، وخلّ الشارت نظيف عشان تشوف القرار."],
      ["p", "جرّب في الشارت أداة الخط الأفقي على سهم تعرفه، وارجع لسنة كاملة: بتشوف كيف تكررت نفس المناطق."]] },
  { id: "risk", tag: "إدارة المخاطر", min: 3, date: "2026-10-06", c: "ta", title: "قاعدة ١٪: الحساب البسيط اللي يحمي محفظتك من الضربة القاضية",
    lead: "أكبر عدو للمحفظة مو الصفقة الخاسرة، بل الصفقة الخاسرة الكبيرة. قاعدة ١٪ تخلي أي خطأ قابل للإصلاح.",
    body: [["h", "وش معناها؟"], ["p", "ما تخاطر في أي صفقة بأكثر من ١٪ من قيمة محفظتك. مو إنك تشتري بـ١٪، بل إن الفرق بين سعر دخولك ووقفك مضروب في عدد الأسهم ما يتجاوز ١٪ من المحفظة."],
      ["h", "مثال بالأرقام"], ["p", "محفظتك ١٠٠ ألف ريال، فالمخاطرة القصوى ألف ريال. تبي تدخل سهم سعره ٥٠ ريال ووقفك عند ٤٧، يعني تخاطر ٣ ريال في السهم. ألف ريال ÷ ٣ = حوالي ٣٣٣ سهم، يعني صفقة بقيمة ١٦٬٦٥٠ ريال تقريباً."],
      ["h", "ليش تشتغل؟"], ["p", "عشر صفقات خاسرة متتالية، وهذا يصير، تنقص محفظتك حوالي ١٠٪ فقط. تقدر ترجع منها. أما لو خاطرت ١٠٪ في كل صفقة، ثلاث خسارات تكفي تهز ثقتك ومحفظتك."],
      ["p", "حاسبة الصفقة في مِراس تسوي هذا الحساب لك: حط السعر والوقف ونسبة المخاطرة، وتعطيك عدد الأسهم."]] },
  { id: "identity", tag: "أساسيات", min: 3, date: "2026-09-30", c: "tl", title: "مستثمر أو مضارب؟ اختر هويتك قبل أول صفقة",
    lead: "كثير يدخل السوق مستثمر، وأول ما ينزل السهم يتحول لمضارب، وأول ما يرتفع يتحول لمستثمر. وهنا تبدأ المشكلة.",
    body: [["h", "المستثمر"], ["p", "يشتري جزء من شركة لأنه مقتنع بأرباحها ونموها على سنوات. يهمه المكرر والتوزيعات والديون، ونزول السعر عنده فرصة لزيادة الكمية لو ما تغيّرت القصة."],
      ["h", "المضارب"], ["p", "يشتري حركة سعر لأيام أو أسابيع. يهمه الاتجاه والحجم والدعوم، وعنده وقف خسارة محدد يحترمه بدون نقاش، لأن سهمه مو زواج بل صفقة."],
      ["h", "ليش لازم تختار؟"], ["p", "لأن كل هوية لها أدوات وقواعد مختلفة. الخلط بينها يخليك تمسك سهم خاسر باسم الاستثمار، وتبيع سهم ممتاز بدري باسم المضاربة. تقدر تكون الاثنين، بس في محفظتين منفصلتين وبقواعد واضحة لكل وحدة."]] },
  { id: "rsi", tag: "مؤشرات", min: 4, date: "2026-09-24", c: "ts", title: "RSI بدون خدع: متى يكون التشبع إشارة، ومتى يكون فخ",
    lead: "مؤشر القوة النسبية من أشهر المؤشرات، ومن أكثرها سوء فهم. فوق ٧٠ ما تعني «بيع»، وتحت ٣٠ ما تعني «اشترِ».",
    body: [["h", "وش يقيس فعلاً؟"], ["p", "يقارن قوة أيام الصعود بقوة أيام النزول خلال فترة (عادة ١٤ يوم)، ويعطي رقم من صفر لمئة. فوق ٧٠ يعني الصعود كان قوي جداً مؤخراً، وتحت ٣٠ يعني النزول كان قوي جداً."],
      ["h", "الفخ الأول: التشبع في اتجاه قوي"], ["p", "في الاتجاه الصاعد القوي، ممكن يبقى RSI فوق ٧٠ أسابيع والسهم يواصل. البيع لمجرد التشبع هنا يطلعك بدري من أفضل جزء في الحركة."],
      ["h", "الاستخدام الأذكى"], ["p", "راقب الدايفرجنس: السعر يسوي قمة أعلى والمؤشر يسوي قمة أقل، وهذا يدل إن الزخم يضعف. وانتبه لمنطقة ٤٠–٥٠ في الاتجاه الصاعد: ارتداد RSI منها كثير يكون فرصة أوضح من انتظار ٣٠."],
      ["p", "في مختبر مِراس تقدر تختبر قاعدة RSI على سنة كاملة من أسعار حقيقية، وتشوف نتيجتها قبل ما تثق فيها."]] }
];

const BL = { tab: "all", sb: null, loading: false, user: null, prof: null, posts: [], held: [], mine: [], pending: [], view: "login", msg: "", msgOk: false, compose: false, sending: false, peek: {} };
const blReady = () => !!(BL_SB.url && BL_SB.key);
const blDate = (d) => { try { return new Date(d).toLocaleDateString(S.lang === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return d; } };

/* ---------- Supabase ---------- */
function blLoadLib() {
  if (window.supabase) return Promise.resolve();
  return new Promise((ok, no) => { const s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
}
async function blInit() {
  if (!blReady() || BL.sb || BL.loading) return; BL.loading = true;
  try {
    await blLoadLib();
    let remember = true; try { remember = localStorage.getItem("meras.bl.rem") !== "0"; } catch (e) {}
    BL.sb = window.supabase.createClient(BL_SB.url, BL_SB.key, { auth: { storageKey: "meras.blauth", storage: remember ? localStorage : sessionStorage, persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
    BL.sb.auth.onAuthStateChange((ev, ses) => { if (ev === "PASSWORD_RECOVERY") BL.view = "reset"; setTimeout(() => blSetUser(ses ? ses.user : null), 0); });
    const { data } = await BL.sb.auth.getSession();
    await blSetUser(data.session ? data.session.user : null, true);
  } catch (e) { BL.msg = t("bl_err_net"); }
  BL.loading = false; blPaint();
}
async function blSetUser(u, quiet) {
  const same = (u && u.id) === (BL.user && BL.user.id) && BL.prof;
  BL.user = u;
  if (!u) BL.prof = null; else if (!same) { const { data } = await BL.sb.from("profiles").select("*").eq("id", u.id).maybeSingle(); BL.prof = data || { name: (u.user_metadata && u.user_metadata.name) || u.email.split("@")[0] }; }
  await blFetch(); if (!quiet) blPaint();
}
async function blFetch() {
  if (!BL.sb) return;
  const [a, b] = await Promise.all([
    BL.sb.from("posts").select("id,author,author_name,title,body,created_at,status").eq("status", "published").order("created_at", { ascending: false }).limit(60),
    BL.sb.rpc("held_stubs")
  ]);
  BL.posts = a.data || []; BL.held = b.data || [];
  BL.mine = []; BL.pending = [];
  if (BL.user) { const { data } = await BL.sb.from("posts").select("*").eq("author", BL.user.id).neq("status", "published").order("created_at", { ascending: false }); BL.mine = data || []; }
  if (BL.prof && BL.prof.is_admin) { const { data } = await BL.sb.from("posts").select("*").eq("status", "held").order("created_at", { ascending: true }); BL.pending = data || []; }
}

/* ---------- الواجهة ---------- */
function blCard(p) {
  return '<a class="bl-card b-' + p.c.slice(1) + '" href="#b-' + p.id + '"><span class="bl-tag">' + esc(p.tag) + '</span><h3>' + esc(p.title) + '</h3><p>' + esc(p.lead) + '</p><span class="bl-meta small muted">' + esc(t("bl_team")) + " · " + esc(blDate(p.date)) + " · " + esc(t("bl_read").replace("{n}", p.min)) + "</span></a>";
}
function blUserPost(p) {
  return '<article class="bl-up panel"><header class="bl-upH"><span class="bl-av">' + esc((p.author_name || "؟").trim()[0]) + '</span><div><b>' + esc(p.author_name || "") + '</b><span class="small muted">' + esc(blDate(p.created_at)) + '</span></div></header><h3>' + esc(p.title) + '</h3><div class="bl-upB">' + esc(p.body).replace(/\n/g, "<br>") + '</div><p class="bl-disc small">' + esc(t("bl_disc")) + "</p>" +
    (BL.prof && BL.prof.is_admin ? '<div class="row" style="gap:6px"><button class="btn sm ghost" data-act="bl-del" data-id="' + p.id + '">' + esc(t("bl_del")) + "</button></div>" : "") + "</article>";
}
function blHeldCard(p, own) {
  const body = own ? p.body : "";
  return '<article class="bl-up panel bl-held"><header class="bl-upH"><span class="bl-av">' + esc((p.author_name || "؟").trim()[0]) + '</span><div><b>' + esc(p.author_name || "") + '</b><span class="small muted">' + esc(blDate(p.created_at)) + '</span></div><span class="tag amber">' + esc(t("bl_held")) + '</span></header>' +
    '<div class="bl-scratch' + (own && BL.peek[p.id] ? " open" : "") + '"' + (own ? ' data-act="bl-peek" data-id="' + p.id + '" role="button" tabindex="0" aria-label="' + esc(t("bl_peek")) + '"' : "") + '><div class="bl-scr-txt">' + (own ? "<h3>" + esc(p.title) + "</h3>" + esc(body).replace(/\n/g, "<br>") : "<span></span><span></span><span></span>") + '</div><div class="bl-scr-cover"><span>🔒 ' + esc(t(own ? "bl_peek" : "bl_held")) + "</span></div></div>" +
    '<p class="small muted" style="margin:0">' + esc(t(own ? "bl_held_own" : "bl_held_why")) + "</p></article>";
}
function blAuthBox() {
  if (!blReady()) return '<div class="notice">' + esc(t("bl_soon")) + "</div>";
  if (BL.loading && !BL.sb) return '<p class="small muted">…</p>';
  const m = BL.msg ? '<p class="small ' + (BL.msgOk ? "bl-ok" : "bl-err") + '" role="status">' + esc(BL.msg) + "</p>" : "";
  const pw = (id, ac) => '<div class="field"><label for="' + id + '">' + esc(t(id === "bl-np" ? "bl_newpw" : "bl_pass")) + '</label><div class="bl-pw"><input id="' + id + '" type="password" dir="ltr" autocomplete="' + ac + '"><button type="button" class="bl-eye" data-act="bl-eye" data-for="' + id + '" aria-label="👁">👁</button></div></div>';
  const em = '<div class="field"><label for="bl-em">' + esc(t("bl_email")) + '</label><input id="bl-em" type="email" dir="ltr" autocomplete="email"></div>';
  if (BL.user && BL.view !== "reset") return "";
  if (BL.view === "reset") return '<form class="panel stack bl-auth" data-form="bl-reset" novalidate><h3>' + esc(t("bl_newpw")) + "</h3>" + pw("bl-np", "new-password") + m + '<button class="btn primary">' + esc(t("ai_save") || "حفظ") + "</button></form>";
  if (BL.view === "forgot") return '<form class="panel stack bl-auth" data-form="bl-forgot" novalidate><h3>' + esc(t("bl_forgot")) + "</h3>" + em + m + '<button class="btn primary">' + esc(t("bl_send")) + '</button><button type="button" class="btn ghost sm" data-act="bl-view" data-v="login">' + esc(t("bl_in")) + "</button></form>";
  if (BL.view === "signup") return '<form class="panel stack bl-auth" data-form="bl-signup" novalidate><h3>' + esc(t("bl_up")) + '</h3><div class="field"><label for="bl-nm">' + esc(t("bl_name")) + '</label><input id="bl-nm" autocomplete="nickname" maxlength="40"></div>' + em + pw("bl-pw", "new-password") + m + '<button class="btn primary">' + esc(t("bl_up")) + '</button><p class="small muted" style="margin:0">' + esc(t("bl_have")) + ' <button type="button" class="btn ghost sm" data-act="bl-view" data-v="login">' + esc(t("bl_in")) + "</button></p></form>";
  let rem = true; try { rem = localStorage.getItem("meras.bl.rem") !== "0"; } catch (e) {}
  return '<form class="panel stack bl-auth" data-form="bl-login" novalidate><h3>' + esc(t("bl_in")) + '</h3><p class="small muted" style="margin:0">' + esc(t("bl_login_to")) + "</p>" + em + pw("bl-pw", "current-password") +
    '<div class="row" style="justify-content:space-between"><label class="small row" style="gap:6px"><input type="checkbox" id="bl-rem"' + (rem ? " checked" : "") + "> " + esc(t("bl_remember")) + '</label><button type="button" class="btn ghost sm" data-act="bl-view" data-v="forgot">' + esc(t("bl_forgot")) + "</button></div>" + m +
    '<button class="btn primary">' + esc(t("bl_in")) + '</button><p class="small muted" style="margin:0">' + esc(t("bl_new")) + ' <button type="button" class="btn ghost sm" data-act="bl-view" data-v="signup">' + esc(t("bl_up")) + "</button></p></form>";
}
function blCompose() {
  if (!BL.user) return "";
  const m = BL.msg ? '<p class="small ' + (BL.msgOk ? "bl-ok" : "bl-err") + '" role="status">' + esc(BL.msg) + "</p>" : "";
  return '<div class="panel stack bl-me"><div class="row" style="justify-content:space-between"><b>' + esc(t("bl_hi").replace("{n}", (BL.prof && BL.prof.name) || "")) + '</b><button class="btn ghost sm" data-act="bl-out">' + esc(t("bl_out")) + "</button></div>" +
    (BL.compose ? '<form class="stack" data-form="bl-post" novalidate><div class="field"><label for="bl-t">' + esc(t("bl_title")) + '</label><input id="bl-t" maxlength="120"></div><div class="field"><label for="bl-b">' + esc(t("bl_body")) + '</label><textarea id="bl-b" rows="6" maxlength="5000" placeholder="' + esc(t("bl_body_ph")) + '"></textarea></div><p class="small muted" style="margin:0">' + esc(t("bl_rules")) + "</p>" + m + '<div class="row"><button class="btn primary"' + (BL.sending ? " disabled" : "") + ">" + esc(t(BL.sending ? "bl_sending" : "bl_send")) + '</button><button type="button" class="btn ghost" data-act="bl-compose">✕</button></div></form>'
      : m + '<button class="btn primary" data-act="bl-compose">✎ ' + esc(t("bl_write")) + "</button>") + "</div>";
}
function blModeration() {
  if (!(BL.prof && BL.prof.is_admin)) return "";
  return '<details class="panel bl-mod" open><summary><b>' + esc(t("bl_mod")) + '</b> <span class="tag amber">' + BL.pending.length + "</span></summary>" +
    (BL.pending.length ? BL.pending.map((p) => '<div class="bl-modi"><b>' + esc(p.title) + '</b><span class="small muted"> — ' + esc(p.author_name || "") + " · " + esc(blDate(p.created_at)) + '</span><div class="bl-upB">' + esc(p.body).replace(/\n/g, "<br>") + "</div>" + (p.ai_reason ? '<p class="small bl-err" style="margin:4px 0">' + esc(t("bl_ai")) + " " + esc(p.ai_reason) + "</p>" : "") +
      '<div class="row" style="gap:6px"><button class="btn sm primary" data-act="bl-ok" data-id="' + p.id + '">' + esc(t("bl_approve")) + '</button><button class="btn sm ghost" data-act="bl-no" data-id="' + p.id + '">' + esc(t("bl_reject")) + "</button></div></div>").join("") : '<p class="small muted">' + esc(t("bl_mod_none")) + "</p>") + "</details>";
}
function pageBlog() {
  if (blReady() && !BL.sb && !BL.loading) setTimeout(blInit, 0);
  const tabs = [["all", "bl_all"], ["ours", "bl_ours"], ["comm", "bl_comm"]];
  const ours = BL.tab !== "comm" ? '<div class="bl-grid">' + BL_POSTS.map(blCard).join("") + "</div>" : "";
  const heldOthers = BL.held.filter((h) => !(BL.user && h.author === BL.user.id));
  const comm = BL.tab !== "ours" ? '<div class="stack" style="gap:12px">' + BL.mine.filter((p) => p.status === "held").map((p) => blHeldCard(p, true)).join("") + BL.posts.map(blUserPost).join("") + heldOthers.map((p) => blHeldCard(p, false)).join("") +
    (!BL.posts.length && !heldOthers.length && !BL.mine.length && BL.tab === "comm" ? '<div class="notice">' + esc(blReady() ? t("bl_login_to") : t("bl_soon")) + "</div>" : "") + "</div>" : "";
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("bl_h")) + "</h1><p>" + esc(t("bl_p")) + '</p></div><div class="bl-wrap" style="padding-block:18px 40px"><div class="stack bl-main" id="bl-main"><div class="bl-tabs" role="tablist">' +
    tabs.map(([k, l]) => '<button type="button" role="tab" data-act="bl-tab" data-t="' + k + '" aria-selected="' + (BL.tab === k) + '">' + esc(t(l)) + "</button>").join("") + "</div>" + blModeration() + ours + (BL.tab === "all" && (BL.posts.length || BL.held.length || BL.mine.length) ? "<h2 class=\"bl-sub\">" + esc(t("bl_comm")) + "</h2>" : "") + comm +
    '</div><aside class="stack bl-side" id="bl-side">' + blCompose() + blAuthBox() + '<p class="bl-disc small">' + esc(t("bl_disc")) + "</p></aside></div></div>";
}
function pageBlogPost(id) {
  const p = BL_POSTS.find((x) => x.id === id);
  if (!p) return pageBlog();
  const more = BL_POSTS.filter((x) => x.id !== id).slice(0, 3);
  return '<div class="wrap"><article class="bl-art b-' + p.c.slice(1) + '"><a class="btn ghost sm" href="#blog">← ' + esc(t("bl_back")) + '</a><span class="bl-tag">' + esc(p.tag) + "</span><h1>" + esc(p.title) + '</h1><p class="bl-meta small muted">' + esc(t("bl_team")) + " · " + esc(blDate(p.date)) + " · " + esc(t("bl_read").replace("{n}", p.min)) + '</p><p class="bl-lead">' + esc(p.lead) + "</p>" +
    p.body.map(([k, v]) => (k === "h" ? "<h2>" + esc(v) + "</h2>" : "<p>" + esc(v) + "</p>")).join("") + '<p class="bl-disc small">' + esc(t("bl_disc")) + '</p></article><div class="bl-grid" style="margin-block:10px 40px">' + more.map(blCard).join("") + "</div></div>";
}
function blPaint() {
  const r = typeof route === "function" ? route() : "";
  if (r !== "blog") return;
  const tmp = document.createElement("div"); tmp.innerHTML = pageBlog();
  ["bl-main", "bl-side"].forEach((id) => { const a = document.getElementById(id), b = tmp.querySelector("#" + id); if (a && b) a.innerHTML = b.innerHTML; });
}

/* ---------- الأحداث ---------- */
const blErr = (e) => { const m = String((e && e.message) || e || ""); if (/Invalid login/i.test(m)) return t("bl_err_cred"); if (/at least|Password should/i.test(m)) return t("bl_err_short"); if (/fetch|network/i.test(m)) return t("bl_err_net"); return m || t("bl_err_net"); };
const blMsg = (m, ok) => { BL.msg = m; BL.msgOk = !!ok; blPaint(); };
document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="bl-"]'); if (!el) return;
  const a = el.dataset.act;
  if (a === "bl-tab") { BL.tab = el.dataset.t; blPaint(); return; }
  if (a === "bl-view") { BL.view = el.dataset.v; BL.msg = ""; blPaint(); return; }
  if (a === "bl-eye") { const i = document.getElementById(el.dataset.for); if (i) i.type = i.type === "password" ? "text" : "password"; return; }
  if (a === "bl-compose") { BL.compose = !BL.compose; BL.msg = ""; blPaint(); if (BL.compose) setTimeout(() => { const i = document.getElementById("bl-t"); if (i) i.focus(); }, 0); return; }
  if (a === "bl-peek") { BL.peek[el.dataset.id] = !BL.peek[el.dataset.id]; el.classList.toggle("open", !!BL.peek[el.dataset.id]); return; }
  if (!BL.sb) return;
  if (a === "bl-out") { await BL.sb.auth.signOut(); BL.compose = false; BL.msg = ""; return; }
  if (a === "bl-ok" || a === "bl-no") { el.disabled = true; await BL.sb.from("posts").update({ status: a === "bl-ok" ? "published" : "rejected", reviewed_at: new Date().toISOString() }).eq("id", el.dataset.id); await blFetch(); blPaint(); return; }
  if (a === "bl-del") { if (el.dataset.sure !== "1") { el.dataset.sure = "1"; el.textContent = "؟"; return; } await BL.sb.from("posts").delete().eq("id", el.dataset.id); await blFetch(); blPaint(); }
});
document.addEventListener("submit", async (e) => {
  const f = e.target; if (!f.dataset || !/^bl-/.test(f.dataset.form || "")) return;
  e.preventDefault(); if (!BL.sb) return;
  const v = (id) => { const x = document.getElementById(id); return x ? x.value.trim() : ""; };
  const kind = f.dataset.form, okEmail = (x) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
  const page = location.href.split("#")[0] + "#blog";
  try {
    if (kind === "bl-login") {
      if (!okEmail(v("bl-em"))) return blMsg(t("bl_err_email"));
      const rem = document.getElementById("bl-rem").checked; let was = true; try { was = localStorage.getItem("meras.bl.rem") !== "0"; localStorage.setItem("meras.bl.rem", rem ? "1" : "0"); } catch (x) {}
      if (rem !== was) { BL.sb = null; await blInit(); }
      const { error } = await BL.sb.auth.signInWithPassword({ email: v("bl-em"), password: document.getElementById("bl-pw").value });
      if (error) return blMsg(blErr(error)); BL.msg = "";
    } else if (kind === "bl-signup") {
      const pw = document.getElementById("bl-pw").value;
      if (!okEmail(v("bl-em"))) return blMsg(t("bl_err_email")); if (pw.length < 8) return blMsg(t("bl_err_short"));
      const { data, error } = await BL.sb.auth.signUp({ email: v("bl-em"), password: pw, options: { data: { name: v("bl-nm") || v("bl-em").split("@")[0] }, emailRedirectTo: page } });
      if (error) return blMsg(blErr(error)); if (!data.session) blMsg(t("bl_confirm"), true);
    } else if (kind === "bl-forgot") {
      if (!okEmail(v("bl-em"))) return blMsg(t("bl_err_email"));
      await BL.sb.auth.resetPasswordForEmail(v("bl-em"), { redirectTo: page }); blMsg(t("bl_sent_link"), true);
    } else if (kind === "bl-reset") {
      const pw = document.getElementById("bl-np").value; if (pw.length < 8) return blMsg(t("bl_err_short"));
      const { error } = await BL.sb.auth.updateUser({ password: pw }); if (error) return blMsg(blErr(error)); BL.view = "login"; blMsg(t("bl_pw_ok"), true);
    } else if (kind === "bl-post") {
      const title = v("bl-t"), body = v("bl-b"); if (!title || !body) return blMsg(t("bl_err_fill"));
      BL.sending = true; blPaint();
      const { data, error } = await BL.sb.functions.invoke("post", { body: { title, body } });
      BL.sending = false;
      if (error) { let m = error.message; try { const j = await error.context.json(); if (j && j.error) m = j.error; } catch (x) {} return blMsg(m); }
      BL.compose = false; await blFetch(); blMsg(t(data && data.status === "published" ? "bl_pub_ok" : "bl_pub_held"), true);
    }
  } catch (x) { BL.sending = false; blMsg(blErr(x)); }
}, true);
document.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && e.target.dataset && e.target.dataset.act === "bl-peek") { e.preventDefault(); e.target.click(); } });
