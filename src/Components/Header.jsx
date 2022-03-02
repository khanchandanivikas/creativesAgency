import React from "react";
import { useState } from "react";
import arrow from "./images/icon-arrow-down.svg";
import imageHeader from "./images/image-header.jpg";
import "./Style/Header.css";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const animationText = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.22,
      },
    },
  };

  const animationArrow = {
    hidden: { translateY: -200 },
    visible: {
      translateY: 0,
      transition: {
        duration: 0.5,
      },
    },
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
        <motion.h1
          variants={animationText}
          initial="hidden"
          animate="visible"
          className="header-heading"
        >
          WE ARE CREATIVES
        </motion.h1>
      </div>
      <motion.div
        variants={animationArrow}
        initial="hidden"
        animate="visible"
        className="arrow-container"
      >
        <img src={arrow} alt="arrow" className="arrow" />
      </motion.div>
      <Hamburger hamburger={hamburger} toggleHamburger={toggleHamburger} />
    </div>
  );
};

export default Header;
