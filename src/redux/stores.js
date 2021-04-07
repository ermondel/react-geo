import { combineReducers } from 'redux';
import weatherReducers from '@sections/Weather/reducers/list';
import postsReducers from '@sections/Posts/reducers/list';
import blogReducers from '@sections/Blog/reducers/list';
import booksReducers from '@sections/Books/reducers/list';

export default combineReducers({
  modalWindow: require('@modal/modalWindowReducer').default,
  mountGooglemap: require('@googlemap/MountMapReducer').default,
  podcast: require('@sections/Podcasts/reducers/podcast').default,
  geoCoordinates: require('@sections/Location/redux/geoCoordinatesReducer').default,
  geoMap: require('@sections/Location/redux/geoMapReducer').default,
  ...booksReducers,
  ...blogReducers,
  ...postsReducers,
  ...weatherReducers,
});
