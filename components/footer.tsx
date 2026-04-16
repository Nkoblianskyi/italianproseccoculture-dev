import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--green-deep)] text-white/70">
      {/* Top divider */}
      <div className="h-px bg-[var(--gold)]/30" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3  mb-3">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <p className="font-serif text-2xl italic text-[var(--gold)]">
              Italian Prosecco Culture
            </p>
          </div>
          <p className="font-sans text-xs leading-relaxed text-white/60 max-w-xs">
            Contenuto puramente informativo sulla cultura del Prosecco italiano.
            Nessuna vendita o acquisto. Solo per persone di eta superiore ai 18 anni.
          </p>
          <p className="font-sans text-xs mt-4 text-[var(--gold)]/80 tracking-widest uppercase">
            Alcol max. 12% vol.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="section-label mb-4">Navigazione</p>
          <ul className="space-y-2.5">
            {[
              { label: 'Home', href: '/' },
              { label: 'Prosecco', href: '/prosecco' },
              { label: 'Tipi di Prosecco', href: '/tipi' },
              { label: 'Pub e Birra', href: '/pub' },
              { label: 'Chi Siamo', href: '/chi-siamo' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-sans text-xs tracking-wide text-white/60 hover:text-[var(--gold)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="section-label mb-4">Legale</p>
          <ul className="space-y-2.5">
            {[
              { label: 'Cookie Policy', href: '/cookie-policy' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Chi Siamo', href: '/chi-siamo' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-sans text-xs tracking-wide text-white/60 hover:text-[var(--gold)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-3 border border-[var(--gold)]/30 rounded">
            <p className="font-sans text-[10px] leading-relaxed text-white/50">
              Questo sito e destinato esclusivamente a persone di eta pari o superiore a 18 anni.
              Il consumo di alcol deve essere responsabile e moderato.
              Contenuto max: 12% vol.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-sans text-[10px] text-white/40 tracking-widest uppercase">
          &copy; {year} italianproseccoculture.com. Tutti i diritti riservati.
        </p>
        <p className="font-sans text-[10px] text-white/40">
          Contenuto informativo. Nessuna vendita.
        </p>
      </div>
    </footer>
  )
}
