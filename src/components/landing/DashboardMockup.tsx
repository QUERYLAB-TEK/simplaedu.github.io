import {
  LayoutDashboard,
  Users,
  ClipboardList,
  GraduationCap,
  CalendarCheck,
  Wallet,
  ArrowUpRight,
  Bell,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ClipboardList, label: "Matrículas" },
  { icon: Users, label: "Alunos" },
  { icon: GraduationCap, label: "Notas" },
  { icon: CalendarCheck, label: "Frequência" },
  { icon: Wallet, label: "Financeiro" },
];

const metrics = [
  { label: "Total de alunos", value: "382", trend: "+12 este mês", tone: "blue" as const },
  { label: "Turmas ativas", value: "16", trend: "Ano letivo 2026", tone: "neutral" as const },
  { label: "Matrículas pendentes", value: "12", trend: "Aguardando análise", tone: "gold" as const },
];

const rows = [
  { name: "Pedro Henrique", code: "2026-0142", turma: "7º Ano A", status: "Ativo", tone: "green" as const },
  { name: "Maria Luiza", code: "2026-0198", turma: "8º Ano B", status: "Pendente", tone: "gold" as const },
  { name: "João Vitor", code: "2026-0075", turma: "6º Ano C", status: "Em dia", tone: "blue" as const },
  { name: "Ana Beatriz", code: "2026-0231", turma: "9º Ano A", status: "Ativo", tone: "green" as const },
];

const toneClass = {
  green: "bg-status-green-bg text-status-green-fg",
  gold: "bg-status-gold-bg text-status-gold-fg",
  blue: "bg-status-blue-bg text-status-blue-fg",
  neutral: "bg-muted text-muted-foreground",
};

export const DashboardMockup = () => {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[2rem] bg-mockup-glow blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated animate-float-soft">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-status-green-fg/50" />
          <span className="ml-3 text-[11px] font-medium text-muted-foreground">
            app.simplaedu.com.br / dashboard
          </span>
        </div>

        <div className="grid grid-cols-[170px_1fr] min-h-[420px]">
          {/* Sidebar */}
          <aside className="border-r border-border bg-background/60 p-3">
            <div className="px-2 pb-3 pt-1">
              <span className="font-heading text-sm font-bold tracking-tight">
                Simpla<span className="text-primary">Edu</span>
              </span>
            </div>
            <ul className="space-y-0.5">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <span
                    className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-xs font-medium transition-colors ${
                      item.active
                        ? "bg-primary-soft text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <div className="flex min-w-0 flex-col gap-4 p-4">
            {/* Topbar */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Visão geral
                </p>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  Bom dia, Coordenação 👋
                </h3>
              </div>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent">
                <Bell className="h-3.5 w-3.5 text-accent-foreground" />
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2.5">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-border bg-surface p-3"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </p>
                  <p className="mt-1 font-heading text-xl font-bold text-foreground">{m.value}</p>
                  <p
                    className={`mt-1 inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-medium ${toneClass[m.tone]}`}
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    {m.trend}
                  </p>
                </div>
              ))}
            </div>

            {/* Table + sidecards */}
            <div className="grid min-w-0 grid-cols-[1.5fr_1fr] gap-3">
              <div className="rounded-lg border border-border bg-surface">
                <div className="flex items-center justify-between border-b border-border px-3 py-2">
                  <p className="text-xs font-semibold text-foreground">Atividade recente</p>
                  <span className="text-[10px] text-muted-foreground">Últimas 24h</span>
                </div>
                <div className="divide-y divide-border">
                  {rows.map((r) => (
                    <div
                      key={r.code}
                      className="grid grid-cols-[1fr_auto] items-center gap-2 px-3 py-2 text-[11px]"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-medium text-foreground">{r.name}</p>
                        <p className="truncate text-[10px] text-muted-foreground">
                          {r.code} · {r.turma}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${toneClass[r.tone]}`}
                      >
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="rounded-lg border border-border bg-surface p-3">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Avisos
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium text-foreground">
                    Reunião de pais
                  </p>
                  <p className="text-[10px] text-muted-foreground">15/05 · 19h</p>
                  <div className="my-2 h-px bg-border" />
                  <p className="text-[11px] font-medium text-foreground">Entrega de boletins</p>
                  <p className="text-[10px] text-muted-foreground">30/05</p>
                </div>
                <div className="rounded-lg border border-gold/30 bg-gold-soft/40 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-gold-foreground">
                    Financeiro · maio
                  </p>
                  <p className="mt-1 font-heading text-sm font-bold text-gold-foreground">
                    R$ 132.870
                  </p>
                  <p className="text-[10px] text-gold-foreground/80">
                    Resultado: R$ 47.224
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "portal dos pais" card */}
      <div className="absolute -bottom-6 -left-4 hidden w-52 rotate-[-3deg] rounded-xl border border-border bg-surface p-3 shadow-card md:block">
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Portal dos pais
        </p>
        <p className="mt-1 font-heading text-sm font-semibold text-foreground">
          Boletim disponível
        </p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">2º bimestre · Maria Luiza</p>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-status-green-bg px-2 py-0.5 text-[10px] font-medium text-status-green-fg">
          Visualizado
        </div>
      </div>
    </div>
  );
};
