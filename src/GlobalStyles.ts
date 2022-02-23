import {createGlobalStyle} from 'styled-components';
import {COLORS} from "./constants/colors";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    // background: ${COLORS.BACKGROUND_MAIN};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Raleway", sans-serif;
  }
`;
