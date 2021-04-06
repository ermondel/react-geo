import { combineReducers } from 'redux';
import weatherReducers from '@sections/Weather/reducers/list';
import postsReducers from '@sections/Posts/reducers/list';

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
  geoCoordinates: require('@sections/Location/redux/geoCoordinatesReducer').default,
  geoMap: require('@sections/Location/redux/geoMapReducer').default,
  ...postsReducers,
  ...weatherReducers,
});
