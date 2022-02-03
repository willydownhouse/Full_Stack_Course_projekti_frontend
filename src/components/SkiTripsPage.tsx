import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from '../actions/trips';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import Footer from './Footer';
import TripShowcase from './TripShowcase';
import TripsList from './TripsList';

const SkiTripsPage = () => {
  const dispatch = useDispatch();
  const trips: ITrip[] = useSelector((state: IState) => state.trips);

  useEffect(() => {
    dispatch(getAllTrips('ski'));
  }, []);

  return (
    <div>
      <TripShowcase src="./img/win1.jpg" />
      <TripsList trips={trips} />
      <Footer />
    </div>
  );
};

export default SkiTripsPage;
