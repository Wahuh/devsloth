import ReactModal from 'react-modal';
import React from 'react';
import './Modal.scss';

const Modal = ({children, isOpen, onClose}) => {
  return (
    <ReactModal
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      overlayClassName="Overlay"
      closeTimeoutMS={300}
      isOpen={isOpen}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
