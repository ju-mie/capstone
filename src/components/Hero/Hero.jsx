import React from "react";
import './Hero.css';
import Image from "../Image";

const Hero = ({title="", subtitle="", text="", linkLabel="", linkSrc="", imgSrc="", imgAlt="", imgClass=""}) => {

  return (
    <section className="hero-section">
      <div className="hero-section__container container">
        <div className="hero-section__text-wrapper">
          <h1 className="hero-section__title">{title}</h1>
          <h2 className="hero-section__subtitle">{subtitle}</h2>
          <p className="hero-section__text">{text}</p>
          <a className="hero-section__button button button--primary" href={linkSrc}>{linkLabel}</a>
        </div>
        <div className="hero-section__image-wrapper">
          <Image className={imgClass + " hero-section__img"} imgSrc={imgSrc} imgAlt={imgAlt} />
        </div>
      </div>
    </section>
  )
}

export default Hero;