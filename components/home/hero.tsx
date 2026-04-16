import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-vineyard.jpg"
        alt="Vigneti del Veneto al tramonto"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--green-deep)]/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="section-label text-[var(--gold)] mb-6">Veneto, Italia</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light italic text-white leading-tight mb-6 text-pretty">
          La Cultura del Prosecco Italiano
        </h1>
        <p className="font-sans text-sm md:text-base text-white/75 leading-relaxed max-w-xl mx-auto mb-10 tracking-wide">
          Il simbolo dello stile di vita italiano, nato tra le colline del Veneto.
          Scopri la storia, le tradizioni e i sapori di questo straordinario vino frizzante.
        </p>

        {/* 18+ Disclaimer */}
        <div className="inline-block border border-[var(--gold)]/60 px-6 py-4 max-w-lg mx-auto bg-black/40 backdrop-blur-md">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] mb-2">
            Avviso importante
          </p>
          <p className="font-sans text-xs text-white/70 leading-relaxed">
            Questo sito contiene contenuti informativi sull&apos;alcol.
            Accedendo dichiari di avere <strong className="text-white">almeno 18 anni</strong>.
            Nessun prodotto viene venduto o acquistato qui.
            Consuma alcol in modo responsabile.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40">Scorri</span>
        <div className="w-px h-12 bg-[var(--gold)]/50 animate-pulse" />
      </div>
    </section>
  )
}
