import React from 'react';
import { connect } from 'react-redux';
import { removePost, resetRemoveStatus } from '../actions/posts';
import { ModalWindow, modalClose } from '@modal/ModalWindow';
import {
  ModalRemovePostConfirm,
  ModalRemovePostSpinner,
  ModalRemovePostSuccess,
  ModalRemovePostError,
  AuthError,
} from './Service';

const ModalRemovePost = (props) => {
  const onRemove = () => {
    props.removePost(props.authData.publicKey, props.removing.post);
  };

  const onClose = () => {
    props.modalClose();
    props.resetRemoveStatus();
  };

  if (!props.authData.publicKey) {
    return (
      <ModalWindow visible={props.visible} onClose={onClose}>
        <AuthError />
      </ModalWindow>
    );
  }

  let content;

  switch (props.removing.status) {
    case 'confirm':
      content = (
        <ModalRemovePostConfirm
          title={props.removing.post.title}
          onRemove={onRemove}
          onCancel={onClose}
        />
      );
      break;

    case 'removing':
      content = <ModalRemovePostSpinner />;
      break;

    case 'success':
      content = (
        <ModalRemovePostSuccess title={props.removing.post.title} onClose={onClose} />
      );
      break;

    case 'failure':
      content = (
        <ModalRemovePostError title={props.removing.post.title} onClose={onClose} />
      );
      break;

    case 'default':
    default:
      content = null;
  }

  return (
    <ModalWindow visible={props.visible} onClose={onClose}>
      {content}
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
