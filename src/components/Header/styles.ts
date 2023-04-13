import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;

  margin: 0 auto;

  padding: 1.5rem 2.5rem;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-300']};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.0125rem;

    transition: color ease 0.2s;

    &:hover {
      color: ${(props) => props.theme['gray-100']};
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`

export const CurriculumButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;

  color: ${(props) => props.theme['gray-300']};
  font-size: 0.875rem;

  letter-spacing: 0.0125rem;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['gray-100']};

    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }

  svg {
    transition: inherit;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-300']};
  }

  @media (max-width: 720px) {
    display: none;
  }
`
