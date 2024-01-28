/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

export const Nav = () => {
  return (
    <nav>
      <a href="#">
        <IoHomeOutline />
      </a>
      <a href="#about">
        <FaRegUser />
      </a>
      <a href="#experience">
        <MdOutlineLibraryBooks />
      </a>
      <a href="#services">
        <MdMiscellaneousServices />
      </a>
      <a href="#contact">
        <FaRegMessage />
      </a>
    </nav>
  );
};
