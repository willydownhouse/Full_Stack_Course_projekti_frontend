import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import MtbTripsPage from './MtbTripsPage';
import SingleTripPage from './SingleTripPage';
import SkiTripsPage from './SkiTripsPage';

import '../css/app.css';
import Header from './Header';
import Menu from './Menu';

const App = () => {
  console.log('APP RENDERS');
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/trips/mtb" element={<MtbTripsPage />} />
        <Route path="/trips/ski" element={<SkiTripsPage />} />
        <Route path="/trips/:id" element={<SingleTripPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
