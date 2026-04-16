import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Italian Prosecco Culture',
  description:
    'Discover the authentic culture of Italian Prosecco — the sparkling wine from the Veneto region. Informational content only. For persons aged 18 and over. Maximum alcohol content on this site: 12% ABV.',
  keywords: [
    'Prosecco',
    'Italian wine',
    'Veneto',
    'sparkling wine',
    'Italian culture',
    'aperitivo',
  ],
  openGraph: {
    title: 'Italian Prosecco Culture',
    description:
      'Discover the authentic culture of Prosecco — the sparkling wine of Veneto, Italy.',
    url: 'https://italianproseccoculture.com',
    siteName: 'Italian Prosecco Culture',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
