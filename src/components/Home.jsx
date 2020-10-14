// jshint esversion: 8

import React from "react";

import Navigation from "./Navigation";
import IntroHeader from "./IntroHeader";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navigation />
      <IntroHeader />
      <Footer />
    </div>
  );
}

export default Home;
