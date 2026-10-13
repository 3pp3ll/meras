/* ===== مِراس: الوضع النهاري والليلي ودرجة الغمق (لكل جهاز، ما يتزامن) ===== */
const TH_KEY = "meras.theme";
let TH = { mode: "auto", dim: 50 }, thOpen = false;
try { Object.assign(TH, JSON.parse(localStorage.getItem(TH_KEY) || "{}")); } catch (e) {}
Object.assign(UI, {
  th_title: ["المظهر", "Appearance"], th_light: ["نهاري", "Day"], th_dark: ["ليلي", "Night"], th_auto: ["تلقائي", "Auto"],
  th_dim: ["🎚️ درجة الغمق", "🎚️ Darkness"], th_less: ["أخف", "Lighter"], th_more: ["أغمق", "Darker"], th_dim_off: ["تشتغل في الوضع الليلي", "Works in night mode"]
});
const isDark = () => TH.mode === "dark" || (TH.mode === "auto" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
function applyTheme() {
  const root = document.documentElement;
  if (TH.mode === "auto") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", TH.mode);
  root.style.setProperty("--dk", String((100 - Math.max(0, Math.min(100, +TH.dim || 0))) / 100));
  const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", isDark() ? "#16294F" : "#FFE2D2");
}
const ICON_SUN = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></g></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor"/></svg>';
function themeButton() {
  const seg = [["light", "th_light"], ["dark", "th_dark"], ["auto", "th_auto"]].map(([m, k]) => '<button data-act="th-mode" data-m="' + m + '" aria-pressed="' + (TH.mode === m) + '">' + esc(t(k)) + "</button>").join("");
  const pop = !thOpen ? "" : '<div class="th-pop" role="dialog" aria-label="' + esc(t("th_title")) + '"><b>' + esc(t("th_title")) + '</b><div class="th-seg">' + seg + '</div><div class="th-dim' + (isDark() ? "" : " off") + '"><label for="th-dim"><span>' + esc(t("th_dim")) + '</span><span class="num">' + TH.dim + '</span></label><input type="range" id="th-dim" dir="ltr" min="0" max="100" step="5" value="' + TH.dim + '"' + (isDark() ? "" : " disabled") + '><div class="ends"><span>' + esc(t("th_less")) + "</span><span>" + esc(t("th_more")) + "</span></div>" + (isDark() ? "" : '<span class="small muted">' + esc(t("th_dim_off")) + "</span>") + "</div></div>";
  return '<button class="btn sm th-btn" data-act="th-open" aria-expanded="' + thOpen + '" aria-label="' + esc(t("th_title")) + '">' + (isDark() ? ICON_MOON : ICON_SUN) + "</button>" + pop;
}
const thSave = () => { try { localStorage.setItem(TH_KEY, JSON.stringify(TH)); } catch (e) {} };
document.addEventListener("click", (ev) => {
  const el = ev.target.closest && ev.target.closest("[data-act]");
  if (el && el.dataset.act === "th-open") { thOpen = !thOpen; render(); return; }
  if (el && el.dataset.act === "th-mode") { TH.mode = el.dataset.m; thSave(); applyTheme(); render(); return; }
  if (thOpen && !(ev.target.closest && ev.target.closest(".th-pop"))) { thOpen = false; render(); }
});
document.addEventListener("input", (ev) => {
  if (ev.target.id !== "th-dim") return;
  TH.dim = +ev.target.value; thSave(); applyTheme();
  const n = ev.target.parentElement.querySelector("label .num"); if (n) n.textContent = TH.dim;
});
document.addEventListener("keydown", (ev) => { if (ev.key === "Escape" && thOpen) { thOpen = false; render(); } });
if (window.matchMedia) { try { matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { applyTheme(); render(); }); } catch (e) {} }
applyTheme();
