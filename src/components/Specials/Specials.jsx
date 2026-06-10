import React from "react";
import './Specials.css';
import DishTeaser from "../DishTeaser/DishTeaser";

const Specials = ({ data, title, linkLabel, linkSrc }) => {
  return (
    <section className="specials-section">
      <div className="specials-section__container container">
        <div className="specials-section__header">
          <h3 className="specials-section__title">{title}</h3>
          <a className="specials-section__button button button--primary" href={linkSrc}>{linkLabel}</a>
        </div>
        {data && data.length > 0 && (
          <div className="specials-section__teaser-list">
          {data.map((teaser, index) => (
            <DishTeaser
              key={index}
              dish={teaser.dish}
              price={teaser.price}
              text={teaser.text}
              imgSrc={teaser.imgSrc}
              imgAlt={'Photo of ' + teaser.guest}
            />
          ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Specials;