import React from 'react';
import { NavLink } from "react-router";
import routes from '../../Router';
import Image from '../Image';
import './Footer.css';

const footerLinks = [
  {
    title: "Contact",
    links: [
      {
        label: "Address",
        anchor: "home"
      },
      {
        label: "Phone number",
        anchor: "about"
      },
      {
        label: "Email",
        anchor: "menu"
      }
    ]
  },
  {
    title: "Social Media Links",
    links: [
      {
        label: "Instagram",
        link: "https://www.instagram.com"
      },
      {
        label: "Facebook",
        link: "https://www.facebook.com"
      },
      {
        label: "X",
        link: "https://www.x.com"
      }
    ]
  },
];

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo logo logo--footer">
          <Image className="logo__img logo__img--footer" imgSrc="./assets/Asset 9@4x.png" imgAlt="small version of logo"/>
        </div>
        {((footerLinks && footerLinks.length > 0) || (routes.routes && routes.routes.length > 0)) && (
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              {routes.routes && routes.routes.length > 0 && (
                <li key="footer-navigation" className="footer-nav__section">
                  <h3 className="footer-nav__section-title h4">Doormat Navigation</h3>
                  <ul className="footer-nav__section-list">
                    {routes.routes.map((route) => (
                    <li key={route.path} className="footer-nav__section-item">
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
                </li>
              )}
              {footerLinks.map((section, index) => (
                <li key={section.titel} className="footer-nav__section">
                  <h3 key={section.titel +'-' +section.index} className="footer-nav__section-title h4">{section.title}</h3>
                  {section.links && section.links.length > 0 && (
                    <ul key={"section-list"+section.links.index} className="footer-nav__section-list">
                    {section.links.map((link, label, anchor, index) => (
                      <li key={link.label} className="footer-nav__section-item">
                        <a
                          key={link.label+'-'+link.index}
                          className="footer-nav__link"
                          href={"/#"+link.anchor}
                        > 
                          {link.label}
                        </a>
                      </li>
                    ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </footer>
  )
}

export default Footer;