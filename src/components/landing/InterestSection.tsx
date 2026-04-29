import { useState } from "react";
import { z } from "zod";
import { Loader2, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  nome: z.string().trim().min(2, "Digite seu nome completo").max(120),
  escola: z.string().trim().min(2, "Informe o nome da escola").max(160),
  whatsapp: z
    .string()
    .trim()
    .min(8, "WhatsApp inválido")
    .max(30, "WhatsApp muito longo"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(200, "E-mail muito longo"),
  alunos: z
    .number({ error: "Informe um número" })
    .int("Use um número inteiro")
    .min(1, "Mínimo 1 aluno")
    .max(100000, "Máximo 100.000 alunos"),
});

type FormState = {
  nome: string;
  escola: string;
  whatsapp: string;
  email: string;
  alunos: string;
};

const initial: FormState = {
  nome: "",
  escola: "",
  whatsapp: "",
  email: "",
  alunos: "",
};

export const InterestSection = () => {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof FormState, v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse({
      nome: values.nome,
      escola: values.escola,
      whatsapp: values.whatsapp,
      email: values.email,
      alunos: values.alunos === "" ? NaN : Number(values.alunos),
    });

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const res = await fetch("https://formspree.io/f/mvzdejzk", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setSubmitting(false);

    if (!res.ok) {
      toast({
        title: "Não conseguimos enviar agora",
        description: "Tente novamente em alguns instantes ou escreva para contato@querylab.com.br.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Recebemos seu interesse 🎉",
      description: "A equipe QueryLab vai entrar em contato assim que o SimplaEdu estiver pronto.",
    });
    setValues(initial);
  };

  return (
    <section id="interesse" className="relative overflow-hidden bg-hero-glow py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Lista de interesse
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Acesso antecipado. As primeiras escolas entram antes do lançamento público.
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Se a sua escola quer parar de perder tempo com papel, planilha e WhatsApp de pai, deixe seus dados. A gente entra em contato. Sem enrolação e sem spam.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Equipe QueryLab</p>
                <p>Goiânia, GO</p>
              </div>
            </div>
            <a
              href="mailto:contato@querylab.com.br"
              className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Fale com a gente</p>
                <p>contato@querylab.com.br</p>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="reveal rounded-2xl border border-border bg-surface p-6 shadow-elevated sm:p-8"
        >
          <div className="grid gap-4">
            <Field
              id="nome"
              label="Nome completo"
              placeholder="Seu nome"
              value={values.nome}
              error={errors.nome}
              onChange={(v) => update("nome", v)}
              autoComplete="name"
            />
            <Field
              id="escola"
              label="Nome da escola"
              placeholder="Nome da escola"
              value={values.escola}
              error={errors.escola}
              onChange={(v) => update("escola", v)}
              autoComplete="organization"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="whatsapp"
                label="WhatsApp"
                type="tel"
                placeholder="(62) 99999-9999"
                value={values.whatsapp}
                error={errors.whatsapp}
                onChange={(v) => update("whatsapp", v)}
                autoComplete="tel"
              />
              <Field
                id="email"
                label="E-mail"
                type="email"
                placeholder="voce@escola.com.br"
                value={values.email}
                error={errors.email}
                onChange={(v) => update("email", v)}
                autoComplete="email"
              />
            </div>
            <Field
              id="alunos"
              label="Número aproximado de alunos"
              type="number"
              placeholder="Ex.: 280"
              value={values.alunos}
              error={errors.alunos}
              onChange={(v) => update("alunos", v.replace(/\D/g, ""))}
            />
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando…
              </>
            ) : (
              "Quero receber o contato"
            )}
          </Button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Seus dados ficam apenas com a equipe QueryLab e são usados só para
            contato sobre o SimplaEdu.
          </p>
        </form>
      </div>
    </section>
  );
};

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}

const Field = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  autoComplete,
}: FieldProps) => (
  <div className="grid gap-1.5">
    <Label htmlFor={id} className="text-sm font-medium">
      {label}
    </Label>
    <Input
      id={id}
      name={id}
      type={type}
      inputMode={type === "number" ? "numeric" : undefined}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={autoComplete}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={error ? "border-destructive focus-visible:ring-destructive" : ""}
    />
    {error && (
      <p id={`${id}-error`} className="text-xs text-destructive">
        {error}
      </p>
    )}
  </div>
);
