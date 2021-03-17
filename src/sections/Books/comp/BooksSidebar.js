import React from 'react';
import ViewMode from '../subcomp/ViewMode';
import BookDetails from '../subcomp/BookDetails';
import TechBlock from '@sidebar/TechBlock';

const BooksSidebar = () => (
  <div className='sidebar'>
    <ViewMode />
    <BookDetails />
    <TechBlock list='React, Redux, Grid' />
  </div>
);

export default BooksSidebar;
