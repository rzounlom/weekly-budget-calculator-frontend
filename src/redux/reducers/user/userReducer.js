import jwt from "jsonwebtoken";

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  RETRIEVE_TOKEN_REQUEST,
  RETRIEVE_TOKEN_SUCCESS,
  RETRIEVE_TOKEN_FAIL,
  RETRIEVE_USER_DETAILS_REQUEST,
  RETRIEVE_USER_DETAILS_SUCCESS,
  RETRIEVE_USER_DETAILS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../../constants/user/userConstants";

export const userReducer = (
  state = { loading: false, token: "", err: "", users: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER_REQUEST:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, token: payload };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, token: "", err: payload };
    case RETRIEVE_TOKEN_REQUEST:
      return { ...state, loading: true };
    case RETRIEVE_TOKEN_SUCCESS:
      const { id } = jwt.verify(payload, process.env.REACT_APP_JWT_SECRET);
      return { ...state, loading: false, token: payload, userId: id };
    case RETRIEVE_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        user: { token: "" },
        err: payload,
      };
    case RETRIEVE_USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: payload,
      };
    case RETRIEVE_USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
