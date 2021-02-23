import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ClearShiftsModal = ({ shiftModalIsOpen, closeShiftModal }) => {
  return (
    <Modal
      isOpen={shiftModalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeShiftModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      ClearShiftsModal
    </Modal>
  );
};

export default ClearShiftsModal;
