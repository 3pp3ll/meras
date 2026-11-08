/* Sentinel انتقل إلى https://3pp3ll.github.io/sentinel-app/ — هذا العامل يمسح نسخته القديمة ويشيل نفسه. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith("sentinel-")).map((k) => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll()).then((cs) => cs.forEach((c) => c.navigate("https://3pp3ll.github.io/sentinel-app/"))));
});
