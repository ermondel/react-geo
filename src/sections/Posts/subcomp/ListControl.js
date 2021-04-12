import React from 'react';
import ListControlFilter from './ListControlFilter';
import ListControlActions from './ListControlActions';
import ListControlMessage from './ListControlMessage';

const ListControl = () => (
  <div className='list-ctrl'>
    <ListControlFilter />
    <ListControlActions />
    <ListControlMessage />
  </div>
);

export default ListControl;
