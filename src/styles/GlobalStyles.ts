import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }

  body {
    background: var(--primary-color);
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font: 14px  Roboto, sans-serif;
  }

  html,body, #root {
    height: 100%;
  }
  #root {
    max-width: 968px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary-color: #24292e;
    --button-color-primary: #04d361
  }
`;
