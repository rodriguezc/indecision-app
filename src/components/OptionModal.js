import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    className="modal"
    closeTimeoutMS={200}
  >
    <h3 className="modal_title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
