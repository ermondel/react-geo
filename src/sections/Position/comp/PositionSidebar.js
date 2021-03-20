import React from 'react';
import TechBlock from '@sidebar/TechBlock';
import InfoBlock from '@sidebar/InfoBlock';
import MountMap from '@googlemap/MountMap';

const PositionSidebar = ({ geo }) => (
  <div className='sidebar'>
    {geo && (
      <InfoBlock
        title='Your coordinates'
        data={{
          latitude: geo.latitude.toFixed(6),
          longitude: geo.longitude.toFixed(6),
          accuracy: geo.accuracy,
        }}
      />
    )}
    <MountMap />
    <TechBlock list='React, React Hooks, Geolocation API' />
  </div>
);

export default PositionSidebar;
