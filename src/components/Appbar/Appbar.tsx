import { List, ListItem, Button, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/main-logo.png';
import styled from 'styled-components';

const Header = styled.header<{ scrollNav?: boolean }>`
  max-width: 1440px;
  padding: 40px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  margin: 0 auto;
  background: ${({ scrollNav }) => (scrollNav ? 'rgba(255, 255, 255, 0.97)' : 'transparent')};
  box-shadow: ${({ scrollNav }) => (scrollNav ? '0 25px 50px 25px #f7f7ff' : 'none')};

  @media (max-width: 1200px) {
    padding-left: 36px;
    padding-right: 36px;
  }

  @media (max-width: 992px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 576px) {
    padding: 16px;
  }
`;

const useStyles = makeStyles({
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
  },
  menuLink: {
    letterSpacing: '0.1em',
    color: 'var(--desc-text-color)',
    '&:hover': {
      color: '#414880',
    },
  },
  menuLinkActive: {
    letterSpacing: '0.1em',
    color: '#414880',
    '&:hover': {
      color: '#414880',
    },
  },
  listItemHome: {
    padding: 0,
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
    width: '100%',
    height: 'auto',
    '@media (max-width: 576px)': {
      maxWidth: '200px',
    },
  },
  menuBtnMobile: {
    display: 'none',
    '@media (max-width: 992px)': {
      display: 'block',
    },
  },
  menuWrap: {
    '@media (max-width: 992px)': {
      display: 'none',
    },
  },
});

interface IAppbarDesktopProps {
  toggle: () => void;
  isOpen: boolean;
}

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

  return (
    <Header scrollNav={scrollNav}>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }} className={classes.siteBar}>
        <Link to={'/'}>
          <img className={classes.mainLogo} src={logo} width="263.83" height="63" alt="logo" />
        </Link>
        <div className={classes.menuWrap}>
          <List className={classes.menu}>
            <ListItem className={classes.listItemHome}>
              <Link className={classes.menuLinkActive} to="/">
                Home<span className={classes.plus}>+</span>
              </Link>
            </ListItem>
            <ListItem className={classes.listItemAbout}>
              <Link className={classes.menuLink} to="/">
                About
              </Link>
            </ListItem>
            <ListItem className={classes.listItemService}>
              <Link className={classes.menuLink} to="/">
                Service
              </Link>
            </ListItem>
            <ListItem className={classes.listItemGallery}>
              <Link className={classes.menuLink} to="/">
                Gallery
              </Link>
            </ListItem>
            <ListItem className={classes.listItemBlog}>
              <Link className={classes.menuLink} to="/">
                Blog
              </Link>
            </ListItem>
            <ListItem className={classes.listItemContact}>
              <Link to="/">
                <Button variant="contained" className={classes.ContactBtn}>
                  Contact
                </Button>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.menuBtnMobile} onClick={toggle}>
          <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </Box>
    </Header>
  );
}
