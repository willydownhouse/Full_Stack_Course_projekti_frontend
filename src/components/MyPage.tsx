import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../interfaces/state';
import { getUserBookings } from '../actions/booking';
import { getUserReviews } from '../actions/review';
import ReviewList from './ReviewList';
import BookingsList from './BookingsList';

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
    <div className="container min-vh-100">
      <h2 className="text-muted mt-5 mb-5">MyPage</h2>
      <BookingsList />
      <ReviewList />
    </div>
  );
};

export default MyPage;
