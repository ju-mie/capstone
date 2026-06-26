import React, { forwardRef } from "react";
import './Button.css';
import Image from "../Image";

const Button = forwardRef(({className='', variant='secondary', label='', iconSrc='', iconOnly=false, type='button', ariaExpanded=false, ariaControls='', onClick
  }, ref) => {
    const allowedVariants = ['primary', 'secondary', 'ghost'];

    if (!allowedVariants.includes(variant)) {
      throw new Error(`Invalid value for variant: ${variant}`);
    }

    return (
      <button
      ref={ref}
      className={className ? className + ' button button--' + variant : 'button button--' + variant}
      type={type}
      aria-label={iconOnly ? label : undefined}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      onClick={onClick}>
        {iconOnly===true ? '' : <span className="button__text">{label}</span>}
        {(iconSrc!=='') ? <Image className="button__icon" imgSrc={iconSrc} imgAlt={label} ariaLabel={label} /> : ''}
      </button>
    )
  }
);

Button.displayName = "Button";

export default Button;