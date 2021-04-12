import React from 'react';
import { SpinnerBig } from '@subcomponents/UtilImages';

const LoadingSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__loading-message'>Request data from a remote server</p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export default LoadingSpinner;
