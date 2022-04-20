import { createGlobalStyle } from "styled-components";

import bg from "../assets/images/background.png";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;

    box-sizing: border-box;
  }

  :root {
    /* primary colors */
    --primary: #5A4AF4;
    --secondary: #1EA5FC;
    --tertiary: #b66dff;

    --warning: #FFAD49;

    /* Neutral colors */
    --gray-900: #121829;
    --gray-800: #20283e;
    --gray-700: #323B54;
    --gray-600: #475069;
    --gray-500: #61697F;
    --gray-400: #767E94;
    --gray-300: #8E95A9;
    --gray-200: #A8AEBF;
    --gray-100: #C3C8D4;
    --gray-50: #EBEEF5;
    
    --white: #ffffff;
    --black: #000000;
    --black-65: rgba(0, 0, 0, 0.65);
    --black-10: rgba(0, 0, 0, 0.1);
    --black-20: rgba(0, 0, 0, 0.2);
    --gray-80: rgba(32, 40, 62, 0.8);

    --gradient-primary: linear-gradient(rgba(54, 44, 146, 1), rgba(18, 98, 151, 1));

  }

  h1, h2, h3, h4, h5, h6, strong, p, span, a, div {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3 {
    font-weight: 500;
    letter-spacing: -2%;
  }

  h4, h5, h6 {
    font-weight: 700;
    letter-spacing: -1.5%;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-image: url(${bg});
    background-color: var(--gray-900);
    background-size: cover;

    &::-webkit-scrollbar {
      width: 1rem;
    }
    
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--gray-700);
      outline: 1px solid var(--gray-700);
    }

    a {
      color: inherit;
      text-decoration: none;
    }
    
  }

`;
