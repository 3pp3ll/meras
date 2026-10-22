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
function ntPanel() {
  const items = ntItems(), r = ntRead();
  const row = (i) => {
    const unread = !r.has(i.id);
    if (i.kind === "notice") {
      const n = i.n;
      return '<li class="nt-i' + (unread ? " unread" : "") + '"><div class="nt-top"><span class="tag ' + (n.kind === "promo" ? "amber" : n.kind === "update" ? "up" : "") + '">' + esc(t("nt_k_" + (n.kind || "info"))) + '</span><b>' + esc(n.t) + "</b></div>" + (n.b ? '<p class="small" style="margin:4px 0 0">' + esc(n.b) + "</p>" : "") +
        '<div class="row" style="gap:6px;margin-top:6px">' + (n.code ? '<span class="nt-code num">' + esc(n.code) + '</span><button class="btn sm" data-act="nt-copy" data-c="' + esc(n.code) + '">' + esc(t("nt_copy")) + "</button>" : "") + (n.url ? '<a class="btn sm ghost" href="' + esc(n.url) + '"' + (/^https?:/.test(n.url) ? ' target="_blank" rel="noopener"' : "") + ">" + esc(t("nt_open")) + "</a>" : "") + (n.to ? '<span class="small muted">' + esc(t("nt_until").replace("{d}", n.to)) + "</span>" : "") + "</div></li>";
    }
    if (i.kind === "div") { const d = i.r; return '<li class="nt-i' + (unread ? " unread" : "") + '"><a href="#desk" data-act="nt-div" class="nt-link"><div class="nt-top"><span class="tag amber">' + esc(t("nt_div")) + '</span><b>' + esc(t("nt_div_t").replace("{s}", d.s).replace("{n}", d.n || "").replace("{d}", d.next)) + '</b></div><span class="small muted num">' + esc(t("dg_c_yld") + " " + fmt(d.yld, 2) + "%") + "</span></a></li>"; }
    const x = i.x;
    return '<li class="nt-i' + (unread && x.sharia === "ok" ? " unread" : "") + '"><a href="#desk" data-act="nt-mover" class="nt-link"><div class="nt-top"><span class="tag up">' + esc(t("nt_movers")) + '</span><b>' + esc(t("nt_mover").replace("{s}", x.s).replace("{n}", (typeof dkName === "function" && dkName(x.s)) || x.n || "").replace("{x}", x.score)) + '</b></div><span class="small muted num">' + esc(x.in) + "</span>" + (x.sharia && x.sharia !== "ok" ? ' <span class="small muted">· ' + esc(x.sharia === "no" ? t("tp_noshar") : t("nt_unknown_sh")) + "</span>" : "") + "</a></li>";
  };
  return '<div class="nt-head"><b>' + esc(t("nt_h")) + "</b>" + (items.length ? '<button class="btn sm ghost" data-act="nt-readall">' + esc(t("nt_all_read")) + "</button>" : "") + "</div>" + (items.length ? '<ul class="nt-list">' + items.map(row).join("") + "</ul>" : '<p class="muted small" style="margin:8px 0">' + esc(t("nt_empty")) + "</p>");
}
function ntToggle(open) {
  let p = document.getElementById("ntpanel");
  ntOpen = open == null ? !ntOpen : open;
  if (!ntOpen) { if (p) p.remove(); return; }
  if (!p) { p = document.createElement("div"); p.id = "ntpanel"; p.setAttribute("role", "dialog"); p.setAttribute("aria-label", t("nt_h")); document.body.appendChild(p); }
  p.innerHTML = ntPanel();
  const b = document.getElementById("topbell"); if (b) { const r = b.getBoundingClientRect(); p.style.top = Math.round(r.bottom + 8) + "px"; }
  setTimeout(() => { ntMark(ntItems().map((i) => i.id)); if (typeof topBell === "function") topBell(); }, 1200);
}
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="nt-"]');
  if (!el) { if (ntOpen && !e.target.closest("#ntpanel") && !e.target.closest("#topbell")) ntToggle(false); return; }
  const a = el.dataset.act;
  if (a === "nt-bell") { ntToggle(); return; }
  if (a === "nt-copy") { navigator.clipboard && navigator.clipboard.writeText(el.dataset.c).then(() => toast(t("nt_copied"))).catch(() => {}); }
  else if (a === "nt-readall") { ntMark(ntItems().map((i) => i.id)); ntToggle(true); topBell(); }
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
