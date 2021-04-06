import React from 'react';
import { connect } from 'react-redux';
import { removePost } from '../actions/middleware';
import { resetRemoveStatus } from '../actions/common';
import { ModalWindow, modalClose } from '@modal/ModalWindow';
import { ErrorRemote, SpinnerBig } from '@subcomponents/UtilImages';
import {
  DENIED,
  CONFIRM,
  REMOVING,
  SUCCESS,
  FAILURE,
  DEFAULT,
} from '../types/postsStatuses';

const RemovePostConfirm = ({ postName, onRemove, onClose }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__title'>Are you sure you want to remove the post?</p>
    <p className='modal-remove-post__postname'>{postName}</p>
    <div className='modal-remove-post__control'>
      <button className='modal-remove-post__btn-remove' onClick={onRemove}>
        Remove
      </button>
      <button className='modal-remove-post__btn-cancel' onClick={onClose}>
        Cancel
      </button>
    </div>
  </div>
);

const RemovePostSpinner = () => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__title modal-remove-post__title--removing'>
      Removing ...
    </p>
    <div className='modal-remove-post__spinner'>
      <SpinnerBig />
    </div>
    <p className='modal-remove-post__message'>
      Request to a remote server.
      <br />
      This may take some time. Please wait.
    </p>
  </div>
);

const RemovePostSuccess = ({ postName, onClose }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__title modal-remove-post__title--success'>
      Post successfully deleted
    </p>
    <p className='modal-remove-post__postname'>{postName}</p>
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

const RemovePostError = ({ onClose }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__title modal-remove-post__title--error'>
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

const RemovePostAccessDenied = ({ onClose }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__title modal-remove-post__title--error'>
      Access denied
    </p>
    <div className='modal-remove-post__error-img'>
      <ErrorRemote />
    </div>
    <p className='modal-remove-post__message'>Please contact the administrator</p>
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

// default

const ModalRemovePost = (props) => {
  const closeModal = () => {
    props.modalClose();
    props.resetRemoveStatus();
  };

  const removePost = () => {
    props.removePost(props.authData.publicKey, props.removing.post);
  };

  let $status;

  if (!props.authData || !props.authData.publicKey) {
    $status = DENIED;
  } else {
    $status = props.removing.status;
  }

  switch ($status) {
    case CONFIRM:
      return (
        <ModalWindow visible={props.visible} onClose={closeModal} modifier='remove-post'>
          <RemovePostConfirm
            postName={props.removing.post.title}
            onRemove={removePost}
            onClose={closeModal}
          />
        </ModalWindow>
      );

    case REMOVING:
      return (
        <ModalWindow visible={props.visible} onClose={closeModal} modifier='remove-post'>
          <RemovePostSpinner />
        </ModalWindow>
      );

    case SUCCESS:
      return (
        <ModalWindow visible={props.visible} onClose={closeModal} modifier='remove-post'>
          <RemovePostSuccess postName={props.removing.post.title} onClose={closeModal} />
        </ModalWindow>
      );

    case FAILURE:
      return (
        <ModalWindow visible={props.visible} onClose={closeModal} modifier='remove-post'>
          <RemovePostError title={props.removing.post.title} onClose={closeModal} />
        </ModalWindow>
      );

    case DENIED:
      return (
        <ModalWindow visible={props.visible} onClose={closeModal} modifier='remove-post'>
          <RemovePostAccessDenied onClose={closeModal} />
        </ModalWindow>
      );

    case DEFAULT:
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  visible: state.modalWindow,
  removing: state.postsRemoving,
  authData: state.postsAuth,
});

export default connect(mapStateToProps, {
  modalClose,
  removePost,
  resetRemoveStatus,
})(ModalRemovePost);
