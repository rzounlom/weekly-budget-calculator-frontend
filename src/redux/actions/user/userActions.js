export const createUser = (data) => async (dispatch) => {
  return dispatch({
    type: "CREATE_User",
    payload: { data },
  });
};
