import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import Hero from '@/components/home/hero'
import ProseccoQueen from '@/components/home/prosecco-queen'
import History from '@/components/home/history'
import TypesPreview from '@/components/home/types-preview'
import Traditions from '@/components/home/traditions'
import PubsPreview from '@/components/home/pubs-preview'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProseccoQueen />
        <History />
        <TypesPreview />
        <Traditions />
        <PubsPreview />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
