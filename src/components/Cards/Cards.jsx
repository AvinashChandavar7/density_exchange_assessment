import React from 'react';
import './Cards.css';
import Buttons from '../Buttons/Buttons';

const Cards = ({
  className,
  emojis,
  title,
  bodyText,
  color,
  bgColor,
  role,
  shift,
  location,
  packages,
  btn,
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <figure className={className} style={cardStyle}>
      {emojis && <h1>{emojis}</h1>}
      {title && <h3>{title}</h3>}
      {role && <h3>{role}</h3>}
      {bodyText && <p>{bodyText}</p>}

      {shift && <h4>{shift}</h4>}
      {location && <h4>{location}</h4>}
      {packages && <h4>{packages}</h4>}

      {btn && <Buttons title={btn} className="openVacancies__btn" />}
    </figure>
  );
};

export default Cards;
