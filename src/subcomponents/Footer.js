import React from 'react';

const Footer = () => {
  let years;

  const startYear = 2020;
  const currentYear = new Date().getFullYear();

  years = startYear < currentYear ? `${startYear} - ${currentYear}` : startYear;

  const attributes = {
    target: '_blank',
    rel: 'noreferrer',
    href: 'https://github.com/ermondel',
    title: 'All rights reserved | created by Serhii (ermondel)',
    className: 'footer__link',
  };

  return (
    <footer className='footer'>
      <span className='footer__sign'>&copy;</span>{' '}
      <span className='footer__year'>{years}</span>{' '}
      <span className='footer__author'>
        <a {...attributes}>Serhii</a>
      </span>
    </footer>
  );
};

export default React.memo(Footer);
