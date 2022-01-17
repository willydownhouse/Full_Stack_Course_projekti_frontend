import React from 'react';
import { Link } from 'react-router-dom';
import { TripProps } from '../types/tripProps';
import '../css/trip.css';

const Trip = ({ trip }: TripProps) => {
  const renderDates = (dates: string[] = []) => {
    return dates.map(date => {
      return (
        <li key={date} className="">
          {date}
        </li>
      );
    });
  };
  return (
    <div key={trip._id}>
      <div className="grid">
        <div className="grid-title">
          <Link to={`/trips/${trip._id}`}>
            <h3 className="card-title">{trip.name}</h3>
          </Link>
        </div>
        <div className="grid-img-cont">
          <img className="grid-img" src={trip.mainImg} />
        </div>
        <div className="grid-description">
          <p className="card-text">{trip.description}</p>
        </div>
        <div className="grid-start">
          <h6 className="dates-title">Next weeks</h6>
          <div className="dates">
            <ul className="dates-list">{renderDates(trip.startDates)}</ul>
          </div>
          <h6 className="price-title">Starting at</h6>
          <div className="price">
            <h5>{`${trip.price}e`}</h5>
          </div>
        </div>
        <div className="booking">
          <button className="button btn-grey">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Trip;
