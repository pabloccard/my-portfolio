import { AiFillLinkedin } from 'react-icons/ai'

import * as S from './styles'
import { Menu } from '../Menu'

export const Header = () => {
  return (
    <S.Container>
      <strong>PC</strong>

      <S.NavBar>
        <a href="">Home</a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </S.NavBar>

      <S.CurriculumButton>
        <AiFillLinkedin />
        LinkedIn
      </S.CurriculumButton>

      <Menu />
    </S.Container>
  )
}

/* <S.HeaderContainer>
      
      <S.Menu>
        <S.MenuButton>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            <span>
              <HiMenuAlt3 />
            </span>
          </label>
        </S.MenuButton>

        <S.NavBar>
        <a href="">Home</a>
        <a href="">Sobre mim</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </S.NavBar>

      <S.CurriculumButton>
        <AiFillLinkedin />
        LinkedIn
      </S.CurriculumButton>
      </S.Menu>
    </S.HeaderContainer> */
