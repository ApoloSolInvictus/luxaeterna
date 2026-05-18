create table if not exists public.lux_profiles (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text not null unique,
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.lux_journal_entries (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.lux_profiles(id) on delete cascade,
  title text not null,
  body text not null,
  mood text not null,
  tags text[] not null default '{}',
  visibility text not null check (visibility in ('Private', 'Shared')),
  ai_summary text,
  created_at timestamptz not null default now()
);

create table if not exists public.lux_mediation_sessions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.lux_profiles(id) on delete cascade,
  source_text text not null,
  compassionate_rewrite text,
  active_signals jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.lux_care_circles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.lux_profiles(id) on delete cascade,
  name text not null,
  consent_enabled boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.lux_profiles enable row level security;
alter table public.lux_journal_entries enable row level security;
alter table public.lux_mediation_sessions enable row level security;
alter table public.lux_care_circles enable row level security;
