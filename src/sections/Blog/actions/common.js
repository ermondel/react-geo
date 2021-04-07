import { BLOG_USER_SELECTED, BLOG_USER_CLOSE } from '../types/blogReduxTypes';

export const selectBlogUser = (user) => ({
  type: BLOG_USER_SELECTED,
  user,
});

export const closeBlogUser = () => ({
  type: BLOG_USER_CLOSE,
});
