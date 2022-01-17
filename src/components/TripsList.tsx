import React from 'react';
import Trip from './Trip';
import '../css/tripslist.css';

import { TripListProps } from '../types/tripProps';

const TripsList = ({ trips }: TripListProps) => {
  const renderTrips = () => {
    return trips.map(trip => {
      return <Trip key={trip._id} trip={trip} />;
    });
  };

  return <div className="trips">{renderTrips()}</div>;
};

export default TripsList;
