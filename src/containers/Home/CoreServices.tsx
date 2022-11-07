import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CenterTitleDesc from '../../components/CenterTitleDesc';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import ServiceCard from '../../components/ServiceCard';

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
    marginBottom: '82px',
  },
  servicesBottom: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 -27.5px -30px',
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

const servicesData = [
  {
    id: 1,
    imgCard: card1,
    heading: 'Beauty consultation',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
  {
    id: 2,
    imgCard: card2,
    heading: 'Beauty consultation',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
  {
    id: 3,
    imgCard: card3,
    heading: 'Beauty consultation',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
];

function CoreServices() {
  const classes = useStyles();

  return (
    <Box className={classes.services}>
      <Box className={classes.servicesTop}>
        <CenterTitleDesc
          subject="Main Services"
          heading="Learn services to focus on your beauty"
          desc="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus
          sagittis, scelerisque eget nulla turpis."
        />
      </Box>
      <Box className={classes.servicesBottom}>
        {servicesData.map((item) => (
          <ServiceCard key={item.id} img={item.imgCard} heading={item.heading} desc={item.desc} />
        ))}
      </Box>
    </Box>
  );
}

export default CoreServices;
