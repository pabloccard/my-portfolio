import styled from 'styled-components'

export const AboutSession = styled.section`
  margin: auto;
  background: ${(props) => props.theme['gray-900']};
  border-top: 3px solid ${(props) => props.theme['gray-500']};
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 6rem 1.5rem;

  h3 {
    color: ${(props) => props.theme.ter};
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

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 11px 38px;

    line-height: 1.6;

    font-size: 0.75rem;
    font-weight: 700;
    background: none;
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.ter};
    letter-spacing: 0.0125rem;
    border-radius: 6px;
    cursor: pointer;
    transition: box-shadow 0.3s;
    font-family: 'Manrope';
    transition: box-shadow 0.3s;

    &:hover {
      -webkit-box-shadow: 0px 0px 10px 0px ${(props) => props.theme.secondary};
      -moz-box-shadow: 0px 0px 10px 0px ${(props) => props.theme.secondary};
      box-shadow: 0px 0px 10px 0px ${(props) => props.theme.secondary};
    }

    svg {
      font-size: 1rem;
    }
  }
`
export const Skills = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  /* font-size: 14px; */

  strong {
    color: ${(props) => props.theme['gray-200']};
  }
`
