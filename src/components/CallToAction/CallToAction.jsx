import React from "react";
import './CallToAction.css';
import Image from "../Image";
import Button from "../Button/Button";

const CallToAction = ({title="", subtitle="", text="", linkLabel="", linkSrc="", imgSrc="", imgAlt="", imgClass=""}) => {

  return (
    <section className="call-to-action-section">
      <div className="call-to-action-section__container container">
        <div className="call-to-action-section__text-wrapper">
          <h1 className="call-to-action-section__title">{title}</h1>
          <h2 className="call-to-action-section__subtitle">{subtitle}</h2>
          <p className="call-to-action-section__text">{text}</p>
          <Button
          className="call-to-action-section__button"
          variant="primary"
          label={linkLabel}
          onClick={linkLabel}
          />
        </div>
        <div className="call-to-action-section__image-wrapper">
          <Image className={imgClass + " call-to-action-section__img"} imgSrc={imgSrc} imgAlt={imgAlt} />
        </div>
      </div>
    </section>
  )
}

export default CallToAction;