/* ===== مِراس: إدارة الفريق =====
   المالك يعطي أي مستخدم صلاحيات محددة (المدونة، المستخدمين، مكتبي). الصلاحية اللي ما تنعطى ما تظهر للعضو أصلاً.
   كل تحقق حقيقي يصير في قاعدة البيانات (has_perm و set_perms)، والواجهة بس تعكسه. */
Object.assign(UI, {
  tm_h: ["إدارة الموقع", "Site admin"], tm_mine: ["صلاحياتي", "My permissions"],
  tm_p: ["أعطِ أي مستخدم صلاحيات محددة. اللي ما تختاره ما يظهر له أصلاً، ومكتبي ما ينفتح إلا إذا اخترته.", "Give any user specific permissions. Anything you don't tick stays hidden from them."],
  tm_p_staff: ["هذي الصلاحيات اللي أعطاك إياها مالك المنصة.", "These are the permissions the owner gave you."],
  tm_login: ["سجّل دخولك أولاً.", "Sign in first."], tm_none: ["ما عندك صلاحيات إدارة.", "You have no admin permissions."],
  tm_q: ["ابحث بالاسم أو الإيميل", "Search by name or email"], tm_save: ["حفظ الصلاحيات", "Save permissions"], tm_saved: ["انحفظت ✓", "Saved ✓"],
  tm_ban: ["إيقاف عن النشر", "Block from posting"], tm_unban: ["إلغاء الإيقاف", "Unblock"], tm_banned: ["موقوف", "Blocked"], tm_owner: ["المالك", "Owner"],
  tm_g_blog: ["المدونة", "Blog"], tm_g_users: ["المستخدمين", "Users"], tm_g_desk: ["مكتبي", "My desk"],
  tm_blog_approve: ["مراجعة واعتماد المنشورات المحجوبة", "Review and approve held posts"], tm_blog_hide: ["حجب أي منشور", "Hide any post"],
  tm_blog_edit: ["تعديل نص المنشورات", "Edit posts"], tm_blog_delete: ["حذف المنشورات", "Delete posts"],
  tm_users_view: ["عرض قائمة المستخدمين", "See the user list"], tm_users_ban: ["إيقاف المستخدمين عن النشر", "Block users from posting"],
  tm_desk: ["مكتبي وأدوات المالك", "My desk and owner tools"],
  tm_desk_warn: ["تنبيه: مكتبي يفتح له مفاتيحك (GitHub والذكاء) وكل أدوات المالك: المحفظة والأخبار وأفضل حركة. ما تعطيها إلا لشخص تثق فيه تماماً.", "Warning: this opens your keys and every owner tool. Only give it to someone you fully trust."],
  tm_go_blog: ["افتح المدونة", "Open the blog"], tm_perms: ["الصلاحيات", "Permissions"], tm_all: ["كل الصلاحيات", "Everything"], tm_err: ["ما عندك صلاحية لهذا.", "You don't have permission for this."], tm_count: ["{n} مستخدم", "{n} users"]
});
const TM_PERMS = [["tm_g_blog", ["blog_approve", "blog_hide", "blog_edit", "blog_delete"]], ["tm_g_users", ["users_view", "users_ban"]], ["tm_g_desk", ["desk"]]];
const TM = { users: null, q: "", loading: false, err: "", open: null, saved: null };

async function tmLoad() {
  if (!(typeof MA !== "undefined" && MA.sb && MA.can("users_view"))) return;
  TM.loading = true;
  const { data, error } = await MA.sb.rpc("list_users");
  TM.loading = false; TM.users = data || []; TM.err = error ? t("tm_err") : "";
  tmPaint();
}
function tmChips(perms) {
  const on = TM_PERMS.flatMap(([, l]) => l).filter((k) => perms && perms[k]);
  return on.length ? on.map((k) => '<span class="tag' + (k === "desk" ? " amber" : "") + '">' + esc(t("tm_" + k)) + "</span>").join("") : '<span class="small muted">—</span>';
}
function tmRow(u) {
  const admin = MA.prof && MA.prof.is_admin, open = TM.open === u.id;
  const head = '<div class="tm-uh"><span class="bl-av">' + esc((u.name || u.email || "؟").trim()[0]) + '</span><div class="tm-un"><b>' + esc(u.name || "") + (u.is_admin ? ' <span class="tag up">' + esc(t("tm_owner")) + "</span>" : "") + (u.banned ? ' <span class="tag down">' + esc(t("tm_banned")) + "</span>" : "") + '</b><span class="small muted" dir="ltr">' + esc(u.email || "") + "</span></div>" +
    (admin && !u.is_admin ? '<button type="button" class="btn sm' + (open ? " primary" : "") + '" data-act="tm-edit" data-id="' + u.id + '" aria-expanded="' + open + '">' + esc(t("tm_perms")) + "</button>" : "") +
    (!u.is_admin && MA.can("users_ban") ? '<button type="button" class="btn sm ghost" data-act="tm-ban" data-id="' + u.id + '" data-b="' + (u.banned ? 0 : 1) + '">' + esc(t(u.banned ? "tm_unban" : "tm_ban")) + "</button>" : "") + "</div>";
  const chips = '<div class="tm-chips">' + (u.is_admin ? '<span class="tag up">' + esc(t("tm_all")) + "</span>" : tmChips(u.perms)) + "</div>";
  const form = open ? '<form class="tm-form" data-form="tm-perms" data-id="' + u.id + '">' + TM_PERMS.map(([g, list]) => '<fieldset><legend>' + esc(t(g)) + "</legend>" + list.map((k) => '<label class="tm-chk"><input type="checkbox" name="' + k + '"' + (u.perms && u.perms[k] ? " checked" : "") + "> " + esc(t("tm_" + k)) + "</label>").join("") + (g === "tm_g_desk" ? '<p class="small tm-warn">' + esc(t("tm_desk_warn")) + "</p>" : "") + "</fieldset>").join("") +
    '<div class="row" style="gap:8px"><button class="btn primary">' + esc(t("tm_save")) + "</button>" + (TM.saved === u.id ? '<span class="small bl-ok">' + esc(t("tm_saved")) + "</span>" : "") + "</div></form>" : "";
  return '<div class="panel tm-u">' + head + (open ? "" : chips) + form + "</div>";
}
function pageTeam() {
  if (typeof MA === "undefined" || !MA.user) return '<div class="wrap"><div class="page-head"><h1>' + esc(t("tm_h")) + '</h1></div><div class="notice" style="margin-block:18px">' + esc(t("tm_login")) + ' <button class="btn sm primary" data-act="ma-toggle">' + esc(t("ma_in")) + "</button></div></div>";
  const admin = MA.prof && MA.prof.is_admin, perms = (MA.prof && MA.prof.perms) || {};
  if (!admin && !MA.staff()) return '<div class="wrap"><div class="page-head"><h1>' + esc(t("tm_mine")) + '</h1></div><div class="notice" style="margin-block:18px">' + esc(t("tm_none")) + "</div></div>";
  if (MA.can("users_view") && !TM.users && !TM.loading) setTimeout(tmLoad, 0);
  const mine = admin ? "" : '<div class="panel stack"><b>' + esc(t("tm_mine")) + '</b><div class="tm-chips">' + tmChips(perms) + "</div>" + (["blog_approve", "blog_hide", "blog_edit", "blog_delete"].some((k) => perms[k]) ? '<a class="btn sm" href="#blog">' + esc(t("tm_go_blog")) + "</a>" : "") + "</div>";
  return '<div class="wrap"><div class="page-head"><h1>' + esc(t(admin ? "tm_h" : "tm_mine")) + "</h1><p>" + esc(t(admin ? "tm_p" : "tm_p_staff")) + '</p></div><div class="stack" style="padding-block:18px 40px" id="tm-out">' + tmBody(mine) + "</div></div>";
}
function tmBody(mine) {
  if (!MA.can("users_view")) return mine || "";
  const q = TM.q.trim().toLowerCase(), list = (TM.users || []).filter((u) => !q || (u.name || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q));
  return (mine || "") + '<div class="row" style="gap:10px;align-items:center"><input type="search" id="tm-q" data-tm="q" placeholder="' + esc(t("tm_q")) + '" value="' + esc(TM.q) + '" style="flex:1;min-width:200px"><span class="small muted">' + esc(t("tm_count").replace("{n}", (TM.users || []).length)) + "</span></div>" +
    (TM.err ? '<div class="notice">' + esc(TM.err) + "</div>" : "") + (TM.users ? list.map(tmRow).join("") : '<p class="muted">…</p>');
}
function tmPaint() { if (typeof route === "function" && route() === "team") { const o = document.getElementById("tm-out"); if (o) { const tmp = document.createElement("div"); tmp.innerHTML = pageTeam(); const n = tmp.querySelector("#tm-out"); if (n) { const f = document.activeElement && document.activeElement.id === "tm-q"; o.innerHTML = n.innerHTML; if (f) { const i = document.getElementById("tm-q"); i.focus(); i.setSelectionRange(i.value.length, i.value.length); } } } else if (typeof render === "function") render(); } }
if (typeof MA !== "undefined") MA.on(() => { TM.users = null; tmPaint(); });
document.addEventListener("input", (e) => { if (e.target.dataset && e.target.dataset.tm === "q") { TM.q = e.target.value; tmPaint(); } });
document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="tm-"]'); if (!el) return;
  e.preventDefault();
  if (el.dataset.act === "tm-edit") { TM.open = TM.open === el.dataset.id ? null : el.dataset.id; TM.saved = null; tmPaint(); return; }
  if (el.dataset.act === "tm-ban") { el.disabled = true; const { error } = await MA.sb.rpc("set_ban", { uid: el.dataset.id, flag: el.dataset.b === "1" }); if (error) toast(t("tm_err")); await tmLoad(); }
});
document.addEventListener("submit", async (e) => {
  const f = e.target; if (!f.dataset || f.dataset.form !== "tm-perms") return;
  e.preventDefault(); e.stopPropagation();
  const perms = {}; f.querySelectorAll("input[type=checkbox]").forEach((c) => { if (c.checked) perms[c.name] = true; });
  const { error } = await MA.sb.rpc("set_perms", { uid: f.dataset.id, new_perms: perms });
  if (error) { toast(t("tm_err")); return; }
  TM.saved = f.dataset.id; await tmLoad();
}, true);
