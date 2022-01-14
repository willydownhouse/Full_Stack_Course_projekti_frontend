import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import MtbTripsPage from './MtbTripsPage';
import SingleTripPage from './SingleTripPage';
import SkiTripsPage from './SkiTripsPage';

const App = () => {
  return (
    <BrowserRouter>
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
