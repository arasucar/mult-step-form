import React from 'react'
import ReactDOM from "react-dom";
import {ModalProps} from "../types";

const portalDiv = document.getElementById('modal')!;

const Modal = (props: ModalProps) => {

  return ReactDOM.createPortal(
    <div className="dimmer active" onClick={props.onDismiss}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="content">{props.content}</div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    portalDiv
  )
}

export default Modal