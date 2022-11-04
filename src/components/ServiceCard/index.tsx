import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface serviceCardProps {
  img: string;
  heading: string;
  desc: string;
}

const useStyles = makeStyles({
  servicesCard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '59px 30px 52px',
    borderRadius: '42px',
    backgroundColor: 'var(--white-color)',
    transition: '.15s cubic-bezier(.2,.6,.6,1)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 25px 50px 25px #F7F7FF',
      transform: 'translate3d(0,-4px,0)',
    },
    '@media (max-width: 1200px)': {
      marginBottom: '36px',
      '&:last-child': {
        marginBottom: 0,
      },
    },
    '@media (max-width: 576px)': {
      padding: '59px 30px 52px',
      marginLeft: 0,
      marginRight: 0,
    },
  },
  servicesCardImg: {},
  servicesCardHeading: {
    marginTop: '58px',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '20px',
    textAlign: 'center',
    color: 'var(--text-color)',
    paddingBottom: '17px',
  },
  servicesCardDesc: {
    maxWidth: '274px',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    marginTop: '6px',
    paddingBottom: '17px',
    '@media (max-width: 1200px)': {
      maxWidth: 'initial',
    },
  },

  wrapCard: {
    width: '398px',
    maxWidth: '398px',
    padding: '0 27.5px',
    '@media (max-width: 1200px)': {
      width: '50%',
      maxWidth: 'initial',
    },
    '@media (max-width: 768px)': {
      marginBottom: '36px',
      width: '100%',
    },
  },
});

const ServiceCard = ({ img, heading, desc }: serviceCardProps) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.wrapCard}`}>
      <Box className={`${classes.servicesCard}`}>
        <img className={`${classes.servicesCardImg}`} src={img} alt="Beauty consultation" />
        <Box className={`${classes.servicesCardHeading}`}>{heading}</Box>
        <Box className={`${classes.servicesCardDesc}`}>{desc}</Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;
