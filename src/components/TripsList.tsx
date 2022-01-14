import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../interfaces/state';
import { useDispatch } from 'react-redux';
import { getAllTrips } from '../actions/trips';
import Trip from './Trip';
import '../css/tripslist.css';

const TripsList = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state: IState) => state.trips);

  console.log(trips);

  useEffect(() => {
    dispatch(getAllTrips());
  }, []);

  const renderTrips = () => {
    return trips.map(trip => {
      return <Trip key={trip._id} trip={trip} />;
    });
  };

  return <div className="trips">{renderTrips()}</div>;
};

export default TripsList;
