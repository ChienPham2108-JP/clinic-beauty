import { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

import { AboutUs, MainServices, MainSlider, RequestCallServices, TheBlog, WhyChoosingUs } from '../containers/Home2';
import waveLine from '../assets/images/wave-line.svg';
import waveLine2 from '../assets/images/home2-wave-bg-2.svg';
import bgElement from '../assets/images/bg-elements.svg';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
  },
  wrapBackground: {
    position: 'absolute',
    left: 0,
    top: '335px',
    zIndex: -1,
  },
  background: {
    width: '100%',
    height: 'auto',
  },
  wrapBackground2: {
    position: 'absolute',
    top: '-143px',
    right: 0,
    zIndex: -1,
  },
  wrapBackground3: {
    position: 'absolute',
    bottom: '-108.08px',
    left: 0,
  },
});

function Home() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainSlider />
      <AboutUs />
      <Box className={classes.wrapper}>
        <MainServices />
        <Box className={classes.wrapBackground}>
          <img className={classes.background} src={waveLine} alt="Wave line" />
        </Box>
      </Box>
      <WhyChoosingUs />
      <Box className={classes.wrapper}>
        <Box className={classes.wrapBackground2}>
          <img className={classes.background} src={waveLine2} alt="Wave line" />
        </Box>
        <TheBlog />
      </Box>
      <Box className={classes.wrapper}>
        <RequestCallServices />
        <Box className={classes.wrapBackground3}>
          <img className={classes.background} src={bgElement} alt="Wave line" />
        </Box>
      </Box>
    </>
  );
}

export default Home;
