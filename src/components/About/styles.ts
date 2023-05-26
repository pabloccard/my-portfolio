import styled from 'styled-components'

export const Container = styled.section`
  padding-block: 4rem;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  @media (min-width: 610px) {
    padding-inline: 3.25rem;
  }
`

export const Content = styled.div`
  max-width: calc(768px + 3.25rem);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    text-align: center;
    color: ${(props) => props.theme['gray-300']};
  }

  @media (min-width: 768px) {
    align-items: flex-start;

    p {
      text-align: left;
    }
  }
`
