import React, { useContext, useState } from "react";
import { SliderContext } from "../../App/App";
import { iconArrow, iconArrowLeft, iconArrowRight } from "../../assets/svg/svg";
import { getNewItemsPositions } from "../../helpers/getNewItemsPosition";
import { sliderCards } from "./fixtures";
const disableTime = 500;
export const ProdutctsSlider = () => {
  const { setCurrentImageIndex } = useContext(SliderContext);
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
      setCurrentImageIndex((currentVal) => {
        if (currentVal === sliderCards.length - 1) {
          return 0;
        } else {
          return currentVal + 1;
        }
      });
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
