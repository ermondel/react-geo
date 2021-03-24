import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import PostsSidebar from './PostsSidebar';
import PostsContent from './PostsContent';

const Posts = () => (
  <InnerSection browserTabTitle='Posts'>
    <div className='side-container'>
      <MainNavigation />
      <PostsSidebar />
    </div>

    <div className='content-container'>
      <PostsContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Posts;
