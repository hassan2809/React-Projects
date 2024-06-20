import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Special from "../components/Special";
import Reservation from "../components/Reservation";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Special />
      <Reservation />
      <Menu />
      <Footer />
    </div>
  );
};

export default Main;
