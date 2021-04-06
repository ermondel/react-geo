import {
  POSTS_REMOVE_CONFIRM,
  POSTS_REMOVE_REQUEST,
  POSTS_REMOVE_SUCCESS,
  POSTS_REMOVE_FAILURE,
  POSTS_REMOVE_DEFAULT,
} from '../types/postsReduxTypes';
import { DEFAULT, CONFIRM, REMOVING, SUCCESS, FAILURE } from '../types/postsStatuses';

const defaultState = { status: DEFAULT, post: null };

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_REMOVE_CONFIRM:
      return { status: CONFIRM, post: action.post };

    case POSTS_REMOVE_REQUEST:
      return { status: REMOVING, post: action.post };

    case POSTS_REMOVE_SUCCESS:
      return { status: SUCCESS, post: action.post };

    case POSTS_REMOVE_FAILURE:
      return { status: FAILURE, post: action.post };

    case POSTS_REMOVE_DEFAULT:
      return defaultState;

    default:
      return state;
  }
};
