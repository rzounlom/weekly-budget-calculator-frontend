import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../graphql/client";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
import { GET_ALL_SHIFTS } from "../../graphql/Queries/shift/shiftQueries";
import { GET_EMPLOYEES } from "../../graphql/Queries/employee/employeeQueries";
import { useDispatch } from "react-redux";
import "../../styles/ModalComponents/styles.scss";
import {
  ModalContainer,
  ModalFormContainer,
  ModalFormHeader,
  ModalFormBtnContainer,
  ModalFormBtn,
} from "./ModalComponents";
import { SelectPicker, InputNumber } from "rsuite";
import { days } from "./data";
import { CREATE_SHIFT } from "../../graphql/Mutations/shift/shiftMutations";

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

const AddEmployeeToDayModal = ({
  modalIsOpen,
  closeModal,
  handleGlobalMessage,
  setRefreshShiftsByDay,
}) => {
  const dispatch = useDispatch();
  const [usernameValue, setUsernameValue] = useState(0);
  const [username, setUsername] = useState("");
  const [userHours, setUserHours] = useState(0);
  const [userDay, setUserDay] = useState("");
  const [error, setError] = useState("");
  const [allEmployees, setAllEmployees] = useState([]);
  const [allShifts, setAllShifts] = useState([]);

  const handleUsernameChange = async (value) => {
    await setUsernameValue(value.employeeId);
    await setUsername(value.employee);
    console.log(`employId: ${usernameValue}`);
    console.log(`usenameValue: ${username}`);
  };

  const handleUserHourChange = async (num) => {
    await setUserHours(num);
  };

  const handleUserDayChange = (day) => {
    setUserDay(day);
  };

  const [createShift] = useMutation(CREATE_SHIFT);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createShift({
        variables: {
          data: {
            employeeId: usernameValue,
            day: userDay,
            hours: Number(userHours),
          },
        },
      });
      handleGlobalMessage(
        `Employee ${username} successfully added to ${userDay} shift`
      );
      await setRefreshShiftsByDay(true);
      closeModal();
    } catch (errors) {
      if (errors) {
        console.log(errors.toString().substring(6));
        setTimeout(() => {});
        await setError(errors.toString().substring(6));
        await setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
  };

  const getEmployeeData = useCallback(() => {
    const getAllEmployees = async (query) => {
      try {
        const {
          data: { employees },
        } = await client.query({
          query: GET_EMPLOYEES,
          variables: { query },
        });
        await setAllEmployees(employees);
      } catch (errors) {
        if (errors) {
          console.Error(errors);
        }
      }
    };
    getAllEmployees();
  }, []);

  const getShiftData = useCallback(() => {
    const getAllShifts = async () => {
      try {
        const {
          data: { shifts },
        } = await client.query({
          query: GET_ALL_SHIFTS,
        });
        await setAllShifts(shifts);
      } catch (errors) {
        if (errors) {
          console.Error(errors);
        }
      }
    };
    getAllShifts();
  }, []);

  useEffect(() => {
    getShiftData();
    getEmployeeData();
  }, [getShiftData, getEmployeeData]);

  const usernames = allEmployees.map((employee) => {
    return {
      label: `${employee.employeeId}. ${employee.firstName} ${employee.lastName}`,
      value: {
        employeeId: employee.employeeId,
        employee: `${employee.firstName} ${employee.lastName}`,
      },
    };
  });

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={() => {
        getEmployeeData();
        getShiftData();
      }}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <ModalFormContainer>
          <ModalFormHeader>Add Employee To Shift</ModalFormHeader>
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
