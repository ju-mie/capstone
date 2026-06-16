import React from "react";
import Image from '../Image';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo logo logo--header">
          <Image className="logo__img logo__img--header" imgSrc="./assets/Asset 16@4x.png" imgAlt="Logo of Little Lemon Restaurant"/>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header;