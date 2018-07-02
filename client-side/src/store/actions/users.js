import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_USERS } from "../actionTypes";

export const loadUsers = users => ({
  type: LOAD_USERS,
  users
});

  export const fetchUserId = (user_id) => {
    return dispatch => {
      return apiCall("GET", `/api/user/${user_id}`)
        .then(res =>{
          console.log(res)
          dispatch(loadUsers(res));
        }      
         ).catch(err => {
          dispatch(addError());
        });
    };
  };

 
