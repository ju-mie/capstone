import React from "react";
import './ConfirmationBooking.css';

const ConfirmedBooking = () => {
  return (
    <div className="confirmation-section">
      <div className="confirmation-section__container container">
        <div className="confirmation-section__content">
          <h1 className="confirmation-section__title">Booking Confirmed!</h1>
          <p>Your reservation has been successfully submitted.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;