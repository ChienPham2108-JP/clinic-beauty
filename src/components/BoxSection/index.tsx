/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IBoxSectionProps {
  img: string;
  position: string;
  heading: string;
  desc: string;
  social1: any;
  social2: any;
  social3: any;
  center: boolean;
}

const useStyles = makeStyles({
  staffWrap: {
    width: '270px',
    margin: '0 30px',
    '@media (max-width: 1024px)': {
      width: '100%',
      padding: '90px 60px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  staffWrapCenter: {
    width: '420px',
    margin: '0 30px',
    '@media (max-width: 1024px)': {
      width: '100%',
      padding: '90px 60px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  staffCard: {
    width: '100%',
    maxWidth: '270px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
      paddingTop: '91px',
      paddingBottom: '96px',
      background: 'var(--white-color)',
      borderRadius: '42px',
      boxShadow: '0px 25px 50px 25px #F7F7FF',
    },
    '@media (max-width: 992px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  staffCardImg: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginBottom: '53px',
    cursor: 'pointer',
  },
  staffCardPosition: {
    fontWeight: 600,
    lineHeight: '20px',
    color: 'var(--primary-color)',
    marginBottom: '15px',
  },
  staffCardName: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    color: 'var(--text-color)',
    marginBottom: '6px',
    paddingBottom: '15px',
    cursor: 'pointer',
  },
  staffCardDesc: {
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    marginBottom: '50px',
  },
  staffCardCenterDesc: {
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    marginBottom: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '270px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  staffCardContacts: {
    display: 'flex',
    justifyContent: 'center',
    margin: '-15px',
  },
  staffCardSocial: {
    marginLeft: '2px',
    marginRight: '2px',
  },
  staffCardSocialImg: {
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    display: 'inline-block',
  },
  staffCardCenter: {
    maxWidth: '424px',
    paddingTop: '91px',
    paddingBottom: '96px',
    background: 'var(--white-color)',
    boxShadow: '0px 25px 50px 25px #F7F7FF',
    borderRadius: '42px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
    '@media (max-width: 992px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

const BoxSection = ({ img, position, heading, desc, social1, social2, social3, center }: IBoxSectionProps) => {
  const classes = useStyles();

  return (
    <>
      <Box className={`${center ? classes.staffWrapCenter : classes.staffWrap} infoWrap`}>
        <Box className={`${center ? classes.staffCardCenter : classes.staffCard}  infoCard`}>
          <img src={img} alt="" width="146" height="146" className={`${classes.staffCardImg} infoImg`} />
          <Box className={`${classes.staffCardPosition} inforPosition`}>{position}</Box>
          <Box className={`${classes.staffCardName}  infoHeading`}>{heading}</Box>
          <Box className={`${center ? classes.staffCardCenterDesc : classes.staffCardDesc}  infoDesc`}>{desc}</Box>
          {social1 ? (
            <Box className={classes.staffCardContacts}>
              <Link to="/" className={classes.staffCardSocial}>
                <img src={social1} alt="Socials" className={classes.staffCardSocialImg} />
              </Link>
              <Link to="/" className={classes.staffCardSocial}>
                <img src={social2} alt="Socials" className={classes.staffCardSocialImg} />
              </Link>
              <Link to="/" className={classes.staffCardSocial}>
                <img src={social3} alt="Socials" className={classes.staffCardSocialImg} />
              </Link>
            </Box>
          ) : undefined}
        </Box>
      </Box>
    </>
  );
};

export default BoxSection;
