import { LOAD_BLOGSHOW } from "../actionTypes";

const blogshow = (state = [], action) => {
  switch (action.type) {
    case LOAD_BLOGSHOW:
      return [...action.blogshow];
      default:
      return state;
  }
};

export default blogshow;