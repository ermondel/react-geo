import { combineReducers } from 'redux';
import weatherReducers from '@sections/Weather/reducers/list';
import postsReducers from '@sections/Posts/reducers/list';
import blogReducers from '@sections/Blog/reducers/list';
import booksReducers from '@sections/Books/reducers/list';
import locationReducers from '@sections/Location/reducers/list';

export default combineReducers({
  modalWindow: require('@modal/modalWindowReducer').default,
  mountGooglemap: require('@googlemap/MountMapReducer').default,
  podcast: require('@sections/Podcasts/reducers/podcast').default,
  ...locationReducers,
  ...booksReducers,
  ...blogReducers,
  ...postsReducers,
  ...weatherReducers,
});
