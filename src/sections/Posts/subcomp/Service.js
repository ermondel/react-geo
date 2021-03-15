import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorRemote, SpinnerBig, SpinnerSmall } from '@subcomponents/UtilImages';

export const ModalRemovePostConfirm = ({ title, onRemove, onCancel }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__text'>Are you sure you want to remove the post?</p>
    <p className='modal-remove-post__postname'>{title}</p>
    <div className='modal-remove-post__control'>
      <button className='modal-remove-post__btn-remove' onClick={onRemove}>
        Remove
      </button>
      <button className='modal-remove-post__btn-cancel' onClick={onCancel}>
        Cancel
      </button>
    </div>
  </div>
);

export const ModalRemovePostSpinner = () => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__text modal-remove-post__text--removing'>
      Removing ...
    </p>
    <div className='modal-remove-post__spinner'>
      <SpinnerSmall />
    </div>
    <p className='modal-remove-post__message'>
      Request to a remote server. This may take some time. Please wait.
    </p>
  </div>
);

export const ModalRemovePostSuccess = ({ title, onClose }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__text modal-remove-post__text--success'>
      Post successfully deleted
    </p>
    <p className='modal-remove-post__postname'>{title}</p>
    <div className='modal-remove-post__control'>
      <button
        className='modal-remove-post__btn-close'
        onClick={onClose}
        title='Close window'
      >
        Close
      </button>
    </div>
  </div>
);

export const ModalRemovePostError = ({ onClose }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__text modal-remove-post__text--error'>
      Error deleting post
    </p>
    <div className='modal-remove-post__error-img'>
      <ErrorRemote />
    </div>
    <p className='modal-remove-post__message'>
      The remote server is not responding. Perhaps it is overloaded with requests. Please
      come back later.
    </p>
    <div className='modal-remove-post__control'>
      <button
        className='modal-remove-post__btn-close'
        onClick={onClose}
        title='Close window'
      >
        Close
      </button>
    </div>
  </div>
);

export const LoadingSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__loading-message'>Request data from a remote server</p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export const AuthSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__auth-message'>Authorization in progress</p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export const SavingSpinner = () => (
  <div className='posts-spinner'>
    <SpinnerBig />
    <div>
      <p className='posts-spinner__loading-message'>Saving data to the remote server</p>
      <p>This may take some time</p>
      <p>Please wait</p>
    </div>
  </div>
);

export const LoadingError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>The remote server is not responding</p>
      <p>Perhaps it is overloaded with requests</p>
      <p>Please come back later</p>
    </div>
  </div>
);

export const AuthError = () => (
  <div className='posts-error'>
    <ErrorRemote />
    <div>
      <p>Access is denied</p>
      <p>Please contact the administrator</p>
    </div>
  </div>
);

export const SavingError = () => (
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

export const AuthSuccess = () => <p>Authorization successful</p>;
