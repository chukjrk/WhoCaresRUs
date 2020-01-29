import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import commentsArray from "./commentsArray";
import userInfo from "./userInfo";

export default combineReducers({
  isLogged: loggedReducer,
  comments: commentsArray,
  userInfo: userInfo
});
