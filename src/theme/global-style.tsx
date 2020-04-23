import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    red: "red",
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-family: "Poppins", "Kanit", "sans-serif";
    font-size: 16px;
  }

  body {
    line-height: 1.5;
    letter-spacing: 0;
    margin: 0;
  }
`;
