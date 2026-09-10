alter table public.training_requests
  add column if not exists training_other text;
