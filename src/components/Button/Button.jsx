import React from "react";

const Button = (className='', label='', type='button', variant='') => {

  return (
    <button className={className + 'button button' + variant} type={type}>{label}</button>
  )
}

export default Button;