import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import GeoMapMapControl from '../subcomp/GeoMapMapControl';
import MountMap from '@googlemap/MountMap';
import CoordinateBlock from '../subcomp/CoordinateBlock';

const LocationSidebar = () => (
  <div className='sidebar'>
    <CoordinateBlock />
    <GeoMapMapControl />
    <MountMap />
    <TechBlock list='React, Redux, React Hooks, Geolocation API' />
  </div>
);

export default LocationSidebar;
