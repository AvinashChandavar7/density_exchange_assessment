/* eslint-disable no-unused-vars */
export const initializeLocomotiveScroll = () => {
  import('locomotive-scroll')
    .then(({ default: LocomotiveScroll }) => {
      const scrollOptions = {
        el: document.querySelector('.your-scroll-container'),
        smooth: true,
      };

      const locomotiveScroll = new LocomotiveScroll(scrollOptions);
    })
    .catch(error => {
      console.error('Error loading Locomotive Scroll:', error);
    });
};
