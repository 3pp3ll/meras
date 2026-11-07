/* ===== مِراس: سياسة الخصوصية وشروط الاستخدام =====
   صفحتان #privacy و #terms، بالعربي والإنجليزي، مكتوبة على ضوء نظام حماية البيانات الشخصية السعودي.
   LEGAL_MAIL: بريد التواصل لطلبات البيانات. إذا كان فاضي تظهر جملة إنه بينضاف قريباً. */
const LEGAL_MAIL = "";
const LEGAL_DATE = "2026-11-07";
Object.assign(UI, {
  lg_priv: ["سياسة الخصوصية", "Privacy policy"], lg_terms: ["شروط الاستخدام", "Terms of use"],
  lg_upd: ["آخر تحديث: {d}", "Last updated: {d}"],
  lg_agree: ["أوافق على {t} و{p}", "I agree to the {t} and the {p}"],
  lg_e_agree: ["لازم توافق على شروط الاستخدام وسياسة الخصوصية عشان تنشئ حساب.", "Please agree to the terms of use and the privacy policy to create an account."],
  lg_contact: ["تواصل معنا", "Contact us"]
});

const LEGAL = {
  privacy: {
    ar: [
      ["", "مِراس منصة تعليمية للسوق المالية. هذي الصفحة توضح وش البيانات اللي نجمعها، وليش، ووين تنحفظ، وكيف تتحكم فيها. كتبناها على ضوء نظام حماية البيانات الشخصية في المملكة العربية السعودية."],
      ["البيانات اللي نجمعها", [
        "بيانات الحساب: الاسم والبريد الإلكتروني وكلمة المرور. كلمة المرور تنحفظ مشفّرة عند مزوّد الحسابات، وما نقدر نشوفها.",
        "بياناتك داخل المنصة: محفظتك وسجل تداولك وقائمتك وتقدمك في الدروس وإعداداتك. تنحفظ في جهازك، وإذا سجلت دخول تنحفظ نسخة منها في حسابك عشان توصلك من أي جهاز.",
        "روابط الإحالة: إذا دخلت من رابط إحالة، نحفظ في جهازك رمز عشوائي ورمز الرابط لمدة 60 يوم، ونحسب الزيارة والتسجيل بدون اسمك أو بريدك.",
        "أسئلتك للمساعد: إذا استخدمت المساعد الذكي، يوصل سؤالك وبيانات الشارت المعروض لمزوّد الذكاء الاصطناعي عشان يرد عليك."
      ]],
      ["البيانات اللي ما نجمعها", [
        "ما نطلب رقم هوية ولا رقم جوال ولا بيانات حساب التداول أو البنك.",
        "ما نستخدم أدوات تتبع إعلانية، وما نبيع بياناتك ولا نشاركها لأغراض تسويقية."
      ]],
      ["ليش نستخدمها", [
        "عشان نشغّل حسابك ونحفظ بياناتك ونزامنها بين أجهزتك.",
        "عشان نعرض لك تقدمك ونقترح لك الدروس المناسبة.",
        "عشان نعرف من وين جا الزوار من روابط الإحالة، كأرقام إجمالية فقط.",
        "عشان نحمي المنصة من سوء الاستخدام."
      ]],
      ["وين تنحفظ", [
        "الحسابات والبيانات المتزامنة تنحفظ عند مزوّد قواعد البيانات Supabase، وخوادمه خارج المملكة. بإنشاء حساب توافق على نقل بياناتك وحفظها هناك لهذا الغرض فقط.",
        "المنصة نفسها مستضافة على GitHub Pages، وبيانات الأسعار تجي من مزوّدين خارجيين، وهذول ما يستلمون بياناتك الشخصية.",
        "أسئلة المساعد تمر عبر OpenRouter إلى نموذج الذكاء الاصطناعي اللي اخترته."
      ]],
      ["حقوقك", [
        "تقدر تطّلع على بياناتك وتصحّحها من داخل المنصة في أي وقت.",
        "تقدر تنزّل نسخة من بياناتك من صفحة «تقدّمي».",
        "تقدر تطلب حذف حسابك وكل بياناته، وننفّذ الطلب خلال 30 يوم.",
        "تقدر تسحب موافقتك في أي وقت، وسحبها يعني حذف الحساب."
      ]],
      ["مدة الحفظ", "نحفظ بيانات حسابك ما دام الحساب موجود. إذا حذفته تنحذف بياناته من قواعد بياناتنا، وممكن تبقى نسخ احتياطية عند المزوّد لمدة محدودة قبل ما تنمسح تلقائياً."],
      ["الأمان", "الاتصال مشفّر، وكل مستخدم يوصل لبياناته فقط بصلاحيات على مستوى قاعدة البيانات، ولوحة المالك محمية بتحقق ثنائي. ومع ذلك ما فيه نظام على الإنترنت آمن بالكامل، فاختر كلمة مرور قوية وما تشاركها."],
      ["الأعمار", "المنصة موجهة لمن عمره 18 سنة فأكثر."],
      ["التعديلات", "إذا غيّرنا هذي السياسة بشكل مهم، نحدّث تاريخها فوق ونعلن عنها داخل المنصة."]
    ],
    en: [
      ["", "Meras is an educational platform for the stock market. This page explains what data we collect, why, where it is stored and how you control it. It is written with the Saudi Personal Data Protection Law in mind."],
      ["What we collect", [
        "Account data: your name, email and password. The password is stored hashed by the account provider and we cannot see it.",
        "Your data in the platform: portfolio, trading journal, watchlist, lesson progress and settings. It is stored on your device, and when you sign in a copy is kept in your account so it reaches you on any device.",
        "Referral links: if you arrive from a referral link, a random code and the link's code are kept on your device for 60 days, and the visit and sign-up are counted without your name or email.",
        "Assistant questions: when you use the AI assistant, your question and the data of the chart on screen are sent to the AI provider to answer you."
      ]],
      ["What we do not collect", [
        "We never ask for an ID number, phone number, or brokerage or bank details.",
        "We use no advertising trackers, and we do not sell or share your data for marketing."
      ]],
      ["Why we use it", [
        "To run your account, keep your data and sync it across your devices.",
        "To show your progress and suggest the right lessons.",
        "To see where referral visits come from, as totals only.",
        "To protect the platform from misuse."
      ]],
      ["Where it is stored", [
        "Accounts and synced data are stored with the database provider Supabase, whose servers are outside Saudi Arabia. By creating an account you agree to your data being transferred and kept there for this purpose only.",
        "The platform itself is hosted on GitHub Pages, and price data comes from outside providers; neither receives your personal data.",
        "Assistant questions pass through OpenRouter to the AI model you chose."
      ]],
      ["Your rights", [
        "You can view and correct your data inside the platform at any time.",
        "You can download a copy of your data from the Progress page.",
        "You can ask us to delete your account and all its data, and we do it within 30 days.",
        "You can withdraw your consent at any time; withdrawing means deleting the account."
      ]],
      ["How long we keep it", "We keep your account data while the account exists. When you delete it, its data is removed from our databases; provider backups may remain for a limited time before they are erased automatically."],
      ["Security", "Connections are encrypted, each user reaches only their own data through database-level permissions, and the owner's desk is protected by two-step verification. No online system is fully secure, so choose a strong password and do not share it."],
      ["Age", "The platform is meant for people aged 18 and over."],
      ["Changes", "If we change this policy in a meaningful way, we update the date above and announce it in the platform."]
    ]
  },
  terms: {
    ar: [
      ["", "باستخدامك مِراس أو إنشاء حساب فيها، توافق على هذي الشروط."],
      ["محتوى تعليمي وليس توصية", [
        "كل ما في مِراس من دروس وتحليلات وقراءات فنية وتنبيهات وردود المساعد هو محتوى تعليمي، وليس توصية بشراء أو بيع أي ورقة مالية، ولا مشورة مالية أو استثمارية أو شرعية.",
        "مِراس ليست جهة مرخصة من هيئة السوق المالية، وما تدير أموال أحد ولا تنفذ أي أوامر تداول.",
        "قراراتك الاستثمارية مسؤوليتك أنت، والاستثمار في الأسهم فيه مخاطرة وممكن تخسر جزء من مالك أو كله."
      ]],
      ["دقة البيانات", [
        "الأسعار والأخبار والتوزيعات تجي من مزوّدين خارجيين، وممكن تتأخر أو يكون فيها خطأ. تأكد من المصدر الرسمي قبل أي قرار.",
        "أحكام الفرز الشرعي منقولة من الهيئات الشرعية كما نشرتها، وليست فتوى من مِراس.",
        "المساعد الذكي ممكن يخطئ، والأرقام الصحيحة هي اللي تظهر في المنصة."
      ]],
      ["حسابك", [
        "أنت مسؤول عن سرية كلمة مرورك وعن أي استخدام لحسابك.",
        "حساب واحد لكل شخص، وبيانات صحيحة عند التسجيل.",
        "نقدر نوقف أي حساب يخالف هذي الشروط."
      ]],
      ["الاستخدام المقبول", [
        "ممنوع نسخ المنصة أو تصميمها أو محتواها أو إعادة نشره أو بيعه بدون إذن مكتوب.",
        "ممنوع سحب البيانات آلياً أو محاولة الوصول لبيانات غيرك أو تعطيل المنصة.",
        "ممنوع استخدام المنصة لنشر توصيات أو الترويج لخدمات مالية غير مرخصة."
      ]],
      ["الحقوق", "تأسست المنصة عام 2026م، وجميع حقوق التصميم والمحتوى والاسم محفوظة لـ«مِراس»."],
      ["الاشتراكات", "إذا توفرت باقات مدفوعة، تظهر أسعارها وتفاصيل التجديد والإلغاء في صفحة الباقات قبل الدفع."],
      ["حدود المسؤولية", "مِراس تُقدَّم «كما هي». ما نتحمل أي خسارة مالية أو ضرر ينتج عن استخدام المنصة أو الاعتماد على محتواها أو انقطاعها."],
      ["النظام المطبق", "تخضع هذي الشروط لأنظمة المملكة العربية السعودية."],
      ["التعديلات", "ممكن نحدّث هذي الشروط، واستمرارك في استخدام المنصة بعد التحديث يعني موافقتك عليها."]
    ],
    en: [
      ["", "By using Meras or creating an account, you agree to these terms."],
      ["Educational content, not a recommendation", [
        "Everything in Meras, including lessons, analyses, technical readings, alerts and assistant answers, is educational content. It is not a recommendation to buy or sell any security, and not financial, investment or Sharia advice.",
        "Meras is not licensed by the Capital Market Authority, does not manage anyone's money and does not execute any trades.",
        "Your investment decisions are your own responsibility. Investing in shares carries risk, and you may lose part or all of your money."
      ]],
      ["Data accuracy", [
        "Prices, news and dividends come from outside providers and may be delayed or wrong. Check the official source before any decision.",
        "Sharia screening rulings are quoted from the Sharia boards as they published them, and are not a fatwa from Meras.",
        "The AI assistant can make mistakes; the correct numbers are the ones shown in the platform."
      ]],
      ["Your account", [
        "You are responsible for keeping your password secret and for any use of your account.",
        "One account per person, with accurate details at sign-up.",
        "We may suspend any account that breaks these terms."
      ]],
      ["Acceptable use", [
        "Copying, republishing or selling the platform, its design or its content without written permission is not allowed.",
        "Automated scraping, trying to reach other users' data or disrupting the platform is not allowed.",
        "Using the platform to publish recommendations or promote unlicensed financial services is not allowed."
      ]],
      ["Rights", "The platform was founded in 2026, and all rights to its design, content and name belong to Meras."],
      ["Subscriptions", "If paid plans are offered, their prices and renewal and cancellation details are shown on the plans page before payment."],
      ["Limitation of liability", "Meras is provided as is. We are not liable for any financial loss or damage arising from using the platform, relying on its content, or its downtime."],
      ["Governing law", "These terms are governed by the laws of the Kingdom of Saudi Arabia."],
      ["Changes", "We may update these terms; continuing to use the platform after an update means you accept it."]
    ]
  }
};

function legalLinks() {
  return '<a href="#privacy">' + esc(t("lg_priv")) + '</a> · <a href="#terms">' + esc(t("lg_terms")) + "</a>";
}
function legalPage(kind) {
  const secs = LEGAL[kind][S.lang === "en" ? "en" : "ar"];
  const date = new Date(LEGAL_DATE + "T12:00:00").toLocaleDateString(S.lang === "en" ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long", year: "numeric" });
  const contact = LEGAL_MAIL
    ? '<p>' + esc(S.lang === "en" ? "For any request about your data, or to delete your account, email us at " : "لأي طلب عن بياناتك أو لحذف حسابك، راسلنا على ") + '<b dir="ltr">' + esc(LEGAL_MAIL) + "</b>.</p>"
    : '<p>' + esc(S.lang === "en" ? "An email address for data requests and account deletion will be added here soon." : "بريد التواصل لطلبات البيانات وحذف الحساب بينضاف هنا قريباً.") + "</p>";
  const body = secs.map(([h, c]) => (h ? "<h2>" + esc(h) + "</h2>" : "") + (Array.isArray(c) ? "<ul>" + c.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>" : "<p>" + esc(c) + "</p>")).join("");
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t(kind === "privacy" ? "lg_priv" : "lg_terms")) + "</h1><p>" + esc(t("lg_upd").replace("{d}", date)) + '</p></div><article class="panel legal">' + body +
    "<h2>" + esc(t("lg_contact")) + "</h2>" + contact + '<p class="muted">' + legalLinks() + "</p></article></div>";
}
const pagePrivacy = () => legalPage("privacy");
const pageTerms = () => legalPage("terms");
