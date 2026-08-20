import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Challenge } from '@/components/challenge'
import { Solution } from '@/components/solution'
import { Services } from '@/components/services'
import { Technology } from '@/components/technology'
import { Impact } from '@/components/impact'
import { Methodology } from '@/components/methodology'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <Solution />
        <Services />
        <Technology />
        <Impact />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
