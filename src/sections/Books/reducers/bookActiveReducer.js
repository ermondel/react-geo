import { BOOKS_ITEM_SELECTED, BOOKS_ITEM_CLOSE } from '../types/booksReduxTypes';

export default (state = null, action) => {
  switch (action.type) {
    case BOOKS_ITEM_SELECTED:
      return action.payload;

    case BOOKS_ITEM_CLOSE:
      return null;

    default:
      return state;
  }
};
