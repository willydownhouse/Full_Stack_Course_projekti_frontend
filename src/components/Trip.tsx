import React from 'react';
import { Link } from 'react-router-dom';
import { TripProps } from '../interfaces/trip';

const Trip = ({ trip }: TripProps) => {
  return (
    <div key={trip._id} className="card w-100">
      <div className="card-body">
        <Link to={`/trips/${trip._id}`}>
          <h2 className="card-title">{trip.name}</h2>
        </Link>

        <p className="card-text">{trip.description}</p>

        <img className="card-img" src={trip.mainImg} />
      </div>
    </div>
  );
};

export default Trip;
