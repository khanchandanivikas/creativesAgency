import React from "react";
import "./Style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-heading">sunnyside</h2>
      <ul className="footer-list">
        <li>
          <a href="/" className="footer-links">
            About
          </a>
        </li>
        <li>
          <a href="/" className="footer-links">
            Services
          </a>
        </li>
        <li>
          <a href="/" className="footer-links">
            Projects
          </a>
        </li>
      </ul>
      <ul className="social">
        <li>
          <a href="/" className="footer-links">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="/" className="footer-links">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/" className="footer-links">
            <i className="fab fa-pinterest"></i>
          </a>
        </li>
        <li>
          <a href="/" className="footer-links">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
