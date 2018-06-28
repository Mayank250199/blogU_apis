import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import blogs from "./blogs"
import users from "./users"


const rootReducer = combineReducers({
  currentUser,
  errors,
  blogs,
  users
});

export default rootReducer;
