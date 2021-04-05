import { WEATHER_CHANGE_TIME_PERIOD } from '../types/weatherReduxTypes';
import { DAY } from '../types/weatherTimePeriod';

export default (state = DAY, action) => {
  if (action.type === WEATHER_CHANGE_TIME_PERIOD) {
    return action.timePeriod;
  }

  return state;
};
