import React from "react";
import './Testimonials.css';
import TestimonialTeaser from "../TestimonialTeaser/TestimonialTeaser";

const Testimonials = ({ data, title }) => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__container container">
        <h3 className="testimonials-section__title">{title}</h3>
        {data && data.length > 0 && (
          <div className="testimonials-section__teaser-list">
          {data.map((teaser, index) => (
            <TestimonialTeaser
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