/* مِراس: يخلي المنصة تفتح بدون نت. غيّر رقم النسخة عند كل تحديث كبير. */
const CACHE = "meras-v10";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.hostname === "api.github.com" || url.hostname === "openrouter.ai") return;   // المزامنة والأسعار دائماً من الشبكة
  if (url.origin === location.origin) {
    // ملفات المنصة: الشبكة أولاً عشان التحديثات توصل، والمخزن عند انقطاع النت
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; }).catch(() => caches.match(req).then((r) => r || caches.match("./index.html"))));
  } else {
    // الخطوط والمكتبات: المخزن أولاً
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; })));
  }
});
