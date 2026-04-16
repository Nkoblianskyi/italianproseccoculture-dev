import Image from 'next/image'
import Link from 'next/link'

const beers = [
  { name: 'Birra Chiara', abv: '4.5% vol.', desc: 'Leggera, dorata, dal gusto fresco e dissetante. La tipologia piu diffusa nei pub italiani.' },
  { name: 'Birra Ambrata', abv: '5.5% vol.', desc: 'Note caramellate e maltate con un finale morbido e avvolgente. Tipica del nord Italia.' },
  { name: 'Birra di Frumento', abv: '5.0% vol.', desc: 'Torbida, cremosa, con sentori di agrumi e spezie. La weizen italiana in versione artigianale.' },
  { name: 'IPA Italiana', abv: '6.2% vol.', desc: 'Luppolata e aromatica, con sentori di frutta tropicale. Prodotta dalle microbirrerie del nord.' },
  { name: 'Birra Scura', abv: '5.8% vol.', desc: 'Stout artigianale con note di torrefazione, cioccolato e caffe. Corpo pieno e vellutato.' },
  { name: 'Birra di Abbazia', abv: '6.5% vol.', desc: 'Ispirata alla tradizione monastica belga, prodotta in Italia con malti speciali e lieviti aromatici.' },
]

const lowAlcohol = [
  { name: 'Spritz Veneto', abv: '8% vol.', desc: 'Il cocktail simbolo dell\'aperitivo italiano. Vino bianco frizzante, bitter e acqua frizzante su ghiaccio.' },
  { name: 'Sidro di Mele', abv: '4.5% vol.', desc: 'Sidro fermentato di mele italiane, fresco e leggermente dolce. In crescita nei pub del nord Italia.' },
  { name: 'Radler', abv: '2.5% vol.', desc: 'Birra miscelata con succo di limone o arancia. Fresca, dissetante, ideale per l\'estate italiana.' },
  { name: 'Vino della Casa', abv: '11% vol.', desc: 'Il classico vino sfuso locale servito al bicchiere. Ogni regione propone la propria varieta tipica.' },
]

const pubKinds = [
  {
    name: 'Osteria tradizionale',
    desc: 'Tavoli di legno, vino della casa e cucina di territorio: spesso qui trovi anche birra locale o bottiglie artigianali scelte dal gestore. E il posto dove la convivialita italiana incontra la birra senza snaturare l\'identita del locale.',
    image: '/images/pubs-beer.jpg',
    alt: 'Interno osteria italiana con birre',
  },
  {
    name: 'Birreria artigianale',
    desc: 'Produttori e appassionati propongono birre proprie o selezioni curate, spesso con degustazioni e abbinamenti al cibo. Il nord e particolarmente vivace, ma microbirrifici e tap room crescono in tutta la penisola.',
    image: '/images/pub-exterior.jpg',
    alt: 'Esterno birreria artigianale italiana',
  },
  {
    name: 'Irish pub all\'italiana',
    desc: 'Legno scuro, birre alla spina internazionali e italiane, musica dal vivo: un modello anglosassone filtrato dal gusto locale. Molti locali alternano serate sportive, concerti acustici e aperitivi all\'italiana.',
    image: '/images/pubs-beer.jpg',
    alt: 'Pub in stile irlandese in Italia',
  },
]

export default function PubsPreview() {
  return (
    <section className="bg-[var(--cream)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Cultura birraria italiana</p>
          <div className="divider-gold mx-auto" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="font-serif text-4xl md:text-5xl font-light italic text-[var(--green-deep)] leading-tight text-pretty">
            Pub, Birra e Bevande Italiane
          </h2>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-3xl mx-auto mt-6">
            Accanto alla grande tradizione del vino, l&apos;Italia vanta una vivace cultura birraria e dell&apos;aperitivo.
            Dai pub storici nelle piazze alle moderne birrerie artigianali, ogni bicchiere racconta un territorio.
            La birra alla spina e in crescita: temperature di servizio, bicchieri e stili — da lager dissetante a IPA luppolate —
            vengono spiegati sempre piu spesso nei menu e dagli staff, avvicinando il pubblico al mondo del malto e del luppolo.
          </p>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-3xl mx-auto mt-4">
            I pub e le osterie restano luoghi di incontro: dopo lavoro, partite in tv, concerti o semplicemente una pizza con
            amici. Ogni regione interpreta il locale a modo suo, mescolando tradizione gastronomica italiana e influenze
            europee senza rinunciare al cibo di qualita servito al tavolo o al bancone.
          </p>
        </div>

        {/* Pub types */}
        <div className="mb-20">
          <h3 className="font-serif text-xl font-medium italic text-[var(--green-deep)] mb-6 border-l-2 border-[var(--gold)] pl-4">
            Dove bere birra in Italia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pubKinds.map((pub) => (
              <article
                key={pub.name}
                className="bg-background border border-border overflow-hidden shadow-sm flex flex-col"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={pub.image} alt={pub.alt} fill className="object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-serif text-lg font-medium text-[var(--green-deep)] mb-2">{pub.name}</h4>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed flex-1">{pub.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Birre grid */}
        <div className="mb-6">
          <h3 className="font-serif text-xl font-medium italic text-[var(--green-deep)] mb-3 border-l-2 border-[var(--gold)] pl-4">
            Birre — dalla chiara alla scura
          </h3>
          <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-3xl mb-6 pl-4 md:pl-6 border-l border-border ml-1">
            Sotto trovi uno sguardo rapido agli stili piu incontrati al bancone. Nella pagina dedicata approfondiamo colore,
            aroma, temperatura di servizio, bicchiere consigliato e abbinamenti con la cucina italiana.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {beers.map((beer, i) => (
              <div
                key={beer.name}
                className="p-6 border-border flex flex-col gap-2"
                style={{ borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--border)' : undefined, borderBottom: i < 3 ? '1px solid var(--border)' : undefined }}
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-serif text-base font-medium text-[var(--green-deep)]">{beer.name}</h4>
                  <span className="font-sans text-[9px] tracking-widest uppercase bg-[var(--gold)]/20 text-[var(--green-deep)] px-2 py-0.5 shrink-0">
                    {beer.abv}
                  </span>
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{beer.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Low alcohol + image row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-14">

          <div>
            <h3 className="font-serif text-xl font-medium italic text-[var(--green-deep)] mb-6 border-l-2 border-[var(--gold)] pl-4">
              Bevande a bassa gradazione
            </h3>
            <div className="divide-y divide-border border border-border">
              {lowAlcohol.map((drink) => (
                <div key={drink.name} className="flex gap-4 items-start p-5">
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-1.5" />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-serif text-sm font-medium text-[var(--green-deep)]">{drink.name}</h4>
                      <span className="font-sans text-[9px] tracking-widest uppercase bg-[var(--gold)]/20 text-[var(--green-deep)] px-2 py-0.5">
                        {drink.abv}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{drink.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images stacked */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/pubs-beer.jpg"
                alt="Pub italiano con birre artigianali"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/spritz.jpg"
                alt="Spritz Veneto aperitivo italiano"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/pub"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-[var(--green-deep)] text-[var(--gold)] hover:bg-[var(--green-mid)] transition-colors duration-300"
          >
            Scopri tutti i pub e le birre
          </Link>
        </div>

      </div>
    </section>
  )
}
