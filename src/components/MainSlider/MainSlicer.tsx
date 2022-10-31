import { Button, Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import frame1 from '../../assets/images/frame1.png';
import sliderBackground from '../../assets/images/slider-background.png';

const useStyles = makeStyles({
  mainSlider: {
    maxWidth: '1140px',
    margin: '263px auto 0',
    padding: 0,
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  upperSlider: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  wrapText: {
    '@media (max-width: 1200px)': {
      width: '100%',
    },
  },
  sliderHeading: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '60px',
    letterSpacing: 0,
    color: 'var(--text-color)',
    marginTop: '53px',
    '@media (max-width: 992px)': {
      marginTop: 0,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  moreDetailsBtn: {
    textTransform: 'capitalize',
    fontFamily: `'Poppins',sans-serif`,
    fontWeight: 600,
    fontSize: '16px',
    color: 'var(--white-color)',
    background: 'var(--primary-color)',
    borderRadius: '50px',
    display: 'inline-block',
    padding: '15.18px 40.04px',
    letterSpacing: '0.1em',
    '&:hover': {
      background: 'var(--primary-color)',
    },
  },
  moreDetailsLink: {
    '@media (max-width: 992px)': {
      textAlign: 'center',
    },
  },
  sliderDesc: {
    maxWidth: '474px',
    letterSpacing: '0.1em',
    color: 'var(--text-color)',
    marginBottom: '28px',
    marginRight: '22px',
    '@media (max-width: 992px)': {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  frame1: {
    marginRight: '41.5px',
    '@media (max-width: 1200px)': {
      margin: '0 auto',
      maxWidth: '100%',
      flex: 1,
      height: 'auto',
    },
    '@media (max-width: 992px)': {
      margin: '82px auto 0',
      maxWidth: '100%',
      height: 'auto',
    },
  },
  sliderBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '136.35px',
    '@media (max-width: 992px)': {
      display: 'none',
    },
  },
  rectSide: {
    display: 'inline-block',
    width: '14.82px',
    height: '3.09px',
    borderRadius: '50px',
    backgroundColor: '#EEEEEE',
    cursor: 'pointer',
  },
  rectMid: {
    display: 'inline-block',
    width: '25.31px',
    height: '8.15px',
    borderRadius: '50px',
    margin: '0 8.03px',
    backgroundColor: '#414880',
    cursor: 'pointer',
  },
  wrapImg: {
    position: 'absolute',
    display: 'block',
    top: 0,
    left: '-38px',
    width: '88%',
    maxWidth: '1266.42px',
    zIndex: -1,
  },
  background: {
    width: '100%',
    height: 'auto',
  },
});

function MainSlider() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.mainSlider}>
        <Box className={classes.upperSlider}>
          <Box className={classes.wrapText}>
            <Typography variant="h1" className={classes.sliderHeading}>
              Clinic & beauty consultant
            </Typography>
            <Box className={classes.sliderDesc}>
              It is a long established fact that a reader will be by the readable content of a page.
            </Box>
            <Box className={classes.moreDetailsLink}>
              <Link to={'/'}>
                <Button className={classes.moreDetailsBtn}>More Details</Button>
              </Link>
            </Box>
          </Box>
          <img src={frame1} width="601.5" height="397.5" className={classes.frame1} alt="frame1" />
        </Box>
        <Box className={classes.sliderBtn}>
          <Box component="span" className={classes.rectSide}></Box>
          <Box component="span" className={classes.rectMid}></Box>
          <Box component="span" className={classes.rectSide}></Box>
        </Box>
        <Box className={classes.wrapImg}>
          <img src={sliderBackground} className={classes.background} alt="slider background" />
        </Box>
      </Container>
    </>
  );
}

export default MainSlider;
