import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essencial",
    price: "800",
    limit: "Até 150 alunos",
    description: "Para escolas começando a digitalizar a operação.",
    features: [
      "Matrícula digital",
      "Acompanhamento dos responsáveis",
      "Chamada e notas",
      "Implantação gratuita",
      "Suporte local em Goiânia",
    ],
  },
  {
    name: "Padrão",
    price: "1.200",
    limit: "Até 400 alunos",
    description: "O plano mais escolhido por escolas de médio porte.",
    features: [
      "Tudo do Essencial",
      "Módulo financeiro completo",
      "Cobranças automáticas por e-mail",
      "Relatórios pedagógicos",
      "Suporte local prioritário",
    ],
    featured: true,
  },
  {
    name: "Avançado",
    price: "1.700",
    limit: "Até 800 alunos",
    description: "Capacidade extra para escolas grandes ou multiunidades.",
    features: [
      "Tudo do Padrão",
      "Maior capacidade operacional",
      "Treinamento da equipe in loco",
      "Dashboards personalizados",
      "Suporte local dedicado",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="planos" className="border-b border-border py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Planos e preços
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Adesão simples. Preço justo. Sem fidelidade.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Implantação gratuita em todos os planos. Você começa quando quiser
            e cancela quando quiser.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`reveal relative flex flex-col rounded-2xl border p-7 shadow-card transition-all hover:-translate-y-0.5 ${
                p.featured
                  ? "border-primary bg-surface shadow-elevated lg:scale-[1.03]"
                  : "border-border bg-surface"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground shadow-soft">
                  Mais escolhido
                </span>
              )}

              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                  {p.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{p.limit}</p>
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-sm font-semibold text-muted-foreground">R$</span>
                <span className="font-heading text-5xl font-bold tracking-tight text-foreground">
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-7 w-full"
                variant={p.featured ? "default" : "outline"}
              >
                <a href="#interesse">
                  {p.featured ? "Falar com a equipe" : "Quero começar"}
                </a>
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Implantação gratuita em todos os planos. Sem contrato mínimo de fidelidade.
        </p>
      </div>
    </section>
  );
};
