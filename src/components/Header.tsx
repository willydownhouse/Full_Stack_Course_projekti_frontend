import React from 'react';
import Menu from './Menu';
import '../css/header.css';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="header">
        <div className="logo">AB</div>
        <div onClick={() => console.log('clikked')} className="burger">
          <div className="beef"></div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Header;
