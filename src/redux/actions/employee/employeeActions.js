import { client } from "../../../graphql/client";
import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
} from "../../constants/employee/employeeConstants";
import { GET_EMPLOYEES } from "../../../graphql/Queries/employee/employeeQueries";

export const createEmployee = (data) => async (dispatch) => {
  return dispatch({
    type: "CREATE_EMPLOYEE",
    payload: { data },
  });
};

export const getEmployees = (query) => async (dispatch) => {
  dispatch({
    type: GET_EMPLOYEES_REQUEST,
  });

  try {
    const {
      data: { employees },
    } = await client.query({
      query: GET_EMPLOYEES,
      variables: { query },
    });

    dispatch({
      type: GET_EMPLOYEES_SUCCESS,
      payload: employees,
    });
  } catch (err) {
    dispatch({
      type: GET_EMPLOYEES_FAIL,
      payload: err,
    });
  }
};
