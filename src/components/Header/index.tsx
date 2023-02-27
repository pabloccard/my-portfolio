import Image from 'next/image'
import logo from '../../assets/logo.svg'
import { FaGithub } from 'react-icons/fa'
import { HeaderContainer, NavBar, CurriculumButton } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={logo} alt="logo" height={50} />
      <NavBar>
        <a href="">Home</a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </NavBar>
      <CurriculumButton>
        Github <FaGithub />{' '}
      </CurriculumButton>
    </HeaderContainer>
  )
}
