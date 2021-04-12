import React from 'react';
import { SpinnerBig } from '@subcomponents/UtilImages';

const AuthSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__auth-message'>Authorization in progress</p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export default AuthSpinner;
