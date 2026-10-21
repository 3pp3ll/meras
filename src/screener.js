/* ===== مِراس: الباحث (داخل مكتبي، للمالك فقط) =====
   يمر على الأسهم اللي نسحب شموعها (السعودية في قائمة الشارت، والأمريكية في السوق الأمريكي)،
   ويرتبها كمرشحين للتحليل حسب: الشرعية، الميزانية، الاتجاه، السيولة، والحركة.
   مرشحين للتحليل، مو توصية شراء. */
Object.assign(UI, {
  sc_t: ["الباحث", "Screener"], sc_p: ["يمر على الأسهم اللي نسحب شموعها ويرتبها حسب شروطك. هذي قائمة مرشحين تحللهم بنفسك، مو توصية شراء.", "Scans the shares whose candles we fetch and ranks them by your rules. A shortlist to analyse yourself, not a buy recommendation."],
  sc_mkt: ["السوق", "Market"], sc_all: ["الكل", "All"], sc_sa: ["السعودي", "Saudi"], sc_us: ["الأمريكي", "US"],
  sc_bsa: ["ميزانية السعودي (ريال)", "Saudi budget (SAR)"], sc_bus: ["ميزانية الأمريكي ($)", "US budget ($)"], sc_pmax: ["أعلى نسبة تطهير %", "Max purification %"],
  sc_boards: ["السعودي: متوافق عند", "Saudi: compliant with"], sc_b3: ["الهيئات الثلاث", "All three boards"], sc_b2: ["هيئتين أو أكثر", "Two boards or more"], sc_b1: ["هيئة وحدة على الأقل", "At least one board"],
  sc_frac: ["الأمريكي: شراء كسور الأسهم (دراية جلوبل تسمح)، فالسعر ما يستبعد السهم", "US: fractional shares (Derayah Global allows them), so price does not exclude a share"],
  sc_fee: ["العمولة {f}$ للعملية: على مبلغ {b}$ تكون {p}% بالدخول ومثلها بالخروج، يعني السهم لازم يطلع {r}% بس عشان تتعادل.", "A {f}$ fee per trade is {p}% of {b}$ each way, so the share must rise {r}% just to break even."],
  sc_unknown: ["أظهر الأسهم الأمريكية اللي لسا ما انحسبت شرعيتها", "Show US shares whose screening is not computed yet"],
  sc_run: ["ابحث", "Search"], sc_none: ["ما فيه سهم يطابق شروطك الحين. خفف الشروط أو انتظر شموع أكثر.", "No share matches your rules now. Relax the rules or wait for more candles."],
  sc_found: ["{n} مرشح من {m} سهم", "{n} candidates out of {m} shares"], sc_out: ["انستبعد {n}: {why}", "{n} excluded: {why}"],
  sc_x_sharia: ["الشرعية", "sharia"], sc_x_budget: ["الميزانية", "budget"], sc_x_hist: ["تاريخ قصير", "short history"], sc_x_purify: ["نسبة التطهير", "purification"], sc_x_unknown: ["شرعية غير محسوبة", "screening not computed"],
  sc_score: ["النقاط", "Score"], sc_c_trend: ["فوق متوسط 20 الصاعد", "Above a rising 20 average"], sc_c_vwap: ["فوق VWAP", "Above VWAP"], sc_c_rsi: ["RSI بين 50 و70", "RSI 50 to 70"], sc_c_rvol: ["حجم نسبي 1.2 أو أكثر", "Relative volume 1.2+"], sc_c_cmf: ["تدفق أموال موجب", "Positive money flow"], sc_c_atr: ["حركة يومية 1.5% إلى 6%", "Daily move 1.5% to 6%"],
  sc_entry: ["دخول", "Entry"], sc_stop: ["وقف", "Stop"], sc_target: ["هدف", "Target"], sc_qty: ["كمية بميزانيتك", "Qty for your budget"], sc_risk: ["تخسر لو ضرب الوقف", "Loss if stopped"],
  sc_plan: ["الوقف 1.5 × متوسط المدى تحت الإغلاق، والهدف ضعف المسافة (عائد إلى مخاطرة 2).", "Stop 1.5 × average range below the close, target twice the distance (reward to risk 2)."],
  sc_save: ["احفظ في شارتاتي", "Save to my charts"], sc_purify_na: ["التطهير غير متوفر", "Purification n/a"], sc_note: ["الأسهم السعودية: قوائم الهيئات ما فيها نسب التطهير، فما ينطبق عليها شرط التطهير إلا لو سجلت نسبتها من مصدرك.", "Saudi shares: board lists have no purification ratios, so that rule only applies if you recorded one."],
  sc_reason: ["من الباحث: {list}", "From the screener: {list}"]
});

let SC = { mkt: "all", bsa: 1125, bus: 300, pmax: 2, boards: 2, unknown: false, frac: true };
try { Object.assign(SC, JSON.parse(localStorage.getItem("meras.sc") || "{}")); } catch (e) {}
const scSave = () => { try { localStorage.setItem("meras.sc", JSON.stringify(SC)); } catch (e) {} };

function scAtr(d, i, n) { if (i < n) return null; let x = 0; for (let k = i - n + 1; k <= i; k++) x += Math.max(d[k].h - d[k].l, Math.abs(d[k].h - d[k - 1].c), Math.abs(d[k].l - d[k - 1].c)); return x / n; }
function scUniverse() {
  const out = [];
  Object.keys(LIVE.history || {}).forEach((s) => {
    if (/^\d{4}$/.test(s)) out.push({ s, m: "SA" });
    else if (typeof US !== "undefined" && US && US.symbols && US.symbols[s] && US.symbols[s].k === "stock") out.push({ s, m: "US" });
  });
  return out;
}
function scSharia(x) {
  const own = typeof SHOWN !== "undefined" && SHOWN && SHOWN[x.s];
  if (x.m === "SA") {
    const row = typeof SHSA !== "undefined" && SHSA && SHSA.rows ? SHSA.rows.find((r) => r.s === x.s) : null;
    const ticks = row ? ["rajhi", "osaimi", "bilad"].filter((b) => row.b[b]).length : 0;
    const ok = own ? own.status === "ok" : ticks >= SC.boards;
    return { ok, known: !!row || !!own, purify: own && own.purify != null ? own.purify : null, label: own ? t("sh_" + own.status) : row ? (ticks === 3 ? t("sh_all") : ticks ? t("sh_part").replace("{n}", ticks) : t("sh_none")) : t("sh_unlisted") };
  }
  const est = typeof SHUS !== "undefined" && SHUS && SHUS.stocks && SHUS.stocks[x.s];
  if (own) return { ok: own.status === "ok", known: true, purify: own.purify, label: t("sh_" + own.status) };
  if (est && !est.err && est.status) return { ok: est.status === "ok", known: true, purify: est.purify, label: t("sh_" + est.status) };
  return { ok: false, known: false, purify: null, label: t("sc_x_unknown") };
}
function scRun() {
  const uni = scUniverse().filter((x) => SC.mkt === "all" || x.m.toLowerCase() === SC.mkt);
  const res = [], out = { sharia: 0, budget: 0, hist: 0, purify: 0, unknown: 0 };
  uni.forEach((x) => {
    const d = chartData(x.s); if (d.length < 50) { out.hist++; return; }
    const sh = scSharia(x);
    if (!sh.known && x.m === "US" && !SC.unknown) { out.unknown++; return; }
    if (sh.known && !sh.ok) { out.sharia++; return; }
    if (sh.purify != null && sh.purify > SC.pmax) { out.purify++; return; }
    const i = d.length - 1, c = d[i].c, budget = x.m === "SA" ? SC.bsa : SC.bus;
    const frac = x.m === "US" && SC.frac;
    if (!frac && c > budget) { out.budget++; return; }
    const cl = d.map((r) => r.c), m20 = sma(cl, 20), rs = rsi(cl, 14), vw = vwapRoll(d, 20), rv = rvolS(d, 20), cf = cmfS(d, 20), atr = scAtr(d, i, 14), atrp = atr ? (atr / c) * 100 : null;
    const checks = [
      ["trend", m20[i] != null && m20[i - 5] != null && c > m20[i] && m20[i] > m20[i - 5]],
      ["vwap", vw[i] != null && c > vw[i]],
      ["rsi", rs[i] != null && rs[i] >= 50 && rs[i] <= 70],
      ["rvol", rv[i] != null && rv[i] >= 1.2],
      ["cmf", cf[i] != null && cf[i] > 0],
      ["atr", atrp != null && atrp >= 1.5 && atrp <= 6]
    ];
    const score = checks.filter((k) => k[1]).length, stop = atr ? c - 1.5 * atr : null, target = stop ? c + 2 * (c - stop) : null, qty = frac ? Math.floor((budget / c) * 10000) / 10000 : Math.floor(budget / c);
    res.push({ x, sh, c, d: d[i].d, checks, score, rsi: rs[i], rvol: rv[i], atrp, stop, target, qty, risk: stop ? qty * (c - stop) : null });
  });
  res.sort((a, b) => b.score - a.score || (b.rvol || 0) - (a.rvol || 0));
  return { res, out, total: uni.length };
}
function scFeeNote() {
  const f = DK && DK.data && DK.data.cfg ? Number(DK.data.cfg.feeUS) || 0 : 2.25, b = SC.bus || 0; if (!f || !b || SC.mkt === "sa") return "";
  const p = (f / b) * 100; return '<p class="small notice" style="margin:0">' + esc(t("sc_fee").replace("{f}", fmt(f, 2)).replace("{b}", int(b)).replace("{p}", fmt(p, 1)).replace("{r}", fmt(p * 2, 1))) + "</p>";
}
function dkScreener() {
  if (typeof shTried !== "undefined" && !shTried && typeof loadSharia === "function") loadSharia();
  const opt = (k, v, l) => '<option value="' + v + '"' + (String(SC[k]) === String(v) ? " selected" : "") + ">" + esc(t(l)) + "</option>";
  const num = (k, l, step) => '<div class="field"><label for="sc-' + k + '">' + esc(t(l)) + '</label><input id="sc-' + k + '" data-sc="' + k + '" type="number" min="0" step="' + step + '" inputmode="decimal" value="' + esc(SC[k]) + '"></div>';
  const form = '<div class="panel stack"><p class="muted" style="margin:0">' + esc(t("sc_p")) + '</p><div class="form-grid"><div class="field"><label for="sc-mkt">' + esc(t("sc_mkt")) + '</label><select id="sc-mkt" data-sc="mkt">' + opt("mkt", "all", "sc_all") + opt("mkt", "sa", "sc_sa") + opt("mkt", "us", "sc_us") + "</select></div>" +
    num("bsa", "sc_bsa", 25) + num("bus", "sc_bus", 10) + num("pmax", "sc_pmax", 0.1) + '<div class="field"><label for="sc-boards">' + esc(t("sc_boards")) + '</label><select id="sc-boards" data-sc="boards">' + opt("boards", 3, "sc_b3") + opt("boards", 2, "sc_b2") + opt("boards", 1, "sc_b1") + "</select></div></div>" +
    '<label class="row small" style="gap:6px"><input type="checkbox" data-sc="frac"' + (SC.frac ? " checked" : "") + "> " + esc(t("sc_frac")) + '</label><label class="row small" style="gap:6px"><input type="checkbox" data-sc="unknown"' + (SC.unknown ? " checked" : "") + "> " + esc(t("sc_unknown")) + '</label><p class="small muted" style="margin:0">' + esc(t("sc_note")) + "</p></div>";
  return form + '<div id="sc-out">' + scResults() + "</div>";
}
function scResults() {
  const r = scRun(), why = Object.entries(r.out).filter(([, n]) => n).map(([k, n]) => t("sc_x_" + k) + " " + n).join("، ");
  const cur = (x, v, dd) => (v == null ? "–" : (x.m === "US" ? "$" : "") + fmt(v, dd == null ? 2 : dd));
  const card = (o, k) => '<div class="panel stack sc-card"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><h3><span class="num">' + esc(o.x.s) + "</span> " + esc(dkName(o.x.s)) + '</h3><span class="small muted">' + esc(t(o.x.m === "SA" ? "sh_sa" : "sh_us")) + ' · <span class="num">' + esc(o.d) + '</span></span></div><div class="row" style="gap:6px"><span class="tag ' + (o.score >= 5 ? "up" : o.score >= 3 ? "amber" : "") + '">' + esc(t("sc_score")) + " " + o.score + "/6</span><span class=\"tag" + (o.sh.ok ? " up" : "") + '">' + esc(o.sh.label) + "</span>" + (o.sh.purify != null ? '<span class="tag">' + esc(t("sh_purify")) + " " + fmt(o.sh.purify, 2) + "%</span>" : "") + "</div></div>" +
    '<div class="sc-checks">' + o.checks.map(([c, ok]) => '<span class="sc-ck' + (ok ? " ok" : "") + '">' + (ok ? "✓" : "✗") + " " + esc(t("sc_c_" + c)) + "</span>").join("") + "</div>" +
    '<div class="result"><div><span>' + esc(t("sc_entry")) + "</span><b>" + cur(o.x, o.c) + "</b></div><div><span>" + esc(t("sc_stop")) + "</span><b>" + cur(o.x, o.stop) + "</b></div><div><span>" + esc(t("sc_target")) + "</span><b>" + cur(o.x, o.target) + "</b></div><div><span>" + esc(t("sc_qty")) + "</span><b>" + (o.qty % 1 ? fmt(o.qty, 4) : int(o.qty)) + "</b></div><div><span>" + esc(t("sc_risk")) + "</span><b>" + cur(o.x, o.risk) + "</b></div></div>" +
    '<p class="small muted" style="margin:0">RSI ' + (o.rsi != null ? fmt(o.rsi, 1) : "–") + " · " + esc(t("ch_rvol")) + " " + (o.rvol != null ? fmt(o.rvol, 2) + "×" : "–") + " · ATR " + (o.atrp != null ? fmt(o.atrp, 1) + "%" : "–") + " · " + esc(t("sc_plan")) + "</p>" +
    '<div class="row"><button class="btn sm" data-act="dk-chart" data-s="' + esc(o.x.s) + '">' + esc(t("dk_open_ch")) + '</button><button class="btn sm primary" data-act="sc-save" data-k="' + k + '">' + esc(t("sc_save")) + "</button></div></div>";
  SC_LAST = r.res;
  return scFeeNote() + '<p class="small muted" style="margin:0">' + esc(t("sc_found").replace("{n}", r.res.length).replace("{m}", r.total)) + (why ? " · " + esc(t("sc_out").replace("{n}", Object.values(r.out).reduce((a, b) => a + b, 0)).replace("{why}", why)) : "") + "</p>" +
    (r.res.length ? '<div class="stack">' + r.res.map(card).join("") + "</div>" : '<div class="notice">' + esc(t("sc_none")) + "</div>");
}
let SC_LAST = [];
document.addEventListener("input", (e) => {
  const k = e.target.dataset && e.target.dataset.sc; if (!k) return;
  SC[k] = e.target.type === "checkbox" ? e.target.checked : e.target.tagName === "SELECT" ? (k === "boards" ? Number(e.target.value) : e.target.value) : Math.max(0, parseFloat(e.target.value) || 0);
  scSave(); const o = document.getElementById("sc-out"); if (o) o.innerHTML = scResults();
});
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest('[data-act="sc-save"]'); if (!b) return;
  const o = SC_LAST[Number(b.dataset.k)]; if (!o) return;
  const r2 = (v) => (v == null ? null : Math.round(v * 100) / 100);
  dkTab = "ch"; dkAn = { sym: o.x.s, entry: r2(o.c), stop: r2(o.stop), target: r2(o.target), reason: t("sc_reason").replace("{list}", o.checks.filter((c) => c[1]).map((c) => t("sc_c_" + c[0])).join("، ")) };
  render(); window.scrollTo(0, 0);
});
