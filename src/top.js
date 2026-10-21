/* ===== مِراس: أفضل حركة + الجرس (للمالك فقط) =====
   top.json يكتبه GitHub Actions بعد إقفال السوق السعودي وبعد تحديث الأسهم الأمريكية:
   الأسهم اللي نقاطها في الباحث 5 أو 6، ومتى دخلت القائمة ومتى طلعت.
   الجرس فوق يعرض عدد المرشحين الجدد، ونغمة لما يدخل سهم جديد والصفحة مفتوحة. */
Object.assign(UI, {
  tp_t: ["أفضل حركة", "Best movers"], tp_p: ["الأسهم اللي نقاطها في الباحث 5 أو 6. تتحدث لحالها بعد إقفال السوق السعودي، وبعد تحديث الأمريكي 3:30 الفجر. مرشحين للتحليل، مو توصية شراء.", "Shares scoring 5 or 6 in the screener. Updated after the Saudi close and after the US update. Candidates to analyse, not buy recommendations."],
  tp_none: ["ما فيه سهم نقاطه 5 أو 6 الحين. أول ما يدخل سهم يوصلك الجرس.", "No share scores 5 or 6 right now. The bell rings when one enters."],
  tp_wait: ["القائمة تنحسب أول مرة بعد إقفال السوق السعودي اليوم (3:50 العصر).", "The list is first computed after today's Saudi close."],
  tp_new: ["جديد", "New"], tp_days: ["له {n} يوم في القائمة", "{n} days on the list"], tp_since: ["دخل {d}", "Entered {d}"], tp_left: ["طلعوا من القائمة مؤخراً", "Recently left the list"], tp_out: ["طلع {d} بنقاط {s}", "Left {d} at {s}"],
  tp_why: ["ليش تحرك؟", "Why did it move?"], tp_ai: ["حلّل في الشارت", "Analyse on the chart"], tp_news: ["أخباره", "News"],
  tp_unknown: ["شرعيته لسا ما انحسبت، فما يوصلك عنه تنبيه. تأكد منها قبل أي شي.", "Its screening is not computed yet, so no alert is sent. Check it first."], tp_noshar: ["غير متوافق شرعياً", "Not sharia compliant"],
  tp_sound: ["فعّل نغمة الجرس", "Turn on the bell sound"], tp_sound_on: ["النغمة شغالة", "Sound on"], tp_test: ["جرّب النغمة", "Test the sound"],
  tp_bell: ["أفضل حركة: {n} جديد", "Best movers: {n} new"], tp_gh: ["والمنصة مقفلة؟ يوصلك تنبيه من تطبيق GitHub على جوالك لكل سهم متوافق يدخل القائمة. تأكد إن إشعارات GitHub مفعّلة في جوالك.", "Platform closed? The GitHub app on your phone notifies you for every compliant share that enters the list."],
  w_break: ["اخترق أعلى سعر في آخر 20 يوم ({p})", "Broke above the 20-day high ({p})"], w_vol: ["بحجم {x} ضعف المعتاد", "on {x}× normal volume"], w_cross: ["صار فوق متوسط 20 من {n} أيام", "Crossed above the 20 average {n} days ago"],
  w_above: ["فوق متوسط 20 من أكثر من أسبوعين", "Above the 20 average for over two weeks"], w_chg: ["تغير اليوم {d}، وخلال 5 أيام {w}", "Today {d}, over 5 days {w}"], w_gap: ["فتح بفجوة صاعدة {p}", "Gapped up {p}"],
  w_rsi: ["RSI عند {v}: زخم صاعد بدون تشبع", "RSI at {v}: rising momentum, not overbought"], w_cmf: ["تدفق الأموال موجب ({v}): إغلاقات قريبة من القمة", "Positive money flow ({v}): closes near the highs"]
});

let TOP = null, topLoading = false, topSound = false;
try { topSound = localStorage.getItem("meras.topsound") === "1"; } catch (e) {}
const topSeen = () => { try { return JSON.parse(localStorage.getItem("meras.topseen") || "[]"); } catch (e) { return []; } };
const topKey = (s, v) => s + "|" + v.since;
async function loadTop(quiet) {
  if (!HOSTED || !CFG.token || topLoading) return; topLoading = true;
  try { const f = await readJson("top.json"); const prev = topNewCount(); TOP = (f && f.data) || { items: {}, log: [] }; const now = topNewCount(); if (now > prev && prev >= 0 && topSound && quiet) topBeep(); } catch (e) {}
  topLoading = false; topBell(); if (route() === "desk" && typeof dkTab !== "undefined" && dkTab === "top") render();
}
function topActive() { return TOP ? Object.entries(TOP.items || {}).filter(([, v]) => v.active) : []; }
function topNewCount() { if (!TOP) return -1; const seen = topSeen(); return topActive().filter(([s, v]) => v.sharia === "ok" && !seen.includes(topKey(s, v))).length; }
function topBell() {
  let b = document.getElementById("topbell");
  const tools = document.querySelector(".top .tools");
  if (!tools) return;
  if (!b || !tools.contains(b)) { b = document.createElement("button"); b.type = "button"; b.id = "topbell"; b.className = "btn sm th-btn bell"; b.setAttribute("data-act", "nt-bell"); b.setAttribute("aria-haspopup", "dialog"); tools.insertBefore(b, tools.firstChild); }
  const n = typeof ntUnread === "function" ? ntUnread() : Math.max(0, topNewCount());
  b.innerHTML = '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 20a2 2 0 0 0 4 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' + (n ? '<span class="bell-n">' + n + "</span>" : "");
  b.title = t("nt_h") + (n ? " (" + n + ")" : ""); b.setAttribute("aria-label", b.title);
}
function topBeep() {
  try {
    const A = window.AudioContext || window.webkitAudioContext; if (!A) return; const ctx = topBeep.ctx || (topBeep.ctx = new A());
    [[880, 0], [1320, 0.18]].forEach(([f, d]) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine"; o.frequency.value = f; g.gain.setValueAtTime(0.0001, ctx.currentTime + d); g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + d + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d + 0.35); o.connect(g).connect(ctx.destination); o.start(ctx.currentTime + d); o.stop(ctx.currentTime + d + 0.4); });
  } catch (e) {}
}

function topWhy(sym) {
  const d = chartData(sym); if (d.length < 25) return [];
  const i = d.length - 1, cl = d.map((r) => r.c), m20 = sma(cl, 20), rs = rsi(cl, 14), rv = rvolS(d, 20), cf = cmfS(d, 20), c = cl[i], money = (v) => (/^\d{4}$/.test(sym) ? "" : "$") + fmt(v, 2);
  const pc = (a, b) => ((b - a) / a) * 100, sg = (v) => (v > 0 ? "+" : "") + fmt(v, 1) + "%", out = [];
  const hi20 = Math.max(...d.slice(i - 20, i).map((r) => r.h));
  if (c > hi20) out.push(t("w_break").replace("{p}", money(hi20)) + (rv[i] >= 1.2 ? " " + t("w_vol").replace("{x}", fmt(rv[i], 1)) : ""));
  else if (rv[i] >= 1.2) out.push(t("w_vol").replace("{x}", fmt(rv[i], 1)));
  let k = 0; while (k < 15 && i - k > 0 && m20[i - k] != null && cl[i - k] > m20[i - k]) k++;
  if (k > 0 && k < 15) out.push(t("w_cross").replace("{n}", k)); else if (k >= 15) out.push(t("w_above"));
  if (d[i].o > d[i - 1].h) out.push(t("w_gap").replace("{p}", sg(pc(d[i - 1].c, d[i].o))));
  out.push(t("w_chg").replace("{d}", sg(pc(cl[i - 1], c))).replace("{w}", sg(pc(cl[Math.max(0, i - 5)], c))));
  if (rs[i] >= 50 && rs[i] <= 70) out.push(t("w_rsi").replace("{v}", fmt(rs[i], 1)));
  if (cf[i] > 0) out.push(t("w_cmf").replace("{v}", fmt(cf[i], 2)));
  return out;
}
function dkTop() {
  if (!TOP && !topLoading) loadTop();
  const head = '<p class="muted" style="margin:0">' + esc(t("tp_p")) + '</p><div class="row"><button class="btn sm' + (topSound ? " on" : "") + '" data-act="top-sound">🔔 ' + esc(t(topSound ? "tp_sound_on" : "tp_sound")) + '</button><button class="btn sm ghost" data-act="top-test">' + esc(t("tp_test")) + '</button></div><p class="small muted" style="margin:0">' + esc(t("tp_gh")) + "</p>";
  if (!TOP) return head + '<div class="notice">' + esc(t("dk_loading")) + "</div>";
  if (!TOP.updated) return head + '<div class="notice">' + esc(t("tp_wait")) + "</div>";
  const seen = topSeen(), act = topActive().sort((a, b) => b[1].score - a[1].score || (b[1].rvol || 0) - (a[1].rvol || 0));
  const days = (v) => Math.max(1, Math.round((new Date(v.d) - new Date(v.since)) / 864e5) + 1);
  const card = ([s, v]) => {
    const isNew = v.sharia === "ok" && !seen.includes(topKey(s, v)), why = topWhy(s), news = v.m === "SA" ? "https://www.google.com/search?tbm=nws&q=" + encodeURIComponent(s + " " + v.n + " سهم") : "https://finance.yahoo.com/quote/" + encodeURIComponent(s) + "/news";
    return '<div class="panel stack tp-card' + (isNew ? " is-new" : "") + '"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><h3><span class="num">' + esc(s) + "</span> " + esc(dkName(s) || v.n) + (isNew ? ' <span class="tag amber">' + esc(t("tp_new")) + "</span>" : "") + '</h3><span class="small muted">' + esc(t(v.m === "SA" ? "sh_sa" : "sh_us")) + " · " + esc(t("tp_since").replace("{d}", v.since)) + " · " + esc(t("tp_days").replace("{n}", days(v))) + '</span></div><span class="tag ' + (v.score >= 6 ? "up" : "amber") + '">' + esc(t("sc_score")) + " " + v.score + "/6</span></div>" +
      (v.sharia === "no" ? '<div class="notice">' + esc(t("tp_noshar")) + "</div>" : v.sharia !== "ok" ? '<p class="small muted" style="margin:0">' + esc(t("tp_unknown")) + "</p>" : "") +
      '<div class="sc-checks">' + ["trend", "vwap", "rsi", "rvol", "cmf", "atr"].map((c) => { const ok = (v.checks || []).includes(c); return '<span class="sc-ck' + (ok ? " ok" : "") + '">' + (ok ? "✓" : "✗") + " " + esc(t("sc_c_" + c)) + "</span>"; }).join("") + "</div>" +
      (why.length ? '<div class="tp-why"><b class="small">' + esc(t("tp_why")) + '</b><ul>' + why.map((w) => "<li>" + esc(w) + "</li>").join("") + "</ul></div>" : "") +
      '<div class="row"><button class="btn sm primary" data-act="top-ai" data-s="' + esc(s) + '">' + esc(t("tp_ai")) + '</button><a class="btn sm" href="' + news + '" target="_blank" rel="noopener">' + esc(t("tp_news")) + ' ↗</a><button class="btn sm ghost" data-act="dk-chart" data-s="' + esc(s) + '">' + esc(t("dk_open_ch")) + "</button></div></div>";
  };
  const left = (TOP.log || []).filter((x) => x.out).slice(-6).reverse();
  setTimeout(() => { try { const s = new Set(topSeen()); act.forEach(([k, v]) => { if (v.sharia === "ok") s.add(topKey(k, v)); }); localStorage.setItem("meras.topseen", JSON.stringify([...s].slice(-300))); if (typeof ntMark === "function") ntMark((TOP.log || []).filter((x) => x.in).map((x) => "m:" + x.s + "|" + x.in)); topBell(); } catch (e) {} }, 1500);
  return head + '<p class="small muted" style="margin:0">' + esc(t("sh_asof")) + " " + esc(whenText(TOP.updated)) + "</p>" + (act.length ? '<div class="stack">' + act.map(card).join("") + "</div>" : '<div class="notice">' + esc(t("tp_none")) + "</div>") +
    (left.length ? owPanel(t("tp_left"), '<ul class="tp-left">' + left.map((x) => '<li><span class="num">' + esc(x.s) + "</span> " + esc(dkName(x.s)) + ' <span class="small muted">' + esc(t("tp_out").replace("{d}", x.out).replace("{s}", x.score + "/6")) + "</span></li>").join("") + "</ul>") : "");
}

document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="top-"]'); if (!el) return;
  const a = el.dataset.act;
  if (a === "top-open") { e.preventDefault(); if (typeof dkTab !== "undefined") dkTab = "top"; if (route() === "desk") render(); else location.hash = "desk"; }
  else if (a === "top-sound") { topSound = !topSound; try { localStorage.setItem("meras.topsound", topSound ? "1" : "0"); } catch (err) {} if (topSound) topBeep(); render(); }
  else if (a === "top-test") topBeep();
  else if (a === "top-ai") { S.chart.sym = el.dataset.s; save(); location.hash = "chart"; setTimeout(() => { const b = document.querySelector('[data-act="ch-analyze"]'); if (b) b.click(); }, 700); }
});
if (typeof HOSTED !== "undefined" && HOSTED && CFG.token) {
  loadTop(true);
  setInterval(() => { if (document.visibilityState === "visible") loadTop(true); }, 10 * 60 * 1000);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") loadTop(true); });
}
