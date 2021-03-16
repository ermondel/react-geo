import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { includesPath } from '@lib/path';

const NavItem = ({ children, to, block, visible = true }) => {
  const pathname = useLocation().pathname;

  if (!visible) {
    return null;
  }

  const toHome = to === '/' && pathname !== '/';

  if (!toHome && includesPath(to, pathname)) {
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
