import Image from 'next/image'
import manProgramming from '../../assets/man-programming.png'
import css from '../../assets/icons/css.svg'
import git from '../../assets/icons/git.svg'
import html from '../../assets/icons/html.svg'
import react from '../../assets/icons/react.svg'
import javascript from '../../assets/icons/javascript.svg'
import jest from '../../assets/icons/jest.svg'
import typescript from '../../assets/icons/typescript.svg'
import { BannerContainer, TechsContainer, ContentContainer } from './styles'

export const Banner = () => {
  return (
    <BannerContainer>
      <ContentContainer>
        <span>Olá, sou</span>
        <h2>Pablo Castilho</h2>
        <span>DESENVOLVEDOR FRONT-END</span>
        <TechsContainer>
          <Image src={html} height={24} alt="" />
          <Image src={css} height={24} alt="" />
          <Image src={javascript} height={24} alt="" />
          <Image src={typescript} height={24} alt="" />
          <Image src={react} height={24} alt="" />
          <Image src={jest} height={24} alt="" />
          <Image src={git} height={24} alt="" />
        </TechsContainer>
      </ContentContainer>

      <Image
        src={manProgramming}
        height={380}
        alt="garoto mexendo em um computador"
      />
    </BannerContainer>
  )
}
