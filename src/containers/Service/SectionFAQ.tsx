import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Heading from '../../components/Heading';
import { CustomAccodion } from './components';

const useStyles = makeStyles({
  faq: {
    maxWidth: '972px',
    margin: '0 auto 116px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 1024px)': {
      // flexDirection: 'column',
      // alignItems: 'center',
      textAlign: 'center',
    },
    '@media (max-width: 992px)': {
      // justifyContent: 'center',
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  faqHeading: {
    textAlign: 'center',
    marginBottom: '21px',
  },
  lineTitle: {
    width: '40px',
    height: '0px',
    border: '2.5px solid #FF64AE',
    borderRadius: '20px',
    margin: '0 auto 68px',
  },
  accordionSummary: {
    width: '100%',
    padding: '0 19px 0 35px',
    textAlign: 'left',
  },
  accordionHeading: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    color: '#091156',
  },
  accordionDetails: {
    borderTop: '1px solid #091156',
    background: '#F7F7FF',
    padding: '52px 63px 53px 76px',
    borderRadius: '0px 0px 20px 20px',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1em',
    color: '#8B8B8B',
    '@media (max-width: 576px)': {
      padding: '32px',
    },
  },
});

const faqData = [
  {
    id: 1,
    question: 'Is beauty consultation handled thoroughly?',
  },
  {
    id: 2,
    question: 'Can I be beautiful in an instant time?',
  },
  {
    id: 3,
    question: 'Are there any side effects to the treatment methods or treatments at this clinic?',
  },
  {
    id: 4,
    question: 'Do professionals have accreditation in their respective fields?',
  },
];

function SectionFAQ() {
  const classes = useStyles();

  return (
    <Box className={classes.faq}>
      <Box className={classes.faqHeading}>
        <Heading margin="0 0 0 0" secondary={false}>
          Services FAQ’s
        </Heading>
      </Box>
      <Box className={classes.lineTitle}></Box>
      {faqData.map((item) => (
        <CustomAccodion key={item.id} question={item.question} />
      ))}
      {/* <Accordion style={{ width: '100%' }}>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.accordionHeading}>Is beauty consultation handled thoroughly?</div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
            <br />
            venenatis, lectus magna fringilla urna
            <br />
            <br />
            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
            <br />
            ullamcorper eget nulla
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.accordionHeading}>Can I be beautiful in an instant time?</div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
            <br />
            venenatis, lectus magna fringilla urna
            <br />
            <br />
            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
            <br />
            ullamcorper eget nulla
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.accordionHeading}>
            Are there any side effects to the treatment methods or treatments at this clinic?
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
            <br />
            venenatis, lectus magna fringilla urna
            <br />
            <br />
            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
            <br />
            ullamcorper eget nulla
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.accordionHeading}>
            Do professionals have accreditation in their respective fields?
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
            <br />
            venenatis, lectus magna fringilla urna
            <br />
            <br />
            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
            <br />
            ullamcorper eget nulla
          </div>
        </AccordionDetails>
      </Accordion> */}
    </Box>
  );
}

export default SectionFAQ;
