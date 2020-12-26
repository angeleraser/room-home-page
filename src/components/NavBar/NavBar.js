/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { appLogo, iconClose, iconHamburguer } from "../../assets/svg/svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="Navbar">
      <button onClick={handleClickOpen} className="ToggleMenuButton is-active">
        {!isOpen ? iconHamburguer : iconClose}
      </button>
      <div className="AppLogo">{appLogo}</div>
      <ul className={`Menu${isOpen ? " is-open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
