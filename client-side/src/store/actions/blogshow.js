import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_BLOGSHOW} from "../actionTypes";


export const loadShow = blogshow => ({
  type: LOAD_BLOGSHOW,
  blogshow
});


export const fetchBlogById = id => {
    return dispatch => {
      return apiCall("GET", `/api/blog/${id}`)
        .then(res => {
          dispatch(loadShow(res));
        })
        .catch(err => {
          dispatch(addError());
        });
    };
  };