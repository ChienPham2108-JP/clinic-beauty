import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  tagWrap: {
    width: 'calc(100% / 3)',
    padding: '0 4px 0',
    marginBottom: '19px',
    '&:hover': {
      opacity: '0.65',
      cursor: 'pointer',
    },
  },
  tagContent: {
    boxShadow: '0px 4px 17px #EEF0FF',
    padding: '2px 0 3px',
    borderRadius: '50px',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    color: '#8B8B8B',
  },
});

interface ITagProps {
  tagContent: string;
}

const Tag = ({ tagContent }: ITagProps) => {
  const classes = useStyles();
  return (
    <Link to="" className={classes.tagWrap}>
      <Box className={classes.tagContent}>{tagContent}</Box>
    </Link>
  );
};

export default Tag;
