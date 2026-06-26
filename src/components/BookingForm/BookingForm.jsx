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
    <div clasName="section">
      <div className="booking-form section__container">
        <form className="booking-form__form section__content" onSubmit={handleSubmit}>
          <fieldset className="booking-form__fieldset">
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
            <div className="field">
              <label className="field__label" htmlFor="res-time">Choose time</label>
              <select
                className="field__input"
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
            </div>
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
            <div className="field">
              <label className="field__label" htmlFor="occasion">Occasion</label>
              <select
                className="field__input"
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
            </div>
          </fieldset>
          <Button
            className="booking-form__button"
            variant="primary"
            type="submit"
            label="Make your reservation"
            disabled={!formIsValid}
          />
        </form>
      </div>
    </div>
  )
}

export default BookingForm;