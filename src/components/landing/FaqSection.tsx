import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona a implantação?",
    a: "Configuramos o sistema módulo a módulo, importamos os dados da escola e acompanhamos o início com o time. Tudo incluso no plano, sem custo extra.",
  },
  {
    q: "Tem migração de dados do sistema atual?",
    a: "Sim. Importamos dados acadêmicos e financeiros existentes, com validação conjunta antes de virar a chave. A escola não perde histórico.",
  },
  {
    q: "Como é o suporte?",
    a: "Atendimento local em Goiânia, com a equipe que desenvolve o produto. Sem ticket genérico, sem chatbot e sem fila — você fala com quem resolve.",
  },
  {
    q: "Como vocês tratam a segurança dos dados?",
    a: "Controle de acesso por perfil, criptografia em trânsito e em repouso, e rotinas de proteção em conformidade com a LGPD. Os dados pertencem sempre à escola.",
  },
  {
    q: "Tem contrato de fidelidade?",
    a: "Não. Você começa quando quiser e cancela quando quiser. Acreditamos que o produto precisa se provar a cada mês.",
  },
  {
    q: "Como funciona o acesso antecipado?",
    a: "As primeiras escolas cadastradas na lista de interesse têm prioridade de acesso e condições especiais. Entramos em contato diretamente quando o sistema estiver pronto para novas ativações.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="bg-surface py-20 lg:py-28">
      <div className="container max-w-3xl">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Perguntas frequentes
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            O que sua escola precisa saber antes de contratar.
          </h2>
        </div>

        <div className="reveal mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-heading text-base font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
