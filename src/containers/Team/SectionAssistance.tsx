import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import CenterTitleDesc from '../../components/CenterTitleDesc';
import Profile from '../../components/Profile';
import profileImg1 from '../../assets/images/profile-img-1.png';
import profileImg2 from '../../assets/images/profile-img-2.png';
import profileImg3 from '../../assets/images/profile-img-3.png';

const profileData = [
  {
    id: 1,
    img: profileImg1,
    nameAssistance: 'Lina Gustav / ',
    position: 'Pharmacist',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
  },
  {
    id: 2,
    img: profileImg2,
    nameAssistance: 'Adam White / ',
    position: 'Finance',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
  },
  {
    id: 3,
    img: profileImg3,
    nameAssistance: 'Jane Doe / ',
    position: 'Marketer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
  },
];

const useStyles = makeStyles({
  assistance: {
    marginBottom: '125px',
  },
  profiles: {
    marginTop: '110px',
  },
});

function SectionAssistance() {
  const classes = useStyles();
  return (
    <Box className={classes.assistance}>
      <CenterTitleDesc
        subject="Assistance Team"
        heading="Meet the pro assistance"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
      />
      <Box className={classes.profiles}>
        {profileData.map((item) => (
          <Profile
            key={item.id}
            img={item.img}
            nameAssistance={item.nameAssistance}
            position={item.position}
            desc={item.desc}
          />
        ))}
      </Box>
    </Box>
  );
}

export default SectionAssistance;
