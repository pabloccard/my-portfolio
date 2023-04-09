import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  border-top: 3px solid ${(props) => props.theme['gray-500']};
`

export const Content = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  padding: 6rem 2rem;

  > h3 {
    color: ${(props) => props.theme.purple};
    margin-bottom: 3rem;
  }
`

export const Slider = styled.div``

export const SliderItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    h3 {
      font-size: 2rem;
      color: ${(props) => props.theme['gray-200']};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${(props) => props.theme['gray-300']};
      line-height: 1.6;
    }
  }
`
export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 145px 145px;
  gap: 1rem;

  position: absolute;
  bottom: 0;

  button {
    font-family: unset;
    height: 43px;
    padding: 11px 38px;
    font-weight: 700;
    line-height: 1.6;
    font-size: 0.75rem;
    border: 1px solid ${(props) => props.theme.purple};
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:first-child {
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }

  button:last-child {
    color: ${(props) => props.theme.white};
    background: none;
  }
`
