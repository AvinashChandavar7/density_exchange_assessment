import React from 'react';
import './Buttons.css';

const Buttons = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};

export default Buttons;
