import React from 'react';
import NavItem from '@subcomponents/NavItem';

const MainNavigation = () => (
  <nav className='main-nav'>
    <ul className='main-nav__list'>
      <NavItem to='/' block='main-nav'>
        Home
      </NavItem>

      <NavItem to='/blog' block='main-nav'>
        Blog
      </NavItem>

      <NavItem to='/postcard' block='main-nav'>
        Postcard
      </NavItem>

      <NavItem to='/podcasts' block='main-nav'>
        Podcasts
      </NavItem>

      <NavItem to='/books' block='main-nav'>
        Books
      </NavItem>

      <NavItem to='/board' block='main-nav'>
        Board
      </NavItem>

      <NavItem to='/position' block='main-nav' visible={!!window.chrome}>
        Position
      </NavItem>

      <NavItem to='/weather' block='main-nav'>
        Weather
      </NavItem>

      <NavItem to='/posts' block='main-nav'>
        Posts
      </NavItem>

      <NavItem to='/widgets' block='main-nav'>
        Widgets
      </NavItem>
    </ul>
  </nav>
);

export default MainNavigation;
