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
import { Portfolio } from "./coponents/portfolio/portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
    </div>
    // <div>
    //   <h1>Welcome to My React App</h1>
    //   <p>This is a static paragraph in my web page.</p>
    // </div>
  );
};

export default App;
