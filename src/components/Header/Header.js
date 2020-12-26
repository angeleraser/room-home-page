import React from "react";
import NavBar from "../NavBar/NavBar";
import { ProdutctsSlider } from "../ProductsSlider/ProdutctsSlider";

const Header = () => {
  return (
    <header className="Header">
      <NavBar />
      <div className="SliderImages-root">
        <img
          className="SliderImage"
          src="./src/assets/jpg/slider-1.jpg"
          alt="table"
        />
      </div>
      <ProdutctsSlider />
    </header>
  );
};

export default Header;
