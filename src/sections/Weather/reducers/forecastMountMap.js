import {
  WEATHER_MAP_STATUS_NONE,
  WEATHER_MAP_STATUS_LOADING,
  WEATHER_MAP_STATUS_READY,
  WEATHER_MAP_STATUS_ERROR,
} from '@redux/types';

export default (state = 'none', action) => {
  switch (action.type) {
    case WEATHER_MAP_STATUS_NONE:
      return 'none';

    case WEATHER_MAP_STATUS_LOADING:
      return 'loading';

    case WEATHER_MAP_STATUS_READY:
      return 'ready';

    case WEATHER_MAP_STATUS_ERROR:
      return 'error';

    default:
      return state;
  }
};
