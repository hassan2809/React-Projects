import React from "react";
import {
  Navbar,
  MainSection,
  About,
  Counterup,
  Services,
  Apartments,
  Testimonial,
  Footer,
  Scroll,
} from "../components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <div id="about">
        <About />
      </div>
      <Counterup />
      <Services />
      <Apartments />
      <Testimonial />
      <Footer />
      <Scroll />
    </div>
  );
};

export default Home;
