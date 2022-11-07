import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  SectionAbout,
  SectionClients,
  SectionMission,
  SectionSlogan,
  SectionTeam,
  SectionVision,
} from '../containers/About';
import backgroundfooter from '../assets/images/about-background3.png';

const useStyles = makeStyles({
  about: {
    position: 'relative',
  },
  backgroundWrap: {
    position: 'absolute',
    bottom: '-123px',
    left: 0,
    zIndex: -1,
  },
  background: {
    width: '100%',
    height: 'auto',
  },
});

function About() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className={classes.about}>
      <SectionAbout />
      <SectionTeam />
      <SectionSlogan />
      <SectionVision />
      <SectionMission />
      <SectionClients />
      <Box className={classes.backgroundWrap}>
        <img className={classes.background} src={backgroundfooter} alt="background" />
      </Box>
    </Box>
  );
}

export default About;
