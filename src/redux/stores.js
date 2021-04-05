import { combineReducers } from 'redux';
import weatherReducers from '@sections/Weather/reducers/list';

export default combineReducers({
  modalWindow: require('@modal/modalWindowReducer').default,
  mountGooglemap: require('@googlemap/MountMapReducer').default,
  podcast: require('@sections/Podcasts/reducers/podcast').default,
  blogPosts: require('@sections/Blog/reducers/blogPosts').default,
  blogUser: require('@sections/Blog/reducers/blogUser').default,
  blogError: require('@sections/Blog/reducers/blogError').default,
  blogSpinner: require('@sections/Blog/reducers/blogSpinner').default,
  bookActive: require('@sections/Books/reducers/bookActive').default,
  booksView: require('@sections/Books/reducers/booksView').default,
  bookSearch: require('@sections/Books/reducers/bookSearch').default,
  postsList: require('@sections/Posts/reducers/postsList').default,
  postsView: require('@sections/Posts/reducers/postsView').default,
  postsAdding: require('@sections/Posts/reducers/postsAdding').default,
  postsRemoving: require('@sections/Posts/reducers/postsRemoving').default,
  postsStatus: require('@sections/Posts/reducers/postsStatus').default,
  postsAuth: require('@sections/Posts/reducers/postsAuth').default,
  postsMessage: require('@sections/Posts/reducers/postsMessage').default,
  postsSearch: require('@sections/Posts/reducers/postsSearch').default,
  postsSort: require('@sections/Posts/reducers/postsSort').default,
  geoCoordinates: require('@sections/Location/redux/geoCoordinatesReducer').default,
  geoMap: require('@sections/Location/redux/geoMapReducer').default,
  ...weatherReducers,
});
