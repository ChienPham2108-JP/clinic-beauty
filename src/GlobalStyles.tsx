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
    scroll-behavior: smooth;
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

  div.bottomInfo {
    margin: 0 -18.5px;
  }

  .bottomInfo .infoWrap {
    margin: 0 18.5px;
  }

  .bottomInfo .infoCard {
    padding-top: 79px;
    padding-bottom: 71px;
  }

  .bottomInfo .infoImg {
    width: 65px;
    height: auto;
    margin-bottom: 46px;
  }
  .bottomInfo .inforPosition {
    margin-bottom: 15px;
  }
  .bottomInfo .infoHeading {
    margin-bottom: 6px;
  }
  .bottomInfo .infoDesc {
    margin-bottom: 0;
  }

  button.btn {
    color: var(--white-color);
    display: inline-block;
    font-size: 16px;
    background: var(--primary-color);
    font-family: 'Poppins',sans-serif;
    font-weight: 600;
    border-radius: 50px;
    letter-spacing: 0.1em;
    text-transform: capitalize;
  }

  button.btn:hover {
    background: var(--primary-color);
    
  }

  .active {
    color: var(--white-color);
    background-color: #172176
  }
  
`;

export default GlobalStyle;
