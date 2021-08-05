import { Fragment } from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const portalPopupElem = document.getElementById("popup");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={style.backdrop}>&nbsp;</div>,
        portalPopupElem
      )}
      {ReactDOM.createPortal(
        <div className={style.modal}>{props.children}</div>,
        portalPopupElem
      )}
    </Fragment>
  );
};

export default Modal;
