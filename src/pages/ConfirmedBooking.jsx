import React from "react";
import Hero from "../components/Hero/Hero";

const ConfirmedBooking = () => {
  return (
    <Hero
      title="Booking Confirmed!"
      text="Your reservation has been successfully submitted."
      imgSrc="./assets/restaurant.jpg"
      imgAlt="interior view of the restaurant"
    />
  );
};

export default ConfirmedBooking;