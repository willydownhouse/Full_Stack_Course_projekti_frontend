import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';

import { getOneTrip } from '../actions/trips';
import { getTripsReviews } from '../actions/review';
import { useParams } from 'react-router-dom';
import Trip from './Trip';
import ReviewList from './ReviewList';
import Footer from './Footer';
import Spinner from './Spinner';

const SingleTripPage = () => {
  const dispatch = useDispatch();
  const trip: ITrip[] = useSelector((state: IState) => state.trips);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneTrip(id as string));
    dispatch(getTripsReviews(id as string));
  }, []);

  if (trip.length === 0 || trip.length > 1) return <Spinner />;

  return (
    <div className="min-vh-100">
      <div className="container">
        <div className="mt-5"></div>
        <Trip trip={trip[0]} index={0} />
        <ReviewList
          title="Reviews"
          messageIfEmpty="Trip does not have reviews yet"
          showTripTitle={false}
        />
      </div>
      <Footer />
    </div>
  );
};

export default SingleTripPage;
