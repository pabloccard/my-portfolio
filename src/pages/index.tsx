import { About } from '@/components/About'
import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { HomeContainer } from '@/styles/home'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <About />
      <Projects />
    </HomeContainer>
  )
}
