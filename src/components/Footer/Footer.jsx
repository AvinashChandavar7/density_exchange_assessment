import React from 'react';
import logo from '../../assets/logo.png';
import ahead from '../../assets/ahead-logo.svg';
import appstore from '../../assets/appstore-logo.svg';
import './Footer.css';

import { MdLocationOn } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="footer__container">
      <img src={logo} alt="logo" className="footer_logo" loading="lazy" />
      <img src={ahead} alt="ahead" loading="lazy" />

      <div className="footer__info">
        <p>
          <MdLocationOn className="icons" /> AuguststraᏰe 26, 10117 Berlin
        </p>

        <p>
          <HiMail className="icons" /> hi@ahead-app.com
        </p>
      </div>
      <img src={appstore} alt="app-store" loading="lazy" />

      <div className="footer__copyright">
        <p>© 2023 Ahead app. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
