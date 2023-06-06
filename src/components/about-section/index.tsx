// import Image from 'next/image'
// import manProgramming from '../../assets/man-programming.png'

import Image from 'next/image'
import * as S from './styles'
import { TbFileDownload } from 'react-icons/tb'
import { SectionTitle } from '../section-title'
import { Button } from '../button'
import { Wrapper } from '../section-wrapper'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <S.Container>
      <Wrapper>
        <SectionTitle title="Sobre Mim" subtitle="Minha introdução" />
        <S.Content>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/image.jpeg" width={280} height={210} alt="" />
          </motion.div>

          <S.Data
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              tempore sequi rerum doloribus facere dolor cupiditate facilis
              deserunt rem? Optio, sint. Eos enim doloremque optio laudantium
              placeat? Voluptatibus, blanditiis minima? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit ducimus hic inventore sint
              architecto excepturi et,
            </p>

            <Button>
              Baixar CV <TbFileDownload />
            </Button>
          </S.Data>
        </S.Content>
      </Wrapper>
    </S.Container>
  )
}
