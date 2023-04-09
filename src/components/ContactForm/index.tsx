import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CustomButton from '../CustomButton';

const useStyles = makeStyles({
  contactForm: {
    maxWidth: '520px',
    '@media (max-width: 1024px)': {
      width: '100%',
      maxWidth: 'initial',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  name: {
    color: 'var(--text-color)',
    fontSize: '18px',
    marginBottom: 0,
    lineHeight: '40px',
    display: 'flex',
    gap: '35.58px',
    '@media (max-width: 1024px)': {
      width: '100%',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: 0,
    },
  },
  fname: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  lname: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  email: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  subjectMessage: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    marginBottom: '38.32px',
    lineHeight: '28px',
  },
  inquiry: {
    color: '#C5C5C5',
    background: '#FFFFFF',
    border: '1px solid #D9DDFE',
    outline: 'none',
    marginTop: '-1px',
    borderRadius: '15px',
    width: '100%',
    padding: '15px 0 16.58px 22px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    lineHeight: '28px',
    height: '239.47px',
    marginBottom: '54.84px',
    resize: 'vertical',
  },
  submitBtn: {
    textTransform: 'capitalize',
    fontFamily: "'Poppins',sans-serif",
    fontWeight: 600,
    fontSize: '16px',
    color: 'var(--white-color)',
    background: 'var(--primary-color)',
    borderRadius: '50px',
    display: 'inline-block',
    padding: '15px 64.85px',
    marginTop: '-2.97px',
    letterSpacing: '0.1em',
    '&:hover': {
      background: 'var(--primary-color)',
    },
  },
});

function ContactForm() {
  const classes = useStyles();
  return (
    <>
      <form className={classes.contactForm}>
        <Box className={classes.name}>
          <input className={classes.fname} placeholder="First name" />
          <input className={classes.lname} placeholder="Last name" />
        </Box>
        <input className={classes.email} type="email" placeholder="Email address" />
        <input className={classes.subjectMessage} type="text" placeholder="Subject message" />
        <textarea className={classes.inquiry} placeholder="Your inquiry here" />
        {/* <Button className={classes.submitBtn} type="submit">
          Send Message
        </Button> */}
        <CustomButton padding="15px 64.85px">Send Message</CustomButton>
      </form>
    </>
  );
}

export default ContactForm;
