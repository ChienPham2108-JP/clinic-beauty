import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { SectionAssistance, SectionOurTeam, SectionSlogan, SectionOurTestimonials } from '../containers/Team';

import background from '../assets/images/team-background1.png';

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
      <SectionOurTestimonials />
    </>
  );
}

export default TeamPage;
