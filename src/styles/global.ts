import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }


    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme.bg};
        font-family: 'Poppins', sans-serif;
    }

    button {
        font-family: 'Poppins', sans-serif;
    }
`
export const Wapper = styled.div`
  margin: auto;
  max-width: 1120px;
  padding: 0 1.5rem;
`
