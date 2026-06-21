import { useEffect, useState } from 'react';
import { Ghost, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#recursos', label: 'Recursos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#precos', label: 'Preço' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-hairline' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-ghost-500/10 ring-1 ring-ghost-500/30">
            <Ghost className="h-4.5 w-4.5 text-ghost-400" strokeWidth={2.2} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink-100">
            Fraudara<span className="text-ghost-400">.pro</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-300 transition-colors hover:text-ink-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#precos"
            className="inline-flex items-center rounded-lg bg-ghost-500 px-4 py-2 text-sm font-medium text-ink-950 transition-all hover:bg-ghost-400 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.5)]"
          >
            Pegar o kit
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink-200 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-hairline px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#precos"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-ghost-500 px-4 py-2 text-sm font-medium text-ink-950"
            >
              Pegar o kit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
