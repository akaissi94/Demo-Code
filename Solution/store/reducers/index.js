import { combineReducers } from "redux";
import loginReducer from "./login";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
});
export default rootReducer;
