import { combineReducers } from "redux";
import { shiftReducer } from "./shift/shiftReducer";
import { employeeReducer } from "./employee/employeeReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  employee: employeeReducer,
  shift: shiftReducer,
});
