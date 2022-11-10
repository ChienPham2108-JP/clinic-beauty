import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CenterTitleDesc from '../../components/CenterTitleDesc';
import serviceImg1 from '../../assets/images/our-service-img1.svg';
import serviceImg2 from '../../assets/images/our-service-img2.svg';
import serviceImg3 from '../../assets/images/our-service-img3.svg';
import serviceImg4 from '../../assets/images/our-service-img4.svg';

const useStyles = makeStyles({
  ourService: {
    margin: '229px auto 141px',
    maxWidth: '1110px',
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
  titleDesc: {
    marginBottom: '70px',
  },
  imageSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '68px',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      gap: '40px',
    },
  },
  imgWrap: {
    '@media (max-width: 1200px)': {
      width: '100%',
    },
  },
  imgWrap1: {
    '@media (max-width: 1200px)': {
      order: -1,
      width: '46%',
    },
    '@media (max-width: 576px)': {
      order: 'initial',
      width: '100%',
    },
  },
  imgService: {
    width: '100%',
    height: 'auto',
  },
});

function SectionOurServices() {
  const classes = useStyles();

  return (
    <Box className={classes.ourService}>
      <Box className={classes.titleDesc}>
        <CenterTitleDesc subject="Our Services" heading="We focus on your beauty" desc="Lorem ipsum dolor sit amet" />
      </Box>
      <Box className={classes.imageSection}>
        <Box className={classes.imgWrap1}>
          <img className={classes.imgService} src={serviceImg1} alt="Service" />
        </Box>
        <Box className={classes.imgWrap}>
          <img className={classes.imgService} src={serviceImg2} alt="Service" />
        </Box>
        <Box className={classes.imgWrap}>
          <img className={classes.imgService} src={serviceImg3} alt="Service" />
        </Box>
        <Box className={classes.imgWrap1}>
          <img className={classes.imgService} src={serviceImg4} alt="Service" />
        </Box>
      </Box>
    </Box>
  );
}

export default SectionOurServices;
