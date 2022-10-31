import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    imgCard: card1,
    heading: 'Beauty consultation',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
  {
    imgCard: card2,
    heading: 'Beauty consultation',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
  {
    imgCard: card3,
    heading: 'Beauty consultation',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
];

const useStyles = makeStyles({
  services: {
    maxWidth: '1140px',
    margin: '0 auto',
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
  servicesTop: {
    marginTop: '131px',
    marginBottom: '82px',
  },
  mainServices: {
    fontWeight: 600,
    lineHeight: '20px',
    textAlign: 'center',
    color: 'var(--primary-color)',
  },
  servicesHeading: {
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '48.5px',
    textAlign: 'center',
    color: 'var(--text-color)',
    maxWidth: '460.3px',
    margin: 'var(--mt-12) auto var(--mt-12)',
  },
  servicesDesc: {
    maxWidth: '848px',
    margin: '0 auto',
    fontWeight: 400,
    lineHeight: '25.5px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
  },
  servicesBottom: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 -27.5px',
    textAlign: 'center',
    '@media screen and (max-width: 1200px)': {
      maxWidth: '1140px',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

function Services() {
  const classes = useStyles();

  return (
    <Box className={classes.services}>
      <Box className={classes.servicesTop}>
        <Box className={classes.mainServices}>Main Services</Box>
        <Box className={classes.servicesHeading}>Learn services to focus on your beauty</Box>
        <Box className={classes.servicesDesc}>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus
          sagittis, scelerisque eget nulla turpis.
        </Box>
      </Box>
      <Box className={classes.servicesBottom}>
        {servicesData.map((item) => (
          <ServiceCard img={item.imgCard} heading={item.heading} desc={item.desc} />
        ))}
      </Box>
    </Box>
  );
}

export default Services;
