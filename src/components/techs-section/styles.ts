import styled from 'styled-components'

export const Container = styled.section`
  background: ${(props) => props.theme['primary-section']};
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3.75rem;
`

export const TechCard = styled.div`
  width: 120px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  span {
    font-weight: 700;
    color: ${(props) => props.theme['gray-300']};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  svg {
    color: ${(props) => props.theme['gray-300']};
    transition: color 0.2s ease-out;
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.1);

    span,
    svg {
      color: ${(props) => props.theme.primary};
    }
  }

  @media (min-width: 768px) {
    width: 160px;
    height: 100px;
  }
`
