import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import { IReview } from '../interfaces/review';
import { getOneTrip } from '../actions/trips';
import { getTripsReviews } from '../actions/review';
import { useParams } from 'react-router-dom';
import Trip from './Trip';
import ReviewList from './ReviewList';
import Footer from './Footer';

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
    <div className="min-vh-100">
      <div className="container">
        <div className="mt-5"></div>
        <Trip trip={trip[0]} />
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
