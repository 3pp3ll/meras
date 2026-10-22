/* ===== مِراس: شجرة المنصة، زر الرجوع العائم، وتحليلاتي =====
   الشجرة: الجذر "شجرة مِراس" وأربعة فروع ملوّنة (التعليم ذهبي، الخدمات مرجاني، الباقات وردي، الإدارة كحلي/سماوي).
   على الجوال تنرسم بعرض ثابت وتتصغّر على قد الشاشة، والضغط في مكان فاضي يكبّرها.
   أي قسم تفتحه من الشجرة يطلع له زر رجوع عائم يرجعك لنفس مكانك فيها.
   تحليلاتي: كل قراءة للشارت تنحفظ (باسم السهم وتاريخ ووقت الإنشاء) وترجع لها متى ما بغيت. */
Object.assign(UI, {
  tr_root: ["شجرة مِراس", "Meras tree"], tr_q: ["ابحث عن قسم…", "Find a section…"], tr_open: ["افتح الكل", "Expand all"],
  tr_fit: ["اضغط مكان فاضي للتكبير", "Tap empty space to zoom"], tr_unfit: ["اضغط مكان فاضي للتصغير", "Tap empty space to fit"],
  tr_back: ["رجوع للهيكل", "Back to the tree"], tr_login: ["دخول", "Sign in"], tr_account: ["حسابي", "My account"],
  nav_an: ["تحليلاتي", "My analyses"], d_an: ["كل تحليل تسويه في الشارت ينحفظ هنا باسم السهم وتاريخه.", "Every chart analysis you make is saved here by share and date."],
  an_h: ["تحليلاتي", "My analyses"], an_p: ["كل مرة تقرأ الشارت أو تحلله، ينحفظ التحليل هنا باسم السهم وتاريخ ووقت إنشائه. اضغط أي تحليل يفتح كامل.", "Each time you read or analyse a chart it is saved here with the share and the time it was made. Tap one to open it."],
  an_none: ["ما فيه تحليلات للحين. افتح الشارت واضغط «اقرأ الشارت» أو «حلّل»، وينحفظ هنا لحاله.", "No analyses yet. Open the chart and tap Read or Analyse; it is saved here automatically."],
  an_save: ["احفظ في تحليلاتي", "Save to my analyses"], an_saved: ["انحفظ في تحليلاتي", "Saved to my analyses"],
  an_open: ["افتحه على الشارت", "Open on the chart"], an_del: ["احذف", "Delete"], an_note: ["ملاحظتك", "Your note"], an_note_ph: ["اكتب وش ناوي تسوي، أو وش لاحظت…", "What you plan, or what you noticed…"],
  an_at: ["أُنشئ {d}", "Created {d}"], an_candle: ["آخر شمعة {d} · السعر {p}", "Last candle {d} · price {p}"], an_draws: ["{n} رسمة", "{n} drawings"], an_q: ["ابحث باسم السهم أو رمزه…", "Search by share name or code…"],
  an_count: ["{n} تحليل", "{n} analyses"], an_auto: ["تلقائي", "Auto"]
});
NAV_GROUPS.learn.items.splice(2, 0, ["analyses", "nav_an", "d_an"]);
SEC_IC.analyses = '<path d="M4 20V4M4 20h16M8 15l3-4 3 2 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="7" r="2" fill="currentColor"/>';

/* ----- the tree ----- */
const TR_KEY = "meras.tree", TR_W = 1180;
let TR = (() => { try { return Object.assign({ closed: [], zoom: false }, JSON.parse(localStorage.getItem(TR_KEY) || "{}")); } catch (e) { return { closed: [], zoom: false }; } })();
const trSave = () => { try { localStorage.setItem(TR_KEY, JSON.stringify({ closed: TR.closed, zoom: TR.zoom })); } catch (e) {} };
function trGroups() {
  const owner = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  const ic = (h) => SEC_IC[h] || "";
  const g = [
    { k: "l", name: t("nav_learn"), items: NAV_GROUPS.learn.items.map(([h, k]) => ({ h, label: t(k), ic: ic(h), badge: h === "analyses" && (S.analyses || []).length ? String((S.analyses || []).length) : "" })) },
    { k: "s", name: t("nav_svc"), items: NAV_GROUPS.services.items.map(([h, k]) => ({ h, label: t(k), ic: ic(h) })) },
    { k: "p", name: t("nav_plans"), items: [{ h: "plans", label: t("map_plan_free"), ic: ic("plans") }, { h: "plans", label: t("plan_full"), ic: ic("plans") }, { h: "account", label: t(S.signedIn ? "tr_account" : "tr_login"), ic: ic("owner") }] }
  ];
  if (owner) g.push({ k: "a", name: t("map_admin"), lock: true, items: [{ h: "owner", label: t("ow_h"), ic: ic("owner") }].concat(MAP_DESK.map(([k, l]) => ({ h: "desk", tab: k, label: t(l), ic: typeof DK_IC !== "undefined" ? DK_IC[k] : "", badge: typeof dkBadge === "function" ? dkBadge(k) : "" }))) });
  return g;
}
function treeHtml() {
  const gs = trGroups();
  const leaf = (g, it, i) => '<a class="tr2-leaf" href="#' + it.h + '" data-tk="' + g.k + '" data-ti="' + i + '"' + (it.tab ? ' data-dktab="' + it.tab + '"' : "") + "><i>" + '<svg viewBox="0 0 24 24" aria-hidden="true">' + it.ic + "</svg></i><span>" + esc(it.label) + "</span>" + (it.badge ? '<b class="tr2-badge num">' + esc(it.badge) + "</b>" : "") + "</a>";
  return '<section class="tree2"><div class="tr2-tools"><input class="map-q" id="map-q" type="search" placeholder="' + esc(t("tr_q")) + '" aria-label="' + esc(t("tr_q")) + '" autocomplete="off"><button class="btn sm" data-act="tr-open">' + esc(t("tr_open")) + '</button></div>' +
    '<div class="tr2-stage" id="tr2-stage"><svg class="tr2-scene" id="tr2-scene" preserveAspectRatio="none" aria-hidden="true"></svg><div class="tr2-canvas" id="tr2-canvas"><svg class="tr2-wires" id="tr2-wires" aria-hidden="true"></svg><div class="tr2-root" id="tr2-root">' + esc(t("tr_root")) + '</div><div class="tr2-branches" style="--n:' + gs.length + '">' +
    gs.map((g) => { const closed = TR.closed.includes(g.k); return '<div class="tr2-br b-' + g.k + (closed ? " closed" : "") + '" data-k="' + g.k + '"><button class="tr2-head" data-act="tr-br" data-k="' + g.k + '" aria-expanded="' + !closed + '">' + (g.lock ? "🔒 " : "") + esc(g.name) + '<span class="tr2-cnt num">' + g.items.length + '</span><span class="tr2-car" aria-hidden="true">' + (closed ? "▾" : "▴") + '</span></button><div class="tr2-leaves">' + g.items.map((it, i) => leaf(g, it, i)).join("") + "</div></div>"; }).join("") +
    '</div></div><span class="tr2-tip" id="tr2-tip"></span></div></section>';
}
const trScale = () => { const st = document.getElementById("tr2-stage"); if (!st) return 1; const w = st.clientWidth; return TR.zoom || w >= TR_W ? 1 : w / TR_W; };
function trFit() {
  const st = document.getElementById("tr2-stage"), cv = document.getElementById("tr2-canvas"); if (!st || !cv) return;
  const s = trScale(), small = st.clientWidth < TR_W;
  cv.style.transform = s < 1 ? "scale(" + s + ")" : "none";
  st.style.height = s < 1 ? Math.ceil(cv.offsetHeight * s) + "px" : "";
  st.classList.toggle("fit", small && !TR.zoom); st.classList.toggle("zoom", small && TR.zoom);
  const tip = document.getElementById("tr2-tip"); if (tip) { tip.hidden = !small; tip.textContent = t(TR.zoom ? "tr_unfit" : "tr_fit"); }
}
function trWires() {
  const svg = document.getElementById("tr2-wires"), cv = document.getElementById("tr2-canvas"), root = document.getElementById("tr2-root"); if (!svg || !cv || !root) return;
  const s = trScale(), base = cv.getBoundingClientRect();
  const P = (el) => { const r = el.getBoundingClientRect(); return { x: (r.left - base.left + r.width / 2) / s, top: (r.top - base.top) / s, bot: (r.bottom - base.top) / s }; };
  const elbow = (a, b, key) => { const mid = a.bot + (b.top - a.bot) / 2, dx = b.x - a.x, rr = Math.min(10, Math.abs(dx) / 2), dir = dx > 0 ? 1 : -1;
    const d = Math.abs(dx) < 1 ? "M" + a.x + " " + a.bot + " V" + b.top : "M" + a.x + " " + a.bot + " V" + (mid - rr) + " Q" + a.x + " " + mid + " " + (a.x + dir * rr) + " " + mid + " H" + (b.x - dir * rr) + " Q" + b.x + " " + mid + " " + b.x + " " + (mid + rr) + " V" + b.top;
    return '<path class="w-' + key[0] + '" data-w="' + key + '" d="' + d + '"/>'; };
  const R = P(root); let h = "";
  cv.querySelectorAll(".tr2-br").forEach((br) => { const k = br.dataset.k, hd = P(br.querySelector(".tr2-head")); h += elbow(R, hd, k);
    if (br.classList.contains("closed")) return;
    const ls = [...br.querySelectorAll(".tr2-leaf")].map((el) => ({ el, p: P(el) })), top = Math.min(...ls.map((o) => o.p.top));
    ls.filter((o) => o.p.top - top < 4).forEach((o) => { h += elbow(hd, o.p, k + o.el.dataset.ti); }); });
  svg.setAttribute("viewBox", "0 0 " + cv.offsetWidth + " " + cv.offsetHeight); svg.innerHTML = h;
}
function trScene() {
  const sv = document.getElementById("tr2-scene"); if (!sv || sv.childNodes.length) return;
  const W = 1200, H = 700; let h = "";
  for (let x = 0; x <= W; x += 40) h += '<line class="g" x1="' + x + '" y1="0" x2="' + x + '" y2="' + H + '"/>';
  for (let y = 0; y <= H; y += 40) h += '<line class="g" x1="0" y1="' + y + '" x2="' + W + '" y2="' + y + '"/>';
  for (let i = 0; i < 7; i++) { const a = 60 + i * 26, o = i * 0.55; let d = "M0 " + (520 + i * 10); for (let x = 0; x <= W; x += 40) d += " L" + x + " " + (520 + i * 10 + Math.sin(x / 140 + o) * a * 0.6 + Math.cos(x / 310 + o) * 30).toFixed(1); h += '<path class="wv' + (i % 3 === 0 ? " w2" : "") + '" d="' + d + '"/>'; }
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  let p = 600; const pts = [];
  for (let i = 0; i < 34; i++) { const x = 40 + i * 34, o = p, c = p + (rnd() - 0.45) * 46, hi = Math.min(o, c) - rnd() * 22, lo = Math.max(o, c) + rnd() * 22; p = c; pts.push([x, c]);
    h += '<line class="wk" x1="' + x + '" y1="' + hi.toFixed(1) + '" x2="' + x + '" y2="' + lo.toFixed(1) + '"/><rect class="' + (c < o ? "cu" : "cd") + '" x="' + (x - 7) + '" y="' + Math.min(o, c).toFixed(1) + '" width="14" height="' + Math.max(3, Math.abs(c - o)).toFixed(1) + '" rx="2"/>'; }
  const line = pts.map(([x, y], i) => (i ? "L" : "M") + x + " " + (y - 90).toFixed(1)).join(" ");
  h += '<path class="ar" d="' + line + " L" + pts[pts.length - 1][0] + " " + H + " L" + pts[0][0] + " " + H + ' Z"/><path class="pr" d="' + line + '"/>';
  for (let i = 0; i < 18; i++) h += '<circle class="dt" cx="' + (rnd() * W).toFixed(0) + '" cy="' + (rnd() * H).toFixed(0) + '" r="' + (2 + rnd() * 4).toFixed(1) + '"/>';
  sv.setAttribute("viewBox", "0 0 " + W + " " + H); sv.innerHTML = h;
}
function trAfter() { if (!document.getElementById("tr2-stage")) return; trScene(); trFit(); requestAnimationFrame(trWires); }
const trHot = (key) => { const k = key.slice(0, 1); document.querySelectorAll("#tr2-wires path").forEach((p) => p.classList.toggle("hot", !!key && (p.dataset.w === key || p.dataset.w === k))); };
document.addEventListener("mouseover", (e) => { if (!e.target.closest) return; const lf = e.target.closest(".tr2-leaf"), hd = e.target.closest(".tr2-head"); if (lf) trHot(lf.dataset.tk + lf.dataset.ti); else if (hd) trHot(hd.dataset.k); else if (e.target.closest(".tr2-stage")) trHot(""); });
window.addEventListener("resize", () => { if (document.getElementById("tr2-stage")) { trFit(); requestAnimationFrame(trWires); } });

/* ----- the floating back button: shows on any page you opened from the tree ----- */
const TB_KEY = "meras.treeback";
const tbGet = () => { try { return JSON.parse(sessionStorage.getItem(TB_KEY) || "null"); } catch (e) { return null; } };
function tbSync() {
  let b = document.getElementById("treeback");
  const st = tbGet(), show = st && route() !== "" && !(typeof lnShow === "function" && lnShow());
  if (!show) { if (b) b.hidden = true; document.body.classList.remove("has-treeback"); return; }
  if (!b) { b = document.createElement("button"); b.id = "treeback"; b.type = "button"; b.innerHTML = '<span class="tb-spark"><svg viewBox="0 0 34 22" aria-hidden="true"><path d="M2 18 L9 12 L14 15 L21 7 L26 10 L32 3"/><circle cx="32" cy="3" r="2.6"/></svg></span><b></b>'; document.body.appendChild(b); }
  b.querySelector("b").textContent = t("tr_back"); b.setAttribute("aria-label", t("tr_back")); b.className = "b-" + (st.k || "l"); b.hidden = false;
  document.body.classList.add("has-treeback");
}
let trRestore = null;
document.addEventListener("click", (e) => {
  if (!e.target.closest) return;
  const lf = e.target.closest(".tr2-leaf");
  if (lf) { const st = document.getElementById("tr2-stage"); try { sessionStorage.setItem(TB_KEY, JSON.stringify({ k: lf.dataset.tk, y: window.scrollY, x: st ? st.scrollLeft : 0, zoom: TR.zoom })); } catch (err) {} return; }
  if (e.target.closest("#treeback")) { const st = tbGet(); trRestore = st; if (st) { TR.zoom = !!st.zoom; trSave(); } location.hash = ""; return; }
  const hd = e.target.closest('[data-act="tr-br"]');
  if (hd) { const k = hd.dataset.k, i = TR.closed.indexOf(k); if (i >= 0) TR.closed.splice(i, 1); else TR.closed.push(k); trSave(); render(); return; }
  if (e.target.closest('[data-act="tr-open"]')) { TR.closed = []; trSave(); render(); return; }
  const stg = e.target.closest("#tr2-stage");
  if (stg && stg.clientWidth < TR_W && !e.target.closest("a,button")) { TR.zoom = !TR.zoom; trSave(); render(); if (TR.zoom) stg.scrollLeft = 0; }
});
/* after every render: draw the tree, place the back button, restore the spot you left */
const trHook = () => {
  trAfter(); tbSync();
  if (route() === "" && trRestore) { const st = trRestore; trRestore = null; requestAnimationFrame(() => { const s = document.getElementById("tr2-stage"); if (s) s.scrollLeft = st.x || 0; window.scrollTo(0, st.y || 0); }); }
};

/* ----- تحليلاتي ----- */
function anCapture(auto) {
  const sym = S.chart && S.chart.sym; if (!sym) return null;
  const box = document.querySelector(".panel.reading");
  const read = box ? [...box.querySelectorAll("dt,dd,p.small,h3")].map((x) => x.innerText.trim()).filter(Boolean).join("\n") : "";
  const h = typeof chartData === "function" ? chartData(sym) : [], last = h.length ? h[h.length - 1] : null;
  const now = new Date(), day = now.toISOString().slice(0, 10);
  S.analyses = S.analyses || [];
  let a = auto ? S.analyses.find((x) => x.sym === sym && x.auto && x.at.slice(0, 10) === day) : null;
  if (!a) { a = { id: "an" + now.getTime().toString(36), sym, note: "" }; S.analyses.unshift(a); }
  Object.assign(a, { name: (typeof symName === "function" && symName(sym)) || sym, at: now.toISOString(), auto: !!auto, read, date: last ? last.d : "", price: last ? last.c : null, draws: JSON.parse(JSON.stringify((S.drawings && S.drawings[sym]) || [])), chart: JSON.parse(JSON.stringify(S.chart || {})) });
  S.analyses = S.analyses.slice(0, 200); save(); return a;
}
document.addEventListener("click", (e) => {
  if (!e.target.closest) return;
  const rd = e.target.closest('[data-act="ch-read"],[data-act="ch-analyze"]');
  if (rd) setTimeout(() => { if (document.querySelector(".panel.reading")) anCapture(true); }, 900);
  const sv = e.target.closest('[data-act="an-save"]'); if (sv) { if (anCapture(false)) toast(t("an_saved")); return; }
  const el = e.target.closest('[data-act^="an-"]'); if (!el) return;
  const a = (S.analyses || []).find((x) => x.id === el.dataset.id);
  if (el.dataset.act === "an-open" && a) { S.chart = Object.assign({}, S.chart, a.chart || {}, { sym: a.sym }); S.drawings = S.drawings || {}; S.drawings[a.sym] = a.draws || []; save(); location.hash = "chart"; }
  else if (el.dataset.act === "an-del" && a) { S.analyses = S.analyses.filter((x) => x.id !== a.id); save(); render(); }
  else if (el.dataset.act === "an-tgl") { anOpen = anOpen === el.dataset.id ? null : el.dataset.id; render(); }
});
document.addEventListener("input", (e) => {
  if (e.target.dataset && e.target.dataset.an === "note") { const a = (S.analyses || []).find((x) => x.id === e.target.dataset.id); if (a) { a.note = e.target.value; save(); } }
  if (e.target.dataset && e.target.dataset.an === "q") { anQ = e.target.value; const box = document.getElementById("an-list"); if (box) { const tmp = document.createElement("div"); tmp.innerHTML = pageAnalyses(); const nb = tmp.querySelector("#an-list"); if (nb) box.innerHTML = nb.innerHTML; } }
});
let anOpen = null, anQ = "";
const anWhen = (iso) => { const d = new Date(iso); if (isNaN(d)) return iso; const z = (n) => String(n).padStart(2, "0"); let h = d.getHours(); const ap = h < 12 ? (S.lang === "ar" ? "ص" : "AM") : (S.lang === "ar" ? "م" : "PM"); h = h % 12 || 12; return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate()) + " · " + h + ":" + z(d.getMinutes()) + " " + ap; };
function pageAnalyses() {
  const q = anQ.trim(), list = (S.analyses || []).filter((a) => !q || a.sym.includes(q) || String(a.name).includes(q));
  const item = (a) => { const open = anOpen === a.id;
    return '<li class="an-it' + (open ? " open" : "") + '"><button class="an-row" data-act="an-tgl" data-id="' + esc(a.id) + '" aria-expanded="' + open + '"><span class="an-sym num">' + esc(a.sym) + '</span><span class="an-mid"><b>' + esc(a.name) + '</b><small class="muted">' + esc(t("an_at").replace("{d}", anWhen(a.at))) + (a.auto ? ' · <span class="tag">' + esc(t("an_auto")) + "</span>" : "") + '</small></span><span aria-hidden="true">' + (open ? "▴" : "▾") + "</span></button>" +
      (open ? '<div class="an-body stack" style="gap:10px">' + (a.date ? '<p class="small muted" style="margin:0">' + esc(t("an_candle").replace("{d}", a.date).replace("{p}", a.price != null ? fmt(a.price) : "–")) + (a.draws && a.draws.length ? " · " + esc(t("an_draws").replace("{n}", a.draws.length)) : "") + "</p>" : "") +
        (a.read ? '<div class="an-read">' + esc(a.read) + "</div>" : "") + '<div class="field"><label for="an-n-' + esc(a.id) + '">' + esc(t("an_note")) + '</label><textarea id="an-n-' + esc(a.id) + '" rows="2" data-an="note" data-id="' + esc(a.id) + '" placeholder="' + esc(t("an_note_ph")) + '">' + esc(a.note || "") + '</textarea></div><div class="row"><button class="btn sm primary" data-act="an-open" data-id="' + esc(a.id) + '">' + esc(t("an_open")) + '</button><button class="btn sm ghost" data-act="an-del" data-id="' + esc(a.id) + '">' + esc(t("an_del")) + "</button></div></div>" : "") + "</li>"; };
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t("an_h")) + "</h1><p>" + esc(t("an_p")) + '</p></div><div class="stack" style="padding-block:18px 40px">' + ((S.analyses || []).length ? '<div class="row" style="justify-content:space-between"><input id="an-q" type="search" data-an="q" placeholder="' + esc(t("an_q")) + '" value="' + esc(anQ) + '" style="flex:1;min-width:200px;max-width:360px"><span class="small muted">' + esc(t("an_count").replace("{n}", (S.analyses || []).length)) + "</span></div>" : "") +
    '<ul class="an-list" id="an-list">' + (list.length ? list.map(item).join("") : '<li class="notice">' + esc(t("an_none")) + "</li>") + "</ul></div></div>";
}
