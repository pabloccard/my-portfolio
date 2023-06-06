'use client'

import { motion } from 'framer-motion'
import * as S from './styles'

type SectionTitleProps = {
  title: string
  subtitle: string
}

const animation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <S.Container>
      <motion.h2 {...animation} transition={{ duration: 0.4 }}>
        {title}
      </motion.h2>
      <motion.span {...animation} transition={{ duration: 0.4, delay: 0.2 }}>
        {subtitle}
      </motion.span>
    </S.Container>
  )
}
