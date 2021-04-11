import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pathA_B } from '@lib/str';

const NavItem = ({ children, to, block, visible = true }) => {
  const currentPath = useLocation().pathname;

  if (!visible) {
    return null;
  }

  if (pathA_B(to, currentPath)) {
    return (
      <li className={block + '__item'}>
        <span className={block + '__link--active'}>{children}</span>
      </li>
    );
  }

  return (
    <li className={block + '__item'}>
      <Link to={to} className={block + '__link'}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
