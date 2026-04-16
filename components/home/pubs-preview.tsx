import Image from 'next/image'
import Link from 'next/link'

const beers = [
  { name: 'Birra Chiara', abv: '4.5% vol.', desc: 'Leggera, dorata, dal gusto fresco e dissetante. La piu diffusa nei pub italiani.' },
  { name: 'Birra Rossa', abv: '5.5% vol.', desc: 'Ambrata con note caramellate, maltate e un finale morbido. Tipica del nord Italia.' },
  { name: 'Birra Artigianale', abv: '6.5% vol.', desc: 'Le microbirrerie italiane producono IPA, stout e birre di frumento di alta qualita.' },
]

export default function PubsPreview() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded overflow-hidden shadow-xl">
            <Image
              src="/images/pubs-beer.jpg"
              alt="Pub italiano con birre artigianali"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--charcoal)]/30" />
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-4">Cultura birraria italiana</p>
            <div className="divider-gold" style={{ margin: '0 0 1.5rem 0' }} />
            <h2 className="font-serif text-4xl md:text-5xl font-light italic text-[var(--green-deep)] leading-tight mb-6 text-pretty">
              Pub e Birra in Italia
            </h2>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-8">
              Accanto alla tradizione del vino, l&apos;Italia vanta una crescente cultura birraria.
              Dai pub tradizionali nelle piazze storiche alle moderne birrerie artigianali, la birra
              italiana conquista sempre piu appassionati. Scopri i luoghi e le tipologie piu amate.
            </p>

            {/* Beer list */}
            <div className="space-y-4 mb-8">
              {beers.map((beer) => (
                <div key={beer.name} className="flex gap-4 items-start border-b border-border pb-4">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-[var(--gold)] mt-1.5" />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-base font-medium text-[var(--green-deep)]">{beer.name}</h3>
                      <span className="font-sans text-[9px] tracking-widest uppercase bg-[var(--gold)]/20 text-[var(--green-deep)] px-2 py-0.5">
                        {beer.abv}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{beer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/pub"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-7 py-3 bg-[var(--green-deep)] text-[var(--gold)] hover:bg-[var(--green-mid)] transition-colors duration-300"
            >
              Scopri pub e birre
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
