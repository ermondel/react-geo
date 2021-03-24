import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import LocationSidebar from './LocationSidebar';
import LocationContent from './LocationContent';

const Location = () => (
  <Fragment documentTitle='Location'>
    <div className='side-container'>
      <MainNavigation />
      <LocationSidebar />
    </div>

    <div className='content-container'>
      <LocationContent />
      <Footer />
    </div>
  </Fragment>
);

export default Location;
