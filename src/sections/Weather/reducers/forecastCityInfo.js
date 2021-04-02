import { WEATHER_CITYINFO_OPEN, WEATHER_CITYINFO_CLOSE } from '@redux/types';

export default (state = null, action) => {
  switch (action.type) {
    case WEATHER_CITYINFO_OPEN:
      return action.info;

    case WEATHER_CITYINFO_CLOSE:
      return null;

    default:
      return state;
  }
};
