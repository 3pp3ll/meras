/* ===== مِراس: التوزيعات =====
   قائمة أولية لأسهم توزع أرباح نقدية، مع حاسبة: كم سهم تقدر تشتري بمبلغك، وكم توزيع يجيك في السنة.
   الأرقام تقريبية من مصادر عامة بتاريخ أكتوبر 2026، والسعر يتحدث تلقائياً لو السهم في أسعارك الحقيقية. */
Object.assign(UI, {
  tab_div: ["التوزيعات", "Dividends"],
  dv_p: ["أسهم توزع أرباح نقدية، وكم أقل مبلغ تدخل فيه، وكم توزيع يجيك في السنة بالمبلغ اللي تحدده. ابدأ بمبلغ بسيط وتعلّم كيف تشتغل التوزيعات.", "Shares that pay cash dividends, the smallest amount you can enter with, and the yearly dividend your chosen amount would earn. Start small and learn how dividends work."],
  dv_budget: ["المبلغ لكل سهم (ريال)", "Amount per share (SAR)"], dv_fee: ["العمولة لكل عملية %", "Commission per side %"],
  dv_sym: ["السهم", "Share"], dv_price: ["السعر", "Price"], dv_dps: ["التوزيع السنوي للسهم", "Yearly dividend / share"], dv_yld: ["العائد", "Yield"],
  dv_freq: ["التكرار", "Frequency"], dv_min: ["أقل مبلغ للدخول", "Minimum to enter"], dv_sh: ["أسهم بمبلغك", "Shares for your amount"], dv_year: ["توزيعك السنوي", "Your yearly dividend"], dv_pay: ["كل دفعة تقريباً", "Per payment, approx."],
  dv_q: ["ربع سنوي", "Quarterly"], dv_h: ["نصف سنوي", "Half-yearly"], dv_y: ["سنوي", "Yearly"],
  dv_est: ["تقديري", "estimate"], dv_live: ["سعر حي", "live price"],
  dv_total_h: ["لو وزعت المبلغ على كل الأسهم فوق", "If you split the amount across all shares above"],
  dv_total: ["الإجمالي المستثمر", "Total invested"], dv_total_y: ["التوزيعات السنوية المتوقعة", "Expected yearly dividends"], dv_total_r: ["العائد على المبلغ", "Return on the amount"],
  dv_own_h: ["احسب سهم من عندك", "Work out a share of your own"], dv_own_p: ["اكتب سعر السهم والتوزيع السنوي للسهم من موقع تداول أو تطبيق وسيطك.", "Enter the share price and its yearly dividend per share from the exchange site or your broker's app."],
  dv_rule_h: ["متى تستحق التوزيع؟", "When are you entitled?"],
  dv_rule: ["لازم تملك السهم بنهاية تداول يوم الأحقية اللي تعلنه الشركة. اللي يشتري بعده ما يستحق. وفي اليوم اللي بعد الأحقية ينزل السعر غالباً بقريب من مبلغ التوزيع، فالشراء قبلها بيوم عشان التوزيع بس ما يعتبر ربح مجاني.", "You must hold the share at the end of trading on the eligibility date the company announces. Buy after it and you are not entitled. The day after, the price usually drops by roughly the dividend, so buying the day before just for the payout is not free money."],
  dv_reit_h: ["صناديق الريت", "REIT funds"],
  dv_reit: ["صناديق الريت (مثل الراجحي ريت والرياض ريت) ملزمة نظاماً توزع أغلب أرباحها، وسعر الوحدة غالباً أقل من 10 ريال، فتقدر تبدأ فيها بمبلغ صغير جداً. لكن سعرها يتأثر بسوق العقار ونسبة الإشغال.", "REIT funds (such as Al Rajhi REIT and Riyad REIT) are required to distribute most of their profit, and a unit often costs under SAR 10, so you can start with a very small amount. Their price moves with the property market and occupancy."],
  dv_fee_note: ["مع مبلغ صغير انتبه للعمولة: بعض الوسطاء عندهم حد أدنى للعمولة لكل أمر، وممكن ياكل جزء كبير من توزيع صغير. اسأل وسيطك عن الحد الأدنى.", "With a small amount, watch the commission: some brokers charge a minimum per order, which can eat much of a small dividend. Ask your broker about their minimum."],
  dv_src: ["الأرقام تقريبية من مصادر عامة (Stock Analysis وSimply Wall St وDigrin وأرقام) بتاريخ سبتمبر وأكتوبر 2026. التوزيعات تتغير، وممكن تخفضها الشركة أو توقفها. تأكد من آخر إعلان على موقع تداول السعودية قبل أي قرار.", "Figures are approximate, from public sources (Stock Analysis, Simply Wall St, Digrin, Argaam) as of September and October 2026. Dividends change and a company can cut or stop them. Check the latest announcement on the Saudi Exchange site before any decision."],
  dv_lesson: ["اقرأ درس التوزيعات النقدية", "Read the cash dividends lesson"]
});

const DIVS = [
  { s: "4330", n: ["الرياض ريت", "Riyad REIT"], p: 4.46, d: 0.32, f: "h", reit: 1 },
  { s: "4001", n: ["أسواق العثيم", "Al Othaim Markets"], p: 4.99, d: 0.24, f: "q" },
  { s: "4340", n: ["الراجحي ريت", "Al Rajhi REIT"], p: 7.79, d: 0.54, f: "q", reit: 1 },
  { s: "1010", n: ["بنك الرياض", "Riyad Bank"], p: 19.28, d: 1.04, f: "h", est: 1 },
  { s: "2222", n: ["أرامكو السعودية", "Saudi Aramco"], p: 26.48, d: 1.36, f: "q" },
  { s: "1180", n: ["البنك الأهلي السعودي", "Saudi National Bank"], p: 37.04, d: 2.3, f: "h" },
  { s: "7010", n: ["اس تي سي", "stc"], p: 43.22, d: 2.2, f: "q" },
  { s: "1120", n: ["مصرف الراجحي", "Al Rajhi Bank"], p: 61.85, d: 3.03, f: "h", est: 1 }
];
const divCfg = () => { if (!S.div) S.div = { budget: 500, fee: 0.15, op: 20, od: 1 }; return S.div; };
const divPx = (x) => { const q = LIVE.quotes && LIVE.quotes[x.s]; return q && numOr(q.price) != null ? { p: q.price, live: true } : { p: x.p, live: false }; };
const perYear = (f) => (f === "q" ? 4 : f === "h" ? 2 : 1);

function pageDividends() {
  const c = divCfg();
  const inp = (id, k, val, step) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" class="num" type="number" min="0" step="' + (step || "any") + '" value="' + val + '" data-div="' + id + '"></div>';
  const head = ["dv_sym", "dv_price", "dv_dps", "dv_yld", "dv_freq", "dv_min", "dv_sh", "dv_year", "dv_pay"].map((k) => "<th>" + esc(t(k)) + "</th>").join("");
  const rows = DIVS.map((x, i) => '<tr><td><span class="num">' + esc(x.s) + "</span> " + esc(L(x.n)) + (x.reit ? ' <span class="tag">REIT</span>' : "") + '</td><td class="num" id="dv-p' + i + '"></td><td class="num">' + fmt(x.d) + (x.est ? ' <span class="tag amber">' + esc(t("dv_est")) + "</span>" : "") + '</td><td class="num" id="dv-y' + i + '"></td><td>' + esc(t("dv_" + x.f)) + '</td><td class="num" id="dv-m' + i + '"></td><td class="num" id="dv-s' + i + '"></td><td class="num pos" id="dv-a' + i + '"></td><td class="num" id="dv-e' + i + '"></td></tr>').join("");
  return svcShell("dividends",
    '<p class="muted" style="max-width:64ch">' + esc(t("dv_p")) + ' <a href="#l-inv-2-3">' + esc(t("dv_lesson")) + "</a></p>" +
    '<div class="panel"><div class="form-grid" style="max-width:420px">' + inp("dv-budget", "dv_budget", c.budget, 50) + inp("dv-fee", "dv_fee", c.fee, 0.01) + "</div></div>" +
    '<div class="tablewrap"><table><thead><tr>' + head + "</tr></thead><tbody>" + rows + "</tbody></table></div>" +
    '<div class="panel stack"><h3>' + esc(t("dv_total_h")) + '</h3><div class="result" id="dv-total"></div></div>' +
    '<div class="grid2"><div class="panel stack"><div><h3>' + esc(t("dv_own_h")) + '</h3><p class="muted small">' + esc(t("dv_own_p")) + '</p></div><div class="form-grid">' + inp("dv-op", "dv_price", c.op, 0.01) + inp("dv-od", "dv_dps", c.od, 0.01) + '</div><div class="result" id="dv-own"></div></div>' +
    '<div class="panel stack"><h3>' + esc(t("dv_rule_h")) + "</h3><p>" + esc(t("dv_rule")) + "</p><h3>" + esc(t("dv_reit_h")) + "</h3><p>" + esc(t("dv_reit")) + "</p></div></div>" +
    '<div class="notice">' + esc(t("dv_fee_note")) + '</div><p class="small muted">' + esc(t("dv_src")) + " " + esc(t("disclaimer")) + "</p>");
}
function runDiv() {
  if (!document.getElementById("dv-total")) return;
  const c = divCfg(), fee = Math.max(0, c.fee) / 100, set = (id, h) => { const el = document.getElementById(id); if (el) el.innerHTML = h; };
  let inv = 0, yr = 0;
  DIVS.forEach((x, i) => {
    const px = divPx(x), sh = Math.floor(c.budget / (px.p * (1 + fee))), a = sh * x.d;
    inv += sh * px.p * (1 + fee); yr += a;
    set("dv-p" + i, fmt(px.p) + (px.live ? ' <span class="tag up">' + esc(t("dv_live")) + "</span>" : ""));
    set("dv-y" + i, fmt((x.d / px.p) * 100, 1) + "%");
    set("dv-m" + i, fmt(px.p * (1 + fee)));
    set("dv-s" + i, int(sh));
    set("dv-a" + i, fmt(a));
    set("dv-e" + i, fmt(a / perYear(x.f)));
  });
  const box = (k, v, cls) => "<div><span>" + esc(t(k)) + '</span><b class="' + (cls || "") + '">' + v + "</b></div>";
  set("dv-total", box("dv_total", fmt(inv) + " " + esc(t("sar"))) + box("dv_total_y", fmt(yr) + " " + esc(t("sar")), "pos") + box("dv_total_r", inv ? fmt((yr / inv) * 100, 1) + "%" : "–"));
  const osh = c.op > 0 ? Math.floor(c.budget / (c.op * (1 + fee))) : 0;
  set("dv-own", box("dv_yld", c.op > 0 ? fmt((c.od / c.op) * 100, 1) + "%" : "–") + box("dv_sh", int(osh)) + box("dv_year", fmt(osh * c.od) + " " + esc(t("sar")), "pos"));
}
document.addEventListener("input", (e) => {
  const id = e.target.dataset && e.target.dataset.div; if (!id) return;
  const c = divCfg(), v = parseFloat(e.target.value);
  const key = { "dv-budget": "budget", "dv-fee": "fee", "dv-op": "op", "dv-od": "od" }[id];
  if (key && isFinite(v) && v >= 0) { c[key] = v; save(); runDiv(); }
});
