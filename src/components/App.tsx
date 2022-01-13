import React from 'react';
import { useEffect } from 'react';
import TripsList from './TripsList';
import { getAllTrips } from '../actions/trips';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTrips());
  }, []);

  return (
    <div>
      <TripsList />
    </div>
  );
};

export default App;
