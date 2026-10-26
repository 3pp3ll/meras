/* ===== مِراس: الأخبار اليومية (للمالك) =====
   news.json يكتبه GitHub Actions 4 مرات يومياً من Google News: أخبار أسهمك المتابعة أولاً، بعدها السوق والاقتصاد.
   news_brief.json يكتبه كلاود كل صباح: أهم الأخبار مختصرة بالعربي.
   كل خبر معه زر "المزيد" يفتح الموقع الأصلي. */
Object.assign(UI, {
  nw_t: ["الأخبار", "News"], dk_g_nw: ["أهم أخبار اليوم", "Today's top news"],
  nw_h: ["أخبار اليوم", "Today's news"], nw_p: ["أخبار أسهمك المتابعة أولاً، بعدها السوق السعودي والأمريكي والاقتصاد. آخر 48 ساعة، تتحدث 4 مرات في اليوم.", "Your followed stocks first, then the Saudi and US markets and the economy. Last 48 hours, refreshed 4 times a day."],
  nw_loading: ["جاري تحميل الأخبار…", "Loading news…"], nw_none: ["ما فيه أخبار للحين. أول تحديث ينزل خلال ساعات.", "No news yet. The first update lands within hours."],
  nw_more: ["المزيد", "More"], nw_f_all: ["الكل", "All"], nw_f_mine: ["أسهمي", "My stocks"], nw_f_sa: ["السعودي", "Saudi"], nw_f_us: ["الأمريكي", "US"], nw_f_macro: ["الاقتصاد", "Economy"],
  nw_brief: ["ملخص كلاود اليوم", "Claude's daily brief"], nw_upd: ["آخر تحديث {d}", "Updated {d}"], nw_hot: ["مهم", "Key"],
  nw_ago_m: ["قبل {n} د", "{n}m ago"], nw_ago_h: ["قبل {n} س", "{n}h ago"], nw_ago_d: ["قبل {n} يوم", "{n}d ago"],
  nw_reload: ["تحديث", "Refresh"], nw_note: ["الأخبار للاطلاع فقط ومو توصية شراء أو بيع. تأكد من المصدر قبل أي قرار.", "News for information only, not a buy or sell recommendation. Check the source before any decision."]
});

const NW = { data: null, brief: null, loaded: false, loading: false, f: "all" };
async function loadNews(force) {
  if (!HOSTED || !CFG.token || NW.loading || (NW.loaded && !force)) return; NW.loading = true;
  try {
    const [a, b] = await Promise.all([readJson("news.json"), readJson("news_brief.json").catch(() => null)]);
    NW.data = (a && a.data) || { items: [] }; NW.brief = (b && b.data) || null;
  } catch (e) { NW.data = NW.data || { items: [] }; toast(errText(e)); }
  NW.loaded = true; NW.loading = false;
  if (deskOn("nw")) render();
}
function nwAgo(iso) {
  const m = Math.max(1, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (m < 60) return t("nw_ago_m").replace("{n}", m);
  const h = Math.round(m / 60); if (h < 24) return t("nw_ago_h").replace("{n}", h);
  return t("nw_ago_d").replace("{n}", Math.round(h / 24));
}
function nwLink(url) { return /^https:\/\//.test(url || "") ? url : "#"; }
function nwMore(url) { return '<a class="btn sm nw-more" href="' + esc(nwLink(url)) + '" target="_blank" rel="noopener noreferrer">' + esc(t("nw_more")) + " ↗</a>"; }
function nwItem(x) {
  const tag = x.sym ? '<span class="tag nw-sym" dir="ltr">' + esc(x.sym) + "</span>" + (x.nm && x.nm !== x.sym ? '<span class="small muted">' + esc(x.nm) + "</span>" : "") : x.topic ? '<span class="tag">' + esc(x.topic) + "</span>" : "";
  const hot = x.imp >= 3 ? '<span class="tag nw-hot">' + esc(t("nw_hot")) + "</span>" : "";
  return '<article class="nw-card"><div class="nw-meta">' + hot + tag + '<span class="small muted">' + esc(x.src || "") + " · " + esc(nwAgo(x.at)) + '</span></div><h3 class="nw-title" dir="' + (x.lang === "ar" ? "rtl" : "ltr") + '">' + esc(x.t) + "</h3>" + nwMore(x.url) + "</article>";
}
function nwBrief() {
  const b = NW.brief; if (!b || !Array.isArray(b.items) || !b.items.length) return "";
  return '<section class="panel stack nw-brief"><div class="row" style="justify-content:space-between"><h3>✦ ' + esc(t("nw_brief")) + '</h3><span class="small muted">' + esc(t("nw_upd").replace("{d}", whenText(b.at))) + "</span></div>" +
    (b.intro ? '<p style="margin:0">' + esc(b.intro) + "</p>" : "") +
    '<ol class="nw-bl">' + b.items.map((x) => "<li><b>" + esc(x.h || "") + "</b>" + (x.sym ? ' <span class="tag nw-sym" dir="ltr">' + esc(x.sym) + "</span>" : "") + (x.s ? '<p class="small" style="margin:4px 0 6px">' + esc(x.s) + "</p>" : "") + (x.url ? nwMore(x.url) : "") + "</li>").join("") + "</ol></section>";
}
function dkNews() {
  if (!NW.loaded) { loadNews(); return '<div class="notice">' + esc(t("nw_loading")) + "</div>"; }
  const all = (NW.data && NW.data.items) || [];
  const pick = { all: () => true, mine: (x) => !!x.sym, sa: (x) => x.mk === "sa", us: (x) => x.mk === "us", macro: (x) => x.mk === "macro" }[NW.f] || (() => true);
  const list = all.filter(pick);
  const mine = list.filter((x) => x.sym), rest = list.filter((x) => !x.sym);
  const ordered = NW.f === "all" ? mine.filter((x) => x.imp >= 2).concat(rest.filter((x) => x.imp >= 2), mine.filter((x) => x.imp < 2), rest.filter((x) => x.imp < 2)) : list;
  const fl = ["all", "mine", "sa", "us", "macro"].map((k) => '<button type="button" class="btn sm' + (NW.f === k ? " primary" : "") + '" data-act="nw-f" data-f="' + k + '" aria-pressed="' + (NW.f === k) + '">' + esc(t("nw_f_" + k)) + ' <span class="num">' + all.filter({ all: () => true, mine: (x) => !!x.sym, sa: (x) => x.mk === "sa", us: (x) => x.mk === "us", macro: (x) => x.mk === "macro" }[k]).length + "</span></button>").join("");
  return '<div class="stack"><div class="dg-intro"><h2 style="margin:0">' + esc(t("nw_h")) + '</h2><p class="muted" style="margin:4px 0 0">' + esc(t("nw_p")) + "</p></div>" + nwBrief() +
    '<div class="row nw-filters" style="gap:6px;flex-wrap:wrap;align-items:center">' + fl + '<span style="flex:1"></span><span class="small muted">' + esc(t("nw_upd").replace("{d}", whenText(NW.data && NW.data.fetched_at))) + '</span><button type="button" class="btn sm ghost" data-act="nw-reload">' + esc(t("nw_reload")) + "</button></div>" +
    (ordered.length ? '<div class="nw-list">' + ordered.map(nwItem).join("") + "</div>" : '<div class="notice">' + esc(t("nw_none")) + "</div>") +
    '<p class="small muted" style="margin:0">' + esc(t("nw_note")) + "</p></div>";
}
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act="nw-f"],[data-act="nw-reload"]'); if (!el) return;
  e.preventDefault();
  if (el.dataset.act === "nw-f") { NW.f = el.dataset.f; render(); }
  else { NW.loaded = false; render(); loadNews(true); }
});
