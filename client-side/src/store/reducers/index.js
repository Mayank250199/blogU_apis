import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import blogs from "./blogs";
import users from "./users";
import blogshow from "./blogshow";



const rootReducer = combineReducers({
  currentUser,
  errors,
  blogs,
  users,
  blogshow
});

export default rootReducer;
