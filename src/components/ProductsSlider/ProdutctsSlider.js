import React, { useState } from "react";
import { iconArrow, iconArrowLeft, iconArrowRight } from "../../assets/svg/svg";
import { getNewItemsPositions } from "../../helpers/getNewItemsPosition";
import { sliderCards } from "./fixtures";
const disableTime = 1000;
export const ProdutctsSlider = () => {
  const initialPositions = sliderCards.map((_, i, arr) =>
    i !== arr.length - 1
      ? {
          val: i,
          transition: 1,
        }
      : {
          val: -1,
          transition: 0,
        }
  );
  const [itemsPos, setItemPos] = useState(initialPositions);
  const [disableAction, setDisableAction] = useState(false);
  const handleItemsPostition = (direction) => {
    return () => {
      setDisableAction(true);
      const disableActionTimeout = setTimeout(() => {
        setDisableAction(false);
        clearTimeout(disableActionTimeout);
      }, disableTime);
      const newPositions = getNewItemsPositions(itemsPos, direction);
      setItemPos(newPositions);
    };
  };
  return (
    <div className="ProductsSlider-root">
      <div className="CardsSlider-root">
        {sliderCards.map((data, i) => (
          <div
            data-current={itemsPos[i].val === 0 ? true : false}
            aria-current={itemsPos[i].val === 0 ? true : false}
            style={{
              transform: `translateX(${itemsPos[i].val}00%)`,
              transition: `all ${itemsPos[i].transition}s`,
            }}
            key={i}
            className="ProductCard">
            <div className="Section-Heading">{data.title + i}</div>
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
        <button
          disabled={disableAction}
          onClick={handleItemsPostition("to left")}>
          {iconArrowLeft}
        </button>
        <button
          disabled={disableAction}
          onClick={handleItemsPostition("to right")}>
          {iconArrowRight}
        </button>
      </div>
    </div>
  );
};
