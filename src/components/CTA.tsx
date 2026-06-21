import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-ghost-500/20 bg-gradient-to-br from-ink-850/80 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 animate-grid-drift" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-ghost-500/10 blur-[90px]" aria-hidden />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-5xl">
              Seu chefe não precisa saber.
              <span className="block text-ink-300">Você só precisa viver mais.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-pretty text-base text-ink-300">
              Pague uma vez. Baixe agora. Mantenha o status verde pelo resto da semana.
            </p>
            <a
              href="#precos"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-ghost-500 px-7 py-4 text-sm font-semibold text-ink-950 transition-all hover:bg-ghost-400 hover:shadow-[0_0_40px_-8px_rgba(16,185,129,0.7)]"
            >
              Garantir o kit por R$ 29,90
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
