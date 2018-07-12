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
    return apiCall("GET", "/api/blog/")
      .then(res => {
        dispatch(loadBlogs(res));
      })
      .catch(err => {
        dispatch(addError());
      });
  };
};


export const postNewBlog = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const user_id = currentUser.user.id;
  const title = text.title;
  const body = text.body;
  const category = text.category;
  return apiCall("post", "/api/blog/create",{title,body,category,user_id} )
    .then(res => {})
    .catch(err => addError(err.message))};

    export const postNewComment = text => (dispatch, getState) => {
      let { currentUser } = getState();
      const user_id = currentUser.user.id;
      const id = text.id;
      const body = text.body;
      
      return apiCall("put", `/api/blog/answer/${id}`,{body,user_id} )
        .then(res => {})
        .catch(err => addError(err.message))};