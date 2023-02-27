import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.0125rem;
  }
`

export const CurriculumButton = styled.a`
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

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px ${(props) => props.theme.secondary};
    -moz-box-shadow: 0px 0px 10px 0px ${(props) => props.theme.secondary};
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.secondary};
  }

  svg {
    font-size: 1rem;
  }
`
