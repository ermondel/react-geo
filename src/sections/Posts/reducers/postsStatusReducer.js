import {
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_SUCCESS,
  POSTS_AUTH_FAILURE,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILURE,
  POSTS_STATUS_RESET,
} from '../types/postsReduxTypes';
import {
  AUTH,
  ALLOW,
  DENIED,
  LOADING,
  SUCCESS,
  FAILURE,
  DEFAULT,
} from '../types/postsStatuses';

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case POSTS_AUTH_REQUEST:
      return AUTH;

    case POSTS_AUTH_SUCCESS:
      return ALLOW;

    case POSTS_AUTH_FAILURE:
      return DENIED;

    case POSTS_LIST_REQUEST:
      return LOADING;

    case POSTS_LIST_SUCCESS:
      return SUCCESS;

    case POSTS_LIST_FAILURE:
      return FAILURE;

    case POSTS_STATUS_RESET:
      return DEFAULT;

    default:
      return state;
  }
};
