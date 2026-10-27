/* ===== مِراس: الحساب (Supabase) =====
   أيقونة الحساب فوق: دخول، إنشاء حساب، نسيت كلمة المرور.
   حساب الأدمن (is_admin) بعد التحقق بخطوتين يجيب توكن GitHub ومفتاح الذكاء من جدول owner_secrets ويفتح كل أدوات المالك.
   تسجيل الخروج يمسحهم من الجهاز. */
Object.assign(UI, {
  ma_acc: ["الحساب", "Account"], ma_in: ["تسجيل الدخول", "Sign in"], ma_in_s: ["ادخل لحسابك عشان تحفظ تقدّمك وتكتب في المدونة.", "Sign in to keep your progress and write on the blog."],
  ma_email: ["البريد الإلكتروني", "Email"], ma_pass: ["كلمة المرور", "Password"], ma_show: ["إظهار كلمة المرور", "Show password"], ma_hide: ["إخفاء كلمة المرور", "Hide password"],
  ma_rem: ["تذكرني", "Remember me"], ma_forgot: ["نسيت كلمة المرور؟", "Forgot password?"], ma_go: ["دخول", "Sign in"], ma_no_acc: ["ما عندك حساب؟", "No account?"],
  ma_new: ["إنشاء حساب جديد", "Create an account"], ma_name: ["الاسم", "Name"], ma_pass8: ["كلمة المرور (٨ أحرف على الأقل)", "Password (8+ characters)"], ma_have: ["عندك حساب؟", "Have an account?"],
  ma_back: ["رجوع لتسجيل الدخول", "Back to sign in"], ma_fg_h: ["استعادة كلمة المرور", "Reset password"], ma_fg_s: ["اكتب إيميلك ونرسل لك رابط تعيين كلمة مرور جديدة.", "We'll email you a reset link."],
  ma_fg_go: ["أرسل الرابط", "Send link"], ma_fg_ok: ["إذا الإيميل مسجّل بيوصلك الرابط خلال دقائق. افتحه من نفس الجهاز.", "If the email exists, a link is on its way."],
  ma_rs_h: ["كلمة مرور جديدة", "New password"], ma_rs_go: ["حفظ كلمة المرور", "Save password"], ma_rs_ok: ["تغيّرت كلمة المرور ✓", "Password changed ✓"],
  ma_up_ok: ["أرسلنا لك رابط تأكيد على إيميلك. افتحه وبعدها سجّل دخولك.", "Check your email to confirm, then sign in."],
  ma_e_cred: ["الإيميل أو كلمة المرور غير صحيحة.", "Wrong email or password."], ma_e_email: ["اكتب إيميل صحيح.", "Enter a valid email."], ma_e_pw: ["كلمة المرور لازم تكون ٨ أحرف أو أكثر.", "Password must be 8+ characters."],
  ma_e_conf: ["أكّد إيميلك من الرابط اللي وصلك، بعدها سجّل دخولك.", "Confirm your email first."], ma_e_dup: ["هذا الإيميل مسجّل. سجّل دخولك أو استعد كلمة المرور.", "This email is registered. Sign in instead."],
  ma_e_net: ["تعذّر الاتصال. تأكد من الإنترنت.", "Connection failed."], ma_e_rate: ["محاولات كثيرة. انتظر شوي وجرّب مرة ثانية.", "Too many attempts. Wait a bit."],
  ma_out: ["تسجيل الخروج", "Sign out"], ma_staff: ["فريق الإدارة", "Team"], ma_e_prof: ["تعذّر قراءة بيانات حسابك من السيرفر", "Couldn't read your account details"], ma_owner: ["المالك", "Owner"], ma_member: ["عضو", "Member"], ma_lang: ["English", "عربي"],
  ma_mfa_h: ["التحقق بخطوتين", "Two-step verification"], ma_mfa_new: ["لحماية لوحة المالك، اربط حسابك بتطبيق مصادقة (Google Authenticator أو Microsoft Authenticator): امسح الرمز، ثم اكتب الرقم اللي يطلع لك.", "To protect the owner area, scan this code with an authenticator app, then enter the 6-digit number."],
  ma_mfa_key: ["أو اكتب هذا المفتاح في التطبيق:", "Or type this key into the app:"], ma_mfa_code: ["الرمز من التطبيق (٦ أرقام)", "6-digit code"], ma_mfa_go: ["تحقق وافتح", "Verify and unlock"], ma_mfa_rescan: ["طلع رمز جديد. احذف حساب مِراس القديم من تطبيق المصادقة وامسح هذا.", "A new code was generated. Remove the old Meras entry from your app and scan this one."],
  ma_mfa_ask: ["اكتب الرمز من تطبيق المصادقة عشان تفتح أدوات المالك.", "Enter the code from your authenticator app to unlock the owner tools."], ma_mfa_bad: ["الرمز غير صحيح أو انتهى وقته. جرّب الرمز الجديد.", "Wrong or expired code."],
  ma_unlock: ["افتح أدوات المالك", "Unlock owner tools"], ma_locked: ["أدوات المالك مقفلة", "Owner tools locked"],
  ma_sec_saved: ["انحفظ توكن هذا الجهاز ومفتاح الذكاء في حسابك ✓ من الحين تدخل من أي جهاز.", "This device's token and AI key are saved to your account ✓"],
  ma_sec_none: ["ما فيه توكن محفوظ في حسابك. حطه من «المزامنة والأسعار» وينحفظ تلقائياً.", "No token saved yet. Add it in Sync settings and it saves automatically."],
  ma_e_sec: ["تعذّر جلب مفاتيح المالك.", "Couldn't load owner keys."], ma_e_sec_tbl: ["جدول المفاتيح غير موجود: شغّل ملف schema.sql كامل في Supabase", "Keys table missing: run schema.sql in Supabase"], ma_retry: ["أعد المحاولة", "Try again"], ma_soon: ["تسجيل الدخول قيد التجهيز.", "Sign-in is being set up."]
});

const MA_SB = { url: "https://tefqkwyyyxyeviagrryr.supabase.co", key: "sb_publishable_PVNaPHPTkQ2X87uLOuufuQ_rEc6D6MD" };
const MA_LOCK = "meras.ownerlock", MA_STORE = "meras.auth";
const MA = { sb: null, user: null, prof: null, aal: null, factor: null, enroll: null, open: false, view: "login", msg: "", ok: false, unlocked: false, subs: [], ready: false };
MA.on = (fn) => MA.subs.push(fn);
setTimeout(() => MA.on(() => { const h = document.getElementById("top"); if (h && typeof headerHtml === "function" && typeof route === "function" && !(typeof lnShow === "function" && lnShow())) { h.innerHTML = headerHtml(route()); if (typeof maPaint === "function") maPaint(); } }), 0);
MA.can = (p) => !!(MA.user && MA.prof && !MA.prof.banned && (MA.prof.is_admin || (MA.prof.perms && MA.prof.perms[p])));
MA.desk = () => MA.can("desk");
MA.staff = () => !!(MA.prof && !MA.prof.is_admin && MA.prof.perms && Object.keys(MA.prof.perms).some((k) => MA.prof.perms[k]));
const maEmit = () => MA.subs.forEach((f) => { try { f(); } catch (e) {} });
const maRem = () => { try { return localStorage.getItem("meras.rem") !== "0"; } catch (e) { return true; } };
const maHasSession = () => { try { return !!(localStorage.getItem(MA_STORE) || sessionStorage.getItem(MA_STORE)); } catch (e) { return false; } };
const maLocked = () => { try { return localStorage.getItem(MA_LOCK) === "1"; } catch (e) { return false; } };

/* قفل الجهاز: بعد ما تنحفظ مفاتيح المالك في الحساب، الجهاز ما يحتفظ فيها بدون جلسة دخول */
function maWipe() {
  if (typeof CFG !== "undefined" && CFG.token) { CFG.token = ""; try { localStorage.setItem(CFG_KEY, JSON.stringify(CFG)); } catch (e) {} }
  if (typeof AI !== "undefined" && AI.key) { AI.key = ""; try { localStorage.setItem(AI_KEY, JSON.stringify(AI)); } catch (e) {} }
}
if (maLocked() && !maHasSession()) maWipe();

function maLoadLib() {
  if (window.supabase) return Promise.resolve();
  return new Promise((ok, no) => { const s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
}
function maClient() {
  let storage; try { storage = maRem() ? localStorage : sessionStorage; } catch (e) {}
  MA.sb = window.supabase.createClient(MA_SB.url, MA_SB.key, { auth: { storage, storageKey: MA_STORE, persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  MA.sb.auth.onAuthStateChange((ev, ses) => {
    if (ev === "PASSWORD_RECOVERY") { MA.view = "reset"; MA.open = true; }
    setTimeout(() => maSetUser(ses ? ses.user : null), 0);
  });
}
async function maInit() {
  if (!HOSTED || MA.sb) return;
  try { await maLoadLib(); maClient(); const { data } = await MA.sb.auth.getSession(); await maSetUser(data.session ? data.session.user : null); }
  catch (e) { MA.msg = t("ma_e_net"); }
  MA.ready = true; maPaint(); maEmit();
}
async function maFetchProf(u) {
  const { data, error } = await MA.sb.from("profiles").select("*").eq("id", u.id).maybeSingle();
  MA.profErr = error ? (error.message || error.code || "error") : data ? "" : "no profile row";
  return data;
}
/* كل ما تنفتح القائمة نحدّث بيانات الحساب (لو تغيّرت الصلاحيات من قاعدة البيانات تبان على طول) */
async function maRefreshProf() {
  if (!MA.sb || !MA.user) return;
  const was = JSON.stringify(MA.prof || {}), d = await maFetchProf(MA.user);
  if (d) MA.prof = d;
  if (JSON.stringify(MA.prof || {}) !== was) { if (MA.desk() && !MA.unlocked) await maAdminGate(); maPaint(); maEmit(); }
  else if (MA.profErr) maPaint();
}
async function maSetUser(u) {
  const changed = (u && u.id) !== (MA.user && MA.user.id);
  MA.user = u;
  if (!u) { MA.prof = null; MA.unlocked = false; MA.aal = null; if (maLocked() && typeof CFG !== "undefined" && CFG.token) { maWipe(); if (typeof render === "function") render(); } maPaint(); maEmit(); return; }
  if (changed || !MA.prof) {
    const data = await maFetchProf(u);
    MA.prof = data || { name: (u.user_metadata && u.user_metadata.name) || u.email.split("@")[0], is_admin: false };
  }
  if (MA.desk()) await maAdminGate(); else if (maLocked() && typeof CFG !== "undefined" && CFG.token) { maWipe(); if (typeof render === "function") render(); }
  maPaint(); maEmit();
}
/* الأدمن: التحقق بخطوتين ثم جلب المفاتيح */
async function maAdminGate() {
  try {
    const lvl = await MA.sb.auth.mfa.getAuthenticatorAssuranceLevel(); MA.aal = lvl.data && lvl.data.currentLevel;
    const f = await MA.sb.auth.mfa.listFactors(); MA.factor = ((f.data && f.data.totp) || []).find((x) => x.status === "verified") || null;
  } catch (e) {}
  if (MA.aal === "aal2") await maLoadSecrets();
  else if (MA.open) MA.view = MA.factor ? "mfa" : "enroll";
}
async function maLoadSecrets() {
  const { data, error } = await MA.sb.from("owner_secrets").select("*").eq("id", 1).maybeSingle();
  if (error) { MA.msg = t("ma_e_sec") + " (" + (/does not exist|relation/i.test(error.message || "") ? t("ma_e_sec_tbl") : error.message || error.code) + ")"; MA.ok = false; MA.secErr = true; return; }
  MA.secErr = false;
  const local = { token: typeof CFG !== "undefined" ? CFG.token : "", ai: typeof AI !== "undefined" ? AI.key : "" };
  if (data && data.gh_token) {
    CFG = Object.assign({}, CFG, { owner: data.gh_owner || CFG.owner, repo: data.gh_repo || CFG.repo, token: data.gh_token });
    try { localStorage.setItem(CFG_KEY, JSON.stringify(CFG)); } catch (e) {}
    if (data.ai_key && typeof AI !== "undefined") { AI.key = data.ai_key; if (data.ai_model) AI.model = data.ai_model; try { localStorage.setItem(AI_KEY, JSON.stringify(AI)); } catch (e) {} }
  } else if (local.token && MA.prof.is_admin) { await maPushSecrets(); MA.msg = t("ma_sec_saved"); MA.ok = true; }
  else { MA.msg = t("ma_sec_none"); MA.ok = false; }
  MA.unlocked = true;
  try { localStorage.setItem(MA_LOCK, "1"); } catch (e) {}
  if (!local.token && typeof CFG !== "undefined" && CFG.token && typeof syncNow === "function") { try { await syncNow(false); } catch (e) {} if (typeof loadPrices === "function") loadPrices(true); }
  if (typeof render === "function") render();
}
async function maPushSecrets() {
  if (!(MA.unlocked || MA.aal === "aal2") || !MA.prof || !MA.prof.is_admin) return;
  const row = { id: 1, gh_owner: CFG.owner, gh_repo: CFG.repo, gh_token: CFG.token || null, ai_key: (typeof AI !== "undefined" && AI.key) || null, ai_model: (typeof AI !== "undefined" && AI.model) || null, updated_at: new Date().toISOString() };
  await MA.sb.from("owner_secrets").upsert(row);
  MA.last = row.gh_token + "|" + row.ai_key;
}
/* لو المالك غيّر التوكن أو مفتاح الذكاء من الإعدادات، ينحفظ في حسابه */
setInterval(() => { if (!MA.unlocked || typeof CFG === "undefined") return; const sig = (CFG.token || null) + "|" + ((typeof AI !== "undefined" && AI.key) || null); if (MA.last == null) { MA.last = sig; return; } if (sig !== MA.last && CFG.token) maPushSecrets(); }, 4000);

/* ---------- الواجهة ---------- */
const MA_IC = {
  user: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></g></svg>',
  eye: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 3l18 18M10.6 5.1A10.7 10.7 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.9 8.4 2 12 2 12s3.6 7 10 7c1.6 0 3-.4 4.3-1M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>'
};
function profileMenu() {
  const u = MA.user, init = u ? esc(((MA.prof && MA.prof.name) || u.email || "؟").trim()[0]) : "";
  return '<button type="button" class="btn sm ma-btn" id="ma-btn" data-act="ma-toggle" aria-haspopup="true" aria-expanded="' + MA.open + '" aria-label="' + esc(t("ma_acc")) + '">' + (u ? '<span class="ma-av">' + init + "</span>" + (MA.unlocked ? '<span class="ma-dot"></span>' : "") : MA_IC.user) + "</button>";
}
const maPw = (id, label, ac) => '<div class="ma-f"><label for="' + id + '">' + esc(t(label)) + '</label><div class="ma-pw"><input id="' + id + '" type="password" dir="ltr" autocomplete="' + ac + '"><button type="button" class="ma-eye" data-act="ma-eye" data-for="' + id + '" aria-label="' + esc(t("ma_show")) + '">' + MA_IC.eye + "</button></div></div>";
const maEm = (id) => '<div class="ma-f"><label for="' + id + '">' + esc(t("ma_email")) + '</label><input id="' + id + '" type="email" dir="ltr" autocomplete="email" placeholder="name@example.com"></div>';
const maMsg = () => '<p class="ma-msg ' + (MA.ok ? "ok" : "err") + '" role="status">' + esc(MA.msg || "") + "</p>";
const maLang = () => '<button type="button" class="ma-mi ma-lang" data-act="lang">🌐 ' + esc(t("ma_lang")) + "</button>";
function maView() {
  const v = MA.user && !["reset", "mfa", "enroll"].includes(MA.view) ? "me" : MA.view;
  if (!HOSTED) return '<p class="ma-s">' + esc(t("ma_soon")) + "</p>" + maLang();
  if (v === "login") return '<form data-form="ma-login" novalidate><p class="ma-h">' + esc(t("ma_in")) + '</p><p class="ma-s">' + esc(t("ma_in_s")) + "</p>" + maEm("ma-em") + maPw("ma-pw", "ma_pass", "current-password") +
    '<div class="ma-row"><label class="ma-chk"><input type="checkbox" id="ma-rem"' + (maRem() ? " checked" : "") + "> " + esc(t("ma_rem")) + '</label><button type="button" class="ma-lnk" data-act="ma-view" data-v="forgot">' + esc(t("ma_forgot")) + "</button></div>" + maMsg() +
    '<button class="ma-go" type="submit">' + esc(t("ma_go")) + '</button><div class="ma-sep">' + esc(t("ma_no_acc")) + '</div><button type="button" class="ma-go ghost" data-act="ma-view" data-v="signup">' + esc(t("ma_new")) + "</button></form>" + maLang();
  if (v === "signup") return '<form data-form="ma-signup" novalidate><p class="ma-h">' + esc(t("ma_new")) + '</p><div class="ma-f"><label for="ma-nm">' + esc(t("ma_name")) + '</label><input id="ma-nm" autocomplete="name" maxlength="40"></div>' + maEm("ma-em") + maPw("ma-pw", "ma_pass8", "new-password") + maMsg() +
    '<button class="ma-go" type="submit">' + esc(t("ma_new")) + '</button><p class="ma-alt">' + esc(t("ma_have")) + ' <button type="button" class="ma-lnk" data-act="ma-view" data-v="login">' + esc(t("ma_in")) + "</button></p></form>";
  if (v === "forgot") return '<form data-form="ma-forgot" novalidate><p class="ma-h">' + esc(t("ma_fg_h")) + '</p><p class="ma-s">' + esc(t("ma_fg_s")) + "</p>" + maEm("ma-em") + maMsg() + '<button class="ma-go" type="submit">' + esc(t("ma_fg_go")) + '</button><p class="ma-alt"><button type="button" class="ma-lnk" data-act="ma-view" data-v="login">' + esc(t("ma_back")) + "</button></p></form>";
  if (v === "reset") return '<form data-form="ma-reset" novalidate><p class="ma-h">' + esc(t("ma_rs_h")) + "</p>" + maPw("ma-np", "ma_pass8", "new-password") + maMsg() + '<button class="ma-go" type="submit">' + esc(t("ma_rs_go")) + "</button></form>";
  if (v === "enroll") return '<form data-form="ma-enroll" novalidate><p class="ma-h">' + esc(t("ma_mfa_h")) + '</p><p class="ma-s">' + esc(t("ma_mfa_new")) + "</p>" +
    (MA.enroll ? '<div class="ma-qr"><img alt="QR" src="' + esc(MA.enroll.qr) + '"></div><p class="ma-s" style="margin:6px 0">' + esc(t("ma_mfa_key")) + ' <code dir="ltr" class="ma-key">' + esc(MA.enroll.secret) + "</code></p>" : '<p class="ma-s">…</p>') +
    '<div class="ma-f"><label for="ma-code">' + esc(t("ma_mfa_code")) + '</label><input id="ma-code" inputmode="numeric" autocomplete="one-time-code" dir="ltr" maxlength="6" pattern="[0-9]*"></div>' + maMsg() + '<button class="ma-go" type="submit">' + esc(t("ma_mfa_go")) + "</button></form>";
  if (v === "mfa") return '<form data-form="ma-mfa" novalidate><p class="ma-h">' + esc(t("ma_mfa_h")) + '</p><p class="ma-s">' + esc(t("ma_mfa_ask")) + '</p><div class="ma-f"><label for="ma-code">' + esc(t("ma_mfa_code")) + '</label><input id="ma-code" inputmode="numeric" autocomplete="one-time-code" dir="ltr" maxlength="6" pattern="[0-9]*"></div>' + maMsg() + '<button class="ma-go" type="submit">' + esc(t("ma_mfa_go")) + "</button></form>";
  // me
  const p = MA.prof || {}, admin = !!p.is_admin, staff = MA.staff();
  const links = [["account", "nav_account"], ["progress", "nav_progress"]];
  if (admin || staff) links.unshift(["team", admin ? "tm_h" : "tm_mine"]);
  if (admin && MA.unlocked) links.unshift(["desk", "dk_h"], ["owner", "pm_owner"], ["map", "pm_map"], ["settings", "set_h"]);
  else if (MA.desk() && MA.unlocked) links.unshift(["desk", "dk_h"]);
  return '<div class="ma-me"><span class="ma-av big">' + esc((p.name || MA.user.email || "؟").trim()[0]) + '</span><div><b>' + esc(p.name || "") + '</b><span dir="ltr">' + esc(MA.user.email) + '</span></div></div><span class="ma-pill' + (admin ? "" : " n") + '">' + esc(t(admin ? "ma_owner" : staff ? "ma_staff" : "ma_member")) + "</span>" +
    (MA.msg ? maMsg() : "") + (MA.profErr ? '<p class="ma-msg err">' + esc(t("ma_e_prof")) + " (" + esc(MA.profErr) + ")</p>" : "") + (MA.desk() && !MA.unlocked ? '<button type="button" class="ma-go" data-act="ma-unlock">' + (MA.aal === "aal2" ? "↻ " + esc(t("ma_retry")) : "🔒 " + esc(t("ma_unlock"))) + "</button>" : "") +
    '<nav class="ma-links">' + links.map(([h, k]) => '<a class="ma-mi" href="#' + h + '">' + esc(t(k)) + "</a>").join("") + maLang() + '<button type="button" class="ma-mi out" data-act="ma-out">' + esc(t("ma_out")) + "</button></nav>";
}
function maPaint() {
  const b = document.getElementById("ma-btn");
  if (b) { const tmp = document.createElement("div"); tmp.innerHTML = profileMenu(); b.replaceWith(tmp.firstChild); }
  let pop = document.getElementById("ma-pop");
  if (!MA.open) { if (pop) pop.remove(); return; }
  if (!pop) { pop = document.createElement("div"); pop.id = "ma-pop"; pop.className = "ma-pop"; pop.setAttribute("role", "dialog"); pop.setAttribute("aria-label", t("ma_acc")); document.body.appendChild(pop); }
  pop.dir = S.lang === "ar" ? "rtl" : "ltr";
  const keep = document.activeElement && pop.contains(document.activeElement) ? document.activeElement.id : null;
  const vals = {}; pop.querySelectorAll("input[id]").forEach((i) => { vals[i.id] = i.type === "checkbox" ? i.checked : i.value; });
  pop.innerHTML = maView();
  Object.entries(vals).forEach(([id, v]) => { const i = document.getElementById(id); if (i) { if (i.type === "checkbox") i.checked = v; else if (i.type !== "password" || keep === id) i.value = v; } });
  maPlace();
  if (keep && document.getElementById(keep)) document.getElementById(keep).focus();
}
function maPlace() {
  const pop = document.getElementById("ma-pop"), b = document.getElementById("ma-btn"); if (!pop || !b) return;
  const r = b.getBoundingClientRect(), narrow = innerWidth < 560;
  pop.style.top = Math.round(r.bottom + 10) + "px";
  if (narrow) { pop.style.left = "12px"; pop.style.right = "12px"; }
  else { const w = 330, left = S.lang === "ar" ? Math.max(12, Math.min(innerWidth - w - 12, r.left)) : Math.max(12, Math.min(innerWidth - w - 12, r.right - w)); pop.style.left = left + "px"; pop.style.right = "auto"; }
}
window.addEventListener("resize", maPlace); window.addEventListener("scroll", () => { if (MA.open) maPlace(); }, { passive: true });
function maOpen(view) {
  MA.open = true; MA.msg = ""; if (view) MA.view = view;
  if (!MA.sb && HOSTED) maInit();
  if (MA.user && MA.desk() && !MA.unlocked && MA.aal !== "aal2" && view !== "me") MA.view = MA.factor ? "mfa" : MA.view;
  maPaint(); const f = document.querySelector("#ma-pop input:not([type=checkbox])"); if (f) f.focus();
  if (MA.user) maRefreshProf();
}
function maClose() { MA.open = false; MA.msg = ""; if (!["reset"].includes(MA.view)) MA.view = "login"; maPaint(); }
window.maOpen = maOpen;

async function maStartEnroll() {
  MA.view = "enroll";
  if (MA.enrolling) { maPaint(); return MA.enrolling; }   // طلب واحد بس، عشان ما يتغيّر الرمز وأنت تمسحه
  if (MA.enroll) { maPaint(); return; }
  MA.enrolling = (async () => {
  maPaint();
  try {
    const f = await MA.sb.auth.mfa.listFactors();
    for (const x of ((f.data && f.data.all) || []).filter((x) => x.status !== "verified")) await MA.sb.auth.mfa.unenroll({ factorId: x.id });
    const { data, error } = await MA.sb.auth.mfa.enroll({ factorType: "totp", friendlyName: "Meras owner " + Date.now() });
    if (error) throw error;
    let qr = String(data.totp.qr_code || ""); const m = qr.match(/^data:image\/svg\+xml;utf-8,(.*)$/s); if (m) qr = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(m[1]);
    MA.enroll = { id: data.id, qr, secret: data.totp.secret };
  } catch (e) { MA.msg = maErr(e); MA.ok = false; }
  MA.enrolling = null; maPaint();
  })();
  return MA.enrolling;
}
const maErr = (e) => { const m = String((e && e.message) || e || ""); if (/Invalid login/i.test(m)) return t("ma_e_cred"); if (/not confirmed/i.test(m)) return t("ma_e_conf"); if (/already registered/i.test(m)) return t("ma_e_dup"); if (/at least|Password should/i.test(m)) return t("ma_e_pw"); if (/rate|too many/i.test(m)) return t("ma_e_rate"); if (/fetch|network/i.test(m)) return t("ma_e_net"); if (/code|totp|verify|challenge/i.test(m)) return t("ma_mfa_bad"); return m || t("ma_e_net"); };
const maSay = (m, ok) => { MA.msg = m; MA.ok = !!ok; maPaint(); };

document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="ma-"]');
  if (!el) { if (MA.open && !(e.target.closest && (e.target.closest("#ma-pop") || e.target.closest("#ma-btn"))) && document.contains(e.target)) maClose(); return; }
  e.preventDefault(); e.stopPropagation();
  const a = el.dataset.act;
  if (a === "ma-toggle") { MA.open ? maClose() : maOpen(); return; }
  if (a === "ma-view") { MA.view = el.dataset.v; MA.msg = ""; maPaint(); const f = document.querySelector("#ma-pop input:not([type=checkbox])"); if (f) f.focus(); return; }
  if (a === "ma-eye") { const i = document.getElementById(el.dataset.for), show = i.type === "password"; i.type = show ? "text" : "password"; el.innerHTML = show ? MA_IC.eyeOff : MA_IC.eye; el.setAttribute("aria-label", t(show ? "ma_hide" : "ma_show")); i.focus(); return; }
  if (!MA.sb) return;
  if (a === "ma-out") { await MA.sb.auth.signOut(); if (maLocked()) maWipe(); MA.unlocked = false; maClose(); if (typeof render === "function") render(); return; }
  if (a === "ma-unlock") { MA.msg = ""; if (MA.aal === "aal2") { await maLoadSecrets(); maPaint(); return; } if (MA.factor) { MA.view = "mfa"; maPaint(); const f = document.getElementById("ma-code"); if (f) f.focus(); } else maStartEnroll(); }
}, true);
document.addEventListener("click", (e) => { const a = e.target.closest && e.target.closest("#ma-pop a"); if (a) setTimeout(maClose, 0); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && MA.open) { maClose(); const b = document.getElementById("ma-btn"); if (b) b.focus(); } });
document.addEventListener("submit", async (e) => {
  const f = e.target; if (!f.dataset || !/^ma-/.test(f.dataset.form || "")) return;
  e.preventDefault(); e.stopPropagation();
  if (!MA.sb) { await maInit(); if (!MA.sb) return; }
  const v = (id) => { const x = document.getElementById(id); return x ? x.value.trim() : ""; }, okEm = (x) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
  const btn = f.querySelector("button[type=submit]"); if (btn) btn.disabled = true;
  const page = location.href.split("#")[0];
  try {
    const k = f.dataset.form;
    if (k === "ma-login") {
      if (!okEm(v("ma-em"))) return maSay(t("ma_e_email"));
      const rem = document.getElementById("ma-rem").checked;
      if (rem !== maRem()) { try { localStorage.setItem("meras.rem", rem ? "1" : "0"); } catch (x) {} maClient(); }
      const { data, error } = await MA.sb.auth.signInWithPassword({ email: v("ma-em"), password: document.getElementById("ma-pw").value });
      if (error) return maSay(maErr(error));
      MA.msg = ""; await maSetUser(data.user);
      if (MA.desk() && !MA.unlocked) { if (MA.factor) MA.view = "mfa"; else return maStartEnroll(); maPaint(); return; }
      maClose();
    } else if (k === "ma-signup") {
      const pw = document.getElementById("ma-pw").value;
      if (!v("ma-nm")) return maSay(t("ma_name")); if (!okEm(v("ma-em"))) return maSay(t("ma_e_email")); if (pw.length < 8) return maSay(t("ma_e_pw"));
      const { data, error } = await MA.sb.auth.signUp({ email: v("ma-em"), password: pw, options: { data: { name: v("ma-nm") }, emailRedirectTo: page } });
      if (error) return maSay(maErr(error));
      if (data && data.user && Array.isArray(data.user.identities) && !data.user.identities.length) return maSay(t("ma_e_dup"));
      if (!data.session) return maSay(t("ma_up_ok"), true);
      maClose();
    } else if (k === "ma-forgot") {
      if (!okEm(v("ma-em"))) return maSay(t("ma_e_email"));
      const { error } = await MA.sb.auth.resetPasswordForEmail(v("ma-em"), { redirectTo: page }); if (error) return maSay(maErr(error));
      maSay(t("ma_fg_ok"), true);
    } else if (k === "ma-reset") {
      const pw = document.getElementById("ma-np").value; if (pw.length < 8) return maSay(t("ma_e_pw"));
      const { error } = await MA.sb.auth.updateUser({ password: pw }); if (error) return maSay(maErr(error));
      MA.view = "login"; history.replaceState(null, "", page + "#"); maSay(t("ma_rs_ok"), true);
    } else if (k === "ma-enroll" || k === "ma-mfa") {
      const code = v("ma-code").replace(/\D/g, ""); if (code.length !== 6) return maSay(t("ma_mfa_bad"));
      const factorId = k === "ma-enroll" ? MA.enroll && MA.enroll.id : MA.factor && MA.factor.id;
      if (!factorId) { MA.msg = ""; if (k === "ma-enroll") { await maStartEnroll(); return maSay(t("ma_mfa_rescan")); } return maSay(t("ma_mfa_bad")); }
      const { error } = await MA.sb.auth.mfa.challengeAndVerify({ factorId, code });
      if (error) return maSay(maErr(error));
      MA.enroll = null; MA.view = "login"; MA.msg = ""; await maAdminGate(); maPaint(); maEmit();
    }
  } catch (x) { maSay(maErr(x)); }
  finally { if (btn && btn.isConnected) btn.disabled = false; }
}, true);

if (HOSTED) { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(maInit, 50)); else setTimeout(maInit, 50); }
