import Image from 'next/image'
import Link from 'next/link'

const types = [
  {
    name: 'Prosecco DOC',
    subtitle: 'Denominazione di Origine Controllata',
    abv: '11% vol.',
    image: '/images/type-doc.jpg',
    desc: 'Il Prosecco DOC e prodotto in un ampio territorio che include Veneto e Friuli Venezia Giulia. Fresco, fruttato, con note di mela verde e fiori bianchi. Ideale come aperitivo.',
    href: '/tipi#doc',
  },
  {
    name: 'Prosecco DOCG',
    subtitle: 'Conegliano Valdobbiadene',
    abv: '12% vol.',
    image: '/images/type-docg.jpg',
    desc: 'La versione piu pregiata, prodotta esclusivamente nelle storiche colline UNESCO di Conegliano e Valdobbiadene. Struttura piu complessa, bollicine finissime e persistenti. Il piu alcolico del sito: max 12% vol.',
    href: '/tipi#docg',
    featured: true,
  },
  {
    name: 'Prosecco Rose',
    subtitle: 'Millesimato DOC Rose',
    abv: '11.5% vol.',
    image: '/images/type-rose.jpg',
    desc: 'Nato ufficialmente nel 2020, il Prosecco Rose unisce la freschezza del Glera al corpo del Pinot Nero. Colore rosa tenue, bouquet di fragola, lampone e rosa.',
    href: '/tipi#rose',
  },
]

export default function TypesPreview() {
  return (
    <section className="bg-[var(--parchment)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Veneto e dintorni</p>
          <div className="divider-gold" />
          <h2 className="font-serif text-4xl md:text-5xl font-light italic text-[var(--green-deep)] mt-4 text-pretty">
            I Tipi di Prosecco
          </h2>
          <p className="font-sans text-sm text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Ogni denominazione racconta una storia diversa. Scopri le varieta, le loro caratteristiche e la gradazione alcolica.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((type) => (
            <Link
              key={type.name}
              href={type.href}
              className={`group block relative overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300 ${
                type.featured ? 'ring-2 ring-[var(--gold)]' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[var(--green-deep)]/40 group-hover:bg-[var(--green-deep)]/20 transition-colors duration-300" />
                {/* ABV badge */}
                <div className="absolute top-3 left-3 bg-[var(--green-deep)]/90 px-3 py-1.5">
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[var(--gold)]">
                    Alcol: {type.abv}
                  </p>
                </div>
                {type.featured && (
                  <div className="absolute top-3 right-3 bg-[var(--gold)] px-2 py-1">
                    <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-[var(--green-deep)] font-medium">
                      Piu forte
                    </p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="bg-background p-6">
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-1">
                  {type.subtitle}
                </p>
                <h3 className="font-serif text-2xl font-medium text-[var(--green-deep)] mb-3">
                  {type.name}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                  {type.desc}
                </p>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--green-deep)] border-b border-[var(--gold)] pb-0.5 group-hover:text-[var(--gold)] transition-colors">
                  Leggi di piu
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tipi"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 border border-[var(--green-deep)] text-[var(--green-deep)] hover:bg-[var(--green-deep)] hover:text-[var(--gold)] transition-colors duration-300"
          >
            Tutti i tipi di Prosecco
          </Link>
        </div>
      </div>
    </section>
  )
}
