import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white-color: #fff;
    --primary-color: #FF64AE;
    --text-color: #091156;
    --desc-text-color: #8B8B8B;
    --mt-12: 12px;
  }

  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  img {
    display: inline-block;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    opacity: 0.65;
  }

  input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #C5C5C5;
  opacity: 1; /* Firefox */
}
`;

export default GlobalStyle;
