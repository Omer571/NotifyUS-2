// jshint esversion: 8

import React from "react";
import Navigation from "./Navigation";
import { makeStyles } from "@material-ui/core/styles";

function Contact() {
  const useStyles = makeStyles((theme) => ({
    heading: {
      marginTop: "125px"
    }
  }));

  const classes = useStyles();

  return (
    <div id="contact">
      <Navigation />
      <h1 className={classes.heading}>Contact</h1>
      <form>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default Contact;
