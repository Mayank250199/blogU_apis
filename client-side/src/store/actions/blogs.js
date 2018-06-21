import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_BLOGS, REMOVE_BLOG } from "../actionTypes";

export const loadBlogs = blogs => ({
  type: LOAD_BLOGS,
  blogs
});

export const remove = id => ({
  type: REMOVE_BLOG,
  id
});

export const removeBlog = (user_id, blog_id) => {
  return dispatch => {
    return apiCall("delete", `/api/blog/${blog_id}`)
      .then(() => dispatch(remove(blog_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

export const fetchBlogs = () => {
  return dispatch => {
    return apiCall("GET", "/api/blog")
      .then(res => {
        dispatch(loadBlogs(res));
      })
      .catch(err => {
        dispatch(addError());
      });
  };
};

export const postNewBlog = data => (dispatch, getState) => {
  let { currentUser } = getState();
  const user_id = currentUser.user.id;
  return apiCall("post", "/api/blog/create", { data })
    .then(res => {})
    .catch(err => addError(err.message));
};