ALTER TABLE public.interest_leads
  ADD CONSTRAINT interest_leads_nome_len CHECK (char_length(nome) BETWEEN 2 AND 120),
  ADD CONSTRAINT interest_leads_escola_len CHECK (char_length(escola) BETWEEN 2 AND 160),
  ADD CONSTRAINT interest_leads_whatsapp_len CHECK (char_length(whatsapp) BETWEEN 8 AND 30),
  ADD CONSTRAINT interest_leads_email_len CHECK (char_length(email) BETWEEN 5 AND 200 AND email LIKE '%@%.%'),
  ADD CONSTRAINT interest_leads_alunos_range CHECK (alunos BETWEEN 1 AND 100000);