import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  position: relative;

  @media (min-width: 610px) {
    padding-left: 3.25rem;
  }
`

export const SocialBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  height: 180px;

  position: absolute;
  top: 0;
  left: 0;

  a {
    font-size: 1.25rem;
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 610px) {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`

export const Content = styled.div`
  max-width: 980px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: max(2rem, min(6rem, 10%));

  img {
    width: max(180px, min(320px, 33vw));
    height: max(180px, min(320px, 33vw));
    margin-left: 3.25rem;
  }

  @media (min-width: 610px) {
    flex-direction: row-reverse;
    align-items: center;

    img {
      margin-left: 0;
    }
  }
`

export const TextContent = styled.div`
  h1 {
    color: ${(props) => props.theme['gray-400']};
    font-size: max(24px, min(48px, 4.5vw));
  }

  strong {
    color: ${(props) => props.theme['gray-300']};
    font-size: max(1rem, min(1.25rem, 2vw));
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    margin-top: 0.75rem;
  }

  button {
    padding: 1rem;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border-radius: 8px;
    margin-top: 1.25rem;
    display: flex;
    gap: 0.5rem;

    svg {
      font-size: 1.25rem;
    }
  }
`
