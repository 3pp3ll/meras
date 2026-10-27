/* ===== مِراس: أخبار السهم (أيقونة 📰 جنب كل سهم) =====
   تفتح نافذة فيها آخر أخبار الرمز من news.json (يتحدث 4 مرات يومياً ويغطي كل أسهم الشارت)،
   وروابط للبحث عن أخبار أكثر: Google News، وأرقام للسوق السعودي، وYahoo Finance للعالمي. */
Object.assign(UI, {
  sn_btn: ["أخبار السهم", "Stock news"], sn_h: ["أخبار {s}", "{s} news"], sn_none: ["ما لقيت أخبار لهذا الرمز في آخر 48 ساعة.", "No news for this symbol in the last 48 hours."],
  sn_more: ["أخبار أكثر", "More news"], sn_mkt: ["أخبار السوق", "Market news"], sn_ask: ["اسأل المساعد عن أخباره", "Ask the assistant about its news"],
  sn_loading: ["جاري تحميل الأخبار…", "Loading news…"], sn_tr: ["ترجمة العناوين للعربي", "Translate headlines"], sn_tr_off: ["عرض العناوين الأصلية", "Show original headlines"],
  sn_tr_wait: ["جاري الترجمة…", "Translating…"], sn_tr_key: ["الترجمة تحتاج مفتاح الذكاء الاصطناعي من الإعدادات. تقدر تفتح أي خبر في ترجمة Google من رابط «ترجمة».", "Translation needs the AI key from settings. You can open any headline in Google Translate."], sn_tr_err: ["تعذّرت الترجمة، جرّب مرة ثانية.", "Translation failed, try again."], sn_tr_g: ["ترجمة", "Translate"], sn_note: ["الأخبار تتحدث 4 مرات في اليوم.", "News refreshes 4 times a day."]
});
const SN = { s: null, tr: false, trBusy: false, trErr: "" };
const SN_TR = (() => { try { return JSON.parse(sessionStorage.getItem("meras.sntr") || "{}"); } catch (e) { return {}; } })();
const SN_TR_IC = '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M4 5h8M8 3v2M6 5c0 4 3 7 6 8M10 5c-.5 3-3 6-6 7M13 21l4-9 4 9M14.5 18h5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
async function snTranslate(items) {
  const todo = items.filter((x) => x.lang !== "ar" && !SN_TR[x.t]);
  if (!todo.length) return;
  if (typeof AI === "undefined" || !AI.key) { SN.trErr = t("sn_tr_key"); return; }
  SN.trBusy = true; SN.trErr = ""; snRender();
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { Authorization: "Bearer " + AI.key, "Content-Type": "application/json", "X-Title": "Meras" },
      body: JSON.stringify({ model: AI.model, temperature: 0.1, max_tokens: 1200, messages: [
        { role: "system", content: "ترجم عناوين الأخبار المالية التالية إلى العربية بأسلوب صحفي مختصر وواضح. أبقِ أسماء الشركات والرموز كما هي بالإنجليزية إذا كانت معروفة بها. أرجع JSON فقط: مصفوفة نصوص بنفس الترتيب وبنفس العدد، بدون أي شرح." },
        { role: "user", content: JSON.stringify(todo.map((x) => x.t)) }] }) });
    if (!res.ok) throw new Error(res.status);
    const j = await res.json(); const txt = String(j.choices?.[0]?.message?.content || "").replace(/```json|```/g, "").trim();
    const arr = JSON.parse(txt.slice(txt.indexOf("["), txt.lastIndexOf("]") + 1));
    todo.forEach((x, i) => { if (typeof arr[i] === "string" && arr[i].trim()) SN_TR[x.t] = arr[i].trim(); });
    try { sessionStorage.setItem("meras.sntr", JSON.stringify(SN_TR)); } catch (e) {}
  } catch (e) { SN.trErr = t("sn_tr_err"); }
  SN.trBusy = false; snRender();
}
const SN_IC = '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M5 5h11v14H6a1 1 0 0 1-1-1z M16 9h3v9a1 1 0 0 1-1 1h-2 M8 9h5M8 12h5M8 15h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>';
function newsBtn(sym, withLabel) {
  if (!sym || (typeof PRACTICE !== "undefined" && PRACTICE[sym]) || !(typeof HOSTED !== "undefined" && HOSTED && CFG.token)) return "";
  return '<button type="button" class="btn sm sn-btn" data-act="sn-open" data-s="' + esc(sym) + '" title="' + esc(t("sn_btn")) + '" aria-label="' + esc(t("sn_btn") + " " + sym) + '">' + SN_IC + (withLabel ? "<span>" + esc(t("sn_btn")) + "</span>" : "") + "</button>";
}
function snItems(sym) {
  const all = (typeof NW !== "undefined" && NW.data && NW.data.items) || [];
  if (sym[0] === "^") { const mk = /TASI/.test(sym) ? "sa" : "us"; return all.filter((x) => !x.sym && (x.mk === mk || x.mk === "macro")).slice(0, 12); }
  if (sym === "XAU" || sym === "XAG") return all.filter((x) => /gold|silver|ذهب|فضة/i.test(x.t) || x.topic === "Gold").slice(0, 12);
  const own = all.filter((x) => x.sym === sym);
  if (own.length) return own.sort((a, b) => (b.at > a.at ? 1 : -1)).slice(0, 12);
  // سهم ما يغطيه جامع الأخبار: نطابق بالاسم الكامل بس (الأسماء القصيرة مثل «الرياض» تطابق أخبار ثانية)
  const full = String((typeof EXTRA !== "undefined" && EXTRA && EXTRA.symbols && EXTRA.symbols[sym] && EXTRA.symbols[sym].n) || "").toLowerCase();
  return full.length > 7 ? all.filter((x) => x.t.toLowerCase().includes(full)).slice(0, 12) : [];
}
function snLinks(sym) {
  const nm = typeof symName === "function" ? symName(sym) : sym, sa = /^\d{4}$/.test(sym), idx = sym[0] === "^";
  const gq = sa ? nm + " سهم" : idx ? nm : (typeof EXTRA !== "undefined" && EXTRA && EXTRA.symbols && EXTRA.symbols[sym] ? EXTRA.symbols[sym].n : nm) + " stock";
  const links = [["Google News", "https://news.google.com/search?q=" + encodeURIComponent(gq) + (sa ? "&hl=ar&gl=SA&ceid=SA:ar" : "&hl=en-US&gl=US&ceid=US:en")]];
  if (sa) links.push(["أرقام", "https://www.argaam.com/ar/search?q=" + encodeURIComponent(nm)]);
  links.push(["Yahoo Finance", "https://finance.yahoo.com/quote/" + encodeURIComponent(sa ? sym + ".SR" : sym === "XAU" ? "GC=F" : sym === "XAG" ? "SI=F" : sym) + "/news"]);
  return links;
}
function snRender() {
  let el = document.getElementById("snsheet");
  if (!SN.s) { if (el) el.remove(); document.body.classList.remove("tk-lock"); return; }
  if (!el) { el = document.createElement("div"); el.id = "snsheet"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); document.body.appendChild(el); document.body.classList.add("tk-lock"); }
  el.dir = S.lang === "ar" ? "rtl" : "ltr";
  const s = SN.s, nm = typeof symName === "function" ? symName(s) : s, loaded = typeof NW !== "undefined" && NW.loaded;
  if (!loaded && typeof loadNews === "function") loadNews();
  SN.wait = !loaded;
  const items = loaded ? snItems(s) : [];
  const foreign = items.some((x) => x.lang !== "ar");
  const head = (x) => {
    const tr = SN.tr && x.lang !== "ar" && SN_TR[x.t];
    return tr ? '<p class="sn-t" dir="rtl">' + esc(tr) + '</p><p class="small muted sn-orig" dir="ltr">' + esc(x.t) + "</p>" : '<p class="sn-t" dir="' + (x.lang === "ar" ? "rtl" : "ltr") + '">' + esc(x.t) + "</p>";
  };
  const gLink = (x) => SN.tr && x.lang !== "ar" && !SN_TR[x.t] ? ' · <a class="small" href="https://translate.google.com/?sl=auto&tl=ar&op=translate&text=' + encodeURIComponent(x.t) + '" target="_blank" rel="noopener noreferrer">' + esc(t("sn_tr_g")) + " ↗</a>" : "";
  const trNote = SN.tr && (SN.trBusy || SN.trErr) ? '<p class="small ' + (SN.trErr ? "sn-err" : "muted") + '" style="margin:6px 0 0">' + esc(SN.trBusy ? t("sn_tr_wait") : SN.trErr) + "</p>" : "";
  const list = !loaded ? '<p class="muted">' + esc(t("sn_loading")) + "</p>" : items.length ? trNote + '<ul class="sn-list">' + items.map((x) => '<li><div class="nw-meta">' + (x.imp >= 3 ? '<span class="tag nw-hot">' + esc(t("nw_hot")) + "</span>" : "") + '<span class="small muted">' + esc(x.src || "") + " · " + esc(nwAgo(x.at)) + '</span></div>' + head(x) + '<a class="small" href="' + esc(nwLink(x.url)) + '" target="_blank" rel="noopener noreferrer">' + esc(t("nw_more")) + " ↗</a>" + gLink(x) + "</li>").join("") + "</ul>" : '<p class="muted">' + esc(t("sn_none")) + "</p>";
  const trBtn = loaded && foreign ? '<button type="button" class="btn sm sn-trb' + (SN.tr ? " on" : "") + '" data-act="sn-tr" aria-pressed="' + SN.tr + '" title="' + esc(t(SN.tr ? "sn_tr_off" : "sn_tr")) + '" aria-label="' + esc(t(SN.tr ? "sn_tr_off" : "sn_tr")) + '">' + SN_TR_IC + "</button>" : "";
  el.innerHTML = '<div class="tk-back" data-act="sn-close"></div><div class="tk-card"><div class="row" style="justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:nowrap"><div style="flex:1;min-width:0"><div class="row" style="gap:8px;flex-wrap:nowrap;align-items:center"><h2 style="margin:0">' + esc(t(s[0] === "^" ? "sn_mkt" : "sn_h").replace("{s}", s.replace(/^\^/, "") + " " + nm)) + "</h2>" + trBtn + '</div><p class="small muted" style="margin:2px 0 0">' + esc(t("sn_note")) + (typeof NW !== "undefined" && NW.data && NW.data.fetched_at ? " · " + esc(whenText(NW.data.fetched_at)) : "") + '</p></div><button class="btn sm" data-act="sn-close" aria-label="' + esc(t("tk_close")) + '">✕</button></div>' + list +
    '<div class="row" style="gap:8px;flex-wrap:wrap;margin-top:10px"><b class="small">' + esc(t("sn_more")) + ":</b>" + snLinks(s).map(([n, u]) => '<a class="btn sm" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(n) + " ↗</a>").join("") +
    (typeof asOpen === "function" ? '<button class="btn sm primary" data-act="sn-ask">✦ ' + esc(t("sn_ask")) + "</button>" : "") + '</div><p class="small muted" style="margin:8px 0 0">' + esc(t("nw_note")) + "</p></div>";
}
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act="sn-open"],[data-act="sn-close"],[data-act="sn-ask"],[data-act="sn-tr"]'); if (!el) return;
  e.preventDefault(); e.stopPropagation();
  if (el.dataset.act === "sn-tr") { SN.tr = !SN.tr; SN.trErr = ""; try { localStorage.setItem("meras.sntr.on", SN.tr ? "1" : ""); } catch (x) {} snRender(); if (SN.tr) snTranslate(snItems(SN.s)); return; }
  if (el.dataset.act === "sn-open") { SN.s = el.dataset.s; try { SN.tr = localStorage.getItem("meras.sntr.on") === "1"; } catch (x) {} SN.trErr = ""; snRender(); if (SN.tr && NW.loaded) snTranslate(snItems(SN.s)); }
  else if (el.dataset.act === "sn-close") { SN.s = null; snRender(); }
  else { const s = SN.s, nm = typeof symName === "function" ? symName(s) : s; SN.s = null; snRender(); if (typeof AS !== "undefined") AS.focus = s; asOpen(L(["وش آخر أخبار " + s + " " + nm + " وكيف ممكن تأثر عليه؟", "What is the latest news on " + s + " " + nm + " and how might it affect it?"])); }
}, true);
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && SN.s) { SN.s = null; snRender(); } });
/* بعد ما توصل الأخبار، حدّث النافذة لو مفتوحة */
setInterval(() => { if (SN.s && SN.wait && typeof NW !== "undefined" && NW.loaded) { snRender(); if (SN.tr) snTranslate(snItems(SN.s)); } }, 700);
