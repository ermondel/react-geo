import React from 'react';
import { connect } from 'react-redux';
import { removePost, resetRemoveStatus } from '../actions/posts';
import { ModalWindow, modalClose } from '@modal/ModalWindow';
import { ErrorRemote, SpinnerBig } from '@subcomponents/UtilImages';

const ModalRemovePostConfirm = ({ title, onRemove, onCancel }) => (
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

const ModalRemovePostSpinner = () => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__text modal-remove-post__text--removing'>
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

const ModalRemovePostSuccess = ({ title, onClose }) => (
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

const ModalRemovePostError = ({ onClose }) => (
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

const ModalRemovePostAccessDenied = ({ onClose }) => (
  <div className='modal-remove-post'>
    <p className='modal-remove-post__text modal-remove-post__text--error'>
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

  let __status;
  let __content;

  if (!props.authData || !props.authData.publicKey) {
    __status = 'denied';
  } else {
    __status = props.removing.status;
  }

  switch (__status) {
    case 'confirm':
      __content = (
        <ModalRemovePostConfirm
          title={props.removing.post.title}
          onRemove={() => props.removePost(props.authData.publicKey, props.removing.post)}
          onCancel={closeModal}
        />
      );
      break;

    case 'removing':
      __content = <ModalRemovePostSpinner />;
      break;

    case 'success':
      __content = (
        <ModalRemovePostSuccess title={props.removing.post.title} onClose={closeModal} />
      );
      break;

    case 'failure':
      __content = (
        <ModalRemovePostError title={props.removing.post.title} onClose={closeModal} />
      );
      break;

    case 'denied':
      __content = <ModalRemovePostAccessDenied onClose={closeModal} />;
      break;

    case 'default':
    default:
      __content = null;
  }

  return (
    <ModalWindow
      visible={props.visible && __content}
      onClose={closeModal}
      modifier='remove-post'
    >
      {__content}
    </ModalWindow>
  );
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
