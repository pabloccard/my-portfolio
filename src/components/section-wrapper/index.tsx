import { ReactNode } from 'react'
import * as S from './styles'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <S.Container>{children}</S.Container>
}
