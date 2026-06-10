import React from "react";
import Logo from '../Logo';
import './Header.css';

const Header = () => {

  const internalLinks = [
    {
      label: "Home",
      anchor: "home"
    },
    {
      label: "About",
      anchor: "about"
    },
    {
      label: "Menu",
      anchor: "menu"
    },
    {
      label: "Reservation",
      anchor: "reservation"
    },
    {
      label: "Order Online",
      anchor: "order-online"
    },
    {
      label: "Login",
      anchor: "login"
    }
  ];

  return (
    <header className="header">
      <div className="header-logo">
        <Logo className="header-logo__img" imageSrc="./assets/Asset 16@4x.png" altText="Logo of Little Lemon Restaurant"/>
      </div>
      <nav className="header-nav">
        {internalLinks && internalLinks.length > 0 && (
          <ul className="header-nav__list">
          {internalLinks.map((link) => (
            <li key={link.label} className="header-nav__item">
              <a
                className="header-nav__link"
                href={"/#"+link.anchor}
              > 
              {link.label}
              </a>
            </li>
          ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header;