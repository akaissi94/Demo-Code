import { SET_USER_INFO } from "../actions/types";

const defaultState = {
  userInfo: null,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    // can use filter, spread etc...
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default loginReducer;
