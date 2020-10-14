// jshint esversion: 8
// TODO: Put this file in Navbars

import React from 'react';
import classNames from 'classnames';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import { makeStyles } from "@material-ui/core/styles";

const Profile = () => {

  const useStyles = makeStyles({
    profilePicture: {
      height: "60px",
      width: "60px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  });

  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img className={classes.profilePicture} src={user.picture} alt="user.name" />
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p> */}
        {/* <JSONPretty data={user} /> */}
      </div>
    )
  );
};

export default Profile;
