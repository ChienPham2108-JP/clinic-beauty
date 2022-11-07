import { makeStyles } from '@material-ui/core';

interface IDescriptionProps {
  children: string;
  margin: string;
}

const useStyles = makeStyles({
  description: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
});

const Description = ({ children, margin }: IDescriptionProps) => {
  const classes = useStyles();

  return (
    <div className={classes.description} style={{ margin: margin }}>
      {children}
    </div>
  );
};

export default Description;
