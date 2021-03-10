import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { client } from "../../graphql/client";
import { InputNumber, Input } from "rsuite";
import { DELETE_SHIFT } from "../../graphql/Mutations/shift/shiftMutations";
import Modal from "react-modal";
import {
  ModalContainer,
  ModalFormContainer,
  ModalFormHeader,
  ModalFormBtnContainer,
  ModalFormBtn,
} from "./ModalComponents";

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

const DeleteShiftModal = ({
  deleteShiftModalIsOpen,
  closeDeleteShiftsModal,
  handleGlobalMessage,
  setRefreshShiftsByDay,
}) => {
  const [error, setError] = useState("");
  const currentShift = useSelector((state) => state.shift.currentShift);
  const [shift, setShift] = useState({});
  const [updateDay, setUpdateDay] = useState("");
  const [updateHours, setUpdateHours] = useState(0);
  const [employeeId, setEmployeeId] = useState("");

  useEffect(() => {
    setShift(currentShift);
    const handleEmployeeId = () => {
      return currentShift.employee
        ? setEmployeeId(currentShift.employee.employeeId)
        : "";
    };

    const initialUpdatedDay = () => {
      return currentShift.day ? setUpdateDay(currentShift.day) : "";
    };

    const initialUpdatedHours = () => {
      return currentShift.hours ? setUpdateHours(currentShift.hours) : 0;
    };
    handleEmployeeId();
    initialUpdatedDay();
    initialUpdatedHours();
  }, [currentShift, shift, employeeId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { message } = await client.mutate({
        mutation: DELETE_SHIFT,
        variables: {
          data: {
            day: updateDay,
            employeeId: employeeId,
          },
        },
      });
      handleGlobalMessage(
        `${updateDay} shift deleted for ${shift.employee.firstName} ${shift.employee.lastName}`
      );
      await setRefreshShiftsByDay(true);
      closeDeleteShiftsModal();
    } catch (errors) {
      if (errors) {
        console.log(errors);
      }
    }
  };

  return (
    <Modal
      isOpen={deleteShiftModalIsOpen}
      onRequestClose={closeDeleteShiftsModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <ModalFormContainer>
          <ModalFormHeader>Delete Shift</ModalFormHeader>
          {error && (
            <div
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "center",
                width: "80%",
              }}
            >
              {error}
            </div>
          )}
          <div
            style={{
              color: "red",
              fontSize: "12px",
              textAlign: "center",
              width: "80%",
            }}
          >
            Are you sure you want to delete this shift?
          </div>
          <Input
            style={{ width: "85%", height: "45px" }}
            disabled
            value={
              shift.employee
                ? `#${shift.employee.employeeId} ${shift.employee.firstName} ${shift.employee.lastName}`
                : ""
            }
          />
          <Input
            disabled
            style={{ width: "85%", height: "45px" }}
            value={shift.employee ? `${shift.day}` : ""}
          />

          <Input
            disabled
            style={{ width: "50%", height: "45px" }}
            value={shift.employee ? `${shift.hours}` : ""}
          />
          <ModalFormBtnContainer>
            <ModalFormBtn className="modal-submit-btn" onClick={handleSubmit}>
              Confirm
            </ModalFormBtn>
            <ModalFormBtn
              className="modal-cancel-btn"
              onClick={closeDeleteShiftsModal}
            >
              Cancel
            </ModalFormBtn>
          </ModalFormBtnContainer>
        </ModalFormContainer>
      </ModalContainer>
    </Modal>
  );
};

export default DeleteShiftModal;
