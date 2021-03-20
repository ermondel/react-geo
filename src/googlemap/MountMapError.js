import React from 'react';
import { ErrorRemote } from '@subcomponents/UtilImages';

const MountMapError = () => (
  <div className='mount-map-error'>
    <ErrorRemote />
    <p>the remote server is unavailable</p>
  </div>
);

export default MountMapError;
