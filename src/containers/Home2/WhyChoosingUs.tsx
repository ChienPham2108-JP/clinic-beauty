import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import background2 from '../../assets/images/home2-background2.svg';
import Heading from '../../components/Heading';
import icon4 from '../../assets/images/home2-icon-4.svg';
import icon5 from '../../assets/images/home2-icon-5.svg';
import icon6 from '../../assets/images/home2-icon-6.svg';
import icon7 from '../../assets/images/home2-icon-7.svg';

const useStyles = makeStyles({
  choosingUs: {
    height: '697.5px',
    background: `url('${background2}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '272px 0 244.5px',
    marginBottom: '110.5px',
    '@media (max-width: 1200px)': {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
    },
  },
  wrapper: {
    display: 'flex',
    maxWidth: '1140px',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
      justifyContent: 'center',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      gap: '24px',
      textAlign: 'center',
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  choosingLeft: {
    maxWidth: '486px',
  },
  descLeft: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: '#D8DCFF',
  },
  choosingRight: {
    maxWidth: '483px',
    display: 'flex',
    marginRight: '28px',
    flexWrap: 'wrap',
    gap: '43px',
    justifyContent: 'space-between',
    '@media (max-width: 1024px)': {
      margin: 0,
    },
  },
  wrapIcon: {
    '@media (max-width: 576px)': {
      width: '40%',
    },
  },
  Icon: {
    '@media (max-width: 576px)': {
      width: '100%',
      height: 'auto',
    },
  },
});

function WhyChoosingUs() {
  const classes = useStyles();
  return (
    <Box className={classes.choosingUs}>
      <Box className={classes.wrapper}>
        <Box className={classes.choosingLeft}>
          <Heading secondary={true} margin="0 0 12px 0">
            Why choosing us?
          </Heading>
          <Box className={classes.descLeft}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
          </Box>
        </Box>
        <Box className={classes.choosingRight}>
          <Box className={classes.wrapIcon}>
            <img className={classes.Icon} src={icon4} alt="icon" />
          </Box>
          <Box className={classes.wrapIcon}>
            <img className={classes.Icon} src={icon5} alt="icon" />
          </Box>
          <Box className={classes.wrapIcon}>
            <img className={classes.Icon} src={icon6} alt="icon" />
          </Box>
          <Box className={classes.wrapIcon}>
            <img className={classes.Icon} src={icon7} alt="icon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WhyChoosingUs;
