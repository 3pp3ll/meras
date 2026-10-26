/* ===== مِراس: منصاتي (مكتبي) =====
   أيقونات للمنصات اللي تستخدمها (منطاد، دربي، عقود، الراجحي كابيتال…). تضغط الأيقونة وتفتح المنصة.
   على الجوال: إذا التطبيق مثبّت والمنصة تدعم فتح روابطها في التطبيق، النظام يفتح التطبيق مباشرة.
   القائمة محفوظة في desk.json مع باقي مكتبي. */
Object.assign(UI, {
  ap_t: ["منصاتي", "My platforms"], dk_g_apps: ["افتح منصاتك بضغطة", "Open your platforms in one tap"],
  ap_p: ["اضغط أي أيقونة وتفتح المنصة. على الجوال يفتح التطبيق نفسه إذا كان مثبّت والمنصة تدعم ذلك.", "Tap an icon to open the platform. On a phone its app opens if it is installed and the platform supports it."],
  ap_edit: ["تعديل", "Edit"], ap_done: ["تم", "Done"], ap_add: ["أضف منصة", "Add a platform"], ap_name: ["الاسم", "Name"], ap_url: ["الرابط", "Link"],
  ap_url_ph: ["انسخ رابط المنصة من المتصفح، مثل https://…", "Paste the platform link, e.g. https://…"], ap_save: ["احفظ", "Save"], ap_del: ["احذف", "Delete"], ap_up: ["قدّم", "Move up"],
  ap_nolink: ["أضف الرابط", "Add the link"], ap_bad: ["اكتب اسم ورابط يبدأ بـ https://", "Enter a name and a link starting with https://"],
  ap_sugg: ["إضافة سريعة", "Quick add"], ap_empty: ["ما فيه منصات للحين. اضغط «تعديل» وأضف منصاتك.", "No platforms yet. Tap Edit and add yours."],
  ap_tip: ["للتطبيق: افتح المنصة في متصفح الجوال مرة، وإذا طلع لك «فتح في التطبيق» اختره، وبعدها الأيقونة تفتح التطبيق على طول.", "Tip: open the platform once in your phone browser and choose “Open in app” if offered; the icon will then open the app."]
});
const AP_COLORS = ["#E9A03B", "#E8765A", "#C76BA4", "#3D6E97", "#2E9C73", "#7DC3E6", "#B4532E", "#6E7A8E"];
const AP_SUGG = [["الراجحي كابيتال", "https://www.alrajhi-capital.sa"], ["دراية", "https://www.derayah.com"], ["Exness", "https://www.exness.com"], ["TradingView", "https://www.tradingview.com"], ["تداول السعودية", "https://www.saudiexchange.sa"], ["أرقام", "https://www.argaam.com"], ["يقين", "https://yaaqen.com"]];
let apEdit = false, apForm = null;
const apList = () => { if (!DK.data) return []; if (!Array.isArray(DK.data.apps)) DK.data.apps = [{ id: "a1", name: "منطاد", url: "https://3pp3ll.github.io/ad-studio/" }, { id: "a2", name: "دربي", url: "https://3pp3ll.github.io/darbi-E/" }, { id: "a3", name: "عقود", url: "https://3pp3ll.github.io/oqood/Contracts.html" }]; return DK.data.apps; };
const AP_MINE = { "منطاد": "https://3pp3ll.github.io/ad-studio/", "دربي": "https://3pp3ll.github.io/darbi-E/", "عقود": "https://3pp3ll.github.io/oqood/Contracts.html" };
const apFill = () => { (DK.data && DK.data.apps || []).forEach((a) => { if (!a.url && AP_MINE[a.name]) a.url = AP_MINE[a.name]; }); };
const apInit = (n) => { const w = String(n || "?").replace(/^(ال)/, "").trim(); return w.slice(0, /^[A-Za-z]/.test(w) ? 2 : 1).toUpperCase(); };
const apHost = (u) => { try { const x = new URL(u), h = x.hostname.replace(/^www\./, ""); return /github\.io$/.test(h) ? (x.pathname.split("/")[1] || h) : h; } catch (e) { return ""; } };
function dkApps() {
  const list = apList(); apFill();
  const tile = (a, i) => { const col = a.color || AP_COLORS[i % AP_COLORS.length], ok = /^https:\/\//.test(a.url || "");
    const inner = '<span class="ap-ic" style="--ac:' + col + '">' + esc(apInit(a.name)) + '</span><b>' + esc(a.name) + '</b><small class="muted">' + esc(ok ? apHost(a.url) : t("ap_nolink")) + "</small>";
    if (apEdit) return '<div class="ap-tile edit">' + inner + '<div class="row" style="gap:4px;justify-content:center"><button class="btn sm" data-act="ap-edit1" data-id="' + esc(a.id) + '">' + esc(t("ap_edit")) + "</button>" + (i ? '<button class="btn sm ghost" data-act="ap-up" data-id="' + esc(a.id) + '" aria-label="' + esc(t("ap_up")) + '">↑</button>' : "") + '<button class="btn sm ghost" data-act="ap-del" data-id="' + esc(a.id) + '" aria-label="' + esc(t("ap_del")) + '">✕</button></div></div>';
    return ok ? '<a class="ap-tile" href="' + esc(a.url) + '" target="_blank" rel="noopener">' + inner + "</a>" : '<button class="ap-tile off" data-act="ap-edit1" data-id="' + esc(a.id) + '">' + inner + "</button>"; };
  const f = apForm;
  const form = f ? '<form class="panel stack" data-form="ap" novalidate><div class="form-grid"><div class="field"><label for="ap-n">' + esc(t("ap_name")) + '</label><input id="ap-n" value="' + esc(f.name || "") + '" autocomplete="off"></div><div class="field"><label for="ap-u">' + esc(t("ap_url")) + '</label><input id="ap-u" dir="ltr" inputmode="url" value="' + esc(f.url || "") + '" placeholder="' + esc(t("ap_url_ph")) + '"></div></div><div class="row"><button class="btn primary" type="submit">' + esc(t("ap_save")) + '</button><button class="btn ghost" type="button" data-act="ap-cancel">' + esc(t("ap_done")) + "</button></div></form>" : "";
  const have = new Set(list.map((a) => a.url));
  const sugg = apEdit ? '<div class="stack" style="gap:6px"><span class="small muted">' + esc(t("ap_sugg")) + '</span><div class="row" style="gap:6px">' + AP_SUGG.filter(([, u]) => !have.has(u)).map(([n, u]) => '<button class="btn sm" data-act="ap-sugg" data-n="' + esc(n) + '" data-u="' + esc(u) + '">+ ' + esc(n) + "</button>").join("") + "</div></div>" : "";
  return '<div class="stack"><div class="row" style="justify-content:space-between;align-items:flex-start"><p class="muted" style="margin:0;max-width:60ch">' + esc(t("ap_p")) + '</p><div class="row" style="gap:6px">' + (apEdit ? '<button class="btn sm" data-act="ap-new">+ ' + esc(t("ap_add")) + "</button>" : "") + '<button class="btn sm ' + (apEdit ? "primary" : "") + '" data-act="ap-mode">' + esc(t(apEdit ? "ap_done" : "ap_edit")) + "</button></div></div>" + form +
    (list.length ? '<div class="ap-grid">' + list.map(tile).join("") + "</div>" : '<div class="notice">' + esc(t("ap_empty")) + "</div>") + sugg + '<p class="small muted" style="margin:0">' + esc(t("ap_tip")) + "</p></div>";
}
document.addEventListener("click", async (e) => {
  const el = e.target.closest && e.target.closest('[data-act^="ap-"]'); if (!el) return;
  const a = el.dataset.act, list = apList(), it = list.find((x) => x.id === el.dataset.id);
  if (a === "ap-mode") { apEdit = !apEdit; apForm = null; render(); return; }
  if (a === "ap-new") { apForm = { id: "", name: "", url: "https://" }; render(); return; }
  if (a === "ap-edit1" && it) { apEdit = true; apForm = Object.assign({}, it); render(); setTimeout(() => { const u = document.getElementById("ap-u"); if (u) u.focus(); }, 50); return; }
  if (a === "ap-cancel") { apForm = null; render(); return; }
  if (a === "ap-del" && it) { DK.data.apps = list.filter((x) => x.id !== it.id); render(); await saveDesk(); return; }
  if (a === "ap-up" && it) { const i = list.indexOf(it); if (i > 0) { list.splice(i, 1); list.splice(i - 1, 0, it); } render(); await saveDesk(); return; }
  if (a === "ap-sugg") { list.push({ id: "a" + Date.now().toString(36), name: el.dataset.n, url: el.dataset.u }); render(); await saveDesk(); }
});
document.addEventListener("submit", async (e) => {
  const f = e.target.closest && e.target.closest('[data-form="ap"]'); if (!f) return; e.preventDefault();
  const name = document.getElementById("ap-n").value.trim(); let url = document.getElementById("ap-u").value.trim();
  if (url && !/^https?:\/\//.test(url)) url = "https://" + url;
  if (!name || !/^https:\/\/[^\s.]+\.[^\s]+/.test(url)) { toast(t("ap_bad")); return; }
  const list = apList(), cur = apForm && apForm.id && list.find((x) => x.id === apForm.id);
  if (cur) Object.assign(cur, { name, url }); else list.push({ id: "a" + Date.now().toString(36), name, url });
  apForm = null; render(); await saveDesk();
});
