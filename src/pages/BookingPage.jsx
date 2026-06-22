import React from "react"
import BookingForm from "../components/BookingForm/BookingForm"
import './BookingPage.css';

const BookingPage = (
  {
    availableTimes,
    availableOccasions,
    dispatch,
    dispatchOccasions,
    submitForm
  }) => {

  return (
    <div className="booking-section">
      <div className="booking-section__container container">
        <BookingForm 
          availableTimes={availableTimes}
          availableOccasions={availableOccasions}
          dispatch={dispatch}
          dispatchOccasions={dispatchOccasions}
          submitForm={submitForm}
        />
        <p>Book your table quickly and easily.</p>
      </div>
    </div>
  )
}

export default BookingPage;