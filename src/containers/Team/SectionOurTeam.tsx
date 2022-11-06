import { Box, makeStyles } from '@material-ui/core';

import CenterTitleDesc from '../../components/CenterTitleDesc';
import BoxSection from '../../components/BoxSection';
import background from '../../assets/images/team-background1.png';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';

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
  ourTeam: {
    position: 'relative',
    maxWidth: '1085px',
    margin: '229px auto 153px',
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
  wrapBoxSection: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '93px -30px 153px',
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
  backgroundWrap: {
    position: 'absolute',
    top: 0,
    right: '-150px',
    zIndex: -1,
  },
  background: {
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
});

function SectionOurTeam() {
  const classes = useStyles();

  return (
    <Box className={classes.ourTeam}>
      <Box className={classes.backgroundWrap}>
        <img className={classes.background} src={background} alt="Background" />
      </Box>
      <CenterTitleDesc
        subject="Our Team"
        heading="We are Professional"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      />
      <Box className={classes.wrapBoxSection}>
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

export default SectionOurTeam;
