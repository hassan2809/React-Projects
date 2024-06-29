import React from "react";
import { Routes, Route } from "react-router-dom";

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
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
