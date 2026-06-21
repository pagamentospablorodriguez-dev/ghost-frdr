import { MousePointerClick, Volume2, MessageSquareText } from 'lucide-react';

const features = [
  {
    icon: MousePointerClick,
    tag: 'Módulo 01',
    title: 'Mouse Jiggler Inteligente por IA',
    description:
      'Um mini-software que move o cursor em padrões aleatórios e humanos demais para qualquer detector notar. Seu Slack fica verde o dia todo; o Teams nunca te marca como ausente.',
    bullets: ['Curvas bezier randomizadas', 'Variação de velocidade humana', 'Atalho de emergência (pausa em 1 tecla)'],
  },
  {
    icon: Volume2,
    tag: 'Módulo 02',
    title: 'Gerador de Ruído de Fundo Ambivalente',
    description:
      'Áudios realistas em loop para tocar ao fundo quando o chefe ligar de surpresa no Teams e você precisar fingir uma emergência no trânsito, no hospital ou no aeroporto.',
    bullets: ['Trânsito pesado · Sala de hospital', 'Aeroporto · Misto customizável', 'Fade inteligente entre faixas'],
  },
  {
    icon: MessageSquareText,
    tag: 'Módulo 03',
    title: 'Auto-Responder Corporativo Pro',
    description:
      'Cole a mensagem do chefe, a IA responde com jargões corporativos que dão a ilusão de produtividade. Pareceocupado, soa engajado — e ninguém pede detalhes.',
    bullets: ['Tom ajustável (busy, alinhando, follow-up)', 'Detecção de urgência no pedido', 'Templates por chefe / projeto'],
  },
];

export default function Features() {
  return (
    <section id="recursos" className="relative py-24 sm:py-32" data-reveal>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-ghost-400">
            O que vem no kit
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            Três ferramentas. Uma só missão: manter você invisível.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-300">
            Cada módulo foi feito para parecer trabalho sem ser trabalho.
            Juntos, formam o Home Office Ghost.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-ink-850/40 p-6 transition-all duration-300 hover:border-ghost-500/30 hover:bg-ink-850/70"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ghost-500/5 blur-3xl transition-opacity duration-300 group-hover:bg-ghost-500/10" aria-hidden />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ghost-500/10 ring-1 ring-ghost-500/20">
                    <f.icon className="h-5 w-5 text-ghost-400" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                    {f.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-100">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {f.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-hairline pt-5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-ink-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ghost-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
