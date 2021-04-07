import {
  BOOKS_ITEM_SELECTED,
  BOOKS_VIEW_CHANGED,
  BOOKS_SEARCH_REQUEST,
  BOOKS_ITEM_CLOSE,
} from '../types/booksReduxTypes';
import { LIST } from '../types/booksViewMode';

export const selectBook = (book) => ({
  type: BOOKS_ITEM_SELECTED,
  payload: book,
});

export const changeBooksView = (view = LIST) => ({
  type: BOOKS_VIEW_CHANGED,
  view,
});

export const bookSearch = (query) => ({
  type: BOOKS_SEARCH_REQUEST,
  query,
});

export const closeBook = () => ({
  type: BOOKS_ITEM_CLOSE,
});
