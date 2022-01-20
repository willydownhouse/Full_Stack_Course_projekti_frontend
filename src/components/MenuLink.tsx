import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

type MenuLinkProps = {
  title: string;
  to: string;
  onClick: () => void;
};

const MenuLink = ({ title, onClick, to }: MenuLinkProps) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Link className="link" onClick={() => dispatch(onClick())} to={to}>
        {title}
      </Link>
    </li>
  );
};

export default MenuLink;
