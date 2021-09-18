import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;  
  }
  *, *::after, *::before {
    box-sizing: border-box;
    color: lightgreen !important;
  }
  body {
    text-rendering: optimizeLegibility;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden !important;
  }

  .bg-black {
    background-color: black !important;
  }
  `