import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
}
const Modal: React.FC<IModalProps> = ({ children }) => {
  return createPortal(
    <div className={classes['modal-bg']}>{children}</div>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
