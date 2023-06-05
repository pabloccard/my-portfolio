import * as S from './styles'

type SectionTitleProps = {
  title: string
  subtitle: string
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <S.Container>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </S.Container>
  )
}
