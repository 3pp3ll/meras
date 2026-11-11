/* ===== مِراس: التحليل العميق =====
   الفلتر القوي (#deep)، صفحة التحليل العميق لكل سهم (#deep-SYM)، ونافذة «مختصر نتيجة التحليل» (بنص الشاشة).
   البيانات: deep.json (شاشة TradingView لكل الأسهم المتوافقة)، gex.json (قاما من CBOE)، deep_ch.json (شموع 80 يوم).
   الدرجة والوصف ينحسبون هنا. وصف آلي لحالة السعر، مو توصية. الفلتر والصفحة للمالك (والأعضاء الموثوقين لاحقاً). */
Object.assign(UI, {
  dp_t: ["التحليل العميق", "Deep analysis"], dp_d: ["فلتر قوي يعطي كل سهم متوافق درجة من 5 محاور، وصفحة تحليل لكل سهم.", "A strong filter that scores every compliant share on 5 axes, with a full page per share."],
  dp_p: ["يمر على الأسهم المتوافقة شرعياً بس، ويعطي كل سهم درجة من 100: الاتجاه، الزخم، الحجم، التذبذب، وقاما. اختر الشروط وتطلع الأسهم اللي تنطبق عليها كلها.", "Covers Sharia-compliant shares only and scores each out of 100 on trend, momentum, volume, volatility and gamma. Pick conditions to see the shares that meet all of them."],
  dp_f_up: ["اتجاه صاعد", "Uptrend"], dp_f_mom: ["زخم قوي", "Strong momentum"], dp_f_vol: ["حجم فوق المعدل", "Above-average volume"], dp_f_calm: ["تذبذب هادي", "Calm"], dp_f_gpos: ["قاما موجبة", "Positive gamma"], dp_f_near: ["قريب من دعم", "Near support"],
  dp_all: ["الكل", "All"], dp_us: ["الأمريكي", "US"], dp_sa: ["السعودي", "Saudi"], dp_q: ["ابحث بالاسم أو الرمز", "Search by name or symbol"],
  dp_c_sym: ["السهم", "Share"], dp_c_score: ["الدرجة", "Score"], dp_c_trend: ["الاتجاه", "Trend"], dp_c_vol: ["التذبذب", "Volatility"], dp_c_g: ["قاما", "Gamma"], dp_c_lv: ["أقرب مستوى", "Nearest level"],
  dp_n: ["{n} سهم من {t}", "{n} of {t} shares"], dp_none: ["ما فيه سهم ينطبق عليه كل الشروط. شيل شرط.", "No share meets every condition. Remove one."], dp_more: ["اعرض أكثر", "Show more"],
  dp_up: ["صاعد", "Up"], dp_down: ["هابط", "Down"], dp_side: ["عرضي", "Sideways"], dp_calm: ["هادي", "Calm"], dp_mid: ["متوسط", "Moderate"], dp_high: ["مرتفع", "High"],
  dp_gp: ["موجبة", "Positive"], dp_gn: ["سالبة", "Negative"], dp_gx: ["ما له خيارات", "No options"], dp_sup: ["دعم", "Support"], dp_res: ["مقاومة", "Resistance"],
  dp_sum: ["مختصر نتيجة التحليل", "Analysis summary"], dp_sum_s: ["مختصر", "Summary"], dp_open: ["تحليل عميق", "Deep analysis"], dp_back: ["الفلتر", "Filter"], dp_chart: ["افتح في الشارت", "Open on the chart"],
  dp_k_score: ["الدرجة", "Score"], dp_s_trend: ["الاتجاه والمتوسطات", "Trend and averages"], dp_s_mom: ["الزخم", "Momentum"], dp_s_lv: ["التذبذب ومستوياته", "Volatility and levels"],
  dp_s_lv_p: ["المدى المتوقع من متوسط المدى الحقيقي (ATR) لكل فترة، والدعم والمقاومة من نقاط الارتكاز الكلاسيكية.", "Expected range from the average true range (ATR) of each period; support and resistance from classic pivot points."],
  dp_day: ["اليوم", "Day"], dp_week: ["الأسبوع", "Week"], dp_month: ["الشهر", "Month"], dp_per: ["الفترة", "Period"], dp_rng: ["المدى المتوقع", "Expected range"],
  dp_s_g: ["قاما (Gamma Exposure)", "Gamma exposure"], dp_s_v: ["الحجم والأداء", "Volume and performance"],
  dp_g_p: ["قاما موجبة: صنّاع السوق يبيعون مع الصعود ويشترون مع النزول، فالحركة تميل للهدوء بين الجدارين.", "Positive gamma: dealers sell rallies and buy dips, so moves tend to stay calm between the walls."],
  dp_g_n: ["قاما سالبة: صنّاع السوق يلحقون الحركة، فالصعود والنزول يكونون أسرع وأعنف.", "Negative gamma: dealers chase the move, so rallies and drops run faster."],
  dp_g_lv: ["نقطة الانقلاب {f} · جدار الكول {c} · جدار البوت {p}", "Flip {f} · call wall {c} · put wall {p}"],
  dp_g_src: ["من عقود الخيارات اللي تنتهي خلال 60 يوم (الكمية المفتوحة × قاما)، بيانات CBOE متأخرة 15 دقيقة، تتحدث مرة باليوم.", "From options expiring within 60 days (open interest × gamma), CBOE data delayed 15 minutes, updated daily."],
  dp_g_none: ["ما فيه بيانات قاما لهذا السهم: إما ما له عقود خيارات (مثل الأسهم السعودية) أو مو من أكبر 60 سهم نحسبها.", "No gamma data for this share: it either has no options (like Saudi shares) or is outside the 60 largest we compute."],
  dp_tr_up: ["السعر فوق متوسط 50 و200 يوم: الاتجاه العام صاعد.", "Price is above the 50- and 200-day averages: the main trend is up."],
  dp_tr_dn: ["السعر تحت متوسط 50 و200 يوم: الاتجاه العام هابط.", "Price is below the 50- and 200-day averages: the main trend is down."],
  dp_tr_sd: ["السعر بين متوسط 50 و200 يوم: ما فيه اتجاه واضح.", "Price sits between the 50- and 200-day averages: no clear trend."],
  dp_ab20: ["فوق متوسط 20", "above the 20-day"], dp_bl20: ["تحت متوسط 20", "below the 20-day"],
  dp_m_txt: ["RSI عند {r}{z}. MACD {m} خط الإشارة.", "RSI at {r}{z}. MACD is {m} its signal line."], dp_m_ob: [" (تشبع شراء)", " (overbought)"], dp_m_os: [" (تشبع بيع)", " (oversold)"], dp_m_n: [" (لا تشبع شراء ولا بيع)", " (neither overbought nor oversold)"],
  dp_m_ab: ["فوق", "above"], dp_m_bl: ["تحت", "below"],
  dp_v_txt: ["حجم اليوم {x}× معدل 30 يوم. الأداء: أسبوع {w}، شهر {m}، 3 شهور {q}.", "Volume today {x}× the 30-day average. Performance: week {w}, month {m}, 3 months {q}."],
  dp_52: ["مكانه بين أدنى وأعلى سعر في 52 أسبوع", "Position within the 52-week range"],
  dp_pos: ["وضع السهم", "Position"], dp_dvol: ["الذبذبة اليومية", "Daily swing"], dp_wrng: ["المدى الأسبوعي", "Weekly range"],
  dp_pos_up: ["صاعد فوق متوسطاته", "Rising above its averages"], dp_pos_dn: ["هابط تحت متوسطاته", "Falling below its averages"], dp_pos_sd: ["يتحرك في نطاق", "Moving in a range"],
  dp_sum_txt: ["أقرب دعم {s} وأقرب مقاومة {r}.", "Nearest support {s}, nearest resistance {r}."],
  dp_lg_s20: ["متوسط 20", "20-day avg"], dp_lg_s50: ["متوسط 50", "50-day avg"], dp_lg_bb: ["بولنجر", "Bollinger"], dp_lg_w: ["جدار الكول / البوت", "Call / put wall"], dp_lg_p: ["دعم / مقاومة الشهر", "Monthly support / resistance"],
  dp_nochart: ["ما عندنا شموع لهذا السهم، فالنافذة تعرض المستويات بس.", "No candles for this share, so only the levels are shown."],
  dp_note: ["وصف آلي لحالة السعر، مو توصية شراء أو بيع.", "An automatic description of price action, not a buy or sell recommendation."],
  dp_at: ["آخر تحديث {d}", "Updated {d}"], dp_wait: ["جاري تحميل التحليل…", "Loading the analysis…"],
  dp_nodata: ["بيانات التحليل العميق لسا ما وصلت. تتحدث بعد إقفال السوق السعودي والأمريكي.", "Deep-analysis data hasn't arrived yet. It updates after the Saudi and US closes."],
  dp_notfound: ["ما لقيت هذا السهم في التحليل العميق (يشمل الأسهم المتوافقة بس).", "This share isn't in the deep analysis (compliant shares only)."],
  dp_close: ["سكّر", "Close"], dp_search_ch: ["اكتب اسم السهم أو رمزه", "Type a share name or symbol"], dp_nores: ["ما لقيت سهم بهالاسم", "No share by that name"],
  dp_sh: ["الأسهم الشرعية", "Compliant shares"], dp_sh_p: ["كل الأسهم الأمريكية المتوافقة عندنا، مقسمة حسب القطاع. اضغط السهم لتحليله.", "Every compliant US share we track, grouped by sector. Tap a share to analyse it."],
  dp_other: ["أخرى", "Other"]
});

let DEEP = null, DEEPCH = null, GEX = null, dpLoading = false, dpTried = false, dpF = { f: ["up"], m: "all", q: "", n: 40 };
try { const x = JSON.parse(localStorage.getItem("meras.dpf") || "null"); if (x && Array.isArray(x.f)) dpF = Object.assign(dpF, x, { n: 40, q: "" }); } catch (e) {}
const dpOwner = () => typeof isOwner === "function" && isOwner();

async function ghRaw(path) {
  if (!(typeof HOSTED !== "undefined" && HOSTED) || !CFG.token) return null;
  try {
    const r = await fetch("https://api.github.com/repos/" + encodeURIComponent(CFG.owner) + "/" + encodeURIComponent(CFG.repo) + "/contents/" + path + "?t=" + Date.now(), {
      cache: "no-store", headers: { Authorization: "Bearer " + CFG.token, Accept: "application/vnd.github.raw+json", "X-GitHub-Api-Version": "2022-11-28" }
    });
    if (!r.ok) return null;
    return await r.json();
  } catch (e) { return null; }
}
async function dpLoad(force) {
  if (dpLoading || (dpTried && !force) || !dpOwner()) return; dpLoading = true; dpTried = true;
  const [a, b] = await Promise.all([ghRaw("deep.json"), ghRaw("gex.json")]);
  if (a && a.s) DEEP = a; if (b && b.s) GEX = b;
  dpLoading = false;
  if (/^(deep|usm|sharia|chart|screener)/.test(route())) render();
  const c = await ghRaw("deep_ch.json"); if (c && c.s) { DEEPCH = c; if (/^(deep|chart)/.test(route())) render(); }
}

/* شموع السهم: من الشارت إذا موجودة، وإلا من deep_ch.json */
function dpRows(sym) {
  const live = typeof LIVE !== "undefined" && LIVE.history && LIVE.history[sym];
  if (live && live.length > 20) return live.filter((r) => r && isFinite(r.o) && isFinite(r.c));
  const d = DEEPCH && DEEPCH.s[sym];
  return d ? d.map(([dd, o, h, l, c, v]) => ({ d: dd, o, h, l, c, v })) : [];
}
{ const oc = chartData; chartData = function (sym) { const r = oc(sym); return r.length || PRACTICE[sym] ? r : dpRows(sym); }; }

/* لو ما فيه صف من deep.json (مثلاً سهم في الشارت مو متوافق أو للزوار)، نحسب من الشموع */
function dpFromRows(sym, rows) {
  if (!rows || rows.length < 25) return null;
  const cl = rows.map((r) => r.c), n = cl.length, last = rows[n - 1];
  const avg = (p) => (n >= p ? cl.slice(-p).reduce((a, b) => a + b, 0) / p : null);
  const tr = rows.slice(1).map((r, i) => Math.max(r.h - r.l, Math.abs(r.h - rows[i].c), Math.abs(r.l - rows[i].c)));
  const atr = tr.slice(-14).reduce((a, b) => a + b, 0) / Math.min(14, tr.length);
  let g = 0, l = 0; for (let i = n - 14; i < n; i++) { const d = cl[i] - cl[i - 1]; if (d > 0) g += d; else l -= d; }
  const piv = (rs) => { const h = Math.max(...rs.map((r) => r.h)), lo = Math.min(...rs.map((r) => r.l)), c = rs[rs.length - 1].c, p = (h + lo + c) / 3; return { s2: p - (h - lo), s1: 2 * p - h, p, r1: 2 * p - lo, r2: p + (h - lo) }; };
  return { m: /^\d{4}$/.test(sym) ? "SA" : "US", n: typeof symName === "function" ? symName(sym) : sym, c: last.c, ch: n > 1 ? ((last.c - cl[n - 2]) / cl[n - 2]) * 100 : null, v: last.v, av: rows.slice(-30).reduce((a, r) => a + (r.v || 0), 0) / Math.min(30, n),
    rsi: l === 0 ? 100 : +(100 - 100 / (1 + g / l)).toFixed(1), s20: avg(20), s50: avg(50), s200: avg(200), atr, atrw: atr * Math.sqrt(5), atrm: atr * Math.sqrt(21),
    pd: piv(rows.slice(-1)), pw: piv(rows.slice(-5)), pm: piv(rows.slice(-21)), pf: [null, null, null], calc: true };
}
const dpRow = (sym) => (DEEP && DEEP.s[sym]) || dpFromRows(sym, dpRows(sym));

function dpTrend(r) { if (r.c == null || r.s50 == null) return "side"; if (r.c > r.s50 && (r.s200 == null || r.c > r.s200)) return "up"; if (r.c < r.s50 && (r.s200 == null || r.c < r.s200)) return "down"; return "side"; }
function dpAtrPct(r) { return r.atr && r.c ? (r.atr / r.c) * 100 : null; }
function dpVolLab(r) { const a = dpAtrPct(r); return a == null ? "mid" : a < 2.2 ? "calm" : a < 4 ? "mid" : "high"; }
function dpGex(sym) { return GEX && GEX.s[sym]; }
function dpLevels(r) { const out = []; ["pd", "pw", "pm"].forEach((k) => { const p = r[k]; if (p) ["s2", "s1", "r1", "r2"].forEach((x) => p[x] != null && out.push(p[x])); }); return out; }
function dpNear(r, sym) {
  const g = dpGex(sym), ls = dpLevels(r).concat(g ? [g.flip, g.pw, g.cw].filter((x) => x != null) : []), c = r.c;
  const sup = ls.filter((x) => x < c).sort((a, b) => b - a)[0], res = ls.filter((x) => x > c).sort((a, b) => a - b)[0];
  return { sup, res };
}
function dpScore(r, sym) {
  let tr = 0, mo = 0, vo = 0, vl = 0, gm = 10;
  if (r.c > r.s20) tr += 6; if (r.c > r.s50) tr += 7; if (r.s50 != null && r.s200 != null && r.s50 > r.s200) tr += 7; if (r.s200 != null && r.c > r.s200) tr += 5;
  if (r.rsi != null) mo += r.rsi >= 50 && r.rsi <= 70 ? 15 : r.rsi > 70 ? 9 : r.rsi >= 40 ? 7 : 3;
  if (r.macd != null && r.sig != null && r.macd > r.sig) mo += 10;
  const x = r.av ? r.v / r.av : null; if (x != null) vo = x >= 1.5 ? 15 : x >= 1 ? 10 : x >= 0.7 ? 5 : 2;
  const a = dpAtrPct(r); if (a != null) vl = a < 2.2 ? 15 : a < 4 ? 10 : a < 6 ? 6 : 2;
  const g = dpGex(sym); if (g) gm = g.tot > 0 ? (g.flip == null || r.c >= g.flip ? 20 : 13) : 4;
  return Math.max(0, Math.min(100, Math.round(tr + mo + vo + vl + gm)));
}
const DP_F = {
  up: (r) => dpTrend(r) === "up",
  mom: (r) => r.rsi != null && r.rsi >= 55 && r.rsi <= 72 && (r.macd == null || r.macd > r.sig),
  vol: (r) => r.av && r.v >= r.av * 1.2,
  calm: (r) => dpVolLab(r) === "calm",
  gpos: (r, s) => { const g = dpGex(s); return !!g && g.tot > 0; },
  near: (r, s) => { const n = dpNear(r, s).sup; return n != null && (r.c - n) / r.c <= 0.02; }
};
const dpPx = (r, v) => (v == null || !isFinite(v) ? "–" : (r.m === "US" ? "$" : "") + fmt(v, v < 5 ? 3 : 2));
const dpPc = (v) => (v == null ? "–" : '<span class="chg ' + (v >= 0 ? "up" : "down") + ' num" dir="ltr">' + (v >= 0 ? "+" : "") + fmt(v, 2) + "%</span>");
const dpTag = (cls, txt) => '<span class="tag ' + cls + '">' + esc(txt) + "</span>";
const dpTrTag = (k) => dpTag(k === "up" ? "up" : k === "down" ? "down" : "amber", t("dp_" + k));
const dpVlTag = (k) => dpTag(k === "calm" ? "up" : k === "high" ? "down" : "amber", t("dp_" + k));
const dpGTag = (s) => { const g = dpGex(s); return g ? dpTag(g.tot > 0 ? "up" : "down", t(g.tot > 0 ? "dp_gp" : "dp_gn")) : '<span class="small muted">' + esc(t("dp_gx")) + "</span>"; };

function dpTabs(cur) {
  return '<nav class="v2-tabs" aria-label="' + esc(t("v2_opps")) + '">' + [["screener", "sc_t"], ["movers", "tp_t"], ["radar", "rd_t"], ["deep", "dp_t"]].map(([h, k]) => '<a href="#' + h + '"' + (h === cur ? ' aria-current="page"' : "") + ">" + esc(t(k)) + "</a>").join("") + "</nav>";
}

function pageDeep(sym) {
  if (!dpOwner()) return '<div class="wrap"><div class="page-head"><h1>' + esc(t("dp_t")) + '</h1></div><div class="notice">' + esc(t("dp_nodata")) + "</div></div>";
  dpLoad();
  if (sym) return dpPage(decodeURIComponent(sym));
  const head = '<div class="page-head"><h1>' + esc(t("v2_opps")) + "</h1></div>" + dpTabs("deep");
  if (!DEEP) return '<div class="wrap">' + head + '<div class="stack" style="padding-block:14px"><div class="notice">' + esc(t(dpLoading || !dpTried ? "dp_wait" : "dp_nodata")) + "</div></div></div>";
  const all = Object.entries(DEEP.s).filter(([s, r]) => (dpF.m === "all" || r.m === dpF.m) && r.c != null);
  const q = dpF.q.trim().toLowerCase();
  const rows = all.filter(([s, r]) => dpF.f.every((k) => DP_F[k] && DP_F[k](r, s)) && (!q || s.toLowerCase().includes(q) || (r.n || "").toLowerCase().includes(q)))
    .map(([s, r]) => [s, r, dpScore(r, s)]).sort((a, b) => b[2] - a[2]);
  const chip = (k) => '<button class="chipf" data-act="dp-f" data-k="' + k + '" aria-pressed="' + dpF.f.includes(k) + '">' + esc(t("dp_f_" + k)) + "</button>";
  const mk = (k, lab) => '<button class="chipf" data-act="dp-m" data-k="' + k + '" aria-pressed="' + (dpF.m === k) + '">' + esc(t(lab)) + "</button>";
  const tr = rows.slice(0, dpF.n).map(([s, r, sc]) => { const nr = dpNear(r, s), lv = nr.sup != null ? t("dp_sup") + " " + dpPx(r, nr.sup) : nr.res != null ? t("dp_res") + " " + dpPx(r, nr.res) : "–";
    return '<tr><td><a class="dp-sym" href="#deep-' + encodeURIComponent(s) + '"><b class="num">' + esc(s) + '</b> <span class="small muted">' + esc((r.n || "").slice(0, 26)) + '</span></a></td><td><span class="dp-score"><b class="num">' + sc + '</b><span class="dp-bar"><i style="width:' + sc + '%"></i></span></span></td><td class="num">' + dpPx(r, r.c) + " " + dpPc(r.ch) + "</td><td>" + dpTrTag(dpTrend(r)) + "</td><td>" + dpVlTag(dpVolLab(r)) + "</td><td>" + dpGTag(s) + '</td><td class="small">' + esc(lv) + '</td><td><button class="btn sm" data-act="dp-sum" data-s="' + esc(s) + '" title="' + esc(t("dp_sum")) + '">⚡ ' + esc(t("dp_sum_s")) + "</button></td></tr>"; }).join("");
  const mob = rows.slice(0, dpF.n).map(([s, r, sc]) => { const nr = dpNear(r, s), lv = nr.sup != null ? t("dp_sup") + " " + dpPx(r, nr.sup) : nr.res != null ? t("dp_res") + " " + dpPx(r, nr.res) : "";
    return '<li><a class="dp-mh" href="#deep-' + encodeURIComponent(s) + '"><b class="num">' + esc(s) + '</b><span class="dp-un">' + esc(r.n || "") + '</span><span class="dp-score"><b class="num">' + sc + '</b><span class="dp-bar"><i style="width:' + sc + '%"></i></span></span></a><div class="dp-mr"><span class="num">' + dpPx(r, r.c) + " " + dpPc(r.ch) + "</span>" + dpTrTag(dpTrend(r)) + dpVlTag(dpVolLab(r)) + (dpGex(s) ? dpGTag(s) : "") + '</div><div class="dp-mr"><span class="small muted">' + esc(lv) + '</span><button class="btn sm" data-act="dp-sum" data-s="' + esc(s) + '">⚡ ' + esc(t("dp_sum")) + "</button></div></li>"; }).join("");
  return '<div class="wrap">' + head + '<div class="stack" style="padding-block:14px">' +
    '<div class="panel stack"><p class="small muted" style="margin:0">' + esc(t("dp_p")) + "</p>" +
    '<div class="row dp-chips" role="group" aria-label="' + esc(t("dp_t")) + '">' + mk("all", "dp_all") + mk("US", "dp_us") + mk("SA", "dp_sa") + '<i class="sep"></i>' + ["up", "mom", "vol", "calm", "gpos", "near"].map(chip).join("") + "</div>" +
    '<div class="dp-q"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input id="dp-q" type="search" value="' + esc(dpF.q) + '" placeholder="' + esc(t("dp_q")) + '" aria-label="' + esc(t("dp_q")) + '" autocomplete="off"></div>' +
    '<div class="dp-scroll dp-desk"><table class="dp-tbl"><thead><tr><th>' + esc(t("dp_c_sym")) + "</th><th>" + esc(t("dp_c_score")) + "</th><th>" + esc(t("us_last")) + "</th><th>" + esc(t("dp_c_trend")) + "</th><th>" + esc(t("dp_c_vol")) + "</th><th>" + esc(t("dp_c_g")) + "</th><th>" + esc(t("dp_c_lv")) + "</th><th></th></tr></thead><tbody>" +
    (tr || '<tr><td colspan="8" class="small muted">' + esc(t("dp_none")) + "</td></tr>") + "</tbody></table></div>" +
    '<ul class="dp-mob">' + (mob || '<li class="small muted">' + esc(t("dp_none")) + "</li>") + "</ul>" +
    '<div class="row" style="justify-content:space-between"><span class="small muted">' + esc(t("dp_n").replace("{n}", rows.length).replace("{t}", all.length)) + " · " + esc(t("dp_at").replace("{d}", whenText(DEEP.at))) + "</span>" + (rows.length > dpF.n ? '<button class="btn sm" data-act="dp-more">' + esc(t("dp_more")) + "</button>" : "") + "</div>" +
    '<p class="small muted" style="margin:0">' + esc(t("dp_note")) + "</p></div></div></div>";
}

function dpLvRows(r) {
  const per = [["dp_day", r.atr, r.pd], ["dp_week", r.atrw, r.pw], ["dp_month", r.atrm, r.pm]];
  return '<div class="dp-scroll"><table class="dp-lv"><thead><tr><th>' + esc(t("dp_per")) + "</th><th>" + esc(t("dp_rng")) + "</th><th>" + esc(t("dp_sup")) + "</th><th>" + esc(t("dp_res")) + "</th></tr></thead><tbody>" +
    per.map(([k, a, p]) => "<tr><td><b>" + esc(t(k)) + '</b></td><td class="num" dir="ltr">' + (a && r.c ? "±" + fmt((a / r.c) * 100, 1) + '%<br><span class="small muted">' + dpPx(r, r.c - a) + " – " + dpPx(r, r.c + a) + "</span>" : "–") + '</td><td class="num chg up">' + (p ? dpPx(r, p.s1) : "–") + '</td><td class="num chg down">' + (p ? dpPx(r, p.r1) : "–") + "</td></tr>").join("") + "</tbody></table></div>";
}
function dpGexSvg(sym) {
  const g = dpGex(sym); if (!g || !g.k || !g.k.length) return "";
  const W = 640, H = 190, P = 26, ks = g.k, mx = Math.max(...ks.map((x) => Math.abs(x[1]))) || 1, bw = (W - 2 * P) / ks.length, mid = H / 2 - 8, sc = (H / 2 - 28) / mx;
  const xOf = (v) => { const i = ks.findIndex((x) => x[0] >= v); return P + (i < 0 ? ks.length : i) * bw + bw / 2; };
  let s = '<line x1="' + P + '" x2="' + (W - P) + '" y1="' + mid + '" y2="' + mid + '" class="dp-ax"/>';
  const every = Math.ceil(ks.length / 10);
  ks.forEach(([k, v], i) => { const h = Math.abs(v) * sc; s += '<rect x="' + (P + i * bw + bw * 0.15) + '" y="' + (v >= 0 ? mid - h : mid) + '" width="' + bw * 0.7 + '" height="' + Math.max(1, h) + '" rx="2" class="' + (v >= 0 ? "dp-gp" : "dp-gn") + '"/>' + (i % every === 0 ? '<text x="' + (P + i * bw + bw / 2) + '" y="' + (H - 6) + '" text-anchor="middle" class="dp-tx">' + fmt(k, k < 50 ? 1 : 0) + "</text>" : ""); });
  const px = xOf(g.spot); s += '<line x1="' + px + '" x2="' + px + '" y1="12" y2="' + (H - 22) + '" class="dp-spot"/><text x="' + px + '" y="11" text-anchor="middle" class="dp-tx dp-spt">' + fmt(g.spot, 2) + "</text>";
  return '<div class="dp-svg dp-gsvg"><svg viewBox="0 0 ' + W + " " + H + '" width="100%" role="img" aria-label="' + esc(t("dp_s_g")) + '">' + s + "</svg></div>";
}
function dpPage(sym) {
  const back = '<div class="page-head"><h1>' + esc(t("dp_t")) + "</h1></div>" + dpTabs("deep");
  const r = dpRow(sym);
  if (!r) return '<div class="wrap">' + back + '<div class="stack" style="padding-block:14px"><div class="notice">' + esc(t(DEEP ? "dp_notfound" : dpLoading || !dpTried ? "dp_wait" : "dp_nodata")) + '</div><a class="btn" href="#deep">← ' + esc(t("dp_back")) + "</a></div></div>";
  const sc = dpScore(r, sym), trd = dpTrend(r), g = dpGex(sym), x = r.av ? r.v / r.av : null;
  const shv = r.m === "US" && typeof usVerdict === "function" && typeof SHYQ !== "undefined" && SHYQ ? usVerdict(sym) : null;
  const sh = r.sh === "ok" || (shv && shv.st === "ok") ? dpTag("up", t("sh_ok")) : "";
  const kpi = (k, v) => '<div class="dp-kpi"><span>' + esc(t(k)) + "</span><b>" + v + "</b></div>";
  const rsiZ = r.rsi == null ? "" : r.rsi > 70 ? t("dp_m_ob") : r.rsi < 30 ? t("dp_m_os") : t("dp_m_n");
  const pos52 = r.hi52 && r.lo52 && r.hi52 > r.lo52 ? Math.max(0, Math.min(100, ((r.c - r.lo52) / (r.hi52 - r.lo52)) * 100)) : null;
  const canChart = chartData(sym).length > 1;
  return '<div class="wrap">' + back + '<div class="stack" style="padding-block:14px"><div class="panel stack">' +
    '<div class="row" style="justify-content:space-between;align-items:flex-start"><div style="min-width:0"><h2 style="margin:0;font-size:20px"><span class="num">' + esc(sym) + "</span> " + esc(r.n || "") + '</h2><p class="small muted" style="margin:0"><b class="num">' + dpPx(r, r.c) + "</b> " + dpPc(r.ch) + (r.sec ? " · " + esc(r.sec) : "") + " " + sh + "</p></div>" +
    '<div class="row"><button class="btn primary" data-act="dp-sum" data-s="' + esc(sym) + '">⚡ ' + esc(t("dp_sum")) + "</button>" + (canChart ? '<button class="btn" data-act="sh-an" data-s="' + esc(sym) + '">📊 ' + esc(t("dp_chart")) + "</button>" : "") + '<a class="btn ghost" href="#deep">← ' + esc(t("dp_back")) + "</a></div></div>" +
    '<div class="dp-kpis">' + kpi("dp_k_score", '<span class="num">' + sc + "/100</span>") + kpi("dp_c_trend", dpTrTag(trd)) + kpi("dp_c_vol", dpVlTag(dpVolLab(r))) + kpi("dp_c_g", dpGTag(sym)) + "</div>" +
    '<section class="dp-sec"><h3>' + esc(t("dp_s_trend")) + '</h3><p class="small">' + esc(t(trd === "up" ? "dp_tr_up" : trd === "down" ? "dp_tr_dn" : "dp_tr_sd")) + " " + esc(r.s20 != null ? (r.c > r.s20 ? t("dp_ab20") : t("dp_bl20")) : "") + '</p><p class="small muted num" dir="ltr" style="text-align:start">SMA20 ' + dpPx(r, r.s20) + " · SMA50 " + dpPx(r, r.s50) + " · SMA200 " + dpPx(r, r.s200) + "</p></section>" +
    '<section class="dp-sec"><h3>' + esc(t("dp_s_mom")) + '</h3><p class="small">' + esc(t("dp_m_txt").replace("{r}", r.rsi == null ? "–" : fmt(r.rsi, 1)).replace("{z}", rsiZ).replace("{m}", r.macd == null ? "–" : t(r.macd > r.sig ? "dp_m_ab" : "dp_m_bl"))) + "</p></section>" +
    '<section class="dp-sec"><h3>' + esc(t("dp_s_lv")) + '</h3><p class="small muted">' + esc(t("dp_s_lv_p")) + "</p>" + dpLvRows(r) + "</section>" +
    '<section class="dp-sec"><h3>' + esc(t("dp_s_g")) + "</h3>" + (g ? '<p class="small">' + esc(t(g.tot > 0 ? "dp_g_p" : "dp_g_n")) + '</p><p class="small"><b>' + esc(t("dp_g_lv").replace("{f}", g.flip == null ? "–" : dpPx(r, g.flip)).replace("{c}", dpPx(r, g.cw)).replace("{p}", dpPx(r, g.pw))) + "</b></p>" + dpGexSvg(sym) + '<p class="small muted">' + esc(t("dp_g_src")) + "</p>" : '<p class="small muted">' + esc(t("dp_g_none")) + "</p>") + "</section>" +
    '<section class="dp-sec"><h3>' + esc(t("dp_s_v")) + '</h3><p class="small">' + t("dp_v_txt").replace("{x}", x == null ? "–" : '<b class="num">' + fmt(x, 1) + "</b>").replace("{w}", dpPc(r.pf && r.pf[0])).replace("{m}", dpPc(r.pf && r.pf[1])).replace("{q}", dpPc(r.pf && r.pf[2])) + "</p>" +
    (pos52 != null ? '<p class="small muted">' + esc(t("dp_52")) + '</p><div class="dp-52"><span class="num">' + dpPx(r, r.lo52) + '</span><div class="dp-52b"><i style="inset-inline-start:' + pos52.toFixed(1) + '%"></i></div><span class="num">' + dpPx(r, r.hi52) + "</span></div>" : "") + "</section>" +
    '<p class="small muted" style="margin:0">' + esc(t("dp_note")) + (DEEP && !r.calc ? " · " + esc(t("dp_at").replace("{d}", whenText(DEEP.at))) : "") + "</p></div></div></div>";
}

/* ----- نافذة «مختصر نتيجة التحليل» بنص الشاشة ----- */
function dpChartSvg(sym, r) {
  const all = dpRows(sym); if (all.length < 10) return "";
  const n = Math.min(60, all.length), rows = all.slice(-n), off = all.length - n, cl = all.map((x) => x.c);
  const W = 640, H = 270, P = 8, R = 54, g = dpGex(sym);
  const lines = []; if (g) { lines.push([g.cw, "w"]); lines.push([g.pw, "w"]); } else if (r && r.pm) { lines.push([r.pm.s1, "p"]); lines.push([r.pm.r1, "p"]); }
  const bb = []; for (let i = off; i < all.length; i++) { if (i < 19) { bb.push(null); continue; } const sl = cl.slice(i - 19, i + 1), m = sl.reduce((a, b) => a + b, 0) / 20, sd = Math.sqrt(sl.reduce((a, b) => a + (b - m) ** 2, 0) / 20); bb.push([m + 2 * sd, m - 2 * sd]); }
  const vals = rows.flatMap((x) => [x.h, x.l]).concat(bb.filter(Boolean).flat()).concat(lines.map((x) => x[0]).filter((v) => v != null && Math.abs(v / rows[n - 1].c - 1) < 0.25));
  const lo = Math.min(...vals) * 0.995, hi = Math.max(...vals) * 1.005, y = (v) => P + ((hi - v) / (hi - lo)) * (H - 2 * P), cw = (W - R - P) / n, x = (i) => P + i * cw + cw / 2, d = rows[n - 1].c < 5 ? 3 : 2;
  let s = "";
  const lastY = y(rows[n - 1].c);
  for (let k = 0; k <= 4; k++) { const v = lo + ((hi - lo) * k) / 4; s += '<line x1="' + P + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '" class="dp-grid"/>' + (Math.abs(y(v) - lastY) < 16 ? "" : '<text x="' + (W - R + 6) + '" y="' + (y(v) + 4) + '" class="dp-tx">' + v.toFixed(d) + "</text>"); }
  const pl = (arr, cls) => { const pts = arr.map((v, i) => (v == null ? null : x(i) + "," + y(v))).filter(Boolean); return pts.length > 1 ? '<polyline points="' + pts.join(" ") + '" class="' + cls + '"/>' : ""; };
  s += pl(bb.map((v) => v && v[0]), "dp-bb") + pl(bb.map((v) => v && v[1]), "dp-bb");
  lines.forEach(([v, k]) => { if (v == null || v < lo || v > hi) return; s += '<line x1="' + P + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '" class="' + (k === "w" ? "dp-wall" : "dp-piv") + '"/>'; });
  rows.forEach((k, i) => { const up = k.c >= k.o, c = up ? "dp-cu" : "dp-cd"; s += '<line x1="' + x(i) + '" x2="' + x(i) + '" y1="' + y(k.h) + '" y2="' + y(k.l) + '" class="' + c + '"/><rect x="' + (x(i) - cw * 0.32) + '" y="' + y(Math.max(k.o, k.c)) + '" width="' + cw * 0.64 + '" height="' + Math.max(1, Math.abs(y(k.o) - y(k.c))) + '" class="' + c + '"/>'; });
  [[20, "dp-s20"], [50, "dp-s50"]].forEach(([p, cls]) => { const a = []; for (let i = off; i < all.length; i++) a.push(i >= p - 1 ? cl.slice(i - p + 1, i + 1).reduce((q, b) => q + b, 0) / p : null); s += pl(a, cls); });
  const last = rows[n - 1].c; s += '<rect x="' + (W - R + 2) + '" y="' + (y(last) - 9) + '" width="' + (R - 4) + '" height="18" rx="4" class="dp-lastbg"/><text x="' + (W - R + 6) + '" y="' + (y(last) + 4) + '" class="dp-tx dp-lasttx">' + last.toFixed(d) + "</text>";
  return '<div class="dp-svg"><svg viewBox="0 0 ' + W + " " + H + '" width="100%" role="img" aria-label="' + esc(symName(sym)) + '">' + s + '</svg></div><div class="dp-lg"><span><i class="dp-s20"></i>' + esc(t("dp_lg_s20")) + '</span><span><i class="dp-s50"></i>' + esc(t("dp_lg_s50")) + '</span><span><i class="dp-bb"></i>' + esc(t("dp_lg_bb")) + "</span>" + (lines.length ? '<span><i class="' + (g ? "dp-wall" : "dp-piv") + '"></i>' + esc(t(g ? "dp_lg_w" : "dp_lg_p")) + "</span>" : "") + "</div>";
}
function dpSumHtml(sym) {
  const r = dpRow(sym);
  const name = (r && r.n) || (typeof symName === "function" ? symName(sym) : sym);
  const head = '<div class="row" style="justify-content:space-between;flex-wrap:nowrap"><h2 id="dp-dlg-t" style="margin:0;font-size:18px">' + esc(t("dp_sum")) + ' · <span class="num">' + esc(sym) + '</span> <span class="small muted">' + esc(name) + '</span></h2><button class="dp-x" data-act="dp-close" aria-label="' + esc(t("dp_close")) + '">×</button></div>';
  if (!r) return head + '<div class="notice">' + esc(t(dpLoading ? "dp_wait" : "dp_notfound")) + "</div>";
  const trd = dpTrend(r), g = dpGex(sym), nr = dpNear(r, sym), ch = dpChartSvg(sym, r);
  const kpi = (k, v) => '<div class="dp-kpi"><span>' + esc(t(k)) + "</span><b>" + v + "</b></div>";
  return head + (ch || '<p class="small muted">' + esc(t("dp_nochart")) + "</p>") +
    '<div class="dp-kpis">' + kpi("dp_pos", '<span class="chg ' + (trd === "up" ? "up" : trd === "down" ? "down" : "") + '">' + esc(t(trd === "up" ? "dp_pos_up" : trd === "down" ? "dp_pos_dn" : "dp_pos_sd")) + "</span>") +
    kpi("dp_dvol", '<span class="num" dir="ltr">' + (r.atr && r.c ? "±" + fmt((r.atr / r.c) * 100, 1) + "%" : "–") + "</span>") +
    kpi("dp_wrng", '<span class="num" dir="ltr">' + (r.atrw ? dpPx(r, r.c - r.atrw) + " – " + dpPx(r, r.c + r.atrw) : "–") + "</span>") +
    kpi("dp_c_g", g ? dpGTag(sym) : '<span class="small muted">' + esc(t("dp_gx")) + "</span>") + "</div>" +
    '<p class="small">' + esc(t(trd === "up" ? "dp_tr_up" : trd === "down" ? "dp_tr_dn" : "dp_tr_sd")) + " " + t("dp_sum_txt").replace("{s}", '<b class="num">' + dpPx(r, nr.sup) + "</b>").replace("{r}", '<b class="num">' + dpPx(r, nr.res) + "</b>") + (g ? " " + esc(t("dp_g_lv").replace("{f}", g.flip == null ? "–" : dpPx(r, g.flip)).replace("{c}", dpPx(r, g.cw)).replace("{p}", dpPx(r, g.pw))) : "") + "</p>" +
    '<div class="row" style="justify-content:space-between"><span class="small muted">' + esc(t("dp_note")) + "</span>" + (dpOwner() && DEEP && DEEP.s[sym] ? '<a class="btn sm" href="#deep-' + encodeURIComponent(sym) + '" data-act="dp-close">🔬 ' + esc(t("dp_open")) + "</a>" : "") + "</div>";
}
let dpSumSym = null, dpSumFrom = null;
function dpSumOpen(sym, from) {
  dpSumSym = sym; dpSumFrom = from || document.activeElement; dpLoad();
  let el = document.getElementById("dp-scrim");
  if (!el) { el = document.createElement("div"); el.id = "dp-scrim"; el.className = "dp-scrim"; document.body.appendChild(el); }
  el.innerHTML = '<div class="dp-dlg" role="dialog" aria-modal="true" aria-labelledby="dp-dlg-t">' + dpSumHtml(sym) + "</div>";
  el.hidden = false; document.body.classList.add("dp-lock");
  const x = el.querySelector(".dp-x"); if (x) x.focus();
}
function dpSumClose() { const el = document.getElementById("dp-scrim"); if (el) el.hidden = true; document.body.classList.remove("dp-lock"); dpSumSym = null; if (dpSumFrom && dpSumFrom.focus) try { dpSumFrom.focus(); } catch (e) {} }
function dpSumRefresh() { const el = document.getElementById("dp-scrim"); if (el && !el.hidden && dpSumSym) el.querySelector(".dp-dlg").innerHTML = dpSumHtml(dpSumSym); }
{ const or = render; render = function () { or.apply(this, arguments); dpSumRefresh(); }; }

/* ----- بحث في صفحة الشارت + زر المختصر ----- */
let dpChQ = "";
const DP_AR = { AAPL: "ابل أبل آبل", MSFT: "مايكروسوفت", AMZN: "امازون أمازون", NVDA: "انفيديا إنفيديا نفيديا", GOOGL: "قوقل جوجل غوغل", GOOG: "قوقل جوجل", META: "ميتا فيسبوك", TSLA: "تسلا", AMD: "اي ام دي", AVGO: "برودكوم", LLY: "ليلي", V: "فيزا", MA: "ماستركارد", KO: "كوكا كولا", PG: "بروكتر", ORCL: "اوراكل", PLTR: "بالانتير", SMCI: "سوبر مايكرو", ASML: "اي اس ام ال", TSM: "تايوان", ADBE: "ادوبي أدوبي", HD: "هوم ديبوت", CSCO: "سيسكو", JNJ: "جونسون", XOM: "اكسون" };
function dpChOpts() {
  const out = new Map();
  Object.keys((typeof LIVE !== "undefined" && LIVE.history) || {}).filter((k) => (LIVE.history[k] || []).length > 1).forEach((k) => out.set(k, symName(k)));
  if (DEEPCH) Object.keys(DEEPCH.s).forEach((k) => { if (!out.has(k)) out.set(k, (DEEP && DEEP.s[k] && DEEP.s[k].n) || k); });
  return [...out.entries()];
}
function dpChSugg() {
  const q = dpChQ.trim().toLowerCase(); if (!q) return "";
  const nq = typeof shNorm === "function" ? shNorm(q) : q;
  const al = (k) => ((typeof SR_ALIAS !== "undefined" && SR_ALIAS[k]) || "") + " " + (DP_AR[k] || "") + " " + ((typeof TK_LIST !== "undefined" && (TK_LIST.find((x) => x.s === k) || {}).n) || []).join(" ");
  const m = dpChOpts().filter(([k, n]) => { const hay = String(n) + " " + al(k) + " " + ((DEEP && DEEP.s[k] && DEEP.s[k].n) || ""); return k.toLowerCase().replace(/^\^/, "").startsWith(q) || hay.toLowerCase().includes(q) || (typeof shNorm === "function" && shNorm(hay).includes(nq)); }).slice(0, 8);
  return '<div class="dp-sugg" role="listbox">' + (m.length ? m.map(([k, n]) => '<button type="button" role="option" data-act="dp-chpick" data-s="' + esc(k) + '"><span>' + esc(n) + '</span><b class="num">' + esc(k.replace(/^\^/, "")) + "</b></button>").join("") : '<span class="small muted" style="padding:8px 12px">' + esc(t("dp_nores")) + "</span>") + "</div>";
}
function dpChBar() {
  const sym = chartCfg().sym, real = !PRACTICE[sym];
  return '<div class="dp-chbar"><div class="dp-q dp-chq"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input id="dp-chq" type="search" value="' + esc(dpChQ) + '" placeholder="' + esc(t("dp_search_ch")) + '" aria-label="' + esc(t("dp_search_ch")) + '" autocomplete="off"><div id="dp-sugg">' + dpChSugg() + "</div></div>" +
    (real ? '<button class="btn sm primary" data-act="dp-sum" data-s="' + esc(sym) + '">⚡ ' + esc(t("dp_sum")) + "</button>" : "") + "</div>";
}
{ const op = pageChart; pageChart = function () { if (dpOwner()) dpLoad(); const h = op.apply(this, arguments); if (chFull) return h; return h.replace('<div class="panel stack"><div class="form-grid ch-grid">', '<div class="panel stack">' + dpChBar() + '<div class="form-grid ch-grid">'); }; }

/* ----- قائمة الأسهم الشرعية في صفحة الأمريكي، مقسمة حسب القطاع ----- */
let dpUsQ = "";
function dpUsList() {
  if (typeof SHYQ === "undefined" || !SHYQ || typeof usVerdict !== "function") return "";
  const syms = new Set(Object.keys(SHYQ.stocks));
  [typeof SHAW !== "undefined" && SHAW, typeof SHFD !== "undefined" && SHFD, typeof SHCI !== "undefined" && SHCI].forEach((d) => d && d.stocks && Object.keys(d.stocks).forEach((s) => syms.add(s)));
  const q = dpUsQ.trim().toLowerCase(), groups = {};
  let total = 0;
  [...syms].forEach((s) => {
    const v = usVerdict(s); if (v.st !== "ok" || v.kind === "islamic") return; total++;
    const yq = SHYQ.stocks[s], dr = DEEP && DEEP.s[s], fd = typeof SHFD !== "undefined" && SHFD && SHFD.stocks[s];
    const n = (yq && yq.n) || (dr && dr.n) || (fd && fd.n) || "";
    if (q && !s.toLowerCase().startsWith(q) && !n.toLowerCase().includes(q)) return;
    const sec = fd ? t("sh_fd_gold") : (yq && yq.sec) || (dr && dr.sec) || t("dp_other");
    (groups[sec] = groups[sec] || []).push([s, n, v, dr]);
  });
  const secs = Object.keys(groups).sort((a, b) => groups[b].length - groups[a].length);
  const row = ([s, n, v, dr]) => '<li><a href="' + (dr && dpOwner() ? "#deep-" + encodeURIComponent(s) : "#sharia") + '" data-act="dp-usgo" data-s="' + esc(s) + '"><b class="num">' + esc(s) + '</b><span class="dp-un">' + esc(n) + '</span><span class="dp-up">' + (dr ? '<span class="num">$' + fmt(dr.c, dr.c < 5 ? 3 : 2) + "</span> " + dpPc(dr.ch) : "") + "</span>" + (v.p != null ? '<span class="small muted">' + esc(t("sh_purify")) + ' <span class="num">' + fmt(v.p, 2) + "%</span></span>" : "") + "</a></li>";
  return '<section class="panel stack dp-us" id="dp-us"><div class="row" style="justify-content:space-between"><h3 style="font-size:19px;margin:0">' + esc(t("dp_sh")) + ' <span class="tag num">' + total + '</span></h3></div><p class="small muted" style="margin:0">' + esc(t("dp_sh_p")) + "</p>" +
    '<div id="dp-usl">' + secs.map((sec) => '<details class="dp-sec-g"' + (q ? " open" : "") + '><summary><b>' + esc(sec) + '</b> <span class="tag num">' + groups[sec].length + '</span></summary><ul class="dp-ul">' + groups[sec].sort((a, b) => ((b[3] && b[3].mc) || 0) - ((a[3] && a[3].mc) || 0) || a[0].localeCompare(b[0])).map(row).join("") + "</ul></details>").join("") + "</div></section>";
}
function dpUsBox() { return '<div class="dp-q dp-usbox"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input id="dp-usq" type="search" value="' + esc(dpUsQ) + '" placeholder="' + esc(t("dp_q")) + '" aria-label="' + esc(t("dp_q")) + '" autocomplete="off"></div>'; }
function dpUsFilter() {
  const q = dpUsQ.trim().toLowerCase(), m = document.getElementById("main"); if (!m) return;
  m.querySelectorAll(".dg-desk tbody tr, .dg-mob > li, ul.dgm-list > li").forEach((el) => { el.hidden = !!q && !el.textContent.toLowerCase().includes(q); });
  const b = document.getElementById("dp-us"); if (b) b.outerHTML = dpUsList();
}
{ const ou = dkUS; dkUS = function () { if (dpOwner()) dpLoad(); const h = ou.apply(this, arguments), i = h.indexOf('<div class="dg-desk">'); const out = (i < 0 ? h : h.slice(0, i) + dpUsBox() + h.slice(i)) + dpUsList(); if (dpUsQ) setTimeout(dpUsFilter, 0); return out; }; }

/* ----- الأحداث ----- */
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="dp-"]');
  if (!el) { const sc = document.getElementById("dp-scrim"); if (sc && !sc.hidden && e.target === sc) dpSumClose(); return; }
  const a = el.dataset.act;
  if (a === "dp-f") { const k = el.dataset.k; dpF.f = dpF.f.includes(k) ? dpF.f.filter((x) => x !== k) : dpF.f.concat(k); dpF.n = 40; dpSave(); render(); }
  else if (a === "dp-m") { dpF.m = el.dataset.k; dpF.n = 40; dpSave(); render(); }
  else if (a === "dp-more") { dpF.n += 40; render(); }
  else if (a === "dp-sum") { e.preventDefault(); dpSumOpen(el.dataset.s, el); }
  else if (a === "dp-close") { dpSumClose(); }
  else if (a === "dp-chpick") { dpChQ = ""; if (typeof srGoChart === "function") srGoChart(el.dataset.s); }
  else if (a === "dp-usgo" && !(DEEP && DEEP.s[el.dataset.s] && dpOwner())) { if (typeof shQ !== "undefined") { shQ = el.dataset.s; } }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { const sc = document.getElementById("dp-scrim"); if (sc && !sc.hidden) dpSumClose(); } });
document.addEventListener("input", (e) => {
  const id = e.target && e.target.id;
  if (id === "dp-q") { dpF.q = e.target.value; dpF.n = 40; const pos = e.target.selectionStart; render(); const i = document.getElementById("dp-q"); if (i) { i.focus(); try { i.setSelectionRange(pos, pos); } catch (x) {} } }
  else if (id === "dp-chq") { dpChQ = e.target.value; const b = document.getElementById("dp-sugg"); if (b) b.innerHTML = dpChSugg(); }
  else if (id === "dp-usq") { dpUsQ = e.target.value; dpUsFilter(); }
});
function dpSave() { try { localStorage.setItem("meras.dpf", JSON.stringify({ f: dpF.f, m: dpF.m })); } catch (e) {} }
