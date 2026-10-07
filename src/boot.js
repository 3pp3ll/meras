/* ===== التشغيل ===== */
lastRoute = route();
render();
if (HOSTED && CFG.token) { syncNow(true).then(() => loadPrices(true)).then(() => loadWatch()); }
