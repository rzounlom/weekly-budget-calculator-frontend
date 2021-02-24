import {
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_REQUEST,
} from "../../constants/employee/employeeConstants";

export const employeeReducer = (
  state = { loading: false, employees: [], err: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EMPLOYEES_REQUEST:
      return { ...state, loading: true };
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, loading: false, employees: payload };
    case GET_EMPLOYEES_FAIL:
      return { ...state, loading: false, err: payload };
    default:
      return state;
  }
};
