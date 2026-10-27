/* ===== مِراس: المساعد الذكي (زر عائم في كل الصفحات) =====
   - أسئلة مقترحة حسب الصفحة اللي أنت فيها (الشارت، الدرس، المؤشرات، الأخبار…).
   - يعرف وين أنت: بيانات الشارت ونتيجة المدارس، أو نص الدرس، أو المؤشرات.
   - يدلك على صفحات مِراس بروابط تضغطها.
   - عداد أسئلة يومي يحمي رصيد OpenRouter (الحد تغيّره من خانة المساعد).
   نفس مفتاح OpenRouter اللي في الإعدادات. المحادثة تنحفظ على هذا الجهاز بس. */
Object.assign(UI, {
  as_btn: ["المساعد", "Assistant"], as_h: ["المساعد الذكي", "Smart assistant"], as_left: ["بقي لك {n} من {m} سؤال اليوم", "{n} of {m} questions left today"],
  as_ph: ["اسأل عن أي شي في مِراس أو السوق…", "Ask anything about Meras or the market…"], as_send: ["أرسل", "Send"], as_clear: ["محادثة جديدة", "New chat"], as_close: ["إغلاق", "Close"],
  as_busy: ["يكتب…", "Writing…"], as_limit: ["خلصت أسئلة اليوم. ترجع بكرة، أو ارفع الحد من الإعدادات تحت.", "Today's questions are used up. They reset tomorrow, or raise the limit below."],
  as_setup: ["المساعد يحتاج مفتاح OpenRouter. اربطه من الإعدادات.", "The assistant needs an OpenRouter key. Connect it in settings."], as_set: ["الإعدادات", "Settings"],
  as_lim_lbl: ["الحد اليومي", "Daily limit"], as_hello: ["هلا! أنا مساعد مِراس. أعرف الصفحة اللي أنت فيها، وأقدر أشرح، وأقارن، وأدلك على المكان المناسب في المنصة.", "Hi! I'm the Meras assistant. I know which page you're on, and I can explain, compare, and point you to the right place on the platform."],
  as_warn: ["إجابات نموذج ذكاء اصطناعي وقد تخطئ. تعليمية، ومو توصية شراء أو بيع.", "AI answers may be wrong. Educational, not a buy or sell recommendation."],
  as_lesson: ["عندك سؤال عن هذا الدرس؟", "A question about this lesson?"], as_lesson_p: ["المساعد يعرف نص الدرس ويشرحه لك بمثال.", "The assistant knows this lesson's text and explains it with an example."], as_ask: ["اسأل المساعد", "Ask the assistant"]
});
const AS_KEY = "meras.asst", AS_LIM_KEY = "meras.asst.lim", AS_USE_KEY = "meras.asst.use";
const AS = { open: false, busy: false, err: "", msgs: [] };
try { AS.msgs = JSON.parse(localStorage.getItem(AS_KEY) || "[]").slice(-20); } catch (e) {}
const asLimit = () => { try { return Math.max(1, +localStorage.getItem(AS_LIM_KEY) || 30); } catch (e) { return 30; } };
const asToday = () => new Date().toISOString().slice(0, 10);
function asUsed() { try { const u = JSON.parse(localStorage.getItem(AS_USE_KEY) || "{}"); return u.d === asToday() ? u.n : 0; } catch (e) { return 0; } }
function asBump() { try { localStorage.setItem(AS_USE_KEY, JSON.stringify({ d: asToday(), n: asUsed() + 1 })); } catch (e) {} }
const asSave = () => { try { localStorage.setItem(AS_KEY, JSON.stringify(AS.msgs.slice(-20))); } catch (e) {} };

/* أسئلة مقترحة حسب الصفحة */
function asChips() {
  const r = route(), A = (ar, en) => L([ar, en]);
  if (r === "chart") return [A("وش يقول الشارت الحين بكلام بسيط؟", "What is the chart saying, in plain words?"), A("ليش المدارس مختلفة هنا؟", "Why do the schools disagree here?"), A("وين أحط الوقف لو دخلت؟", "Where would a stop go if I entered?"), A("وش أراقب الأسبوع الجاي؟", "What should I watch next week?")];
  if (r.startsWith("l-")) return [A("اشرح لي الدرس بمثال من السوق السعودي", "Explain this lesson with a Saudi market example"), A("لخّص الدرس في 3 نقاط", "Summarise the lesson in 3 points"), A("اسألني سؤال أختبر فيه فهمي", "Quiz me on it")];
  if (r.startsWith("sch-") || r === "schools") return [A("أي مدرسة تناسب مبتدئ؟", "Which school suits a beginner?"), A("كيف أدمج مدرستين مع بعض؟", "How do I combine two schools?"), A("وش الفرق بين داو ووايكوف؟", "Dow versus Wyckoff?")];
  if (r === "indices" || r === "market") return [A("كيف وضع تاسي اليوم؟", "How is TASI doing today?"), A("وش العلاقة بين السوق الأمريكي والسعودي؟", "How do US and Saudi markets relate?"), A("وين ألقى الأسهم القوية؟", "Where do I find strong shares?")];
  if (r === "news") return [A("لخّص لي أهم أخبار اليوم", "Summarise today's key news"), A("أي خبر يأثر على أسهمي؟", "Which news affects my shares?")];
  if (["gdiv", "dividends"].includes(r)) return [A("وش يعني تاريخ الاستحقاق؟", "What does the ex-date mean?"), A("كيف أحسب عائد التوزيع؟", "How do I compute dividend yield?")];
  if (["portfolio", "pf", "journal", "invest"].includes(r)) return [A("كيف أوزّع محفظتي؟", "How should I spread my portfolio?"), A("وش يعني الربح غير المحقق؟", "What is unrealised profit?")];
  return [A("من وين أبدأ؟", "Where do I start?"), A("وين ألقى تحليل سهم بالمدارس؟", "Where do I analyse a share with the schools?"), A("اشرح لي إدارة المخاطرة", "Explain risk management"), A("وش الجديد في السوق اليوم؟", "What's new in the market today?")];
}
/* خريطة الصفحات اللي يقدر يدلك عليها */
function asCatalog() {
  const out = [["", t("nav_home")], ["news", t("nav_news")], ["schools", t("nav_schools")], ["sch-tsla", t("ex_h")]];
  Object.keys(NAV_GROUPS).forEach((g) => navItems(g).forEach(([h, k]) => out.push([h, t(k)])));
  (typeof SCHOOLS !== "undefined" ? SCHOOLS : []).forEach((s) => out.push(["sch-" + s.id, L(s.name)]));
  LESSONS.forEach((l) => out.push(["l-" + l.id, L(l.title)]));
  return out.map(([h, n]) => "#" + h + " = " + n).join("\n");
}
function asContext() {
  const r = route(), ctx = { page: r || "home", page_title: (document.querySelector("#main h1") || {}).textContent || "" };
  try {
    if (r === "chart" && typeof qaContext === "function" && typeof CH !== "undefined" && CH) ctx.chart = qaContext();
    if (r.startsWith("l-")) { const l = LESSONS.find((x) => "l-" + x.id === r); if (l) ctx.lesson = { title: L(l.title), text: l.body.map((b) => b.p ? L(b.p) : b.h ? "## " + L(b.h) : b.ul ? b.ul.map((x) => "- " + L(x)).join("\n") : "").filter(Boolean).join("\n").slice(0, 6000) }; }
    if (r.startsWith("sch-")) { const s = typeof SCHOOLS !== "undefined" && SCHOOLS.find((x) => "sch-" + x.id === r); if (s) ctx.school = { name: L(s.name), idea: L(s.idea), tools: s.tools.map(L), pros: s.pro.map(L), cons: s.con.map(L) }; }
    if (typeof tkItems === "function") ctx.indices = tkItems().map((x) => ({ index: L(x.it.n), close: x.st.c, today: +(100 * (x.st.d || 0)).toFixed(2) + "%", month: x.st.m != null ? +(100 * x.st.m).toFixed(2) + "%" : null, schools_result: x.R ? x.R.fb : null, date: x.st.date }));
    if (["news", "", "home"].includes(r) && typeof NW !== "undefined" && NW.data) ctx.news = (NW.data.items || []).slice(0, 15).map((x) => ({ t: x.t, sym: x.sym, src: x.src, at: x.at }));
    const fs = AS.focus || (r === "chart" && typeof chartCfg === "function" ? chartCfg().sym : null);
    if (fs && typeof snItems === "function" && typeof NW !== "undefined" && NW.data) ctx.symbol_news = { symbol: fs, items: snItems(fs).map((x) => ({ t: x.t, src: x.src, at: x.at })) };
    if (typeof NW !== "undefined" && NW.brief && NW.brief.items) ctx.daily_brief = NW.brief.items.map((x) => x.h);
    if (typeof DK !== "undefined" && DK.loaded && ["portfolio", "pf", "", "home"].includes(r)) { const H = dkHoldings(); ctx.portfolio = H.open.map((h) => ({ sym: h.sym, qty: h.qty, avg: +h.avg.toFixed(2), value: +h.value.toFixed(2), pl: +h.pl.toFixed(2) })); }
    if (typeof DG !== "undefined" && DG.data && typeof dhDivs === "function") ctx.upcoming_dividends = dhDivs().slice(0, 8);
  } catch (e) {}
  return ctx;
}
const AS_SYSTEM = (lang) => [
  "You are the assistant inside Meras (مِراس), a personal learning and analysis platform for the Saudi stock market with a look at world markets. Its owner is an individual investor in Saudi Arabia.",
  "Each request carries a JSON context about the page the user is on (chart data and the multi-school analysis, a lesson's text, index figures, news, portfolio or dividends when available) and a list of Meras pages.",
  "Rules:",
  "1. Use the numbers in the context; if something is not there, say so plainly and suggest where in Meras to find it.",
  "2. Explain, compare and discuss conditional scenarios, levels and risk. Never give a direct instruction to buy or sell, never promise outcomes, never invent probabilities.",
  "3. When pointing to a Meras page, write a link exactly as [[#route|label]] using routes from the page list only (e.g. [[#chart|الشارت]]). At most 3 links per answer.",
  "5. If the context has web_news, those are headlines fetched just now from the web (Google News covering Argaam, Maaal, Aleqtisadiah and Tadawul announcements as reported). Use them for news questions, mention the source name and date, and say if they look thin. Never claim you cannot search when web_news is present.",
  "4. Keep answers short (under 170 words) unless asked for detail. Plain text, short paragraphs or '-' lists, no markdown headings or bold, English digits (0-9).",
  "Language and tone: " + (lang === "ar" ? "friendly Saudi Arabic, like an experienced friend." : "plain friendly English.")
].join("\n");
async function asAsk(q) {
  q = (q || "").trim(); if (!q || AS.busy) return;
  if (!AI.key) { AS.err = t("as_setup"); asRender(); return; }
  if (!AI.model) { AS.err = t("ai_need_model"); asRender(); return; }
  if (asUsed() >= asLimit()) { AS.err = t("as_limit"); asRender(); return; }
  AS.msgs.push({ r: "u", t: q }); AS.busy = true; AS.err = ""; asRender();
  const msgs = [{ role: "system", content: AS_SYSTEM(S.lang) }, { role: "user", content: "Meras pages:\n" + asCatalog() + "\n\nContext JSON:\n" + JSON.stringify(typeof asCtxWeb === "function" ? await asCtxWeb(q) : asContext()) }, { role: "assistant", content: S.lang === "ar" ? "تمام، وصلتني." : "Got it." }];
  AS.msgs.slice(-9, -1).forEach((m) => msgs.push({ role: m.r === "u" ? "user" : "assistant", content: m.t }));
  msgs.push({ role: "user", content: q });
  let text = "", err = "";
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { Authorization: "Bearer " + AI.key, "Content-Type": "application/json", "X-Title": "Meras" }, body: JSON.stringify({ model: AI.model, temperature: 0.4, max_tokens: 700, messages: msgs }) });
    if (!res.ok) err = t({ 401: "ai_e_401", 402: "ai_e_402", 404: "ai_e_404", 400: "ai_e_404", 429: "ai_e_429" }[res.status] || "ai_e_net") + " (" + res.status + ")";
    else { const j = await res.json(); text = ((j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || "").replace(/\*\*|^#+\s*/gm, "").trim(); if (!text) err = t("ai_e_empty"); }
  } catch (e) { err = t("ai_e_net"); }
  AS.busy = false;
  if (text) { AS.msgs.push({ r: "a", t: text }); asBump(); } else { AS.err = err; AS.msgs.pop(); }
  asSave(); asRender();
}
function asFmt(txt) {
  const routes = new Set([""].concat(Object.keys(NAV_GROUPS).flatMap((g) => navItems(g).map((x) => x[0])), ["news", "schools", "sch-tsla", "indices", "settings"], (typeof SCHOOLS !== "undefined" ? SCHOOLS : []).map((s) => "sch-" + s.id), LESSONS.map((l) => "l-" + l.id)));
  return txt.split(/\n+/).filter((x) => x.trim()).map((line) => {
    const li = /^\s*[-•]\s+/.test(line);
    let h = esc(line.replace(/^\s*[-•]\s+/, ""));
    h = h.replace(/\[\[#([\w\-]*)\|([^\]]{1,60})\]\]/g, (m, r, lab) => (routes.has(r) ? '<a class="as-link" href="#' + r + '" data-act="as-go">' + lab + " ←</a>" : lab));
    return li ? '<p class="as-li">• ' + h + "</p>" : "<p>" + h + "</p>";
  }).join("");
}
function asRender() {
  let fab = document.getElementById("asfab");
  if (!(typeof HOSTED !== "undefined" && HOSTED) || (typeof lnShow === "function" && lnShow())) { if (fab) fab.remove(); const p = document.getElementById("aspanel"); if (p) p.remove(); return; }
  if (!fab) { fab = document.createElement("button"); fab.id = "asfab"; fab.type = "button"; fab.setAttribute("data-act", "as-toggle"); document.body.appendChild(fab); }
  fab.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" fill="currentColor"/><circle cx="18" cy="17.5" r="1.6" fill="currentColor"/></svg><span>' + esc(t("as_btn")) + "</span>";
  fab.setAttribute("aria-expanded", String(AS.open)); fab.hidden = AS.open;
  let p = document.getElementById("aspanel");
  if (!AS.open) { if (p) p.remove(); return; }
  const fresh = !p;
  if (!p) { p = document.createElement("div"); p.id = "aspanel"; p.setAttribute("role", "dialog"); p.setAttribute("aria-label", t("as_h")); document.body.appendChild(p); }
  p.dir = S.lang === "ar" ? "rtl" : "ltr";
  const left = Math.max(0, asLimit() - asUsed());
  const msgs = AS.msgs.length ? AS.msgs.map((m) => '<div class="as-m ' + (m.r === "u" ? "u" : "a") + '">' + (m.r === "u" ? "<p>" + esc(m.t) + "</p>" : asFmt(m.t)) + "</div>").join("") : '<div class="as-m a"><p>' + esc(t("as_hello")) + "</p></div>";
  const chips = '<div class="as-chips">' + asChips().map((q) => '<button type="button" data-act="as-chip" data-q="' + esc(q) + '"' + (AS.busy ? " disabled" : "") + ">" + esc(q) + "</button>").join("") + "</div>";
  const keep = p.querySelector("#as-q"), val = keep ? keep.value : "";
  p.innerHTML = '<div class="as-head"><span class="as-ic"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" fill="currentColor"/></svg></span><div><b>' + esc(t("as_h")) + '</b><small class="muted">' + esc(t("as_left").replace("{n}", left).replace("{m}", asLimit())) + '</small></div><button type="button" class="btn sm ghost" data-act="as-clear" title="' + esc(t("as_clear")) + '">' + esc(t("as_clear")) + '</button><button type="button" class="btn sm" data-act="as-toggle" aria-label="' + esc(t("as_close")) + '">✕</button></div>' +
    '<div class="as-body">' + msgs + (AS.busy ? '<div class="as-m a"><p class="muted">' + esc(t("as_busy")) + "</p></div>" : "") + (AS.err ? '<p class="neg small">' + esc(AS.err) + (AS.err === t("as_setup") ? ' <a href="#settings" data-act="as-go">' + esc(t("as_set")) + "</a>" : "") + "</p>" : "") + "</div>" +
    chips + '<form class="as-form" data-form="as" novalidate><textarea id="as-q" rows="1" maxlength="600" placeholder="' + esc(t("as_ph")) + '"' + (AS.busy ? " disabled" : "") + '></textarea><button class="btn primary" type="submit"' + (AS.busy ? " disabled" : "") + ">" + esc(t("as_send")) + "</button></form>" +
    '<div class="as-foot small muted"><span>' + esc(t("as_warn")) + '</span><label>' + esc(t("as_lim_lbl")) + ' <input type="number" min="1" max="500" data-as="lim" value="' + asLimit() + '" class="num"></label></div>';
  const q = p.querySelector("#as-q"); q.value = val;
  const body = p.querySelector(".as-body"); body.scrollTop = body.scrollHeight;
  if (fresh || !AS.busy) setTimeout(() => { if (!AS.busy) q.focus({ preventScroll: true }); }, 30);
}
function asOpen(q) { AS.open = true; asRender(); if (q) asAsk(q); }
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="as-"]'); if (!el) return;
  const a = el.dataset.act;
  if (a === "as-go") { AS.open = window.matchMedia("(min-width:900px)").matches; setTimeout(asRender, 50); return; }
  e.preventDefault();
  if (a === "as-toggle") { AS.open = !AS.open; asRender(); }
  else if (a === "as-chip") asAsk(el.dataset.q);
  else if (a === "as-clear") { AS.msgs = []; AS.err = ""; asSave(); asRender(); }
  else if (a === "as-lesson") asOpen(el.dataset.q);
});
document.addEventListener("submit", (e) => { const f = e.target.closest && e.target.closest('[data-form="as"]'); if (!f) return; e.preventDefault(); const q = document.getElementById("as-q"); const v = q.value; q.value = ""; asAsk(v); });
document.addEventListener("keydown", (e) => {
  if (e.target && e.target.id === "as-q" && e.key === "Enter" && !e.shiftKey) { e.preventDefault(); e.target.closest("form").requestSubmit(); }
  if (e.key === "Escape" && AS.open && !(typeof SR !== "undefined" && SR.open)) { AS.open = false; asRender(); }
});
document.addEventListener("change", (e) => { if (e.target.dataset && e.target.dataset.as === "lim") { try { localStorage.setItem(AS_LIM_KEY, String(Math.max(1, Math.min(500, parseInt(e.target.value, 10) || 30)))); } catch (err) {} asRender(); } });
window.addEventListener("hashchange", () => setTimeout(asRender, 60));
/* صندوق "عندك سؤال عن هذا الدرس؟" داخل صفحة الدرس */
function asLessonBox() {
  if (!(typeof HOSTED !== "undefined" && HOSTED)) return "";
  return '<div class="as-lesson"><span class="as-ic"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" fill="currentColor"/></svg></span><div><b>' + esc(t("as_lesson")) + '</b><small class="muted">' + esc(t("as_lesson_p")) + '</small></div><button type="button" class="btn sm primary" data-act="as-lesson" data-q="' + esc(L(["اشرح لي هذا الدرس بمثال من السوق السعودي", "Explain this lesson with a Saudi market example"])) + '">' + esc(t("as_ask")) + "</button></div>";
}
