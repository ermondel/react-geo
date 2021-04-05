import { WEATHER_CHANGE_VIEW_MODE } from '../types/weatherReduxTypes';
import { LINE } from '../types/weatherViewMode';

export default (state = LINE, action) => {
  if (action.type === WEATHER_CHANGE_VIEW_MODE) {
    return action.view;
  }

  return state;
};
