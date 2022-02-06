import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../interfaces/state';
import { getUserBookings } from '../actions/booking';
import { getUserReviews } from '../actions/review';
import ReviewList from './ReviewList';
import BookingsList from './BookingsList';
import Footer from './Footer';
import TripShowcase from './TripShowcase';

const MyPage = () => {
  const id = useSelector((state: IState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getUserBookings(id as string));
      dispatch(getUserReviews(id as string));
    }
  }, [id]);

  return (
    <div>
      <div className="min-vh-100">
        <TripShowcase src="./img/lyngen2.jpg" />
        <div className="container">
          <h3 className="text-muted mt-5 mb-5">MyPage</h3>
          <BookingsList />
          <ReviewList
            title="My Reviews"
            messageIfEmpty="You have not given any reviews yet"
            showTripTitle
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyPage;
