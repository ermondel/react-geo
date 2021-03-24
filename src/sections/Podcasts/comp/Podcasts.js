import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PodcastsSidebar from './PodcastsSidebar';
import PodcastsContent from './PodcastsContent';

const Podcasts = () => (
  <InnerSection browserTabTitle='Podcasts'>
    <div className='side-container'>
      <MainNavigation />
      <PodcastsSidebar />
    </div>

    <div className='content-container'>
      <PodcastsContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Podcasts;
