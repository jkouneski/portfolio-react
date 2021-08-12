import React from "react";
import "./Project.css";

export default function Project({ screenshot, altText, github, link }) {
  return (
    <div className="col-lg-6 mb-4 color">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={screenshot} alt={altText} height="200" width="300" />
      </a>
      <div className="portfolio-links">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-info"
        >
          Github
        </a>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-info"
        >
          Link to App
        </a>
      </div>
    </div>
  );
}
