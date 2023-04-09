import { useEffect, useState } from 'react';

import Appbar from './components/Appbar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import styled from 'styled-components';
import goToTop from '../assets/images/gototopbtn.png';

interface ILayoutProps {
  children: any;
}

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
  visibility: ${({ visibleGoToTopBtn }) => (visibleGoToTopBtn ?? false ? 'visible' : 'hidden')};
  opacity: 1;

  &:hover {
    opacity: 0.65;
  }

  @media (max-width: 768px) {
    bottom: 50px;
    right: 38px;
  }
`;

export default function Layout({ children }: ILayoutProps) {
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
      <>
        <Appbar toggle={toggle} isOpen={isOpen} />
        <SideBar toggle={toggle} isOpen={isOpen} />
        {children}
        <Footer />
        <ScrollToTop onClick={handleClickGoToTop} visibleGoToTopBtn={visibleGoToTopBtn}>
          <img src={goToTop} alt="go to top" />
        </ScrollToTop>
      </>
    </Main>
  );
}
