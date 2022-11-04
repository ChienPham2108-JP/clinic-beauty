import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Description from '../../components/Description';
import Heading from '../../components/Heading';
import Subject from '../../components/Subject';

const useStyles = makeStyles({
  quota: {
    maxWidth: '1140px',
    margin: '120px auto 85px',
    display: 'flex',
    alignItems: 'center',
    gap: '125px',
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
  quotaLeft: {
    '@media (max-width: 1024px)': {
      textAlign: 'center',
    },
  },
  quotaRight: {},
  quotaSubject: {
    marginBottom: '12px',
  },
  quotaHeading: {
    marginBottom: '18px',
    paddingBottom: '4px',
  },
  quotaDesc: {
    maxWidth: '561px',
    paddingBottom: '16px',
    '@media (max-width: 1024px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  quotaBtn: {
    textTransform: 'capitalize',
    fontFamily: `'Poppins',sans-serif`,
    fontWeight: 600,
    fontSize: '16px',
    color: 'var(--white-color)',
    background: 'var(--primary-color)',
    borderRadius: '50px',
    display: 'inline-block',
    padding: '15px 51.75px',
    whiteSpace: 'nowrap',
    marginRight: '57px',
    letterSpacing: '0.1em',
    '@media (max-width: 1024px)': {
      marginRight: 0,
    },
    '&:hover': {
      background: 'var(--primary-color)',
    },
  },
});

function SectionGetTheQuota() {
  const classes = useStyles();

  return (
    <Box className={classes.quota}>
      <Box className={classes.quotaLeft}>
        <Box className={classes.quotaSubject}>
          <Subject margin="0">Get The Quota</Subject>
        </Box>
        <Box className={classes.quotaHeading}>
          <Heading secondary={false} margin="0">
            Want to be handled by our professional team immediately?
          </Heading>
        </Box>
        <Box className={classes.quotaDesc}>
          <Description margin="0">
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
          </Description>
        </Box>
      </Box>
      <Box className={classes.quotaRight}>
        <Button variant="contained" className={classes.quotaBtn}>
          Make an Appointment
        </Button>
      </Box>
    </Box>
  );
}

export default SectionGetTheQuota;
