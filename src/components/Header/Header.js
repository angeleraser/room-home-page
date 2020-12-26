import React, { useContext } from "react";
import { SliderContext } from "../../App/App";
import NavBar from "../NavBar/NavBar";
import { sliderCards } from "../ProductsSlider/fixtures";
import { ProdutctsSlider } from "../ProductsSlider/ProdutctsSlider";

const Header = () => {
  const { currentImageIndex } = useContext(SliderContext);
  const images = sliderCards.map(({ img }, i) => (
    <img alt={img.alt} src={img.src} key={i}></img>
  ));
  return (
    <header className="Header">
      <NavBar />
      <div className="SliderImages-root">{images[currentImageIndex]}</div>
      <ProdutctsSlider />
    </header>
  );
};

export default Header;
