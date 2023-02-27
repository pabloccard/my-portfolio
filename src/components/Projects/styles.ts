import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  border-top: 3px solid ${(props) => props.theme['gray-500']};
`

export const Content = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  padding: 6rem 1.5rem;

  > h3 {
    color: ${(props) => props.theme.ter};
  }
`

export const SlideItem = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme['gray-200']};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.6;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  position: relative;
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  button {
    all: unset;
  }

  button:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 11px 38px;
    font-weight: 700;
    line-height: 1.6;

    background: ${(props) => props.theme.ter};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    border: 1px solid ${(props) => props.theme.ter};
    letter-spacing: 0.0125rem;
    border-radius: 6px;
    cursor: pointer;
    transition: box-shadow 0.3s;
    font-family: 'Manrope';
  }
  button:last-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 11px 38px;
    font-weight: 700;
    line-height: 1.6;

    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    border: 1px solid ${(props) => props.theme.ter};
    letter-spacing: 0.0125rem;
    border-radius: 6px;
    cursor: pointer;
    transition: box-shadow 0.3s;
    font-family: 'Manrope';
  }
`
