import { MessageCircle } from "lucide-react";

const questions = [
  "Como está a frequência do meu filho?",
  "Quando sai o boletim?",
  "Há alguma cobrança em aberto?",
  "Meu filho tem faltas não justificadas?",
  "Como funciona o contrato de matrícula?",
  "Como atualizo meus dados?",
  "Posso pagar a mensalidade pelo app?",
  "Quem é o professor de matemática?",
];

export const QuestionStrip = () => {
  const items = [...questions, ...questions];

  return (
    <section
      aria-label="Perguntas que os pais fazem toda semana"
      className="relative overflow-hidden border-y border-border bg-surface py-8"
    >
      <div className="container mb-4 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <MessageCircle className="h-3.5 w-3.5 text-primary" />
        Perguntas que sua secretaria responde toda semana
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent"
        />

        <div className="flex w-max animate-marquee gap-3">
          {items.map((q, i) => (
            <span
              key={`${q}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
            >
              {q}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
