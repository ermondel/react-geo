import {
  POSTS_ADDING_RESET,
  POSTS_REMOVE_CONFIRM,
  POSTS_REMOVE_DEFAULT,
  POSTS_SEARCH_REQUEST,
  POSTS_SORT_BY_DATE,
  POSTS_STATUS_RESET,
  POSTS_REMOVE_MESSAGE,
  POSTS_VIEW_DEFAULT,
} from '../types/postsReduxTypes';

export const removePostConfirm = (post) => ({
  type: POSTS_REMOVE_CONFIRM,
  post,
});

export const removeMessage = () => ({
  type: POSTS_REMOVE_MESSAGE,
});

export const searchPosts = (query) => ({
  type: POSTS_SEARCH_REQUEST,
  query,
});

export const sortByDate = (sortType) => ({
  type: POSTS_SORT_BY_DATE,
  sortType,
});

export const resetStatus = () => ({
  type: POSTS_STATUS_RESET,
});

export const resetAddStatus = () => ({
  type: POSTS_ADDING_RESET,
});

export const resetRemoveStatus = () => ({
  type: POSTS_REMOVE_DEFAULT,
});

export const resetViewStatus = () => ({
  type: POSTS_VIEW_DEFAULT,
});
