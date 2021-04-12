import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorRemote } from '@subcomponents/UtilImages';

const SavingError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>Error saving</p>
      <p>The remote server is not responding</p>
      <p>Please come back later</p>
      <p>
        <Link to={'/posts'} className='pst-list__link-back'>
          Go back to the list
        </Link>
      </p>
    </div>
  </div>
);

export default SavingError;
