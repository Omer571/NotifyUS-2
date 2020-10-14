// jshint esversion: 8

import React from "react";
import Logo from "./Logo";
import MenuListComposition from "./MenuListComposition";

function NavigationSmaller() {
  return (
    <div className="navigation-smaller full-width-fixed">
      <Logo />
      <MenuListComposition />
    </div>
  );
}

export default NavigationSmaller;
