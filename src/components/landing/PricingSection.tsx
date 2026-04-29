import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    name: "Matrículas digitais",
    price: "149",
    additional: "0,80",
    description: "Formulário online, upload de documentos e contrato gerado em PDF. Aluno matriculado em minutos, sem papel.",
  },
  {
    name: "Chamada digital",
    price: "99",
    additional: "0,50",
    description: "Professor registra presença por turma. O responsável recebe aviso automático quando o filho falta.",
  },
  {
    name: "Notas e boletim",
    price: "129",
    additional: "0,70",
    description: "Professor lança nota e o boletim fica disponível no portal na hora. Sem esperar, sem reimprimir.",
  },
  {
    name: "Portal do responsável",
    price: "149",
    additional: "0,80",
    description: "Pais acompanham notas, faltas e cobranças pelo celular. Param de ligar para a secretaria.",
  },
  {
    name: "Mensageria de cobranças",
    price: "179",
    additional: "1,00",
    description: "Lembrete automático antes do vencimento. Inadimplência cai sem sua equipe precisar ligar para ninguém.",
  },
];

const combo = {
  name: "Todos os módulos",
  price: "599",
  additional: "3,50",
  description: "Tudo incluso, com desconto de 15% em relação aos módulos avulsos. Para escolas que querem resolver de uma vez.",
  featured: true,
};

export const PricingSection = () => {
  return (
    <section id="planos" className="border-b border-border py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Planos e preços
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Você paga pelo que usa. E só cresce o custo quando a escola cresce.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Escolha os módulos que fazem sentido para a sua escola. Cada um inclui até 150 alunos. Acima disso, um valor fixo por aluno é acrescido na mensalidade — sem surpresa, sem pacote forçado.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <article
              key={m.name}
              className="reveal flex flex-col rounded-2xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-0.5"
            >
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">
                  {m.name}
                </p>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm font-semibold text-muted-foreground">R$</span>
                <span className="font-heading text-4xl font-bold tracking-tight text-foreground">
                  {m.price}
                </span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                até 150 alunos · + R$ {m.additional}/aluno adicional
              </p>

              <p className="mt-4 text-sm text-muted-foreground">{m.description}</p>

              <Button asChild className="mt-6 w-full" variant="outline">
                <a href="#interesse">Adicionar módulo</a>
              </Button>
            </article>
          ))}

          <article className="reveal relative flex flex-col rounded-2xl border border-primary bg-surface p-7 shadow-elevated lg:col-span-1 lg:scale-[1.03]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground shadow-soft">
              Recomendado
            </span>

            <div>
              <p className="font-heading text-lg font-semibold text-foreground">
                {combo.name}
              </p>
            </div>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-muted-foreground">R$</span>
              <span className="font-heading text-4xl font-bold tracking-tight text-foreground">
                {combo.price}
              </span>
              <span className="text-sm text-muted-foreground">/mês</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              até 150 alunos · + R$ {combo.additional}/aluno adicional
            </p>

            <p className="mt-4 text-sm text-muted-foreground">{combo.description}</p>

            <Button asChild className="mt-6 w-full">
              <a href="#interesse">Falar com a equipe</a>
            </Button>
          </article>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Implantação gratuita em todos os módulos. Sem contrato de fidelidade. Cancela quando quiser.
        </p>
      </div>
    </section>
  );
};
