import styled from 'styled-components'

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  margin: 0 auto;
  max-width: 1120px;
  height: calc(100vh - 5.125rem);
  padding: 0 2rem;

  img {
    opacity: 0.8;
    transform: rotateY(180deg);
  }
`

export const ContentContainer = styled.div`
  h2 {
    color: ${(props) => props.theme['gray-200']};
    font-size: 58px;
  }

  strong {
    display: block;
    color: ${(props) => props.theme['gray-200']};
    font-size: 25px;
    letter-spacing: 0.0125rem;
    font-weight: bold;
    margin-top: -1rem;
    span {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const Butao = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem 2rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  cursor: pointer;

  font-size: 0.875rem;

  svg {
    font-size: 1.25rem;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 2.5rem;

  a:last-child {
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme.white};
  }
`
