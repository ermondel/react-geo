import {
  POSTS_LIST_SUCCESS,
  POSTS_ADDING_SUCCESS,
  POSTS_REMOVE_SUCCESS,
} from '../types/postsReduxTypes';

export default (state = [], action) => {
  switch (action.type) {
    case POSTS_LIST_SUCCESS:
      return action.payload;

    case POSTS_ADDING_SUCCESS:
      return [action.payload, ...state];

    case POSTS_REMOVE_SUCCESS:
      return state.filter((post) => post.id !== action.post.id);

    default:
      return state;
  }
};
