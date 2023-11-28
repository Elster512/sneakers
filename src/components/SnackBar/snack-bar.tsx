import React from "react";
import "./snack-bar.scss";
import { Transition } from "react-transition-group";
import CrossIcon from "../../assets/close-icon.svg";
import classes from "./snack-bar.module.scss";
import Modal from "../modal/Modal";

interface ISnackBar {
  closeSnack: () => void;
  isShown: boolean;
}

const SnackBar: React.FC<ISnackBar> = ({ isShown, closeSnack }) => {
  return (
    <Transition in={isShown} timeout={300} mountOnEnter unmountOnExit>
      {(state) => {
        return (
          <Modal state={state} onClick={closeSnack}>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`${classes["snack-bar-menu"]} snack-bar-menu-${state}`}
            >
              <img
                src={CrossIcon}
                className={classes["cross-icon"]}
                onClick={closeSnack}
              />
              <ul className={classes["links-container"]}>
                <li>Collections</li>
                <li>Man</li>
                <li>Woman</li>
                <li>About</li>
                <li>Contacts</li>
              </ul>
            </div>
          </Modal>
        );
      }}
    </Transition>
  );
};

export default SnackBar;
