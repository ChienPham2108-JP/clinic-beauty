import { Button, Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import contactAnimations from '../../assets/images/contactanimations.png';
import background3 from '../../assets/images/background3.png';

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
  contactForm: {
    maxWidth: '520px',
    '@media (max-width: 1024px)': {
      width: '100%',
      maxWidth: 'initial',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  name: {
    color: 'var(--text-color)',
    fontSize: '18px',
    marginBottom: 0,
    lineHeight: '40px',
    display: 'flex',
    gap: '35.58px',
    '@media (max-width: 1024px)': {
      width: '100%',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: 0,
    },
  },
  fname: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  lname: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  email: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  subjectMessage: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  inquiry: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    lineHeight: '28px',
    height: '239.47px',
    marginBottom: '54.84px',
    resize: 'vertical',
  },
  submitBtn: {
    textTransform: 'capitalize',
    fontFamily: `'Poppins',sans-serif`,
    fontWeight: 600,
    fontSize: '16px',
    color: 'var(--white-color)',
    background: 'var(--primary-color)',
    borderRadius: '50px',
    display: 'inline-block',
    padding: '15px 64.85px',
    marginTop: '-2.97px',
    letterSpacing: '0.1em',
    '&:hover': {
      background: 'var(--primary-color)',
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
        <form className={classes.contactForm}>
          <Box className={classes.name}>
            <input className={classes.fname} placeholder="First name" />
            <input className={classes.lname} placeholder="Last name" />
          </Box>
          <input className={classes.email} type="email" placeholder="Email address" />
          <input className={classes.subjectMessage} type="text" placeholder="Subject message" />
          <textarea defaultValue={'Your inquiry here'} className={classes.inquiry} />
          <Button className={classes.submitBtn} type="submit">
            Send Values
          </Button>
        </form>
      </Box>
      <Box className={classes.background3}>
        <img src={background3} alt="background3" />
      </Box>
    </Box>
  );
}

export default ContactUS;
