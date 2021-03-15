import React from 'react';
import ReactDOM from 'react-dom';
import { MODAL_CLOSE, MODAL_OPEN } from '@redux/types';

export const modalOpen = () => ({ type: MODAL_OPEN });

export const modalClose = () => ({ type: MODAL_CLOSE });

export const ModalWindow = ({ visible, children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={`modal ${visible ? '' : ' modal--hide'}`}>
      <div className='modal__background'></div>
      <div className='modal__container' onClick={onClose}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
          <div className='modal__body'>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
