import React from "react";

import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Services from "./Sections/Services";
import Testimonials from "./Sections/Testimonials";
import CallToAction from "./Sections/CallToAction";

function index() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default index;
