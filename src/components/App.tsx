import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import MtbTripsPage from './MtbTripsPage';
import SingleTripPage from './SingleTripPage';
import SkiTripsPage from './SkiTripsPage';

import '../css/app.css';
import Header from './Header';
import Menu from './Menu';
import Login from './Login';
import BookingPage from './BookingPage';
import MyPage from './MyPage';
import NoAccessPage from './NoAccessPage';
import Notification from './Notification';
import { IState } from '../interfaces/state';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { ReduxRouter } from '@lagunovsky/redux-react-router';
import history from '../history';
import { setCurrentUser } from '../actions/authentication';

type AppProps = {
  store: RootStateOrAny;
};

const App = ({ store }: AppProps) => {
  const isLoggedIn = useSelector((state: IState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  console.log('Environment:');
  console.log(process.env.NODE_ENV);

  // console.log('isLoggedIn');
  // console.log(isLoggedIn);

  useEffect(() => {
    const local = localStorage.getItem('user');

    if (local) {
      const { user: id } = JSON.parse(local as string);

      dispatch(setCurrentUser(id));
    }
  }, []);

  return (
    <ReduxRouter history={history} store={store}>
      <Header />
      <Menu />
      <Login />
      <Notification />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mtb" element={<MtbTripsPage />} />
        <Route path="/ski" element={<SkiTripsPage />} />
        <Route path="/trips/:id" element={<SingleTripPage />} />
        <Route path="/booking">
          {isLoggedIn ? (
            <Route index element={<BookingPage />} />
          ) : (
            <Route
              index
              element={<NoAccessPage message="Please log in to get access" />}
            />
          )}
        </Route>
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
        <Route path="*" element={<NoAccessPage message="Page not found" />} />
      </Routes>
    </ReduxRouter>
  );
};

export default App;
