import React from 'react';
import { ErrorRemote } from '@subcomponents/UtilImages';

const AuthError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>Access is denied</p>
      <p>Please contact the administrator</p>
    </div>
  </div>
);

export default AuthError;
