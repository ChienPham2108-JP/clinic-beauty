import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Description from '../Description';
import client1 from '../../assets/images/client1.png';
import star from '../../assets/images/star.png';

const useStyles = makeStyles({
  wrapper: {
    marginBottom: '86px',
  },
  wrapImg: {
    marginBottom: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {},
  desc: {
    textAlign: 'center',
    marginBottom: '33px',
  },
  wrapStar: {
    display: 'flex',
    justifyContent: 'center',
  },
  star: {},
});

interface ITestimonialsItemProps {}

// eslint-disable-next-line no-empty-pattern
const TestimonialsItem = ({}: ITestimonialsItemProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.wrapImg}>
        <img className={classes.Img} src={client1} alt="" />
      </Box>
      <Box className={classes.desc}>
        <Description margin="0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies
          condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum
          morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.
        </Description>
      </Box>
      <Box className={classes.wrapStar}>
        <img className={classes.star} src={star} alt="" />
      </Box>
    </Box>
  );
};

export default TestimonialsItem;
