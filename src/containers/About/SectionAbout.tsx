import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Description from '../../components/Description';
import Heading from '../../components/Heading';
import Subject from '../../components/Subject';
import background1 from '../../assets/images/about-background1.png';
import playBtn from '../../assets/images/about-play-button.png';

const useStyles = makeStyles({
  about: {
    position: 'relative',
    maxWidth: '1140px',
    margin: '229px auto 136px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
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
  topAbout: {
    marginBottom: '58px',
  },
  subjectAbout: {},
  headingAbout: {
    maxWidth: '732px',
    marginBottom: '12px',
    paddingBottom: '7px',
  },
  descAbout: {
    maxWidth: '680px',
    paddingBottom: '8px',
  },
  bottomAbout: {
    padding: '226px 0',
    background: `url('${background1}')`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playWrap: {
    margin: '-43px',
  },
  playBtn: {
    '&:hover': {
      opacity: '0.65',
    },
  },
});

function SectionAbout() {
  const classes = useStyles();

  return (
    <Box className={classes.about}>
      <Box className={classes.topAbout}>
        <Box className={classes.subjectAbout}>
          <Subject margin="0 0 12px 0">About</Subject>
        </Box>
        <Box className={classes.headingAbout}>
          <Heading margin="0" secondary={false}>
            We are a leading beauty clinic that has been around since 2002
          </Heading>
        </Box>
        <Box className={classes.descAbout}>
          <Description margin="0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </Description>
        </Box>
      </Box>
      <Box className={classes.bottomAbout}>
        <Box className={classes.playWrap}>
          <img className={classes.playBtn} src={playBtn} alt="Play Button" />
        </Box>
      </Box>
    </Box>
  );
}

export default SectionAbout;
