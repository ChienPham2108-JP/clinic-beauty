import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import star from '../../assets/images/star.png';

const useStyles = makeStyles({
  wrapper: {
    // margin: '0 20px 0px',
  },
  wrapImg: {
    marginBottom: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {},
  desc: {
    textAlign: 'center',
    maxWidth: '544px',
    margin: '0 auto 33px',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1em',
    color: '#8B8B8B',
  },
  wrapStar: {
    display: 'flex',
    justifyContent: 'center',
  },
  star: {},
});

interface ITestimonialsItemProps {
  img: string;
  desc: string;
}

// eslint-disable-next-line no-empty-pattern
const TestimonialsItem = ({ img, desc }: ITestimonialsItemProps) => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.wrapper}>
        <Box className={classes.wrapImg}>
          <img className={classes.img} src={img} alt="" />
        </Box>
        <Box className={classes.desc}>{desc}</Box>
        <Box className={classes.wrapStar}>
          <img className={classes.star} src={star} alt="rate star" />
        </Box>
      </Box>
    </div>
  );
};

export default TestimonialsItem;
