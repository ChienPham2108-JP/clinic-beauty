import { List, ListItem, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/main-logo.png';
import logoLight from '../../../assets/images/logo-light.svg';
import CustomButton from '../../../components/CustomButton';

const useStyles = makeStyles({
  header: {
    maxWidth: '1440px',
    padding: '40px 0',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    margin: '0 auto',

    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
    },

    '@media (max-width: 992px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '16px',
      paddingBottom: '16px',
    },

    '@media (max-width: 576px)': {
      padding: '16px',
    },
  },
  headerScrollLight: {
    maxWidth: '1440px',
    padding: '40px 0',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    margin: '0 auto',
    background: 'rgba(13, 22, 92, 0.97)',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
    },

    '@media (max-width: 992px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '10px',
      paddingBottom: '10px',
    },

    '@media (max-width: 576px)': {
      padding: '16px',
    },
  },

  headerScroll: {
    maxWidth: '1440px',
    padding: '40px 0',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.97)',

    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
    },

    '@media (max-width: 992px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '16px',
      paddingBottom: '16px',
    },

    '@media (max-width: 576px)': {
      padding: '16px',
    },
  },
  siteBar: {
    maxWidth: '1140px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menu: {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    '& li': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& li:last-child': {
      margin: 0,
      padding: 0,
    },
    '& .current': {
      color: '#414880',
    },
  },
  menuLink: {
    whiteSpace: 'nowrap',
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    '&:hover': {
      color: '#414880',
    },
  },
  // menuLinkActive: {
  //   letterSpacing: '0.1em',
  //   color: '#414880',
  //   '&:hover': {
  //     color: '#414880',
  //   },
  // },
  listItem: {
    marginRight: '46.030px',
    fontWeight: 600,
  },
  plus: {
    position: 'relative',
    marginLeft: '5.11px',
    fontSize: '14px',
    color: '#414880',
  },
  listItemAbout: {
    padding: 0,
    marginRight: '46.030px',
  },
  listItemService: {
    padding: 0,
    marginRight: '47.050px',
  },
  listItemGallery: {
    padding: 0,
    marginRight: '48.070px',
  },
  listItemBlog: {
    padding: 0,
    marginRight: '53.190px',
  },
  listItemContact: {
    padding: 0,
  },
  ContactBtn: {
    textTransform: 'capitalize',
    fontFamily: `'Poppins',sans-serif`,
    fontWeight: 600,
    fontSize: '16px',
    color: 'var(--white-color)',
    background: 'var(--primary-color)',
    borderRadius: '50px',
    display: 'inline-block',
    padding: '12px 42.55px',
    letterSpacing: '0.1em',
    '&:hover': {
      background: 'var(--primary-color)',
    },
  },
  mainLogo: {
    '@media (max-width: 1200px)': {},
    '@media (max-width: 576px)': {
      maxWidth: '200px',
      width: '100%',
      height: 'auto',
    },
  },
  menuBtnMobile: {
    display: 'none',
    '@media (max-width: 1024px)': {
      display: 'block',
    },
  },
  menuWrap: {
    padding: 0,
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  menu2: {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    '& li': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& li:first-child a': {
      color: 'white',
    },
    '& li a': {
      color: '#D8DCFF',
    },
    '& li .dropdown-menu': {
      background: '#2f3b9e',
    },
    '& li:hover a': {
      color: 'white',
    },

    '& li:last-child': {
      margin: 0,
      padding: 0,
    },
    '& .current': {
      color: '#414880',
    },
  },
});

interface IAppbarDesktopProps {
  toggle: () => void;
  isOpen: boolean;
}

// const navItemData = [
//   {
//     id: 1,
//     name: 'Home',
//   },
//   {
//     id: 2,
//     name: 'About',
//   },
//   {
//     id: 3,
//     name: 'Service',
//   },
//   {
//     id: 4,
//     name: 'Gallery',
//   },
//   {
//     id: 5,
//     name: 'Blog',
//   },
// ];

export default function AppbarDesktop({ toggle, isOpen }: IAppbarDesktopProps) {
  const classes = useStyles();
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const location = useLocation();
  const isCurrent = location.pathname;
  const isHome2 = location.pathname === '/home2';

  return (
    <Box className={scrollNav ? (isHome2 ? classes.headerScrollLight : classes.headerScroll) : classes.header}>
      <Box className={classes.siteBar}>
        <Link to={'/'}>
          <img className={classes.mainLogo} src={isHome2 ? logoLight : logo} width="263.83" height="63" alt="logo" />
        </Link>
        <div className={classes.menuWrap}>
          <List className={isHome2 ? `${classes.menu2}` : classes.menu}>
            <ListItem className={`${classes.listItem} dropdown`}>
              <Link className={isCurrent === '/' ? `${classes.menuLink} current` : classes.menuLink} to="/">
                Home +
              </Link>
              <div className="dropdown-menu">
                <Link to="/" className="dropdown-item">
                  Home 1
                </Link>
                <Link to="/home2" className="dropdown-item">
                  Home 2
                </Link>
              </div>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/about" className={isCurrent === '/about' ? `${classes.menuLink} current` : classes.menuLink}>
                About
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={isCurrent === '/service' ? `${classes.menuLink} current` : classes.menuLink}
                to="/service"
              >
                Service
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={isCurrent === '/gallery' ? `${classes.menuLink} current` : classes.menuLink}
                to="/gallery"
              >
                Gallery
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link className={isCurrent === '/blog' ? `${classes.menuLink} current` : classes.menuLink} to="/blog">
                Blog
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/contact">
                <CustomButton padding="12px 42.55px">Contact</CustomButton>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.menuBtnMobile} onClick={toggle}>
          <svg
            style={isHome2 ? { fill: '#fff' } : {}}
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </Box>
    </Box>
  );
}
