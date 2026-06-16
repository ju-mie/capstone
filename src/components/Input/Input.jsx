import React, { useState } from "react";
import './Input.css';

const Input = ({className="", id="", type="text", label="", placeholder="", min="", max="max", required=false }) => {
  const [value, setValue] = useState(""); 

  const handleChange = (e) => { 
    setValue(e.target.value) 
  }

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
  });*/

  return(
    <div className={className ? className + ' field' : 'field'}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        min={min}
        max={max}
        required={required}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input;