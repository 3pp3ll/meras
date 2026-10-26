/* ===== مِراس: أخبار السهم (أيقونة 📰 جنب كل سهم) =====
   تفتح نافذة فيها آخر أخبار الرمز من news.json (يتحدث 4 مرات يومياً ويغطي كل أسهم الشارت)،
   وروابط للبحث عن أخبار أكثر: Google News، وأرقام للسوق السعودي، وYahoo Finance للعالمي. */
Object.assign(UI, {
  sn_btn: ["أخبار السهم", "Stock news"], sn_h: ["أخبار {s}", "{s} news"], sn_none: ["ما لقيت أخبار لهذا الرمز في آخر 48 ساعة.", "No news for this symbol in the last 48 hours."],
  sn_more: ["أخبار أكثر", "More news"], sn_mkt: ["أخبار السوق", "Market news"], sn_ask: ["اسأل المساعد عن أخباره", "Ask the assistant about its news"],
  sn_loading: ["جاري تحميل الأخبار…", "Loading news…"], sn_note: ["الأخبار تتحدث 4 مرات في اليوم.", "News refreshes 4 times a day."]
});
const SN = { s: null };
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
  const list = !loaded ? '<p class="muted">' + esc(t("sn_loading")) + "</p>" : items.length ? '<ul class="sn-list">' + items.map((x) => '<li><div class="nw-meta">' + (x.imp >= 3 ? '<span class="tag nw-hot">' + esc(t("nw_hot")) + "</span>" : "") + '<span class="small muted">' + esc(x.src || "") + " · " + esc(nwAgo(x.at)) + '</span></div><p class="sn-t" dir="' + (x.lang === "ar" ? "rtl" : "ltr") + '">' + esc(x.t) + '</p><a class="small" href="' + esc(nwLink(x.url)) + '" target="_blank" rel="noopener noreferrer">' + esc(t("nw_more")) + " ↗</a></li>").join("") + "</ul>" : '<p class="muted">' + esc(t("sn_none")) + "</p>";
  el.innerHTML = '<div class="tk-back" data-act="sn-close"></div><div class="tk-card"><div class="row" style="justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:nowrap"><div style="flex:1;min-width:0"><h2 style="margin:0">' + esc(t(s[0] === "^" ? "sn_mkt" : "sn_h").replace("{s}", s.replace(/^\^/, "") + " " + nm)) + '</h2><p class="small muted" style="margin:2px 0 0">' + esc(t("sn_note")) + (typeof NW !== "undefined" && NW.data && NW.data.fetched_at ? " · " + esc(whenText(NW.data.fetched_at)) : "") + '</p></div><button class="btn sm" data-act="sn-close" aria-label="' + esc(t("tk_close")) + '">✕</button></div>' + list +
    '<div class="row" style="gap:8px;flex-wrap:wrap;margin-top:10px"><b class="small">' + esc(t("sn_more")) + ":</b>" + snLinks(s).map(([n, u]) => '<a class="btn sm" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(n) + " ↗</a>").join("") +
    (typeof asOpen === "function" ? '<button class="btn sm primary" data-act="sn-ask">✦ ' + esc(t("sn_ask")) + "</button>" : "") + '</div><p class="small muted" style="margin:8px 0 0">' + esc(t("nw_note")) + "</p></div>";
}
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act="sn-open"],[data-act="sn-close"],[data-act="sn-ask"]'); if (!el) return;
  e.preventDefault(); e.stopPropagation();
  if (el.dataset.act === "sn-open") { SN.s = el.dataset.s; snRender(); }
  else if (el.dataset.act === "sn-close") { SN.s = null; snRender(); }
  else { const s = SN.s, nm = typeof symName === "function" ? symName(s) : s; SN.s = null; snRender(); if (typeof AS !== "undefined") AS.focus = s; asOpen(L(["وش آخر أخبار " + s + " " + nm + " وكيف ممكن تأثر عليه؟", "What is the latest news on " + s + " " + nm + " and how might it affect it?"])); }
}, true);
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && SN.s) { SN.s = null; snRender(); } });
/* بعد ما توصل الأخبار، حدّث النافذة لو مفتوحة */
setInterval(() => { if (SN.s && SN.wait && typeof NW !== "undefined" && NW.loaded) snRender(); }, 700);
