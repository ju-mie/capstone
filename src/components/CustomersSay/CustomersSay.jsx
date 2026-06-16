import React from "react";
import './CustomersSay.css';
import Image from "../Image";

const CustomersSay = ({rating="", guest="", text="", imgSrc="", imgAlt="", imgClass=""}) => {

  return (
    <article className="customers-say">
      <div className="customers-say__rating">Rating</div>
      <div className="customers-say__wrapper">
        <div className="customers-say__image-wrapper">
          <Image className={imgClass + " customers-say__img"} imgSrc={imgSrc} imgAlt={imgAlt} />
        </div>
        <h4 className="customers-say__name">{guest}</h4>
      </div>
      <p className="customers-say__text">{text}</p>
    </article>
  )
}

export default CustomersSay;