-- Lead capture table for landing page interest form
CREATE TABLE public.interest_leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  escola text not null,
  whatsapp text not null,
  email text not null,
  alunos integer not null,
  created_at timestamptz not null default now()
);

ALTER TABLE public.interest_leads ENABLE ROW LEVEL SECURITY;

-- Anyone (anonymous visitors) can submit a lead
CREATE POLICY "Anyone can submit interest"
ON public.interest_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No one can read leads from the client (admin reads happen via service role)
-- Intentionally no SELECT policy.

CREATE INDEX idx_interest_leads_created_at ON public.interest_leads(created_at DESC);
CREATE INDEX idx_interest_leads_email ON public.interest_leads(email);