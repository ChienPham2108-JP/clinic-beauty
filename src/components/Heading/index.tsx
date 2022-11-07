import { makeStyles } from '@material-ui/core';

interface IHeadingProps {
  children: string;
  margin: string;
  secondary: boolean;
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
  secondaryHeading: {
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '45px',
    color: 'var(--white-color)',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
});

const Heading = ({ children, margin, secondary }: IHeadingProps) => {
  const classes = useStyles();

  return (
    <div className={secondary ? classes.secondaryHeading : classes.heading} style={{ margin: margin }}>
      {children}
    </div>
  );
};

export default Heading;
