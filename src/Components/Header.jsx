import React from "react";
import { useState } from "react";
import arrow from "./images/icon-arrow-down.svg";
import imageHeader from "./images/image-header.jpg";
import "./Style/Header.css";
import Hamburger from "./Hamburger";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div
      className="header-bg-image"
      style={{ backgroundImage: `url(${imageHeader})` }}
    >
      <div className="header">
        <h1>sunnyside</h1>
        <ul className="header-list">
          <li className="list-item-header">
            <a href="/">About</a>
          </li>
          <li className="list-item-header">
            <a href="/">Services</a>
          </li>
          <li className="list-item-header">
            <a href="/">Projects</a>
          </li>
          <li className="list-item-header">
            <a href="/">Contact</a>
          </li>
        </ul>
        <li
          onClick={toggleHamburger}
          className="list-item-header"
          id="hamburger"
        >
          <i className="fas fa-bars"></i>
        </li>
      </div>
      <div>
        <h1 className="header-heading">WE ARE CREATIVES</h1>
      </div>
      <div className="arrow-container">
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
      {/* {hamburger ? <Hamburger toggleHamburger={toggleHamburger} /> : null} */}
      <Hamburger hamburger={hamburger} toggleHamburger={toggleHamburger} />
    </div>
  );
};

export default Header;
