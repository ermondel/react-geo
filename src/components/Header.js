import React from 'react';
import { Link } from 'react-router-dom';

const getLink = (value, to, current) => {
  let className;

  if (to === current) {
    className = 'main-nav__item main-nav__item_active';
  } else {
    className = 'main-nav__item';
  }

  return (
    <Link to={to} className={className}>
      {value}
    </Link>
  );
};

const Header = (props) => {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li>{getLink('Home', '/', props.path)}</li>
          <li>{getLink('Position', '/position', props.path)}</li>
          <li>{getLink('Blog', '/blog', props.path)}</li>
          <li>{getLink('Term', '/term', props.path)}</li>
          <li>{getLink('Podcasts', '/podcasts', props.path)}</li>
          <li>{getLink('Books', '/books', props.path)}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;