import { v4 as uuidv4 } from 'uuid';
import { reduxblog } from '../../../api';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: 'POSTS_LIST_REQUEST' });

  try {
    const response = await reduxblog.get('/posts', {
      params: { key: '' },
    });

    dispatch({ type: 'POSTS_LIST_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'POSTS_LIST_FAILURE', status: 500 });
  }
};

export const createPost = (values) => async (dispatch) => {
  dispatch({ type: 'POSTS_ADDING_REQUEST' });

  try {
    const response = await reduxblog.post(
      '/posts',
      {
        id: uuidv4(),
        title: values.title,
        categories: values.categories,
        content: values.content,
      },
      {
        params: { key: '' },
      }
    );

    dispatch({ type: 'POSTS_ADDING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'POSTS_ADDING_FAILURE', status: 500 });
  }
};

export const removePost = (id, title) => async (dispatch) => {
  dispatch({ type: 'POSTS_REMOVING_REQUEST', id, title });

  try {
    const response = await reduxblog.delete(`/posts/${id}`, {
      params: { key: '' },
    });

    dispatch({
      type: 'POSTS_REMOVING_SUCCESS',
      id: response.data.id,
      title: response.data.title,
    });
  } catch (error) {
    dispatch({ type: 'POSTS_REMOVING_FAILURE', id, title });
  }
};

export const removePostAsk = (id, title) => ({
  type: 'POSTS_REMOVING_ASK',
  id,
  title,
});

export const setAddingDefaultState = () => ({
  type: 'POSTS_ADDING_DEFAULT',
});

export const hideLog = () => ({
  type: 'POSTS_LOG_HIDE',
});

export const removePostReset = () => ({
  type: 'POSTS_REMOVING_RESET',
});