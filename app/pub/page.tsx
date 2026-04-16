import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata = {
  title: 'Pub e Birra Italiana — Italian Prosecco Culture',
  description: 'Scopri la cultura dei pub italiani e le tipologie di birra artigianale. Gradazioni alcoliche, stili e tradizioni birrarie in Italia. Contenuto informativo.',
}

const beerTypes = [
  {
    name: 'Birra Chiara Lager',
    abv: '4.5% vol.',
    style: 'Lager / Pilsner',
    color: 'Giallo paglierino, limpido',
    aroma: 'Cereali, luppolo floreale, note leggere di agrumi',
    taste: 'Leggero, dissetante, leggermente amaro nel finale',
    temp: '4 gradi C',
    glass: 'Pinta o calice tulipano',
    food: 'Pizza, pasta, frittura di pesce, formaggi freschi',
    image: '/images/beer-craft.jpg',
    desc: 'La Lager e la birra piu consumata in Italia. Leggera, dorata, perfetta per le calde serate estive nei pochi pub italiani. La sua freschezza la rende un accompagnamento versatile per i piatti della tradizione italiana.',
  },
  {
    name: 'Birra Rossa Ambrata',
    abv: '5.5% vol.',
    style: 'Amber Ale / Red Ale',
    color: 'Ambrato-rosso, lievemente velato',
    aroma: 'Caramello, pane tostato, frutta secca, luppolo resinoso',
    taste: 'Morbido, maltato, con equilibrio tra dolcezza e amaro',
    temp: '8 gradi C',
    glass: 'Pinta inglese o nonik',
    food: 'Carne arrosto, formaggi stagionati, salumi, funghi porcini',
    image: '/images/beer-craft.jpg',
    desc: 'Le birre ambrate e rosse hanno trovato grande apprezzamento nel nord Italia, dove la tradizione gastronomica ricca di sapori si sposa perfettamente con la complessita maltata di questi stili.',
  },
  {
    name: 'Birra Artigianale IPA',
    abv: '6.5% vol.',
    style: 'India Pale Ale',
    color: 'Giallo ambrato, velato',
    aroma: 'Luppolo tropicale, agrumi, resina, frutto della passione',
    taste: 'Amaro prominente, fruttato, con corpo medio e finale lungo',
    temp: '10 gradi C',
    glass: 'Calice IPA o tulipano',
    food: 'Cucina speziata, formaggi forti, burger artigianale, tacos',
    image: '/images/beer-dark.jpg',
    desc: 'Il movimento della birra artigianale italiana ha abbracciato l\'IPA con entusiasmo. Le microbirrerie del Veneto, Lombardia e Toscana producono versioni uniche che interpretano lo stile americano con ingredienti locali.',
  },
  {
    name: 'Birra Scura Stout',
    abv: '5.8% vol.',
    style: 'Stout / Porter',
    color: 'Bruno scuro, quasi nero, schiuma beige',
    aroma: 'Cioccolato fondente, caffe, orzo tostato, liquirizia',
    taste: 'Pieno, avvolgente, con note tostate e finale secco',
    temp: '12 gradi C',
    glass: 'Pinta nonic o calice ampio',
    food: 'Selvaggina, brasati, formaggi erborinati, dolci al cioccolato',
    image: '/images/beer-dark.jpg',
    desc: 'Le birre scure rappresentano la scelta invernale per eccellenza nei pub italiani. Ricche e corpose, si prestano a interessanti abbinamenti con i formaggi italiani piu stagionati e i piatti della tradizione montana.',
  },
  {
    name: 'Birra di Frumento',
    abv: '5.2% vol.',
    style: 'Weizen / Blanche',
    color: 'Giallo oro, torbido, schiuma bianca abbondante',
    aroma: 'Banana, chiodi di garofano, agrumi, lievito fresco',
    taste: 'Morbido, rotondo, con effervescenza vivace',
    temp: '6 gradi C',
    glass: 'Weizen (alto e svasato)',
    food: 'Pesce alla griglia, insalate, pasta fredda, verdure',
    image: '/images/beer-craft.jpg',
    desc: 'La birra di frumento, in stile tedesco o belga, e diventata popolarissima nei pub italiani negli ultimi anni. La sua leggerezza e la sua effervescenza la rendono ideale per i mesi estivi.',
  },
]

const pubTypes = [
  {
    name: 'Osteria Tradizionale',
    desc: 'L\'osteria italiana e il luogo dell\'incontro autentico. Tavoli di legno, vino della casa e piatti della tradizione. Spesso serve anche birra locale e qualche bottiglia artigianale selezionata. Atmosfera familiare e conviviale.',
    image: '/images/pubs-beer.jpg',
  },
  {
    name: 'Birreria Artigianale',
    desc: 'Le moderne birrerie artigianali italiane uniscono la passione per la birra di qualita con l\'estetica contemporanea. Spesso propongono birre prodotte in proprio, food pairing curato e una selezione di etichette nazionali e internazionali.',
    image: '/images/pub-exterior.jpg',
  },
  {
    name: 'Irish Pub all\'Italiana',
    desc: 'Il pub in stile irlandese ha trovato una sua identita specifica in Italia. Legno scuro, atmosfera accogliente, birre alla spina di qualita e musica live. Una via di mezzo tra tradizione anglosassone e calore mediterraneo.',
    image: '/images/pubs-beer.jpg',
  },
]

export default function PubPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
          <Image
            src="/images/pubs-beer.jpg"
            alt="Pub italiano con birra artigianale"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--charcoal)]/70" />
          <div className="relative z-10 px-6 pb-12 max-w-7xl w-full mx-auto">
            <p className="section-label text-[var(--gold)] mb-2">Cultura birraria italiana</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light italic text-white">
              Pub e Birra in Italia
            </h1>
          </div>
        </div>

        {/* Intro */}
        <section className="bg-background py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 bg-[var(--gold)]/10 border border-[var(--gold)]/40 px-6 py-4">
              <p className="font-sans text-xs text-foreground leading-relaxed">
                <strong>Nota:</strong> Le gradazioni alcoliche indicate sono quelle tipiche per ciascun stile.
                Il Prosecco DOCG Superiore resta il prodotto con la massima gradazione presente su questo sito
                (fino a <strong>12% vol.</strong>). Tutti i contenuti sono informativi. Solo per persone di eta pari
                o superiore a 18 anni.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-4">Una tradizione in crescita</p>
                <div className="divider-gold" style={{ margin: '0 0 1.5rem 0' }} />
                <h2 className="font-serif text-4xl font-light italic text-[var(--green-deep)] mb-6">
                  La Cultura Birraria Italiana
                </h2>
                <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Sebbene l&apos;Italia sia universalmente nota come patria del vino, la cultura della birra
                    ha radici solide e sta vivendo una rinascita straordinaria. Il movimento delle
                    microbirrerie artigianali, nato negli anni Novanta, ha trasformato il panorama birrario
                    italiano, portando qualita, creativita e identita territoriale in ogni bicchiere.
                  </p>
                  <p>
                    I pub italiani occupano un ruolo sociale importante: luoghi di aggregazione dove si
                    condivide una serata, si gioca a carte, si ascolta musica. Dal nord al sud, ogni regione
                    ha la sua interpretazione del pub, sempre con un occhio alla tradizione gastronomica locale.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-xl">
                <Image src="/images/pub-exterior.jpg" alt="Pub italiano in serata" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Pub types */}
        <section className="bg-[var(--parchment)] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="section-label mb-4">Dove si beve in Italia</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl font-light italic text-[var(--green-deep)] mt-4">
                Tipologie di Locali
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pubTypes.map((pub) => (
                <div key={pub.name} className="bg-background overflow-hidden shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={pub.image} alt={pub.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[var(--green-deep)]/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-[var(--green-deep)] mb-3">{pub.name}</h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{pub.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beer types */}
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="section-label mb-4">Guida agli stili</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl font-light italic text-[var(--green-deep)] mt-4">
                Le Birre nei Pub Italiani
              </h2>
              <p className="font-sans text-sm text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                Ogni stile birrario racconta una tradizione. Scopri le caratteristiche e le gradazioni alcoliche delle birre piu diffuse in Italia.
              </p>
            </div>

            <div className="space-y-12">
              {beerTypes.map((beer, i) => (
                <div
                  key={beer.name}
                  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-12 ${
                    i < beerTypes.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg">
                    <Image src={beer.image} alt={beer.name} fill className="object-cover" />
                    <div className="absolute top-3 right-3 bg-[var(--green-deep)]/95 px-3 py-2 text-center">
                      <p className="font-sans text-[9px] tracking-widest uppercase text-[var(--gold)]">Alcol</p>
                      <p className="font-serif text-xl text-[var(--gold)] font-medium">{beer.abv}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="font-serif text-2xl text-[var(--green-deep)] font-medium">{beer.name}</h3>
                      <span className="font-sans text-[10px] tracking-widest uppercase bg-[var(--gold)]/20 text-[var(--green-deep)] px-2 py-1">
                        {beer.style}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">{beer.desc}</p>

                    <div className="grid grid-cols-2 gap-0 border border-border divide-y divide-border">
                      {[
                        { label: 'Gradazione', value: beer.abv },
                        { label: 'Colore', value: beer.color },
                        { label: 'Profumo', value: beer.aroma },
                        { label: 'Gusto', value: beer.taste },
                        { label: 'Temperatura', value: beer.temp },
                        { label: 'Bicchiere', value: beer.glass },
                        { label: 'Abbinamenti', value: beer.food },
                      ].map((spec, j) => (
                        <div
                          key={spec.label}
                          className={`px-4 py-2.5 flex gap-3 ${j % 2 !== 0 ? 'border-l border-border' : ''}`}
                        >
                          <span className="font-sans text-[10px] uppercase tracking-wide text-muted-foreground shrink-0 w-20">{spec.label}</span>
                          <span className="font-sans text-xs text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
