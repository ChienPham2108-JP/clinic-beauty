import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  wrapCard: {
    width: '392px',
    maxWidth: '392px',
    padding: '0 18px',
    '@media (max-width: 1200px)': {
      width: '50%',
      maxWidth: 'initial',
      marginBottom: '38px',
    },
    '@media (max-width: 768px)': {
      marginBottom: '36px',
      width: '100%',
    },
  },
  imgWrapCard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '38px',
    borderRadius: '20px',
    backgroundColor: 'var(--white-color)',
    transition: '.15s cubic-bezier(.2,.6,.6,1)',
    cursor: 'pointer',
    '@media (max-width: 1200px)': {
      marginBottom: '38px',
      '&:last-child': {
        marginBottom: 0,
      },
    },
    '@media (max-width: 576px)': {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  imgCard: {
    width: '100%',
    height: 'auto',
  },
});

interface IImgCardProps {
  img: string;
}

const ImgCard = ({ img }: IImgCardProps) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.wrapCard}`}>
      <Box className={`${classes.imgWrapCard}`}>
        <img className={classes.imgCard} src={img} alt="Our Service" />
      </Box>
    </Box>
  );
};

export default ImgCard;
