import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import ContactForm from '../../components/ContactForm';
import contactAnimations from '../../assets/images/contactanimations.png';
import Subject from '../../components/Subject';
import Heading from '../../components/Heading';
import Description from '../../components/Description';
import contactBackground from '../../assets/images/background-contactpage.png';

const useStyles = makeStyles({
  contactUs: {
    position: 'relative',
    maxWidth: '1140px',
    margin: '229px auto 112px',
    gap: '100px',
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
  contactTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '44px',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  contactDesc: {
    maxWidth: '427px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  contactBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      gap: '100px',
    },
  },
  contactLeft: {
    '@media (max-width: 1024px)': {
      width: '100%',
      height: 'auto',
    },
  },
  contactRight: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      width: '100%',
    },
  },
  wrapImg: {
    position: 'absolute',
    top: '84px',
    width: '100vw',
    height: 'auto',
    zIndex: -1,
  },
  background: {
    width: '100%',
    height: 'auto',
  },
});

function SectionContactForm() {
  const classes = useStyles();

  return (
    <Box className={classes.contactUs}>
      <Box className={classes.contactTop}>
        <Box className={classes.contactLeft}>
          <Subject margin="0 0 12px 0">Contact Us</Subject>
          <Heading secondary={false} margin="0 98px 14px 0">
            Contact service for our customers
          </Heading>
        </Box>
        <Box className={classes.contactDesc}>
          <Description margin="0 20px 0 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </Description>
        </Box>
      </Box>
      <Box className={classes.contactBottom}>
        <img src={contactAnimations} className={classes.contactLeft} alt="contact animations" />
        <Box className={classes.contactRight}>
          <ContactForm />
        </Box>
      </Box>
      <Box className={classes.wrapImg}>
        <img src={contactBackground} className={classes.background} alt="contact background" />
      </Box>
    </Box>
  );
}

export default SectionContactForm;
