import React from "react";

const Image = ({className='', imgSrc, imgAlt, ariaLabel}) => {
  return (
  <img className={className} src={imgSrc} alt={imgAlt} aria-label={ariaLabel}/>
  )
}

export default Image;