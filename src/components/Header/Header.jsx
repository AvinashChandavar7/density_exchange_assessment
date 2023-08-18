import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Buttons from '../Buttons/Buttons';
import { navBarLinks } from '../../constants/data';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  return (
    <nav className="nav__container">
      {/* Logo */}
      <div className="nav__logo">
        <a href="/">
          <img src={logo} alt="logo" loading="lazy" />
        </a>
      </div>

      {/* Menu Links */}
      <ul className="nav__menu">
        {navBarLinks.map(({ id, label }, index) => (
          <li key={`${index}-${id}`} id={id}>
            <a href={id} title={label}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact us */}
      <div className="nav__button">
        <Buttons title="Download app" className="nav__btn" />
      </div>

      {/* Moblie */}
      <div className="nav__menu-moblie">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={handleToggleMenu}
        />
        {/*  */}
        {toggleMenu && (
          <div className="nav__menu-overlay">
            <AiOutlineClose
              color="#fff"
              fontSize={40}
              style={{ margin: '2rem' }}
              onClick={handleToggleMenu}
            />
            {/*  */}
            <ul className="nav__menu-moblie-links">
              {navBarLinks.map(({ id, label }, index) => (
                <li key={`${index}-${id}`} id={id}>
                  <a href={id} title={label} onClick={handleToggleMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {/*  */}
          </div>
        )}
      </div>

      {/*  */}
    </nav>
  );
};

export default Header;
