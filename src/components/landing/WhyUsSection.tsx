import { MapPin, Sparkles, HandHeart, GraduationCap } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Suporte local em Goiânia",
    body: "Você fala com quem fez o sistema. Sem ticket. Sem fila. Sem chatbot. Se travar, a gente resolve.",
  },
  {
    icon: Sparkles,
    title: "Usado sem treinamento",
    body: "Sua secretária usa no primeiro dia. Sem curso, sem manual, sem semanas de implantação.",
  },
  {
    icon: HandHeart,
    title: "Implantação gratuita",
    body: "A gente configura tudo para você. Migração de dados incluída. Você não paga para começar.",
  },
  {
    icon: GraduationCap,
    title: "Co-criado com escolas",
    body: "Cada escola que entra ajuda a construir o produto. Se você precisa de algo, a gente coloca na fila — de verdade.",
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
              Goiânia tem mais de 530 escolas privadas. A maioria usa sistema de São Paulo ou do Sul — com suporte por ticket, atendimento por chatbot e zero abertura para adaptar o que não funciona. O SimplaEdu é diferente: feito aqui, para escolas daqui, com atendimento de quem construiu o sistema.
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
