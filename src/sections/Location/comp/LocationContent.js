import React from 'react';
import GeoLocation from '../subcomp/GeoLocation';
import GeoMap from '../subcomp/GeoMap';

const LocationContent = () => (
  <main className='main'>
    <GeoLocation />
    <GeoMap />
  </main>
);

export default LocationContent;
