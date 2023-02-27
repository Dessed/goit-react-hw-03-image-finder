import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, Modal } from './Modal.styed'

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component  { 
  
  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown);
  }; 

  handleKeyDown = e => {
    if(e.code === 'Escape') {
      this.props.onClose();
    };
  };

  handleBackdropClick = e => {
    if(e.currentTarget === e.target) {
      this.props.onClose();
    };
  };

  render () {
    console.log(this.props);
    return createPortal (
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>
          <img src={this.props.children} alt="" />
        </Modal>
      </Overlay>
    , modalRoot,
    )
  }
};