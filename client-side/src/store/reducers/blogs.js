import { LOAD_BLOGS, REMOVE_BLOG } from "../actionTypes";

const blog = (state = [], action) => {
  switch (action.type) {
    case LOAD_BLOGS:
      return [...action.blogs];
    case REMOVE_BLOG:
      return state.filter(blog => blog._id !== action.id);
    default:
      return state;
  }
};

export default blog;
