import { Logo } from "./Logo";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <Logo />
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Um sistema de gestão escolar construído em Goiânia, para escolas de
            Goiânia. Simples por convicção, completo por necessidade.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
          <a
            href="mailto:contato@querylab.com.br"
            className="font-medium text-foreground hover:text-primary"
          >
            contato@querylab.com.br
          </a>
          <span>Equipe QueryLab · Goiânia, GO</span>
          <span className="text-xs">© {new Date().getFullYear()} SimplaEdu. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
