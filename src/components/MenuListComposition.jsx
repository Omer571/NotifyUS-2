// jshint esversion: 8

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { navigationNames, navigationPaths } from "./NavigationOptions";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  listItemIcon: {
    color: "black"
  },
  listItemText: {
    color: "black"
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    color: "white",
    cursor: "pointer",
    height: "30px",
    width: "30px",
    // top right bottom left
    position: "absolute",
    padding: "17px 20px",
    right: 0,
    top: 0
  },
  loginAndLogoutButtons: {
    color: "black"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navigationNames.map((text, index) => (
          <div>
            {index === 3 ? <Divider /> : null}
            <Link to={navigationPaths[index]}>
              <ListItem button key={text}>
                <ListItemIcon className={classes.listItemIcon}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary={text} />
              </ListItem>
            </Link>
          </div>
        ))}
        <ListItem button><LoginButton /></ListItem>
        <ListItem button><LogoutButton /></ListItem>
        <ListItem button><Profile /></ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            className={classes.menuButton}
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
