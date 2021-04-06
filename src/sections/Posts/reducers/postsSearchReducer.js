import { POSTS_SEARCH_REQUEST } from '../types/postsReduxTypes';

export default (state = '', action) => {
  if (action.type === POSTS_SEARCH_REQUEST) {
    return action.query;
  }

  return state;
};
