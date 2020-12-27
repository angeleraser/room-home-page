import React from "react";
import { iconArrow } from "../../assets/svg/svg";
import PropTypes from "prop-types";
export const ProductCard = ({
  isCurrent,
  title,
  description,
  position,
  transitionTime,
}) => {
  return (
    <article
      data-current={isCurrent}
      aria-current={isCurrent}
      style={{
        transform: `translateX(${position}00%)`,
        transition: `all ${transitionTime}s`,
      }}
      className="ProductCard">
      <div className="Section-Heading">{title}</div>
      <div className="Section-Description">{description}</div>
      <button className="ShopNow-Button">Shop now {iconArrow}</button>
    </article>
  );
};

ProductCard.propTypes = {
  isCurrent: PropTypes.bool,
  itemPos: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
