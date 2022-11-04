import { Button, Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import playBtn from '../../assets/images//play-button.png';
import aboutUsImg from '../../assets/images/aboutus.png';
import background2 from '../../assets/images/background2.png';
import Heading from '../../components/Heading';
import Subject from '../../components/Subject';
import Description from '../../components/Description';

const useStyles = makeStyles({
  aboutUs: {
    maxWidth: '1140px',
    margin: '134.44px auto 147px',
    position: 'relative',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
      textAlign: 'center',
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  aboutTitle: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '20px',
    color: 'var(--primary-color)',
    marginLeft: '1px',
    marginBottom: 'var(--mt-12)',
  },
  aboutWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '@media (max-width: 1200px)': {
      justifyContent: 'center',
    },
  },
  aboutInfo: {},
  aboutHeading: {
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '52px',
    color: 'var(--text-color)',
    marginBottom: '12px',
  },
  aboutDesc: {
    maxWidth: '483px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    marginBottom: '49px',
    '@media (max-width: 1200px)': {
      marginBottom: '28px',
      maxWidth: 'initial',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  aboutDesc1: {
    display: 'inline-block',
    marginBottom: '28px',
  },
  aboutAtion: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  learnMoreBtn: {
    textTransform: 'capitalize',
    fontFamily: `'Poppins',sans-serif`,
    fontWeight: 600,
    fontSize: '16px',
    color: 'var(--white-color)',
    background: 'var(--primary-color)',
    borderRadius: '50px',
    display: 'inline-block',
    padding: '15.18px 47.08px',
    marginRight: '44px',
    letterSpacing: '0.1em',
    '&:hover': {
      background: 'var(--primary-color)',
    },
    '@media (max-width: 1200px)': {
      margin: '0 0 28px',
    },
  },
  watchCompat: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  playBtn: {
    marginRight: '13px',
    '&:hover': {
      opacity: 0.65,
    },
  },
  aboutImg: {
    position: 'absolute',
    bottom: '-74px',
    right: '-74px',
    '@media (max-width: 1200px)': {
      position: 'static',
      margin: '0 auto',
      width: '100%',
      height: 'auto',
      flex: 1,
    },
  },
  background2: {
    position: 'absolute',
    top: '-354.44px',
    right: '-150px',
    width: '83.17%',
    maxWidth: '948.15px',
    zIndex: -1,
  },
  background: {
    width: '100%',
    height: 'auto',
  },
});
function AboutUs() {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUs}>
      <Box className={classes.aboutWrapper}>
        <Box className={classes.aboutInfo}>
          <Subject margin="0 0 12px 0">About Us</Subject>
          <Heading secondary={false} margin="0 0 12px 0">
            We are the best beauty clinic
          </Heading>
          <Box className={classes.aboutDesc}>
            <Description margin="0 0 28px 0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas
              volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
              placerat.
            </Description>
            <span>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</span>
          </Box>
          <Box className={classes.aboutAtion}>
            <Link to={'/'}>
              <Button className={classes.learnMoreBtn}>Learn More</Button>
            </Link>
            <Link to={'/'} className={classes.watchCompat}>
              <img src={playBtn} className={classes.playBtn} alt="Play" />
              <span>Watch Video</span>
            </Link>
          </Box>
        </Box>
        <img src={aboutUsImg} className={classes.aboutImg} alt="About Us" />
        <Box className={classes.background2}>
          <img src={background2} className={classes.background} alt="background2" />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
