import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../interfaces/state';

const MyPage = () => {
  const id = useSelector((state: IState) => state.auth.user);
  return <div>MyPage user:{id}</div>;
};

export default MyPage;
