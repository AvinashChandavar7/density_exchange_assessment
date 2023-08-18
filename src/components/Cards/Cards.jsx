import React from 'react';
import './Cards.css';

const Cards = ({ className, bodyText }) => {
  return <figure className={className}>{bodyText && <p>{bodyText}</p>}</figure>;
};

export default Cards;
