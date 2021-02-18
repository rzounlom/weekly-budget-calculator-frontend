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
} from "../../constants/user/userConstants";
import { login } from "../../../utils/auth";
import { getAccessToken } from "../../../utils/auth";
import { client } from "../../../graphql/client";
import { FIND_USER_BY_ID } from "../../../graphql/Queries/user/userQueries";

export const createUser = (data) => async (dispatch) => {
  return dispatch({
    type: "CREATE_User",
    payload: { data },
  });
};

export const loginUserAction = (data) => async (dispatch) => {
  const { username, password } = data;

  try {
    const token = await login(username, password);
    await dispatch({
      type: LOGIN_USER_REQUEST,
    });

    if (token) {
      await dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
    } else {
      await dispatch({
        type: LOGIN_USER_FAIL,
        payload: { err: "Invalid Credentials" },
      });
    }
  } catch (err) {
    if (err) {
      console.log(err);
      await dispatch({
        type: LOGIN_USER_FAIL,
        payload: { err },
      });
    }
  }
};

export const retrieveUserToken = () => async (dispatch) => {
  try {
    const token = await getAccessToken();
    await dispatch({
      type: RETRIEVE_TOKEN_REQUEST,
    });

    if (token) {
      await dispatch({ type: RETRIEVE_TOKEN_SUCCESS, payload: token });
    } else {
      await dispatch({
        type: RETRIEVE_TOKEN_FAIL,
        payload: { err: "No Token Stored" },
      });
    }
  } catch (err) {
    if (err) {
      await dispatch({
        type: LOGIN_USER_FAIL,
        payload: { err },
      });
    }
  }
};

export const retrieveUserDetails = (id) => async (dispatch) => {
  try {
    await dispatch({
      type: RETRIEVE_USER_DETAILS_REQUEST,
    });

    const {
      data: { user },
    } = await client.query({
      query: FIND_USER_BY_ID,
      variables: { id },
    });

    if (user) {
      await dispatch({ type: RETRIEVE_USER_DETAILS_SUCCESS, payload: user });
    }
  } catch (err) {
    if (err) {
      await dispatch({
        type: RETRIEVE_USER_DETAILS_FAIL,
        payload: { err },
      });
    }
  }
};
