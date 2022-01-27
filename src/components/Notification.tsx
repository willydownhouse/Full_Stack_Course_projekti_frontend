import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../interfaces/state';

//app.css

const Notification = () => {
  const notification = useSelector((state: IState) => state.notification);
  return (
    <div className={`notification ${notification ? 'show-notification' : ''}`}>
      <div className="alert alert-secondary">{notification}</div>
    </div>
  );
};

export default Notification;
