import React from "react";
import Logo from "../Logo";
import './Footer.css';

const footerLinks = [
  {
    title: "Doormat Navigation",
    links: [
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
    ]
  },
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
      <div className="footer-logo">
        <Logo className="footer-logo__img" imageSrc="./assets/Asset 9@4x.png" altText="small version of logo"/>
      </div>
      {footerLinks && footerLinks.length > 0 && (
        <nav className="footer-nav">
          <ul className="footer-nav__list">
          {footerLinks.map((section) => (
            <li key={section.titel} className="footer-nav__section">
              <h3 className="footer-nav__section-title">{section.title}</h3>
              {section.links && section.links.length > 0 && (
                <ul className="footer-nav__section-list">
                {section.links.map((link, label, anchor) => (
                <li key={link.label} className="footer-nav__section-item">
                  <a
                    className="footer-nav__link"
                    href={"/#"+link.anchor}
                    onClick={''}
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
    </footer>
  )
}

export default Footer;