/* ===== مِراس: مكتبي =====
   قسم خاص بصاحب المنصة داخل لوحة المالك: محفظتي (صفقاتك الحقيقية) وشارتاتي (تحليلاتك المحفوظة).
   البيانات في desk.json داخل المستودع الخاص، ولا تنعرض لأي أحد. */
Object.assign(UI, {
  dk_h: ["مكتبي", "My desk"], dk_p: ["محفظتك الحقيقية والأسهم اللي حللتها. لك أنت بس.", "Your real portfolio and the shares you have analysed. For you only."],
  dk_t_pf: ["محفظتي", "My portfolio"], dk_t_ch: ["شارتاتي", "My charts"], dk_back: ["لوحة المالك", "Owner dashboard"],
  dk_cost: ["التكلفة", "Cost"], dk_value: ["القيمة الحالية", "Market value"], dk_unreal: ["ربح/خسارة مفتوحة", "Open P/L"], dk_real: ["ربح/خسارة محققة", "Realised P/L"],
  dk_hold_h: ["الأسهم اللي عندك", "Your holdings"], dk_qty: ["الكمية", "Qty"], dk_avg: ["متوسط التكلفة", "Avg cost"], dk_px: ["السعر", "Price"], dk_pl: ["الربح/الخسارة", "P/L"], dk_w: ["الوزن", "Weight"],
  dk_px_live: ["حي", "Live"], dk_px_close: ["آخر إقفال", "Last close"], dk_px_trade: ["سعر آخر صفقة", "Last trade price"],
  dk_px_tip: ["السهم اللي سعره من آخر صفقة ما ينسحب سعره. أضفه لقائمة الشارت من لوحة المالك عشان يصير حي.", "A share priced from its last trade is not being fetched. Add it to the chart list in the owner dashboard to make it live."],
  dk_trades_h: ["سجل العمليات", "Transactions"], dk_new_trade: ["أضف عملية", "Add a transaction"], dk_side: ["النوع", "Type"], dk_buy: ["شراء", "Buy"], dk_sell: ["بيع", "Sell"],
  dk_date: ["التاريخ", "Date"], dk_fee: ["العمولة (ريال)", "Commission (SAR)"], dk_note: ["ملاحظة", "Note"], dk_sym: ["رمز السهم", "Share code"], dk_total: ["الإجمالي", "Total"],
  dk_feepct: ["عمولة السعودي % (الراجحي)", "Saudi commission % (Al Rajhi)"], dk_feevat: ["ضريبة على العمولة %", "VAT on commission %"], dk_feemin: ["أقل عمولة (ريال)", "Minimum (SAR)"], dk_feeus: ["عمولة الأمريكي لكل عملية $ (دراية جلوبل لايت: 0)", "US fee per trade $ (Derayah)"], dk_feepct_tip: ["السعودي من محفظة الراجحي: 0.155% من قيمة الصفقة وعليها ضريبة 15%. والأمريكي من دراية جلوبل لايت: بدون عمولة في أوقات التداول الرسمية (وفي جلوبل العادي 2.25$). تنحسب تلقائياً وتقدر تعدلها في كل عملية.", "Commission is filled in from this rate and can be edited on each transaction. Use the rate shown in your broker app."],
  dk_none_tr: ["ما سجلت عمليات للحين. أول ما تشتري من دراية سجّل العملية هنا.", "No transactions yet. When you buy in your broker app, record it here."],
  dk_bad: ["تأكد من الرمز والكمية والسعر", "Check the code, quantity and price"], dk_oversell: ["الكمية أكثر من اللي عندك في هذا السهم ({n})", "That is more than you hold in this share ({n})"],
  dk_saved: ["انحفظ", "Saved"], dk_del: ["احذف", "Delete"], dk_sure: ["متأكد؟", "Sure?"], dk_edit: ["عدّل", "Edit"], dk_save: ["احفظ", "Save"], dk_cancel: ["إلغاء", "Cancel"],
  dk_xlsx: ["صدّر Excel", "Export to Excel"], dk_open_ch: ["الشارت", "Chart"], dk_loading: ["جارٍ فتح مكتبي…", "Opening your desk…"],
  dk_new_an: ["تحليل جديد", "New analysis"], dk_an_sym: ["السهم", "Share"], dk_an_reason: ["وش شفت في الشارت؟", "What did you see on the chart?"], dk_an_plan: ["خطة الدخول", "Entry plan"],
  dk_entry: ["سعر الدخول", "Entry"], dk_stop: ["الوقف", "Stop"], dk_target: ["الهدف", "Target"], dk_status: ["الحالة", "Status"],
  dk_s_watch: ["أراقب", "Watching"], dk_s_in: ["دخلت", "Entered"], dk_s_out: ["طلعت", "Exited"], dk_s_cancel: ["ألغيت", "Cancelled"],
  dk_draws: ["رسوماتك الحالية على شارت هذا السهم تنحفظ مع التحليل ({n}).", "Your current drawings on this share's chart are saved with the analysis ({n})."],
  dk_no_hist: ["ما فيه أسهم بشموع حقيقية للحين. استورد التاريخ من صفحة الشارت أول.", "No shares with real candles yet. Import history on the chart page first."],
  dk_none_an: ["ما حفظت تحليلات للحين. ارسم على الشارت، ثم ارجع هنا واحفظ التحليل.", "No analyses yet. Draw on the chart, then come back here and save the analysis."],
  dk_since: ["من يوم التحليل", "Since the analysis"], dk_at: ["السعر وقت التحليل", "Price at analysis"], dk_now: ["الحين", "Now"],
  dk_hit_t: ["وصل الهدف {d}", "Target hit {d}"], dk_hit_s: ["ضرب الوقف {d}", "Stop hit {d}"], dk_hit_none: ["ما وصل الهدف ولا الوقف", "Neither target nor stop hit"],
  dk_rr: ["العائد إلى المخاطرة", "Reward to risk"], dk_rec: ["سجّل صفقة", "Record a trade"], dk_redraw: ["خذ رسوماتي الحالية", "Use my current drawings"],
  dk_f_all: ["الكل", "All"], dk_conflict: ["الملف تغير من جهاز ثاني. حدّث وجرب مرة ثانية.", "The file changed on another device. Refresh and try again."],
  ow_desk_btn: ["مكتبي", "My desk"], dk_sar: ["بالريال", "In SAR"], dk_usd: ["بالدولار", "In USD"]
});

let DK = { loaded: false, loading: false, data: null, sha: undefined }, dkTab = "pf", dkTrade = null, dkAn = null, dkDel = null, dkFilter = "all";
const dkBlank = () => ({ version: 1, cfg: { v: 3, feePct: 0.155, feeMin: 0, feeVat: 15, feeUS: 0 }, trades: [], charts: [] });

async function loadDesk(force) {
  if (!HOSTED || !CFG.token || DK.loading || (DK.loaded && !force)) return;
  DK.loading = true;
  await loadUS();
  try { const f = await readJson("desk.json"); DK.data = (f && f.data) || dkBlank(); DK.sha = f ? f.sha : undefined; } catch (e) { DK.data = DK.data || dkBlank(); toast(errText(e)); }
  ["trades", "charts"].forEach((k) => { if (!Array.isArray(DK.data[k])) DK.data[k] = []; }); DK.data.cfg = Object.assign({ feePct: 0.155, feeMin: 0, feeVat: 15, feeUS: 2.25 }, DK.data.cfg); if (DK.data.cfg.v !== 2 && DK.data.cfg.v !== 3) Object.assign(DK.data.cfg, { v: 2, feePct: 0.155, feeMin: 0, feeVat: 15 }); if (DK.data.cfg.v === 2) Object.assign(DK.data.cfg, { v: 3, feeUS: 0 });
  DK.loading = false; DK.loaded = true; if (route() === "desk") render();
}
async function saveDesk() {
  DK.data.updatedAt = new Date().toISOString();
  try { const r = await gh("desk.json", "PUT", { message: "desk", content: b64e(JSON.stringify(DK.data, null, 1) + "\n"), sha: DK.sha }); DK.sha = r && r.content ? r.content.sha : DK.sha; toast(t("dk_saved")); return true; }
  catch (e) { toast(e.code === "409" || e.code === "422" ? t("dk_conflict") : errText(e)); return false; }
}
window.addEventListener("hashchange", () => { if (route() === "desk") loadDesk(); });

/* ----- prices & holdings ----- */
const dkName = (s) => { if (typeof usNameOf === "function" && usNameOf(s)) return usNameOf(s); const n = typeof owName === "function" ? owName(s) : ""; if (n) return n; const q = quoteOf(s); return q && q.name ? (Array.isArray(q.name) ? L(q.name) : q.name) : ""; };
function dkPrice(sym, fallback) {
  const q = quoteOf(sym); if (q && q.live && isFinite(q.price)) return { p: q.price, src: "live" };
  const h = chartData(sym); if (h.length) return { p: h[h.length - 1].c, src: "close" };
  return { p: fallback, src: "trade" };
}
function dkHoldings(cur) {
  const by = {}, tr = DK.data.trades.filter((x) => !cur || curOf(x.sym) === cur).sort((a, b) => (a.date === b.date ? (a.at || 0) - (b.at || 0) : a.date < b.date ? -1 : 1));
  let realised = 0;
  tr.forEach((x) => {
    const h = by[x.sym] || (by[x.sym] = { sym: x.sym, qty: 0, cost: 0, realised: 0, last: x.price });
    const fee = Number(x.fee) || 0; h.last = x.price;
    if (x.side === "buy") { h.cost += x.qty * x.price + fee; h.qty += x.qty; }
    else if (h.qty > 0) { const sq = Math.min(x.qty, h.qty), avg = h.cost / h.qty, r = sq * x.price - fee - avg * sq; h.realised += r; realised += r; h.cost -= avg * sq; h.qty -= sq; }
  });
  const open = Object.values(by).filter((h) => h.qty > 1e-9).map((h) => { const px = dkPrice(h.sym, h.last), value = h.qty * px.p; return Object.assign(h, { avg: h.cost / h.qty, px, value, pl: value - h.cost }); });
  const cost = open.reduce((a, h) => a + h.cost, 0), value = open.reduce((a, h) => a + h.value, 0);
  return { open, cost, value, unreal: value - cost, realised, by };
}
const dkSign = (n, d = 2, suf) => '<span class="dk-sg ' + (n > 0 ? "pos" : n < 0 ? "neg" : "") + '" dir="ltr">' + (n > 0 ? "+" : "") + fmt(n, d) + (suf || "") + "</span>";

function dkTradeForm() {
  const x = dkTrade || {}, f = (id, k, v, type, extra) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" type="' + (type || "text") + '" value="' + esc(v == null ? "" : v) + '"' + (extra || "") + "></div>";
  return '<form class="panel stack" data-form="dk-trade" data-id="' + esc(x.id || "") + '" novalidate><h3>' + esc(t(x.id ? "dk_edit" : "dk_new_trade")) + '</h3><div class="form-grid">' +
    '<div class="field"><label for="dt-side">' + esc(t("dk_side")) + '</label><select id="dt-side"><option value="buy"' + (x.side !== "sell" ? " selected" : "") + ">" + esc(t("dk_buy")) + '</option><option value="sell"' + (x.side === "sell" ? " selected" : "") + ">" + esc(t("dk_sell")) + "</option></select></div>" +
    f("dt-sym", "dk_sym", x.sym, "text", ' maxlength="6" dir="ltr" autocomplete="off" autocapitalize="characters" placeholder="1120 / TSLA" data-dk="fee"') + f("dt-date", "dk_date", x.date || today(), "date") +
    f("dt-qty", "dk_qty", x.qty, "number", ' min="0" step="any" inputmode="decimal" data-dk="fee"') + f("dt-price", "dk_px", x.price, "number", ' min="0" step="0.01" inputmode="decimal" data-dk="fee"') + f("dt-fee", "dk_fee", x.fee, "number", ' min="0" step="0.01" inputmode="decimal"') +
    '</div><div class="field"><label for="dt-note">' + esc(t("dk_note")) + '</label><input id="dt-note" value="' + esc(x.note || "") + '"></div><div class="row"><button class="btn primary" type="submit">' + esc(t("dk_save")) + '</button><button class="btn ghost" type="button" data-act="dk-tcancel">' + esc(t("dk_cancel")) + "</button></div></form>";
}
function dkPfCur(cur) {
  const H = dkHoldings(cur);
  const stats = '<div class="stats" style="grid-template-columns:repeat(4,minmax(0,1fr))"><div><span>' + esc(t("dk_cost")) + "</span><b>" + money(H.cost, cur) + "</b></div><div><span>" + esc(t("dk_value")) + "</span><b>" + money(H.value, cur) + "</b></div><div><span>" + esc(t("dk_unreal")) + "</span><b>" + dkSign(H.unreal) + (H.cost ? ' <span class="small">' + dkSign((H.unreal / H.cost) * 100, 1, "%") + "</span>" : "") + "</b></div><div><span>" + esc(t("dk_real")) + "</span><b>" + dkSign(H.realised) + "</b></div></div>";
  const COLORS = ["var(--amber)", "#5b8def", "#3fb68b", "#c770c9", "#e07a5f", "#7aa6b8", "#d4a72c", "#8d99ae"];
  const split = H.value > 0 ? '<div class="iv-split" aria-hidden="true">' + H.open.map((h, i) => '<i style="width:' + ((h.value / H.value) * 100).toFixed(2) + "%;background:" + COLORS[i % COLORS.length] + '"></i>').join("") + "</div>" : "";
  const pxTag = (px) => '<span class="tag ' + (px.src === "live" ? "up" : px.src === "trade" ? "amber" : "") + '">' + esc(t(px.src === "live" ? "dk_px_live" : px.src === "close" ? "dk_px_close" : "dk_px_trade")) + "</span>";
  const rows = H.open.map((h, i) => '<tr><td><span class="iv-dot" style="background:' + COLORS[i % COLORS.length] + '"></span> <span class="num">' + esc(h.sym) + "</span> " + esc(dkName(h.sym)) + '</td><td class="num">' + (h.qty % 1 ? fmt(h.qty, 4) : int(h.qty)) + '</td><td class="num">' + money(h.avg, cur) + '</td><td class="num">' + money(h.px.p, cur) + " " + pxTag(h.px) + '</td><td class="num">' + money(h.value, cur) + "</td><td>" + dkSign(h.pl) + ' <span class="small">' + dkSign((h.pl / h.cost) * 100, 1) + '%</span></td><td class="num">' + (H.value ? fmt((h.value / H.value) * 100, 1) + "%" : "–") + "</td><td>" + (chartData(h.sym).length ? '<button class="btn sm ghost" data-act="dk-chart" data-s="' + esc(h.sym) + '">' + esc(t("dk_open_ch")) + "</button>" : "") + "</td></tr>").join("");
  const holds = H.open.length ? owPanel(t("dk_hold_h") + " · " + t(cur === "USD" ? "dk_usd" : "dk_sar"), split + '<div class="tablewrap"><table><thead><tr><th>' + esc(t("ow_sym")) + "</th><th>" + esc(t("dk_qty")) + "</th><th>" + esc(t("dk_avg")) + "</th><th>" + esc(t("dk_px")) + "</th><th>" + esc(t("dk_value")) + "</th><th>" + esc(t("dk_pl")) + "</th><th>" + esc(t("dk_w")) + "</th><th></th></tr></thead><tbody>" + rows + "</tbody></table></div>" + (H.open.some((h) => h.px.src === "trade") ? '<p class="small muted">' + esc(t("dk_px_tip")) + "</p>" : "")) : "";
  return (cur === "USD" ? '<h3 class="dk-cur">' + esc(t("dk_usd")) + "</h3>" : (DK.data.trades.some((x) => curOf(x.sym) === "USD") ? '<h3 class="dk-cur">' + esc(t("dk_sar")) + "</h3>" : "")) + stats + holds;
}
function dkPortfolio() {
  const trs = DK.data.trades.slice().sort((a, b) => (a.date === b.date ? (b.at || 0) - (a.at || 0) : a.date < b.date ? 1 : -1));
  const trows = trs.map((x) => '<tr><td class="num">' + esc(x.date) + "</td><td>" + owTag(x.side === "buy" ? "up" : "down", x.side === "buy" ? "dk_buy" : "dk_sell") + '</td><td><span class="num">' + esc(x.sym) + "</span> " + esc(dkName(x.sym)) + '</td><td class="num">' + (x.qty % 1 ? fmt(x.qty, 4) : int(x.qty)) + '</td><td class="num">' + money(x.price, curOf(x.sym)) + '</td><td class="num">' + money(Number(x.fee) || 0, curOf(x.sym)) + '</td><td class="num">' + money(x.qty * x.price + (x.side === "buy" ? 1 : -1) * (Number(x.fee) || 0), curOf(x.sym)) + '</td><td class="small">' + esc(x.note || "") + '</td><td class="row" style="gap:4px;flex-wrap:nowrap"><button class="btn sm ghost" data-act="dk-tedit" data-id="' + esc(x.id) + '">' + esc(t("dk_edit")) + '</button><button class="btn sm ' + (dkDel === x.id ? "danger" : "ghost") + '" data-act="dk-tdel" data-id="' + esc(x.id) + '">' + esc(t(dkDel === x.id ? "dk_sure" : "dk_del")) + "</button></td></tr>").join("");
  const trades = owPanel(t("dk_trades_h"), (trs.length ? '<div class="tablewrap"><table><thead><tr><th>' + esc(t("dk_date")) + "</th><th>" + esc(t("dk_side")) + "</th><th>" + esc(t("ow_sym")) + "</th><th>" + esc(t("dk_qty")) + "</th><th>" + esc(t("dk_px")) + "</th><th>" + esc(t("dk_fee")) + "</th><th>" + esc(t("dk_total")) + "</th><th>" + esc(t("dk_note")) + "</th><th></th></tr></thead><tbody>" + trows + "</tbody></table></div>" : '<p class="muted" style="margin:0">' + esc(t("dk_none_tr")) + "</p>") +
    '<form class="row" data-form="dk-cfg" novalidate style="align-items:flex-end"><div class="field" style="width:200px"><label for="dk-feepct">' + esc(t("dk_feepct")) + '</label><input id="dk-feepct" type="number" min="0" step="0.001" inputmode="decimal" value="' + esc(DK.data.cfg.feePct) + '"></div><div class="field" style="width:150px"><label for="dk-feemin">' + esc(t("dk_feemin")) + '</label><input id="dk-feemin" type="number" min="0" step="1" inputmode="decimal" value="' + esc(DK.data.cfg.feeMin) + '"></div><div class="field" style="width:150px"><label for="dk-feevat">' + esc(t("dk_feevat")) + '</label><input id="dk-feevat" type="number" min="0" step="1" inputmode="decimal" value="' + esc(DK.data.cfg.feeVat) + '"></div><div class="field" style="width:170px"><label for="dk-feeus">' + esc(t("dk_feeus")) + '</label><input id="dk-feeus" type="number" min="0" step="0.01" inputmode="decimal" value="' + esc(DK.data.cfg.feeUS) + '"></div><button class="btn sm" type="submit">' + esc(t("dk_save")) + '</button><p class="small muted" style="flex:1;min-width:200px;margin:0">' + esc(t("dk_feepct_tip")) + "</p></form>",
    trs.length ? '<button class="btn sm" data-act="dk-xlsx">⤓ ' + esc(t("dk_xlsx")) + "</button>" : "");
  const curs = ["SAR", "USD"].filter((c) => c === "SAR" || DK.data.trades.some((x) => curOf(x.sym) === c));
  return (dkTrade ? dkTradeForm() : '<div><button class="btn primary" data-act="dk-tnew">+ ' + esc(t("dk_new_trade")) + "</button></div>") + curs.map(dkPfCur).join("") + trades;
}

/* ----- my charts ----- */
function dkOutcome(a, hist) {
  const after = hist.filter((r) => r.d > a.date), long = !(a.stop && a.target && a.target < a.stop);
  for (const r of after) {
    const hitS = a.stop && (long ? r.l <= a.stop : r.h >= a.stop), hitT = a.target && (long ? r.h >= a.target : r.l <= a.target);
    if (hitS) return { k: "s", d: r.d }; if (hitT) return { k: "t", d: r.d };
  }
  return null;
}
function dkMini(a, hist) {
  const ai = hist.findIndex((r) => r.d >= a.date), s = Math.max(0, (ai < 0 ? hist.length : ai) - 45), win = hist.slice(s, s + 130);
  if (win.length < 2) return "";
  const W = 640, H = 220, pad = 8, levels = [a.entry, a.stop, a.target].filter((v) => v > 0);
  const gi = (d) => { if (!d) return null; const k = hist.findIndex((r) => r.d === d); return k < 0 ? null : k - s; };
  const draws = (a.draws || []).map((d) => Object.assign({}, d, { j1: gi(d.d1), j2: gi(d.d2) }));
  draws.forEach((d) => { if (d.t === "h") levels.push(d.p); });
  let lo = Math.min(...win.map((r) => r.l), ...levels), hi = Math.max(...win.map((r) => r.h), ...levels); const sp = hi - lo || 1; lo -= sp * 0.04; hi += sp * 0.04;
  const xw = (W - pad * 2) / win.length, X = (i) => pad + i * xw + xw / 2, Y = (p) => pad + (hi - p) / (hi - lo) * (H - pad * 2);
  let g = "";
  win.forEach((r, i) => { const up = r.c >= r.o, col = up ? "var(--up)" : "var(--down)"; g += '<line x1="' + X(i) + '" x2="' + X(i) + '" y1="' + Y(r.h) + '" y2="' + Y(r.l) + '" stroke="' + col + '" stroke-width="1"/><rect x="' + (X(i) - xw * 0.32) + '" y="' + Y(Math.max(r.o, r.c)) + '" width="' + Math.max(1, xw * 0.64) + '" height="' + Math.max(1, Math.abs(Y(r.o) - Y(r.c))) + '" fill="' + col + '"/>'; });
  draws.forEach((d) => {
    if (d.t === "h") g += '<line x1="' + pad + '" x2="' + (W - pad) + '" y1="' + Y(d.p) + '" y2="' + Y(d.p) + '" stroke="var(--muted)" stroke-width="1" stroke-dasharray="2 3"/>';
    else if (d.j1 != null && d.j2 != null && d.j2 !== d.j1 && d.t === "t") { const m = (d.p2 - d.p1) / (d.j2 - d.j1), ex = win.length - 1; g += '<line x1="' + X(d.j1) + '" y1="' + Y(d.p1) + '" x2="' + X(ex) + '" y2="' + Y(d.p1 + m * (ex - d.j1)) + '" stroke="#5b8def" stroke-width="1.4"/>'; }
    else if (d.j1 != null && d.t === "f") [0, 0.382, 0.5, 0.618, 1].forEach((r) => { const p = d.p2 - (d.p2 - d.p1) * r; g += '<line x1="' + Math.max(pad, X(Math.min(d.j1, d.j2 == null ? d.j1 : d.j2))) + '" x2="' + (W - pad) + '" y1="' + Y(p) + '" y2="' + Y(p) + '" stroke="#c770c9" stroke-width="0.9" opacity=".75"/>'; });
  });
  const lvl = (p, col, lab) => p > 0 ? '<line x1="' + pad + '" x2="' + (W - pad) + '" y1="' + Y(p) + '" y2="' + Y(p) + '" stroke="' + col + '" stroke-width="1.6" stroke-dasharray="6 4"/>' : "";
  g += lvl(a.entry, "var(--amber-ink)", t("dk_entry")) + lvl(a.stop, "var(--down)", t("dk_stop")) + lvl(a.target, "var(--up)", t("dk_target"));
  const mi = win.findIndex((r) => r.d >= a.date); if (mi >= 0) g += '<line x1="' + X(mi) + '" x2="' + X(mi) + '" y1="' + pad + '" y2="' + (H - pad) + '" stroke="var(--ink)" stroke-width="1" stroke-dasharray="3 3" opacity=".55"/>';
  const leg = [[a.entry, "dk-l-e", "dk_entry"], [a.stop, "dk-l-s", "dk_stop"], [a.target, "dk-l-t", "dk_target"]].filter((x) => x[0] > 0).map(([p, c, k]) => '<span class="' + c + '"><i></i>' + esc(t(k)) + ' <span class="num">' + fmt(p) + "</span></span>").join("");
  return '<svg class="dk-mini" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="none" role="img" aria-label="' + esc(a.sym) + '" dir="ltr">' + g + "</svg>" + (leg ? '<div class="dk-leg small">' + leg + "</div>" : "");
}
const dkCopyDraws = (sym) => { const h = chartData(sym); return (S.drawings && S.drawings[sym] || []).map((d) => { const o = Object.assign({}, d); if (d.i1 != null && h[d.i1]) o.d1 = h[d.i1].d; if (d.i2 != null && h[d.i2]) o.d2 = h[d.i2].d; delete o.i1; delete o.i2; return o; }); };
function dkAnForm() {
  const a = dkAn || {}, syms = Object.keys(LIVE.history || {}).filter((k) => chartData(k).length > 1);
  if (!syms.length) return '<div class="notice">' + esc(t("dk_no_hist")) + "</div>";
  const sym = a.sym || (S.chart && syms.includes(S.chart.sym) ? S.chart.sym : syms[0]), n = (S.drawings && S.drawings[sym] || []).length;
  const f = (id, k, v) => '<div class="field"><label for="' + id + '">' + esc(t(k)) + '</label><input id="' + id + '" type="number" min="0" step="0.01" inputmode="decimal" value="' + esc(v == null ? "" : v) + '"></div>';
  const st = [["watch", "dk_s_watch"], ["in", "dk_s_in"], ["out", "dk_s_out"], ["cancel", "dk_s_cancel"]];
  return '<form class="panel stack" data-form="dk-an" data-id="' + esc(a.id || "") + '" novalidate><h3>' + esc(t(a.id ? "dk_edit" : "dk_new_an")) + '</h3><div class="form-grid"><div class="field"><label for="da-sym">' + esc(t("dk_an_sym")) + '</label><select id="da-sym"' + (a.id ? " disabled" : ' data-dk="an-sym"') + ">" + syms.map((s) => '<option value="' + esc(s) + '"' + (s === sym ? " selected" : "") + ">" + esc(s + " " + dkName(s)) + "</option>").join("") + "</select></div>" +
    '<div class="field"><label for="da-status">' + esc(t("dk_status")) + '</label><select id="da-status">' + st.map(([v, k]) => '<option value="' + v + '"' + ((a.status || "watch") === v ? " selected" : "") + ">" + esc(t(k)) + "</option>").join("") + "</select></div>" +
    f("da-entry", "dk_entry", a.entry) + f("da-stop", "dk_stop", a.stop) + f("da-target", "dk_target", a.target) + "</div>" +
    '<div class="field"><label for="da-reason">' + esc(t("dk_an_reason")) + '</label><textarea id="da-reason" rows="3">' + esc(a.reason || "") + '</textarea></div><div class="field"><label for="da-plan">' + esc(t("dk_an_plan")) + '</label><textarea id="da-plan" rows="2">' + esc(a.plan || "") + "</textarea></div>" +
    (a.id ? '<label class="row small" style="gap:6px"><input type="checkbox" id="da-redraw"> ' + esc(t("dk_redraw")) + " (" + n + ")</label>" : '<p class="small muted" style="margin:0" id="da-draws">' + esc(t("dk_draws").replace("{n}", n)) + "</p>") +
    '<div class="row"><button class="btn primary" type="submit">' + esc(t("dk_save")) + '</button><button class="btn ghost" type="button" data-act="dk-acancel">' + esc(t("dk_cancel")) + "</button></div></form>";
}
function dkCharts() {
  const st = { watch: ["", "dk_s_watch"], in: ["amber", "dk_s_in"], out: ["up", "dk_s_out"], cancel: ["", "dk_s_cancel"] };
  const list = DK.data.charts.filter((a) => dkFilter === "all" || a.status === dkFilter).slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : (b.at || 0) - (a.at || 0)));
  const filt = '<div class="row" style="gap:6px">' + [["all", "dk_f_all"], ["watch", "dk_s_watch"], ["in", "dk_s_in"], ["out", "dk_s_out"], ["cancel", "dk_s_cancel"]].map(([v, k]) => '<button type="button" class="btn sm tgl' + (dkFilter === v ? " on" : "") + '" data-act="dk-filter" data-f="' + v + '" aria-pressed="' + (dkFilter === v) + '">' + esc(t(k)) + "</button>").join("") + "</div>";
  const card = (a) => {
    if (dkAn && dkAn.id === a.id) return dkAnForm();
    const hist = chartData(a.sym), last = hist.length ? hist[hist.length - 1].c : null, ch = last && a.price ? ((last - a.price) / a.price) * 100 : null, out = dkOutcome(a, hist);
    const rr = a.entry && a.stop && a.target && Math.abs(a.entry - a.stop) > 0 ? Math.abs(a.target - a.entry) / Math.abs(a.entry - a.stop) : null;
    const res = !a.stop && !a.target ? "" : out ? '<span class="tag ' + (out.k === "t" ? "up" : "down") + '">' + esc(t(out.k === "t" ? "dk_hit_t" : "dk_hit_s").replace("{d}", out.d)) + "</span>" : '<span class="tag">' + esc(t("dk_hit_none")) + "</span>";
    return '<div class="panel stack dk-card"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><h3><span class="num">' + esc(a.sym) + "</span> " + esc(dkName(a.sym)) + '</h3><div class="small muted num">' + esc(a.date) + '</div></div><div class="row" style="gap:6px">' + owTag(st[a.status || "watch"][0], st[a.status || "watch"][1]) + res + "</div></div>" + dkMini(a, hist) +
      '<div class="result dk-res"><div><span>' + esc(t("dk_at")) + "</span><b>" + (a.price ? fmt(a.price) : "–") + "</b></div><div><span>" + esc(t("dk_now")) + "</span><b>" + (last ? fmt(last) : "–") + "</b></div><div><span>" + esc(t("dk_since")) + "</span><b>" + (ch == null ? "–" : dkSign(ch, 1, "%")) + "</b></div>" + (rr ? "<div><span>" + esc(t("dk_rr")) + "</span><b>" + fmt(rr, 1) + "</b></div>" : "") + "</div>" +
      (a.reason ? '<p style="margin:0;white-space:pre-wrap">' + esc(a.reason) + "</p>" : "") + (a.plan ? '<p class="small muted" style="margin:0;white-space:pre-wrap"><b>' + esc(t("dk_an_plan")) + ":</b> " + esc(a.plan) + "</p>" : "") +
      '<div class="row"><button class="btn sm" data-act="dk-chart" data-s="' + esc(a.sym) + '">' + esc(t("dk_open_ch")) + '</button><button class="btn sm" data-act="dk-rec" data-id="' + esc(a.id) + '">' + esc(t("dk_rec")) + '</button><button class="btn sm ghost" data-act="dk-aedit" data-id="' + esc(a.id) + '">' + esc(t("dk_edit")) + '</button><button class="btn sm ' + (dkDel === a.id ? "danger" : "ghost") + '" data-act="dk-adel" data-id="' + esc(a.id) + '">' + esc(t(dkDel === a.id ? "dk_sure" : "dk_del")) + "</button></div></div>";
  };
  return (dkAn && !dkAn.id ? dkAnForm() : '<div><button class="btn primary" data-act="dk-anew">+ ' + esc(t("dk_new_an")) + "</button></div>") + (DK.data.charts.length ? filt : "") +
    (list.length ? '<div class="dk-grid">' + list.map(card).join("") + "</div>" : '<div class="notice">' + esc(t("dk_none_an")) + "</div>");
}

function pageDesk() {
  const head = '<div class="wrap"><div class="page-head"><div class="crumbs"><a href="#owner">' + esc(t("dk_back")) + "</a></div><h1>" + esc(t("dk_h")) + "</h1><p>" + esc(t("dk_p")) + "</p></div>";
  if (!HOSTED) return head + '<div class="notice" style="margin-block:18px">' + esc(t("ow_preview")) + "</div></div>";
  if (!CFG.token) return head + '<div class="stack" style="padding-block:18px"><div class="notice">' + esc(t("ow_need")) + "</div></div></div>";
  if (!DK.loaded) { loadDesk(); return head + '<div class="notice" style="margin-block:18px">' + esc(t("dk_loading")) + "</div></div>"; }
  const tabs = [["pf", "dk_t_pf"], ["ch", "dk_t_ch"], ["sc", "sc_t"], ["us", "us_t"], ["op", "op_t"]];
  return head + '<div class="tabs" role="tablist">' + tabs.map(([k, l]) => '<a href="#desk" role="tab" data-act="dk-tab" data-tab="' + k + '"' + (dkTab === k ? ' aria-current="page" aria-selected="true"' : "") + ">" + esc(t(l)) + "</a>").join("") + '</div><div class="stack" style="padding-block:18px 40px">' + ({ pf: dkPortfolio, ch: dkCharts, sc: dkScreener, us: dkUS, op: dkOptions }[dkTab] || dkPortfolio)() + "</div></div>";
}

function dkExport() {
  const H = dkHoldings(), ar = S.lang === "ar";
  const s1 = [[t("dk_date"), t("dk_side"), t("ow_sym"), t("j_name"), t("dk_qty"), t("dk_px"), t("dk_fee"), t("dk_total"), t("dk_note")]].concat(DK.data.trades.slice().sort((a, b) => (a.date < b.date ? -1 : 1)).map((x) => [x.date, t(x.side === "buy" ? "dk_buy" : "dk_sell"), x.sym, dkName(x.sym), x.qty, x.price, Number(x.fee) || 0, +(x.qty * x.price + (x.side === "buy" ? 1 : -1) * (Number(x.fee) || 0)).toFixed(2), x.note || ""]));
  const s2 = [[t("ow_sym"), t("j_name"), t("dk_qty"), t("dk_avg"), t("dk_px"), t("dk_value"), t("dk_pl"), "%"]].concat(H.open.map((h) => [h.sym, dkName(h.sym), h.qty, +h.avg.toFixed(3), h.px.p, +h.value.toFixed(2), +h.pl.toFixed(2), +((h.pl / h.cost) * 100).toFixed(2)]));
  const wb = XLSX.utils.book_new(); if (ar) wb.Workbook = { Views: [{ RTL: true }] };
  [[s2, t("dk_hold_h")], [s1, t("dk_trades_h")]].forEach(([rows, name]) => { const ws = XLSX.utils.aoa_to_sheet(rows); ws["!cols"] = rows[0].map((_, i) => ({ wch: i === 3 || i === 8 ? 24 : 13 })); if (ar) ws["!views"] = [{ RTL: true }]; XLSX.utils.book_append_sheet(wb, ws, name.slice(0, 31)); });
  saveFile("meras-portfolio-" + today() + ".xlsx", new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
}

document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="dk-"]'); if (!el) return;
  const a = el.dataset.act, id = el.dataset.id;
  if (a === "dk-tab") { e.preventDefault(); dkTab = el.dataset.tab; dkTrade = dkAn = dkDel = null; render(); }
  else if (a === "dk-tnew") { dkTrade = {}; render(); }
  else if (a === "dk-tcancel") { dkTrade = null; render(); }
  else if (a === "dk-tedit") { dkTrade = Object.assign({}, DK.data.trades.find((x) => x.id === id)); render(); window.scrollTo(0, 0); }
  else if (a === "dk-tdel") { if (dkDel !== id) { dkDel = id; render(); return; } DK.data.trades = DK.data.trades.filter((x) => x.id !== id); dkDel = null; render(); await saveDesk(); render(); }
  else if (a === "dk-xlsx") dkExport();
  else if (a === "dk-chart") { S.chart.sym = el.dataset.s; save(); location.hash = "chart"; }
  else if (a === "dk-anew") { dkAn = {}; render(); }
  else if (a === "dk-acancel") { dkAn = null; render(); }
  else if (a === "dk-aedit") { dkAn = Object.assign({}, DK.data.charts.find((x) => x.id === id)); render(); }
  else if (a === "dk-adel") { if (dkDel !== id) { dkDel = id; render(); return; } DK.data.charts = DK.data.charts.filter((x) => x.id !== id); dkDel = null; render(); await saveDesk(); render(); }
  else if (a === "dk-filter") { dkFilter = el.dataset.f; render(); }
  else if (a === "dk-rec") { const an = DK.data.charts.find((x) => x.id === id); if (!an) return; const h = chartData(an.sym); dkTab = "pf"; dkAn = null; dkTrade = { sym: an.sym, side: an.status === "in" ? "sell" : "buy", price: an.entry || (h.length ? h[h.length - 1].c : ""), date: today(), note: "" }; render(); window.scrollTo(0, 0); }
});
document.addEventListener("input", (e) => {
  const el = e.target; if (!el.dataset || el.dataset.dk !== "fee") return;
  const q = parseFloat(document.getElementById("dt-qty").value), p = parseFloat(document.getElementById("dt-price").value), fee = document.getElementById("dt-fee");
  const sv = (document.getElementById("dt-sym").value || "").trim();
  if (!fee || !DK.data || !(q > 0 && p > 0)) return; const c = DK.data.cfg;
  if (/^\d{4}$/.test(sv)) { if (c.feePct > 0) fee.value = (Math.max(q * p * c.feePct / 100, c.feeMin || 0) * (1 + (c.feeVat || 0) / 100)).toFixed(2); }
  else if (sv && c.feeUS > 0) fee.value = Number(c.feeUS).toFixed(2);
});
document.addEventListener("change", (e) => {
  if (e.target.dataset && e.target.dataset.dk === "an-sym") { const s = e.target.value, n = (S.drawings && S.drawings[s] || []).length, p = document.getElementById("da-draws"); if (p) p.textContent = t("dk_draws").replace("{n}", n); }
});
document.addEventListener("submit", async (e) => {
  const form = e.target.closest && e.target.closest('[data-form^="dk-"]'); if (!form) return;
  e.preventDefault();
  const v = (id) => { const x = document.getElementById(id); return x ? x.value.trim() : ""; }, num = (id) => { const n = parseFloat(v(id)); return isFinite(n) && n > 0 ? n : null; };
  const kind = form.dataset.form;
  if (kind === "dk-cfg") { const g = (id) => { const n = parseFloat(v(id)); return isFinite(n) && n >= 0 ? n : 0; }; Object.assign(DK.data.cfg, { feePct: g("dk-feepct"), feeMin: g("dk-feemin"), feeVat: g("dk-feevat"), feeUS: g("dk-feeus"), touched: true }); await saveDesk(); render(); }
  else if (kind === "dk-trade") {
    const sym = v("dt-sym").toUpperCase().replace(/[^0-9A-Z.]/g, ""), qty = num("dt-qty"), price = num("dt-price"), side = v("dt-side"), id = form.dataset.id;
    if (!/^(\d{4}|[A-Z]{1,5}(\.[A-Z])?)$/.test(sym) || !qty || !price) { toast(t("dk_bad")); return; }
    if (side === "sell") { const others = DK.data.trades.filter((x) => x.id !== id), keep = DK.data.trades; DK.data.trades = others; const held = (dkHoldings().by[sym] || { qty: 0 }).qty; DK.data.trades = keep; if (qty > held + 1e-9) { toast(t("dk_oversell").replace("{n}", int(held))); return; } }
    const rec = { sym, side, qty, price, fee: parseFloat(v("dt-fee")) || 0, date: v("dt-date") || today(), note: v("dt-note") };
    if (id) Object.assign(DK.data.trades.find((x) => x.id === id), rec); else DK.data.trades.push(Object.assign({ id: "t" + Date.now().toString(36), at: Date.now() }, rec));
    dkTrade = null; render(); await saveDesk(); render();
  } else if (kind === "dk-an") {
    const id = form.dataset.id, cur = id && DK.data.charts.find((x) => x.id === id), sym = cur ? cur.sym : v("da-sym"), h = chartData(sym);
    const rec = { status: v("da-status") || "watch", entry: num("da-entry"), stop: num("da-stop"), target: num("da-target"), reason: v("da-reason"), plan: v("da-plan") };
    if (cur) { Object.assign(cur, rec); const rd = document.getElementById("da-redraw"); if (rd && rd.checked) cur.draws = dkCopyDraws(sym); }
    else DK.data.charts.push(Object.assign({ id: "a" + Date.now().toString(36), at: Date.now(), sym, date: h.length ? h[h.length - 1].d : today(), price: h.length ? h[h.length - 1].c : null, draws: dkCopyDraws(sym), ind: S.chart ? JSON.parse(JSON.stringify(S.chart)) : null }, rec));
    dkAn = null; render(); await saveDesk(); render();
  }
});
