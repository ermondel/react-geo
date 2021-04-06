export default {
  postsList: require('./postsListReducer').default,
  postsView: require('./postsViewReducer').default,
  postsAdding: require('./postsAddingReducer').default,
  postsRemoving: require('./postsRemovingReducer').default,
  postsStatus: require('./postsStatusReducer').default,
  postsAuth: require('./postsAuthReducer').default,
  postsMessage: require('./postsMessageReducer').default,
  postsSearch: require('./postsSearchReducer').default,
  postsSort: require('./postsSortReducer').default,
};
