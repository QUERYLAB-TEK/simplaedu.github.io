import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "./DashboardMockup";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div className="reveal max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Gestão escolar para educação básica privada
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Menos retrabalho na escola.{" "}
            <span className="text-primary">Mais clareza para as famílias.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            O SimplaEdu centraliza matrícula, notas, frequência e financeiro em
            um único sistema. Sua equipe ganha tempo e os responsáveis
            acompanham tudo pelo celular.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="shadow-soft">
              <a href="#interesse">
                Quero entrar na lista
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#funcionalidades">Ver como funciona</a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" />
              Feito em Goiânia
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
            <span>Implantação gratuita</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
            <span>Sem fidelidade</span>
          </div>
        </div>

        <div className="reveal">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};
