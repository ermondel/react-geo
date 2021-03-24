import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import { LanguageContext } from '../contexts/LanguageContext';
import { ColorContext } from '../contexts/ColorContext';
import PostcardSidebar from './PostcardSidebar';
import PostcardContent from './PostcardContent';

const Postcard = () => (
  <InnerSection browserTabTitle='Postcard'>
    <ColorContext>
      <LanguageContext>
        <div className='side-container'>
          <MainNavigation />
          <PostcardSidebar />
        </div>

        <div className='content-container'>
          <PostcardContent />
          <Footer />
        </div>
      </LanguageContext>
    </ColorContext>
  </InnerSection>
);

export default Postcard;
