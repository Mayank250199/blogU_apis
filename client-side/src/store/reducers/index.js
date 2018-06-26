import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import blogs from "./blogs"
import user from "./user"


const rootReducer = combineReducers({
  currentUser,
  errors,
  blogs,
  user
});

export default rootReducer;
