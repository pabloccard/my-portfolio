import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.section`
  background: ${(props) => props.theme['primary-section']};
`

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const SocialBar = styled(motion.div)`
  display: grid;
  grid-gap: 0.5rem;

  /* position: absolute;
  top: 0;
  left: 2rem; */

  a {
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 768px) {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 1024px) {
    left: -3rem;
  }
`

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  img {
    /* width: max(180px, min(280px, 33vw));
    height: max(180px, min(280px, 33vw));
     */
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    padding-left: 3rem;
    max-width: 832px;
  }

  @media (min-width: 1024px) {
    padding-left: unset;
  }
`

export const ImageContainer = styled(motion.div)`
  > svg {
    transform: rotateX(180deg);
    width: max(180px, min(250px, 30vw));
  }
`

export const Data = styled(motion.div)`
  h1 {
    color: ${(props) => props.theme.title};
    font-size: max(28px, min(48px, 4.5vw));
  }

  strong {
    color: ${(props) => props.theme.subtitle};
    font-size: max(1rem, min(1.25rem, 2vw));
  }

  p {
    color: ${(props) => props.theme.content};
    margin-top: 0.75rem;
    margin-bottom: 1.25rem;
  }
`
