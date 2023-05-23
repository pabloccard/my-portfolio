import styled from 'styled-components'

export const Container = styled.section`
  padding-block: 5rem;
  margin: 0 auto;

  @media (min-width: 610px) {
    padding-inline: 3.25rem;
    padding-block: 8rem;
  }
`

export const Content = styled.div`
  max-width: calc(768px + 3.25rem);
  margin: 0 auto;
  padding-block: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    /* align-items: flex-start; */
  }

  img {
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
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
