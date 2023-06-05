import styled from 'styled-components'

export const Container = styled.footer`
  background: ${(props) => props.theme['secondary-section']};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

export const SocialBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
  }
`
