import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { getAllShifts } from "../../redux/actions/shift/shiftActions";
import "../../styles/ModalComponents/styles.scss";
import {
  ModalContainer,
  ModalFormContainer,
  ModalFormHeader,
  ModalFormBtnContainer,
  ModalFormBtn,
} from "./ModalComponents";
import { createShift } from "../../redux/actions/shift/shiftActions";
import { SelectPicker, InputNumber } from "rsuite";

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
  const days = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Satrday", value: "Satrday" },
    { label: "Sunday", value: "Sunday" },
  ];
  const dispatch = useDispatch();
  const [usernameValue, setUsernameValue] = useState(0);
  const [userHours, setUserHours] = useState(0);
  const [userDay, setUserDay] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = async (value) => {
    setUsernameValue(value);
    console.log(usernameValue);
  };

  const handleUserHourChange = (num) => {
    setUserHours(num);
    console.log(userHours);
  };

  const handleUserDayChange = (day) => {
    setUserDay(day);
    console.log(userDay);
  };

  const { shifts } = useSelector((state) => state.shift);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(getAllShifts());
    console.log("empID: " + usernameValue);
    console.log(userHours);
    console.log("day: " + userDay);
    console.log(shifts);
    const shiftExists = shifts.some(
      (shift) =>
        shift.employee.employeeId === usernameValue && shift.day === userDay
    );
    console.log(shiftExists);
    if (shiftExists) {
      setError(`Employee already added to ${userDay} shift`);
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    } else {
      try {
        await dispatch(createShift(userDay, usernameValue, Number(userHours)));
        await dispatch(getAllShifts());
        await closeModal();
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    }
  };

  const { employees } = useSelector((state) => state.employee);
  const usernames = employees.map((employee) => {
    return {
      label: `${employee.employeeId}. ${employee.firstName} ${employee.lastName}`,
      value: employee.employeeId,
    };
  });
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <ModalFormContainer>
          <ModalFormHeader>Add Employee To Shift</ModalFormHeader>
          {error && <p style={{ color: "red" }}>{error}</p>}

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
            data={days}
            style={{ width: "85%", height: "45px" }}
            placeholder={"Select Day"}
            onChange={handleUserDayChange}
            onSelect={handleUserDayChange}
            cleanable={false}
          />
          <InputNumber
            style={{ width: "50%", height: "45px" }}
            onChange={handleUserHourChange}
            onSelect={handleUserHourChange}
            placeholder="Select Hours"
            step={0.5}
          />
          <ModalFormBtnContainer>
            <ModalFormBtn
              className="modal-submit-btn"
              disabled={usernameValue < 1 || !userDay || userHours < 0.5}
              onClick={handleSubmit}
            >
              Submit
            </ModalFormBtn>
            <ModalFormBtn className="modal-cancel-btn" onClick={closeModal}>
              Cancel
            </ModalFormBtn>
          </ModalFormBtnContainer>
        </ModalFormContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddEmployeeToDayModal;
