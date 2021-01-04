import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

export const rootreducer = combineReducers({
    auth: authReducer,
  }); 