import {
  POSTS_ADDING_REQUEST,
  POSTS_ADDING_SUCCESS,
  POSTS_ADDING_FAILURE,
  POSTS_ADDING_RESET,
} from '../types/postsReduxTypes';
import { SAVING, SUCCESS, FAILURE, DEFAULT } from '../types/postsStatuses';

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case POSTS_ADDING_REQUEST:
      return SAVING;

    case POSTS_ADDING_SUCCESS:
      return SUCCESS;

    case POSTS_ADDING_FAILURE:
      return FAILURE;

    case POSTS_ADDING_RESET:
      return DEFAULT;

    default:
      return state;
  }
};
