import { nodeapiserver } from '@lib/api';
import {
  WEATHER_FORECASTS_FETCH_REQUEST,
  WEATHER_FORECASTS_FETCH_SUCCESS,
  WEATHER_FORECASTS_FETCH_FAILURE,
  WEATHER_FORECASTS_REMOVE_ITEM,
  WEATHER_FORECASTS_DISABLE_ERROR,
  WEATHER_FORECASTS_VIEW_CHANGED,
  WEATHER_CITY_SELECTED,
  WEATHER_TIME_PERIOD_CHANGED,
} from '@redux/types';

export const forecastsFetch = (city) => async (dispatch) => {
  dispatch({
    type: WEATHER_FORECASTS_FETCH_REQUEST,
    query: city,
  });

  try {
    const forecasts = await nodeapiserver.get('/request/openweathermap', {
      params: { q: city, units: 'metric' },
    });

    dispatch({
      type: WEATHER_FORECASTS_FETCH_SUCCESS,
      payload: forecasts.data,
      query: city,
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch({
        type: WEATHER_FORECASTS_FETCH_FAILURE,
        status: 404,
        query: city,
      });
    } else {
      dispatch({
        type: WEATHER_FORECASTS_FETCH_FAILURE,
        status: 500,
        query: city,
      });
    }
  }
};

export const forecastsDelete = (id) => ({
  type: WEATHER_FORECASTS_REMOVE_ITEM,
  id,
});

export const forecastsDisableError = () => ({
  type: WEATHER_FORECASTS_DISABLE_ERROR,
});

export const forecastsViewMode = (view = 'line') => ({
  type: WEATHER_FORECASTS_VIEW_CHANGED,
  view,
});

export const citySelected = (city) => ({
  type: WEATHER_CITY_SELECTED,
  city,
});

export const changeTimePeriod = (timePeriod = 'day') => ({
  type: WEATHER_TIME_PERIOD_CHANGED,
  timePeriod,
});
