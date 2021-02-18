import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  RETRIEVE_TOKEN_REQUEST,
  RETRIEVE_TOKEN_SUCCESS,
  RETRIEVE_TOKEN_FAIL,
} from "../../constants/user/userConstants";

export const userReducer = (
  state = { loading: false, user: { token: "" }, err: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER_REQUEST:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: { token: payload } };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, user: { token: "" }, err: payload };
    case RETRIEVE_TOKEN_REQUEST:
      return { ...state, loading: true };
    case RETRIEVE_TOKEN_SUCCESS:
      return { ...state, loading: false, user: { token: payload } };
    case RETRIEVE_TOKEN_FAIL:
      return { ...state, loading: false, user: { token: "" }, err: payload };
    default:
      return state;
  }
};
