import React from "react";
import { useLocation } from "react-router";
import Hero from "../components/Hero/Hero";

const ConfirmedBooking = () => {
  const { state } = useLocation();

  return (
    <>
      <Hero
        title="Booking Confirmed!"
        text="Your reservation has been successfully submitted."
        imgSrc="./assets/restaurant.jpg"
        imgAlt="interior view of the restaurant"
      />

      {state && (
        <section className="section">
          <div className="section__container">
            <div className="section__content">
              <h2 className="section__title h3">Reservation Summary</h2>
              <dl>
                <dt>Date:</dt><dd>{state.date}</dd>
                <dt>Time:</dt><dd>{state.time}</dd>
                <dt>Guests:</dt><dd>{state.guests}</dd>
                <dt>Occasion:</dt><dd>{state.occasion}</dd>
              </dl>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ConfirmedBooking;