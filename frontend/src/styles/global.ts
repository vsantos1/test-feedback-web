import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px 'Apercu Arabic Pro', Roboto, sans-serif;

    background: ${props => props.theme["white"]};
  }

  input, button, textarea {
    font: 400 16px 'Apercu Arabic Pro', Roboto, sans-serif;
    
  }
`;