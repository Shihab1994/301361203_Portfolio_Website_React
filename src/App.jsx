/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./index.css";
import { Header } from "./coponents/header/Header";
import { Nav } from "./coponents/nav/Nav";
import { About } from "./coponents/about/About";
import { Experience } from "./coponents/experience/Experience";
import { Service } from "./coponents/services/Service";
import { Portfolio } from "./coponents/portfolio/Portfolio";
import { Contact } from "./coponents/contact/Contact";
import { Testimonial } from "./coponents/testimonials/testimonial";
import { Footer } from "./coponents/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Contact />
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default App;
