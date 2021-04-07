export default {
  blogPosts: require('./blogPostsReducer').default,
  blogUser: require('./blogUserReducer').default,
  blogError: require('./blogErrorReducer').default,
  blogSpinner: require('./blogSpinnerReducer').default,
};
