import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Subject from '../../components/Subject';
import Heading from '../../components/Heading';
import Description from '../../components/Description';
import gallery1 from '../../assets/images/gallery1.png';
import gallery2 from '../../assets/images/gallery2.png';
import gallery3 from '../../assets/images/gallery3.png';
import gallery4 from '../../assets/images/gallery4.png';
import gallery5 from '../../assets/images/gallery5.png';
import gallery6 from '../../assets/images/gallery6.png';
import gallery7 from '../../assets/images/gallery7.png';
import gallery8 from '../../assets/images/gallery8.png';
import gallery9 from '../../assets/images/gallery9.png';
import ImgCard from './components/ImgCard';

const galleryData = [
  {
    id: 1,
    img: gallery1,
  },
  {
    id: 2,
    img: gallery2,
  },
  {
    id: 3,
    img: gallery3,
  },
  {
    id: 4,
    img: gallery4,
  },
  {
    id: 5,
    img: gallery5,
  },
  {
    id: 6,
    img: gallery6,
  },
  {
    id: 7,
    img: gallery7,
  },
  {
    id: 8,
    img: gallery8,
  },
  {
    id: 9,
    img: gallery9,
  },
];

const useStyles = makeStyles({
  ourGallery: {
    position: 'relative',
    maxWidth: '1140px',
    margin: '229px auto 126px',
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
  galleryTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '75px',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  galleryLeft: {
    '@media (max-width: 1024px)': {
      width: '100%',
      height: 'auto',
    },
  },
  galleryDesc: {
    maxWidth: '427px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  galleryBottom: {
    margin: '0 -18px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  galleryBottomDesc: {
    maxWidth: '660px',
    margin: '28px 18px 0',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',

    color: '#8B8B8B',
  },
  bold: {
    fontWeight: 600,
    color: '#091156',
  },
});

function SectionOurGallery() {
  const classes = useStyles();

  return (
    <Box className={classes.ourGallery}>
      <Box className={classes.galleryTop}>
        <Box className={classes.galleryLeft}>
          <Subject margin="0 0 12px 0">Our Gallery</Subject>
          <Heading secondary={false} margin="0 98px 14px 0">
            Check out the collection pictures from our clinic
          </Heading>
        </Box>
        <Box className={classes.galleryDesc}>
          <Description margin="0 20px 0 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </Description>
        </Box>
      </Box>
      <Box className={classes.galleryBottom}>
        {galleryData.map((item) => (
          <ImgCard key={item.id} img={item.img} />
        ))}
        <Box className={classes.galleryBottomDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
          magna fringilla urna, porttitor rhoncus dolor purus non enim, <span className={classes.bold}>our teams.</span>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionOurGallery;
