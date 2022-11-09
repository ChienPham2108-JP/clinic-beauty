import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Slider from 'react-slick';

import CenterTitleDesc from '../../components/CenterTitleDesc';
import TestimonialsItem from '../../components/TestimonialsItem';
import arrowLeft from '../../assets/images/arrow-left.png';
import arrowRight from '../../assets/images/arrow-right.png';

import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';

const useStyles = makeStyles({
  testimonials: {
    marginBottom: '86px',
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
  topTestimonials: {
    marginBottom: '61px',
  },
  bottomTestimonials: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: '544px',
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

const testimonialsData = [
  {
    id: 1,
    img: client1,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
  },
  {
    id: 2,
    img: client2,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
  },
  {
    id: 3,
    img: client3,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
  },
];

function SectionOurTestimonials() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrow: true,
    nextArrow: <img src={arrowRight} alt="Arrow right" />,
    prevArrow: <img src={arrowLeft} alt="Arrow left" />,
  };

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
        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <TestimonialsItem key={item.id} img={item.img} desc={item.comment} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default SectionOurTestimonials;
