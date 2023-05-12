import Image from 'next/image'
import laptop from '../../assets/laptop.png'
import { HiDocumentDownload } from 'react-icons/hi'
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

      <S.Blur>
        <Image src={laptop} alt="garoto mexendo em um computador" width={320} />
      </S.Blur>

      <S.Actions>
        <S.ActionButton>
          GitHub <FaGithub />
        </S.ActionButton>
        <S.ActionButton>
          Baixar CV <HiDocumentDownload />
        </S.ActionButton>
      </S.Actions>
    </S.Container>
  )
}
