import { Clock, PhoneOff, BadgeDollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Matrícula lenta e manual",
    body: "Secretárias perdem horas em processos que deveriam levar minutos. Documentos perdidos, retrabalho e frustração viraram rotina.",
  },
  {
    icon: PhoneOff,
    title: "Pais sem informação",
    body: "Responsáveis ligam toda semana para saber nota, falta e cobrança. A escola perde tempo. A família perde confiança.",
  },
  {
    icon: BadgeDollarSign,
    title: "Caro e difícil de usar",
    body: "Sistemas custam de R$ 1.500 a R$ 5.000 por mês. Mesmo assim, a equipe não consegue usar direito. O suporte demora, o sistema trava.",
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
            A escola merece mais do que a tecnologia que usa hoje.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Três dores se repetem em escolas privadas de pequeno e médio porte
            em Goiânia. O SimplaEdu nasceu para resolver cada uma delas.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
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
