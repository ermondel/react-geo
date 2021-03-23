import React from 'react';
import Fragment from '@subcomponents/Fragment';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PositionSidebar from './PositionSidebar';
import PositionContent from './PositionContent';

const Position = () => (
  <Fragment documentTitle='Position'>
    <div className='side-container'>
      <MainNavigation />
      <PositionSidebar />
    </div>

    <div className='content-container'>
      <PositionContent />
      <Footer />
    </div>
  </Fragment>
);

export default Position;
