import React, { SetStateAction, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrips } from '../actions/trips';
import { IState } from '../interfaces/state';
import { ITrip } from '../interfaces/trip';
import * as yup from 'yup';
import FormButton from './FormButton';

interface BookingFormValues {
  trip: string;
  date: string;
}

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
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);
            setSubmitting(false);
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
                  name="trip"
                  value={values.trip}
                  onChange={e => handleTripChange(e, setValues)}
                  className={`form-control ${
                    touched.trip && errors.trip ? 'is-invalid' : ''
                  }`}
                >
                  <option value=""></option>
                  {trips.map(trip => (
                    <option key={trip._id} value={trip._id}>
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
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  className={`form-control ${
                    touched.date && errors.date ? 'is-invalid' : ''
                  }`}
                >
                  <option value=""></option>
                  {dates.map(date => (
                    <option key={date} value={date}>
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
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
