import React from "react";
import './TestimonialTeaser.css';
import Image from "../Image";

const TestimonialTeaser = ({rating="", guest="", text="", imgSrc="", imgAlt="", imgClass=""}) => {

  return (
    <article className="testimonial-teaser">
      <div className="testimonial-teaser__rating">Rating</div>
      <div className="testimonial-teaser__wrapper">
        <div className="testimonial-teaser__image-wrapper">
          <Image className={imgClass + " testimonial-teaser__img"} imgSrc={imgSrc} imgAlt={imgAlt} />
        </div>
        <h4 className="testimonial-teaser__name">{guest}</h4>
      </div>
      <p className="testimonial-teaser__text">{text}</p>
    </article>
  )
}

export default TestimonialTeaser;