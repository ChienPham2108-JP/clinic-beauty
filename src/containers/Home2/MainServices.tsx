import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import CenterTitleDesc from '../../components/CenterTitleDesc';
import ServiceCard from './components/ServiceCard';
import icon1 from '../../assets/images/home2-icon-1.svg';
import icon2 from '../../assets/images/home2-icon-2.svg';
import icon3 from '../../assets/images/home2-icon-3.svg';

const useStyles = makeStyles({
  services: {},
  servicesTop: {
    marginBottom: '68px',
  },
  servicesBottom: {
    maxWidth: '981px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 auto 62px',
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
    img: icon1,
    heading: 'Beauty consultation',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 2,
    img: icon2,
    heading: 'Skin treatments',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 3,
    img: icon3,
    heading: 'Beauty product',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
];

function MainServices() {
  const classes = useStyles();

  return (
    <Box className={classes.services}>
      <Box className={classes.servicesTop}>
        <CenterTitleDesc subject="Main Services" heading="Our focus services" desc="Lorem ipsum dolor sit amet." />
      </Box>
      <Box className={classes.servicesBottom}>
        {servicesData.map((item) => (
          <ServiceCard key={item.id} img={item.img} heading={item.heading} desc={item.desc} />
        ))}
      </Box>
    </Box>
  );
}

export default MainServices;
