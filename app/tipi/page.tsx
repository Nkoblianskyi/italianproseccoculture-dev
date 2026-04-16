import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata = {
  title: 'Tipi di Prosecco — Italian Prosecco Culture',
  description: 'Scopri tutti i tipi di Prosecco italiano: DOC, DOCG, Rose, Millesimato. Gradazioni alcoliche, territori, caratteristiche. Contenuto informativo, max 12% vol.',
}

const types = [
  {
    id: 'docg',
    name: 'Prosecco DOCG Superiore',
    subtitle: 'Conegliano Valdobbiadene',
    abv: 'fino a 12% vol.',
    territory: 'Colline di Conegliano e Valdobbiadene, Treviso (TV)',
    grapes: 'Glera min. 85% + vitigni autoctoni (Verdiso, Bianchetta, Perera)',
    harvest: 'Vendemmia manuale, fine settembre',
    ageing: 'Affinamento minimo 30 giorni in autoclave',
    color: 'Giallo paglierino con riflessi verdognoli, perlage fine e persistente',
    aroma: 'Mela golden, pera Williams, mandorla, fiori di glicine, acacia',
    taste: 'Fresco, elegante, con acidita vivace e finale persistente',
    food: 'Antipasti di mare, risotto alle verdure, formaggi freschi, mousse di salmone',
    image: '/images/type-docg.jpg',
    featured: true,
    desc: 'Il Prosecco DOCG Superiore rappresenta il vertice qualitativo della denominazione. Prodotto nelle colline UNESCO di Conegliano e Valdobbiadene, in provincia di Treviso, esprime la massima complessita e finezza del vitigno Glera. Con una gradazione alcolica che raggiunge il massimo del 12% vol., e il vino piu strutturato e il piu alcolico presente su questo sito informativo.',
  },
  {
    id: 'doc',
    name: 'Prosecco DOC',
    subtitle: 'Denominazione di Origine Controllata',
    abv: '10.5 - 11% vol.',
    territory: 'Veneto e Friuli Venezia Giulia (9 province)',
    grapes: 'Glera min. 85% + altre uve autorizzate',
    harvest: 'Vendemmia meccanica o manuale, settembre-ottobre',
    ageing: 'Affinamento minimo 30 giorni',
    color: 'Giallo paglierino luminoso, perlage vivace',
    aroma: 'Mela verde, pera, pesca bianca, fiori di campo',
    taste: 'Fresco, leggero, fruttato, con piacevole effervescenza',
    food: 'Aperitivo, stuzzichini, bruschette, carpacci di pesce',
    image: '/images/type-doc.jpg',
    desc: 'Il Prosecco DOC e la versione piu diffusa e accessibile, prodotta in un ampio territorio che abbraccia le province venete e friulane. La sua freschezza lo rende il perfetto ambasciatore dell\'aperitivo italiano nel mondo.',
  },
  {
    id: 'rose',
    name: 'Prosecco Rose DOC',
    subtitle: 'Millesimato DOC Rose',
    abv: 'fino a 11.5% vol.',
    territory: 'Veneto e Friuli Venezia Giulia',
    grapes: 'Glera 85-89% + Pinot Nero 10-15%',
    harvest: 'Vendemmia manuale del Pinot Nero, agosto-settembre',
    ageing: 'Affinamento minimo 60 giorni in autoclave',
    color: 'Rosa tenue, rosa salmone, con perlage fine',
    aroma: 'Fragola, lampone, rosa, geranio, melagrana',
    taste: 'Fresco, fruttato, con leggere note vinose dal Pinot Nero',
    food: 'Tartare, sushi, formaggi erborinati, dessert ai frutti rossi',
    image: '/images/type-rose.jpg',
    desc: 'Nato ufficialmente il 1 gennaio 2020, il Prosecco Rose rappresenta l\'innovazione della denominazione. L\'aggiunta del Pinot Nero, con macerazione breve sulle bucce, dona al vino il caratteristico colore rosa e note fruttate piu intense.',
  },
  {
    id: 'rive',
    name: 'Prosecco Rive DOCG',
    subtitle: 'Vino da singola parcella collinare',
    abv: 'fino a 11.5% vol.',
    territory: 'Singoli comuni o frazioni delle colline DOCG',
    grapes: 'Glera 100%',
    harvest: 'Vendemmia manuale obbligatoria',
    ageing: 'Affinamento minimo 60 giorni, millesimato',
    color: 'Giallo dorato con perlage persistente',
    aroma: 'Espressioni uniche legate al terroir specifico',
    taste: 'Piu strutturato e complesso rispetto al DOCG standard',
    food: 'Piatti piu strutturati, risotti elaborati, cacciagione bianca',
    image: '/images/history-veneto.jpg',
    desc: 'Le "Rive" (in dialetto veneto, i pendii ripidi) identificano vini da singolo vigneto o comune. Ogni Rive porta il nome del luogo specifico di produzione, rappresentando l\'espressione piu territoriale e artigianale del Prosecco.',
  },
]

export default function TipiPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
          <Image
            src="/images/type-docg.jpg"
            alt="I tipi di Prosecco italiano"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--green-deep)]/70" />
          <div className="relative z-10 px-6 pb-12 max-w-7xl w-full mx-auto">
            <p className="section-label text-[var(--gold)] mb-2">Veneto, Italia</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light italic text-white">
              I Tipi di Prosecco
            </h1>
          </div>
        </div>

        {/* Intro + ABV notice */}
        <section className="bg-background py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 bg-[var(--gold)]/10 border border-[var(--gold)]/40 px-6 py-4">
              <p className="font-sans text-xs text-foreground leading-relaxed">
                <strong>Nota sulla gradazione alcolica:</strong> Il Prosecco DOCG Superiore rappresenta il vino con la
                gradazione piu elevata presente su questo sito, con un massimo del <strong>12% vol.</strong>
                Tutti i contenuti sono informativi. Nessuna vendita. Solo per persone di eta pari o superiore a 18 anni.
              </p>
            </div>

            <div className="text-center mb-16">
              <p className="section-label mb-4">Dalla DOC alla DOCG</p>
              <div className="divider-gold" />
              <p className="font-sans text-sm text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
                Ogni denominazione racconta un territorio, una storia e un&apos;identita diversa.
                Il livello qualitativo cresce dalla DOC alla DOCG, fino alle selezioni da singola parcella.
              </p>
            </div>
          </div>
        </section>

        {/* Types detail */}
        {types.map((type, i) => (
          <section
            key={type.id}
            id={type.id}
            className={`py-20 ${i % 2 === 0 ? 'bg-[var(--parchment)]' : 'bg-background'}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] rounded overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <Image src={type.image} alt={type.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[var(--green-deep)]/20" />
                  <div className="absolute top-4 right-4 bg-[var(--green-deep)]/95 text-center px-4 py-3">
                    <p className="font-sans text-[9px] tracking-widest uppercase text-[var(--gold)]">Alcol</p>
                    <p className="font-serif text-xl text-[var(--gold)] font-medium">{type.abv}</p>
                  </div>
                  {type.featured && (
                    <div className="absolute bottom-0 left-0 right-0 bg-[var(--gold)] py-2 px-4 text-center">
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--green-deep)] font-medium">
                        Massima gradazione alcolica del sito
                      </p>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-1">{type.subtitle}</p>
                  <h2 className="font-serif text-4xl font-medium text-[var(--green-deep)] mb-4">{type.name}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{type.desc}</p>

                  {/* Specs grid */}
                  <div className="grid grid-cols-1 gap-0 mb-6 border border-border divide-y divide-border">
                    {[
                      { label: 'Gradazione alcolica', value: type.abv },
                      { label: 'Territorio', value: type.territory },
                      { label: 'Vitigni', value: type.grapes },
                      { label: 'Vendemmia', value: type.harvest },
                      { label: 'Colore', value: type.color },
                      { label: 'Profumo', value: type.aroma },
                      { label: 'Gusto', value: type.taste },
                      { label: 'Abbinamenti', value: type.food },
                    ].map((spec) => (
                      <div key={spec.label} className="flex gap-4 px-4 py-3">
                        <span className="font-sans text-[10px] uppercase tracking-wide text-muted-foreground shrink-0 w-36">{spec.label}</span>
                        <span className="font-sans text-xs text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
