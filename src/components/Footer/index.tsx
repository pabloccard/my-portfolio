import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Info>
            <h2>Pablo</h2>
            <span>Desenvolvedor front-end</span>
          </S.Info>

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
      </S.Wrapper>
    </S.Container>
  )
}
