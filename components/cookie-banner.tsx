'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--green-deep)] border-t border-[var(--gold)]/40 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-sans text-xs text-white/80 leading-relaxed max-w-2xl">
          Questo sito utilizza cookie tecnici necessari per il corretto funzionamento e cookie analitici
          per migliorare la tua esperienza. Per maggiori informazioni consulta la nostra{' '}
          <Link href="/cookie-policy" className="text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)] transition-colors">
            Cookie Policy
          </Link>{' '}
          e la{' '}
          <Link href="/privacy-policy" className="text-[var(--gold)] underline underline-offset-2 hover:text-[var(--gold-light)] transition-colors">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="font-sans text-xs tracking-widest uppercase px-4 py-2 border border-white/30 text-white/70 hover:border-white/60 hover:text-white transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs tracking-widest uppercase px-5 py-2 bg-[var(--gold)] text-[var(--green-deep)] font-medium hover:bg-[var(--gold-light)] transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
