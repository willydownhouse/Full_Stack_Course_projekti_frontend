import React, { SetStateAction, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from '../actions/trips';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import { BookingFormValues } from '../interfaces/booking';
import * as yup from 'yup';
import FormButton from './FormButton';
import { book } from '../actions/booking';

const initialValues: BookingFormValues = {
  trip: '',
  date: '',
};

const BookingSchema = () =>
  yup.object().shape({
    trip: yup.string().required('Required'),
    date: yup.string().required('Required'),
  });

const BookingForm = () => {
  const dispatch = useDispatch();
  const trips: ITrip[] = useSelector((state: IState) => state.trips);

  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getAllTrips());
  }, []);

  const handleTripChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValues: any
  ) => {
    setValues({
      trip: e.target.value,
      date: '',
    });

    const trip = trips.find(trip => trip._id === e.target.value)
      ?.startDates as SetStateAction<string[]>;

    setDates(trip ? trip : []);
  };

  return (
    <div className="mb-5">
      <div className="container">
        <Formik
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            dispatch(book(values));
            setSubmitting(false);
            resetForm();
          }}
          initialValues={initialValues}
          validationSchema={BookingSchema}
        >
          {({
            touched,
            errors,
            values,
            setValues,
            handleChange,
            isSubmitting,
          }) => (
            <Form>
              <div className="mb-1">
                <label>Trip</label>
              </div>

              <div className="mb-2">
                <select
                  id="trip-dropdown"
                  name="trip"
                  value={values.trip}
                  onChange={e => handleTripChange(e, setValues)}
                  className={`form-control ${
                    touched.trip && errors.trip ? 'is-invalid' : ''
                  }`}
                >
                  <option value=""></option>
                  {trips.map((trip, i) => (
                    <option id={`trip-${i}`} key={trip._id} value={trip._id}>
                      {trip.name}
                    </option>
                  ))}
                </select>
                {touched.trip && errors.trip && (
                  <div className="text-danger">{errors.trip}</div>
                )}
              </div>

              <div className="mb-1">
                <label>Date</label>
              </div>

              <div className="mb-4">
                <select
                  id="date-dropdown"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  className={`form-control ${
                    touched.date && errors.date ? 'is-invalid' : ''
                  }`}
                >
                  <option value=""></option>
                  {dates.map((date, i) => (
                    <option id={`date-${i}`} key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
                {errors.date && touched.date && (
                  <div className="text-danger">{errors.date}</div>
                )}
              </div>

              <FormButton
                id="btn-booking"
                disabled={isSubmitting}
                btnText="Submit"
                style="button btn-extra-small"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
