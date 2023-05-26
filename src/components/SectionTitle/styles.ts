import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 3.75rem;

  h2 {
    color: ${(props) => props.theme['gray-400']};
    font-size: max(20px, min(32px, 4.5vw));
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.875rem;
  }
`
