import React from 'react';
import './OpenVacancies.css';
import Cards from '../Cards/Cards';
import { vacancies } from '../../constants/data';

const OpenVacancies = () => {
  return (
    <section className="openVacancies__container">
      <h1>OpenVacancies</h1>

      <div className="openVacancies__content">
        {vacancies.map((card) => (
          <Cards
            key={card.id}
            role={card.role}
            shift={card.shift}
            location={card.location}
            packages={card.packages}
            bgColor={card.bgColor}
            btn={card.btn}
            className="openVacancies__cards"
          />
        ))}
      </div>
    </section>
  );
};

export default OpenVacancies;
