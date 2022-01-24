import React from 'react';

import { Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import MtbTripsPage from './MtbTripsPage';
import SingleTripPage from './SingleTripPage';
import SkiTripsPage from './SkiTripsPage';

import '../css/app.css';
import Header from './Header';
import Menu from './Menu';
import Login from './Login';
import Booking from './Booking';
import MyPage from './MyPage';
import NoAccessPage from './NoAccessPage';
import { IState } from '../interfaces/state';
import { RootStateOrAny, useSelector } from 'react-redux';

import { ReduxRouter } from '@lagunovsky/redux-react-router';
import history from '../history';

type AppProps = {
  store: RootStateOrAny;
};

const App = ({ store }: AppProps) => {
  const isLoggedIn = useSelector((state: IState) => state.auth.isLoggedIn);
  console.log('APP RENDERS');

  return (
    <ReduxRouter history={history} store={store}>
      <Header />
      <Menu />
      <Login />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mtb" element={<MtbTripsPage />} />
        <Route path="/ski" element={<SkiTripsPage />} />
        <Route path="/trips/:id" element={<SingleTripPage />} />
        <Route
          path="/booking"
          element={
            isLoggedIn ? (
              <Booking />
            ) : (
              <NoAccessPage message="Please log in to get access" />
            )
          }
        />
        <Route
          path="/me"
          element={
            isLoggedIn ? (
              <MyPage />
            ) : (
              <NoAccessPage message="Please log in to get access" />
            )
          }
        />
      </Routes>
    </ReduxRouter>
  );
};

export default App;
