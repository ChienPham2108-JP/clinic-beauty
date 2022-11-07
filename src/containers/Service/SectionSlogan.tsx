import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import background2 from '../../assets/images/service-background2.svg';
import Description from '../../components/Description';
import Heading from '../../components/Heading';
import playBtn from '../../assets/images/transparent-playbtn.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  slogan: {
    padding: '182px 0',
    marginBottom: '116px',
    background: `url('${background2}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '@media (max-width: 1024px)': {
      padding: '99.5px 0',
    },
  },
  wrapContent: {
    maxWidth: '1140px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    '@media (max-width: 992px)': {
      justifyContent: 'center',
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  sloganTitleDesc: {
    maxWidth: '600px',
  },
  sloganHeading: {
    marginBottom: '12px',
    paddingBottom: '7px',
  },
  sloganDesc: {
    paddingBottom: '8px',
  },
  wrapBtn: {
    marginRight: '61px',
    fontweight: 600,
    fontsize: '16px',
    lineheight: '24px',
    letterspacing: '0.1em',
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
    '@media (max-width: 1024px)': {
      margin: 0,
    },
  },
  playBtn: {
    marginRight: '28px',
    '@media (max-width: 576px)': {
      margin: 0,
    },
  },
  descBtn: {
    display: 'inline',
    '@media (max-width: 576px)': {
      display: 'none',
    },
  },
});

function SectionSlogan() {
  const classes = useStyles();

  return (
    <Box className={classes.slogan}>
      <Box className={classes.wrapContent}>
        <Box className={classes.sloganTitleDesc}>
          <Box className={classes.sloganHeading}>
            <Heading secondary={true} margin="0">
              Best responsibility and service for our customers
            </Heading>
          </Box>
          <Box className={classes.sloganDesc}>
            <Description margin="0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
            </Description>
          </Box>
        </Box>
        <Link to="" className={classes.wrapBtn}>
          <img className={classes.playBtn} src={playBtn} alt="Play button" />
          <Box className={classes.descBtn}>Treatments Videos</Box>
        </Link>
      </Box>
    </Box>
  );
}

export default SectionSlogan;
