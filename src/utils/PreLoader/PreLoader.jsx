import React, { useEffect } from 'react';
import './PreLoader.css';
import { preLoaderAnim } from '../../animation';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <span className="loader"></span>
      <div>
        <span className="loaders">Loading</span>
      </div>
    </div>
  );
};

export default PreLoader;
