// مِراس — دالة نشر منشور في المدونة
// تتحقق من المستخدم، وتفحص النص بالذكاء الاصطناعي: لو فيه توصية شراء/بيع أو ترويج، ينحجب لين تعتمده الإدارة.
// الأسرار: OPENROUTER_KEY (مطلوب)، OPENROUTER_MODEL (اختياري)، REVIEW_ALL=1 لو تبي كل المنشورات تمر على الإدارة.
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const json = (b, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });
const MODEL = Deno.env.get("OPENROUTER_MODEL") || "openai/gpt-4o-mini";

// فحص سريع احتياطي لو الذكاء ما رد
const RISKY = /(اشتر|اشترو|ادخل|دخول|اقتنص|بيع|بيعوا|تصريف|هدف|اهداف|أهداف|وقف\s*خسارة|توصي|صفقة\s*مضمونة|مضمون|قناة|تليجرام|telegram|واتساب|whatsapp|اشتراك\s*مدفوع|\bbuy\b|\bsell\b|target|stop\s*loss|\btp\d?\b|\bsl\b)/i;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST فقط" }, 405);
  const url = Deno.env.get("SUPABASE_URL"), anon = Deno.env.get("SUPABASE_ANON_KEY"), service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const userDb = createClient(url, anon, { global: { headers: { Authorization: req.headers.get("Authorization") || "" } } });
  const { data: u } = await userDb.auth.getUser();
  if (!u?.user) return json({ error: "سجّل دخولك أولاً." }, 401);
  const admin = createClient(url, service);

  let b; try { b = await req.json(); } catch { return json({ error: "طلب غير صالح." }, 400); }
  const title = String(b.title || "").trim().slice(0, 120), body = String(b.body || "").trim().slice(0, 5000);
  if (!title || !body) return json({ error: "اكتب العنوان والنص." }, 400);

  const { data: prof } = await admin.from("profiles").select("name,is_admin,banned").eq("id", u.user.id).maybeSingle();
  if (prof?.banned) return json({ error: "حسابك موقوف عن النشر." }, 403);
  const since = new Date(Date.now() - 86400000).toISOString();
  const { count } = await admin.from("posts").select("id", { count: "exact", head: true }).eq("author", u.user.id).gte("created_at", since);
  if (!prof?.is_admin && (count || 0) >= 5) return json({ error: "وصلت حد ٥ منشورات في اليوم. جرّب بكرة." }, 429);

  // فحص الذكاء الاصطناعي
  let flag = false, reason = "";
  const key = Deno.env.get("OPENROUTER_KEY") || "";
  if (key) {
    try {
      const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST", headers: { Authorization: "Bearer " + key, "Content-Type": "application/json", "X-Title": "Meras Blog" },
        body: JSON.stringify({ model: MODEL, temperature: 0, max_tokens: 150, response_format: { type: "json_object" }, messages: [
          { role: "system", content: `أنت مراقب محتوى لمدونة تعليمية عن الأسواق المالية في السعودية. الممنوع:
1) توصية صريحة أو ضمنية بشراء أو بيع أو الاحتفاظ بسهم/عملة/أصل محدد (مثل: اشتروا X، X بيطير، ادخلوا الحين).
2) أسعار دخول أو أهداف أو وقف خسارة لأصل محدد.
3) وعود بأرباح مضمونة، أو ترويج لقنوات أو مجموعات أو اشتراكات أو روابط تواصل.
4) إساءة أو محتوى غير لائق أو سبام.
المسموح: التجارب الشخصية، الدروس العامة، شرح الأدوات والمؤشرات، الآراء العامة عن السوق بدون دعوة لشراء أو بيع أصل محدد، وملاحظات على المنصة.
أرجع JSON فقط: {"flag": true/false, "reason": "سبب قصير بالعربي إذا flag"}` },
          { role: "user", content: "العنوان: " + title + "\n\nالنص:\n" + body }] })
      });
      const j = await r.json();
      const out = JSON.parse(String(j.choices?.[0]?.message?.content || "{}").replace(/```json|```/g, ""));
      flag = !!out.flag; reason = String(out.reason || "").slice(0, 200);
    } catch (_) { flag = RISKY.test(title + " " + body); reason = flag ? "فحص احتياطي: كلمات تشبه التوصية" : ""; }
  } else { flag = RISKY.test(title + " " + body); reason = flag ? "فحص احتياطي: كلمات تشبه التوصية" : ""; }

  const reviewAll = Deno.env.get("REVIEW_ALL") === "1";
  const status = prof?.is_admin ? "published" : flag || reviewAll ? "held" : "published";
  const { data: row, error } = await admin.from("posts").insert({
    author: u.user.id, author_name: (prof?.name || u.user.email.split("@")[0]).slice(0, 40), title, body, status, ai_flag: flag, ai_reason: reason || null,
  }).select("id,status").single();
  if (error) return json({ error: "ما انحفظ المنشور." }, 500);
  return json({ id: row.id, status: row.status });
});
