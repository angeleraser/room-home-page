import React from "react";
import { iconArrow, iconArrowLeft, iconArrowRight } from "../../assets/svg/svg";

export const ProdutctsSlider = () => {
  return (
    <div className="ProductsSlider-root">
      <div className="ProductsSlider-Card">
        <h1 className="Section-Heading">
          Discover innovative ways to decorate
        </h1>
        <p className="Section-Description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui
          accusantium nemo eos nam voluptas quam atque tenetur ea magnam.
          Explicabo consectetur maxime quibusdam fugiat numquam obcaecati, eos
          ex voluptas?
        </p>
        <a
          className="ShopNow-Button"
          href="http://none.com"
          target="_blank"
          rel="noopener noreferrer">
          Shop now {iconArrow}
        </a>
      </div>
      <div className="SliderControls">
        <button>{iconArrowLeft}</button>
        <button>{iconArrowRight}</button>
      </div>
    </div>
  );
};
