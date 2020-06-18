import React , {useState} from 'react';
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Theme from "./Theme";
import Header from './Header';
import Footer from './Footer';
import Routes from "../Routing/Routes";

const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 112px)'
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 120px)',
    },
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 64px)',
    },
    position: 'relative'
  },
}));

function App() {

  const classes = useStyles();
  // App State
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [currUser, setCurrUser] = useState(null);
  const [currUserInfo, setCurrUserInfo] = useState(null);

  React.useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      setCurrUser(await Auth.currentSession());
      setCurrUserInfo(await Auth.currentUserInfo());
      userHasAuthenticated(true);
    }
    catch(e) {
      console.log(e);
    }

    setIsAuthenticating(false);
  }

  const appProps = {
    isAuthenticated, userHasAuthenticated, currUser, setCurrUser, currUserInfo, setCurrUserInfo
  }

  return (
    !isAuthenticating &&
    <React.Fragment>
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Header appProps={appProps}/>
        <div className={classes.content}>
          <Routes appProps={appProps}/>
        </div>
        <Footer />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default withRouter(App);
