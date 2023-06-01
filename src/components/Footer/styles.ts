import styled from 'styled-components'

export const Container = styled.footer`
  background: ${(props) => props.theme.primary};
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
  gap: 2rem;
  /* justify-content: space-between; */
  align-items: center;
`

export const Info = styled.div`
  h2,
  span {
    color: ${(props) => props.theme.white};
    text-align: center;
  }

  span {
    font-size: 0.875rem;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* margin-top: 3rem; */
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
`
export const SocialBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
  }
`
