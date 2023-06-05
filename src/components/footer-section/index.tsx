import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import * as S from './styles'
import { Wrapper } from '../section-wrapper'
import { SectionTitle } from '../section-title'

export const Footer = () => {
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <SectionTitle title="Pablo" subtitle="desenvolvedor front-end" />

          <S.SocialBar>
            <a href="">
              <TbBrandWhatsapp />
            </a>
            <a href="">
              <TbBrandLinkedin />
            </a>
            <a href="">
              <TbBrandGithub />
            </a>
          </S.SocialBar>
        </S.Content>
      </Wrapper>
    </S.Container>
  )
}
