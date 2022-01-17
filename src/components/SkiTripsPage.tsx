import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from '../actions/trips';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import TripShowcase from './TripShowcase';
import TripsList from './TripsList';

const SkiTripsPage = () => {
  const dispatch = useDispatch();
  const trips: ITrip[] = useSelector((state: IState) => state.trips);

  useEffect(() => {
    dispatch(getAllTrips('ski'));
  }, []);

  console.log(trips);
  return (
    <div>
      <TripShowcase type="Ski" />
      <TripsList trips={trips} />
    </div>
  );
};

export default SkiTripsPage;
