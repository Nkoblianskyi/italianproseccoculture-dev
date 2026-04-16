import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata = {
  title: 'Il Prosecco — Italian Prosecco Culture',
  description: 'Tutto sul Prosecco: storia, caratteristiche, gradazione alcolica (max 12% vol.) e cultura del vino frizzante del Veneto. Contenuto puramente informativo.',
}

const characteristics = [
  { label: 'Vitigno principale', value: 'Glera (min. 85%)' },
  { label: 'Gradazione alcolica', value: 'fino a 12% vol.' },
  { label: 'Regione di produzione', value: 'Veneto, Friuli Venezia Giulia' },
  { label: 'Temperatura di servizio', value: '6 gradi C' },
  { label: 'Colore', value: 'Giallo paglierino con riflessi verdognoli' },
  { label: 'Profumo', value: 'Mela verde, pera, fiori bianchi, acacia' },
  { label: 'Sapore', value: 'Fresco, fruttato, lievemente aromatico' },
  { label: 'Stile effervescenza', value: 'Spumante (bollicine persistenti) o Frizzante' },
]

const denominations = [
  {
    name: 'Prosecco DOC',
    abv: '10.5 - 11% vol.',
    territory: 'Veneto e Friuli Venezia Giulia',
    grapes: 'Glera min. 85%',
    desc: 'La denominazione piu ampia, prodotta in un vasto territorio tra due regioni italiane. Carattere fruttato e fresco, ideale come aperitivo o accompagnamento a piatti leggeri.',
    image: '/images/type-doc.jpg',
  },
  {
    name: 'Prosecco DOCG Superiore',
    abv: 'fino a 12% vol.',
    territory: 'Conegliano Valdobbiadene (TV)',
    grapes: 'Glera min. 85%, vitigni autoctoni',
    desc: 'La versione di eccellenza, prodotta nelle storiche colline UNESCO di Conegliano e Valdobbiadene. Struttura piu complessa, con bollicine finissime e persistenti. E il Prosecco con la piu alta gradazione alcolica presente su questo sito, con un massimo del 12% vol.',
    image: '/images/type-docg.jpg',
    featured: true,
  },
  {
    name: 'Prosecco DOCG Rive',
    abv: 'fino a 11.5% vol.',
    territory: 'Singole parcelle collinari DOCG',
    grapes: 'Glera 100%',
    desc: 'Le "Rive" indicano vini da singolo vigneto o comune, con caratteristiche uniche legate al microterroir specifico. Produzione limitata, vendemmia manuale obbligatoria.',
    image: '/images/history-veneto.jpg',
  },
  {
    name: 'Prosecco Rose DOC',
    abv: 'fino a 11.5% vol.',
    territory: 'Veneto e Friuli Venezia Giulia',
    grapes: 'Glera 85-89%, Pinot Nero 10-15%',
    desc: 'Introdotto ufficialmente nel 2020, il Prosecco Rose unisce la freschezza del Glera al corpo del Pinot Nero. Colore rosa tenue, bouquet di fragola, lampone e rosa, con una piacevole acidita.',
    image: '/images/type-rose.jpg',
  },
]

export default function ProseccoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <div className="relative h-80 md:h-96 flex items-end overflow-hidden">
          <Image
            src="/images/prosecco-queen.jpg"
            alt="Il Prosecco — vino frizzante del Veneto"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-[var(--green-deep)]/70" />
          <div className="relative z-10 px-6 pb-12 max-w-7xl w-full mx-auto">
            <p className="section-label text-[var(--gold)] mb-2">Informazioni</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light italic text-white">
              Il Prosecco
            </h1>
          </div>
        </div>

        {/* Intro */}
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* ABV notice */}
            <div className="mb-12 bg-[var(--gold)]/10 border border-[var(--gold)]/40 px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="shrink-0 bg-[var(--green-deep)] px-4 py-2 text-center">
                <p className="font-sans text-[9px] tracking-widest uppercase text-[var(--gold)]">Alcol max.</p>
                <p className="font-serif text-3xl text-[var(--gold)] font-medium">12%</p>
                <p className="font-sans text-[9px] tracking-widest uppercase text-[var(--gold)]">vol.</p>
              </div>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                <strong>Il Prosecco DOCG Superiore</strong> e il vino con la gradazione alcolica piu elevata presente su questo sito,
                con un massimo del <strong>12% vol.</strong> Tutti i contenuti di questo sito sono puramente informativi.
                Nessuna vendita o acquisto viene effettuato qui. Contenuto riservato a persone di eta pari o superiore a 18 anni.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="section-label mb-4">Il vino simbolo dell&apos;Italia</p>
                <div className="divider-gold" style={{ margin: '0 0 1.5rem 0' }} />
                <h2 className="font-serif text-4xl font-light italic text-[var(--green-deep)] mb-6">
                  Cosa rende unico il Prosecco?
                </h2>
                <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Il Prosecco nasce dall&apos;uva Glera, un vitigno autoctono del Veneto che da secoli popola le colline
                    tra Conegliano e Valdobbiadene. Il suo metodo di produzione, la rifermentazione in autoclave
                    (Metodo Charmat), preserva la freschezza degli aromi primari del vitigno: mela verde, pera,
                    fiori bianchi e note agrumati.
                  </p>
                  <p>
                    A differenza di altri vini spumanti, il Prosecco non cerca complessita strutturale ma freschezza
                    e immediatezza. La sua bollicina fine e persistente, la sua acidita vivace e la sua gradazione
                    moderata, fino al massimo del 12% vol., lo rendono il compagno ideale dell&apos;aperitivo italiano.
                  </p>
                  <p>
                    Nel 2019, le colline di Conegliano e Valdobbiadene sono state dichiarate Patrimonio Mondiale
                    UNESCO, riconoscimento straordinario di un paesaggio plasmato da secoli di viticoltura eroica.
                  </p>
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <p className="section-label mb-4">Scheda tecnica</p>
                <div className="divider-gold" style={{ margin: '0 0 1.5rem 0' }} />
                <div className="divide-y divide-border">
                  {characteristics.map((c) => (
                    <div key={c.label} className="flex justify-between py-3 gap-4">
                      <span className="font-sans text-xs text-muted-foreground uppercase tracking-wide shrink-0 w-2/5">{c.label}</span>
                      <span className="font-sans text-xs text-foreground font-medium text-right">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Denominations */}
        <section className="bg-[var(--parchment)] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="section-label mb-4">Tutte le varieta</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl font-light italic text-[var(--green-deep)] mt-4">
                Le Denominazioni
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {denominations.map((d) => (
                <div
                  key={d.name}
                  className={`bg-background overflow-hidden shadow-lg ${d.featured ? 'ring-2 ring-[var(--gold)]' : ''}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={d.image} alt={d.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[var(--green-deep)]/40" />
                    <div className="absolute top-3 right-3 bg-[var(--green-deep)]/90 px-3 py-1.5">
                      <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[var(--gold)]">{d.abv}</p>
                    </div>
                    {d.featured && (
                      <div className="absolute top-3 left-3 bg-[var(--gold)] px-2 py-1">
                        <p className="font-sans text-[9px] tracking-widest uppercase text-[var(--green-deep)] font-medium">
                          Massima gradazione
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-[var(--green-deep)] font-medium mb-1">{d.name}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="font-sans text-[10px] tracking-wide uppercase text-muted-foreground">{d.territory}</span>
                      <span className="font-sans text-[10px] tracking-wide text-muted-foreground">{d.grapes}</span>
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to types */}
        <section className="bg-[var(--green-deep)] py-16 text-center">
          <p className="font-serif text-3xl italic text-[var(--gold)] mb-4">Vuoi saperne di piu?</p>
          <p className="font-sans text-sm text-white/70 mb-8 max-w-md mx-auto">
            Esplora tutti i tipi di Prosecco in dettaglio, con informazioni su gradazioni, territorio e abbinamenti.
          </p>
          <Link
            href="/tipi"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--green-deep)] transition-colors duration-300"
          >
            Tutti i tipi di Prosecco
          </Link>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
