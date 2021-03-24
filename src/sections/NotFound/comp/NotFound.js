import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import NotFoundSidebar from './NotFoundSidebar';
import NotFoundContent from './NotFoundContent';

const NotFound = () => (
  <InnerSection browserTabTitle='404'>
    <div className='side-container'>
      <MainNavigation />
      <NotFoundSidebar />
    </div>

    <div className='content-container'>
      <NotFoundContent />
      <Footer />
    </div>
  </InnerSection>
);

export default NotFound;
