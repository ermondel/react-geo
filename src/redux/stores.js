import { combineReducers } from 'redux';
import weatherReducers from '@sections/Weather/reducers/list';
import postsReducers from '@sections/Posts/reducers/list';
import blogReducers from '@sections/Blog/reducers/list';

export default combineReducers({
  modalWindow: require('@modal/modalWindowReducer').default,
  mountGooglemap: require('@googlemap/MountMapReducer').default,
  podcast: require('@sections/Podcasts/reducers/podcast').default,
  bookActive: require('@sections/Books/reducers/bookActive').default,
  booksView: require('@sections/Books/reducers/booksView').default,
  bookSearch: require('@sections/Books/reducers/bookSearch').default,
  geoCoordinates: require('@sections/Location/redux/geoCoordinatesReducer').default,
  geoMap: require('@sections/Location/redux/geoMapReducer').default,
  ...blogReducers,
  ...postsReducers,
  ...weatherReducers,
});
