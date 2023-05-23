import { ReactNode } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <S.Container>{children}</S.Container>
}
