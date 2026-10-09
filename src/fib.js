/* ===== مِراس: تحليل فيبوناتشي التلقائي =====
   يلقى آخر حركة واضحة في الشموع الظاهرة، يرسم مستويات التصحيح والامتداد،
   ويشرح كل مستوى ويقارنه بالمؤشرات المفعّلة. يوصف مستويات يراقبها السوق، وما يتوقع السعر. */
Object.assign(UI, {
  fb_btn: ["حلّل", "Analyse"], fb_h: ["تحليل فيبوناتشي", "Fibonacci analysis"],
  fb_p_up: ["الحركة المختارة صاعدة: من القاع {a} ({da}) إلى القمة {b} ({db}). مستويات التصحيح تحت القمة مناطق دعم محتملة لو رجع السعر، والامتداد فوقها مناطق يراقبها المتداولين لو كمّل.", "The selected move is up: from the low {a} ({da}) to the high {b} ({db}). Retracement levels below the high are possible support if price pulls back; extensions above it are areas traders watch if it continues."],
  fb_p_down: ["الحركة المختارة هابطة: من القمة {a} ({da}) إلى القاع {b} ({db}). مستويات التصحيح فوق القاع مناطق مقاومة محتملة لو ارتد السعر، والامتداد تحتها مناطق يراقبها المتداولين لو كمّل النزول.", "The selected move is down: from the high {a} ({da}) to the low {b} ({db}). Retracement levels above the low are possible resistance if price bounces; extensions below it are areas traders watch if the fall continues."],
  fb_none: ["ما لقيت حركة واضحة في الشموع الظاهرة. زد عدد الشموع أو اختر سهم ثاني.", "No clear move in the candles shown. Show more candles or pick another share."],
  fb_lvl: ["المستوى", "Level"], fb_px: ["السعر", "Price"], fb_now: ["مكان السعر الحين", "Where price is now"], fb_mean: ["وش يعني", "What it means"],
  fb_above: ["السعر فوقه بـ {p}%", "Price is {p}% above"], fb_below: ["السعر تحته بـ {p}%", "Price is {p}% below"], fb_at: ["السعر عنده", "Price is at it"],
  fb_ext_note: ["مستويات الامتداد (127.2% و161.8%) يسميها كثير من المتداولين \"أهداف\". هي أماكن يراقبها السوق لو كمّلت الحركة، مو توقع إن السعر بيوصلها.", "Extension levels (127.2% and 161.8%) are called \"targets\" by many traders. They are places the market watches if the move continues, not a forecast that price will reach them."],
  fb_conf_h: ["فيبوناتشي مقابل باقي المؤشرات", "Fibonacci against the other indicators"],
  fb_conf_p: ["فيبوناتشي يعطيك أماكن ثابتة على السعر، والمؤشرات الثانية تتحرك مع كل شمعة. لما يتلاقى مستوى فيبوناتشي مع مؤشر ثاني عند نفس السعر تقريباً، هذي المنطقة يراقبها عدد أكبر من المتداولين.", "Fibonacci gives you fixed places on price, while the other indicators move with every candle. When a Fibonacci level meets another indicator at roughly the same price, more traders are watching that area."],
  fb_conf: ["تلاقي: مستوى {l} ({p}) قريب من {n} ({v})، الفرق {d}%.", "Confluence: the {l} level ({p}) is close to {n} ({v}), {d}% apart."],
  fb_conf_none: ["ما فيه تلاقي واضح (أقل من 1%) بين مستويات فيبوناتشي والمؤشرات المفعّلة. أضف متوسط 20 أو بولنجر وشوف.", "No clear confluence (under 1%) between the Fibonacci levels and the active indicators. Add the 20 average or Bollinger and look again."],
  fb_cmp: [
    ["المتوسطات المتحركة تتبع السعر وتتأخر عنه، وفيبوناتشي ثابت على حركة اخترتها. المتوسط يجاوب: وين الاتجاه؟ وفيبوناتشي يجاوب: وين ممكن يوقف التصحيح؟", "Moving averages follow price with a lag, while Fibonacci is fixed on a move you chose. The average answers: where is the trend? Fibonacci answers: where might the pullback stop?"],
    ["بولنجر يتسع ويضيق مع التذبذب. لو خطه السفلي قريب من مستوى فيبوناتشي، المنطقة أقوى.", "Bollinger widens and narrows with volatility. If its lower line is near a Fibonacci level, the area is stronger."],
    ["RSI والماكد يقيسون الزخم وما يعطونك أسعار. استخدمهم كتأكيد عند وصول السعر لمستوى فيبوناتشي: تشبع بيعي عند 61.8% أقوى من 61.8% لحاله.", "RSI and MACD measure momentum and give no prices. Use them as confirmation when price reaches a Fibonacci level: oversold at 61.8% is stronger than 61.8% alone."]
  ],
  fb_auto: ["حلّل تلقائياً لما توصل أسعار جديدة", "Analyse automatically when new prices arrive"],
  fb_auto_note: ["يشتغل لما تفتح الشارت على سهم حقيقي وفيه شمعة جديدة. شرح الذكاء الاصطناعي ينطلب مرة وحدة لكل شمعة جديدة وينحفظ.", "Runs when you open the chart on a real share that has a new candle. The AI explanation is requested once per new candle and saved."],
  fb_cached: ["من تحليل محفوظ", "From a saved analysis"],
  fb_q: ["اشرح مستويات فيبوناتشي المرسومة على هذا الشارت: وش معنى كل مستوى، وأي مستوى السعر قريب منه الحين، وكيف تتفق أو تختلف مع المؤشرات الثانية المفعّلة.", "Explain the Fibonacci levels drawn on this chart: what each level means, which level price is near now, and how they agree or disagree with the other active indicators."]
});

const FIB_R = [-0.618, -0.272, 0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];
const fibLabel = (r) => (r < 0 ? 100 + Math.abs(r) * 100 : r * 100).toFixed(1).replace(".0", "") + "%";
const FIB_MEAN = {
  "0": ["نهاية الحركة. السعر لو تجاوزها، الحركة مستمرة.", "The end of the move. If price goes past it, the move is continuing."],
  "0.236": ["تصحيح خفيف. الارتداد من هنا يدل على حركة قوية ما صبر فيها المتداولين.", "A shallow pullback. A turn here suggests a strong move where traders did not wait."],
  "0.382": ["أول منطقة تصحيح مهمة. كثير من الاتجاهات الصحية ترتد منها.", "The first important pullback area. Many healthy trends turn here."],
  "0.5": ["منتصف الحركة. مو من أرقام فيبوناتشي، لكنه مستوى نفسي يراقبه الكل.", "The middle of the move. Not a Fibonacci number, but a psychological level everyone watches."],
  "0.618": ["النسبة الذهبية وأشهر مستوى. ثبات السعر عنده يحافظ على الحركة الأصلية.", "The golden ratio and the best-known level. Price holding here keeps the original move alive."],
  "0.786": ["آخر خط دفاع. كسره غالباً يعني إن الحركة الأصلية انتهت.", "The last line of defence. Breaking it usually means the original move is over."],
  "1": ["بداية الحركة. الرجوع لها يلغي الحركة كاملة.", "The start of the move. Returning here cancels the whole move."],
  "-0.272": ["الامتداد الأول. لو كمّل السعر بعد نهاية الحركة، أول منطقة يراقبها المتداولين لجني الأرباح.", "The first extension. If price continues past the end of the move, the first area traders watch for taking profit."],
  "-0.618": ["الامتداد الذهبي. منطقة شائعة في الحركات القوية، ويوصلها السعر أقل من غيرها.", "The golden extension. A common area in strong moves, and one price reaches less often."]
};

/* the dominant move among the candles shown: lowest low and highest high, ordered by which came first */
function autoFib(data, s, e) {
  if (e - s < 15) return null;
  let lo = s, hi = s;
  for (let i = s; i < e; i++) { if (data[i].l < data[lo].l) lo = i; if (data[i].h > data[hi].h) hi = i; }
  if (lo === hi || data[hi].h - data[lo].l <= 0) return null;
  const r2 = (x) => Math.round(x * 100) / 100;
  return lo < hi ? { t: "f", i1: lo, p1: r2(data[lo].l), i2: hi, p2: r2(data[hi].h), auto: 1, ext: 1 } : { t: "f", i1: hi, p1: r2(data[hi].h), i2: lo, p2: r2(data[lo].l), auto: 1, ext: 1 };
}

function fibSection() {
  const cfg = chartCfg(), list = S.drawings[cfg.sym] || [], f = list.filter((d) => d.t === "f").slice(-1)[0];
  if (!f || !CH) return "";
  const last = CH.data[CH.e - 1]; if (!last) return "";
  const c = last.c, up = f.p2 > f.p1, rs = f.ext ? FIB_R : FIB_R.filter((r) => r >= 0), price = (r) => f.p2 - (f.p2 - f.p1) * r;
  const day = (i) => (CH.data[i] && CH.data[i].d) || t("ch_day") + " " + (i + 1);
  const head = t(up ? "fb_p_up" : "fb_p_down").replace("{a}", f.p1.toFixed(2)).replace("{da}", day(f.i1)).replace("{b}", f.p2.toFixed(2)).replace("{db}", day(f.i2));
  const rows = rs.slice().sort((a, b) => price(b) - price(a)).map((r) => {
    const p = price(r), d = ((c - p) / p) * 100, st = Math.abs(d) < 0.3 ? t("fb_at") : t(d > 0 ? "fb_above" : "fb_below").replace("{p}", Math.abs(d).toFixed(1));
    return '<tr class="' + (r < 0 ? "ext" : r === 0.5 || r === 0.618 ? "key" : "") + '"><td class="num"><b>' + fibLabel(r) + '</b></td><td class="num">' + p.toFixed(2) + '</td><td class="small">' + esc(st) + '</td><td class="note">' + esc(L(FIB_MEAN[String(r)])) + "</td></tr>";
  }).join("");
  /* confluence: fibonacci levels within 1% of an indicator value or a drawn line */
  const refs = [], li = CH.e - 1;
  CH.lines.forEach((ln) => { if (ln.v[li] != null) refs.push([ln.name, ln.v[li]]); });
  if (CH.bb && CH.bb.up[li] != null) { refs.push([t("ch_bb") + " " + t("ch_up"), CH.bb.up[li]]); refs.push([t("ch_bb") + " " + t("ch_low"), CH.bb.lo[li]]); }
  list.filter((d) => d.t === "h").forEach((d) => refs.push([t("ch_h_lbl") + " " + d.p.toFixed(2), d.p]));
  const conf = [];
  rs.forEach((r) => refs.forEach(([n, v]) => { const p = price(r), dd = Math.abs(p - v) / p * 100; if (dd < 1) conf.push(t("fb_conf").replace("{l}", fibLabel(r)).replace("{p}", p.toFixed(2)).replace("{n}", n).replace("{v}", v.toFixed(2)).replace("{d}", dd.toFixed(2))); }));
  return '<div class="fibbox stack"><h3>' + esc(t("fb_h")) + '</h3><p class="small">' + esc(head) + '</p><div class="tablewrap"><table class="fibtbl"><thead><tr><th>' + esc(t("fb_lvl")) + "</th><th>" + esc(t("fb_px")) + "</th><th>" + esc(t("fb_now")) + "</th><th>" + esc(t("fb_mean")) + "</th></tr></thead><tbody>" + rows + "</tbody></table></div>" +
    (f.ext ? '<p class="small muted">' + esc(t("fb_ext_note")) + "</p>" : "") +
    '<div class="stack" style="gap:8px"><b>' + esc(t("fb_conf_h")) + '</b><p class="small muted">' + esc(t("fb_conf_p")) + "</p>" + (conf.length ? conf.slice(0, 5).map((x) => '<p class="conf">' + esc(x) + "</p>").join("") : '<p class="small">' + esc(t("fb_conf_none")) + "</p>") + "<ul class=\"small\" style=\"margin:0;padding-inline-start:20px;display:flex;flex-direction:column;gap:4px\">" + UI.fb_cmp.map((x) => "<li>" + esc(L(x)) + "</li>").join("") + "</ul></div></div>";
}

/* ----- analysis: draw the auto fib, open the reading, ask the model once per candle ----- */
const AIC_KEY = "meras.aicache";
let aiCache = {}; try { aiCache = JSON.parse(localStorage.getItem(AIC_KEY) || "{}"); } catch (e) {}
const analysisKey = () => { const cfg = chartCfg(), d = chartData(cfg.sym), l = d[d.length - 1]; return l ? cfg.sym + "|" + (l.d || d.length) + "|" + l.c + "|" + (cfg.n || "") + "|" + S.lang : null; };
async function runAnalysis(force) {
  const cfg = chartCfg();
  if (!CH) return;
  const f = autoFib(CH.data, CH.s, CH.e);
  if (!f) { toast(t("fb_none")); return; }
  S.drawings[cfg.sym] = (S.drawings[cfg.sym] || []).filter((d) => !(d.t === "f" && d.auto)).concat([f]);
  chReading = true; save(); render();
  if (!(typeof aiReady === "function" && aiReady() && AI.model)) return;
  const key = analysisKey();
  if (!force && key && aiCache[key]) { aiState = { busy: false, text: aiCache[key].text, err: "", model: aiCache[key].model + " · " + t("fb_cached") }; render(); return; }
  await aiExplain(t("fb_q"));
  if (aiState.text && key) { aiCache[key] = { text: aiState.text, model: aiState.model, at: Date.now() }; const ks = Object.keys(aiCache).sort((a, b) => aiCache[a].at - aiCache[b].at); while (ks.length > 30) delete aiCache[ks.shift()]; try { localStorage.setItem(AIC_KEY, JSON.stringify(aiCache)); } catch (e) {} }
}
let autoDone = {};
function maybeAutoAnalysis() {
  const cfg = chartCfg(); if (!cfg.autoAI || PRACTICE[cfg.sym] || route() !== "chart") return;
  const key = analysisKey(); if (!key || autoDone[key]) return;
  const d = chartData(cfg.sym); if (d.length < 20) return;
  autoDone[key] = true; runAnalysis(false);
}
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest('[data-act="ch-analyze"]'); if (!el) return;
  runAnalysis(ev.shiftKey);
});
document.addEventListener("change", (ev) => {
  if (ev.target.id !== "fb-auto") return;
  chartCfg().autoAI = ev.target.checked; save(); render(); maybeAutoAnalysis();
});
