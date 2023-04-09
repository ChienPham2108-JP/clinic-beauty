import { List, ListItem, Box, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import footerBackground from '../../../assets/images/footer-bg.svg';
import footerLogo from '../../../assets/images/footerlogo.png';
import facebookF from '../../../assets/images/facebook-f.png';
import twitterF from '../../../assets/images/twitter-f.png';
import linkedinF from '../../../assets/images/linkedin-in.png';
import youtubeF from '../../../assets/images/youtube-f.png';
import instagramF from '../../../assets/images/instagram-f.png';

const useStyles = makeStyles({
  footer: {
    position: 'relative',
    marginTop: '69.66px',
    backgroundImage: `url('${footerBackground}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  },
  // footerBackground: {
  //   position: 'absolute',
  //   width: '1440px',
  //   height: '100%',
  //   textAlign: 'center',
  //   margin: '0 auto',
  //   zIndex: -1,
  //   '@media (max-width: 1200px)': {
  //     left: '-270px',
  //   },
  // },
  // footerBackgroundImg: {
  //   width: '100%',
  //   objectPosition: 'right',
  //   height: '100%',
  // },
  footerWrapper: {
    maxWidth: '1140px',
    margin: '0 auto',
    paddingTop: '225.34px',
    paddingBottom: '89.77px',
    '@media (max-width: 1200px)': {
      paddingLeft: '36px',
      paddingRight: '36px',
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (max-width: 992px)': {
      paddingLeft: '32px',
      paddingRight: '32px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  topFooter: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '140.05px',
    '@media (max-width: 576px)': {
      marginBottom: '7px',
    },
  },
  companyContact: {
    marginTop: '16px',
    color: '#D7DBFF',
    marginRight: '129px',
    '@media (max-width: 1200px)': {
      marginBottom: '33px',
    },
    '@media (max-width: 576px)': {
      marginRight: 0,
    },
  },
  footerLogo: {
    marginBottom: '33px',
  },
  footerLogoImg: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    height: 'auto',
  },
  aboutCompany: {
    letterSpacing: '0.1em',
    lineHeight: '21px',
    marginLeft: '31px',
    marginBottom: '26px',
    '@media (max-width: 1200px)': {
      marginLeft: 0,
    },
  },
  aboutCompanyName: {
    fontWeight: 700,
  },
  companyAddress: {
    marginLeft: '31px',
    marginBottom: '1px',
    fontWeight: 500,
    fontSize: '14px',
    fontStyle: 'italic',
    '@media (max-width: 1200px)': {
      marginLeft: 0,
    },
  },
  phoneEmail: {
    marginLeft: '31px',
    lineHeight: '23px',
    fontStyle: 'italic',
    '@media (max-width: 1200px)': {
      marginLeft: 0,
    },
  },
  companyPhone: {
    marginRight: '31px',
  },
  companyEmail: {
    lineHeight: '23px',
    color: 'var(--white)',
    fontStyle: 'italic',
  },
  page: {
    marginRight: '173px',
    '@media (max-width: 1200px)': {
      marginBottom: '31px',
    },
  },
  pageHeading: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '31px',
    letterSpacing: '0.1em',
    color: 'var(--white-color)',
    marginBottom: '24px',
  },
  footerMenu: { listStyle: 'none', padding: 0 },
  footerItem: {
    padding: 0,
    '& + &': {
      marginTop: '11px',
    },
  },
  footerLink: {
    display: 'inline-block',
    color: '#D7DBFF',
    textDecoration: 'none',
    paddingLeft: '21px',
    position: 'relative',
    minWidth: '131px',
    fontWeight: 400,
    lettetSpacing: '0.1em',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&::before': {
      position: 'absolute',
      content: "''",
      borderWidth: '3.775px 4.05px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent transparent #D7DBFF',
      transform: 'translateY(-50%)',
      top: '50%',
      left: '3.85px',
    },
  },
  infor: {
    '@media (max-width: 1200px)': {
      marginBottom: '31px',
    },
  },
  inforHeading: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '31px',
    letterSpacing: '0.1em',
    color: 'var(--white-color)',
    marginBottom: '24px',
  },
  bottomFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    '@media (max-width: 992px)': {
      justifyContent: 'center',
    },
  },
  socialBar: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 992px)': {
      marginBottom: '31px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  socialBarLink: {
    display: 'inline-block',
    marginRight: '45px',
    height: '27.84px',
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      opacity: 0.65,
    },
  },
  copyright: {
    color: '#D7DBFF',
    textAlign: 'right',
    lineHeight: '31.18px',
    letterSpacing: '0.1em',
    '@media (max-width: 992px)': {
      textAlign: 'center',
      marginBottom: '31px',
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {/* <Box className={classes.footerBackground}>
        <img src={footerBackground} className={classes.footerBackgroundImg} alt="slider background" />
      </Box> */}
      <Box className={classes.footerWrapper}>
        <Box className={classes.topFooter}>
          <Box className={classes.companyContact}>
            <Link to={'/'} className={classes.footerLogo}>
              <img className={classes.footerLogoImg} src={footerLogo} width="258" height="63" alt="logo" />
            </Link>
            <Box className={classes.aboutCompany}>
              <span className={classes.aboutCompanyName}>Beautice</span> is a Beauty Clinic WordPress Theme.
            </Box>
            <Box className={classes.companyAddress}>Baker Steet 101, NY, United States.</Box>
            <Box className={classes.phoneEmail}>
              <span className={classes.companyPhone}>+521 569 8966.</span>
              <Link className={classes.companyEmail} to={'ailto:mail@company.com'}>
                mail@company.com.
              </Link>
            </Box>
          </Box>
          <Box className={classes.page}>
            <Typography variant="h4" className={classes.pageHeading}>
              Pages
            </Typography>
            <List className={classes.footerMenu}>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/'}>
                  Home
                </Link>
              </ListItem>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/about'}>
                  About
                </Link>
              </ListItem>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/service'}>
                  Services
                </Link>
              </ListItem>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/gallery'}>
                  Gallery
                </Link>
              </ListItem>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/team'}>
                  Team
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box className={classes.infor}>
            <Typography variant="h4" className={classes.inforHeading}>
              Informationss
            </Typography>
            <List className={classes.footerMenu}>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/'}>
                  Terms & conditions
                </Link>
              </ListItem>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/'}>
                  Privacy policy
                </Link>
              </ListItem>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/blog'}>
                  Blog
                </Link>
              </ListItem>
              <ListItem className={classes.footerItem}>
                <Link className={classes.footerLink} to={'/contact'}>
                  Contact
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className={classes.bottomFooter}>
          <Box className={classes.socialBar}>
            <Link className={classes.socialBarLink} to={'/'}>
              <img src={facebookF} width="25" height="27.84" alt="facebook" />
            </Link>
            <Link className={classes.socialBarLink} to={'/'}>
              <img src={twitterF} width="25" height="27.84" alt="twitter" />
            </Link>
            <Link className={classes.socialBarLink} to={'/'}>
              <img src={linkedinF} width="25" height="27.84" alt="linkedin-in" />
            </Link>
            <Link className={classes.socialBarLink} to={'/'}>
              <img src={youtubeF} width="25" height="27.84" alt="youtube" />
            </Link>
            <Link className={classes.socialBarLink} to={'/'}>
              <img src={instagramF} width="25" height="27.84" alt="instagram" />
            </Link>
          </Box>
          <Box className={classes.copyright}>© AltDesain Studio 2021 - All right reserved.</Box>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
