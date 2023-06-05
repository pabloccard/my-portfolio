import { About } from '@/components/about-section'
import { Contact } from '@/components/contact-section'
import { Footer } from '@/components/footer-section'
import { Hero } from '@/components/hero-section'
import { Projects } from '@/components/projects-section'
import { Techs } from '@/components/techs-section'
import { HomeContainer } from '@/styles/home'

export default function Home() {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Techs />
      <Projects />
      <Contact />
      <Footer />
    </HomeContainer>
  )
}
