import React from 'react';
import Trip from './Trip';
import '../css/tripslist.css';

import { TripListProps } from '../types/tripProps';
import Spinner from './Spinner';

const TripsList = ({ trips }: TripListProps) => {
  const renderTrips = () => {
    return trips.map((trip, i) => {
      return <Trip key={trip._id} trip={trip} index={i} />;
    });
  };

  if (trips.length === 0) return <Spinner />;

  return <div className="trips">{renderTrips()}</div>;
};

export default TripsList;
