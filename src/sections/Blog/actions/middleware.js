import { jsonplaceholder } from '@lib/api';
import {
  BLOG_POSTS_FETCH_REQUEST,
  BLOG_POSTS_FETCH_SUCCESS,
  BLOG_POSTS_FETCH_FAILURE,
} from '../types/blogReduxTypes';

export const fetchBlogPosts = () => async (dispatch) => {
  dispatch({ type: BLOG_POSTS_FETCH_REQUEST });

  try {
    const posts = await jsonplaceholder.get('/posts');
    const users = await jsonplaceholder.get('/users');

    const payload = posts.data.map((post) => {
      post.user = users.data.find((user) => user.id === post.userId);
      return post;
    });

    payload.sort(() => Math.random() - 0.5);

    dispatch({ type: BLOG_POSTS_FETCH_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: BLOG_POSTS_FETCH_FAILURE, status: 500 });
  }
};
