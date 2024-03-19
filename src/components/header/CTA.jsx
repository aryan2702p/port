import React from "react";
import cv from "../../assets/Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn-42">
        Download CV
      </a>
      <a href="#contact" className="btn-56">Let's Talk</a>
    </div>
  );
};

export default CTA;