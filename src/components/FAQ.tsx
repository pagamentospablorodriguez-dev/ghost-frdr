import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Isso é legal? Posso ser descoberto?',
    a: 'O Fraudara.pro é um kit de automação de produtividade pessoal. Ele simula atividade para manter o status online — nada intercepta sistemas da empresa. Mesmo assim, o uso é por sua conta e risco, em ambientes que você controla. Ninguém nunca foi flagrado usando padrões humanos.',
  },
  {
    q: 'Funciona no Slack e no Microsoft Teams?',
    a: 'Sim. O Jiggler mantém o cursor em movimento, o que impede que tanto o Slack quanto o Teams marquem você como ausente. Não há integração direta com essas plataformas — o movimento do mouse já basta.',
  },
  {
    q: 'Preciso instalar algo no computador da empresa?',
    a: 'Recomendamos rodar em máquina pessoal controlada por você. O kit é um software independente; não requer login corporativo nem acessos privilegiados.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Pagamento único de R$ 29,90 (à vista) ou em 2x no cartão. Você recebe o download imediatamente após a confirmação. Sem assinatura, sem cobrança recorrente.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 7 dias de garantia incondicional. Se não servir, devolvemos o valor integral — sem perguntas, sem burocracia de jargão corporativo.',
  },
  {
    q: 'O auto-responder realmente soa como trabalho?',
    a: 'Ele gera respostas no tom "alinhando com o time", "te trago até o final do dia" e variações. Soa ocupado, soa engajado, e praticamente nunca pedem detalhes. Ajuste o tom por chefe ou projeto.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-ink-100 sm:text-base">{q}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-ink-300">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-ink-300">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32" data-reveal>
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-ghost-400">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
            Tudo que talvez você não queira perguntar em voz alta.
          </h2>
        </div>

        <div className="mt-12">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
