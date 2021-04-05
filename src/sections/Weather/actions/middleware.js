import { nodeapiserver } from '@lib/api';
import {
  WEATHER_FORECAST_SET_STATUS_REQUEST,
  WEATHER_FORECAST_SET_STATUS_SUCCESS,
  WEATHER_FORECAST_SET_STATUS_FAILURE,
} from '../types/weatherReduxTypes';

export const fetchForecast = (city) => async (dispatch) => {
  dispatch({
    type: WEATHER_FORECAST_SET_STATUS_REQUEST,
    query: city,
  });

  try {
    const forecasts = await nodeapiserver.get('/request/openweathermap', {
      params: { q: city, units: 'metric' },
    });

    dispatch({
      type: WEATHER_FORECAST_SET_STATUS_SUCCESS,
      payload: forecasts.data,
      query: city,
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch({
        type: WEATHER_FORECAST_SET_STATUS_FAILURE,
        status: 404,
        query: city,
      });
    } else {
      dispatch({
        type: WEATHER_FORECAST_SET_STATUS_FAILURE,
        status: 500,
        query: city,
      });
    }
  }
};
