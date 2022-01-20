import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import MtbTripsPage from './MtbTripsPage';
import SingleTripPage from './SingleTripPage';
import SkiTripsPage from './SkiTripsPage';

import '../css/app.css';
import Header from './Header';
import Menu from './Menu';
import Login from './Login';
import Booking from './Booking';

const App = () => {
  console.log('APP RENDERS');

  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Login />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mtb" element={<MtbTripsPage />} />
        <Route path="/ski" element={<SkiTripsPage />} />
        <Route path="/trips/:id" element={<SingleTripPage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
