import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CustomButton from '../../../components/CustomButton';
import Description from '../../../components/Description';
import Heading from '../../../components/Heading';
import Subject from '../../../components/Subject';
import folder from '../../../assets/images/folder.png';
import caretRight from '../../../assets/images/caret-right.png';

const useStyles = makeStyles({
  wrapArticle: {
    width: '100%',
    background: 'var(--white-color)',
    boxShadow: '10px 13px 80px 14px #F2F4FF',
    borderRadius: '50px 50px 50px 50px',
    marginBottom: '133px',
    overflow: 'hidden',
    '@media (max-width: 1024px)': {
      borderRadius: '60px',
    },
  },
  wrapImg: {
    width: '100%',
  },
  aticleImg: {
    width: '100%',
    height: 'auto',
  },
  wrapArticleContent: {
    padding: '59px 42px 100px 76px',
    '@media (max-width: 576px)': {
      padding: '59px 16px 100px',
    },
  },
  categories: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '18px',
  },
  heading: {
    marginBottom: '12px',
    paddingBottom: '9px',
  },
  desc: {
    maxWidth: '592px',
    paddingBottom: '23px',
    marginBottom: '13px',
  },
  wrapBtn: {
    position: 'relative',
  },
  caretRight: {
    position: 'absolute',
    bottom: '16px',
    left: '163px',
  },
});

interface IArticleProps {
  img: string;
  categoriesName: string;
  heading: string;
  desc: string;
}

const Article = ({ img, categoriesName, heading, desc }: IArticleProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapArticle}>
      <Box className={classes.wrapImg}>
        <img className={classes.aticleImg} src={img} alt="Services" />
      </Box>
      <Box className={classes.wrapArticleContent}>
        <Box className={classes.categories}>
          <img src={folder} alt="folder" />
          <Subject margin="0">{categoriesName}</Subject>
        </Box>
        <Box className={classes.heading}>
          <Heading secondary={false} margin="0">
            {heading}
          </Heading>
        </Box>
        <Box className={classes.desc}>
          <Description margin="0">{desc}</Description>
        </Box>
        <Box className={classes.wrapBtn}>
          <CustomButton padding="15px 62.53px">Read More</CustomButton>
          <img className={classes.caretRight} src={caretRight} alt="Caret" />
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
