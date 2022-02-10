import React from 'react';
import { IBooking } from '../interfaces/booking';
import { cancelBooking } from '../actions/booking';
import { pay } from '../actions/checkout';
import { useDispatch } from 'react-redux';
import StripeCheckout, { Token } from 'react-stripe-checkout';

type BookingProps = {
  booking: IBooking;
  index: number;
};

const Booking = ({ booking, index }: BookingProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      window.confirm(
        `Are you sure you want to cancel your booking from ${booking.trip.name}?`
      )
    ) {
      dispatch(cancelBooking(booking._id));
    }
  };

  const handleToken = (token: Token) => {
    dispatch(
      pay(
        {
          name: booking.trip.name,
          price: booking.trip.price,
        },
        token
      )
    );
  };
  return (
    <li className=" list-group-item border-0 w-100">
      <div className="border-0">
        <div className="">
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
        <div className="">
          <button
            id={`btn-cancel-${index}`}
            className="btn btn-outline-primary btn-sm mr-5"
            onClick={() => handleClick()}
          >
            Cancel
          </button>

          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY as string}
            token={handleToken}
            billingAddress
            shippingAddress
            amount={399 * 100}
          />
        </div>
      </div>
    </li>
  );
};

export default Booking;
