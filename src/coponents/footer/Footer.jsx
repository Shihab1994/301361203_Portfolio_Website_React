/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import './footer.css' 
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MI
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebookcom">
          <CiFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://facebookcom">
          <CiLinkedin />
        </a>
        <a href="https://facebookcom">
          <CiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MI. All rights reserved.</small>
      </div>
    </footer>
  );
};
