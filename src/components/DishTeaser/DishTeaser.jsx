import React from "react";
import './DishTeaser.css';
import Image from "../Image";
import Button from "../Button/Button";

const DishTeaser = ({dish="", price="", text="", imgSrc="", imgAlt="", imgClass=""}) => {

  return (
    <article className="dish-teaser">
      <div className="dish-teaser__image-wrapper">
        <Image className={imgClass + " dish-teaser__img"} imgSrc={imgSrc} imgAlt={imgAlt} />
      </div>
      <div className="dish-teaser__text-wrapper">
        <div className="dish-teaser__header">
          <h4 className="dish-teaser__name">{dish}</h4>
          <span className="dish-teaser__price">{price}</span>
        </div>
        <p className="dish-teaser__text">{text}</p>
        <Button
          className="dish-teaser__button"
          variant="ghost"
          label="Deliver"
          icon="./assets/icons/delivery.png"
          />
      </div>
    </article>
  )
}

export default DishTeaser;