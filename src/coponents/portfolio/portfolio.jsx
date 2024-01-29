/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./portfolio.css";
import port1 from "../../assests/port1.jpg";
import port2 from "../../assests/port2.jpg";
import port3 from "../../assests/port3.jpg";
import port4 from "../../assests/port4.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt="" />
          </div>
          <h3>Title of the portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port3} alt="" />
          </div>
          <h3>Title of the portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt="" />
          </div>
          <h3>Title of the portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port3} alt="" />
          </div>
          <h3>Title of the portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={port1} alt="" />
          </div>
          <h3>Title of the portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
