/* ===== مِراس: التوزيعات =====
   كل أسهم السوق اللي توزع، مرتبة حسب أقرب تاريخ استحقاق. البيانات من dividends.json في مستودعك الخاص،
   يحدثها سكربت يومي (scripts/fetch_dividends.py). بدون ربط تظهر قائمة نموذجية صغيرة.
   زر النجمة يحفظ السهم في divwatch.json، والسكربت ينبهك عنه قبل 30 يوم وقبل 5 أيام. */
Object.assign(UI, {
  tab_div: ["التوزيعات", "Dividends"],
  dv_p: ["كل أسهم السوق اللي توزع أرباح، مرتبة حسب أقرب تاريخ استحقاق. سهم واحد يكفي عشان تستحق التوزيع، والجدول يحسب لك كم يجيك بالمبلغ اللي تحدده.", "Every dividend-paying share on the market, sorted by the nearest ex-date. One share is enough to qualify, and the table works out what your chosen amount would earn."],
  dv_budget: ["المبلغ لكل سهم (ريال)", "Amount per share (SAR)"], dv_fee: ["العمولة لكل عملية %", "Commission per side %"],
  dv_search: ["ابحث بالرمز أو الاسم", "Search by symbol or name"],
  dv_nomu: ["أظهر أسهم نمو (للمستثمرين المؤهلين فقط)", "Show Nomu shares (qualified investors only)"], dv_nomu_tag: ["نمو", "Nomu"],
  dv_f_all: ["الكل", "All"], dv_f_30: ["خلال 30 يوم", "Within 30 days"], dv_f_star: ["نجومي", "Starred"],
  dv_sym: ["السهم", "Share"], dv_price: ["السعر", "Price"], dv_next: ["التوزيع القادم للسهم", "Next dividend / share"], dv_ex: ["تاريخ الاستحقاق", "Ex-date"],
  dv_left: ["باقي", "In"], dv_days: ["يوم", "days"], dv_buyby: ["آخر يوم شراء", "Buy by"], dv_yld: ["العائد السنوي", "Yearly yield"],
  dv_min: ["أقل مبلغ (سهم واحد)", "Minimum (one share)"], dv_sh: ["أسهم بمبلغك", "Shares for your amount"], dv_get: ["يجيك في الدفعة القادمة", "Your next payout"],
  dv_ann: ["معلن", "announced"], dv_exp: ["متوقع", "expected"], dv_none: ["ما فيه تاريخ", "no date"],
  dv_star: ["نبّهني عن هذا السهم", "Alert me about this share"], dv_starred: ["انضاف للتنبيهات. السكربت ينبهك قبل 30 يوم وقبل 5 أيام", "Added. The script alerts you 30 and 5 days before"], dv_unstarred: ["انشال من التنبيهات", "Removed from alerts"],
  dv_count: ["{n} سهم يوزع · آخر تحديث {d}", "{n} paying shares · updated {d}"],
  dv_sample: ["هذي قائمة نموذجية صغيرة. القائمة الكاملة تظهر في النسخة المنشورة بعد ربط مستودعك وأول تشغيل لسكربت التوزيعات.", "This is a small sample list. The full list appears in the published version once your repository is linked and the dividends script has run once."],
  dv_alert_h: ["التنبيهات", "Alerts"],
  dv_alert: ["اضغط النجمة جنب أي سهم. كل يوم 4:30 م يفحص السكربت التواريخ، ويفتح لك تنبيه في مستودع meras-data قبل الاستحقاق بـ 30 يوم (تجهّز المبلغ) وقبله بـ 5 أيام (وقت الشراء). عشان يوصلك على الجوال ثبّت تطبيق GitHub وفعّل إشعاراته.", "Tap the star next to any share. Every day at 4:30 pm the script checks the dates and opens an alert in the meras-data repository 30 days before the ex-date (get the money ready) and 5 days before (time to buy). To get it on your phone, install the GitHub app and turn on its notifications."],
  dv_rule_h: ["متى تستحق التوزيع؟", "When are you entitled?"],
  dv_rule: ["تاريخ الاستحقاق (Ex) هو أول يوم تداول ما يعطيك التوزيع. لازم تشتري قبله بيوم تداول على الأقل، يعني في \"آخر يوم شراء\" بالجدول أو قبله. التاريخ المعلن من الشركة هو المرجع، والمتوقع محسوب من توزيعات السنة الماضية وممكن يتغير.", "The ex-date is the first trading day that no longer carries the dividend. You must buy at least one trading day before it, on the \"buy by\" date in the table or earlier. The company's announced date is the reference; an expected date is estimated from last year's payouts and can change."],
  dv_sell_h: ["تشتري قبل وتبيع بعد؟", "Buy before, sell after?"],
  dv_sell: ["في يوم الاستحقاق ينزل السعر غالباً بقريب من مبلغ التوزيع، لأن الفلوس طلعت من الشركة. فلو اشتريت قبلها بيوم وبعت بعدها مباشرة، غالباً ترجع قريب من رأس مالك، والعمولة تاكل جزء من التوزيع. الفكرة تنجح أكثر مع أسهم تحتفظ فيها فترة أطول.", "On the ex-date the price usually drops by roughly the dividend, because the cash has left the company. Buy the day before and sell right after, and you usually end up near where you started, with commission eating part of the payout. The idea works better with shares you hold for longer."],
  dv_fee_note: ["مع مبلغ صغير انتبه للعمولة: بعض الوسطاء عندهم حد أدنى للعمولة لكل أمر، وممكن ياكل جزء كبير من توزيع صغير. اسأل وسيطك عن الحد الأدنى.", "With a small amount, watch the commission: some brokers charge a minimum per order, which can eat much of a small dividend. Ask your broker about their minimum."],
  dv_src: ["المصادر: شاشة أسهم TradingView وتاريخ التوزيعات من Yahoo Finance، تتحدث يومياً. التوزيعات تتغير وممكن تخفضها الشركة أو توقفها، فتأكد من آخر إعلان في موقع تداول السعودية قبل أي قرار.", "Sources: the TradingView stock screener and dividend history from Yahoo Finance, updated daily. Dividends change and can be cut or stopped, so check the latest announcement on the Saudi Exchange site before any decision."],
  dv_lesson: ["اقرأ درس التوزيعات النقدية", "Read the cash dividends lesson"]
});

/* قائمة نموذجية لما ما فيه بيانات (معاينة Claude أو قبل أول تشغيل). الأرقام تقريبية، أكتوبر 2026. */
const DIV_SAMPLE = [
  { s: "4330", name: "الرياض ريت", price: 4.46, yld: 7.2, dps12: 0.32, freq: "h", last_ex: "2026-09-03", last_amt: 0.16, next_ex: "2027-03-03", next_amt: 0.16, announced: false },
  { s: "4001", name: "أسواق العثيم", price: 4.99, yld: 4.8, dps12: 0.24, freq: "q", last_ex: "2026-05-31", last_amt: 0.06, next_ex: null, next_amt: 0.06, announced: false },
  { s: "4340", name: "الراجحي ريت", price: 7.79, yld: 6.9, dps12: 0.54, freq: "q", last_ex: "2026-08-31", last_amt: 0.135, next_ex: "2026-11-30", next_amt: 0.135, announced: false },
  { s: "1010", name: "بنك الرياض", price: 19.28, yld: 5.4, dps12: 1.04, freq: "h", last_ex: "2026-07-28", last_amt: 0.64, next_ex: "2027-01-27", next_amt: 0.64, announced: false },
  { s: "2222", name: "أرامكو السعودية", price: 26.48, yld: 5.1, dps12: 1.36, freq: "q", last_ex: "2026-08-20", last_amt: 0.3393, next_ex: "2026-11-19", next_amt: 0.3393, announced: false },
  { s: "1180", name: "البنك الأهلي السعودي", price: 37.04, yld: 6.2, dps12: 2.3, freq: "h", last_ex: "2026-07-28", last_amt: 1.15, next_ex: "2027-01-27", next_amt: 1.15, announced: false },
  { s: "7010", name: "اس تي سي", price: 43.22, yld: 5.1, dps12: 2.2, freq: "q", last_ex: "2026-08-04", last_amt: 0.55, next_ex: "2026-11-03", next_amt: 0.55, announced: false },
  { s: "1120", name: "مصرف الراجحي", price: 61.85, yld: 4.9, dps12: 3.03, freq: "h", last_ex: "2026-09-22", last_amt: 1.26, next_ex: "2027-03-23", next_amt: 1.26, announced: false }
];
const DIV_KEY = "meras.div";
let DIV = null, DIVW = null, divLoading = false;
try { DIV = JSON.parse(localStorage.getItem(DIV_KEY) || "null"); } catch (e) {}
const divCfg = () => { if (!S.div) S.div = {}; const d = { budget: 500, fee: 0.15, f: "all", q: "", nomu: false }; for (const k in d) if (S.div[k] == null) S.div[k] = d[k]; return S.div; };
const divList = () => (DIV && Array.isArray(DIV.stocks) && DIV.stocks.length ? DIV.stocks : DIV_SAMPLE);
const divPx = (x) => { const q = LIVE.quotes && LIVE.quotes[x.s]; return q && numOr(q.price) != null ? q.price : x.price; };
const dayDiff = (iso) => { if (!iso) return null; const a = new Date(iso + "T00:00:00"), b = new Date(today() + "T00:00:00"); return Math.round((a - b) / 864e5); };
function buyBy(iso) { const d = new Date(iso + "T00:00:00"); do { d.setDate(d.getDate() - 1); } while (d.getDay() === 5 || d.getDay() === 6); const z = (n) => String(n).padStart(2, "0"); return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate()); }

async function loadDividends() {
  if (divLoading || !(typeof HOSTED !== "undefined" && HOSTED && CFG.token)) return;
  divLoading = true;
  try {
    const f = await readJson("dividends.json");
    if (f && f.data && Array.isArray(f.data.stocks)) { DIV = f.data; try { localStorage.setItem(DIV_KEY, JSON.stringify(DIV)); } catch (e) {} }
    const w = await readJson("divwatch.json");
    DIVW = w && Array.isArray(w.data) ? w.data.map(String) : [];
  } catch (e) {}
  divLoading = false;
  if (route() === "dividends" && !(document.activeElement && /INPUT|SELECT/.test(document.activeElement.tagName))) render();
}
async function toggleStar(sym) {
  if (!(typeof HOSTED !== "undefined" && HOSTED && CFG.token)) { toast(t("wl_need")); return; }
  try {
    const f = await readJson("divwatch.json"), cur = f && Array.isArray(f.data) ? f.data.map(String) : [];
    const on = !cur.includes(sym), next = on ? cur.concat([sym]) : cur.filter((x) => x !== sym);
    await gh("divwatch.json", "PUT", { message: "divwatch", content: b64e(JSON.stringify(next) + "\n"), sha: f ? f.sha : undefined });
    DIVW = next; toast(t(on ? "dv_starred" : "dv_unstarred"));
  } catch (e) { toast(errText(e)); }
  render();
}

function pageDividends() {
  const c = divCfg(), list = divList(), real = list !== DIV_SAMPLE, canStar = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  if (canStar && DIVW == null) setTimeout(loadDividends, 0);
  const inp = (id, k, val, step) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" class="num" type="number" min="0" step="' + (step || "any") + '" value="' + val + '" data-div="' + id + '"></div>';
  const fb = (v, k) => '<button type="button" class="btn sm tgl' + (c.f === v ? " on" : "") + '" data-act="dv-f" data-f="' + v + '" aria-pressed="' + (c.f === v) + '">' + esc(t(k)) + "</button>";
  const head = ["", "dv_sym", "dv_price", "dv_next", "dv_ex", "dv_left", "dv_buyby", "dv_yld", "dv_min", "dv_sh", "dv_get"].map((k) => "<th>" + (k ? esc(t(k)) : "") + "</th>").join("");
  const rows = list.map((x, i) => {
    const on = DIVW && DIVW.includes(x.s);
    const ex = x.next_ex ? '<span class="num">' + esc(x.next_ex) + '</span> <span class="tag' + (x.announced ? " up" : "") + '">' + esc(t(x.announced ? "dv_ann" : "dv_exp")) + "</span>" : '<span class="muted">' + esc(t("dv_none")) + "</span>";
    return '<tr id="dv-r' + i + '" data-s="' + esc(x.s) + '" data-n="' + esc(String(x.name || "").toLowerCase()) + '"><td><button type="button" class="dv-star" data-act="dv-star" data-sym="' + esc(x.s) + '" aria-pressed="' + !!on + '" title="' + esc(t("dv_star")) + '" aria-label="' + esc(t("dv_star")) + " " + esc(x.s) + '">' + (on ? "★" : "☆") + '</button></td><td><span class="num">' + esc(x.s) + "</span> " + esc(x.name || "") + (/^9/.test(x.s) ? ' <span class="tag">' + esc(t("dv_nomu_tag")) + "</span>" : "") + '</td><td class="num" id="dv-p' + i + '"></td><td class="num">' + (x.next_amt ? fmt(x.next_amt, x.next_amt < 1 ? 3 : 2) : "–") + "</td><td>" + ex + '</td><td id="dv-d' + i + '"></td><td class="num">' + (x.next_ex ? esc(buyBy(x.next_ex)) : "–") + '</td><td class="num" id="dv-y' + i + '"></td><td class="num" id="dv-m' + i + '"></td><td class="num" id="dv-s' + i + '"></td><td class="num pos" id="dv-a' + i + '"></td></tr>';
  }).join("");
  const count = real ? '<span class="small muted">' + esc(t("dv_count").replace("{n}", list.length).replace("{d}", DIV.as_of || whenText(DIV.fetched_at))) + "</span>" : "";
  return svcShell("dividends",
    '<p class="muted" style="max-width:64ch">' + esc(t("dv_p")) + ' <a href="#l-inv-2-3">' + esc(t("dv_lesson")) + "</a></p>" +
    (real ? "" : '<div class="notice">' + esc(t("dv_sample")) + "</div>") +
    '<div class="panel stack"><div class="form-grid">' + inp("dv-budget", "dv_budget", c.budget, 50) + inp("dv-fee", "dv_fee", c.fee, 0.01) + '<div class="field"><label for="dv-q">' + esc(t("dv_search")) + '</label><input id="dv-q" value="' + esc(c.q) + '" data-div="dv-q" autocomplete="off"></div></div><div class="row">' + fb("all", "dv_f_all") + fb("30", "dv_f_30") + fb("star", "dv_f_star") + '<label class="row small" style="gap:6px"><input type="checkbox" id="dv-nomu" data-div="dv-nomu"' + (c.nomu ? " checked" : "") + ">" + esc(t("dv_nomu")) + "</label>" + count + "</div></div>" +
    '<div class="tablewrap dv-table"><table><thead><tr>' + head + "</tr></thead><tbody>" + rows + "</tbody></table></div>" +
    '<div class="grid2"><div class="panel stack"><h3>' + esc(t("dv_alert_h")) + "</h3><p>" + esc(t("dv_alert")) + "</p><h3>" + esc(t("dv_rule_h")) + "</h3><p>" + esc(t("dv_rule")) + '</p></div><div class="panel stack"><h3>' + esc(t("dv_sell_h")) + "</h3><p>" + esc(t("dv_sell")) + '</p><div class="notice">' + esc(t("dv_fee_note")) + "</div></div></div>" +
    '<p class="small muted">' + esc(t("dv_src")) + " " + esc(t("disclaimer")) + "</p>");
}
function runDiv() {
  if (!document.querySelector(".dv-table")) return;
  const c = divCfg(), fee = Math.max(0, c.fee) / 100, q = String(c.q || "").trim().toLowerCase(), set = (id, h) => { const el = document.getElementById(id); if (el) el.innerHTML = h; };
  divList().forEach((x, i) => {
    const row = document.getElementById("dv-r" + i); if (!row) return;
    const px = divPx(x), days = dayDiff(x.next_ex), sh = px > 0 ? Math.floor(c.budget / (px * (1 + fee))) : 0;
    const show = (!q || x.s.includes(q) || String(x.name || "").toLowerCase().includes(q)) && (c.f === "all" || (c.f === "30" && days != null && days >= 0 && days <= 30) || (c.f === "star" && DIVW && DIVW.includes(x.s)));
    row.hidden = !show || (!c.nomu && /^9/.test(x.s) && !q);
    row.className = days != null && days >= 0 && days <= 5 ? "dv-soon" : days != null && days >= 0 && days <= 30 ? "dv-month" : "";
    set("dv-p" + i, fmt(px));
    set("dv-d" + i, days == null ? "–" : days < 0 ? "–" : days + " " + esc(t("dv_days")));
    set("dv-y" + i, x.yld ? fmt(x.yld, 1) + "%" : px && x.dps12 ? fmt((x.dps12 / px) * 100, 1) + "%" : "–");
    set("dv-m" + i, px ? fmt(px * (1 + fee)) : "–");
    set("dv-s" + i, int(sh));
    set("dv-a" + i, x.next_amt ? fmt(sh * x.next_amt) : "–");
  });
}
document.addEventListener("input", (e) => {
  const id = e.target.dataset && e.target.dataset.div; if (!id) return;
  const c = divCfg();
  if (id === "dv-q") { c.q = e.target.value; save(); runDiv(); return; }
  if (id === "dv-nomu") { c.nomu = e.target.checked; save(); runDiv(); return; }
  const v = parseFloat(e.target.value), key = { "dv-budget": "budget", "dv-fee": "fee" }[id];
  if (key && isFinite(v) && v >= 0) { c[key] = v; save(); runDiv(); }
});
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act="dv-f"],[data-act="dv-star"]'); if (!el) return;
  if (el.dataset.act === "dv-f") { divCfg().f = el.dataset.f; save(); render(); }
  else toggleStar(el.dataset.sym);
});
window.addEventListener("hashchange", () => { if (route() === "dividends") loadDividends(); });
if (route() === "dividends") setTimeout(loadDividends, 0);
