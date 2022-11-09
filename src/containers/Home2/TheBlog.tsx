import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CenterTitleDesc from '../../components/CenterTitleDesc';
import BlogCard from './components/BlogCard';
import blogImg1 from '../../assets/images/home2-blog-img1.svg';
import blogImg2 from '../../assets/images/home2-blog-img2.svg';
import blogImg3 from '../../assets/images/home2-blog-img3.svg';

const useStyles = makeStyles({
  blog: {
    marginBottom: '120px',
  },
  blogTop: {
    marginBottom: '79px',
  },
  blogBottom: {
    maxWidth: '1140px',
    margin: '0 auto',
  },
  wrapCards: {
    margin: '0 -24.5px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      margin: '0 -24.5px',
      justifyContent: 'center',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      gap: '24px',
      textAlign: 'center',
    },
    '@media (max-width: 992px)': {
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      padding: '0 16px',
    },
  },
});

const blogData = [
  {
    id: 1,
    img: blogImg1,
    heading: 'How much does a consultation cost at our clinic?',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
  {
    id: 2,
    img: blogImg2,
    heading: `Watch out! don't choose the wrong beauty product`,
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
  {
    id: 3,
    img: blogImg3,
    heading: 'About skin care you need to know',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
];

function TheBlog() {
  const classes = useStyles();

  return (
    <Box className={classes.blog}>
      <Box className={classes.blogTop}>
        <CenterTitleDesc
          subject="The Blog"
          heading="Our latest news"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Box>
      <Box className={classes.blogBottom}>
        <Box className={classes.wrapCards}>
          {blogData.map((item) => (
            <BlogCard key={item.id} img={item.img} heading={item.heading} desc={item.desc} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TheBlog;
