import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;

  margin: 0 auto;
  max-width: 1120px;

  padding: 5rem 2rem;

  img {
    opacity: 0.8;
    transform: rotateY(180deg);
  }
`

export const Content = styled.div`
  h2 {
    color: ${(props) => props.theme['gray-200']};
    font-size: 42px;
    text-align: center;
  }

  strong {
    display: block;
    color: ${(props) => props.theme['gray-200']};
    font-size: 18px;
    letter-spacing: 0.0125rem;
    font-weight: bold;
    margin-top: -0.5rem;
    text-align: center;
    span {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.75rem 1.75rem;
  border-radius: 1.5rem;
  background: rgb(132, 89, 232);
  background: linear-gradient(
    90deg,
    rgba(132, 89, 232, 1) 0%,
    rgba(129, 86, 230, 1) 35%,
    rgba(70, 46, 131, 1) 100%
  );
  /* background: ${(props) => props.theme.purple}; */
  color: ${(props) => props.theme.white};
  font-weight: 700;
  cursor: pointer;

  font-size: 0.75rem;

  svg {
    font-size: 0.875rem;
  }
`

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  a:last-child {
    /* background: ${(props) => props.theme['gray-500']}; */
    background: rgb(48, 48, 54);
    background: linear-gradient(
      90deg,
      rgba(48, 48, 54, 1) 0%,
      rgba(41, 41, 46, 1) 35%,
      rgba(30, 30, 33, 1) 100%
    );
    color: ${(props) => props.theme.white};
  }
`
