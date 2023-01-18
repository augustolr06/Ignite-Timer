import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.gray_900};
    color: ${props => props.theme.gray_300};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.green_500};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  } 
`

