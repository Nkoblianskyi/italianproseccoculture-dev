import Image from 'next/image'

const traditions = [
  {
    title: "L'Aperitivo",
    text: "Ogni giorno, tra le 18 e le 20, l'Italia si ferma per l'aperitivo. Il Prosecco e il protagonista indiscusso: un calice fresco e frizzante accompagnato da olive, bruschette e taglieri di salumi. Una ritualita sociale che unisce famiglie e amici.",
  },
  {
    title: 'Il Brindisi di Capodanno',
    text: 'In Italia, il Prosecco e il vino del brindisi per eccellenza. Ogni fine anno, milioni di calici si alzano al cielo con le bollicine del Veneto, accompagnando i fuochi d\'artificio e i buoni propositi del nuovo anno.',
  },
  {
    title: 'La Vendemmia',
    text: 'La raccolta dell\'uva Glera, a fine settembre, e una festa collettiva nelle colline venete. Le famiglie si riuniscono, le sagre animano i paesi e il profumo del mosto riempie l\'aria fresca d\'autunno.',
  },
  {
    title: 'Accompagnamento ai Piatti',
    text: 'Il Prosecco non e solo un aperitivo: accompagna perfettamente risotti, frutti di mare, formaggi freschi e dolci leggeri. La sua acidita vivace bilancia i sapori senza sovrastarli, rispettando la tradizione gastronomica veneta.',
  },
]

export default function Traditions() {
  return (
    <section id="tradizioni" className="bg-[var(--green-deep)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label text-[var(--gold)] mb-4">Cultura e ritualita</p>
          <div className="divider-gold" />
          <h2 className="font-serif text-4xl md:text-5xl font-light italic text-white mt-4 text-pretty">
            Le Tradizioni del Prosecco
          </h2>
          <p className="font-sans text-sm text-white/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Piu di un vino: il Prosecco e parte del tessuto culturale e sociale dell&apos;Italia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Traditions list */}
          <div className="space-y-8">
            {traditions.map((item, i) => (
              <div key={i} className="border-l-2 border-[var(--gold)]/50 pl-6">
                <h3 className="font-serif text-2xl font-medium italic text-[var(--gold)] mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/65 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image collage */}
          <div className="relative">
            <div className="relative aspect-square rounded overflow-hidden shadow-2xl">
              <Image
                src="/images/traditions.jpg"
                alt="Aperitivo italiano con Prosecco in piazza veneta"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--green-deep)]/30" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--gold)] p-5 max-w-xs shadow-xl">
              <p className="font-serif text-lg italic text-[var(--green-deep)] leading-snug">
                &ldquo;Il Prosecco e la gioia italiana in bottiglia.&rdquo;
              </p>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[var(--green-deep)]/70 mt-2">
                Tradizione popolare veneta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
