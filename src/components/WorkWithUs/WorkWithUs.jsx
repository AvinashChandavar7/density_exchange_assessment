import React from 'react';
import './WorkWithUs.css';
import ahead from '../../assets/ahead-logo.svg';
import Cards from '../Cards/Cards';
import { workWithUsCardData } from '../../constants/data';
import ghost1 from '../../assets/ghost1.svg';

const WorkWithUs = () => {
  return (
    <section className="workWith__container" id="work-us">
      {/* left */}
      <div className="workWith__left">
        <h1 className="workWith__left-title">Work with us</h1>
        <div className="workWith__left-card">
          <div className="workWith__left-card1">
            <img src={ghost1} alt="ghost" loading="lazy" />
            <h1>About</h1>
            <p>
              At ahead our goal is to make self- improvement fun and lasting. We
              know there's a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
          <div className="workWith__left-card2">
            <h1>Product</h1>
            <p>
              Sure, you could spend ages reading books or sitting in seminars on
              how to become a better spouse, parent, or manager - like we did...
            </p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="workWith__right">
        <img src={ahead} alt="ahead" loading="lazy" />

        <div className="workWith__right-hslider">
          {workWithUsCardData.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              bodyText={card.bodyText}
              className={card.className}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
