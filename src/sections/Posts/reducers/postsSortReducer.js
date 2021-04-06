import { POSTS_SORT_BY_DATE } from '../types/postsReduxTypes';
import { NEW } from '../types/postsSortType';

export default (state = NEW, action) => {
  if (action.type === POSTS_SORT_BY_DATE) {
    return action.sortType;
  }

  return state;
};
