import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';

import FaceIcon from '@material-ui/icons/Face';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  routerLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    width: "100%",
    height: "100%"
  },
  authProfile: {
    padding: theme.spacing(1.5),
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  faceIcon: {
    width: "100%",
    height: "100%",
  },
  button: {
    margin: theme.spacing(0.5),
    fontSize: "11px"
  },
  divider: {
    margin: theme.spacing(0.5),
    width: "100%"
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

export function UnAuthProfile({toggleProfilePopover, ...props}) {
  const classes=useStyles();
  return (
    <Paper>
      <List>
        <RouterLink onClick={toggleProfilePopover} key="SignIn" to="/SignIn" className={classes.routerLink}>
          <ListItem button>
              <ListItemText primary="Sign In" />
          </ListItem>
        </RouterLink>
        <RouterLink onClick={toggleProfilePopover} key="SignUp" to="/SignUp" className={classes.routerLink}>
          <ListItem button>
              <ListItemText primary="Sign Up" />
          </ListItem>
        </RouterLink>
      </List>
    </Paper>
  );
}

export function AuthProfile({handleLogout, appProps, ...props}) {
  const classes = useStyles();
  return(
    <Paper>
      <Container className={classes.authProfile} maxWidth="xs">
        <Badge
          className={classes.margin}
          badgeContent={<PhotoCameraIcon fontSize="small"/>}
          color="primary"
          overlap="circle"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        >
          <Avatar className={classes.avatar}>
            <FaceIcon className={classes.faceIcon} />
          </Avatar>
        </Badge>
        <Typography className={classes.typography} variant="body1">
          {appProps.currUserInfo.attributes.given_name + " " + appProps.currUserInfo.attributes.family_name}
        </Typography>
        <Typography className={classes.typography} variant="body2">
          {appProps.currUserInfo.attributes.email}
        </Typography>
        <Divider className={classes.divider}  variant="middle"/>
        {/*<Button className={classes.button}>Change Password</Button>*/}
        <Button onClick={handleLogout} className={classes.button} variant="outlined" >Sign Out</Button>
      </Container>
    </Paper>
  );
};
