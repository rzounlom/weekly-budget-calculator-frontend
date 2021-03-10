import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { client } from "../../graphql/client";
import { InputNumber, Input } from "rsuite";
import { UPDATE_SHIFT } from "../../graphql/Mutations/shift/shiftMutations";
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

const EditShiftModal = ({
  editShiftModalIsOpen,
  closeEditShiftsModal,
  handleGlobalMessage,
  setRefreshShiftsByDay,
}) => {
  const [error, setError] = useState("");
  const currentShift = useSelector((state) => state.shift.currentShift);
  const [shift, setShift] = useState({});
  const [updateDay, setUpdateDay] = useState("");
  const [updateHours, setUpdateHours] = useState(0);
  const [employeeId, setEmployeeId] = useState("");

  const handleUpdateDay = async (value) => {
    await setUpdateDay(value);
    console.log(updateDay);
  };

  const handleUpdateHours = async (num) => {
    await setUpdateHours(num);
    console.log(updateHours);
  };

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
        mutation: UPDATE_SHIFT,
        variables: {
          data: {
            day: updateDay,
            employeeId: employeeId,
            hours: Number(updateHours),
          },
        },
      });
      handleGlobalMessage(
        `${updateDay} updated for ${shift.employee.firstName} ${shift.employee.lastName}`
      );
      await setRefreshShiftsByDay(true);
      closeEditShiftsModal();
    } catch (errors) {
      if (errors) {
        console.log(errors);
      }
    }
  };

  return (
    <Modal
      isOpen={editShiftModalIsOpen}
      onRequestClose={closeEditShiftsModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <ModalFormContainer>
          <ModalFormHeader>Edit Shift</ModalFormHeader>
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
          <InputNumber
            defaultValue={shift.hours ? shift.hours : ""}
            style={{ width: "50%", height: "45px" }}
            placeholder="Select Hours"
            step={0.5}
            onSelect={handleUpdateHours}
            onChange={handleUpdateHours}
          />
          <ModalFormBtnContainer>
            <ModalFormBtn className="modal-submit-btn" onClick={handleSubmit}>
              Submit
            </ModalFormBtn>
            <ModalFormBtn
              className="modal-cancel-btn"
              onClick={closeEditShiftsModal}
            >
              Cancel
            </ModalFormBtn>
          </ModalFormBtnContainer>
        </ModalFormContainer>
      </ModalContainer>
    </Modal>
  );
};

export default EditShiftModal;
