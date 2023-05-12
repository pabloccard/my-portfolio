import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  border-top: 3px solid ${(props) => props.theme['gray-500']};
`

export const Content = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  padding: 6.5rem 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > h3 {
    color: ${(props) => props.theme.purple};
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['gray-100']};
    margin-bottom: 1.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    margin-top: 1.5rem;
    /* text-align: center; */
  }
`

export const ProjectCard = styled(Image)`
  height: auto;
  border-radius: 8px;

  filter: brightness(25%);
  transition: filter 0.2s;

  &.active {
    filter: brightness(100%);
    /* border: 3px solid ${(props) => props.theme.purple}; */
  }
`

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 1.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.75rem 1.75rem;
    border-radius: 8px;

    color: ${(props) => props.theme.white};
    font-weight: 700;
    cursor: pointer;

    font-size: 0.75rem;

    svg {
      font-size: 0.875rem;
    }
  }

  button:nth-child(1) {
    background: rgb(132, 89, 232);
    background: linear-gradient(
      90deg,
      rgba(132, 89, 232, 1) 0%,
      rgba(129, 86, 230, 1) 35%,
      rgba(70, 46, 131, 1) 100%
    );
  }

  button:nth-child(2) {
    background: rgb(48, 48, 54);
    background: linear-gradient(
      90deg,
      rgba(48, 48, 54, 1) 0%,
      rgba(41, 41, 46, 1) 35%,
      rgba(30, 30, 33, 1) 100%
    );
  }
`

export const Slider = styled.div`
  /* margin-right: 2rem; */
  overflow: visible !important;
`

export const SliderContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  padding-left: 2rem;
  margin-left: -2rem;
  /* margin-right: 2rem; */

  /* width: calc(100vw - 2rem) !important; */
  /* align-self: flex-start; */
`

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
