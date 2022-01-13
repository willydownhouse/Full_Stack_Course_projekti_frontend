import React from 'react';
import { useSelector } from 'react-redux';
//import { IAppState } from '../actions/types';
import ITrip from '../interfaces/trip';

interface State {
  trips: ITrip[];
}

const TripsList = () => {
  const trips = useSelector((state: State) => state.trips);

  console.log(trips);

  const renderTrips = () => {
    return trips.map(trip => {
      return (
        <div key={trip.id}>
          <h2>{trip.name}</h2>
          <h3>Start dates:</h3>
          <ul>
            {trip.startDates?.map(date => {
              return <li key={date}>{date}</li>;
            })}
          </ul>
          <img
            style={{
              width: '300px',
            }}
            src={trip.mainImg}
          />
        </div>
      );
    });
  };

  return <div>{renderTrips()}</div>;
};

export default TripsList;
