// jshint esversion: 8

import React, { useState } from "react";
import Logo from "./Logo";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { navigationNames, navigationPaths } from "./NavigationOptions";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Profile from "./Profile";

require('dotenv').config();

function NavigationDesktop() {

  const useStyles = makeStyles({
    navLink: {
      color: "white"
    },
    navItem: {
      cursor: "pointer",
      fontSize: 20,
      margin: "0px 10px 0px 10px",
      display: "inline-block"
    },
    profileItem: {
      cursor: "pointer",
      display: "inline-block",
      marginLeft: "25px",
      // marginTop: "10px"
      verticalAlign: "middle"
    },
    separator: {
      color: "white",
      fontSize: 25,
      margin: "0px 10px 0px 10px",
      display: "inline-block"
    }
  });

  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  return (
    <div className="navigation-desktop full-width-fixed">
      <Logo />
      <div className="navigation-links" /*onClick={preventDefault}*/>
        {navigationNames.map((navName, index) => (
          <div className={classes.navItem}>
            {index === 3 ? <div className={classes.separator}>|</div> : null}
            <Link className={classes.navLink} to={navigationPaths[index]} onClick={console.log(process.env.REACT_APP_AUTH0_DOMAIN + process.env.REACT_APP_AUTH0_CLIENT_ID)}>
              {navName}
            </Link>
          </div>
        ))}
        <div className={classes.navItem}><LoginButton /></div>
        <div className={classes.navItem}><LogoutButton /></div>
        <div className={classes.profileItem}><Profile /></div>
      </div>
    </div>
  );
}

export default NavigationDesktop;
