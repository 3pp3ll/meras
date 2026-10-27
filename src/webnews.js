/* ===== مِراس: أخبار السهم من الإنترنت =====
   لما ما نلقى أخبار للسهم في news.json، نسأل دالة stocknews في Supabase (تبحث في Google News: أرقام، مال، الاقتصادية، وإعلانات تداول المنشورة).
   تستخدمها نافذة أخبار السهم والمساعد الذكي. */
Object.assign(UI, { wn_h: ["من الإنترنت الآن", "From the web now"], wn_wait: ["أدوّر على أخبار السهم في الإنترنت…", "Searching the web for news…"], wn_none: ["ما لقيت أخبار له في آخر أسبوعين.", "No news in the last two weeks."], wn_src: ["المصدر: Google News (أرقام، مال، الاقتصادية…)", "Source: Google News"] });
const WN = {};
function wnName(sym) { return (typeof saName === "function" && saName(sym)) || (typeof EXTRA !== "undefined" && EXTRA && EXTRA.symbols && EXTRA.symbols[sym] && EXTRA.symbols[sym].n) || (typeof symName === "function" ? symName(sym) : "") || ""; }
async function webNews(sym, ms) {
  if (!sym || sym[0] === "^" || typeof MA_SB === "undefined") return null;
  const c = WN[sym]; if (c && c.v && Date.now() - c.at < 15 * 60 * 1000) return c.v; if (c && c.p) return c.p;
  const ctl = typeof AbortController !== "undefined" ? new AbortController() : null; const timer = ctl ? setTimeout(() => ctl.abort(), ms || 9000) : null;
  const p = fetch(MA_SB.url + "/functions/v1/stocknews", { method: "POST", headers: { apikey: MA_SB.key, "Content-Type": "application/json" }, body: JSON.stringify({ sym, name: wnName(sym), days: 14 }), signal: ctl ? ctl.signal : undefined })
    .then((r) => (r.ok ? r.json() : null)).catch(() => null)
    .then((v) => { if (timer) clearTimeout(timer); WN[sym] = { at: Date.now(), v }; return v; });
  WN[sym] = { p }; return p;
}
/* يكتشف السهم في سؤال المساعد: رمز تداول، أو اسم سهم سعودي، أو رمز عالمي معروف */
function wnDetect(q) {
  const m = q.match(/(?:^|\D)(\d{4})(?:\D|$)/); if (m && typeof SA_MAP !== "undefined" && SA_MAP[m[1]]) return m[1];
  if (typeof SA_MAP !== "undefined") { let best = null; Object.entries(SA_MAP).forEach(([c, x]) => { if (x.n && x.n.length > 2 && q.includes(x.n) && (!best || x.n.length > SA_MAP[best].n.length)) best = c; }); if (best) return best; }
  const u = q.match(/\b([A-Z]{1,5})\b/); if (u && typeof EXTRA !== "undefined" && EXTRA && EXTRA.symbols && EXTRA.symbols[u[1]]) return u[1];
  return null;
}
async function asCtxWeb(q) {
  const ctx = typeof asContext === "function" ? asContext() : {};
  const sym = wnDetect(q) || (typeof AS !== "undefined" && AS.focus) || null;
  if (sym) {
    const own = typeof snItems === "function" && typeof NW !== "undefined" && NW.data ? snItems(sym) : [];
    const want = own.length < 3 || /ابحث|دوّر|دور|خارج|تداول|أرقام|ارقام|اخبار|أخبار|news|search/i.test(q);
    if (want) { const w = await webNews(sym, 8000); ctx.web_news = { symbol: sym, name: wnName(sym), fetched_now_from: "Google News (Argaam, Maaal, Aleqtisadiah, Tadawul announcements as reported)", items: w && w.items ? w.items.slice(0, 12).map((x) => ({ t: x.t, src: x.src, at: x.at })) : [] }; }
  }
  return ctx;
}
/* نافذة أخبار السهم: نضيف أخبار الإنترنت تحت أخبار المنصة */
function wnBlock(sym) {
  const c = WN[sym];
  if (!c || c.p && !c.v) return '<h3 class="wn-h">' + esc(t("wn_h")) + '</h3><p class="small muted">' + esc(t("wn_wait")) + "</p>";
  const items = (c.v && c.v.items) || [];
  return '<h3 class="wn-h">' + esc(t("wn_h")) + "</h3>" + (items.length ? '<ul class="sn-list">' + items.map((x) => '<li><div class="nw-meta"><span class="small muted">' + esc(x.src || "") + " · " + esc(typeof nwAgo === "function" ? nwAgo(x.at) : x.at) + '</span></div><p class="sn-t" dir="' + (x.lang === "ar" ? "rtl" : "ltr") + '">' + esc((typeof SN !== "undefined" && SN.tr && SN_TR && SN_TR[x.t]) || x.t) + '</p><a class="small" href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer">' + esc(t("nw_more")) + " ↗</a></li>").join("") + "</ul>" : '<p class="small muted">' + esc(t("wn_none")) + "</p>") + '<p class="small muted" style="margin:4px 0 0">' + esc(t("wn_src")) + "</p>";
}
