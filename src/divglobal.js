/* ===== مِراس: التوزيعات العالمية (مكتبي) =====
   أربع قوائم: الكبار في التوزيع، التقنية والذكاء الاصطناعي الأمريكية، الصينية المدرجة في أمريكا، والصينية في هونغ كونغ.
   البيانات من divglobal.json (يجمعها fetch_global_divs.py من Yahoo يومياً) وهي للمالك فقط.
   المشاركة: المالك يحط كلمة سر، ومتصفحه يشفّر نسخة من الجدول (PBKDF2 + AES-GCM) وينشرها في shared/dg.json بالموقع.
   اللي عنده كلمة السر (مثل أخوك) يفتح #shared ويشوف الجدول بدون ما يحتاج رمز المستودع. الملف بدون كلمة السر ما ينقرأ. */
Object.assign(UI, {
  dg_t: ["التوزيعات العالمية", "Global dividends"],
  dg_h: ["التوزيعات العالمية", "Global dividends"],
  dg_p: ["أكبر الشركات توزيعاً، والتقنية والذكاء الاصطناعي في أمريكا والصين: العائد السنوي، وآخر توزيع، وموعد الاستحقاق المتوقع، والحكم الشرعي.", "The biggest payers and US and Chinese tech and AI: yearly yield, last payout, expected ex-date and sharia status."],
  dg_g_all: ["الكل", "All"], dg_g_big: ["الكبار في التوزيع", "Big payers"], dg_g_tech: ["تقنية وذكاء اصطناعي (أمريكا)", "Tech and AI (US)"], dg_g_china: ["صينية مدرجة في أمريكا", "Chinese, US-listed"], dg_g_hk: ["صينية في هونغ كونغ", "Chinese, Hong Kong"],
  dg_c_sym: ["السهم", "Stock"], dg_c_px: ["السعر", "Price"], dg_c_yld: ["العائد السنوي", "Yearly yield"], dg_c_ttm: ["توزيع 12 شهر", "12-month payout"], dg_c_freq: ["التكرار", "Frequency"], dg_c_last: ["آخر توزيع", "Last payout"], dg_c_next: ["الاستحقاق المتوقع", "Expected ex-date"], dg_c_sh: ["شرعياً", "Sharia"],
  dg_f12: ["شهري", "Monthly"], dg_f4: ["ربعي", "Quarterly"], dg_f2: ["نصف سنوي", "Twice a year"], dg_f1: ["سنوي", "Yearly"], dg_f0: ["ما يوزع", "No payout"], dg_firr: ["غير منتظم", "Irregular"],
  dg_days: ["بعد {n} يوم", "in {n} days"], dg_today: ["اليوم تقريباً", "about today"], dg_past: ["فات، ينتظر الإعلان", "passed, awaiting notice"],
  dg_nodiv: ["ما وزّع آخر سنة", "No payout in the last year"], dg_sh_none: ["ما انحسب", "Not checked"], dg_sh_calc: ["احسبه الليلة", "Compute tonight"], dg_sh_q: ["في الطابور، ينحسب الليلة", "Queued for tonight"],
  dg_star: ["نبهني قبل الاستحقاق", "Alert me before the ex-date"], dg_starred: ["بنبهك قبل الاستحقاق بـ 5 أيام", "You will be alerted 5 days before the ex-date"],
  dg_only_star: ["المتابَعة فقط", "Starred only"], dg_sort: ["الترتيب", "Sort"], dg_s_yld: ["الأعلى عائد", "Highest yield"], dg_s_next: ["الأقرب استحقاق", "Nearest ex-date"], dg_s_sym: ["الرمز", "Symbol"],
  dg_asof: ["آخر تحديث {d} · المصدر Yahoo Finance", "Updated {d} · Source: Yahoo Finance"], dg_loading: ["نحمّل التوزيعات…", "Loading dividends…"], dg_empty: ["ما فيه بيانات للحين. أول تحديث ينزل بعد تشغيل مهمة التوزيعات.", "No data yet. It arrives after the dividends job runs."],
  dg_calc_h: ["حاسبة التوزيع", "Payout calculator"], dg_calc_amt: ["المبلغ اللي بتستثمره", "Amount you invest"], dg_calc_wht: ["ضريبة الاستقطاع %", "Withholding tax %"],
  dg_calc_r: ["لو استثمرت {a} في {s} بالعائد الحالي: التوزيع السنوي قبل الضريبة {g}، وبعد استقطاع {w}% يوصلك {n}{p}.", "If you invest {a} in {s} at today's yield: yearly payout before tax {g}, and after {w}% withholding you receive {n}{p}."],
  dg_calc_p: [" ومنه تطهير {x}", ", of which {x} is purification"], dg_calc_pick: ["اختر سهم من الجدول (اضغط على اسمه).", "Pick a stock from the table (tap its name)."],
  dg_wht_note: ["الاستقطاع تقديري: الأسهم الأمريكية 30% عادةً لغير المقيم بدون اتفاقية ضريبية، والصينية المدرجة في أمريكا 10% غالباً، وهونغ كونغ تختلف حسب الشركة. تأكد من كشف الوسيط.", "Withholding is an estimate: US shares usually 30% for non-residents without a treaty, US-listed Chinese shares often 10%, Hong Kong varies by company. Check your broker statement."],
  dg_next_note: ["موعد الاستحقاق المتوقع محسوب من نمط التوزيعات السابقة، والرسمي يعلنه السهم. لازم تملك السهم قبل تاريخ الاستحقاق (Ex-date) عشان يجيك التوزيع.", "The expected ex-date is estimated from past payouts; the company announces the official one. You must own the share before the ex-date to receive the payout."],
  dg_none_h: ["ما توزع حالياً", "No payout right now"], dg_none_p: ["شركات نمو تعيد استثمار أرباحها بدل ما توزعها. تنتقل للجدول الأول تلقائياً أول ما توزع.", "Growth companies that reinvest their profits instead of paying them out. They move to the main table as soon as they pay."], dg_nopay: ["ما فيه سهم موزّع في هالقائمة.", "No paying stock in this list."],
  dg_st_soon: ["استحقاق خلال 14 يوم", "Ex-date within 14 days"], dg_st_avg: ["متوسط العائد", "Average yield"], dg_st_watch: ["أتابعها ★", "Starred ★"],
  dg_lh_pay: ["الموزّعة", "Paying"], dg_lh_soon: ["استحقاقها قريب", "Ex-date soon"], dg_lh_watch: ["اللي أتابعها", "Starred"], dg_n: ["{n} سهم", "{n} stocks"],
  dg_e_watch: ["ما فيه سهم متابَع هنا. افتح أي سهم واضغط ☆.", "No starred stock here. Open any stock and tap ☆."], dg_e_soon: ["ما فيه استحقاق خلال 14 يوم في هالقائمة.", "No ex-date within 14 days in this list."],
  dg_none_show: ["اعرض اللي ما توزع ({n})", "Show non-payers ({n})"], dg_none_hide: ["اخفِ اللي ما توزع ({n})", "Hide non-payers ({n})"], dg_none_s: ["شركات نمو تعيد استثمار أرباحها", "Growth companies that reinvest profits"],
  dg_m_next: ["الاستحقاق بعد {n} يوم", "Ex-date in {n} days"], dg_watching: ["أتابعه", "Following"], dg_follow: ["تابعه", "Follow"],
  dg_own_before: [". لازم تملك السهم قبل هالتاريخ عشان يجيك التوزيع.", ". Own the share before this date to receive the payout."], dg_est: ["الموعد تقديري من نمط التوزيعات السابقة، والرسمي تعلنه الشركة.", "The date is estimated from past payouts; the company announces the official one."],
  dg_how_much: ["كم يجيك منه؟", "How much would you get?"], dg_net_y: ["يوصلك بالسنة تقريباً", "You receive per year, about"], dg_gross: ["قبل الضريبة", "Before tax"], dg_each: ["كل توزيع ({f})", "Each payout ({f})"], dg_pur_of: ["منه تطهير", "Of which purification"], dg_enter_amt: ["اكتب المبلغ.", "Enter an amount."],
  dg_nodiv_long: ["هالشركة ما وزّعت آخر سنة. لو بدأت توزع، تنتقل لقائمة الموزّعة لحالها.", "This company paid nothing in the last year. If it starts paying, it moves to the paying list."],
  dg_hist: ["آخر التوزيعات", "Recent payouts"],
  dg_share_h: ["مشاركة القسم", "Share this section"],
  dg_share_p: ["حط كلمة سر وعطها للي تبيه يشوف القسم (مثل أخوك). يفتح الرابط ويكتبها ويشوف الجدول والحاسبة، بدون نجوم ولا شي من مكتبك. تقدر توقفها أو تغيّر كلمة السر متى ما بغيت.", "Set a password and give it to whoever should see this section. They open the link, enter it and see the table and calculator, nothing else from your desk. You can stop or change it any time."],
  dg_share_pass: ["كلمة سر المشاركة", "Share password"], dg_share_on: ["شغّل المشاركة", "Start sharing"], dg_share_upd: ["غيّر كلمة السر", "Change password"], dg_share_off: ["أوقف المشاركة", "Stop sharing"],
  dg_share_state: ["المشاركة شغالة · آخر نشر {d}. ينتحدث تلقائياً لما تفتح هالقسم وفيه بيانات أحدث.", "Sharing is on · last published {d}. It refreshes when you open this section and newer data exists."],
  dg_share_link: ["الرابط", "Link"], dg_share_copy: ["انسخ الرابط", "Copy link"], dg_share_short: ["كلمة السر لازم 8 أحرف أو أكثر", "The password must be at least 8 characters"],
  dg_share_done: ["تم نشر النسخة المشفرة", "Encrypted copy published"], dg_share_stopped: ["تم إيقاف المشاركة", "Sharing stopped"], dg_share_busy: ["نشفّر وننشر…", "Encrypting and publishing…"],
  dg_share_other: ["المشاركة شغالة من جهاز ثاني. اكتب كلمة السر هنا عشان هالجهاز يحدّثها بعد.", "Sharing is on from another device. Enter the password here so this device can refresh it too."],
  sd_h: ["التوزيعات العالمية", "Global dividends"], sd_p: ["قسم مشارك لك من مِراس. اكتب كلمة السر اللي وصلتك.", "A section shared with you from Meras. Enter the password you were given."],
  sd_pass: ["كلمة السر", "Password"], sd_open: ["افتح", "Open"], sd_bad: ["كلمة السر غلط", "Wrong password"], sd_none: ["ما فيه شي مشارك حالياً", "Nothing is shared right now"], sd_lock: ["اقفل", "Lock"],
  sd_from: ["نسخة منشورة {d}", "Copy published {d}"],
  nt_div: ["توزيع", "Payout"], nt_div_t: ["{s} {n}: الاستحقاق المتوقع {d}", "{s} {n}: expected ex-date {d}"]
});

const DG = { data: null, watch: null, watchSha: undefined, loaded: false, loading: false, view: null, viewAt: null };
const DG_FILE = "shared/dg.json", DG_ITER = 310000, DG_KEY = "meras.dgshare", DG_PASS = "meras.dgpass";
const DG_WHT = { big: 30, tech: 30, china: 10, hk: 0 };
let dgGrp = "all", dgSort = "yld", dgF = null, dgNone = false, dgPick = null, dgAmt = "1000", dgWht = null, dgPub = null, dgBusy = false;
const dgOwner = () => typeof HOSTED !== "undefined" && HOSTED && !!CFG.token;
const dgLocal = () => { try { return JSON.parse(localStorage.getItem(DG_KEY) || "null"); } catch (e) { return null; } };

async function loadDG(force) {
  if (DG.loading || (DG.loaded && !force)) return; DG.loading = true;
  try { const f = await readJson("divglobal.json"); DG.data = f && f.data; } catch (e) {}
  try { const w = await readJson("divgwatch.json"); DG.watch = w && Array.isArray(w.data) ? w.data : []; DG.watchSha = w ? w.sha : undefined; } catch (e) { DG.watch = DG.watch || []; }
  try { dgPub = await ghRepo("meras", DG_FILE); } catch (e) { dgPub = null; }
  if (typeof SHUS !== "undefined" && !SHUS && !shLoading && typeof loadSharia === "function") { try { await loadSharia(); } catch (e) {} }
  DG.loading = false; DG.loaded = true;
  if (typeof topBell === "function") topBell();
  dgAutoPublish();
  if (route() === "desk") render();
}

/* ----- shared helpers: the table works for the owner (live) and for the shared view (snapshot) ----- */
function dgSharia(s) {
  const own = typeof SHOWN !== "undefined" && SHOWN && SHOWN[s];
  if (own && own.status) return { st: own.status, p: own.purify };
  const us = typeof SHUS !== "undefined" && SHUS && SHUS.stocks && SHUS.stocks[s];
  if (us && us.status) return { st: us.status, p: us.purify };
  return null;
}
const dgDays = (d) => { if (!d) return null; return Math.round((new Date(d + "T00:00:00") - new Date(today() + "T00:00:00")) / 864e5); };
const dgFreq = (f) => t({ 12: "dg_f12", 4: "dg_f4", 2: "dg_f2", 1: "dg_f1", 0: "dg_f0" }[f] || "dg_firr");
const dgMoney = (n, cur) => (cur === "USD" ? "$" : "") + fmt(n, n < 1 ? 3 : 2) + (cur && cur !== "USD" ? " " + cur : "");
const dgCurName = (cur) => (cur === "HKD" ? "HK$" : cur === "USD" ? "$" : cur || "");
function dgNextCell(r) {
  if (!r.next) return '<span class="muted">–</span>';
  const n = dgDays(r.next), txt = n == null ? "" : n < -3 ? t("dg_past") : n <= 0 ? t("dg_today") : t("dg_days").replace("{n}", n);
  return '<span class="num">' + esc(r.next) + '</span><br><span class="small ' + (n != null && n >= 0 && n <= 14 ? "dg-soon" : "muted") + '">' + esc(txt) + "</span>";
}
function dgRows(list, opt) {
  const rows = list.slice();
  const key = { yld: (r) => -(r.yld || 0), next: (r) => { const n = dgDays(r.next); return n == null || n < -3 ? 1e9 : n; }, sym: (r) => r.s }[dgSort];
  rows.sort((a, b) => { const x = key(a), y = key(b); return x < y ? -1 : x > y ? 1 : 0; });
  return rows.map((r) => {
    const sh = opt.sh(r.s), on = opt.watch && opt.watch.includes(r.s);
    const L = (k) => ' data-l="' + esc(t(k)) + '"';
    const shCell = r.g === "hk" && !sh ? '<span class="small muted">' + esc(t("dg_sh_none")) + "</span>" : sh ? shTag(sh.st) + (sh.p != null ? '<br><span class="small muted">' + esc(t("sh_purify")) + " " + fmt(sh.p, 2) + "%</span>" : "") : opt.watch && typeof SHQ !== "undefined" ? (SHQ && SHQ.includes(r.s) ? '<span class="small muted">' + esc(t("dg_sh_q")) + "</span>" : '<button class="btn sm ghost" data-act="sh-queue" data-s="' + esc(r.s) + '">' + esc(t("dg_sh_calc")) + "</button>") : '<span class="small muted">' + esc(t("dg_sh_none")) + "</span>";
    return '<tr class="' + (dgPick === r.s ? "dg-on" : "") + '"><td class="dg-c1"><button class="dg-name" data-act="dg-pick" data-s="' + esc(r.s) + '"><b class="num">' + esc(r.s) + "</b> " + esc(r.n || "") + "</button></td>" +
      '<td class="num"' + L("dg_c_px") + '>' + (r.price ? esc(dgMoney(r.price, r.cur)) : "–") + "</td>" +
      '<td class="num"' + L("dg_c_yld") + '><b>' + (r.yld ? fmt(r.yld, 2) + "%" : '<span class="muted small">' + esc(t("dg_nodiv")) + "</span>") + "</b></td>" +
      '<td class="num"' + L("dg_c_ttm") + '>' + (r.ttm ? esc(dgMoney(r.ttm, r.cur)) : "–") + "</td>" +
      "<td" + L("dg_c_freq") + ">" + esc(r.ttm ? dgFreq(r.freq) : t("dg_f0")) + "</td>" +
      '<td class="num"' + L("dg_c_last") + '>' + (r.last ? esc(r.last[0]) + '<br><span class="small muted">' + esc(dgMoney(r.last[1], r.cur)) + "</span>" : "–") + "</td>" +
      "<td" + L("dg_c_next") + ">" + (r.ttm ? dgNextCell(r) : '<span class="muted">–</span>') + "</td>" +
      "<td" + L("dg_c_sh") + ">" + shCell + "</td>" +
      (opt.watch ? '<td class="dg-cs"><button class="btn sm ghost dg-star' + (on ? " on" : "") + '" data-act="dg-star" data-s="' + esc(r.s) + '" aria-pressed="' + on + '" title="' + esc(t(on ? "dg_starred" : "dg_star")) + '">' + (on ? "★" : "☆") + "</button></td>" : "") + "</tr>";
  }).join("");
}
function dgCalc(list, opt) {
  const r = list.find((x) => x.s === dgPick);
  let body;
  if (!r) body = '<p class="muted small" style="margin:0">' + esc(t("dg_calc_pick")) + "</p>";
  else {
    const amt = parseFloat(dgAmt), w = dgWht == null ? (DG_WHT[r.g] == null ? 30 : DG_WHT[r.g]) : parseFloat(dgWht), sh = opt.sh(r.s);
    if (amt > 0 && r.yld) {
      const g = amt * r.yld / 100, net = g * (1 - (isFinite(w) ? w : 0) / 100), pur = sh && sh.p ? g * sh.p / 100 : 0, c = dgCurName(r.cur);
      body = '<p style="margin:0">' + esc(t("dg_calc_r").replace("{a}", c + fmt(amt, 0)).replace("{s}", r.s).replace("{g}", c + fmt(g, 2)).replace("{w}", fmt(isFinite(w) ? w : 0, 0)).replace("{n}", c + fmt(net, 2)).replace("{p}", pur ? t("dg_calc_p").replace("{x}", c + fmt(pur, 2)) : "")) + "</p>";
    } else body = '<p class="muted small" style="margin:0">' + esc(r.yld ? "" : t("dg_nodiv")) + "</p>";
    if (r.hist && r.hist.length) body += '<div><span class="small muted">' + esc(t("dg_hist")) + '</span><div class="dg-hist">' + r.hist.slice().reverse().map((h) => '<span class="num">' + esc(h[0]) + " · " + esc(dgMoney(h[1], r.cur)) + "</span>").join("") + "</div></div>";
  }
  const r0 = list.find((x) => x.s === dgPick), wv = dgWht == null ? (r0 && DG_WHT[r0.g] != null ? DG_WHT[r0.g] : 30) : dgWht;
  return owPanel(t("dg_calc_h") + (r ? " · " + r.s : ""), '<div class="row" style="align-items:flex-end"><div class="field" style="width:170px"><label for="dg-amt">' + esc(t("dg_calc_amt")) + (r ? " (" + esc(dgCurName(r.cur)) + ")" : "") + '</label><input id="dg-amt" data-dg="amt" type="number" min="0" step="any" inputmode="decimal" value="' + esc(dgAmt) + '"></div><div class="field" style="width:150px"><label for="dg-wht">' + esc(t("dg_calc_wht")) + '</label><input id="dg-wht" data-dg="wht" type="number" min="0" max="100" step="any" inputmode="decimal" value="' + esc(wv) + '"></div></div><div id="dg-res" class="stack" style="gap:8px">' + body + '</div><p class="small muted" style="margin:0">' + esc(t("dg_wht_note")) + "</p>");
}
const dgSoon = (r) => { const n = dgDays(r.next); return r.ttm > 0 && n != null && n >= 0 && n <= 14; };
const dgShort = (s) => s.replace(".HK", "").slice(0, 4);
function dgNextTxt(r) { const n = dgDays(r.next); if (n == null) return ""; return n < -3 ? t("dg_past") : n <= 0 ? t("dg_today") : t("dg_m_next").replace("{n}", n); }
function dgSorted(list) {
  const key = { yld: (r) => -(r.yld || 0), next: (r) => { const n = dgDays(r.next); return n == null || n < -3 ? 1e9 : n; }, sym: (r) => r.s }[dgSort];
  return list.slice().sort((a, b) => { const x = key(a), y = key(b); return x < y ? -1 : x > y ? 1 : 0; });
}
function dgMobRow(r, opt) {
  const sh = opt.sh(r.s), st = sh && sh.st, on = opt.watch && opt.watch.includes(r.s), paid = r.ttm > 0;
  return '<li><button class="dgm-row" data-act="dg-open" data-s="' + esc(r.s) + '"><span class="dgm-av dg-' + r.g + '">' + esc(dgShort(r.s)) + '</span><span class="dgm-mid"><span class="dgm-nm"><span class="dgm-n">' + esc(r.n || r.s) + '</span><small class="num">' + esc(r.s) + '</small></span><span class="dgm-meta"><i class="dgm-dot ' + esc(st || "") + '" title="' + esc(st ? t("sh_" + st) : t("dg_sh_none")) + '"></i>' +
    (paid ? '<span class="' + (dgSoon(r) ? "dg-soon" : "") + '">' + esc(dgNextTxt(r)) + "</span>" : esc(st ? t("sh_" + st) : t("dg_sh_none"))) + '</span></span><span class="dgm-end">' +
    (paid ? '<b class="num">' + fmt(r.yld, 2) + "%</b><small>" + (on ? '<span class="dg-star-mini">★</span> ' : "") + esc(dgFreq(r.freq)) + "</small>" : '<span class="num">' + esc(dgMoney(r.price, r.cur)) + "</span>") + "</span></button></li>";
}
function dgTable(data, opt) {
  if (!data || !Array.isArray(data.stocks) || !data.stocks.length) return '<div class="notice">' + esc(t("dg_empty")) + "</div>";
  const inGrp = data.stocks.filter((r) => dgGrp === "all" || r.g === dgGrp), paid = inGrp.filter((r) => r.ttm > 0);
  if (dgF === "watch" && !opt.watch) dgF = null;
  let list = paid;
  if (dgF === "soon") list = list.filter(dgSoon); else if (dgF === "watch") list = list.filter((r) => opt.watch.includes(r.s));
  list = dgSorted(list);
  const none = dgF ? [] : inGrp.filter((r) => !(r.ttm > 0)).sort((a, b) => (a.s < b.s ? -1 : 1));
  const avg = paid.length ? paid.reduce((a, r) => a + r.yld, 0) / paid.length : 0;
  const stats = [["soon", paid.filter(dgSoon).length, "dg_st_soon"], ["avg", fmt(avg, 2) + "%", "dg_st_avg"]].concat(opt.watch ? [["watch", paid.filter((r) => opt.watch.includes(r.s)).length, "dg_st_watch"]] : []);
  const sum = '<div class="dg-sum" style="grid-template-columns:repeat(' + stats.length + ',minmax(0,1fr))">' + stats.map(([k, v, l]) => k === "avg" ? '<div class="dg-stat"><b class="num">' + v + "</b><span>" + esc(t(l)) + "</span></div>" : '<button class="dg-stat" data-act="dg-f" data-f="' + k + '" aria-pressed="' + (dgF === k) + '"><b class="num">' + v + "</b><span>" + esc(t(l)) + "</span></button>").join("") + "</div>";
  const grps = ["all", "big", "tech", "china", "hk"].filter((g) => g === "all" || data.stocks.some((r) => r.g === g));
  const rail = '<div class="dg-rail"><div class="dg-chips" role="group" aria-label="' + esc(t("dg_h")) + '">' + grps.map((g) => '<button class="dg-chip" data-act="dg-grp" data-g="' + g + '" aria-pressed="' + (dgGrp === g) + '">' + esc(t("dg_g_" + g)) + "</button>").join("") + '</div><button class="dg-sortb" data-act="dg-sort" aria-label="' + esc(t("dg_sort")) + '"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M7 4v16M3 16l4 4 4-4M17 20V4M13 8l4-4 4 4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' + esc(t("dg_s_" + dgSort)) + "</button></div>";
  const listH = '<div class="dg-lh"><h3>' + esc(t(dgF === "soon" ? "dg_lh_soon" : dgF === "watch" ? "dg_lh_watch" : "dg_lh_pay")) + '</h3><span class="small muted">' + esc(t("dg_n").replace("{n}", list.length)) + "</span></div>";
  const emptyTxt = t(dgF === "watch" ? "dg_e_watch" : dgF === "soon" ? "dg_e_soon" : "dg_nopay");
  const head = ["dg_c_sym", "dg_c_px", "dg_c_yld", "dg_c_ttm", "dg_c_freq", "dg_c_last", "dg_c_next", "dg_c_sh"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + (opt.watch ? "<th></th>" : "");
  const desk = list.length ? '<div class="tablewrap dg-table dg-desk"><table><thead><tr>' + head + "</tr></thead><tbody>" + dgRows(list, opt) + "</tbody></table></div>" : "";
  const mob = list.length ? '<ul class="dgm-list dg-mob">' + list.map((r) => dgMobRow(r, opt)).join("") + "</ul>" : "";
  const empty = list.length ? "" : '<div class="dgm-empty">' + esc(emptyTxt) + "</div>";
  let noneBox = "";
  if (none.length) {
    const deskNone = '<div class="dg-desk">' + owPanel(t("dg_none_h") + " (" + none.length + ")", '<p class="small muted" style="margin:0">' + esc(t("dg_none_p")) + '</p><div class="tablewrap dg-table"><table><thead><tr>' + ["dg_c_sym", "dg_c_px", "dg_c_sh"].map((k) => "<th>" + esc(t(k)) + "</th>").join("") + "</tr></thead><tbody>" +
      none.map((r) => { const sh = opt.sh(r.s); return '<tr><td><b class="num">' + esc(r.s) + "</b> " + esc(r.n || "") + '<br><span class="small muted">' + esc(t("dg_g_" + r.g)) + '</span></td><td class="num">' + (r.price ? esc(dgMoney(r.price, r.cur)) : "–") + "</td><td>" + (sh ? shTag(sh.st) : '<span class="small muted">' + esc(t("dg_sh_none")) + "</span>") + "</td></tr>"; }).join("") + "</tbody></table></div>") + "</div>";
    const mobNone = '<div class="dg-mob"><button class="dgm-tog" data-act="dg-none">' + esc(t(dgNone ? "dg_none_hide" : "dg_none_show").replace("{n}", none.length)) + "</button>" + (dgNone ? '<div class="dg-lh"><h3>' + esc(t("dg_none_h")) + '</h3><span class="small muted">' + esc(t("dg_none_s")) + '</span></div><ul class="dgm-list">' + none.map((r) => dgMobRow(r, opt)).join("") + "</ul>" : "") + "</div>";
    noneBox = deskNone + mobNone;
  }
  return '<div class="stack dg-wrap" style="gap:12px">' + sum + rail + listH + desk + mob + empty +
    '<p class="small muted" style="margin:0">' + esc(t("dg_asof").replace("{d}", whenText(data.fetched_at))) + '<span class="dg-desk-i"> · ' + esc(t("dg_next_note")) + "</span></p>" + '<div class="dg-desk">' + dgCalc(paid, opt) + "</div>" + noneBox + "</div>";
}

/* ----- bottom sheet (phone): details, payout bars, calculator, star ----- */
let dgSheetS = null, dgSheetFocus = null;
function dgCtx() { return route() === "shared" ? { data: DG.view, opt: { sh: (s) => { const r = DG.view && DG.view.stocks.find((x) => x.s === s); return r && r.sh; }, watch: null } } : { data: DG.data, opt: { sh: dgSharia, watch: DG.watch || [] } }; }
function dgSheetHtml() {
  const { data, opt } = dgCtx(), r = data && data.stocks.find((x) => x.s === dgSheetS); if (!r) return "";
  const sh = opt.sh(r.s), st = sh && sh.st, on = opt.watch && opt.watch.includes(r.s), paid = r.ttm > 0;
  const kv = [[t("dg_c_px"), dgMoney(r.price, r.cur)]];
  if (paid) { kv.push([t("dg_c_yld"), fmt(r.yld, 2) + "%"], [t("dg_c_ttm"), dgMoney(r.ttm, r.cur)], [t("dg_c_freq"), dgFreq(r.freq), 1]); if (r.last) kv.push([t("dg_c_last"), r.last[0]]); if (r.next) kv.push([t("dg_c_next"), r.next]); }
  let h = '<div class="dgs-top"><span class="dgm-av dg-' + r.g + '">' + esc(dgShort(r.s)) + '</span><div style="min-width:0"><h3 id="dgs-name">' + esc(r.n || r.s) + '</h3><p><span class="num">' + esc(r.s) + "</span> · " + esc(t("dg_g_" + r.g)) + "</p></div>" +
    (opt.watch ? '<button class="dgs-star" data-act="dg-star" data-s="' + esc(r.s) + '" aria-pressed="' + !!on + '">' + (on ? "★ " + esc(t("dg_watching")) : "☆ " + esc(t("dg_follow"))) + "</button>" : "") + "</div>";
  h += '<div class="row" style="gap:6px">' + (st ? shTag(st) : '<span class="tag">' + esc(t("dg_sh_none")) + "</span>") + (sh && sh.p != null ? '<span class="tag">' + esc(t("sh_purify")) + " " + fmt(sh.p, 2) + "%</span>" : "") + (!st && opt.watch && r.g !== "hk" && typeof SHQ !== "undefined" ? (SHQ && SHQ.includes(r.s) ? '<span class="small muted">' + esc(t("dg_sh_q")) + "</span>" : '<button class="btn sm ghost" data-act="sh-queue" data-s="' + esc(r.s) + '">' + esc(t("dg_sh_calc")) + "</button>") : "") + "</div>";
  h += '<div class="dgs-kv">' + kv.map(([k, v, ar]) => "<div><span>" + esc(k) + '</span><b class="' + (ar ? "" : "num") + '">' + esc(v) + "</b></div>").join("") + "</div>";
  if (paid && r.next) { const n = dgDays(r.next); h += '<p class="small muted" style="margin:0">' + esc(dgNextTxt(r) + (n != null && n >= 0 ? t("dg_own_before") : ".") + " " + t("dg_est")) + "</p>"; }
  if (r.hist && r.hist.length) { const hs = r.hist.slice(-8), mx = Math.max.apply(null, hs.map((x) => x[1])); h += '<div><h4 class="dgs-h">' + esc(t("dg_hist")) + '</h4><div class="dgs-bars">' + hs.map((x) => '<div title="' + esc(x[0] + " · " + dgMoney(x[1], r.cur)) + '"><small class="num">' + fmt(x[1], 2) + '</small><i style="height:' + Math.max(6, Math.round((x[1] / mx) * 52)) + 'px"></i><small class="num">' + esc(x[0].slice(2, 7).replace("-", "/")) + "</small></div>").join("") + "</div></div>"; }
  if (paid) { const w = dgWht == null ? (DG_WHT[r.g] == null ? 30 : DG_WHT[r.g]) : dgWht; h += '<div><h4 class="dgs-h">' + esc(t("dg_how_much")) + '</h4><div class="dgs-calc"><div class="field"><label for="dgs-amt">' + esc(t("dg_calc_amt")) + " (" + esc(dgCurName(r.cur)) + ')</label><input id="dgs-amt" data-dg="samt" type="number" min="0" step="any" inputmode="decimal" value="' + esc(dgAmt) + '"></div><div class="field"><label for="dgs-wht">' + esc(t("dg_calc_wht")) + '</label><input id="dgs-wht" data-dg="swht" type="number" min="0" max="100" step="any" inputmode="decimal" value="' + esc(w) + '"></div></div></div><div class="dgs-res" id="dgs-res">' + dgSheetRes(r, opt) + '</div><p class="small muted" style="margin:0">' + esc(t("dg_wht_note")) + "</p>"; }
  else h += '<p class="small muted" style="margin:0">' + esc(t("dg_nodiv_long")) + "</p>";
  return h;
}
function dgSheetRes(r, opt) {
  const a = parseFloat(dgAmt), w = parseFloat(dgWht == null ? (DG_WHT[r.g] == null ? 30 : DG_WHT[r.g]) : dgWht) || 0;
  if (!(a > 0)) return '<span class="small muted">' + esc(t("dg_enter_amt")) + "</span>";
  const sh = opt.sh(r.s), g = a * r.yld / 100, net = g * (1 - w / 100), pur = sh && sh.p ? g * sh.p / 100 : 0, c = dgCurName(r.cur);
  const ln = (k, v) => '<div class="dgs-ln"><span>' + esc(k) + '</span><b class="num">' + v + "</b></div>";
  return '<div class="dgs-big"><span>' + esc(t("dg_net_y")) + '</span><b class="num">' + c + fmt(net, 2) + "</b></div>" + ln(t("dg_gross"), c + fmt(g, 2)) + ln(t("dg_calc_wht").replace(" %", "") + " " + fmt(w, 0) + "%", "−" + c + fmt(g - net, 2)) + (r.freq ? ln(t("dg_each").replace("{f}", dgFreq(r.freq)), c + fmt(net / r.freq, 2)) : "") + (pur ? ln(t("dg_pur_of"), c + fmt(pur, 2)) : "");
}
function dgSheet(open) {
  let sc = document.getElementById("dgscrim"), sh = document.getElementById("dgsheet");
  if (!open) { if (sh) { sh.classList.remove("on"); sh.style.transform = ""; } if (sc) sc.classList.remove("on"); document.body.classList.remove("dg-lock"); dgSheetS = null; if (dgSheetFocus && document.contains(dgSheetFocus)) dgSheetFocus.focus({ preventScroll: true }); return; }
  if (!sc) { sc = document.createElement("div"); sc.id = "dgscrim"; sc.setAttribute("data-act", "dg-close"); document.body.appendChild(sc); }
  if (!sh) {
    sh = document.createElement("section"); sh.id = "dgsheet"; sh.setAttribute("role", "dialog"); sh.setAttribute("aria-modal", "true"); sh.setAttribute("aria-labelledby", "dgs-name"); sh.dir = S.lang === "ar" ? "rtl" : "ltr";
    sh.innerHTML = '<div class="dgs-grab" data-act="dg-close" aria-hidden="true"><i></i></div><div class="dgs-body" id="dgs-body"></div>'; document.body.appendChild(sh);
    let y0 = null, dy = 0; const body = sh.querySelector(".dgs-body");
    sh.addEventListener("touchstart", (e) => { if (body.scrollTop > 0 && !e.target.closest(".dgs-grab")) return; y0 = e.touches[0].clientY; dy = 0; sh.style.transition = "none"; }, { passive: true });
    sh.addEventListener("touchmove", (e) => { if (y0 == null) return; dy = Math.max(0, e.touches[0].clientY - y0); sh.style.transform = "translateY(" + dy + "px)"; }, { passive: true });
    sh.addEventListener("touchend", () => { if (y0 == null) return; sh.style.transition = ""; if (dy > 90) dgSheet(false); else sh.style.transform = ""; y0 = null; });
  }
  sh.querySelector("#dgs-body").innerHTML = dgSheetHtml();
  requestAnimationFrame(() => { sc.classList.add("on"); sh.classList.add("on"); document.body.classList.add("dg-lock"); });
}
function dgSheetRefresh() { const b = document.getElementById("dgs-body"); if (b && dgSheetS) b.innerHTML = dgSheetHtml(); }

/* ----- owner tab inside مكتبي ----- */
function dkDivGlobal() {
  if (!DG.loaded) { loadDG(); return '<div class="notice">' + esc(t("dg_loading")) + "</div>"; }
  const opt = { sh: dgSharia, watch: DG.watch || [] };
  return '<div class="stack"><div class="dg-intro"><h2 style="margin:0">' + esc(t("dg_h")) + '</h2><p class="muted" style="margin:4px 0 0">' + esc(t("dg_p")) + "</p></div>" + dgTable(DG.data, opt) + dgShareBox() + "</div>";
}
function dgShareBox() {
  const loc = dgLocal(), on = !!dgPub, link = location.origin + location.pathname + "#shared";
  let state = "";
  if (on && loc) state = '<p class="small" style="margin:0"><span class="tag up">✓</span> ' + esc(t("dg_share_state").replace("{d}", whenText(loc.at))) + "</p>";
  else if (on) state = '<p class="small" style="margin:0"><span class="tag amber">!</span> ' + esc(t("dg_share_other")) + "</p>";
  const linkRow = on ? '<div class="row" style="gap:8px;align-items:center"><span class="small muted">' + esc(t("dg_share_link")) + '</span><code class="num" dir="ltr">' + esc(link) + '</code><button class="btn sm" data-act="dg-copy" data-c="' + esc(link) + '">' + esc(t("dg_share_copy")) + "</button></div>" : "";
  return owPanel(t("dg_share_h"), '<p class="muted small" style="margin:0">' + esc(t("dg_share_p")) + "</p>" + state + linkRow +
    '<form class="row" data-form="dg-share" novalidate style="align-items:flex-end"><div class="field" style="flex:1;min-width:180px"><label for="dg-pass">' + esc(t("dg_share_pass")) + '</label><input id="dg-pass" type="password" autocomplete="new-password" minlength="8"></div><button class="btn sm primary" type="submit"' + (dgBusy ? " disabled" : "") + ">" + esc(t(dgBusy ? "dg_share_busy" : on ? "dg_share_upd" : "dg_share_on")) + "</button>" + (on ? '<button class="btn sm ghost" type="button" data-act="dg-share-off"' + (dgBusy ? " disabled" : "") + ">" + esc(t("dg_share_off")) + "</button>" : "") + "</form>");
}
function dgSnapshot() {
  const stocks = (DG.data && DG.data.stocks || []).map((r) => { const sh = dgSharia(r.s); return Object.assign({}, r, sh ? { sh } : {}); });
  return { v: 1, fetched_at: DG.data && DG.data.fetched_at, stocks };
}
async function dgPublish(pass) {
  const salt = crypto.getRandomValues(new Uint8Array(16)), key = await vaultKey(pass, salt, DG_ITER);
  const snap = dgSnapshot(), box = await seal(key, JSON.stringify(snap));
  const file = { v: 1, kdf: "PBKDF2-SHA256", iter: DG_ITER, salt: u8b64(salt), at: new Date().toISOString(), box };
  const cur = await ghRepo("meras", DG_FILE);
  const r = await ghRepo("meras", DG_FILE, "PUT", { message: "مشاركة التوزيعات العالمية", content: b64e(JSON.stringify(file) + "\n"), sha: cur ? cur.sha : undefined });
  dgPub = r && r.content ? r.content : { sha: "x" };
  try { localStorage.setItem(DG_KEY, JSON.stringify({ pass, at: file.at, src: snap.fetched_at })); } catch (e) {}
}
async function dgAutoPublish() {
  const loc = dgLocal();
  if (!dgPub || !loc || !loc.pass || !DG.data || dgBusy) return;
  if ((DG.data.fetched_at || "") <= (loc.src || "")) return;
  dgBusy = true; try { await dgPublish(loc.pass); } catch (e) {} dgBusy = false;
}
async function dgStopShare() {
  try { const cur = await ghRepo("meras", DG_FILE); if (cur) await ghRepo("meras", DG_FILE, "DELETE", { message: "إيقاف مشاركة التوزيعات", sha: cur.sha }); dgPub = null; try { localStorage.removeItem(DG_KEY); } catch (e) {} toast(t("dg_share_stopped")); } catch (e) { toast(e.code === "403" || e.code === "404" ? t("sh_admin_nopub") : errText(e)); }
}
async function dgSaveWatch() {
  try { const r = await gh("divgwatch.json", "PUT", { message: "divgwatch", content: b64e(JSON.stringify(DG.watch) + "\n"), sha: DG.watchSha }); DG.watchSha = r && r.content ? r.content.sha : DG.watchSha; } catch (e) { toast(errText(e)); }
}

/* ----- bell: starred stocks whose expected ex-date is within 5 days ----- */
function dgBellItems() {
  if (!dgOwner() || !DG.data || !Array.isArray(DG.data.stocks) || !DG.watch) return [];
  return DG.data.stocks.filter((r) => DG.watch.includes(r.s) && r.next && r.ttm).filter((r) => { const n = dgDays(r.next); return n != null && n >= 0 && n <= 5; })
    .map((r) => ({ id: "d:" + r.s + "|" + r.next, kind: "div", r, date: today() }));
}

/* ----- the shared view (#shared): password in, read-only table out ----- */
let sdFile = undefined, sdErr = "";
async function sdLoad() {
  try { const r = await fetch("./" + DG_FILE + "?t=" + Date.now(), { cache: "no-store" }); sdFile = r.ok ? await r.json() : null; } catch (e) { sdFile = null; }
  let p = null; try { p = localStorage.getItem(DG_PASS); } catch (e) {}
  if (sdFile && p) await sdOpen(p, true);
  if (route() === "shared") render();
}
async function sdOpen(pass, quiet) {
  try { const key = await vaultKey(pass, b64u8(sdFile.salt), sdFile.iter || DG_ITER); DG.view = JSON.parse(await unseal(key, sdFile.box)); DG.viewAt = sdFile.at; sdErr = ""; try { localStorage.setItem(DG_PASS, pass); } catch (e) {} }
  catch (e) { DG.view = null; if (!quiet) sdErr = t("sd_bad"); try { localStorage.removeItem(DG_PASS); } catch (err) {} }
}
function pageShared() {
  const head = '<div class="wrap"><div class="page-head"><h1>' + esc(t("sd_h")) + "</h1><p>" + esc(DG.view ? t("dg_p") : t("sd_p")) + "</p></div>";
  if (sdFile === undefined) { sdFile = false; sdLoad(); }
  if (sdFile === false) return head + '<div class="notice" style="margin-block:18px">' + esc(t("dg_loading")) + "</div></div>";
  if (!sdFile) return head + '<div class="notice" style="margin-block:18px">' + esc(t("sd_none")) + "</div></div>";
  if (!DG.view) return head + '<div class="stack" style="padding-block:18px 40px;max-width:460px"><form class="panel stack" data-form="sd-open" novalidate><div class="field"><label for="sd-pass">' + esc(t("sd_pass")) + '</label><input id="sd-pass" type="password" autocomplete="current-password" required></div>' + (sdErr ? '<p class="small" style="color:var(--down);margin:0">' + esc(sdErr) + "</p>" : "") + '<button class="btn primary" type="submit">' + esc(t("sd_open")) + "</button></form></div></div>";
  return head + '<div class="stack" style="padding-block:18px 40px"><div class="row" style="justify-content:space-between"><span class="small muted">' + esc(t("sd_from").replace("{d}", whenText(DG.viewAt))) + '</span><button class="btn sm ghost" data-act="sd-lock">' + esc(t("sd_lock")) + "</button></div>" +
    dgTable(DG.view, { sh: (s) => { const r = DG.view.stocks.find((x) => x.s === s); return r && r.sh; }, watch: null }) + '<div class="notice">' + esc(t("ln_note")) + "</div></div></div>";
}

/* ----- events ----- */
function dgRepaintCalc() {
  const list = route() === "shared" ? DG.view && DG.view.stocks : DG.data && DG.data.stocks; if (!list) return;
  const opt = route() === "shared" ? { sh: (s) => { const r = list.find((x) => x.s === s); return r && r.sh; } } : { sh: dgSharia };
  const box = document.getElementById("dg-res"); if (!box) return;
  const tmp = document.createElement("div"); tmp.innerHTML = dgCalc(list, opt); const nb = tmp.querySelector("#dg-res"); if (nb) box.innerHTML = nb.innerHTML;
}
document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="dg-"],[data-act^="sd-"]'); if (!el) return;
  const a = el.dataset.act;
  if (a === "dg-grp") { dgGrp = el.dataset.g; render(); }
  else if (a === "dg-f") { dgF = dgF === el.dataset.f ? null : el.dataset.f; render(); }
  else if (a === "dg-sort") { const o = ["yld", "next", "sym"]; dgSort = o[(o.indexOf(dgSort) + 1) % o.length]; render(); }
  else if (a === "dg-none") { dgNone = !dgNone; render(); }
  else if (a === "dg-open") { dgSheetFocus = el; dgSheetS = el.dataset.s; dgWht = null; dgSheet(true); }
  else if (a === "dg-close") { dgSheet(false); }
  else if (a === "dg-pick") { dgPick = dgPick === el.dataset.s ? null : el.dataset.s; dgWht = null; render(); const c = document.getElementById("dg-amt"); if (dgPick && c) c.scrollIntoView({ behavior: "smooth", block: "center" }); }
  else if (a === "dg-star") { const s = el.dataset.s, w = DG.watch || (DG.watch = []), i = w.indexOf(s); if (i >= 0) w.splice(i, 1); else { w.push(s); toast(t("dg_starred")); } render(); dgSheetRefresh(); await dgSaveWatch(); if (typeof topBell === "function") topBell(); }
  else if (a === "dg-copy") { navigator.clipboard && navigator.clipboard.writeText(el.dataset.c).then(() => toast(t("nt_copied"))).catch(() => {}); }
  else if (a === "dg-share-off") { dgBusy = true; render(); await dgStopShare(); dgBusy = false; render(); }
  else if (a === "sd-lock") { DG.view = null; try { localStorage.removeItem(DG_PASS); } catch (err) {} render(); }
});
document.addEventListener("change", (e) => {
  const k = e.target.dataset && e.target.dataset.dg; if (!k) return;
  if (k === "sort") { dgSort = e.target.value; render(); }
});
document.addEventListener("input", (e) => {
  const k = e.target.dataset && e.target.dataset.dg; if (!k) return;
  if (k === "amt") { dgAmt = e.target.value; dgRepaintCalc(); } else if (k === "wht") { dgWht = e.target.value; dgRepaintCalc(); }
  else if (k === "samt" || k === "swht") { if (k === "samt") dgAmt = e.target.value; else dgWht = e.target.value; const { data, opt } = dgCtx(), r = data && data.stocks.find((x) => x.s === dgSheetS), box = document.getElementById("dgs-res"); if (r && box) box.innerHTML = dgSheetRes(r, opt); }
});
document.addEventListener("submit", async (e) => {
  const f = e.target.closest && e.target.closest('[data-form="dg-share"],[data-form="sd-open"]'); if (!f) return;
  e.preventDefault();
  if (f.dataset.form === "sd-open") { const p = document.getElementById("sd-pass").value; if (!p) return; await sdOpen(p); render(); return; }
  const p = document.getElementById("dg-pass").value;
  if (p.length < 8) { toast(t("dg_share_short")); return; }
  dgBusy = true; render();
  try { await dgPublish(p); toast(t("dg_share_done")); } catch (err) { toast(err && (err.code === "403" || err.code === "404") ? t("sh_admin_nopub") : errText(err)); }
  dgBusy = false; render();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && dgSheetS) dgSheet(false); });
window.addEventListener("hashchange", () => { if (dgSheetS) dgSheet(false); });
if (dgOwner()) setTimeout(() => loadDG(), 1500);
