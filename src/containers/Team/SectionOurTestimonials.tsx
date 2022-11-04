import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import CenterTitleDesc from '../../components/CenterTitleDesc';
import TestimonialsItem from '../../components/TestimonialsItem';
import arrowLeft from '../../assets/images/arrow-left.png';
import arrowRight from '../../assets/images/arrow-right.png';

const useStyles = makeStyles({
  testimonials: {},
  topTestimonials: {
    marginBottom: '61px',
  },
  bottomTestimonials: {
    position: 'relative',
  },
  slider: {
    maxWidth: '544px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  arrowLeft: {
    position: 'absolute',
    left: '334.56px',
    top: '133.84px',
  },
  arrowRight: {
    position: 'absolute',
    right: '334.56px',
    top: '133.84px',
  },
});

function SectionOurTestimonials() {
  const classes = useStyles();

  return (
    <Box className={classes.testimonials}>
      <Box className={classes.topTestimonials}>
        <CenterTitleDesc
          subject="Our Testimonials"
          heading="What our customer says"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </Box>
      <Box className={classes.bottomTestimonials}>
        <Box className={classes.arrowLeft}>
          <img src={arrowLeft} alt="Arrow" />
        </Box>
        <Box className={classes.slider}>
          <TestimonialsItem />
        </Box>
        <Box className={classes.arrowRight}>
          <img src={arrowRight} alt="Arrow" />
        </Box>
      </Box>
    </Box>
  );
}

export default SectionOurTestimonials;
