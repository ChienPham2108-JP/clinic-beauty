import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Description from '../../../components/Description';
import Heading from '../../../components/Heading';
import Subject from '../../../components/Subject';
import angleDoubleRight from '../../../assets/images/angle-double-right.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  serviceWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '190px',
    alignItems: 'center',
    maxWidth: '1140px',
    margin: '0 auto 92px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column-reverse',
    },
    '@media (max-width: 992px)': {
      justifyContent: 'center',
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      marginBottom: '128px',
      padding: '0 16px',
    },
  },
  imgWrapReverse: {
    order: 1,
    '@media (max-width: 1024px)': {
      width: '100%',
      order: 0,
    },
  },
  imgWrap: {
    '@media (max-width: 1024px)': {
      width: '100%',
    },
  },
  serviceContent: {},
  serviceSubject: {},
  serviceHeading: {
    paddingBottom: '13px',
  },
  serviceDesc: {
    paddingBottom: '15px',
    marginBottom: '9px',
  },
  serviceAction: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: '#091156',
    '&:hover img': {
      transform: 'translateX(10px)',
    },
  },
  img: {
    '@media (max-width: 1024px)': {
      width: '100%',
      height: 'auto',
    },
  },
  angleDouble: {
    marginLeft: '13px',
    transition: 'transform 250ms ease-in-out',
  },
});

interface IServiceSectionProps {
  reverse: boolean;
  img: string;
  subject: string;
  heading: string;
  desc: string;
}

const ServiceSection = ({ reverse, img, subject, heading, desc }: IServiceSectionProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.serviceWrap}>
      <Box className={reverse ? classes.imgWrapReverse : classes.imgWrap}>
        <img className={classes.img} src={img} alt="Animation" />
      </Box>
      <Box className={classes.serviceContent}>
        <Box className={classes.serviceSubject}>
          <Subject margin="0 0 12px 0">{subject}</Subject>
        </Box>
        <Box className={classes.serviceHeading}>
          <Heading margin="0" secondary={false}>
            {heading}
          </Heading>
        </Box>
        <Box className={classes.serviceDesc}>
          <Description margin="0">{desc}</Description>
        </Box>
        <Link to="" className={classes.serviceAction}>
          Make an Appointment
          <img className={classes.angleDouble} src={angleDoubleRight} alt="angle double right" />
        </Link>
      </Box>
    </Box>
  );
};

export default ServiceSection;
