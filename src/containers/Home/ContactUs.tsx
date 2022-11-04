import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import contactAnimations from '../../assets/images/contactanimations.png';
import background3 from '../../assets/images/background3.png';
import ContactForm from '../../components/ContactForm';

const useStyles = makeStyles({
  contactUs: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1140px',
    margin: '0 auto',
    gap: '100px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
    '@media (max-width: 992px)': {
      justifyContent: 'center',
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      marginBottom: '128px',
      padding: '0 16px',
    },
  },
  contactLeft: {
    '@media (max-width: 1024px)': {
      width: '100%',
      height: 'auto',
    },
  },
  contactRight: {
    '@media (max-width: 1024px)': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flex: 1,
    },
  },
  contactTitle: {
    lineHeight: '20px',
    fontWeight: 600,
    color: '#FF64AE',
    marginBottom: 'var(--mt-12)',
    '@media (max-width: 1024px)': {
      width: '100%',
      maxWidth: 'initial',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  contactHeading: {
    maxWidth: '404px',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '48.5px',
    color: '#091156',
    marginBottom: '12px',
    '@media (max-width: 1024px)': {
      width: '100%',
      maxWidth: 'initial',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 992px)': {
      textAign: 'center',
    },
  },
  contactDesc: {
    fontWeight: 400,
    letterSpacing: '1px',
    lineHeight: '28px',
    color: 'var(--desc-text-color)',
    marginBottom: '44px',
    '@media (max-width: 1024px)': {
      width: '100%',
      maxWidth: 'initial',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 992px)': {
      textAign: 'center',
    },
  },
  background3: {
    position: 'absolute',
    bottom: '143px',
    width: '103.2%',
    left: '-150px',
    maxWidth: '1175.73px',
    zIndex: -1,
  },
});

function ContactUS() {
  const classes = useStyles();
  return (
    <Box className={classes.contactUs}>
      <img src={contactAnimations} className={classes.contactLeft} alt="contact animations" />
      <Box className={classes.contactRight}>
        <Box className={classes.contactTitle}>Contact Us</Box>
        <Box className={classes.contactHeading}>Send your inquiry to our expert team</Box>
        <Box className={classes.contactDesc}>Lorem ipsum dolor sit amet nulla turapis tellus.</Box>
        <ContactForm />
      </Box>
      <Box className={classes.background3}>
        <img src={background3} alt="background3" />
      </Box>
    </Box>
  );
}

export default ContactUS;
