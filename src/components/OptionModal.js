import React from "react";
import Modal from "react-modal";

class OptionModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={this.props.handleDeleteModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modals"
      >
        {console.log(this.props.selectedOption)}
        {this.props.selectedOption && (
          <p className="modal__body">{this.props.selectedOption}</p>
        )}
        <h3 className="modal__title">Selected Option</h3>
        <button className="button" onClick={this.props.handleDeleteModal}>
          Okay
        </button>
      </Modal>
    );
  }
}

export default OptionModal;
