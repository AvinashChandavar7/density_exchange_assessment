import React from 'react';
import Buttons from '../Buttons/Buttons';
import './StartTest.css';

const StartTest = () => {
  return (
    <section className="startTest__container">
      <p>We take privacy seriously</p>
      <h1>Before you get started</h1>

      <p>"We won't share your answers with anyone (and won't ever tell</p>
      <p>you which friends said what about you)"</p>

      <p>with love, Team ahod</p>
      <div>
        <Buttons title="Start a Test" className="startTest__btn" />
      </div>
      <p className="startTest__small">Take only 5 minutes</p>
    </section>
  );
};

export default StartTest;
