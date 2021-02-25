import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import {
  ModalContainer,
  ModalFormContainer,
  ModalFormHeader,
} from "./ModalComponents";
import { SelectPicker } from "rsuite";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "1%",
    boxShadow:
      "10px 0 5px -2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    borderRadius: "10px",
  },
};

const AddEmployeeToDayModal = ({ modalIsOpen, closeModal }) => {
  const [usernameValue, setUsernameValue] = useState("");
  const handleUsernameChange = (value) => {
    setUsernameValue(value);
    console.log(usernameValue);
  };

  const { employees } = useSelector((state) => state.employee);
  const usernames = employees.map((employee) => {
    return {
      label: `${employee.employeeId} ${employee.firstName} ${employee.lastName}`,
      value: employee.employeeId,
    };
  });
  console.log(employees);
  console.log(usernames);
  console.log(usernameValue);
  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <ModalFormContainer>
          <ModalFormHeader>Add Employee To Shift</ModalFormHeader>

          <SelectPicker
            valueKey="value"
            labelKey="label"
            data={usernames}
            style={{ width: "85%", height: "45px" }}
            placeholder={"Select Employee"}
            onChange={handleUsernameChange}
            onSelect={handleUsernameChange}
            cleanable={false}
          />
          <SelectPicker
            valueKey="value"
            labelKey="label"
            data={usernames}
            style={{ width: "85%", height: "45px" }}
            placeholder={"Select Hours"}
            onChange={handleUsernameChange}
            onSelect={handleUsernameChange}
            cleanable={false}
          />
        </ModalFormContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddEmployeeToDayModal;
