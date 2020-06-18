// Functions
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

// Components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// Resources

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute'
  }
}));

export default function NavTop(props){
  const classes = useStyles();
  const history = useHistory();

  const [tabValue, setTabValue] = React.useState(0);

  React.useEffect(() => {

    switch (window.location.pathname) {
      case '/Example':
        setTabValue(0);
        break;
      default:
        setTabValue(false);
        break;
    }
  }, []);

  const navLocations = [
    'Example',
  ];

  const handleChange = (event, newValue) => {
    event.persist();
    setTabValue(newValue);
    history.push(`/${navLocations[newValue]}`)

  };

  return (
    <Tabs className={classes.root} value={tabValue} onChange={handleChange}>
      <Tab label="Example" name='Example'/>
    </Tabs>
  )
}
