export const createShift = (data) => async (dispatch) => {
  return dispatch({
    type: "CREATE_SHIFT",
    payload: { data },
  });
};
