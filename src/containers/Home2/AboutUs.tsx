import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CustomButton from '../../components/CustomButton';
import Description from '../../components/Description';
import Heading from '../../components/Heading';
import Subject from '../../components/Subject';
import illustration1 from '../../assets/images/home2-Illustration-1.svg';

const useStyles = makeStyles({
  about: {
    maxWidth: '1140px',
    margin: '0 auto 157.64px',
    display: 'flex',
    gap: '167px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column-reverse',
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  rightAbout: {
    '@media (max-width: 1024px)': {
      width: '100%',
    },
  },
  img: {
    '@media (max-width: 1024px)': {
      width: '100%',
      heigth: 'auto',
    },
  },
  leftAbout: {},
});

function AboutUs() {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Box className={classes.rightAbout}>
        <img className={classes.img} src={illustration1} alt="Illustration1 1" />
      </Box>
      <Box className={classes.leftAbout}>
        <Subject margin="0 0 12px 0">About Us</Subject>
        <Heading margin="0 0 10px 0" secondary={false}>
          We are the best beauty clinic
        </Heading>
        <Description margin="0 0 35px 0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas
          volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat.
        </Description>
        <CustomButton padding="15.2px 47.08px">Learn More</CustomButton>
      </Box>
    </Box>
  );
}

export default AboutUs;
