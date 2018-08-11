import { LOAD_BLOGSHOW } from "../actionTypes";

const initialState = {
  blogshow:false
  
};

const blogshow = (state = initialState , action) => {
  switch (action.type) {
    case LOAD_BLOGSHOW:
      return { ...action.blogshow, blogshow: true };
      default:
      return state;
  }
};

export default blogshow;