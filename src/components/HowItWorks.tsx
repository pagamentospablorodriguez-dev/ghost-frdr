const steps = [
  {
    n: '01',
    title: 'Baixe e instale',
    body: 'Após a compra, o download é imediato. Instala em menos de 2 minutos, sem conta, sem login corporativo.',
  },
  {
    n: '02',
    title: 'Escolha o perfil do dia',
    body: 'Mouse humano + ruído de aeroporto + auto-responder em tom "alinhando com o time". Salve como preset.',
  },
  {
    n: '03',
    title: 'Minimize a janela e viva',
    body: 'O kit roda em background. O Slack fica verde, o chefe ouve trânsito, as mensagens se respondem sozinhas.',
  },
  {
    n: '04',
    title: 'Volte quando quiser',
    body: 'Abra o painel, veja quantas respostas foram geradas e quantas horas você poupou. Decida se conta pra alguém.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden py-24 sm:py-32" data-reveal>
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-ghost-500/30 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-ghost-400">
            Como funciona
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            Do pagamento à paz em quatro passos.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-ink-700/30 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-ink-900/60 p-7 transition-colors hover:bg-ink-850/80"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-2xl font-medium text-ghost-400/80 transition-colors group-hover:text-ghost-400">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-ink-600 to-transparent lg:block" />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink-100">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
