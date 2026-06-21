import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Passei a manhã inteira jogando Elden Ring. Às 11h o chefe mandou mensagem: "valeu pelo alinhamento, ótimo trabalho". O Fraudara respondeu sozinho.',
    name: 'R. Tavares',
    role: 'Analista de Dados · home office',
  },
  {
    quote:
      'O gerente ligou no Teams perguntando por que meu microfone tinha barulho de avião. Disse que estava no saguão resolvendo um problema do cliente. Acreditou.',
    name: 'M. Lopes',
    role: 'Suporte N2 · remoto',
  },
  {
    quote:
      'Antes eu ficava movendo o mouse com meu celular encostado no touchpad. Agora é um clique. Status verde 8h por dia, zero esforço.',
    name: 'anônimo',
    role: 'Dev · prefere não se identificar',
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-hairline bg-ink-900/40 py-24 sm:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-ghost-400 text-ghost-400" />
            ))}
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            Quem já vive mais (invisível).
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-hairline bg-ink-850/40 p-6"
            >
              <blockquote className="text-sm leading-relaxed text-ink-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-hairline pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-700 text-xs font-medium text-ghost-400 ring-1 ring-hairline">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-medium text-ink-100">{t.name}</div>
                  <div className="text-xs text-ink-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
