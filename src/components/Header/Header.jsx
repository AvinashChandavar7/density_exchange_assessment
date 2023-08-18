import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Buttons from '../Buttons/Buttons';
import { navBarLinks } from '../../constants/data';

import { gsap } from 'gsap';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  let logoItem = useRef(null);
  let buttonItem = useRef(null);
  let menuLinks = useRef([]);

  useEffect(() => {
    gsap.from(logoItem, {
      duration: 0.6,
      delay: 0.5,
      x: -400,
      stagger: 0.4,
      ease: 'power3.inOut',
    });

    gsap.to(logoItem, {
      duration: 0.6,
      x: 0,
      stagger: 0.2,
      ease: 'power3.inOut',
      delay: 2,
    });

    gsap.from(menuLinks.current, {
      duration: 0.6,
      delay: 0.5,
      y: -100,
      stagger: 0.4,
      ease: 'power3.inOut',
    });
    gsap.to(menuLinks.current, {
      duration: 0.6,
      y: 0,
      stagger: 0.2,
      ease: 'power3.inOut',
      delay: 2,
    });
    gsap.from(buttonItem, {
      duration: 0.8,
      delay: 0.5,
      x: 400,
      stagger: 0.4,
      ease: 'power3.inOut',
    });

    gsap.to(buttonItem, {
      duration: 0.8,
      x: 0,
      stagger: 0.4,
      ease: 'power3.inOut',
      delay: 2,
    });
  }, []);

  return (
    <nav className="nav__container">
      {/* Logo */}
      <div className="nav__logo">
        <a href="/">
          <img
            ref={(el) => (logoItem = el)}
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
      </div>

      {/* Menu Links */}
      <ul className="nav__menu">
        {navBarLinks.map(({ id, label }, index) => (
          <li
            key={`${index}-${id}`}
            id={id}
            ref={(el) => (menuLinks.current[index] = el)}
          >
            <a href={id} title={label}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact us */}
      <div className="nav__button" ref={(el) => (buttonItem = el)}>
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
