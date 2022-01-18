import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import { IReview } from '../interfaces/review';
import { getOneTrip } from '../actions/trips';
import { getTripsReviews } from '../actions/review';
import { useParams } from 'react-router-dom';
import Trip from './Trip';

const SingleTripPage = () => {
  const dispatch = useDispatch();
  const trip: ITrip[] = useSelector((state: IState) => state.trips);
  const reviews: IReview[] = useSelector((state: IState) => state.reviews);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneTrip(id as string));
    dispatch(getTripsReviews(id as string));
  }, []);

  console.log('trip');
  console.log(trip);
  console.log('reviews');
  console.log(reviews);
  return (
    <div className="trips">
      <Trip trip={trip[0]} />
    </div>
  );
};

export default SingleTripPage;
