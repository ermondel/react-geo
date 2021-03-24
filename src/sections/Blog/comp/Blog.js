import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BlogSidebar from './BlogSidebar';
import BlogContent from './BlogContent';

const Blog = () => (
  <InnerSection browserTabTitle='Blog'>
    <div className='side-container'>
      <MainNavigation />
      <BlogSidebar />
    </div>

    <div className='content-container'>
      <BlogContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Blog;
