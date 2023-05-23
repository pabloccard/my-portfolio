// import Image from 'next/image'
// import manProgramming from '../../assets/man-programming.png'

import Image from 'next/image'
import * as S from './styles'
import { TbFileDownload } from 'react-icons/tb'
import { SectionTitle } from '../SectionTitle'
import { Button } from '../Button'

export const About = () => {
  return (
    <S.Container>
      <SectionTitle title="Sobre Mim" subtitle="Minha introdução" />
      <S.Content>
        <Image src="/image.jpeg" width={280} height={210} alt="" />

        <S.Data>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            tempore sequi rerum doloribus facere dolor cupiditate facilis
            deserunt rem? Optio, sint. Eos enim doloremque optio laudantium
            placeat? Voluptatibus, blanditiis minima? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit ducimus hic inventore sint
            architecto excepturi et,
          </p>

          <Button>
            Baixar CV <TbFileDownload />
          </Button>
        </S.Data>
      </S.Content>
    </S.Container>
  )
}
