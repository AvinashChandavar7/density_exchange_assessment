import React from 'react';
import './SelfImprovement.css';

import ghost2 from '../../assets/ghost2.svg';
import { timelineData } from '../../constants/data';

const SelfImprovement = () => {
  return (
    <section className="selfImprovement__container" id="self-awareness">
      <p className="selfImprovement__small">
        Wrong with self-improvement & how we're fixing it.
      </p>
      <div className="selfImprovement__box">
        <h1 className="selfImprovement__title">Self-improvement. Ugh.</h1>
        <img src={ghost2} alt="ghost2" className="selfImprovement__ghost" />
      </div>

      {/* timeline */}
      <div className="selfImprovement__timeline">
        {timelineData.map((item) => (
          <div key={item.id} className="selfImprovement__content">
            <img src={item.img} alt={item.img} loading="lazy" />
            <div className="selfImprovement__text">
              <h1 className="selfImprovement__text-h1">{item.title}</h1>
              <p className="selfImprovement__text-p">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelfImprovement;
