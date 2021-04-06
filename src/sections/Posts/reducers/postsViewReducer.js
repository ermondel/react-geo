import { POSTS_REMOVE_SUCCESS, POSTS_VIEW_DEFAULT } from '../types/postsReduxTypes';
import { DELETED, DEFAULT } from '../types/postsStatuses';

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case POSTS_REMOVE_SUCCESS:
      return DELETED;

    case POSTS_VIEW_DEFAULT:
      return DEFAULT;

    default:
      return state;
  }
};
