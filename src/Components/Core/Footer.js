// Functions
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

// Components
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Resources
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventNoteIcon from '@material-ui/icons/EventNote';
import KitchenIcon from '@material-ui/icons/Kitchen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Styles
const useStyles = makeStyles(theme =>({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: `1px solid ${theme.palette.primary.main}`
  },
}));

export default function Footer(props){
  const classes = useStyles();
  const history = useHistory();

  const [navValue, setNavValue] = React.useState(0);

  React.useEffect(() => {

    switch (window.location.pathname) {
      case '/Recipes':
        setNavValue(0);
        break;
      case '/Menu':
        setNavValue(1);
        break;
      case '/Pantry':
        setNavValue(2);
        break;
      case '/Shopping':
        setNavValue(3);
        break;
      default:
        setNavValue(false);
        break;
    }
  }, []);

  const navLocations = [
    'Recipes',
    'Menu',
    'Pantry',
    'Shopping'
  ];

  const handleChange = (event, newValue) => {
    event.persist();
    setNavValue(newValue);
    history.push(`/${navLocations[newValue]}`)

  };


  return(
    <Hidden mdUp>
      <BottomNavigation
        value={navValue}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction label="Recipes" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Menu" icon={<EventNoteIcon />} />
        <BottomNavigationAction label="Pantry" icon={<KitchenIcon />} />
        <BottomNavigationAction label="Shopping" icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Hidden>
  )
}
