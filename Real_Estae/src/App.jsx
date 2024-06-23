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
} from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <About />
      <Counterup />
      <Services />
      <Apartments />
      <Testimonial />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
