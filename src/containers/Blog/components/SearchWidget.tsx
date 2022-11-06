import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import search from '../../../assets/images/search.png';

const useStyles = makeStyles({
  searchWidget: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '76px',
    backgroundColor: 'var(--white-color)',
    boxShadow: '-2px 4px 31px 9px #F2F4FF',
    borderRadius: '50px',
    padding: '0 0 0 27px',
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
  },
  searchIcon: {
    backgroundColor: '#172176',
    padding: '20px 26px 20px 25px',
    '&:hover': {
      opacity: '0.65',
      cursor: 'pointer',
    },
  },
});

const SearchWidget = () => {
  const classes = useStyles();

  return (
    <Box className={classes.searchWidget}>
      <input className={classes.searchInput} type="text" name="search" placeholder="Search here ..." />
      <Box className={classes.searchIcon}>
        <img src={search} alt="Search" />
      </Box>
    </Box>
  );
};

export default SearchWidget;
