-- مِراس — قاعدة بيانات المدونة (مشروع Supabase مستقل عن عقود)
-- انسخ الملف كامل في Supabase ← SQL Editor ← New query ثم Run. آمن لإعادة التشغيل.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  is_admin boolean not null default false,
  banned boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, left(coalesce(nullif(trim(new.raw_user_meta_data->>'name'), ''), split_part(new.email, '@', 1)), 40))
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false)
$$;

create table if not exists public.posts (
  id bigserial primary key,
  author uuid references auth.users(id) on delete cascade,
  author_name text,
  title text not null check (char_length(title) between 1 and 120),
  body text not null check (char_length(body) between 1 and 5000),
  status text not null default 'held' check (status in ('published', 'held', 'rejected')),
  ai_flag boolean not null default false,
  ai_reason text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);
create index if not exists posts_status_created on public.posts (status, created_at desc);

alter table public.profiles enable row level security;
alter table public.posts enable row level security;

drop policy if exists "profiles read" on public.profiles;
create policy "profiles read" on public.profiles for select using (id = auth.uid() or public.is_admin());
drop policy if exists "profiles admin" on public.profiles;
create policy "profiles admin" on public.profiles for update using (public.is_admin()) with check (public.is_admin());

-- المنشور المعتمد يشوفه الكل، والمحجوب يشوفه كاتبه والإدارة بس
drop policy if exists "posts read" on public.posts;
create policy "posts read" on public.posts for select using (status = 'published' or author = auth.uid() or public.is_admin());
-- النشر يتم من دالة post في السيرفر فقط (تفحص التوصيات)، والاعتماد والحذف للإدارة
drop policy if exists "posts admin update" on public.posts;
create policy "posts admin update" on public.posts for update using (public.is_admin()) with check (public.is_admin());
drop policy if exists "posts delete" on public.posts;
create policy "posts delete" on public.posts for delete using (author = auth.uid() or public.is_admin());

-- المنشورات المحجوبة تظهر للكل كبطاقة مغطاة: الاسم والتاريخ فقط بدون النص
create or replace function public.held_stubs()
returns table (id bigint, author uuid, author_name text, created_at timestamptz)
language sql stable security definer set search_path = public as $$
  select id, author, author_name, created_at from public.posts where status = 'held' order by created_at desc limit 30
$$;

revoke all on public.profiles, public.posts from anon;
grant select on public.posts to anon, authenticated;
grant select on public.profiles to authenticated;
grant delete on public.posts to authenticated;
grant execute on function public.held_stubs() to anon, authenticated;
grant execute on function public.is_admin() to anon, authenticated;
do $$ begin
  if exists (select 1 from pg_roles where rolname = 'service_role') then
    grant select, insert, update on public.posts, public.profiles to service_role;
    grant usage, select on all sequences in schema public to service_role;
  end if;
end $$;

-- ============ مفاتيح المالك (توكن GitHub ومفتاح الذكاء) ============
-- ما يقدر يقراها أو يعدلها إلا الأدمن بعد التحقق بخطوتين (aal2)
create table if not exists public.owner_secrets (
  id int primary key default 1 check (id = 1),
  gh_owner text, gh_repo text, gh_token text,
  ai_key text, ai_model text,
  updated_at timestamptz not null default now()
);
alter table public.owner_secrets enable row level security;
drop policy if exists "secrets owner" on public.owner_secrets;
create policy "secrets owner" on public.owner_secrets for all
  using (public.is_admin() and coalesce(auth.jwt()->>'aal', '') = 'aal2')
  with check (public.is_admin() and coalesce(auth.jwt()->>'aal', '') = 'aal2');
revoke all on public.owner_secrets from anon;
grant select, insert, update on public.owner_secrets to authenticated;

-- ============ صلاحيات فريق الإدارة ============
-- كل مستخدم له perms (jsonb): blog_approve, blog_hide, blog_edit, blog_delete, users_view, users_ban, desk
-- المالك (is_admin) يملك كل شي، وهو بس اللي يعطي الصلاحيات
alter table public.profiles add column if not exists perms jsonb not null default '{}'::jsonb;

create or replace function public.has_perm(p text) returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select is_admin or coalesce((perms->>p)::boolean, false) from public.profiles where id = auth.uid() and not banned), false)
$$;
grant execute on function public.has_perm(text) to anon, authenticated;

-- المحجوب يشوفه كاتبه والمالك ومن عنده صلاحية المراجعة
drop policy if exists "posts read" on public.posts;
create policy "posts read" on public.posts for select using (status = 'published' or author = auth.uid() or public.has_perm('blog_approve') or public.has_perm('blog_hide'));
drop policy if exists "posts admin update" on public.posts;
drop policy if exists "posts delete" on public.posts;
create policy "posts delete" on public.posts for delete using (author = auth.uid() or public.has_perm('blog_delete'));
revoke update on public.posts from authenticated;

create or replace function public.moderate_post(pid bigint, act text) returns text
language plpgsql security definer set search_path = public as $$
begin
  if act in ('approve', 'reject') and not public.has_perm('blog_approve') then raise exception 'no permission'; end if;
  if act = 'hide' and not public.has_perm('blog_hide') then raise exception 'no permission'; end if;
  if act = 'delete' then
    if not (public.has_perm('blog_delete') or exists (select 1 from public.posts where id = pid and author = auth.uid())) then raise exception 'no permission'; end if;
    delete from public.posts where id = pid; return 'deleted';
  end if;
  update public.posts set status = case act when 'approve' then 'published' when 'reject' then 'rejected' when 'hide' then 'held' end, reviewed_at = now() where id = pid;
  return act;
end $$;
create or replace function public.edit_post(pid bigint, new_title text, new_body text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.has_perm('blog_edit') then raise exception 'no permission'; end if;
  update public.posts set title = left(trim(new_title), 120), body = left(trim(new_body), 5000) where id = pid;
end $$;
create or replace function public.list_users() returns table (id uuid, email text, name text, is_admin boolean, banned boolean, perms jsonb, created_at timestamptz)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.has_perm('users_view') then raise exception 'no permission'; end if;
  return query select p.id, p.email, p.name, p.is_admin, p.banned, p.perms, p.created_at from public.profiles p order by p.created_at desc;
end $$;
create or replace function public.set_ban(uid uuid, flag boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.has_perm('users_ban') then raise exception 'no permission'; end if;
  update public.profiles set banned = flag where id = uid and not is_admin;
end $$;
-- إعطاء الصلاحيات: المالك فقط
create or replace function public.set_perms(uid uuid, new_perms jsonb) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'owner only'; end if;
  update public.profiles set perms = coalesce(new_perms, '{}'::jsonb) where id = uid and not is_admin;
end $$;
revoke update on public.profiles from authenticated;
drop policy if exists "profiles admin" on public.profiles;
revoke execute on function public.moderate_post(bigint, text), public.edit_post(bigint, text, text), public.list_users(), public.set_ban(uuid, boolean), public.set_perms(uuid, jsonb) from anon, public;
grant execute on function public.moderate_post(bigint, text), public.edit_post(bigint, text, text), public.list_users(), public.set_ban(uuid, boolean), public.set_perms(uuid, jsonb) to authenticated;

-- مكتبي (مفاتيح المالك): المالك، ومن أعطاه المالك صلاحية "desk"، وبعد التحقق بخطوتين
drop policy if exists "secrets owner" on public.owner_secrets;
create policy "secrets owner" on public.owner_secrets for all
  using ((public.is_admin() or public.has_perm('desk')) and coalesce(auth.jwt()->>'aal', '') = 'aal2')
  with check (public.is_admin() and coalesce(auth.jwt()->>'aal', '') = 'aal2');

-- ============ اجعل نفسك المالك ============
-- بعد ما تسجّل حسابك من صفحة المدونة، شغّل هذا بإيميلك:
-- insert into public.profiles (id, email, name, is_admin)
-- select id, email, 'مِراس', true from auth.users where email = 'your@email.com'
-- on conflict (id) do update set is_admin = true;
