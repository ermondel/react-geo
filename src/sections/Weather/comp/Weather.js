import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import WeatherSidebar from './WeatherSidebar';
import WeatherContent from './WeatherContent';

const Weather = () => (
  <InnerSection browserTabTitle='Weather'>
    <div className='side-container'>
      <MainNavigation />
      <WeatherSidebar />
    </div>

    <div className='content-container'>
      <WeatherContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Weather;
