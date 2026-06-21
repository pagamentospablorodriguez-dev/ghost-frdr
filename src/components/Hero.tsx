import { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const statusMessages = [
  'Status do Slack: ativo',
  'Cursor do mouse: humano',
  'Ruído de fundo: trânsito',
  'Auto-resposta: alinhando',
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % statusMessages.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-grid animate-grid-drift opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-ghost-500/5 blur-[140px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-ink-850/60 px-3 py-1.5 text-xs text-ink-300 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ghost-400 opacity-75 animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ghost-500" />
            </span>
            Kit de sobrevivência anti-trabalho · v2.4
          </div>

          <h1 className="animate-fade-up text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-ink-100 sm:text-6xl" style={{ animationDelay: '60ms' }}>
            Otimize sua presença{' '}
            <span className="shimmer-text animate-shimmer">invisível</span>{' '}
            no Home Office.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg animate-fade-up" style={{ animationDelay: '140ms' }}>
            Pareça ocupado, viva mais. O Fraudara.pro mantém seu status verde
            enquanto você dorme, joga ou simplesmente existe em paz.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: '220ms' }}>
            <a
              href="#precos"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ghost-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-ghost-400 hover:shadow-[0_0_32px_-6px_rgba(16,185,129,0.6)] sm:w-auto"
            >
              Garantir meu kit — R$ 29,90
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#recursos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-hairline bg-ink-850/40 px-6 py-3.5 text-sm font-medium text-ink-200 transition-colors hover:text-ink-100 hover:border-ink-600 sm:w-auto"
            >
              Ver o que vem dentro
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-400 animate-fade-up" style={{ animationDelay: '300ms' }}>
            {['Pagamento único', 'Sem assinatura', 'Download imediato', 'Garantia 7 dias'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-ghost-400" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Terminal mock */}
        <div className="relative mx-auto mt-16 max-w-3xl animate-fade-up" style={{ animationDelay: '380ms' }}>
          <div className="absolute -inset-x-8 -inset-y-4 rounded-3xl bg-ghost-500/5 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-ink-900/80 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-ink-400">fraudara — ghost-runner</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-xs leading-relaxed sm:text-sm">
              <p className="text-ink-400">$ fraudara start --mode stealth</p>
              <p className="text-ghost-400">→ inicializando módulos...</p>
              <p className="text-ink-200">✓ mouse jiggler online <span className="text-ink-500">· padrão humano</span></p>
              <p className="text-ink-200">✓ noise generator ready <span className="text-ink-500">· loop aeroporto</span></p>
              <p className="text-ink-200">✓ auto-responder armed <span className="text-ink-500">· jargão Pro</span></p>
              <p className="mt-3 text-ink-300">
                <span className="text-ghost-400">›</span>{' '}
                <span className="transition-all">{statusMessages[idx]}</span>
                <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse-dot bg-ghost-400 align-middle" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
