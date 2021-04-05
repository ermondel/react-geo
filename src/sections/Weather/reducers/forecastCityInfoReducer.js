import {
  WEATHER_OPEN_CITY_INFO,
  WEATHER_CLOSE_CITY_INFO,
} from '../types/weatherReduxTypes';

export default (state = null, action) => {
  switch (action.type) {
    case WEATHER_OPEN_CITY_INFO:
      return action.info;

    case WEATHER_CLOSE_CITY_INFO:
      return null;

    default:
      return state;
  }
};
