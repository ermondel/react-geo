import React from 'react';
import { ErrorRemote } from '@subcomponents/UtilImages';

const LoadingError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>The remote server is not responding</p>
      <p>Perhaps it is overloaded with requests</p>
      <p>Please come back later</p>
    </div>
  </div>
);

export default LoadingError;
