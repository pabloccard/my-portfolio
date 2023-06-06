import * as S from './styles'
import { TbBrandLinkedin, TbBrandWhatsapp, TbBrandGithub } from 'react-icons/tb'
import { HiChevronRight } from 'react-icons/hi'
import { Button } from '../button'
import { Wrapper } from '../section-wrapper'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <S.Container>
      <Wrapper>
        <S.Content>
          <S.RowContainer>
            <S.SocialBar
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="">
                  <TbBrandWhatsapp />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="">
                  <TbBrandLinkedin />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a href="">
                  <TbBrandGithub />
                </a>
              </motion.div>
            </S.SocialBar>
            <S.ImageContainer
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <svg viewBox="63 53 67 77" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#6C55E0"
                  d="M26.1,13.1C15.4,33.7,-24.5,35.4,-33.7,15.7C-43,-4,-21.5,-45.3,-1.5,-46.2C18.4,-47,36.9,-7.6,26.1,13.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </S.ImageContainer>
          </S.RowContainer>

          <S.Data
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
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
          </S.Data>
        </S.Content>
      </Wrapper>
    </S.Container>
  )
}
