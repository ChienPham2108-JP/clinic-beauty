import { Box, makeStyles } from '@material-ui/core';

interface ICenterTitleDescProps {
  subject: string;
  heading: string;
  desc: string;
}

const useStyles = makeStyles({
  mainServices: {
    fontWeight: 600,
    lineHeight: '20px',
    textAlign: 'center',
    color: 'var(--primary-color)',
  },
  servicesHeading: {
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '45px',
    textAlign: 'center',
    color: 'var(--text-color)',
    maxWidth: '460.3px',
    margin: 'var(--mt-12) auto var(--mt-12)',
  },
  servicesDesc: {
    maxWidth: '848px',
    margin: '0 auto',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
  },
});

const CenterTitleDesc = ({ subject, heading, desc }: ICenterTitleDescProps) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainServices}>{subject}</Box>
      <Box className={classes.servicesHeading}>{heading}</Box>
      <Box className={classes.servicesDesc}>{desc}</Box>
    </>
  );
};

export default CenterTitleDesc;
