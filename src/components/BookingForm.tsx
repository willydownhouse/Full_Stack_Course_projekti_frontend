import React, { FormEvent, SetStateAction, useEffect, useState } from 'react';
import { Formik, Form, Field, yupToFormErrors } from 'formik';
import MyFormField from './MyFormField';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from '../actions/trips';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import * as yup from 'yup';

// const initialValues = {
//   trip: '',
//   //date: '',
// };

// const BookingSchema = () =>
//   yup.object().shape({
//     trip: yup.string().notRequired(),
//     //date: yup.string().required('Required'),
//   });

const BookingForm = () => {
  const [selectedTrip, setSelectedTrip] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [tripDates, setTripDates] = useState([]);
  const dispatch = useDispatch();
  const trips: ITrip[] = useSelector((state: IState) => state.trips);

  useEffect(() => {
    dispatch(getAllTrips());
  }, []);

  console.log(trips);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setSelectedTrip(e.target.value);
    const dates = trips.find(trip => trip._id === e.target.value)?.startDates;

    console.log(dates);
    setTripDates(dates as SetStateAction<never[]>);
  };

  return (
    <div className="min-vh-100">
      <div className="container">
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(selectedTrip);
            console.log(selectedDate);
          }}
        >
          <div className="mb-1">
            <label>Trip</label>
          </div>

          <div className="mb-3">
            <select value={selectedTrip} onChange={e => handleChange(e)}>
              <option value="">Trip</option>
              {trips.map(trip => (
                <option key={trip._id} value={trip._id}>
                  {trip.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <select
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
            >
              <option value="">Date</option>
              {tripDates.map(date => {
                return (
                  <option key={date} value={date}>
                    {date}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="button btn-small">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
