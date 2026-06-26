import React, { useState, useRef } from "react"
import { useLocation, NavLink } from "react-router";
import { routes } from "../../routes";
import './Nav.css';
import Button from "../Button/Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection] = useState("home");
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const buttonRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <nav className={"header-nav "+ (isOpen ? 'header-nav--open' : 'header-nav--closed')}
      aria-label="Main navigation">
      <Button 
        className="header-nav__toggle"
        variant="ghost"
        label={isOpen ? "Close navigation" : "Open navigation"}
        ariaExpanded={isOpen}
        ariaControls="header-nav-list"
        ref={buttonRef}
        onClick={handleToggle}
        iconSrc="./assets/icons/🦆 icon _hamburger menu_.svg"
        iconOnly={true}
      />
      {routes && routes.length > 0 && (
        <ul
          className={`header-nav__list ${isOpen ? "header-nav__list--open" : "header-nav__list--closed"}`}
          id="header-nav-list"
        >
          {routes.map((route) => (
            <li key={route.path} className="header-nav__item">
              {route.path.startsWith("/#") ? (
              <a
                href={route.path}
                className={`header-nav__link ${
                  activeSection === "about" ? "is-active" : ""
                }`}
                aria-current={activeSection === "about" ? "location" : undefined}
                onClick={closeMenu}
              >
                {route.label}
              </a>
            ) : (
              <NavLink
                to={route.path}
                onClick={closeMenu}
                aria-current={
                  location.hash === "#about" ? "location" : undefined
                }
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    "header-nav__link",
                    isPending ? "pending" : "",
                    isActive ? "is-active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                {route.label}
              </NavLink>
            )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Nav;