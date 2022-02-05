import React from "react";
import "./Style/Hamburger.css";

const Hamburger = (props) => {
  const showHideHamburger = props.toggleHamburger;
  const hamburgerState = props.hamburger;
  return (
    <div className={hamburgerState ? "hamburger-menu" : "hamburger-menu-hide"}>
      <ul className="hamburger-list">
        <li onClick={showHideHamburger} className="list-item-hamburger">
          <i className="fas fa-times"></i>
        </li>
        <li className="list-item-hamburger">
          <a href="/" className="hamburger-links">
            About
          </a>
        </li>
        <li className="list-item-hamburger">
          <a href="/" className="hamburger-links">
            Services
          </a>
        </li>
        <li className="list-item-hamburger">
          <a href="/" className="hamburger-links">
            Projects
          </a>
        </li>
        <li className="list-item-hamburger">
          <a href="/" className="hamburger-links">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
