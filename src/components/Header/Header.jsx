import React from "react";
import { NavLink } from "react-router";
import routes from '../../Router';
import Image from '../Image';
import './Header.css';

const Header = () => {

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo logo logo--header">
          <Image className="logo__img logo__img--header" imgSrc="./assets/Asset 16@4x.png" imgAlt="Logo of Little Lemon Restaurant"/>
        </div>
        <nav className="header-nav">
          {routes.routes && routes.routes.length > 0 && (
            <ul className="header-nav__list">
              {routes.routes.map((route) => (
                <li key={route.path} className="header-nav__item">
                  <NavLink
                    to={route.path}
                    className={({ isActive, isPending, isTransitioning }) =>
                      [
                        "header-nav__link",
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                      ].join(" ")
                    }
                  >
                    {route.label}
                  </NavLink>
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