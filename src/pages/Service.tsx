import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import {
  SectionBeautyConsultation,
  SectionBeautyProduct,
  SectionFAQ,
  SectionOurServices,
  SectionSkinTreatment,
  SectionSlogan,
} from '../containers/Service';
import background1 from '../assets/images/service-background1.svg';

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
  },
  backgroundWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: -1,
  },
  background: {
    objectFit: 'contain',
    width: '100%',
    height: 'auto',
  },
});

function Service() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box className={classes.wrapper}>
        <SectionOurServices />
        <Box className={classes.backgroundWrap}>
          <img className={classes.background} src={background1} alt="Background" />
        </Box>
      </Box>
      <SectionBeautyConsultation />
      <SectionSkinTreatment />
      <SectionBeautyProduct />
      <SectionSlogan />
      <SectionFAQ />
    </>
  );
}

export default Service;
