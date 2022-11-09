import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import phoneVolume from '../../assets/images/phone-volume.svg';
import Heading from '../../components/Heading';

const useStyles = makeStyles({
  callServices: {
    maxWidth: '1140px',
    margin: '0 auto 121px',
    display: 'flex',
    gap: '24px',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      justifyContent: 'center',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  callServicesLeft: {
    maxWidth: '391px',
  },
  heading: {
    marginBottom: '12px',
    paddingBottom: '5px',
  },
  desc: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: '#8B8B8B',
    paddingBottom: '12px',
    '& span': {
      fontWeight: 600,
      color: '#091156',
    },
  },
  callServicesRight: {
    maxWidth: '658px',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  input: {
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    borderRadius: '25px',
    position: 'relative',
    padding: '0 113px 0 0',
    marginBottom: '8px',
    '@media (max-width: 768px)': {
      width: '100%',
    },
    '& input': {
      border: 'none',
      outline: 'none',
      width: '545px',
      fontFamily: 'Poppins',
      paddingLeft: '37px',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '73px',
      letterSpacing: '0.1em',
      '@media (max-width: 768px)': {
        width: '100%',
        maxWidth: '545px',
      },
    },
  },
  wrapBtn: {
    position: 'absolute',
    padding: '18px 41px 17px 34px',
    top: 0,
    right: 0,
    background: '#FF64AE',
    borderRadius: '0px 25px 25px 0px',
    '&:hover': {
      opacity: '0.65',
      cursor: 'pointer',
    },
  },
  detail: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.1em',
    color: '#8B8B8B',
  },
});

function RequestCallServices() {
  const classes = useStyles();

  return (
    <Box className={classes.callServices}>
      <Box className={classes.callServicesLeft}>
        <Box className={classes.heading}>
          <Heading margin="0" secondary={false}>
            Request call services
          </Heading>
        </Box>
        <Box className={classes.desc}>
          Lorem ipsum dolor sit amet, consect adipiscing elit <span>Contact Us</span>.
        </Box>
      </Box>
      <Box className={classes.callServicesRight}>
        <Box className={classes.input}>
          <input type="text" placeholder="Insert your phone number here ..." />
          <Box className={classes.wrapBtn}>
            <img src={phoneVolume} alt="Phone icon" />
          </Box>
        </Box>
        <div className={classes.detail}>Toll free for our coverage areas.</div>
      </Box>
    </Box>
  );
}

export default RequestCallServices;
