import React, { lazy, Suspense, useEffect, } from 'react';
import { paragraph1, paragraph2 } from './constants/data';
import { PreLoader, Loading } from './utils';
import { initializeLocomotiveScroll } from './animation/initializeLocomotiveScroll';


// Use lazy loading for components
const LazyHeader = lazy(() => import('./components/Header/Header.jsx'));
const LazyHero = lazy(() => import('./components/Hero/Hero.jsx'));
const LazyEqBeatsIq = lazy(() => import('./components/EqBeatsIq/EqBeatsIq.jsx'));
const LazySoundfamiliar = lazy(() => import('./components/Soundfamiliar/Soundfamiliar.jsx'));
const LazyMeetAheadApp = lazy(() => import('./components/MeetAheadApp/MeetAheadApp.jsx'));
const LazySelfImprovement = lazy(() => import('./components/SelfImprovement/SelfImprovement.jsx'));
const LazyAnonymously = lazy(() => import('./components/Anonymously/Anonymously.jsx'));
const LazyStartTest = lazy(() => import('./components/StartTest/StartTest.jsx'));
const LazyWorkWithUs = lazy(() => import('./components/WorkWithUs/WorkWithUs.jsx'));
const LazyOpenVacancies = lazy(() => import('./components/OpenVacancies/OpenVacancies.jsx'));
const LazyFooter = lazy(() => import('./components/Footer/Footer.jsx'));



const App = () => {

  useEffect(() => {
    initializeLocomotiveScroll();
  }, []);


  return (
    <>
      <PreLoader />
      <Suspense fallback={< Loading />}>
        <LazyHeader />
        <LazyHero />
        <LazyEqBeatsIq title="EQ beats IQ" paragraphs={paragraph1} />
        <LazySoundfamiliar />
        <LazyMeetAheadApp />
        <LazySelfImprovement />
        <LazyAnonymously />
        <LazyEqBeatsIq title="Be the best you with EQ" paragraphs={paragraph2} />
        <LazyStartTest />
        <LazyWorkWithUs />
        <LazyOpenVacancies />
        <hr style={{ margin: "1rem 0", color: "gray" }} />
        <LazyFooter />
      </Suspense>
    </>
  );
};

export default App;

