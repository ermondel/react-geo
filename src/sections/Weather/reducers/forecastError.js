import {
  WEATHER_FORECASTS_FETCH_FAILURE,
  WEATHER_FORECASTS_FETCH_REQUEST,
  WEATHER_FORECASTS_DISABLE_ERROR,
} from '@redux/types';

export default (state = null, action) => {
  switch (action.type) {
    case WEATHER_FORECASTS_FETCH_FAILURE:
      return {
        status: action.status,
        query: action.query,
      };

    case WEATHER_FORECASTS_FETCH_REQUEST:
    case WEATHER_FORECASTS_DISABLE_ERROR:
      return null;

    default:
      return state;
  }
};
