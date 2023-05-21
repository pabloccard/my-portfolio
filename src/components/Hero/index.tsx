import Image from 'next/image'
import * as S from './styles'
import { TbBrandLinkedin, TbBrandWhatsapp, TbBrandGithub } from 'react-icons/tb'
import { HiChevronRight } from 'react-icons/hi'

export const Hero = () => {
  return (
    <S.Container>
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

      <S.Content>
        <Image src="/profile-pic.png" alt="" width={320} height={320} />

        <S.TextContent>
          <h1>Olá, eu sou Pablo</h1>
          <strong>Desenvolvedor front-end</strong>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam
            ratione aperiam adipisci alias ipsum sit reiciendis eius harum.
          </p>

          <button>
            Fale comigo <HiChevronRight />
          </button>
        </S.TextContent>
      </S.Content>
    </S.Container>
  )
}
