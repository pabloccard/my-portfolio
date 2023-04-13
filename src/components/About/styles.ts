import styled from 'styled-components'

export const AboutSession = styled.section`
  margin: auto;
  background: ${(props) => props.theme['gray-900']};
  border-top: 3px solid ${(props) => props.theme['gray-500']};
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 6.5rem 2rem;

  h3 {
    color: ${(props) => props.theme.purple};
  }
`

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15rem;
  margin-top: 2rem;

  p {
    color: white;
  }
`

export const Bio = styled.div`
  p {
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.6;
  }
`
