export const createEmployee = (data) => async (dispatch) => {
  return dispatch({
    type: "CREATE_EMPLOYEE",
    payload: { data },
  });
};
