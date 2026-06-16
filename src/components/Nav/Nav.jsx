import React from "react"
import { NavLink } from "react-router";
import routes from '../../Router';

const Nav = () => {

  return (
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
  )
}

export default Nav;