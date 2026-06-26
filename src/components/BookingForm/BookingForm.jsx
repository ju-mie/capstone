import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from "../Button/Button";
import Input from "../Input/Input";
import './BookingForm.css'

const BookingForm = ({
  availableTimes,
  availableOccasions,
  dispatch,
  dispatchOccasions,
  submitForm
}) => {

const today = new Date();
today.setHours(0, 0, 0, 0);

  const validationSchema = Yup.object({
    date: Yup.date()
    .typeError("Please enter a valid date")
    .min(today, "Please choose today or a future date")
    .required("Please choose a date"),
    time: Yup.string().required("Please choose a time"),
    guests: Yup.number()
      .min(1, "Minimum 1 guest")
      .max(10, "Maximum 10 guests")
      .required("Required"),
    occasion: Yup.string().required("Please choose an occasion"),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "18:00",
      guests: 1,
      occasion: "Birthday",
    },
    validationSchema,
    onSubmit: (values) => submitForm(values),
  });

  return (
    <div className="section">
      <div className="booking-form section__container">
        <form className="booking-form__form section__content" onSubmit={formik.handleSubmit}>
          <fieldset className="booking-form__fieldset">
            <Input
              type="date"
              id="res-date"
              name="date"
              label="Choose date"
              required={true}
              value={formik.values.date}
              error={formik.errors.date}
              touched={formik.touched.date}
              onChange={(e) => {
                  formik.handleChange(e);
                  dispatch(e.target.value);
              }}
            />
            <div className="field">
              <label className="field__label" htmlFor="res-time">Choose time</label>
              <select
                className="field__input"
                id="res-time"
                name="time"
                required={true}
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {formik.touched.time && formik.errors.time && (
                <p className="field__error">{formik.errors.time}</p>
              )}
            </div>
            <Input
              id="guests"
              name="guests"
              label="Number of guests"
              min={1}
              max={10}
              value={formik.values.guests}
              error={formik.errors.guests}
              touched={formik.touched.guests}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="field">
              <label className="field__label" htmlFor="occasion">Occasion</label>
              <select
                className="field__input"
                id="occasion"
                name="occasion"
                required={true}
                value={formik.values.occasion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {availableOccasions.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
              {formik.touched.occasion && formik.errors.occasion && (
                <p className="field__error">{formik.errors.occasion}</p>
              )}
            </div>
          </fieldset>
          <Button
            className="booking-form__button"
            variant="primary"
            type="submit"
            label="Make your reservation"
            disabled={!(formik.isValid && formik.dirty)}
          />
        </form>
      </div>
    </div>
  )
}

export default BookingForm;