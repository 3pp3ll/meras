/* ===== مِراس: شرح القراءة بنموذج ذكاء اصطناعي عبر OpenRouter =====
   المفتاح ينحفظ على الجهاز فقط (localStorage) وما يدخل في المزامنة ولا في المستودع. */
const AI_KEY = "meras.ai";
let AI = { key: "", model: "" };
try { Object.assign(AI, JSON.parse(localStorage.getItem(AI_KEY) || "{}")); } catch (e) {}
let aiState = { busy: false, text: "", err: "", model: "" };

Object.assign(UI, {
  ai_h: ["الذكاء الاصطناعي (OpenRouter)", "AI (OpenRouter)"],
  ai_p: ["اختياري. يخلي نموذج ذكاء اصطناعي يشرح لك قراءة الشارت بالكلام. المفتاح مستقل عن رمز GitHub وما يأثر عليه.", "Optional. Lets an AI model explain the chart reading in words. The key is separate from the GitHub token and does not affect it."],
  ai_key: ["مفتاح OpenRouter", "OpenRouter key"], ai_model: ["اسم النموذج", "Model name"],
  ai_model_ph: ["مثال: google/gemini-3.8-flash", "e.g. google/gemini-3.8-flash"],
  ai_note: ["المفتاح ينحفظ على هذا الجهاز فقط وينرسل إلى OpenRouter وحده. حط له حد صرف من لوحة OpenRouter. اسم النموذج تنسخه من صفحة النماذج عندهم.", "The key is stored on this device only and sent to OpenRouter alone. Set a spending limit on it in the OpenRouter dashboard. Copy the model name from their models page."],
  ai_save: ["احفظ", "Save"], ai_forget: ["احذف المفتاح من هذا الجهاز", "Remove key from this device"], ai_saved: ["انحفظ", "Saved"],
  ai_on: ["مربوط", "Connected"], ai_off: ["غير مربوط", "Not connected"],
  ai_explain: ["اشرحها لي", "Explain it to me"], ai_ask_ph: ["أو اسأل عن هذا الشارت، مثلاً: ليش هذا يعتبر دعم؟", "Or ask about this chart, e.g. why does this count as support?"],
  ai_busy: ["النموذج يكتب الشرح…", "The model is writing…"],
  ai_title: ["شرح النموذج", "Model's explanation"],
  ai_warn: ["هذا شرح من نموذج ذكاء اصطناعي وقد يخطئ. الأرقام الصحيحة هي اللي في القراءة الآلية فوق. تعليمي فقط وليس توصية.", "This is an AI model's explanation and may be wrong. The correct numbers are those in the automatic reading above. Educational only, not a recommendation."],
  ai_setup: ["تبي شرح بالكلام من نموذج ذكاء اصطناعي؟ اربط مفتاح OpenRouter من الإعدادات.", "Want an explanation in words from an AI model? Connect an OpenRouter key in settings."],
  ai_need_model: ["اكتب اسم النموذج في الإعدادات أول", "Enter the model name in settings first"],
  ai_e_401: ["المفتاح غير صحيح", "The key is invalid"], ai_e_402: ["رصيد OpenRouter ما يكفي، أو وصلت حد الصرف", "OpenRouter credit is insufficient, or the spending limit was reached"],
  ai_e_404: ["اسم النموذج غير موجود. انسخه كما هو من صفحة النماذج", "Model name not found. Copy it exactly from the models page"],
  ai_e_429: ["طلبات كثيرة. انتظر شوي وجرب", "Too many requests. Wait a moment and retry"], ai_e_net: ["تعذر الاتصال بـ OpenRouter", "Could not reach OpenRouter"], ai_e_empty: ["النموذج ما رجّع شرح. جرب مرة ثانية أو غيّر النموذج", "The model returned nothing. Retry or change the model"],
  rd_stats: ["سجل الإشارات في هذا الشارت", "Signal record on this chart"],
  st_cross: ["تقاطع متوسط 5 فوق متوسط 20: صار {n} مرة، وبعد 5 شموع كان السعر أعلى في {k} منها ({p}%).", "5 average crossing above the 20: happened {n} time(s); 5 candles later price was higher in {k} of them ({p}%)."],
  st_rsi: ["نزول RSI 14 تحت 30: صار {n} مرة، وبعد 5 شموع كان السعر أعلى في {k} منها ({p}%).", "RSI 14 dropping below 30: happened {n} time(s); 5 candles later price was higher in {k} of them ({p}%)."],
  st_none_cross: ["تقاطع متوسط 5 فوق متوسط 20: ما صار في هذي الشموع.", "5 average crossing above the 20: did not occur in these candles."],
  st_none_rsi: ["نزول RSI 14 تحت 30: ما صار في هذي الشموع.", "RSI 14 dropping below 30: did not occur in these candles."],
  st_small: ["العينة صغيرة، فالنسبة ما يعتمد عليها. وأداء الإشارة في الماضي ما يضمن أداءها بعدين.", "The sample is small, so the percentage is not dependable. A signal's past record does not guarantee its future one."],
  st_caveat: ["هذا عدّ لما صار في هذي الشموع فقط. أداء الإشارة في الماضي ما يضمن أداءها بعدين.", "This counts only what happened in these candles. A signal's past record does not guarantee its future one."]
});

/* how each signal actually did on the candles up to `end` (counted, not estimated) */
function signalStats(data, end) {
  const cl = data.slice(0, end).map((r) => r.c), m5 = sma(cl, 5), m20 = sma(cl, 20), r14 = rsi(cl, 14);
  const cross = { n: 0, k: 0 }, low = { n: 0, k: 0 };
  for (let i = 1; i + 5 < cl.length; i++) {
    if (m5[i] != null && m20[i] != null && m5[i - 1] != null && m20[i - 1] != null && m5[i] > m20[i] && m5[i - 1] <= m20[i - 1]) { cross.n++; if (cl[i + 5] > cl[i]) cross.k++; }
    if (r14[i] != null && r14[i - 1] != null && r14[i] < 30 && r14[i - 1] >= 30) { low.n++; if (cl[i + 5] > cl[i]) low.k++; }
  }
  return { cross, low };
}
function statsLines(st) {
  const one = (x, k, none) => (x.n ? t(k).replace("{n}", x.n).replace("{k}", x.k).replace("{p}", Math.round((x.k / x.n) * 100)) : t(none));
  return [one(st.cross, "st_cross", "st_none_cross"), one(st.low, "st_rsi", "st_none_rsi"), t(st.cross.n + st.low.n < 8 ? "st_small" : "st_caveat")];
}

const aiReady = () => typeof HOSTED !== "undefined" && HOSTED && !!AI.key;
function aiPanel() {
  if (!(typeof HOSTED !== "undefined" && HOSTED)) return "";
  if (!AI.key) return '<p class="small muted">' + esc(t("ai_setup")) + ' <a href="#settings">' + esc(t("set_h")) + "</a></p>";
  let body = "";
  if (aiState.busy) body = '<p class="muted">' + esc(t("ai_busy")) + "</p>";
  else if (aiState.err) body = '<p class="neg">' + esc(aiState.err) + "</p>";
  else if (aiState.text) body = '<div class="ai-out"><div class="row" style="justify-content:space-between"><b>' + esc(t("ai_title")) + '</b><span class="tag num">' + esc(aiState.model) + "</span></div>" + aiState.text.split(/\n{2,}|\n/).filter((x) => x.trim()).map((x) => "<p>" + esc(x.trim()) + "</p>").join("") + '<p class="small muted">' + esc(t("ai_warn")) + "</p></div>";
  return '<form class="ai-box stack" data-form="ai" novalidate><div class="row"><input id="ai-q" maxlength="300" placeholder="' + esc(t("ai_ask_ph")) + '"' + (aiState.busy ? " disabled" : "") + '><button class="btn primary" type="submit"' + (aiState.busy ? " disabled" : "") + ">" + ICON_READ + " " + esc(t("ai_explain")) + "</button></div>" + body + "</form>";
}

function aiPayload(question) {
  const r = analyze(CH.data, CH.s, CH.e), cfg = chartCfg(), cl = CH.data.map((x) => x.c), last = CH.e - 1;
  const m5 = sma(cl, 5), m20 = sma(cl, 20), r14 = rsi(cl, 14), f2 = (v) => (v == null ? null : +v.toFixed(2));
  return {
    share: PRACTICE[cfg.sym] ? "practice data (generated, not a real share)" : cfg.sym + " " + symName(cfg.sym) + " (Saudi market, daily candles, prices delayed)",
    candles_shown: CH.e - CH.s,
    last_30_candles: CH.data.slice(Math.max(CH.s, CH.e - 30), CH.e).map((x) => ({ o: x.o, h: x.h, l: x.l, c: x.c, v: x.v })),
    indicators_at_last_candle: { close: f2(cl[last]), sma5: f2(m5[last]), sma20: f2(m20[last]), rsi14: r14[last] == null ? null : +r14[last].toFixed(1) },
    rule_based_reading: r.items.map(([k, lines]) => ({ topic: t(k), notes: lines })),
    signal_record: statsLines(signalStats(CH.data, CH.e)),
    learner_question: question || null
  };
}
const AI_SYSTEM = (lang) => [
  "You are a teaching assistant inside Meras, a learning platform for beginners studying the Saudi stock market.",
  "You receive a JSON object describing a price chart: recent candles, indicator values computed by the platform, a rule-based reading, and a count of how past signals did.",
  "Hard rules:",
  "1. Never tell the learner to buy, sell, hold, enter or exit, and never say a share is a good or bad purchase.",
  "2. Never predict a future price, direction, target or probability. Never invent a confidence or success percentage; the only percentages you may quote are those in signal_record, and you must say they are small-sample counts of the past.",
  "3. Use only the numbers in the JSON. Do not recalculate indicators and do not introduce numbers that are not there.",
  "4. If the data is practice data, say so once.",
  "What to write: explain what the chart shows and why the rule-based reading says what it says, connect the observations to each other (trend, averages, momentum, volume, levels), point out one thing a beginner would likely miss, and end with one small exercise to try on the chart. If learner_question is present, answer it first, within the rules; if it asks for advice or a prediction, say you can only explain what the chart shows.",
  "Style: " + (lang === "ar" ? "simple Arabic in a friendly Saudi tone" : "plain English") + ", 4 short paragraphs at most, under 180 words, plain text with no markdown, no bullet symbols and no headings."
].join("\n");

async function aiExplain(question) {
  if (!AI.model) { toast(t("ai_need_model")); return; }
  aiState = { busy: true, text: "", err: "", model: AI.model }; render();
  let err = "", text = "";
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: "Bearer " + AI.key, "Content-Type": "application/json", "X-Title": "Meras" },
      body: JSON.stringify({ model: AI.model, temperature: 0.3, max_tokens: 600, messages: [{ role: "system", content: AI_SYSTEM(S.lang) }, { role: "user", content: JSON.stringify(aiPayload(question)) }] })
    });
    if (!res.ok) err = t({ 401: "ai_e_401", 402: "ai_e_402", 404: "ai_e_404", 400: "ai_e_404", 429: "ai_e_429" }[res.status] || "ai_e_net") + " (" + res.status + ")";
    else { const j = await res.json(); text = ((j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || "").trim(); if (!text) err = t("ai_e_empty"); }
  } catch (e) { err = t("ai_e_net"); }
  aiState = { busy: false, text, err, model: AI.model }; render();
}

function aiSettingsHtml() {
  return '<form class="panel stack" data-form="ai-set" novalidate><div class="row" style="justify-content:space-between"><h3>' + esc(t("ai_h")) + '</h3><span class="tag ' + (AI.key ? "up" : "") + '">' + esc(t(AI.key ? "ai_on" : "ai_off")) + '</span></div><p class="muted small">' + esc(t("ai_p")) + '</p><div class="field"><label for="ai-key">' + esc(t("ai_key")) + '</label><input id="ai-key" dir="ltr" type="password" autocomplete="off" spellcheck="false" value="' + esc(AI.key) + '"></div><div class="field"><label for="ai-model">' + esc(t("ai_model")) + '</label><input id="ai-model" dir="ltr" autocomplete="off" spellcheck="false" placeholder="' + esc(t("ai_model_ph")) + '" value="' + esc(AI.model) + '"></div><p class="small muted">' + esc(t("ai_note")) + ' <a href="https://openrouter.ai/models" target="_blank" rel="noopener">openrouter.ai/models ↗</a></p><div class="row"><button class="btn primary" type="submit">' + esc(t("ai_save")) + "</button>" + (AI.key ? '<button class="btn ghost" type="button" data-act="ai-forget">' + esc(t("ai_forget")) + "</button>" : "") + "</div></form>";
}
const aiStore = () => { try { localStorage.setItem(AI_KEY, JSON.stringify(AI)); } catch (e) {} };
document.addEventListener("submit", (ev) => {
  const form = ev.target.closest && ev.target.closest('[data-form="ai"],[data-form="ai-set"]'); if (!form) return;
  ev.preventDefault();
  if (form.dataset.form === "ai-set") { AI = { key: document.getElementById("ai-key").value.trim(), model: document.getElementById("ai-model").value.trim() }; aiStore(); toast(t("ai_saved")); render(); }
  else if (!aiState.busy) aiExplain((document.getElementById("ai-q").value || "").trim());
});
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest('[data-act="ai-forget"]'); if (!el) return;
  AI.key = ""; aiStore(); aiState = { busy: false, text: "", err: "", model: "" }; render();
});
