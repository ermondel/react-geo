import { v4 as uuidv4 } from 'uuid';
import { reduxblog, nodeapiserver } from '@lib/api';
import {
  POSTS_AUTH_REQUEST,
  POSTS_AUTH_SUCCESS,
  POSTS_AUTH_FAILURE,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAILURE,
  POSTS_ADDING_REQUEST,
  POSTS_ADDING_SUCCESS,
  POSTS_ADDING_FAILURE,
  POSTS_ADDING_RESET,
  POSTS_REMOVE_CONFIRM,
  POSTS_REMOVE_REQUEST,
  POSTS_REMOVE_SUCCESS,
  POSTS_REMOVE_FAILURE,
  POSTS_REMOVE_DEFAULT,
  POSTS_SEARCH_REQUEST,
  POSTS_SORT_BY_DATE,
  POSTS_STATUS_RESET,
  POSTS_ADD_MESSAGE,
  POSTS_REMOVE_MESSAGE,
  POSTS_VIEW_DEFAULT,
} from '@redux/types';

export const fetchPosts = (publicKey) => async (dispatch) => {
  try {
    dispatch({ type: POSTS_LIST_REQUEST });

    const response = await reduxblog.get('/posts', {
      params: { key: publicKey },
    });

    dispatch({ type: POSTS_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POSTS_LIST_FAILURE, status: 500 });
  }
};

export const fetchPostsAuth = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_AUTH_REQUEST });

    const authResponse = await nodeapiserver.get('/opt/fsn78d', {
      apiName: 'nodeapiserver',
    });

    dispatch({ type: POSTS_AUTH_SUCCESS, payload: authResponse.data.opt });
    dispatch({ type: POSTS_LIST_REQUEST });

    const postsResponse = await reduxblog.get('/posts', {
      apiName: 'reduxblog',
      params: { key: authResponse.data.opt },
    });

    dispatch({ type: POSTS_LIST_SUCCESS, payload: postsResponse.data });
  } catch (error) {
    if (error.config.apiName === 'nodeapiserver') {
      dispatch({ type: POSTS_AUTH_FAILURE, status: 500 });
    }

    if (error.config.apiName === 'reduxblog') {
      dispatch({ type: POSTS_LIST_FAILURE, status: 500 });
    }
  }
};

export const createPost = (publicKey, newValues) => async (dispatch) => {
  try {
    dispatch({ type: POSTS_ADDING_REQUEST });

    const response = await reduxblog.post(
      '/posts',
      {
        id: uuidv4(),
        title: newValues.title,
        categories: newValues.categories,
        content: newValues.content,
      },
      {
        params: { key: publicKey },
      }
    );

    dispatch({ type: POSTS_ADDING_SUCCESS, payload: response.data });
    dispatch({ type: POSTS_ADD_MESSAGE, message: 'The post has been added' });
  } catch (error) {
    dispatch({ type: POSTS_ADDING_FAILURE });
  }
};

export const removePost = (publicKey, post) => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REMOVE_REQUEST, post });

    const response = await reduxblog.delete(`/posts/${post.id}`, {
      params: { key: publicKey },
    });

    dispatch({ type: POSTS_REMOVE_SUCCESS, post: response.data });
  } catch (error) {
    dispatch({ type: POSTS_REMOVE_FAILURE, post });
  }
};

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
