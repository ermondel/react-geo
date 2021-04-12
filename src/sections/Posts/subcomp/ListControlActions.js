import React from 'react';
import { Link } from 'react-router-dom';

const ListControlActions = () => (
  <div className='list-ctrl__actions'>
    <Link to='/posts/add' className='list-ctrl__dlink-add'>
      Add new post
    </Link>
  </div>
);

export default ListControlActions;
