import React from 'react';
import '../css/tripShowcase.css';

type TripShowcaseProps = {
  type: string;
};

const TripShowcase = ({ type }: TripShowcaseProps) => {
  console.log(type);
  return (
    <>
      <div className={`trip-showcase ${type === 'Ski' ? 'ski' : 'mtb'}`}></div>
      <div className="bg-shading"></div>
    </>
  );
};

export default TripShowcase;
