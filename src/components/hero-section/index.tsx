import * as S from './styles'
import { TbBrandLinkedin, TbBrandWhatsapp, TbBrandGithub } from 'react-icons/tb'
import { HiChevronRight } from 'react-icons/hi'
import { Button } from '../button'
import { Wrapper } from '../section-wrapper'

export const Hero = () => {
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.RowContainer>
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
            {/* <Image src="/blob.svg" alt="" width={280} height={280} /> */}
            <svg
              viewBox="63 53 67 77"
              xmlns="http://www.w3.org/2000/svg"
              // width={200}
            >
              <path
                fill="#6C55E0"
                d="M26.1,13.1C15.4,33.7,-24.5,35.4,-33.7,15.7C-43,-4,-21.5,-45.3,-1.5,-46.2C18.4,-47,36.9,-7.6,26.1,13.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </S.RowContainer>

          <S.TextContent>
            <h1>Olá, eu sou Pablo</h1>
            <strong>Desenvolvedor front-end</strong>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quam ratione aperiam adipisci alias ipsum sit reiciendis eius
              harum.
            </p>

            <Button>
              Fale comigo <HiChevronRight />
            </Button>
          </S.TextContent>
        </S.Content>
      </Wrapper>
    </S.Container>
  )
}
