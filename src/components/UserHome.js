// jshint esversion: 8

import React from "react";

import Navigation from "./Navigation";
import Header from "./UserHeader";
import Footer from "./Footer";

function UserHome() {
  return (
    <div>
      <Navigation />
      <UserHeader />
      <Footer />
    </div>
  );
}

export default UserHome;
