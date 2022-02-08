import React from 'react';
import { IBooking } from '../interfaces/booking';

type BookingProps = {
  booking: IBooking;
};

const Booking = ({ booking }: BookingProps) => {
  return (
    <li className="list-group-item border-0 w-100">
      <div className="card border-0">
        <div className="card-body">
          <h5 className="card-title">{booking.trip.name}</h5>
          <h6 className="card-subtitle mb-3 text-muted">{booking.trip_date}</h6>
          <p className="card-text">
            <strong>Status: </strong>
            {booking.status}{' '}
            {new Date(booking.createdAt)
              .toLocaleDateString('fi-FI')
              .replaceAll('.', '/')}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Booking;
