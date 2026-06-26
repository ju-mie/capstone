import React from "react";
import './Testimonials.css';
import CustomersSay from "../CustomersSay/CustomersSay";

const Testimonials = ({ data, title }) => {
  return (
    <section className="testimonials-section section">
      <div className="testimonials-section__container section__container">
        <h3 className="testimonials-section__title section__title">{title}</h3>
        {data && data.length > 0 && (
          <div className="testimonials-section__customers-say">
          {data.map((teaser, index) => (
            <CustomersSay
              key={index}
              rating={teaser.rating}
              guest={teaser.guest}
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

export default Testimonials;