import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import CenterTitleDesc from '../../components/CenterTitleDesc';
import clientLogo1 from '../../assets/images/about-LOGO1.png';
import clientLogo2 from '../../assets/images/about-LOGO2.png';
import clientLogo3 from '../../assets/images/about-LOGO3.png';
import clientLogo4 from '../../assets/images/about-LOGO4.png';
import clientLogo5 from '../../assets/images/about-LOGO5.png';

const useStyles = makeStyles({
  clients: {
    maxWidth: '962px',
    margin: '0 auto 123px',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column-reverse',
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
  titleDesc: {
    marginBottom: '94px',
  },
  clientsLogoWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '56px',
    justifyContent: 'center',
  },
});

function SectionClients() {
  const classes = useStyles();

  return (
    <Box className={classes.clients}>
      <Box className={classes.titleDesc}>
        <CenterTitleDesc
          subject="Our Clients"
          heading="Well-known agencies"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Box>
      <Box className={classes.clientsLogoWrap}>
        <Link to="">
          <img src={clientLogo1} alt="Client Logo" />
        </Link>
        <Link to="">
          <img src={clientLogo2} alt="Client Logo" />
        </Link>
        <Link to="">
          <img src={clientLogo3} alt="Client Logo" />
        </Link>
        <Link to="">
          <img src={clientLogo4} alt="Client Logo" />
        </Link>
        <Link to="">
          <img src={clientLogo5} alt="Client Logo" />
        </Link>
      </Box>
    </Box>
  );
}

export default SectionClients;
