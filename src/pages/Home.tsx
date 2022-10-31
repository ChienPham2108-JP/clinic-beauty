import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Appbar from '../components/Appbar';
import SideBar from '../components/SideBar';
import MainSlider from '../components/MainSlider';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import goToTop from '../assets/images/gototopbtn.png';

const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  background-color: transparent;
  overflow: hidden;
  position: relative;
`;

const ScrollToTop = styled.div<{ visibleGoToTopBtn?: boolean }>`
  position: fixed;
  right: 65px;
  bottom: 170px;
  cursor: pointer;
  visibility: ${({ visibleGoToTopBtn }) => (visibleGoToTopBtn ? 'visible' : 'hidden')};
  opacity: 1;

  &:hover {
    opacity: 0.65;
  }

  @media (max-width: 768px) {
    bottom: 50px;
    right: 38px;
  }
`;

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleGoToTopBtn, setVisibleGoToTopBtn] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeGoToTop = () => {
    if (window.scrollY > 500) {
      setVisibleGoToTopBtn(true);
    } else {
      setVisibleGoToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeGoToTop);
  }, []);

  // const classes = useStyles();
  const handleClickGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Main>
      <Appbar toggle={toggle} isOpen={isOpen} />
      <SideBar toggle={toggle} isOpen={isOpen} />
      <MainSlider />
      <Services />
      <AboutUs />
      <Team />
      <ContactUs />
      <Footer />
      <ScrollToTop onClick={handleClickGoToTop} visibleGoToTopBtn={visibleGoToTopBtn}>
        <img src={goToTop} alt="go to top" />
      </ScrollToTop>
    </Main>
  );
}

export default Home;
