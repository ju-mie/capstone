import React, {useState} from "react";
//import { useFormik } from "formik";
import './BookingForm.css'
import Button from "../Button/Button";
import Input from "../Input/Input";
//import useSubmit from "../hooks/useSubmit";

const BookingForm = ({
  availableTimes,
  availableOccasions,
  dispatch,
  dispatchOccasions
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  //const {isLoading, response, submit} = useSubmit();

  /*const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    
    onSubmit: async (values, { resetForm }) => {
      await submit("/contact", values);

      // Reset form on successful submission
      if (response?.type === "success") {
        resetForm();
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Must be a valid email adress.").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);

      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);*/

  return (
    <form className="booking-form" /*onSubmit={handleSubmit}*/>
      <Input
        type="date"
        id="res-date"
        /*ref={inputRef}*/
        label="Choose date"
        required={true}
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(e.target.value);
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          dispatch(e.target.value);
        }}
      >
        {availableTimes.map((time) => (
          <option key={time}>
            {time}
          </option>
        ))}
      </select>
      <Input
        type="number"
        id="guest"
        label="Number of guests"
        placeholder="1"
        min="1"
        max="10"
        required={true} 
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
          dispatchOccasions(e.target.value);
        }}
      >
        {availableOccasions.map((occasion) => (
          <option key={occasion}>
            {occasion}
          </option>
        ))}
      </select>
      <Button
        variant="primary"
        type="submit"
        label="Make Your reservation" 
        /*isLoading={isLoading}*/
      />
    </form>
  )
}

export default BookingForm;