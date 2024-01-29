/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./header.css";
import { CTA } from "./CTA";
import { HeaderSocial } from "./HeaderSocial";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import me from '../../assests/me.jpg'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Md Mahfuzul Islam</h1>
        <h5 className="text-light">Junior Software Engineer</h5>
        <CTA />
        <HeaderSocial />
        <CiLinkedin />
        <FaGithub />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="me">
          <img src={me} alt="me" />
        </div>
      </div>
    </header>
  );
};
