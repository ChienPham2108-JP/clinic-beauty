import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Heading from '../../components/Heading';
import background2 from '../../assets/images/gallery-background2.png';
import background1 from '../../assets/images/gallery-background1.png';
import playBtn from '../../assets/images/gallery-playbtn.png';
import Description from '../../components/Description';

const useStyles = makeStyles({
  videoTour: {
    position: 'relative',
    background: `url(${background2})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    marginBottom: '120px',
    padding: '170px 0 146px',
    textAlign: 'center',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (max-width: 992px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  tourHeading: {
    marginBottom: '13px',
  },
  tourDesc: {
    maxWidth: '555px',
    margin: '0 auto',
    marginBottom: '41px',
  },
  playBtn: {
    '&:hover': {
      opacity: '0.65',
      cursor: 'pointer',
    },
    '&:active': {
      color: 'var(--text-color)',
    },
  },
  tourBackground: {
    position: 'absolute',
    right: 0,
    top: '100%',
    zIndex: -1,
  },
});

function SectionVideoTour() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.videoTour}>
        <Box className={classes.tourHeading}>
          <Heading secondary={true} margin="0">
            Watch the video tour
          </Heading>
        </Box>
        <Box className={classes.tourDesc}>
          <Description margin="0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </Description>
        </Box>
        <Box>
          <img className={classes.playBtn} src={playBtn} alt="" />
        </Box>
        <Box className={classes.tourBackground}>
          <img src={background1} alt="background" />
        </Box>
      </Box>
    </Box>
  );
}

export default SectionVideoTour;
