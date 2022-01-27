import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../interfaces/state';
import { openMenu, closeMenu } from '../actions/menu';
import '../css/header.css';

const Header: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: IState) => state.menuOpen);

  return (
    <>
      <div className="header">
        <div></div>
        <div
          id="burger-menu"
          onClick={() => {
            menuOpen ? dispatch(closeMenu()) : dispatch(openMenu());
          }}
          className={`burger ${menuOpen ? 'open' : ''}`}
        >
          <div className="beef"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
