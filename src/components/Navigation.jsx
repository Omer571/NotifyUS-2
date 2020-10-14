// jshint esversion: 8

import React, { useState } from "react";
import NavigationDesktop from "./NavigationDesktop";
import NavigationSmaller from "./NavigationSmaller";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

// const { width, height } = require("screenz");


function Navigation() {

  const [width, setCurrentWidth] = useState(window.innerWidth);
  const [screenMobile, setScreenMobile] = useState(width <= 960);

  // If screen size changes
  function resize() {
    setCurrentWidth(window.innerWidth);
    if (width <= 960) {
      setScreenMobile(true);
    } else {
      setScreenMobile(false);
    }
  }

  window.addEventListener('resize', resize);
  // process.stdout.on("resize", resize);

  // window.addEventListener("resize", resize);
  // console.log(screenMobile);

  if (screenMobile === false) {
    return <NavigationDesktop />;
  } else {
    return <NavigationSmaller />;
  }
}

export default Navigation;
