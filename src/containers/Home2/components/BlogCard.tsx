import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import angleDoubleRight from '../../../assets/images/home2-angle-double-right.png';

const useStyles = makeStyles({
  servicesCard: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    // padding: '31px 37px 47px 36px',
    background: 'var(--white-color)',
    // marginBottom: '30px',
    border: '1px solid #E2E2E2',
    borderRadius: '25px',
    backgroundColor: 'var(--white-color)',
    transition: '.15s cubic-bezier(.2,.6,.6,1)',
    cursor: 'pointer',
    '&:hover': {
      // boxShadow: '0px 25px 50px 25px #F7F7FF',
      borderColor: '#9BA2E0',
    },
    '@media (max-width: 1200px)': {
      marginBottom: '36px',
      borderRadius: '50px',
      '&:last-child': {
        marginBottom: 0,
      },
    },
    '@media (max-width: 1024px)': {
      borderRadius: '70px',
    },
    '@media (max-width: 576px)': {
      borderRadius: '50px',
      marginLeft: 0,
      marginRight: 0,
    },
  },
  servicesCardImg: {
    marginBottom: '56px',
    '@media (max-width: 1200px)': {
      width: '100%',
      height: 'auto',
    },
  },
  wrapContent: {
    padding: '0 21px 65px 39px',
    textAlign: 'left',
  },
  servicesCardHeading: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    color: 'var(--text-color)',
    paddingBottom: '14px',
  },
  servicesCardDesc: {
    maxWidth: '271px',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'left',
    letterSpacing: '0.1em',
    paddingBottom: '11px',
    color: 'var(--desc-text-color)',
    marginBottom: '15px',
    '@media (max-width: 1200px)': {
      maxWidth: 'initial',
    },
  },

  wrapCard: {
    width: '396px',
    maxWidth: '396px',
    padding: '0 24.5px',
    marginBottom: '49px',
    overflow: 'hidden',
    '@media (max-width: 1200px)': {
      width: '50%',
      maxWidth: 'initial',
    },
    '@media (max-width: 1024px)': {
      marginBottom: '36px',
      width: '100%',
    },
  },
  servicesCardAction: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#FF64AE',
    paddingBottom: '1.39px',
    '&:hover img': {
      transform: 'translateX(10px)',
    },
  },
  angleDoubleRight: {
    transition: 'transform 0.25s ease-in-out',
  },
  textAction: {
    display: 'inline-block',
    width: '90px',
  },
});

interface IBlogCardProps {
  img: string;
  heading: string;
  desc: string;
}

const BlogCard = ({ img, heading, desc }: IBlogCardProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapCard}>
      <Box className={classes.servicesCard}>
        <img className={classes.servicesCardImg} src={img} alt="Blog" />
        <Box className={classes.wrapContent}>
          <Box className={classes.servicesCardHeading}>{heading}</Box>
          <Box className={classes.servicesCardDesc}>{desc}</Box>
          <Link to="/home2" className={classes.servicesCardAction}>
            <span className={classes.textAction}>Learn More</span>
            <img className={classes.angleDoubleRight} src={angleDoubleRight} alt="icon" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
