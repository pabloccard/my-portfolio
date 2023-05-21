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

  /* display: flex; */
  justify-content: space-between;
  flex-direction: column;

  h3 {
    color: ${(props) => props.theme.purple};
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 0.5rem;

    border-radius: 8px;
    border: 4px solid ${(props) => props.theme['gray-500']};
    float: left;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.6;
  }
`
