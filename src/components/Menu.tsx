import React from 'react';

import { Link } from 'react-router-dom';
import '../css/menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <ul className="links">
        <li>
          <Link to="/trips/mtb" className="link">
            Mtb
          </Link>
        </li>
        <li>
          <Link to="/trips/ski" className="link">
            Ski
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
