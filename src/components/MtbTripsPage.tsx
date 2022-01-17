import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from '../actions/trips';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import TripShowcase from './TripShowcase';
import TripsList from './TripsList';

const MtbTripsPage = () => {
  const dispatch = useDispatch();
  const trips: ITrip[] = useSelector((state: IState) => state.trips);

  console.log(trips);

  useEffect(() => {
    dispatch(getAllTrips('mtb'));
  }, []);

  return (
    <div>
      <TripShowcase type="Mtb" />
      <TripsList trips={trips} />
    </div>
  );
};

export default MtbTripsPage;
