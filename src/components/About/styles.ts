import styled from 'styled-components'

export const Container = styled.section`
  background: ${(props) => props.theme['secondary-section']};
`
export const Wrapper = styled.div`
  max-width: 450px;
  padding: 4rem 2rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 832px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: min(362px, 100%);
    height: auto;
  }
`

export const Data = styled.div`
  p {
    color: ${(props) => props.theme['gray-300']};
    margin-bottom: 1.25rem;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`
