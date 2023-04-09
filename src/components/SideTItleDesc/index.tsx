interface ISideTitleDescProps {
  subjectName: string;
  heading: string;
  desc: string;
}

const SideTitleDesc = ({ subjectName, heading, desc }: ISideTitleDescProps) => {
  return (
    <>
      {/* <Subject className={classes.subject}>{subjectName}</Subject>
      <Heading className={classes.heading}>{heading}</Heading>
      <Description className={classes.desc}>{desc}</Description> */}
    </>
  );
};

export default SideTitleDesc;
