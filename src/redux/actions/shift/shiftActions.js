import { client } from "../../../graphql/client";
import {
  CREATE_SHIFT_REQUEST,
  CREATE_SHIFT_SUCCESS,
  CREATE_SHIFT_FAIL,
  GET_SHIFTS_FAIL,
  GET_SHIFTS_REQUEST,
  GET_SHIFTS_SUCCESS,
  GET_SHIFTS_BY_DAY_REQUEST,
  GET_SHIFTS_BY_DAY_SUCCESS,
  GET_SHIFTS_BY_DAY_FAIL,
  SET_CURRENT_SHIFT_FAIL,
  SET_CURRENT_SHIFT_REQUEST,
  SET_CURRENT_SHIFT_SUCCESS,
} from "../../constants/shift/shiftConstants";
import { CREATE_SHIFT } from "../../../graphql/Mutations/shift/shiftMutations";
import {
  GET_ALL_SHIFTS,
  GET_SHIFTS_BY_DAY,
} from "../../../graphql/Queries/shift/shiftQueries";

export const createShift = (day, employeeId, hours) => async (dispatch) => {
  dispatch({
    type: CREATE_SHIFT_REQUEST,
  });

  try {
    const data = await client.mutate({
      mutation: CREATE_SHIFT,
      variables: { data: { day, employeeId, hours } },
    });
    console.log(data);
    dispatch({
      type: CREATE_SHIFT_SUCCESS,
      payload: data,
    });
    return data;
  } catch (errors) {
    if (errors) {
      dispatch({
        type: CREATE_SHIFT_FAIL,
        payload: errors,
      });
      console.log(errors.message);
      return errors.message;
    }
  }
};

export const getAllShifts = () => async (dispatch) => {
  dispatch({ type: GET_SHIFTS_REQUEST });

  try {
    const {
      data: { shifts },
    } = await client.query({
      query: GET_ALL_SHIFTS,
    });
    // console.log(shifts);
    dispatch({
      type: GET_SHIFTS_SUCCESS,
      payload: shifts,
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_SHIFTS_FAIL, payload: err });
      throw new Error(err);
    }
  }
};

export const getShiftsByDay = (day) => async (dispatch) => {
  dispatch({ type: GET_SHIFTS_BY_DAY_REQUEST });

  try {
    const {
      data: { shifts },
    } = await client.query({
      query: GET_SHIFTS_BY_DAY,
      variables: { day },
    });

    dispatch({
      type: GET_SHIFTS_BY_DAY_SUCCESS,
      payload: shifts,
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_SHIFTS_BY_DAY_FAIL, payload: err });
      throw new Error(err);
    }
  }
};

export const setCurrentShift = (shift) => (dispatch) => {
  dispatch({ type: SET_CURRENT_SHIFT_REQUEST });

  try {
    dispatch({ type: SET_CURRENT_SHIFT_SUCCESS, payload: shift });
  } catch (error) {
    if (error) {
      dispatch({ type: SET_CURRENT_SHIFT_FAIL, payload: error });
      console.Error(error);
    }
  }
};
