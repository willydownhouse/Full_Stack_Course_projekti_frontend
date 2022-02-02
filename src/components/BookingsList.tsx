import React from 'react';
import { useSelector } from 'react-redux';
import { IBooking } from '../interfaces/booking';
import { IState } from '../interfaces/state';
import Booking from './Booking';

const BookingsList = () => {
  const bookings: IBooking[] = useSelector((state: IState) => state.bookings);

  const renderBookings = () => {
    return bookings.map(booking => {
      return <Booking key={booking._id} booking={booking} />;
    });
  };

  return (
    <div id="my-bookings-list">
      <h5 className="text-muted mb-3">My Bookings</h5>
      <ul className="list-group">
        {bookings.length === 0 ? (
          <div className="mb-4">You dont have any bookings</div>
        ) : (
          renderBookings()
        )}
      </ul>
    </div>
  );
};

export default BookingsList;
