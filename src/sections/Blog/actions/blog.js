import { jsonplaceholder } from '@lib/api';
import {
  BLOG_POSTS_FETCH_REQUEST,
  BLOG_POSTS_FETCH_SUCCESS,
  BLOG_POSTS_FETCH_FAILURE,
  BLOG_USER_SELECTED,
  BLOG_USER_CLOSE,
} from '@redux/types';

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

export const selectBlogUser = (user) => ({
  type: BLOG_USER_SELECTED,
  user,
});

export const closeBlogUser = () => ({
  type: BLOG_USER_CLOSE,
});
