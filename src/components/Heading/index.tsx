import { makeStyles } from '@material-ui/core';

interface IHeadingProps {
  children: string;
  margin: string;
}

const useStyles = makeStyles({
  heading: {
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '45px',
    color: 'var(--text-color)',
    '@media (max-width: 1024px)': {
      marginLeft: 'auto !important',
      marginRight: 'auto !important',
    },
  },
});

const Heading = ({ children, margin }: IHeadingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.heading} style={{ margin: margin }}>
      {children}
    </div>
  );
};

export default Heading;
