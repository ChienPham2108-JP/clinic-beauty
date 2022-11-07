import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CenterTitleDesc from '../../components/CenterTitleDesc';
import BoxSection from '../../components/BoxSection';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import background1 from '../../assets/images/contact-background1.png';

const useStyles = makeStyles({
  team: {
    position: 'relative',
    paddingBottom: '150px',
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
  titleDesc: {},
  wrapBoxSection: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '87px -30px 0px',
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
  backgroundwrap: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  background: {
    width: '100%',
    height: 'auto',
  },
});

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

function SectionTeam() {
  const classes = useStyles();

  return (
    <Box className={classes.team}>
      <Box className={classes.backgroundwrap}>
        <img className={classes.background} src={background1} alt="background" />
      </Box>
      <Box className={classes.titleDesc}>
        <CenterTitleDesc
          subject="Professional Teams"
          heading="The Professional expert"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Box>
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

export default SectionTeam;
