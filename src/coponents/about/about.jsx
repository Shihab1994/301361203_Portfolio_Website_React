/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./about.css";
import me from "../../assests/me2.jpg";
import { LuAward } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <LuAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ years of experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ wroldwide!</small>
            </article>

            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ projects completed!</small>
            </article>
          </div>

          <p>
            Enthusiastic software engineer who is seeking to learn something new
            in the arena of programming and find the opportunity to work in a
            fun and challenging environment which will encourage to improve as
            well as motivate by ideas and wonders of technical development.
          </p>
          
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};
