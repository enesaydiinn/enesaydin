create extension if not exists pgcrypto;

create table if not exists public.training_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  training text not null,
  message text not null,
  source text not null default 'website',
  status text not null default 'new',
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.training_requests enable row level security;

create index if not exists training_requests_created_at_idx
  on public.training_requests (created_at desc);

create index if not exists training_requests_status_idx
  on public.training_requests (status);
