import React from "react";
import NavBar from "../NavBar/NavBar";
import { ProdutctsSlider } from "../ProductsSlider/ProdutctsSlider";

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
      <ProdutctsSlider />
    </header>
  );
};

export default Header;
