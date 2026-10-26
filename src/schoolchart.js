/* ===== مِراس: تحليل الشارت بالمدارس =====
   تحت الشارت: تختار مدرسة أو أكثر من القائمة، وتضغط "حلّل الشارت".
   كل مدرسة تقرأ نفس الشموع بقواعدها (محسوبة هنا في الصفحة، بدون إنترنت)، وبعدها:
   مقارنة، ومستويات اتفقت عليها أكثر من مدرسة، ونتيجة نهائية مع سبب واضح.
   في وضع الإعادة (Replay) يحلل الشموع الظاهرة بس، فما يشوف المستقبل. */
Object.assign(UI, {
  sca_h: ["حلّل بمدارس التحليل", "Analyse with the schools"],
  sca_p: ["اختر مدرسة أو أكثر، واضغط حلّل الشارت. كل مدرسة تقرأ نفس الشموع بقواعدها، وبعدها نقارن ونطلع بنتيجة وحدة ونشرح ليش.", "Pick one or more schools and press Analyse. Each school reads the same candles by its own rules, then we compare and reach one conclusion, with the reasons."],
  sca_add: ["+ أضف مدرسة", "+ Add a school"], sca_all: ["كل المدارس", "All schools"], sca_clear: ["مسح", "Clear"],
  sca_go: ["حلّل الشارت", "Analyse the chart"], sca_again: ["الشارت تغيّر، حلّل من جديد", "The chart changed, analyse again"],
  sca_pick: ["اختر مدرسة وحدة على الأقل.", "Pick at least one school."], sca_need: ["يحتاج 40 شمعة على الأقل، وهذا الشارت فيه {n}.", "Needs at least 40 candles; this chart has {n}."],
  sca_fund: ["التحليل الأساسي ما ينقرى من الشارت، لأنه يحتاج أرقام الشركة.", "Fundamental analysis cannot be read from a chart; it needs company figures."],
  sca_res_h: ["النتيجة", "Result"], sca_each: ["قراءة كل مدرسة", "Each school's reading"], sca_cmp: ["المقارنة", "Comparison"],
  sca_lv: ["مستويات اتفقت عليها أكثر من مدرسة", "Levels several schools agree on"], sca_why: ["ليش طلعت النتيجة كذا؟", "Why this result?"], sca_scen: ["وش يغيّر النتيجة؟", "What would change it?"],
  sca_final: ["النتيجة النهائية", "Final result"], sca_agree: ["{a} من {n} مدارس تتفق معها", "{a} of {n} schools agree"], sca_conf: ["قوة الإشارة", "Signal strength"],
  sca_c1: ["ضعيفة", "Weak"], sca_c2: ["متوسطة", "Moderate"], sca_c3: ["قوية", "Strong"],
  sca_w: ["الوزن", "Weight"], sca_score: ["الدرجة", "Score"], sca_sup: ["دعم", "Support"], sca_res: ["مقاومة", "Resistance"], sca_src: ["المصدر", "Sources"],
  sca_draw: ["ارسم المستويات على الشارت", "Draw the levels on the chart"], sca_drawn: ["انرسمت المستويات", "Levels drawn"],
  sca_how: ["كيف انحسبت النتيجة: كل مدرسة تعطي درجة من -2 إلى +2، وتنضرب في وزنها (المدارس اللي قواعدها أوضح وزنها أكبر)، والمجموع يحدد الاتجاه.", "How it is computed: each school scores -2 to +2, multiplied by its weight (schools with clearer rules weigh more); the total sets the direction."],
  sca_note: ["تحليل آلي تعليمي بقواعد مبسّطة لكل مدرسة، ومو توصية شراء أو بيع. اختبر أي قاعدة في المختبر قبل ما تعتمد عليها.", "An automatic, educational reading using simplified rules for each school. Not a buy or sell recommendation. Test any rule in the lab before relying on it."]
});

const SCA_SCHOOLS = ["dow", "classic", "candles", "indicators", "volume", "harmonic", "wyckoff", "elliott", "smc", "gann", "quant"];
const SCA_W = { dow: 1, classic: 1, indicators: 1, volume: 0.8, quant: 1, candles: 0.7, harmonic: 0.7, smc: 0.6, wyckoff: 0.6, elliott: 0.4, gann: 0.3 };
let SCA = { sel: [], res: null, key: "" };
try { SCA.sel = JSON.parse(localStorage.getItem("meras.sca") || "[]").filter((x) => SCA_SCHOOLS.includes(x)); } catch (e) {}
const scaSave = () => { try { localStorage.setItem("meras.sca", JSON.stringify(SCA.sel)); } catch (e) {} };
const scaName = (id) => { const s = typeof SCHOOLS !== "undefined" && SCHOOLS.find((x) => x.id === id); return s ? L(s.name) : id; };

/* ----- أدوات حسابية ----- */
const F = (ar, en, o) => L([ar, en]).replace(/\{(\w+)\}/g, (_, k) => (o && o[k] != null ? o[k] : ""));
const px = (p) => (p >= 1000 ? p.toFixed(1) : p.toFixed(2));
const pct = (x) => (x >= 0 ? "+" : "") + (x * 100).toFixed(1) + "%";
function scaATR(d, n) { const o = d.map(() => null); let a = null; for (let i = 1; i < d.length; i++) { const tr = Math.max(d[i].h - d[i].l, Math.abs(d[i].h - d[i - 1].c), Math.abs(d[i].l - d[i - 1].c)); a = a == null ? tr : (a * (n - 1) + tr) / n; if (i >= n) o[i] = a; } return o; }
function zigzag(d, th) {
  // نقاط انعطاف: تنقلب الحركة إذا ارتد السعر بمقدار th (2 ATR)
  const pts = []; let dir = 0, hi = { i: 0, p: d[0].h }, lo = { i: 0, p: d[0].l };
  for (let i = 1; i < d.length; i++) {
    if (dir >= 0 && d[i].h > hi.p) hi = { i, p: d[i].h };
    if (dir <= 0 && d[i].l < lo.p) lo = { i, p: d[i].l };
    if (dir >= 0 && hi.i < i && hi.p - d[i].l >= th) { if (dir === 0 && lo.i < hi.i) pts.push({ i: lo.i, p: lo.p, t: "L" }); pts.push({ i: hi.i, p: hi.p, t: "H" }); dir = -1; lo = { i, p: d[i].l }; }
    else if (dir <= 0 && lo.i < i && d[i].h - lo.p >= th) { if (dir === 0 && hi.i < lo.i) pts.push({ i: hi.i, p: hi.p, t: "H" }); pts.push({ i: lo.i, p: lo.p, t: "L" }); dir = 1; hi = { i, p: d[i].h }; }
  }
  if (dir === 1) pts.push({ i: hi.i, p: hi.p, t: "H" }); else if (dir === -1) pts.push({ i: lo.i, p: lo.p, t: "L" });
  return pts;
}
function cluster(vals, tol) {
  const out = []; vals.slice().sort((a, b) => a.p - b.p).forEach((v) => { const g = out.find((x) => Math.abs(x.p - v.p) <= tol); if (g) { g.items.push(v); g.p = g.items.reduce((s, x) => s + x.p, 0) / g.items.length; } else out.push({ p: v.p, items: [v] }); });
  return out;
}

/* ----- السياق المشترك ----- */
function scaCtx(all) {
  const d = all.slice(-260), n = d.length, cl = d.map((r) => r.c), last = n - 1, c = cl[last];
  const atrS = scaATR(d, 14), atr = atrS[last] || (d[last].h - d[last].l);
  const sw = swings(d, 0, n, 3), zz = zigzag(d, 2 * atr);
  const vol = d.some((r) => (r.v || 0) > 0);
  return { d, n, cl, last, c, atr, sw, zz, vol, s20: sma(cl, 20), s50: sma(cl, 50), s200: sma(cl, 200), rsi: rsi(cl, 14) };
}

/* ----- قراءة كل مدرسة: {bias: up/down/flat/open, score -2..2, lines, levels:[{p, k: sup/res, why}]} ----- */
const SCA_READ = {
  dow(x) {
    const H = x.sw.hi.slice(-2), Lw = x.sw.lo.slice(-2), out = { lines: [], levels: [] };
    if (H.length < 2 || Lw.length < 2) return { bias: "open", score: 0, lines: [F("ما فيه قمم وقيعان كافية للحكم.", "Not enough highs and lows to judge.")], levels: [] };
    const eq = 0.3 * x.atr, dh = H[1].p - H[0].p, dl = Lw[1].p - Lw[0].p, hh = dh > eq, hl = dl > eq, lh = dh < -eq, ll = dl < -eq;
    const word = (v) => (v > eq ? L(["أعلى", "higher"]) : v < -eq ? L(["أدنى", "lower"]) : L(["تقريباً نفسها", "about equal"]));
    out.lines.push(F("آخر قمتين: {a} ثم {b} ({c}). آخر قاعين: {d} ثم {e} ({f}).", "Last two highs: {a} then {b} ({c}). Last two lows: {d} then {e} ({f}).", { a: px(H[0].p), b: px(H[1].p), c: word(dh), d: px(Lw[0].p), e: px(Lw[1].p), f: word(dl) }));
    out.levels.push({ p: Lw[1].p, k: "sup", why: L(["آخر قاع", "last low"]) }, { p: H[1].p, k: "res", why: L(["آخر قمة", "last high"]) });
    if (x.c < Lw[1].p) { out.lines.push(F("الإغلاق {c} كسر آخر قاع {l}: أول تحذير إن الاتجاه ضعف أو تغيّر.", "The close {c} broke the last low {l}: the first warning the trend has weakened or changed.", { c: px(x.c), l: px(Lw[1].p) })); return Object.assign(out, { bias: "down", score: hh && hl ? -1 : lh && ll ? -2 : -1.5 }); }
    if (x.c > H[1].p) { out.lines.push(F("الإغلاق {c} فوق آخر قمة {h}: الاتجاه الصاعد مستمر أو بدأ.", "The close {c} is above the last high {h}: an uptrend continues or begins.", { c: px(x.c), h: px(H[1].p) })); return Object.assign(out, { bias: "up", score: hh && hl ? 2 : lh && ll ? 1 : 1.5 }); }
    if (hh && hl) { out.lines.push(F("قمم وقيعان أعلى = اتجاه صاعد حسب داو، ويستمر لين ينكسر آخر قاع.", "Higher highs and higher lows = an uptrend by Dow, valid until the last low breaks.")); return Object.assign(out, { bias: "up", score: 2 }); }
    if (lh && ll) { out.lines.push(F("قمم وقيعان أدنى = اتجاه هابط حسب داو، ويستمر لين تنكسر آخر قمة.", "Lower highs and lower lows = a downtrend by Dow, valid until the last high breaks.")); return Object.assign(out, { bias: "down", score: -2 }); }
    out.lines.push(F("القمم والقيعان مو أعلى ولا أدنى بوضوح (الفرق أقل من ثلث ATR يعتبر تساوي): ما فيه اتجاه، السهم عرضي.", "Highs and lows are neither clearly higher nor lower (gaps under a third of ATR count as equal): no trend, the share is sideways."));
    return Object.assign(out, { bias: "flat", score: 0 });
  },
  classic(x) {
    const look = x.d.slice(-60), base = x.n - look.length, tol = 0.6 * x.atr, out = { lines: [], levels: [] };
    const hs = x.sw.hi.filter((s) => s.i >= base), ls = x.sw.lo.filter((s) => s.i >= base);
    const top = cluster(hs, tol).sort((a, b) => b.items.length - a.items.length || b.p - a.p)[0], bot = cluster(ls, tol).sort((a, b) => b.items.length - a.items.length || a.p - b.p)[0];
    if (top && bot && top.items.length >= 2 && bot.items.length >= 2 && top.p > bot.p) {
      const h = top.p - bot.p;
      out.levels.push({ p: top.p, k: "res", why: L(["سقف النطاق", "range top"]) }, { p: bot.p, k: "sup", why: L(["قاع النطاق", "range floor"]) });
      out.lines.push(F("نطاق (مستطيل) بين {b} و {t}: لمس السقف {n} مرات والقاع {m} مرات. ارتفاعه {h}.", "A range (rectangle) between {b} and {t}: the top was touched {n} times and the floor {m} times. Height {h}.", { b: px(bot.p), t: px(top.p), n: top.items.length, m: bot.items.length, h: px(h) }));
      if (x.c > top.p) { out.lines.push(F("الإغلاق {c} فوق السقف: كسر صاعد، والهدف الكلاسيكي حوالي {g}.", "The close {c} is above the top: an upside breakout, classical target about {g}.", { c: px(x.c), g: px(top.p + h) })); return Object.assign(out, { bias: "up", score: 2, tgt: [top.p + h, bot.p - h] }); }
      if (x.c < bot.p) { out.lines.push(F("الإغلاق {c} تحت القاع: كسر هابط، والهدف الكلاسيكي حوالي {g}.", "The close {c} is below the floor: a downside break, classical target about {g}.", { c: px(x.c), g: px(bot.p - h) })); return Object.assign(out, { bias: "down", score: -2, tgt: [top.p + h, bot.p - h] }); }
      out.lines.push(F("السعر داخل النطاق. القاعدة الكلاسيكية: لا تتوقع الاتجاه قبل الإغلاق خارجه. فوق {t} الهدف {u}، وتحت {b} الهدف {d}.", "Price is inside the range. Classical rule: no direction before a close outside it. Above {t} the target is {u}; below {b} it is {d}.", { t: px(top.p), b: px(bot.p), u: px(top.p + h), d: px(bot.p - h) }));
      return Object.assign(out, { bias: "flat", score: 0, tgt: [top.p + h, bot.p - h] });
    }
    // قمة أو قاع مزدوج
    const H = x.sw.hi.slice(-2), Lw = x.sw.lo.slice(-2);
    if (H.length === 2 && Math.abs(H[0].p - H[1].p) <= tol) { const neck = Math.min(...x.d.slice(H[0].i, H[1].i + 1).map((r) => r.l)); out.levels.push({ p: (H[0].p + H[1].p) / 2, k: "res", why: L(["قمة مزدوجة", "double top"]) }, { p: neck, k: "sup", why: L(["خط العنق", "neckline"]) });
      if (x.c < neck) { out.lines.push(F("قمة مزدوجة عند {t} وانكسر خط العنق {n}: نموذج انعكاس هابط مكتمل.", "A double top at {t} with the neckline {n} broken: a completed bearish reversal.", { t: px(H[1].p), n: px(neck) })); return Object.assign(out, { bias: "down", score: -2 }); }
      out.lines.push(F("قمة مزدوجة محتملة عند {t}. ما تكتمل إلا بإغلاق تحت خط العنق {n}.", "A possible double top at {t}. It completes only with a close below the neckline {n}.", { t: px(H[1].p), n: px(neck) })); return Object.assign(out, { bias: "flat", score: -0.5 }); }
    if (Lw.length === 2 && Math.abs(Lw[0].p - Lw[1].p) <= tol) { const neck = Math.max(...x.d.slice(Lw[0].i, Lw[1].i + 1).map((r) => r.h)); out.levels.push({ p: (Lw[0].p + Lw[1].p) / 2, k: "sup", why: L(["قاع مزدوج", "double bottom"]) }, { p: neck, k: "res", why: L(["خط العنق", "neckline"]) });
      if (x.c > neck) { out.lines.push(F("قاع مزدوج عند {b} وانكسر خط العنق {n}: نموذج انعكاس صاعد مكتمل.", "A double bottom at {b} with the neckline {n} broken: a completed bullish reversal.", { b: px(Lw[1].p), n: px(neck) })); return Object.assign(out, { bias: "up", score: 2 }); }
      out.lines.push(F("قاع مزدوج محتمل عند {b}. ما يكتمل إلا بإغلاق فوق خط العنق {n}.", "A possible double bottom at {b}. It completes only with a close above the neckline {n}.", { b: px(Lw[1].p), n: px(neck) })); return Object.assign(out, { bias: "flat", score: 0.5 }); }
    const r = hs.filter((s) => s.p > x.c).sort((a, b) => a.p - b.p)[0], s = ls.filter((q) => q.p < x.c).sort((a, b) => b.p - a.p)[0];
    if (r) out.levels.push({ p: r.p, k: "res", why: L(["أقرب قمة", "nearest high"]) }); if (s) out.levels.push({ p: s.p, k: "sup", why: L(["أقرب قاع", "nearest low"]) });
    out.lines.push(F("ما فيه نموذج كلاسيكي واضح في آخر 60 شمعة. أقرب مقاومة {r} وأقرب دعم {s}.", "No clear classical pattern in the last 60 candles. Nearest resistance {r}, nearest support {s}.", { r: r ? px(r.p) : "-", s: s ? px(s.p) : "-" }));
    return Object.assign(out, { bias: "flat", score: 0 });
  },
  candles(x) {
    const d = x.d, i = x.last, out = { lines: [], levels: [] }, body = (r) => Math.abs(r.c - r.o), rg = (r) => Math.max(1e-9, r.h - r.l);
    const up = (r) => Math.max(r.o, r.c), dn = (r) => Math.min(r.o, r.c);
    const vAvg = d.slice(-21, -1).reduce((s, r) => s + (r.v || 0), 0) / 20;
    const sups = x.sw.lo.map((s) => s.p).filter((p) => p <= d[i].h), ress = x.sw.hi.map((s) => s.p).filter((p) => p >= d[i].l);
    const nearS = sups.some((p) => Math.abs(d[i].l - p) <= x.atr), nearR = ress.some((p) => Math.abs(d[i].h - p) <= x.atr);
    let found = null;
    for (let k = i; k >= i - 2 && !found; k--) {
      const r = d[k], p = d[k - 1], b = body(r), R = rg(r), lw = dn(r) - r.l, uw = r.h - up(r);
      if (p && r.c > r.o && p.c < p.o && r.c >= p.o && r.o <= p.c && b > body(p)) found = { k, s: 1.5, n: L(["ابتلاع صاعد", "bullish engulfing"]) };
      else if (p && r.c < r.o && p.c > p.o && r.o >= p.c && r.c <= p.o && b > body(p)) found = { k, s: -1.5, n: L(["ابتلاع هابط", "bearish engulfing"]) };
      else if (b <= 0.1 * R) found = { k, s: 0, n: L(["دوجي (تردد)", "doji (indecision)"]) };
      else if (lw >= 2 * b && uw <= 0.35 * R) found = { k, s: 1, n: L(["مطرقة (ظل سفلي طويل)", "hammer (long lower wick)"]) };
      else if (uw >= 2 * b && lw <= 0.35 * R) found = { k, s: -1, n: L(["شهاب (ظل علوي طويل)", "shooting star (long upper wick)"]) };
      else if (b >= 0.85 * R) found = { k, s: r.c > r.o ? 1 : -1, n: r.c > r.o ? L(["شمعة صاعدة كاملة", "full bullish candle"]) : L(["شمعة هابطة كاملة", "full bearish candle"]) };
    }
    if (!found) { out.lines.push(F("آخر 3 شموع عادية، ما فيها نموذج واضح.", "The last 3 candles are ordinary, with no clear pattern.")); return Object.assign(out, { bias: "flat", score: 0 }); }
    const ago = i - found.k, r = d[found.k], rv = vAvg > 0 ? (r.v || 0) / vAvg : 0;
    out.lines.push(F("{n} {w}: افتتاح {o}، أعلى {h}، أدنى {l}، إغلاق {c}.", "{n} {w}: open {o}, high {h}, low {l}, close {c}.", { n: found.n, w: ago ? L(["قبل " + ago + " شمعة", ago + " candle(s) ago"]) : L(["في آخر شمعة", "on the last candle"]), o: px(r.o), h: px(r.h), l: px(r.l), c: px(r.c) }));
    let s = found.s;
    if (s > 0 && nearS) { s += 0.5; out.lines.push(F("وجت قرب دعم، وهذا يقويها.", "It formed near support, which strengthens it.")); }
    else if (s < 0 && nearR) { s -= 0.5; out.lines.push(F("وجت قرب مقاومة، وهذا يقويها.", "It formed near resistance, which strengthens it.")); }
    else if (s !== 0) { s *= 0.5; out.lines.push(F("بس مو عند دعم أو مقاومة واضحة، فقوتها أقل.", "But not at clear support or resistance, so it carries less weight.")); }
    if (rv >= 1.3) { s *= 1.25; out.lines.push(F("وحجمها {v} ضعف المتوسط: تأكيد إضافي.", "And its volume is {v}× the average: extra confirmation.", { v: rv.toFixed(1) })); }
    s = Math.max(-2, Math.min(2, s));
    out.lines.push(F("انتظر شمعة تأكيد بعدها قبل ما تعتمد عليها.", "Wait for a confirming candle before relying on it."));
    return Object.assign(out, { bias: s >= 0.75 ? "up" : s <= -0.75 ? "down" : "flat", score: s });
  },
  indicators(x) {
    const i = x.last, c = x.c, s20 = x.s20[i], s50 = x.s50[i], s200 = x.s200[i], r = x.rsi[i], m = macd(x.cl, 12, 26, 9), bb = bollinger(x.cl, 20, 2);
    const mv = m.line ? m.line[i] : m.macd ? m.macd[i] : null, sg = m.signal ? m.signal[i] : m.sig ? m.sig[i] : null;
    const up = bb.upper ? bb.upper[i] : bb.up ? bb.up[i] : null, lo = bb.lower ? bb.lower[i] : bb.lo ? bb.lo[i] : null;
    let s = 0; const out = { lines: [], levels: [] };
    if (s50 != null) { s += c > s50 ? 0.6 : -0.6; out.lines.push(F("الإغلاق {c} {w} متوسط 50 ({m}).", "The close {c} is {w} the 50 average ({m}).", { c: px(c), w: c > s50 ? L(["فوق", "above"]) : L(["تحت", "below"]), m: px(s50) })); out.levels.push({ p: s50, k: c > s50 ? "sup" : "res", why: L(["متوسط 50", "50 average"]) }); }
    if (s20 != null && s50 != null) { s += s20 > s50 ? 0.4 : -0.4; out.lines.push(F("متوسط 20 ({a}) {w} متوسط 50.", "The 20 average ({a}) is {w} the 50.", { a: px(s20), w: s20 > s50 ? L(["فوق", "above"]) : L(["تحت", "below"]) })); }
    if (s200 != null) { s += c > s200 ? 0.4 : -0.4; out.lines.push(F("وبالنسبة لمتوسط 200 ({m}) السعر {w}: {t}.", "Against the 200 average ({m}) price is {w}: {t}.", { m: px(s200), w: c > s200 ? L(["فوقه", "above"]) : L(["تحته", "below"]), t: c > s200 ? L(["الاتجاه الطويل صاعد", "the long-term trend is up"]) : L(["الاتجاه الطويل هابط", "the long-term trend is down"]) })); }
    if (r != null) { s += r > 55 ? 0.3 : r < 45 ? -0.3 : 0; if (r > 70) s -= 0.4; if (r < 30) s += 0.4; out.lines.push(F("RSI عند {r}: {t}.", "RSI at {r}: {t}.", { r: r.toFixed(1), t: r > 70 ? L(["تشبع شراء، الصعود ممكن يهدأ", "overbought, the rise may pause"]) : r < 30 ? L(["تشبع بيع، ممكن ارتداد", "oversold, a bounce is possible"]) : r > 55 ? L(["زخم صاعد", "rising momentum"]) : r < 45 ? L(["زخم هابط", "falling momentum"]) : L(["محايد", "neutral"]) })); }
    if (mv != null && sg != null) { s += mv > sg ? 0.3 : -0.3; out.lines.push(F("MACD ({a}) {w} خط الإشارة ({b}).", "MACD ({a}) is {w} its signal ({b}).", { a: mv.toFixed(2), b: sg.toFixed(2), w: mv > sg ? L(["فوق", "above"]) : L(["تحت", "below"]) })); }
    if (up != null && lo != null) out.lines.push(F("البولينجر بين {l} و {u}، والسعر {w}.", "Bollinger Bands span {l} to {u}; price is {w}.", { l: px(lo), u: px(up), w: c > up ? L(["فوق الحد العلوي (اندفاع قوي)", "above the upper band (strong push)"]) : c < lo ? L(["تحت الحد السفلي (ضغط بيع قوي)", "below the lower band (heavy selling)"]) : L(["داخل النطاق", "inside the bands"]) }));
    out.lines.push(F("ATR عند {a} ({p} من السعر): هذا متوسط حركته اليومية.", "ATR is {a} ({p} of price): its average daily range.", { a: px(x.atr), p: (x.atr / c * 100).toFixed(1) + "%" }));
    s = Math.max(-2, Math.min(2, s * 1.1));
    return Object.assign(out, { bias: s >= 0.6 ? "up" : s <= -0.6 ? "down" : "flat", score: s });
  },
  volume(x) {
    if (!x.vol) return { bias: "open", score: 0, na: 1, lines: [F("ما فيه بيانات حجم لهذا الشارت، فهالمدرسة ما تنطبق.", "No volume data for this chart, so this school does not apply.")], levels: [] };
    const d = x.d.slice(-120), lo = Math.min(...d.map((r) => r.l)), hi = Math.max(...d.map((r) => r.h)), B = 24, w = (hi - lo) / B || 1, vp = new Array(B).fill(0);
    d.forEach((r) => { const a = Math.max(0, Math.floor((r.l - lo) / w)), b = Math.min(B - 1, Math.floor((r.h - lo) / w)); for (let k = a; k <= b; k++) vp[k] += (r.v || 0) / (b - a + 1); });
    const pk = vp.indexOf(Math.max(...vp)), poc = lo + (pk + 0.5) * w, tot = vp.reduce((s, v) => s + v, 0);
    let a = pk, b = pk, acc = vp[pk]; while (acc < 0.7 * tot && (a > 0 || b < B - 1)) { const na = a > 0 ? vp[a - 1] : -1, nb = b < B - 1 ? vp[b + 1] : -1; if (nb >= na) { b++; acc += vp[b]; } else { a--; acc += vp[a]; } }
    const vah = lo + (b + 1) * w, val = lo + a * w, out = { lines: [], levels: [{ p: poc, k: x.c >= poc ? "sup" : "res", why: "POC" }, { p: vah, k: "res", why: L(["أعلى منطقة القيمة", "value area high"]) }, { p: val, k: "sup", why: L(["أدنى منطقة القيمة", "value area low"]) }] };
    out.lines.push(F("أكثر سعر انتداول عنده (POC) حوالي {p}، و70% من الحجم بين {a} و {b}.", "The most-traded price (POC) is about {p}; 70% of volume traded between {a} and {b}.", { p: px(poc), a: px(val), b: px(vah) }));
    const ob = obvS(x.d), i = x.last, k = 20, obvUp = ob[i] > ob[i - k], prUp = x.c > x.cl[i - k];
    out.lines.push(F("خلال آخر 20 شمعة: السعر {p} وOBV {o}، {t}.", "Over the last 20 candles: price {p} and OBV {o}, {t}.", { p: prUp ? L(["طلع", "rose"]) : L(["نزل", "fell"]), o: obvUp ? L(["طلع", "rose"]) : L(["نزل", "fell"]), t: obvUp === prUp ? L(["الحجم يأكد الحركة", "volume confirms the move"]) : L(["الحجم ما يأكد الحركة (دايفرجنس)", "volume does not confirm the move (divergence)"]) }));
    let s = x.c > vah ? 1.2 : x.c < val ? -1.2 : (x.c > poc ? 0.3 : -0.3);
    s += obvUp === prUp ? (prUp ? 0.5 : -0.5) : (obvUp ? 0.4 : -0.4);
    out.lines.push(x.c > vah ? F("السعر فوق منطقة القيمة: المشترين مسيطرين.", "Price is above the value area: buyers in control.") : x.c < val ? F("السعر تحت منطقة القيمة: البايعين مسيطرين.", "Price is below the value area: sellers in control.") : F("السعر داخل منطقة القيمة، والمتوقع يتذبذب داخلها لين يطلع منها بحجم كبير.", "Price is inside the value area and is likely to swing within it until it leaves on heavy volume."));
    s = Math.max(-2, Math.min(2, s));
    return Object.assign(out, { bias: s >= 0.6 ? "up" : s <= -0.6 ? "down" : "flat", score: s });
  },
  harmonic(x) {
    const d = x.d.slice(-150), base = x.n - d.length, out = { lines: [], levels: [] };
    let hiI = 0, loI = 0; d.forEach((r, k) => { if (r.h > d[hiI].h) hiI = k; if (r.l < d[loI].l) loI = k; });
    const H = d[hiI].h, Lo = d[loI].l, rngv = H - Lo, upMove = loI < hiI;
    const lv = [0.382, 0.5, 0.618, 0.786].map((f) => ({ f, p: upMove ? H - f * rngv : Lo + f * rngv }));
    out.lines.push(upMove ? F("آخر حركة كبيرة صاعدة من {l} إلى {h}. مستويات التصحيح: {s}.", "The last big move was up from {l} to {h}. Retracement levels: {s}.", { l: px(Lo), h: px(H), s: lv.map((v) => (v.f * 100).toFixed(1) + "% " + px(v.p)).join("، ") }) : F("آخر حركة كبيرة هابطة من {h} إلى {l}. مستويات الارتداد: {s}.", "The last big move was down from {h} to {l}. Retracement levels: {s}.", { l: px(Lo), h: px(H), s: lv.map((v) => (v.f * 100).toFixed(1) + "% " + px(v.p)).join(", ") }));
    lv.forEach((v) => out.levels.push({ p: v.p, k: v.p < x.c ? "sup" : "res", why: "Fib " + (v.f * 100).toFixed(1) + "%" }));
    const ret = upMove ? (H - x.c) / rngv : (x.c - Lo) / rngv, near = lv.find((v) => Math.abs(v.p - x.c) <= 0.5 * x.atr);
    out.lines.push(F("السعر الحالي صحّح {r} من الحركة{n}.", "Price has retraced {r} of the move{n}.", { r: (ret * 100).toFixed(0) + "%", n: near ? L([" وهو عند مستوى " + (near.f * 100).toFixed(1) + "% بالضبط تقريباً", ", sitting almost exactly on the " + (near.f * 100).toFixed(1) + "% level"]) : "" }));
    let s = 0;
    if (upMove) s = ret < 0.382 ? 1 : ret <= 0.618 ? 0.5 : ret <= 0.786 ? -0.3 : -1;
    else s = ret < 0.382 ? -1 : ret <= 0.618 ? -0.5 : ret <= 0.786 ? 0.3 : 1;
    // XABCD على آخر 5 نقاط انعطاف
    const z = x.zz.slice(-5);
    if (z.length === 5) {
      const [X, A, B, C, D] = z, xa = Math.abs(A.p - X.p), ab = Math.abs(B.p - A.p) / xa, ad = Math.abs(A.p - D.p) / xa, bc = Math.abs(C.p - B.p) / Math.max(1e-9, Math.abs(B.p - A.p));
      const pats = [["Gartley", 0.618, 0.618, 0.786, 0.786], ["Bat", 0.382, 0.5, 0.886, 0.886], ["Butterfly", 0.786, 0.786, 1.27, 1.618], ["Crab", 0.382, 0.618, 1.618, 1.618]];
      const m = pats.find(([, a1, a2, d1, d2]) => ab >= a1 - 0.05 && ab <= a2 + 0.05 && ad >= d1 - 0.06 && ad <= d2 + 0.06 && bc >= 0.382 - 0.05 && bc <= 0.886 + 0.05);
      if (m && x.last - (D.i) <= 10) { const bull = D.t === "L"; s += bull ? 1 : -1; out.levels.push({ p: D.p, k: bull ? "sup" : "res", why: m[0] + " D" }); out.lines.push(F("نموذج {m} {b}: AB = {ab} من XA، وD = {ad} من XA عند {d}. هذي منطقة انعكاس محتملة.", "{b} {m} pattern: AB = {ab} of XA and D = {ad} of XA at {d}. A potential reversal zone.", { m: m[0], b: bull ? L(["صاعد", "Bullish"]) : L(["هابط", "Bearish"]), ab: ab.toFixed(3), ad: ad.toFixed(3), d: px(D.p) })); }
      else out.lines.push(F("ما فيه نموذج هارمونيك مكتمل بنسب صحيحة في آخر 5 نقاط انعطاف (AB = {ab}، AD = {ad} من XA).", "No complete harmonic pattern with valid ratios in the last 5 swing points (AB = {ab}, AD = {ad} of XA).", { ab: ab.toFixed(2), ad: ad.toFixed(2) }));
    }
    s = Math.max(-2, Math.min(2, s));
    return Object.assign(out, { bias: s >= 0.6 ? "up" : s <= -0.6 ? "down" : "flat", score: s });
  },
  wyckoff(x) {
    const R = x.d.slice(-30), prev = x.d.slice(-70, -30), out = { lines: [], levels: [] };
    if (prev.length < 20) return { bias: "open", score: 0, lines: [F("يحتاج 70 شمعة على الأقل.", "Needs at least 70 candles.")], levels: [] };
    const top = Math.max(...R.slice(0, -5).map((r) => r.h)), bot = Math.min(...R.slice(0, -5).map((r) => r.l)), width = (top - bot) / x.atr;
    const pm = (prev[prev.length - 1].c - prev[0].c) / x.atr, inRange = width <= 7;
    if (!inRange) { const dir = x.c > R[0].c; out.lines.push(F("السعر مو في نطاق عرضي (آخر 30 شمعة تحركت {w} ضعف ATR)، فهو في مرحلة {p} حسب وايكوف.", "Price is not in a range (the last 30 candles moved {w}× ATR), so Wyckoff calls this a {p} phase.", { w: width.toFixed(1), p: dir ? L(["صعود (Markup)", "markup"]) : L(["هبوط (Markdown)", "markdown"]) })); return Object.assign(out, { bias: dir ? "up" : "down", score: dir ? 1 : -1 }); }
    out.levels.push({ p: top, k: "res", why: L(["سقف نطاق وايكوف", "Wyckoff range top"]) }, { p: bot, k: "sup", why: L(["قاع نطاق وايكوف", "Wyckoff range floor"]) });
    const ctx = pm < -3 ? "acc" : pm > 3 ? "dist" : "re";
    out.lines.push(F("نطاق عرضي بين {b} و {t} بعد حركة {m} قبله، فهو مرشح يكون {k}.", "A sideways range between {b} and {t} after a prior {m} move, so it is a candidate for {k}.", { b: px(bot), t: px(top), m: pm < 0 ? L(["هابطة", "falling"]) : L(["صاعدة", "rising"]), k: ctx === "acc" ? L(["تجميع", "accumulation"]) : ctx === "dist" ? L(["توزيع", "distribution"]) : L(["تجميع أو توزيع", "accumulation or distribution"]) }));
    const tail = R.slice(-5), vAvg = R.reduce((s, r) => s + (r.v || 0), 0) / R.length;
    const spring = tail.find((r) => r.l < bot && r.c > bot), upth = tail.find((r) => r.h > top && r.c < top);
    let s = ctx === "acc" ? 0.4 : ctx === "dist" ? -0.4 : 0;
    if (spring) { s += 1.2; out.lines.push(F("فيه Spring: نزل تحت القاع ({l}) ورجع أغلق داخل النطاق{v}. هذي من أقوى إشارات التجميع.", "A Spring: it dipped below the floor ({l}) and closed back inside{v}. One of the strongest accumulation signs.", { l: px(spring.l), v: x.vol && spring.v > 1.3 * vAvg ? L([" بحجم عالي", " on high volume"]) : "" })); }
    if (upth) { s -= 1.2; out.lines.push(F("فيه Upthrust: طلع فوق السقف ({h}) ورجع أغلق داخل النطاق{v}. هذي من إشارات التوزيع.", "An Upthrust: it pushed above the top ({h}) and closed back inside{v}. A distribution sign.", { h: px(upth.h), v: x.vol && upth.v > 1.3 * vAvg ? L([" بحجم عالي", " on high volume"]) : "" })); }
    if (x.c > top) { s += 1; out.lines.push(F("وأغلق فوق السقف: بداية مرحلة الصعود (Markup).", "And closed above the top: the markup phase may be starting.")); }
    if (x.c < bot) { s -= 1; out.lines.push(F("وأغلق تحت القاع: بداية مرحلة الهبوط (Markdown).", "And closed below the floor: the markdown phase may be starting.")); }
    if (!spring && !upth && x.c <= top && x.c >= bot) out.lines.push(F("ما فيه Spring ولا Upthrust للحين: وايكوف يقول انتظر الكسر.", "No Spring or Upthrust yet: Wyckoff says wait for the break."));
    s = Math.max(-2, Math.min(2, s));
    return Object.assign(out, { bias: s >= 0.6 ? "up" : s <= -0.6 ? "down" : spring && upth ? "open" : "flat", score: s });
  },
  elliott(x) {
    const z = x.zz, out = { lines: [], levels: [] };
    if (z.length < 4) return { bias: "open", score: 0, lines: [F("الحركات قليلة، ما ينفع عدّ موجات.", "Too few swings to count waves.")], levels: [] };
    // نبدأ العد من أدنى قاع أو أعلى قمة في النقاط
    let loK = 0, hiK = 0; z.forEach((p, k) => { if (p.p < z[loK].p) loK = k; if (p.p > z[hiK].p) hiK = k; });
    const fromLow = loK > hiK, st = fromLow ? loK : hiK, legs = z.slice(st), n = legs.length - 1;
    const dir = fromLow ? 1 : -1, w = (a) => (legs[a] ? legs[a].p : null);
    out.lines.push(F("من {t} عند {p}، فيه {n} موجات لين الحين.", "From the {t} at {p}, there have been {n} waves so far.", { t: fromLow ? L(["أدنى قاع", "lowest low"]) : L(["أعلى قمة", "highest high"]), p: px(legs[0].p), n }));
    let valid = true;
    if (n >= 2 && dir * (w(2) - w(0)) <= 0) valid = false;
    if (n >= 4) { const l1 = Math.abs(w(1) - w(0)), l3 = Math.abs(w(3) - w(2)), l5 = n >= 5 ? Math.abs(w(5) - w(4)) : Infinity; if (l3 < l1 && l3 < l5) valid = false; if (dir * (w(4) - w(1)) <= 0) valid = false; }
    out.levels.push({ p: legs[0].p, k: fromLow ? "sup" : "res", why: L(["بداية العد", "count start"]) });
    let s = 0;
    if (!valid) out.lines.push(F("القواعد الثلاث انكسرت في العد الدافع، فالأرجح إن الحركة تصحيح (A-B-C) مو موجة دافعة.", "The three rules break for an impulse count, so the move is more likely a correction (A-B-C)."));
    else if (n <= 2) { s = dir * 0.8; out.lines.push(F("العد الأساسي: انتهت الموجة {k}{m}. إذا صح، الجاي موجة 3 {d} وهي عادة الأقوى.", "Main count: wave {k} ended{m}. If correct, wave 3 {d} comes next, usually the strongest.", { k: n, m: n === 2 ? L([" (التصحيح)", " (the pullback)"]) : "", d: fromLow ? L(["صاعدة", "up"]) : L(["هابطة", "down"]) })); }
    else if (n === 3 || n === 4) { s = dir * (n === 3 ? 0.5 : 0.6); out.lines.push(F("العد الأساسي: احنا في الموجة {k}. {t}", "Main count: we are in wave {k}. {t}", { k: n + 1, t: n === 3 ? L(["الموجة 4 تصحيح، وبعدها موجة 5 أخيرة.", "Wave 4 is a pullback, then a final wave 5."]) : L(["الموجة 5 الأخيرة، وبعدها يجي تصحيح أكبر.", "The final wave 5, after which a bigger correction comes."]) })); }
    else { s = -dir * 0.6; out.lines.push(F("اكتملت 5 موجات أو أكثر، فالمتوقع تصحيح A-B-C عكس الاتجاه.", "Five or more waves are complete, so an A-B-C correction against the trend is expected.")); }
    out.lines.push(F("العد البديل: الحركة كلها ممكن تكون تصحيح A-B-C، والنتيجة تنقلب. إليوت فيه اجتهاد كبير، فوزنه في النتيجة قليل.", "Alternative count: the whole move could be an A-B-C correction, which flips the result. Elliott is highly subjective, so it carries little weight here."));
    return Object.assign(out, { bias: Math.abs(s) >= 0.6 ? (s > 0 ? "up" : "down") : "open", score: s });
  },
  smc(x) {
    const out = { lines: [], levels: [] }, tol = 0.3 * x.atr, d = x.d, i = x.last;
    const H = x.sw.hi.slice(-6), Lw = x.sw.lo.slice(-6);
    const eqH = cluster(H, tol).filter((g) => g.items.length >= 2).pop(), eqL = cluster(Lw, tol).filter((g) => g.items.length >= 2).shift();
    if (eqH) out.levels.push({ p: eqH.p, k: "res", why: L(["سيولة فوق قمم متساوية", "liquidity above equal highs"]) });
    if (eqL) out.levels.push({ p: eqL.p, k: "sup", why: L(["سيولة تحت قيعان متساوية", "liquidity below equal lows"]) });
    out.lines.push(F("السيولة: {a}{b}.", "Liquidity: {a}{b}.", { a: eqH ? L(["قمم متساوية عند " + px(eqH.p), "equal highs at " + px(eqH.p)]) : L(["ما فيه قمم متساوية", "no equal highs"]), b: eqL ? L(["، وقيعان متساوية عند " + px(eqL.p), ", equal lows at " + px(eqL.p)]) : "" }));
    let s = 0; const tail = d.slice(-10);
    const lastH = x.sw.hi[x.sw.hi.length - 1], lastL = x.sw.lo[x.sw.lo.length - 1];
    const swH = lastH && tail.find((r) => r.h > lastH.p && r.c < lastH.p), swL = lastL && tail.find((r) => r.l < lastL.p && r.c > lastL.p);
    if (swH) { s -= 1; out.lines.push(F("كسح سيولة فوق القمة {p}: السعر طلع لـ {h} ورجع أغلق تحتها.", "A liquidity sweep above the {p} high: price reached {h} and closed back below.", { p: px(lastH.p), h: px(swH.h) })); }
    if (swL) { s += 1; out.lines.push(F("كسح سيولة تحت القاع {p}: السعر نزل لـ {l} ورجع أغلق فوقه.", "A liquidity sweep below the {p} low: price reached {l} and closed back above.", { p: px(lastL.p), l: px(swL.l) })); }
    if (lastH && x.c > lastH.p) { s += 1; out.lines.push(F("كسر هيكل صاعد (BOS): الإغلاق {c} فوق آخر قمة {p}.", "Bullish break of structure (BOS): the {c} close is above the last high {p}.", { c: px(x.c), p: px(lastH.p) })); }
    else if (lastL && x.c < lastL.p) { s -= 1; out.lines.push(F("كسر هيكل هابط: الإغلاق {c} تحت آخر قاع {p}.", "Bearish break of structure: the {c} close is below the last low {p}.", { c: px(x.c), p: px(lastL.p) })); }
    else out.lines.push(F("ما صار كسر هيكل للحين: السعر بين آخر قمة {h} وآخر قاع {l}.", "No structure break yet: price is between the last high {h} and the last low {l}.", { h: lastH ? px(lastH.p) : "-", l: lastL ? px(lastL.p) : "-" }));
    for (let k = i; k >= Math.max(2, i - 20); k--) {
      if (d[k].l > d[k - 2].h && !d.slice(k + 1).some((r) => r.l <= d[k - 2].h)) { out.levels.push({ p: (d[k].l + d[k - 2].h) / 2, k: "sup", why: "FVG" }); out.lines.push(F("فجوة سعرية صاعدة (FVG) ما تعبّت بين {a} و {b}.", "An unfilled bullish fair value gap (FVG) between {a} and {b}.", { a: px(d[k - 2].h), b: px(d[k].l) })); break; }
      if (d[k].h < d[k - 2].l && !d.slice(k + 1).some((r) => r.h >= d[k - 2].l)) { out.levels.push({ p: (d[k].h + d[k - 2].l) / 2, k: "res", why: "FVG" }); out.lines.push(F("فجوة سعرية هابطة (FVG) ما تعبّت بين {a} و {b}.", "An unfilled bearish fair value gap (FVG) between {a} and {b}.", { a: px(d[k].h), b: px(d[k - 2].l) })); break; }
    }
    s = Math.max(-2, Math.min(2, s));
    return Object.assign(out, { bias: s >= 0.6 ? "up" : s <= -0.6 ? "down" : "flat", score: s });
  },
  gann(x) {
    const d = x.d.slice(-120), base = x.n - d.length; let loK = 0, hiK = 0; d.forEach((r, k) => { if (r.l < d[loK].l) loK = k; if (r.h > d[hiK].h) hiK = k; });
    const fromLow = loK > hiK, k0 = fromLow ? loK : hiK, p0 = fromLow ? d[loK].l : d[hiK].h, bars = d.length - 1 - k0, unit = (d[hiK].h - d[loK].l) / d.length;
    const a11 = p0 + (fromLow ? 1 : -1) * unit * bars, a21 = p0 + (fromLow ? 1 : -1) * unit * 2 * bars, a12 = p0 + (fromLow ? 1 : -1) * unit * 0.5 * bars, out = { lines: [], levels: [] };
    out.lines.push(F("المروحة مرسومة من {t} عند {p} قبل {n} شمعة. وحدة الزاوية = مدى الشارت ÷ عدد شموعه ({u} لكل شمعة). جان ما حدد مقياس ثابت، وهذي نقطة ضعف المدرسة.", "Fan drawn from the {t} at {p}, {n} candles ago. Angle unit = chart range ÷ candle count ({u} per candle). Gann set no fixed scale, a known weakness.", { t: fromLow ? L(["قاع", "low"]) : L(["قمة", "high"]), p: px(p0), n: bars, u: px(unit) }));
    out.lines.push(F("زاوية 1×1 الحين عند {a}، و2×1 عند {b}، و1×2 عند {c}.", "The 1×1 angle is now at {a}, 2×1 at {b}, 1×2 at {c}.", { a: px(a11), b: px(a21), c: px(a12) }));
    out.levels.push({ p: a11, k: fromLow ? "sup" : "res", why: "Gann 1×1" });
    const above = fromLow ? x.c > a11 : x.c < a11;
    out.lines.push(above ? F("السعر على الجهة القوية من زاوية 1×1: الاتجاه من {t} لسا قوي.", "Price is on the strong side of the 1×1 angle: the move from the {t} is still strong.", { t: fromLow ? L(["القاع", "low"]) : L(["القمة", "high"]) }) : F("السعر عدّى زاوية 1×1 للجهة الضعيفة: الحركة من {t} فقدت زخمها.", "Price has crossed the 1×1 angle to the weak side: the move from the {t} has lost momentum.", { t: fromLow ? L(["القاع", "low"]) : L(["القمة", "high"]) }));
    const s = (above ? 1 : -0.5) * (fromLow ? 1 : -1);
    return Object.assign(out, { bias: s >= 0.6 ? "up" : s <= -0.6 ? "down" : "flat", score: s });
  },
  quant(x) {
    const H = 10, out = { lines: [], levels: [] }, cl = x.cl, s50 = x.s50, r = x.rsi, n = x.n;
    const state = (k) => (s50[k] == null || r[k] == null ? null : cl[k] > s50[k] && r[k] > 50 ? "bull" : cl[k] < s50[k] && r[k] < 50 ? "bear" : "mix");
    const now = state(x.last), agg = { bull: [], bear: [], mix: [], all: [] };
    for (let k = 50; k < n - H; k++) { const st = state(k); if (!st) continue; const fr = cl[k + H] / cl[k] - 1; agg[st].push(fr); agg.all.push(fr); }
    const avg = (a) => a.reduce((s, v) => s + v, 0) / (a.length || 1), win = (a) => a.filter((v) => v > 0).length / (a.length || 1);
    if (!now || agg.all.length < 30) return { bias: "open", score: 0, lines: [F("البيانات قليلة لاختبار إحصائي (يحتاج 30 حالة على الأقل).", "Too little data for a statistical test (needs at least 30 cases).")], levels: [] };
    const cur = agg[now], nm = { bull: L(["فوق متوسط 50 وRSI فوق 50", "above the 50 average with RSI above 50"]), bear: L(["تحت متوسط 50 وRSI تحت 50", "below the 50 average with RSI below 50"]), mix: L(["إشارات مختلطة", "mixed signals"]) }[now];
    out.lines.push(F("الوضع الحالي: {s}. اختبرنا كل مرة كان السهم في نفس الوضع في هذا الشارت ({n} مرة)، وش صار بعد {h} شموع.", "Current state: {s}. We tested every time this chart was in the same state ({n} times) and what happened {h} candles later.", { s: nm, n: cur.length, h: H }));
    out.lines.push(F("متوسط العائد بعدها {a} ونسبة الصعود {w}، مقابل {b} و {v} لكل الأيام.", "Average return afterwards {a} with {w} up, versus {b} and {v} across all days.", { a: pct(avg(cur)), w: (win(cur) * 100).toFixed(0) + "%", b: pct(avg(agg.all)), v: (win(agg.all) * 100).toFixed(0) + "%" }));
    if (cur.length < 30) { out.lines.push(F("العينة أقل من 30، فالنتيجة ما يعتمد عليها.", "The sample is under 30, so the result is unreliable.")); return Object.assign(out, { bias: "open", score: 0 }); }
    const edge = avg(cur) - avg(agg.all), sd = Math.sqrt(avg(cur.map((v) => (v - avg(cur)) ** 2))), se = sd / Math.sqrt(cur.length);
    const sig = Math.abs(edge) > 2 * se;
    out.lines.push(sig ? F("الفرق واضح إحصائياً (أكبر من ضعف الخطأ المعياري).", "The difference is statistically clear (more than twice the standard error).") : F("الفرق صغير مقارنة بالتذبذب، يعني ممكن يكون صدفة. والحالات متداخلة، فالنتيجة تقريبية.", "The difference is small relative to the noise and may be chance. The cases overlap, so treat it as rough."));
    const s = sig ? Math.max(-2, Math.min(2, edge / Math.max(1e-9, se) / 2)) : 0;
    return Object.assign(out, { bias: s >= 0.6 ? "up" : s <= -0.6 ? "down" : "flat", score: s });
  }
};

/* ----- الدمج والنتيجة ----- */
function scaRun(all, ids) {
  const x = scaCtx(all), res = ids.map((id) => Object.assign({ id, w: SCA_W[id] || 0.5 }, SCA_READ[id](x)));
  const act = res.filter((r) => !r.na);
  const tw = act.reduce((s, r) => s + r.w, 0) || 1, tot = act.reduce((s, r) => s + r.w * r.score, 0) / tw;
  const fb = tot >= 0.35 ? "up" : tot <= -0.35 ? "down" : "flat";
  const agree = act.filter((r) => r.bias === fb).length;
  const conf = Math.abs(tot) >= 1 && agree / act.length >= 0.6 ? 3 : Math.abs(tot) >= 0.6 ? 2 : 1;
  const lv = [];
  res.forEach((r) => (r.levels || []).forEach((l) => lv.push(Object.assign({ id: r.id }, l))));
  const groups = cluster(lv.filter((l) => isFinite(l.p) && Math.abs(l.p - x.c) <= 6 * x.atr), 0.5 * x.atr).map((g) => ({ p: g.p, ids: [...new Set(g.items.map((i) => i.id))], whys: g.items.map((i) => i.why) })).filter((g) => g.ids.length >= 2).sort((a, b) => b.ids.length - a.ids.length || Math.abs(a.p - x.c) - Math.abs(b.p - x.c)).slice(0, 6).sort((a, b) => b.p - a.p);
  return { c: x.c, atr: x.atr, res, tot, fb, agree, nAct: act.length, conf, groups, date: all[all.length - 1].d };
}

/* ----- العرض ----- */
const scaTag = (b) => '<span class="tag ' + ({ up: "up", down: "ex-dn", flat: "", open: "" }[b] || "") + '">' + esc(t({ up: "ex_up", down: "ex_down", flat: "ex_flat", open: "ex_open_q" }[b] || "ex_flat")) + "</span>";
function scaResultHtml(R) {
  const why = [], pro = R.res.filter((r) => !r.na && r.bias === R.fb && R.fb !== "flat"), con = R.res.filter((r) => !r.na && R.fb !== "flat" && (r.bias === "up" || r.bias === "down") && r.bias !== R.fb), neu = R.res.filter((r) => !r.na && (r.bias === "flat" || r.bias === "open"));
  const nm = (arr) => arr.map((r) => scaName(r.id)).join(L(["، ", ", "]));
  if (R.fb === "flat") why.push(F("مجموع الدرجات الموزونة {s}، وهذا قريب من الصفر: المدارس ما اتفقت على اتجاه.", "The weighted total is {s}, close to zero: the schools do not agree on a direction.", { s: R.tot.toFixed(2) }));
  else why.push(F("مجموع الدرجات الموزونة {s}، فالنتيجة {d}.", "The weighted total is {s}, so the result is {d}.", { s: (R.tot > 0 ? "+" : "") + R.tot.toFixed(2), d: t(R.fb === "up" ? "ex_up" : "ex_down") }));
  if (R.fb === "flat") { const ups = R.res.filter((r) => !r.na && r.bias === "up"), dns = R.res.filter((r) => !r.na && r.bias === "down");
    if (ups.length) why.push(F("مالت للصعود: {a}.", "Leaning up: {a}.", { a: nm(ups) }));
    if (dns.length) why.push(F("مالت للهبوط: {a}.", "Leaning down: {a}.", { a: nm(dns) }));
    if (ups.length && dns.length) why.push(F("الطرفين تقريباً متعادلين بعد الأوزان، فالنتيجة محايدة.", "After weighting, the two sides roughly cancel out, so the result is neutral.")); }
  if (pro.length) why.push(F("دعمتها: {a}.", "Supported by: {a}.", { a: nm(pro) }));
  if (con.length) why.push(F("عارضتها: {a}، وهذا يقلل الثقة.", "Opposed by: {a}, which lowers confidence.", { a: nm(con) }));
  if (neu.length) why.push(F("محايدة أو غير محسومة: {a}.", "Neutral or undecided: {a}.", { a: nm(neu) }));
  const na = R.res.filter((r) => r.na); if (na.length) why.push(F("ما انحسبت (بيانات ناقصة): {a}.", "Not counted (missing data): {a}.", { a: nm(na) }));
  const top = R.res.filter((r) => !r.na).slice().sort((a, b) => Math.abs(b.w * b.score) - Math.abs(a.w * a.score))[0];
  if (top && Math.abs(top.score) > 0) why.push(F("أكثر مدرسة أثرت في النتيجة: {n} (درجة {s} × وزن {w}).", "The most influential school: {n} (score {s} × weight {w}).", { n: scaName(top.id), s: top.score.toFixed(1), w: top.w }));
  const res = R.groups.filter((g) => g.p > R.c).sort((a, b) => a.p - b.p)[0], sup = R.groups.filter((g) => g.p < R.c).sort((a, b) => b.p - a.p)[0];
  const scen = [];
  if (res) scen.push(F("إغلاق فوق {p} (مقاومة اتفقت عليها {n} مدارس) يقوّي الصعود.", "A close above {p} (resistance agreed by {n} schools) strengthens the upside.", { p: px(res.p), n: res.ids.length }));
  if (sup) scen.push(F("إغلاق تحت {p} (دعم اتفقت عليه {n} مدارس) يقوّي الهبوط.", "A close below {p} (support agreed by {n} schools) strengthens the downside.", { p: px(sup.p), n: sup.ids.length }));
  scen.push(F("الوقف المنطقي على الأقل 1.5 ضعف ATR ({a}) ورا المستوى، لأن هذا متوسط حركة السهم.", "A sensible stop sits at least 1.5× ATR ({a}) beyond the level, since that is the share's normal range.", { a: px(1.5 * R.atr) }));
  if (R.conf === 1) scen.push(F("الإشارة ضعيفة: الانتظار لين تتفق مدارس أكثر قرار بحد ذاته.", "The signal is weak: waiting until more schools agree is a decision in itself."));
  const final = '<div class="sca-final ' + R.fb + '"><div><span class="small muted">' + esc(t("sca_final")) + "</span><b>" + esc(t(R.fb === "up" ? "ex_up" : R.fb === "down" ? "ex_down" : "ex_flat")) + '</b></div><div><span class="small muted">' + esc(t("sca_conf")) + "</span><b>" + esc(t("sca_c" + R.conf)) + '</b></div><div><span class="small muted">' + esc(t("sca_score")) + '</span><b class="num" dir="ltr">' + (R.tot > 0 ? "+" : "") + R.tot.toFixed(2) + '</b></div><div class="small">' + esc(t("sca_agree").replace("{a}", R.agree).replace("{n}", R.nAct)) + "</div></div>";
  const reads = R.res.map((r) => '<details class="sca-read"' + (R.res.length <= 3 ? " open" : "") + '><summary><b><a href="#sch-' + r.id + '">' + esc(scaName(r.id)) + "</a></b>" + scaTag(r.bias) + '<span class="small muted num" dir="ltr">' + (r.na ? "-" : (r.score > 0 ? "+" : "") + r.score.toFixed(1)) + "</span></summary><ul>" + r.lines.map((l) => "<li>" + esc(l) + "</li>").join("") + "</ul></details>").join("");
  const cmp = '<div class="tablewrap"><table class="sch-tbl"><thead><tr><th>' + esc(t("sch_name")) + "</th><th>" + esc(t("ex_bias")) + "</th><th>" + esc(t("sca_score")) + "</th><th>" + esc(t("sca_w")) + "</th></tr></thead><tbody>" + R.res.map((r) => "<tr><td>" + esc(scaName(r.id)) + "</td><td>" + scaTag(r.bias) + '</td><td class="num" dir="ltr">' + (r.na ? "-" : (r.score > 0 ? "+" : "") + r.score.toFixed(1)) + '</td><td class="num">' + (r.na ? "-" : r.w) + "</td></tr>").join("") + "</tbody></table></div>";
  const lvl = R.groups.length ? '<div class="tablewrap"><table class="sch-tbl"><thead><tr><th></th><th>' + esc(L(["السعر", "Price"])) + "</th><th>" + esc(t("sca_src")) + "</th></tr></thead><tbody>" + R.groups.map((g) => "<tr><td>" + (g.p > R.c ? '<span class="tag ex-dn">' + esc(t("sca_res")) + "</span>" : '<span class="tag up">' + esc(t("sca_sup")) + "</span>") + '</td><td class="num" dir="ltr">' + px(g.p) + "</td><td>" + esc(g.ids.map(scaName).join(L(["، ", ", "]))) + "</td></tr>").join("") + '</tbody></table></div><div><button class="btn sm" data-act="sca-draw">' + esc(t("sca_draw")) + "</button></div>" : '<p class="small muted">' + esc(L(["ما فيه مستوى اتفقت عليه مدرستين أو أكثر. اختر مدارس أكثر.", "No level is shared by two or more schools. Pick more schools."])) + "</p>";
  return '<div class="stack sca-out"><h3>' + esc(t("sca_res_h")) + ' <span class="small muted num" dir="ltr">' + esc(R.date || "") + " · " + px(R.c) + "</span></h3>" + final +
    "<h3>" + esc(t("sca_why")) + "</h3><ul>" + why.map((w) => "<li>" + esc(w) + "</li>").join("") + "</ul>" +
    "<h3>" + esc(t("sca_lv")) + "</h3>" + lvl + "<h3>" + esc(t("sca_scen")) + "</h3><ul>" + scen.map((w) => "<li>" + esc(w) + "</li>").join("") + "</ul>" +
    "<h3>" + esc(t("sca_cmp")) + "</h3>" + cmp + "<h3>" + esc(t("sca_each")) + "</h3>" + reads +
    '<p class="small muted" style="margin:0">' + esc(t("sca_how")) + " " + esc(t("sca_note")) + "</p></div>";
}
function scaPanel() {
  if (!CH || !CH.data) return "";
  const cfg = chartCfg(), key = cfg.sym + "|" + CH.e;
  const chips = SCA.sel.map((id) => '<span class="chip"><span>' + esc(scaName(id)) + '</span><button data-act="sca-del" data-id="' + id + '" aria-label="' + esc(t("ch_remove")) + '">×</button></span>').join("");
  const left = SCA_SCHOOLS.filter((id) => !SCA.sel.includes(id));
  const add = left.length ? '<select class="addsel" data-sca="add" aria-label="' + esc(t("sca_add")) + '"><option value="">' + esc(t("sca_add")) + "</option>" + left.map((id) => '<option value="' + id + '">' + esc(scaName(id)) + "</option>").join("") + "</select>" : "";
  const stale = SCA.res && SCA.key !== key;
  return '<div class="panel stack sca"><div class="row" style="justify-content:space-between;align-items:center"><h3 style="font-size:18px;margin:0">' + esc(t("sca_h")) + '</h3><a class="small" href="#schools">' + esc(t("sch_h")) + ' ↗</a></div><p class="small muted" style="margin:0">' + esc(t("sca_p")) + "</p>" +
    '<div class="row" style="gap:6px;flex-wrap:wrap;align-items:center">' + chips + add + (left.length ? '<button class="btn sm ghost" data-act="sca-all">' + esc(t("sca_all")) + "</button>" : "") + (SCA.sel.length ? '<button class="btn sm ghost" data-act="sca-clear">' + esc(t("sca_clear")) + "</button>" : "") + "</div>" +
    '<p class="small muted" style="margin:0">' + esc(t("sca_fund")) + "</p>" +
    '<div><button class="btn primary" data-act="sca-go"' + (SCA.sel.length ? "" : " disabled") + ">" + esc(t(stale ? "sca_again" : "sca_go")) + "</button></div>" +
    (SCA.res && !stale ? scaResultHtml(SCA.res) : "") + "</div>";
}
document.addEventListener("change", (ev) => {
  if (!ev.target.dataset || ev.target.dataset.sca !== "add" || !ev.target.value) return;
  SCA.sel.push(ev.target.value); scaSave(); render();
});
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest('[data-act^="sca-"]'); if (!el) return;
  const a = el.dataset.act; ev.preventDefault();
  if (a === "sca-del") SCA.sel = SCA.sel.filter((x) => x !== el.dataset.id);
  else if (a === "sca-all") SCA.sel = SCA_SCHOOLS.slice();
  else if (a === "sca-clear") { SCA.sel = []; SCA.res = null; }
  else if (a === "sca-go") {
    if (!SCA.sel.length) { toast(t("sca_pick")); return; }
    const all = CH.data.slice(0, CH.e);
    if (all.length < 40) { toast(t("sca_need").replace("{n}", all.length)); return; }
    const order = SCA_SCHOOLS.filter((x) => SCA.sel.includes(x));
    try { SCA.res = scaRun(all, order); SCA.key = chartCfg().sym + "|" + CH.e; } catch (e) { console.error(e); toast(String(e && e.message || e)); return; }
    render(); setTimeout(() => { const o = document.querySelector(".sca-out"); if (o) o.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60); return;
  }
  else if (a === "sca-draw") {
    const cfg = chartCfg(), list = (S.drawings[cfg.sym] || []).filter((d) => !d.sca);
    S.drawings[cfg.sym] = list.concat(SCA.res.groups.map((g) => ({ t: "h", p: Math.round(g.p * 100) / 100, auto: 1, sca: 1 }))); save(); toast(t("sca_drawn"));
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
  }
  scaSave(); render();
});
