import React from "react";

const Logo = ({className, imageSrc, altText}) => {

  return (
    <img className={className} src={imageSrc} alt={altText} />
  )
}

export default Logo;