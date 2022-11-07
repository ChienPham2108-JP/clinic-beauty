import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Subject from '../../components/Subject';
import Heading from '../../components/Heading';
import Description from '../../components/Description';
import Illustration2 from '../../assets/images/about-Illustration-2.png';

const useStyles = makeStyles({
  mission: {
    maxWidth: '1140px',
    margin: '0 auto 123px',
    display: 'flex',
    justifyContent: 'center',
    gap: '117px',
    alignItems: 'center',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
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
  content: {
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  subject: {
    marginBottom: '12px',
  },
  heading: {
    marginBottom: '24px',
    maxWidth: '545px',
    paddingRight: '18px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  desc: {
    maxWidth: '483px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
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
});

function SectionMission() {
  const classes = useStyles();
  return (
    <Box className={classes.mission}>
      <Box className={classes.content}>
        <Box className={classes.subject}>
          <Subject margin="0">Our Mission</Subject>
        </Box>
        <Box className={classes.heading}>
          <Heading margin="0 0 -11px 0" secondary={false}>
            Special & premium service to any clients
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
      <Box className={classes.imgWrap}>
        <img className={classes.img} src={Illustration2} alt="Illustration" />
      </Box>
    </Box>
  );
}

export default SectionMission;
