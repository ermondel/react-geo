import { WEATHER_OPEN_CITY_MAP } from '../types/weatherReduxTypes';

export default (state = null, action) => {
  if (action.type === WEATHER_OPEN_CITY_MAP) {
    return action.city;
  }

  return state;
};
