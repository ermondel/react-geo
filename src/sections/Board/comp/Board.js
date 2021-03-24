import React from 'react';
import InnerSection from '@subcomponents/InnerSection';
import MainNavigation from '@subcomponents/MainNavigation';
import Footer from '@subcomponents/Footer';
import BoardSidebar from './BoardSidebar';
import BoardContent from './BoardContent';

const Board = () => (
  <InnerSection browserTabTitle='Board'>
    <div className='side-container'>
      <MainNavigation />
      <BoardSidebar />
    </div>

    <div className='content-container'>
      <BoardContent />
      <Footer />
    </div>
  </InnerSection>
);

export default Board;
