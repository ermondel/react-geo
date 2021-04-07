import {
  BLOG_POSTS_FETCH_REQUEST,
  BLOG_POSTS_FETCH_SUCCESS,
  BLOG_POSTS_FETCH_FAILURE,
} from '../types/blogReduxTypes';

export default (state = false, action) => {
  switch (action.type) {
    case BLOG_POSTS_FETCH_REQUEST:
      return true;

    case BLOG_POSTS_FETCH_SUCCESS:
    case BLOG_POSTS_FETCH_FAILURE:
      return false;

    default:
      return state;
  }
};
