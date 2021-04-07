import { BOOKS_VIEW_CHANGED } from '../types/booksReduxTypes';
import { LIST } from '../types/booksViewMode';

export default (state = LIST, action) => {
  if (action.type === BOOKS_VIEW_CHANGED) {
    return action.view;
  }

  return state;
};
