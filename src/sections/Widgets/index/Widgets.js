import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../../main/Header';
import SidebarInfo from '../../../special/SidebarInfo/SidebarInfo';
import NavItemLi from '../../../special/NavItem/NavItemLi';
import Accordion from './Accordion';
import Wikipedia from './Wikipedia';
import Dropdown from './Dropdown';
import Translate from './Translate';
import NotFound from './NotFound';

const Widgets = () => (
  <div className='app-main'>
    <Header />

    <main className='main'>
      <div className='sidebar'>
        <div className='sidebar-wrap'>
          <SidebarInfo list='React' />
        </div>
      </div>

      <div className='content'>
        <div className='content-wrap'>
          <h2 className='section-title'>Widgets</h2>

          <ul className='widgets-nav'>
            <NavItemLi to='/widgets/accordion' block='widgets-nav'>
              Accordion
            </NavItemLi>

            <NavItemLi to='/widgets/wikipedia' block='widgets-nav'>
              Wikipedia
            </NavItemLi>

            <NavItemLi to='/widgets/dropdown' block='widgets-nav'>
              Dropdown
            </NavItemLi>

            <NavItemLi to='/widgets/translate' block='widgets-nav'>
              Translate
            </NavItemLi>
          </ul>

          <Switch>
            <Redirect exact from='/widgets' to='/widgets/accordion' />
            <Route path='/widgets/accordion' component={Accordion} />
            <Route path='/widgets/wikipedia' component={Wikipedia} />
            <Route path='/widgets/dropdown' component={Dropdown} />
            <Route path='/widgets/translate' component={Translate} />
            <Route path='/widgets/*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </main>
  </div>
);

export default Widgets;
