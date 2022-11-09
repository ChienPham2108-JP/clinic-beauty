import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { SectionAssistance, SectionOurTeam, SectionSlogan, SectionOurTestimonials } from '../containers/Team';

import background from '../assets/images/team-background1.png';
import background1 from '../assets/images/team-bg-bottom1.svg';
import background2 from '../assets/images/team-bg-bottom2.svg';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
  },
  backgroundWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: -1,
  },
  background: {
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
  wrapTestimonials: {
    position: 'relative',
  },
  bgWrap1: {
    position: 'absolute',
    top: '-118px',
    left: 0,
  },
  bgWrap2: {
    position: 'absolute',
    bottom: '-110px',
    right: 0,
  },
});

function TeamPage() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box className={classes.wrapper}>
        <SectionOurTeam />
        <Box className={classes.backgroundWrap}>
          <img className={classes.background} src={background} alt="Background" />
        </Box>
      </Box>
      <SectionAssistance />
      <SectionSlogan />
      <Box className={classes.wrapTestimonials}>
        <Box className={classes.bgWrap1}>
          <img className={classes.background} src={background1} alt="Background" />
        </Box>
        <Box className={classes.bgWrap2}>
          <img className={classes.background} src={background2} alt="Background" />
        </Box>
        <SectionOurTestimonials />
      </Box>
    </>
  );
}

export default TeamPage;
