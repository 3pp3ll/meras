/* ===== مِراس: المعادن =====
   أسعار الذهب والفضة مباشرة (gold-api.com من المتصفح، تتحدث كل دقيقة والصفحة مفتوحة)،
   ومعها metals.json من مستودعك (احتياط + إغلاق أمس + تاريخ 3 شهور). الريال مربوط بالدولار على 3.75.
   محفظة المعادن في S.metals وتتزامن مع state.json، وتنجمع مع الأسهم في "خطتي الشهرية". */
Object.assign(UI, {
  tab_met: ["المعادن", "Metals"],
  mt_p: ["أسعار الذهب والفضة لحظة بلحظة بالريال والدولار، ومحفظة تسجل فيها مشترياتك وتشوف قيمتها الحين.", "Live gold and silver prices in riyals and dollars, plus a portfolio where you log what you buy and see what it's worth now."],
  mt_gold: ["الذهب", "Gold"], mt_silver: ["الفضة", "Silver"],
  mt_oz: ["دولار للأونصة", "USD per ounce"], mt_g24: ["ريال للجرام (عيار 24)", "SAR per gram (24K)"], mt_g999: ["ريال للجرام (نقاوة 999)", "SAR per gram (999)"],
  mt_day: ["اليوم", "Today"], mt_hl: ["أعلى / أدنى اليوم", "Day high / low"], mt_3m: ["آخر 3 شهور", "Last 3 months"],
  mt_live: ["مباشر", "Live"], mt_repo: ["آخر تحديث", "Last update"], mt_none: ["ما قدرت أجيب السعر. تأكد من الإنترنت واضغط تحديث.", "Couldn't get the price. Check your connection and tap refresh."],
  mt_loading: ["جاري جلب السعر…", "Fetching the price…"],
  mt_refresh: ["تحديث", "Refresh"], mt_at: ["آخر سعر: {d}", "Last price: {d}"],
  mt_karats: ["أسعار الذهب حسب العيار", "Gold by karat"], mt_k: ["عيار {k}", "{k}K"], mt_gram: ["الجرام", "Gram"],
  mt_items: ["قطع مشهورة (سعر الخام بدون مصنعية)", "Common pieces (metal value, no making charge)"],
  mt_i_bar10: ["سبيكة 10 جرام", "10 g bar"], mt_i_bar50: ["سبيكة 50 جرام", "50 g bar"], mt_i_oz: ["أونصة ذهب (31.1 جم)", "Gold ounce (31.1 g)"], mt_i_coin: ["جنيه ذهب (8 جم عيار 22)", "Gold coin (8 g, 22K)"],
  mt_i_s100: ["سبيكة فضة 100 جرام", "100 g silver bar"], mt_i_skg: ["سبيكة فضة 1 كيلو", "1 kg silver bar"], mt_i_soz: ["أونصة فضة", "Silver ounce"],
  mt_calc: ["كم يجيب مبلغي؟", "What does my money buy?"], mt_amt: ["المبلغ (ريال)", "Amount (SAR)"],
  mt_calc_r: ["{g} جرام ذهب عيار 24 · أو {s} جرام فضة", "{g} g of 24K gold · or {s} g of silver"],
  mt_ratio: ["نسبة الذهب للفضة: {r}", "Gold/silver ratio: {r}"],
  mt_ratio_p: ["كم أونصة فضة تساوي أونصة ذهب. تاريخياً تتحرك بين 50 و 90 تقريباً.", "How many ounces of silver equal one ounce of gold. Historically it has moved between roughly 50 and 90."],
  mt_port: ["محفظة المعادن", "My metals"], mt_new: ["سجّل شراء أو بيع", "Log a buy or sale"],
  mt_metal: ["المعدن", "Metal"], mt_form: ["الشكل", "Form"], mt_purity: ["العيار", "Purity"], mt_weight: ["الوزن (جرام)", "Weight (g)"], mt_paid: ["المبلغ كامل (ريال)", "Total amount (SAR)"],
  mt_paid_p: ["اللي دفعته فعلاً مع المصنعية والضريبة، أو اللي استلمته لو بيع.", "What you actually paid including making charge and VAT, or what you received for a sale."],
  mt_f_bar: ["سبيكة", "Bar"], mt_f_coin: ["جنيه / عملة", "Coin"], mt_f_jewel: ["مشغولات", "Jewellery"], mt_f_other: ["أخرى", "Other"],
  mt_note: ["ملاحظة", "Note"], mt_need: ["اكتب الوزن والمبلغ", "Enter the weight and amount"], mt_too_many: ["ما عندك هالوزن عشان تبيعه", "You don't hold that much to sell"],
  mt_pure: ["الصافي", "Pure"], mt_avg_g: ["تكلفة الجرام الصافي", "Cost per pure gram"], mt_now_g: ["الجرام الحين", "Gram now"],
  mt_empty: ["ما سجلت ولا قطعة. أول ما تشتري ذهب أو فضة سجلها هنا، وتنضاف لمحفظتك في خطتي الشهرية.", "Nothing logged yet. Log gold or silver when you buy it, and it joins your portfolio in My monthly plan."],
  mt_hist: ["السجل", "Log"], mt_vs: ["وصلت لخطتي الشهرية", "Included in My monthly plan"],
  mt_why_h: ["الذهب والفضة في محفظتك", "Gold and silver in your portfolio"],
  mt_why: [["الذهب حماية أكثر منه ربح: يرتفع غالباً لما الأسواق تخاف، وما يعطي توزيعات.", "Gold is protection more than profit: it tends to rise when markets are scared, and it pays no dividends."], ["كثير من المستثمرين يخلونه 5 إلى 10% من المحفظة بس.", "Many investors keep it to 5–10% of the portfolio."], ["الفضة أكثر تذبذب من الذهب: تطلع أسرع وتنزل أسرع.", "Silver swings more than gold: it rises faster and falls faster."], ["لو هدفك استثمار، السبائك والجنيهات أفضل من المشغولات، لأن المصنعية تروح عليك وقت البيع.", "If you're investing, bars and coins beat jewellery, because you lose the making charge when you sell."]],
  mt_tax_h: ["السعر عند المحل", "The price at the shop"],
  mt_tax: ["السعر هنا هو سعر الخام العالمي. المحل يضيف المصنعية، والمشغولات عليها ضريبة 15%. السبائك الاستثمارية عالية النقاوة لها معاملة ضريبية مختلفة، فاسأل المحل قبل الشراء. ووقت البيع المحل يشتري منك بأقل من سعر الخام بشوي.", "The price here is the global spot price. Shops add a making charge, and jewellery carries 15% VAT. High-purity investment bars are taxed differently, so ask the shop before you buy. When you sell, the shop buys a little below spot."],
  mt_src: ["المصادر: gold-api.com للسعر المباشر، وYahoo Finance للإغلاق والتاريخ، وسعر الريال الثابت 3.75 للدولار.", "Sources: gold-api.com for the live price, Yahoo Finance for closes and history, and the fixed peg of SAR 3.75 per dollar."],
  iv_metals: ["المعادن", "Metals"], iv_stocks: ["الأسهم", "Shares"], iv_split: ["توزيع محفظتك", "Portfolio split"]
});

const OZ_G = 31.1034768, USD_SAR = 3.75;
const MET_KEY = "meras.metals.px";
let MET = { gold: null, silver: null, at: null, src: null, repo: null }, metBusy = false, metTimer = null;
try { Object.assign(MET, JSON.parse(localStorage.getItem(MET_KEY) || "{}")); } catch (e) {}
const metCfg = () => { if (!S.metals) S.metals = {}; const d = { buys: [], del: [], amt: 1000 }; for (const k in d) if (S.metals[k] == null) S.metals[k] = d[k]; return S.metals; };
const metOz = (m) => { const x = MET[m]; return x && x.usd_oz > 0 ? x.usd_oz : null; };
const metGram = (m) => { const o = metOz(m); return o ? (o * USD_SAR) / OZ_G : null; };
const metPurity = (b) => (b.m === "XAG" ? (b.k || 999) / 1000 : (b.k || 24) / 24);

async function metFetchLive() {
  const one = async (sym) => {
    const ctl = typeof AbortController !== "undefined" ? new AbortController() : null, tm = ctl && setTimeout(() => ctl.abort(), 7000);
    try { const r = await fetch("https://api.gold-api.com/price/" + sym, { cache: "no-store", signal: ctl && ctl.signal }); if (!r.ok) return null; const d = await r.json(); return numOr(+d.price) ? +d.price : null; }
    catch (e) { return null; } finally { if (tm) clearTimeout(tm); }
  };
  const [g, s] = await Promise.all([one("XAU"), one("XAG")]);
  return g || s ? { g, s } : null;
}
async function metRepo() {
  if (!(typeof HOSTED !== "undefined" && HOSTED && CFG.token)) return null;
  try { const f = await readJson("metals.json"); return f && f.data ? f.data : null; } catch (e) { return null; }
}
async function loadMetals(force) {
  if (metBusy) return; metBusy = true; paintMetals(true);
  const [live, repo] = await Promise.all([metFetchLive(), force || !MET.repo ? metRepo() : Promise.resolve(null)]);
  if (repo) MET.repo = { at: repo.fetched_at, gold: repo.gold || null, silver: repo.silver || null };
  const base = (m) => (MET.repo && MET.repo[m]) || {};
  ["gold", "silver"].forEach((m) => {
    const lv = live && (m === "gold" ? live.g : live.s), b = base(m);
    if (lv) MET[m] = Object.assign({}, b, { usd_oz: lv });
    else if (b.usd_oz && (!MET[m] || MET.src !== "live")) MET[m] = Object.assign({}, b);
  });
  if (live) { MET.src = "live"; MET.at = new Date().toISOString(); }
  else if (MET.repo && MET.repo.at) { MET.src = "repo"; MET.at = MET.repo.at; }
  try { localStorage.setItem(MET_KEY, JSON.stringify(MET)); } catch (e) {}
  metBusy = false; paintMetals();
}

function spark(hist, col) {
  if (!hist || hist.length < 2) return "";
  const v = hist.map((h) => h[1]), lo = Math.min(...v), hi = Math.max(...v), W = 200, H = 44;
  const pts = v.map((y, i) => ((i / (v.length - 1)) * W).toFixed(1) + "," + (H - 3 - ((y - lo) / (hi - lo || 1)) * (H - 6)).toFixed(1)).join(" ");
  return '<svg class="mt-spark" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="none" aria-hidden="true"><polyline points="' + pts + '" fill="none" stroke="' + col + '" stroke-width="2" stroke-linejoin="round"/></svg>';
}
function metCard(m) {
  const x = MET[m], gold = m === "gold", oz = metOz(m), g = metGram(m);
  if (!oz) return '<div class="mt-card ' + m + '"><h3>' + esc(t(gold ? "mt_gold" : "mt_silver")) + '</h3><p class="muted small">' + esc(t(metBusy ? "mt_loading" : "mt_none")) + "</p></div>";
  const prev = numOr(x.prev), chg = prev ? ((oz - prev) / prev) * 100 : null, cls = chg > 0 ? "pos" : chg < 0 ? "neg" : "";
  return '<div class="mt-card ' + m + '"><div class="row" style="justify-content:space-between"><h3>' + esc(t(gold ? "mt_gold" : "mt_silver")) + ' <span class="num muted small">' + (gold ? "XAU" : "XAG") + "</span></h3>" + '<span class="row" style="gap:8px">' + (chg != null ? '<span class="num ' + cls + '">' + (chg > 0 ? "▲ +" : chg < 0 ? "▼ " : "") + fmt(chg) + "%</span>" : "") + (LIVE.history && (LIVE.history[gold ? "XAU" : "XAG"] || []).length > 1 ? '<button class="btn sm" data-act="dk-chart" data-s="' + (gold ? "XAU" : "XAG") + '" title="' + esc(t("dk_open_ch")) + '">' + ICON_CHART + " " + esc(t("dk_open_ch")) + "</button>" : "") + "</span></div>" +
    '<div class="mt-big"><b class="num">' + fmt(g, 2) + '</b><span class="small muted">' + esc(t(gold ? "mt_g24" : "mt_g999")) + "</span></div>" +
    '<div class="mt-sub"><div><span class="small muted">' + esc(t("mt_oz")) + '</span><b class="num">' + fmt(oz, 2) + "</b></div>" + (numOr(x.high) && numOr(x.low) ? '<div><span class="small muted">' + esc(t("mt_hl")) + '</span><b class="num">' + fmt(x.high, gold ? 0 : 2) + " / " + fmt(x.low, gold ? 0 : 2) + "</b></div>" : "") + "</div>" +
    (x.hist && x.hist.length > 1 ? '<div><span class="small muted">' + esc(t("mt_3m")) + "</span>" + spark(x.hist, gold ? "var(--amber)" : "var(--muted)") + "</div>" : "") + "</div>";
}

function metHoldings() {
  const c = metCfg(), h = { XAU: { pure: 0, cost: 0, gross: 0 }, XAG: { pure: 0, cost: 0, gross: 0 } };
  c.buys.slice().sort((a, b) => (a.d + a.id < b.d + b.id ? -1 : 1)).forEach((b) => {
    const x = h[b.m]; if (!x) return; const pure = b.g * metPurity(b);
    if (b.side === "sell") { const avg = x.pure ? x.cost / x.pure : 0, q = Math.min(pure, x.pure); x.cost -= avg * q; x.pure -= q; x.gross = Math.max(0, x.gross - b.g); }
    else { x.pure += pure; x.cost += b.paid; x.gross += b.g; }
  });
  return h;
}
/* تستخدمها "خطتي الشهرية" عشان تجمع المعادن مع الأسهم. */
function metSummary() {
  const h = metHoldings(), rows = [];
  [["XAU", "gold"], ["XAG", "silver"]].forEach(([k, m]) => { const x = h[k]; if (x.pure > 0.0001) { const g = metGram(m); rows.push({ k, m, pure: x.pure, gross: x.gross, cost: x.cost, val: g ? x.pure * g : x.cost, gram: g }); } });
  return rows;
}
function metMonthSpend(ym) { return metCfg().buys.filter((b) => b.side !== "sell" && b.d.slice(0, 7) === ym).reduce((a, b) => a + b.paid, 0); }

function metPricesHtml() {
  const gG = metGram("gold"), sG = metGram("silver");
  const head = '<div class="row" style="justify-content:space-between"><div class="row small">' + (MET.src ? '<span class="tag ' + (MET.src === "live" ? "up" : "amber") + '">' + esc(t(MET.src === "live" ? "mt_live" : "mt_repo")) + "</span>" : "") + (MET.at ? '<span class="muted">' + esc(t("mt_at").replace("{d}", whenText(MET.at))) + "</span>" : "") + '</div><button type="button" class="btn sm" data-act="mt-refresh"' + (metBusy ? " disabled" : "") + ">" + (metBusy ? "…" : "↻") + " " + esc(t("mt_refresh")) + "</button></div>";
  const cards = '<div class="mt-cards">' + metCard("gold") + metCard("silver") + "</div>";
  if (!gG && !sG) return head + cards;
  const kar = gG ? '<div class="panel stack"><h3>' + esc(t("mt_karats")) + '</h3><div class="mt-karats">' + [24, 22, 21, 18].map((k) => '<div><span class="small muted">' + esc(t("mt_k").replace("{k}", k)) + '</span><b class="num">' + fmt((gG * k) / 24) + "</b></div>").join("") + "</div>" +
    '<div class="tablewrap"><table><tbody>' + [["mt_i_bar10", 10 * gG], ["mt_i_bar50", 50 * gG], ["mt_i_oz", OZ_G * gG], ["mt_i_coin", ((8 * 22) / 24) * gG]].map(([k, v]) => "<tr><td>" + esc(t(k)) + '</td><td class="num" style="text-align:end">' + fmt(v, 0) + "</td></tr>").join("") +
    (sG ? [["mt_i_s100", 100 * sG], ["mt_i_skg", 1000 * sG], ["mt_i_soz", OZ_G * sG]].map(([k, v]) => "<tr><td>" + esc(t(k)) + '</td><td class="num" style="text-align:end">' + fmt(v, 0) + "</td></tr>").join("") : "") + '</tbody></table></div><p class="small muted">' + esc(t("mt_items")) + "</p></div>" : "";
  const c = metCfg(), ratio = metOz("gold") && metOz("silver") ? metOz("gold") / metOz("silver") : null;
  const calc = '<div class="panel stack"><h3>' + esc(t("mt_calc")) + '</h3><div class="field"><label for="mt-amt">' + esc(t("mt_amt")) + '</label><input id="mt-amt" class="num" type="number" min="0" step="100" value="' + c.amt + '" data-mt="amt"></div><div class="result"><div><b id="mt-calc-r" dir="auto" style="font-size:16px;font-family:var(--body);direction:inherit;unicode-bidi:plaintext">' + esc(t("mt_calc_r").replace("{g}", gG ? fmt(c.amt / gG, 2) : "–").replace("{s}", sG ? fmt(c.amt / sG, 0) : "–")) + "</b></div></div>" +
    (ratio ? '<p><b>' + esc(t("mt_ratio").replace("{r}", fmt(ratio, 1))) + '</b><br><span class="small muted">' + esc(t("mt_ratio_p")) + "</span></p>" : "") + "</div>";
  return head + cards + '<div class="grid2">' + kar + calc + "</div>";
}
function metHoldHtml() {
  const rows = metSummary();
  if (!rows.length) return '<div class="panel muted">' + esc(t("mt_empty")) + "</div>";
  let tc = 0, tv = 0;
  const cards = rows.map((r) => { tc += r.cost; tv += r.val; const pl = r.val - r.cost, plp = r.cost ? (pl / r.cost) * 100 : 0, cls = pl > 0 ? "pos" : pl < 0 ? "neg" : "";
    return '<div class="mt-hold ' + r.m + '"><h3>' + esc(t(r.k === "XAU" ? "mt_gold" : "mt_silver")) + '</h3><div class="result"><div><span>' + esc(t("mt_pure")) + "</span><b>" + fmt(r.pure, 2) + " g</b></div><div><span>" + esc(t("iv_cost")) + "</span><b>" + fmt(r.cost) + "</b></div><div><span>" + esc(t("iv_val")) + "</span><b>" + fmt(r.val) + '</b></div><div><span>' + esc(t("iv_pl")) + '</span><b class="' + cls + '">' + (pl > 0 ? "+" : "") + fmt(pl) + " (" + (plp > 0 ? "+" : "") + fmt(plp, 1) + "%)</b></div><div><span>" + esc(t("mt_avg_g")) + "</span><b>" + fmt(r.cost / r.pure) + "</b></div><div><span>" + esc(t("mt_now_g")) + "</span><b>" + (r.gram ? fmt(r.gram) : "–") + "</b></div></div></div>"; }).join("");
  return '<div class="mt-holds">' + cards + '</div><p class="small muted">✓ ' + esc(t("mt_vs")) + ' · <a href="#invest">' + esc(t("tab_inv")) + "</a></p>";
}
let mtDel = null;
function pageMetals() {
  const c = metCfg();
  setTimeout(() => { if (!MET.at || Date.now() - new Date(MET.at).getTime() > 30000) loadMetals(); }, 0);
  const sel = (id, opts, v) => '<select id="' + id + '">' + opts.map(([val, k]) => '<option value="' + val + '"' + (String(v) === String(val) ? " selected" : "") + ">" + esc(k.startsWith("#") ? k.slice(1) : t(k)) + "</option>").join("") + "</select>";
  const field = (id, k, inner) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + "</label>" + inner + "</div>";
  const form = '<form class="panel stack" data-form="mt-buy" novalidate><h3>' + esc(t("mt_new")) + '</h3><div class="form-grid">' +
    field("mt-side", "iv_side", sel("mt-side", [["buy", "iv_buy"], ["sell", "iv_sell"]], "buy")) + field("mt-m", "mt_metal", sel("mt-m", [["XAU", "mt_gold"], ["XAG", "mt_silver"]], "XAU")) +
    field("mt-form", "mt_form", sel("mt-form", [["bar", "mt_f_bar"], ["coin", "mt_f_coin"], ["jewel", "mt_f_jewel"], ["other", "mt_f_other"]], "bar")) +
    field("mt-k", "mt_purity", '<select id="mt-k"><optgroup label="' + esc(t("mt_gold")) + '"><option value="24">24</option><option value="22">22</option><option value="21">21</option><option value="18">18</option></optgroup><optgroup label="' + esc(t("mt_silver")) + '"><option value="999">999</option><option value="925">925</option></optgroup></select>') +
    field("mt-g", "mt_weight", '<input id="mt-g" class="num" type="number" min="0" step="0.01">') + field("mt-paid", "mt_paid", '<input id="mt-paid" class="num" type="number" min="0" step="0.01">') +
    field("mt-d", "iv_date", '<input id="mt-d" type="date" value="' + today() + '">') + field("mt-note", "mt_note", '<input id="mt-note">') +
    '</div><p class="small muted">' + esc(t("mt_paid_p")) + '</p><div><button class="btn primary" type="submit">' + esc(t("iv_save")) + "</button></div></form>";
  const fl = { bar: "mt_f_bar", coin: "mt_f_coin", jewel: "mt_f_jewel", other: "mt_f_other" };
  const hist = c.buys.length ? '<div class="stack"><h3>' + esc(t("mt_hist")) + '</h3><div class="tablewrap"><table><thead><tr>' + ["iv_date", "iv_side", "mt_metal", "mt_form", "mt_purity", "mt_weight", "mt_paid", "mt_note"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + "<th></th></tr></thead><tbody>" +
    c.buys.slice().sort((a, b) => (a.d + a.id < b.d + b.id ? 1 : -1)).map((b) => '<tr><td class="num">' + esc(b.d) + '</td><td><span class="tag ' + (b.side === "sell" ? "down" : "up") + '">' + esc(t(b.side === "sell" ? "iv_sell" : "iv_buy")) + "</span></td><td>" + esc(t(b.m === "XAG" ? "mt_silver" : "mt_gold")) + "</td><td>" + esc(t(fl[b.form] || "mt_f_other")) + '</td><td class="num">' + esc(String(b.k)) + '</td><td class="num">' + fmt(b.g) + '</td><td class="num">' + fmt(b.paid) + '</td><td class="note">' + esc(b.note || "") + "</td><td>" +
      (mtDel === b.id ? '<div class="row" style="flex-wrap:nowrap"><button class="btn sm danger" data-act="mt-del-yes" data-id="' + b.id + '">' + esc(t("iv_sure")) + '</button><button class="btn sm" data-act="mt-del-no">' + esc(t("j_cancel")) + "</button></div>" : '<button class="btn sm ghost" data-act="mt-del" data-id="' + b.id + '">' + esc(t("iv_del")) + "</button>") + "</td></tr>").join("") + "</tbody></table></div></div>" : "";
  return svcShell("metals", '<p class="muted" style="max-width:64ch">' + esc(t("mt_p")) + '</p><div class="stack" id="mt-px">' + metPricesHtml() + "</div>" +
    '<div class="stack"><h2 style="font-size:24px">' + esc(t("mt_port")) + '</h2><div id="mt-hold">' + metHoldHtml() + "</div></div>" + form + hist +
    '<div class="grid2"><div class="panel stack"><h3>' + esc(t("mt_why_h")) + "</h3><ul>" + UI.mt_why.map((r) => "<li>" + esc(L(r)) + "</li>").join("") + '</ul></div><div class="panel stack"><h3>' + esc(t("mt_tax_h")) + "</h3><p>" + esc(t("mt_tax")) + "</p></div></div>" +
    '<p class="small muted">' + esc(t("mt_src")) + " " + esc(t("disclaimer")) + "</p>");
}
/* نحدّث الأسعار والمحفظة بدون ما نعيد رسم النموذج، عشان ما يضيع اللي تكتبه. */
function paintMetals() {
  if (route() === "metals") { const a = document.getElementById("mt-px"), b = document.getElementById("mt-hold"); if (a) a.innerHTML = metPricesHtml(); if (b) b.innerHTML = metHoldHtml(); }
  else if (route() === "invest" && !metBusy && !(document.activeElement && /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))) render();
}
function metTick() {
  clearInterval(metTimer); metTimer = null;
  if (["metals", "invest"].includes(route())) metTimer = setInterval(() => { if (document.visibilityState !== "hidden" && route() === "metals") loadMetals(); }, 60000);
}
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="mt-"]'); if (!el) return;
  const c = metCfg(), a = el.dataset.act;
  if (a === "mt-refresh") loadMetals(true);
  else if (a === "mt-del") { mtDel = el.dataset.id; render(); }
  else if (a === "mt-del-no") { mtDel = null; render(); }
  else if (a === "mt-del-yes") { c.buys = c.buys.filter((b) => b.id !== el.dataset.id); c.del = (c.del || []).concat([el.dataset.id]); mtDel = null; save(); render(); }
});
document.addEventListener("input", (e) => {
  if (!e.target.dataset || e.target.dataset.mt !== "amt") return;
  const v = parseFloat(e.target.value), c = metCfg(); if (!(v >= 0)) return; c.amt = v; save();
  const r = document.getElementById("mt-calc-r"), gG = metGram("gold"), sG = metGram("silver");
  if (r) r.textContent = t("mt_calc_r").replace("{g}", gG ? fmt(v / gG, 2) : "–").replace("{s}", sG ? fmt(v / sG, 0) : "–");
});
document.addEventListener("change", (e) => {
  if (e.target.id !== "mt-m") return;
  const k = document.getElementById("mt-k"); if (k) k.value = e.target.value === "XAG" ? "999" : "24";
});
document.addEventListener("submit", (e) => {
  if (!e.target.matches || !e.target.matches('[data-form="mt-buy"]')) return;
  e.preventDefault();
  const val = (id) => (document.getElementById(id) || {}).value || "", n = (id) => parseFloat(val(id).replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d)));
  const c = metCfg(), m = val("mt-m") === "XAG" ? "XAG" : "XAU", g = n("mt-g"), paid = n("mt-paid"), side = val("mt-side") === "sell" ? "sell" : "buy";
  let k = parseInt(val("mt-k"), 10); if (m === "XAG" && k < 100) k = 999; if (m === "XAU" && k > 24) k = 24;
  if (!(g > 0) || !(paid > 0)) { toast(t("mt_need")); return; }
  const b = { id: "m" + Date.now().toString(36), d: val("mt-d") || today(), m, form: val("mt-form") || "bar", k, g, paid, side, note: val("mt-note").trim(), updated: Date.now() };
  if (side === "sell" && metHoldings()[m].pure + 1e-6 < g * metPurity(b)) { toast(t("mt_too_many")); return; }
  c.buys.push(b); save(); toast(t("iv_saved")); render();
});
window.addEventListener("hashchange", () => { metTick(); if (route() === "metals") loadMetals(); else if (route() === "invest" && !MET.at) loadMetals(); });
setTimeout(() => { metTick(); if (route() === "invest" && !MET.at) loadMetals(); }, 0);
