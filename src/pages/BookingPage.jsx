import React from "react"
import { useOutletContext } from "react-router";
import BookingForm from "../components/BookingForm/BookingForm"
import './BookingPage.css';

const BookingPage = () => {
  const { availableTimes, availableOccasions, dispatch, dispatchOccasions } = useOutletContext();

  return (
    <div className="booking-section">
      <div className="booking-section__container container">
        <h1 className="booking-section__title" id="headingElement">Reserve a table</h1>
        <BookingForm 
          availableTimes={availableTimes}
          availableOccasions={availableOccasions}
          dispatch={dispatch}
          dispatchOccasions={dispatchOccasions}
        />
        <p>Book your table quickly and easily.</p>
      </div>
    </div>
  )
}

export default BookingPage;