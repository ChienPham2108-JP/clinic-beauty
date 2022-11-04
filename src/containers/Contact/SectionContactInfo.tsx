import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CenterTitleDesc from '../../components/CenterTitleDesc';

import mapMarkerAlt from '../../assets/images/map-marker-alt.png';
import phoneAlt from '../../assets/images/phone-alt.png';
import mailkBulk from '../../assets/images/mail-bulk.png';
import BoxSection from '../../components/BoxSection';

const useStyles = makeStyles({
  info: {
    maxWidth: '1038px',
    margin: '112px auto 124px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  topInfo: {
    marginBottom: '93px',
  },
  bottomInfo: {
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
});

const infoData = [
  {
    id: 1,
    img: mapMarkerAlt,
    position: 'Address',
    heading: '101 Baker Street, NY',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    center: false,
    social1: undefined,
    social2: undefined,
    social3: undefined,
  },
  {
    id: 2,
    img: phoneAlt,
    position: 'Phone',
    heading: '+896 120 5889',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    center: true,
    social1: undefined,
    social2: undefined,
    social3: undefined,
  },
  {
    id: 3,
    img: mailkBulk,
    position: 'Mail',
    heading: 'mail@company.com',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    center: false,
    social1: undefined,
    social2: undefined,
    social3: undefined,
  },
];

function SectionContactInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.info}>
      <Box className={classes.topInfo}>
        <CenterTitleDesc
          subject="Get in Touch"
          heading="Get direct handling by us"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Box>
      <Box className={`${classes.bottomInfo} bottomInfo`}>
        {infoData.map((item) => (
          <BoxSection
            key={item.id}
            img={item.img}
            position={item.position}
            heading={item.heading}
            desc={item.desc}
            center={item.center}
            social1={item.social1}
            social2={item.social2}
            social3={item.social3}
          />
        ))}
      </Box>
    </Box>
  );
}

export default SectionContactInfo;
