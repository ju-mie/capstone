import React, { useState } from "react"
import { NavLink } from "react-router";
import { routes } from "../../routes";
import './Nav.css';
import Button from "../Button/Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={"header-nav "+ (isOpen ? 'header-nav--open' : 'header-nav--closed')}>
      <Button 
        className="header-nav__toggle"
        variant="ghost"
        label="Menu"
        ariaExpanded={isOpen}
        ariaControls="header-nav-list"
        onClick={handleToggle}
        iconSrc="./assets/icons/🦆 icon _hamburger menu_.svg"
        iconOnly={true}
      />
      {routes && routes.length > 0 && (
        <ul
          className="header-nav__list"
          id="header-nav-list"
          aria-hidden={isOpen ? false : true}
        >
          {routes.map((route) => (
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
  )
}

export default Nav;