import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Description from '../Description';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1140px',
    margin: '0 auto 79px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
      flexDirection: 'column',
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
  profileImg: {
    width: '100%',
    height: 'auto',
  },
  leftProfile: {
    '@media (max-width: 1200px)': {
      marginBottom: '36px',
    },
  },
  rightProfile: {
    maxWidth: '434px',
    marginRight: '136px',
    '@media (max-width: 1200px)': {
      margin: '0 auto',
      maxWidth: 'initial',
      textAlign: 'center',
    },
  },
  heading: {
    marginBottom: '20px',
  },
  nameAssistance: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '22px',
    color: 'var(--text-color)',
  },
  position: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17.5px',
    fontStyle: 'italic',
    color: 'var(--desc-text-color)',
  },
  desc: {},
});

interface IPropfileProps {
  img: string;
  nameAssistance: string;
  position: string;
  desc: string;
}

const Profile = ({ img, nameAssistance, position, desc }: IPropfileProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.leftProfile}>
        <img className={classes.profileImg} src={img} alt="Assistance Avatar" />
      </Box>
      <Box className={classes.rightProfile}>
        <Box className={classes.heading}>
          <span className={classes.nameAssistance}>{nameAssistance}</span>
          <span className={classes.position}>{position}</span>
        </Box>
        <Box className={classes.desc}>
          <Description margin="0">{desc}</Description>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
