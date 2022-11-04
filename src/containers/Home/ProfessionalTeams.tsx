import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BoxSection from '../../components/BoxSection';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import CenterTitleDesc from '../../components/CenterTitleDesc';

const teamData = [
  {
    id: 1,
    img: avatar1,
    position: 'Surgeon',
    heading: 'Briyan Nevalli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    social1: twitter,
    social2: facebook,
    social3: instagram,
    center: false,
  },
  {
    id: 2,
    img: avatar2,
    position: 'Dermatologist',
    heading: 'Bella sebastian',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    social1: twitter,
    social2: facebook,
    social3: instagram,
    center: true,
  },
  {
    id: 3,
    img: avatar3,
    position: 'Stylist expert',
    heading: 'Lilly Adams',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    social1: twitter,
    social2: facebook,
    social3: instagram,
    center: false,
  },
];

const useStyles = makeStyles({
  team: {
    maxWidth: '1084px',
    margin: '0 auto 144px',
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
  teamTop: {
    marginBottom: '87px',
  },
  teamTitle: {
    fontWeight: 600,
    lineHeight: '20px',
    textAlign: 'center',
    color: 'var(--primary-color)',
    marginBottom: 'var(--mt-12)',
  },
  teamHeading: {
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '53px',
    textAlign: 'center',
    color: 'var(--text-color)',
    marginBottom: 'var(--mt-12)',
  },
  teamDesc: {
    textAlign: 'center',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    paddingBottom: '27px',
    marginBottom: '84px',
  },
  teamBottom: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 -30px',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  staffWrap: {
    width: '28%',
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
    width: '44%',
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
    boxShadow: '0 25px 50px 25px #F7F7FF',
    borderRadius: '42px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
});

function Team() {
  const classes = useStyles();
  return (
    <Box className={classes.team}>
      <Box className={classes.teamTop}>
        <CenterTitleDesc
          subject="Professional Teams"
          heading="The Professional expert"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Box>
      <Box className={classes.teamBottom}>
        {teamData.map((item) => (
          <BoxSection
            key={item.id}
            img={item.img}
            position={item.position}
            heading={item.heading}
            desc={item.desc}
            social1={item.social1}
            social2={item.social2}
            social3={item.social3}
            center={item.center}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Team;
