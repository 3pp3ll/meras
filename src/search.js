/* ===== مِراس: البحث السريع (في الشريط العلوي جنب الساعة) =====
   تكتب اللي تبيه وينقلك له على طول: الصفحات، أقسام مكتبي، الأسهم والمؤشرات (تفتح في الشارت)،
   الدروس، الشروحات، مدارس التحليل، مصطلحات القاموس، والتحليلات المحفوظة.
   اختصار لوحة المفاتيح: / أو Ctrl+K. */
Object.assign(UI, {
  sr_btn: ["ابحث", "Search"], sr_ph: ["وش تبي؟ سهم، مؤشر، صفحة، درس، مصطلح…", "What do you need? A stock, index, page, lesson, term…"],
  sr_none: ["ما لقيت شي بهذا الاسم.", "Nothing found."], sr_hint: ["↑↓ للتنقل · Enter للفتح · Esc للإغلاق", "↑↓ to move · Enter to open · Esc to close"],
  sr_k_page: ["صفحة", "Page"], sr_k_desk: ["مكتبي", "My desk"], sr_k_stock: ["سهم", "Stock"], sr_k_idx: ["مؤشر", "Index"], sr_k_lesson: ["درس", "Lesson"], sr_k_guide: ["شرح", "Guide"],
  sr_k_school: ["مدرسة", "School"], sr_k_term: ["مصطلح", "Term"], sr_k_saved: ["محفوظ", "Saved"], sr_k_metal: ["معدن", "Metal"], sr_k_act: ["إجراء", "Action"],
  sr_open_chart: ["افتح {s} في الشارت", "Open {s} on the chart"], sr_analyse: ["حلّل {s} بكل المدارس", "Analyse {s} with all schools"],
  sr_recent: ["الأكثر استخداماً", "Popular"], sr_add_chart: ["أضفه للشارت", "Add it to the chart"]
});
const SR = { open: false, q: "", i: 0, list: [] };
/* أسماء عربية للبحث عن الأسهم العالمية */
const SR_ALIAS = { BABA: "علي بابا", "9988.HK": "علي بابا هونغ كونغ", TSM: "تايوان للرقائق تي اس ام سي", ASML: "اي اس ام ال", "0700.HK": "تينسنت", "7203.T": "تويوتا", "SAP.DE": "ساب", NFLX: "نتفليكس", JPM: "جي بي مورغان", KO: "كوكاكولا كوكا كولا",
  TSLA: "تسلا", NVDA: "انفيديا نفيديا", AMD: "اي ام دي", PLTR: "بالانتير", SMCI: "سوبر مايكرو", META: "ميتا فيسبوك", AMZN: "امازون", AAPL: "ابل آبل", MSFT: "مايكروسوفت", GOOGL: "جوجل قوقل الفابت", AVGO: "برودكوم", ORCL: "اوراكل", SNOW: "سنوفليك",
  "^GSPC": "اس اند بي", "^IXIC": "ناسداك", "^DJI": "داو جونز", "^N225": "نيكاي اليابان", "^HSI": "هانغ سنغ هونغ كونغ", "^GDAXI": "داكس المانيا", "^TASI.SR": "تاسي السوق السعودي المؤشر العام", XAU: "ذهب الذهب gold", XAG: "فضه الفضة silver" };
const srNorm = (s) => String(s || "").toLowerCase().replace(/[ً-ْـ]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي").replace(/ؤ/g, "و").replace(/ئ/g, "ي").replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x660)).replace(/\s+/g, " ").trim();
function srGoDesk(tab) { const r = typeof DESK_ROUTE !== "undefined" && DESK_ROUTE[tab]; if (r) { location.hash = r; return; } if (typeof dkTab !== "undefined") { dkTab = tab; if (typeof dkGrid !== "undefined") dkGrid = false; } if (location.hash !== "#desk") location.hash = "desk"; else render(); }
function srGoChart(sym, analyse) {
  const cfg = chartCfg(); cfg.sym = sym; chOffset = 0; chReplay = null; chPending = null; save();
  if (location.hash !== "#chart") location.hash = "chart"; else render();
  if (analyse) setTimeout(() => { SCA.sel = SCA_SCHOOLS.slice(); scaSave(); const all = CH && CH.data ? CH.data.slice(0, CH.e) : []; if (all.length >= 40) { SCA.res = scaRun(all, SCA.sel); SCA.key = sym + "|" + CH.e; render(); setTimeout(() => { const o = document.querySelector(".sca-out"); if (o) o.scrollIntoView({ behavior: "smooth", block: "start" }); }, 100); } }, 300);
}
function srIndex() {
  const out = [], add = (kind, label, sub, kw, go, w) => out.push({ kind, label, sub: sub || "", kw: srNorm(label + " " + (sub || "") + " " + (kw || "")), go, w: w || 0 });
  const go = (h) => () => { location.hash = h; };
  const owner = typeof HOSTED !== "undefined" && HOSTED && !!CFG.token;
  // الصفحات
  add("page", t("learn_h"), "", "تعليم learn", go("learn"), 3); add("page", t("pf_h"), t("pf_p"), "محفظه portfolio خدمات", go("pf"), 3);
  Object.keys(NAV_GROUPS).forEach((g) => navItems(g).forEach(([h, k, d]) => add("page", t(k), t(d), h, go(h), 4))); add("page", t("nav_news"), "", "news اخبار", go("news"), 4); add("page", t("mk_h"), t("mk_p"), "market سوق", go("market"), 3);
  [["settings", "set_h", "اعدادات ربط مفتاح token openrouter"], ["plans", "nav_plans", "باقات اشتراك"], ["account", "nav_account", "حساب"]].forEach(([h, k, kw]) => { try { add("page", t(k), "", kw, go(h), 2); } catch (e) {} });
  if (owner) {
    add("page", t("ow_h"), "", "owner مالك", go("owner"), 3);
    add("page", t("dk_h"), "", "desk مكتبي", () => srGoDesk(typeof dkTab !== "undefined" ? dkTab : "pf"), 3);
    (typeof MAP_DESK !== "undefined" ? MAP_DESK : []).forEach(([k, l]) => add("desk", t(l), t("dk_g_" + k), k, () => srGoDesk(k), 5));
  }
  // الأسهم والمؤشرات والمعادن (كل اللي له شموع في الشارت)
  const hist = (typeof LIVE !== "undefined" && LIVE.history) || {};
  Object.keys(hist).filter((k) => (hist[k] || []).length > 1).forEach((k) => {
    const nm = symName(k), kind = k[0] === "^" ? "idx" : k === "XAU" || k === "XAG" ? "metal" : "stock", tk = (typeof TK_LIST !== "undefined" && TK_LIST.find((x) => x.s === k));
    const short = k.replace(/^\^/, "").replace(/\.SR$/, ""), label = tk ? L(tk.n) + " · " + L(tk.full) : short + " " + nm;
    const en = typeof extraNameOf === "function" && EXTRA && EXTRA.symbols && EXTRA.symbols[k] ? EXTRA.symbols[k].n : "";
    add(kind, label, t("sr_open_chart").replace("{s}", tk ? L(tk.n) : short), k + " " + en + " " + (SR_ALIAS[k] || "") + " " + (tk ? L([tk.n[1], tk.n[0]]) + " " + tk.full.join(" ") : "") + (k === "XAU" ? " gold ذهب" : k === "XAG" ? " silver فضه" : ""), () => srGoChart(k), kind === "idx" ? 6 : 5);
    add("act", t("sr_analyse").replace("{s}", k.replace(/^\^/, "") + " " + nm), "", "تحليل حلل analyse " + k + " " + nm + " " + en + " " + (SR_ALIAS[k] || ""), () => srGoChart(k, true), 1);
  });
  // أسهم السوق السعودي اللي ما لها شموع في الشارت: تنضاف لقائمة الشارت بضغطة (للمالك)
  if (owner && typeof SA_SECTORS !== "undefined" && typeof extraSaveList === "function") SA_SECTORS.forEach(([sec, list]) => list.forEach(([code, nm, full]) => {
    if (hist[code] && hist[code].length > 1) return;
    add("stock", code + " " + nm, t("sr_add_chart") + " · " + sec, full + " " + code, () => { const l = EXL || []; if (l.some(([x]) => x === code)) { toast(t("ex2_dup")); return; } if (l.length >= 40) { toast(t("ex2_max")); return; } extraSaveList(l.concat([[code, "SA"]]), "ex2_added"); }, 2);
  }));
  // التعليم
  if (typeof LESSONS !== "undefined") LESSONS.forEach((l) => add("lesson", L(l.title), "", l.title.join(" "), go("l-" + l.id), 2));
  if (typeof GUIDES !== "undefined") GUIDES.forEach((g) => add("guide", L(g.title), L(g.intro), g.title.join(" "), go("g-" + g.id), 2));
  add("guide", t("il_title"), "", "indicators مؤشرات", go("g-indicators"), 2);
  if (typeof SCHOOLS !== "undefined") { SCHOOLS.forEach((s) => add("school", L(s.name), L(s.idea).slice(0, 90), s.name.join(" ") + " " + s.id, go("sch-" + s.id), 3)); add("school", t("ex_h"), "", "tsla تسلا مثال example", go("sch-tsla"), 2); }
  if (typeof GLOSSARY !== "undefined") GLOSSARY.forEach((g) => add("term", L(g[0]), L(g[2]), g[0].join(" ") + " " + g[1], go("glossary"), 1));
  // المحفوظات
  if (typeof SV !== "undefined" && SV.list) SV.list.forEach((x) => add("saved", x.title, x.sym + " · " + (x.date || ""), x.sym + " " + x.name, () => svOpen(x.id), 4));
  const seen = new Set(); return out.filter((x) => { const key = x.kind + "|" + x.label; if (seen.has(key)) return false; seen.add(key); return true; });
}
function srSearch(q) {
  const n = srNorm(q); if (!n) return [];
  const words = n.split(" ");
  return srIndex().map((it) => {
    const lab = srNorm(it.label); let sc = 0;
    if (!words.every((w) => it.kw.includes(w))) return null;
    if (lab === n) sc += 100; else if (lab.startsWith(n)) sc += 60; else if (lab.includes(n)) sc += 35; else sc += 10;
    if (words.some((w) => lab.split(" ").some((x) => x.startsWith(w)))) sc += 15;
    sc += it.w * 10 - lab.length / 40;
    return Object.assign({ sc }, it);
  }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 14);
}
function srPopular() {
  const pick = (kinds) => srIndex().filter((x) => kinds.includes(x.kind));
  const pages = pick(["desk", "page"]).sort((a, b) => b.w - a.w).slice(0, 6), idx = pick(["idx"]).slice(0, 4);
  return idx.concat(pages);
}
function srRender() {
  let el = document.getElementById("srch");
  if (!SR.open) { if (el) el.remove(); document.body.classList.remove("tk-lock"); return; }
  if (!el) {
    el = document.createElement("div"); el.id = "srch"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true");
    el.innerHTML = '<div class="sr-back" data-act="sr-close"></div><div class="sr-box"><div class="sr-in"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input id="sr-q" type="search" autocomplete="off" spellcheck="false" placeholder="' + esc(t("sr_ph")) + '" aria-label="' + esc(t("sr_btn")) + '"><button class="btn sm ghost" data-act="sr-close" aria-label="Esc">Esc</button></div><div class="sr-list" role="listbox"></div><p class="sr-hint small muted">' + esc(t("sr_hint")) + "</p></div>";
    document.body.appendChild(el); document.body.classList.add("tk-lock");
    const inp = el.querySelector("#sr-q"); inp.value = SR.q; setTimeout(() => inp.focus(), 20);
  }
  SR.list = SR.q.trim() ? srSearch(SR.q) : srPopular();
  if (SR.i >= SR.list.length) SR.i = 0;
  const box = el.querySelector(".sr-list");
  box.innerHTML = (SR.q.trim() ? "" : '<div class="sr-sec small muted">' + esc(t("sr_recent")) + "</div>") + (SR.list.length ? SR.list.map((x, i) => '<button type="button" class="sr-it' + (i === SR.i ? " on" : "") + '" role="option" aria-selected="' + (i === SR.i) + '" data-act="sr-go" data-i="' + i + '"><span class="sr-k ' + x.kind + '">' + esc(t("sr_k_" + x.kind)) + '</span><span class="sr-t"><b>' + esc(x.label) + "</b>" + (x.sub ? "<small>" + esc(x.sub) + "</small>" : "") + "</span></button>").join("") : '<p class="muted" style="padding:14px">' + esc(t("sr_none")) + "</p>");
  const on = box.querySelector(".sr-it.on"); if (on) on.scrollIntoView({ block: "nearest" });
}
function srOpen() { SR.open = true; SR.q = ""; SR.i = 0; if (typeof SV !== "undefined" && !SV.list && typeof svLoad === "function") svLoad(); srRender(); }
function srClose() { SR.open = false; srRender(); }
function srGo(i) { const x = SR.list[i]; if (!x) return; srClose(); try { x.go(); } catch (e) { console.error(e); } window.scrollTo(0, 0); }
document.addEventListener("input", (ev) => { if (ev.target && ev.target.id === "sr-q") { SR.q = ev.target.value; SR.i = 0; srRender(); } });
document.addEventListener("keydown", (ev) => {
  const tag = (ev.target && ev.target.tagName) || "", typing = /INPUT|TEXTAREA|SELECT/.test(tag) || (ev.target && ev.target.isContentEditable);
  if (!SR.open && ((ev.key === "/" && !typing) || ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k"))) { ev.preventDefault(); srOpen(); return; }
  if (!SR.open) return;
  if (ev.key === "Escape") { ev.preventDefault(); srClose(); }
  else if (ev.key === "ArrowDown") { ev.preventDefault(); SR.i = Math.min(SR.list.length - 1, SR.i + 1); srRender(); }
  else if (ev.key === "ArrowUp") { ev.preventDefault(); SR.i = Math.max(0, SR.i - 1); srRender(); }
  else if (ev.key === "Enter" && ev.target && ev.target.id === "sr-q") { ev.preventDefault(); srGo(SR.i); }
});
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest('[data-act="sr-open"],[data-act="sr-close"],[data-act="sr-go"]'); if (!el) return;
  ev.preventDefault();
  if (el.dataset.act === "sr-open") srOpen(); else if (el.dataset.act === "sr-close") srClose(); else srGo(+el.dataset.i);
});
/* زر البحث في الشريط العلوي جنب الساعة */
function srHook() {
  const tools = document.querySelector(".top .tools"); if (!tools || tools.querySelector(".sr-btn")) return;
  const b = document.createElement("button"); b.type = "button"; b.className = "btn sm sr-btn"; b.setAttribute("data-act", "sr-open"); b.setAttribute("aria-label", t("sr_btn"));
  b.innerHTML = '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="sr-btn-t">' + esc(t("sr_btn")) + '…</span><kbd>/</kbd>';
  const clock = document.getElementById("topclock");
  if (clock && clock.parentNode === tools) clock.after(b); else tools.insertBefore(b, tools.firstChild);
}
