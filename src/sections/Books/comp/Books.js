import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BooksSidebar from './BooksSidebar';
import BooksContent from './BooksContent';

const Books = () => (
  <InnerSection browserTabTitle='Books'>
    <div className='side-container'>
      <MainNavigation />
      <BooksSidebar />
    </div>

    <div className='content-container'>
      <BooksContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Books;
