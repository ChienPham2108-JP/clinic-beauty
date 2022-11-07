import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Description from '../../components/Description';
import Heading from '../../components/Heading';
import Subject from '../../components/Subject';
import Illustration1 from '../../assets/images/about-Illustration-1.png';

const useStyles = makeStyles({
  vision: {
    maxWidth: '1140px',
    margin: '0 auto 106px',
    display: 'flex',
    justifyContent: 'center',
    gap: '187px',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
      gap: '117px',
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
  imgWrap: {
    '@media (max-width: 1024px)': {
      width: '100%',
    },
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  content: {
    maxWidth: '475px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  subject: {
    marginBottom: '12px',
  },
  heading: {
    marginBottom: '24px',
  },
  desc: {},
});

function SectionVision() {
  const classes = useStyles();

  return (
    <Box className={classes.vision}>
      <Box className={classes.imgWrap}>
        <img className={classes.img} src={Illustration1} alt="Illustration" />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.subject}>
          <Subject margin="0">Our Vision</Subject>
        </Box>
        <Box className={classes.heading}>
          <Heading margin="0 0 -11px 0" secondary={false}>
            Be the best and go international
          </Heading>
        </Box>
        <Box className={classes.desc}>
          <Description margin="0 0 24px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas
            volutpat facilisi eu libero.
          </Description>
          <Description margin="0 0 11px 0">
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
          </Description>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionVision;
