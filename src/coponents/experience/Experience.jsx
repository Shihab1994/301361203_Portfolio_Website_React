/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./experience.css";
import { FaCircleCheck } from "react-icons/fa6";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Skill I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <h4>C#</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <h4>MSSQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <h4>Oracle</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaCircleCheck className="experience__details-icon" />
              <h4>Spring Boot</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
