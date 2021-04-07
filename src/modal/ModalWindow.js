import React from 'react';
import ReactDOM from 'react-dom';
import { MODAL_CLOSE, MODAL_OPEN } from './modalWindowReduxTypes';

export const modalOpen = () => ({ type: MODAL_OPEN });

export const modalClose = () => ({ type: MODAL_CLOSE });

export const ModalWindow = ({ visible, children, onClose, modifier }) => {
  let div1 = 'modal',
    div2 = 'modal__background',
    div3 = 'modal__container',
    div4 = 'modal__content',
    div5 = 'modal__body';

  if (modifier) {
    div1 += ` ${div1}--${modifier}`;
    div2 += ` ${div2}--${modifier}`;
    div3 += ` ${div3}--${modifier}`;
    div4 += ` ${div4}--${modifier}`;
    div5 += ` ${div5}--${modifier}`;
  }

  if (!visible) {
    div1 += ' modal--hide';
  }

  return ReactDOM.createPortal(
    <div className={div1}>
      <div className={div2}></div>
      <div className={div3} onClick={onClose}>
        <div className={div4} onClick={(e) => e.stopPropagation()}>
          <div className={div5}>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
