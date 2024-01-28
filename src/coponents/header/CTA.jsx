/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import RESUME from "../../assests/resume.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={RESUME} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's have a discussion!
      </a>
    </div>
  );
};
