import React from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="Header">
      <NavBar />
      <div className="Header-Wallpaper">
        <img
          src="./src/assets/jpg/slider-1.jpg"
          alt="carrousel slider header background"
        />
      </div>
    </header>
  );
};

export default Header;
