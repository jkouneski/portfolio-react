import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="py-2 bg-info">
      <div className="container text-light">
      <span>email :<a href="mailto:joeykouneski@gmail.com"> joeykouneski@gmail.com</a></span>
        <br/>
        <span><a href="https://github.com/jkouneski">Github</a></span>
        <br/>
        <span><a href="https://www.linkedin.com/in/joseph-kouneski">LinkedIn</a></span>
        <br />
        <small>&copy; Copyright 2021 Joey Kouneski</small>
      </div>
    </footer>
  );
};

export default Footer;