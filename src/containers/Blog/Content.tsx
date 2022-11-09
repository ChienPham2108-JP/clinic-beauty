import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import { Article, Post, SocialIcon, Tag, Widget } from './components';
import articleImg1 from '../../assets/images/article-image1.png';
import articleImg2 from '../../assets/images/article-image2.png';
import articleImg3 from '../../assets/images/article-image3.png';
import SearchWidget from './components/SearchWidget';
import postImg1 from '../../assets/images/post-img1.png';
import postImg2 from '../../assets/images/post-img2.png';
import postImg3 from '../../assets/images/post-img3.png';
import facebook from '../../assets/images/blog-facebook-f.png';
import twitter from '../../assets/images/blog-twitter-f.png';
import instagram from '../../assets/images/blog-instagram-f.png';
import linkedinIn from '../../assets/images/blog-linkedin-in-f.png';
import { useEffect, useState } from 'react';

const tagData = [
  {
    id: 1,
    nameTag: 'beauty',
  },
  {
    id: 2,
    nameTag: 'cute',
  },
  {
    id: 3,
    nameTag: 'skin',
  },
  {
    id: 4,
    nameTag: 'glow',
  },
  {
    id: 5,
    nameTag: 'style',
  },
  {
    id: 6,
    nameTag: 'clinic',
  },
  {
    id: 7,
    nameTag: 'style',
  },
  {
    id: 8,
    nameTag: 'great',
  },
  {
    id: 9,
    nameTag: 'cute',
  },
];

const postData = [
  {
    id: 1,
    img: postImg1,
    date: '01 jan 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 2,
    img: postImg2,
    date: '01 jan 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 3,
    img: postImg3,
    date: '01 jan 2021',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
];

const useStyles = makeStyles({
  content: {
    maxWidth: '1140px',
    margin: '108px auto -13.66px',
    display: 'flex',
    gap: '60px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
    '@media (max-width: 992px)': {
      justifyContent: 'center',
      padding: '0 32px',
    },
    '@media (max-width: 576px)': {
      marginBottom: '128px',
      padding: '0 16px',
    },
  },
  article: {
    maxWidth: '730px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  widget: {
    flexShrink: 0,
    maxWidth: '350px',
    '@media (max-width: 1024px)': {
      maxWidth: 'initial',
    },
  },
  pageNavigation: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'flex-end',
    marginRight: '83px',
    cursor: 'pointer',
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
    height: '35px',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#C7C7C7',
    borderRadius: '50%',
  },
  cat: {
    display: 'block',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1em',
    paddingBottom: '2px',
    marginBottom: '3px',
    color: '#8B8B8B',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  bottomTag: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -6.5px',
  },
  wrapSocialIcon: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '21px',
    marginLeft: '-5px',
  },
});

const articleData = [
  {
    id: 1,
    img: articleImg1,
    categoriesName: 'Consultation',
    heading: 'How much does a consultation cost at our clinic?',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 2,
    img: articleImg2,
    categoriesName: 'Beauty',
    heading: `Watch out! don't choose the wrong beauty product`,
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 3,
    img: articleImg3,
    categoriesName: 'Treatments',
    heading: 'About skin care you need to know',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 4,
    img: articleImg1,
    categoriesName: 'Page2',
    heading: 'How much does a consultation cost at our clinic?',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 5,
    img: articleImg2,
    categoriesName: 'Page2',
    heading: `Watch out! don't choose the wrong beauty product`,
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 6,
    img: articleImg3,
    categoriesName: 'Page2',
    heading: 'About skin care you need to know',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 7,
    img: articleImg3,
    categoriesName: 'Page3',
    heading: 'About skin care you need to know',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 8,
    img: articleImg1,
    categoriesName: 'Page3',
    heading: 'How much does a consultation cost at our clinic?',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 9,
    img: articleImg2,
    categoriesName: 'Page3',
    heading: `Watch out! don't choose the wrong beauty product`,
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
];

interface IDataArticleData {
  id: number;
  img: string;
  categoriesName: string;
  heading: string;
  desc: string;
}

function Content() {
  const classes = useStyles();
  const [dataLoad, setDataLoad] = useState<IDataArticleData[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const dataArticleData = articleData.slice((page - 1) * 3, page * 3);

    setDataLoad(dataArticleData);
  }, [page]);
  return (
    <Box className={classes.content}>
      <Box className={classes.article}>
        {dataLoad.map((item) => (
          <Article
            key={item.id}
            img={item.img}
            categoriesName={item.categoriesName}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
        <Box className={classes.pageNavigation}>
          {[1, 2, 3].map((pageItem) =>
            pageItem === page ? (
              <Box key={pageItem} className={`${classes.page} active`} onClick={() => setPage(pageItem)}>
                {pageItem}
              </Box>
            ) : (
              <Box key={pageItem} className={classes.page} onClick={() => setPage(pageItem)}>
                {pageItem}
              </Box>
            ),
          )}
        </Box>
      </Box>
      <Box className={classes.widget}>
        <SearchWidget />
        <Widget
          padding="58px 28px 41px 49px"
          widgetHeading="Recent Posts"
          margin="0 0 28px 0"
          widgetContent={postData.map((item) => (
            <Post key={item.id} img={item.img} date={item.date} desc={item.desc} />
          ))}
        ></Widget>
        <Widget
          widgetHeading="Categories"
          padding="58px 156px 52px 49px"
          margin="0 0 22px 0"
          widgetContent={
            <>
              <Link to="" className={classes.cat}>
                Consultation
              </Link>
              <Link to="" className={classes.cat}>
                Beauty
              </Link>
              <Link to="" className={classes.cat}>
                Treatments
              </Link>
              <Link to="" className={classes.cat}>
                News
              </Link>
            </>
          }
        />
        <Widget
          widgetHeading="Cloud Tags"
          padding="58px 44px 57px 49px"
          margin="0 0 23px 0"
          widgetContent={
            <Box className={classes.bottomTag}>
              {tagData.map((item) => (
                <Tag key={item.id} tagContent={item.nameTag} />
              ))}
            </Box>
          }
        />
        <Widget
          widgetHeading="Social Connect"
          margin="0 0 30px 0"
          padding="58px 71px 62px 49px"
          widgetContent={
            <Box className={classes.wrapSocialIcon}>
              <SocialIcon social={facebook} />
              <SocialIcon social={twitter} />
              <SocialIcon social={instagram} />
              <SocialIcon social={linkedinIn} />
            </Box>
          }
        />
      </Box>
    </Box>
  );
}

export default Content;
