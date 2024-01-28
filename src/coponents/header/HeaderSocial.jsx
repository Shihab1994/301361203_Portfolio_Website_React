/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        target="_blank"
      >
        <CiLinkedin />
      </a>
      <a href="https://github.com/Shihab1994" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};
