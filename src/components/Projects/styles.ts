import styled from 'styled-components'

export const Container = styled.section`
  padding-block: 4rem;
  margin: 0 auto;

  @media (min-width: 610px) {
    padding-inline: 3.25rem;
  }
`

export const Content = styled.div`
  max-width: calc(768px + 3.25rem);
  margin: 0 auto;
`

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  button {
    background: none;
    font-size: 1.25rem;
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 610px) {
    button:first-child {
      position: absolute;
      top: 50%;
      left: -3.25rem;
      transform: translateY(-50%);
    }

    button:last-child {
      position: absolute;
      top: 50%;
      right: -3.25rem;
      transform: translateY(-50%);
    }
  }
`
