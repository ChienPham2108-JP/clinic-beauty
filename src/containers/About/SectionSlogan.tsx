import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Heading from '../../components/Heading';
import background2 from '../../assets/images/about-background2.png';

const useStyles = makeStyles({
  slogan: {
    background: `url('${background2}')`,
    marginBottom: '113px',
    padding: '164px 0 168px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '@media (max-width: 992px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  sloganSubject: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#ABB4FF',
    marginBottom: '12px',
  },
  sloganHeading: {
    maxWidth: '732px',
    textAlign: 'center',
    margin: '0 auto',
    paddingBottom: '7px',
    marginBottom: '12px',
  },
  sloganDesc: {
    maxWidth: '680px',
    margin: '0 auto',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#CACACA',
    paddingBottom: '8px',
  },
});

function SectionSlogan() {
  const classes = useStyles();

  return (
    <Box className={classes.slogan}>
      <Box className={classes.sloganSubject}>Business Slogan</Box>
      <Box className={classes.sloganHeading}>
        <Heading secondary={true} margin="0">
          Best responsibility and service for our customers
        </Heading>
      </Box>
      <Box className={classes.sloganDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
      </Box>
    </Box>
  );
}

export default SectionSlogan;
