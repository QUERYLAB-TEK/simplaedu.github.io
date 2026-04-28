import { MapPin, Sparkles, HandHeart, GraduationCap } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Suporte local em Goiânia",
    body: "Atendimento direto com quem desenvolve o sistema. Sem ticket, sem fila, sem chatbot.",
  },
  {
    icon: Sparkles,
    title: "Usado sem treinamento",
    body: "Interface pensada para a secretária matricular um aluno no primeiro dia, sem manual.",
  },
  {
    icon: HandHeart,
    title: "Implantação gratuita",
    body: "Configuração e migração de dados incluídas em todos os planos — sem custo de setup.",
  },
  {
    icon: GraduationCap,
    title: "Co-criado com escolas",
    body: "Aberto para incorporar demandas reais das escolas no produto, semana após semana.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Por que o SimplaEdu
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Software escolar feito perto de quem usa.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              Goiânia tem mais de 530 escolas privadas de educação básica. A
              maioria usa sistemas desenvolvidos fora do estado, com suporte
              remoto e pouca abertura para adaptações. O SimplaEdu existe para
              mudar isso.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4 backdrop-blur">
              <span className="font-heading text-3xl font-bold text-gold">+530</span>
              <span className="text-sm leading-tight text-primary-foreground/80">
                escolas privadas
                <br />
                de educação básica em Goiânia
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <article
                key={r.title}
                className="reveal rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-gold-foreground">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
