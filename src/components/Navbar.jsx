import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import "../style/navbar.css";

const Navabar = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <header
      className="myHeader_container"
    >
      <nav className="myHeader_wrapper">
        <h1>sunnyside</h1>
        <ul className={!hamburger ? "nav_list hidden" : "nav_list"}>
          <li className="nav_list_item">
            <a href="/">About</a>
          </li>
          <li className="nav_list_item">
            <a href="/">Services</a>
          </li>
          <li className="nav_list_item">
            <a href="/">Projects</a>
          </li>
          <li className="nav_list_item">
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="hamburgerIcon" onClick={toggleHamburger}>
          <Hamburger size={20} toggled={hamburger} />
        </div>
      </nav>
    </header>
  );
};

export default Navabar;
