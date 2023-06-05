import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  background: ${(props) => props.theme['primary-section']};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  margin-top: 3.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const InfoList = styled.ul`
  list-style: none;
`

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & + li {
    margin-top: 1.5rem;
  }

  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.primary};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${(props) => props.theme.subtitle};
      line-height: 100%;
    }

    span {
      color: ${(props) => props.theme.content};
      font-size: 0.875rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  width: min(425px, 100%);

  input,
  textarea {
    background-color: ${(props) => props.theme['gray-500']};
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
  }

  textarea {
    resize: none;
  }
`
