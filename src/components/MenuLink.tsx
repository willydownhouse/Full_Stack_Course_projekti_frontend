import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

type MenuLinkProps = {
  id?: string;
  title: string;
  to: string;
  onClick: () => void;
};

const MenuLink = ({ title, onClick, to, id }: MenuLinkProps) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Link
        id={id}
        className="link"
        onClick={() => dispatch(onClick())}
        to={to}
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuLink;
