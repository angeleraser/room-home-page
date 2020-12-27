1import React, { useContext, useState } from "react";
import { SliderContext } from "../../App/App";
import { iconArrowLeft, iconArrowRight } from "../../assets/svg/svg";
import { getNewItemsPositions } from "../../helpers/getNewItemsPosition";
import { ProductCard } from "../ProductCard/ProductCard";
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
        if(direction === 'to right'){
           if (currentVal === sliderCards.length - 1) {
               return 0;
          } else {
               return currentVal +1;
          }
        } else {
            if (currentVal === 0){
               return sliderCards.length - 1;
          } else {
               return currentVal  - 1;
          }
        }
      });
    };
  };
  return (
    <div className="ProductsSlider-root">
      <div className="CardsSlider-root">
        {sliderCards.map((data, i) => (
          <ProductCard
            key={i}
            isCurrent={itemsPos[i].val === 0}
            title={data.title}
            description={data.description}
            position={itemsPos[i].val}
            transitionTime={itemsPos[i].transition}
          />
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
