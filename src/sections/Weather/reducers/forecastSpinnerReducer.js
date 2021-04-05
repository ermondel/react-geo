import {
  WEATHER_FORECAST_SET_STATUS_REQUEST,
  WEATHER_FORECAST_SET_STATUS_SUCCESS,
  WEATHER_FORECAST_SET_STATUS_FAILURE,
} from '../types/weatherReduxTypes';

export default (state = null, action) => {
  switch (action.type) {
    case WEATHER_FORECAST_SET_STATUS_REQUEST:
      return { query: action.query };

    case WEATHER_FORECAST_SET_STATUS_SUCCESS:
    case WEATHER_FORECAST_SET_STATUS_FAILURE:
      return null;

    default:
      return state;
  }
};
