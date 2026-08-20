import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Challenge } from '@/components/challenge'
import { CorporateSolutions } from '@/components/corporate-solutions'
import { OurSolution } from '@/components/our-solution'
import { Services } from '@/components/services'
import { PatientPlatform } from '@/components/patient-platform'
import { About } from '@/components/about'
import { Competencies } from '@/components/competencies'
import { OperationsBase } from '@/components/operations-base'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <CorporateSolutions />
        <OurSolution />
        <Services />
        <PatientPlatform />
        <About />
        <Competencies />
        <OperationsBase />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
