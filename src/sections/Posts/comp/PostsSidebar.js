import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import SidebarSortSwitch from '../subcomp/SidebarSortSwitch';

const PostsSidebar = () => (
  <div className='sidebar'>
    <SidebarSortSwitch />
    <TechBlock list='React, Redux, Axios, Formik, Redux Thunk, React Portals, Redux Blog Post API' />
  </div>
);

export default PostsSidebar;
