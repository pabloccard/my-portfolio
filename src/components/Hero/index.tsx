import Image from 'next/image'
import * as S from './styles'
import { TbBrandLinkedin, TbBrandWhatsapp, TbBrandGithub } from 'react-icons/tb'
import { HiChevronRight } from 'react-icons/hi'
import { Button } from '../Button'

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
        <Image src="/profile.png" alt="" width={280} height={280} />

        <S.TextContent>
          <h1>Olá, eu sou Pablo</h1>
          <strong>Desenvolvedor front-end</strong>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam
            ratione aperiam adipisci alias ipsum sit reiciendis eius harum.
          </p>

          <Button>
            Fale comigo <HiChevronRight />
          </Button>
        </S.TextContent>
      </S.Content>
    </S.Container>
  )
}
