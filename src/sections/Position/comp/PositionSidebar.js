import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import MountMap from '@googlemap/MountMap';
import CoordinateBlock from '../subcomp/CoordinateBlock';

const PositionSidebar = () => (
  <div className='sidebar'>
    <CoordinateBlock />
    <MountMap />
    <TechBlock list='React, Redux, React Hooks, Geolocation API' />
  </div>
);

export default PositionSidebar;
