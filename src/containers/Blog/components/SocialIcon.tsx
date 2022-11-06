import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  wrapIcon: {
    padding: '9px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    background: 'var(--white-color)',
    boxShadow: '0px 4px 19px 11px #F6F7FF',
  },
});

interface ISocialIconProps {
  social: string;
}

const SocialIcon = ({ social }: ISocialIconProps) => {
  const classes = useStyles();
  return (
    <Link to="" className={classes.wrapIcon}>
      <img src={social} alt="Social Icon" />
    </Link>
  );
};

export default SocialIcon;
