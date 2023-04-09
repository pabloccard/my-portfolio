import * as S from './styles'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'
import { AiFillLinkedin } from 'react-icons/ai'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.MenuButton onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <IoCloseSharp /> : <HiMenuAlt3 />}
      </S.MenuButton>

      <S.Menu menuIsOpen={isOpen}>
        <S.NavBar>
          <ul>
            <li className="active">
              <a href="">Início</a>
            </li>
            <li>
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <S.CurriculumButton>
                <AiFillLinkedin />
                LinkedIn
              </S.CurriculumButton>
            </li>
          </ul>
        </S.NavBar>
      </S.Menu>
    </S.Container>
  )
}
