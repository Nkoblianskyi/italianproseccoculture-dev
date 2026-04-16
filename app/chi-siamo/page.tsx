'use client'

import Image from 'next/image'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export default function ChiSiamoPage() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    messaggio: '',
    privacy: false,
    eta18: false,
  })
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.privacy || !form.eta18) {
      setError('Accetta le condizioni per procedere.')
      return
    }
    setError('')
    setSending(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
          <Image
            src="/images/about-veneto.jpg"
            alt="Colline del Veneto, patrimonio UNESCO"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--green-deep)]/65" />
          <div className="relative z-10 px-6 pb-12 max-w-7xl w-full mx-auto">
            <p className="section-label text-[var(--gold)] mb-2">Il nostro progetto</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light italic text-white">
              Chi Siamo
            </h1>
          </div>
        </div>

        {/* About content */}
        <section className="bg-background py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="section-label mb-4">La nostra missione</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl font-light italic text-[var(--green-deep)] mt-4 mb-6">
                Italian Prosecco Culture
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Siamo un progetto editoriale dedicato alla promozione culturale e informativa del Prosecco
                e della tradizione vinicola italiana. Il nostro obiettivo e diffondere conoscenza, rispetto
                e consapevolezza attorno a una delle eccellenze piu celebri del Veneto e dell&apos;Italia intera.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { title: 'Solo contenuti informativi', desc: 'Questo sito non vende ne acquista alcun prodotto alcolico. Offriamo esclusivamente informazioni culturali, storiche e gastronomiche.' },
                { title: 'Consumo responsabile', desc: 'Promuoviamo una cultura del consumo responsabile e consapevole. Il Prosecco va degustato con piacere e moderazione.' },
                { title: 'Solo per maggiorenni', desc: 'I nostri contenuti sono strettamente riservati a persone di eta pari o superiore ai 18 anni. Accedendo al sito dichiari di rispettare questo requisito.' },
                { title: 'Gradazione max 12% vol.', desc: 'Il Prosecco DOCG Superiore, con una gradazione massima del 12% vol., e il prodotto con il piu alto contenuto alcolico trattato su questo sito.' },
              ].map((v) => (
                <div key={v.title} className="bg-[var(--parchment)] p-6 border-l-2 border-[var(--gold)]">
                  <h3 className="font-serif text-lg font-medium text-[var(--green-deep)] mb-2">{v.title}</h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="bg-[var(--parchment)] py-20">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="section-label mb-4">Contattaci</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-4xl font-light italic text-[var(--green-deep)] mt-4">
                Scrivici
              </h2>
              <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
                Per domande, segnalazioni o collaborazioni editoriali, compila il modulo qui sotto.
                Risponderemo al tuo indirizzo email.
              </p>
              <p className="font-sans text-xs text-[var(--green-mid)] mt-2 tracking-wide">
                info@italianproseccoculture.com
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 bg-background p-8 shadow-lg">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Nome e Cognome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full bg-[var(--parchment)] border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
                  placeholder="Mario Rossi"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Indirizzo Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[var(--parchment)] border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
                  placeholder="mario@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="messaggio" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  required
                  rows={5}
                  value={form.messaggio}
                  onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                  className="w-full bg-[var(--parchment)] border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                  placeholder="Scrivi il tuo messaggio..."
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 border-t border-border pt-5">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.eta18}
                    onChange={(e) => setForm({ ...form, eta18: e.target.checked })}
                    className="mt-0.5 accent-[var(--green-deep)] w-4 h-4 shrink-0"
                  />
                  <span className="font-sans text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    Dichiaro di avere almeno <strong className="text-foreground">18 anni</strong> e di essere consapevole che questo sito contiene contenuti informativi sull&apos;alcol.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.privacy}
                    onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                    className="mt-0.5 accent-[var(--green-deep)] w-4 h-4 shrink-0"
                  />
                  <span className="font-sans text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    Ho letto e accetto la{' '}
                    <a href="/privacy-policy" className="text-[var(--green-mid)] underline underline-offset-2 hover:text-[var(--green-deep)]">
                      Privacy Policy
                    </a>{' '}
                    e autorizzo il trattamento dei dati personali per rispondere alla mia richiesta.
                  </span>
                </label>
              </div>

              {error && (
                <p className="font-sans text-xs text-red-600">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full font-sans text-xs tracking-[0.2em] uppercase px-6 py-4 bg-[var(--green-deep)] text-[var(--gold)] hover:bg-[var(--green-mid)] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Invio in corso...' : 'Invia Messaggio'}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Success popup */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-background max-w-md w-full p-8 text-center shadow-2xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-[var(--green-deep)] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--gold)]">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl italic text-[var(--green-deep)] mb-3">
              Messaggio inviato
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
              Grazie per averci contattato. Risponderemo alla tua email il prima possibile.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-3 bg-[var(--green-deep)] text-[var(--gold)] hover:bg-[var(--green-mid)] transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      <Footer />
      <CookieBanner />
    </>
  )
}
