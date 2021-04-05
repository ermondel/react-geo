import {
  WEATHER_FORECAST_SET_STATUS_FAILURE,
  WEATHER_FORECAST_SET_STATUS_REQUEST,
  WEATHER_DISABLE_ERROR,
} from '../types/weatherReduxTypes';

export default (state = null, action) => {
  switch (action.type) {
    case WEATHER_FORECAST_SET_STATUS_FAILURE:
      return {
        status: action.status,
        query: action.query,
      };

    case WEATHER_FORECAST_SET_STATUS_REQUEST:
    case WEATHER_DISABLE_ERROR:
      return null;

    default:
      return state;
  }
};
