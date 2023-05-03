import styled from 'styled-components'

export const AboutSession = styled.section`
  margin: auto;
  background: ${(props) => props.theme['gray-900']};
  border-top: 3px solid ${(props) => props.theme['gray-500']};
`

export const Content = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  padding: 6.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h3 {
    color: ${(props) => props.theme.purple};
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;

    border-radius: 50%;
    border: 3px solid ${(props) => props.theme['gray-500']};
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.6;
    text-align: center;
  }
`
