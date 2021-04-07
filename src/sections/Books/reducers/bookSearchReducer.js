import { BOOKS_SEARCH_REQUEST } from '../types/booksReduxTypes';

export default (state = '', action) => {
  if (action.type === BOOKS_SEARCH_REQUEST) {
    return action.query;
  }

  return state;
};
