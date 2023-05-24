import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  padding: 1rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  border-radius: 8px;
  margin-top: 1.25rem;
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;

  -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);

  svg {
    font-size: 1.25rem;
  }
`
