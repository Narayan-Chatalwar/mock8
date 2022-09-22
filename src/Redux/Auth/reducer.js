import * as types from "./actionTypes";
import { saveData, loadData } from "../../utils/LocalStorage";

const initialState = {
  isAuth: loadData("localdata") ||false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      saveData("localdata", true);

      return {
        ...state,
        token: payload,
        isAuth: true,
        isLoading: false,
        isError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: false,
        token: "",
        isAuth: false,
      };

    default:
      return state
  }
};

export { reducer };