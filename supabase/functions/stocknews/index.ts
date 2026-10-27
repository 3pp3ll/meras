// مِراس — أخبار سهم من الإنترنت لحظياً (بدون اشتراك)
// يبحث في Google News (يغطي أرقام ومال والاقتصادية وإعلانات تداول المنشورة في الأخبار) ويرجع آخر العناوين.
// هذي الدالة تشتغل بدون تسجيل دخول: أطفئ "Enforce JWT verification" من إعداداتها.
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "GET, POST, OPTIONS" };
const json = (b, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json", "Cache-Control": "public, max-age=600" } });
const CACHE = new Map();
const dec = (s) => s.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<[^>]+>/g, "").trim();

async function rss(q, ar) {
  const url = "https://news.google.com/rss/search?q=" + encodeURIComponent(q) + (ar ? "&hl=ar&gl=SA&ceid=SA:ar" : "&hl=en-US&gl=US&ceid=US:en");
  const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (meras-news/1)" } });
  if (!r.ok) return [];
  const xml = await r.text();
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 25).map((m) => {
    const g = (tag) => { const x = m[1].match(new RegExp("<" + tag + "[^>]*>([\\s\\S]*?)</" + tag + ">")); return x ? dec(x[1]) : ""; };
    let t = g("title"); const src = g("source"); if (src && t.endsWith(" - " + src)) t = t.slice(0, -(src.length + 3));
    return { t, src, url: g("link"), at: new Date(g("pubDate") || Date.now()).toISOString(), lang: ar ? "ar" : "en" };
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  let p = {};
  try { p = req.method === "POST" ? await req.json() : Object.fromEntries(new URL(req.url).searchParams); } catch (_) {}
  const sym = String(p.sym || "").trim().slice(0, 12), name = String(p.name || "").trim().slice(0, 60), days = Math.min(Math.max(Number(p.days) || 14, 1), 60);
  if (!sym && !name) return json({ error: "sym or name required" }, 400);
  const key = sym + "|" + name + "|" + days, hit = CACHE.get(key);
  if (hit && Date.now() - hit.t < 10 * 60 * 1000) return json(hit.v);
  const sa = /^\d{4}$/.test(sym);
  const qs = sa
    ? [[`"${name || sym}" سهم when:${days}d`, true], [`${name || sym} site:argaam.com when:${days}d`, true], [`${sym} تداول السعودية when:${days}d`, true]]
    : [[`${name ? '"' + name + '"' : sym} stock when:${days}d`, false], [`${sym} when:${days}d`, false]];
  const lists = await Promise.all(qs.map(([q, ar]) => rss(q, ar).catch(() => [])));
  const seen = new Set(), items = [];
  for (const it of lists.flat()) { const k = it.t.replace(/\s+/g, " ").slice(0, 70); if (!it.t || seen.has(k)) continue; seen.add(k); items.push(it); }
  items.sort((a, b) => (b.at > a.at ? 1 : -1));
  const v = { sym, name, fetched_at: new Date().toISOString(), source: "Google News", items: items.slice(0, 15) };
  CACHE.set(key, { t: Date.now(), v });
  return json(v);
});
