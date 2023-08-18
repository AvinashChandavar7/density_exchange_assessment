import React from 'react';
import './MeetAheadApp.css';
import ghost from '../../assets/ghost.svg';
import circle from '../../assets/circle.svg';

const MeetAheadApp = () => {
  return (
    <section className="meet__container">
      {/* left */}
      <div className="meet__content">
        <p>Built out of frustration</p>
        <h1>Meet the ahead app</h1>

        <div className="meet__img">
          <img src={ghost} alt="ghost" loading="lazy" />
          <img
            src={circle}
            alt="circle"
            className="meet__circle"
            loading="lazy"
          />
        </div>
      </div>

      {/* right */}

      <div className="meet__info">
        <p>
          A personalized pocket coach that provides bite- sized, science-driven
          tools to boost emotional intelligence.
        </p>
        <p>
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </div>
    </section>
  );
};

export default MeetAheadApp;
