/* ===== مِراس: مختبر الاستراتيجيات =====
   قواعد شراء فقط. الإشارة تنحسب على إغلاق اليوم، والتنفيذ على افتتاح اليوم اللي بعده،
   عشان الاختبار ما يستخدم معلومة ما كانت متاحة وقت القرار. */
Object.assign(UI, {
  nav_lab: ["المختبر", "Lab"],
  lb_h: ["مختبر الاستراتيجيات", "Strategy lab"],
  lb_p: ["ركّب قواعد دخول وخروج، واختبرها على شموع السهم اللي عندك، وشوف وش كان صار لو مشيت عليها.", "Build entry and exit rules, test them on the candles you have, and see what would have happened had you followed them."],
  lb_rules: ["القواعد", "Rules"], lb_sym: ["السهم", "Share"],
  lb_entry: ["متى أدخل", "When to enter"], lb_exit: ["متى أطلع", "When to exit"], lb_risk: ["الحماية والتكلفة", "Protection and cost"],
  lb_filter: ["بشرط إن السعر فوق متوسط 50 (مع الاتجاه فقط)", "Only when price is above the 50 average (with the trend only)"],
  en_ma: ["متوسط قصير يقطع متوسط طويل للأعلى", "Short average crosses above long average"],
  en_pma: ["السعر يقطع متوسط للأعلى", "Price crosses above an average"],
  en_rsi: ["RSI يرجع فوق 30 بعد ما نزل تحتها", "RSI climbs back above 30 after dipping below"],
  en_bb: ["السعر يرجع داخل بولنجر بعد ما طلع تحت الخط السفلي", "Price returns inside Bollinger after closing below the lower band"],
  en_macd: ["الماكد يقطع خط الإشارة للأعلى", "MACD crosses above its signal line"],
  en_brk: ["الإغلاق يخترق أعلى سعر في آخر عدد أيام", "Close breaks above the highest high of recent days"],
  ex_ma: ["المتوسط القصير يقطع الطويل للأسفل", "Short average crosses below long average"],
  ex_pma: ["السعر يكسر متوسط للأسفل", "Price crosses below an average"],
  ex_rsi: ["RSI يتجاوز 70", "RSI rises above 70"],
  ex_macd: ["الماكد يقطع خط الإشارة للأسفل", "MACD crosses below its signal line"],
  ex_none: ["بدون إشارة، الوقف والهدف والمدة فقط", "No signal, only stop, target and time"],
  lb_short: ["القصير", "Short"], lb_long: ["الطويل", "Long"], lb_per: ["الفترة", "Period"], lb_days: ["عدد الأيام", "Days"],
  lb_stop: ["وقف الخسارة %", "Stop-loss %"], lb_target: ["الهدف %", "Target %"], lb_hold: ["أقصى مدة (أيام)", "Max hold (days)"],
  lb_fee: ["العمولة لكل عملية %", "Commission per side %"], lb_cap: ["رأس المال", "Capital"], lb_zero: ["0 = بدون", "0 = off"],
  lb_fee_note: ["العمولة الافتراضية تقديرية. عدّلها حسب وسيطك.", "The default commission is an estimate. Adjust it to your broker's."],
  lb_result: ["النتيجة", "Result"],
  lb_summary: ["على {n} شمعة من {a} إلى {b}: {t} صفقة، رابح منها {w}. الاستراتيجية {s}، والشراء والاحتفاظ {bh}.", "Over {n} candles from {a} to {b}: {t} trades, {w} winners. The strategy {s}; buy and hold {bh}."],
  lb_made: ["ربحت {p}%", "made {p}%"], lb_lost: ["خسرت {p}%", "lost {p}%"],
  st_trades: ["الصفقات", "Trades"], st_win: ["نسبة الرابحة", "Win rate"], st_ret: ["عائد الاستراتيجية", "Strategy return"], st_bh: ["الشراء والاحتفاظ", "Buy and hold"],
  st_dd: ["أكبر هبوط", "Max drawdown"], st_pf: ["معامل الربح", "Profit factor"], st_avgw: ["متوسط الرابحة", "Avg win"], st_avgl: ["متوسط الخاسرة", "Avg loss"], st_exp: ["وقت داخل السوق", "Time in market"],
  lb_equity: ["رأس المال مع الوقت", "Equity over time"], lb_eq_s: ["الاستراتيجية", "Strategy"], lb_eq_b: ["الشراء والاحتفاظ", "Buy and hold"],
  lb_trades_h: ["الصفقات على الشارت", "Trades on the chart"], lb_tbl: ["كل الصفقات", "All trades"],
  lb_in: ["دخول", "In"], lb_out: ["خروج", "Out"], lb_why: ["سبب الخروج", "Exit reason"], lb_ret: ["العائد", "Return"], lb_daysin: ["أيام", "Days"],
  why_stop: ["وقف الخسارة", "Stop-loss"], why_target: ["الهدف", "Target"], why_sig: ["إشارة الخروج", "Exit signal"], why_time: ["انتهت المدة", "Time limit"], why_end: ["نهاية البيانات (مفتوحة)", "End of data (open)"],
  lb_none: ["ما تحققت ولا إشارة دخول في هذي الشموع. جرّب قاعدة ثانية أو فترة أقصر.", "No entry signal occurred in these candles. Try another rule or a shorter period."],
  lb_need: ["السهم عنده {n} شمعة فقط. الاختبار يحتاج 60 على الأقل عشان يعني شي. استورد تاريخ أطول أو جرّب على سهم تدريبي.", "This share has only {n} candles. A test needs at least 60 to mean anything. Import a longer history or try a practice share."],
  lb_warn_few: ["{t} صفقات عدد قليل. النتيجة ممكن تكون حظ، وتحتاج 30 صفقة أو أكثر عشان تثق فيها.", "{t} trades is few. The result may be luck; you need 30 or more trades to trust it."],
  lb_warn_bh: ["الشراء والاحتفاظ تفوّق على استراتيجيتك. القواعد هنا كلفتك أكثر مما حمتك.", "Buy and hold beat your strategy. The rules cost you more than they protected you."],
  lb_warn_practice: ["هذي بيانات تدريبية مولّدة. أي نتيجة عليها تمرين على الأداة، مو دليل على الاستراتيجية.", "This is generated practice data. Any result on it is practice with the tool, not evidence for the strategy."],
  lb_warn_fit: ["لا تعدّل الأرقام لين تطلع النتيجة حلوة. هذا اسمه مطابقة الماضي، والاستراتيجية اللي تنصنع كذا تفشل غالباً على البيانات الجديدة. اختبرها على سهم ثاني.", "Do not tweak the numbers until the result looks good. That is curve fitting, and a strategy made that way usually fails on new data. Test it on another share."],
  lb_lesson: ["اقرأ درس: من فكرة إلى استراتيجية", "Read the lesson: from idea to strategy"]
});

const labDefaults = () => ({ sym: "TRN-A", entry: "ma", ea: 5, eb: 20, ep: 20, filter: false, exit: "ma", xp: 20, stop: 5, target: 0, hold: 0, fee: 0.15, cap: 10000 });
function labCfg() { if (!S.lab) S.lab = labDefaults(); const d = labDefaults(); for (const k in d) if (S.lab[k] == null) S.lab[k] = d[k]; return S.lab; }

/* the engine: pure function of candles + config, returns trades, equity curves and stats */
function backtest(data, c) {
  const n = data.length, cl = data.map((r) => r.c), op = data.map((r) => r.o), fee = Math.max(0, +c.fee || 0) / 100;
  const ma = sma(cl, Math.max(2, c.ea)), mb = sma(cl, Math.max(2, c.eb)), mp = sma(cl, Math.max(2, c.ep)), mx = sma(cl, Math.max(2, c.xp)), m50 = sma(cl, 50);
  const r14 = rsi(cl, 14), bb = bollinger(cl, 20, 2), md = macd(cl, 12, 26, 9);
  const up = (a, b, i) => a[i] != null && b[i] != null && a[i - 1] != null && b[i - 1] != null && a[i] > b[i] && a[i - 1] <= b[i - 1];
  const down = (a, b, i) => a[i] != null && b[i] != null && a[i - 1] != null && b[i - 1] != null && a[i] < b[i] && a[i - 1] >= b[i - 1];
  const entry = (i) => {
    if (i < 1) return false;
    let ok = false;
    if (c.entry === "ma") ok = up(ma, mb, i);
    else if (c.entry === "pma") ok = up(cl, mp, i);
    else if (c.entry === "rsi") ok = r14[i] != null && r14[i - 1] != null && r14[i] >= 30 && r14[i - 1] < 30;
    else if (c.entry === "bb") ok = bb.lo[i] != null && bb.lo[i - 1] != null && cl[i - 1] < bb.lo[i - 1] && cl[i] >= bb.lo[i];
    else if (c.entry === "macd") ok = up(md.line, md.sig, i);
    else if (c.entry === "brk") { const N = Math.max(2, c.ep); if (i >= N) { let hi = -Infinity; for (let j = i - N; j < i; j++) hi = Math.max(hi, data[j].h); ok = cl[i] > hi; } }
    if (ok && c.filter) ok = m50[i] != null && cl[i] > m50[i];
    return ok;
  };
  const exitSig = (i) => {
    if (c.exit === "ma") return down(ma, mb, i);
    if (c.exit === "pma") return down(cl, mx, i);
    if (c.exit === "rsi") return r14[i] != null && r14[i - 1] != null && r14[i] > 70 && r14[i - 1] <= 70;
    if (c.exit === "macd") return down(md.line, md.sig, i);
    return false;
  };
  let cash = +c.cap || 10000, sh = 0, pos = null, pendIn = false, pendOut = false, inDays = 0;
  const trades = [], eq = [], start = cash;
  const close = (i, px, why) => {
    const gross = sh * px, cost = gross * fee; cash += gross - cost;
    const pl = gross - cost - pos.cost; trades.push({ ei: pos.i, ed: data[pos.i].d, ep: pos.px, xi: i, xd: data[i].d, xp: px, why, pl, ret: (pl / pos.cost) * 100, days: i - pos.i + 1 });
    sh = 0; pos = null;
  };
  for (let i = 0; i < n; i++) {
    const r = data[i];
    if (pos && pendOut) { close(i, op[i], "why_sig"); pendOut = false; }
    if (!pos && pendIn) {
      const px = op[i], qty = Math.floor(cash / (px * (1 + fee)));
      if (qty > 0) { const cost = qty * px * (1 + fee); cash -= cost; sh = qty; pos = { i, px, cost, stop: c.stop > 0 ? px * (1 - c.stop / 100) : null, tgt: c.target > 0 ? px * (1 + c.target / 100) : null }; }
      pendIn = false;
    }
    if (pos) {
      /* stop before target when both are touched on the same day: the cautious assumption */
      if (pos.stop != null && r.l <= pos.stop) close(i, Math.min(r.o, pos.stop), "why_stop");
      else if (pos.tgt != null && r.h >= pos.tgt) close(i, Math.max(r.o, pos.tgt), "why_target");
      else if (c.hold > 0 && i - pos.i + 1 >= c.hold) close(i, r.c, "why_time");
      else if (exitSig(i) && i + 1 < n) pendOut = true;
    }
    if (pos) inDays++;
    if (!pos && !pendIn && entry(i) && i + 1 < n) pendIn = true;
    eq.push(cash + sh * r.c);
  }
  if (pos) close(n - 1, cl[n - 1], "why_end"), (eq[n - 1] = cash);
  /* buy and hold over the same candles, paying commission once each way */
  const bq = Math.floor(start / (op[0] * (1 + fee))), bcash = start - bq * op[0] * (1 + fee), bh = data.map((r, i) => bcash + bq * r.c * (i === n - 1 ? 1 - fee : 1));
  let peak = -Infinity, dd = 0; eq.forEach((v) => { peak = Math.max(peak, v); dd = Math.min(dd, (v - peak) / peak); });
  const wins = trades.filter((t) => t.pl > 0), losses = trades.filter((t) => t.pl <= 0), sum = (a) => a.reduce((x, t) => x + t.pl, 0);
  return {
    trades, eq, bh,
    stats: {
      n: trades.length, win: trades.length ? (wins.length / trades.length) * 100 : null, ret: ((eq[n - 1] - start) / start) * 100, bh: ((bh[n - 1] - start) / start) * 100, dd: dd * 100,
      pf: losses.length && sum(losses) !== 0 ? sum(wins) / Math.abs(sum(losses)) : wins.length ? Infinity : null,
      avgw: wins.length ? wins.reduce((x, t) => x + t.ret, 0) / wins.length : null, avgl: losses.length ? losses.reduce((x, t) => x + t.ret, 0) / losses.length : null, exp: (inDays / n) * 100, wins: wins.length
    }
  };
}

const labW = () => Math.max(300, Math.min(920, (document.documentElement.clientWidth || 960) - 74));
function labLine(series, colors, labels) {
  const W = labW(), H = W < 560 ? 200 : 230, x0 = 6, x1 = W - 70, top = 10, ph = H - 34, n = series[0].length;
  let min = Infinity, max = -Infinity; series.forEach((s) => s.forEach((v) => { min = Math.min(min, v); max = Math.max(max, v); }));
  const pad = (max - min) * 0.08 || 1; min -= pad; max += pad;
  const X = (i) => x0 + (i / Math.max(1, n - 1)) * (x1 - x0), Y = (v) => top + ((max - v) / (max - min)) * ph;
  let g = "";
  for (let k = 0; k <= 4; k++) { const v = min + ((max - min) * k) / 4; g += '<line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/><text class="c-text" x="' + (x1 + 6) + '" y="' + (Y(v) + 4) + '">' + int(Math.round(v)) + "</text>"; }
  series.forEach((s, k) => { g += '<path class="ind ' + colors[k] + '" d="' + s.map((v, i) => (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(v).toFixed(1)).join("") + '"/>'; });
  g += labels.map((l, k) => '<rect class="lg-sw ' + colors[k] + '" x="' + (x0 + 4 + k * (W < 560 ? 120 : 150)) + '" y="' + (H - 16) + '" width="14" height="3"/><text class="c-lab" x="' + (x0 + 24 + k * (W < 560 ? 120 : 150)) + '" y="' + (H - 11) + '">' + esc(l) + "</text>").join("");
  return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + g + "</svg>";
}
function labPrice(data, trades) {
  const W = labW(), H = W < 560 ? 220 : 260, x0 = 6, x1 = W - 62, top = 12, ph = H - 26, n = data.length;
  let min = Infinity, max = -Infinity; data.forEach((r) => { min = Math.min(min, r.l); max = Math.max(max, r.h); });
  const pad = (max - min) * 0.06; min -= pad; max += pad;
  const X = (i) => x0 + ((i + 0.5) / n) * (x1 - x0), Y = (v) => top + ((max - v) / (max - min)) * ph;
  let g = "";
  for (let k = 0; k <= 4; k++) { const v = min + ((max - min) * k) / 4; g += '<line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/><text class="c-text" x="' + (x1 + 5) + '" y="' + (Y(v) + 4) + '">' + v.toFixed(2) + "</text>"; }
  trades.forEach((t) => { g += '<rect class="' + (t.pl > 0 ? "tr-win" : "tr-loss") + '" x="' + X(t.ei) + '" y="' + top + '" width="' + Math.max(1, X(t.xi) - X(t.ei)) + '" height="' + ph + '"/>'; });
  g += '<path class="price-line" d="' + data.map((r, i) => (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(r.c).toFixed(1)).join("") + '"/>';
  trades.forEach((t) => {
    const a = X(t.ei), ya = Y(t.ep), b = X(t.xi), yb = Y(t.xp);
    g += '<path class="mk-in" d="M' + a + " " + (ya + 3) + "l-6 10h12z" + '"/><path class="mk-out ' + (t.pl > 0 ? "win" : "loss") + '" d="M' + b + " " + (yb - 3) + "l-6 -10h12z" + '"/>';
  });
  return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + g + "</svg>";
}

function pageLab() {
  const c = labCfg(), real = Object.keys(LIVE.history || {}).filter((k) => (LIVE.history[k] || []).length);
  if (!PRACTICE[c.sym] && !real.includes(c.sym)) c.sym = "TRN-A";
  const data = chartData(c.sym);
  const opt = (v, label, cur) => '<option value="' + esc(v) + '"' + (String(cur) === String(v) ? " selected" : "") + ">" + esc(label) + "</option>";
  const num = (k, label, min, step) => '<div class="field"><label for="lb-' + k + '">' + esc(t(label)) + '</label><input id="lb-' + k + '" class="num" type="number" min="' + min + '" step="' + (step || 1) + '" data-lb="' + k + '" value="' + c[k] + '"></div>';
  const sel = (k, label, items) => '<div class="field"><label for="lb-' + k + '">' + esc(t(label)) + '</label><select id="lb-' + k + '" data-lb="' + k + '">' + items.map(([v, l]) => opt(v, t(l), c[k])).join("") + "</select></div>";
  const entryParams = c.entry === "ma" ? num("ea", "lb_short", 2) + num("eb", "lb_long", 3) : c.entry === "pma" ? num("ep", "lb_per", 2) : c.entry === "brk" ? num("ep", "lb_days", 2) : "";
  const exitParams = c.exit === "ma" ? '<p class="small muted" style="align-self:end">' + esc(t("lb_short")) + " " + c.ea + " / " + esc(t("lb_long")) + " " + c.eb + "</p>" : c.exit === "pma" ? num("xp", "lb_per", 2) : "";
  const form = '<div class="panel stack"><h3>' + esc(t("lb_rules")) + '</h3><div class="field" style="max-width:420px"><label for="lb-sym">' + esc(t("lb_sym")) + '</label><select id="lb-sym" data-lb="sym"><optgroup label="' + esc(t("ch_practice")) + '">' + Object.keys(PRACTICE).map((k) => opt(k, t(PRACTICE[k]), c.sym)).join("") + "</optgroup>" + (real.length ? '<optgroup label="' + esc(t("ch_real")) + '">' + real.map((k) => opt(k, k + " " + symName(k) + " (" + LIVE.history[k].length + " " + t("ch_candles") + ")", c.sym)).join("") + "</optgroup>" : "") + "</select></div>" +
    '<div class="lab-grid"><div class="stack"><b class="lab-k">' + esc(t("lb_entry")) + '</b>' + sel("entry", "lb_entry", [["ma", "en_ma"], ["pma", "en_pma"], ["rsi", "en_rsi"], ["bb", "en_bb"], ["macd", "en_macd"], ["brk", "en_brk"]]) + '<div class="form-grid">' + entryParams + '</div><label class="row small" style="gap:8px"><input type="checkbox" id="lb-filter" data-lb="filter"' + (c.filter ? " checked" : "") + ">" + esc(t("lb_filter")) + "</label></div>" +
    '<div class="stack"><b class="lab-k">' + esc(t("lb_exit")) + "</b>" + sel("exit", "lb_exit", [["ma", "ex_ma"], ["pma", "ex_pma"], ["rsi", "ex_rsi"], ["macd", "ex_macd"], ["none", "ex_none"]]) + '<div class="form-grid">' + exitParams + "</div></div>" +
    '<div class="stack"><b class="lab-k">' + esc(t("lb_risk")) + '</b><div class="form-grid">' + num("stop", "lb_stop", 0, 0.5) + num("target", "lb_target", 0, 0.5) + num("hold", "lb_hold", 0) + num("fee", "lb_fee", 0, 0.01) + num("cap", "lb_cap", 1000, 1000) + '</div><p class="small muted">' + esc(t("lb_zero")) + " · " + esc(t("lb_fee_note")) + "</p></div></div></div>";

  let res;
  if (data.length < 60) res = '<div class="notice">' + esc(t("lb_need").replace("{n}", data.length)) + "</div>";
  else {
    const R = backtest(data, c), st = R.stats, pct = (v, sign) => (v == null || !isFinite(v) ? (v === Infinity ? "∞" : "–") : (sign && v > 0 ? "+" : "") + fmt(v) + "%"), cls = (v) => (v > 0 ? "pos" : v < 0 ? "neg" : "");
    const d0 = data[0].d || t("ch_day") + " 1", d1 = data[data.length - 1].d || t("ch_day") + " " + data.length;
    const sum = t("lb_summary").replace("{n}", data.length).replace("{a}", d0).replace("{b}", d1).replace("{t}", st.n).replace("{w}", st.wins).replace("{s}", t(st.ret >= 0 ? "lb_made" : "lb_lost").replace("{p}", fmt(Math.abs(st.ret)))).replace("{bh}", t(st.bh >= 0 ? "lb_made" : "lb_lost").replace("{p}", fmt(Math.abs(st.bh))));
    const tile = (k, v, c2) => "<div><span>" + esc(t(k)) + '</span><b class="' + (c2 || "") + '">' + v + "</b></div>";
    const warns = [];
    if (PRACTICE[c.sym]) warns.push(t("lb_warn_practice"));
    if (st.n > 0 && st.n < 30) warns.push(t("lb_warn_few").replace("{t}", st.n));
    if (st.n > 0 && st.bh > st.ret) warns.push(t("lb_warn_bh"));
    warns.push(t("lb_warn_fit"));
    res = '<div class="panel stack"><h3>' + esc(t("lb_result")) + '</h3><p class="lab-sum">' + esc(sum) + "</p>" +
      (st.n ? '<div class="stats lab-stats">' + tile("st_ret", pct(st.ret, 1), cls(st.ret)) + tile("st_bh", pct(st.bh, 1), cls(st.bh)) + tile("st_trades", st.n) + tile("st_win", st.win == null ? "–" : Math.round(st.win) + "%") + tile("st_dd", pct(st.dd), "neg") + tile("st_pf", st.pf == null ? "–" : st.pf === Infinity ? "∞" : fmt(st.pf)) + tile("st_avgw", pct(st.avgw, 1), "pos") + tile("st_avgl", pct(st.avgl, 1), "neg") + "</div>" : '<p class="muted">' + esc(t("lb_none")) + "</p>") +
      warns.map((w) => '<div class="notice small">' + esc(w) + "</div>").join("") + "</div>" +
      (st.n ? '<div class="panel stack"><h3>' + esc(t("lb_equity")) + '</h3><div class="labfig">' + labLine([R.eq, R.bh], ["i1", "i2"], [t("lb_eq_s"), t("lb_eq_b")]) + '</div></div><div class="panel stack"><h3>' + esc(t("lb_trades_h")) + '</h3><div class="labfig">' + labPrice(data, R.trades) + "</div></div>" +
        '<div class="stack"><h3 style="font-size:20px">' + esc(t("lb_tbl")) + '</h3><div class="tablewrap"><table><thead><tr>' + ["lb_in", "price", "lb_out", "price", "lb_daysin", "lb_why", "lb_ret", "j_pl"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + "</tr></thead><tbody>" +
        R.trades.map((tr) => '<tr><td class="num">' + esc(tr.ed || t("ch_day") + " " + (tr.ei + 1)) + '</td><td class="num">' + fmt(tr.ep) + '</td><td class="num">' + esc(tr.xd || t("ch_day") + " " + (tr.xi + 1)) + '</td><td class="num">' + fmt(tr.xp) + '</td><td class="num">' + tr.days + "</td><td>" + esc(t(tr.why)) + '</td><td class="num ' + cls(tr.ret) + '">' + pct(tr.ret, 1) + '</td><td class="num ' + cls(tr.pl) + '">' + (tr.pl > 0 ? "+" : "") + fmt(tr.pl) + "</td></tr>").join("") + "</tbody></table></div></div>" : "");
  }
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("lb_h")) + "</h1><p>" + esc(t("lb_p")) + '</p><p style="margin-top:8px"><a href="#l-trd-3-4">' + esc(t("lb_lesson")) + '</a></p></div><div class="stack" style="padding-block:18px">' + form + res + '<p class="small muted">' + esc(t("disclaimer")) + "</p></div></div>";
}

document.addEventListener("change", (ev) => {
  const k = ev.target.dataset && ev.target.dataset.lb; if (!k) return;
  const c = labCfg(), el = ev.target;
  if (k === "filter") c.filter = el.checked;
  else if (k === "sym" || k === "entry" || k === "exit") c[k] = el.value;
  else { const v = parseFloat(el.value); if (isFinite(v) && v >= 0) c[k] = ["ea", "eb", "ep", "xp", "hold"].includes(k) ? Math.round(v) : v; }
  save(); render();
});
