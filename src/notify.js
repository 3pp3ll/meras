/* ===== مِراس: قائمة التنبيهات =====
   الجرس فوق يفتح قائمة فيها:
   - إعلانات المنصة (notices.json في الموقع): المالك يضيفها من لوحة المالك، مثل كود خصم أو تحديث، وتظهر لكل الزوار.
   - تنبيهات أفضل حركة (للمالك فقط): كل سهم دخل القائمة، وتبقى محفوظة.
   المقروء ينحفظ على الجهاز. */
Object.assign(UI, {
  nt_h: ["التنبيهات", "Notifications"], nt_empty: ["ما فيه تنبيهات للحين.", "No notifications yet."], nt_all_read: ["علّم الكل مقروء", "Mark all read"],
  nt_notices: ["من مِراس", "From Meras"], nt_movers: ["أفضل حركة", "Best movers"], nt_mover: ["{s} {n} دخل أفضل حركة ({x}/6)", "{s} {n} entered best movers ({x}/6)"],
  nt_copy: ["انسخ الكود", "Copy code"], nt_copied: ["تم نسخ الكود", "Code copied"], nt_open: ["افتح", "Open"], nt_until: ["إلى {d}", "until {d}"],
  nt_k_info: ["إعلان", "Notice"], nt_k_promo: ["عرض", "Offer"], nt_k_update: ["تحديث", "Update"], nt_unknown_sh: ["شرعيته لسا ما انحسبت", "Screening not computed yet"],
  ow_t_notices: ["الإشعارات", "Notices"], nt_admin_p: ["الإشعار يظهر لكل اللي يفتحون مِراس في قائمة الجرس، من تاريخ البداية لين النهاية. مثل كود خصم أو تحديث جديد.", "A notice appears to everyone who opens Meras, in the bell list, between its start and end dates."],
  nt_f_title: ["العنوان", "Title"], nt_f_body: ["النص", "Text"], nt_f_code: ["كود (اختياري)", "Code (optional)"], nt_f_url: ["رابط (اختياري)", "Link (optional)"], nt_f_kind: ["النوع", "Type"], nt_f_from: ["من", "From"], nt_f_to: ["إلى", "To"],
  nt_add: ["انشر الإشعار", "Publish notice"], nt_del: ["احذف", "Delete"], nt_saved: ["تم نشر الإشعار، ويظهر للزوار خلال دقيقة أو دقيقتين.", "Notice published. Visitors see it within a couple of minutes."], nt_need: ["اكتب العنوان", "Enter a title"],
  nt_list: ["الإشعارات المنشورة", "Published notices"], nt_none_pub: ["ما نشرت إشعارات للحين.", "No notices yet."], nt_active: ["ظاهر الحين", "Live"], nt_ended: ["انتهى", "Ended"], nt_soon: ["يبدأ {d}", "Starts {d}"]
});

let NOTICES = null, ntOpen = false;
const ntRead = () => { try { return new Set(JSON.parse(localStorage.getItem("meras.ntread") || "[]")); } catch (e) { return new Set(); } };
const ntMark = (ids) => { try { const s = ntRead(); ids.forEach((i) => s.add(i)); localStorage.setItem("meras.ntread", JSON.stringify([...s].slice(-500))); } catch (e) {} };
async function loadNotices() {
  try { const r = await fetch("./notices.json?t=" + Date.now(), { cache: "no-store" }); NOTICES = r.ok ? await r.json() : []; } catch (e) { NOTICES = NOTICES || []; }
  if (!Array.isArray(NOTICES)) NOTICES = [];
  if (typeof topBell === "function") topBell();
}
const ntLive = (n) => { const d = today(); return (!n.from || n.from <= d) && (!n.to || n.to >= d); };
function ntItems() {
  const items = [];
  (NOTICES || []).filter(ntLive).forEach((n) => items.push({ id: "n:" + n.id, kind: "notice", n, date: n.from || "" }));
  const owner = typeof HOSTED !== "undefined" && HOSTED && CFG.token;
  if (owner && typeof TOP !== "undefined" && TOP && Array.isArray(TOP.log)) TOP.log.filter((x) => x.in).slice(-40).forEach((x) => items.push({ id: "m:" + x.s + "|" + x.in, kind: "mover", x, date: x.in }));
  if (typeof dgBellItems === "function") dgBellItems().forEach((d) => items.push(d));
  return items.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
function ntUnread() { const r = ntRead(); return ntItems().filter((i) => !r.has(i.id) && (i.kind === "notice" || i.kind === "div" || i.x.sharia === "ok")).length; }
/* ----- the list as a sheet: from the bottom on the phone (above the tab bar), from the top on a wide screen.
   Rests at half the screen, drags to full screen, drags away to close. ----- */
Object.assign(UI, {
  nt_f_all: ["الكل", "All"], nt_f_promo: ["عروض", "Offers"], nt_f_mover: ["أفضل حركة", "Best movers"], nt_f_div: ["توزيع", "Payouts"], nt_f_news: ["إعلانات", "News"],
  nt_new: ["{n} جديد", "{n} new"], nt_d_today: ["اليوم", "Today"], nt_d_yday: ["أمس", "Yesterday"], nt_d_week: ["هذا الأسبوع", "This week"], nt_d_old: ["أقدم", "Earlier"],
  nt_resize: ["كبّر أو صغّر القائمة", "Expand or shrink the list"], nt_close: ["سكّر", "Close"], nt_go_stock: ["افتح السهم", "Open stock"], nt_go_why: ["شوف السبب", "See why"],
  nt_div_p: ["العائد السنوي {y}% · لازم تملك السهم قبل تاريخ الاستحقاق.", "Yearly yield {y}% · own the share before the ex-date."]
});
let ntF = "all", ntState = "closed";
const NT_IC = {
  promo: '<path d="M3 10V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a2 2 0 0 0 0 4v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a2 2 0 0 0 0-4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  mover: '<path d="M4 17l6-6 4 4 6-7M15 8h5v5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  div: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></g>',
  news: '<path d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
};
const ntCat = (i) => (i.kind === "notice" ? (i.n.kind === "promo" ? "promo" : "news") : i.kind);
const ntIsUnread = (i, r) => !r.has(i.id) && (i.kind !== "mover" || i.x.sharia === "ok");
function ntDay(d) {
  if (!d) return t("nt_d_old");
  const n = Math.round((new Date(today() + "T00:00:00") - new Date(String(d).slice(0, 10) + "T00:00:00")) / 864e5);
  return n <= 0 ? t("nt_d_today") : n === 1 ? t("nt_d_yday") : n < 7 ? t("nt_d_week") : t("nt_d_old");
}
function ntRow(i, r) {
  const c = ntCat(i), un = ntIsUnread(i, r);
  let title, body = "", acts = "", when = i.date || "";
  if (i.kind === "notice") {
    const n = i.n; title = n.t; body = n.b || "";
    acts = (n.code ? '<span class="nt-code num" dir="ltr">' + esc(n.code) + '</span><button class="btn sm" data-act="nt-copy" data-c="' + esc(n.code) + '">' + esc(t("nt_copy")) + "</button>" : "") + (n.url ? '<a class="btn sm" href="' + esc(n.url) + '" data-act="nt-go"' + (/^https?:/.test(n.url) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(t("nt_open")) + "</a>" : "") + (n.to ? '<span class="small muted">' + esc(t("nt_until").replace("{d}", n.to)) + "</span>" : "");
  } else if (i.kind === "div") {
    const d = i.r; title = t("nt_div_t").replace("{s}", d.s).replace("{n}", d.n || "").replace("{d}", d.next); body = t("nt_div_p").replace("{y}", fmt(d.yld, 2)); when = "";
    acts = '<button class="btn sm" data-act="nt-div">' + esc(t("nt_go_stock")) + "</button>";
  } else {
    const x = i.x; title = t("nt_mover").replace("{s}", x.s).replace("{n}", (typeof dkName === "function" && dkName(x.s)) || x.n || "").replace("{x}", x.score);
    body = x.sharia === "ok" ? t("sh_ok") : x.sharia === "no" ? t("tp_noshar") : t("nt_unknown_sh");
    acts = '<button class="btn sm" data-act="nt-mover">' + esc(t("nt_go_why")) + "</button>";
  }
  return '<li class="nt-it' + (un ? " unread" : "") + '"><span class="nt-ic ' + c + '"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' + NT_IC[c] + '</svg></span><div class="nt-tx"><b>' + esc(title) + "</b>" + (body ? "<p>" + esc(body) + "</p>" : "") + '<div class="nt-acts">' + (when ? '<span class="small muted num">' + esc(when) + "</span>" : "") + acts + "</div></div></li>";
}
function ntPanel() {
  const all = ntItems(), r = ntRead(), un = all.filter((i) => ntIsUnread(i, r)).length;
  const cats = ["all"].concat(["promo", "mover", "div", "news"].filter((k) => all.some((i) => ntCat(i) === k)));
  if (!cats.includes(ntF)) ntF = "all";
  const list = all.filter((i) => ntF === "all" || ntCat(i) === ntF);
  let day = "", rows = "";
  list.forEach((i) => { const d = ntDay(i.date); if (d !== day) { day = d; rows += '<li class="nt-day">' + esc(d) + "</li>"; } rows += ntRow(i, r); });
  return '<div class="nt-shead" data-nt-drag><h2 id="nt-title">' + esc(t("nt_h")) + (un ? "<small>" + esc(t("nt_new").replace("{n}", un)) + "</small>" : "") + "</h2>" + (un ? '<button class="nt-ghost" data-act="nt-readall">' + esc(t("nt_all_read")) + "</button>" : "") + '<button class="nt-x" data-act="nt-close" aria-label="' + esc(t("nt_close")) + '">×</button></div>' +
    (cats.length > 2 ? '<div class="nt-filters" role="group">' + cats.map((k) => '<button class="dg-chip" data-act="nt-f" data-f="' + k + '" aria-pressed="' + (ntF === k) + '">' + esc(t("nt_f_" + k)) + "</button>").join("") + "</div>" : "") +
    '<ul class="nt-list2">' + (rows || '<li class="nt-empty">' + esc(t("nt_empty")) + "</li>") + "</ul>";
}
const ntTop = () => !(document.body.classList.contains("has-tabbar") && window.matchMedia("(max-width:640px)").matches);   // wide screens: the sheet drops from the top
function ntEls() {
  let sc = document.getElementById("ntscrim"), sh = document.getElementById("ntsheet");
  if (!sc) { sc = document.createElement("div"); sc.id = "ntscrim"; sc.setAttribute("data-act", "nt-close"); document.body.appendChild(sc); }
  if (!sh) {
    sh = document.createElement("section"); sh.id = "ntsheet"; sh.setAttribute("role", "dialog"); sh.setAttribute("aria-modal", "true"); sh.setAttribute("aria-labelledby", "nt-title");
    sh.innerHTML = '<button class="nt-grab" data-nt-drag data-nt-grab aria-label="' + esc(t("nt_resize")) + '"><i></i></button><div class="nt-body" id="nt-body"></div>';
    document.body.appendChild(sh); ntDrag(sh);
  }
  return { sc, sh };
}
function ntH() { return window.innerHeight - 8; }   // the sheet's full height
function ntPlace(px, anim) {   // px = how much of the sheet is hidden off-screen
  const { sc, sh } = ntEls(), top = ntTop();
  sh.style.transition = anim ? "" : "none"; sc.style.transition = anim ? "" : "none";
  if (top) { sh.style.transform = px >= ntH() ? "translateY(-110%)" : "none"; sh.style.height = Math.max(0, ntH() - px) + "px"; }   // from the top it grows, so the header stays in view
  else { sh.style.height = ""; sh.style.transform = "translateY(" + px + "px)"; }
  sc.style.opacity = Math.max(0, Math.min(1, (1 - px / ntH()) / 0.5));
}
function ntGo(s) {
  const { sc, sh } = ntEls(); ntState = s; ntOpen = s !== "closed";
  sh.classList.toggle("top", ntTop()); sh.classList.toggle("full", s === "full"); sc.classList.toggle("on", ntOpen);
  sh.dir = S.lang === "ar" ? "rtl" : "ltr";
  if (ntOpen) document.body.classList.add("nt-lock"); else document.body.classList.remove("nt-lock");
  requestAnimationFrame(() => ntPlace(s === "closed" ? ntH() + 20 : s === "half" ? ntH() * 0.5 : 0, true));
  if (!ntOpen) { ntMark(ntItems().map((i) => i.id)); if (typeof topBell === "function") topBell(); const b = document.querySelector('#tabbar [data-act="nt-bell"]') || document.getElementById("topbell"); if (b && b.offsetParent) b.focus({ preventScroll: true }); }
}
function ntToggle(open) {
  const want = open == null ? !ntOpen : open;
  if (!want) { if (ntOpen) ntGo("closed"); return; }
  const { sh } = ntEls();
  document.getElementById("nt-body").innerHTML = ntPanel();
  if (!ntOpen) { sh.classList.toggle("top", ntTop()); ntPlace(ntH() + 20, false); ntGo("half"); setTimeout(() => { const x = sh.querySelector(".nt-x"); if (x) x.focus({ preventScroll: true }); }, 320); }
}
function ntDrag(sh) {
  let y0 = null, start = 0, last = 0, lastT = 0, v = 0, moved = false, grab = false;
  const sign = () => (ntTop() ? -1 : 1);   // dragging toward the edge hides it
  sh.addEventListener("pointerdown", (e) => {
    const d = e.target.closest("[data-nt-drag]"); if (!d || ntState === "closed" || (e.target.closest("button,a") && !e.target.closest("[data-nt-grab]"))) return;
    grab = !!e.target.closest("[data-nt-grab]"); y0 = e.clientY; last = y0; lastT = performance.now(); v = 0; moved = false;
    start = ntState === "full" ? 0 : ntH() * 0.5; sh.setPointerCapture(e.pointerId);
  });
  sh.addEventListener("pointermove", (e) => {
    if (y0 == null) return; const dy = (e.clientY - y0) * sign(); if (Math.abs(dy) > 4) moved = true;
    const now = performance.now(); v = ((e.clientY - last) * sign()) / Math.max(1, now - lastT); last = e.clientY; lastT = now;
    ntPlace(Math.max(0, Math.min(ntH(), start + dy)), false);
  });
  const end = (e) => {
    if (y0 == null) return; const pos = Math.max(0, Math.min(ntH(), start + (e.clientY - y0) * sign())); y0 = null;
    if (!moved) { if (grab) ntGo(ntState === "full" ? "half" : "full"); else ntPlace(start, true); return; }
    const f = pos / ntH();
    if (v > 0.6) ntGo(ntState === "full" && f < 0.45 ? "half" : "closed"); else if (v < -0.6) ntGo("full"); else ntGo(f < 0.25 ? "full" : f < 0.72 ? "half" : "closed");
  };
  sh.addEventListener("pointerup", end); sh.addEventListener("pointercancel", end);
  /* on the phone, pulling the list down while it sits at its top moves the whole sheet */
  let ly = null;
  sh.addEventListener("touchstart", (e) => { const l = e.target.closest(".nt-list2"); ly = l && l.scrollTop <= 0 && !ntTop() ? e.touches[0].clientY : null; start = ntState === "full" ? 0 : ntH() * 0.5; }, { passive: true });
  sh.addEventListener("touchmove", (e) => { if (ly == null) return; const dy = e.touches[0].clientY - ly; if (dy > 0 || ntState === "half") ntPlace(Math.max(0, start + dy), false); }, { passive: true });
  sh.addEventListener("touchend", () => { if (ly == null) return; ly = null; const m = new DOMMatrix(getComputedStyle(sh).transform).m42, f = m / ntH(); if (Math.abs(m - start) < 6) return; ntGo(f < 0.3 ? "full" : f < 0.72 ? "half" : "closed"); });
}
window.addEventListener("resize", () => { if (ntOpen) ntGo(ntState); });
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="nt-"]');
  if (!el) return;
  const a = el.dataset.act;
  if (a === "nt-bell") { ntToggle(); return; }
  if (a === "nt-close") { ntToggle(false); return; }
  if (a === "nt-f") { ntF = el.dataset.f; document.getElementById("nt-body").innerHTML = ntPanel(); return; }
  if (a === "nt-go") { ntToggle(false); return; }
  if (a === "nt-copy") { navigator.clipboard && navigator.clipboard.writeText(el.dataset.c).then(() => toast(t("nt_copied"))).catch(() => {}); }
  else if (a === "nt-readall") { ntMark(ntItems().map((i) => i.id)); document.getElementById("nt-body").innerHTML = ntPanel(); topBell(); }
  else if (a === "nt-div") { e.preventDefault(); ntToggle(false); if (typeof dkTab !== "undefined") dkTab = "dg"; if (route() === "desk") render(); else location.hash = "desk"; }
  else if (a === "nt-mover") { e.preventDefault(); ntToggle(false); if (typeof dkTab !== "undefined") dkTab = "top"; if (route() === "desk") render(); else location.hash = "desk"; }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && ntOpen) ntToggle(false); });
window.addEventListener("hashchange", () => { if (ntOpen) ntToggle(false); });
loadNotices();

/* ----- owner: publish notices to the site (notices.json in the meras repository) ----- */
let ntDel = null;
function ntAdmin() {
  const f = (id, k, type, extra) => '<div class="field"><label for="nf-' + id + '">' + esc(t(k)) + '</label><input id="nf-' + id + '" type="' + (type || "text") + '"' + (extra || "") + "></div>";
  const list = (NOTICES || []).slice().sort((a, b) => ((b.from || "") > (a.from || "") ? 1 : -1));
  const st = (n) => { const d = today(); return n.to && n.to < d ? '<span class="tag">' + esc(t("nt_ended")) + "</span>" : n.from && n.from > d ? '<span class="tag amber">' + esc(t("nt_soon").replace("{d}", n.from)) + "</span>" : '<span class="tag up">' + esc(t("nt_active")) + "</span>"; };
  return owPanel(t("ow_t_notices"), '<p class="muted" style="margin:0">' + esc(t("nt_admin_p")) + '</p><form class="stack" data-form="nt-add" novalidate><div class="form-grid">' + f("t", "nt_f_title", "text", ' maxlength="80"') +
    '<div class="field"><label for="nf-kind">' + esc(t("nt_f_kind")) + '</label><select id="nf-kind"><option value="promo">' + esc(t("nt_k_promo")) + '</option><option value="info">' + esc(t("nt_k_info")) + '</option><option value="update">' + esc(t("nt_k_update")) + "</option></select></div>" +
    f("code", "nt_f_code", "text", ' maxlength="30" dir="ltr" autocapitalize="characters"') + f("url", "nt_f_url", "text", ' dir="ltr" placeholder="#plans"') + f("from", "nt_f_from", "date", ' value="' + today() + '"') + f("to", "nt_f_to", "date") + '</div><div class="field"><label for="nf-b">' + esc(t("nt_f_body")) + '</label><textarea id="nf-b" rows="2" maxlength="280"></textarea></div><div><button class="btn primary" type="submit">' + esc(t("nt_add")) + "</button></div></form>") +
    owPanel(t("nt_list"), list.length ? '<ul class="nt-list">' + list.map((n) => '<li class="nt-i"><div class="row" style="justify-content:space-between"><div class="nt-top"><span class="tag">' + esc(t("nt_k_" + (n.kind || "info"))) + "</span><b>" + esc(n.t) + "</b> " + st(n) + '</div><button class="btn sm ' + (ntDel === n.id ? "danger" : "ghost") + '" data-act="nt-del" data-id="' + esc(n.id) + '">' + esc(t(ntDel === n.id ? "dk_sure" : "nt_del")) + "</button></div>" + (n.b ? '<p class="small" style="margin:4px 0 0">' + esc(n.b) + "</p>" : "") + '<span class="small muted num">' + esc((n.from || "") + (n.to ? " → " + n.to : "")) + (n.code ? " · " + esc(n.code) : "") + "</span></li>").join("") + "</ul>" : '<p class="muted" style="margin:0">' + esc(t("nt_none_pub")) + "</p>");
}
async function ntPublish(next) {
  const content = b64e(JSON.stringify(next, null, 1) + "\n");
  try {
    const cur = await ghRepo("meras", "notices.json");
    await ghRepo("meras", "notices.json", "PUT", { message: "إشعارات مِراس " + today(), content, sha: cur ? cur.sha : undefined });
    NOTICES = next; toast(t("nt_saved")); return true;
  } catch (e) { toast(e.code === "403" || e.code === "404" ? t("sh_admin_nopub") : errText(e)); return false; }
}
document.addEventListener("submit", async (e) => {
  const f = e.target.closest && e.target.closest('[data-form="nt-add"]'); if (!f) return;
  e.preventDefault();
  const v = (id) => (document.getElementById("nf-" + id) || {}).value.trim();
  if (!v("t")) { toast(t("nt_need")); return; }
  const n = { id: Date.now().toString(36), t: v("t"), b: v("b"), kind: v("kind"), code: v("code").toUpperCase() || undefined, url: v("url") || undefined, from: v("from") || today(), to: v("to") || undefined };
  if (await ntPublish((NOTICES || []).concat([n]))) render();
});
document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act="nt-del"]'); if (!el) return;
  if (ntDel !== el.dataset.id) { ntDel = el.dataset.id; render(); return; }
  ntDel = null; if (await ntPublish((NOTICES || []).filter((n) => n.id !== el.dataset.id))) render();
});
