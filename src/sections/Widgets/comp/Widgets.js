import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import WidgetsSidebar from './WidgetsSidebar';
import WidgetsContent from './WidgetsContent';

const Widgets = () => (
  <InnerSection browserTabTitle='Widgets'>
    <div className='side-container'>
      <MainNavigation />
      <WidgetsSidebar />
    </div>

    <div className='content-container'>
      <WidgetsContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Widgets;
