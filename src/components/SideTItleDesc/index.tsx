import { makeStyles } from '@material-ui/core';
import Subject from '../Subject';
import Heading from '../Heading';
import Description from '../Description';

interface ISideTitleDescProps {
  subjectName: string;
  heading: string;
  desc: string;
}

const useStyles = makeStyles({
  subject: {
    marginBottom: '12px',
  },
  heading: {
    marginBottom: '12px',
  },
  desc: {},
});

const SideTitleDesc = ({ subjectName, heading, desc }: ISideTitleDescProps) => {
  const classes = useStyles();

  return (
    <>
      {/* <Subject className={classes.subject}>{subjectName}</Subject>
      <Heading className={classes.heading}>{heading}</Heading>
      <Description className={classes.desc}>{desc}</Description> */}
    </>
  );
};

export default SideTitleDesc;
