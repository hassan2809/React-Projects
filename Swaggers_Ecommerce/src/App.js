import React from "react";
import NavBar from "./assets/components/NavBar";
import Hero from "./assets/components/Hero";
import Products from "./assets/components/Products";
import TopProducts from "./assets/components/TopProducts";
import Banner from "./assets/components/Banner";
import Email from "./assets/components/Email";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Email />
      <Footer />
    </div>
  );
};

export default App;
