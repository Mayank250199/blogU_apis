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
        .then(res =>
             res.json().then(data => {
               console.log(data)
          dispatch(loadUsers(data));
        })
).catch(err => {
          dispatch(addError());
        });
    };
  };

  export const fetchUserProfile =text=> (dispatch,getState) => {
    let { currentUser } = getState();
    const user_id = currentUser.user.id;
    return dispatch => {
      return apiCall("GET", `/api/user/${user_id}`)
        .then(res => {
          dispatch(loadUsers());
        })
        .catch(err => {
          dispatch(addError());
        });
    };
  };
