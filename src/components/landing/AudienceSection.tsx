import { Briefcase, FileText, Presentation, Users } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    role: "Direção e donos de escola",
    body: "Você enxerga alunos, notas e mensalidades em um painel só. Sem planilha. Sem relatório manual. Sem depender de ninguém para te contar o que está acontecendo.",
  },
  {
    icon: FileText,
    role: "Secretaria",
    body: "Matricula, emite contrato e atualiza o cadastro do aluno em minutos. Sobra tempo para o que realmente importa.",
  },
  {
    icon: Presentation,
    role: "Professores",
    body: "Chamada e notas em poucos cliques, de qualquer dispositivo, durante ou depois da aula.",
  },
  {
    icon: Users,
    role: "Pais e responsáveis",
    body: "Acompanhamento completo do filho pelo celular: notas, frequência, avisos e cobranças.",
  },
];

export const AudienceSection = () => {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Para quem é
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Para cada pessoa da escola, uma razão para usar.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <article
              key={a.role}
              className="reveal flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                {a.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
