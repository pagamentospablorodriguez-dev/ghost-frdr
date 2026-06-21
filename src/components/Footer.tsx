import { Ghost } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-ghost-500/10 ring-1 ring-ghost-500/30">
                <Ghost className="h-4.5 w-4.5 text-ghost-400" strokeWidth={2.2} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink-100">
                Fraudara<span className="text-ghost-400">.pro</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Kit de sobrevivência anti-trabalho para o home office moderno.
              Pareça ocupado, viva mais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-ink-300">Produto</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {['Recursos', 'Como funciona', 'Preço', 'FAQ'].map((l, i) => (
                  <li key={l}>
                    <a
                      href={['#recursos', '#como-funciona', '#precos', '#faq'][i]}
                      className="text-ink-400 transition-colors hover:text-ink-100"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-ink-300">Legal</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {['Termos de uso', 'Privacidade', 'Garantia 7 dias'].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-ink-400 transition-colors hover:text-ink-100">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-ink-300">Contato</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><a href="#" className="text-ink-400 transition-colors hover:text-ink-100">Suporte</a></li>
                <li><a href="#" className="text-ink-400 transition-colors hover:text-ink-100">contato@fraudara.pro</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Fraudara.pro · Todos os direitos reservados.</p>
          <p className="max-w-md text-pretty">
            Produto satírico/digital de automação pessoal. Uso por conta e risco do usuário. Não afiliado a Slack, Microsoft Teams ou qualquer plataforma citada.
          </p>
        </div>
      </div>
    </footer>
  );
}
