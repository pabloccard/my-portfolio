import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${(props) => props.theme.title};
    font-size: max(24px, min(32px, 4.5vw));
  }

  span {
    color: ${(props) => props.theme.subtitle};
    font-size: 1rem;
  }
`
