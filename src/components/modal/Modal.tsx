import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";

interface IModalProps {
  children: React.ReactNode;
  onClick: () => void;
  state: string;
}
const Modal: React.FC<IModalProps> = ({ children, state, onClick }) => {
  return createPortal(
    <div
      className={`${classes["modal-bg"]} snack-bar-${state}`}
      onClick={onClick}
    >
      {children}
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
