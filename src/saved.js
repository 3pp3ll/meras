/* ===== مِراس: المحفوظات + التصدير (PDF و Word) + اسأل الذكاء الاصطناعي =====
   - الحفظ: كل تحليل ملف في مستودع البيانات saved/<id>.json، والفهرس saved/index.json.
     التحليل المحفوظ يرجع يفتح على وضعه: نفس السهم، نفس آخر شمعة، نفس المدارس والنتيجة والرسومات والشرح والمحادثة.
   - التصدير: PDF (صورة الصفحة بالعربي كما هي) و Word (.docx حقيقي، نص قابل للتعديل + صورة الشارت).
     المكتبات في مجلد vendor وتنحمّل بس وقت التصدير.
   - اسأل: محادثة مع نموذج OpenRouter (نفس المفتاح اللي في الإعدادات) ومعه بيانات الشارت ونتيجة المدارس. */
Object.assign(UI, {
  sv_t: ["المحفوظات", "Saved"], dk_g_sv: ["تحليلاتك المحفوظة لكل سهم", "Your saved analyses by stock"],
  sv_h: ["المحفوظات", "Saved analyses"], sv_p: ["كل تحليل حفظته من الشارت، مرتبة حسب السهم. افتحه يرجع لك على وضعه وتقدر تعدل عليه، أو صدّره PDF أو Word.", "Every analysis you saved from the chart, grouped by stock. Open one to return to it exactly as it was and edit it, or export it as PDF or Word."],
  sv_save: ["احفظ في المحفوظات", "Save to Saved"], sv_update: ["احفظ التعديلات", "Save changes"], sv_copy: ["احفظ كنسخة جديدة", "Save as a new copy"],
  sv_title: ["العنوان", "Title"], sv_note: ["ملاحظاتك", "Your notes"], sv_note_ph: ["مثلاً: أنتظر إغلاق فوق المقاومة قبل أي قرار", "e.g. waiting for a close above resistance before any decision"],
  sv_saved: ["انحفظ في المحفوظات", "Saved"], sv_busy: ["جاري الحفظ…", "Saving…"], sv_need: ["حلّل الشارت أول", "Analyse the chart first"], sv_need_tok: ["الحفظ يحتاج ربط GitHub من الإعدادات", "Saving needs the GitHub connection in settings"],
  sv_open: ["افتح", "Open"], sv_del: ["حذف", "Delete"], sv_del2: ["اضغط مرة ثانية للحذف", "Tap again to delete"], sv_deleted: ["انحذف", "Deleted"],
  sv_loading: ["جاري التحميل…", "Loading…"], sv_none: ["ما فيه تحليلات محفوظة للحين. من الشارت: حلّل بالمدارس، وبعدها اضغط احفظ.", "No saved analyses yet. On the chart: analyse with the schools, then press Save."],
  sv_search: ["ابحث برمز أو اسم أو عنوان", "Search by symbol, name or title"], sv_cur: ["مفتوح من المحفوظات: {t}", "Opened from Saved: {t}"], sv_close: ["إغلاق", "Close"],
  sv_opening: ["جاري فتح التحليل…", "Opening the analysis…"], sv_gone: ["السهم هذا ما عاد موجود في الشارت", "This stock is no longer on the chart"],
  sv_replay: ["الشارت مفتوح على آخر شمعة وقت الحفظ ({d}). اضغط عرض الكل في الإعادة عشان تشوف وش صار بعدها.", "The chart opens at the last candle when saved ({d}). Press Show all in replay to see what happened after."],
  xp_pdf: ["PDF", "PDF"], xp_word: ["Word", "Word"], xp_busy: ["جاري تجهيز الملف…", "Preparing the file…"], xp_done: ["تم التصدير", "Exported"], xp_err: ["تعذر التصدير", "Export failed"],
  xp_need_chart: ["التصدير من صفحة الشارت", "Export works from the chart page"],
  xp_hint: ["لحفظه PDF: من نافذة الطباعة اختر «حفظ كـ PDF».", "To save as PDF: choose \"Save as PDF\" in the print dialog."], xp_print: ["اطبع / احفظ PDF", "Print / Save PDF"],
  xp_pdf_tip: ["انفتح التقرير: اختر «حفظ كـ PDF» من نافذة الطباعة", "Report opened: choose \"Save as PDF\" in the print dialog"],
  rp_title: ["تقرير تحليل", "Analysis report"], rp_meta: ["آخر شمعة {d} · السعر {p}", "Last candle {d} · Price {p}"], rp_made: ["أُعد في مِراس", "Made with Meras"],
  rp_ai: ["الشرح المطوّل", "Detailed explanation"], rp_chat: ["الأسئلة والأجوبة", "Questions and answers"], rp_note: ["ملاحظاتي", "My notes"],
  qa_h: ["اسأل عن السهم أو التحليل", "Ask about the stock or the analysis"], qa_ph: ["اكتب سؤالك، مثلاً: ليش إليوت غير محسوم هنا؟ أو وش أراقب الأسبوع الجاي؟", "Type your question, e.g. why is Elliott undecided here? or what should I watch next week?"],
  qa_send: ["اسأل", "Ask"], qa_long: ["اكتب لي شرح مطوّل", "Write a detailed explanation"], qa_busy: ["يكتب…", "Writing…"], qa_clear: ["مسح المحادثة", "Clear chat"],
  qa_you: ["أنت", "You"], qa_ai: ["المساعد", "Assistant"], qa_setup: ["اربط مفتاح OpenRouter من الإعدادات عشان تسأل وتاخذ شرح مطوّل.", "Connect an OpenRouter key in settings to ask questions and get a detailed explanation."],
  qa_warn: ["إجابات نموذج ذكاء اصطناعي وقد يخطئ. تعليمي، ومو توصية شراء أو بيع.", "AI model answers may be wrong. Educational, not a buy or sell recommendation."]
});

const SV = { list: null, sha: undefined, loading: false, cur: null, q: "", busy: false, del: null, pend: null };
SCA.ai = SCA.ai || { long: "", model: "", chat: [], busy: false, err: "" };
SCA.meta = SCA.meta || { title: "", note: "" };
const svOk = () => typeof HOSTED !== "undefined" && HOSTED && !!CFG.token;
const svId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

async function svLoad(force) {
  if (!svOk() || SV.loading || (SV.list && !force)) return; SV.loading = true;
  try { const f = await readJson("saved/index.json"); SV.list = (f && Array.isArray(f.data)) ? f.data : []; SV.sha = f ? f.sha : undefined; } catch (e) { SV.list = SV.list || []; toast(errText(e)); }
  SV.loading = false; if (route() === "desk" && typeof dkTab !== "undefined" && dkTab === "sv") render();
}
function svDefaultTitle() { const cfg = chartCfg(), d = CH && CH.data[CH.e - 1]; return cfg.sym + " " + symName(cfg.sym) + (d && d.d ? " · " + d.d : ""); }
function svSnapshot() {
  const cfg = chartCfg(), last = CH.data[CH.e - 1];
  return {
    v: 1, sym: cfg.sym, name: symName(cfg.sym), title: (SCA.meta.title || "").trim() || svDefaultTitle(), note: SCA.meta.note || "",
    date: last && last.d ? last.d : null, price: last ? last.c : null, replay: CH.e < CH.fullLen,
    cfg: JSON.parse(JSON.stringify(cfg)), sel: SCA.sel.slice(), res: SCA.res,
    ai: { long: SCA.ai.long || "", model: SCA.ai.model || "", chat: SCA.ai.chat || [] },
    draws: JSON.parse(JSON.stringify(S.drawings[cfg.sym] || []))
  };
}
async function svSave(asNew) {
  if (!SCA.res) { toast(t("sv_need")); return; }
  if (!svOk()) { toast(t("sv_need_tok")); return; }
  if (SV.busy) return; SV.busy = true; render();
  try {
    const item = svSnapshot(), now = new Date().toISOString(), id = SV.cur && !asNew ? SV.cur.id : svId();
    item.id = id; item.upd = now; item.at = SV.cur && !asNew ? SV.cur.at || now : now;
    const path = "saved/" + id + ".json", old = await gh(path);
    await gh(path, "PUT", { message: "saved " + item.sym, content: b64e(JSON.stringify(item)), sha: old ? old.sha : undefined });
    const idx = await readJson("saved/index.json"), list = (idx && Array.isArray(idx.data) ? idx.data : []).filter((x) => x.id !== id);
    list.unshift({ id, sym: item.sym, name: item.name, title: item.title, at: item.at, upd: now, date: item.date, price: item.price, fb: item.res.fb, conf: item.res.conf, n: item.sel.length });
    await gh("saved/index.json", "PUT", { message: "saved index", content: b64e(JSON.stringify(list)), sha: idx ? idx.sha : undefined });
    SV.list = list; SV.cur = { id, at: item.at, title: item.title, sym: item.sym }; SCA.meta.title = item.title; toast(t("sv_saved"));
  } catch (e) { toast(errText(e)); }
  SV.busy = false; render();
}
async function svDelete(id) {
  try {
    const f = await gh("saved/" + id + ".json"); if (f) await gh("saved/" + id + ".json", "DELETE", { message: "delete saved", sha: f.sha });
    const idx = await readJson("saved/index.json"), list = (idx && Array.isArray(idx.data) ? idx.data : []).filter((x) => x.id !== id);
    await gh("saved/index.json", "PUT", { message: "saved index", content: b64e(JSON.stringify(list)), sha: idx ? idx.sha : undefined });
    SV.list = list; if (SV.cur && SV.cur.id === id) SV.cur = null; toast(t("sv_deleted"));
  } catch (e) { toast(errText(e)); }
  render();
}
async function svOpen(id, then) {
  toast(t("sv_opening"));
  let item;
  try { const f = await readJson("saved/" + id + ".json"); item = f && f.data; } catch (e) { toast(errText(e)); return; }
  if (!item) { toast(errText({ code: "404" })); return; }
  const full = chartData(item.sym);
  if (!full.length) { toast(t("sv_gone")); return; }
  const cfg = chartCfg(); Object.assign(cfg, item.cfg || {}, { sym: item.sym }); save();
  chOffset = 0; chPending = null;
  const k = item.date ? full.findIndex((r) => r.d === item.date) : -1;
  chReplay = k >= 0 && k + 1 < full.length ? k + 1 : null;
  S.drawings[item.sym] = item.draws || [];
  SCA.sel = item.sel || []; SCA.res = item.res; SCA.keyPending = true; scaSave();
  SCA.ai = Object.assign({ busy: false, err: "" }, item.ai || { long: "", chat: [] });
  SCA.meta = { title: item.title || "", note: item.note || "" };
  SV.cur = { id: item.id, at: item.at, title: item.title, sym: item.sym };
  if (location.hash !== "#chart") location.hash = "chart"; else render();
  setTimeout(() => { render(); if (chReplay != null && item.date) toast(t("sv_replay").replace("{d}", item.date)); const o = document.querySelector(".sca"); if (o) o.scrollIntoView({ block: "start" }); if (then) setTimeout(then, 350); }, 250);
}

/* شريط الحفظ والتصدير تحت النتيجة */
function svBar() {
  if (SV.cur && SV.cur.sym !== chartCfg().sym) { SV.cur = null; SCA.meta = { title: "", note: "" }; }
  const cur = SV.cur ? '<p class="small" style="margin:0"><span class="tag amber">' + esc(t("sv_cur").replace("{t}", SV.cur.title || "")) + '</span> <button class="btn sm ghost" data-act="sv-close">' + esc(t("sv_close")) + "</button></p>" : "";
  const saveBtns = svOk() ? (SV.cur ? '<button class="btn primary" data-act="sv-save"' + (SV.busy ? " disabled" : "") + ">💾 " + esc(t(SV.busy ? "sv_busy" : "sv_update")) + '</button><button class="btn" data-act="sv-copy"' + (SV.busy ? " disabled" : "") + ">" + esc(t("sv_copy")) + "</button>" : '<button class="btn primary" data-act="sv-save"' + (SV.busy ? " disabled" : "") + ">💾 " + esc(t(SV.busy ? "sv_busy" : "sv_save")) + "</button>") : "";
  return '<div class="panel stack sv-bar">' + cur + '<div class="form-grid"><div class="field"><label for="sv-title">' + esc(t("sv_title")) + '</label><input id="sv-title" data-svm="title" maxlength="120" value="' + esc(SCA.meta.title || svDefaultTitle()) + '"></div></div><div class="field"><label for="sv-note">' + esc(t("sv_note")) + '</label><textarea id="sv-note" data-svm="note" rows="2" placeholder="' + esc(t("sv_note_ph")) + '">' + esc(SCA.meta.note || "") + "</textarea></div>" +
    '<div class="row" style="gap:8px;flex-wrap:wrap">' + saveBtns + '<button class="btn" data-act="xp-pdf">⬇ ' + esc(t("xp_pdf")) + '</button><button class="btn" data-act="xp-word">⬇ ' + esc(t("xp_word")) + "</button>" + (svOk() ? '<a class="btn ghost" href="#desk" data-dktab="sv">' + esc(t("sv_h")) + " ↗</a>" : "") + "</div></div>";
}

/* صفحة المحفوظات في مكتبي */
function dkSaved() {
  if (!SV.list) { svLoad(); return '<div class="notice">' + esc(t("sv_loading")) + "</div>"; }
  const q = SV.q.trim().toLowerCase(), list = SV.list.filter((x) => !q || [x.sym, x.name, x.title].some((v) => String(v || "").toLowerCase().includes(q)));
  const groups = {}; list.forEach((x) => { (groups[x.sym] = groups[x.sym] || []).push(x); });
  const tag = (b) => (typeof scaTag === "function" ? scaTag(b) : "");
  const item = (x) => '<li class="sv-it"><div class="sv-main"><b>' + esc(x.title) + '</b><span class="small muted num" dir="ltr">' + esc((x.date || "") + (x.price != null ? " · " + x.price : "")) + "</span>" + tag(x.fb) + '<span class="small muted">' + esc(whenText(x.upd)) + '</span></div><div class="row" style="gap:6px"><button class="btn sm primary" data-act="sv-open" data-id="' + esc(x.id) + '">' + esc(t("sv_open")) + '</button><button class="btn sm" data-act="sv-pdf" data-id="' + esc(x.id) + '">PDF</button><button class="btn sm" data-act="sv-word" data-id="' + esc(x.id) + '">Word</button><button class="btn sm ghost" data-act="sv-del" data-id="' + esc(x.id) + '">' + esc(t(SV.del === x.id ? "sv_del2" : "sv_del")) + "</button></div></li>";
  const body = Object.keys(groups).length ? Object.entries(groups).map(([s, arr]) => '<section class="panel stack"><h3 style="margin:0"><span class="num">' + esc(s) + "</span> " + esc(arr[0].name || "") + ' <span class="tag num">' + arr.length + '</span></h3><ul class="sv-list">' + arr.map(item).join("") + "</ul></section>").join("") : '<div class="notice">' + esc(t("sv_none")) + "</div>";
  return '<div class="stack"><div class="dg-intro"><h2 style="margin:0">' + esc(t("sv_h")) + '</h2><p class="muted" style="margin:4px 0 0">' + esc(t("sv_p")) + '</p></div><input class="sv-q" data-svq="1" placeholder="' + esc(t("sv_search")) + '" value="' + esc(SV.q) + '">' + body + "</div>";
}

/* ----- صورة الشارت (PNG) من الشارت الظاهر، بألوان الوضع الفاتح ----- */
async function chartPng() {
  const svg = document.querySelector(".ch-body svg"); if (!svg) return null;
  const root = document.documentElement, prev = root.getAttribute("data-theme");
  root.setAttribute("data-theme", "light");
  const clone = svg.cloneNode(true), src = svg.querySelectorAll("*"), dst = clone.querySelectorAll("*");
  const props = ["fill", "stroke", "stroke-width", "stroke-dasharray", "opacity", "fill-opacity", "stroke-opacity", "font-size", "font-family", "font-weight", "text-anchor", "dominant-baseline", "visibility", "display"];
  src.forEach((el, i) => { const cs = getComputedStyle(el); dst[i].setAttribute("style", props.map((p) => p + ":" + cs.getPropertyValue(p)).join(";")); });
  if (prev == null) root.removeAttribute("data-theme"); else root.setAttribute("data-theme", prev);
  const vb = svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width ? svg.viewBox.baseVal : { width: svg.clientWidth, height: svg.clientHeight };
  clone.setAttribute("width", vb.width); clone.setAttribute("height", vb.height); clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.insertBefore(Object.assign(document.createElementNS("http://www.w3.org/2000/svg", "rect"), {}), clone.firstChild);
  const bg = clone.firstChild; bg.setAttribute("x", 0); bg.setAttribute("y", 0); bg.setAttribute("width", vb.width); bg.setAttribute("height", vb.height); bg.setAttribute("fill", "#ffffff");
  const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], { type: "image/svg+xml" }));
  try {
    const img = await new Promise((ok, no) => { const im = new Image(); im.onload = () => ok(im); im.onerror = no; im.src = url; });
    const k = 2, cv = document.createElement("canvas"); cv.width = vb.width * k; cv.height = vb.height * k;
    const cx = cv.getContext("2d"); cx.fillStyle = "#fff"; cx.fillRect(0, 0, cv.width, cv.height); cx.drawImage(img, 0, 0, cv.width, cv.height);
    return { url: cv.toDataURL("image/png"), w: vb.width, h: vb.height };
  } finally { URL.revokeObjectURL(url); }
}
function loadScript(src) { return new Promise((ok, no) => { if (document.querySelector('script[data-src="' + src + '"]')) return ok(); const s = document.createElement("script"); s.src = src; s.dataset.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }); }
function download(blob, name) { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); }
const biasWord = (b) => t({ up: "ex_up", down: "ex_down", flat: "ex_flat", open: "ex_open_q" }[b] || "ex_flat");

/* محتوى التقرير (مشترك بين PDF و Word) */
function reportData(png) {
  const R = SCA.res, cfg = chartCfg(), ex = scaExplain(R);
  return {
    rtl: S.lang === "ar", sym: cfg.sym, name: symName(cfg.sym), title: (SCA.meta.title || "").trim() || svDefaultTitle(), note: SCA.meta.note || "", png,
    meta: t("rp_meta").replace("{d}", R.date || "-").replace("{p}", px(R.c)),
    final: [[t("sca_final"), biasWord(R.fb)], [t("sca_conf"), t("sca_c" + R.conf)], [t("sca_score"), (R.tot > 0 ? "+" : "") + R.tot.toFixed(2)], ["", t("sca_agree").replace("{a}", R.agree).replace("{n}", R.nAct)]],
    why: ex.why, scen: ex.scen,
    levels: R.groups.map((g) => [g.p > R.c ? t("sca_res") : t("sca_sup"), px(g.p), g.ids.map(scaName).join(L(["، ", ", "]))]),
    cmp: R.res.map((r) => [scaName(r.id), biasWord(r.bias), r.na ? "-" : (r.score > 0 ? "+" : "") + r.score.toFixed(1), r.na ? "-" : String(r.w)]),
    reads: R.res.map((r) => ({ h: scaName(r.id) + " · " + biasWord(r.bias), lines: r.lines })),
    long: SCA.ai.long || "", chat: SCA.ai.chat || [],
    foot: t("sca_how") + " " + t("sca_note"), made: t("rp_made") + " · " + new Date().toISOString().slice(0, 10)
  };
}
const isNum = (c) => /^[+\-]?[\d.,]+%?$/.test(String(c).trim());
const numSpan = (c) => (isNum(c) ? '<span dir="ltr">' + esc(c) + "</span>" : esc(c));
function reportHtml(d) {
  const ul = (a) => "<ul>" + a.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  const tbl = (head, rows) => '<table><thead><tr>' + head.map((h) => "<th>" + esc(h) + "</th>").join("") + "</tr></thead><tbody>" + rows.map((r) => "<tr>" + r.map((c) => "<td>" + numSpan(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table>";
  const paras = (txt) => txt.split(/\n+/).filter((x) => x.trim()).map((x) => "<p>" + esc(x.trim()) + "</p>").join("");
  return '<div class="rp" dir="' + (d.rtl ? "rtl" : "ltr") + '"><div class="rp-head"><div><div class="rp-k">' + esc(t("rp_title")) + "</div><h1>" + esc(d.title) + '</h1><div class="rp-m">' + esc(d.meta) + '</div></div><div class="rp-logo">مِراس</div></div>' +
    (d.png ? '<img class="rp-img" src="' + d.png.url + '" alt="">' : "") +
    '<div class="rp-final">' + d.final.map(([k, v]) => "<div>" + (k ? "<span>" + esc(k) + "</span>" : "") + "<b>" + numSpan(v) + "</b></div>").join("") + "</div>" +
    (d.note ? '<div class="rp-sec"><h2>' + esc(t("rp_note")) + "</h2>" + paras(d.note) + "</div>" : "") +
    '<div class="rp-sec"><h2>' + esc(t("sca_why")) + "</h2>" + ul(d.why) + "</div>" +
    (d.levels.length ? '<div class="rp-sec"><h2>' + esc(t("sca_lv")) + "</h2>" + tbl(["", L(["السعر", "Price"]), t("sca_src")], d.levels) + "</div>" : "") +
    '<div class="rp-sec"><h2>' + esc(t("sca_scen")) + "</h2>" + ul(d.scen) + "</div>" +
    '<div class="rp-sec"><h2>' + esc(t("sca_cmp")) + "</h2>" + tbl([t("sch_name"), t("ex_bias"), t("sca_score"), t("sca_w")], d.cmp) + "</div>" +
    '<div class="rp-sec"><h2>' + esc(t("sca_each")) + "</h2>" + d.reads.map((r) => '<div class="rp-read"><h3>' + esc(r.h) + "</h3>" + ul(r.lines) + "</div>").join("") + "</div>" +
    (d.long ? '<div class="rp-sec"><h2>' + esc(t("rp_ai")) + "</h2>" + paras(d.long) + "</div>" : "") +
    (d.chat.length ? '<div class="rp-sec"><h2>' + esc(t("rp_chat")) + "</h2>" + d.chat.map((c) => '<div class="rp-qa"><p class="rp-q">' + esc(c.q) + "</p>" + paras(c.a || "") + "</div>").join("") + "</div>" : "") +
    '<p class="rp-foot">' + esc(d.foot) + "<br>" + esc(d.made) + "</p></div>";
}
const fileBase = (d) => {
  // مثال: تحليل شارت - 2222 أرامكو السعودية - 2026-10-23  |  تحليل شارت - XAU الذهب - 2026-10-23
  const sym = String(d.sym).replace(/^\^/, ""), name = String(d.name || "").trim();
  const who = name && name !== d.sym ? sym + " " + name : sym;
  return (L(["تحليل شارت", "Chart analysis"]) + " - " + who + " - " + (SCA.res.date || new Date().toISOString().slice(0, 10)))
    .replace(/[\\/:*?"<>|#%]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 120);
};

const RP_CSS = '@page{size:A4;margin:12mm}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{margin:0;background:#fff}' +
  '.rp{font-family:"IBM Plex Sans Arabic",Carlito,Tahoma,sans-serif;color:#111827;background:#fff;font-size:12.5pt;line-height:1.7;max-width:800px;margin:0 auto;padding:12px}' +
  '.rp h1{font-size:20pt;margin:2px 0}.rp h2{font-size:14pt;margin:16px 0 6px;color:#B4501A;border-bottom:1px solid #F1E3D8;padding-bottom:4px;break-after:avoid}.rp h3{font-size:12.5pt;margin:10px 0 2px;break-after:avoid}' +
  '.rp-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;border-bottom:2px solid #F4A47C;padding-bottom:8px;margin-bottom:10px}.rp-k{color:#6B7280;font-size:10pt}.rp-m{color:#6B7280;font-size:10.5pt}.rp-logo{font-weight:700;font-size:18pt;color:#E07A45}' +
  '.rp-img{width:100%;border:1px solid #E5E7EB;border-radius:8px;margin:6px 0;break-inside:avoid}' +
  '.rp-final{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:#FFF4EC;border:1px solid #F6D3BE;border-radius:10px;padding:10px;margin:8px 0;break-inside:avoid}.rp-final span{display:block;color:#6B7280;font-size:9.5pt}.rp-final b{font-size:13pt}' +
  '.rp table{width:100%;border-collapse:collapse;font-size:11pt}.rp th,.rp td{border:1px solid #E5E7EB;padding:5px 8px;text-align:start}.rp th{background:#F9FAFB}.rp tr{break-inside:avoid}' +
  '.rp ul{margin:4px 0;padding-inline-start:20px}.rp li{margin:2px 0;break-inside:avoid}.rp p{margin:4px 0}.rp-read{break-inside:avoid}' +
  '.rp-q{font-weight:700}.rp-qa{border-inline-start:3px solid #F4A47C;padding-inline-start:10px;margin:8px 0}.rp-foot{color:#6B7280;font-size:9.5pt;margin-top:16px;border-top:1px solid #E5E7EB;padding-top:8px}' +
  '.rp-bar{position:sticky;top:0;background:#FFF4EC;border-bottom:1px solid #F6D3BE;padding:10px;text-align:center;font-family:Tahoma,sans-serif}.rp-bar button{font:inherit;padding:6px 16px;border-radius:8px;border:1px solid #E07A45;background:#E07A45;color:#fff;cursor:pointer}@media print{.rp-bar{display:none}}';
function reportDoc(d) {
  const fonts = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Carlito:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap">';
  return '<!doctype html><html lang="' + (d.rtl ? "ar" : "en") + '" dir="' + (d.rtl ? "rtl" : "ltr") + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(fileBase(d)) + "</title>" + fonts + "<style>" + RP_CSS + '</style></head><body><div class="rp-bar">' + esc(t("xp_hint")) + ' <button onclick="window.print()">' + esc(t("xp_print")) + "</button></div>" + reportHtml(d) +
    "<script>window.addEventListener('load',function(){var go=function(){setTimeout(function(){window.print()},300)};if(document.fonts&&document.fonts.ready)document.fonts.ready.then(go);else go();});<\/script></body></html>";
}
/* PDF: صفحة تقرير جاهزة للطباعة، والمتصفح يحفظها PDF (العربي يطلع مضبوط والملف صغير والنص قابل للنسخ) */
async function exportPdf(pre) {
  if (!SCA.res) { if (pre) pre.close(); toast(t("sv_need")); return; }
  if (route() !== "chart") { if (pre) pre.close(); toast(t("xp_need_chart")); return; }
  const w = pre && !pre.closed ? pre : window.open("", "_blank");
  if (w) w.document.write('<p style="font-family:Tahoma;padding:20px" dir="rtl">' + esc(t("xp_busy")) + "</p>");
  try {
    const png = await chartPng(), d = reportData(png), html = reportDoc(d);
    if (w) { w.document.open(); w.document.write(html); w.document.close(); }
    else {
      const f = document.createElement("iframe"); f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0"; document.body.appendChild(f);
      f.contentDocument.open(); f.contentDocument.write(html.replace(/<script>[\s\S]*?<\/script>/, "")); f.contentDocument.close();
      setTimeout(() => { f.contentWindow.focus(); f.contentWindow.print(); setTimeout(() => f.remove(), 60000); }, 700);
    }
    toast(t("xp_pdf_tip"));
  } catch (e) { console.error(e); if (w) w.close(); toast(t("xp_err")); }
}
async function exportWord() {
  if (!SCA.res) { toast(t("sv_need")); return; }
  if (route() !== "chart") { toast(t("xp_need_chart")); return; }
  toast(t("xp_busy"));
  try {
    const png = await chartPng(), d = reportData(png);
    await loadScript("vendor/docx.umd.js");
    const X = window.docx, rtl = d.rtl, font = rtl ? "Arial" : "Calibri";
    const run = (text, o) => new X.TextRun(Object.assign({ text: String(text), font, rightToLeft: rtl, size: 22 }, o || {}));
    const P = (text, o, ro) => new X.Paragraph(Object.assign({ children: [run(text, ro)], bidirectional: rtl, spacing: { after: 100 } }, rtl ? {} : { alignment: X.AlignmentType.LEFT }, o || {}));
    const H = (text, lvl) => P(text, { heading: lvl || X.HeadingLevel.HEADING_2, spacing: { before: 240, after: 120 } }, { bold: true, size: lvl === X.HeadingLevel.HEADING_1 ? 36 : 28, color: "1F2937" });
    const B = (text) => P(text, { bullet: { level: 0 } });
    const cell = (text, head) => new X.TableCell({ children: [P(isNum(text) ? "\u200E" + text : text, { spacing: { after: 40 } }, Object.assign(head ? { bold: true } : {}, isNum(text) ? { rightToLeft: false } : {}))], shading: head ? { fill: "F3F4F6" } : undefined, margins: { top: 60, bottom: 60, left: 100, right: 100 } });
    const T = (head, rows) => new X.Table({ width: { size: 100, type: X.WidthType.PERCENTAGE }, visuallyRightToLeft: rtl, rows: [new X.TableRow({ tableHeader: true, children: head.map((h) => cell(h, true)) })].concat(rows.map((r) => new X.TableRow({ children: r.map((c) => cell(c)) }))) });
    const kids = [P(t("rp_title"), {}, { color: "6B7280", size: 20 }), H(d.title, X.HeadingLevel.HEADING_1), P(d.meta, {}, { color: "6B7280" })];
    if (png) { const bytes = Uint8Array.from(atob(png.url.split(",")[1]), (c) => c.charCodeAt(0)), w = 600, h = Math.round(w * png.h / png.w); kids.push(new X.Paragraph({ children: [new X.ImageRun({ data: bytes, transformation: { width: w, height: h } })], alignment: X.AlignmentType.CENTER, spacing: { after: 200 } })); }
    kids.push(T(d.final.map(([k]) => k || " "), [d.final.map(([, v]) => v)]));
    if (d.note) { kids.push(H(t("rp_note"))); d.note.split(/\n+/).filter((x) => x.trim()).forEach((x) => kids.push(P(x.trim()))); }
    kids.push(H(t("sca_why"))); d.why.forEach((x) => kids.push(B(x)));
    if (d.levels.length) { kids.push(H(t("sca_lv"))); kids.push(T(["", L(["السعر", "Price"]), t("sca_src")], d.levels)); }
    kids.push(H(t("sca_scen"))); d.scen.forEach((x) => kids.push(B(x)));
    kids.push(H(t("sca_cmp"))); kids.push(T([t("sch_name"), t("ex_bias"), t("sca_score"), t("sca_w")], d.cmp));
    kids.push(H(t("sca_each"))); d.reads.forEach((r) => { kids.push(P(r.h, { spacing: { before: 160, after: 60 } }, { bold: true })); r.lines.forEach((x) => kids.push(B(x))); });
    if (d.long) { kids.push(H(t("rp_ai"))); d.long.split(/\n+/).filter((x) => x.trim()).forEach((x) => kids.push(P(x.trim()))); }
    if (d.chat.length) { kids.push(H(t("rp_chat"))); d.chat.forEach((c) => { kids.push(P(c.q, { spacing: { before: 160, after: 60 } }, { bold: true })); (c.a || "").split(/\n+/).filter((x) => x.trim()).forEach((x) => kids.push(P(x.trim()))); }); }
    kids.push(P(d.foot, { spacing: { before: 300 } }, { color: "6B7280", size: 18 })); kids.push(P(d.made, {}, { color: "6B7280", size: 18 }));
    const doc = new X.Document({ creator: "Meras", title: d.title, styles: { default: { document: { run: { font } } } }, sections: [{ properties: { page: { margin: { top: 900, bottom: 900, left: 900, right: 900 } } }, children: kids }] });
    download(await X.Packer.toBlob(doc), fileBase(d) + ".docx"); toast(t("xp_done"));
  } catch (e) { console.error(e); toast(t("xp_err")); }
}

/* ----- اسأل + الشرح المطوّل (OpenRouter) ----- */
const QA_SYSTEM = (lang) => [
  "You are the analysis assistant inside Meras, a personal markets app used by its owner, an individual investor in Saudi Arabia who follows Saudi and global stocks.",
  "Each request carries a JSON context: the stock on the chart, its recent daily candles, and (when available) the app's multi-school analysis: every school's bias, score and notes, the weighted final result, and price levels several schools agree on. It may also carry the owner's notes.",
  "Rules:",
  "1. Base every number on the JSON. If something is not in the data, say so plainly rather than guessing.",
  "2. You may discuss scenarios with explicit conditions (for example: a daily close above X would strengthen the upside), key levels, risk and what to watch. Never give a direct instruction to buy or sell, never promise an outcome, and never invent probabilities.",
  "3. If asked about a different stock than the one in the JSON, say you only have this chart's data and suggest opening that stock on the chart first. General market and education questions are welcome.",
  "4. Write numbers with English digits (0-9). No markdown symbols such as ** or # or tables; plain text paragraphs, with short heading lines allowed.",
  "Language and tone: " + (lang === "ar" ? "clear Arabic in a friendly Saudi tone, like an experienced analyst talking to a friend." : "plain, friendly English.")
].join("\n");
function qaContext() {
  const cfg = chartCfg(), d = CH.data.slice(0, CH.e), tail = d.slice(-120), R = SCA.res && SCA.key === cfg.sym + "|" + CH.e ? SCA.res : null;
  return {
    stock: cfg.sym + " " + symName(cfg.sym), practice_data: !!PRACTICE[cfg.sym], candles_total: d.length,
    last_120_daily_candles: tail.map((r) => [r.d || null, r.o, r.h, r.l, r.c, r.v || 0]), candle_format: "[date, open, high, low, close, volume]",
    schools_analysis: R ? { final: R.fb, weighted_score: +R.tot.toFixed(2), strength: ["", "weak", "moderate", "strong"][R.conf], agreeing: R.agree + "/" + R.nAct, atr14: +R.atr.toFixed(3), agreed_levels: R.groups.map((g) => ({ price: +g.p.toFixed(2), schools: g.ids })), schools: R.res.map((r) => ({ school: r.id, bias: r.bias, score: +r.score.toFixed(2), weight: r.w, notes: r.lines })) } : "not run yet",
    owner_notes: SCA.meta.note || null
  };
}
async function qaCall(question, long) {
  if (!AI.key) { toast(t("qa_setup")); return; }
  if (!AI.model) { toast(t("ai_need_model")); return; }
  SCA.ai.busy = true; SCA.ai.err = ""; render();
  const msgs = [{ role: "system", content: QA_SYSTEM(S.lang) }, { role: "user", content: "Context JSON:\n" + JSON.stringify(qaContext()) }, { role: "assistant", content: S.lang === "ar" ? "وصلتني البيانات. تفضل." : "Got the data. Go ahead." }];
  (SCA.ai.chat || []).slice(-6).forEach((c) => { msgs.push({ role: "user", content: c.q }); if (c.a) msgs.push({ role: "assistant", content: c.a }); });
  const q = long ? (S.lang === "ar" ? "اكتب تقرير تحليل مطوّل لهذا السهم من البيانات (600 إلى 900 كلمة) بهذي الأقسام وكل قسم يبدأ بسطر عنوان: الملخص، الاتجاه والسياق، قراءة المدارس واتفاقها واختلافها، المستويات المهمة، السيناريوهات بشروطها، المخاطر، الخلاصة. وفي آخره سطر: تحليل تعليمي، مو توصية شراء أو بيع." : "Write a detailed analysis report for this stock from the data (600 to 900 words) with these sections, each starting with a heading line: Summary, Trend and context, The schools' readings where they agree and differ, Key levels, Conditional scenarios, Risks, Conclusion. End with the line: Educational analysis, not a buy or sell recommendation.") : question;
  msgs.push({ role: "user", content: q });
  let text = "", err = "";
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { Authorization: "Bearer " + AI.key, "Content-Type": "application/json", "X-Title": "Meras" }, body: JSON.stringify({ model: AI.model, temperature: 0.35, max_tokens: long ? 2600 : 900, messages: msgs }) });
    if (!res.ok) err = t({ 401: "ai_e_401", 402: "ai_e_402", 404: "ai_e_404", 400: "ai_e_404", 429: "ai_e_429" }[res.status] || "ai_e_net") + " (" + res.status + ")";
    else { const j = await res.json(); text = ((j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || "").replace(/\*\*|^#+\s*/gm, "").trim(); if (!text) err = t("ai_e_empty"); }
  } catch (e) { err = t("ai_e_net"); }
  SCA.ai.busy = false; SCA.ai.err = err; SCA.ai.model = AI.model;
  if (text) { if (long) SCA.ai.long = text; else SCA.ai.chat = (SCA.ai.chat || []).concat([{ q: question, a: text, at: new Date().toISOString() }]); }
  render();
  setTimeout(() => { const el = document.querySelector(long ? ".qa-long" : ".qa-msgs .qa-m:last-child"); if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, 60);
}
function scaAiBox() {
  if (!(typeof HOSTED !== "undefined" && HOSTED)) return "";
  if (!AI.key) return '<div class="panel stack qa"><h3 style="font-size:17px;margin:0">' + esc(t("qa_h")) + '</h3><p class="small muted" style="margin:0">' + esc(t("qa_setup")) + ' <a href="#settings">' + esc(t("set_h")) + "</a></p></div>";
  const paras = (txt) => txt.split(/\n+/).filter((x) => x.trim()).map((x) => { const s = x.trim(); return s.length < 48 && !/[.،,:؟?!]$/.test(s) ? "<h4>" + esc(s) + "</h4>" : "<p>" + esc(s) + "</p>"; }).join("");
  const a = SCA.ai, chat = (a.chat || []).map((c) => '<div class="qa-m"><div class="qa-q"><span class="small muted">' + esc(t("qa_you")) + "</span><p>" + esc(c.q) + '</p></div><div class="qa-a"><span class="small muted">' + esc(t("qa_ai")) + "</span>" + paras(c.a || "") + "</div></div>").join("");
  return '<div class="panel stack qa"><div class="row" style="justify-content:space-between;align-items:center"><h3 style="font-size:17px;margin:0">' + esc(t("qa_h")) + '</h3><span class="tag num">' + esc(AI.model || "") + "</span></div>" +
    (a.long ? '<div class="qa-long"><b>' + esc(t("rp_ai")) + "</b>" + paras(a.long) + "</div>" : "") +
    (chat ? '<div class="qa-msgs">' + chat + "</div>" : "") +
    (a.err ? '<p class="neg small" style="margin:0">' + esc(a.err) + "</p>" : "") +
    '<form class="qa-form" data-form="qa" novalidate><textarea id="qa-q" rows="2" maxlength="600" placeholder="' + esc(t("qa_ph")) + '"' + (a.busy ? " disabled" : "") + '></textarea><div class="row" style="gap:6px;flex-wrap:wrap"><button class="btn primary" type="submit"' + (a.busy ? " disabled" : "") + ">" + esc(t(a.busy ? "qa_busy" : "qa_send")) + '</button><button class="btn" type="button" data-act="qa-long"' + (a.busy ? " disabled" : "") + ">✦ " + esc(t("qa_long")) + "</button>" + ((a.chat || []).length || a.long ? '<button class="btn ghost" type="button" data-act="qa-clear"' + (a.busy ? " disabled" : "") + ">" + esc(t("qa_clear")) + "</button>" : "") + "</div></form>" +
    '<p class="small muted" style="margin:0">' + esc(t("qa_warn")) + "</p></div>";
}

/* ----- الأحداث ----- */
document.addEventListener("input", (ev) => {
  const k = ev.target.dataset && ev.target.dataset.svm; if (k) { SCA.meta[k] = ev.target.value; return; }
  if (ev.target.dataset && ev.target.dataset.svq) { SV.q = ev.target.value; const pos = ev.target.selectionStart; render(); const el = document.querySelector("[data-svq]"); if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (e) {} } }
});
document.addEventListener("submit", (ev) => {
  const f = ev.target.closest && ev.target.closest('[data-form="qa"]'); if (!f) return;
  ev.preventDefault(); const q = (document.getElementById("qa-q").value || "").trim(); if (q && !SCA.ai.busy) qaCall(q, false);
});
document.addEventListener("keydown", (ev) => { if (ev.target && ev.target.id === "qa-q" && ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); const f = ev.target.closest("form"); if (f) f.requestSubmit(); } });
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest('[data-act^="sv-"],[data-act^="xp-"],[data-act^="qa-"]'); if (!el) return;
  const a = el.dataset.act, id = el.dataset.id; ev.preventDefault();
  if (a === "sv-save") svSave(false);
  else if (a === "sv-copy") svSave(true);
  else if (a === "sv-close") { SV.cur = null; SCA.meta = { title: "", note: "" }; render(); }
  else if (a === "sv-open") svOpen(id);
  else if (a === "sv-pdf") { const w = window.open("", "_blank"); if (w) w.document.write('<p style="font-family:Tahoma;padding:20px" dir="rtl">' + esc(t("xp_busy")) + "</p>"); svOpen(id, () => exportPdf(w)); }
  else if (a === "sv-word") svOpen(id, exportWord);
  else if (a === "sv-del") { if (SV.del === id) { SV.del = null; svDelete(id); } else { SV.del = id; render(); setTimeout(() => { if (SV.del === id) { SV.del = null; render(); } }, 4000); } }
  else if (a === "xp-pdf") exportPdf(null);
  else if (a === "xp-word") exportWord();
  else if (a === "qa-long") { if (!SCA.ai.busy) qaCall("", true); }
  else if (a === "qa-clear") { SCA.ai.chat = []; SCA.ai.long = ""; SCA.ai.err = ""; render(); }
});
