import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <img className="trip-logo" src="./img/logo.png" />
        </Link>

        <div className="bg-shading"></div>
      </div>
    </>
  );
};

export default TripShowcase;
