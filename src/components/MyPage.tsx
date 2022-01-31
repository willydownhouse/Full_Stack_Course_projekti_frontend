import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../interfaces/state';
import { getUserBookings } from '../actions/booking';

const MyPage = () => {
  const id = useSelector((state: IState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('get users bookings and reviews');
    dispatch(getUserBookings(id as string));
  }, []);

  return <div>MyPage</div>;
};

export default MyPage;
