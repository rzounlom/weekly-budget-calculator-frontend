import {
  CREATE_SHIFT_FAIL,
  CREATE_SHIFT_SUCCESS,
  CREATE_SHIFT_REQUEST,
  GET_SHIFTS_REQUEST,
  GET_SHIFTS_BY_DAY_SUCCESS,
  GET_SHIFTS_FAIL,
  GET_SHIFTS_SUCCESS,
  GET_SHIFTS_BY_DAY_REQUEST,
  GET_SHIFTS_BY_DAY_FAIL,
  SET_CURRENT_SHIFT_REQUEST,
  SET_CURRENT_SHIFT_SUCCESS,
  SET_CURRENT_SHIFT_FAIL,
} from "../../../redux/constants/shift/shiftConstants";

export const shiftReducer = (
  state = { shifts: [], loading: false, currentShift: {} },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_SHIFT_REQUEST:
      return { ...state, loading: true };
    case CREATE_SHIFT_SUCCESS:
      return { ...state, loading: false, createdShift: payload };
    case CREATE_SHIFT_FAIL:
      return { ...state, loading: false };
    case GET_SHIFTS_REQUEST:
      return { ...state, loading: true };
    case GET_SHIFTS_SUCCESS:
      return { ...state, loading: false, shifts: payload };
    case GET_SHIFTS_FAIL:
      return { ...state, loading: false };
    case GET_SHIFTS_BY_DAY_REQUEST:
      return { ...state, loading: true };
    case GET_SHIFTS_BY_DAY_SUCCESS:
      return { ...state, loading: false, shiftsByDay: payload };
    case GET_SHIFTS_BY_DAY_FAIL:
      return { ...state, loading: false };
    case SET_CURRENT_SHIFT_REQUEST:
      return { ...state, loading: true };
    case SET_CURRENT_SHIFT_SUCCESS:
      return { ...state, loading: false, currentShift: payload };
    case SET_CURRENT_SHIFT_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
