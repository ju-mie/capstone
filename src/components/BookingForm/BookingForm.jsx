import React, {useState, useEffect } from "react";
//import { useFormik } from "formik";
import './BookingForm.css'
import Button from "../Button/Button";
import Input from "../Input/Input";

const BookingForm = ({
  availableTimes,
  availableOccasions,
  dispatch,
  dispatchOccasions,
  submitForm
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [formIsValid, setFormIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  const validateForm = (
    selectedDate,
    selectedTime,
    numberOfGuests,
    selectedOccasion
  ) => {
    return (
      selectedDate !== "" &&
      selectedTime !== "" &&
      numberOfGuests >= 1 &&
      numberOfGuests <= 10 &&
      selectedOccasion !== ""
    );
  };

  useEffect(() => {
    setFormIsValid(
      validateForm(
        date,
        time,
        guests,
        occasion
      )
    );
  }, [date, time, guests, occasion]);

  return (
    <div className="booking-form">
      <h1 className="booking-form__title" id="headingElement">Reserve a table</h1>
      <form className="booking-form__form" onSubmit={handleSubmit}>
        <Input
          type="date"
          id="res-date"
          /*ref={inputRef}*/
          label="Choose date"
          required={true}
          value={date}
          onChange={(e) => {
            const selectedDate = e.target.value;
            setDate(selectedDate);
            dispatch(selectedDate);
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          required={true}
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <Input
          type="number"
          id="guests"
          label="Number of guests"
          placeholder="1"
          min="1"
          max="10"
          required={true} 
          value={guests}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (value >= 1 && value <= 10) {
              setGuests(value);
            }
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          required={true}
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
        >
          {availableOccasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        <Button
          variant="primary"
          type="submit"
          label="Make Your reservation"
          disabled={!formIsValid}
        />
      </form>
    </div>
  )
}

export default BookingForm;