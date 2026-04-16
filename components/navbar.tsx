'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
const navLinks = [
  { label: 'Prosecco', href: '/prosecco' },
  { label: 'Tipi', href: '/tipi' },
  { label: 'Tradizioni', href: '/#tradizioni' },
  { label: 'Pub e Birra', href: '/pub' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[var(--green-deep)]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <div className="w-px h-8 bg-[var(--gold)]/60" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[0.6rem] tracking-[0.35em] uppercase text-yellow-400 font-normal">
              Italian
            </span>
            <span className="font-serif text-lg md:text-xl font-semibold tracking-tight text-white italic mt-0.5">
              Prosecco Culture
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.15em] uppercase text-white/80 hover:text-[var(--gold)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Apri menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[var(--green-deep)] border-t border-white/10 px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-sans text-xs tracking-[0.2em] uppercase text-white/80 hover:text-[var(--gold)] border-b border-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
