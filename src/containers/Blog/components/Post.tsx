import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  postWrap: {
    marginBottom: '19px',
    display: 'flex',
    gap: '26px',
  },
  img: {
    padding: '2px 0 5px 0',
  },

  date: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1em',
    color: '#FF64AE',
    paddingBottom: '4px',
    marginBottom: '5px',
  },
  desc: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.1em',
    color: '#8B8B8B',
  },
});

interface IPostProps {
  img: string;
  date: string;
  desc: string;
}

const Post = ({ img, date, desc }: IPostProps) => {
  const classes = useStyles();
  return (
    <Link to="" className={classes.postWrap}>
      <Box className={classes.img}>
        <img src={img} alt="Post" />
      </Box>
      <Box>
        <Box className={classes.date}>{date}</Box>
        <Box className={classes.desc}>{desc}</Box>
      </Box>
    </Link>
  );
};

export default Post;
