import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../actions/menu';
import { openLoginModal } from '../actions/logInModal';
import { logout } from '../actions/authentication';
import { IState } from '../interfaces/state';
import '../css/menu.css';
import MenuLink from './MenuLink';

const Menu = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: IState) => state.menuOpen);
  const isLoggedIn = useSelector((state: IState) => state.auth.isLoggedIn);

  return (
    <div className={`menu ${menuOpen ? 'showMenu' : ''}`}>
      <ul className="links">
        <MenuLink title="Home" to="/" onClick={closeMenu} />
        <MenuLink title="Mtb" to="/mtb" onClick={closeMenu} />
        <MenuLink title="Ski" to="/ski" onClick={closeMenu} />
        <MenuLink title="Booking" to="/booking" onClick={closeMenu} />
        <MenuLink title="Blog" to="/blog" onClick={closeMenu} />

        <li>
          <p
            className="link"
            onClick={() => {
              dispatch(closeMenu());
              isLoggedIn ? dispatch(logout()) : dispatch(openLoginModal());
            }}
          >
            {isLoggedIn ? 'Log out' : 'Log in'}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
