import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import background1 from '../../assets/images/blog-background1.png';
import Heading from '../../components/Heading';

const useStyles = makeStyles({
  title: {
    background: `url(${background1})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    padding: '121px 0 107px',
    marginTop: '140px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (max-width: 992px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  wrapper: {
    maxWidth: '1140px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 576px)': {
      flexDirection: 'column',
    },
  },
  desc: {
    fontWeight: 500,
    fontAize: '16px',
    lineHeight: '24px',
    textAlign: 'right',
    letterSpacing: '0.1em',
    color: '#D9D9D9',
  },
});

function SectionTitle() {
  const classes = useStyles();
  return (
    <Box className={classes.title}>
      <Box className={classes.wrapper}>
        <Heading margin="6px 0" secondary={true}>
          Blog
        </Heading>
        <Box className={classes.desc}>Home • Blog</Box>
      </Box>
    </Box>
  );
}

export default SectionTitle;
