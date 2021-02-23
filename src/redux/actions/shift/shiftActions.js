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
} from "../../constants/shift/shiftConstants";
import { CREATE_SHIFT } from "../../../graphql/Mutations/shift/shiftMutations";
import {
  GET_ALL_SHIFTS,
  GET_SHIFTS_BY_DAY,
} from "../../../graphql/Queries/shift/shiftQueries";

export const createShift = ({
  employeeId,
  firstName,
  lastName,
  position,
  rate,
}) => async (dispatch) => {
  dispatch({
    type: CREATE_SHIFT_REQUEST,
  });

  try {
    const data = await client.mutate({
      mutation: CREATE_SHIFT,
      variables: { data: { employeeId, firstName, lastName, position, rate } },
    });
    console.log(data);
    dispatch({
      type: CREATE_SHIFT_SUCCESS,
      payload: data,
    });
    return data;
  } catch (err) {
    if (err) {
      dispatch({
        type: CREATE_SHIFT_FAIL,
        payload: err,
      });
      throw new Error("There was an issue creating your shift");
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
    const data = await client.query({
      query: GET_SHIFTS_BY_DAY,
      variables: { day },
    });

    dispatch({
      type: GET_SHIFTS_BY_DAY_SUCCESS,
      payload: data,
    });
  } catch (err) {
    if (err) {
      dispatch({ type: GET_SHIFTS_BY_DAY_FAIL, payload: err });
      throw new Error(err);
    }
  }
};
