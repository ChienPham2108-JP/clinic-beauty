import { createGlobalStyle } from 'styled-components';

// import arrowLeft from './assets/images/arrow-left.png';
// // import arrowRight from './assets/images/arrow-right.png';

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

  div.MuiAccordion-root {
    position: static;
    box-shadow: none;
  }

  div.MuiAccordionSummary-root.Mui-expanded {
    min-height: initial;
}

  div.MuiAccordionSummary-content.Mui-expanded {
    margin: 16px 0;
}


.dropdown {
  position: relative
}

.dropdown:hover .dropdown-menu {
  display: block
}

.dropdown-menu::before {
  width: 100%;
  content: '';
  position: absolute;
  height: 5px;
  top: -5px
}

.dropdown-menu {
  position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25rem;
}

.dropdown-item {
  display: block;
    width: 100%;
    padding: 1rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}

button.light-btn {
  border: 1px solid #FFFFFF;
    border-radius: 15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    padding: 14px 31px 14px 29px;
}

.slick-next {
    right: -91.56px;
}
.slick-prev {
    left: -91.56px;
}

`;

export default GlobalStyle;
