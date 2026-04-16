import Image from 'next/image'
import Link from 'next/link'

export default function ProseccoQueen() {
  return (
    <section className="bg-[var(--parchment)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/images/prosecco-queen.jpg"
              alt="La Regina del Prosecco — vino frizzante italiano fino al 12% vol."
              fill
              className="object-cover"
            />
            {/* Strength badge */}
            <div className="absolute top-4 right-4 bg-[var(--green-deep)] text-[var(--gold)] px-4 py-2 text-center">
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase mb-0.5">Alcol max.</p>
              <p className="font-serif text-2xl font-medium">12%</p>
              <p className="font-sans text-[9px] tracking-wider uppercase">vol.</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="section-label mb-4">La nostra protagonista</p>
            <div className="divider-gold" style={{ margin: '0 0 1.5rem 0' }} />
            <h2 className="font-serif text-5xl md:text-6xl font-light italic text-[var(--green-deep)] leading-tight mb-6 text-pretty">
              Il Prosecco — Regina del Veneto
            </h2>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-4">
              Tra tutti i vini italiani, il Prosecco occupa un posto d&apos;onore: leggero, elegante, con le sue bollicine fini
              che danzano nel calice, incarna perfettamente lo spirito dell&apos;aperitivo italiano. Nasce nelle colline del Veneto,
              patrimonio UNESCO, dove il microclima e i terreni unici ne definiscono il carattere irripetibile.
            </p>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-8">
              Con una gradazione alcolica che raggiunge al massimo il <strong>12% vol.</strong>, il Prosecco rappresenta
              il vino frizzante con la maggiore concentrazione alcolica presente su questo sito.
              Una bevanda da scoprire e apprezzare con rispetto e moderazione.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-border py-6">
              {[
                { value: '12%', label: 'Max alcol' },
                { value: 'Veneto', label: 'Regione' },
                { value: 'DOC / DOCG', label: 'Denominazione' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl text-[var(--green-deep)] font-medium">{stat.value}</p>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/prosecco"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-7 py-3 bg-[var(--green-deep)] text-[var(--gold)] hover:bg-[var(--green-mid)] transition-colors duration-300"
            >
              Scopri di piu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
