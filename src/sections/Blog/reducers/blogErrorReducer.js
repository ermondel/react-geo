import {
  BLOG_POSTS_FETCH_FAILURE,
  BLOG_POSTS_FETCH_REQUEST,
} from '../types/blogReduxTypes';

export default (state = null, action) => {
  switch (action.type) {
    case BLOG_POSTS_FETCH_FAILURE:
      return { status: action.status };

    case BLOG_POSTS_FETCH_REQUEST:
      return null;

    default:
      return state;
  }
};
