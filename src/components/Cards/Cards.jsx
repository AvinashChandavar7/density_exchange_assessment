import React from 'react';
import './Cards.css';

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
    </figure>
  );
};

export default Cards;
