import React, { lazy, Suspense } from 'react';
import { paragraph1 } from './constants/data';


// Use lazy loading for components
const LazyHeader = lazy(() => import('./components/Header/Header.jsx'));
const LazyHero = lazy(() => import('./components/Hero/Hero.jsx'));
const LazyEqBeatsIq = lazy(() => import('./components/EqBeatsIq/EqBeatsIq.jsx'));



const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader />
        <LazyHero />
        <LazyEqBeatsIq title="EQ beats IQ" paragraphs={paragraph1} />

      </Suspense>
    </>
  );
};

export default App;

