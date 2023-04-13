import styled from 'styled-components'

type StatusMenu = {
  menuIsOpen: boolean
}

export const Container = styled.div`
  @media (min-width: 721px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  line-height: 0;
  background: none;

  svg {
    font-size: 2.2rem;
    color: ${(props) => props.theme.purple};
  }
`

export const Menu = styled.div<StatusMenu>`
  z-index: 100;

  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 5rem;
  right: 0;

  transition: transform 0.2s ease, visibility 50ms ease;

  background: ${(props) => props.theme.black};

  visibility: ${(props) => (props.menuIsOpen ? 'visible' : 'hidden')};
  transform: ${(props) =>
    props.menuIsOpen ? 'translateY(0)' : 'translateY(-10%)'};
`

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  ul {
    list-style: none;

    li {
      padding: 1rem 1.5rem;
      border-left: 4px solid transparent;
      border-bottom: 1px solid ${(props) => props.theme['gray-400']};

      &:first-of-type {
        border-top: 1px solid ${(props) => props.theme['gray-400']};
      }
    }

    .active {
      border-left-color: ${(props) => props.theme.purple};
    }

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
`
