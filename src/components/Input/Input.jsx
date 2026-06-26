import React from "react";
import './Input.css';

const Input = ({
  className = "",
  id = "",
  name = "",
  type = "text",
  label = "",
  placeholder,
  min,
  max,
  required = false,
  value,
  onChange,
  onBlur,
  error,
  touched,
  ...props
}) => {
  return (
    <div className={className ? `${className} field` : "field"}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>

      <input
        className={error ? "field__input field__input--error" : "field__input" }
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && (
          <p className="field__error">{error}</p>
      )}
    </div>
  );
};

export default Input;