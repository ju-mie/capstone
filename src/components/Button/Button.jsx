import React from "react";
import './Button.css';

const Button = ({ className='', variant='secondary', label='', type='button', onClick='' }) => {
  const allowedVariants = ['primary', 'secondary', 'ghost'];
  
  if (!allowedVariants.includes(variant)) {
    throw new Error(`Invalid value for variant: ${variant}`);
  }

  return (
    <button className={className ? className + ' button button--' + variant : 'button button--' + variant} type={type}>{label}</button>
  )
}

export default Button;