import React, { useState } from 'react';
import '../css/tripShowcase.css';

type TripShowcaseProps = {
  type: string;
};

const TripShowcase = ({ type }: TripShowcaseProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <div className={`trip-showcase ${loaded ? 'visible-anim' : ''}`}>
        <img
          onLoad={() => setLoaded(true)}
          className="trip-showcase-img"
          src={type === 'Ski' ? './img/win1.jpg' : './img/sum1.jpg'}
        />
      </div>
      <div className="bg-shading"></div>
    </>
  );
};

export default TripShowcase;
