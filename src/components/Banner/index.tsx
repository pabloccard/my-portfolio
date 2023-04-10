import Image from 'next/image'
import laptop from '../../assets/laptop.png'
import { FiDownload } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import * as S from './styles'

export const Banner = () => {
  return (
    <S.Container>
      <S.Content>
        <h2>Pablo Castilho</h2>
        <strong>
          desenvolvedor <span>front-end</span>
        </strong>
      </S.Content>

      <Image src={laptop} alt="garoto mexendo em um computador" width={320} />

      <S.Actions>
        <S.ActionButton>
          GitHub <FaGithub />
        </S.ActionButton>
        <S.ActionButton>
          Baixar CV <FiDownload />
        </S.ActionButton>
      </S.Actions>
    </S.Container>
  )
}
