import React from "react";
import { iconArrow, iconArrowLeft, iconArrowRight } from "../../assets/svg/svg";
import { sliderCards } from "./fixtures";

export const ProdutctsSlider = () => {
  return (
    <div className="ProductsSlider-root">
      <div className="CardsSlider-root">
        {sliderCards.map((data, i) => (
          <div key={i} className="ProductCard">
            <div className="Section-Heading">{data.title}</div>
            <div className="Section-Description">{data.description}</div>
            <a
              className="ShopNow-Button"
              href="http://none.com"
              target="_blank"
              rel="noopener noreferrer">
              Shop now {iconArrow}
            </a>
          </div>
        ))}
      </div>
      <div className="SliderControls">
        <button>{iconArrowLeft}</button>
        <button>{iconArrowRight}</button>
      </div>
    </div>
  );
};
