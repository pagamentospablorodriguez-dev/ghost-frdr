import { useState } from 'react';
import { Check, Sparkles, Lock } from 'lucide-react';

const included = [
  'Mouse Jiggler Inteligente (IA, padrão humano)',
  'Gerador de Ruído de Fundo (4 ambientes em loop)',
  'Auto-Responder Corporativo Pro (jargão ilimitado)',
  'Presets salvos por "perfil do dia"',
  'Atalho de pânico (pausa tudo em 1 tecla)',
  'Atualizações grátis por 12 meses',
  'Download imediato + guia de instalação',
];

export default function Pricing() {
  const [loading, setLoading] = useState(false);



const handleBuy = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    window.location.href = "https://pay.cakto.com.br/eaif6t7_936676";
  }, 1400);
};

  

  return (
    <section id="precos" className="relative overflow-hidden py-24 sm:py-32" data-reveal>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ghost-500/8 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-ghost-400">
            Preço · pagamento único
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            Um kit. Uma vez. Paz para sempre.
          </h2>
          <p className="mt-4 text-pretty text-base text-ink-300">
            Sem renovação, sem cobrança escondida. Você paga hoje e a ferramenta é sua.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border border-ghost-500/25 bg-gradient-to-b from-ink-850/90 to-ink-900/90 p-8 shadow-[0_0_60px_-20px_rgba(16,185,129,0.4)] sm:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-ghost-500/10 blur-3xl" aria-hidden />

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ghost-500/10 px-3 py-1 text-xs font-medium text-ghost-400 ring-1 ring-ghost-500/20">
                <Sparkles className="h-3.5 w-3.5" />
                Kit completo
              </span>
            </div>


            
          <div className="mt-6">
  <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
    <span className="whitespace-nowrap text-sm text-ink-400 line-through">R$ 79,90</span>
    <span className="whitespace-nowrap text-5xl font-semibold tracking-tightest text-ink-100">
      R$ 29,90
    </span>
    <span className="text-sm text-ink-400">à vista</span>
  </div>
  <p className="mt-2 text-xs text-ink-400">ou 6x de R$ 5,73 no cartão.</p>
</div>



            
            <p className="mt-2 text-xs text-ink-400">
              ou 6x de R$ 5,73 no cartão.
            </p>

            <ul className="mt-8 space-y-3">
              {included.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink-200">
                  <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-ghost-500/15">
                    <Check className="h-3 w-3 text-ghost-400" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

           <button
              onClick={handleBuy}
              disabled={loading}
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-ghost-500 px-6 py-4 text-sm font-semibold text-ink-950 transition-all hover:bg-ghost-400 hover:shadow-[0_0_36px_-6px_rgba(16,185,129,0.7)] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                  Processando...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Garantir meu kit agora
                </>
              )}
            </button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-400">
              <Lock className="h-3 w-3" />
              Pagamento seguro · Garantia de 7 dias
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-ink-500">
            Mais de 12.847 funcionários já economizaram suas horas. Junte-se ao movimento.
          </p>
        </div>
      </div>
    </section>
  );
}
