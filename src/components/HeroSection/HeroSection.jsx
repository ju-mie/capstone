import React from "react";
import Image from "../Image";
import './HeroSection.css';

const HeroSection = ({title="", subtitle="", text="", imgSrc="", imgAlt="", imgClass=""}) => {

  return (
    <section className="hero-section">
      <div className="hero-section__content container">
        <div className="hero-section__text">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{text}</p>
        </div>
        <div className="hero-section__image-wrapper">
          <Image className={imgClass + " section-hero__img"} src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;