import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Techs } from '@/components/Techs'
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
