import { Clock, PhoneOff, BadgeDollarSign, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Secretaria afogada em papel",
    body: "Horas para matricular um aluno. Documentos perdidos, contratos impressos, retrabalho toda semana. O que deveria levar minutos leva o dia inteiro.",
  },
  {
    icon: PhoneOff,
    title: "Família no escuro — e ligando para saber",
    body: "Pai liga para saber nota. Mãe manda WhatsApp para perguntar se a mensalidade venceu. A escola perde tempo e a família perde confiança.",
  },
  {
    icon: BadgeDollarSign,
    title: "Sistema caro que ninguém consegue usar",
    body: "R$ 1.500 a R$ 5.000 por mês. Treinamento que demora semanas. Suporte que demora dias. E no fim, a equipe ainda usa planilha paralela.",
  },
  {
    icon: TrendingDown,
    title: "Inadimplência que corrói o mês",
    body: "Boleto que não chegou. Cobrança manual. Fluxo de caixa que não fecha. A escola perde receita porque não tem ferramenta — não porque os pais não querem pagar.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            O problema
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Sua escola merece um sistema que trabalha para você — não contra.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Quatro problemas que se repetem toda semana em escolas privadas de educação básica. O SimplaEdu nasceu para resolver cada um deles.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <article
              key={p.title}
              className="reveal group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
