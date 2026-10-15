/* ===== مِراس: خطتي الشهرية =====
   استثمار شهري ثابت موزع على أسهم تختارها بنسب. تسجل كل شراء، والصفحة تحسب لك متوسط التكلفة،
   قيمة محفظتك الحين، الربح أو الخسارة، والتوزيعات المتوقعة. الحالة في S.invest وتتزامن مع state.json،
   فسكربت التحليل الفني يضيف أسهم خطتك تلقائياً. */
Object.assign(UI, {
  tab_inv: ["خطتي الشهرية", "My monthly plan"],
  iv_p: ["مبلغ ثابت كل شهر، موزع على أسهم تختارها. الفكرة إنك تشتري بانتظام بدون ما تحاول تتوقع السوق: لما السعر ينزل نفس المبلغ يشتري أسهم أكثر، فيتحسن متوسط تكلفتك مع الوقت.", "A fixed amount every month, split across shares you choose. You buy regularly without trying to time the market: when the price drops the same money buys more shares, so your average cost improves over time."],
  iv_set: ["الإعدادات", "Settings"], iv_monthly: ["المبلغ الشهري (ريال)", "Monthly amount (SAR)"],
  iv_fee: ["عمولة الوسيط %", "Broker commission %"], iv_min: ["أقل عمولة للأمر (ريال)", "Minimum per order (SAR)"],
  iv_vat_note: ["تنضاف ضريبة 15% على العمولة تلقائياً.", "15% VAT on the commission is added automatically."],
  iv_preset: ["جاهز:", "Presets:"], iv_p_rajhi: ["الراجحي 0.155%", "Al Rajhi 0.155%"], iv_p_derayah: ["دراية 0.12% (أقل شي 12)", "Derayah 0.12% (min 12)"],
  iv_targets: ["أسهم الخطة ونسبها", "Plan shares and weights"], iv_pct: ["النسبة %", "Weight %"], iv_amt: ["مبلغه هالشهر", "This month"],
  iv_est: ["تقريباً", "About"], iv_sh: ["سهم", "shares"], iv_comm: ["العمولة", "Commission"], iv_comm_pct: ["العمولة من الصفقة", "Commission share"],
  iv_add_t: ["أضف سهم للخطة", "Add a share"], iv_code: ["الرمز", "Code"], iv_name: ["الاسم (اختياري)", "Name (optional)"],
  iv_add: ["أضف", "Add"], iv_rm: ["شيل", "Remove"], iv_bought: ["سجّل شراء", "Log a buy"],
  iv_sum_bad: ["مجموع النسب {p}%، خله 100% عشان يتوزع المبلغ كامل.", "Weights add up to {p}%; make it 100% so the whole amount is used."],
  iv_example: ["عبّها بمثال توضيحي (4 قطاعات)", "Fill with an illustrative example (4 sectors)"],
  iv_example_note: ["المثال: بنك + اتصالات + طاقة + أغذية، 25% لكل واحد. هذا مثال على التنويع بين قطاعات مختلفة، مو توصية بأسهم معينة. غيّره براحتك.", "Example: a bank, telecom, energy and food, 25% each. It shows diversifying across sectors; it is not a recommendation of specific shares. Change it freely."],
  iv_new: ["سجّل عملية", "Log a trade"], iv_side: ["النوع", "Type"], iv_buy: ["شراء", "Buy"], iv_sell: ["بيع", "Sell"],
  iv_date: ["التاريخ", "Date"], iv_qty: ["الكمية", "Quantity"], iv_price: ["السعر", "Price"], iv_fee_amt: ["العمولة الفعلية (ريال)", "Actual commission (SAR)"],
  iv_fee_auto: ["تلقائي", "Auto"], iv_save: ["احفظ", "Save"],
  iv_need: ["اكتب رمز من 4 أرقام وكمية وسعر", "Enter a 4-digit code, quantity and price"], iv_saved: ["انحفظت", "Saved"],
  iv_too_many: ["ما عندك هالكمية من السهم عشان تبيعها", "You don't hold that many shares to sell"],
  iv_hold: ["محفظتي", "My holdings"], iv_avg: ["متوسط التكلفة", "Average cost"], iv_cost: ["المدفوع", "Invested"], iv_now: ["السعر الحين", "Price now"],
  iv_val: ["القيمة الحين", "Value now"], iv_pl: ["الربح/الخسارة", "P/L"], iv_w: ["الوزن", "Weight"], iv_dv: ["توزيعات سنوية متوقعة", "Expected yearly dividends"], iv_next: ["التوزيع القادم", "Next dividend"],
  iv_px_old: ["سعر قديم: ما فيه سعر حديث لهذا السهم", "Stale price: no fresh quote for this share"],
  iv_t_cost: ["إجمالي المدفوع", "Total invested"], iv_t_val: ["القيمة الحين", "Value now"], iv_t_pl: ["الربح/الخسارة", "P/L"], iv_t_dv: ["توزيعات بالسنة (متوقعة)", "Dividends a year (expected)"],
  iv_month: ["هالشهر: اشتريت بـ {a} من {m} ريال", "This month: bought {a} of SAR {m}"],
  iv_hist: ["سجل العمليات", "Trade log"], iv_del: ["احذف", "Delete"], iv_sure: ["متأكد؟", "Sure?"],
  iv_empty: ["ما سجلت ولا عملية. أول ما تشتري، سجلها هنا.", "No trades yet. Log your first buy here."],
  iv_real: ["أرباح محققة من البيع", "Realised P/L from sales"],
  iv_proj_h: ["لو استمريت: كم تصير فلوسك؟", "If you keep going: what could it grow to?"],
  iv_proj_p: ["حساب تقريبي لمبلغك الشهري لو كمّلت عليه، بثلاث نسب نمو سنوية مختلفة (أرباح + توزيعات يعاد استثمارها). السوق ما يمشي بخط مستقيم: فيه سنين خسارة وسنين ربح، والأرقام هنا متوسطات مو وعود.", "A rough projection of your monthly amount if you keep going, at three yearly growth rates (gains plus reinvested dividends). Markets don't move in straight lines: some years lose, some gain, and these are averages, not promises."],
  iv_years: ["بعد", "After"], iv_yr: ["سنة", "yr"], iv_paid: ["اللي دفعته", "Paid in"],
  iv_r5: ["5% متحفظ", "5% cautious"], iv_r8: ["8% متوسط", "8% average"], iv_r12: ["12% متفائل", "12% optimistic"],
  iv_rules_h: ["قواعد بسيطة", "Simple rules"],
  iv_rules: [["اشترِ في نفس الأسبوع كل شهر، مهما كان السوق طالع أو نازل.", "Buy in the same week every month, whether the market is up or down."], ["مع مبلغ 1000 ريال للسهم، وسيط بحد أدنى 12 ريال ياكل 1.2% من أول يوم. شيك عمود \"العمولة من الصفقة\".", "With SAR 1,000 per share, a broker with a SAR 12 minimum eats 1.2% on day one. Check the \"commission share\" column."], ["فلوس الاستثمار غير فلوس المضاربة. لا تبيع من هنا عشان تعوض خسارة مضاربة.", "Investment money is separate from trading money. Don't sell from here to cover a trading loss."], ["راجع النسب مرة أو مرتين في السنة بس، مو كل يوم.", "Review the weights once or twice a year, not daily."]]
});

const IV_EXAMPLE = { "1120": 25, "7010": 25, "2222": 25, "2280": 25 };
const ivCfg = () => {
  if (!S.invest) S.invest = {};
  const d = { monthly: 4000, fee: 0.155, minFee: 0, targets: {}, names: {}, buys: [], del: [] };
  for (const k in d) if (S.invest[k] == null) S.invest[k] = d[k];
  return S.invest;
};
let ivDraft = null, ivDel = null;
const ivDivOf = (s) => (typeof DIV !== "undefined" && DIV && Array.isArray(DIV.stocks) ? DIV.stocks : typeof DIV_SAMPLE !== "undefined" ? DIV_SAMPLE : []).find((x) => x.s === s);
function ivName(s) {
  const c = ivCfg(); if (c.names[s]) return c.names[s];
  const tk = (typeof TECH !== "undefined" && TECH && TECH.stocks || []).find((x) => x.s === s); if (tk && tk.name) return tk.name;
  const dv = ivDivOf(s); if (dv && dv.name) return dv.name;
  const q = SAMPLE_QUOTES[s]; return q ? L(q.name) : "";
}
function ivPrice(s) {
  const q = LIVE.quotes && LIVE.quotes[s]; if (q && numOr(q.price) != null) return { p: q.price, fresh: true };
  const tp = typeof techPrice === "function" ? techPrice(s) : null; if (tp) return { p: tp, fresh: true };
  const dv = ivDivOf(s); if (dv && dv.price && typeof DIV !== "undefined" && DIV) return { p: dv.price, fresh: true };
  const last = ivCfg().buys.filter((b) => b.s === s).slice(-1)[0]; if (last) return { p: last.p, fresh: false };
  const q2 = quoteOf(s); if (q2 && q2.price) return { p: q2.price, fresh: false };
  return dv && dv.price ? { p: dv.price, fresh: false } : { p: null, fresh: false };
}
const ivComm = (value) => { const c = ivCfg(); if (!(value > 0)) return 0; return Math.max((value * c.fee) / 100, c.minFee || 0) * 1.15; };

function ivHoldings() {
  const c = ivCfg(), h = {}; let realised = 0;
  c.buys.slice().sort((a, b) => (a.d + a.id < b.d + b.id ? -1 : 1)).forEach((b) => {
    const x = h[b.s] || (h[b.s] = { s: b.s, q: 0, cost: 0 });
    if (b.side === "sell") { const avg = x.q ? x.cost / x.q : 0, q = Math.min(b.q, x.q); realised += q * b.p - (b.fee || 0) - avg * q; x.cost -= avg * q; x.q -= q; }
    else { x.q += b.q; x.cost += b.q * b.p + (b.fee || 0); }
  });
  return { list: Object.values(h).filter((x) => x.q > 0), realised };
}

function pageInvest() {
  const c = ivCfg();
  if (typeof loadDividends === "function" && typeof HOSTED !== "undefined" && HOSTED && CFG.token && (typeof DIV === "undefined" || !DIV)) setTimeout(() => loadDividends().then(() => { if (route() === "invest") render(); }), 0);
  const inp = (id, k, val, step, extra) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" class="num" type="number" min="0" step="' + (step || "any") + '" value="' + esc(val ?? "") + '" ' + (extra || "") + "></div>";
  const settings = '<div class="panel stack"><h3>' + esc(t("iv_set")) + '</h3><div class="form-grid">' + inp("iv-monthly", "iv_monthly", c.monthly, 100, 'data-iv="monthly"') + inp("iv-fee", "iv_fee", c.fee, 0.005, 'data-iv="fee"') + inp("iv-min", "iv_min", c.minFee, 1, 'data-iv="minFee"') +
    '</div><div class="row small"><span class="muted">' + esc(t("iv_preset")) + '</span><button type="button" class="btn sm" data-act="iv-preset" data-fee="0.155" data-min="0">' + esc(t("iv_p_rajhi")) + '</button><button type="button" class="btn sm" data-act="iv-preset" data-fee="0.12" data-min="12">' + esc(t("iv_p_derayah")) + '</button><span class="muted">' + esc(t("iv_vat_note")) + "</span></div></div>";

  const codes = Object.keys(c.targets), sumPct = codes.reduce((a, k) => a + (parseFloat(c.targets[k]) || 0), 0);
  const tRows = codes.map((s) => {
    const pct = parseFloat(c.targets[s]) || 0, amt = (c.monthly * pct) / 100, px = ivPrice(s).p;
    let sh = 0; if (px > 0) { sh = Math.floor(amt / px); while (sh > 0 && sh * px + ivComm(sh * px) > amt) sh--; }
    const val = sh * px, cm = ivComm(val), cmPct = val ? (cm / val) * 100 : 0;
    return '<tr><td><span class="num">' + esc(s) + "</span> " + esc(ivName(s)) + '</td><td><input class="num" type="number" min="0" max="100" step="1" value="' + pct + '" data-ivt="' + esc(s) + '" aria-label="' + esc(t("iv_pct")) + " " + esc(s) + '" style="width:72px;padding:4px 8px;border:1px solid var(--line);border-radius:6px;background:var(--surface)"></td><td class="num">' + fmt(amt, 0) + '</td><td class="num">' + (px ? fmt(px) : "–") + '</td><td class="num">' + (px ? int(sh) + " " + esc(t("iv_sh")) : "–") + '</td><td class="num">' + (val ? fmt(cm) : "–") + '</td><td class="num ' + (cmPct > 0.5 ? "neg" : "") + '">' + (val ? fmt(cmPct) + "%" : "–") + '</td><td><div class="row" style="flex-wrap:nowrap"><button type="button" class="btn sm" data-act="iv-buy" data-s="' + esc(s) + '" data-q="' + sh + '" data-p="' + (px || "") + '">' + esc(t("iv_bought")) + '</button><button type="button" class="btn sm ghost" data-act="iv-trm" data-s="' + esc(s) + '">' + esc(t("iv_rm")) + "</button></div></td></tr>";
  }).join("");
  const targets = '<div class="panel stack"><h3>' + esc(t("iv_targets")) + "</h3>" +
    (codes.length ? '<div class="tablewrap"><table><thead><tr>' + ["dv_sym", "iv_pct", "iv_amt", "iv_price", "iv_est", "iv_comm", "iv_comm_pct"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + "<th></th></tr></thead><tbody>" + tRows + "</tbody></table></div>" + (Math.abs(sumPct - 100) > 0.01 ? '<div class="notice">' + esc(t("iv_sum_bad").replace("{p}", fmt(sumPct, 0))) + "</div>" : "")
      : '<div class="row"><button type="button" class="btn" data-act="iv-example">' + esc(t("iv_example")) + '</button></div><p class="small muted">' + esc(t("iv_example_note")) + "</p>") +
    '<form class="row" data-form="iv-target" style="gap:8px;align-items:end"><div class="field"><label for="iv-tcode">' + esc(t("iv_code")) + '</label><input id="iv-tcode" class="num" inputmode="numeric" maxlength="4" style="width:100px"></div><div class="field"><label for="iv-tname">' + esc(t("iv_name")) + '</label><input id="iv-tname" style="width:160px"></div><div class="field"><label for="iv-tpct">' + esc(t("iv_pct")) + '</label><input id="iv-tpct" class="num" type="number" min="0" max="100" step="1" value="25" style="width:80px"></div><button class="btn sm" type="submit">' + esc(t("iv_add")) + "</button></form>" +
    (codes.length && codes.join() === Object.keys(IV_EXAMPLE).join() ? '<p class="small muted">' + esc(t("iv_example_note")) + "</p>" : "") + "</div>";

  const d = ivDraft || {}; ivDraft = null;
  const form = '<form class="panel stack" id="iv-form" data-form="iv-buy" novalidate><h3>' + esc(t("iv_new")) + '</h3><div class="form-grid"><div class="field"><label for="iv-side">' + esc(t("iv_side")) + '</label><select id="iv-side"><option value="buy">' + esc(t("iv_buy")) + '</option><option value="sell">' + esc(t("iv_sell")) + '</option></select></div><div class="field"><label for="iv-date">' + esc(t("iv_date")) + '</label><input id="iv-date" type="date" value="' + today() + '"></div><div class="field"><label for="iv-s">' + esc(t("iv_code")) + '</label><input id="iv-s" class="num" inputmode="numeric" maxlength="4" value="' + esc(d.s || "") + '"></div>' +
    inp("iv-q", "iv_qty", d.q || "", 1) + inp("iv-p", "iv_price", d.p || "", 0.01) + '<div class="field"><label for="iv-f">' + esc(t("iv_fee_amt")) + '</label><input id="iv-f" class="num" type="number" min="0" step="0.01" placeholder="' + esc(t("iv_fee_auto")) + '"></div></div><div><button class="btn primary" type="submit">' + esc(t("iv_save")) + "</button></div></form>";

  const H = ivHoldings(); let tCost = 0, tVal = 0, tDv = 0;
  const rowsH = H.list.map((x) => { const pr = ivPrice(x.s), v = x.q * (pr.p || 0); tCost += x.cost; tVal += v; return { x, pr, v }; });
  const sCost = tCost, sVal = tVal, MT = typeof metSummary === "function" ? metSummary() : [];
  MT.forEach((r) => { tCost += r.cost; tVal += r.val; });
  const hRows = rowsH.map(({ x, pr, v }) => {
    const pl = v - x.cost, plp = x.cost ? (pl / x.cost) * 100 : 0, dv = ivDivOf(x.s), dvY = dv && dv.dps12 ? dv.dps12 * x.q : 0; tDv += dvY;
    const nx = dv && dv.next_ex ? '<span class="num">' + esc(dv.next_ex) + "</span>" + (dv.next_amt ? ' <span class="small muted">≈ ' + fmt(dv.next_amt * x.q) + "</span>" : "") : "–";
    const cls = pl > 0 ? "pos" : pl < 0 ? "neg" : "";
    return '<tr><td><span class="num">' + esc(x.s) + "</span> " + esc(ivName(x.s)) + '</td><td class="num">' + int(x.q) + '</td><td class="num">' + fmt(x.cost / x.q, 3) + '</td><td class="num">' + fmt(x.cost) + '</td><td class="num"' + (pr.fresh ? "" : ' title="' + esc(t("iv_px_old")) + '"') + ">" + (pr.p ? fmt(pr.p) + (pr.fresh ? "" : "*") : "–") + '</td><td class="num">' + fmt(v) + '</td><td class="num ' + cls + '">' + (pl > 0 ? "+" : "") + fmt(pl) + " (" + (plp > 0 ? "+" : "") + fmt(plp, 1) + '%)</td><td class="num">' + (tVal ? fmt((v / tVal) * 100, 0) + "%" : "–") + '</td><td class="num">' + (dvY ? fmt(dvY) : "–") + "</td><td>" + nx + "</td></tr>";
  }).join("") + MT.map((r) => { const pl = r.val - r.cost, plp = r.cost ? (pl / r.cost) * 100 : 0, cls = pl > 0 ? "pos" : pl < 0 ? "neg" : "";
    return '<tr class="iv-met ' + r.m + '"><td><a href="#metals">' + (r.k === "XAU" ? "🟡 " : "⚪ ") + esc(t(r.k === "XAU" ? "mt_gold" : "mt_silver")) + '</a></td><td class="num">' + fmt(r.pure, 2) + ' g</td><td class="num">' + fmt(r.cost / r.pure, 2) + '</td><td class="num">' + fmt(r.cost) + '</td><td class="num">' + (r.gram ? fmt(r.gram) : "–") + '</td><td class="num">' + fmt(r.val) + '</td><td class="num ' + cls + '">' + (pl > 0 ? "+" : "") + fmt(pl) + " (" + (plp > 0 ? "+" : "") + fmt(plp, 1) + '%)</td><td class="num">' + (tVal ? fmt((r.val / tVal) * 100, 0) + "%" : "–") + "</td><td>–</td><td>–</td></tr>"; }).join("");
  const parts = [["iv_stocks", sVal, "var(--accent, #14284F)"]].concat(MT.map((r) => [r.k === "XAU" ? "mt_gold" : "mt_silver", r.val, r.k === "XAU" ? "var(--amber)" : "#9AA6B8"])).filter((p) => p[1] > 0);
  const split = parts.length > 1 && tVal ? '<div class="stack" style="gap:6px"><span class="small">' + esc(t("iv_split")) + '</span><div class="iv-split">' + parts.map((p) => '<i style="width:' + ((p[1] / tVal) * 100).toFixed(2) + "%;background:" + p[2] + '" title="' + esc(t(p[0])) + '"></i>').join("") + '</div><div class="row small">' + parts.map((p) => '<span><span class="iv-dot" style="background:' + p[2] + '"></span> ' + esc(t(p[0])) + " " + fmt((p[1] / tVal) * 100, 0) + "%</span>").join("") + "</div></div>" : "";
  const tPl = tVal - tCost, ym = today().slice(0, 7), thisMonth = c.buys.filter((b) => b.side !== "sell" && b.d.slice(0, 7) === ym).reduce((a, b) => a + b.q * b.p + (b.fee || 0), 0) + (typeof metMonthSpend === "function" ? metMonthSpend(ym) : 0);
  const stats = '<div class="stats"><div><span>' + esc(t("iv_t_cost")) + "</span><b>" + fmt(tCost, 0) + "</b></div><div><span>" + esc(t("iv_t_val")) + "</span><b>" + fmt(tVal, 0) + "</b></div><div><span>" + esc(t("iv_t_pl")) + '</span><b class="' + (tPl > 0 ? "pos" : tPl < 0 ? "neg" : "") + '">' + (tCost ? (tPl > 0 ? "+" : "") + fmt(tPl, 0) + " (" + fmt((tPl / tCost) * 100, 1) + "%)" : "–") + "</b></div><div><span>" + esc(t("iv_t_dv")) + "</span><b>" + (tDv ? fmt(tDv, 0) : "–") + "</b></div></div>" +
    '<div class="stack" style="gap:6px"><span class="small">' + esc(t("iv_month").replace("{a}", fmt(thisMonth, 0)).replace("{m}", fmt(c.monthly, 0))) + '</span><div class="meter"><i style="width:' + Math.min(100, c.monthly ? (thisMonth / c.monthly) * 100 : 0) + '%"></i></div></div>' + split;
  const hold = '<div class="stack"><h3>' + esc(t("iv_hold")) + "</h3>" + stats + (H.list.length || MT.length ? '<div class="tablewrap"><table><thead><tr>' + ["dv_sym", "iv_qty", "iv_avg", "iv_cost", "iv_now", "iv_val", "iv_pl", "iv_w", "iv_dv", "iv_next"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + "</tr></thead><tbody>" + hRows + "</tbody></table></div>" : '<div class="panel muted">' + esc(t("iv_empty")) + "</div>") +
    (H.realised ? '<p class="small">' + esc(t("iv_real")) + ': <b class="num ' + (H.realised > 0 ? "pos" : "neg") + '">' + fmt(H.realised) + "</b></p>" : "") + "</div>";

  const hist = c.buys.length ? '<div class="stack"><h3>' + esc(t("iv_hist")) + '</h3><div class="tablewrap"><table><thead><tr>' + ["iv_date", "iv_side", "dv_sym", "iv_qty", "iv_price", "iv_comm", "iv_cost"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + "<th></th></tr></thead><tbody>" +
    c.buys.slice().sort((a, b) => (a.d + a.id < b.d + b.id ? 1 : -1)).map((b) => "<tr><td class=\"num\">" + esc(b.d) + '</td><td><span class="tag ' + (b.side === "sell" ? "down" : "up") + '">' + esc(t(b.side === "sell" ? "iv_sell" : "iv_buy")) + '</span></td><td><span class="num">' + esc(b.s) + "</span> " + esc(ivName(b.s)) + '</td><td class="num">' + int(b.q) + '</td><td class="num">' + fmt(b.p) + '</td><td class="num">' + fmt(b.fee || 0) + '</td><td class="num">' + fmt(b.q * b.p + (b.side === "sell" ? -(b.fee || 0) : b.fee || 0)) + "</td><td>" +
      (ivDel === b.id ? '<div class="row" style="flex-wrap:nowrap"><button class="btn sm danger" data-act="iv-del-yes" data-id="' + b.id + '">' + esc(t("iv_sure")) + '</button><button class="btn sm" data-act="iv-del-no">' + esc(t("j_cancel")) + "</button></div>" : '<button class="btn sm ghost" data-act="iv-del" data-id="' + b.id + '">' + esc(t("iv_del")) + "</button>") + "</td></tr>").join("") + "</tbody></table></div></div>" : "";

  const fv = (m, r, y) => { const i = r / 12; let v = 0; for (let k = 0; k < y * 12; k++) v = v * (1 + i) + m; return v; };
  const proj = '<div class="panel stack"><h3>' + esc(t("iv_proj_h")) + '</h3><p class="small muted">' + esc(t("iv_proj_p")) + '</p><div class="tablewrap"><table><thead><tr><th>' + esc(t("iv_years")) + "</th><th>" + esc(t("iv_paid")) + "</th><th>" + esc(t("iv_r5")) + "</th><th>" + esc(t("iv_r8")) + "</th><th>" + esc(t("iv_r12")) + "</th></tr></thead><tbody>" +
    [1, 3, 5, 10].map((y) => '<tr><td>' + y + " " + esc(t("iv_yr")) + '</td><td class="num">' + fmt(c.monthly * 12 * y, 0) + "</td>" + [0.05, 0.08, 0.12].map((r) => '<td class="num">' + fmt(fv(c.monthly, r, y), 0) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div></div>";
  const rules = '<div class="panel stack"><h3>' + esc(t("iv_rules_h")) + "</h3><ul>" + UI.iv_rules.map((r) => "<li>" + esc(L(r)) + "</li>").join("") + "</ul></div>";

  return svcShell("invest", '<p class="muted" style="max-width:64ch">' + esc(t("iv_p")) + "</p>" + settings + targets + form + hold + hist + '<div class="grid2">' + proj + rules + "</div>" + '<p class="small muted">' + esc(t("disclaimer")) + "</p>");
}

document.addEventListener("change", (e) => {
  const el = e.target; if (!el.dataset) return;
  const c = ivCfg();
  if (el.dataset.iv) { const v = parseFloat(el.value); if (isFinite(v) && v >= 0) { c[el.dataset.iv] = v; save(); render(); } }
  else if (el.dataset.ivt) { const v = parseFloat(el.value); if (isFinite(v) && v >= 0) { c.targets[el.dataset.ivt] = Math.min(100, v); save(); render(); } }
});
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="iv-"]'); if (!el) return;
  const c = ivCfg(), a = el.dataset.act;
  if (a === "iv-preset") { c.fee = parseFloat(el.dataset.fee); c.minFee = parseFloat(el.dataset.min); save(); render(); }
  else if (a === "iv-example") { c.targets = Object.assign({}, IV_EXAMPLE); save(); render(); }
  else if (a === "iv-trm") { delete c.targets[el.dataset.s]; save(); render(); }
  else if (a === "iv-buy") { ivDraft = { s: el.dataset.s, q: el.dataset.q, p: el.dataset.p }; render(); const f = document.getElementById("iv-form"); if (f) f.scrollIntoView({ behavior: "smooth", block: "center" }); }
  else if (a === "iv-del") { ivDel = el.dataset.id; render(); }
  else if (a === "iv-del-no") { ivDel = null; render(); }
  else if (a === "iv-del-yes") { c.buys = c.buys.filter((b) => b.id !== el.dataset.id); c.del = (c.del || []).concat([el.dataset.id]); ivDel = null; save(); render(); }
});
document.addEventListener("submit", (e) => {
  const f = e.target; if (!f.matches) return;
  const val = (id) => (document.getElementById(id) || {}).value || "", digits = (s) => s.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).trim();
  const c = ivCfg();
  if (f.matches('[data-form="iv-target"]')) {
    e.preventDefault();
    const s = digits(val("iv-tcode")), pct = parseFloat(val("iv-tpct"));
    if (!/^\d{4}$/.test(s)) { toast(t("tc_bad")); return; }
    c.targets[s] = isFinite(pct) ? Math.min(100, Math.max(0, pct)) : 0;
    if (val("iv-tname").trim()) c.names[s] = val("iv-tname").trim();
    save(); render();
  } else if (f.matches('[data-form="iv-buy"]')) {
    e.preventDefault();
    const s = digits(val("iv-s")), q = parseFloat(digits(val("iv-q"))), p = parseFloat(digits(val("iv-p"))), side = val("iv-side") === "sell" ? "sell" : "buy";
    if (!/^\d{4}$/.test(s) || !(q > 0) || !(p > 0)) { toast(t("iv_need")); return; }
    if (side === "sell") { const h = ivHoldings().list.find((x) => x.s === s); if (!h || h.q < q) { toast(t("iv_too_many")); return; } }
    const fv = val("iv-f").trim(), fee = fv === "" ? Math.round(ivComm(q * p) * 100) / 100 : parseFloat(digits(fv)) || 0;
    c.buys.push({ id: "b" + Date.now().toString(36), d: val("iv-date") || today(), s, q, p, fee, side, updated: Date.now() });
    save(); toast(t("iv_saved")); render();
  }
});
