import { SectionTitle } from '../section-title'
import { Wrapper } from '../section-wrapper'
import * as S from './styles'
import { SiJavascript } from 'react-icons/si'

export const Techs = () => {
  return (
    <S.Container>
      <Wrapper>
        <SectionTitle title="Stack" subtitle="Tecnológias do meu dia a dia" />
        <S.Content>
          <S.TechCard>
            <SiJavascript />
            <span>Java Script</span>
          </S.TechCard>
          <S.TechCard>
            <SiJavascript />
            <span>Java Script</span>
          </S.TechCard>
          <S.TechCard>
            <SiJavascript />
            <span>nextjs</span>
          </S.TechCard>
          <S.TechCard>
            <SiJavascript />
            <span>Java Script</span>
          </S.TechCard>
          <S.TechCard>
            <SiJavascript />
            <span>Java Script</span>
          </S.TechCard>
          <S.TechCard>
            <SiJavascript />
            <span>Java Script</span>
          </S.TechCard>
          <S.TechCard>
            <SiJavascript />
            <span>Java Script</span>
          </S.TechCard>
        </S.Content>
      </Wrapper>
    </S.Container>
  )
}
