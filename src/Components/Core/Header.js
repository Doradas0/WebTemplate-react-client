import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NavTop from "./NavTop";
import { AuthProfile, UnAuthProfile } from './Profile';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  profileBtn: {
    marginLeft: "auto"
  },
}));

export default ({ appProps }) => {
  const history = useHistory();
  const classes = useStyles();

  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);

  const toggleProfilePopover = event => {
    setProfileAnchorEl(profileAnchorEl ? null : event.currentTarget);
  };

  async function handleLogout() {
    toggleProfilePopover();
    await Auth.signOut();
    appProps.userHasAuthenticated(false);
    history.push("/SignIn");
  }

  return (
    <React.Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.root}>
          <Typography variant="h6" onClick={() => history.push('/')}>Web App</Typography>
          <Hidden smDown>
            <NavTop />
          </Hidden>
          <IconButton onClick={toggleProfilePopover} className={classes.profileBtn} edge="start" color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Popover
        onClose={toggleProfilePopover}
        open={Boolean(profileAnchorEl)}
        anchorEl={profileAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
          {appProps.isAuthenticated
            ?<AuthProfile appProps={appProps} handleLogout={handleLogout}/>
            :<UnAuthProfile appProps={appProps} toggleProfilePopover={toggleProfilePopover}/>
          }
      </Popover>
    </React.Fragment>
  );
}
