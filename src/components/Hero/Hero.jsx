import React, { useEffect, useRef } from 'react';
import './Hero.css';
import appstore from '../../assets/appstore-logo.svg';
import hero from '../../assets/hero.png';
import { gsap } from 'gsap';

const Hero = () => {
  const heroInfoRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    const waveTl = gsap.timeline();

    waveTl
      .from(heroInfoRef.current.children, {
        duration: 0.3,
        x: 400,
        ease: 'power3.inOut',
        stagger: {
          from: 'edges',
          axis: 'x',
          ease: 'power3.inOut',
          amount: 1,
        },
      })
      .to(heroInfoRef.current.children, {
        duration: 0.3,
        opacity: 0,
        x: -40,
        stagger: 0.2,
      })
      .from(heroImgRef.current.children, {
        duration: 0.5,
        x: -40,
        ease: 'power3.inOut',
        stagger: {
          from: 'edges',
          axis: 'x',
          ease: 'power3.inOut',
          amount: 1,
        },
      })
      .to(heroImgRef.current.children, {
        duration: 0.3,
        opacity: 0,
        x: 40, // Move to the left
        stagger: 0.2,
        onComplete: () => {
          gsap.to([heroInfoRef.current.children, heroImgRef.current.children], {
            duration: 0.3,
            opacity: 1,
            x: 0,
            stagger: 0.2,
          });
        },
      });
  }, []);

  return (
    <section className="hero__container" id="emotions">
      {/* left */}
      <div className="hero__info" ref={heroInfoRef}>
        <p style={{ opacity: 0 }}>Ahead app</p>
        <h1 style={{ opacity: 0 }}>Master your life</h1>
        <h1 style={{ opacity: 0 }}>by mastering</h1>
        <h1 style={{ opacity: 0 }}>emotions</h1>

        <div className="hero__icons" style={{ opacity: 0 }}>
          <img src={appstore} alt="appstore" loading="lazy" />

          <span className="hero__review">
            ⭐ ⭐ ⭐ ⭐ ⭐
            <br />
            <p>100+ AppStore reviews</p>
          </span>
        </div>
      </div>

      {/* right */}

      <div className="hero__img" ref={heroImgRef}>
        <img src={hero} alt="logo" loading="lazy" style={{ opacity: 0 }} />
      </div>
    </section>
  );
};

export default Hero;
