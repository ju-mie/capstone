import React from "react";
import Image from '../Image';
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
      <div className="header__container container">
        <div className="header__logo logo logo--header">
          <Image className="logo__img logo__img--header" imgSrc="./assets/Asset 16@4x.png" imgAlt="Logo of Little Lemon Restaurant"/>
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
      </div>
    </header>
  )
}

export default Header;