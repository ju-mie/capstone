import React from "react";
import Image from "../Image";
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
      <div className="footer__container container">
        <div className="footer__logo logo logo--footer">
          <Image className="logo__img logo__img--footer" imgSrc="./assets/Asset 9@4x.png" imgAlt="small version of logo"/>
        </div>
        {footerLinks && footerLinks.length > 0 && (
          <nav className="footer-nav">
            <ul key="footer-nav__list" className="footer-nav__list">
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