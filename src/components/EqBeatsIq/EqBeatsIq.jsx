import React from 'react';
import './EqBeatsIq.css';
import Cards from '../Cards/Cards';

const EqBeatsIq = ({ title, paragraphs }) => {
  return (
    <section className="eqBeats__container">
      <h1>{title}</h1>

      <div className="eqBeats__info">
        {paragraphs.map((paragraph) => (
          <Cards
            key={paragraph.id}
            bodyText={paragraph.text}
            className="eqBeats__card"
          />
        ))}
      </div>
    </section>
  );
};

export default EqBeatsIq;
