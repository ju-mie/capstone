import React from "react"
import BookingForm from "../components/BookingForm/BookingForm"
import Hero from "../components/Hero/Hero"

const BookingPage = (
  {
    availableTimes,
    availableOccasions,
    dispatch,
    dispatchOccasions,
    submitForm
  }) => {

  return (
    <>
      <Hero
        title="Reserve a table"
        text="Book your table quickly and easily."
        imgSrc="./assets/restaurant.jpg"
        imgAlt="interior view of the restaurant"
      />
      <BookingForm
        availableTimes={availableTimes}
        availableOccasions={availableOccasions}
        dispatch={dispatch}
        dispatchOccasions={dispatchOccasions}
        submitForm={submitForm}
      />
    </>
  )
}

export default BookingPage;