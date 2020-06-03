import React from 'react';
import ViewMode from './ViewMode';
import BookDetails from './BookDetails';
import SidebarInfo from '../../../app/SidebarInfo/components/SidebarInfo';

const BooksSidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-wrap'>
      <ViewMode />
      <BookDetails />
      <SidebarInfo list='React, Redux' />
    </div>
  </div>
);

export default BooksSidebar;