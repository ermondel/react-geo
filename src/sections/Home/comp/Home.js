import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';

const Home = () => (
  <InnerSection>
    <div className='side-container'>
      <MainNavigation />
      <HomeSidebar />
    </div>

    <div className='content-container'>
      <HomeContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Home;
