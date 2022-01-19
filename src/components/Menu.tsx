import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../actions/menu';
import { IState } from '../interfaces/state';
import '../css/menu.css';

const Menu = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: IState) => state.menuOpen);

  return (
    <div className={menuOpen ? 'menu showMenu' : 'menu'}>
      <ul className="links">
        <li>
          <Link className="link" onClick={() => dispatch(closeMenu())} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => dispatch(closeMenu())}
            to="/mtb"
          >
            Mtb
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => dispatch(closeMenu())}
            to="/ski"
          >
            Ski
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => dispatch(closeMenu())}
            to="/booking"
          >
            Booking
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => dispatch(closeMenu())}
            to="/blogs"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => dispatch(closeMenu())}
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
