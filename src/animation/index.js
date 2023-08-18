/* eslint-disable no-unused-vars */
import gsap from "gsap";

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "scroll", height: "90vh" },
    })

    .from(".loader span", {
      duration: 1,
      delay: 0.5,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".loader span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })

    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "scroll", height: "unset" },
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding,
      },
      "-=2"
    )
    .from(".landing__main .text", {
      duration: 2,
      scale: 0,
      y: 10,
      opacity: 0,
      stagger: {
        amount: 2,
      },
      ease: "power3.easeInOut",
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};
export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

//Header.jsx
export const animateLogoAndMenu = () => {
  const tl = gsap.timeline();

  // tl.from('.nav__logo', {
  //   duration: 2,
  //   opacity: 0,
  //   y: -20,
  //   ease: 'power3.easeIn',
  // }).to('.nav__menu li', {
  //   duration: 0.5,
  //   opacity: 1,
  //   y: 0,
  //   stagger: 0.2,
  //   ease: 'power3.easeIn',
  // });
};

export const animateHamburgerMenu = (toggleMenu) => {
  gsap.to('.nav__menu-overlay', {
    duration: 0.3,
    opacity: toggleMenu ? 0 : 1,
    display: toggleMenu ? 'none' : 'block',
    ease: 'power3.easeOut',
  });
};
