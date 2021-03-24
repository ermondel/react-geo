import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import LocationSidebar from './LocationSidebar';
import LocationContent from './LocationContent';

const Location = () => (
  <InnerSection browserTabTitle='Location'>
    <div className='side-container'>
      <MainNavigation />
      <LocationSidebar />
    </div>

    <div className='content-container'>
      <LocationContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Location;
