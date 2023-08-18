import React from 'react';
import Cards from '../Cards/Cards';
import './Soundfamiliar.css';

import { cardData } from '../../constants/data';

const Soundfamiliar = () => {
  return (
    <section className="soundFamiliar__container" id="manifesto">
      <h1 className="soundFamiliar__titles">Does this sound familiar...</h1>

      <div className="soundFamiliar__slider">
        {cardData.map((card) => (
          <Cards
            key={card.id}
            emojis={card.emojis}
            title={card.title}
            bodyText={card.bodyText}
            className={card.className}
            color={card.color}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Soundfamiliar;
