import { POSTS_ADD_MESSAGE, POSTS_REMOVE_MESSAGE } from '../types/postsReduxTypes';

export default (state = '', action) => {
  switch (action.type) {
    case POSTS_ADD_MESSAGE:
      return action.message;

    case POSTS_REMOVE_MESSAGE:
      return '';

    default:
      return state;
  }
};
