import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Heading from '../../components/Heading';
import background2 from '../../assets/images/ourteam-background2.png';
import Description from '../../components/Description';

const useStyles = makeStyles({
  slogan: {
    position: 'relative',
    padding: '180px 0 196px',
    marginBottom: '118px',
    background: `url('${background2}')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
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
  sloganHeading: {
    maxWidth: '500px',
    textAlign: 'center',
    margin: '0 auto',
  },
  sloganDesc: {
    maxWidth: '680px',
    textAlign: 'center',
    margin: '0 auto',
    paddingBottom: '15px',
  },
});

function SectionSlogan() {
  const classes = useStyles();

  return (
    <Box className={classes.slogan}>
      <Box className={classes.sloganHeading}>
        <Heading secondary={true} margin={'0'}>
          Customer satisfaction is our main goal
        </Heading>
      </Box>
      <Box className={classes.sloganDesc}>
        <Description margin="0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        </Description>
      </Box>
    </Box>
  );
}

export default SectionSlogan;
