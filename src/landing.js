/* ===== مِراس: الشاشة الرئيسية للزوار =====
   أول ما يفتح الزائر مِراس يشوف نبذة عن المنصة وفكرتها، ومقتطفات عن محتواها، وزر دخول.
   زر "دخول" يفتح المنصة (لين نركّب التسجيل الحقيقي مع السيرفر).
   المالك (جهاز فيه رمز المستودع) ومن دخل قبل ما يشوفونها إلا من #welcome. */
Object.assign(UI, {
  ln_enter: ["دخول", "Enter"], ln_signup: ["إنشاء حساب", "Create account"], ln_explore: ["وش فيها؟", "What is inside?"],
  ln_eyebrow: ["منصة تعليمية للأسواق المالية", "A learning platform for the markets"],
  ln_h: ["تعلّم السوق <em>بالمِراس</em>، وطبّق على بيانات حقيقية", "Learn the market <em>by practice</em>, on real data"],
  ln_p: ["دروس مبسطة بالعربي من الصفر، وشارت بمؤشراته، ومختبر تختبر فيه أفكارك على تاريخ الأسهم قبل ما تخاطر بريال واحد.", "Plain Arabic lessons from zero, a chart with its indicators, and a lab to test your ideas on share history before you risk a single riyal."],
  ln_what: ["وش تلقى في مِراس", "What you will find in Meras"],
  ln_f1_h: ["مسارات بالدرجات", "Stepped tracks"], ln_f1_p: ["{n} درس في ثلاثة مسارات: المستثمر، والمتداول، والمبرمج. كل درس شرح ومثال وتمرين.", "{n} lessons in three tracks: investor, trader and developer. Each lesson has an explanation, an example and an exercise."],
  ln_f2_h: ["شارت ومؤشرات", "Chart and indicators"], ln_f2_p: ["شموع حقيقية لأسهم السوق السعودي، و12 مؤشر بشرح كل واحد، وأدوات رسم وفيبوناتشي، ولوحة قراءات لكل شمعة.", "Real candles for Saudi shares, 12 indicators each explained, drawing tools, Fibonacci and a readings panel for every candle."],
  ln_f3_h: ["المختبر", "The lab"], ln_f3_p: ["ركّب قواعد دخول وخروج، واختبرها على تاريخ السهم، وشوف نتيجتها مقارنة بالشراء والاحتفاظ.", "Build entry and exit rules, test them on a share's history, and compare the result with buy-and-hold."],
  ln_f4_h: ["الفرز الشرعي", "Sharia screening"], ln_f4_p: ["اكتب اسم السهم وتعرف حكمه عند الهيئات الشرعية، مع حاسبة التطهير.", "Type a share's name to see its ruling from the sharia boards, with a purification calculator."],
  ln_f5_h: ["خدمات يومية", "Everyday tools"], ln_f5_p: ["سجل التداول، وخطتي الشهرية، والتوزيعات، والمعادن، والحاسبات.", "A trading journal, a monthly plan, dividends, metals and calculators."],
  ln_f6_h: ["شروحات وقاموس", "Guides and glossary"], ln_f6_p: ["شروحات مصورة للشارت والسجل، وقاموس للمصطلحات اللي تمر عليك.", "Illustrated guides to the chart and journal, and a glossary of the terms you meet."],
  ln_how: ["كيف تمشي معنا", "How it works"],
  ln_s1_h: ["تعلّم", "Learn"], ln_s1_p: ["ابدأ من الدرجة الأولى، درس قصير كل يوم.", "Start at step one, a short lesson a day."],
  ln_s2_h: ["جرّب", "Try"], ln_s2_p: ["طبّق اللي تعلمته على الشارت والمختبر، بدون مخاطرة.", "Apply what you learned on the chart and in the lab, with no risk."],
  ln_s3_h: ["سجّل وراجع", "Record and review"], ln_s3_p: ["سجّل كل صفقة تدريبية بسببها ووقفها، وراجع وش نجح معك.", "Log every practice trade with its reason and stop, and review what worked."],
  ln_why: ["ليش مِراس", "Why Meras"],
  ln_w1_h: ["تعليم، مو توصيات", "Learning, not tips"], ln_w1_p: ["نعلّمك كيف تقرأ السوق بنفسك. ما نقول لك وش تشتري.", "We teach you to read the market yourself. We do not tell you what to buy."],
  ln_w2_h: ["بالعربي ومن الصفر", "Arabic, from zero"], ln_w2_p: ["لغة بسيطة وأمثلة من السوق السعودي.", "Simple language and examples from the Saudi market."],
  ln_w3_h: ["تقدمك محفوظ", "Your progress is kept"], ln_w3_p: ["كل درس تخلصه وكل صفقة تسجلها تنحفظ، وترجع لها متى ما بغيت.", "Every lesson you finish and every trade you log is saved for when you come back."],
  ln_cta_h: ["جاهز تبدأ؟", "Ready to start?"], ln_cta_p: ["أول درجتين في كل مسار مجانية.", "The first two steps of every track are free."],
  ln_note: ["مِراس منصة تعليمية. المحتوى للتعليم فقط، وليس توصية بشراء أو بيع، ولا استشارة مالية.", "Meras is a learning platform. Content is for education only, not a recommendation to buy or sell and not financial advice."]
});

const LN_KEY = "meras.entered";
const lnEntered = () => { try { return localStorage.getItem(LN_KEY) === "1"; } catch (e) { return true; } };
const lnShow = () => route() === "welcome" || (route() === "" && !lnEntered() && !(typeof HOSTED !== "undefined" && HOSTED && CFG.token));
const LN_ICONS = {
  f1: '<path d="M4 19h4v-4h4v-4h4V7h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  f2: '<path d="M6 4v3M6 15v5M18 3v4M18 13v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3.5" y="7" width="5" height="8" rx="1" fill="currentColor"/><rect x="15.5" y="7" width="5" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>',
  f3: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M7.5 15h9" stroke="currentColor" stroke-width="2"/>',
  f4: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  f5: '<rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  f6: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M4 21V5M9 8h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
};
function pageLanding() {
  const feat = [1, 2, 3, 4, 5, 6].map((i) => '<div class="panel ln-feat"><span class="ln-ic"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">' + LN_ICONS["f" + i] + "</svg></span><h3>" + esc(t("ln_f" + i + "_h")) + '</h3><p class="muted">' + esc(t("ln_f" + i + "_p").replace("{n}", LESSONS.length)) + "</p></div>").join("");
  const steps = [1, 2, 3].map((i) => '<div class="ln-step"><span class="k">' + i + "</span><h4>" + esc(t("ln_s" + i + "_h")) + '</h4><p class="muted small">' + esc(t("ln_s" + i + "_p")) + "</p></div>").join("");
  const why = [1, 2, 3].map((i) => '<div class="ln-why"><h4>' + esc(t("ln_w" + i + "_h")) + '</h4><p class="muted">' + esc(t("ln_w" + i + "_p")) + "</p></div>").join("");
  return '<section class="hero ln-hero"><div class="wrap"><div class="copy"><div class="eyebrow">' + esc(t("ln_eyebrow")) + "</div><h1>" + t("ln_h") + '</h1><p class="lead">' + esc(t("ln_p")) + '</p><div class="row"><button class="btn primary" data-act="ln-enter">' + esc(t("ln_enter")) + '</button><a class="btn ghost" href="#welcome" data-act="ln-scroll">' + esc(t("ln_explore")) + "</a></div></div>" + stairs(null, true) + "</div></section>" +
    '<div class="wrap"><section class="sec" id="ln-what"><div class="sec-head"><h2>' + esc(t("ln_what")) + '</h2></div><div class="ln-grid">' + feat + "</div></section>" +
    '<section class="sec"><div class="sec-head"><h2>' + esc(t("ln_how")) + '</h2></div><div class="ln-steps">' + steps + "</div></section>" +
    '<section class="sec"><div class="sec-head"><h2>' + esc(t("ln_why")) + '</h2></div><div class="ln-whys">' + why + "</div></section>" +
    '<section class="sec"><div class="panel ln-cta"><div><h2>' + esc(t("ln_cta_h")) + '</h2><p class="muted" style="margin:4px 0 0">' + esc(t("ln_cta_p")) + '</p></div><div class="row"><button class="btn primary" data-act="ln-enter">' + esc(t("ln_enter")) + '</button><a class="btn" href="#account" data-act="ln-signup">' + esc(t("ln_signup")) + "</a></div></div></section>" +
    '<section class="sec"><div class="notice">' + esc(t("ln_note")) + "</div></section></div>";
}
function lnHeader() {
  return '<div class="wrap"><a class="brand" href="#welcome">' + LOGO + "<span>" + esc(t("brand")) + '</span></a><div class="tools" style="margin-inline-start:auto">' + (typeof themeButton === "function" ? themeButton() : "") + '<button class="btn sm" data-act="lang" aria-label="language">' + (S.lang === "ar" ? "EN" : "ع") + '</button><button class="btn sm primary" data-act="ln-enter">' + esc(t("ln_enter")) + "</button></div></div>";
}
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="ln-"]'); if (!el) return;
  const a = el.dataset.act;
  if (a === "ln-enter" || a === "ln-signup") { try { localStorage.setItem(LN_KEY, "1"); } catch (err) {} if (a === "ln-enter") { e.preventDefault(); if (route() === "") { render(); window.scrollTo(0, 0); } else location.hash = ""; } }
  else if (a === "ln-scroll") { e.preventDefault(); const s = document.getElementById("ln-what"); if (s) window.scrollTo({ top: s.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); }
});
