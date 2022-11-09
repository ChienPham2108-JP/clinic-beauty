import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
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

interface ICustomAccodionProps {
  question: string;
}

const CustomAccodion = ({ question }: ICustomAccodionProps) => {
  const classes = useStyles();

  return (
    <>
      <Accordion>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.accordionHeading}>{question}</div>
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
    </>
  );
};

export default CustomAccodion;
