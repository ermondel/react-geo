import { MODAL_OPEN, MODAL_CLOSE, POSTS_REMOVE_CONFIRM } from '@redux/types';
import { WEATHER_OPEN_CITY_MAP } from '@sections/Weather/types/weatherReduxTypes';

export default (state = false, action) => {
  switch (action.type) {
    case WEATHER_OPEN_CITY_MAP:
    case POSTS_REMOVE_CONFIRM:
      return true;

    case MODAL_CLOSE:
      return false;

    case MODAL_OPEN:
      return true;

    default:
      return state;
  }
};
