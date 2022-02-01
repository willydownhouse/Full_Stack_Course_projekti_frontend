import React from 'react';
import { useSelector } from 'react-redux';
import { IBooking } from '../interfaces/booking';
import { IState } from '../interfaces/state';
import Booking from './Booking';

const BookingsList = () => {
  const bookings: IBooking[] = useSelector((state: IState) => state.bookings);
  return (
    <div>
      <h5 className="text-muted mb-3">My Bookings</h5>
      <ul className="list-group">
        {bookings.length === 0 ? (
          <div>You dont have any bookings</div>
        ) : (
          bookings.map(booking => (
            <Booking key={booking.id} booking={booking} />
          ))
        )}
      </ul>
    </div>
  );
};

export default BookingsList;
