import React, { lazy, Suspense } from 'react';


// Use lazy loading for components
const LazyHeader = lazy(() => import('./components/Header/Header.jsx'));
const LazyHero = lazy(() => import('./components/Hero/Hero.jsx'));

const App = () => {

  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader />
        <LazyHero />

      </Suspense>
    </>
  );
};

export default App;

