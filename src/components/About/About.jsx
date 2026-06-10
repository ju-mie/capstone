import React from "react";
import './About.css';
import Image from "../Image";

const About = ({title="", subtitle="", text="", imgSrc1="", imgAlt1="", imgClass1="", imgSrc2="", imgAlt2="", imgClass2=""}) => {

  return (
    <section className="about-section">
      <div className="about-section__container container">
        <div className="about-section__text-wrapper">
          <h3 className="about-section__title h1">{title}</h3>
          <h4 className="about-section__subtitle h2">{subtitle}</h4>
          <p className="about-section__text">{text}</p>
        </div>
        <div className="about-section__image-wrapper about-section__image-wrapper--1">
          <Image className={imgClass1 + " about-section__img about-section__img--1"} imgSrc={imgSrc1} imgAlt={imgAlt1} />
        </div>
        <div className="about-section__image-wrapper about-section__image-wrapper--2">
          <Image className={imgClass2 + " about-section__img about-section__img--2"} imgSrc={imgSrc2} imgAlt={imgAlt2} />
        </div>
      </div>
    </section>
  )
}

export default About;