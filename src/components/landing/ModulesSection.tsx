import {
  FileSignature,
  Smartphone,
  CalendarCheck2,
  PenSquare,
  Mail,
  Check,
} from "lucide-react";

const modules = [
  {
    icon: FileSignature,
    title: "Matrículas digitais",
    body: "Formulário online, upload de documentos e geração automática do contrato em PDF — sem papel, sem retrabalho.",
    bullets: ["Formulário responsivo", "Upload de documentos", "Contrato em PDF"],
  },
  {
    icon: Smartphone,
    title: "Acompanhamento dos responsáveis",
    body: "Pais acompanham notas, frequência e cobranças pelo celular, sem precisar ligar para a escola.",
    bullets: ["Boletim em tempo real", "Avisos de falta", "Cobranças no app"],
    highlight: true,
  },
  {
    icon: CalendarCheck2,
    title: "Chamada digital",
    body: "Professor registra presença por turma. O sistema avisa o responsável automaticamente quando o aluno falta.",
    bullets: ["Chamada por turma", "Notificação automática", "Histórico mensal"],
  },
  {
    icon: PenSquare,
    title: "Lançamento de notas",
    body: "Interface por disciplina e período. O boletim fica disponível no portal assim que o professor lança a nota.",
    bullets: ["Por disciplina e período", "Boletim instantâneo", "Histórico completo"],
  },
  {
    icon: Mail,
    title: "Cobranças por e-mail",
    body: "Notificações automáticas de mensalidade para os responsáveis, com lembrete antes do vencimento.",
    bullets: ["Lembrete automático", "Status de pagamento", "Relatório financeiro"],
  },
];

export const ModulesSection = () => {
  return (
    <section id="funcionalidades" className="bg-surface py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            A solução
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Cinco módulos para simplificar o que mais pesa na rotina escolar.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Um sistema completo para escolas que querem organizar processos,
            reduzir retrabalho e oferecer uma experiência clara para famílias,
            professores e gestão.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <article
              key={m.title}
              className={`reveal group flex flex-col rounded-2xl border p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated ${
                m.highlight
                  ? "border-primary/20 bg-primary-soft/40"
                  : "border-border bg-background"
              }`}
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                  m.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-soft text-primary"
                }`}
              >
                <m.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.body}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-border pt-4">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
