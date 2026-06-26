import React from "react";
import './Hero.css';
import Image from "../Image";

const Hero = ({title="", subtitle="", text="", linkLabel="", linkUrl="", imgSrc="", imgAlt="", imgClass=""}) => {

  return (
    <section className="hero-section section">
      <div className="hero-section__container section__container">
        <div className="hero-section__text-wrapper">
          <h1 id="headingElement" className="hero-section__title section__title">{title}</h1>
          {subtitle!=='' ? <h2 className="hero-section__subtitle">{subtitle}</h2>: ''}
          <p className="hero-section__text">{text}</p>
          {(linkUrl && linkLabel) ? 
            <a className="hero-section__button button button--primary" href={linkUrl}>{linkLabel}</a>
            : ''
          }
        </div>
        <div className="hero-section__image-wrapper">
          <Image className={imgClass + " hero-section__img"} imgSrc={imgSrc} imgAlt={imgAlt} />
        </div>
      </div>
    </section>
  )
}

export default Hero;