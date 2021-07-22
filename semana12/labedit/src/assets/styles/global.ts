import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background-color);
    color: #29292e;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  :root {
    --primary-color: #F27649;
    --neutral-color: #474749;
    --grey-light-color: #a8a8b3;
    --background-color: #f4f5f8;
    --icons-color: #1D407F;
  }

  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`;

export const primaryBackgroundColor = '#49a1f2'
export const primaryTextColor = 'white'
export const textColor = '#474749'