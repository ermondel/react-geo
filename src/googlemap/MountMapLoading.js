import React from 'react';
import { SpinnerSmall } from '@subcomponents/UtilImages';

const MountMapLoading = () => (
  <div className='mount-map-spinner'>
    <SpinnerSmall />
    <p>loading maps</p>
  </div>
);

export default MountMapLoading;
