import React from 'react';
import { IBooking } from '../interfaces/booking';
import { cancelBooking } from '../actions/booking';
import { useDispatch } from 'react-redux';

type BookingProps = {
  booking: IBooking;
  index: number;
};

const Booking = ({ booking, index }: BookingProps) => {
  const dispatch = useDispatch();
  return (
    <li className=" list-group-item border-0 w-100">
      <div className="d-flex border-0">
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{booking.trip.name}</h5>
            <h6 className="card-subtitle mb-3 text-muted">
              {booking.trip_date}
            </h6>
            <p className="card-text">
              <strong>Status: </strong>
              {booking.status}{' '}
              {new Date(booking.createdAt)
                .toLocaleDateString('fi-FI')
                .replaceAll('.', '/')}
            </p>
          </div>
        </div>
        <div className="col-4 flex-center">
          <button
            id={`btn-cancel-${index}`}
            className="btn btn-primary"
            onClick={() => dispatch(cancelBooking(booking._id))}
          >
            Cancel
          </button>
        </div>
      </div>
    </li>
  );
};

export default Booking;
