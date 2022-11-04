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
