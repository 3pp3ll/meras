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
  dv_sym: ["السهم", "Share"], dv_price: ["السعر", "Price"], dv_next: ["التوزيع القادم للسهم", "Next dividend / share"], dv_ex: ["أول يوم بدون توزيع", "Ex-date"],
  dv_left: ["باقي", "In"], dv_days: ["يوم", "days"], dv_buyby: ["آخر يوم شراء (الأحقية)", "Buy by (record day)"], dv_yld: ["العائد السنوي", "Yearly yield"],
  dv_min: ["أقل مبلغ (سهم واحد)", "Minimum (one share)"], dv_sh: ["أسهم بمبلغك", "Shares for your amount"], dv_get: ["يجيك في الدفعة القادمة", "Your next payout"],
  dv_ann: ["معلن", "announced"], dv_exp: ["متوقع", "expected"], dv_none: ["ما فيه تاريخ", "no date"],
  dv_star: ["نبّهني عن هذا السهم", "Alert me about this share"], dv_starred: ["انضاف للتنبيهات. السكربت ينبهك قبل 30 يوم وقبل 5 أيام", "Added. The script alerts you 30 and 5 days before"], dv_unstarred: ["انشال من التنبيهات", "Removed from alerts"],
  dv_count: ["{n} سهم يوزع · آخر تحديث {d}", "{n} paying shares · updated {d}"],
  dv_sample: ["هذي قائمة نموذجية صغيرة. القائمة الكاملة تظهر في النسخة المنشورة بعد ربط مستودعك وأول تشغيل لسكربت التوزيعات.", "This is a small sample list. The full list appears in the published version once your repository is linked and the dividends script has run once."],
  dv_alert_h: ["التنبيهات", "Alerts"],
  dv_alert: ["اضغط النجمة جنب أي سهم. كل يوم 4:30 م يفحص السكربت التواريخ، ويفتح لك تنبيه في مستودع meras-data قبل الاستحقاق بـ 30 يوم (تجهّز المبلغ) وقبله بـ 5 أيام (وقت الشراء). عشان يوصلك على الجوال ثبّت تطبيق GitHub وفعّل إشعاراته.", "Tap the star next to any share. Every day at 4:30 pm the script checks the dates and opens an alert in the meras-data repository 30 days before the ex-date (get the money ready) and 5 days before (time to buy). To get it on your phone, install the GitHub app and turn on its notifications."],
  dv_rule_h: ["متى تستحق التوزيع؟", "When are you entitled?"],
  dv_rule: ["آخر يوم شراء هو يوم الأحقية نفسه: اللي يملك السهم بنهاية تداوله يستحق التوزيع. اليوم اللي بعده (Ex) هو أول يوم يتداول فيه السهم بدون التوزيع. التاريخ المعلن من الشركة هو المرجع، والمتوقع محسوب من توزيعات السنة الماضية وممكن يتغير.", "The last buy day is the record (eligibility) day itself: whoever holds the share at its close gets the dividend. The next day (ex-date) is the first that trades without it. The company's announcement is the reference; expected dates are estimated from last year and may change."],
  dv_sell_h: ["تشتري قبل وتبيع بعد؟", "Buy before, sell after?"],
  dv_sell: ["في يوم الاستحقاق ينزل السعر غالباً بقريب من مبلغ التوزيع، لأن الفلوس طلعت من الشركة. فلو اشتريت قبلها بيوم وبعت بعدها مباشرة، غالباً ترجع قريب من رأس مالك، والعمولة تاكل جزء من التوزيع. الفكرة تنجح أكثر مع أسهم تحتفظ فيها فترة أطول.", "On the ex-date the price usually drops by roughly the dividend, because the cash has left the company. Buy the day before and sell right after, and you usually end up near where you started, with commission eating part of the payout. The idea works better with shares you hold for longer."],
  dv_fee_note: ["مع مبلغ صغير انتبه للعمولة: بعض الوسطاء عندهم حد أدنى للعمولة لكل أمر، وممكن ياكل جزء كبير من توزيع صغير. اسأل وسيطك عن الحد الأدنى.", "With a small amount, watch the commission: some brokers charge a minimum per order, which can eat much of a small dividend. Ask your broker about their minimum."],
  dv_src: ["المصادر: شاشة أسهم TradingView وتاريخ التوزيعات من Yahoo Finance، تتحدث يومياً. التوزيعات تتغير وممكن تخفضها الشركة أو توقفها، فتأكد من آخر إعلان في موقع تداول السعودية قبل أي قرار.", "Sources: the TradingView stock screener and dividend history from Yahoo Finance, updated daily. Dividends change and can be cut or stopped, so check the latest announcement on the Saudi Exchange site before any decision."],
  dv_lesson: ["اقرأ درس التوزيعات النقدية", "Read the cash dividends lesson"],
  dv_pdf: ["تصدير PDF", "Export PDF"], dv_pdf_h: ["تقويم التوزيعات القادمة", "Upcoming dividend calendar"],
  dv_pdf_sub: ["من مِراس · {d} · {n} سهم · الحساب على مبلغ {b} ريال لكل سهم", "From Meras · {d} · {n} shares · worked out on SAR {b} per share"],
  dv_pdf_empty: ["ما فيه أسهم ظاهرة في الجدول. غيّر الفلتر أو البحث ثم صدّر.", "No shares are showing in the table. Change the filter or search, then export."],
  dv_pdf_frame: ["التصدير يشتغل في النسخة المنشورة على GitHub، مو في هذي المعاينة.", "Export works in the version published on GitHub, not in this preview."],
  dv_pdf_tip: ["في نافذة الطباعة اختر \"حفظ كـ PDF\". من الجوال: اضغط مشاركة ثم احفظ في الملفات.", "In the print window choose \"Save as PDF\". On a phone: tap Share, then save to Files."],
  dv_pdf_amt: ["لمبلغ {b} ريال", "For SAR {b}"], dv_pdf_sh: ["أسهم", "shares"], dv_pdf_get: ["التوزيع", "payout"]
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
  if (route() === "" && typeof isOwner === "function" && isOwner()) render();
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

/* ----- متى تكون لك أحقية الأرباح؟ (بطاقة تعليمية أعلى صفحة التوزيعات) ----- */
Object.assign(UI, {
  dve_h: ["متى تكون لك أحقية الأرباح؟", "When are you entitled to a dividend?"],
  dve_lead: ["أربع قواعد تكفيك عشان ما يفوتك توزيع، وما تشتري سهم على أمل توزيع ما هو لك.", "Four rules so you never miss a dividend, or buy for one that isn't yours."],
  dve_1h: ["شرط الأحقية", "The rule"], dve_1: ["التوزيع لمالكي السهم بنهاية تداول يوم الأحقية (الاستحقاق) اللي تحدده الشركة في إعلانها، والمقيّدين في سجل المساهمين لدى «إيداع».", "The dividend goes to holders at the close of the record (eligibility) day set in the company's announcement, as registered with Edaa."],
  dve_2h: ["آخر يوم شراء", "Last day to buy"], dve_2: ["تقدر تشتري حتى إغلاق يوم الأحقية نفسه. إذا اشتريت في اليوم اللي بعده أو بعدها، التوزيع يروح للبائع.", "You can buy up to the close of the record day itself. Buy the next day or later and the dividend goes to the seller."],
  dve_3h: ["تسوية T+2", "T+2 settlement"], dve_3: ["الصفقات في تداول تتسوى خلال يومي عمل، عشان كذا «إيداع» يثبّت السجل بنهاية ثاني يوم تداول بعد الأحقية. هذا محسوب في القاعدة، فما تحتاج تشتري قبلها بأيام.", "Trades settle in two business days, so Edaa fixes the register at the end of the second trading day after the record day. That is already built into the rule, so you don't need to buy days earlier."],
  dve_4h: ["اليوم اللي بعد الأحقية", "The day after"], dve_4: ["يتداول السهم «بدون أرباح»، وينزل سعره غالباً بقدر قريب من قيمة التوزيع. فالشراء قبل الأحقية والبيع بعدها مو ربح مجاني.", "The share trades ex-dividend and usually drops by about the dividend. Buying before and selling after is not free money."],
  dve_t1: ["يوم الأحقية", "Record day"], dve_t1s: ["آخر يوم شراء", "Last buy day"], dve_t2: ["اليوم التالي", "Next day"], dve_t2s: ["بدون أرباح، السعر ينزل", "Ex-dividend, price drops"],
  dve_t3: ["ثاني يوم تداول", "Second trading day"], dve_t3s: ["إيداع يثبّت السجل", "Edaa fixes the register"], dve_t4: ["يوم التوزيع", "Payment day"], dve_t4s: ["الفلوس في محفظتك", "Cash in your account"],
  dve_src: ["المصدر: إعلانات توزيع الأرباح في تداول السعودية.", "Source: dividend announcements on Saudi Exchange."], dve_more: ["الدرس كامل", "Full lesson"]
});
function dvEligHtml() {
  let open = true; try { open = localStorage.getItem("meras.dve") !== "0"; } catch (e) {}
  const steps = [["dve_t1", "dve_t1s", "on"], ["dve_t2", "dve_t2s", "dn"], ["dve_t3", "dve_t3s", ""], ["dve_t4", "dve_t4s", "up"]];
  const rules = [["dve_1h", "dve_1"], ["dve_2h", "dve_2"], ["dve_3h", "dve_3"], ["dve_4h", "dve_4"]];
  return '<details class="panel dve"' + (open ? " open" : "") + ' data-act="dve-tg"><summary><span class="dve-ic" aria-hidden="true">٪</span><span><b>' + esc(t("dve_h")) + '</b><small class="muted">' + esc(t("dve_lead")) + "</small></span></summary>" +
    '<ol class="dve-line">' + steps.map(([a, b, c]) => '<li class="' + c + '"><b>' + esc(t(a)) + "</b><small>" + esc(t(b)) + "</small></li>").join("") + "</ol>" +
    '<div class="dve-grid">' + rules.map(([h, p], i) => '<div class="dve-r"><span class="dve-n">' + (i + 1) + "</span><div><b>" + esc(t(h)) + "</b><p>" + esc(t(p)) + "</p></div></div>").join("") + "</div>" +
    '<p class="small muted" style="margin:0">' + esc(t("dve_src")) + ' <a href="#l-inv-2-3">' + esc(t("dve_more")) + " ←</a></p></details>";
}
document.addEventListener("toggle", (e) => { if (e.target.classList && e.target.classList.contains("dve")) { try { localStorage.setItem("meras.dve", e.target.open ? "1" : "0"); } catch (x) {} } }, true);
function pageDividends() {
  const c = divCfg(), list = divList(), real = list !== DIV_SAMPLE, canStar = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  if (canStar && DIVW == null) setTimeout(loadDividends, 0);
  const inp = (id, k, val, step) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" class="num" type="number" min="0" step="' + (step || "any") + '" value="' + val + '" data-div="' + id + '"></div>';
  const fb = (v, k) => '<button type="button" class="btn sm tgl' + (c.f === v ? " on" : "") + '" data-act="dv-f" data-f="' + v + '" aria-pressed="' + (c.f === v) + '">' + esc(t(k)) + "</button>";
  const head = ["", "dv_sym", "dv_price", "dv_next", "dv_ex", "dv_left", "dv_buyby", "dv_yld", "dv_min", "dv_sh", "dv_get"].map((k) => "<th>" + (k ? esc(t(k)) : "") + "</th>").join("");
  const rows = list.map((x, i) => {
    const on = DIVW && DIVW.includes(x.s);
    const ex = x.next_ex ? '<span class="num">' + esc(x.next_ex) + '</span> <span class="tag' + (x.announced ? " up" : "") + '">' + esc(t(x.announced ? "dv_ann" : "dv_exp")) + "</span>" : '<span class="muted">' + esc(t("dv_none")) + "</span>";
    return '<tr id="dv-r' + i + '" data-s="' + esc(x.s) + '" data-n="' + esc(String(x.name || "").toLowerCase()) + '"><td><button type="button" class="dv-star" data-act="dv-star" data-sym="' + esc(x.s) + '" aria-pressed="' + !!on + '" title="' + esc(t("dv_star")) + '" aria-label="' + esc(t("dv_star")) + " " + esc(x.s) + '">' + (on ? "★" : "☆") + '</button></td><td title="' + esc(x.s) + '"><b>' + esc((typeof saName === "function" && saName(x.s)) || x.name || x.s) + "</b>" + (/^9/.test(x.s) ? ' <span class="tag">' + esc(t("dv_nomu_tag")) + "</span>" : "") + '</td><td class="num" id="dv-p' + i + '"></td><td class="num">' + (x.next_amt ? fmt(x.next_amt, x.next_amt < 1 ? 3 : 2) : "–") + "</td><td>" + ex + '</td><td id="dv-d' + i + '"></td><td class="num">' + (x.next_ex ? esc(buyBy(x.next_ex)) : "–") + '</td><td class="num" id="dv-y' + i + '"></td><td class="num" id="dv-m' + i + '"></td><td class="num" id="dv-s' + i + '"></td><td class="num pos" id="dv-a' + i + '"></td></tr>';
  }).join("");
  const count = real ? '<span class="small muted">' + esc(t("dv_count").replace("{n}", list.length).replace("{d}", DIV.as_of || whenText(DIV.fetched_at))) + "</span>" : "";
  return svcShell("dividends",
    '<p class="muted" style="max-width:64ch">' + esc(t("dv_p")) + ' <a href="#l-inv-2-3">' + esc(t("dv_lesson")) + "</a></p>" +
    (real ? "" : '<div class="notice">' + esc(t("dv_sample")) + "</div>") + dvEligHtml() +
    '<div class="panel stack"><div class="form-grid">' + inp("dv-budget", "dv_budget", c.budget, 50) + inp("dv-fee", "dv_fee", c.fee, 0.01) + '<div class="field"><label for="dv-q">' + esc(t("dv_search")) + '</label><input id="dv-q" value="' + esc(c.q) + '" data-div="dv-q" autocomplete="off"></div></div><div class="row">' + fb("all", "dv_f_all") + fb("30", "dv_f_30") + fb("star", "dv_f_star") + '<button type="button" class="btn sm" data-act="dv-pdf" title="' + esc(t("dv_pdf_tip")) + '">⤓ ' + esc(t("dv_pdf")) + "</button>" + '<label class="row small" style="gap:6px"><input type="checkbox" id="dv-nomu" data-div="dv-nomu"' + (c.nomu ? " checked" : "") + ">" + esc(t("dv_nomu")) + "</label>" + count + "</div></div>" +
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
  const el = e.target.closest && e.target.closest('[data-act="dv-f"],[data-act="dv-star"],[data-act="dv-pdf"]'); if (!el) return;
  if (el.dataset.act === "dv-pdf") { exportDivPdf(); return; }
  if (el.dataset.act === "dv-f") { divCfg().f = el.dataset.f; save(); render(); }
  else toggleStar(el.dataset.sym);
});
window.addEventListener("hashchange", () => { if (route() === "dividends") loadDividends(); });
if (route() === "dividends") setTimeout(loadDividends, 0);

/* تصدير PDF: نبني تقرير نظيف من الصفوف الظاهرة ونفتح نافذة الطباعة، والمستخدم يختار "حفظ كـ PDF". */
function exportDivPdf() {
  if (window.self !== window.top) { toast(t("dv_pdf_frame")); return; }
  const c = divCfg(), fee = Math.max(0, c.fee) / 100, list = divList();
  const rows = list.map((x, i) => ({ x, i })).filter(({ i }) => { const r = document.getElementById("dv-r" + i); return r && !r.hidden; });
  if (!rows.length) { toast(t("dv_pdf_empty")); return; }
  const d = new Date(), z = (n) => String(n).padStart(2, "0"), stamp = d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
  const body = rows.map(({ x }) => {
    const px = divPx(x), sh = px > 0 ? Math.floor(c.budget / (px * (1 + fee))) : 0, days = dayDiff(x.next_ex);
    return "<tr><td><b>" + esc(x.name || "") + '</b> <span class="pr-num">' + esc(x.s) + "</span></td><td>" + (x.next_ex ? '<span class="pr-num">' + esc(x.next_ex) + "</span><br><small>" + esc(t(x.announced ? "dv_ann" : "dv_exp")) + (days != null && days >= 0 ? " · " + days + " " + esc(t("dv_days")) : "") + "</small>" : "–") +
      '</td><td class="pr-num">' + (x.next_ex ? esc(buyBy(x.next_ex)) : "–") + '</td><td class="pr-num">' + (x.next_amt ? fmt(x.next_amt, x.next_amt < 1 ? 3 : 2) : "–") + '</td><td class="pr-num">' + (x.yld ? fmt(x.yld, 1) + "%" : "–") +
      '</td><td class="pr-num">' + (px ? fmt(px) : "–") + '</td><td class="pr-num">' + int(sh) + '</td><td class="pr-num">' + (x.next_amt ? fmt(sh * x.next_amt) : "–") + "</td></tr>";
  }).join("");
  const heads = [t("dv_sym"), t("dv_ex"), t("dv_buyby"), t("dv_next"), t("dv_yld"), t("dv_min"), t("dv_pdf_amt").replace("{b}", int(c.budget)) + "<br>" + t("dv_pdf_sh"), t("dv_pdf_get")];
  let box = document.getElementById("dv-print");
  if (!box) { box = document.createElement("section"); box.id = "dv-print"; document.body.appendChild(box); }
  box.innerHTML = '<header><div class="pr-brand">' + LOGO + "<span>" + esc(t("brand")) + "</span></div><h1>" + esc(t("dv_pdf_h")) + "</h1><p>" + esc(t("dv_pdf_sub").replace("{d}", stamp).replace("{n}", rows.length).replace("{b}", int(c.budget))) + "</p></header>" +
    "<table><thead><tr>" + heads.map((h) => "<th>" + h + "</th>").join("") + "</tr></thead><tbody>" + body + "</tbody></table>" +
    '<div class="pr-notes"><p><b>' + esc(t("dv_rule_h")) + "</b> " + esc(t("dv_rule")) + "</p><p><b>" + esc(t("dv_sell_h")) + "</b> " + esc(t("dv_sell")) + "</p><p>" + esc(t("dv_src")) + " " + esc(t("disclaimer")) + "</p></div>";
  const done = () => { document.body.classList.remove("printing"); window.removeEventListener("afterprint", done); };
  document.body.classList.add("printing"); window.addEventListener("afterprint", done);
  const old = document.title; document.title = t("dv_pdf_h") + " " + stamp;
  setTimeout(() => { try { window.print(); } catch (e) { toast(t("dv_pdf_frame")); } document.title = old; setTimeout(done, 500); }, 60);
}
