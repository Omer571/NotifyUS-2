// jshint esversion: 8

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  Image: {
    position: "relative",
    paddingLeft: "150px"
  },
  smallScreenHeadings: {
    paddingRight: "30px"
  }
});


function UserHeader() {
  const [screenSmall, setScreenSmall] = useState(false);
  const classes = useStyles();

  return (
    <div className="intro-header full-width-relative">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item md={6} sm={12} xs={12}>
          <div>Picture here</div>
          {/* <img
            className={screenSmall ? null : classes.Image}
            src={phone_image}
            alt=""
          /> */}
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className={screenSmall ? null : classes.smallScreenHeadings}>
            <h1>Keep your clients informed</h1>
            <h5>The easy to use text and email notification system</h5>
            <button className="gradient-button gradient-button-1">
              GET STARTED FOR FREE
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserHeader;
