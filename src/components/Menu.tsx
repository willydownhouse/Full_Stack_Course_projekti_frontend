import React from 'react';
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
        {isLoggedIn ? (
          <MenuLink title="Booking" to="/booking" onClick={closeMenu} />
        ) : null}

        {/*  <MenuLink title="Blog" to="/blog" onClick={closeMenu} /> */}
        {isLoggedIn ? (
          <MenuLink title="My page" to="/me" onClick={closeMenu} />
        ) : null}

        <li>
          <p
            id="menu-login"
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
