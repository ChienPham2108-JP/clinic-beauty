import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import background1 from '../../assets/images/home2-background1.svg';
import playBtn from '../../assets/images/transparent-playbtn.png';

const useStyles = makeStyles({
  mainSlider: {
    position: 'relative',
    padding: '307px 0 314px',
    height: '918px',
    background: `url('${background1}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '158px',
    '@media (max-width: 992px)': {
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '@media (max-width: 576px)': {
      padding: '120px 0',
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1140px',
    margin: '0 auto',
    gap: '48px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
      flexDirection: 'column',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  leftSlider: {
    maxWidth: '502px',
    '@media (max-width: 992px)': {
      maxWidth: 'initial',
      textAlign: 'center',
    },
  },
  rightSlider: {
    display: 'flex',
    gap: '46px',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    marginRight: '145px',
    '@media (max-width: 992px)': {
      margin: '0 auto',
      flexDirection: 'column',
    },
  },
  heading: {
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '60px',
    color: '#FFFFFF',
    paddingBottom: '13px',
  },
  desc: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: '#D8DCFF',
    paddingBottom: '6px',
    marginBottom: '34px',
  },
  detailsBtn: {
    border: '1px solid #FFFFFF',
    borderRadius: '15px',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: '#FFFFFF',
    padding: '14px 31px 14px 29px',
  },
  wrapBtn: {
    margin: '-19px',
  },
  button: {},
  textBtn: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: '#FFFFFF',
  },
  // wrapBackground: {
  //   position: 'absolute',
  //   top: 0,
  //   zIndex: -1,
  // },
});

function MainSlider() {
  const classes = useStyles();

  return (
    <Box className={classes.mainSlider}>
      {/* <Box className={classes.wrapBackground}>
        <img src={background1} alt="background" />
      </Box> */}
      <Box className={classes.wrapper}>
        <Box className={classes.leftSlider}>
          <Box className={classes.heading}>Your beauty center place</Box>
          <Box className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna
            consequat neque vitae lobortis.
          </Box>
          <Box>
            <Button variant="outlined" className={`${classes.detailsBtn} light-btn`}>
              More Details
            </Button>
          </Box>
        </Box>
        <Link to="/home2" className={classes.rightSlider}>
          <Box className={classes.wrapBtn}>
            <img className={classes.button} src={playBtn} alt="Button" />
          </Box>
          <Box className={classes.textBtn}>Tour Video</Box>
        </Link>
      </Box>
    </Box>
  );
}

export default MainSlider;
