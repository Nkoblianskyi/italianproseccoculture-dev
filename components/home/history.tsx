import Image from 'next/image'

const timeline = [
  {
    period: 'Origini antiche',
    date: 'I sec. d.C.',
    text: 'I Romani conoscevano gia i vini frizzanti del Veneto. Le colline tra Conegliano e Valdobbiadene erano abitate da popolazioni celtiche e venetiche che coltivavano la vite.',
  },
  {
    period: 'Medioevo',
    date: 'XIII sec.',
    text: 'I monasteri benedettini del Veneto perfezionano la coltivazione della Glera, il vitigno base del Prosecco. La tradizione vinicola diventa patrimonio culturale della regione.',
  },
  {
    period: 'Rinascimento',
    date: 'XVI sec.',
    text: 'Il vino "Prosecco" viene citato per la prima volta in documenti storici veneziani. Nasce come vino tranquillo, apprezzato dalla nobilia della Serenissima Repubblica di Venezia.',
  },
  {
    period: 'Era moderna',
    date: 'XIX sec.',
    text: 'Conegliano ospita la prima Scuola Enologica d&apos;Italia. Si sviluppano le tecniche di rifermentazione in autoclave, che daranno al Prosecco le sue celebri bollicine fini e persistenti.',
  },
  {
    period: 'Riconoscimento',
    date: '2009 / 2019',
    text: 'Il Prosecco ottiene la tutela DOC e la DOCG. Nel 2019 le colline del Prosecco di Conegliano e Valdobbiadene vengono iscritte nel Patrimonio Mondiale UNESCO.',
  },
]

export default function History() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Dalle origini a oggi</p>
          <div className="divider-gold" />
          <h2 className="font-serif text-4xl md:text-5xl font-light italic text-[var(--green-deep)] mt-4 text-pretty">
            La Storia del Prosecco
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 pb-8 relative">
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-3.5 top-7 bottom-0 w-px bg-[var(--gold)]/30" />
                )}
                {/* Dot */}
                <div className="shrink-0 w-7 h-7 rounded-full bg-[var(--green-deep)] border-2 border-[var(--gold)] flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-0.5">{item.date}</p>
                  <p className="font-serif text-lg font-medium text-[var(--green-deep)] mb-1.5">{item.period}</p>
                  <p
                    className="font-sans text-sm text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="sticky top-24">
            <div className="relative aspect-[4/5] rounded overflow-hidden shadow-2xl">
              <Image
                src="/images/history-veneto.jpg"
                alt="Cantina storica nel Veneto con botti di invecchiamento"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--green-deep)]/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[var(--green-deep)]/80">
                <p className="font-serif text-lg italic text-[var(--gold)]">
                  &ldquo;Il Prosecco non e solo un vino. E una filosofia di vita.&rdquo;
                </p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-white/50 mt-2">
                  Tradizione Veneta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
