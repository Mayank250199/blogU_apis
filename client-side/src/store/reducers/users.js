import { LOAD_USERS } from "../actionTypes";

const initialState = {
  users:false
  
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {...action.users , users :true };
    default:
      return state;
  }
};

export default users;