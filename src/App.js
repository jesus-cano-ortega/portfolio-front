import React from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./sections/index.js";
import { Navbar } from "./components/index.js";

const App = (props) => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
      ;
    </>
  );
};

export default App;
