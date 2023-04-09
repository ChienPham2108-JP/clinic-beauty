import { makeStyles } from '@material-ui/core';

interface ISubjectProps {
  children: string;
  margin: string;
}

const useStyles = makeStyles({
  subjectName: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    color: 'var(--primary-color)',
  },
});

const Subject = ({ children, margin }: ISubjectProps) => {
  const classes = useStyles();

  return (
    <div className={classes.subjectName} style={{ margin }}>
      {children}
    </div>
  );
};

export default Subject;
