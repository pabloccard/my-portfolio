import Image from 'next/image'
import laptop from '../../assets/laptop.png'
import { FiDownload } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import * as S from './styles'

export const Banner = () => {
  return (
    <S.BannerContainer>
      <S.ContentContainer>
        <h2>Pablo Castilho</h2>
        <strong>
          desenvolvedor <span>front-end</span>
        </strong>

        <S.Links>
          <S.Butao>
            GitHub <FaGithub />
          </S.Butao>
          <S.Butao>
            Baixar CV <FiDownload />
          </S.Butao>
        </S.Links>
      </S.ContentContainer>

      <Image src={laptop} width={476} alt="garoto mexendo em um computador" />
    </S.BannerContainer>
  )
}
