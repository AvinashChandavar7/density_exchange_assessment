import React from 'react';
import './Anonymously.css';

import circle2 from '../../assets/circle2.svg';

import { stepsData, circlesData } from '../../constants/data';

const Anonymously = () => {
  return (
    <section className="anonymously__container">
      <p className="anonymously__p">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </p>
      <h1 className="anonymously__h">
        Ever wondered what others think of you?
      </h1>

      <div className="anonymously__steps">
        {stepsData.map((step) => (
          <div key={step.id} className="anonymously__steps-one">
            <img
              src={step.imageSrc}
              alt={`step-${step.id}`}
              className="anonymously__image"
              loading="lazy"
            />
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="anonymously__flowchart">
        {circlesData.map((circle) => (
          <React.Fragment key={circle.id}>
            <img
              src={circle2}
              alt={`circle-${circle.id}`}
              loading="lazy"
              className={`anonymously__circle${circle.id}`}
            />
            <div
              className={`anonymously__anonymonos${circle.id}`}
              style={{ backgroundColor: circle.backgroundColor }}
            >
              {circle.label}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Anonymously;
